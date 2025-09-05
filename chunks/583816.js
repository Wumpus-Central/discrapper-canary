t.d(n, { Z: () => O }), t(388685), t(953529);
var o = t(951288),
    l = t(442837),
    r = t(755721),
    i = t(481060),
    c = t(100527),
    a = t(906732),
    s = t(138201),
    d = t(699516),
    u = t(5192),
    f = t(785717),
    p = t(221292),
    m = t(687158),
    x = t(316027),
    b = t(502762),
    h = t(848780),
    j = t(907179),
    g = t(981631),
    v = t(671955),
    y = t(388032),
    _ = t(220566);
function I(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
function O(e) {
    let {
            user: n,
            guildId: t,
            channelId: O,
            messageId: Z,
            roleId: P,
            transitionState: T,
            openedAt: N,
            onHide: A,
            sourceAnalyticsLocations: C = [],
        } = e,
        E = t === g.ME ? void 0 : t,
        S = (0, l.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        { analyticsLocations: w } = (0, a.ZP)([...C, S ? c.Z.BLOCKED_PROFILE_MODAL : c.Z.IGNORED_PROFILE_MODAL]),
        D = (0, f.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            showGuildProfile: !0,
            guildId: E,
            channelId: O,
            messageId: Z,
            roleId: P,
        }),
        B = [
            {
                icon: i.owK,
                description: y.intl.string(y.t.kcuWvb),
            },
            {
                icon: i.owK,
                description: y.intl.string(S ? y.t.QxrDY2 : y.t.W6fjkZ),
            },
        ],
        L = (0, m.ZP)(n.id, E),
        R = u.ZP.getName(null == L ? void 0 : L.guildId, O, n),
        M = y.intl.formatToPlainString(y.t.KRe1Fh, { name: R });
    return (0, o.jsx)(a.Gt, {
        value: w,
        children: (0, o.jsx)(f.Mt, {
            value: D,
            openedAt: N,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, o.jsx)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: T,
                className: _.root,
                "aria-label": M,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, o.jsxs)(b.Z, {
                    user: n,
                    displayProfile: L,
                    themeType: v.l.MODAL_V2,
                    children: [
                        (0, o.jsx)("div", { className: _.background }),
                        (0, o.jsxs)("div", {
                            className: _.content,
                            children: [
                                (0, o.jsx)(x.Z, {
                                    user: n,
                                    guildId: E,
                                    iconColor: i.TVs.colors.TEXT_DEFAULT,
                                }),
                                (0, o.jsxs)("div", {
                                    className: _.textContainer,
                                    children: [
                                        (0, o.jsx)(i.X6q, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: y.intl.string(y.t.b33pLC),
                                        }),
                                        (0, o.jsx)(i.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: y.intl.format(S ? y.t.T7QiLi : y.t.MnEow8, { username: R }),
                                        }),
                                    ],
                                }),
                                (0, o.jsx)("div", {
                                    className: _.safetyTable,
                                    children: B.map((e, n) => {
                                        let { icon: t, description: l } = e;
                                        return (0, o.jsx)(
                                            s.JZ,
                                            {
                                                icon: t,
                                                title: l,
                                                titleVariant: "text-md/normal",
                                                color: i.TVs.colors.TEXT_DEFAULT.css,
                                            },
                                            n,
                                        );
                                    }),
                                }),
                                (0, o.jsxs)(i.Kqy, {
                                    align: "center",
                                    children: [
                                        (0, o.jsx)(j.Z, {
                                            size: r.Ph.MEDIUM,
                                            isBlocked: S,
                                            onClick: () => {
                                                A(),
                                                    (0, p.pQ)(
                                                        I(
                                                            {
                                                                action: S
                                                                    ? "VIEW_BLOCKED_PROFILE"
                                                                    : "VIEW_IGNORED_PROFILE",
                                                                analyticsLocations: w,
                                                            },
                                                            D,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, o.jsx)(h.Z, {
                                            userId: n.id,
                                            onClick: () => {
                                                A(),
                                                    (0, p.pQ)(
                                                        I(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: w,
                                                            },
                                                            D,
                                                        ),
                                                    );
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
