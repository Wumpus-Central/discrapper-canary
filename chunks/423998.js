n.d(t, { O: () => f });
var i = n(627968),
    l = n(64700),
    s = n(110259),
    a = n(311907),
    r = n(408278),
    o = n(789645),
    d = n(834730),
    c = n(730134),
    u = n(139286),
    h = n(287809),
    A = n(45787),
    x = n(275759),
    v = n(788868),
    m = n(778712),
    g = n(985018),
    p = n(212583);
function f(e) {
    let { profileUserId: t } = e,
        n = (0, a.bG)([h.default], () => h.default.getUser(t), [t]),
        f = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        E = (0, a.bG)([x.Ay], () => x.Ay.getFriendAnniversaryYears(t), [t]);
    return (
        l.useEffect(() => {
            (0, u.x)({
                name: s.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
                type: s.ImpressionTypes.VIEW,
                properties: { gift_intent_type: v.np.FRIEND_ANNIVERSARY },
            });
        }, []),
        (0, i.jsxs)("div", {
            className: p.kL,
            children: [
                (0, i.jsx)("div", {
                    className: p.b,
                    children: (0, i.jsx)(r.K, {
                        icon: o.P,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": g.intl.string(g.t.cpT0Cq),
                        onClick: () => (0, A.CK)(t),
                    }),
                }),
                (0, i.jsx)(d.E, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: g.intl.string(g.t.icDVNb),
                }),
                (0, i.jsxs)("div", {
                    className: p.SC,
                    children: [
                        null != n && (0, i.jsx)(c.A, { size: m._3.SIZE_16, user: n }),
                        null != f && (0, i.jsx)(c.A, { className: p.GM, size: m._3.SIZE_16, user: f }),
                        (0, i.jsx)(d.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: g.intl.formatToPlainString(g.t.PpG27s, { numberOfYears: E }),
                        }),
                    ],
                }),
            ],
        })
    );
}
