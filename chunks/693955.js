l.d(s, { A: () => D });
var i = l(627968),
    n = l(64700),
    t = l(17928),
    a = l(793574),
    r = l(70730),
    o = l(275759),
    d = l(503698),
    c = l.n(d),
    u = l(562708),
    h = l(408278),
    A = l(789645),
    p = l(834730),
    x = l(939249),
    m = l(308528),
    v = l(982168),
    g = l(730134),
    C = l(139286),
    f = l(287809),
    E = l(45787),
    j = l(788868),
    I = l(778712),
    N = l(375708),
    _ = l(212583);
function b(e) {
    let { profileUserId: s, shouldBannerBeClickable: l = !1, onClose: a } = e,
        r = (0, t.bG)([f.default], () => f.default.getUser(s), [s]),
        d = (0, t.bG)([f.default], () => f.default.getCurrentUser()),
        b = (0, t.bG)([o.Ay], () => o.Ay.getFriendAnniversaryYears(s), [s]);
    n.useEffect(() => {
        (0, C.x)({
            name: u.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
            type: u.ImpressionTypes.VIEW,
            properties: { gift_intent_type: j.np.FRIEND_ANNIVERSARY },
        });
    }, []);
    let R = n.useCallback(() => {
            m.A.openPrivateChannel({ recipientIds: s }), a?.(), v.A.popAll();
        }, [a, s]),
        P = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: _.b,
                    children: (0, i.jsx)(h.K, {
                        icon: A.P,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": N.intl.string(N.t.cpT0Cq),
                        onClick: (e) => {
                            e.stopPropagation(), (0, E.CK)(s);
                        },
                    }),
                }),
                (0, i.jsx)(p.E, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: N.intl.string(N.t.icDVNb),
                }),
                (0, i.jsxs)("div", {
                    className: _.SC,
                    children: [
                        null != r && (0, i.jsx)(g.A, { size: I._3.SIZE_16, user: r }),
                        null != d && (0, i.jsx)(g.A, { className: _.GM, size: I._3.SIZE_16, user: d }),
                        (0, i.jsx)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: N.intl.formatToPlainString(N.t.PpG27s, { numberOfYears: b }),
                        }),
                    ],
                }),
            ],
        });
    return l
        ? (0, i.jsx)(x.D, { className: c()(_.kL, _.Wk), onClick: R, children: P })
        : (0, i.jsx)("div", { className: _.kL, children: P });
}
var R = l(880528),
    P = l(570287),
    y = l(822775),
    S = l(904290),
    T = l(656884);
function k(e) {
    let { user: s, guildId: l, channelId: n, onClose: t, disableAutoFocus: a, upsellEligible: r } = e,
        o = (0, R.x)().hideDMInput;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r && (0, i.jsx)(b, { profileUserId: s.id, shouldBannerBeClickable: o, onClose: t }),
            !o && (0, i.jsx)(S.A, { user: s, guildId: l, channelId: n, onClose: t, disableAutoFocus: a, upsell: r }),
        ],
    });
}
function D(e) {
    let { user: s, guildId: l, channelId: n, onClose: d, appContext: c, disableAutoFocus: u = !1 } = e,
        h = (0, P.A)(s.id, l),
        A = (0, r.p)(a.A.USER_PROFILE_POPOUT),
        p = (0, t.bG)([o.Ay], () => o.Ay.canShowProfilePopoutGiftIntents(s.id), [s.id]);
    return (0, i.jsxs)("div", {
        className: T.qr,
        children: [
            h &&
                (0, i.jsx)(k, {
                    user: s,
                    guildId: l,
                    channelId: n,
                    onClose: d,
                    disableAutoFocus: u,
                    upsellEligible: A && p,
                }),
            !h && (0, i.jsx)(y.A, { user: s, guildId: l, onClose: d, fullWidth: !0, appContext: c }),
        ],
    });
}
