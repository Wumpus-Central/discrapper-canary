t.d(n, { Z: () => I }), t(388685), t(953529);
var r = t(951288),
    o = t(442837),
    l = t(755721),
    i = t(481060),
    c = t(100527),
    a = t(906732),
    s = t(138201),
    d = t(699516),
    u = t(5192),
    f = t(785717),
    m = t(221292),
    p = t(687158),
    x = t(316027),
    b = t(502762),
    g = t(848780),
    h = t(907179),
    j = t(981631),
    v = t(671955),
    _ = t(388032),
    y = t(220566);
function O(e) {
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
function I(e) {
    let {
            user: n,
            guildId: t,
            channelId: I,
            messageId: Z,
            roleId: P,
            transitionState: T,
            openedAt: N,
            onHide: A,
            sourceAnalyticsLocations: C = [],
        } = e,
        E = t === j.ME ? void 0 : t,
        S = (0, o.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        { analyticsLocations: w } = (0, a.ZP)([...C, S ? c.Z.BLOCKED_PROFILE_MODAL : c.Z.IGNORED_PROFILE_MODAL]),
        B = (0, f.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            showGuildProfile: !0,
            guildId: E,
            channelId: I,
            messageId: Z,
            roleId: P,
        }),
        D = [
            {
                icon: i.owK,
                description: _.intl.string(_.t.kcuWvb),
            },
            {
                icon: i.owK,
                description: _.intl.string(S ? _.t.QxrDY2 : _.t.W6fjkZ),
            },
        ],
        L = (0, p.ZP)(n.id, E),
        R = u.ZP.getName(null == L ? void 0 : L.guildId, I, n),
        U = _.intl.formatToPlainString(_.t.KRe1Fh, { name: R });
    return (0, r.jsx)(a.Gt, {
        value: w,
        children: (0, r.jsx)(f.Mt, {
            value: B,
            openedAt: N,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, r.jsx)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: T,
                className: y.root,
                "aria-label": U,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, r.jsxs)(b.Z, {
                    user: n,
                    displayProfile: L,
                    themeType: v.l.MODAL_V2,
                    children: [
                        (0, r.jsx)("div", { className: y.background }),
                        (0, r.jsxs)("div", {
                            className: y.content,
                            children: [
                                (0, r.jsx)(x.Z, {
                                    user: n,
                                    guildId: E,
                                    iconColor: i.TVs.colors.TEXT_DEFAULT,
                                }),
                                (0, r.jsxs)("div", {
                                    className: y.textContainer,
                                    children: [
                                        (0, r.jsx)(i.X6q, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: _.intl.string(_.t.b33pLC),
                                        }),
                                        (0, r.jsx)(i.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: _.intl.format(S ? _.t.T7QiLi : _.t.MnEow8, { username: R }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: y.safetyTable,
                                    children: D.map((e, n) => {
                                        let { icon: t, description: o } = e;
                                        return (0, r.jsx)(
                                            s.JZ,
                                            {
                                                icon: t,
                                                title: o,
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
                                        (0, r.jsx)(h.Z, {
                                            size: l.Ph.MEDIUM,
                                            isBlocked: S,
                                            onClick: () => {
                                                A(),
                                                    (0, m.pQ)(
                                                        O(
                                                            {
                                                                action: S
                                                                    ? "VIEW_BLOCKED_PROFILE"
                                                                    : "VIEW_IGNORED_PROFILE",
                                                                analyticsLocations: w,
                                                            },
                                                            B,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, r.jsx)(g.Z, {
                                            userId: n.id,
                                            onClick: () => {
                                                A(),
                                                    (0, m.pQ)(
                                                        O(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: w,
                                                            },
                                                            B,
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
