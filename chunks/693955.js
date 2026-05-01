s.d(i, { A: () => P });
var n = s(627968),
    l = s(64700),
    t = s(17928),
    r = s(793574),
    a = s(70730),
    o = s(275759),
    d = s(110259),
    u = s(408278),
    c = s(789645),
    A = s(834730),
    x = s(730134),
    p = s(139286),
    h = s(287809),
    m = s(45787),
    E = s(788868),
    f = s(778712),
    C = s(985018),
    v = s(212583);
function I(e) {
    let { profileUserId: i } = e,
        s = (0, t.bG)([h.default], () => h.default.getUser(i), [i]),
        r = (0, t.bG)([h.default], () => h.default.getCurrentUser()),
        a = (0, t.bG)([o.Ay], () => o.Ay.getFriendAnniversaryYears(i), [i]);
    return (
        l.useEffect(() => {
            (0, p.x)({
                name: d.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
                type: d.ImpressionTypes.VIEW,
                properties: { gift_intent_type: E.np.FRIEND_ANNIVERSARY },
            });
        }, []),
        (0, n.jsxs)("div", {
            className: v.kL,
            children: [
                (0, n.jsx)("div", {
                    className: v.b,
                    children: (0, n.jsx)(u.K, {
                        icon: c.P,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": C.intl.string(C.t.cpT0Cq),
                        onClick: () => (0, m.CK)(i),
                    }),
                }),
                (0, n.jsx)(A.E, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: C.intl.string(C.t.icDVNb),
                }),
                (0, n.jsxs)("div", {
                    className: v.SC,
                    children: [
                        null != s && (0, n.jsx)(x.A, { size: f._3.SIZE_16, user: s }),
                        null != r && (0, n.jsx)(x.A, { className: v.GM, size: f._3.SIZE_16, user: r }),
                        (0, n.jsx)(A.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: C.intl.formatToPlainString(C.t.PpG27s, { numberOfYears: a }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var g = s(880528),
    j = s(570287),
    _ = s(822775),
    b = s(904290),
    N = s(656884);
function R(e) {
    let { user: i, guildId: s, channelId: l, onClose: t, disableAutoFocus: r, upsellEligible: a } = e,
        o = (0, g.x)().hideDMInput;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            a && (0, n.jsx)(I, { profileUserId: i.id }),
            !o && (0, n.jsx)(b.A, { user: i, guildId: s, channelId: l, onClose: t, disableAutoFocus: r, upsell: a }),
        ],
    });
}
function P(e) {
    let { user: i, guildId: s, channelId: l, onClose: d, appContext: u, disableAutoFocus: c = !1 } = e,
        A = (0, j.A)(i.id, s),
        x = (0, a.p)(r.A.USER_PROFILE_POPOUT),
        p = (0, t.bG)([o.Ay], () => o.Ay.canShowProfilePopoutGiftIntents(i.id), [i.id]);
    return (0, n.jsxs)("div", {
        className: N.qr,
        children: [
            A &&
                (0, n.jsx)(R, {
                    user: i,
                    guildId: s,
                    channelId: l,
                    onClose: d,
                    disableAutoFocus: c,
                    upsellEligible: x && p,
                }),
            !A && (0, n.jsx)(_.A, { user: i, guildId: s, onClose: d, fullWidth: !0, appContext: u }),
        ],
    });
}
