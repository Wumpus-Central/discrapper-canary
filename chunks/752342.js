n.d(t, { Z: () => S }), n(388685);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(572691),
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
    j = n(530),
    y = n(871604),
    O = n(952124),
    h = n(53558),
    x = n(544989),
    v = n(30556),
    _ = n(4517),
    I = n(740628),
    P = n(398145),
    E = n(228168),
    T = n(981631),
    Z = n(671955),
    N = n(388032),
    w = n(673517);
function S(e) {
    let {
            user: t,
            currentUser: n,
            guildId: S,
            channelId: A,
            messageId: C,
            roleId: D,
            sessionId: L,
            initialSection: R,
            initialSubsection: G,
            transitionState: k,
            openedAt: B,
            onClose: M,
            sourceAnalyticsLocations: U = [],
        } = e,
        F = S === T.ME ? void 0 : S,
        V = (0, u.ZP)(t.id, F),
        W = s.ZP.getName(F, A, t),
        Y = (0, c.Dt)(),
        { analyticsLocations: z } = (0, a.ZP)([...U, o.Z.USER_PROFILE_MODAL]),
        K = (0, d.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: L,
            guildId: F,
            channelId: A,
            messageId: C,
            roleId: D,
        }),
        H = (0, P.Z)(t);
    return (0, r.jsx)(a.Gt, {
        value: z,
        children: (0, r.jsx)(d.Mt, {
            value: K,
            openedAt: B,
            fetchStartedAt: null == V ? void 0 : V.fetchStartedAt,
            fetchEndedAt: null == V ? void 0 : V.fetchEndedAt,
            isLoaded: null == V ? void 0 : V.isLoaded,
            children: (0, r.jsx)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: k,
                className: w.root,
                hideShadow: !0,
                "aria-labelledby": Y,
                parentComponent: "BotUserProfileModal",
                children: (0, r.jsx)(i.y5t, {
                    component: (0, r.jsx)(i.nn4, {
                        children: (0, r.jsx)(i.H, {
                            id: Y,
                            children: N.intl.format(N.t.KRe1Fh, { name: W }),
                        }),
                    }),
                    children: (0, r.jsxs)(b.Z, {
                        user: t,
                        displayProfile: V,
                        themeType: Z.l.MODAL,
                        children: [
                            (0, r.jsx)(x.Z, {
                                children: (0, r.jsx)(O.Z, {
                                    user: t,
                                    guildId: F,
                                    onCloseProfile: M,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: V,
                                        themeType: Z.l.MODAL,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: w.headerInner,
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                user: t,
                                                displayProfile: V,
                                                guildId: F,
                                                channelId: A,
                                                themeType: Z.l.MODAL,
                                            }),
                                            (0, r.jsx)(_.Z, {
                                                location: "BotUserProfileModal",
                                                user: t,
                                                themeType: Z.l.MODAL,
                                                hasEntered: k === i.Dvm.ENTERED,
                                                onCloseProfile: M,
                                                disableToolbar: !0,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: w.headerButtons,
                                                children: [
                                                    (0, r.jsx)(v.Z, {
                                                        type: "text",
                                                        userId: t.id,
                                                        onClose: l.Z.popAll,
                                                        className: w.messageTextButton,
                                                    }),
                                                    (0, r.jsx)(v.Z, {
                                                        type: "icon",
                                                        userId: t.id,
                                                        onClose: l.Z.popAll,
                                                        tooltipContainerClassName: w.messageIconButton,
                                                    }),
                                                    (0, r.jsx)(h.Z, {
                                                        user: t,
                                                        guildId: F,
                                                    }),
                                                    (0, r.jsx)(y.Z, { user: t }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: w.body,
                                children: [
                                    (0, r.jsx)(j.Z, {
                                        className: w.username,
                                        user: t,
                                        nickname: W,
                                        pronouns: null == V ? void 0 : V.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, r.jsx)(g.Z, {
                                            size: "sm",
                                            userId: t.id,
                                        }),
                                        tags: (0, r.jsx)(p.Z, {
                                            displayProfile: V,
                                            themeType: Z.l.MODAL,
                                            onClose: M,
                                        }),
                                    }),
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: V,
                                        guildId: F,
                                        items: H,
                                        initialSection: null != R ? R : E.oh.BOT_INFO,
                                        initialSubsection: G,
                                        onClose: M,
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
