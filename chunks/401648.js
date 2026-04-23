"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(876230),
    d = n(990078),
    _ = n(176781),
    u = n(834730),
    c = n(939249),
    E = n(429913),
    h = n(409626),
    m = n(692969),
    f = n(569926),
    g = n(287809),
    p = n(58703),
    A = n(403362),
    I = n(97808),
    T = n(778712),
    S = n(342296),
    N = n(895054);
function C(e) {
    let { user: t, guildId: n } = e,
        s = r.useRef(null);
    return (0, i.jsx)(S.A, {
        targetElementRef: s,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        children: (e) =>
            (0, i.jsx)(c.D, {
                ...e,
                innerRef: s,
                className: N.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, i.jsx)(I.eu, { src: t.getAvatarURL(n, 24), size: T._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var R = n(922016),
    O = n(433781);
let y = r.lazy(() =>
        n
            .e("46054")
            .then(n.bind(n, 680901))
            .then((e) => ({ default: e.ClipParticipantsList })),
    ),
    v = (e) => {
        let { participants: t, maxVisibleParticipants: n, guildId: s } = e,
            a = r.useRef(null),
            o = (0, r.useCallback)(
                () => (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(y, { users: t, guildId: s }) }),
                [t, s],
            );
        return (0, i.jsx)(R.Y, {
            renderPopout: o,
            targetElementRef: a,
            position: "right",
            children: (e) =>
                (0, i.jsx)(c.D, {
                    ...e,
                    innerRef: a,
                    className: O.x,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick?.(t);
                    },
                    children: (0, i.jsxs)(u.E, {
                        className: O.s,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        children: ["+", t.length - n],
                    }),
                }),
        });
    };
var D = n(985018);
function L(e) {
    let { applicationId: t, separator: n } = e,
        r = (0, E.h)(t),
        { data: s } = (0, f.I)(t),
        a = (0, m.A)({ applicationId: t, location: "ClipEmbed", source: h.Ob.ClipEmbed }),
        o = s?.name ?? r?.name;
    return null == o
        ? null
        : null != a
          ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(c.D, { tag: "span", className: N.On, onClick: a, children: o }), n],
            })
          : (0, i.jsxs)(i.Fragment, { children: [o, n] });
}
let b = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: r,
            title: s,
            guildId: c,
            shareCTA: E,
            playerState: h = l.Q6.PAUSED,
            isControlBarExpanded: m = !0,
            isFullScreen: f = !1,
            showTextContent: I = !0,
        } = e,
        T = (0, o.yK)([g.default], () => n.map((e) => g.default.getUser(e)).filter(A.Vq) ?? []),
        S = null != t ? (0, p.Fe)(new Date(t)) : null;
    return (0, i.jsxs)("div", {
        className: a()(N.oK, { [N.pd]: h === l.Q6.PLAYING && !m, [N.aS]: f }),
        children: [
            (0, i.jsx)("div", { className: N.Lu }),
            (0, i.jsxs)("div", {
                className: N.s$,
                children: [
                    (0, i.jsxs)("div", {
                        className: N.yR,
                        children: [
                            (0, i.jsxs)("div", {
                                className: N.$,
                                children: [
                                    (0, i.jsx)(d.m, {
                                        asContainer: !0,
                                        text: D.intl.string(D.t["/fgfWh"]),
                                        children: (0, i.jsx)(_.x, { className: N.gr, size: "xs", color: "white" }),
                                    }),
                                    I &&
                                        (0, i.jsx)(u.E, {
                                            className: N.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: null != s && s.length > 0 ? s : D.intl.string(D.t.Cyxddp),
                                        }),
                                ],
                            }),
                            I &&
                                (null != r || null != S) &&
                                (0, i.jsxs)(u.E, {
                                    className: N.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, i.jsx)(L, { applicationId: r, separator: null != S ? " \xb7 " : void 0 }),
                                        S,
                                        E,
                                    ],
                                }),
                        ],
                    }),
                    T.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: N.HD,
                            role: "group",
                            "aria-label": D.intl.string(D.t.WTozwe),
                            children: [
                                T.slice(0, 4).map((e) => (0, i.jsx)(C, { user: e, guildId: c }, e.id)),
                                T.length > 4 &&
                                    (0, i.jsx)(v, { participants: T, maxVisibleParticipants: 4, guildId: c }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
