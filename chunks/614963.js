n.d(t, { Z: () => d });
var i = n(251625),
    l = n(823379),
    a = n(981631),
    r = n(388032);
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
        i = e.slice(-1 * t).filter(l.lm);
    if (0 === i.length)
        return {
            type: 'streamer',
            ...n
        };
    i.forEach((e, t, i) => {
        (n.packetsSentOrReceived += t > 0 ? i[t].packetsSentOrReceived - i[t - 1].packetsSentOrReceived : 0), (n.packetsLost += t > 0 ? i[t].packetsLost - i[t - 1].packetsLost : 0), (n.frameRate += e.frameRate), (n.resolution += e.resolution);
    });
    let a = i[0].type,
        r = i.length;
    return {
        type: a,
        packetsSentOrReceived: n.packetsSentOrReceived,
        packetsLost: n.packetsLost,
        packetLossRate: n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
        frameRate: n.frameRate / r,
        resolution: n.resolution / r,
        numDatapoints: r
    };
}
let c = (0, i.oH)((e, t) => ({
    message: e,
    errorType: t
}));
function u(e, t) {
    if ('streamer' === e.type) {
        if (100 * e.packetLossRate > 10) return c(r.intl.string(r.t['1f1LHh']), 'Packet Loss');
        if (e.frameRate <= s(t)) return c(r.intl.string(r.t['1f1LHh']), 'Frame Rate Encode');
    } else {
        if (100 * e.packetLossRate > 10) return c(r.intl.string(r.t.BcOif3), 'Packet Loss');
        if (e.frameRate <= s(t)) return c(r.intl.string(r.t.BcOif3), 'Frame Rate Decode');
    }
    return null;
}
function d(e, t, n, i) {
    if (n) return c(r.intl.string(r.t['9lcycn']), 'Soundshare Failed');
    if (null != t) {
        let e = o(t, 5),
            n = o(t, 30);
        if (n.numDatapoints >= 5) {
            var l;
            return null !== (l = u(e, null == i ? void 0 : i.maxFrameRate)) && void 0 !== l ? l : u(n, null == i ? void 0 : i.maxFrameRate);
        }
    }
    return e === a.IE4.BAD ? c(r.intl.string(r.t.Ic588P), 'Bad Connection') : null;
}
