n.d(t, {
    O: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(311907),
    o = n(397927),
    l = n(730134),
    c = n(139286),
    u = n(287809),
    d = n(45787),
    f = n(275759),
    p = n(788868),
    _ = n(778712),
    h = n(985018),
    m = n(357776);

function g(e) {
    let { profileUserId: t } = e,
        n = (0, s.bG)([u.default], () => u.default.getUser(t), [t]),
        g = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        E = (0, s.bG)([f.Ay], () => f.Ay.getFriendAnniversaryYears(t), [t]);
    return (
        i.useEffect(() => {
            (0, c.x)({
                name: a.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
                type: a.ImpressionTypes.VIEW,
                properties: {
                    gift_intent_type: p.np.FRIEND_ANNIVERSARY,
                },
            });
        }, []),
        (0, r.jsxs)("div", {
            className: m.kL,
            children: [
                (0, r.jsx)("div", {
                    className: m.b,
                    children: (0, r.jsx)(o.K0, {
                        icon: o.PGe,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": h.intl.string(h.t.cpT0Cq),
                        onClick: () => (0, d.CK)(t),
                    }),
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: h.intl.string(h.t.icDVNb),
                }),
                (0, r.jsxs)("div", {
                    className: m.SC,
                    children: [
                        null != n &&
                            (0, r.jsx)(l.A, {
                                size: _._3.SIZE_16,
                                user: n,
                            }),
                        null != g &&
                            (0, r.jsx)(l.A, {
                                className: m.GM,
                                size: _._3.SIZE_16,
                                user: g,
                            }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: h.intl.formatToPlainString(h.t.PpG27s, {
                                numberOfYears: E,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
