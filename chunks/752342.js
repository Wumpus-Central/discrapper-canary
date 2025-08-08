n.d(t, { Z: () => T }), n(388685);
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(572691),
    o = n(100527),
    a = n(906732),
    c = n(313201),
    s = n(5192),
    d = n(785717),
    u = n(687158),
    f = n(899007),
    m = n(648052),
    p = n(867176),
    g = n(681837),
    b = n(502762),
    j = n(530),
    h = n(871604),
    x = n(952124),
    y = n(53558),
    v = n(544989),
    O = n(30556),
    I = n(4517),
    _ = n(740628),
    P = n(398145),
    Z = n(228168),
    N = n(981631),
    E = n(388032),
    S = n(405666);
function T(e) {
    let {
            user: t,
            currentUser: n,
            guildId: T,
            channelId: w,
            messageId: A,
            roleId: C,
            sessionId: L,
            initialSection: k,
            initialSubsection: D,
            transitionState: G,
            openedAt: M,
            onClose: R,
            sourceAnalyticsLocations: B = [],
        } = e,
        U = T === N.ME ? void 0 : T,
        F = (0, u.ZP)(t.id, U),
        V = s.ZP.getName(U, w, t),
        Y = (0, c.Dt)(),
        { analyticsLocations: W } = (0, a.ZP)([...B, o.Z.USER_PROFILE_MODAL]),
        H = (0, d.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: L,
            guildId: U,
            channelId: w,
            messageId: A,
            roleId: C,
        }),
        z = (0, P.Z)(t);
    return (0, r.jsx)(a.Gt, {
        value: W,
        children: (0, r.jsx)(d.Mt, {
            value: H,
            openedAt: M,
            fetchStartedAt: null == F ? void 0 : F.fetchStartedAt,
            fetchEndedAt: null == F ? void 0 : F.fetchEndedAt,
            isLoaded: null == F ? void 0 : F.isLoaded,
            children: (0, r.jsx)(l.Y0X, {
                "data-migration-pending": !0,
                transitionState: G,
                className: S.root,
                hideShadow: !0,
                "aria-labelledby": Y,
                parentComponent: "BotUserProfileModal",
                children: (0, r.jsx)(l.y5t, {
                    component: (0, r.jsx)(l.nn4, {
                        children: (0, r.jsx)(l.H, {
                            id: Y,
                            children: E.intl.format(E.t.KRe1Fh, { name: V }),
                        }),
                    }),
                    children: (0, r.jsxs)(b.Z, {
                        user: t,
                        displayProfile: F,
                        themeType: Z.lY.MODAL,
                        children: [
                            (0, r.jsx)(v.Z, {
                                children: (0, r.jsx)(x.Z, {
                                    user: t,
                                    guildId: U,
                                    onCloseProfile: R,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(p.Z, {
                                        user: t,
                                        displayProfile: F,
                                        themeType: Z.lY.MODAL,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: S.headerInner,
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                user: t,
                                                displayProfile: F,
                                                guildId: U,
                                                channelId: w,
                                                themeType: Z.lY.MODAL,
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                location: "BotUserProfileModal",
                                                user: t,
                                                themeType: Z.lY.MODAL,
                                                hasEntered: G === l.Dvm.ENTERED,
                                                onCloseProfile: R,
                                                disableToolbar: !0,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: S.headerButtons,
                                                children: [
                                                    (0, r.jsx)(O.Z, {
                                                        type: "text",
                                                        userId: t.id,
                                                        onClose: i.Z.popAll,
                                                        className: S.messageTextButton,
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        type: "icon",
                                                        userId: t.id,
                                                        onClose: i.Z.popAll,
                                                        tooltipContainerClassName: S.messageIconButton,
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        user: t,
                                                        guildId: U,
                                                    }),
                                                    (0, r.jsx)(h.Z, { user: t }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: S.body,
                                children: [
                                    (0, r.jsx)(j.Z, {
                                        className: S.username,
                                        user: t,
                                        nickname: V,
                                        pronouns: null == F ? void 0 : F.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, r.jsx)(g.Z, {
                                            size: "sm",
                                            userId: t.id,
                                        }),
                                        tags: (0, r.jsx)(m.Z, {
                                            displayProfile: F,
                                            themeType: Z.lY.MODAL,
                                            onClose: R,
                                        }),
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: F,
                                        guildId: U,
                                        items: z,
                                        initialSection: null != k ? k : Z.oh.BOT_INFO,
                                        initialSubsection: D,
                                        onClose: R,
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
