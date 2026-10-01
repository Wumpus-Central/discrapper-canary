s.d(l, { A: () => _ });
var a = s(477900);
s(582128);
var t = s(503698),
    i = s.n(t),
    n = s(17928),
    r = s(876230),
    c = s(939249),
    o = s(477155),
    d = s(834730),
    x = s(866665),
    h = s(176781),
    m = s(429913),
    u = s(769015),
    p = s(409626),
    N = s(692969),
    g = s(202163),
    j = s(287809),
    v = s(58703),
    E = s(403362),
    f = s(331446),
    y = s(829648),
    D = s(375708),
    C = s(447177);
function P(e) {
    let { applicationId: l, hasTrailingDate: s } = e,
        t = (0, m.h)(l),
        { gameRecord: n } = (0, g.A)(l),
        r = (0, N.A)({ applicationId: l, location: "ClipEmbed", source: p.GameProfileSources.ClipEmbed }),
        o = n?.name ?? t?.name;
    if (null == o) return null;
    let x = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(u.A, { game: n ?? t, size: u.M.XXSMALL, className: C.Gt, allowUnknownGameIcon: !1 }),
                (0, a.jsx)(d.E, {
                    className: C.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: o,
                }),
            ],
        }),
        h =
            null != r
                ? (0, a.jsx)(c.D, { className: i()(C.Nn, C.On), onClick: r, children: x })
                : (0, a.jsx)("span", { className: C.Nn, children: x });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            h,
            !0 === s && (0, a.jsx)(d.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let _ = function (e) {
    let {
            createdAt: l,
            participantIds: s,
            applicationId: t,
            title: m,
            guildId: u,
            className: p,
            activeLayer: N,
            playerState: g = r.Q6.PAUSED,
            isControlBarExpanded: _ = !0,
            isFullScreen: w = !1,
            showTextContent: A = !0,
            isGridView: I = !1,
            setIsGridView: L,
        } = e,
        b = (0, n.yK)([j.default], () => s.map((e) => j.default.getUser(e)).filter(E.Vq) ?? []),
        k = null != l ? (0, v.Fe)(new Date(l)) : null;
    return (0, a.jsxs)("div", {
        className: i()(C.oK, { [C.pd]: g === r.Q6.PLAYING && !_, [C.aS]: w }, p),
        children: [
            (0, a.jsx)("div", { className: C.Lu }),
            (0, a.jsxs)("div", {
                className: C.s$,
                children: [
                    I &&
                        _ &&
                        (0, a.jsxs)(c.D, {
                            className: C.i9,
                            onClick: function (e) {
                                (e.stopPropagation(), L?.(!1));
                            },
                            children: [
                                (0, a.jsx)(o.r, { color: "white", size: "xs" }),
                                (0, a.jsx)(d.E, {
                                    variant: "text-md/semibold",
                                    color: "text-overlay-light",
                                    children: "Back to single mode",
                                }),
                            ],
                        }),
                    !I &&
                        (0, a.jsxs)("div", {
                            className: C.yR,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: C.$,
                                    children: [
                                        (0, a.jsx)(x.m, {
                                            asContainer: !0,
                                            text: D.intl.string(D.t["/fgfWh"]),
                                            children: (0, a.jsx)(h.x, { className: C.gr, size: "xs", color: "white" }),
                                        }),
                                        A &&
                                            (0, a.jsx)(d.E, {
                                                className: C.DD,
                                                variant: "text-md/semibold",
                                                color: "text-overlay-light",
                                                children: null != m && m.length > 0 ? m : D.intl.string(D.t.Cyxddp),
                                            }),
                                    ],
                                }),
                                A &&
                                    (null != t || null != k) &&
                                    (0, a.jsxs)("div", {
                                        className: C.yu,
                                        children: [
                                            (0, a.jsx)(P, { applicationId: t, hasTrailingDate: null != k }),
                                            null != k &&
                                                (0, a.jsx)(d.E, {
                                                    className: C.BR,
                                                    variant: "text-sm/normal",
                                                    color: "text-overlay-light",
                                                    children: k,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    !I &&
                        b.length > 0 &&
                        (0, a.jsxs)("div", {
                            className: C.HD,
                            role: "group",
                            "aria-label": D.intl.string(D.t.WTozwe),
                            children: [
                                b
                                    .slice(0, 4)
                                    .map((e) => (0, a.jsx)(y.A, { layerContext: N, user: e, guildId: u }, e.id)),
                                b.length > 4 &&
                                    (0, a.jsx)(f.w, {
                                        layerContext: N,
                                        participants: b,
                                        maxVisibleParticipants: 4,
                                        guildId: u,
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
