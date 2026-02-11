"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    u = n(994500),
    c = n(562153),
    d = n(183555),
    _ = n(672385),
    f = n(950191),
    h = n(249790),
    p = n(946356),
    g = n(254828),
    E = n(783123),
    A = n(996988),
    I = n(985018),
    T = n(54578),
    y = n(911850);
function S(e) {
    let {
            user: t,
            guildId: n,
            setPopoutRef: S,
            channelId: v,
            messageId: C,
            roleId: b,
            openedAt: N,
            onHide: R,
            newAnalyticsLocations: O = [],
            disableAutoFocus: D = !1,
            onClickContainer: L,
        } = e,
        w = (0, a.bG)([u.A], () => u.A.isBlocked(t.id)),
        { analyticsLocations: x } = (0, l.Ay)([...O, w ? o.A.BLOCKED_PROFILE_POPOUT : o.A.IGNORED_PROFILE_POPOUT]),
        P = (0, d.pb)({ layout: "POPOUT", userId: t.id, guildId: n, channelId: v, messageId: C, roleId: b }),
        M = i.useRef(null),
        k = (0, f.Ay)(t.id, n);
    i.useEffect(() => {
        S?.(M?.current);
    }, [M, S]);
    let U = w ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        G = D ? "div" : s.lGe;
    return (0, r.jsx)(l.f5, {
        value: x,
        children: (0, r.jsx)(d.of, {
            value: P,
            openedAt: N,
            fetchStartedAt: k?.fetchStartedAt,
            fetchEndedAt: k?.fetchEndedAt,
            isLoaded: k?.isLoaded,
            children: (0, r.jsx)(G, {
                ref: M,
                "aria-label": t.username,
                onClick: L,
                children: (0, r.jsx)(p.A, {
                    user: t,
                    displayProfile: k,
                    themeType: A.d.POPOUT,
                    children: (0, r.jsxs)("div", {
                        className: T.kL,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: y, className: T.VH, "aria-hidden": !0 }),
                            (0, r.jsxs)("div", {
                                className: T.rf,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: T.N1,
                                        children: [
                                            (0, r.jsx)(h.A, { user: t, guildId: n }),
                                            (0, r.jsx)(s.Heading, {
                                                variant: "heading-lg/bold",
                                                children: I.intl.string(I.t.b33pLD),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                children: I.intl.format(w ? I.t["8F+WNz"] : I.t["/cZp5s"], {
                                                    username: c.Ay.getName(n, v, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(s.BJc, {
                                        align: "center",
                                        children: [
                                            (0, r.jsx)(E.A, {
                                                isBlocked: w,
                                                onClick: () => {
                                                    R(), (0, _.Wn)({ action: U, analyticsLocations: x, ...P });
                                                },
                                            }),
                                            (0, r.jsx)(g.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    R(),
                                                        (0, _.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: x,
                                                            ...P,
                                                        });
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
