t.d(n, { Z: () => S }), t(388685);
var l = t(54381);
t(473749);
var i = t(481060),
    o = t(572691),
    r = t(100527),
    s = t(906732),
    a = t(313201),
    c = t(5192),
    d = t(785717),
    u = t(687158),
    m = t(444141),
    p = t(899007),
    f = t(648052),
    x = t(867176),
    h = t(681837),
    v = t(502762),
    j = t(530),
    g = t(871604),
    b = t(952124),
    I = t(53558),
    y = t(544989),
    Z = t(30556),
    _ = t(4517),
    O = t(740628),
    N = t(398145),
    T = t(228168),
    A = t(981631),
    P = t(671955),
    E = t(388032),
    C = t(673517);
function S(e) {
    let {
            user: n,
            currentUser: t,
            guildId: S,
            channelId: w,
            messageId: D,
            roleId: R,
            sessionId: L,
            initialSection: M,
            initialSubsection: B,
            transitionState: U,
            openedAt: k,
            onClose: G,
            sourceAnalyticsLocations: V = [],
            showGuildProfile: F,
        } = e,
        W = S === A.ME ? void 0 : S,
        z = (0, u.ZP)(n.id, F ? W : void 0),
        H = c.ZP.getName(W, w, n),
        Y = (0, a.Dt)(),
        { analyticsLocations: K } = (0, s.ZP)([...V, r.Z.USER_PROFILE_MODAL]),
        J = (0, d.ZB)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: L,
            guildId: W,
            channelId: w,
            messageId: D,
            roleId: R,
        }),
        q = (0, N.Z)(n),
        X = (0, m.Z)({
            user: n,
            guildId: W,
            channelId: w,
            displayProfile: z,
            onClose: G,
        });
    return (0, l.jsx)(s.Gt, {
        value: K,
        children: (0, l.jsx)(d.Mt, {
            value: J,
            openedAt: k,
            fetchStartedAt: null == z ? void 0 : z.fetchStartedAt,
            fetchEndedAt: null == z ? void 0 : z.fetchEndedAt,
            isLoaded: null == z ? void 0 : z.isLoaded,
            children: (0, l.jsx)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: U,
                className: C.root,
                hideShadow: !0,
                "aria-labelledby": Y,
                parentComponent: "BotUserProfileModal",
                children: (0, l.jsx)(i.y5t, {
                    component: (0, l.jsx)(i.nn4, {
                        children: (0, l.jsx)(i.H, {
                            id: Y,
                            children: E.intl.format(E.t.KRe1Fk, { name: H }),
                        }),
                    }),
                    children: (0, l.jsxs)(v.Z, {
                        user: n,
                        displayProfile: z,
                        themeType: P.l.MODAL,
                        children: [
                            (0, l.jsx)(y.Z, {
                                children: (0, l.jsx)(b.Z, {
                                    user: n,
                                    guildId: W,
                                    viewProfileItem: X,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(x.Z, {
                                        user: n,
                                        displayProfile: z,
                                        themeType: P.l.MODAL,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: C.headerInner,
                                        children: [
                                            (0, l.jsx)(p.Z, {
                                                user: n,
                                                displayProfile: z,
                                                guildId: W,
                                                channelId: w,
                                                themeType: P.l.MODAL,
                                            }),
                                            (0, l.jsx)(_.Z, {
                                                user: n,
                                                themeType: P.l.MODAL,
                                                hasEntered: U === i.Dvm.ENTERED,
                                                onCloseProfile: G,
                                                disableToolbar: !0,
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: C.headerButtons,
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        className: C.messageTextButton,
                                                        children: (0, l.jsx)(Z.H, {
                                                            variant: "secondary",
                                                            userId: n.id,
                                                            onClose: o.Z.popAll,
                                                        }),
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: C.messageIconButton,
                                                        children: (0, l.jsx)(Z.v, {
                                                            variant: "secondary",
                                                            userId: n.id,
                                                            onClose: o.Z.popAll,
                                                        }),
                                                    }),
                                                    (0, l.jsx)(I.Z, {
                                                        user: n,
                                                        guildId: W,
                                                    }),
                                                    (0, l.jsx)(g.Z, { user: n }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: C.body,
                                children: [
                                    (0, l.jsx)(j.Z, {
                                        className: C.username,
                                        user: n,
                                        guildId: W,
                                        nickname: H,
                                        pronouns: null == z ? void 0 : z.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, l.jsx)(h.Z, {
                                            size: "sm",
                                            userId: n.id,
                                        }),
                                        tags: (0, l.jsx)(f.Z, {
                                            displayProfile: z,
                                            themeType: P.l.MODAL,
                                            onClose: G,
                                        }),
                                    }),
                                    (0, l.jsx)(O.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: z,
                                        guildId: W,
                                        items: q,
                                        initialSection: null != M ? M : T.oh.BOT_INFO,
                                        initialSubsection: B,
                                        onClose: G,
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
