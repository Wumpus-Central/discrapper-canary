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
    p = n(648052),
    m = n(867176),
    g = n(681837),
    b = n(502762),
    h = n(530),
    j = n(871604),
    y = n(952124),
    x = n(53558),
    v = n(544989),
    O = n(30556),
    _ = n(4517),
    I = n(740628),
    P = n(398145),
    E = n(228168),
    Z = n(981631),
    N = n(388032),
    S = n(405666);
function T(e) {
    let {
            user: t,
            currentUser: n,
            guildId: T,
            channelId: A,
            messageId: w,
            roleId: C,
            sessionId: G,
            initialSection: L,
            initialSubsection: M,
            transitionState: R,
            openedAt: D,
            onClose: k,
            sourceAnalyticsLocations: B = [],
        } = e,
        U = T === Z.ME ? void 0 : T,
        F = (0, u.ZP)(t.id, U),
        V = s.ZP.getName(U, A, t),
        Y = (0, c.Dt)(),
        { analyticsLocations: W } = (0, a.ZP)([...B, o.Z.USER_PROFILE_MODAL]),
        H = (0, d.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: G,
            guildId: U,
            channelId: A,
            messageId: w,
            roleId: C,
        }),
        z = (0, P.Z)(t);
    return (0, r.jsx)(a.Gt, {
        value: W,
        children: (0, r.jsx)(d.Mt, {
            value: H,
            openedAt: D,
            fetchStartedAt: null == F ? void 0 : F.fetchStartedAt,
            fetchEndedAt: null == F ? void 0 : F.fetchEndedAt,
            isLoaded: null == F ? void 0 : F.isLoaded,
            children: (0, r.jsx)(l.Y0X, {
                "data-migration-pending": !0,
                transitionState: R,
                className: S.root,
                hideShadow: !0,
                "aria-labelledby": Y,
                parentComponent: "BotUserProfileModal",
                children: (0, r.jsx)(l.y5t, {
                    component: (0, r.jsx)(l.nn4, {
                        children: (0, r.jsx)(l.H, {
                            id: Y,
                            children: N.intl.format(N.t.KRe1Fh, { name: V }),
                        }),
                    }),
                    children: (0, r.jsxs)(b.Z, {
                        user: t,
                        displayProfile: F,
                        themeType: E.lY.MODAL,
                        children: [
                            (0, r.jsx)(v.Z, {
                                children: (0, r.jsx)(y.Z, {
                                    user: t,
                                    guildId: U,
                                    onCloseProfile: k,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: F,
                                        themeType: E.lY.MODAL,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: S.headerInner,
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                user: t,
                                                displayProfile: F,
                                                guildId: U,
                                                channelId: A,
                                                themeType: E.lY.MODAL,
                                            }),
                                            (0, r.jsx)(_.Z, {
                                                location: "BotUserProfileModal",
                                                user: t,
                                                themeType: E.lY.MODAL,
                                                hasEntered: R === l.Dvm.ENTERED,
                                                onCloseProfile: k,
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
                                                    (0, r.jsx)(x.Z, {
                                                        user: t,
                                                        guildId: U,
                                                    }),
                                                    (0, r.jsx)(j.Z, { user: t }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: S.body,
                                children: [
                                    (0, r.jsx)(h.Z, {
                                        className: S.username,
                                        user: t,
                                        nickname: V,
                                        pronouns: null == F ? void 0 : F.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, r.jsx)(g.Z, {
                                            size: "sm",
                                            userId: t.id,
                                        }),
                                        tags: (0, r.jsx)(p.Z, {
                                            displayProfile: F,
                                            themeType: E.lY.MODAL,
                                            onClose: k,
                                        }),
                                    }),
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: F,
                                        guildId: U,
                                        items: z,
                                        initialSection: null != L ? L : E.oh.BOT_INFO,
                                        initialSubsection: M,
                                        onClose: k,
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
