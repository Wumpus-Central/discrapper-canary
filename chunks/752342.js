t.d(n, { Z: () => C }), t(388685);
var l = t(951288);
t(647438);
var i = t(481060),
    o = t(572691),
    r = t(100527),
    s = t(906732),
    a = t(313201),
    c = t(5192),
    d = t(785717),
    u = t(687158),
    m = t(899007),
    p = t(648052),
    f = t(867176),
    x = t(681837),
    h = t(502762),
    v = t(530),
    j = t(871604),
    g = t(952124),
    b = t(53558),
    I = t(544989),
    y = t(30556),
    _ = t(4517),
    Z = t(740628),
    O = t(398145),
    N = t(228168),
    A = t(981631),
    T = t(671955),
    P = t(388032),
    E = t(673517);
function C(e) {
    let {
            user: n,
            currentUser: t,
            guildId: C,
            channelId: S,
            messageId: w,
            roleId: R,
            sessionId: D,
            initialSection: L,
            initialSubsection: M,
            transitionState: B,
            openedAt: U,
            onClose: k,
            sourceAnalyticsLocations: G = [],
        } = e,
        F = C === A.ME ? void 0 : C,
        V = (0, u.ZP)(n.id, F),
        W = c.ZP.getName(F, S, n),
        H = (0, a.Dt)(),
        { analyticsLocations: z } = (0, s.ZP)([...G, r.Z.USER_PROFILE_MODAL]),
        Y = (0, d.ZB)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: D,
            guildId: F,
            channelId: S,
            messageId: w,
            roleId: R,
        }),
        K = (0, O.Z)(n);
    return (0, l.jsx)(s.Gt, {
        value: z,
        children: (0, l.jsx)(d.Mt, {
            value: Y,
            openedAt: U,
            fetchStartedAt: null == V ? void 0 : V.fetchStartedAt,
            fetchEndedAt: null == V ? void 0 : V.fetchEndedAt,
            isLoaded: null == V ? void 0 : V.isLoaded,
            children: (0, l.jsx)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: B,
                className: E.root,
                hideShadow: !0,
                "aria-labelledby": H,
                parentComponent: "BotUserProfileModal",
                children: (0, l.jsx)(i.y5t, {
                    component: (0, l.jsx)(i.nn4, {
                        children: (0, l.jsx)(i.H, {
                            id: H,
                            children: P.intl.format(P.t.KRe1Fh, { name: W }),
                        }),
                    }),
                    children: (0, l.jsxs)(h.Z, {
                        user: n,
                        displayProfile: V,
                        themeType: T.l.MODAL,
                        children: [
                            (0, l.jsx)(I.Z, {
                                children: (0, l.jsx)(g.Z, {
                                    user: n,
                                    guildId: F,
                                    onCloseProfile: k,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(f.Z, {
                                        user: n,
                                        displayProfile: V,
                                        themeType: T.l.MODAL,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: E.headerInner,
                                        children: [
                                            (0, l.jsx)(m.Z, {
                                                user: n,
                                                displayProfile: V,
                                                guildId: F,
                                                channelId: S,
                                                themeType: T.l.MODAL,
                                            }),
                                            (0, l.jsx)(_.Z, {
                                                user: n,
                                                themeType: T.l.MODAL,
                                                hasEntered: B === i.Dvm.ENTERED,
                                                onCloseProfile: k,
                                                disableToolbar: !0,
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: E.headerButtons,
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        className: E.messageTextButton,
                                                        children: (0, l.jsx)(y.H, {
                                                            variant: "secondary",
                                                            userId: n.id,
                                                            onClose: o.Z.popAll,
                                                        }),
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: E.messageIconButton,
                                                        children: (0, l.jsx)(y.v, {
                                                            variant: "secondary",
                                                            userId: n.id,
                                                            onClose: o.Z.popAll,
                                                        }),
                                                    }),
                                                    (0, l.jsx)(b.Z, {
                                                        user: n,
                                                        guildId: F,
                                                    }),
                                                    (0, l.jsx)(j.Z, { user: n }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: E.body,
                                children: [
                                    (0, l.jsx)(v.Z, {
                                        className: E.username,
                                        user: n,
                                        guildId: F,
                                        nickname: W,
                                        pronouns: null == V ? void 0 : V.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, l.jsx)(x.Z, {
                                            size: "sm",
                                            userId: n.id,
                                        }),
                                        tags: (0, l.jsx)(p.Z, {
                                            displayProfile: V,
                                            themeType: T.l.MODAL,
                                            onClose: k,
                                        }),
                                    }),
                                    (0, l.jsx)(Z.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: V,
                                        guildId: F,
                                        items: K,
                                        initialSection: null != L ? L : N.oh.BOT_INFO,
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
