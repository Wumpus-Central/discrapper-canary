n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    o = n(665443),
    a = n.n(o),
    s = n(39383),
    l = n.n(s),
    c = n(992774),
    u = n(672784),
    d = n(369711),
    f = n(649754);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    var t, n, r, i;
    let o = null === (i = window) || void 0 === i ? void 0 : null === (r = i.DiscordNative) || void 0 === r ? void 0 : null === (n = r.app) || void 0 === n ? void 0 : null === (t = n.getReleaseChannel) || void 0 === t ? void 0 : t.call(n);
    return 'canary' === o || 'development' === o ? (0, d.m)(e) : (0, u.y)(e);
}
function E(e) {
    var { streamId: t, paused: n, onReady: o, onResize: s, className: u } = e,
        d = h(e, ['streamId', 'paused', 'onReady', 'onResize', 'className']);
    let p = i.useRef(null),
        { current: m } = i.useRef(l()('media-engine-video-'));
    return (
        i.useEffect(() => {
            let e = p.current;
            if (!n && null != e) {
                let n = !1,
                    r = (t, r) => {
                        n || (null == o || o(), (n = !0)),
                            (e.width !== t || e.height !== r) &&
                                ((e.width = t),
                                (e.height = r),
                                null == s ||
                                    s({
                                        width: t,
                                        height: r
                                    }));
                    },
                    i = (0, c.zS)();
                if (null != i.addVideoOutputSink)
                    return (
                        i.addVideoOutputSink(m, t, r),
                        () => {
                            i.removeVideoOutputSink(m, t);
                        }
                    );
                {
                    let n = g(e);
                    if (null == n) return;
                    return (
                        f.Z.addSink(t, p, (e) => {
                            r(e.width, e.height), n.render(e);
                        }),
                        () => {
                            f.Z.removeSink(t, p);
                        }
                    );
                }
            }
        }, [t, n, s, o, m]),
        (0, r.jsx)(
            'canvas',
            _(
                {
                    id: m,
                    className: a()('media-engine-video', u),
                    ref: p
                },
                d
            )
        )
    );
}
E.defaultProps = { paused: !1 };
