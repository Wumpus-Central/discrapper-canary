n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    a = n(665443),
    s = n.n(a),
    o = n(39383),
    l = n.n(o),
    u = n(992774),
    c = n(672784),
    d = n(369711),
    f = n(649754);
function _(e) {
    var t, n, i, r;
    let a = null === (r = window) || void 0 === r ? void 0 : null === (i = r.DiscordNative) || void 0 === i ? void 0 : null === (n = i.app) || void 0 === n ? void 0 : null === (t = n.getReleaseChannel) || void 0 === t ? void 0 : t.call(n);
    return 'canary' === a || 'development' === a ? (0, d.m)(e) : (0, c.y)(e);
}
function p(e) {
    let { streamId: t, paused: n, onReady: a, onResize: o, className: c, ...d } = e,
        p = r.useRef(null),
        { current: h } = r.useRef(l()('media-engine-video-'));
    return (
        r.useEffect(() => {
            let e = p.current;
            if (!n && null != e) {
                let n = !1,
                    i = (t, i) => {
                        n || (null == a || a(), (n = !0)),
                            (e.width !== t || e.height !== i) &&
                                ((e.width = t),
                                (e.height = i),
                                null == o ||
                                    o({
                                        width: t,
                                        height: i
                                    }));
                    },
                    r = (0, u.zS)();
                if (null != r.addVideoOutputSink)
                    return (
                        r.addVideoOutputSink(h, t, i),
                        () => {
                            r.removeVideoOutputSink(h, t);
                        }
                    );
                {
                    let n = _(e);
                    if (null == n) return;
                    return (
                        f.Z.addSink(t, p, (e) => {
                            i(e.width, e.height), n.render(e);
                        }),
                        () => {
                            f.Z.removeSink(t, p);
                        }
                    );
                }
            }
        }, [t, n, o, a, h]),
        (0, i.jsx)('canvas', {
            id: h,
            className: s()('media-engine-video', c),
            ref: p,
            ...d
        })
    );
}
p.defaultProps = { paused: !1 };
