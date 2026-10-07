s.d(e, { A: () => I });
var a = s(477900);
s(582128);
var t = s(503698),
    n = s.n(t),
    i = s(17928),
    r = s(876230),
    c = s(939249),
    o = s(477155),
    d = s(834730),
    x = s(866665),
    h = s(176781),
    m = s(429913),
    u = s(769015),
    p = s(409626),
    g = s(692969),
    N = s(202163),
    j = s(287809),
    v = s(58703),
    E = s(403362),
    f = s(331446),
    y = s(829648),
    C = s(704796),
    D = s(660183),
    P = s(447177);
function w(l) {
    let { applicationId: e, hasTrailingDate: s } = l,
        t = (0, m.h)(e),
        { gameRecord: i } = (0, N.A)(e),
        r = (0, g.A)({ applicationId: e, location: "ClipEmbed", source: p.GameProfileSources.ClipEmbed }),
        o = i?.name ?? t?.name;
    if (null == o) return null;
    let x = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(u.A, { game: i ?? t, size: u.M.XXSMALL, className: P.Gt, allowUnknownGameIcon: !1 }),
                (0, a.jsx)(d.E, {
                    className: P.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: o,
                }),
            ],
        }),
        h =
            null != r
                ? (0, a.jsx)(c.D, { className: n()(P.Nn, P.On), onClick: r, children: x })
                : (0, a.jsx)("span", { className: P.Nn, children: x });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            h,
            !0 === s && (0, a.jsx)(d.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let I = function (l) {
    let {
            createdAt: e,
            participantIds: s,
            applicationId: t,
            title: m,
            guildId: u,
            className: p,
            activeLayer: g,
            playerState: N = r.Q6.PAUSED,
            isControlBarExpanded: I = !0,
            isFullScreen: L = !1,
            showTextContent: _ = !0,
            isGridView: b = !1,
            setIsGridView: A,
        } = l,
        k = (0, i.yK)([j.default], () => s.map((l) => j.default.getUser(l)).filter(E.Vq) ?? []),
        G = null != e ? (0, v.Fe)(new Date(e)) : null;
    return (0, a.jsxs)("div", {
        className: n()(P.oK, { [P.pd]: N === r.Q6.PLAYING && !I, [P.aS]: L }, p),
        children: [
            (0, a.jsx)("div", { className: P.Lu }),
            (0, a.jsxs)("div", {
                className: P.s$,
                children: [
                    b &&
                        I &&
                        (0, a.jsxs)(c.D, {
                            className: P.i9,
                            onClick: function (l) {
                                (l.stopPropagation(), A?.(!1));
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
                    !b &&
                        (0, a.jsxs)("div", {
                            className: P.yR,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: P.$,
                                    children: [
                                        (0, a.jsx)(x.m, {
                                            asContainer: !0,
                                            text: D.intl.string(D.t["/fgfWh"]),
                                            children: (0, a.jsx)(h.x, { className: P.gr, size: "xs", color: "white" }),
                                        }),
                                        _ &&
                                            (0, a.jsx)(d.E, {
                                                className: P.DD,
                                                variant: "text-md/semibold",
                                                color: "text-overlay-light",
                                                children: null != m && m.length > 0 ? m : D.intl.string(D.t.Cyxddp),
                                            }),
                                    ],
                                }),
                                _ &&
                                    (null != t || null != G) &&
                                    (0, a.jsxs)("div", {
                                        className: P.yu,
                                        children: [
                                            (0, a.jsx)(w, { applicationId: t, hasTrailingDate: null != G }),
                                            null != G &&
                                                (0, a.jsx)(d.E, {
                                                    className: P.BR,
                                                    variant: "text-sm/normal",
                                                    color: "text-overlay-light",
                                                    children: G,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    !b &&
                        k.length > 0 &&
                        (0, a.jsxs)("div", {
                            className: P.HD,
                            role: "group",
                            "aria-label": D.intl.string(D.t.WTozwe),
                            children: [
                                k
                                    .slice(0, 4)
                                    .map((l) => (0, a.jsx)(y.A, { layerContext: g, user: l, guildId: u }, l.id)),
                                k.length > 4 &&
                                    (0, a.jsx)(f.w, {
                                        layerContext: g,
                                        participants: k,
                                        maxVisibleParticipants: 4,
                                        overflowLabel: D.intl.formatToPlainString(C.default.CJ0I6C, {
                                            count: k.length - 4,
                                        }),
                                        guildId: u,
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
