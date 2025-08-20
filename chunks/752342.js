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
    g = t(502762),
    x = t(530),
    h = t(871604),
    j = t(952124),
    v = t(53558),
    _ = t(544989),
    y = t(30556),
    I = t(4517),
    O = t(740628),
    P = t(398145),
    Z = t(228168),
    T = t(981631),
    A = t(671955),
    C = t(388032),
    N = t(673517);
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
        W = (0, a.Dt)(),
        { analyticsLocations: H } = (0, c.ZP)([...G, i.Z.USER_PROFILE_MODAL]),
        z = (0, d.ZB)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: D,
            guildId: V,
            channelId: S,
            messageId: w,
            roleId: B,
        }),
        K = (0, P.Z)(n);
    return (0, r.jsx)(c.Gt, {
        value: H,
        children: (0, r.jsx)(d.Mt, {
            value: z,
            openedAt: M,
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
                            children: C.intl.format(C.t.KRe1Fh, { name: Y }),
                        }),
                    }),
                    children: (0, r.jsxs)(g.Z, {
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
                                        className: N.headerInner,
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
                                                className: N.headerButtons,
                                                children: [
                                                    (0, r.jsx)(y.Z, {
                                                        type: "text",
                                                        userId: n.id,
                                                        onClose: l.Z.popAll,
                                                        className: N.messageTextButton,
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        type: "icon",
                                                        userId: n.id,
                                                        onClose: l.Z.popAll,
                                                        tooltipContainerClassName: N.messageIconButton,
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
                                className: N.body,
                                children: [
                                    (0, r.jsx)(x.Z, {
                                        className: N.username,
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
                                        items: K,
                                        initialSection: null != L ? L : Z.oh.BOT_INFO,
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
