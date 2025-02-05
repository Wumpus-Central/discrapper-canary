n.d(t, { Z: () => d });
var l = n(251625),
    i = n(823379),
    r = n(981631),
    a = n(388032);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? 3 : e <= 15 ? 10 : 15;
}
function o(e, t) {
    let n = {
            packetsSentOrReceived: 0,
            packetsLost: 0,
            packetLossRate: 0,
            frameRate: 0,
            resolution: 0,
            numDatapoints: 0
        },
        l = e.slice(-1 * t).filter(i.lm);
    if (0 === l.length)
        return {
            type: 'streamer',
            ...n
        };
    l.forEach((e, t, l) => {
        (n.packetsSentOrReceived += t > 0 ? l[t].packetsSentOrReceived - l[t - 1].packetsSentOrReceived : 0), (n.packetsLost += t > 0 ? l[t].packetsLost - l[t - 1].packetsLost : 0), (n.frameRate += e.frameRate), (n.resolution += e.resolution);
    });
    let r = l[0].type,
        a = l.length;
    return {
        type: r,
        packetsSentOrReceived: n.packetsSentOrReceived,
        packetsLost: n.packetsLost,
        packetLossRate: n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
        frameRate: n.frameRate / a,
        resolution: n.resolution / a,
        numDatapoints: a
    };
}
let u = (0, l.oH)((e, t) => ({
    message: e,
    errorType: t
}));
function c(e, t) {
    if ('streamer' === e.type) {
        if (100 * e.packetLossRate > 10) return u(a.intl.string(a.t['1f1LHh']), 'Packet Loss');
        if (e.frameRate <= s(t)) return u(a.intl.string(a.t['1f1LHh']), 'Frame Rate Encode');
    } else {
        if (100 * e.packetLossRate > 10) return u(a.intl.string(a.t.BcOif3), 'Packet Loss');
        if (e.frameRate <= s(t)) return u(a.intl.string(a.t.BcOif3), 'Frame Rate Decode');
    }
    return null;
}
function d(e, t, n, l) {
    if (n) return u(a.intl.string(a.t['9lcycn']), 'Soundshare Failed');
    if (null != t) {
        let e = o(t, 5),
            n = o(t, 30);
        if (n.numDatapoints >= 5) {
            var i;
            return null !== (i = c(e, null == l ? void 0 : l.maxFrameRate)) && void 0 !== i ? i : c(n, null == l ? void 0 : l.maxFrameRate);
        }
    }
    return e === r.IE4.BAD ? u(a.intl.string(a.t.Ic588P), 'Bad Connection') : null;
}
