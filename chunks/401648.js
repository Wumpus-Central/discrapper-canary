s.d(l, { A: () => A });
var a = s(627968),
    i = s(64700),
    n = s(503698),
    t = s.n(n),
    r = s(17928),
    c = s(876230),
    d = s(990078),
    o = s(176781),
    u = s(834730),
    h = s(939249),
    x = s(429913),
    m = s(409626),
    p = s(692969),
    g = s(569926),
    j = s(287809),
    f = s(58703),
    v = s(403362),
    N = s(97808),
    b = s(778712),
    C = s(342296),
    k = s(895054);
function w(e) {
    let { user: l, guildId: s } = e,
        n = i.useRef(null);
    return (0, a.jsx)(C.A, {
        targetElementRef: n,
        shouldPreload: !0,
        user: l,
        guildId: s,
        position: "bottom",
        children: (e) =>
            (0, a.jsx)(h.D, {
                ...e,
                innerRef: n,
                className: k.RB,
                onClick: (l) => {
                    e.onClick(l), l.stopPropagation();
                },
                "aria-label": l.username,
                children: (0, a.jsx)(N.eu, { src: l.getAvatarURL(s, 24), size: b._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var E = s(922016),
    P = s(433781);
let R = i.lazy(() =>
        Promise.all([s.e("17179"), s.e("46054")])
            .then(s.bind(s, 680901))
            .then((e) => ({ default: e.ClipParticipantsList })),
    ),
    D = (e) => {
        let { participants: l, maxVisibleParticipants: s, guildId: n } = e,
            t = i.useRef(null),
            r = (0, i.useCallback)(
                () => (0, a.jsx)(i.Suspense, { fallback: null, children: (0, a.jsx)(R, { users: l, guildId: n }) }),
                [l, n],
            );
        return (0, a.jsx)(E.Y, {
            renderPopout: r,
            targetElementRef: t,
            position: "right",
            children: (e) =>
                (0, a.jsx)(h.D, {
                    ...e,
                    innerRef: t,
                    className: P.x,
                    onClick: (l) => {
                        l.stopPropagation(), e.onClick?.(l);
                    },
                    children: (0, a.jsxs)(u.E, {
                        className: P.s,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        children: ["+", l.length - s],
                    }),
                }),
        });
    };
var I = s(375708);
function y(e) {
    let { applicationId: l, separator: s } = e,
        i = (0, x.h)(l),
        { data: n } = (0, g.I)(l),
        t = (0, p.A)({ applicationId: l, location: "ClipEmbed", source: m.Ob.ClipEmbed }),
        r = n?.name ?? i?.name;
    return null == r
        ? null
        : null != t
          ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(h.D, { tag: "span", className: k.On, onClick: t, children: r }), s],
            })
          : (0, a.jsxs)(a.Fragment, { children: [r, s] });
}
let A = function (e) {
    let {
            createdAt: l,
            participantIds: s,
            applicationId: i,
            title: n,
            guildId: h,
            className: x,
            playerState: m = c.Q6.PAUSED,
            isControlBarExpanded: p = !0,
            isFullScreen: g = !1,
            showTextContent: N = !0,
        } = e,
        b = (0, r.yK)([j.default], () => s.map((e) => j.default.getUser(e)).filter(v.Vq) ?? []),
        C = null != l ? (0, f.Fe)(new Date(l)) : null;
    return (0, a.jsxs)("div", {
        className: t()(k.oK, { [k.pd]: m === c.Q6.PLAYING && !p, [k.aS]: g }, x),
        children: [
            (0, a.jsx)("div", { className: k.Lu }),
            (0, a.jsxs)("div", {
                className: k.s$,
                children: [
                    (0, a.jsxs)("div", {
                        className: k.yR,
                        children: [
                            (0, a.jsxs)("div", {
                                className: k.$,
                                children: [
                                    (0, a.jsx)(d.m, {
                                        asContainer: !0,
                                        text: I.intl.string(I.t["/fgfWh"]),
                                        children: (0, a.jsx)(o.x, { className: k.gr, size: "xs", color: "white" }),
                                    }),
                                    N &&
                                        (0, a.jsx)(u.E, {
                                            className: k.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: null != n && n.length > 0 ? n : I.intl.string(I.t.Cyxddp),
                                        }),
                                ],
                            }),
                            N &&
                                (null != i || null != C) &&
                                (0, a.jsxs)(u.E, {
                                    className: k.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, a.jsx)(y, { applicationId: i, separator: null != C ? " \xb7 " : void 0 }),
                                        C,
                                    ],
                                }),
                        ],
                    }),
                    b.length > 0 &&
                        (0, a.jsxs)("div", {
                            className: k.HD,
                            role: "group",
                            "aria-label": I.intl.string(I.t.WTozwe),
                            children: [
                                b.slice(0, 4).map((e) => (0, a.jsx)(w, { user: e, guildId: h }, e.id)),
                                b.length > 4 &&
                                    (0, a.jsx)(D, { participants: b, maxVisibleParticipants: 4, guildId: h }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
