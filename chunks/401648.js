"use strict";
n.d(t, { A: () => O });
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
    x = n(287809),
    C = n(58703),
    A = n(403362),
    E = n(97808),
    I = n(778712),
    y = n(342296),
    v = n(895054);
function S(e) {
    let { user: t, guildId: n } = e,
        s = i.useRef(null);
    return (0, l.jsx)(y.A, {
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
                children: (0, l.jsx)(E.eu, { src: t.getAvatarURL(n, 24), size: I._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var N = n(922016),
    j = n(433781);
let _ = i.lazy(() =>
        Promise.all([n.e("17179"), n.e("46054")])
            .then(n.bind(n, 680901))
            .then((e) => ({ default: e.ClipParticipantsList })),
    ),
    T = (e) => {
        let { participants: t, maxVisibleParticipants: n, guildId: s } = e,
            a = i.useRef(null),
            r = (0, i.useCallback)(
                () => (0, l.jsx)(i.Suspense, { fallback: null, children: (0, l.jsx)(_, { users: t, guildId: s }) }),
                [t, s],
            );
        return (0, l.jsx)(N.Y, {
            renderPopout: r,
            targetElementRef: a,
            position: "right",
            children: (e) =>
                (0, l.jsx)(h.D, {
                    ...e,
                    innerRef: a,
                    className: j.x,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick?.(t);
                    },
                    children: (0, l.jsxs)(d.E, {
                        className: j.s,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        children: ["+", t.length - n],
                    }),
                }),
        });
    };
var b = n(985018);
function R(e) {
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
let O = function (e) {
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
            showTextContent: E = !0,
        } = e,
        I = (0, r.yK)([x.default], () => n.map((e) => x.default.getUser(e)).filter(A.Vq) ?? []),
        y = null != t ? (0, C.Fe)(new Date(t)) : null;
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
                                        text: b.intl.string(b.t["/fgfWh"]),
                                        children: (0, l.jsx)(u.x, { className: v.gr, size: "xs", color: "white" }),
                                    }),
                                    E &&
                                        (0, l.jsx)(d.E, {
                                            className: v.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: null != s && s.length > 0 ? s : b.intl.string(b.t.Cyxddp),
                                        }),
                                ],
                            }),
                            E &&
                                (null != i || null != y) &&
                                (0, l.jsxs)(d.E, {
                                    className: v.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, l.jsx)(R, { applicationId: i, separator: null != y ? " \xb7 " : void 0 }),
                                        y,
                                        m,
                                    ],
                                }),
                        ],
                    }),
                    I.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: v.HD,
                            role: "group",
                            "aria-label": b.intl.string(b.t.WTozwe),
                            children: [
                                I.slice(0, 4).map((e) => (0, l.jsx)(S, { user: e, guildId: h }, e.id)),
                                I.length > 4 &&
                                    (0, l.jsx)(T, { participants: I, maxVisibleParticipants: 4, guildId: h }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
