n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(793030),
    a = n(442837),
    s = n(481060),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(699516),
    p = n(5192),
    h = n(785717),
    f = n(221292),
    g = n(687158),
    m = n(316027),
    b = n(502762),
    y = n(848780),
    _ = n(907179),
    j = n(671955),
    x = n(388032),
    O = n(491010),
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
function I(e) {
    let { user: t, channel: n, onHide: I } = e,
        E = (0, g.ZP)(t.id),
        S = (0, o.ZP)(),
        Z = (0, a.e7)([u.Z], () => u.Z.isBlocked(t.id)),
        { analyticsLocations: T } = (0, d.ZP)(Z ? c.Z.BLOCKED_PROFILE_PANEL : c.Z.IGNORED_PROFILE_PANEL),
        P = (0, h.ZB)({
            layout: "SIDEBAR",
            userId: t.id,
            channelId: n.id,
        }),
        N = i.useRef(null);
    return (0, r.jsx)(d.Gt, {
        value: T,
        children: (0, r.jsx)(h.Mt, {
            value: P,
            fetchStartedAt: null == E ? void 0 : E.fetchStartedAt,
            fetchEndedAt: null == E ? void 0 : E.fetchEndedAt,
            isLoaded: null == E ? void 0 : E.isLoaded,
            children: (0, r.jsx)(b.Z, {
                ref: N,
                user: t,
                displayProfile: E,
                themeType: j.l.SIDEBAR,
                themeOverride: S,
                children: (0, r.jsx)(l.u2D, {
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
                                                children: x.intl.string(x.t.b33pLC),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                children: x.intl.format(Z ? x.t["8F+WNz"] : x.t["/cZp5u"], {
                                                    username: p.ZP.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(s.Kqy, {
                                        align: "center",
                                        children: [
                                            (0, r.jsx)(_.Z, {
                                                isBlocked: Z,
                                                onClick: () => {
                                                    I(),
                                                        (0, f.pQ)(
                                                            C(
                                                                {
                                                                    action: Z
                                                                        ? "VIEW_BLOCKED_PROFILE"
                                                                        : "VIEW_IGNORED_PROFILE",
                                                                    analyticsLocations: T,
                                                                },
                                                                P,
                                                            ),
                                                        );
                                                },
                                            }),
                                            (0, r.jsx)(y.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    I(),
                                                        (0, f.pQ)(
                                                            C(
                                                                {
                                                                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                    analyticsLocations: T,
                                                                },
                                                                P,
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
