n.d(t, { Z: () => T });
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
    g = 5,
    E = 30,
    b = 5,
    v = 10 * o.Z.Millis.SECOND;
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? h : e <= 15 ? p : e <= 30 ? _ : f;
}
function O(e, t) {
    let n = {
            packetsSentOrReceived: 0,
            packetsLost: 0,
            packetLossRate: 0,
            frameRate: 0,
            resolution: 0,
            numDatapoints: 0
        },
        r = e.slice(-1 * t).filter(s.lm);
    if (0 === r.length) return d({ type: 'streamer' }, n);
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
let I = (0, a.oH)((e, t, n) => ({
    message: e,
    errorType: t,
    avError: n
}));
function S(e, t, n) {
    if ('streamer' === e.type) {
        if (100 * e.packetLossRate > m) return I(c.NW.string(c.t['1f1LHh']), 'Packet Loss', i.u.STREAM_SEND_HIGH_PACKET_LOSS);
        if (e.frameRate <= y(t)) return I(c.NW.string(c.t['1f1LHh']), 'Frame Rate Encode', i.u.STREAM_SEND_LOW_FPS);
    } else if (n) {
        if (100 * e.packetLossRate > m) return I(c.NW.string(c.t.BcOif3), 'Packet Loss', i.u.STREAM_VIEW_HIGH_PACKET_LOSS);
        if (e.frameRate <= y(t)) return I(c.NW.string(c.t.BcOif3), 'Frame Rate Decode', i.u.STREAM_VIEW_LOW_FPS);
    }
    return null;
}
function T(e, t, n, o) {
    if (n) return I(c.NW.string(c.t['9lcycn']), 'Soundshare Failed', i.u.STREAM_SOUNDSHARE_FAILED);
    if (null != t) {
        let e = O(t, g),
            n = O(t, E),
            i = r.w.isIncomingVideoEnabled() && Date.now() - r.w.lastIncomingVideoEnabledChangeTime() > v;
        if (n.numDatapoints >= b) {
            var a;
            return null !== (a = S(e, null == o ? void 0 : o.maxFrameRate, i)) && void 0 !== a ? a : S(n, null == o ? void 0 : o.maxFrameRate, i);
        }
    }
    return e === l.IE4.BAD ? I(c.NW.string(c.t.Ic588P), 'Bad Connection', i.u.STREAM_BAD_NETWORK_QUALITY) : null;
}
