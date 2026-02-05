"use strict";
n.d(t, { A: () => y });
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
    p = n(249790),
    h = n(946356),
    m = n(254828),
    g = n(783123),
    E = n(996988),
    A = n(985018),
    I = n(612704),
    T = n(911850);
function y(e) {
    let {
            user: t,
            guildId: n,
            setPopoutRef: y,
            channelId: S,
            messageId: v,
            roleId: C,
            openedAt: b,
            onHide: N,
            newAnalyticsLocations: R = [],
            disableAutoFocus: O = !1,
            onClickContainer: D,
        } = e,
        L = (0, a.bG)([u.A], () => u.A.isBlocked(t.id)),
        { analyticsLocations: w } = (0, l.Ay)([...R, L ? o.A.BLOCKED_PROFILE_POPOUT : o.A.IGNORED_PROFILE_POPOUT]),
        x = (0, d.pb)({ layout: "POPOUT", userId: t.id, guildId: n, channelId: S, messageId: v, roleId: C }),
        P = i.useRef(null),
        M = (0, f.Ay)(t.id, n);
    i.useEffect(() => {
        y?.(P?.current);
    }, [P, y]);
    let k = L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        U = O ? "div" : s.lGe;
    return (0, r.jsx)(l.f5, {
        value: w,
        children: (0, r.jsx)(d.of, {
            value: x,
            openedAt: b,
            fetchStartedAt: M?.fetchStartedAt,
            fetchEndedAt: M?.fetchEndedAt,
            isLoaded: M?.isLoaded,
            children: (0, r.jsx)(U, {
                ref: P,
                "aria-label": t.username,
                onClick: D,
                children: (0, r.jsx)(h.A, {
                    user: t,
                    displayProfile: M,
                    themeType: E.d.POPOUT,
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
                                            (0, r.jsx)(s.Heading, {
                                                variant: "heading-lg/bold",
                                                children: A.intl.string(A.t.b33pLD),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                children: A.intl.format(L ? A.t["8F+WNz"] : A.t["/cZp5s"], {
                                                    username: c.Ay.getName(n, S, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(s.BJc, {
                                        align: "center",
                                        children: [
                                            (0, r.jsx)(g.A, {
                                                isBlocked: L,
                                                onClick: () => {
                                                    N(), (0, _.Wn)({ action: k, analyticsLocations: w, ...x });
                                                },
                                            }),
                                            (0, r.jsx)(m.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    N(),
                                                        (0, _.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: w,
                                                            ...x,
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
