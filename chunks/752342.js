t.d(n, { Z: () => C }), t(388685);
var r = t(951288);
t(647438);
var l = t(481060),
    o = t(572691),
    i = t(100527),
    c = t(906732),
    s = t(313201),
    a = t(5192),
    d = t(785717),
    u = t(687158),
    f = t(899007),
    m = t(648052),
    p = t(867176),
    h = t(681837),
    x = t(502762),
    b = t(530),
    j = t(871604),
    g = t(952124),
    v = t(53558),
    y = t(544989),
    O = t(30556),
    I = t(4517),
    _ = t(740628),
    Z = t(398145),
    P = t(228168),
    T = t(981631),
    N = t(671955),
    A = t(388032),
    E = t(673517);
function C(e) {
    let {
            user: n,
            currentUser: t,
            guildId: C,
            channelId: S,
            messageId: w,
            roleId: D,
            sessionId: L,
            initialSection: B,
            initialSubsection: R,
            transitionState: U,
            openedAt: M,
            onClose: k,
            sourceAnalyticsLocations: G = [],
        } = e,
        F = C === T.ME ? void 0 : C,
        V = (0, u.ZP)(n.id, F),
        Y = a.ZP.getName(F, S, n),
        W = (0, s.Dt)(),
        { analyticsLocations: z } = (0, c.ZP)([...G, i.Z.USER_PROFILE_MODAL]),
        K = (0, d.ZB)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: L,
            guildId: F,
            channelId: S,
            messageId: w,
            roleId: D,
        }),
        H = (0, Z.Z)(n);
    return (0, r.jsx)(c.Gt, {
        value: z,
        children: (0, r.jsx)(d.Mt, {
            value: K,
            openedAt: M,
            fetchStartedAt: null == V ? void 0 : V.fetchStartedAt,
            fetchEndedAt: null == V ? void 0 : V.fetchEndedAt,
            isLoaded: null == V ? void 0 : V.isLoaded,
            children: (0, r.jsx)(l.Y0X, {
                "data-migration-pending": !0,
                transitionState: U,
                className: E.root,
                hideShadow: !0,
                "aria-labelledby": W,
                parentComponent: "BotUserProfileModal",
                children: (0, r.jsx)(l.y5t, {
                    component: (0, r.jsx)(l.nn4, {
                        children: (0, r.jsx)(l.H, {
                            id: W,
                            children: A.intl.format(A.t.KRe1Fh, { name: Y }),
                        }),
                    }),
                    children: (0, r.jsxs)(x.Z, {
                        user: n,
                        displayProfile: V,
                        themeType: N.l.MODAL,
                        children: [
                            (0, r.jsx)(y.Z, {
                                children: (0, r.jsx)(g.Z, {
                                    user: n,
                                    guildId: F,
                                    onCloseProfile: k,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(p.Z, {
                                        user: n,
                                        displayProfile: V,
                                        themeType: N.l.MODAL,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: E.headerInner,
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                user: n,
                                                displayProfile: V,
                                                guildId: F,
                                                channelId: S,
                                                themeType: N.l.MODAL,
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                user: n,
                                                themeType: N.l.MODAL,
                                                hasEntered: U === l.Dvm.ENTERED,
                                                onCloseProfile: k,
                                                disableToolbar: !0,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: E.headerButtons,
                                                children: [
                                                    (0, r.jsx)(O.Z, {
                                                        type: "text",
                                                        userId: n.id,
                                                        onClose: o.Z.popAll,
                                                        className: E.messageTextButton,
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        type: "icon",
                                                        userId: n.id,
                                                        onClose: o.Z.popAll,
                                                        tooltipContainerClassName: E.messageIconButton,
                                                    }),
                                                    (0, r.jsx)(v.Z, {
                                                        user: n,
                                                        guildId: F,
                                                    }),
                                                    (0, r.jsx)(j.Z, { user: n }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: E.body,
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        className: E.username,
                                        user: n,
                                        nickname: Y,
                                        pronouns: null == V ? void 0 : V.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, r.jsx)(h.Z, {
                                            size: "sm",
                                            userId: n.id,
                                        }),
                                        tags: (0, r.jsx)(m.Z, {
                                            displayProfile: V,
                                            themeType: N.l.MODAL,
                                            onClose: k,
                                        }),
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: V,
                                        guildId: F,
                                        items: H,
                                        initialSection: null != B ? B : P.oh.BOT_INFO,
                                        initialSubsection: R,
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
