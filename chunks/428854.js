n.d(t, {
    A: () => g,
    R: () => p,
}),
    n(638769);
var r,
    i = n(627968),
    l = n(64700),
    s = n(36149),
    a = n(923531),
    o = n(207560),
    c = n(287809),
    d = n(64313),
    u = n(380587),
    _ = n(589641),
    p = (((r = {}).CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"), (r.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"), r);
let m = {
    CONTENT_AND_SOCIAL: [
        {
            order: 100,
            predicate: a.$h,
            Component: _.A,
        },
        {
            order: 200,
            predicate: () => {
                var e;
                return (null == (e = c.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
            },
            Component: u.Ev,
        },
        {
            order: 300,
            predicate: () => {
                let e = (0, d.o)("SensitiveContentFiltersNotice");
                return ((0, o.TR)() || e) && !(0, s.Q9)();
            },
            Component: u.Ow,
        },
    ],
    DATA_AND_PRIVACY: [
        {
            order: 100,
            predicate: a.$h,
            Component: _.A,
        },
    ],
};

function g(e) {
    let { page: t } = e,
        n = l.useMemo(() => {
            let e = m[t]
                .filter((e) => e.predicate())
                .sort((e, t) => e.order - t.order)
                .map((e) => e.Component);
            return 0 === e.length ? null : e[0];
        }, [t]);
    return null == n ? null : (0, i.jsx)(n, {}, screen);
}
