r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(665443),
    s = r.n(o),
    l = r(39383),
    u = r.n(l),
    c = r(992774),
    d = r(672784),
    f = r(369711),
    p = r(649754);
function h(e) {
    var n, r, i, a;
    let o = null === (a = window) || void 0 === a ? void 0 : null === (i = a.DiscordNative) || void 0 === i ? void 0 : null === (r = i.app) || void 0 === r ? void 0 : null === (n = r.getReleaseChannel) || void 0 === n ? void 0 : n.call(r);
    return 'canary' === o || 'development' === o ? (0, f.m)(e) : (0, d.y)(e);
}
function _(e) {
    let { streamId: n, paused: r, onReady: o, onResize: l, className: d, ...f } = e,
        _ = a.useRef(null),
        { current: m } = a.useRef(u()('media-engine-video-'));
    return (
        a.useEffect(() => {
            let e = _.current;
            if (!r && null != e) {
                let r = !1,
                    i = (n, i) => {
                        !r && (null == o || o(), (r = !0)),
                            (e.width !== n || e.height !== i) &&
                                ((e.width = n),
                                (e.height = i),
                                null == l ||
                                    l({
                                        width: n,
                                        height: i
                                    }));
                    },
                    a = (0, c.zS)();
                if (null != a.addVideoOutputSink)
                    return (
                        a.addVideoOutputSink(m, n, i),
                        () => {
                            a.removeVideoOutputSink(m, n);
                        }
                    );
                {
                    let r = h(e);
                    if (null == r) return;
                    return (
                        p.Z.addSink(n, _, (e) => {
                            i(e.width, e.height), r.render(e);
                        }),
                        () => {
                            p.Z.removeSink(n, _);
                        }
                    );
                }
            }
        }, [n, r, l, o, m]),
        (0, i.jsx)('canvas', {
            id: m,
            className: s()('media-engine-video', d),
            ref: _,
            ...f
        })
    );
}
_.defaultProps = { paused: !1 };
