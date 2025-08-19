n.d(t, { Z: () => E }), n(388685);
var r = n(951288);
n(647438);
var o = n(481060),
    i = n(572691),
    l = n(100527),
    a = n(906732),
    c = n(313201),
    s = n(5192),
    d = n(785717),
    u = n(687158),
    f = n(899007),
    p = n(648052),
    m = n(867176),
    b = n(681837),
    g = n(502762),
    h = n(530),
    x = n(871604),
    _ = n(952124),
    j = n(53558),
    v = n(544989),
    y = n(30556),
    I = n(4517),
    O = n(740628),
    Z = n(398145),
    P = n(228168),
    T = n(981631),
    C = n(671955),
    A = n(388032),
    N = n(673517);
function E(e) {
    let {
            user: t,
            currentUser: n,
            guildId: E,
            channelId: S,
            messageId: w,
            roleId: B,
            sessionId: L,
            initialSection: D,
            initialSubsection: M,
            transitionState: U,
            openedAt: R,
            onClose: k,
            sourceAnalyticsLocations: G = [],
        } = e,
        V = E === T.ME ? void 0 : E,
        F = (0, u.ZP)(t.id, V),
        Y = s.ZP.getName(V, S, t),
        W = (0, c.Dt)(),
        { analyticsLocations: z } = (0, a.ZP)([...G, l.Z.USER_PROFILE_MODAL]),
        H = (0, d.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: L,
            guildId: V,
            channelId: S,
            messageId: w,
            roleId: B,
        }),
        K = (0, Z.Z)(t);
    return (0, r.jsx)(a.Gt, {
        value: z,
        children: (0, r.jsx)(d.Mt, {
            value: H,
            openedAt: R,
            fetchStartedAt: null == F ? void 0 : F.fetchStartedAt,
            fetchEndedAt: null == F ? void 0 : F.fetchEndedAt,
            isLoaded: null == F ? void 0 : F.isLoaded,
            children: (0, r.jsx)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: U,
                className: N.root,
                hideShadow: !0,
                "aria-labelledby": W,
                parentComponent: "BotUserProfileModal",
                children: (0, r.jsx)(o.y5t, {
                    component: (0, r.jsx)(o.nn4, {
                        children: (0, r.jsx)(o.H, {
                            id: W,
                            children: A.intl.format(A.t.KRe1Fh, { name: Y }),
                        }),
                    }),
                    children: (0, r.jsxs)(g.Z, {
                        user: t,
                        displayProfile: F,
                        themeType: C.l.MODAL,
                        children: [
                            (0, r.jsx)(v.Z, {
                                children: (0, r.jsx)(_.Z, {
                                    user: t,
                                    guildId: V,
                                    onCloseProfile: k,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: F,
                                        themeType: C.l.MODAL,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: N.headerInner,
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                user: t,
                                                displayProfile: F,
                                                guildId: V,
                                                channelId: S,
                                                themeType: C.l.MODAL,
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                location: "BotUserProfileModal",
                                                user: t,
                                                themeType: C.l.MODAL,
                                                hasEntered: U === o.Dvm.ENTERED,
                                                onCloseProfile: k,
                                                disableToolbar: !0,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: N.headerButtons,
                                                children: [
                                                    (0, r.jsx)(y.Z, {
                                                        type: "text",
                                                        userId: t.id,
                                                        onClose: i.Z.popAll,
                                                        className: N.messageTextButton,
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        type: "icon",
                                                        userId: t.id,
                                                        onClose: i.Z.popAll,
                                                        tooltipContainerClassName: N.messageIconButton,
                                                    }),
                                                    (0, r.jsx)(j.Z, {
                                                        user: t,
                                                        guildId: V,
                                                    }),
                                                    (0, r.jsx)(x.Z, { user: t }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: N.body,
                                children: [
                                    (0, r.jsx)(h.Z, {
                                        className: N.username,
                                        user: t,
                                        nickname: Y,
                                        pronouns: null == F ? void 0 : F.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, r.jsx)(b.Z, {
                                            size: "sm",
                                            userId: t.id,
                                        }),
                                        tags: (0, r.jsx)(p.Z, {
                                            displayProfile: F,
                                            themeType: C.l.MODAL,
                                            onClose: k,
                                        }),
                                    }),
                                    (0, r.jsx)(O.Z, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: F,
                                        guildId: V,
                                        items: K,
                                        initialSection: null != D ? D : P.oh.BOT_INFO,
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
