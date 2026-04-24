"use strict";
n.d(t, { A: () => R });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(876230),
    c = n(990078),
    u = n(176781),
    d = n(834730),
    h = n(939249),
    m = n(429913),
    p = n(409626),
    f = n(692969),
    g = n(569926),
    _ = n(287809),
    x = n(58703),
    C = n(403362),
    A = n(97808),
    E = n(778712),
    I = n(342296),
    v = n(895054);
function y(e) {
    let { user: t, guildId: n } = e,
        s = i.useRef(null);
    return (0, l.jsx)(I.A, {
        targetElementRef: s,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        children: (e) =>
            (0, l.jsx)(h.D, {
                ...e,
                innerRef: s,
                className: v.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, l.jsx)(A.eu, { src: t.getAvatarURL(n, 24), size: E._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var b = n(922016),
    S = n(433781);
let N = i.lazy(() =>
        n
            .e("46054")
            .then(n.bind(n, 680901))
            .then((e) => ({ default: e.ClipParticipantsList })),
    ),
    j = (e) => {
        let { participants: t, maxVisibleParticipants: n, guildId: s } = e,
            a = i.useRef(null),
            r = (0, i.useCallback)(
                () => (0, l.jsx)(i.Suspense, { fallback: null, children: (0, l.jsx)(N, { users: t, guildId: s }) }),
                [t, s],
            );
        return (0, l.jsx)(b.Y, {
            renderPopout: r,
            targetElementRef: a,
            position: "right",
            children: (e) =>
                (0, l.jsx)(h.D, {
                    ...e,
                    innerRef: a,
                    className: S.x,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick?.(t);
                    },
                    children: (0, l.jsxs)(d.E, {
                        className: S.s,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        children: ["+", t.length - n],
                    }),
                }),
        });
    };
var T = n(985018);
function w(e) {
    let { applicationId: t, separator: n } = e,
        i = (0, m.h)(t),
        { data: s } = (0, g.I)(t),
        a = (0, f.A)({ applicationId: t, location: "ClipEmbed", source: p.Ob.ClipEmbed }),
        r = s?.name ?? i?.name;
    return null == r
        ? null
        : null != a
          ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(h.D, { tag: "span", className: v.On, onClick: a, children: r }), n],
            })
          : (0, l.jsxs)(l.Fragment, { children: [r, n] });
}
let R = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: i,
            title: s,
            guildId: h,
            shareCTA: m,
            playerState: p = o.Q6.PAUSED,
            isControlBarExpanded: f = !0,
            isFullScreen: g = !1,
            showTextContent: A = !0,
        } = e,
        E = (0, r.yK)([_.default], () => n.map((e) => _.default.getUser(e)).filter(C.Vq) ?? []),
        I = null != t ? (0, x.Fe)(new Date(t)) : null;
    return (0, l.jsxs)("div", {
        className: a()(v.oK, { [v.pd]: p === o.Q6.PLAYING && !f, [v.aS]: g }),
        children: [
            (0, l.jsx)("div", { className: v.Lu }),
            (0, l.jsxs)("div", {
                className: v.s$,
                children: [
                    (0, l.jsxs)("div", {
                        className: v.yR,
                        children: [
                            (0, l.jsxs)("div", {
                                className: v.$,
                                children: [
                                    (0, l.jsx)(c.m, {
                                        asContainer: !0,
                                        text: T.intl.string(T.t["/fgfWh"]),
                                        children: (0, l.jsx)(u.x, { className: v.gr, size: "xs", color: "white" }),
                                    }),
                                    A &&
                                        (0, l.jsx)(d.E, {
                                            className: v.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: null != s && s.length > 0 ? s : T.intl.string(T.t.Cyxddp),
                                        }),
                                ],
                            }),
                            A &&
                                (null != i || null != I) &&
                                (0, l.jsxs)(d.E, {
                                    className: v.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, l.jsx)(w, { applicationId: i, separator: null != I ? " \xb7 " : void 0 }),
                                        I,
                                        m,
                                    ],
                                }),
                        ],
                    }),
                    E.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: v.HD,
                            role: "group",
                            "aria-label": T.intl.string(T.t.WTozwe),
                            children: [
                                E.slice(0, 4).map((e) => (0, l.jsx)(y, { user: e, guildId: h }, e.id)),
                                E.length > 4 &&
                                    (0, l.jsx)(j, { participants: E, maxVisibleParticipants: 4, guildId: h }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
