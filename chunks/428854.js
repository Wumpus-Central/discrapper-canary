n.d(t, { A: () => g, R: () => m });
var i,
    s = n(627968),
    r = n(64700),
    a = n(36149),
    l = n(923531),
    o = n(207560),
    c = n(287809),
    d = n(64313),
    u = n(380587),
    _ = n(589641),
    m = (((i = {}).CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"), (i.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"), i);
let A = {
    CONTENT_AND_SOCIAL: [
        { order: 100, predicate: l.$h, Component: _.A },
        { order: 200, predicate: () => c.default.getCurrentUser()?.nsfwAllowed === !1, Component: u.Ev },
        {
            order: 300,
            predicate: () => {
                let e = (0, d.o)("SensitiveContentFiltersNotice");
                return ((0, o.TR)() || e) && !(0, a.Q9)();
            },
            Component: u.Ow,
        },
    ],
    DATA_AND_PRIVACY: [{ order: 100, predicate: l.$h, Component: _.A }],
};
function g(e) {
    let { page: t } = e,
        n = r.useMemo(() => {
            let e = A[t]
                .filter((e) => e.predicate())
                .sort((e, t) => e.order - t.order)
                .map((e) => e.Component);
            return 0 === e.length ? null : e[0];
        }, [t]);
    return null == n ? null : (0, s.jsx)(n, {}, screen);
}
