t.d(n, { Z: () => _ }), t(388685), t(953529);
var r = t(951288),
    l = t(442837),
    o = t(755721),
    i = t(481060),
    c = t(100527),
    s = t(906732),
    a = t(138201),
    d = t(699516),
    u = t(5192),
    f = t(785717),
    m = t(221292),
    p = t(687158),
    h = t(316027),
    x = t(502762),
    b = t(848780),
    j = t(907179),
    g = t(981631),
    v = t(671955),
    y = t(388032),
    O = t(220566);
function I(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function _(e) {
    let {
            user: n,
            guildId: t,
            channelId: _,
            messageId: Z,
            roleId: P,
            transitionState: T,
            openedAt: N,
            onHide: A,
            sourceAnalyticsLocations: E = [],
        } = e,
        C = t === g.ME ? void 0 : t,
        S = (0, l.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        { analyticsLocations: w } = (0, s.ZP)([...E, S ? c.Z.BLOCKED_PROFILE_MODAL : c.Z.IGNORED_PROFILE_MODAL]),
        D = (0, f.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            showGuildProfile: !0,
            guildId: C,
            channelId: _,
            messageId: Z,
            roleId: P,
        }),
        L = [
            {
                icon: i.owK,
                description: y.intl.string(y.t.kcuWvb),
            },
            {
                icon: i.owK,
                description: y.intl.string(S ? y.t.QxrDY2 : y.t.W6fjkZ),
            },
        ],
        B = (0, p.ZP)(n.id, C),
        R = u.ZP.getName(null == B ? void 0 : B.guildId, _, n),
        U = y.intl.formatToPlainString(y.t.KRe1Fh, { name: R });
    return (0, r.jsx)(s.Gt, {
        value: w,
        children: (0, r.jsx)(f.Mt, {
            value: D,
            openedAt: N,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsx)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: T,
                className: O.root,
                "aria-label": U,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, r.jsxs)(x.Z, {
                    user: n,
                    displayProfile: B,
                    themeType: v.l.MODAL_V2,
                    children: [
                        (0, r.jsx)("div", { className: O.background }),
                        (0, r.jsxs)("div", {
                            className: O.content,
                            children: [
                                (0, r.jsx)(h.Z, {
                                    user: n,
                                    guildId: C,
                                    iconColor: i.TVs.colors.TEXT_DEFAULT,
                                }),
                                (0, r.jsxs)("div", {
                                    className: O.textContainer,
                                    children: [
                                        (0, r.jsx)(i.X6q, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: y.intl.string(y.t.b33pLC),
                                        }),
                                        (0, r.jsx)(i.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: y.intl.format(S ? y.t.T7QiLi : y.t.MnEow8, { username: R }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: O.safetyTable,
                                    children: L.map((e, n) => {
                                        let { icon: t, description: l } = e;
                                        return (0, r.jsx)(
                                            a.JZ,
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
                                (0, r.jsxs)(i.Kqy, {
                                    align: "center",
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            size: o.Ph.MEDIUM,
                                            isBlocked: S,
                                            onClick: () => {
                                                A(),
                                                    (0, m.pQ)(
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
                                        (0, r.jsx)(b.Z, {
                                            userId: n.id,
                                            onClick: () => {
                                                A(),
                                                    (0, m.pQ)(
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
