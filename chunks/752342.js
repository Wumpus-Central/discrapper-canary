t.d(n, { Z: () => E }), t(388685);
var r = t(951288);
t(647438);
var o = t(481060),
    l = t(572691),
    i = t(100527),
    c = t(906732),
    a = t(313201),
    s = t(5192),
    d = t(785717),
    u = t(687158),
    f = t(899007),
    m = t(648052),
    p = t(867176),
    b = t(681837),
    x = t(502762),
    g = t(530),
    h = t(871604),
    j = t(952124),
    v = t(53558),
    _ = t(544989),
    y = t(30556),
    I = t(4517),
    O = t(740628),
    Z = t(398145),
    P = t(228168),
    T = t(981631),
    A = t(671955),
    N = t(388032),
    C = t(673517);
function E(e) {
    let {
            user: n,
            currentUser: t,
            guildId: E,
            channelId: S,
            messageId: w,
            roleId: B,
            sessionId: D,
            initialSection: L,
            initialSubsection: R,
            transitionState: U,
            openedAt: M,
            onClose: k,
            sourceAnalyticsLocations: G = [],
        } = e,
        V = E === T.ME ? void 0 : E,
        F = (0, u.ZP)(n.id, V),
        Y = s.ZP.getName(V, S, n),
        z = (0, a.Dt)(),
        { analyticsLocations: W } = (0, c.ZP)([...G, i.Z.USER_PROFILE_MODAL]),
        K = (0, d.ZB)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: D,
            guildId: V,
            channelId: S,
            messageId: w,
            roleId: B,
        }),
        H = (0, Z.Z)(n);
    return (0, r.jsx)(c.Gt, {
        value: W,
        children: (0, r.jsx)(d.Mt, {
            value: K,
            openedAt: M,
            fetchStartedAt: null == F ? void 0 : F.fetchStartedAt,
            fetchEndedAt: null == F ? void 0 : F.fetchEndedAt,
            isLoaded: null == F ? void 0 : F.isLoaded,
            children: (0, r.jsx)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: U,
                className: C.root,
                hideShadow: !0,
                "aria-labelledby": z,
                parentComponent: "BotUserProfileModal",
                children: (0, r.jsx)(o.y5t, {
                    component: (0, r.jsx)(o.nn4, {
                        children: (0, r.jsx)(o.H, {
                            id: z,
                            children: N.intl.format(N.t.KRe1Fh, { name: Y }),
                        }),
                    }),
                    children: (0, r.jsxs)(x.Z, {
                        user: n,
                        displayProfile: F,
                        themeType: A.l.MODAL,
                        children: [
                            (0, r.jsx)(_.Z, {
                                children: (0, r.jsx)(j.Z, {
                                    user: n,
                                    guildId: V,
                                    onCloseProfile: k,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(p.Z, {
                                        user: n,
                                        displayProfile: F,
                                        themeType: A.l.MODAL,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: C.headerInner,
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                user: n,
                                                displayProfile: F,
                                                guildId: V,
                                                channelId: S,
                                                themeType: A.l.MODAL,
                                            }),
                                            (0, r.jsx)(I.Z, {
                                                location: "BotUserProfileModal",
                                                user: n,
                                                themeType: A.l.MODAL,
                                                hasEntered: U === o.Dvm.ENTERED,
                                                onCloseProfile: k,
                                                disableToolbar: !0,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: C.headerButtons,
                                                children: [
                                                    (0, r.jsx)(y.Z, {
                                                        type: "text",
                                                        userId: n.id,
                                                        onClose: l.Z.popAll,
                                                        className: C.messageTextButton,
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        type: "icon",
                                                        userId: n.id,
                                                        onClose: l.Z.popAll,
                                                        tooltipContainerClassName: C.messageIconButton,
                                                    }),
                                                    (0, r.jsx)(v.Z, {
                                                        user: n,
                                                        guildId: V,
                                                    }),
                                                    (0, r.jsx)(h.Z, { user: n }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: C.body,
                                children: [
                                    (0, r.jsx)(g.Z, {
                                        className: C.username,
                                        user: n,
                                        nickname: Y,
                                        pronouns: null == F ? void 0 : F.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, r.jsx)(b.Z, {
                                            size: "sm",
                                            userId: n.id,
                                        }),
                                        tags: (0, r.jsx)(m.Z, {
                                            displayProfile: F,
                                            themeType: A.l.MODAL,
                                            onClose: k,
                                        }),
                                    }),
                                    (0, r.jsx)(O.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: F,
                                        guildId: V,
                                        items: H,
                                        initialSection: null != L ? L : P.oh.BOT_INFO,
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
