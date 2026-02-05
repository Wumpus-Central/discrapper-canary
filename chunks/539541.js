"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(782425),
    l = n(201327);
function u(e) {
    let { streamId: t, paused: n = !1, onReady: a, onResize: u, className: c, ...d } = e,
        _ = i.useRef(null),
        f = i.useRef({ width: 0, height: 0 });
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null != e)
            return (
                (0, o.NM)(t),
                (e.srcObject = (0, l.yL)(t)),
                () => {
                    (0, o.gm)(t), (e.srcObject = null), e.load();
                }
            );
    }, [t]),
        i.useEffect(
            () => (
                n ? (_.current?.pause(), (0, o.gm)(t)) : _.current?.play().catch(() => {}),
                () => {
                    n && (0, o.NM)(t);
                }
            ),
            [n],
        );
    let p = i.useCallback(() => {
        let { width: e, height: t } = f.current,
            n = _.current?.videoWidth ?? 0,
            r = _.current?.videoHeight ?? 0;
        if (e !== n || t !== r) {
            let e = { width: n, height: r };
            u?.(e), (f.current = e);
        }
    }, [u]);
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null != e) return e.addEventListener("resize", p), () => e.removeEventListener("resize", p);
    }, [p]);
    let h = i.useCallback(() => {
            a?.();
        }, [a]),
        m = i.useCallback(
            (e) => {
                n || e.currentTarget.play();
            },
            [n],
        );
    return (0, r.jsx)("video", {
        className: s()("media-engine-video", c),
        ref: _,
        autoPlay: !0,
        onPause: m,
        onCanPlayThrough: h,
        muted: !0,
        ...d,
    });
}
