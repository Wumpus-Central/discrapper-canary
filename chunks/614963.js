n.d(t, {
    H: () => N,
    w: () => T
});
var r = n(798681),
    i = n(785141),
    o = n(70956),
    a = n(251625),
    s = n(823379),
    l = n(981631),
    c = n(388032);
let u = 30,
    d = 15,
    f = 8,
    _ = 3,
    p = 10,
    h = 10,
    m = 5,
    g = 30,
    E = 5,
    b = 10 * o.Z.Millis.SECOND;
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? _ : e <= 15 ? f : e <= 30 ? d : u;
}
function v(e, t) {
    let n = {
            packetsSentOrReceived: 0,
            packetsLost: 0,
            frameRate: 0,
            resolution: 0
        },
        r = e.slice(-1 * t).filter(s.lm);
    if (0 === r.length) return null;
    r.forEach((e, t, r) => {
        (n.packetsSentOrReceived += t > 0 ? r[t].packetsSentOrReceived - r[t - 1].packetsSentOrReceived : 0), (n.packetsLost += t > 0 ? r[t].packetsLost - r[t - 1].packetsLost : 0), (n.frameRate += e.frameRate), (n.resolution += e.resolution);
    });
    let i = r[0].type,
        o = r.length;
    return {
        type: i,
        packetsSentOrReceived: n.packetsSentOrReceived,
        packetsLost: n.packetsLost,
        packetLossRate: n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
        frameRate: n.frameRate / o,
        resolution: n.resolution / o,
        numDatapoints: o
    };
}
let O = (0, a.oH)((e, t, n) => ({
    message: e,
    errorType: t,
    avError: n
}));
function I(e, t, n) {
    if (null == e);
    else if ('sender' === e.type) {
        if (100 * e.packetLossRate > p) return O(c.NW.string(c.t['1f1LHh']), 'Packet Loss', i.u.STREAM_SEND_HIGH_PACKET_LOSS);
        if (e.frameRate <= y(t)) return O(c.NW.string(c.t['1f1LHh']), 'Frame Rate Encode', i.u.STREAM_SEND_LOW_FPS);
    } else if (n) {
        if (100 * e.packetLossRate > p) return O(c.NW.string(c.t.BcOif3), 'Packet Loss', i.u.STREAM_VIEW_HIGH_PACKET_LOSS);
        if (e.frameRate <= y(t)) return O(c.NW.string(c.t.BcOif3), 'Frame Rate Decode', i.u.STREAM_VIEW_LOW_FPS);
    }
    return null;
}
function S(e) {
    return null != e && 'sender' === e.type && e.frameRate <= h ? O(c.NW.string(c.t.YKVlCw), 'Frame Rate Encode', i.u.CAMERA_SEND_LOW_FPS) : null;
}
function T(e, t, n, o) {
    if (n) return O(c.NW.string(c.t['9lcycn']), 'Soundshare Failed', i.u.STREAM_SOUNDSHARE_FAILED);
    if (null != t) {
        let e = v(t, m),
            n = v(t, g),
            i = r.w.isIncomingVideoEnabled() && Date.now() - r.w.lastIncomingVideoEnabledChangeTime() > b;
        if (null != n && n.numDatapoints >= E) {
            var a;
            return null != (a = I(e, null == o ? void 0 : o.maxFrameRate, i)) ? a : I(n, null == o ? void 0 : o.maxFrameRate, i);
        }
    }
    return e === l.IE4.BAD ? O(c.NW.string(c.t.Ic588P), 'Bad Connection', i.u.STREAM_BAD_NETWORK_QUALITY) : null;
}
function N(e) {
    if (null != e) {
        let n = v(e, m),
            r = v(e, g);
        if (null != r && r.numDatapoints >= E) {
            var t;
            return null != (t = S(n)) ? t : S(r);
        }
    }
    return null;
}
