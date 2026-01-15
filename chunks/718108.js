n.d(t, { W: () => g });
var r = n(54381),
    i = n(473749),
    a = n(990547),
    o = n(442837),
    s = n(481060),
    l = n(99690),
    c = n(213609),
    u = n(594174),
    d = n(795448),
    f = n(441623),
    p = n(474936),
    _ = n(268685),
    m = n(388032),
    h = n(186120);
function g(e) {
    let { profileUserId: t } = e,
        n = (0, o.e7)([u.default], () => u.default.getUser(t), [t]),
        g = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        E = (0, o.e7)([f.ZP], () => f.ZP.getFriendAnniversaryYears(t), [t]);
    return (
        i.useEffect(() => {
            (0, c.h)({
                name: a.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
                type: a.ImpressionTypes.VIEW,
                properties: { gift_intent_type: p.hX.FRIEND_ANNIVERSARY },
            });
        }, []),
        (0, r.jsxs)("div", {
            className: h.container,
            children: [
                (0, r.jsx)("div", {
                    className: h.closeButton,
                    children: (0, r.jsx)(s.hU, {
                        icon: s.Dio,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": m.intl.string(m.t.cpT0Cq),
                        onClick: () => (0, d.X9)(t),
                    }),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: m.intl.string(m.t.icDVNb),
                }),
                (0, r.jsxs)("div", {
                    className: h.subtitleContainer,
                    children: [
                        null != n &&
                            (0, r.jsx)(l.Z, {
                                size: _.EF.SIZE_16,
                                user: n,
                            }),
                        null != g &&
                            (0, r.jsx)(l.Z, {
                                className: h.currentUserAvatar,
                                size: _.EF.SIZE_16,
                                user: g,
                            }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: m.intl.formatToPlainString(m.t.PpG27s, { numberOfYears: E }),
                        }),
                    ],
                }),
            ],
        })
    );
}
