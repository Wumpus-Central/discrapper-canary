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
    y = t(544989),
    I = t(30556),
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
            sourceAnalyticsLocations: F = [],
        } = e,
        V = C === T.ME ? void 0 : C,
        G = (0, u.ZP)(n.id, V),
        z = c.ZP.getName(V, _, n),
        W = (0, a.Dt)(),
        { analyticsLocations: K } = (0, s.ZP)([...F, o.Z.USER_PROFILE_MODAL]),
        Y = (0, d.ZB)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: R,
            guildId: V,
            channelId: _,
            messageId: w,
            roleId: D,
        }),
        H = (0, N.Z)(n);
    return (0, l.jsx)(s.Gt, {
        value: K,
        children: (0, l.jsx)(d.Mt, {
            value: Y,
            openedAt: k,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, l.jsx)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: U,
                className: S.root,
                hideShadow: !0,
                "aria-labelledby": W,
                parentComponent: "BotUserProfileModal",
                children: (0, l.jsx)(i.y5t, {
                    component: (0, l.jsx)(i.nn4, {
                        children: (0, l.jsx)(i.H, {
                            id: W,
                            children: E.intl.format(E.t.KRe1Fh, { name: z }),
                        }),
                    }),
                    children: (0, l.jsxs)(x.Z, {
                        user: n,
                        displayProfile: G,
                        themeType: A.l.MODAL,
                        children: [
                            (0, l.jsx)(y.Z, {
                                children: (0, l.jsx)(g.Z, {
                                    user: n,
                                    guildId: V,
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
                                                guildId: V,
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
                                                    (0, l.jsx)(I.Z, {
                                                        type: "text",
                                                        userId: n.id,
                                                        onClose: r.Z.popAll,
                                                        className: S.messageTextButton,
                                                    }),
                                                    (0, l.jsx)(I.Z, {
                                                        type: "icon",
                                                        userId: n.id,
                                                        onClose: r.Z.popAll,
                                                        tooltipContainerClassName: S.messageIconButton,
                                                    }),
                                                    (0, l.jsx)(b.Z, {
                                                        user: n,
                                                        guildId: V,
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
                                        guildId: V,
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
                                        guildId: V,
                                        items: H,
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
