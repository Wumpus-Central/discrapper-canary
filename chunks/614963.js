n.d(t, {
    Z: function () {
        return f;
    }
});
var i,
    l,
    a = n(251625),
    r = n(823379),
    s = n(981631),
    o = n(388032);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? 3 : e <= 15 ? 10 : 15;
}
function u(e, t) {
    let n = {
            packetsSentOrReceived: 0,
            packetsLost: 0,
            packetLossRate: 0,
            frameRate: 0,
            resolution: 0,
            numDatapoints: 0
        },
        i = e.slice(-1 * t).filter(r.lm);
    if (0 === i.length)
        return {
            type: 'streamer',
            ...n
        };
    i.forEach((e, t, i) => {
        (n.packetsSentOrReceived += t > 0 ? i[t].packetsSentOrReceived - i[t - 1].packetsSentOrReceived : 0), (n.packetsLost += t > 0 ? i[t].packetsLost - i[t - 1].packetsLost : 0), (n.frameRate += e.frameRate), (n.resolution += e.resolution);
    });
    let l = i[0].type,
        a = i.length;
    return {
        type: l,
        packetsSentOrReceived: n.packetsSentOrReceived,
        packetsLost: n.packetsLost,
        packetLossRate: n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
        frameRate: n.frameRate / a,
        resolution: n.resolution / a,
        numDatapoints: a
    };
}
((i = l || (l = {})).PACKET_LOSS = 'Packet Loss'), (i.FRAME_RATE_INPUT = 'Frame Rate Encode'), (i.FRAME_RATE_NETWORK = 'Frame Rate Decode'), (i.SOUNDSHARE_FAILED = 'Soundshare Failed'), (i.BAD_CONNECTION = 'Bad Connection');
let d = (0, a.oH)((e, t) => ({
    message: e,
    errorType: t
}));
function m(e, t) {
    if ('streamer' === e.type) {
        if (100 * e.packetLossRate > 10) return d(o.intl.string(o.t['1f1LHh']), 'Packet Loss');
        if (e.frameRate <= c(t)) return d(o.intl.string(o.t['1f1LHh']), 'Frame Rate Encode');
    } else {
        if (100 * e.packetLossRate > 10) return d(o.intl.string(o.t.BcOif3), 'Packet Loss');
        if (e.frameRate <= c(t)) return d(o.intl.string(o.t.BcOif3), 'Frame Rate Decode');
    }
    return null;
}
function f(e, t, n, i) {
    if (n) return d(o.intl.string(o.t['9lcycn']), 'Soundshare Failed');
    if (null != t) {
        let e = u(t, 5),
            n = u(t, 30);
        if (n.numDatapoints >= 5) {
            var l;
            return null !== (l = m(e, null == i ? void 0 : i.maxFrameRate)) && void 0 !== l ? l : m(n, null == i ? void 0 : i.maxFrameRate);
        }
    }
    return e === s.IE4.BAD ? d(o.intl.string(o.t.Ic588P), 'Bad Connection') : null;
}
