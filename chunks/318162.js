n.d(t, {
    A: () => _,
});
var r = n(627968),
    l = n(64700),
    i = n(158954),
    a = n(311907),
    s = n(397927),
    o = n(736653),
    c = n(793574),
    u = n(688810),
    d = n(994500),
    f = n(562153),
    p = n(183555),
    h = n(672385),
    b = n(950191),
    g = n(249790),
    m = n(946356),
    A = n(254828),
    y = n(783123),
    O = n(996988),
    j = n(985018),
    v = n(226632),
    x = n(724693);

function E(e) {
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

function _(e) {
    let { user: t, channel: n, onHide: _ } = e,
        C = (0, b.Ay)(t.id),
        S = (0, o.Ay)(),
        I = (0, a.bG)([d.A], () => d.A.isBlocked(t.id)),
        { analyticsLocations: N } = (0, u.Ay)(I ? c.A.BLOCKED_PROFILE_PANEL : c.A.IGNORED_PROFILE_PANEL),
        T = (0, p.pb)({
            layout: "SIDEBAR",
            userId: t.id,
            channelId: n.id,
        }),
        P = l.useRef(null);
    return (0, r.jsx)(u.f5, {
        value: N,
        children: (0, r.jsx)(p.of, {
            value: T,
            fetchStartedAt: null == C ? void 0 : C.fetchStartedAt,
            fetchEndedAt: null == C ? void 0 : C.fetchEndedAt,
            isLoaded: null == C ? void 0 : C.isLoaded,
            children: (0, r.jsx)(m.A, {
                ref: P,
                user: t,
                displayProfile: C,
                themeType: O.d.SIDEBAR,
                themeOverride: S,
                children: (0, r.jsx)(i.d_W, {
                    children: (0, r.jsxs)("div", {
                        className: v.kL,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                src: x,
                                className: v.VH,
                                "aria-hidden": !0,
                            }),
                            (0, r.jsxs)("div", {
                                className: v.rf,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: v.N1,
                                        children: [
                                            (0, r.jsx)(g.A, {
                                                user: t,
                                            }),
                                            (0, r.jsx)(s.Heading, {
                                                variant: "heading-lg/bold",
                                                children: j.intl.string(j.t.b33pLD),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                children: j.intl.format(I ? j.t["8F+WNz"] : j.t["/cZp5s"], {
                                                    username: f.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(s.BJc, {
                                        align: "center",
                                        children: [
                                            (0, r.jsx)(y.A, {
                                                isBlocked: I,
                                                onClick: () => {
                                                    _(),
                                                        (0, h.Wn)(
                                                            E(
                                                                {
                                                                    action: I
                                                                        ? "VIEW_BLOCKED_PROFILE"
                                                                        : "VIEW_IGNORED_PROFILE",
                                                                    analyticsLocations: N,
                                                                },
                                                                T,
                                                            ),
                                                        );
                                                },
                                            }),
                                            (0, r.jsx)(A.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    _(),
                                                        (0, h.Wn)(
                                                            E(
                                                                {
                                                                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                    analyticsLocations: N,
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
