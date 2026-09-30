n.d(t, { A: () => R });
var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    a = n(17928),
    s = n(876230),
    u = n(939249),
    o = n(477155),
    c = n(834730),
    d = n(866665),
    f = n(176781),
    h = n(429913),
    p = n(769015),
    m = n(409626),
    g = n(692969),
    y = n(202163),
    E = n(287809),
    v = n(58703),
    A = n(403362),
    C = n(331446),
    x = n(829648),
    S = n(375708),
    I = n(447177);
function w(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        r = (0, h.h)(t),
        { gameRecord: a } = (0, y.A)(t),
        s = (0, g.A)({ applicationId: t, location: "ClipEmbed", source: m.GameProfileSources.ClipEmbed }),
        o = a?.name ?? r?.name;
    if (null == o) return null;
    let d = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(p.A, { game: a ?? r, size: p.M.XXSMALL, className: I.Gt, allowUnknownGameIcon: !1 }),
                (0, l.jsx)(c.E, {
                    className: I.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: o,
                }),
            ],
        }),
        f =
            null != s
                ? (0, l.jsx)(u.D, { className: i()(I.Nn, I.On), onClick: s, children: d })
                : (0, l.jsx)("span", { className: I.Nn, children: d });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            f,
            !0 === n && (0, l.jsx)(c.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let R = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: r,
            title: h,
            guildId: p,
            className: m,
            activeLayer: g,
            playerState: y = s.Q6.PAUSED,
            isControlBarExpanded: R = !0,
            isFullScreen: T = !1,
            showTextContent: b = !0,
            isGridView: N = !1,
            setIsGridView: _,
        } = e,
        L = (0, a.yK)([E.default], () => n.map((e) => E.default.getUser(e)).filter(A.Vq) ?? []),
        k = null != t ? (0, v.Fe)(new Date(t)) : null;
    return (0, l.jsxs)("div", {
        className: i()(I.oK, { [I.pd]: y === s.Q6.PLAYING && !R, [I.aS]: T }, m),
        children: [
            (0, l.jsx)("div", { className: I.Lu }),
            (0, l.jsxs)("div", {
                className: I.s$,
                children: [
                    N &&
                        R &&
                        (0, l.jsxs)(u.D, {
                            className: I.i9,
                            onClick: function (e) {
                                (e.stopPropagation(), _?.(!1));
                            },
                            children: [
                                (0, l.jsx)(o.r, { color: "white", size: "xs" }),
                                (0, l.jsx)(c.E, {
                                    variant: "text-md/semibold",
                                    color: "text-overlay-light",
                                    children: "Back to single mode",
                                }),
                            ],
                        }),
                    !N &&
                        (0, l.jsxs)("div", {
                            className: I.yR,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: I.$,
                                    children: [
                                        (0, l.jsx)(d.m, {
                                            asContainer: !0,
                                            text: S.intl.string(S.t["/fgfWh"]),
                                            children: (0, l.jsx)(f.x, { className: I.gr, size: "xs", color: "white" }),
                                        }),
                                        b &&
                                            (0, l.jsx)(c.E, {
                                                className: I.DD,
                                                variant: "text-md/semibold",
                                                color: "text-overlay-light",
                                                children: null != h && h.length > 0 ? h : S.intl.string(S.t.Cyxddp),
                                            }),
                                    ],
                                }),
                                b &&
                                    (null != r || null != k) &&
                                    (0, l.jsxs)("div", {
                                        className: I.yu,
                                        children: [
                                            (0, l.jsx)(w, { applicationId: r, hasTrailingDate: null != k }),
                                            null != k &&
                                                (0, l.jsx)(c.E, {
                                                    className: I.BR,
                                                    variant: "text-sm/normal",
                                                    color: "text-overlay-light",
                                                    children: k,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    !N &&
                        L.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: I.HD,
                            role: "group",
                            "aria-label": S.intl.string(S.t.WTozwe),
                            children: [
                                L.slice(0, 4).map((e) =>
                                    (0, l.jsx)(x.A, { layerContext: g, user: e, guildId: p }, e.id),
                                ),
                                L.length > 4 &&
                                    (0, l.jsx)(C.w, {
                                        layerContext: g,
                                        participants: L,
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
