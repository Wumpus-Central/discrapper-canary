n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(793574),
    r = n(70730),
    o = n(275759),
    d = n(110259),
    c = n(408278),
    u = n(789645),
    h = n(834730),
    A = n(730134),
    x = n(139286),
    v = n(287809),
    m = n(45787),
    g = n(788868),
    p = n(778712),
    f = n(985018),
    E = n(212583);
function j(e) {
    let { profileUserId: t } = e,
        n = (0, s.bG)([v.default], () => v.default.getUser(t), [t]),
        a = (0, s.bG)([v.default], () => v.default.getCurrentUser()),
        r = (0, s.bG)([o.Ay], () => o.Ay.getFriendAnniversaryYears(t), [t]);
    return (
        l.useEffect(() => {
            (0, x.x)({
                name: d.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
                type: d.ImpressionTypes.VIEW,
                properties: { gift_intent_type: g.np.FRIEND_ANNIVERSARY },
            });
        }, []),
        (0, i.jsxs)("div", {
            className: E.kL,
            children: [
                (0, i.jsx)("div", {
                    className: E.b,
                    children: (0, i.jsx)(c.K, {
                        icon: u.P,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": f.intl.string(f.t.cpT0Cq),
                        onClick: () => (0, m.CK)(t),
                    }),
                }),
                (0, i.jsx)(h.E, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: f.intl.string(f.t.icDVNb),
                }),
                (0, i.jsxs)("div", {
                    className: E.SC,
                    children: [
                        null != n && (0, i.jsx)(A.A, { size: p._3.SIZE_16, user: n }),
                        null != a && (0, i.jsx)(A.A, { className: E.GM, size: p._3.SIZE_16, user: a }),
                        (0, i.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: f.intl.formatToPlainString(f.t.PpG27s, { numberOfYears: r }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var C = n(880528),
    I = n(570287),
    N = n(822775),
    R = n(904290),
    b = n(656884);
function S(e) {
    let { user: t, guildId: n, channelId: l, onClose: s, disableAutoFocus: a, upsellEligible: r } = e,
        o = (0, C.x)().hideDMInput;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r && (0, i.jsx)(j, { profileUserId: t.id }),
            !o && (0, i.jsx)(R.A, { user: t, guildId: n, channelId: l, onClose: s, disableAutoFocus: a, upsell: r }),
        ],
    });
}
function _(e) {
    let { user: t, guildId: n, channelId: l, onClose: d, appContext: c, disableAutoFocus: u = !1 } = e,
        h = (0, I.A)(t.id, n),
        A = (0, r.p)(a.A.USER_PROFILE_POPOUT),
        x = (0, s.bG)([o.Ay], () => o.Ay.canShowProfilePopoutGiftIntents(t.id), [t.id]);
    return (0, i.jsxs)("div", {
        className: b.qr,
        children: [
            h &&
                (0, i.jsx)(S, {
                    user: t,
                    guildId: n,
                    channelId: l,
                    onClose: d,
                    disableAutoFocus: u,
                    upsellEligible: A && x,
                }),
            !h && (0, i.jsx)(N.A, { user: t, guildId: n, onClose: d, fullWidth: !0, appContext: c }),
        ],
    });
}
