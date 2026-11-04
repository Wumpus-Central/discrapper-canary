i.d(t, { Y: () => j, T: () => f });
var r = i(477900),
    s = i(582128),
    n = i(834730),
    a = i(993077),
    l = i(534514),
    c = i(695366),
    d = i(102876),
    o = i(975571),
    u = i(855986),
    A = i(429913),
    m = i(800828),
    p = i(652215),
    h = i(792996),
    x = i(932658);
function N(e) {
    return (0, r.jsx)(d.A, { application: e }, e.id);
}
function f(e) {
    let { userId: t, variant: i = "body-xs/normal", color: a = "text-default", ...l } = e,
        c = (function (e) {
            let t,
                { userId: i, renderApplicationName: r } = e,
                n =
                    ((t = (0, u.bG)([m.A], () => {
                        let e = m.A.getGameRelationshipsForUser(i);
                        if (0 !== e.length) return e[0].applicationId;
                    })),
                    (0, A.h)(t));
            return s.useMemo(
                () =>
                    null != n
                        ? h.intl.format(h.t.rSUACb, {
                              helpdeskArticle: o.A.getArticleURL(p.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                              applicationName: () => r(n),
                          })
                        : h.intl.format(h.t["q+N8L6"], {
                              helpdeskArticle: o.A.getArticleURL(p.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                          }),
                [n, r],
            );
        })({ userId: t, renderApplicationName: N });
    return (0, r.jsx)(n.E, { variant: i, color: a, ...l, children: c });
}
function j(e) {
    let { userId: t } = e;
    return (0, r.jsxs)(a.Z, {
        className: x.ZO,
        children: [
            (0, r.jsxs)("div", {
                className: x.wx,
                children: [
                    (0, r.jsx)(l.D, {
                        variant: "body-md/semibold",
                        color: "text-default",
                        children: h.intl.string(h.t.Iyka0U),
                    }),
                    (0, r.jsx)(c.E, { size: "xs", className: x.Kk }),
                ],
            }),
            (0, r.jsx)(f, { userId: t, variant: "body-md/normal" }),
        ],
    });
}
