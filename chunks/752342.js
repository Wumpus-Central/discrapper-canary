t.d(n, { Z: () => w }), t(388685);
var l = t(54381);
t(473749);
var i = t(481060),
    o = t(572691),
    r = t(100527),
    a = t(906732),
    c = t(313201),
    s = t(5192),
    d = t(785717),
    u = t(687158),
    f = t(444141),
    m = t(104287),
    p = t(899007),
    x = t(648052),
    h = t(867176),
    v = t(407699),
    b = t(502762),
    j = t(530),
    g = t(871604),
    I = t(952124),
    y = t(53558),
    Z = t(544989),
    O = t(30556),
    T = t(4517),
    N = t(740628),
    A = t(398145),
    P = t(228168),
    E = t(981631),
    _ = t(671955),
    C = t(388032),
    S = t(968847);
function w(e) {
    let {
            user: n,
            currentUser: t,
            guildId: w,
            channelId: D,
            messageId: L,
            roleId: R,
            sessionId: M,
            initialTabSection: B,
            initialScrollTarget: U,
            transitionState: k,
            openedAt: G,
            onClose: F,
            sourceAnalyticsLocations: V = [],
            showGuildProfile: W,
        } = e,
        z = w === E.ME ? void 0 : w,
        H = (0, u.ZP)(n.id, W ? z : void 0),
        Y = s.ZP.getName(z, D, n),
        K = (0, c.Dt)(),
        { analyticsLocations: J } = (0, a.ZP)([...V, r.Z.USER_PROFILE_MODAL]),
        q = (0, d.ZB)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: M,
            guildId: z,
            channelId: D,
            messageId: L,
            roleId: R,
        }),
        X = (0, A.Z)(n),
        Q = (0, f.Z)({
            user: n,
            guildId: z,
            channelId: D,
            displayProfile: H,
            onClose: F,
        });
    return (0, l.jsx)(a.Gt, {
        value: J,
        children: (0, l.jsx)(d.Mt, {
            value: q,
            openedAt: G,
            fetchStartedAt: null == H ? void 0 : H.fetchStartedAt,
            fetchEndedAt: null == H ? void 0 : H.fetchEndedAt,
            isLoaded: null == H ? void 0 : H.isLoaded,
            children: (0, l.jsx)(m.n, {
                value: U,
                children: (0, l.jsx)(i.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: k,
                    className: S.root,
                    hideShadow: !0,
                    "aria-labelledby": K,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(i.y5t, {
                        component: (0, l.jsx)(i.nn4, {
                            children: (0, l.jsx)(i.H, {
                                id: K,
                                children: C.intl.format(C.t.KRe1Fk, { name: Y }),
                            }),
                        }),
                        children: (0, l.jsxs)(b.Z, {
                            user: n,
                            displayProfile: H,
                            themeType: _.l.MODAL,
                            children: [
                                (0, l.jsx)(Z.Z, {
                                    children: (0, l.jsx)(I.Z, {
                                        user: n,
                                        guildId: z,
                                        viewProfileItem: Q,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(h.Z, {
                                            user: n,
                                            displayProfile: H,
                                            themeType: _.l.MODAL,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: S.headerInner,
                                            children: [
                                                (0, l.jsx)(p.Z, {
                                                    user: n,
                                                    displayProfile: H,
                                                    guildId: z,
                                                    channelId: D,
                                                    themeType: _.l.MODAL,
                                                }),
                                                (0, l.jsx)(T.Z, {
                                                    user: n,
                                                    themeType: _.l.MODAL,
                                                    hasEntered: k === i.Dvm.ENTERED,
                                                    onCloseProfile: F,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: S.headerButtons,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: S.messageTextButton,
                                                            children: (0, l.jsx)(O.H, {
                                                                variant: "secondary",
                                                                userId: n.id,
                                                                onClose: o.Z.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: S.messageIconButton,
                                                            children: (0, l.jsx)(O.v, {
                                                                variant: "secondary",
                                                                userId: n.id,
                                                                onClose: o.Z.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(y.Z, {
                                                            user: n,
                                                            guildId: z,
                                                        }),
                                                        (0, l.jsx)(g.Z, { user: n }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(v.Z, {
                                    userId: n.id,
                                    className: S.fetchError,
                                }),
                                (0, l.jsxs)("div", {
                                    className: S.body,
                                    children: [
                                        (0, l.jsx)(j.Z, {
                                            className: S.username,
                                            user: n,
                                            guildId: z,
                                            nickname: Y,
                                            pronouns: null == H ? void 0 : H.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, l.jsx)(x.Z, {
                                                displayProfile: H,
                                                themeType: _.l.MODAL,
                                                onClose: F,
                                            }),
                                        }),
                                        (0, l.jsx)(N.Z, {
                                            user: n,
                                            currentUser: t,
                                            displayProfile: H,
                                            guildId: z,
                                            items: X,
                                            initialSection: null != B ? B : P.oh.BOT_INFO,
                                            onClose: F,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        }),
    });
}
