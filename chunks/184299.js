n.d(t, {
    ZP: () => y,
    iF: () => E,
    iw: () => g,
    km: () => b
});
var r = n(781930),
    i = n(372793),
    o = n(731965),
    a = n(433517);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function _(e, t) {
    if ('object' !== h(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' !== h(r)) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
function p(e) {
    var t = _(e, 'string');
    return 'symbol' === h(t) ? t : String(t);
}
function h(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let m = 0.3;
var g = (function (e) {
        return (e.UNKNOWN = 'UNKNOWN'), (e.NOT_STARTED = 'NOT_STARTED'), (e.IN_PROGRESS = 'IN_PROGRESS'), (e.COMPLETED = 'COMPLETED'), e;
    })({}),
    E = (function (e) {
        return (e.NONE = 'NONE'), (e.FETCHING = 'FETCHING'), (e.SUCCESS = 'SUCCESS'), (e.FAILURE = 'FAILURE'), e;
    })({});
let b = (0, i.F)()(
        (0, r.tJ)(
            (e, t) => ({
                volume: m,
                muted: !1,
                transcriptEnabled: !1,
                captionEnabled: !1,
                fullScreenEnabled: !1,
                videoProgress: {},
                transcript: null,
                setVolume: (t) => {
                    (0, o.j)(() => e({ volume: t }));
                },
                setMuted: (t) => {
                    (0, o.j)(() => e({ muted: t }));
                },
                setVideoProgress: (n, r, i) => {
                    var a, s;
                    let c = Math.max(null != (s = null == (a = t().videoProgress[n]) ? void 0 : a.maxTimestampSec) ? s : 0, Math.floor(r));
                    (0, o.j)(() =>
                        e({
                            videoProgress: u(l({}, t().videoProgress), {
                                [n]: {
                                    timestampSec: r,
                                    duration: i,
                                    maxTimestampSec: c
                                }
                            })
                        })
                    );
                },
                setTranscriptEnabled: (t) => {
                    (0, o.j)(() => e({ transcriptEnabled: t }));
                },
                setCaptionEnabled: (t) => {
                    (0, o.j)(() => e({ captionEnabled: t }));
                },
                setFullScreenEnabled: (t) => {
                    (0, o.j)(() => e({ fullScreenEnabled: t }));
                },
                getVideoProgress: (e) => t().videoProgress[e],
                getVideoProgressState: (e) => {
                    let n = t().videoProgress[e];
                    return null == n ? 'UNKNOWN' : 0 === n.timestampSec ? 'NOT_STARTED' : n.timestampSec >= n.duration ? 'COMPLETED' : 'IN_PROGRESS';
                },
                resetQuest: (n) => {
                    (0, o.j)(() => {
                        let r = t().videoProgress,
                            { [n]: i } = r;
                        e({ videoProgress: d(r, [n].map(p)) });
                    });
                },
                setTranscriptAsset: (t) => {
                    (0, o.j)(() => {
                        e({ transcript: t });
                    });
                }
            }),
            {
                name: 'videoQuestUIState',
                storage: (0, r.FL)(() => ({
                    getItem: (e) => {
                        var t;
                        return null != (t = a.K.get(e)) ? t : null;
                    },
                    setItem: (e, t) => a.K.set(e, t),
                    removeItem: (e) => a.K.remove(e)
                })),
                partialize: (e) => ({
                    volume: e.volume,
                    muted: e.muted,
                    videoProgress: e.videoProgress
                }),
                version: 0
            }
        )
    ),
    y = b;
