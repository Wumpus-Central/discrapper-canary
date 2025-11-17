n.d(t, {
    N: () => d,
    Z: () => _,
}),
    n(642613);
var r = n(54381),
    i = n(473749),
    a = n(81643),
    o = n(546791),
    s = n(594174),
    l = n(128064),
    c = n(931461),
    u = n(116233),
    d = (function (e) {
        return (e.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"), (e.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"), e;
    })({});
let f = {
    CONTENT_AND_SOCIAL: [
        {
            order: 100,
            predicate: o.MH,
            Component: u.Z,
        },
        {
            order: 200,
            predicate: () => {
                var e;
                return (null == (e = s.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
            },
            Component: c.c,
        },
        {
            order: 300,
            predicate: () => (0, l.c_)("SensitiveContentFiltersNotice") && !(0, a.kJ)(),
            Component: c.j,
        },
    ],
    DATA_AND_PRIVACY: [
        {
            order: 100,
            predicate: o.MH,
            Component: u.Z,
        },
    ],
};
function _(e) {
    let { page: t } = e,
        n = i.useMemo(() => {
            let e = f[t]
                .filter((e) => e.predicate())
                .sort((e, t) => e.order - t.order)
                .map((e) => e.Component);
            return 0 === e.length ? null : e[0];
        }, [t]);
    return null == n ? null : (0, r.jsx)(n, {}, screen);
}
