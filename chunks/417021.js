t.d(l, { A: () => y }), t(896048), t(228524);
var n = t(627968),
    i = t(311907),
    r = t(397927),
    s = t(793574),
    a = t(688810),
    o = t(632738),
    d = t(994500),
    c = t(562153),
    u = t(183555),
    f = t(672385),
    p = t(950191),
    m = t(249790),
    x = t(946356),
    A = t(254828),
    j = t(783123),
    h = t(652215),
    g = t(996988),
    v = t(985018),
    b = t(599929);
function I(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (l) {
                var n;
                (n = t[l]),
                    l in e
                        ? Object.defineProperty(e, l, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[l] = n);
            });
    }
    return e;
}
function y(e) {
    let {
            user: l,
            guildId: t,
            channelId: y,
            messageId: O,
            roleId: N,
            transitionState: E,
            openedAt: _,
            onHide: T,
            sourceAnalyticsLocations: P = [],
        } = e,
        S = t === h.ME ? void 0 : t,
        C = (0, i.bG)([d.A], () => d.A.isBlocked(l.id)),
        { analyticsLocations: L } = (0, a.Ay)([...P, C ? s.A.BLOCKED_PROFILE_MODAL : s.A.IGNORED_PROFILE_MODAL]),
        D = (0, u.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            showGuildProfile: !0,
            guildId: S,
            channelId: y,
            messageId: O,
            roleId: N,
        }),
        R = [
            {
                icon: r.yr3,
                description: v.intl.string(v.t.kcuWva),
            },
            {
                icon: r.yr3,
                description: v.intl.string(C ? v.t.QxrDY1 : v.t.W6fjkS),
            },
        ],
        w = (0, p.Ay)(l.id, S),
        G = c.Ay.getName(null == w ? void 0 : w.guildId, y, l),
        M = v.intl.formatToPlainString(v.t.KRe1Fk, { name: G });
    return (0, n.jsx)(a.f5, {
        value: L,
        children: (0, n.jsx)(u.of, {
            value: D,
            openedAt: _,
            fetchStartedAt: null == w ? void 0 : w.fetchStartedAt,
            fetchEndedAt: null == w ? void 0 : w.fetchEndedAt,
            isLoaded: null == w ? void 0 : w.isLoaded,
            children: (0, n.jsx)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: E,
                className: b.zr,
                "aria-label": M,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, n.jsxs)(x.A, {
                    user: l,
                    displayProfile: w,
                    themeType: g.d.MODAL_V2,
                    children: [
                        (0, n.jsx)("div", { className: b.Tp }),
                        (0, n.jsxs)("div", {
                            className: b.Qs,
                            children: [
                                (0, n.jsx)(m.A, {
                                    user: l,
                                    guildId: S,
                                }),
                                (0, n.jsxs)("div", {
                                    className: b.FS,
                                    children: [
                                        (0, n.jsx)(r.Heading, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: v.intl.string(v.t.b33pLD),
                                        }),
                                        (0, n.jsx)(r.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: v.intl.format(C ? v.t.T7QiLn : v.t.MnEowy, { username: G }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: b.vb,
                                    children: R.map((e, l) => {
                                        let { icon: t, description: i } = e;
                                        return (0, n.jsx)(
                                            o.PQ,
                                            {
                                                icon: t,
                                                title: i,
                                                titleVariant: "text-md/normal",
                                                color: r.LU0.colors.TEXT_DEFAULT.css,
                                            },
                                            l,
                                        );
                                    }),
                                }),
                                (0, n.jsxs)(r.BJc, {
                                    align: "center",
                                    children: [
                                        (0, n.jsx)(j.A, {
                                            size: "md",
                                            isBlocked: C,
                                            onClick: () => {
                                                T(),
                                                    (0, f.Wn)(
                                                        I(
                                                            {
                                                                action: C
                                                                    ? "VIEW_BLOCKED_PROFILE"
                                                                    : "VIEW_IGNORED_PROFILE",
                                                                analyticsLocations: L,
                                                            },
                                                            D,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, n.jsx)(A.A, {
                                            userId: l.id,
                                            onClick: () => {
                                                T(),
                                                    (0, f.Wn)(
                                                        I(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: L,
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
