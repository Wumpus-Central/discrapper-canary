n.d(t, { A: () => A, R: () => _ });
var i,
    s = n(627968),
    a = n(64700),
    l = n(36149),
    r = n(923531),
    o = n(207560),
    c = n(287809),
    d = n(380587),
    u = n(589641),
    _ = (((i = {}).CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"), (i.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"), i);
let m = {
    CONTENT_AND_SOCIAL: [
        { order: 100, predicate: r.$h, Component: u.A },
        { order: 200, predicate: () => (0, o.TR)() && !(0, l.Q9)(), Component: d.Ow },
        { order: 300, predicate: () => c.default.getCurrentUser()?.nsfwAllowed === !1, Component: d.Ev },
    ],
    DATA_AND_PRIVACY: [{ order: 100, predicate: r.$h, Component: u.A }],
};
function A(e) {
    let { page: t } = e,
        n = a.useMemo(() => {
            let e = m[t]
                .filter((e) => e.predicate())
                .sort((e, t) => e.order - t.order)
                .map((e) => e.Component);
            return 0 === e.length ? null : e[0];
        }, [t]);
    return null == n ? null : (0, s.jsx)(n, {}, screen);
}
