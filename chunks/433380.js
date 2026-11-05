r.d(t, { Y: () => j, T: () => f });
var i = r(477900),
    n = r(582128),
    s = r(834730),
    a = r(993077),
    l = r(534514),
    c = r(695366),
    o = r(102876),
    d = r(975571),
    u = r(855986),
    A = r(429913),
    m = r(800828),
    p = r(652215),
    h = r(792996),
    x = r(932658);
function N(e) {
    return (0, i.jsx)(o.A, { application: e }, e.id);
}
function f(e) {
    let { userId: t, variant: r = "body-xs/normal", color: a = "text-default", ...l } = e,
        c = (function (e) {
            let t,
                { userId: r, renderApplicationName: i } = e,
                s =
                    ((t = (0, u.bG)([m.A], () => {
                        let e = m.A.getGameRelationshipsForUser(r);
                        if (0 !== e.length) return e[0].applicationId;
                    })),
                    (0, A.h)(t));
            return n.useMemo(
                () =>
                    null != s
                        ? h.intl.format(h.t.rSUACb, {
                              helpdeskArticle: d.A.getArticleURL(p.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                              applicationName: () => i(s),
                          })
                        : h.intl.format(h.t["q+N8L6"], {
                              helpdeskArticle: d.A.getArticleURL(p.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                          }),
                [s, i],
            );
        })({ userId: t, renderApplicationName: N });
    return (0, i.jsx)(s.E, { variant: r, color: a, ...l, children: c });
}
function j(e) {
    let { userId: t } = e;
    return (0, i.jsxs)(a.Z, {
        className: x.ZO,
        children: [
            (0, i.jsxs)("div", {
                className: x.wx,
                children: [
                    (0, i.jsx)(l.D, {
                        variant: "body-md/semibold",
                        color: "text-default",
                        children: h.intl.string(h.t.Iyka0U),
                    }),
                    (0, i.jsx)(c.CircleErrorIcon, { size: "xs", className: x.Kk }),
                ],
            }),
            (0, i.jsx)(f, { userId: t, variant: "body-md/normal" }),
        ],
    });
}
