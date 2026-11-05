var a = s(477900);
s(582128);
var n = s(503698),
    i = s.n(n),
    t = s(855986),
    r = s(876230),
    o = s(939249),
    c = s(477155),
    d = s(834730),
    m = s(866665),
    h = s(176781),
    x = s(429913),
    u = s(769015),
    g = s(409626),
    j = s(692969),
    p = s(202163),
    v = s(287809),
    N = s(5377),
    y = s(403362),
    b = s(331446),
    f = s(829648),
    C = s(683825),
    w = s(792996),
    A = s(447177);
function k(l) {
    let { applicationId: e, hasTrailingDate: s } = l,
        n = (0, x.h)(e),
        { gameRecord: t } = (0, p.Ay)(e),
        r = (0, j.A)({ applicationId: e, location: "ClipEmbed", source: g.GameProfileSources.ClipEmbed }),
        c = t?.name ?? n?.name;
    if (null == c) return null;
    let m = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(u.A, { game: t ?? n, size: u.M.XXSMALL, className: A.Gt, allowUnknownGameIcon: !1 }),
                (0, a.jsx)(d.E, {
                    className: A.mO,
                    variant: "body-sm/normal",
                    color: "text-overlay-light",
                    children: c,
                }),
            ],
        }),
        h =
            null != r
                ? (0, a.jsx)(o.D, { className: i()(A.Nn, A.On), onClick: r, children: m })
                : (0, a.jsx)("span", { className: A.Nn, children: m });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            h,
            !0 === s && (0, a.jsx)(d.E, { variant: "body-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
s.d(
    e,
    {},
    {
        A: function (l) {
            let {
                    createdAt: e,
                    participantIds: s,
                    applicationId: n,
                    title: x,
                    guildId: u,
                    className: g,
                    activeLayer: j,
                    playerState: p = r.Q6.PAUSED,
                    isControlBarExpanded: D = !0,
                    isFullScreen: E = !1,
                    showTextContent: I = !0,
                    isGridView: L = !1,
                    setIsGridView: P,
                } = l,
                S = (0, t.yK)([v.default], () => s.map((l) => v.default.getUser(l)).filter(y.Vq) ?? []),
                z = null != e ? (0, N.Fe)(new Date(e)) : null;
            return (0, a.jsxs)("div", {
                className: i()(A.oK, { [A.pd]: p === r.Q6.PLAYING && !D, [A.aS]: E }, g),
                children: [
                    (0, a.jsx)("div", { className: A.Lu }),
                    (0, a.jsxs)("div", {
                        className: A.s$,
                        children: [
                            L &&
                                D &&
                                (0, a.jsxs)(o.D, {
                                    className: A.i9,
                                    onClick: function (l) {
                                        (l.stopPropagation(), P?.(!1));
                                    },
                                    children: [
                                        (0, a.jsx)(c.ArrowSmallLeftIcon, { color: "white", size: "xs" }),
                                        (0, a.jsx)(d.E, {
                                            variant: "body-md/semibold",
                                            color: "text-overlay-light",
                                            children: "Back to single mode",
                                        }),
                                    ],
                                }),
                            !L &&
                                (0, a.jsxs)("div", {
                                    className: A.yR,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: A.$,
                                            children: [
                                                (0, a.jsx)(m.m, {
                                                    asContainer: !0,
                                                    text: w.intl.string(w.t["/fgfWh"]),
                                                    children: (0, a.jsx)(h.ClipsIcon, {
                                                        className: A.gr,
                                                        size: "xs",
                                                        color: "white",
                                                    }),
                                                }),
                                                I &&
                                                    (0, a.jsx)(d.E, {
                                                        className: A.DD,
                                                        variant: "body-md/semibold",
                                                        color: "text-overlay-light",
                                                        children:
                                                            null != x && x.length > 0 ? x : w.intl.string(w.t.Cyxddp),
                                                    }),
                                            ],
                                        }),
                                        I &&
                                            (null != n || null != z) &&
                                            (0, a.jsxs)("div", {
                                                className: A.yu,
                                                children: [
                                                    (0, a.jsx)(k, { applicationId: n, hasTrailingDate: null != z }),
                                                    null != z &&
                                                        (0, a.jsx)(d.E, {
                                                            className: A.BR,
                                                            variant: "body-sm/normal",
                                                            color: "text-overlay-light",
                                                            children: z,
                                                        }),
                                                ],
                                            }),
                                    ],
                                }),
                            !L &&
                                S.length > 0 &&
                                (0, a.jsxs)("div", {
                                    className: A.HD,
                                    role: "group",
                                    "aria-label": w.intl.string(w.t.WTozwe),
                                    children: [
                                        S.slice(0, 4).map((l) =>
                                            (0, a.jsx)(f.A, { layerContext: j, user: l, guildId: u }, l.id),
                                        ),
                                        S.length > 4 &&
                                            (0, a.jsx)(b.w, {
                                                layerContext: j,
                                                participants: S,
                                                maxVisibleParticipants: 4,
                                                overflowLabel: w.intl.formatToPlainString(C.default.CJ0I6C, {
                                                    count: S.length - 4,
                                                }),
                                                guildId: u,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            });
        },
    },
);
