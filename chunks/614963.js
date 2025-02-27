n.d(t, { Z: () => d });
var r = n(251625),
    i = n(823379),
    l = n(981631),
    o = n(388032);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? 3 : e <= 15 ? 10 : 15;
}
function s(e, t) {
    let n = {
            packetsSentOrReceived: 0,
            packetsLost: 0,
            packetLossRate: 0,
            frameRate: 0,
            resolution: 0,
            numDatapoints: 0
        },
        r = e.slice(-1 * t).filter(i.lm);
    if (0 === r.length)
        return (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({ type: 'streamer' }, n);
    r.forEach((e, t, r) => {
        (n.packetsSentOrReceived += t > 0 ? r[t].packetsSentOrReceived - r[t - 1].packetsSentOrReceived : 0), (n.packetsLost += t > 0 ? r[t].packetsLost - r[t - 1].packetsLost : 0), (n.frameRate += e.frameRate), (n.resolution += e.resolution);
    });
    let l = r[0].type,
        o = r.length;
    return {
        type: l,
        packetsSentOrReceived: n.packetsSentOrReceived,
        packetsLost: n.packetsLost,
        packetLossRate: n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
        frameRate: n.frameRate / o,
        resolution: n.resolution / o,
        numDatapoints: o
    };
}
let c = (0, r.oH)((e, t) => ({
    message: e,
    errorType: t
}));
function u(e, t) {
    if ('streamer' === e.type) {
        if (100 * e.packetLossRate > 10) return c(o.NW.string(o.t['1f1LHh']), 'Packet Loss');
        if (e.frameRate <= a(t)) return c(o.NW.string(o.t['1f1LHh']), 'Frame Rate Encode');
    } else {
        if (100 * e.packetLossRate > 10) return c(o.NW.string(o.t.BcOif3), 'Packet Loss');
        if (e.frameRate <= a(t)) return c(o.NW.string(o.t.BcOif3), 'Frame Rate Decode');
    }
    return null;
}
function d(e, t, n, r) {
    if (n) return c(o.NW.string(o.t['9lcycn']), 'Soundshare Failed');
    if (null != t) {
        let e = s(t, 5),
            n = s(t, 30);
        if (n.numDatapoints >= 5) {
            var i;
            return null !== (i = u(e, null == r ? void 0 : r.maxFrameRate)) && void 0 !== i ? i : u(n, null == r ? void 0 : r.maxFrameRate);
        }
    }
    return e === l.IE4.BAD ? c(o.NW.string(o.t.Ic588P), 'Bad Connection') : null;
}
