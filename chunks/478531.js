n.d(t, { A: () => S });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    s = n(17928),
    a = n(876230),
    o = n(939249),
    u = n(477155),
    c = n(834730),
    d = n(866665),
    f = n(176781),
    h = n(429913),
    p = n(769015),
    m = n(409626),
    g = n(692969),
    x = n(202163),
    y = n(287809),
    A = n(58703),
    v = n(403362),
    E = n(331446),
    b = n(829648),
    N = n(375708),
    j = n(447177);
function I(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        i = (0, h.h)(t),
        { gameRecord: s } = (0, x.A)(t),
        a = (0, g.A)({ applicationId: t, location: "ClipEmbed", source: m.GameProfileSources.ClipEmbed }),
        u = s?.name ?? i?.name;
    if (null == u) return null;
    let d = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(p.A, { game: s ?? i, size: p.M.XXSMALL, className: j.Gt, allowUnknownGameIcon: !1 }),
                (0, l.jsx)(c.E, {
                    className: j.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: u,
                }),
            ],
        }),
        f =
            null != a
                ? (0, l.jsx)(o.D, { className: r()(j.Nn, j.On), onClick: a, children: d })
                : (0, l.jsx)("span", { className: j.Nn, children: d });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            f,
            !0 === n && (0, l.jsx)(c.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let S = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: i,
            title: h,
            guildId: p,
            className: m,
            activeLayer: g,
            playerState: x = a.Q6.PAUSED,
            isControlBarExpanded: S = !0,
            isFullScreen: w = !1,
            showTextContent: W = !0,
            isGridView: k = !1,
            setIsGridView: C,
        } = e,
        R = (0, s.yK)([y.default], () => n.map((e) => y.default.getUser(e)).filter(v.Vq) ?? []),
        T = null != t ? (0, A.Fe)(new Date(t)) : null;
    return (0, l.jsxs)("div", {
        className: r()(j.oK, { [j.pd]: x === a.Q6.PLAYING && !S, [j.aS]: w }, m),
        children: [
            (0, l.jsx)("div", { className: j.Lu }),
            (0, l.jsxs)("div", {
                className: j.s$,
                children: [
                    k &&
                        S &&
                        (0, l.jsxs)(o.D, {
                            className: j.i9,
                            onClick: function (e) {
                                (e.stopPropagation(), C?.(!1));
                            },
                            children: [
                                (0, l.jsx)(u.r, { color: "white", size: "xs" }),
                                (0, l.jsx)(c.E, {
                                    variant: "text-md/semibold",
                                    color: "text-overlay-light",
                                    children: "Back to single mode",
                                }),
                            ],
                        }),
                    !k &&
                        (0, l.jsxs)("div", {
                            className: j.yR,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: j.$,
                                    children: [
                                        (0, l.jsx)(d.m, {
                                            asContainer: !0,
                                            text: N.intl.string(N.t["/fgfWh"]),
                                            children: (0, l.jsx)(f.x, { className: j.gr, size: "xs", color: "white" }),
                                        }),
                                        W &&
                                            (0, l.jsx)(c.E, {
                                                className: j.DD,
                                                variant: "text-md/semibold",
                                                color: "text-overlay-light",
                                                children: null != h && h.length > 0 ? h : N.intl.string(N.t.Cyxddp),
                                            }),
                                    ],
                                }),
                                W &&
                                    (null != i || null != T) &&
                                    (0, l.jsxs)("div", {
                                        className: j.yu,
                                        children: [
                                            (0, l.jsx)(I, { applicationId: i, hasTrailingDate: null != T }),
                                            null != T &&
                                                (0, l.jsx)(c.E, {
                                                    className: j.BR,
                                                    variant: "text-sm/normal",
                                                    color: "text-overlay-light",
                                                    children: T,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    !k &&
                        R.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: j.HD,
                            role: "group",
                            "aria-label": N.intl.string(N.t.WTozwe),
                            children: [
                                R.slice(0, 4).map((e) =>
                                    (0, l.jsx)(b.A, { layerContext: g, user: e, guildId: p }, e.id),
                                ),
                                R.length > 4 &&
                                    (0, l.jsx)(E.w, {
                                        layerContext: g,
                                        participants: R,
                                        maxVisibleParticipants: 4,
                                        guildId: p,
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
