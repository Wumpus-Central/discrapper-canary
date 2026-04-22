"use strict";
i.d(t, { O: () => E });
var n = i(627968),
    r = i(64700),
    a = i(110259),
    l = i(311907),
    s = i(408278),
    o = i(789645),
    c = i(834730),
    d = i(730134),
    u = i(139286),
    _ = i(287809),
    p = i(45787),
    h = i(275759),
    f = i(788868),
    A = i(778712),
    g = i(985018),
    m = i(212583);
function E(e) {
    let { profileUserId: t } = e,
        i = (0, l.bG)([_.default], () => _.default.getUser(t), [t]),
        E = (0, l.bG)([_.default], () => _.default.getCurrentUser()),
        b = (0, l.bG)([h.Ay], () => h.Ay.getFriendAnniversaryYears(t), [t]);
    return (
        r.useEffect(() => {
            (0, u.x)({
                name: a.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
                type: a.ImpressionTypes.VIEW,
                properties: { gift_intent_type: f.np.FRIEND_ANNIVERSARY },
            });
        }, []),
        (0, n.jsxs)("div", {
            className: m.kL,
            children: [
                (0, n.jsx)("div", {
                    className: m.b,
                    children: (0, n.jsx)(s.K, {
                        icon: o.P,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": g.intl.string(g.t.cpT0Cq),
                        onClick: () => (0, p.CK)(t),
                    }),
                }),
                (0, n.jsx)(c.E, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: g.intl.string(g.t.icDVNb),
                }),
                (0, n.jsxs)("div", {
                    className: m.SC,
                    children: [
                        null != i && (0, n.jsx)(d.A, { size: A._3.SIZE_16, user: i }),
                        null != E && (0, n.jsx)(d.A, { className: m.GM, size: A._3.SIZE_16, user: E }),
                        (0, n.jsx)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: g.intl.formatToPlainString(g.t.PpG27s, { numberOfYears: b }),
                        }),
                    ],
                }),
            ],
        })
    );
}
