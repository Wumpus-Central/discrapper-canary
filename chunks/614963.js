n.d(t, {
    H: () => C,
    w: () => A
});
var r = n(798681),
    i = n(785141),
    o = n(70956),
    a = n(251625),
    s = n(823379),
    l = n(981631),
    c = n(388032);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = 30,
    _ = 15,
    p = 8,
    h = 3,
    m = 10,
    g = 10,
    E = 5,
    b = 30,
    y = 5,
    v = 10 * o.Z.Millis.SECOND;
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? h : e <= 15 ? p : e <= 30 ? _ : f;
}
function I(e, t) {
    let n = {
            packetsSentOrReceived: 0,
            packetsLost: 0,
            packetLossRate: 0,
            frameRate: 0,
            resolution: 0,
            numDatapoints: 0
        },
        r = e.slice(-1 * t).filter(s.lm);
    if (0 === r.length) return d({ type: 'sender' }, n);
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
let S = (0, a.oH)((e, t, n) => ({
    message: e,
    errorType: t,
    avError: n
}));
function T(e, t, n) {
    if ('sender' === e.type) {
        if (100 * e.packetLossRate > m) return S(c.NW.string(c.t['1f1LHh']), 'Packet Loss', i.u.STREAM_SEND_HIGH_PACKET_LOSS);
        if (e.frameRate <= O(t)) return S(c.NW.string(c.t['1f1LHh']), 'Frame Rate Encode', i.u.STREAM_SEND_LOW_FPS);
    } else if (n) {
        if (100 * e.packetLossRate > m) return S(c.NW.string(c.t.BcOif3), 'Packet Loss', i.u.STREAM_VIEW_HIGH_PACKET_LOSS);
        if (e.frameRate <= O(t)) return S(c.NW.string(c.t.BcOif3), 'Frame Rate Decode', i.u.STREAM_VIEW_LOW_FPS);
    }
    return null;
}
function N(e) {
    return 'sender' === e.type && e.frameRate <= g ? S(c.NW.string(c.t.YKVlCw), 'Frame Rate Encode', i.u.CAMERA_SEND_LOW_FPS) : null;
}
function A(e, t, n, o) {
    if (n) return S(c.NW.string(c.t['9lcycn']), 'Soundshare Failed', i.u.STREAM_SOUNDSHARE_FAILED);
    if (null != t) {
        let e = I(t, E),
            n = I(t, b),
            i = r.w.isIncomingVideoEnabled() && Date.now() - r.w.lastIncomingVideoEnabledChangeTime() > v;
        if (n.numDatapoints >= y) {
            var a;
            return null != (a = T(e, null == o ? void 0 : o.maxFrameRate, i)) ? a : T(n, null == o ? void 0 : o.maxFrameRate, i);
        }
    }
    return e === l.IE4.BAD ? S(c.NW.string(c.t.Ic588P), 'Bad Connection', i.u.STREAM_BAD_NETWORK_QUALITY) : null;
}
function C(e) {
    if (null != e) {
        let n = I(e, E),
            r = I(e, b);
        if (r.numDatapoints >= y) {
            var t;
            return null != (t = N(n)) ? t : N(r);
        }
    }
    return null;
}
