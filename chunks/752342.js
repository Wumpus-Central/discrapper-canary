n.d(t, { Z: () => A }), n(388685);
var r = n(255367);
n(73800);
var l = n(481060),
    o = n(572691),
    i = n(100527),
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
    h = n(952124),
    v = n(53558),
    O = n(544989),
    x = n(30556),
    _ = n(4517),
    I = n(740628),
    P = n(398145),
    E = n(228168),
    Z = n(981631),
    N = n(388032),
    T = n(405666);
function A(e) {
    let {
            user: t,
            currentUser: n,
            guildId: A,
            channelId: S,
            messageId: w,
            roleId: C,
            sessionId: G,
            initialSection: M,
            initialSubsection: L,
            transitionState: R,
            openedAt: D,
            onClose: k,
            sourceAnalyticsLocations: U = [],
        } = e,
        B = A === Z.ME ? void 0 : A,
        F = (0, u.ZP)(t.id, B),
        V = s.ZP.getName(B, S, t),
        Y = (0, c.Dt)(),
        { analyticsLocations: W } = (0, a.ZP)([...U, i.Z.USER_PROFILE_MODAL]),
        J = (0, d.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: G,
            guildId: B,
            channelId: S,
            messageId: w,
            roleId: C,
        }),
        H = (0, P.Z)(t);
    return (0, r.jsx)(a.Gt, {
        value: W,
        children: (0, r.jsx)(d.Mt, {
            value: J,
            openedAt: D,
            fetchStartedAt: null == F ? void 0 : F.fetchStartedAt,
            fetchEndedAt: null == F ? void 0 : F.fetchEndedAt,
            isLoaded: null == F ? void 0 : F.isLoaded,
            children: (0, r.jsx)(l.Y0X, {
                "data-migration-pending": !0,
                transitionState: R,
                className: T.root,
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
                        themeType: E.lY.MODAL,
                        children: [
                            (0, r.jsx)(O.Z, {
                                children: (0, r.jsx)(h.Z, {
                                    user: t,
                                    guildId: B,
                                    onCloseProfile: k,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: F,
                                        themeType: E.lY.MODAL,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: T.headerInner,
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                user: t,
                                                displayProfile: F,
                                                guildId: B,
                                                channelId: S,
                                                themeType: E.lY.MODAL,
                                            }),
                                            (0, r.jsx)(_.Z, {
                                                location: "BotUserProfileModal",
                                                user: t,
                                                themeType: E.lY.MODAL,
                                                hasEntered: R === l.Dvm.ENTERED,
                                                onCloseProfile: k,
                                                disableToolbar: !0,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: T.headerButtons,
                                                children: [
                                                    (0, r.jsx)(x.Z, {
                                                        type: "text",
                                                        userId: t.id,
                                                        onClose: o.Z.popAll,
                                                        className: T.messageTextButton,
                                                    }),
                                                    (0, r.jsx)(x.Z, {
                                                        type: "icon",
                                                        userId: t.id,
                                                        onClose: o.Z.popAll,
                                                        tooltipContainerClassName: T.messageIconButton,
                                                    }),
                                                    (0, r.jsx)(v.Z, {
                                                        user: t,
                                                        guildId: B,
                                                    }),
                                                    (0, r.jsx)(y.Z, { user: t }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: T.body,
                                children: [
                                    (0, r.jsx)(j.Z, {
                                        className: T.username,
                                        user: t,
                                        nickname: V,
                                        pronouns: null == F ? void 0 : F.pronouns,
                                        nicknameVariant: "heading-xl/bold",
                                        nicknameIcons: (0, r.jsx)(g.Z, {
                                            size: "sm",
                                            userId: t.id,
                                        }),
                                        tags: (0, r.jsx)(p.Z, {
                                            displayProfile: F,
                                            themeType: E.lY.MODAL,
                                            onClose: k,
                                        }),
                                    }),
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: F,
                                        guildId: B,
                                        items: H,
                                        initialSection: null != M ? M : E.oh.BOT_INFO,
                                        initialSubsection: L,
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
