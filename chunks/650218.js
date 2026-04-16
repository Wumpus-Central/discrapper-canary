"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(793574),
    l = n(688810),
    u = n(994500),
    c = n(562153),
    d = n(183555),
    _ = n(672385),
    f = n(950191),
    p = n(249790),
    h = n(946356),
    m = n(254828),
    E = n(783123),
    g = n(996988),
    A = n(985018),
    I = n(203531),
    T = n(911850);
function S(e) {
    let {
            user: t,
            guildId: n,
            setPopoutRef: S,
            channelId: y,
            messageId: v,
            roleId: N,
            openedAt: C,
            onHide: R,
            newAnalyticsLocations: O = [],
            disableAutoFocus: b = !1,
            onClickContainer: D,
        } = e,
        L = (0, s.bG)([u.A], () => u.A.isBlocked(t.id)),
        { analyticsLocations: w } = (0, l.Ay)([...O, L ? o.A.BLOCKED_PROFILE_POPOUT : o.A.IGNORED_PROFILE_POPOUT]),
        M = (0, d.pb)({ layout: "POPOUT", userId: t.id, guildId: n, channelId: y, messageId: v, roleId: N }),
        P = i.useRef(null),
        x = (0, f.Ay)(t.id, n);
    i.useEffect(() => {
        S?.(P?.current);
    }, [P, S]);
    let k = L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        U = b ? "div" : a.lGe;
    return (0, r.jsx)(l.f5, {
        value: w,
        children: (0, r.jsx)(d.of, {
            value: M,
            openedAt: C,
            fetchStartedAt: x?.fetchStartedAt,
            fetchEndedAt: x?.fetchEndedAt,
            isLoaded: x?.isLoaded,
            children: (0, r.jsx)(U, {
                ref: P,
                "aria-label": t.username,
                onClick: D,
                children: (0, r.jsx)(h.A, {
                    user: t,
                    displayProfile: x,
                    themeType: g.d.POPOUT,
                    children: (0, r.jsxs)("div", {
                        className: I.kL,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: T, className: I.VH, "aria-hidden": !0 }),
                            (0, r.jsxs)("div", {
                                className: I.rf,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: I.N1,
                                        children: [
                                            (0, r.jsx)(p.A, { user: t, guildId: n }),
                                            (0, r.jsx)(a.Heading, {
                                                variant: "heading-lg/bold",
                                                children: A.intl.string(A.t.b33pLD),
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                variant: "text-sm/medium",
                                                children: A.intl.format(L ? A.t["8F+WNz"] : A.t["/cZp5s"], {
                                                    username: c.Ay.getName(n, y, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(a.BJc, {
                                        align: "center",
                                        children: [
                                            (0, r.jsx)(E.A, {
                                                isBlocked: L,
                                                onClick: () => {
                                                    R(), (0, _.Wn)({ action: k, analyticsLocations: w, ...M });
                                                },
                                            }),
                                            (0, r.jsx)(m.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    R(),
                                                        (0, _.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: w,
                                                            ...M,
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
