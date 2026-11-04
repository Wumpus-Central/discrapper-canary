l.d(t, { m: () => iv });
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
    h = l(408278),
    f = l(26430),
    x = l(129230),
    g = l(562073),
    p = l(503698),
    j = l.n(p),
    v = l(289873),
    _ = l(738188),
    b = l(834730),
    A = l(331322),
    y = l(534514),
    N = l(792996),
    I = l(448492);
function C() {
    return (0, i.jsx)("div", {
        className: I.w,
        children: (0, i.jsx)(v.y, { type: v.y.Type.SPINNING_CIRCLE, "aria-label": N.intl.string(N.t.ZTNur7) }),
    });
}
function E() {
    return (0, i.jsxs)("div", {
        className: I.w,
        role: "alert",
        children: [
            (0, i.jsx)(_.WarningIcon, { size: "md", color: o.A.colors.ICON_MUTED, "aria-hidden": !0 }),
            (0, i.jsx)(b.E, { variant: "body-sm/normal", color: "text-muted", children: N.intl.string(N.t.F8FvUy) }),
        ],
    });
}
function S(e) {
    let { className: t, illustration: l, title: n, body: s, action: a } = e;
    return (0, i.jsxs)(A.B, {
        className: j()(I.p, t),
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            null != l && (0, i.jsx)(l, { alt: "", ariaHidden: !0, width: 160 }),
            (0, i.jsxs)(A.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(y.D, { variant: "heading-sm/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(b.E, { variant: "body-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            a,
        ],
    });
}
function k(e) {
    let { expanded: t, column: l } = e;
    return t ? "expanded" : 1 === l ? "mini" : "regular";
}
l(754674);
var T = l(441920);
function w(e) {
    let { graphic: t, title: l, subtitle: n, minHeight: a } = e,
        r = s.useMemo(() => (null != a ? { minHeight: `${a}px` } : void 0), [a]);
    return (0, i.jsxs)(A.B, {
        className: T.VH,
        style: r,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsx)("div", { className: T.fA, children: t }),
            (0, i.jsxs)(A.B, {
                className: T.C,
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(y.D, { variant: "heading-sm/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(b.E, { variant: "body-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
var R = l(855986),
    D = l(95362),
    L = l(939249),
    M = l(663417),
    U = l(140735),
    G = l(97808),
    P = l(778712),
    O = l(463930),
    B = l(478016),
    F = l(821609),
    W = l(80682),
    H = l(827827),
    z = l(894768),
    K = l(287809),
    $ = l(5377),
    Y = l(848966);
function q(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? Y.oT : Y.yf });
}
function V(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? Y.sU : Y._u, children: l });
}
var Q = l(606072),
    Z = l(135294);
function X(e, t) {
    switch (e) {
        case Q.kG.ACTIVITY_SHARING:
            return {
                body: N.intl.string("popular_games" === t ? Z.default.wyK5KO : Z.default["8y885d"]),
                cta: N.intl.string(Z.default.fMbgeZ),
            };
        case Q.kG.PERSONALIZATION:
            return {
                body: N.intl.string("popular_games" === t ? Z.default.uQOR1j : Z.default.mTARYx),
                cta: N.intl.string(N.t["3/IlR0"]),
            };
        case Q.kG.ALL:
            return { body: N.intl.string(Z.default.hYjG3N), cta: N.intl.string(N.t["3/IlR0"]) };
    }
}
var J = l(775602);
function ee() {
    let [e, t] = s.useState(null),
        [l, n] = s.useState(null),
        [i, a] = s.useState("unknown"),
        r = (0, R.bG)([J.Ay], () => J.Ay.useReducedMotion);
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
var et = l(73392),
    el = l(967144),
    en = l(696451),
    ei = l(562153);
function es(e, t) {
    let { showYouSuffix: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = (0, R.bG)([K.default], () => K.default.getUser(t), [t]),
        i = (0, R.bG)([en.Ay], () => en.Ay.getMember(e, t), [e, t]),
        s = (0, el.gn)(e, t, i?.colorStrings ?? null),
        a = ei.Ay.useName(e, void 0, n),
        r = (0, et.a)({ displayNameStyles: i?.displayNameStyles ?? n?.displayNameStyles });
    return {
        user: n,
        member: i,
        roleColorStrings: s,
        displayNameStylesFont: r,
        name: a,
        displayName: l ? N.intl.formatToPlainString(Z.default.subXXA, { name: a }) : a,
    };
}
var ea = l(587895),
    er = l(429913),
    ed = l(311043),
    eo = l(454908),
    ec = l(403362);
function eu(e, t) {
    return {
        id: e,
        name: N.intl.string(N.t.GIWFlF),
        iconUrl: null,
        coverUrl: null,
        coverFallbackIconUrl: null,
        isLoading: t,
    };
}
function em(e) {
    let t = (0, er.A)(e),
        l = (0, R.yK)([ea.A], () => e.map((e) => ea.A.didFetchingApplicationFail(e))),
        n = s.useMemo(() => t.map((e) => e?.getCanonicalGameId() ?? void 0), [t]),
        i = s.useMemo(() => n.filter(ec.Vq), [n]);
    (0, eo.x)(i);
    let a = (0, R.yK)([ed.A], () => n.map((e) => (null != e ? ed.A.getGame(e) : void 0))),
        r = (0, R.yK)([ed.A], () => n.map((e) => null != e && (ed.A.didFetchingFail(e) || ed.A.hasNoData(e))));
    return s.useMemo(() => {
        let i = new Map();
        return (
            e.forEach((e, s) => {
                let d = t[s],
                    o = a[s],
                    c = null == d && !l[s],
                    u = null == o && null != n[s] && !r[s];
                null == d || u
                    ? i.set(e, eu(e, c || u))
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
function eh(e, t) {
    return e.get(t) ?? eu(t, !1);
}
function ef(e, t) {
    return t.map((t) => eh(e, t));
}
var ex = l(927813),
    eg = l(251812),
    ep = l(518782);
function ej(e) {
    return e.entries.length < 3;
}
function ev(e) {
    return (0, eg.K)(ej(e) ? void 0 : e.stat).name;
}
function e_(e) {
    return ej(e)
        ? "empty_state"
        : !(function (e) {
                if (null == e.day_pt) return !1;
                let t = new Date(e.day_pt).getTime();
                if (Number.isNaN(t)) return !1;
                let l = Math.floor((e.week_start_ts * ex.A.Millis.SECOND) / ex.A.Millis.DAY);
                return Math.floor(t / ex.A.Millis.DAY) === l + 6;
            })(e)
          ? "in_progress"
          : "podium";
}
function eb(e) {
    switch (e) {
        case ep.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case ep.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case ep.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
var eA = l(192308);
function ey(e, t, n) {
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
                l.e(512831),
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
                l.e(610943),
                l.e(16954),
                l.e(390213),
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
var eN = l(823353);
function eI(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, Q.T4)(t),
        s = null != n ? Z.default.wyIs4o : Z.default["81PK67"];
    return (0, i.jsx)(S, {
        className: eN.w,
        illustration: c,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(s, { memberCount: 3 }),
        action:
            null != n
                ? (0, i.jsx)(F.$, {
                      variant: "secondary",
                      size: "sm",
                      text: N.intl.string(Z.default.A4ZMJL),
                      onClick: () => {
                          (l(), ey(t, n, N.intl.string(Z.default.PJn0ih)));
                      },
                  })
                : null,
    });
}
var eC = l(125858);
let eE =
        "https://cdn.discordapp.com/assets/content/f86a84ce3eb0d44fa03c308be330f508fbcdec9528cd7969c8f7530cdd058898.png",
    eS = `${eE} 1x, https://cdn.discordapp.com/assets/content/61de4c8a747fbce4c3772d27eeffbea00e3f3fbefd2a972d9d25b96d7116f042.png 2x, https://cdn.discordapp.com/assets/content/7e79963a2b009fabcc285dc56b301eb819e63b604739b0a48c8e0044a527a800.png 3x`;
function ek(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: o, className: c, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: o, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, o, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eE,
        srcSet: eS,
        className: (0, a.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
let eT =
        "https://cdn.discordapp.com/assets/content/e87b249cc95509b720aae7d01a178fa3b37853797f9ad0b87c93c78934854c1f.png",
    ew = `${eT} 1x, https://cdn.discordapp.com/assets/content/4b18fe6b4c48532112a9ea66da62f20f7690a0de57378da9d92f091eba06f2f5.png 2x, https://cdn.discordapp.com/assets/content/b1f5d190ed2b05b6cefd2d44fc875f383134d87d928e3422de92e5e19378a3ae.png 3x`;
function eR(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: o, className: c, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: o, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, o, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eT,
        srcSet: ew,
        className: (0, a.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var eD = l(428678),
    eL = l(952270),
    eM = l(607470),
    eU = l(702476),
    eG = l(676279);
function eP(e) {
    let t = Math.floor(Math.max(e, 0) / ex.A.Seconds.MINUTE);
    return { hours: Math.floor(t / ex.A.Minutes.HOUR), minutes: t % ex.A.Minutes.HOUR };
}
function eO(e) {
    let { hours: t, minutes: l } = eP(e);
    return 0 === t
        ? N.intl.formatToPlainString(Z.default.DdzvGL, { minutes: l })
        : 0 === l
          ? N.intl.formatToPlainString(Z.default["+QfOQs"], { hours: t })
          : N.intl.formatToPlainString(Z.default["6Y8H0A"], { hours: t, minutes: l });
}
function eB(e) {
    let { hours: t, minutes: l } = eP(e);
    return 0 === t
        ? N.intl.formatToPlainString(Z.default.bgQf2H, { minutes: l })
        : 0 === l
          ? N.intl.formatToPlainString(Z.default["D/HToK"], { hours: t })
          : N.intl.formatToPlainString(Z.default.fvtrHn, { hours: t, minutes: l });
}
function eF(e, t) {
    switch (t) {
        case ep.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: N.intl.formatToPlainString(N.t["k2UNz+"], { days: e.value }),
                secondary: eO(e.time_played_seconds),
                secondaryShort: eB(e.time_played_seconds),
            };
        case ep.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: N.intl.formatToPlainString(Z.default.rgpc8E, { count: e.value }),
                secondary: eO(e.time_played_seconds),
                secondaryShort: eB(e.time_played_seconds),
            };
        case ep.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return { primary: eB(e.value / ex.A.Millis.SECOND) };
        default:
            return { primary: "\u2014" };
    }
}
var eW = l(189043);
function eH(e) {
    let { place: t, className: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            1 === t ? (0, i.jsx)("span", { className: eW.EU, "aria-hidden": !0 }) : null,
            (0, i.jsx)(eq, { config: 1 === t ? ez : 2 === t ? e$ : eY, className: l }),
        ],
    });
}
let ez = {
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
    eK =
        "M0 4C0 1.79086 1.79086 0 4 0H92C94.2091 0 96 1.79086 96 4V126.289C96 127.726 95.2299 129.052 93.9823 129.764L49.9823 154.869C48.7537 155.57 47.2463 155.57 46.0177 154.869L2.01767 129.764C0.770119 129.052 0 127.726 0 126.289V4Z",
    e$ = {
        viewBox: "0 0 96 155.395",
        width: 96,
        height: 155.395,
        path: eK,
        tintTransform: "matrix(-2.656 156 -130.577 -2.879 48 0)",
        tintColor: "#8993FA",
        border: { x1: 5.948, y1: 0, x2: 38.463, y2: 160.535 },
        borderColors: ["#D7E7F1", "#5884A0", "#D7E7F1"],
    },
    eY = {
        viewBox: "0 0 96 155.395",
        width: 96,
        height: 155.395,
        path: eK,
        tintTransform: "matrix(0 156 -85.016 -17.4 48 0)",
        tintColor: "#FF6831",
        border: { x1: 6.204, y1: -9.81, x2: 32.417, y2: 135.978 },
        borderColors: ["#FFB97B", "#A96830", "#FFB97B"],
        borderEndOpacity: 0.916,
    };
function eq(e) {
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
var eV = l(83827),
    eQ = l(81466),
    eZ = l(406810),
    eX = l(687966),
    eJ = l(683063),
    e0 = l(573435),
    e1 = l(409626),
    e2 = l(692969),
    e6 = l(396583),
    e3 = l(46653),
    e9 = l(994500);
function e4(e, t) {
    let l = t.user_id,
        n = (0, R.bG)([e3.default], () => e3.default.getId() === l, [l]);
    return es(e, l, { showYouSuffix: n });
}
function e8(e) {
    return (0, R.bG)([e9.A], () => (e9.A.isBlocked(e) ? "blocked" : e9.A.isIgnored(e) ? "ignored" : null), [e]);
}
function e5(e) {
    switch (e) {
        case "blocked":
            return N.intl.string(Z.default.I3YOjC);
        case "ignored":
            return N.intl.string(Z.default.CfMzwe);
    }
}
function e7(e, t) {
    let l = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id),
        {
            isSharingActivity: n,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: a,
            hasFetchedConsents: r,
        } = (0, Q.T4)(e),
        d = !n || !i || !a;
    return s.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == l) return t;
        let e = t.entries.filter((e) => e.user_id !== l);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, l, r]);
}
var te = l(518477),
    tt = l(870087);
function tl(e) {
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
        h = e4(t, l),
        f = l.application_ids[0],
        x = null != f ? eh(a, f) : void 0,
        g = l.user_id,
        p = s.useCallback(() => {
            (u?.("row"),
                (0, eU.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: te.RP.ACTIVITY,
                    scrollTarget: te.bk.RECENT_ACTIVITY,
                }));
        }, [u, g, t]);
    return (0, i.jsxs)("div", {
        ref: c,
        "aria-hidden": o,
        inert: o,
        className: j()(tt.nM, { [tt.Bh]: r && !o, [tt.lR]: d }),
        children: [
            (0, i.jsx)(tn, {
                guildId: t,
                entry: l,
                identity: h,
                lastPlayedGame: x,
                onClick: o ? void 0 : () => u?.("row"),
            }),
            (0, i.jsx)(ta, { entry: l, stat: n, width: m, onClick: o ? void 0 : p }),
            (0, i.jsx)(tf, {
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: a,
                onOpenActivity: o ? void 0 : p,
                onTrackClick: () => u?.("row_game"),
            }),
        ],
    });
}
function tn(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: a } = e,
        r = e8(l.user_id),
        d = null != r,
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ti, { rank: l.rank }),
                d
                    ? (0, i.jsx)("span", {
                          className: tt.gt,
                          children:
                              "blocked" === r
                                  ? (0, i.jsx)(eD.K, { size: "xs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 })
                                  : (0, i.jsx)(eL.EyeSlashIcon, {
                                        size: "xs",
                                        color: o.A.colors.ICON_SUBTLE,
                                        "aria-hidden": !0,
                                    }),
                      })
                    : (0, i.jsx)(G.eu, {
                          size: P._3.SIZE_32,
                          src: n.user?.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                          className: tt.my,
                          "aria-hidden": !0,
                      }),
                (0, i.jsxs)("div", {
                    className: tt.Dc,
                    children: [
                        (0, i.jsx)(y.D, {
                            variant: "heading-xs/semibold",
                            color: d ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            children:
                                null != r
                                    ? e5(r)
                                    : (0, i.jsx)(O.g, {
                                          name: n.displayName,
                                          colorString: n.member?.colorString ?? null,
                                          colorStrings: n.roleColorStrings,
                                          displayNameStylesFont: n.displayNameStylesFont,
                                      }),
                        }),
                        !d &&
                            null != s &&
                            (0, i.jsx)(b.E, {
                                variant: "body-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: N.intl.formatToPlainString(Z.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        }),
        { user: u } = n;
    return null == u || null == a
        ? (0, i.jsx)("div", { className: tt.D_, children: c })
        : (0, i.jsx)(L.D, {
              className: j()(tt.D_, tt.FB),
              onClick: () => {
                  (a(),
                      (0, eU.openUserProfileModal)({
                          userId: u.id,
                          guildId: t,
                          tabSection: te.RP.ACTIVITY,
                          scrollTarget: te.bk.RECENT_ACTIVITY,
                      }));
              },
              children: c,
          });
}
function ti(e) {
    let { rank: t } = e,
        l = N.intl.formatToPlainString(Z.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: tt.Tm, children: (0, i.jsx)(eV.t, { alt: l }) });
        case 2:
            return (0, i.jsx)("div", { className: tt.Tm, children: (0, i.jsx)(ek, { alt: l }) });
        case 3:
            return (0, i.jsx)("div", { className: tt.Tm, children: (0, i.jsx)(eR, { alt: l }) });
        default:
            return (0, i.jsxs)("div", {
                className: tt.mH,
                children: [
                    (0, i.jsx)(U.A, { children: l }),
                    (0, i.jsx)(b.E, {
                        variant: "body-sm/semibold",
                        color: "text-muted",
                        "aria-hidden": !0,
                        children: t,
                    }),
                ],
            });
    }
}
function ts(e) {
    let { stat: t } = e;
    switch (t) {
        case ep.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eQ.CalendarIcon, { size: "xxs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case ep.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eZ.ClockIcon, { size: "xxs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case ep.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eX.GameControllerIcon, { size: "xxs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function ta(e) {
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = eF(t, l),
        d = tt.TH,
        o = null != n ? { width: n } : void 0,
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: tt.bf,
                    children: [
                        (0, i.jsx)(ts, { stat: l }),
                        (0, i.jsx)(b.E, { variant: "body-sm/medium", color: "text-subtle", children: a }),
                    ],
                }),
                null != r && (0, i.jsx)(b.E, { variant: "body-xs/medium", color: "text-muted", children: r }),
            ],
        });
    return null == s
        ? (0, i.jsx)("div", { className: d, style: o, children: c })
        : (0, i.jsx)(L.D, {
              className: d,
              style: o,
              "aria-label": N.intl.string(Z.default.o6mBdl),
              onClick: s,
              children: c,
          });
}
function tr(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)(e0.Ay, {
        mask: l ? e0.l8[24] : e0.Ay.Masks.SQUIRCLE,
        width: 24,
        height: 24,
        children:
            null != t.iconUrl
                ? (0, i.jsx)("img", { className: tt.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                : (0, i.jsx)("span", { className: tt.ct, "aria-hidden": !0 }),
    });
}
function td(e) {
    let { game: t, notched: l, onOpenActivity: n, onTrackClick: s } = e,
        a = (0, e2.A)({
            location: "GameIconButton",
            applicationId: t.id,
            source: e1.GameProfileSources.GuildSpaceLeaderboard,
        });
    return (0, i.jsx)(L.D, {
        className: tt.rO,
        "aria-label":
            null != a
                ? N.intl.formatToPlainString(N.t["8QLQB+"], { gameName: t.name })
                : N.intl.string(Z.default.o6mBdl),
        onClick: () => {
            null == a ? n() : (s?.(), a());
        },
        children: (0, i.jsx)(tr, { game: t, notched: l }),
    });
}
function to(e, t) {
    let l = e.filter((e) => null != e.iconUrl || e.isLoading).slice(0, t > 3 ? 2 : 3),
        n = Math.max(0, t - l.length);
    return { visibleGames: l, overflowCount: n };
}
function tc(e) {
    let { count: t, onClick: l } = e,
        n = (0, i.jsx)(e0.Ay, {
            mask: e0.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children: (0, i.jsx)("div", {
                className: tt.p0,
                children: (0, i.jsx)(b.E, {
                    variant: "body-xs/semibold",
                    color: "text-subtle",
                    children: N.intl.formatToPlainString(Z.default.JiMMEd, { count: t }),
                }),
            }),
        });
    return null != l
        ? (0, i.jsx)(L.D, { className: tt.rO, "aria-label": N.intl.string(Z.default.o6mBdl), onClick: l, children: n })
        : (0, i.jsx)("span", { className: tt.rO, children: n });
}
function tu(e) {
    let { played: t, totalCount: l, interaction: n } = e,
        { visibleGames: s, overflowCount: a } = to(t, l);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s.map((e, t) => {
                let l = a > 0 || t !== s.length - 1;
                return null != n
                    ? (0, i.jsx)(td, { game: e, notched: l, ...n }, `${e.id}-${t}`)
                    : (0, i.jsx)(
                          "span",
                          { className: tt.rO, "aria-hidden": !0, children: (0, i.jsx)(tr, { game: e, notched: l }) },
                          `${e.id}-${t}`,
                      );
            }),
            a > 0 ? (0, i.jsx)(tc, { count: a, onClick: n?.onOpenActivity }) : null,
        ],
    });
}
function tm(e) {
    let { played: t, totalCount: l } = e;
    return (0, i.jsx)("div", { className: tt.Nw, children: (0, i.jsx)(tu, { played: t, totalCount: l }) });
}
function th(e) {
    let { played: t, totalCount: l, children: n } = e,
        { visibleGames: s, overflowCount: a } = to(t, l),
        r = Math.max(1, s.length + Number(a > 0));
    return (0, i.jsx)(eJ.u, {
        body:
            0 === t.length
                ? N.intl.string(Z.default["7CrlYb"])
                : 1 === t.length
                  ? N.intl.formatToPlainString(Z.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? N.intl.formatToPlainString(Z.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : 3 === t.length && 3 === l
                      ? N.intl.formatToPlainString(Z.default["7h8GUv"], {
                            firstGame: t[0].name,
                            secondGame: t[1].name,
                            thirdGame: t[2].name,
                        })
                      : N.intl.formatToPlainString(Z.default.bxcrSz, {
                            firstGame: t[0].name,
                            secondGame: t[1].name,
                            otherCount: l - 2,
                        }),
        asset: s.length > 0 ? (0, i.jsx)(tm, { played: t, totalCount: l }) : void 0,
        assetSize: 24 * r - 5 * (r - 1),
        children: n,
    });
}
function tf(e) {
    let { applicationIds: t, applicationCount: l, games: n, onOpenActivity: s, onTrackClick: a } = e,
        r = ef(n, t);
    return null == s
        ? (0, i.jsx)("div", { className: tt.ag, children: (0, i.jsx)(tm, { played: r, totalCount: l }) })
        : (0, i.jsx)("div", {
              className: tt.ag,
              children: (0, i.jsx)(th, {
                  played: r,
                  totalCount: l,
                  children: (0, i.jsx)("div", {
                      className: j()(tt.Nw, tt.Dz),
                      children: (0, i.jsx)(tu, {
                          played: r,
                          totalCount: l,
                          interaction: { onOpenActivity: s, onTrackClick: a },
                      }),
                  }),
              }),
          });
}
let tx = "/assets/df4c2af7174fe116.png",
    tg = l.p + "ed4a4098f461e855.webm",
    tp = l.p + "ba010552067644bd.mp4";
function tj(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
        o = [eW.HC, eW.th, eW.Ou];
    return (0, i.jsxs)("div", {
        className: eW.pI,
        role: "list",
        "aria-label": N.intl.string(Z.default.wKXLfQ),
        children: [
            (0, i.jsx)(tv, {}),
            l.map((e, l) =>
                (0, i.jsx)(
                    t_,
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
function tv() {
    let e = (0, R.bG)([J.Ay], () => J.Ay.useReducedMotion),
        t = (0, eG.TM)();
    return (0, i.jsx)("div", {
        className: eW.Tp,
        "aria-hidden": !0,
        children: e
            ? (0, i.jsx)("img", { className: eW.je, src: tx, alt: "" })
            : (0, i.jsx)(eM.A, {
                  className: eW.je,
                  poster: tx,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  controls: !1,
                  disablePictureInPicture: !0,
                  children: (0, i.jsx)("source", { src: t ? tp : tg, type: t ? "video/mp4" : "video/webm" }),
              }),
    });
}
function t_(e) {
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
        m = ef(r, l.application_ids),
        h = e4(t, l),
        f = e8(l.user_id),
        x = null != f,
        { primary: g, secondaryShort: p } = eF(l, a),
        v = 1 === n ? P._3.SIZE_72 : P._3.SIZE_40,
        _ =
            1 === n
                ? "/assets/607118ac1eb0343b.svg"
                : 2 === n
                  ? "/assets/cec3154aa136b491.svg"
                  : "/assets/2e0f6ee6b4671439.svg",
        A = 1 === n ? eC.b : 2 === n ? ek : eR,
        y = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eH, { place: n, className: eW.Nr }),
                (0, i.jsxs)("div", {
                    className: j()(eW.Ux, { [eW.Oe]: null == p }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: eW.R3,
                            children: [
                                x
                                    ? (0, i.jsx)("span", {
                                          className: eW.gt,
                                          children:
                                              "blocked" === f
                                                  ? (0, i.jsx)(eD.K, {
                                                        size: 1 === n ? "md" : "sm",
                                                        color: o.A.colors.ICON_SUBTLE,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)(eL.EyeSlashIcon, {
                                                        size: 1 === n ? "md" : "sm",
                                                        color: o.A.colors.ICON_SUBTLE,
                                                        "aria-hidden": !0,
                                                    }),
                                      })
                                    : (0, i.jsx)(G.eu, {
                                          size: v,
                                          className: eW.my,
                                          src: h.user?.getAvatarURL(t, (0, P.FT)(v)) ?? void 0,
                                          "aria-hidden": !0,
                                      }),
                                (0, i.jsx)("img", { className: eW.vj, src: _, alt: "", "aria-hidden": !0 }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: eW.WD,
                            children: [
                                (0, i.jsx)(b.E, {
                                    variant: "body-sm/semibold",
                                    color: x ? "text-subtle" : "text-default",
                                    lineClamp: 1,
                                    className: eW.IY,
                                    children:
                                        null != f
                                            ? e5(f)
                                            : (0, i.jsx)(O.g, {
                                                  name: h.displayName,
                                                  colorString: h.member?.colorString ?? null,
                                                  colorStrings: h.roleColorStrings,
                                                  displayNameStylesFont: h.displayNameStylesFont,
                                              }),
                                }),
                                (0, i.jsx)(th, {
                                    played: m,
                                    totalCount: l.application_count,
                                    children: (0, i.jsx)(b.E, {
                                        variant: "body-xs/medium",
                                        color: "text-default",
                                        lineClamp: 1,
                                        className: eW.p,
                                        children: g,
                                    }),
                                }),
                                null != p &&
                                    (0, i.jsx)(b.E, {
                                        variant: "body-xs/medium",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        className: eW.p,
                                        children: p,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(A, {
                    className: eW.dR,
                    width: 24,
                    height: 24,
                    alt: N.intl.formatToPlainString(Z.default.I4JiAQ, { rank: n }),
                }),
            ],
        }),
        { user: I } = h;
    return (0, i.jsx)("div", {
        className: s,
        role: "listitem",
        ref: d ? c : void 0,
        children: (0, i.jsx)(L.D, {
            className: eW.fs,
            tabIndex: null != I ? 0 : -1,
            "aria-disabled": null == I,
            onClick:
                null != I
                    ? () => {
                          (u?.(),
                              (0, eU.openUserProfileModal)({
                                  userId: I.id,
                                  guildId: t,
                                  tabSection: te.RP.ACTIVITY,
                                  scrollTarget: te.bk.RECENT_ACTIVITY,
                              }));
                      }
                    : void 0,
            children: y,
        }),
    });
}
var tb = l(652215),
    tA = l(219047);
function ty(e) {
    let { guildId: t, data: l, inModal: n = !1, column: a, disabled: r = !1 } = e,
        { stat: d, entries: o } = l,
        c = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id),
        u = s.useMemo(() => o.find((e) => e.user_id === c) ?? null, [o, c]),
        m = s.useMemo(() => {
            let e = o.slice(0, 20);
            return null == u || e.includes(u) ? e : [...e, u];
        }, [o, u]),
        h = s.useMemo(() => Array.from(new Set(m.map((e) => e.user_id))), [m]);
    (0, W.k6)(t, h);
    let f = eb(d),
        g = em(s.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
        p = ej(l),
        v = e_(l),
        _ = "podium" === v,
        b = k({ expanded: n, column: a }),
        A = [m[0], m[1], m[2]],
        y = s.useMemo(() => (_ ? m.slice(A.length) : m), [_, m, A.length]),
        I = _ && null != u && A.includes(u),
        { scrollerRef: E, scrollerNode: S, userRowRef: T, floatingRowPosition: w, scrollToUserRow: M } = ee(),
        U = (function (e) {
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
        })(S),
        G = null == u && null != c,
        P = !I && null != u && null != w,
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
        H = (0, i.jsx)("div", {
            ref: B,
            className: tA.V$,
            "aria-hidden": !0,
            children: O.map((e) => (0, i.jsx)(ta, { entry: e, stat: d }, e.user_id)),
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
                    x.default.track(tb.HAw.LEADERBOARD_END_IMPRESSION, {
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
        leaderboardView: b,
        metric: f,
        isAtEnd: U,
        isEmpty: p,
        disabled: r,
    });
    let z = s.useCallback(
            (e) => {
                r ||
                    x.default.track(tb.HAw.LEADERBOARD_CLICK, {
                        location: e,
                        guild_id: t,
                        leaderboard_state: v,
                        leaderboard_view: b,
                        metric: f,
                    });
            },
            [t, v, b, f, r],
        ),
        $ = s.useCallback(
            (e) => {
                let l = e === u;
                return (0, i.jsx)(
                    tl,
                    {
                        guildId: t,
                        entry: e,
                        stat: d,
                        games: g,
                        isCurrentUser: l,
                        shouldDimForCurrentUser: l && P,
                        rowRef: l ? T : void 0,
                        onClick: z,
                        metricWidth: F ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [P, u, g, t, d, T, z, F],
        );
    return p
        ? (0, i.jsx)("div", {
              className: tA.Cm,
              children: (0, i.jsx)(eI, { guildId: t, onActivitySharingClick: () => z("activity_sharing") }),
          })
        : null == F
          ? (0, i.jsxs)("div", { className: tA.rf, children: [H, (0, i.jsx)(C, {})] })
          : (0, i.jsxs)("div", {
                className: tA.rf,
                children: [
                    H,
                    (0, i.jsxs)("div", {
                        className: tA.SY,
                        children: [
                            (0, i.jsxs)(D.Ip, {
                                fade: !0,
                                className: j()(tA.p_, { [tA.zE]: n, [tA.Ng]: G }),
                                ref: E,
                                children: [
                                    _ &&
                                        (0, i.jsxs)("div", {
                                            className: tA.ZH,
                                            children: [
                                                (0, i.jsx)(tj, {
                                                    guildId: t,
                                                    entries: A,
                                                    stat: d,
                                                    games: g,
                                                    currentUserEntry: u,
                                                    currentUserPillarRef: T,
                                                    onClick: () => z("podium"),
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: tA.vG,
                                                    "aria-hidden": !0,
                                                    inert: !0,
                                                    children: A.map((e) =>
                                                        (0, i.jsx)(
                                                            "div",
                                                            {
                                                                className: tA.iS,
                                                                children: (0, i.jsx)(tl, {
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
                            P || (G && !U) ? (0, i.jsx)(q, { position: "top" !== w || G ? "bottom" : "top" }) : null,
                            P &&
                                (0, i.jsx)(V, {
                                    position: w,
                                    children: (0, i.jsx)(L.D, {
                                        className: tA.Po,
                                        "aria-label": N.intl.string(Z.default.d0Z8kd),
                                        onClick: M,
                                        children: (0, i.jsx)(tl, {
                                            guildId: t,
                                            entry: u,
                                            stat: d,
                                            games: g,
                                            isCurrentUser: !0,
                                            shouldDimForCurrentUser: !1,
                                            isFloating: !0,
                                            onClick: z,
                                            metricWidth: F ?? void 0,
                                        }),
                                    }),
                                }),
                            G && (0, i.jsx)(tI, { guildId: t, onActivitySharingClick: () => z("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(tN, { computedAt: l.computed_at, inModal: n }),
                ],
            });
}
function tN(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: tA.z8,
            children: [
                (0, i.jsx)(M.RefreshIcon, { size: "xxs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(b.E, {
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    children: N.intl.string(Z.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: tA.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(tA.qr, { [tA.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(m.m, {
                  text: N.intl.formatToPlainString(Z.default["1bt50t"], {
                      timestamp: (0, $.mk)(new Date(t)).toLowerCase(),
                  }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function tI(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, Q.T4)(t),
        a = null == n ? null : { requirement: n, ...X(n, "leaderboard") },
        r = (0, R.bG)([z.A], () => z.A.getStatus() === tb.clD.INVISIBLE),
        d = N.intl.string(Z.default.toxuHd),
        c = !1;
    null != a ? (d = a.body) : r && ((d = N.intl.string(Z.default.PTDDhW)), (c = !0));
    let [u] = s.useState(null != a),
        [m] = s.useState(c),
        h = null == a && !c && u,
        f = null == a && !c && m;
    f ? (d = N.intl.string(Z.default.cgRADC)) : h && (d = N.intl.string(Z.default.dqYuni));
    let {
        user: x,
        member: g,
        name: p,
        roleColorStrings: j,
        displayNameStylesFont: v,
    } = es(
        t,
        (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id ?? ""),
    );
    return null == x
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
                                  (0, i.jsx)(U.A, { children: N.intl.string(Z.default["oHdW+u"]) }),
                                  (0, i.jsx)(b.E, {
                                      variant: "body-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(G.eu, {
                              size: P._3.SIZE_32,
                              src: x.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                              className: tA.SA,
                              "aria-hidden": !0,
                              status: r ? tb.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: tA.ko,
                              children: [
                                  (0, i.jsx)(y.D, {
                                      variant: "heading-xs/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(O.g, {
                                          name: p,
                                          colorString: g?.colorString ?? null,
                                          colorStrings: j,
                                          displayNameStylesFont: v,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: tA.LF,
                                      children: [
                                          h || f
                                              ? (0, i.jsx)(B.U, {
                                                    size: "xs",
                                                    color: o.A.colors.ICON_FEEDBACK_POSITIVE,
                                                    "aria-hidden": !0,
                                                })
                                              : null,
                                          (0, i.jsx)(b.E, {
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
                          children: (0, i.jsx)(F.$, {
                              variant: "secondary",
                              size: "sm",
                              text: a.cta,
                              onClick: () => {
                                  (l(), ey(t, a.requirement, N.intl.string(Z.default.PJn0ih)));
                              },
                          }),
                      }),
                  c &&
                      (0, i.jsx)(F.$, {
                          variant: "secondary",
                          size: "sm",
                          text: N.intl.string(N.t.fwPurU),
                          onClick: () => {
                              (0, H.A)({ nextStatus: tb.clD.ONLINE, prevStatus: tb.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var tC = l(665260),
    tE = l(620632),
    tS = l(143129),
    tk = l(683071),
    tT = l(825484),
    tw = l(71393),
    tR = l(967198),
    tD = l(49303),
    tL = l(313627);
let tM = tb.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var tU = l(224640),
    tG = l(20742),
    tP = l(253932),
    tO = l(515746);
function tB(e) {
    let { data: t } = e,
        l = (0, eg.K)(t.stat),
        {
            ended: n,
            endDate: a,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + ex.A.Seconds.WEEK) * ex.A.Millis.SECOND,
                [l, n] = s.useState(() => Date.now()),
                i = t - l,
                a = i <= 0,
                r = i - (Math.ceil(i / ex.A.Millis.DAY) - 1) * ex.A.Millis.DAY;
            return (
                (0, e6.A)(() => n(Date.now()), a ? null : r),
                s.useMemo(
                    () => ({
                        ended: a,
                        endDate: new Date(t),
                        badgeLabel: a
                            ? N.intl.string(Z.default["J8r/7L"])
                            : N.intl.formatToPlainString(Z.default["PuaR+2"], { days: Math.ceil(i / ex.A.Millis.DAY) }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = tP.PZ.useSetting(),
        o = 2 > (0, $.m_)(a, new Date()) ? (0, $.mk)(a, !1, d).toLowerCase() : (0, $.i$)(a, "L LT", d).toLowerCase(),
        c = n
            ? N.intl.format(Z.default.kG9XmM, { endedAt: o, nextStatName: (0, eg.K)(t.next_stat).name })
            : N.intl.format(Z.default["X+VLqi"], { statQuestion: l.question, endsAt: o });
    return (0, i.jsx)(eJ.u, {
        title: l.name,
        body: c,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(tO.qS, n ? tO.yM : tO.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(b.E, {
                variant: "body-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function tF(e) {
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
function tW(e) {
    let { guildId: t, data: l, expanded: n, column: i, enabled: a } = e;
    return tF({
        onHoverEnd: s.useCallback(
            (e) => {
                let { duration: s, flush: a } = e;
                null != l &&
                    x.default.track(
                        tb.HAw.LEADERBOARD_HOVER,
                        {
                            guild_id: t,
                            duration: s,
                            leaderboard_state: e_(l),
                            leaderboard_view: k({ expanded: n, column: i }),
                            metric: eb(l.stat),
                        },
                        { flush: a },
                    );
            },
            [t, l, n, i],
        ),
        enabled: a,
    });
}
var tH = l(460614);
function tz(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = e7(t, l),
        a = tW({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(tU.d, {
              size: "lg",
              "aria-label": ev(s),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: a,
                  children: [
                      (0, i.jsxs)("div", {
                          className: tH.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tH.LD,
                                  children: [
                                      (0, i.jsx)(u.TrophyIcon, {
                                          size: "xs",
                                          color: o.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(y.D, {
                                          variant: "heading-xs/medium",
                                          className: tH.DD,
                                          children: ev(s),
                                      }),
                                      (0, i.jsx)(tB, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(tG.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: tH.rf,
                          children: (0, i.jsx)(ty, { guildId: t, data: s, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var tK = l(452027),
    t$ = l(103557),
    tY = l(95477),
    tq = l(241326),
    tV = l(2553),
    tQ = l(405810),
    tZ = l(488428),
    tX = l(776231);
let tJ = (0, eG.cy)();
function t0(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (tJ ? "webp" : "gif") : tJ ? "webp" : "jpg",
        { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = tb.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != s ? `https://${s}${r}` : location.protocol + a + r,
        o = { size: (0, tX.kr)(500 * (0, tX.mZ)()) };
    return ("jpg" === i && (o.quality = "lossless"), "webp" === i && n && (o.animated = !0), (d += `?${tZ.As(o)}`));
}
var t1 = l(868602);
function t2(e) {
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
var t6 = l(22231),
    t3 = l(445187);
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
var t4 = l(770178),
    t8 = l(104171),
    t5 = l(619019),
    t7 = l(165862),
    le = l(477782),
    lt = l(950305),
    ll = l(265872),
    ln = l(966327),
    li = l(788593),
    ls = l(427262);
l(347661);
var la = l(948852),
    lr = l(365611);
function ld(e) {
    let { guildId: t, applicationId: l, userIds: n, totalUsers: a, gameName: r } = e,
        d = s.useRef(null),
        c = (0, R.yK)([e9.A], () => n.filter((e) => !e9.A.isBlockedOrIgnored(e)).slice(0, 5), [n]),
        u = (0, R.yK)([K.default], () => c.map((e) => K.default.getUser(e)).filter(ec.Vq), [c]),
        m = (0, R.cf)(
            [en.Ay],
            () => {
                let e = {};
                for (let l of u) e[l.id] = en.Ay.getNick(t, l.id) ?? ls.Ay.getName(l);
                return e;
            },
            [t, u],
        ),
        h = Math.max(0, a - u.length),
        f = N.intl.formatToPlainString(Z.default["XaT+x0"], { count: a, gameName: r }),
        x = N.intl.formatToPlainString(N.t.F6iMs4, { count: h }),
        g = s.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsxs)(t7.W, {
                    navId: `popular-games-players-${l}`,
                    "aria-label": f,
                    onClose: n,
                    onSelect: void 0,
                    children: [
                        u.map((e) =>
                            (0, i.jsx)(
                                le.Dr,
                                {
                                    id: e.id,
                                    label: m[e.id],
                                    leadingAccessory: {
                                        type: "avatar",
                                        src: e.getAvatarURL(t, (0, P.FT)(P._3.SIZE_24)),
                                    },
                                    iconLeft: () =>
                                        (0, i.jsx)(ln.A, {
                                            user: e,
                                            size: P._3.SIZE_20,
                                            guildId: t,
                                            "aria-hidden": !0,
                                        }),
                                    action: () => (0, eU.openUserProfileModal)({ userId: e.id, guildId: t }),
                                },
                                e.id,
                            ),
                        ),
                        h > 0 ? (0, i.jsx)(le.Dr, { id: `${l}-overflow`, label: x, disabled: !0 }) : null,
                    ],
                });
            },
            [l, t, f, m, h, x, u],
        ),
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(lt.UserIcon, {
                    size: "custom",
                    width: 14,
                    height: 14,
                    color: o.A.colors.ICON_SUBTLE,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(b.E, {
                    tag: "span",
                    className: la.Rd,
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: a,
                }),
            ],
        });
    return 0 === u.length
        ? (0, i.jsx)("div", { className: la.Fk, role: "img", "aria-label": f, children: p })
        : (0, i.jsx)(ll.Y, {
              targetElementRef: d,
              position: "bottom",
              align: "left",
              renderPopout: g,
              children: (e) =>
                  (0, i.jsx)(L.D, { innerRef: d, className: j()(la.Fk, la.r6), ...e, "aria-label": f, children: p }),
          });
}
function lo(e) {
    let { guildId: t, entry: l, games: n, onClick: s } = e,
        { name: a, coverUrl: r, coverFallbackIconUrl: d, isLoading: o } = eh(n, l.application_id),
        c = (0, e2.A)({
            location: "PopularGamesGameCard",
            applicationId: l.application_id,
            source: e1.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        u = null != c;
    if (o)
        return (0, i.jsx)("div", {
            className: la.Nr,
            role: "listitem",
            children: (0, i.jsx)("div", { className: lr.mD }),
        });
    let h = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)("div", {
                    className: j()(lr.PY, { [lr.vk]: u, [lr.iL]: u && (null != r || null != d) }),
                    children: (0, i.jsx)(li.R, { imageSrc: r, iconSrc: d, gameName: a }),
                }),
            }),
            (0, i.jsx)(b.E, { variant: "body-sm/semibold", color: "text-default", lineClamp: 1, children: a }),
        ],
    });
    return (0, i.jsxs)("div", {
        className: la.Nr,
        role: "listitem",
        children: [
            u
                ? (0, i.jsx)(L.D, {
                      className: j()(la.LO, la.vk),
                      onClick: () => {
                          (c(), s());
                      },
                      "aria-label": N.intl.formatToPlainString(N.t["8QLQB+"], { gameName: a }),
                      children: h,
                  })
                : (0, i.jsx)("div", { className: la.LO, children: h }),
            (0, i.jsx)(ld, {
                guildId: t,
                applicationId: l.application_id,
                userIds: l.user_ids,
                totalUsers: l.total_users,
                gameName: a,
            }),
        ],
    });
}
function lc(e) {
    return 0 === e.games.length || e.total_users < 3;
}
function lu(e) {
    return lc(e) ? "empty_state" : "regular";
}
var lm = l(966756),
    lh = l(560328);
function lf(e) {
    let { guildId: t, requirement: l, onClick: n } = e;
    return (0, i.jsx)(S, {
        className: lh.p$,
        illustration: t9,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(null != l ? Z.default.JDAHQV : Z.default.LeSGal, { memberCount: 3 }),
        action:
            null != l
                ? (0, i.jsx)(F.$, {
                      variant: "secondary",
                      size: "sm",
                      text: N.intl.string(Z.default.A4ZMJL),
                      onClick: () => {
                          (n(), ey(t, l, N.intl.string(Z.default.e7pD5m)));
                      },
                  })
                : null,
    });
}
function lx(e) {
    let { guildId: t, requirement: l, onClick: n } = e,
        s = X(l, "popular_games");
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
                        children: N.intl.string(lm.default.WhdCGP),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children: s.body,
                    }),
                ],
            }),
            (0, i.jsx)(F.$, {
                variant: "secondary",
                size: "sm",
                text: s.cta,
                onClick: () => {
                    (n(), ey(t, l, N.intl.string(Z.default.e7pD5m)));
                },
            }),
        ],
    });
}
function lg(e) {
    let { guildId: t, user: l } = e,
        n = ei.Ay.useName(t, void 0, l);
    return (0, i.jsx)(m.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsx)("span", {
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(G.eu, {
                src: l.getAvatarURL(t, (0, P.FT)(P._3.SIZE_24)),
                size: P._3.SIZE_24,
                "aria-hidden": !0,
            }),
        }),
    });
}
function lp(e) {
    let { guildId: t, memberIds: l, totalUsers: n, totalGames: s, isCompact: a } = e,
        r = a ? 2 : 4,
        d = (0, R.yK)(
            [e9.A, K.default],
            () =>
                l
                    .filter((e) => !e9.A.isBlockedOrIgnored(e))
                    .map((e) => K.default.getUser(e))
                    .filter(ec.Vq)
                    .slice(0, r),
            [l, r],
        ),
        o = n - d.length;
    return (0, i.jsxs)("div", {
        className: lh.qr,
        children: [
            (0, i.jsx)(b.E, {
                className: lh.z,
                variant: "body-xs/normal",
                color: "text-muted",
                lineClamp: 1,
                children: N.intl.format(Z.default.ED2GDQ, { memberCount: n, gameCount: s }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: lh.WM,
                    children: (0, i.jsx)(t8.Ay, {
                        users: d,
                        guildId: t,
                        size: t8.DN.SIZE_24,
                        max: d.length,
                        renderUser: function (e) {
                            return e instanceof t5.A ? (0, i.jsx)(lg, { guildId: t, user: e }) : null;
                        },
                        count: n,
                        hideMoreUsers: o <= 0,
                        renderMoreUsers: () =>
                            (0, i.jsx)("span", {
                                className: lh.ju,
                                children: (0, i.jsx)(b.E, {
                                    tag: "span",
                                    variant: "body-xs/semibold",
                                    color: "text-subtle",
                                    children: N.intl.formatToPlainString(Z.default.G5PLYW, { count: o }),
                                }),
                            }),
                    }),
                }),
        ],
    });
}
function lj(e) {
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
            return ((0, t4.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: u } = (0, Q.T4)(t),
        m = lc(l),
        h = s.useMemo(() => (m ? [] : l.user_ids), [m, l.user_ids]);
    (0, W.k6)(t, h);
    let f = s.useMemo(() => l.games.map((e) => e.application_id), [l.games]),
        g = em(f),
        p = s.useMemo(() => f.map((e) => g.get(e)?.coverUrl).find(ec.Vq) ?? null, [g, f]),
        j = s.useMemo(() => ({ "--custom-popular-games-columns": o }), [o]),
        v = s.useCallback(
            (e) => {
                r ||
                    x.default.track(tb.HAw.POPULAR_GAMES_CLICK, {
                        location: e,
                        guild_id: t,
                        popular_games_state: lu(l),
                        popular_games_view: k({ expanded: !1, column: a }),
                    });
            },
            [r, t, l, a],
        ),
        _ = null;
    return (
        (_ = m
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
                                              lo,
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
                                  (0, i.jsx)(lx, { guildId: t, requirement: u, onClick: () => v("activity_sharing") }),
                              (0, i.jsx)(lp, {
                                  guildId: t,
                                  memberIds: h,
                                  totalUsers: l.total_users,
                                  totalGames: l.total_games,
                                  isCompact: c,
                              }),
                          ],
                      }),
                  ],
              })),
        (0, i.jsx)("div", { className: lh.rf, ref: d, children: _ })
    );
}
function lv(e) {
    return e.default_title ?? N.intl.string(Z.default.GZsvDx);
}
var l_ = l(612324),
    lb = l(650583),
    lA = l(684343);
function ly(e) {
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
                    case lb.dh.ARROW_RIGHT:
                    case lb.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case lb.dh.ARROW_LEFT:
                    case lb.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
                        break;
                    case lb.dh.HOME:
                        t = 0;
                        break;
                    case lb.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: lA.vR,
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
                    className: lA.Mf,
                    "aria-selected": t,
                    "aria-controls": a,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: o,
                    children: (0, i.jsx)(b.E, {
                        className: lA.Pf,
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
var lN = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let lI = ["top_songs", "top_artists", "top_listeners"];
function lC(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function lE(e) {
    return e.top_listeners.length < 2;
}
function lS(e, t) {
    return lC(e) || ("top_listeners" === t && lE(e)) ? "empty_state" : "populated";
}
function lk(e) {
    return e ? "compact" : "regular";
}
function lT(e) {
    switch (e) {
        case "top_songs":
            return N.intl.string(Z.default.KgeEtx);
        case "top_artists":
            return N.intl.string(Z.default.RYxWTS);
        case "top_listeners":
            return N.intl.string(Z.default.KO73KB);
    }
}
function lw(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function lR(e) {
    return `popular-music-panel-${e}`;
}
var lD = l(196765);
let lL = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lM = (0, lD.v)(() => ({ byWidgetId: {} }));
function lU(e, t) {
    lM.setState((l) => {
        let n = l.byWidgetId[e] ?? lL;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lG(e) {
    return lM((t) => t.byWidgetId[e]?.view ?? lL.view);
}
function lP(e) {
    return lM((t) => t.byWidgetId[e]?.isCompact ?? lL.isCompact);
}
function lO(e) {
    return lM((t) => t.byWidgetId[e]?.selectedTrackId ?? lL.selectedTrackId);
}
function lB(e) {
    let { guildId: t, data: l, view: n, isCompact: i, location: s } = e;
    x.default.track(tb.HAw.POPULAR_MUSIC_CLICK, {
        location: s,
        guild_id: t,
        popular_music_state: null != l ? lS(l, n) : null,
        popular_music_view: n,
        popular_music_layout: lk(i),
    });
}
function lF(e) {
    let { guildId: t, widgetId: l, data: n } = e,
        i = lG(l),
        a = lP(l);
    return s.useCallback((e) => lB({ guildId: t, data: n, view: i, isCompact: a, location: e }), [t, n, i, a]);
}
function lW(e) {
    let { guildId: t, widgetId: l, data: n, length: i, isAtEnd: a, disabled: r = !1 } = e,
        d = lG(l),
        o = lP(l),
        c = null != n ? lS(n, d) : null,
        u = lk(o),
        m = "empty_state" === c,
        h = s.useRef(null),
        f = `${t}:${i}:${c}:${d}:${u}`,
        g = s.useCallback(() => {
            h.current !== f &&
                ((h.current = f),
                x.default.track(tb.HAw.POPULAR_MUSIC_END_IMPRESSION, {
                    guild_id: t,
                    popular_music_length: m ? 0 : i,
                    popular_music_state: c,
                    popular_music_view: d,
                    popular_music_layout: u,
                }));
        }, [t, f, m, i, c, d, u]);
    s.useEffect(() => {
        !r && null != c && (m || a) && g();
    }, [r, c, m, a, g]);
}
function lH(e) {
    let [t, l] = s.useState(null),
        n = s.useCallback(
            (t) => {
                l((l) => (l?.contentKey === e && l.isAtEnd === t ? l : { contentKey: e, isAtEnd: t }));
            },
            [e],
        );
    return [t?.contentKey === e && t.isAtEnd, n];
}
var lz = l(59652),
    lK = l(991308),
    l$ = l(28863),
    lY = l(148166),
    lq = l(427209),
    lV = l(294454),
    lQ = l(605810);
function lZ(e) {
    let { target: t, tabIndex: n, onClick: s } = e;
    return (0, i.jsx)("div", {
        className: lQ.ql,
        children: (0, i.jsx)(m.m, {
            text: N.intl.string(N.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(h.K, {
                icon: lq.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": N.intl.string(N.t.Ej3B3Y),
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
                                    l.e(813057),
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
                                    l.e(512831),
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
                                    l.e(691398),
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
                                    l.e(937139),
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
                                    l.e(425345),
                                    l.e(125729),
                                    l.e(888326),
                                    l.e(695765),
                                    l.e(131859),
                                    l.e(188941),
                                    l.e(349619),
                                    l.e(264236),
                                    l.e(543039),
                                    l.e(481647),
                                    l.e(398125),
                                    l.e(221825),
                                    l.e(930758),
                                    l.e(776195),
                                    l.e(253729),
                                    l.e(593600),
                                    l.e(749248),
                                    l.e(266900),
                                    l.e(707826),
                                    l.e(948804),
                                    l.e(199999),
                                    l.e(879315),
                                    l.e(314243),
                                    l.e(110116),
                                    l.e(37085),
                                    l.e(890027),
                                    l.e(900361),
                                    l.e(809915),
                                    l.e(463095),
                                    l.e(927211),
                                    l.e(361626),
                                    l.e(646506),
                                    l.e(445124),
                                    l.e(76428),
                                    l.e(445421),
                                    l.e(783988),
                                    l.e(721690),
                                    l.e(844780),
                                    l.e(832823),
                                    l.e(761935),
                                    l.e(511527),
                                    l.e(763070),
                                    l.e(87306),
                                    l.e(502018),
                                    l.e(276863),
                                    l.e(955184),
                                    l.e(249366),
                                    l.e(728633),
                                    l.e(628439),
                                    l.e(35757),
                                    l.e(539620),
                                    l.e(225990),
                                    l.e(297964),
                                    l.e(787672),
                                    l.e(248329),
                                    l.e(234236),
                                    l.e(832817),
                                    l.e(893928),
                                    l.e(165595),
                                    l.e(416143),
                                    l.e(401590),
                                    l.e(844695),
                                    l.e(213653),
                                    l.e(466354),
                                    l.e(133902),
                                    l.e(791154),
                                    l.e(92124),
                                    l.e(123353),
                                    l.e(263765),
                                    l.e(988077),
                                    l.e(592028),
                                    l.e(776750),
                                    l.e(445980),
                                    l.e(76705),
                                    l.e(232551),
                                    l.e(425906),
                                    l.e(123216),
                                    l.e(561216),
                                    l.e(648365),
                                    l.e(692835),
                                    l.e(588940),
                                    l.e(21219),
                                    l.e(829177),
                                    l.e(106943),
                                    l.e(348674),
                                    l.e(494768),
                                    l.e(182408),
                                    l.e(14962),
                                    l.e(45072),
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
                                    l.e(459332),
                                    l.e(486309),
                                    l.e(894747),
                                    l.e(54953),
                                    l.e(317225),
                                    l.e(53374),
                                    l.e(56021),
                                    l.e(741162),
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
                                    l.e(32781),
                                    l.e(996218),
                                    l.e(488990),
                                    l.e(959134),
                                    l.e(332470),
                                    l.e(735381),
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
                                    l.e(981237),
                                    l.e(303730),
                                    l.e(362422),
                                    l.e(789573),
                                    l.e(732272),
                                    l.e(236946),
                                    l.e(935948),
                                    l.e(692639),
                                    l.e(890480),
                                    l.e(593020),
                                    l.e(440963),
                                    l.e(657003),
                                    l.e(766031),
                                    l.e(394317),
                                    l.e(304329),
                                    l.e(12762),
                                    l.e(256831),
                                ]).then(l.bind(l, 99266));
                                return function (l) {
                                    return (0, i.jsx)(e, { ...l, target: t });
                                };
                            },
                            { stackingBehavior: "stack", modalKey: lV.aU },
                        ));
                },
            }),
        }),
    });
}
var lX = l(272984);
function lJ(e) {
    let { artist: t, itemProps: l, cardRef: n, onClick: a, onForwardClick: r } = e,
        d = null != t.artist_image_hash ? lX.RQ.IMAGE(t.artist_image_hash) : null,
        o = s.useMemo(
            () => ({
                kind: "artist",
                shareUrl: lX.RQ.WEB_OPEN(lX.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: d,
            }),
            [t.artist_external_id, t.artist_name, d],
        ),
        c = s.useMemo(() => lz.V.getDefaultLinkInterceptor(o.shareUrl), [o.shareUrl]),
        u = s.useCallback(
            (e) => {
                (a(), c?.(e));
            },
            [c, a],
        ),
        m = (0, i.jsx)(lY.R, { src: d, isCircular: !0, FallbackIcon: lK.I });
    return null == t.artist_name
        ? (0, i.jsx)("div", {
              className: lQ.Nr,
              ref: n,
              children: (0, i.jsx)("div", { ...l, className: lQ.MT, children: m }),
          })
        : (0, i.jsxs)("div", {
              className: lQ.Nr,
              ref: n,
              children: [
                  (0, i.jsxs)(l$.Anchor, {
                      ...l,
                      className: lQ.MT,
                      href: o.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      onClick: u,
                      children: [
                          m,
                          (0, i.jsx)("span", {
                              className: lQ.Qq,
                              children: (0, i.jsx)(b.E, {
                                  className: lQ.DD,
                                  tag: "span",
                                  variant: "body-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(lZ, { target: o, tabIndex: l.tabIndex, onClick: r }),
              ],
          });
}
var l0 = l(872351),
    l1 = l(708988),
    l2 = l(628137);
let l6 = "none",
    l3 = (e, t) => (0, i.jsx)(b.E, { tag: "span", variant: "body-xs/medium", color: "text-strong", children: e }, t);
function l9(e) {
    return e;
}
function l4(e) {
    return e?.direction ?? l6;
}
function l8(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: N.intl.formatToPlainString(Z.default["h+LUpk"], { percent: t }) };
}
function l5(e) {
    return l8(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var l7 = l(633099);
function ne(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? l0.z : l1.M;
    return (0, i.jsxs)("span", {
        className: l7.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [l7.$J]: "up" === t.direction, [l7.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(b.E, { tag: "span", variant: "body-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function nt(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = (0, R.yK)(
            [e9.A],
            () => (n.facepile_user_ids ?? []).filter((e) => !e9.A.isBlockedOrIgnored(e)).slice(0, 3),
            [n.facepile_user_ids],
        );
    (0, W.k6)(l, a);
    let r = (0, R.yK)([K.default], () => a.map((e) => K.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let o = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: l7.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            N.intl.formatToPlainString(Z.default.AzIhRB, { count: t, trend: l6, countHook: l9 })),
        children: (0, i.jsx)(t8.Ay, {
            users: d,
            guildId: l,
            size: t8.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: o <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: l7.ju,
                    children: (0, i.jsx)(b.E, {
                        tag: "span",
                        variant: "body-sm/semibold",
                        color: "text-subtle",
                        children: N.intl.formatToPlainString(Z.default.bFIg0R, { count: o }),
                    }),
                }),
        }),
    });
}
function nl(e) {
    let { trackExternalId: t } = e,
        [l, n] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: l7.aF,
        children: [
            (0, i.jsx)(l2.A, {
                resourceType: lX.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: l7.Ls, "aria-hidden": !0 }),
        ],
    });
}
function nn(e) {
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
        ? null
        : (0, i.jsx)("div", {
              className: j()(l7.yp, { [l7.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: l7.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(b.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: l7._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(b.E, {
                                      tag: "span",
                                      variant: "body-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != s && (0, i.jsx)(ne, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function ni(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = l8(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(l7.yp, { [l7.Fl]: n }),
        children: [
            s && (0, i.jsx)(nl, { trackExternalId: a.track_external_id }, a.track_external_id),
            (0, i.jsxs)("div", {
                className: j()(l7.QD, l7.rk),
                children: [
                    (0, i.jsx)(nt, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: l7._0,
                        children: [
                            (0, i.jsx)(b.E, {
                                tag: "span",
                                variant: "body-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    N.intl.format(Z.default["7hHUIS"], { count: t, trend: l4(r), countHook: l3 })),
                            }),
                            null != r && (0, i.jsx)(ne, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ns = l(151869),
    na = l(915734);
function nr(e) {
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
        className: j()(na.Dk, { [na.yI]: n }),
        children: (0, i.jsx)(ns.A, {
            items: l,
            getItemKey: a,
            renderItem: m,
            gap: 8,
            edgeFade: 40,
            actionsClassName: na.o1,
            "aria-label": t,
        }),
    });
}
var nd = l(742452);
function no(e) {
    return e.artist_external_id;
}
function nc(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a } = e,
        [r, d] = lH(a.ranked_artists.length),
        o = lF({ guildId: t, widgetId: l, data: a });
    lW({ guildId: t, widgetId: l, data: a, length: a.ranked_artists.length, isAtEnd: r });
    let c = s.useCallback(() => o("artist"), [o]),
        u = s.useCallback(() => o("forward"), [o]),
        m = s.useCallback(
            (e, t, l) => (0, i.jsx)(lJ, { artist: e, itemProps: t, cardRef: l, onClick: c, onForwardClick: u }),
            [c, u],
        );
    if (0 === a.ranked_artists.length) return null;
    let h = l5(a);
    return (0, i.jsxs)("div", {
        className: nd.U,
        children: [
            (0, i.jsx)(nr, {
                label: lT(lN.TOP_ARTISTS),
                items: a.ranked_artists,
                isCompact: n,
                getItemKey: no,
                renderItem: m,
                onScrollEndChange: d,
            }),
            (0, i.jsx)(nn, {
                isCompact: n,
                headline:
                    a.distinct_songs < 1
                        ? null
                        : N.intl.formatToPlainString(Z.default.W8etVA, { count: a.distinct_songs }),
                detail:
                    a.distinct_listeners < 1 || a.distinct_artists < 1
                        ? null
                        : N.intl.format(Z.default.yGqf0D, {
                              memberCount: a.distinct_listeners,
                              artistCount: a.distinct_artists,
                              trend: l4(h),
                              memberCountHook: l3,
                              artistCountHook: l3,
                          }),
                trend: h,
            }),
        ],
    });
}
var nu = l(803613),
    nm = l(682348),
    nh = l(73152),
    nf = l(280911);
function nx(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, R.bG)([K.default], () => K.default.getCurrentUser()),
        s = (0, R.bG)([en.Ay], () => (null != n ? en.Ay.getMember(t, n.id) : null)),
        a = (0, el.gn)(t, n?.id, s?.colorStrings ?? null),
        r = ei.Ay.useName(t, void 0, n);
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
                                (0, i.jsx)("span", { className: nf.eu, children: (0, i.jsx)(nu.D, { size: "sm" }) }),
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
                    (0, i.jsx)(G.eu, {
                        size: P._3.SIZE_32,
                        src: n?.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
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
                        children: (0, i.jsx)(O.g, {
                            name: N.intl.formatToPlainString(Z.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
                        }),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "body-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.string(Z.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function ng(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: nf.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: nf.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(nm._, { size: "sm", color: o.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: nf.Qq,
                children: [
                    (0, i.jsx)(y.D, {
                        variant: "heading-xs/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: N.intl.string(lm.default.WhdCGP),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "body-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.formatToPlainString(Z.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function np(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: nf.UX,
        children: [
            a ? (0, i.jsx)(ng, { widgetName: n, isCompact: s }) : (0, i.jsx)(nx, { guildId: t, isCompact: s }),
            (0, i.jsx)(F.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : nh.E,
                text: a ? N.intl.string(N.t.KY0ilj) : N.intl.string(Z.default.jB1fWC),
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
                                    l.e(512831),
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
                                    l.e(610943),
                                    l.e(16954),
                                    l.e(390213),
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
function nj(e) {
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
var nv = l(625903),
    n_ = l(780964),
    nb = l(766075),
    nA = l(417869),
    ny = l(123894);
function nN(e) {
    let { onSettingsClick: t } = e,
        l = (0, R.bG)([nA.A], () => nA.A.getAccounts().some((e) => e.type === tb.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(S, {
        className: ny.w,
        illustration: nj,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(l ? Z.default.BLuvck : Z.default["Ko3a0+"], { memberCount: 2 }),
        action: l
            ? null
            : (0, i.jsx)(F.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: nv.SettingsIcon,
                  text: N.intl.string(N.t["3D5yo/"]),
                  onClick: () => {
                      (t(), (0, nb.openUserSettings)(n_.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING));
                  },
              }),
    });
}
function nI() {
    return (0, i.jsx)(S, {
        className: ny.w,
        illustration: nj,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(Z.default.ZQxU8v, { memberCount: 2 }),
    });
}
var nC = l(109487),
    nE = l(279543);
function nS(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nE.qr,
        children: [
            (0, i.jsxs)("div", {
                className: nE.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: nE.Kk,
                        children: (0, i.jsx)(M.RefreshIcon, {
                            size: "xxs",
                            color: o.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(b.E, {
                        className: nE.Pf,
                        tag: "span",
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: N.intl.string(Z.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(l$.Anchor, {
                className: nE.al,
                href: lX.RQ.WEB_HOME,
                "aria-label": N.intl.string(Z.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: nE.Kk,
                        children: (0, i.jsx)(nC.L, { size: "xs", color: o.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(b.E, {
                            className: nE.G2,
                            tag: "span",
                            variant: "body-xs/medium",
                            color: "none",
                            children: N.intl.string(Z.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var nk = l(949744),
    nT = l(65154),
    nw = l(329177),
    nR = l(242226);
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
            onClick: h,
        } = e,
        f = es(l, n, { showYouSuffix: d }),
        { user: x } = f;
    return null == x
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": u,
              inert: u,
              className: j()(nR.nM, { [nR.Bh]: d && !u, [nR.lR]: c }),
              children: [
                  (0, i.jsx)(nL, { guildId: l, user: x, identity: f, rank: a, listener: s, onClick: h }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: j()(nR.Mx, { [nR.dA]: r }),
                          children: [
                              (0, i.jsx)(nT.S, { size: "xxs", color: o.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(b.E, {
                                  variant: "body-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), N.intl.formatToPlainString(Z.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(nP, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function nL(e) {
    let { guildId: t, user: l, identity: n, rank: s, listener: a, onClick: r } = e,
        d = (0, R.bG)([e9.A], () => (e9.A.isBlocked(l.id) ? "blocked" : e9.A.isIgnored(l.id) ? "ignored" : null), [
            l.id,
        ]),
        c = null != d;
    return (0, i.jsxs)(L.D, {
        className: nR.D_,
        onClick: () => {
            (r(), (0, eU.openUserProfileModal)({ userId: l.id, guildId: t }));
        },
        children: [
            null != s && (0, i.jsx)(U.A, { children: N.intl.formatToPlainString(Z.default.I4JiAQ, { rank: s }) }),
            (0, i.jsxs)("span", {
                className: nR.R3,
                children: [
                    c
                        ? (0, i.jsx)("span", {
                              className: nR.gt,
                              children:
                                  "blocked" === d
                                      ? (0, i.jsx)(eD.K, {
                                            size: "xs",
                                            color: o.A.colors.ICON_SUBTLE,
                                            "aria-hidden": !0,
                                        })
                                      : (0, i.jsx)(eL.EyeSlashIcon, {
                                            size: "xs",
                                            color: o.A.colors.ICON_SUBTLE,
                                            "aria-hidden": !0,
                                        }),
                          })
                        : (0, i.jsx)(G.eu, {
                              size: P._3.SIZE_32,
                              src: l.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                              "aria-hidden": !0,
                          }),
                    1 === s &&
                        (0, i.jsx)("span", {
                            className: nR.ie,
                            "aria-hidden": !0,
                            children: (0, i.jsx)(nw.CrownIcon, { size: "xxs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: nR.Dc,
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
                                              return N.intl.string(Z.default.I3YOjC);
                                          case "ignored":
                                              return N.intl.string(Z.default.CfMzwe);
                                      }
                                  })(d)
                                : (0, i.jsx)(O.g, {
                                      name: n.displayName,
                                      colorString: n.member?.colorString ?? null,
                                      colorStrings: n.roleColorStrings,
                                  }),
                    }),
                    !c && (0, i.jsx)(nU, { listener: a }),
                ],
            }),
        ],
    });
}
function nM(e, t) {
    return (0, i.jsx)(b.E, { tag: "span", variant: "body-xs/medium", color: "text-strong", children: e }, t);
}
function nU(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(b.E, {
        variant: "body-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? N.intl.format(Z.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: nM })
                : N.intl.format(Z.default.ZMJ8Mt, { trackTitle: l, highlightHook: nM }),
    });
}
function nG(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? lX.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: nR.sG,
        children: (0, i.jsx)(e0.Ay, {
            mask: l ? e0.l8[24] : e0.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: nR.Ql,
                          children: (0, i.jsx)(lK.I, { size: "xxs", color: o.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: nR.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function nP(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: nR.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: nR.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            nG,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: nR.sG,
                            children: (0, i.jsx)(e0.Ay, {
                                mask: e0.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: nR.ag,
                                    children: (0, i.jsx)(b.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: N.intl.formatToPlainString(Z.default.bFIg0R, { count: s }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var nO = l(897130);
function nB(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a, shouldHideCurrentUser: r, upsell: d } = e,
        o = a.top_listeners,
        c = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id),
        u = r ? null : c,
        m = o.findIndex((e) => e.user_id === u),
        h = -1 === m ? null : o[m],
        f = s.useMemo(() => o.map((e) => e.user_id), [o]);
    (0, W.k6)(t, f);
    let x = (0, R.bG)([K.default], () => f.reduce((e, t) => (null != K.default.getUser(t) ? e + 1 : e), 0), [f]),
        g = (0, R.bG)(
            [K.default, nk.A],
            () => f.every((e) => null != K.default.getUser(e) || nk.A.isMemberRequestSettled(t, e)),
            [t, f],
        ),
        { scrollerRef: p, scrollerNode: v, userRowRef: _, floatingRowPosition: b } = ee(),
        A = (function (e, t) {
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
        })(v, x),
        y = lF({ guildId: t, widgetId: l, data: a }),
        N = s.useCallback(() => y("listener_row"), [y]);
    lW({ guildId: t, widgetId: l, data: a, length: o.length, isAtEnd: A, disabled: !g && !lE(a) });
    let I = null != d,
        C = I ? null : b,
        E = null != C;
    return lE(a)
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(nI, {}), d] })
        : (0, i.jsxs)("div", {
              className: nO.SY,
              children: [
                  (0, i.jsxs)(D.d_, {
                      className: j()(nO.p_, { [nO.w]: I }),
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
                                      rowRef: s ? _ : void 0,
                                      onClick: N,
                                  },
                                  e.user_id,
                              );
                          }),
                          !I &&
                              null != u &&
                              null == h &&
                              (0, i.jsx)(nD, {
                                  guildId: t,
                                  userId: u,
                                  listener: null,
                                  rank: null,
                                  isCompact: n,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: E,
                                  rowRef: _,
                                  onClick: N,
                              }),
                      ],
                  }),
                  I &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(q, { position: "bottom" }),
                              (0, i.jsx)("div", { className: nO.Kv, children: d }),
                          ],
                      }),
                  null != u &&
                      null != C &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(q, { position: C }),
                              (0, i.jsx)(V, {
                                  position: C,
                                  children: (0, i.jsx)(nD, {
                                      guildId: t,
                                      userId: u,
                                      listener: h,
                                      rank: -1 === m ? null : m + 1,
                                      isCompact: n,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                      onClick: N,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
var nF = l(717683);
function nW(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nF.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(nF.Dk, { [nF.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: nF.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(nF.om, nF.xX) }),
                                (0, i.jsxs)("div", {
                                    className: nF.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(nF.om, nF.DD) }),
                                        (0, i.jsx)("div", { className: j()(nF.om, nF.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(nF.yp, { [nF.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(nF.om, nF.Pl) }),
                    (0, i.jsx)("div", { className: j()(nF.om, nF._0) }),
                ],
            }),
        ],
    });
}
var nH = l(450078),
    nz = l(362704);
function nK(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a, cardRef: r, onForwardClick: d } = e,
        o = null != t.cover_art_hash ? lX.RQ.IMAGE(t.cover_art_hash) : null,
        c = s.useMemo(
            () => ({
                kind: "song",
                shareUrl: lX.RQ.WEB_OPEN(lX.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: o,
            }),
            [t.track_external_id, t.track_title, t.artist_name, o],
        );
    return (0, i.jsxs)("div", {
        className: lQ.Nr,
        ref: r,
        children: [
            (0, i.jsxs)("button", {
                ...a,
                type: "button",
                className: j()(lQ.MT, { [lQ.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(lY.R, {
                        src: o,
                        isCircular: !1,
                        FallbackIcon: nH.u,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(lQ.Lw, lQ.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(nz.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: lQ.Qq,
                            children: [
                                (0, i.jsx)(b.E, {
                                    className: lQ.DD,
                                    tag: "span",
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(b.E, {
                                        className: lQ.VA,
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
            (0, i.jsx)(lZ, { target: c, tabIndex: a.tabIndex, onClick: d }),
        ],
    });
}
function n$(e) {
    return e.track_external_id;
}
function nY(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = lO(n),
        o = lM((e) => e.byWidgetId[n]?.canShowEmbed ?? lL.canShowEmbed),
        [c, u] = lH(r.ranked_songs.length),
        m = lF({ guildId: l, widgetId: n, data: r });
    lW({ guildId: l, widgetId: n, data: r, length: r.ranked_songs.length, isAtEnd: c });
    let h = s.useCallback(
            (e) => {
                let t;
                (m("song"),
                    (t = lM.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    lU(n, { selectedTrackId: t === e ? null : e }));
            },
            [n, m],
        ),
        f = s.useCallback(() => m("forward"), [m]),
        x = s.useCallback(
            (e, t, l) =>
                (0, i.jsx)(nK, {
                    song: e,
                    isSelected: e.track_external_id === d,
                    onSelect: h,
                    itemProps: t,
                    cardRef: l,
                    onForwardClick: f,
                }),
            [d, h, f],
        );
    if (0 === r.ranked_songs.length) return null;
    let g = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        p = l5(r);
    return (0, i.jsxs)("div", {
        className: nd.U,
        children: [
            (0, i.jsx)(nr, {
                label: lT(lN.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: n$,
                renderItem: x,
                onScrollEndChange: u,
            }),
            null != g
                ? (0, i.jsx)(ni, { guildId: l, isCompact: a, canShowEmbed: o, song: g })
                : (0, i.jsx)(nn, {
                      isCompact: a,
                      headline:
                          (t = Math.round(r.listening_time_ms / ex.A.Millis.MINUTE)) < 1
                              ? null
                              : N.intl.formatToPlainString(Z.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : N.intl.format(Z.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: l4(p),
                                    countHook: l3,
                                }),
                      trend: p,
                  }),
        ],
    });
}
var nq = l(691885),
    nV = l(109765);
function nQ(e) {
    let { widgetId: t, onSelect: l } = e,
        n = lG(t),
        a = s.useMemo(() => lI.map((e) => ({ id: e, label: lT(e), value: e })), []);
    return (0, i.jsx)("div", {
        className: nV.L,
        children: (0, i.jsx)(nq.l, {
            selectionMode: "single",
            label: N.intl.string(Z.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: a,
            value: n,
            onSelectionChange: l,
        }),
    });
}
var nZ = l(432017),
    nX = l(871107);
function nJ(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: nX.$,
        children: [
            (0, i.jsx)("span", {
                className: nX.K,
                children: (0, i.jsx)(nZ.T, { size: "xs", color: o.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(g.q, { size: "md", children: t }),
        ],
    });
}
var n0 = l(77915),
    n1 = l(756936);
function n2(e) {
    return e.default_title ?? N.intl.string(Z.default["5xxUI2"]);
}
var n6 = l(890497),
    n3 = l(734057),
    n9 = l(317525),
    n4 = l(576705),
    n8 = l(811091),
    n5 = l(44167);
l(321073);
var n7 = l(485845),
    ie = l(136722),
    it = l(435183),
    il = l(155718),
    ii = l(795816),
    is = l(933958),
    ia = l(627363),
    ir = l(712440),
    id = l(733110),
    io = l(488926),
    ic = l(487887);
async function iu(e) {
    null == ea.A.getApplication(ic.NW) && (await (0, ia.TA)(ic.NW));
    let t = is.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== ic.NW);
    return await (0, ii.su)({ channelId: e, applicationId: ic.NW, isStart: t, renderInFramePool: !0 });
}
let im = [];
var ih = l(344351),
    ix = l(256693),
    ig = l(343030),
    ip = l(11411),
    ij = l(953538);
let iv = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n, onEdit: s, disabled: a } = e,
                { text: r, image_hash: d } = t.config,
                o = "edit" === l ? t.config.image : void 0,
                c = void 0 !== o ? o : null != d ? t0(n, t.id, d) : null;
            return (null == r || 0 === r.length) && null == c
                ? (0, i.jsx)(S, {
                      illustration: t2,
                      title: N.intl.string(Z.default.rl3fNQ),
                      body: N.intl.string(Z.default["a/oDbC"]),
                      action:
                          null != s
                              ? (0, i.jsx)(F.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    icon: t6.PencilIcon,
                                    text: N.intl.string(N.t.bt75uw),
                                    disabled: a,
                                    onClick: s,
                                })
                              : null,
                  })
                : (0, i.jsxs)("div", {
                      className: t3.kL,
                      children: [
                          null != c && (0, i.jsx)("img", { className: t3.Sl, src: c, alt: "" }),
                          null != r &&
                              (0, i.jsx)(b.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  className: t3.Qq,
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
                [f, x] = s.useState(a.image),
                [g, p] = s.useState(null),
                j = (0, R.bG)([tR.A], () => tR.A.getGuildId()),
                v = void 0 !== f ? f : null != a.image_hash && null != j ? t0(j, t.id, a.image_hash) : null;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tY.k, {
                        label: N.intl.string(N.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (p(null), o(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tK.D, {
                        label: N.intl.string(N.t.X4IxWL),
                        children: (0, i.jsxs)(A.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: t1.B,
                            children: [
                                (0, i.jsxs)(A.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(tQ.A, {
                                            variant: "secondary",
                                            text: N.intl.string(N.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), x(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tV.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, i.jsx)(m.m, {
                                                text: N.intl.string(N.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(h.K, {
                                                    variant: "critical-secondary",
                                                    icon: tq.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), x(null));
                                                    },
                                                    "aria-label": N.intl.string(N.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, i.jsx)("img", { className: t1.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(t$.f, {
                        label: N.intl.string(N.t.COGMNC),
                        value: c,
                        onChange: function (e) {
                            (p(null), u(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != g && (0, i.jsx)(tk.w, { type: "critical", message: g, role: "alert" }),
                    (0, i.jsxs)(tT.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(F.$, { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(F.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== f ? null !== f : null != a.image_hash),
                                        0 === c.length && !e && (p(N.intl.string(Z.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: a.image_hash,
                                        text: c.length > 0 ? c : null,
                                        title: r.length > 0 ? r : null,
                                    };
                                    (void 0 !== f && (t.image = f), l(t));
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
                d = e7(a, n?.status === "success" ? n.data : void 0),
                o = tW({ guildId: a, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
                u = s.useCallback(
                    (e) => {
                        o(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [o],
                );
            return (
                (t =
                    "edit" === r && null == n
                        ? (0, i.jsx)(w, {
                              minHeight: 390,
                              graphic: (0, i.jsx)(c, { alt: "", ariaHidden: !0, width: 200 }),
                              title: N.intl.string(Z.default.wqHke4),
                              subtitle: N.intl.string(Z.default.n1sscC),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(E, {})
                          : null != d
                            ? (0, i.jsx)(ty, { guildId: a, data: d, column: l.position.column, disabled: "view" !== r })
                            : (0, i.jsx)(C, {})),
                (0, i.jsx)("div", { ref: u, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([tR.A], () => tR.A.getGuildId()),
                n = (0, R.bG)([tw.A], () => tw.A.getGuild(l), [l]),
                a = (0, tL.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [o, c] = s.useState(!1),
                [u, m] = s.useState(null),
                [h, f] = s.useState(!1),
                x = s.useCallback(async () => {
                    if (null == n || null == l || null == u || null == d) return void t();
                    (f(!1), c(!0));
                    try {
                        (await tE.Bo.patch({
                            url: tb.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, tC.lA)(d, tM, !u) },
                            rejectWithError: !0,
                        }),
                            (0, tD.q9)(l, tD.PY.LEADERBOARD_SYSTEM_MESSAGES, u),
                            t());
                    } catch (e) {
                        f(!0);
                    } finally {
                        c(!1);
                    }
                }, [n, l, u, d, t]),
                g = null == n || !r || null == d || o || !a;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tS.d, {
                        label: N.intl.string(Z.default.v0iLIA),
                        description: N.intl.string(Z.default["88c7ds"]),
                        checked: u ?? !(0, tC.Lt)(d ?? 0, tM),
                        onChange: m,
                        disabled: g,
                    }),
                    !r &&
                        (0, i.jsx)(tk.w, {
                            type: "warning",
                            message: N.intl.string(Z.default["1hsDpi"]),
                            role: "none",
                        }),
                    h &&
                        (0, i.jsx)(tk.w, {
                            type: "critical",
                            message: N.intl.string(Z.default["4FcF2j"]),
                            role: "alert",
                        }),
                    (0, i.jsxs)(tT.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(F.$, {
                                variant: "secondary",
                                text: N.intl.string(N.t["ETE/oC"]),
                                onClick: t,
                                disabled: o,
                            }),
                            (0, i.jsx)(F.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: x,
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
                s = e7(n, l?.status === "success" ? l.data : void 0);
            return null == s
                ? (0, i.jsx)(g.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(g.q, { children: ev(s) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(u.TrophyIcon, { size: "xs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = e7(l, t?.status === "success" ? t.data : void 0);
            return null == n || ej(n) ? null : (0, i.jsx)(tB, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = e7(l, s);
            return "mini" !== k({ expanded: !1, column: n }) || (null != a && ej(a))
                ? null
                : (0, i.jsx)(m.m, {
                      text: N.intl.string(N.t.dcl9MQ),
                      children: (0, i.jsx)(h.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: f._,
                          "aria-label": N.intl.string(N.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  null != s &&
                                  (x.default.track(tb.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: e_(a),
                                      leaderboard_view: k({ expanded: !1, column: n }),
                                      metric: eb(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(tz, { guildId: t, data: l, modalProps: e });
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
                    let { requirement: l, hasFetchedConsents: n } = (0, Q.T4)(e),
                        i = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id);
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
                o = tF({
                    onHoverEnd: s.useCallback(
                        (e) => {
                            let { duration: t, flush: n } = e;
                            null != d &&
                                x.default.track(
                                    tb.HAw.POPULAR_GAMES_HOVER,
                                    {
                                        guild_id: a,
                                        duration: t,
                                        popular_games_state: lu(d),
                                        popular_games_view: k({ expanded: !1, column: l.position.column }),
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
                        ? (0, i.jsx)(w, {
                              minHeight: 273,
                              graphic: (0, i.jsx)(t9, { alt: "", ariaHidden: !0, width: 200 }),
                              title: N.intl.string(Z.default.v59XPT),
                              subtitle: N.intl.string(Z.default.Bayri1),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(E, {})
                          : null == n || null == d || "idle" === n.status || "loading" === n.status
                            ? (0, i.jsx)(C, {})
                            : (0, i.jsx)(lj, {
                                  guildId: a,
                                  data: d,
                                  title: lv(l),
                                  column: l.position.column,
                                  disabled: "view" !== r,
                              })),
                (0, i.jsx)("div", { ref: c, children: t })
            );
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(g.q, { children: lv(t) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(eX.GameControllerIcon, { size: "xs", color: o.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
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
                            lU(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, t4.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            lM.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                h = lP(o.id),
                f = lG(o.id),
                g = lO(o.id),
                { isContributing: p, isSpotifyConnected: j, hasFetchedConsents: v } = (0, n0.MX)(d),
                _ = c?.status === "success" ? c.data : void 0,
                { data: b, shouldHideCurrentUser: A } = (0, n0.qL)(d, _),
                y = "edit" === u,
                N = null != _ && lC(_),
                I = !h && !y && !N,
                S = lF({ guildId: d, widgetId: o.id, data: b }),
                k = (function (e) {
                    let { guildId: t, widgetId: l, data: n, enabled: i } = e,
                        a = lG(l),
                        r = lP(l);
                    return tF({
                        onHoverEnd: s.useCallback(
                            (e) => {
                                let { duration: l, flush: i } = e;
                                null != n &&
                                    x.default.track(
                                        tb.HAw.POPULAR_MUSIC_HOVER,
                                        {
                                            guild_id: t,
                                            duration: l,
                                            popular_music_state: lS(n, a),
                                            popular_music_view: a,
                                            popular_music_layout: lk(r),
                                        },
                                        { flush: i },
                                    );
                            },
                            [t, n, a, r],
                        ),
                        segmentKey: `${a}:${lk(r)}`,
                        enabled: i,
                    });
                })({ guildId: d, widgetId: o.id, data: b, enabled: "view" === u }),
                T = s.useCallback(
                    (e) => {
                        k(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [k],
                ),
                w = (0, l_.A)(m, T);
            lW({ guildId: d, widgetId: o.id, data: b, length: 0, isAtEnd: !1, disabled: y || !N });
            let R =
                    "view" === u && v && !p
                        ? (0, i.jsx)(np, {
                              guildId: d,
                              widgetName: n2(o),
                              isCompact: h,
                              isSpotifyConnected: j,
                              onClick: () => S("contribution_upsell"),
                          })
                        : null,
                D =
                    y || N || c?.status !== "success" || f === lN.TOP_LISTENERS
                        ? null
                        : ((l = c.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === g && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : lX.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: n1.rf,
                ref: w,
                children: [
                    null != D &&
                        (0, i.jsx)("div", {
                            className: n1.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: n1.LZ, src: D, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: n1.Qs,
                        children: (0, i.jsx)("div", {
                            id: lR(o.id),
                            className: n1.nd,
                            role: I ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": I ? void 0 : lT(f),
                            "aria-labelledby": I ? lw(o.id, f) : void 0,
                            children: (function () {
                                if (y && c?.status !== "success") return (0, i.jsx)(nW, { isCompact: h });
                                if (null == c || "idle" === c.status || "loading" === c.status)
                                    return (0, i.jsx)(C, {});
                                if ("error" === c.status) return (0, i.jsx)(E, {});
                                if (N) return (0, i.jsx)(nN, { onSettingsClick: () => S("empty_state_settings") });
                                if (null == b) return (0, i.jsx)(C, {});
                                switch (f) {
                                    case lN.TOP_SONGS:
                                        return (0, i.jsx)(nY, { guildId: d, widgetId: o.id, isCompact: h, data: b });
                                    case lN.TOP_ARTISTS:
                                        return (0, i.jsx)(nc, { guildId: d, widgetId: o.id, isCompact: h, data: b });
                                    case lN.TOP_LISTENERS:
                                        return (0, i.jsx)(nB, {
                                            guildId: d,
                                            widgetId: o.id,
                                            isCompact: h,
                                            data: b,
                                            shouldHideCurrentUser: A,
                                            upsell: R,
                                        });
                                }
                            })(),
                        }),
                    }),
                    f !== lN.TOP_LISTENERS && R,
                    (0, i.jsx)(nS, { isCompact: h }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = n2(t),
                a = l?.status === "success" && lC(l.data);
            return "edit" === n || a ? (0, i.jsx)(g.q, { size: "md", children: s }) : (0, i.jsx)(nJ, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n, guildId: s } = e,
                a = lP(t.id),
                r = lG(t.id),
                { data: d } = (0, n0.qL)(s, l?.status === "success" ? l.data : void 0);
            function o(e, l) {
                if (e !== r) {
                    var n;
                    (lB({ guildId: s, data: d, view: e, isCompact: a, location: l }),
                        (n = t.id),
                        (lM.getState().byWidgetId[n] ?? lL).view !== e && lU(n, { view: e, selectedTrackId: null }));
                }
            }
            return l?.status === "success" && lC(l.data)
                ? null
                : a
                  ? (0, i.jsx)(nQ, { widgetId: t.id, onSelect: (e) => o(e, "view_select") })
                  : (0, i.jsx)(ly, {
                        label: n,
                        tabs: lI.map((e) => ({ id: e, label: lT(e) })),
                        selectedId: r,
                        panelId: lR(t.id),
                        getTabId: (e) => lw(t.id, e),
                        onSelect: (e) => o(e, "view_tab"),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, n5.n)(),
                a = (0, R.bG)(
                    [n3.A, n4.A],
                    () => {
                        let e = null != n ? n3.A.getChannel(n) : void 0;
                        return null != e && n4.A.can(tb.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, R.bG)(
                    [is.Ay],
                    () => {
                        let e = is.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== ic.NW ||
                            e.location.kind !== ih.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                o = (0, R.bG)([is.Ay], () => is.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: u } =
                    ((t = (0, R.bG)(
                        [id.A],
                        () => id.A.getFetchStateForApplication(ic.NW) === id.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, R.bG)(
                        [id.A, ea.A],
                        () => {
                            let e = id.A.getNewestTokenForApplication(ic.NW);
                            if (null == e) return !1;
                            let t = ea.A.getApplication(ic.NW),
                                l = t?.integrationTypesConfig?.[n7.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (id.A.getFetchStateForApplication(ic.NW) === id.FetchState.NOT_FETCHED && ir.A.fetch([ic.NW]),
                            null == ea.A.getApplication(ic.NW) && (0, ia.TA)(ic.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && c && u && !m.current && ((m.current = !0), iu(n));
            }, [a, n, d, c, u]);
            let h = s.useCallback(() => {
                    null != n && ((m.current = !0), iu(n));
                }, [n]),
                f = null != n && c && !u;
            return null == n
                ? (0, i.jsx)(A.B, {
                      className: ij.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : a
                  ? (0, i.jsxs)("div", {
                        className: ij.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(ip.A, {
                                    frameId: (0, ix.Ri)(d),
                                    level: ig.A.WithinAppContent,
                                    className: ij.t$,
                                }),
                            null == d &&
                                f &&
                                (0, i.jsx)("div", {
                                    className: ij.P5,
                                    children: (0, i.jsx)(F.$, {
                                        variant: "secondary",
                                        text: N.intl.string(Z.default.PSuly6),
                                        loading: o,
                                        onClick: h,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: ij.kL,
                        children: (0, i.jsx)("div", {
                            className: ij.m0,
                            children: (0, i.jsx)(b.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: N.intl.string(Z.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([tR.A], () => tR.A.getGuildId()),
                n = n8.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, n5.n)(),
                r = (0, R.bG)([n3.A], () => (null != a ? n3.A.getChannel(a) : void 0), [a]),
                d = (0, R.bG)([n4.A], () => null != r && n4.A.can(tb.xBc.MANAGE_ROLES, r), [r]),
                o = (0, R.bG)([n9.A], () => (null == l ? im : n9.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                c = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          ie.zy(e.deny, tb.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? o
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && ie.zy(t.allow, tb.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, o]),
                [u, m] = s.useState(null),
                [h, f] = s.useState(!1),
                [x, g] = s.useState(!1),
                p = u ?? c,
                j = s.useMemo(() => o.map((e) => ({ id: e.id, label: e.name, value: e.id })), [o]);
            return null == r
                ? null
                : (0, i.jsxs)(A.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(n6.Z, {
                              selectionMode: "multiple",
                              label: N.intl.string(Z.default.XXLbfv),
                              description: N.intl.string(Z.default.XrpYIG),
                              placeholder: N.intl.string(Z.default.pp6WeD),
                              options: j,
                              value: p,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || h,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d &&
                              (0, i.jsx)(tk.w, {
                                  type: "warning",
                                  message: N.intl.string(Z.default.UPLtlA),
                                  role: "none",
                              }),
                          x &&
                              (0, i.jsx)(tk.w, {
                                  type: "critical",
                                  message: N.intl.string(Z.default.xyCJYs),
                                  role: "alert",
                              }),
                          (0, i.jsxs)(tT.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(F.$, {
                                      variant: "secondary",
                                      text: N.intl.string(N.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: h,
                                  }),
                                  (0, i.jsx)(F.$, {
                                      variant: "primary",
                                      text: N.intl.string(N.t["R3BPH+"]),
                                      onClick: async function () {
                                          if (null != r) {
                                              (g(!1), f(!0));
                                              try {
                                                  (await (async function (e) {
                                                      let { channel: t, selectedRoleIds: l } = e,
                                                          n = [];
                                                      if (l.length > 0)
                                                          for (let e of (n.push({
                                                              id: t.guild_id,
                                                              type: il.r2.ROLE,
                                                              allow: io.x3,
                                                              deny: tb.xBc.USE_EMBEDDED_ACTIVITIES,
                                                          }),
                                                          l))
                                                              n.push({
                                                                  id: e,
                                                                  type: il.r2.ROLE,
                                                                  allow: tb.xBc.USE_EMBEDDED_ACTIVITIES,
                                                                  deny: io.x3,
                                                              });
                                                      let i = await (0, it.RT)(t.id, { permissionOverwrites: n });
                                                      if (!i.ok) throw i;
                                                  })({ channel: r, selectedRoleIds: p }),
                                                      t());
                                              } catch {
                                                  (f(!1), g(!0));
                                              }
                                          }
                                      },
                                      disabled: !d,
                                      loading: h,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: r,
    },
};
