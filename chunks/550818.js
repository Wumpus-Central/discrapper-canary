n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(597312),
    a = n(442837),
    s = n(481060),
    o = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(699516),
    h = n(5192),
    p = n(785717),
    f = n(221292),
    g = n(687158),
    m = n(316027),
    b = n(502762),
    y = n(848780),
    x = n(907179),
    _ = n(228168),
    j = n(388032),
    O = n(443773),
    v = n(268293);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e) {
    let { user: t, channel: n, onHide: E } = e,
        S = (0, g.ZP)(t.id),
        I = (0, o.ZP)(),
        Z = (0, a.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: P } = (0, u.ZP)(Z ? c.Z.BLOCKED_PROFILE_PANEL : c.Z.IGNORED_PROFILE_PANEL),
        T = (0, p.ZB)({
            layout: "SIDEBAR",
            userId: t.id,
            channelId: n.id,
        }),
        N = i.useRef(null);
    return (0, r.jsx)(u.Gt, {
        value: P,
        children: (0, r.jsx)(p.Mt, {
            value: T,
            fetchStartedAt: null == S ? void 0 : S.fetchStartedAt,
            fetchEndedAt: null == S ? void 0 : S.fetchEndedAt,
            isLoaded: null == S ? void 0 : S.isLoaded,
            children: (0, r.jsx)(b.Z, {
                ref: N,
                user: t,
                displayProfile: S,
                themeType: _.lY.SIDEBAR,
                themeOverride: I,
                children: (0, r.jsx)(l.u2, {
                    children: (0, r.jsxs)("div", {
                        className: O.container,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                src: v,
                                className: O.preview,
                                "aria-hidden": !0,
                            }),
                            (0, r.jsxs)("div", {
                                className: O.body,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: O.headerContainer,
                                        children: [
                                            (0, r.jsx)(m.Z, { user: t }),
                                            (0, r.jsx)(s.X6q, {
                                                variant: "heading-lg/bold",
                                                children: j.intl.string(j.t.b33pLC),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                children: j.intl.format(Z ? j.t["8F+WNz"] : j.t["/cZp5u"], {
                                                    username: h.ZP.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(s.Kqy, {
                                        align: "center",
                                        children: [
                                            (0, r.jsx)(x.Z, {
                                                isBlocked: Z,
                                                onClick: () => {
                                                    E(),
                                                        (0, f.pQ)(
                                                            C(
                                                                {
                                                                    action: Z
                                                                        ? "VIEW_BLOCKED_PROFILE"
                                                                        : "VIEW_IGNORED_PROFILE",
                                                                    analyticsLocations: P,
                                                                },
                                                                T,
                                                            ),
                                                        );
                                                },
                                            }),
                                            (0, r.jsx)(y.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    E(),
                                                        (0, f.pQ)(
                                                            C(
                                                                {
                                                                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                    analyticsLocations: P,
                                                                },
                                                                T,
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
        }),
    });
}
