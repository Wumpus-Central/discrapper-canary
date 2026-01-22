n.d(t, {
    A: () => S,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    c = n(994500),
    u = n(562153),
    d = n(183555),
    f = n(672385),
    p = n(950191),
    _ = n(249790),
    h = n(946356),
    m = n(254828),
    g = n(783123),
    E = n(996988),
    b = n(985018),
    y = n(612704),
    O = n(911850);

function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}

function S(e) {
    let {
            user: t,
            guildId: n,
            setPopoutRef: A,
            channelId: S,
            messageId: I,
            roleId: T,
            openedAt: C,
            onHide: N,
            newAnalyticsLocations: R = [],
            disableAutoFocus: w = !1,
            onClickContainer: P,
        } = e,
        D = (0, a.bG)([c.A], () => c.A.isBlocked(t.id)),
        { analyticsLocations: x } = (0, l.Ay)([...R, D ? o.A.BLOCKED_PROFILE_POPOUT : o.A.IGNORED_PROFILE_POPOUT]),
        L = (0, d.pb)({
            layout: "POPOUT",
            userId: t.id,
            guildId: n,
            channelId: S,
            messageId: I,
            roleId: T,
        }),
        j = i.useRef(null),
        M = (0, p.Ay)(t.id, n);
    i.useEffect(() => {
        null == A || A(null == j ? void 0 : j.current);
    }, [j, A]);
    let k = D ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        U = w ? "div" : s.lGe;
    return (0, r.jsx)(l.f5, {
        value: x,
        children: (0, r.jsx)(d.of, {
            value: L,
            openedAt: C,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
            children: (0, r.jsx)(U, {
                ref: j,
                "aria-label": t.username,
                onClick: P,
                children: (0, r.jsx)(h.A, {
                    user: t,
                    displayProfile: M,
                    themeType: E.d.POPOUT,
                    children: (0, r.jsxs)("div", {
                        className: y.kL,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                src: O,
                                className: y.VH,
                                "aria-hidden": !0,
                            }),
                            (0, r.jsxs)("div", {
                                className: y.rf,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: y.N1,
                                        children: [
                                            (0, r.jsx)(_.A, {
                                                user: t,
                                                guildId: n,
                                            }),
                                            (0, r.jsx)(s.Heading, {
                                                variant: "heading-lg/bold",
                                                children: b.intl.string(b.t.b33pLD),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                children: b.intl.format(D ? b.t["8F+WNz"] : b.t["/cZp5s"], {
                                                    username: u.Ay.getName(n, S, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(s.BJc, {
                                        align: "center",
                                        children: [
                                            (0, r.jsx)(g.A, {
                                                isBlocked: D,
                                                onClick: () => {
                                                    N(),
                                                        (0, f.Wn)(
                                                            v(
                                                                {
                                                                    action: k,
                                                                    analyticsLocations: x,
                                                                },
                                                                L,
                                                            ),
                                                        );
                                                },
                                            }),
                                            (0, r.jsx)(m.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    N(),
                                                        (0, f.Wn)(
                                                            v(
                                                                {
                                                                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                    analyticsLocations: x,
                                                                },
                                                                L,
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
