n.d(t, {
    A: () => _,
    R: () => f,
}),
    n(638769);
var r = n(627968),
    i = n(64700),
    a = n(36149),
    s = n(923531),
    o = n(207560),
    l = n(287809),
    c = n(64313),
    u = n(380587),
    d = n(589641),
    f = (function (e) {
        return (e.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"), (e.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"), e;
    })({});
let p = {
    CONTENT_AND_SOCIAL: [
        {
            order: 100,
            predicate: s.$h,
            Component: d.A,
        },
        {
            order: 200,
            predicate: () => {
                var e;
                return (null == (e = l.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
            },
            Component: u.Ev,
        },
        {
            order: 300,
            predicate: () => {
                let e = (0, c.o)("SensitiveContentFiltersNotice");
                return ((0, o.TR)() || e) && !(0, a.Q9)();
            },
            Component: u.Ow,
        },
    ],
    DATA_AND_PRIVACY: [
        {
            order: 100,
            predicate: s.$h,
            Component: d.A,
        },
    ],
};
function _(e) {
    let { page: t } = e,
        n = i.useMemo(() => {
            let e = p[t]
                .filter((e) => e.predicate())
                .sort((e, t) => e.order - t.order)
                .map((e) => e.Component);
            return 0 === e.length ? null : e[0];
        }, [t]);
    return null == n ? null : (0, r.jsx)(n, {}, screen);
}
