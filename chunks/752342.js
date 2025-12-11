t.d(n, { Z: () => S }), t(388685);
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
    m = t(899007),
    p = t(648052),
    x = t(867176),
    h = t(407699),
    b = t(502762),
    v = t(530),
    j = t(871604),
    g = t(952124),
    I = t(53558),
    y = t(544989),
    Z = t(30556),
    O = t(4517),
    N = t(740628),
    T = t(398145),
    A = t(228168),
    P = t(981631),
    E = t(671955),
    _ = t(388032),
    C = t(968847);
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
        W = S === P.ME ? void 0 : S,
        H = (0, u.ZP)(n.id, F ? W : void 0),
        z = s.ZP.getName(W, w, n),
        Y = (0, c.Dt)(),
        { analyticsLocations: K } = (0, a.ZP)([...V, r.Z.USER_PROFILE_MODAL]),
        J = (0, d.ZB)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: L,
            guildId: W,
            channelId: w,
            messageId: D,
            roleId: R,
        }),
        q = (0, T.Z)(n),
        X = (0, f.Z)({
            user: n,
            guildId: W,
            channelId: w,
            displayProfile: H,
            onClose: G,
        });
    return (0, l.jsx)(a.Gt, {
        value: K,
        children: (0, l.jsx)(d.Mt, {
            value: J,
            openedAt: k,
            fetchStartedAt: null == H ? void 0 : H.fetchStartedAt,
            fetchEndedAt: null == H ? void 0 : H.fetchEndedAt,
            isLoaded: null == H ? void 0 : H.isLoaded,
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
                            children: _.intl.format(_.t.KRe1Fk, { name: z }),
                        }),
                    }),
                    children: (0, l.jsxs)(b.Z, {
                        user: n,
                        displayProfile: H,
                        themeType: E.l.MODAL,
                        children: [
                            (0, l.jsx)(y.Z, {
                                children: (0, l.jsx)(g.Z, {
                                    user: n,
                                    guildId: W,
                                    viewProfileItem: X,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(x.Z, {
                                        user: n,
                                        displayProfile: H,
                                        themeType: E.l.MODAL,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: C.headerInner,
                                        children: [
                                            (0, l.jsx)(m.Z, {
                                                user: n,
                                                displayProfile: H,
                                                guildId: W,
                                                channelId: w,
                                                themeType: E.l.MODAL,
                                            }),
                                            (0, l.jsx)(O.Z, {
                                                user: n,
                                                themeType: E.l.MODAL,
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
                                                    (0, l.jsx)(j.Z, { user: n }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsx)(h.Z, {
                                userId: n.id,
                                className: C.fetchError,
                            }),
                            (0, l.jsxs)("div", {
                                className: C.body,
                                children: [
                                    (0, l.jsx)(v.Z, {
                                        className: C.username,
                                        user: n,
                                        guildId: W,
                                        nickname: z,
                                        pronouns: null == H ? void 0 : H.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        tags: (0, l.jsx)(p.Z, {
                                            displayProfile: H,
                                            themeType: E.l.MODAL,
                                            onClose: G,
                                        }),
                                    }),
                                    (0, l.jsx)(N.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: H,
                                        guildId: W,
                                        items: q,
                                        initialSection: null != M ? M : A.oh.BOT_INFO,
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
