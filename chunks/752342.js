t.d(n, { Z: () => C }), t(388685);
var l = t(951288);
t(647438);
var i = t(481060),
    r = t(572691),
    o = t(100527),
    s = t(906732),
    a = t(313201),
    c = t(5192),
    d = t(785717),
    u = t(687158),
    m = t(899007),
    p = t(648052),
    f = t(867176),
    h = t(681837),
    x = t(502762),
    j = t(530),
    v = t(871604),
    g = t(952124),
    b = t(53558),
    I = t(544989),
    y = t(30556),
    Z = t(4517),
    O = t(740628),
    N = t(398145),
    P = t(228168),
    T = t(981631),
    A = t(671955),
    E = t(388032),
    S = t(673517);
function C(e) {
    let {
            user: n,
            currentUser: t,
            guildId: C,
            channelId: _,
            messageId: w,
            roleId: D,
            sessionId: R,
            initialSection: L,
            initialSubsection: M,
            transitionState: U,
            openedAt: k,
            onClose: B,
            sourceAnalyticsLocations: V = [],
        } = e,
        F = C === T.ME ? void 0 : C,
        G = (0, u.ZP)(n.id, F),
        z = c.ZP.getName(F, _, n),
        H = (0, a.Dt)(),
        { analyticsLocations: W } = (0, s.ZP)([...V, o.Z.USER_PROFILE_MODAL]),
        K = (0, d.ZB)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: R,
            guildId: F,
            channelId: _,
            messageId: w,
            roleId: D,
        }),
        Y = (0, N.Z)(n);
    return (0, l.jsx)(s.Gt, {
        value: W,
        children: (0, l.jsx)(d.Mt, {
            value: K,
            openedAt: k,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, l.jsx)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: U,
                className: S.root,
                hideShadow: !0,
                "aria-labelledby": H,
                parentComponent: "BotUserProfileModal",
                children: (0, l.jsx)(i.y5t, {
                    component: (0, l.jsx)(i.nn4, {
                        children: (0, l.jsx)(i.H, {
                            id: H,
                            children: E.intl.format(E.t.KRe1Fh, { name: z }),
                        }),
                    }),
                    children: (0, l.jsxs)(x.Z, {
                        user: n,
                        displayProfile: G,
                        themeType: A.l.MODAL,
                        children: [
                            (0, l.jsx)(I.Z, {
                                children: (0, l.jsx)(g.Z, {
                                    user: n,
                                    guildId: F,
                                    onCloseProfile: B,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(f.Z, {
                                        user: n,
                                        displayProfile: G,
                                        themeType: A.l.MODAL,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: S.headerInner,
                                        children: [
                                            (0, l.jsx)(m.Z, {
                                                user: n,
                                                displayProfile: G,
                                                guildId: F,
                                                channelId: _,
                                                themeType: A.l.MODAL,
                                            }),
                                            (0, l.jsx)(Z.Z, {
                                                user: n,
                                                themeType: A.l.MODAL,
                                                hasEntered: U === i.Dvm.ENTERED,
                                                onCloseProfile: B,
                                                disableToolbar: !0,
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: S.headerButtons,
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        className: S.messageTextButton,
                                                        children: (0, l.jsx)(y.H, {
                                                            variant: "secondary",
                                                            userId: n.id,
                                                            onClose: r.Z.popAll,
                                                        }),
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: S.messageIconButton,
                                                        children: (0, l.jsx)(y.v, {
                                                            variant: "secondary",
                                                            userId: n.id,
                                                            onClose: r.Z.popAll,
                                                        }),
                                                    }),
                                                    (0, l.jsx)(b.Z, {
                                                        user: n,
                                                        guildId: F,
                                                    }),
                                                    (0, l.jsx)(v.Z, { user: n }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: S.body,
                                children: [
                                    (0, l.jsx)(j.Z, {
                                        className: S.username,
                                        user: n,
                                        guildId: F,
                                        nickname: z,
                                        pronouns: null == G ? void 0 : G.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, l.jsx)(h.Z, {
                                            size: "sm",
                                            userId: n.id,
                                        }),
                                        tags: (0, l.jsx)(p.Z, {
                                            displayProfile: G,
                                            themeType: A.l.MODAL,
                                            onClose: B,
                                        }),
                                    }),
                                    (0, l.jsx)(O.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: G,
                                        guildId: F,
                                        items: Y,
                                        initialSection: null != L ? L : P.oh.BOT_INFO,
                                        initialSubsection: M,
                                        onClose: B,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
