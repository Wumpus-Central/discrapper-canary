n.d(t, { Z: () => i });
var r = n(192379),
    s = n(442837),
    o = n(522474);
function i(e) {
    let { isPaused: t, onFrame: n, windowKey: i } = e,
        a = (0, r.useRef)(t),
        c = (0, r.useRef)(void 0),
        l = (0, r.useRef)(null),
        u = (0, s.e7)([o.Z], () => o.Z.getWindow(i)),
        d = (0, r.useCallback)(
            (e) => {
                n(null != l.current ? (e - l.current) / 1000 : 0), (l.current = e), a.current || (c.current = null == u ? void 0 : u.requestAnimationFrame(d));
            },
            [u, n]
        );
    (0, r.useEffect)(() => {
        a.current = t;
    }, [t]),
        (0, r.useEffect)(
            () => (
                t || ((l.current = null), (c.current = null == u ? void 0 : u.requestAnimationFrame(d))),
                () => {
                    null != c.current && (null == u || u.cancelAnimationFrame(c.current));
                }
            ),
            [u, t, d]
        ),
        (0, r.useEffect)(
            () => () => {
                null != c.current && (null == u || u.cancelAnimationFrame(c.current));
            },
            [u]
        );
}
