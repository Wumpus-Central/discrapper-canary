l.d(t, { m: () => ib });
var n,
    i = l(477900),
    s = l(582128),
    a = l(62617);
function r(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: o, className: c, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [d, o, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
        className: (0, a.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var d = l(593673),
    o = l(646514);
function c(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: o, className: c, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [d, o, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/58e54efe82f33e76cc9388d9907b1684625b43f15aa5bc7f85752f0f3d4e9be7.svg",
        className: (0, a.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var u = l(369606),
    m = l(866665),
    x = l(408278),
    h = l(26430),
    f = l(129230),
    g = l(562073),
    p = l(503698),
    j = l.n(p),
    v = l(289873),
    b = l(738188),
    _ = l(834730),
    N = l(331322),
    y = l(534514),
    A = l(49303),
    I = l(338532),
    C = l(792996),
    E = l(448492);
function S() {
    return (0, i.jsx)("div", {
        className: E.w,
        children: (0, i.jsx)(v.y, { type: v.y.Type.SPINNING_CIRCLE, "aria-label": C.intl.string(C.t.ZTNur7) }),
    });
}
function k() {
    return (0, i.jsxs)("div", {
        className: E.w,
        role: "alert",
        children: [
            (0, i.jsx)(b.WarningIcon, { size: "md", color: o.A.colors.ICON_MUTED, "aria-hidden": !0 }),
            (0, i.jsx)(_.E, { variant: "body-sm/normal", color: "text-muted", children: C.intl.string(C.t.F8FvUy) }),
        ],
    });
}
function w(e) {
    let { className: t, illustration: l, title: n, body: s, action: a } = e;
    return (
        (0, I.R)(A.$c),
        (0, i.jsxs)(N.B, {
            className: j()(E.p, t),
            align: "center",
            justify: "center",
            gap: 16,
            padding: { top: 24, right: 16, bottom: 24, left: 16 },
            children: [
                null != l && (0, i.jsx)(l, { alt: "", ariaHidden: !0, width: 160 }),
                (0, i.jsxs)(N.B, {
                    align: "center",
                    gap: 6,
                    children: [
                        (0, i.jsx)(y.D, { variant: "heading-sm/semibold", color: "text-default", children: n }),
                        (0, i.jsx)(_.E, { variant: "body-sm/medium", color: "text-subtle", children: s }),
                    ],
                }),
                a,
            ],
        })
    );
}
function T(e) {
    let { expanded: t, column: l } = e;
    return t ? "expanded" : 1 === l ? "mini" : "regular";
}
l(754674);
var R = l(441920);
function M(e) {
    let { graphic: t, title: l, subtitle: n, minHeight: a } = e,
        r = s.useMemo(() => (null != a ? { minHeight: `${a}px` } : void 0), [a]);
    return (0, i.jsxs)(N.B, {
        className: R.VH,
        style: r,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsx)("div", { className: R.fA, children: t }),
            (0, i.jsxs)(N.B, {
                className: R.C,
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(y.D, { variant: "heading-sm/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(_.E, { variant: "body-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
var D = l(855986),
    L = l(95362),
    U = l(939249),
    G = l(663417),
    P = l(140735),
    O = l(97808),
    B = l(778712),
    F = l(463930),
    z = l(478016),
    H = l(821609),
    W = l(80682),
    $ = l(827827),
    K = l(894768),
    Y = l(287809),
    V = l(5377),
    q = l(848966);
function Q(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? q.oT : q.yf });
}
function Z(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? q.sU : q._u, children: l });
}
var X = l(606072),
    J = l(135294);
function ee(e, t) {
    switch (e) {
        case X.kG.ACTIVITY_SHARING:
            return {
                body: C.intl.string("popular_games" === t ? J.default.wyK5KO : J.default["8y885d"]),
                cta: C.intl.string(J.default.fMbgeZ),
            };
        case X.kG.PERSONALIZATION:
            return {
                body: C.intl.string("popular_games" === t ? J.default.uQOR1j : J.default.mTARYx),
                cta: C.intl.string(C.t["3/IlR0"]),
            };
        case X.kG.ALL:
            return { body: C.intl.string(J.default.hYjG3N), cta: C.intl.string(C.t["3/IlR0"]) };
    }
}
var et = l(775602);
function el() {
    let [e, t] = s.useState(null),
        [l, n] = s.useState(null),
        [i, a] = s.useState("unknown"),
        r = (0, D.bG)([et.Ay], () => et.Ay.useReducedMotion);
    s.useEffect(() => {
        if (null == e || null == l) return;
        let t = new IntersectionObserver(
            (e) => {
                var t, l;
                let n,
                    i,
                    [s] = e;
                if (s?.rootBounds == null) return;
                let { clippedPx: r, floatTo: d } =
                    ((t = s.boundingClientRect),
                    (n = Math.max(0, (l = s.rootBounds).top - t.top)),
                    { clippedPx: n + (i = Math.max(0, t.bottom - l.bottom)), floatTo: n > i ? "top" : "bottom" });
                a(() => (r <= 1 ? "visible" : d));
            },
            { root: e, threshold: [0, 0.1, 0.5, 0.9, 1] },
        );
        return (t.observe(l), () => t.disconnect());
    }, [e, l]);
    let d = s.useCallback(() => {
        if (null == e || null == l) return;
        let t = e.getBoundingClientRect(),
            n = l.getBoundingClientRect();
        e.scrollTo({ top: e.scrollTop + n.top - t.top - (t.height - n.height) / 2, behavior: r ? "auto" : "smooth" });
    }, [e, l, r]);
    return {
        scrollerRef: t,
        scrollerNode: e,
        userRowRef: n,
        floatingRowPosition: "top" === i || "bottom" === i ? i : null,
        scrollToUserRow: d,
    };
}
var en = l(73392),
    ei = l(967144),
    es = l(696451),
    ea = l(562153);
function er(e, t) {
    let { showYouSuffix: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = (0, D.bG)([Y.default], () => Y.default.getUser(t), [t]),
        i = (0, D.bG)([es.Ay], () => es.Ay.getMember(e, t), [e, t]),
        s = (0, ei.gn)(e, t, i?.colorStrings ?? null),
        a = ea.Ay.useName(e, void 0, n),
        r = (0, en.a)({ displayNameStyles: i?.displayNameStyles ?? n?.displayNameStyles });
    return {
        user: n,
        member: i,
        roleColorStrings: s,
        displayNameStylesFont: r,
        name: a,
        displayName: l ? C.intl.formatToPlainString(J.default.subXXA, { name: a }) : a,
    };
}
var ed = l(587895),
    eo = l(429913),
    ec = l(311043),
    eu = l(454908),
    em = l(403362);
function ex(e, t) {
    return {
        id: e,
        name: C.intl.string(C.t.GIWFlF),
        iconUrl: null,
        coverUrl: null,
        coverFallbackIconUrl: null,
        isLoading: t,
    };
}
function eh(e) {
    let t = (0, eo.A)(e),
        l = (0, D.yK)([ed.A], () => e.map((e) => ed.A.didFetchingApplicationFail(e))),
        n = s.useMemo(() => t.map((e) => e?.getCanonicalGameId() ?? void 0), [t]),
        i = s.useMemo(() => n.filter(em.Vq), [n]);
    (0, eu.x)(i);
    let a = (0, D.yK)([ec.A], () => n.map((e) => (null != e ? ec.A.getGame(e) : void 0))),
        r = (0, D.yK)([ec.A], () => n.map((e) => null != e && (ec.A.didFetchingFail(e) || ec.A.hasNoData(e))));
    return s.useMemo(() => {
        let i = new Map();
        return (
            e.forEach((e, s) => {
                let d = t[s],
                    o = a[s],
                    c = null == d && !l[s],
                    u = null == o && null != n[s] && !r[s];
                null == d || u
                    ? i.set(e, ex(e, c || u))
                    : i.set(e, {
                          id: e,
                          name: o?.name ?? d.name,
                          iconUrl: d.getIconURL(64) ?? null,
                          coverUrl: o?.getCoverURL(512) ?? null,
                          coverFallbackIconUrl: o?.getIconURL(256) ?? d.getIconURL(256) ?? null,
                          isLoading: !1,
                      });
            }),
            i
        );
    }, [e, t, l, n, a, r]);
}
function ef(e, t) {
    return e.get(t) ?? ex(t, !1);
}
function eg(e, t) {
    return t.map((t) => ef(e, t));
}
var ep = l(927813),
    ej = l(251812),
    ev = l(518782);
function eb(e) {
    return e.entries.length < 3;
}
function e_(e) {
    return (0, ej.K)(eb(e) ? void 0 : e.stat).name;
}
function eN(e) {
    return eb(e)
        ? "empty_state"
        : !(function (e) {
                if (null == e.day_pt) return !1;
                let t = new Date(e.day_pt).getTime();
                if (Number.isNaN(t)) return !1;
                let l = Math.floor((e.week_start_ts * ep.A.Millis.SECOND) / ep.A.Millis.DAY);
                return Math.floor(t / ep.A.Millis.DAY) === l + 6;
            })(e)
          ? "in_progress"
          : "podium";
}
function ey(e) {
    switch (e) {
        case ev.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case ev.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case ev.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
var eA = l(192308);
function eI(e, t, n) {
    (0, eA.mM)(
        async () => {
            let { default: s } = await Promise.all([
                l.e(846201),
                l.e(311913),
                l.e(881717),
                l.e(5257),
                l.e(991625),
                l.e(230029),
                l.e(488926),
                l.e(728053),
                l.e(203112),
                l.e(762831),
                l.e(324469),
                l.e(264236),
                l.e(110116),
                l.e(463095),
                l.e(723794),
                l.e(240511),
                l.e(959134),
                l.e(371482),
                l.e(390213),
                l.e(610943),
                l.e(16954),
                l.e(944602),
                l.e(421778),
                l.e(646191),
                l.e(784170),
                l.e(758219),
            ]).then(l.bind(l, 499334));
            return (l) => (0, i.jsx)(s, { ...l, guildId: e, requirement: t, description: n });
        },
        { modalKey: "guild-space-leaderboard-sharing" },
    );
}
var eC = l(823353);
function eE(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, X.T4)(t),
        s = null != n ? J.default.wyIs4o : J.default["81PK67"];
    return (0, i.jsx)(w, {
        className: eC.w,
        illustration: c,
        title: C.intl.string(J.default.ULK65a),
        body: C.intl.format(s, { memberCount: 3 }),
        action:
            null != n
                ? (0, i.jsx)(H.$, {
                      variant: "secondary",
                      size: "sm",
                      text: C.intl.string(J.default.A4ZMJL),
                      onClick: () => {
                          (l(), eI(t, n, C.intl.string(J.default.PJn0ih)));
                      },
                  })
                : null,
    });
}
var eS = l(125858);
let ek =
        "https://cdn.discordapp.com/assets/content/f86a84ce3eb0d44fa03c308be330f508fbcdec9528cd7969c8f7530cdd058898.png",
    ew = `${ek} 1x, https://cdn.discordapp.com/assets/content/61de4c8a747fbce4c3772d27eeffbea00e3f3fbefd2a972d9d25b96d7116f042.png 2x, https://cdn.discordapp.com/assets/content/7e79963a2b009fabcc285dc56b301eb819e63b604739b0a48c8e0044a527a800.png 3x`;
function eT(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: o, className: c, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: o, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, o, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: ek,
        srcSet: ew,
        className: (0, a.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
let eR =
        "https://cdn.discordapp.com/assets/content/e87b249cc95509b720aae7d01a178fa3b37853797f9ad0b87c93c78934854c1f.png",
    eM = `${eR} 1x, https://cdn.discordapp.com/assets/content/4b18fe6b4c48532112a9ea66da62f20f7690a0de57378da9d92f091eba06f2f5.png 2x, https://cdn.discordapp.com/assets/content/b1f5d190ed2b05b6cefd2d44fc875f383134d87d928e3422de92e5e19378a3ae.png 3x`;
function eD(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: o, className: c, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: o, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, o, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eR,
        srcSet: eM,
        className: (0, a.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var eL = l(428678),
    eU = l(952270),
    eG = l(607470),
    eP = l(702476),
    eO = l(676279);
function eB(e) {
    let t = Math.floor(Math.max(e, 0) / ep.A.Seconds.MINUTE);
    return { hours: Math.floor(t / ep.A.Minutes.HOUR), minutes: t % ep.A.Minutes.HOUR };
}
function eF(e) {
    let { hours: t, minutes: l } = eB(e);
    return 0 === t
        ? C.intl.formatToPlainString(J.default.DdzvGL, { minutes: l })
        : 0 === l
          ? C.intl.formatToPlainString(J.default["+QfOQs"], { hours: t })
          : C.intl.formatToPlainString(J.default["6Y8H0A"], { hours: t, minutes: l });
}
function ez(e) {
    let { hours: t, minutes: l } = eB(e);
    return 0 === t
        ? C.intl.formatToPlainString(J.default.bgQf2H, { minutes: l })
        : 0 === l
          ? C.intl.formatToPlainString(J.default["D/HToK"], { hours: t })
          : C.intl.formatToPlainString(J.default.fvtrHn, { hours: t, minutes: l });
}
function eH(e, t) {
    switch (t) {
        case ev.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: C.intl.formatToPlainString(C.t["k2UNz+"], { days: e.value }),
                secondary: eF(e.time_played_seconds),
                secondaryShort: ez(e.time_played_seconds),
            };
        case ev.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: C.intl.formatToPlainString(J.default.rgpc8E, { count: e.value }),
                secondary: eF(e.time_played_seconds),
                secondaryShort: ez(e.time_played_seconds),
            };
        case ev.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return { primary: ez(e.value / ep.A.Millis.SECOND) };
        default:
            return { primary: "\u2014" };
    }
}
var eW = l(189043);
function e$(e) {
    let { place: t, className: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            1 === t ? (0, i.jsx)("span", { className: eW.EU, "aria-hidden": !0 }) : null,
            (0, i.jsx)(eQ, { config: 1 === t ? eK : 2 === t ? eV : eq, className: l }),
        ],
    });
}
let eK = {
        viewBox: "0 0 156 223.524",
        width: 156,
        height: 223.524,
        path: "M18 22C18 19.7909 19.7909 18 22 18H134C136.209 18 138 19.7909 138 22V173.402C138 174.915 137.147 176.298 135.795 176.977L79.7951 205.099C78.6656 205.666 77.3344 205.666 76.2049 205.099L20.2049 176.977C18.8532 176.298 18 174.915 18 173.402V22Z",
        tintTransform: "translate(78 18) rotate(90) scale(188 120)",
        tintColor: "#FFB06F",
        border: { x1: 25.435, y1: 18, x2: 64.37, y2: 211.909 },
        borderColors: ["#E3C784", "#846416", "#D0B679"],
        borderEndOpacity: 0.916,
        hasGlow: !0,
    },
    eY =
        "M0 4C0 1.79086 1.79086 0 4 0H92C94.2091 0 96 1.79086 96 4V126.289C96 127.726 95.2299 129.052 93.9823 129.764L49.9823 154.869C48.7537 155.57 47.2463 155.57 46.0177 154.869L2.01767 129.764C0.770119 129.052 0 127.726 0 126.289V4Z",
    eV = {
        viewBox: "0 0 96 155.395",
        width: 96,
        height: 155.395,
        path: eY,
        tintTransform: "matrix(-2.656 156 -130.577 -2.879 48 0)",
        tintColor: "#8993FA",
        border: { x1: 5.948, y1: 0, x2: 38.463, y2: 160.535 },
        borderColors: ["#D7E7F1", "#5884A0", "#D7E7F1"],
    },
    eq = {
        viewBox: "0 0 96 155.395",
        width: 96,
        height: 155.395,
        path: eY,
        tintTransform: "matrix(0 156 -85.016 -17.4 48 0)",
        tintColor: "#FF6831",
        border: { x1: 6.204, y1: -9.81, x2: 32.417, y2: 135.978 },
        borderColors: ["#FFB97B", "#A96830", "#FFB97B"],
        borderEndOpacity: 0.916,
    };
function eQ(e) {
    let { config: t, className: l } = e,
        n = s.useId(),
        a = `#${n}-surface`;
    return (0, i.jsxs)("svg", {
        className: l,
        "aria-hidden": "true",
        focusable: "false",
        width: t.width,
        height: t.height,
        preserveAspectRatio: "none",
        viewBox: t.viewBox,
        fill: "none",
        children: [
            (0, i.jsxs)("g", {
                filter: !0 === t.hasGlow ? `url(#${n}-glow)` : void 0,
                children: [
                    (0, i.jsx)("use", { href: a, fill: o.A.colors.BACKGROUND_SURFACE_HIGH.css }),
                    (0, i.jsx)("use", { href: a, fill: `url(#${n}-tint)`, fillOpacity: "0.25" }),
                    (0, i.jsx)("mask", {
                        id: `${n}-stroke-mask`,
                        fill: "white",
                        children: (0, i.jsx)("use", { href: a }),
                    }),
                    (0, i.jsx)("use", {
                        href: a,
                        strokeWidth: "2",
                        stroke: `url(#${n}-border)`,
                        mask: `url(#${n}-stroke-mask)`,
                    }),
                ],
            }),
            (0, i.jsxs)("defs", {
                children: [
                    (0, i.jsx)("path", { id: `${n}-surface`, d: t.path }),
                    !0 === t.hasGlow
                        ? (0, i.jsxs)("filter", {
                              id: `${n}-glow`,
                              x: "0",
                              y: "0",
                              width: "156",
                              height: "223.524",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                  (0, i.jsx)("feColorMatrix", {
                                      in: "SourceAlpha",
                                      type: "matrix",
                                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                      result: "hardAlpha",
                                  }),
                                  (0, i.jsx)("feGaussianBlur", { in: "hardAlpha", stdDeviation: "9" }),
                                  (0, i.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                  (0, i.jsx)("feColorMatrix", {
                                      type: "matrix",
                                      values: "0 0 0 0 0.961 0 0 0 0 0.601 0 0 0 0 0.098 0 0 0 0.41 0",
                                      result: "outerGlow",
                                  }),
                                  (0, i.jsx)("feGaussianBlur", { in: "hardAlpha", stdDeviation: "2.5" }),
                                  (0, i.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                  (0, i.jsx)("feColorMatrix", {
                                      type: "matrix",
                                      values: "0 0 0 0 1 0 0 0 0 0.881 0 0 0 0 0.713 0 0 0 0.35 0",
                                      result: "highlightGlow",
                                  }),
                                  (0, i.jsx)("feGaussianBlur", { in: "hardAlpha", stdDeviation: "7.5" }),
                                  (0, i.jsx)("feComposite", {
                                      in2: "hardAlpha",
                                      operator: "arithmetic",
                                      k2: "-1",
                                      k3: "1",
                                  }),
                                  (0, i.jsx)("feColorMatrix", {
                                      type: "matrix",
                                      values: "0 0 0 0 0.961 0 0 0 0 0.299 0 0 0 0 0.098 0 0 0 0.21 0",
                                      result: "innerGlow",
                                  }),
                                  (0, i.jsxs)("feMerge", {
                                      children: [
                                          (0, i.jsx)("feMergeNode", { in: "outerGlow" }),
                                          (0, i.jsx)("feMergeNode", { in: "highlightGlow" }),
                                          (0, i.jsx)("feMergeNode", { in: "SourceGraphic" }),
                                          (0, i.jsx)("feMergeNode", { in: "innerGlow" }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("radialGradient", {
                        id: `${n}-tint`,
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: t.tintTransform,
                        children: [
                            (0, i.jsx)("stop", { stopColor: t.tintColor }),
                            (0, i.jsx)("stop", { offset: "1", stopColor: t.tintColor, stopOpacity: "0" }),
                        ],
                    }),
                    (0, i.jsxs)("linearGradient", {
                        id: `${n}-border`,
                        x1: t.border.x1,
                        y1: t.border.y1,
                        x2: t.border.x2,
                        y2: t.border.y2,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            (0, i.jsx)("stop", { stopColor: t.borderColors[0] }),
                            (0, i.jsx)("stop", { offset: "0.514", stopColor: t.borderColors[1] }),
                            (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: t.borderColors[2],
                                stopOpacity: t.borderEndOpacity,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var eZ = l(83827),
    eX = l(81466),
    eJ = l(406810),
    e0 = l(687966),
    e1 = l(683063),
    e2 = l(573435),
    e6 = l(409626),
    e3 = l(692969),
    e4 = l(396583),
    e9 = l(46653),
    e8 = l(994500);
function e7(e, t) {
    let l = t.user_id,
        n = (0, D.bG)([e9.default], () => e9.default.getId() === l, [l]);
    return er(e, l, { showYouSuffix: n });
}
function e5(e) {
    return (0, D.bG)([e8.A], () => (e8.A.isBlocked(e) ? "blocked" : e8.A.isIgnored(e) ? "ignored" : null), [e]);
}
function te(e) {
    switch (e) {
        case "blocked":
            return C.intl.string(J.default.I3YOjC);
        case "ignored":
            return C.intl.string(J.default.CfMzwe);
    }
}
function tt(e, t) {
    let l = (0, D.bG)([Y.default], () => Y.default.getCurrentUser()?.id),
        {
            isSharingActivity: n,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: a,
            hasFetchedConsents: r,
        } = (0, X.T4)(e),
        d = !n || !i || !a;
    return s.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == l) return t;
        let e = t.entries.filter((e) => e.user_id !== l);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, l, r]);
}
var tl = l(518477),
    tn = l(870087);
function ti(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: a,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: o = !1,
            rowRef: c,
            onClick: u,
            metricWidth: m,
        } = e,
        x = e7(t, l),
        h = l.application_ids[0],
        f = null != h ? ef(a, h) : void 0,
        g = l.user_id,
        p = s.useCallback(() => {
            (u?.("row"),
                (0, eP.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: tl.RP.ACTIVITY,
                    scrollTarget: tl.bk.RECENT_ACTIVITY,
                }));
        }, [u, g, t]);
    return (0, i.jsxs)("div", {
        ref: c,
        "aria-hidden": o,
        inert: o,
        className: j()(tn.nM, { [tn.Bh]: r && !o, [tn.lR]: d }),
        children: [
            (0, i.jsx)(ts, {
                guildId: t,
                entry: l,
                identity: x,
                lastPlayedGame: f,
                onClick: o ? void 0 : () => u?.("row"),
            }),
            (0, i.jsx)(td, { entry: l, stat: n, width: m, onClick: o ? void 0 : p }),
            (0, i.jsx)(tg, {
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: a,
                onOpenActivity: o ? void 0 : p,
                onTrackClick: () => u?.("row_game"),
            }),
        ],
    });
}
function ts(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: a } = e,
        r = e5(l.user_id),
        d = null != r,
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ta, { rank: l.rank }),
                d
                    ? (0, i.jsx)("span", {
                          className: tn.gt,
                          children:
                              "blocked" === r
                                  ? (0, i.jsx)(eL.DenyIcon, {
                                        size: "xs",
                                        color: o.A.colors.ICON_SUBTLE,
                                        "aria-hidden": !0,
                                    })
                                  : (0, i.jsx)(eU.EyeSlashIcon, {
                                        size: "xs",
                                        color: o.A.colors.ICON_SUBTLE,
                                        "aria-hidden": !0,
                                    }),
                      })
                    : (0, i.jsx)(O.eu, {
                          size: B._3.SIZE_32,
                          src: n.user?.getAvatarURL(t, (0, B.FT)(B._3.SIZE_32)) ?? void 0,
                          className: tn.my,
                          "aria-hidden": !0,
                      }),
                (0, i.jsxs)("div", {
                    className: tn.Dc,
                    children: [
                        (0, i.jsx)(y.D, {
                            variant: "heading-xs/semibold",
                            color: d ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            children:
                                null != r
                                    ? te(r)
                                    : (0, i.jsx)(F.g, {
                                          name: n.displayName,
                                          colorString: n.member?.colorString ?? null,
                                          colorStrings: n.roleColorStrings,
                                          displayNameStylesFont: n.displayNameStylesFont,
                                      }),
                        }),
                        !d &&
                            null != s &&
                            (0, i.jsx)(_.E, {
                                variant: "body-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: C.intl.formatToPlainString(J.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        }),
        { user: u } = n;
    return null == u || null == a
        ? (0, i.jsx)("div", { className: tn.D_, children: c })
        : (0, i.jsx)(U.D, {
              className: j()(tn.D_, tn.FB),
              onClick: () => {
                  (a(),
                      (0, eP.openUserProfileModal)({
                          userId: u.id,
                          guildId: t,
                          tabSection: tl.RP.ACTIVITY,
                          scrollTarget: tl.bk.RECENT_ACTIVITY,
                      }));
              },
              children: c,
          });
}
function ta(e) {
    let { rank: t } = e,
        l = C.intl.formatToPlainString(J.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: tn.Tm, children: (0, i.jsx)(eZ.t, { alt: l }) });
        case 2:
            return (0, i.jsx)("div", { className: tn.Tm, children: (0, i.jsx)(eT, { alt: l }) });
        case 3:
            return (0, i.jsx)("div", { className: tn.Tm, children: (0, i.jsx)(eD, { alt: l }) });
        default:
            return (0, i.jsxs)("div", {
                className: tn.mH,
                children: [
                    (0, i.jsx)(P.A, { children: l }),
                    (0, i.jsx)(_.E, {
                        variant: "body-sm/semibold",
                        color: "text-muted",
                        "aria-hidden": !0,
                        children: t,
                    }),
                ],
            });
    }
}
function tr(e) {
    let { stat: t } = e;
    switch (t) {
        case ev.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eX.CalendarIcon, { size: "xxs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case ev.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eJ.ClockIcon, { size: "xxs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case ev.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(e0.GameControllerIcon, { size: "xxs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function td(e) {
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = eH(t, l),
        d = tn.TH,
        o = null != n ? { width: n } : void 0,
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: tn.bf,
                    children: [
                        (0, i.jsx)(tr, { stat: l }),
                        (0, i.jsx)(_.E, { variant: "body-sm/medium", color: "text-subtle", children: a }),
                    ],
                }),
                null != r && (0, i.jsx)(_.E, { variant: "body-xs/medium", color: "text-muted", children: r }),
            ],
        });
    return null == s
        ? (0, i.jsx)("div", { className: d, style: o, children: c })
        : (0, i.jsx)(U.D, {
              className: d,
              style: o,
              "aria-label": C.intl.string(J.default.o6mBdl),
              onClick: s,
              children: c,
          });
}
function to(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)(e2.Ay, {
        mask: l ? e2.l8[24] : e2.Ay.Masks.SQUIRCLE,
        width: 24,
        height: 24,
        children:
            null != t.iconUrl
                ? (0, i.jsx)("img", { className: tn.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                : (0, i.jsx)("span", { className: tn.ct, "aria-hidden": !0 }),
    });
}
function tc(e) {
    let { game: t, notched: l, onOpenActivity: n, onTrackClick: s } = e,
        a = (0, e3.A)({
            location: "GameIconButton",
            applicationId: t.id,
            source: e6.GameProfileSources.GuildSpaceLeaderboard,
        });
    return (0, i.jsx)(U.D, {
        className: tn.rO,
        "aria-label":
            null != a
                ? C.intl.formatToPlainString(C.t["8QLQB+"], { gameName: t.name })
                : C.intl.string(J.default.o6mBdl),
        onClick: () => {
            null == a ? n() : (s?.(), a());
        },
        children: (0, i.jsx)(to, { game: t, notched: l }),
    });
}
function tu(e, t) {
    let l = e.filter((e) => null != e.iconUrl || e.isLoading).slice(0, t > 3 ? 2 : 3),
        n = Math.max(0, t - l.length);
    return { visibleGames: l, overflowCount: n };
}
function tm(e) {
    let { count: t, onClick: l } = e,
        n = (0, i.jsx)(e2.Ay, {
            mask: e2.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children: (0, i.jsx)("div", {
                className: tn.p0,
                children: (0, i.jsx)(_.E, {
                    variant: "body-xs/semibold",
                    color: "text-subtle",
                    children: C.intl.formatToPlainString(J.default.JiMMEd, { count: t }),
                }),
            }),
        });
    return null != l
        ? (0, i.jsx)(U.D, { className: tn.rO, "aria-label": C.intl.string(J.default.o6mBdl), onClick: l, children: n })
        : (0, i.jsx)("span", { className: tn.rO, children: n });
}
function tx(e) {
    let { played: t, totalCount: l, interaction: n } = e,
        { visibleGames: s, overflowCount: a } = tu(t, l);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s.map((e, t) => {
                let l = a > 0 || t !== s.length - 1;
                return null != n
                    ? (0, i.jsx)(tc, { game: e, notched: l, ...n }, `${e.id}-${t}`)
                    : (0, i.jsx)(
                          "span",
                          { className: tn.rO, "aria-hidden": !0, children: (0, i.jsx)(to, { game: e, notched: l }) },
                          `${e.id}-${t}`,
                      );
            }),
            a > 0 ? (0, i.jsx)(tm, { count: a, onClick: n?.onOpenActivity }) : null,
        ],
    });
}
function th(e) {
    let { played: t, totalCount: l } = e;
    return (0, i.jsx)("div", { className: tn.Nw, children: (0, i.jsx)(tx, { played: t, totalCount: l }) });
}
function tf(e) {
    let { played: t, totalCount: l, children: n } = e,
        { visibleGames: s, overflowCount: a } = tu(t, l),
        r = Math.max(1, s.length + Number(a > 0));
    return (0, i.jsx)(e1.u, {
        body:
            0 === t.length
                ? C.intl.string(J.default["7CrlYb"])
                : 1 === t.length
                  ? C.intl.formatToPlainString(J.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? C.intl.formatToPlainString(J.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : 3 === t.length && 3 === l
                      ? C.intl.formatToPlainString(J.default["7h8GUv"], {
                            firstGame: t[0].name,
                            secondGame: t[1].name,
                            thirdGame: t[2].name,
                        })
                      : C.intl.formatToPlainString(J.default.bxcrSz, {
                            firstGame: t[0].name,
                            secondGame: t[1].name,
                            otherCount: l - 2,
                        }),
        asset: s.length > 0 ? (0, i.jsx)(th, { played: t, totalCount: l }) : void 0,
        assetSize: 24 * r - 5 * (r - 1),
        children: n,
    });
}
function tg(e) {
    let { applicationIds: t, applicationCount: l, games: n, onOpenActivity: s, onTrackClick: a } = e,
        r = eg(n, t);
    return null == s
        ? (0, i.jsx)("div", { className: tn.ag, children: (0, i.jsx)(th, { played: r, totalCount: l }) })
        : (0, i.jsx)("div", {
              className: tn.ag,
              children: (0, i.jsx)(tf, {
                  played: r,
                  totalCount: l,
                  children: (0, i.jsx)("div", {
                      className: j()(tn.Nw, tn.Dz),
                      children: (0, i.jsx)(tx, {
                          played: r,
                          totalCount: l,
                          interaction: { onOpenActivity: s, onTrackClick: a },
                      }),
                  }),
              }),
          });
}
let tp = "/assets/df4c2af7174fe116.png",
    tj = l.p + "ed4a4098f461e855.webm",
    tv = l.p + "ba010552067644bd.mp4";
function tb(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
        o = [eW.HC, eW.th, eW.Ou];
    return (0, i.jsxs)("div", {
        className: eW.pI,
        role: "list",
        "aria-label": C.intl.string(J.default.wKXLfQ),
        children: [
            (0, i.jsx)(t_, {}),
            l.map((e, l) =>
                (0, i.jsx)(
                    tN,
                    {
                        guildId: t,
                        entry: e,
                        place: l + 1,
                        columnClassName: o[l],
                        stat: n,
                        games: s,
                        isCurrentUser: e === a,
                        currentUserPillarRef: e === a ? r : void 0,
                        onClick: d,
                    },
                    e.rank,
                ),
            ),
        ],
    });
}
function t_() {
    let e = (0, D.bG)([et.Ay], () => et.Ay.useReducedMotion),
        t = (0, eO.TM)();
    return (0, i.jsx)("div", {
        className: eW.Tp,
        "aria-hidden": !0,
        children: e
            ? (0, i.jsx)("img", { className: eW.je, src: tp, alt: "" })
            : (0, i.jsx)(eG.A, {
                  className: eW.je,
                  poster: tp,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  controls: !1,
                  disablePictureInPicture: !0,
                  children: (0, i.jsx)("source", { src: t ? tv : tj, type: t ? "video/mp4" : "video/webm" }),
              }),
    });
}
function tN(e) {
    let {
            guildId: t,
            entry: l,
            place: n,
            columnClassName: s,
            stat: a,
            games: r,
            isCurrentUser: d,
            currentUserPillarRef: c,
            onClick: u,
        } = e,
        m = eg(r, l.application_ids),
        x = e7(t, l),
        h = e5(l.user_id),
        f = null != h,
        { primary: g, secondaryShort: p } = eH(l, a),
        v = 1 === n ? B._3.SIZE_72 : B._3.SIZE_40,
        b =
            1 === n
                ? "/assets/607118ac1eb0343b.svg"
                : 2 === n
                  ? "/assets/cec3154aa136b491.svg"
                  : "/assets/2e0f6ee6b4671439.svg",
        N = 1 === n ? eS.b : 2 === n ? eT : eD,
        y = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(e$, { place: n, className: eW.Nr }),
                (0, i.jsxs)("div", {
                    className: j()(eW.Ux, { [eW.Oe]: null == p }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: eW.R3,
                            children: [
                                f
                                    ? (0, i.jsx)("span", {
                                          className: eW.gt,
                                          children:
                                              "blocked" === h
                                                  ? (0, i.jsx)(eL.DenyIcon, {
                                                        size: 1 === n ? "md" : "sm",
                                                        color: o.A.colors.ICON_SUBTLE,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)(eU.EyeSlashIcon, {
                                                        size: 1 === n ? "md" : "sm",
                                                        color: o.A.colors.ICON_SUBTLE,
                                                        "aria-hidden": !0,
                                                    }),
                                      })
                                    : (0, i.jsx)(O.eu, {
                                          size: v,
                                          className: eW.my,
                                          src: x.user?.getAvatarURL(t, (0, B.FT)(v)) ?? void 0,
                                          "aria-hidden": !0,
                                      }),
                                (0, i.jsx)("img", { className: eW.vj, src: b, alt: "", "aria-hidden": !0 }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: eW.WD,
                            children: [
                                (0, i.jsx)(_.E, {
                                    variant: "body-sm/semibold",
                                    color: f ? "text-subtle" : "text-default",
                                    lineClamp: 1,
                                    className: eW.IY,
                                    children:
                                        null != h
                                            ? te(h)
                                            : (0, i.jsx)(F.g, {
                                                  name: x.displayName,
                                                  colorString: x.member?.colorString ?? null,
                                                  colorStrings: x.roleColorStrings,
                                                  displayNameStylesFont: x.displayNameStylesFont,
                                              }),
                                }),
                                (0, i.jsx)(tf, {
                                    played: m,
                                    totalCount: l.application_count,
                                    children: (0, i.jsxs)("div", {
                                        className: eW.c_,
                                        children: [
                                            (0, i.jsx)(_.E, {
                                                variant: "body-xs/medium",
                                                color: "text-default",
                                                lineClamp: 1,
                                                className: eW.p,
                                                children: g,
                                            }),
                                            null != p &&
                                                (0, i.jsx)(_.E, {
                                                    variant: "body-xs/medium",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    className: eW.p,
                                                    children: p,
                                                }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(N, {
                    className: eW.dR,
                    width: 24,
                    height: 24,
                    alt: C.intl.formatToPlainString(J.default.I4JiAQ, { rank: n }),
                }),
            ],
        }),
        { user: A } = x;
    return (0, i.jsx)("div", {
        className: s,
        role: "listitem",
        ref: d ? c : void 0,
        children: (0, i.jsx)(U.D, {
            className: eW.fs,
            tabIndex: null != A ? 0 : -1,
            "aria-disabled": null == A,
            onClick:
                null != A
                    ? () => {
                          (u?.(),
                              (0, eP.openUserProfileModal)({
                                  userId: A.id,
                                  guildId: t,
                                  tabSection: tl.RP.ACTIVITY,
                                  scrollTarget: tl.bk.RECENT_ACTIVITY,
                              }));
                      }
                    : void 0,
            children: y,
        }),
    });
}
var ty = l(652215),
    tA = l(219047);
function tI(e) {
    let { guildId: t, data: l, inModal: n = !1, column: a, disabled: r = !1 } = e,
        { stat: d, entries: o } = l,
        c = (0, D.bG)([Y.default], () => Y.default.getCurrentUser()?.id),
        u = s.useMemo(() => o.find((e) => e.user_id === c) ?? null, [o, c]),
        m = s.useMemo(() => {
            let e = o.slice(0, 20);
            return null == u || e.includes(u) ? e : [...e, u];
        }, [o, u]),
        x = s.useMemo(() => Array.from(new Set(m.map((e) => e.user_id))), [m]);
    (0, W.k6)(t, x);
    let h = ey(d),
        g = eh(s.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
        p = eb(l),
        v = eN(l),
        b = "podium" === v,
        _ = T({ expanded: n, column: a }),
        N = [m[0], m[1], m[2]],
        y = s.useMemo(() => (b ? m.slice(N.length) : m), [b, m, N.length]),
        A = b && null != u && N.includes(u),
        { scrollerRef: I, scrollerNode: E, userRowRef: k, floatingRowPosition: w, scrollToUserRow: R } = el(),
        M = (function (e) {
            let [t, l] = s.useState(!1);
            return (
                s.useEffect(() => {
                    if (null == e) return;
                    function t() {
                        l(0 !== e.clientHeight && e.scrollHeight - e.scrollTop - e.clientHeight <= 1);
                    }
                    (t(), e.addEventListener("scroll", t, { passive: !0 }));
                    let n = new ResizeObserver(t);
                    return (
                        n.observe(e),
                        () => {
                            (e.removeEventListener("scroll", t), n.disconnect());
                        }
                    );
                }, [e]),
                t
            );
        })(E),
        G = null == u && null != c,
        P = !A && null != u && null != w,
        O = y.length > 0 ? y : m,
        { metricMeasureRef: B, metricWidth: F } = (function () {
            let [e, t] = s.useState(null),
                [l, n] = s.useState(null);
            return (
                s.useEffect(() => {
                    if (null == e) return;
                    let t = new ResizeObserver((e) => {
                        let [t] = e;
                        null != t && n(Math.ceil(t.borderBoxSize[0]?.inlineSize ?? t.contentRect.width));
                    });
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                { metricMeasureRef: t, metricWidth: l }
            );
        })(),
        z = (0, i.jsx)("div", {
            ref: B,
            className: tA.V$,
            "aria-hidden": !0,
            children: O.map((e) => (0, i.jsx)(td, { entry: e, stat: d }, e.user_id)),
        });
    !(function (e) {
        let {
                guildId: t,
                leaderboardLength: l,
                leaderboardState: n,
                leaderboardView: i,
                metric: a,
                isAtEnd: r,
                isEmpty: d,
                disabled: o = !1,
            } = e,
            c = s.useRef(null),
            u = `${t}:${l}:${n}:${i}:${a}`,
            m = s.useCallback(() => {
                c.current !== u &&
                    ((c.current = u),
                    f.default.track(ty.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: l,
                        leaderboard_state: n,
                        leaderboard_view: i,
                        metric: a,
                    }));
            }, [t, u, l, n, i, a]);
        s.useEffect(() => {
            !o && (d || r) && m();
        }, [o, d, r, m]);
    })({
        guildId: t,
        leaderboardLength: p ? 0 : m.length,
        leaderboardState: v,
        leaderboardView: _,
        metric: h,
        isAtEnd: M,
        isEmpty: p,
        disabled: r,
    });
    let H = s.useCallback(
            (e) => {
                r ||
                    f.default.track(ty.HAw.LEADERBOARD_CLICK, {
                        location: e,
                        guild_id: t,
                        leaderboard_state: v,
                        leaderboard_view: _,
                        metric: h,
                    });
            },
            [t, v, _, h, r],
        ),
        $ = s.useCallback(
            (e) => {
                let l = e === u;
                return (0, i.jsx)(
                    ti,
                    {
                        guildId: t,
                        entry: e,
                        stat: d,
                        games: g,
                        isCurrentUser: l,
                        shouldDimForCurrentUser: l && P,
                        rowRef: l ? k : void 0,
                        onClick: H,
                        metricWidth: F ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [P, u, g, t, d, k, H, F],
        );
    return p
        ? (0, i.jsx)("div", {
              className: tA.Cm,
              children: (0, i.jsx)(eE, { guildId: t, onActivitySharingClick: () => H("activity_sharing") }),
          })
        : null == F
          ? (0, i.jsxs)("div", { className: tA.rf, children: [z, (0, i.jsx)(S, {})] })
          : (0, i.jsxs)("div", {
                className: tA.rf,
                children: [
                    z,
                    (0, i.jsxs)("div", {
                        className: tA.SY,
                        children: [
                            (0, i.jsxs)(L.Ip, {
                                fade: !0,
                                className: j()(tA.p_, { [tA.zE]: n, [tA.Ng]: G }),
                                ref: I,
                                children: [
                                    b &&
                                        (0, i.jsxs)("div", {
                                            className: tA.ZH,
                                            children: [
                                                (0, i.jsx)(tb, {
                                                    guildId: t,
                                                    entries: N,
                                                    stat: d,
                                                    games: g,
                                                    currentUserEntry: u,
                                                    currentUserPillarRef: k,
                                                    onClick: () => H("podium"),
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: tA.vG,
                                                    "aria-hidden": !0,
                                                    inert: !0,
                                                    children: N.map((e) =>
                                                        (0, i.jsx)(
                                                            "div",
                                                            {
                                                                className: tA.iS,
                                                                children: (0, i.jsx)(ti, {
                                                                    guildId: t,
                                                                    entry: e,
                                                                    stat: d,
                                                                    games: g,
                                                                    isCurrentUser: e === u,
                                                                    shouldDimForCurrentUser: !1,
                                                                }),
                                                            },
                                                            e.user_id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                    y.map($),
                                ],
                            }),
                            P || (G && !M) ? (0, i.jsx)(Q, { position: "top" !== w || G ? "bottom" : "top" }) : null,
                            P &&
                                (0, i.jsx)(Z, {
                                    position: w,
                                    children: (0, i.jsx)(U.D, {
                                        className: tA.Po,
                                        "aria-label": C.intl.string(J.default.d0Z8kd),
                                        onClick: R,
                                        children: (0, i.jsx)(ti, {
                                            guildId: t,
                                            entry: u,
                                            stat: d,
                                            games: g,
                                            isCurrentUser: !0,
                                            shouldDimForCurrentUser: !1,
                                            isFloating: !0,
                                            onClick: H,
                                            metricWidth: F ?? void 0,
                                        }),
                                    }),
                                }),
                            G && (0, i.jsx)(tE, { guildId: t, onActivitySharingClick: () => H("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(tC, { computedAt: l.computed_at, inModal: n }),
                ],
            });
}
function tC(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: tA.z8,
            children: [
                (0, i.jsx)(G.RefreshIcon, { size: "xxs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(_.E, {
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    children: C.intl.string(J.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: tA.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(tA.qr, { [tA.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(m.m, {
                  text: C.intl.formatToPlainString(J.default["1bt50t"], {
                      timestamp: (0, V.mk)(new Date(t)).toLowerCase(),
                  }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function tE(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, X.T4)(t),
        a = null == n ? null : { requirement: n, ...ee(n, "leaderboard") },
        r = (0, D.bG)([K.A], () => K.A.getStatus() === ty.clD.INVISIBLE),
        d = C.intl.string(J.default.toxuHd),
        c = !1;
    null != a ? (d = a.body) : r && ((d = C.intl.string(J.default.PTDDhW)), (c = !0));
    let [u] = s.useState(null != a),
        [m] = s.useState(c),
        x = null == a && !c && u,
        h = null == a && !c && m;
    h ? (d = C.intl.string(J.default.cgRADC)) : x && (d = C.intl.string(J.default.dqYuni));
    let {
        user: f,
        member: g,
        name: p,
        roleColorStrings: j,
        displayNameStylesFont: v,
    } = er(
        t,
        (0, D.bG)([Y.default], () => Y.default.getCurrentUser()?.id ?? ""),
    );
    return null == f
        ? null
        : (0, i.jsxs)("div", {
              className: tA.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: tA.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tA.nk,
                              children: [
                                  (0, i.jsx)(P.A, { children: C.intl.string(J.default["oHdW+u"]) }),
                                  (0, i.jsx)(_.E, {
                                      variant: "body-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(O.eu, {
                              size: B._3.SIZE_32,
                              src: f.getAvatarURL(t, (0, B.FT)(B._3.SIZE_32)) ?? void 0,
                              className: tA.SA,
                              "aria-hidden": !0,
                              status: r ? ty.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: tA.ko,
                              children: [
                                  (0, i.jsx)(y.D, {
                                      variant: "heading-xs/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(F.g, {
                                          name: p,
                                          colorString: g?.colorString ?? null,
                                          colorStrings: j,
                                          displayNameStylesFont: v,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: tA.LF,
                                      children: [
                                          x || h
                                              ? (0, i.jsx)(z.CheckmarkSmallIcon, {
                                                    size: "xs",
                                                    color: o.A.colors.ICON_FEEDBACK_POSITIVE,
                                                    "aria-hidden": !0,
                                                })
                                              : null,
                                          (0, i.jsx)(_.E, {
                                              variant: "body-xs/medium",
                                              color: "text-subtle",
                                              children: d,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  null != a &&
                      (0, i.jsx)("div", {
                          className: tA.rl,
                          children: (0, i.jsx)(H.$, {
                              variant: "secondary",
                              size: "sm",
                              text: a.cta,
                              onClick: () => {
                                  (l(), eI(t, a.requirement, C.intl.string(J.default.PJn0ih)));
                              },
                          }),
                      }),
                  c &&
                      (0, i.jsx)(H.$, {
                          variant: "secondary",
                          size: "sm",
                          text: C.intl.string(C.t.fwPurU),
                          onClick: () => {
                              (0, $.A)({ nextStatus: ty.clD.ONLINE, prevStatus: ty.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var tS = l(665260),
    tk = l(620632),
    tw = l(143129),
    tT = l(683071),
    tR = l(825484),
    tM = l(71393),
    tD = l(967198),
    tL = l(313627);
let tU = ty.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var tG = l(224640),
    tP = l(20742),
    tO = l(253932),
    tB = l(515746);
function tF(e) {
    let { data: t } = e,
        l = (0, ej.K)(t.stat),
        {
            ended: n,
            endDate: a,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + ep.A.Seconds.WEEK) * ep.A.Millis.SECOND,
                [l, n] = s.useState(() => Date.now()),
                i = t - l,
                a = i <= 0,
                r = i - (Math.ceil(i / ep.A.Millis.DAY) - 1) * ep.A.Millis.DAY;
            return (
                (0, e4.A)(() => n(Date.now()), a ? null : r),
                s.useMemo(
                    () => ({
                        ended: a,
                        endDate: new Date(t),
                        badgeLabel: a
                            ? C.intl.string(J.default["J8r/7L"])
                            : C.intl.formatToPlainString(J.default["PuaR+2"], { days: Math.ceil(i / ep.A.Millis.DAY) }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = tO.PZ.useSetting(),
        o = 2 > (0, V.m_)(a, new Date()) ? (0, V.mk)(a, !1, d).toLowerCase() : (0, V.i$)(a, "L LT", d).toLowerCase(),
        c = n
            ? C.intl.format(J.default.kG9XmM, { endedAt: o, nextStatName: (0, ej.K)(t.next_stat).name })
            : C.intl.format(J.default["X+VLqi"], { statQuestion: l.question, endsAt: o });
    return (0, i.jsx)(e1.u, {
        title: l.name,
        body: c,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(tB.qS, n ? tB.yM : tB.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(_.E, {
                variant: "body-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function tz(e) {
    let { onHoverEnd: t, segmentKey: l, enabled: n = !0 } = e,
        [i, a] = s.useState(null),
        r = s.useRef(null),
        d = s.useRef(t),
        o = s.useRef(l),
        c = s.useCallback((e) => {
            let t = r.current;
            if (null == t) return;
            r.current = null;
            let l = Date.now() - t;
            l < 250 || d.current({ duration: Math.round(l) / 1e3, flush: e });
        }, []);
    return (
        s.useEffect(() => {
            (o.current !== l && null != r.current && (c(!1), (r.current = Date.now())),
                (o.current = l),
                (d.current = t));
        }, [l, t, c]),
        s.useEffect(() => {
            if (null != i && n)
                return (
                    i.addEventListener("mouseenter", e),
                    i.addEventListener("mouseleave", t),
                    window.addEventListener("blur", l),
                    document.addEventListener("visibilitychange", s),
                    window.addEventListener("pagehide", a),
                    () => {
                        (i.removeEventListener("mouseenter", e),
                            i.removeEventListener("mouseleave", t),
                            window.removeEventListener("blur", l),
                            document.removeEventListener("visibilitychange", s),
                            window.removeEventListener("pagehide", a),
                            c(!0));
                    }
                );
            function e() {
                r.current = Date.now();
            }
            function t() {
                c(!1);
            }
            function l() {
                c(!1);
            }
            function s() {
                "hidden" === document.visibilityState && c(!0);
            }
            function a() {
                c(!0);
            }
        }, [i, n, c]),
        s.useCallback((e) => {
            a(e);
        }, [])
    );
}
function tH(e) {
    let { guildId: t, data: l, expanded: n, column: i, enabled: a } = e;
    return tz({
        onHoverEnd: s.useCallback(
            (e) => {
                let { duration: s, flush: a } = e;
                null != l &&
                    f.default.track(
                        ty.HAw.LEADERBOARD_HOVER,
                        {
                            guild_id: t,
                            duration: s,
                            leaderboard_state: eN(l),
                            leaderboard_view: T({ expanded: n, column: i }),
                            metric: ey(l.stat),
                        },
                        { flush: a },
                    );
            },
            [t, l, n, i],
        ),
        enabled: a,
    });
}
var tW = l(460614);
function t$(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = tt(t, l),
        a = tH({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(tG.d, {
              size: "lg",
              "aria-label": e_(s),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: a,
                  children: [
                      (0, i.jsxs)("div", {
                          className: tW.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tW.LD,
                                  children: [
                                      (0, i.jsx)(u.TrophyIcon, {
                                          size: "xs",
                                          color: o.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(y.D, {
                                          variant: "heading-xs/medium",
                                          className: tW.DD,
                                          children: e_(s),
                                      }),
                                      (0, i.jsx)(tF, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(tP.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: tW.rf,
                          children: (0, i.jsx)(tI, { guildId: t, data: s, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var tK = l(452027),
    tY = l(103557),
    tV = l(95477),
    tq = l(241326),
    tQ = l(2553),
    tZ = l(405810),
    tX = l(488428),
    tJ = l(776231);
let t0 = (0, eO.cy)();
function t1(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (t0 ? "webp" : "gif") : t0 ? "webp" : "jpg",
        { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = ty.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != s ? `https://${s}${r}` : location.protocol + a + r,
        o = { size: (0, tJ.kr)(500 * (0, tJ.mZ)()) };
    return ("jpg" === i && (o.quality = "lossless"), "webp" === i && n && (o.animated = !0), (d += `?${tX.As(o)}`));
}
var t2 = l(868602);
function t6(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: o, className: c, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [d, o, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/1c5d5dd760fa15de3c2ad23c6b191aa9fd5eefde3c29367503b5d90af485a3e3.svg",
        className: (0, a.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var t3 = l(22231),
    t4 = l(445187);
function t9(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: o, className: c, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [d, o, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/d561fd91d87017743133e6f7c82388345a8938aa2434a28cc42077d126076514.svg",
        className: (0, a.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var t8 = l(770178),
    t7 = l(104171),
    t5 = l(619019),
    le = l(165862),
    lt = l(477782),
    ll = l(950305),
    ln = l(265872),
    li = l(966327),
    ls = l(788593),
    la = l(427262);
l(347661);
var lr = l(948852),
    ld = l(365611);
function lo(e) {
    let { guildId: t, applicationId: l, userIds: n, totalUsers: a, gameName: r } = e,
        d = s.useRef(null),
        c = (0, D.yK)([e8.A], () => n.filter((e) => !e8.A.isBlockedOrIgnored(e)).slice(0, 5), [n]),
        u = (0, D.yK)([Y.default], () => c.map((e) => Y.default.getUser(e)).filter(em.Vq), [c]),
        m = (0, D.cf)(
            [es.Ay],
            () => {
                let e = {};
                for (let l of u) e[l.id] = es.Ay.getNick(t, l.id) ?? la.Ay.getName(l);
                return e;
            },
            [t, u],
        ),
        x = Math.max(0, a - u.length),
        h = C.intl.formatToPlainString(J.default["XaT+x0"], { count: a, gameName: r }),
        f = C.intl.formatToPlainString(C.t.F6iMs4, { count: x }),
        g = s.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsxs)(le.W, {
                    navId: `popular-games-players-${l}`,
                    "aria-label": h,
                    onClose: n,
                    onSelect: void 0,
                    children: [
                        u.map((e) =>
                            (0, i.jsx)(
                                lt.Dr,
                                {
                                    id: e.id,
                                    label: m[e.id],
                                    leadingAccessory: {
                                        type: "avatar",
                                        src: e.getAvatarURL(t, (0, B.FT)(B._3.SIZE_24)),
                                    },
                                    iconLeft: () =>
                                        (0, i.jsx)(li.A, {
                                            user: e,
                                            size: B._3.SIZE_20,
                                            guildId: t,
                                            "aria-hidden": !0,
                                        }),
                                    action: () => (0, eP.openUserProfileModal)({ userId: e.id, guildId: t }),
                                },
                                e.id,
                            ),
                        ),
                        x > 0 ? (0, i.jsx)(lt.Dr, { id: `${l}-overflow`, label: f, disabled: !0 }) : null,
                    ],
                });
            },
            [l, t, h, m, x, f, u],
        ),
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ll.UserIcon, {
                    size: "custom",
                    width: 14,
                    height: 14,
                    color: o.A.colors.ICON_SUBTLE,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(_.E, {
                    tag: "span",
                    className: lr.Rd,
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: a,
                }),
            ],
        });
    return 0 === u.length
        ? (0, i.jsx)("div", { className: lr.Fk, role: "img", "aria-label": h, children: p })
        : (0, i.jsx)(ln.Y, {
              targetElementRef: d,
              position: "bottom",
              align: "left",
              renderPopout: g,
              children: (e) =>
                  (0, i.jsx)(U.D, { innerRef: d, className: j()(lr.Fk, lr.r6), ...e, "aria-label": h, children: p }),
          });
}
function lc(e) {
    let { guildId: t, entry: l, games: n, onClick: s } = e,
        { name: a, coverUrl: r, coverFallbackIconUrl: d, isLoading: o } = ef(n, l.application_id),
        c = (0, e3.A)({
            location: "PopularGamesGameCard",
            applicationId: l.application_id,
            source: e6.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        u = null != c;
    if (o)
        return (0, i.jsx)("div", {
            className: lr.Nr,
            role: "listitem",
            children: (0, i.jsx)("div", { className: ld.mD }),
        });
    let x = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)("div", {
                    className: j()(ld.PY, { [ld.vk]: u, [ld.iL]: u && (null != r || null != d) }),
                    children: (0, i.jsx)(ls.R, { imageSrc: r, iconSrc: d, gameName: a }),
                }),
            }),
            (0, i.jsx)(_.E, { variant: "body-sm/semibold", color: "text-default", lineClamp: 1, children: a }),
        ],
    });
    return (0, i.jsxs)("div", {
        className: lr.Nr,
        role: "listitem",
        children: [
            u
                ? (0, i.jsx)(U.D, {
                      className: j()(lr.LO, lr.vk),
                      onClick: () => {
                          (c(), s());
                      },
                      "aria-label": C.intl.formatToPlainString(C.t["8QLQB+"], { gameName: a }),
                      children: x,
                  })
                : (0, i.jsx)("div", { className: lr.LO, children: x }),
            (0, i.jsx)(lo, {
                guildId: t,
                applicationId: l.application_id,
                userIds: l.user_ids,
                totalUsers: l.total_users,
                gameName: a,
            }),
        ],
    });
}
function lu(e) {
    return 0 === e.games.length || e.total_users < 3;
}
function lm(e) {
    return lu(e) ? "empty_state" : "regular";
}
var lx = l(966756),
    lh = l(560328);
function lf(e) {
    let { guildId: t, requirement: l, onClick: n } = e;
    return (0, i.jsx)(w, {
        className: lh.p$,
        illustration: t9,
        title: C.intl.string(J.default.ULK65a),
        body: C.intl.format(null != l ? J.default.JDAHQV : J.default.LeSGal, { memberCount: 3 }),
        action:
            null != l
                ? (0, i.jsx)(H.$, {
                      variant: "secondary",
                      size: "sm",
                      text: C.intl.string(J.default.A4ZMJL),
                      onClick: () => {
                          (n(), eI(t, l, C.intl.string(J.default.e7pD5m)));
                      },
                  })
                : null,
    });
}
function lg(e) {
    let { guildId: t, requirement: l, onClick: n } = e,
        s = ee(l, "popular_games");
    return (0, i.jsxs)("div", {
        className: lh.UX,
        children: [
            (0, i.jsxs)("div", {
                className: lh.tD,
                children: [
                    (0, i.jsx)(y.D, {
                        variant: "heading-xs/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: C.intl.string(lx.default.WhdCGP),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children: s.body,
                    }),
                ],
            }),
            (0, i.jsx)(H.$, {
                variant: "secondary",
                size: "sm",
                text: s.cta,
                onClick: () => {
                    (n(), eI(t, l, C.intl.string(J.default.e7pD5m)));
                },
            }),
        ],
    });
}
function lp(e) {
    let { guildId: t, user: l } = e,
        n = ea.Ay.useName(t, void 0, l);
    return (0, i.jsx)(m.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsx)("span", {
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(O.eu, {
                src: l.getAvatarURL(t, (0, B.FT)(B._3.SIZE_24)),
                size: B._3.SIZE_24,
                "aria-hidden": !0,
            }),
        }),
    });
}
function lj(e) {
    let { guildId: t, memberIds: l, totalUsers: n, totalGames: s, isCompact: a } = e,
        r = a ? 2 : 4,
        d = (0, D.yK)(
            [e8.A, Y.default],
            () =>
                l
                    .filter((e) => !e8.A.isBlockedOrIgnored(e))
                    .map((e) => Y.default.getUser(e))
                    .filter(em.Vq)
                    .slice(0, r),
            [l, r],
        ),
        o = n - d.length;
    return (0, i.jsxs)("div", {
        className: lh.qr,
        children: [
            (0, i.jsx)(_.E, {
                className: lh.z,
                variant: "body-xs/normal",
                color: "text-muted",
                lineClamp: 1,
                children: C.intl.format(J.default.ED2GDQ, { memberCount: n, gameCount: s }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: lh.WM,
                    children: (0, i.jsx)(t7.Ay, {
                        users: d,
                        guildId: t,
                        size: t7.DN.SIZE_24,
                        max: d.length,
                        renderUser: function (e) {
                            return e instanceof t5.A ? (0, i.jsx)(lp, { guildId: t, user: e }) : null;
                        },
                        count: n,
                        hideMoreUsers: o <= 0,
                        renderMoreUsers: () =>
                            (0, i.jsx)("span", {
                                className: lh.ju,
                                children: (0, i.jsx)(_.E, {
                                    tag: "span",
                                    variant: "body-xs/semibold",
                                    color: "text-subtle",
                                    children: C.intl.formatToPlainString(J.default.G5PLYW, { count: o }),
                                }),
                            }),
                    }),
                }),
        ],
    });
}
function lv(e) {
    let { guildId: t, data: l, title: n, column: a, disabled: r } = e,
        {
            ref: d,
            visibleCount: o,
            isCompact: c,
        } = (function () {
            let e = s.useRef(null),
                [t, l] = s.useState({ visibleCount: 5, isCompact: !1 }),
                n = s.useCallback((e) => {
                    let { width: t } = e.contentRect,
                        n = Math.max(1, Math.min(5, Math.floor((t - 32 + 12) / 108))),
                        i = t < 480;
                    l((e) => (e.visibleCount === n && e.isCompact === i ? e : { visibleCount: n, isCompact: i }));
                }, []);
            return ((0, t8.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: u } = (0, X.T4)(t),
        m = lu(l),
        x = s.useMemo(() => (m ? [] : l.user_ids), [m, l.user_ids]);
    (0, W.k6)(t, x);
    let h = s.useMemo(() => l.games.map((e) => e.application_id), [l.games]),
        g = eh(h),
        p = s.useMemo(() => h.map((e) => g.get(e)?.coverUrl).find(em.Vq) ?? null, [g, h]),
        j = s.useMemo(() => ({ "--custom-popular-games-columns": o }), [o]),
        v = s.useCallback(
            (e) => {
                r ||
                    f.default.track(ty.HAw.POPULAR_GAMES_CLICK, {
                        location: e,
                        guild_id: t,
                        popular_games_state: lm(l),
                        popular_games_view: T({ expanded: !1, column: a }),
                    });
            },
            [r, t, l, a],
        ),
        b = null;
    return (
        (b = m
            ? (0, i.jsx)(lf, { guildId: t, requirement: u, onClick: () => v("activity_sharing") })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: lh.Qs,
                          children: [
                              null != p
                                  ? (0, i.jsx)("div", {
                                        className: lh.G,
                                        children: (0, i.jsx)("img", { className: lh.LZ, src: p, alt: "" }),
                                    })
                                  : null,
                              (0, i.jsx)("div", {
                                  className: lh.ag,
                                  role: "list",
                                  "aria-label": n,
                                  style: j,
                                  children: l.games
                                      .slice(0, o)
                                      .map((e) =>
                                          (0, i.jsx)(
                                              lc,
                                              { guildId: t, entry: e, games: g, onClick: () => v("game") },
                                              e.application_id,
                                          ),
                                      ),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: lh.sQ,
                          children: [
                              null != u &&
                                  (0, i.jsx)(lg, { guildId: t, requirement: u, onClick: () => v("activity_sharing") }),
                              (0, i.jsx)(lj, {
                                  guildId: t,
                                  memberIds: x,
                                  totalUsers: l.total_users,
                                  totalGames: l.total_games,
                                  isCompact: c,
                              }),
                          ],
                      }),
                  ],
              })),
        (0, i.jsx)("div", { className: lh.rf, ref: d, children: b })
    );
}
function lb(e) {
    return e.default_title ?? C.intl.string(J.default.GZsvDx);
}
var l_ = l(612324),
    lN = l(650583),
    ly = l(684343);
function lA(e) {
    let { label: t, tabs: l, selectedId: n, panelId: a, getTabId: r, onSelect: d } = e,
        o = s.useCallback((e) => {
            let t,
                l = e.currentTarget,
                n = l.closest('[role="tablist"]');
            if (null == n) return;
            let i = Array.from(n.querySelectorAll('[role="tab"]')),
                s = i.indexOf(l);
            if (-1 !== s && 0 !== i.length) {
                switch (e.key) {
                    case lN.dh.ARROW_RIGHT:
                    case lN.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case lN.dh.ARROW_LEFT:
                    case lN.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
                        break;
                    case lN.dh.HOME:
                        t = 0;
                        break;
                    case lN.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: ly.vR,
        role: "tablist",
        "aria-label": t,
        children: l.map((e) => {
            let t = e.id === n;
            return (0, i.jsx)(
                "button",
                {
                    type: "button",
                    role: "tab",
                    id: r(e.id),
                    className: ly.Mf,
                    "aria-selected": t,
                    "aria-controls": a,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: o,
                    children: (0, i.jsx)(_.E, {
                        className: ly.Pf,
                        tag: "span",
                        variant: "body-xs/medium",
                        color: "none",
                        children: e.label,
                    }),
                },
                e.id,
            );
        }),
    });
}
var lI = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let lC = ["top_songs", "top_artists", "top_listeners"];
function lE(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function lS(e) {
    return e.top_listeners.length < 2;
}
function lk(e, t) {
    return lE(e) || ("top_listeners" === t && lS(e)) ? "empty_state" : "populated";
}
function lw(e) {
    return e ? "compact" : "regular";
}
function lT(e) {
    switch (e) {
        case "top_songs":
            return C.intl.string(J.default.KgeEtx);
        case "top_artists":
            return C.intl.string(J.default.RYxWTS);
        case "top_listeners":
            return C.intl.string(J.default.KO73KB);
    }
}
function lR(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function lM(e) {
    return `popular-music-panel-${e}`;
}
var lD = l(196765);
let lL = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lU = (0, lD.v)(() => ({ byWidgetId: {} }));
function lG(e, t) {
    lU.setState((l) => {
        let n = l.byWidgetId[e] ?? lL;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lP(e) {
    return lU((t) => t.byWidgetId[e]?.view ?? lL.view);
}
function lO(e) {
    return lU((t) => t.byWidgetId[e]?.isCompact ?? lL.isCompact);
}
function lB(e) {
    return lU((t) => t.byWidgetId[e]?.selectedTrackId ?? lL.selectedTrackId);
}
function lF(e) {
    let { guildId: t, data: l, view: n, isCompact: i, location: s } = e;
    f.default.track(ty.HAw.POPULAR_MUSIC_CLICK, {
        location: s,
        guild_id: t,
        popular_music_state: null != l ? lk(l, n) : null,
        popular_music_view: n,
        popular_music_layout: lw(i),
    });
}
function lz(e) {
    let { guildId: t, widgetId: l, data: n } = e,
        i = lP(l),
        a = lO(l);
    return s.useCallback((e) => lF({ guildId: t, data: n, view: i, isCompact: a, location: e }), [t, n, i, a]);
}
function lH(e) {
    let { guildId: t, widgetId: l, data: n, length: i, isAtEnd: a, disabled: r = !1 } = e,
        d = lP(l),
        o = lO(l),
        c = null != n ? lk(n, d) : null,
        u = lw(o),
        m = "empty_state" === c,
        x = s.useRef(null),
        h = `${t}:${i}:${c}:${d}:${u}`,
        g = s.useCallback(() => {
            x.current !== h &&
                ((x.current = h),
                f.default.track(ty.HAw.POPULAR_MUSIC_END_IMPRESSION, {
                    guild_id: t,
                    popular_music_length: m ? 0 : i,
                    popular_music_state: c,
                    popular_music_view: d,
                    popular_music_layout: u,
                }));
        }, [t, h, m, i, c, d, u]);
    s.useEffect(() => {
        !r && null != c && (m || a) && g();
    }, [r, c, m, a, g]);
}
function lW(e) {
    let [t, l] = s.useState(null),
        n = s.useCallback(
            (t) => {
                l((l) => (l?.contentKey === e && l.isAtEnd === t ? l : { contentKey: e, isAtEnd: t }));
            },
            [e],
        );
    return [t?.contentKey === e && t.isAtEnd, n];
}
var l$ = l(59652),
    lK = l(991308),
    lY = l(28863),
    lV = l(148166),
    lq = l(427209),
    lQ = l(294454),
    lZ = l(605810);
function lX(e) {
    let { target: t, tabIndex: n, onClick: s } = e;
    return (0, i.jsx)("div", {
        className: lZ.ql,
        children: (0, i.jsx)(m.m, {
            text: C.intl.string(C.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(x.K, {
                icon: lq.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": C.intl.string(C.t.Ej3B3Y),
                onClick: () => {
                    (s(),
                        (0, eA.mM)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    l.e(325522),
                                    l.e(401317),
                                    l.e(790340),
                                    l.e(147119),
                                    l.e(668756),
                                    l.e(425292),
                                    l.e(209994),
                                    l.e(44141),
                                    l.e(552653),
                                    l.e(311580),
                                    l.e(174554),
                                    l.e(116815),
                                    l.e(62567),
                                    l.e(991625),
                                    l.e(230029),
                                    l.e(891089),
                                    l.e(585733),
                                    l.e(861973),
                                    l.e(196063),
                                    l.e(392028),
                                    l.e(124054),
                                    l.e(441674),
                                    l.e(152862),
                                    l.e(148326),
                                    l.e(148729),
                                    l.e(650195),
                                    l.e(144909),
                                    l.e(67702),
                                    l.e(662387),
                                    l.e(31544),
                                    l.e(629972),
                                    l.e(334168),
                                    l.e(582012),
                                    l.e(166336),
                                    l.e(113658),
                                    l.e(162182),
                                    l.e(860640),
                                    l.e(681801),
                                    l.e(85427),
                                    l.e(66149),
                                    l.e(996969),
                                    l.e(281342),
                                    l.e(967850),
                                    l.e(570385),
                                    l.e(67909),
                                    l.e(916885),
                                    l.e(272804),
                                    l.e(291329),
                                    l.e(449933),
                                    l.e(985236),
                                    l.e(728053),
                                    l.e(678906),
                                    l.e(799357),
                                    l.e(491899),
                                    l.e(889880),
                                    l.e(375724),
                                    l.e(999272),
                                    l.e(701406),
                                    l.e(216112),
                                    l.e(490514),
                                    l.e(962953),
                                    l.e(550929),
                                    l.e(64769),
                                    l.e(644013),
                                    l.e(971156),
                                    l.e(60002),
                                    l.e(260009),
                                    l.e(249938),
                                    l.e(266201),
                                    l.e(752704),
                                    l.e(56606),
                                    l.e(678749),
                                    l.e(163466),
                                    l.e(234017),
                                    l.e(40791),
                                    l.e(358404),
                                    l.e(996907),
                                    l.e(831130),
                                    l.e(377989),
                                    l.e(358931),
                                    l.e(880150),
                                    l.e(168248),
                                    l.e(490743),
                                    l.e(533240),
                                    l.e(985768),
                                    l.e(734818),
                                    l.e(936090),
                                    l.e(841136),
                                    l.e(560338),
                                    l.e(340363),
                                    l.e(459086),
                                    l.e(720210),
                                    l.e(601152),
                                    l.e(319714),
                                    l.e(331249),
                                    l.e(335930),
                                    l.e(921611),
                                    l.e(686889),
                                    l.e(560570),
                                    l.e(592e3),
                                    l.e(524434),
                                    l.e(992956),
                                    l.e(896691),
                                    l.e(334733),
                                    l.e(779367),
                                    l.e(428643),
                                    l.e(630290),
                                    l.e(189423),
                                    l.e(706073),
                                    l.e(227512),
                                    l.e(933947),
                                    l.e(866475),
                                    l.e(56347),
                                    l.e(650376),
                                    l.e(587618),
                                    l.e(424199),
                                    l.e(645499),
                                    l.e(322690),
                                    l.e(342551),
                                    l.e(194277),
                                    l.e(125729),
                                    l.e(888326),
                                    l.e(695765),
                                    l.e(339282),
                                    l.e(188941),
                                    l.e(349619),
                                    l.e(264236),
                                    l.e(481647),
                                    l.e(543039),
                                    l.e(398125),
                                    l.e(749248),
                                    l.e(221825),
                                    l.e(930758),
                                    l.e(776195),
                                    l.e(253729),
                                    l.e(593600),
                                    l.e(879315),
                                    l.e(900361),
                                    l.e(266900),
                                    l.e(707826),
                                    l.e(948804),
                                    l.e(199999),
                                    l.e(37085),
                                    l.e(890027),
                                    l.e(638221),
                                    l.e(809915),
                                    l.e(314243),
                                    l.e(110116),
                                    l.e(463095),
                                    l.e(927211),
                                    l.e(361626),
                                    l.e(646506),
                                    l.e(445124),
                                    l.e(76428),
                                    l.e(445421),
                                    l.e(783988),
                                    l.e(721690),
                                    l.e(832823),
                                    l.e(302008),
                                    l.e(761935),
                                    l.e(511527),
                                    l.e(763070),
                                    l.e(87306),
                                    l.e(502018),
                                    l.e(276863),
                                    l.e(955184),
                                    l.e(441432),
                                    l.e(728633),
                                    l.e(628439),
                                    l.e(35757),
                                    l.e(539620),
                                    l.e(225990),
                                    l.e(951811),
                                    l.e(883850),
                                    l.e(787672),
                                    l.e(522517),
                                    l.e(234236),
                                    l.e(832817),
                                    l.e(893928),
                                    l.e(416143),
                                    l.e(401590),
                                    l.e(844695),
                                    l.e(213653),
                                    l.e(844780),
                                    l.e(401518),
                                    l.e(592028),
                                    l.e(466354),
                                    l.e(133902),
                                    l.e(349460),
                                    l.e(425906),
                                    l.e(791154),
                                    l.e(92124),
                                    l.e(123353),
                                    l.e(123216),
                                    l.e(45072),
                                    l.e(263765),
                                    l.e(988077),
                                    l.e(776750),
                                    l.e(76705),
                                    l.e(232551),
                                    l.e(182408),
                                    l.e(561216),
                                    l.e(692835),
                                    l.e(588940),
                                    l.e(21219),
                                    l.e(829177),
                                    l.e(106943),
                                    l.e(348674),
                                    l.e(494768),
                                    l.e(526595),
                                    l.e(482861),
                                    l.e(422891),
                                    l.e(858514),
                                    l.e(790244),
                                    l.e(344265),
                                    l.e(121435),
                                    l.e(491279),
                                    l.e(398793),
                                    l.e(592731),
                                    l.e(723794),
                                    l.e(486309),
                                    l.e(894747),
                                    l.e(414260),
                                    l.e(54953),
                                    l.e(317225),
                                    l.e(53374),
                                    l.e(56021),
                                    l.e(456003),
                                    l.e(547646),
                                    l.e(124060),
                                    l.e(240511),
                                    l.e(718573),
                                    l.e(146566),
                                    l.e(693832),
                                    l.e(32661),
                                    l.e(346102),
                                    l.e(377766),
                                    l.e(545587),
                                    l.e(170653),
                                    l.e(376883),
                                    l.e(696123),
                                    l.e(647211),
                                    l.e(799657),
                                    l.e(810034),
                                    l.e(817852),
                                    l.e(133179),
                                    l.e(784103),
                                    l.e(614784),
                                    l.e(8563),
                                    l.e(444376),
                                    l.e(499941),
                                    l.e(509793),
                                    l.e(831145),
                                    l.e(187856),
                                    l.e(555793),
                                    l.e(960286),
                                    l.e(610449),
                                    l.e(271244),
                                    l.e(32781),
                                    l.e(996218),
                                    l.e(488990),
                                    l.e(959134),
                                    l.e(332470),
                                    l.e(729599),
                                    l.e(826240),
                                    l.e(924862),
                                    l.e(73500),
                                    l.e(371482),
                                    l.e(912773),
                                    l.e(68904),
                                    l.e(796867),
                                    l.e(919307),
                                    l.e(565617),
                                    l.e(662355),
                                    l.e(488934),
                                    l.e(455924),
                                    l.e(41991),
                                    l.e(237834),
                                    l.e(872648),
                                    l.e(409843),
                                    l.e(565065),
                                    l.e(834386),
                                    l.e(482652),
                                    l.e(464242),
                                    l.e(130674),
                                    l.e(959669),
                                    l.e(220518),
                                    l.e(875842),
                                    l.e(126780),
                                    l.e(360781),
                                    l.e(88160),
                                    l.e(209518),
                                    l.e(368111),
                                    l.e(851243),
                                    l.e(748015),
                                    l.e(952577),
                                    l.e(807771),
                                    l.e(338516),
                                    l.e(751202),
                                    l.e(496715),
                                    l.e(115754),
                                    l.e(474055),
                                    l.e(744385),
                                    l.e(59413),
                                    l.e(29664),
                                    l.e(471064),
                                    l.e(282094),
                                    l.e(250478),
                                    l.e(421658),
                                    l.e(450048),
                                    l.e(587244),
                                    l.e(680986),
                                    l.e(90373),
                                    l.e(957506),
                                    l.e(539319),
                                    l.e(203618),
                                    l.e(260218),
                                    l.e(303730),
                                    l.e(362422),
                                    l.e(789573),
                                    l.e(732272),
                                    l.e(935948),
                                    l.e(236946),
                                    l.e(692639),
                                    l.e(593020),
                                    l.e(890480),
                                    l.e(440963),
                                    l.e(657003),
                                    l.e(766031),
                                    l.e(394317),
                                    l.e(12762),
                                    l.e(304329),
                                    l.e(256831),
                                ]).then(l.bind(l, 99266));
                                return function (l) {
                                    return (0, i.jsx)(e, { ...l, target: t });
                                };
                            },
                            { stackingBehavior: "stack", modalKey: lQ.aU },
                        ));
                },
            }),
        }),
    });
}
var lJ = l(272984);
function l0(e) {
    let { artist: t, itemProps: l, cardRef: n, onClick: a, onForwardClick: r } = e,
        d = null != t.artist_image_hash ? lJ.RQ.IMAGE(t.artist_image_hash) : null,
        o = s.useMemo(
            () => ({
                kind: "artist",
                shareUrl: lJ.RQ.WEB_OPEN(lJ.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: d,
            }),
            [t.artist_external_id, t.artist_name, d],
        ),
        c = s.useMemo(() => l$.V.getDefaultLinkInterceptor(o.shareUrl), [o.shareUrl]),
        u = s.useCallback(
            (e) => {
                (a(), c?.(e));
            },
            [c, a],
        ),
        m = (0, i.jsx)(lV.R, { src: d, isCircular: !0, FallbackIcon: lK.MusicArtistIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", {
              className: lZ.Nr,
              ref: n,
              children: (0, i.jsx)("div", { ...l, className: lZ.MT, children: m }),
          })
        : (0, i.jsxs)("div", {
              className: lZ.Nr,
              ref: n,
              children: [
                  (0, i.jsxs)(lY.Anchor, {
                      ...l,
                      className: lZ.MT,
                      href: o.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      onClick: u,
                      children: [
                          m,
                          (0, i.jsx)("span", {
                              className: lZ.Qq,
                              children: (0, i.jsx)(_.E, {
                                  className: lZ.DD,
                                  tag: "span",
                                  variant: "body-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(lX, { target: o, tabIndex: l.tabIndex, onClick: r }),
              ],
          });
}
var l1 = l(872351),
    l2 = l(708988),
    l6 = l(628137);
let l3 = "none",
    l4 = (e, t) => (0, i.jsx)(_.E, { tag: "span", variant: "body-xs/medium", color: "text-strong", children: e }, t);
function l9(e) {
    return e;
}
function l8(e) {
    return e?.direction ?? l3;
}
function l7(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: C.intl.formatToPlainString(J.default["h+LUpk"], { percent: t }) };
}
function l5(e) {
    return l7(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var ne = l(633099);
function nt(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? l1.ArrowSmallUpIcon : l2.ArrowSmallDownIcon;
    return (0, i.jsxs)("span", {
        className: ne.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [ne.$J]: "up" === t.direction, [ne.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(_.E, { tag: "span", variant: "body-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function nl(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = (0, D.yK)(
            [e8.A],
            () => (n.facepile_user_ids ?? []).filter((e) => !e8.A.isBlockedOrIgnored(e)).slice(0, 3),
            [n.facepile_user_ids],
        );
    (0, W.k6)(l, a);
    let r = (0, D.yK)([Y.default], () => a.map((e) => Y.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let o = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: ne.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            C.intl.formatToPlainString(J.default.AzIhRB, { count: t, trend: l3, countHook: l9 })),
        children: (0, i.jsx)(t7.Ay, {
            users: d,
            guildId: l,
            size: t7.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: o <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: ne.ju,
                    children: (0, i.jsx)(_.E, {
                        tag: "span",
                        variant: "body-sm/semibold",
                        color: "text-subtle",
                        children: C.intl.formatToPlainString(J.default.bFIg0R, { count: o }),
                    }),
                }),
        }),
    });
}
function nn(e) {
    let { trackExternalId: t } = e,
        [l, n] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: ne.aF,
        children: [
            (0, i.jsx)(l6.A, {
                resourceType: lJ.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: ne.Ls, "aria-hidden": !0 }),
        ],
    });
}
function ni(e) {
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
        ? null
        : (0, i.jsx)("div", {
              className: j()(ne.yp, { [ne.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: ne.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(_.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: ne._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(_.E, {
                                      tag: "span",
                                      variant: "body-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != s && (0, i.jsx)(nt, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function ns(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = l7(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(ne.yp, { [ne.Fl]: n }),
        children: [
            s && (0, i.jsx)(nn, { trackExternalId: a.track_external_id }, a.track_external_id),
            (0, i.jsxs)("div", {
                className: j()(ne.QD, ne.rk),
                children: [
                    (0, i.jsx)(nl, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: ne._0,
                        children: [
                            (0, i.jsx)(_.E, {
                                tag: "span",
                                variant: "body-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    C.intl.format(J.default["7hHUIS"], { count: t, trend: l8(r), countHook: l4 })),
                            }),
                            null != r && (0, i.jsx)(nt, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var na = l(151869),
    nr = l(915734);
function nd(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: r, onScrollEndChange: d } = e,
        [o, c] = s.useState(null),
        u = l.length - 1;
    s.useEffect(() => {
        if (null == o) return;
        let e = new IntersectionObserver(
            (e) => {
                let [t] = e;
                null != t && d(t.intersectionRatio >= 0.99);
            },
            { threshold: [0, 0.99] },
        );
        return (e.observe(o), () => e.disconnect());
    }, [o, d]);
    let m = s.useCallback((e, t, l) => r(e, t, l === u ? c : void 0), [r, u]);
    return (0, i.jsx)("div", {
        className: j()(nr.Dk, { [nr.yI]: n }),
        children: (0, i.jsx)(na.A, {
            items: l,
            getItemKey: a,
            renderItem: m,
            gap: 8,
            edgeFade: 40,
            actionsClassName: nr.o1,
            "aria-label": t,
        }),
    });
}
var no = l(742452);
function nc(e) {
    return e.artist_external_id;
}
function nu(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a } = e,
        [r, d] = lW(a.ranked_artists.length),
        o = lz({ guildId: t, widgetId: l, data: a });
    lH({ guildId: t, widgetId: l, data: a, length: a.ranked_artists.length, isAtEnd: r });
    let c = s.useCallback(() => o("artist"), [o]),
        u = s.useCallback(() => o("forward"), [o]),
        m = s.useCallback(
            (e, t, l) => (0, i.jsx)(l0, { artist: e, itemProps: t, cardRef: l, onClick: c, onForwardClick: u }),
            [c, u],
        );
    if (0 === a.ranked_artists.length) return null;
    let x = l5(a);
    return (0, i.jsxs)("div", {
        className: no.U,
        children: [
            (0, i.jsx)(nd, {
                label: lT(lI.TOP_ARTISTS),
                items: a.ranked_artists,
                isCompact: n,
                getItemKey: nc,
                renderItem: m,
                onScrollEndChange: d,
            }),
            (0, i.jsx)(ni, {
                isCompact: n,
                headline:
                    a.distinct_songs < 1
                        ? null
                        : C.intl.formatToPlainString(J.default.W8etVA, { count: a.distinct_songs }),
                detail:
                    a.distinct_listeners < 1 || a.distinct_artists < 1
                        ? null
                        : C.intl.format(J.default.yGqf0D, {
                              memberCount: a.distinct_listeners,
                              artistCount: a.distinct_artists,
                              trend: l8(x),
                              memberCountHook: l4,
                              artistCountHook: l4,
                          }),
                trend: x,
            }),
        ],
    });
}
var nm = l(803613),
    nx = l(682348),
    nh = l(73152),
    nf = l(280911);
function ng(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, D.bG)([Y.default], () => Y.default.getCurrentUser()),
        s = (0, D.bG)([es.Ay], () => (null != n ? es.Ay.getMember(t, n.id) : null)),
        a = (0, ei.gn)(t, n?.id, s?.colorStrings ?? null),
        r = ea.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: nf.D_,
        children: [
            (0, i.jsxs)("div", {
                className: nf.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", {
                                    className: nf.eu,
                                    children: (0, i.jsx)(nm.SpotifyBrandIcon, { size: "sm" }),
                                }),
                                (0, i.jsxs)("span", {
                                    className: nf.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: nf.Om }),
                                        (0, i.jsx)("span", { className: nf.Om }),
                                        (0, i.jsx)("span", { className: nf.Om }),
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsx)(O.eu, {
                        size: B._3.SIZE_32,
                        src: n?.getAvatarURL(t, (0, B.FT)(B._3.SIZE_32)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: nf.Qq,
                children: [
                    (0, i.jsx)(y.D, {
                        variant: "heading-xs/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(F.g, {
                            name: C.intl.formatToPlainString(J.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
                        }),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "body-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: C.intl.string(J.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function np(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: nf.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: nf.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(nx.UserPlatformIcon, {
                        size: "sm",
                        color: o.A.colors.ICON_DEFAULT,
                        "aria-hidden": !0,
                    }),
                }),
            (0, i.jsxs)("div", {
                className: nf.Qq,
                children: [
                    (0, i.jsx)(y.D, {
                        variant: "heading-xs/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: C.intl.string(lx.default.WhdCGP),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "body-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: C.intl.formatToPlainString(J.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function nj(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: nf.UX,
        children: [
            a ? (0, i.jsx)(np, { widgetName: n, isCompact: s }) : (0, i.jsx)(ng, { guildId: t, isCompact: s }),
            (0, i.jsx)(H.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : nh.LinkPlusIcon,
                text: a ? C.intl.string(C.t.KY0ilj) : C.intl.string(J.default.jB1fWC),
                onClick: () => {
                    (r(),
                        (0, eA.mM)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    l.e(846201),
                                    l.e(311913),
                                    l.e(881717),
                                    l.e(5257),
                                    l.e(991625),
                                    l.e(230029),
                                    l.e(488926),
                                    l.e(728053),
                                    l.e(203112),
                                    l.e(13566),
                                    l.e(324469),
                                    l.e(264236),
                                    l.e(110116),
                                    l.e(463095),
                                    l.e(723794),
                                    l.e(240511),
                                    l.e(959134),
                                    l.e(371482),
                                    l.e(390213),
                                    l.e(610943),
                                    l.e(16954),
                                    l.e(944602),
                                    l.e(421778),
                                    l.e(646191),
                                    l.e(784170),
                                    l.e(32820),
                                ]).then(l.bind(l, 70111));
                                return (l) => (0, i.jsx)(e, { ...l, guildId: t, widgetName: n });
                            },
                            { modalKey: "guild-space-popular-music-contribution" },
                        ));
                },
            }),
        ],
    });
}
function nv(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: o, className: c, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [d, o, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/e5cd35ca79f49d81161fc468618bf0291bd91c44fbb5190819cd6dffcf71fef0.svg",
        className: (0, a.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var nb = l(625903),
    n_ = l(780964),
    nN = l(766075),
    ny = l(417869),
    nA = l(123894);
function nI(e) {
    let { onSettingsClick: t } = e,
        l = (0, D.bG)([ny.A], () => ny.A.getAccounts().some((e) => e.type === ty.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(w, {
        className: nA.w,
        illustration: nv,
        title: C.intl.string(J.default.ULK65a),
        body: C.intl.format(l ? J.default.BLuvck : J.default["Ko3a0+"], { memberCount: 2 }),
        action: l
            ? null
            : (0, i.jsx)(H.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: nb.SettingsIcon,
                  text: C.intl.string(C.t["3D5yo/"]),
                  onClick: () => {
                      (t(), (0, nN.openUserSettings)(n_.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING));
                  },
              }),
    });
}
function nC() {
    return (0, i.jsx)(w, {
        className: nA.w,
        illustration: nv,
        title: C.intl.string(J.default.ULK65a),
        body: C.intl.format(J.default.ZQxU8v, { memberCount: 2 }),
    });
}
var nE = l(109487),
    nS = l(279543);
function nk(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nS.qr,
        children: [
            (0, i.jsxs)("div", {
                className: nS.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: nS.Kk,
                        children: (0, i.jsx)(G.RefreshIcon, {
                            size: "xxs",
                            color: o.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(_.E, {
                        className: nS.Pf,
                        tag: "span",
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: C.intl.string(J.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(lY.Anchor, {
                className: nS.al,
                href: lJ.RQ.WEB_HOME,
                "aria-label": C.intl.string(J.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: nS.Kk,
                        children: (0, i.jsx)(nE.SpotifyNeutralIcon, {
                            size: "xs",
                            color: o.A.colors.ICON_STRONG,
                            "aria-hidden": !0,
                        }),
                    }),
                    !t &&
                        (0, i.jsx)(_.E, {
                            className: nS.G2,
                            tag: "span",
                            variant: "body-xs/medium",
                            color: "none",
                            children: C.intl.string(J.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var nw = l(949744),
    nT = l(65154),
    nR = l(329177),
    nM = l(242226);
function nD(e) {
    var t;
    let {
            guildId: l,
            userId: n,
            listener: s,
            rank: a,
            isCompact: r,
            isCurrentUser: d,
            shouldDimForCurrentUser: c,
            isFloating: u = !1,
            rowRef: m,
            onClick: x,
        } = e,
        h = er(l, n, { showYouSuffix: d }),
        { user: f } = h;
    return null == f
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": u,
              inert: u,
              className: j()(nM.nM, { [nM.Bh]: d && !u, [nM.lR]: c }),
              children: [
                  (0, i.jsx)(nL, { guildId: l, user: f, identity: h, rank: a, listener: s, onClick: x }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: j()(nM.Mx, { [nM.dA]: r }),
                          children: [
                              (0, i.jsx)(nT.CirclePlayIcon, {
                                  size: "xxs",
                                  color: o.A.colors.ICON_MUTED,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(_.E, {
                                  variant: "body-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), C.intl.formatToPlainString(J.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(nO, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function nL(e) {
    let { guildId: t, user: l, identity: n, rank: s, listener: a, onClick: r } = e,
        d = (0, D.bG)([e8.A], () => (e8.A.isBlocked(l.id) ? "blocked" : e8.A.isIgnored(l.id) ? "ignored" : null), [
            l.id,
        ]),
        c = null != d;
    return (0, i.jsxs)(U.D, {
        className: nM.D_,
        onClick: () => {
            (r(), (0, eP.openUserProfileModal)({ userId: l.id, guildId: t }));
        },
        children: [
            null != s && (0, i.jsx)(P.A, { children: C.intl.formatToPlainString(J.default.I4JiAQ, { rank: s }) }),
            (0, i.jsxs)("span", {
                className: nM.R3,
                children: [
                    c
                        ? (0, i.jsx)("span", {
                              className: nM.gt,
                              children:
                                  "blocked" === d
                                      ? (0, i.jsx)(eL.DenyIcon, {
                                            size: "xs",
                                            color: o.A.colors.ICON_SUBTLE,
                                            "aria-hidden": !0,
                                        })
                                      : (0, i.jsx)(eU.EyeSlashIcon, {
                                            size: "xs",
                                            color: o.A.colors.ICON_SUBTLE,
                                            "aria-hidden": !0,
                                        }),
                          })
                        : (0, i.jsx)(O.eu, {
                              size: B._3.SIZE_32,
                              src: l.getAvatarURL(t, (0, B.FT)(B._3.SIZE_32)) ?? void 0,
                              "aria-hidden": !0,
                          }),
                    1 === s &&
                        (0, i.jsx)("span", {
                            className: nM.ie,
                            "aria-hidden": !0,
                            children: (0, i.jsx)(nR.CrownIcon, { size: "xxs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: nM.Dc,
                children: [
                    (0, i.jsx)(y.D, {
                        variant: "heading-xs/semibold",
                        color: c ? "text-subtle" : "text-default",
                        lineClamp: 1,
                        children:
                            null != d
                                ? (function (e) {
                                      switch (e) {
                                          case "blocked":
                                              return C.intl.string(J.default.I3YOjC);
                                          case "ignored":
                                              return C.intl.string(J.default.CfMzwe);
                                      }
                                  })(d)
                                : (0, i.jsx)(F.g, {
                                      name: n.displayName,
                                      colorString: n.member?.colorString ?? null,
                                      colorStrings: n.roleColorStrings,
                                  }),
                    }),
                    !c && (0, i.jsx)(nG, { listener: a }),
                ],
            }),
        ],
    });
}
function nU(e, t) {
    return (0, i.jsx)(_.E, { tag: "span", variant: "body-xs/medium", color: "text-strong", children: e }, t);
}
function nG(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(_.E, {
        variant: "body-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? C.intl.format(J.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: nU })
                : C.intl.format(J.default.ZMJ8Mt, { trackTitle: l, highlightHook: nU }),
    });
}
function nP(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? lJ.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: nM.sG,
        children: (0, i.jsx)(e2.Ay, {
            mask: l ? e2.l8[24] : e2.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: nM.Ql,
                          children: (0, i.jsx)(lK.MusicArtistIcon, { size: "xxs", color: o.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: nM.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function nO(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: nM.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: nM.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            nP,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: nM.sG,
                            children: (0, i.jsx)(e2.Ay, {
                                mask: e2.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: nM.ag,
                                    children: (0, i.jsx)(_.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: C.intl.formatToPlainString(J.default.bFIg0R, { count: s }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var nB = l(897130);
function nF(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a, shouldHideCurrentUser: r, upsell: d } = e,
        o = a.top_listeners,
        c = (0, D.bG)([Y.default], () => Y.default.getCurrentUser()?.id),
        u = r ? null : c,
        m = o.findIndex((e) => e.user_id === u),
        x = -1 === m ? null : o[m],
        h = s.useMemo(() => o.map((e) => e.user_id), [o]);
    (0, W.k6)(t, h);
    let f = (0, D.bG)([Y.default], () => h.reduce((e, t) => (null != Y.default.getUser(t) ? e + 1 : e), 0), [h]),
        g = (0, D.bG)(
            [Y.default, nw.A],
            () => h.every((e) => null != Y.default.getUser(e) || nw.A.isMemberRequestSettled(t, e)),
            [t, h],
        ),
        { scrollerRef: p, scrollerNode: v, userRowRef: b, floatingRowPosition: _ } = el(),
        N = (function (e, t) {
            let [l, n] = s.useState(null);
            return (
                s.useEffect(() => {
                    if (null == e) return;
                    function l() {
                        let l = 0 !== e.clientHeight && e.scrollHeight - e.scrollTop - e.clientHeight <= 1;
                        n((e) => (e?.contentKey === t && e.isAtEnd === l ? e : { contentKey: t, isAtEnd: l }));
                    }
                    (l(), e.addEventListener("scroll", l, { passive: !0 }));
                    let i = new ResizeObserver(l);
                    return (
                        i.observe(e),
                        () => {
                            (e.removeEventListener("scroll", l), i.disconnect());
                        }
                    );
                }, [e, t]),
                l?.contentKey === t && l.isAtEnd
            );
        })(v, f),
        y = lz({ guildId: t, widgetId: l, data: a }),
        A = s.useCallback(() => y("listener_row"), [y]);
    lH({ guildId: t, widgetId: l, data: a, length: o.length, isAtEnd: N, disabled: !g && !lS(a) });
    let I = null != d,
        C = I ? null : _,
        E = null != C;
    return lS(a)
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(nC, {}), d] })
        : (0, i.jsxs)("div", {
              className: nB.SY,
              children: [
                  (0, i.jsxs)(L.d_, {
                      className: j()(nB.p_, { [nB.w]: I }),
                      ref: p,
                      children: [
                          o.map((e, l) => {
                              let s = e.user_id === u;
                              return (0, i.jsx)(
                                  nD,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: l + 1,
                                      isCompact: n,
                                      isCurrentUser: s,
                                      shouldDimForCurrentUser: s && E,
                                      rowRef: s ? b : void 0,
                                      onClick: A,
                                  },
                                  e.user_id,
                              );
                          }),
                          !I &&
                              null != u &&
                              null == x &&
                              (0, i.jsx)(nD, {
                                  guildId: t,
                                  userId: u,
                                  listener: null,
                                  rank: null,
                                  isCompact: n,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: E,
                                  rowRef: b,
                                  onClick: A,
                              }),
                      ],
                  }),
                  I &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(Q, { position: "bottom" }),
                              (0, i.jsx)("div", { className: nB.Kv, children: d }),
                          ],
                      }),
                  null != u &&
                      null != C &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(Q, { position: C }),
                              (0, i.jsx)(Z, {
                                  position: C,
                                  children: (0, i.jsx)(nD, {
                                      guildId: t,
                                      userId: u,
                                      listener: x,
                                      rank: -1 === m ? null : m + 1,
                                      isCompact: n,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                      onClick: A,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
var nz = l(717683);
function nH(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nz.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(nz.Dk, { [nz.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: nz.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(nz.om, nz.xX) }),
                                (0, i.jsxs)("div", {
                                    className: nz.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(nz.om, nz.DD) }),
                                        (0, i.jsx)("div", { className: j()(nz.om, nz.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(nz.yp, { [nz.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(nz.om, nz.Pl) }),
                    (0, i.jsx)("div", { className: j()(nz.om, nz._0) }),
                ],
            }),
        ],
    });
}
var nW = l(450078),
    n$ = l(362704);
function nK(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a, cardRef: r, onForwardClick: d } = e,
        o = null != t.cover_art_hash ? lJ.RQ.IMAGE(t.cover_art_hash) : null,
        c = s.useMemo(
            () => ({
                kind: "song",
                shareUrl: lJ.RQ.WEB_OPEN(lJ.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: o,
            }),
            [t.track_external_id, t.track_title, t.artist_name, o],
        );
    return (0, i.jsxs)("div", {
        className: lZ.Nr,
        ref: r,
        children: [
            (0, i.jsxs)("button", {
                ...a,
                type: "button",
                className: j()(lZ.MT, { [lZ.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(lV.R, {
                        src: o,
                        isCircular: !1,
                        FallbackIcon: nW.MusicAlbumIcon,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(lZ.Lw, lZ.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(n$.RecordPlayerIcon, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: lZ.Qq,
                            children: [
                                (0, i.jsx)(_.E, {
                                    className: lZ.DD,
                                    tag: "span",
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(_.E, {
                                        className: lZ.VA,
                                        tag: "span",
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: t.artist_name,
                                    }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(lX, { target: c, tabIndex: a.tabIndex, onClick: d }),
        ],
    });
}
function nY(e) {
    return e.track_external_id;
}
function nV(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = lB(n),
        o = lU((e) => e.byWidgetId[n]?.canShowEmbed ?? lL.canShowEmbed),
        [c, u] = lW(r.ranked_songs.length),
        m = lz({ guildId: l, widgetId: n, data: r });
    lH({ guildId: l, widgetId: n, data: r, length: r.ranked_songs.length, isAtEnd: c });
    let x = s.useCallback(
            (e) => {
                let t;
                (m("song"),
                    (t = lU.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    lG(n, { selectedTrackId: t === e ? null : e }));
            },
            [n, m],
        ),
        h = s.useCallback(() => m("forward"), [m]),
        f = s.useCallback(
            (e, t, l) =>
                (0, i.jsx)(nK, {
                    song: e,
                    isSelected: e.track_external_id === d,
                    onSelect: x,
                    itemProps: t,
                    cardRef: l,
                    onForwardClick: h,
                }),
            [d, x, h],
        );
    if (0 === r.ranked_songs.length) return null;
    let g = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        p = l5(r);
    return (0, i.jsxs)("div", {
        className: no.U,
        children: [
            (0, i.jsx)(nd, {
                label: lT(lI.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: nY,
                renderItem: f,
                onScrollEndChange: u,
            }),
            null != g
                ? (0, i.jsx)(ns, { guildId: l, isCompact: a, canShowEmbed: o, song: g })
                : (0, i.jsx)(ni, {
                      isCompact: a,
                      headline:
                          (t = Math.round(r.listening_time_ms / ep.A.Millis.MINUTE)) < 1
                              ? null
                              : C.intl.formatToPlainString(J.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : C.intl.format(J.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: l8(p),
                                    countHook: l4,
                                }),
                      trend: p,
                  }),
        ],
    });
}
var nq = l(691885),
    nQ = l(109765);
function nZ(e) {
    let { widgetId: t, onSelect: l } = e,
        n = lP(t),
        a = s.useMemo(() => lC.map((e) => ({ id: e, label: lT(e), value: e })), []);
    return (0, i.jsx)("div", {
        className: nQ.L,
        children: (0, i.jsx)(nq.l, {
            selectionMode: "single",
            label: C.intl.string(J.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: a,
            value: n,
            onSelectionChange: l,
        }),
    });
}
var nX = l(432017),
    nJ = l(871107);
function n0(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: nJ.$,
        children: [
            (0, i.jsx)("span", {
                className: nJ.K,
                children: (0, i.jsx)(nX.MusicIcon, { size: "xs", color: o.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(g.q, { size: "md", children: t }),
        ],
    });
}
var n1 = l(77915),
    n2 = l(756936);
function n6(e) {
    return e.default_title ?? C.intl.string(J.default["5xxUI2"]);
}
var n3 = l(890497),
    n4 = l(734057),
    n9 = l(317525),
    n8 = l(576705),
    n7 = l(811091),
    n5 = l(44167);
l(321073);
var ie = l(485845),
    it = l(136722),
    il = l(435183),
    ii = l(155718),
    is = l(795816),
    ia = l(933958),
    ir = l(627363),
    id = l(712440),
    io = l(733110),
    ic = l(488926),
    iu = l(487887);
async function im(e) {
    null == ed.A.getApplication(iu.NW) && (await (0, ir.TA)(iu.NW));
    let t = ia.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== iu.NW);
    return await (0, is.su)({ channelId: e, applicationId: iu.NW, isStart: t, renderInFramePool: !0 });
}
let ix = [];
var ih = l(344351),
    ig = l(256693),
    ip = l(343030),
    ij = l(11411),
    iv = l(953538);
let ib = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n, onEdit: s, disabled: a } = e,
                { text: r, image_hash: d } = t.config,
                o = "edit" === l ? t.config.image : void 0,
                c = void 0 !== o ? o : null != d ? t1(n, t.id, d) : null;
            return (null == r || 0 === r.length) && null == c
                ? (0, i.jsx)(w, {
                      illustration: t6,
                      title: C.intl.string(J.default.rl3fNQ),
                      body: C.intl.string(J.default["a/oDbC"]),
                      action:
                          null != s
                              ? (0, i.jsx)(H.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    icon: t3.PencilIcon,
                                    text: C.intl.string(C.t.bt75uw),
                                    disabled: a,
                                    onClick: s,
                                })
                              : null,
                  })
                : (0, i.jsxs)("div", {
                      className: t4.kL,
                      children: [
                          null != c && (0, i.jsx)("img", { className: t4.Sl, src: c, alt: "" }),
                          null != r &&
                              (0, i.jsx)(_.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  className: t4.Qq,
                                  children: r,
                              }),
                      ],
                  });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                a = t.config,
                [r, o] = s.useState(a.title ?? ""),
                [c, u] = s.useState(a.text ?? ""),
                [h, f] = s.useState(a.image),
                [g, p] = s.useState(null),
                j = (0, D.bG)([tD.A], () => tD.A.getGuildId()),
                v = void 0 !== h ? h : null != a.image_hash && null != j ? t1(j, t.id, a.image_hash) : null;
            return (0, i.jsxs)(N.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tV.k, {
                        label: C.intl.string(C.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (p(null), o(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tK.D, {
                        label: C.intl.string(C.t.X4IxWL),
                        children: (0, i.jsxs)(N.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: t2.B,
                            children: [
                                (0, i.jsxs)(N.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(tZ.A, {
                                            variant: "secondary",
                                            text: C.intl.string(C.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tQ.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, i.jsx)(m.m, {
                                                text: C.intl.string(C.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(x.K, {
                                                    variant: "critical-secondary",
                                                    icon: tq.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), f(null));
                                                    },
                                                    "aria-label": C.intl.string(C.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, i.jsx)("img", { className: t2.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(tY.f, {
                        label: C.intl.string(C.t.COGMNC),
                        value: c,
                        onChange: function (e) {
                            (p(null), u(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != g && (0, i.jsx)(tT.w, { type: "critical", message: g, role: "alert" }),
                    (0, i.jsxs)(tR.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(H.$, { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(H.$, {
                                variant: "primary",
                                text: C.intl.string(C.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != a.image_hash),
                                        0 === c.length && !e && (p(C.intl.string(J.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: a.image_hash,
                                        text: c.length > 0 ? c : null,
                                        title: r.length > 0 ? r : null,
                                    };
                                    (void 0 !== h && (t.image = h), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(g.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [d.a.LEADERBOARD]: {
        View: function (e) {
            let t,
                { widget: l, hydration: n, guildId: a, guildSpaceMode: r } = e,
                d = tt(a, n?.status === "success" ? n.data : void 0),
                o = tH({ guildId: a, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
                u = s.useCallback(
                    (e) => {
                        o(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [o],
                );
            return (
                (t =
                    "edit" === r && null == n
                        ? (0, i.jsx)(M, {
                              minHeight: 390,
                              graphic: (0, i.jsx)(c, { alt: "", ariaHidden: !0, width: 200 }),
                              title: C.intl.string(J.default.wqHke4),
                              subtitle: C.intl.string(J.default.n1sscC),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(k, {})
                          : null != d
                            ? (0, i.jsx)(tI, { guildId: a, data: d, column: l.position.column, disabled: "view" !== r })
                            : (0, i.jsx)(S, {})),
                (0, i.jsx)("div", { ref: u, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, D.bG)([tD.A], () => tD.A.getGuildId()),
                n = (0, D.bG)([tM.A], () => tM.A.getGuild(l), [l]),
                a = (0, tL.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [o, c] = s.useState(!1),
                [u, m] = s.useState(null),
                [x, h] = s.useState(!1),
                f = s.useCallback(async () => {
                    if (null == n || null == l || null == u || null == d) return void t();
                    (h(!1), c(!0));
                    try {
                        (await tk.Bo.patch({
                            url: ty.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, tS.lA)(d, tU, !u) },
                            rejectWithError: !0,
                        }),
                            (0, A.q9)(l, A.PY.LEADERBOARD_SYSTEM_MESSAGES, u),
                            t());
                    } catch (e) {
                        h(!0);
                    } finally {
                        c(!1);
                    }
                }, [n, l, u, d, t]),
                g = null == n || !r || null == d || o || !a;
            return (0, i.jsxs)(N.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tw.d, {
                        label: C.intl.string(J.default.v0iLIA),
                        description: C.intl.string(J.default["88c7ds"]),
                        checked: u ?? !(0, tS.Lt)(d ?? 0, tU),
                        onChange: m,
                        disabled: g,
                    }),
                    !r &&
                        (0, i.jsx)(tT.w, {
                            type: "warning",
                            message: C.intl.string(J.default["1hsDpi"]),
                            role: "none",
                        }),
                    x &&
                        (0, i.jsx)(tT.w, {
                            type: "critical",
                            message: C.intl.string(J.default["4FcF2j"]),
                            role: "alert",
                        }),
                    (0, i.jsxs)(tR.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(H.$, {
                                variant: "secondary",
                                text: C.intl.string(C.t["ETE/oC"]),
                                onClick: t,
                                disabled: o,
                            }),
                            (0, i.jsx)(H.$, {
                                variant: "primary",
                                text: C.intl.string(C.t["R3BPH+"]),
                                onClick: f,
                                disabled: g,
                                loading: o,
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildId: n } = e,
                s = tt(n, l?.status === "success" ? l.data : void 0);
            return null == s
                ? (0, i.jsx)(g.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(g.q, { children: e_(s) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(u.TrophyIcon, { size: "xs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = tt(l, t?.status === "success" ? t.data : void 0);
            return null == n || eb(n) ? null : (0, i.jsx)(tF, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = tt(l, s);
            return "mini" !== T({ expanded: !1, column: n }) || (null != a && eb(a))
                ? null
                : (0, i.jsx)(m.m, {
                      text: C.intl.string(C.t.dcl9MQ),
                      children: (0, i.jsx)(x.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: h.MaximizeIcon,
                          "aria-label": C.intl.string(C.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  null != s &&
                                  (f.default.track(ty.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: eN(a),
                                      leaderboard_view: T({ expanded: !1, column: n }),
                                      metric: ey(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(t$, { guildId: t, data: l, modalProps: e });
                                      (0, eA.mM)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: s }));
                          },
                      }),
                  });
        },
    },
    [d.a.POPULAR_GAMES]: {
        View: function (e) {
            let t,
                { widget: l, hydration: n, guildId: a, guildSpaceMode: r } = e,
                d = (function (e, t) {
                    let { requirement: l, hasFetchedConsents: n } = (0, X.T4)(e),
                        i = (0, D.bG)([Y.default], () => Y.default.getCurrentUser()?.id);
                    return s.useMemo(() => {
                        if (n)
                            return null == t || null == l || null == i
                                ? t
                                : {
                                      ...t,
                                      user_ids: t.user_ids.filter((e) => e !== i),
                                      games: t.games.map((e) => ({
                                          ...e,
                                          user_ids: e.user_ids.filter((e) => e !== i),
                                      })),
                                  };
                    }, [t, n, l, i]);
                })(a, n?.status === "success" ? n.data : void 0),
                o = tz({
                    onHoverEnd: s.useCallback(
                        (e) => {
                            let { duration: t, flush: n } = e;
                            null != d &&
                                f.default.track(
                                    ty.HAw.POPULAR_GAMES_HOVER,
                                    {
                                        guild_id: a,
                                        duration: t,
                                        popular_games_state: lm(d),
                                        popular_games_view: T({ expanded: !1, column: l.position.column }),
                                    },
                                    { flush: n },
                                );
                        },
                        [a, d, l.position.column],
                    ),
                    enabled: "view" === r,
                }),
                c = s.useCallback(
                    (e) => {
                        o(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [o],
                );
            return (
                (t =
                    "edit" === r && null == n
                        ? (0, i.jsx)(M, {
                              minHeight: 273,
                              graphic: (0, i.jsx)(t9, { alt: "", ariaHidden: !0, width: 200 }),
                              title: C.intl.string(J.default.v59XPT),
                              subtitle: C.intl.string(J.default.Bayri1),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(k, {})
                          : null == n || null == d || "idle" === n.status || "loading" === n.status
                            ? (0, i.jsx)(S, {})
                            : (0, i.jsx)(lv, {
                                  guildId: a,
                                  data: d,
                                  title: lb(l),
                                  column: l.position.column,
                                  disabled: "view" !== r,
                              })),
                (0, i.jsx)("div", { ref: c, children: t })
            );
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(g.q, { children: lb(t) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(e0.GameControllerIcon, { size: "xs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
    },
    [d.a.POPULAR_MUSIC]: {
        View: function (e) {
            var t, l;
            let n,
                a,
                r,
                { guildId: d, widget: o, hydration: c, guildSpaceMode: u } = e,
                m =
                    ((t = o.id),
                    (n = s.useRef(null)),
                    (a = s.useCallback(
                        (e) => {
                            let { width: l } = e.contentRect;
                            lG(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, t8.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            lU.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lO(o.id),
                h = lP(o.id),
                g = lB(o.id),
                { isContributing: p, isSpotifyConnected: j, hasFetchedConsents: v } = (0, n1.MX)(d),
                b = c?.status === "success" ? c.data : void 0,
                { data: _, shouldHideCurrentUser: N } = (0, n1.qL)(d, b),
                y = "edit" === u,
                A = null != b && lE(b),
                I = !x && !y && !A,
                C = lz({ guildId: d, widgetId: o.id, data: _ }),
                E = (function (e) {
                    let { guildId: t, widgetId: l, data: n, enabled: i } = e,
                        a = lP(l),
                        r = lO(l);
                    return tz({
                        onHoverEnd: s.useCallback(
                            (e) => {
                                let { duration: l, flush: i } = e;
                                null != n &&
                                    f.default.track(
                                        ty.HAw.POPULAR_MUSIC_HOVER,
                                        {
                                            guild_id: t,
                                            duration: l,
                                            popular_music_state: lk(n, a),
                                            popular_music_view: a,
                                            popular_music_layout: lw(r),
                                        },
                                        { flush: i },
                                    );
                            },
                            [t, n, a, r],
                        ),
                        segmentKey: `${a}:${lw(r)}`,
                        enabled: i,
                    });
                })({ guildId: d, widgetId: o.id, data: _, enabled: "view" === u }),
                w = s.useCallback(
                    (e) => {
                        E(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [E],
                ),
                T = (0, l_.A)(m, w);
            lH({ guildId: d, widgetId: o.id, data: _, length: 0, isAtEnd: !1, disabled: y || !A });
            let R =
                    "view" === u && v && !p
                        ? (0, i.jsx)(nj, {
                              guildId: d,
                              widgetName: n6(o),
                              isCompact: x,
                              isSpotifyConnected: j,
                              onClick: () => C("contribution_upsell"),
                          })
                        : null,
                M =
                    y || A || c?.status !== "success" || h === lI.TOP_LISTENERS
                        ? null
                        : ((l = c.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === g && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : lJ.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: n2.rf,
                ref: T,
                children: [
                    null != M &&
                        (0, i.jsx)("div", {
                            className: n2.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: n2.LZ, src: M, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: n2.Qs,
                        children: (0, i.jsx)("div", {
                            id: lM(o.id),
                            className: n2.nd,
                            role: I ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": I ? void 0 : lT(h),
                            "aria-labelledby": I ? lR(o.id, h) : void 0,
                            children: (function () {
                                if (y && c?.status !== "success") return (0, i.jsx)(nH, { isCompact: x });
                                if (null == c || "idle" === c.status || "loading" === c.status)
                                    return (0, i.jsx)(S, {});
                                if ("error" === c.status) return (0, i.jsx)(k, {});
                                if (A) return (0, i.jsx)(nI, { onSettingsClick: () => C("empty_state_settings") });
                                if (null == _) return (0, i.jsx)(S, {});
                                switch (h) {
                                    case lI.TOP_SONGS:
                                        return (0, i.jsx)(nV, { guildId: d, widgetId: o.id, isCompact: x, data: _ });
                                    case lI.TOP_ARTISTS:
                                        return (0, i.jsx)(nu, { guildId: d, widgetId: o.id, isCompact: x, data: _ });
                                    case lI.TOP_LISTENERS:
                                        return (0, i.jsx)(nF, {
                                            guildId: d,
                                            widgetId: o.id,
                                            isCompact: x,
                                            data: _,
                                            shouldHideCurrentUser: N,
                                            upsell: R,
                                        });
                                }
                            })(),
                        }),
                    }),
                    h !== lI.TOP_LISTENERS && R,
                    (0, i.jsx)(nk, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = n6(t),
                a = l?.status === "success" && lE(l.data);
            return "edit" === n || a ? (0, i.jsx)(g.q, { size: "md", children: s }) : (0, i.jsx)(n0, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n, guildId: s } = e,
                a = lO(t.id),
                r = lP(t.id),
                { data: d } = (0, n1.qL)(s, l?.status === "success" ? l.data : void 0);
            function o(e, l) {
                if (e !== r) {
                    var n;
                    (lF({ guildId: s, data: d, view: e, isCompact: a, location: l }),
                        (n = t.id),
                        (lU.getState().byWidgetId[n] ?? lL).view !== e && lG(n, { view: e, selectedTrackId: null }));
                }
            }
            return l?.status === "success" && lE(l.data)
                ? null
                : a
                  ? (0, i.jsx)(nZ, { widgetId: t.id, onSelect: (e) => o(e, "view_select") })
                  : (0, i.jsx)(lA, {
                        label: n,
                        tabs: lC.map((e) => ({ id: e, label: lT(e) })),
                        selectedId: r,
                        panelId: lM(t.id),
                        getTabId: (e) => lR(t.id, e),
                        onSelect: (e) => o(e, "view_tab"),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, n5.n)(),
                a = (0, D.bG)(
                    [n4.A, n8.A],
                    () => {
                        let e = null != n ? n4.A.getChannel(n) : void 0;
                        return null != e && n8.A.can(ty.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, D.bG)(
                    [ia.Ay],
                    () => {
                        let e = ia.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== iu.NW ||
                            e.location.kind !== ih.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                o = (0, D.bG)([ia.Ay], () => ia.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: u } =
                    ((t = (0, D.bG)(
                        [io.A],
                        () => io.A.getFetchStateForApplication(iu.NW) === io.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, D.bG)(
                        [io.A, ed.A],
                        () => {
                            let e = io.A.getNewestTokenForApplication(iu.NW);
                            if (null == e) return !1;
                            let t = ed.A.getApplication(iu.NW),
                                l = t?.integrationTypesConfig?.[ie.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (io.A.getFetchStateForApplication(iu.NW) === io.FetchState.NOT_FETCHED && id.A.fetch([iu.NW]),
                            null == ed.A.getApplication(iu.NW) && (0, ir.TA)(iu.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && c && u && !m.current && ((m.current = !0), im(n));
            }, [a, n, d, c, u]);
            let x = s.useCallback(() => {
                    null != n && ((m.current = !0), im(n));
                }, [n]),
                h = null != n && c && !u;
            return null == n
                ? (0, i.jsx)(N.B, {
                      className: iv.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : a
                  ? (0, i.jsxs)("div", {
                        className: iv.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(ij.A, {
                                    frameId: (0, ig.Ri)(d),
                                    level: ip.A.WithinAppContent,
                                    className: iv.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: iv.P5,
                                    children: (0, i.jsx)(H.$, {
                                        variant: "secondary",
                                        text: C.intl.string(J.default.PSuly6),
                                        loading: o,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: iv.kL,
                        children: (0, i.jsx)("div", {
                            className: iv.m0,
                            children: (0, i.jsx)(_.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: C.intl.string(J.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, D.bG)([tD.A], () => tD.A.getGuildId()),
                n = n7.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, n5.n)(),
                r = (0, D.bG)([n4.A], () => (null != a ? n4.A.getChannel(a) : void 0), [a]),
                d = (0, D.bG)([n8.A], () => null != r && n8.A.can(ty.xBc.MANAGE_ROLES, r), [r]),
                o = (0, D.bG)([n9.A], () => (null == l ? ix : n9.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                c = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          it.zy(e.deny, ty.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? o
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && it.zy(t.allow, ty.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, o]),
                [u, m] = s.useState(null),
                [x, h] = s.useState(!1),
                [f, g] = s.useState(!1),
                p = u ?? c,
                j = s.useMemo(() => o.map((e) => ({ id: e.id, label: e.name, value: e.id })), [o]);
            return null == r
                ? null
                : (0, i.jsxs)(N.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(n3.Z, {
                              selectionMode: "multiple",
                              label: C.intl.string(J.default.XXLbfv),
                              description: C.intl.string(J.default.XrpYIG),
                              placeholder: C.intl.string(J.default.pp6WeD),
                              options: j,
                              value: p,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d &&
                              (0, i.jsx)(tT.w, {
                                  type: "warning",
                                  message: C.intl.string(J.default.UPLtlA),
                                  role: "none",
                              }),
                          f &&
                              (0, i.jsx)(tT.w, {
                                  type: "critical",
                                  message: C.intl.string(J.default.xyCJYs),
                                  role: "alert",
                              }),
                          (0, i.jsxs)(tR.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(H.$, {
                                      variant: "secondary",
                                      text: C.intl.string(C.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(H.$, {
                                      variant: "primary",
                                      text: C.intl.string(C.t["R3BPH+"]),
                                      onClick: async function () {
                                          if (null != r) {
                                              (g(!1), h(!0));
                                              try {
                                                  (await (async function (e) {
                                                      let { channel: t, selectedRoleIds: l } = e,
                                                          n = [];
                                                      if (l.length > 0)
                                                          for (let e of (n.push({
                                                              id: t.guild_id,
                                                              type: ii.r2.ROLE,
                                                              allow: ic.x3,
                                                              deny: ty.xBc.USE_EMBEDDED_ACTIVITIES,
                                                          }),
                                                          l))
                                                              n.push({
                                                                  id: e,
                                                                  type: ii.r2.ROLE,
                                                                  allow: ty.xBc.USE_EMBEDDED_ACTIVITIES,
                                                                  deny: ic.x3,
                                                              });
                                                      let i = await (0, il.RT)(t.id, { permissionOverwrites: n });
                                                      if (!i.ok) throw i;
                                                  })({ channel: r, selectedRoleIds: p }),
                                                      t());
                                              } catch {
                                                  (h(!1), g(!0));
                                              }
                                          }
                                      },
                                      disabled: !d,
                                      loading: x,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: r,
    },
};
