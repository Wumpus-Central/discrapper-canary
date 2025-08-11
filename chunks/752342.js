n.d(t, { Z: () => S }), n(388685);
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
    m = n(648052),
    p = n(867176),
    g = n(681837),
    b = n(502762),
    j = n(530),
    h = n(871604),
    x = n(952124),
    y = n(53558),
    v = n(544989),
    O = n(30556),
    _ = n(4517),
    I = n(740628),
    P = n(398145),
    Z = n(228168),
    T = n(981631),
    N = n(388032),
    E = n(405666);
function S(e) {
    let {
            user: t,
            currentUser: n,
            guildId: S,
            channelId: w,
            messageId: A,
            roleId: C,
            sessionId: L,
            initialSection: D,
            initialSubsection: k,
            transitionState: R,
            openedAt: G,
            onClose: B,
            sourceAnalyticsLocations: M = [],
        } = e,
        U = S === T.ME ? void 0 : S,
        F = (0, u.ZP)(t.id, U),
        V = s.ZP.getName(U, w, t),
        Y = (0, c.Dt)(),
        { analyticsLocations: H } = (0, a.ZP)([...M, o.Z.USER_PROFILE_MODAL]),
        W = (0, d.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: L,
            guildId: U,
            channelId: w,
            messageId: A,
            roleId: C,
        }),
        z = (0, P.Z)(t);
    return (0, r.jsx)(a.Gt, {
        value: H,
        children: (0, r.jsx)(d.Mt, {
            value: W,
            openedAt: G,
            fetchStartedAt: null == F ? void 0 : F.fetchStartedAt,
            fetchEndedAt: null == F ? void 0 : F.fetchEndedAt,
            isLoaded: null == F ? void 0 : F.isLoaded,
            children: (0, r.jsx)(l.Y0X, {
                "data-migration-pending": !0,
                transitionState: R,
                className: E.root,
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
                        themeType: Z.lY.MODAL,
                        children: [
                            (0, r.jsx)(v.Z, {
                                children: (0, r.jsx)(x.Z, {
                                    user: t,
                                    guildId: U,
                                    onCloseProfile: B,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(p.Z, {
                                        user: t,
                                        displayProfile: F,
                                        themeType: Z.lY.MODAL,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: E.headerInner,
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                user: t,
                                                displayProfile: F,
                                                guildId: U,
                                                channelId: w,
                                                themeType: Z.lY.MODAL,
                                            }),
                                            (0, r.jsx)(_.Z, {
                                                location: "BotUserProfileModal",
                                                user: t,
                                                themeType: Z.lY.MODAL,
                                                hasEntered: R === l.Dvm.ENTERED,
                                                onCloseProfile: B,
                                                disableToolbar: !0,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: E.headerButtons,
                                                children: [
                                                    (0, r.jsx)(O.Z, {
                                                        type: "text",
                                                        userId: t.id,
                                                        onClose: i.Z.popAll,
                                                        className: E.messageTextButton,
                                                    }),
                                                    (0, r.jsx)(O.Z, {
                                                        type: "icon",
                                                        userId: t.id,
                                                        onClose: i.Z.popAll,
                                                        tooltipContainerClassName: E.messageIconButton,
                                                    }),
                                                    (0, r.jsx)(y.Z, {
                                                        user: t,
                                                        guildId: U,
                                                    }),
                                                    (0, r.jsx)(h.Z, { user: t }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: E.body,
                                children: [
                                    (0, r.jsx)(j.Z, {
                                        className: E.username,
                                        user: t,
                                        nickname: V,
                                        pronouns: null == F ? void 0 : F.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, r.jsx)(g.Z, {
                                            size: "sm",
                                            userId: t.id,
                                        }),
                                        tags: (0, r.jsx)(m.Z, {
                                            displayProfile: F,
                                            themeType: Z.lY.MODAL,
                                            onClose: B,
                                        }),
                                    }),
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: F,
                                        guildId: U,
                                        items: z,
                                        initialSection: null != D ? D : Z.oh.BOT_INFO,
                                        initialSubsection: k,
                                        onClose: B,
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
