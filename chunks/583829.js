let n;
(s.r(t), s.d(t, { default: () => lK }), s(323874), s(14289), s(35956));
var l,
    r = s(477900),
    i = s(582128),
    a = s(503698),
    o = s.n(a),
    u = s(806163),
    c = s(562708),
    d = s(607399),
    m = s(323889),
    h = s(17928),
    E = s(554146),
    f = s(577473),
    x = s(825484),
    g = s(821609),
    v = s(509434),
    j = s(331322),
    C = s(683438),
    S = s(944791),
    _ = s(775602),
    N = s(793574),
    p = s(139286),
    A = s(197111),
    T = s(10088),
    O = s(839534),
    I = s(726249),
    b = s(607470),
    R = s(826673),
    M = s(840251),
    L = s(688151);
let y = new M.E([], L.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var Q = s(711111),
    H = s(979590),
    U = s(749638),
    D = s(783531),
    F = s(318346),
    q = s(70926),
    P = s(531685),
    k = s(676279),
    w = s(975571),
    B = s(240248),
    V = s(87549),
    G = s(192444),
    W = s(945810);
let K = (0, W.mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var z = s(860996),
    $ = s(866157),
    Y = s(557637),
    J = s(834730),
    X = s(289873),
    Z = s(274670),
    ee = s(144779),
    et = s(859703),
    es = s(738822),
    en = s(104886),
    el = s(291749),
    er = s(561844),
    ei = s(18437),
    ea = s(590202),
    eo = s(901406),
    eu = s(415441),
    ec = s(73473),
    ed = s(139384),
    em = s(43990),
    eh = s(297264),
    eE = s(770178),
    ef = s(652215),
    ex = s(691388);
function eg(e, t) {
    let { row_index: s, ...n } = (0, ea.fF)(es.uF.QUEST_HOME_HERO);
    (0, er.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: es.uF.QUEST_HOME_HERO,
    });
}
let ev = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, h] = i.useState("display-lg"),
        E = i.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        f = (0, eE.w)(E, [], { fireOnMount: !0 }),
        x = i.useCallback(() => eg(s, ef.HAw.QUEST_HOVER), [s]),
        g = i.useCallback(() => eg(s, ef.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(em.N, {
        theme: ef.NJ8.ONYX,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(ex.iE, e, d),
                onMouseEnter: x,
                onMouseLeave: g,
                ref: (e) => {
                    ((f.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e));
                },
                children: (0, r.jsxs)("div", {
                    className: ex.FG,
                    children: [
                        (0, r.jsxs)(j.B, {
                            className: ex.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(j.B, {
                                    className: ex.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(eh.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: ex.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(J.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: ex.VA,
                                                    children: a,
                                                }),
                                            ],
                                        }),
                                        u,
                                    ],
                                }),
                            ],
                        }),
                        c,
                    ],
                }),
            }),
    });
});
var ej = s(339889);
(s(134528), s(947204));
var eC = s(749401),
    eS = s(635377),
    e_ = s.n(eS),
    eN = s(998304),
    ep = s(515718);
let eA = new (e_())({ max: 50 });
async function eT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        s = eA.get(`${e}-${t}`);
    if (null != s) return s;
    let n = (
        await new Promise((s, n) => {
            let l = new Image();
            ((l.crossOrigin = "Anonymous"),
                (l.onerror = (e) => {
                    (n(e), null != l && ((l.onerror = null), (l.onload = null)), (l = null));
                }),
                (l.onload = () => {
                    null != l
                        ? (s((0, ep.Sf)(l, t, 10)), (l.onerror = null), (l.onload = null), (l = null))
                        : n("image is null");
                }),
                (l.src = e));
        })
    ).map((e) => {
        let [t, s, n] = e;
        return (0, eN.Ob)(t, s, n);
    });
    return (eA.set(`${e}-${t}`, n), n);
}
var eO = s(49491),
    eI = s(569926),
    eb = s(418842),
    eR = s(174459),
    eM = s(403362),
    eL = s(38405);
let ey = (0, W.mj)({
    name: "2026-06-hero-shelf-ad-tile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eQ = s(792620);
s(321073);
var eH = s(535185),
    eU = s(408278),
    eD = s(548411),
    eF = s(554830),
    eq = s(689175),
    eP = s(321503),
    ek = s(661531),
    ew = s(375708),
    eB =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let eV = [
    { type: "featured-quests", identifier: "featured", title: ew.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: ew.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: ew.t.P0lmqC },
    { type: "quests", identifier: "orb", title: ew.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: ew.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: ew.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: ew.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: ew.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function eG(e) {
    return ek.A.space.SPACE_XL.resolve({ density: e });
}
function eW(e, t) {
    return (1220 - 2 * eG(e) * (t ? 2 : 0.75)) / 3;
}
function eK(e, t, s) {
    return e.scrollLeft + (t.getBoundingClientRect().left - (s.getBoundingClientRect().left + 2));
}
var ez = s(915850);
let e$ = "data-scroll-target",
    eY = `[${e$}]`,
    eJ = { anchors: [], windowSizes: [] },
    eX = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])',
    eZ = { overflowX: "hidden" };
function e0(e, t, s) {
    let n = t.length - 1,
        l = Math.max(0, e.scrollWidth - e.clientWidth),
        r = s
            ? t.map((e) => Math.min(l, Math.max(0, e)))
            : t.map((t, s) => (0 === s ? 0 : s === n ? l : t - e.clientWidth / 2));
    function i(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: r.reduce((e, t, s) => (i(t) < i(r[e]) ? s : e), 0), scrollLefts: r };
}
let e1 = i.memo(function (e) {
    let {
            children: t,
            className: s,
            itemSelector: n = eY,
            maskWidth: l = 24,
            overflowAmount: a = 0,
            maskMarginMultiplier: u = 1,
            disableUserScroll: c = !1,
            groupedArrows: d = !1,
            scrollerRef: m,
            controlRef: E,
            onScrollStart: f,
            onScrollEnd: x,
            singleStep: g = !1,
            autoCycle: v = !1,
        } = e,
        j = i.useRef(null),
        C = i.useCallback(
            (e) => {
                ((j.current = e), null != m && (m.current = e));
            },
            [m],
        ),
        S = i.useRef(null),
        N = i.useRef(0),
        p = i.useRef(null),
        [A, T] = i.useState(!1),
        [O, I] = i.useState(!1),
        [b, R] = i.useState(!0),
        [M, L] = i.useState([]),
        [y, Q] = i.useState([]),
        H = (0, h.bG)([_.Ay], () => _.Ay.useReducedMotion) ? "auto" : "smooth",
        U = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (T(e.scrollLeft > 0), I(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        D = i.useCallback(() => {
            let { anchors: e, windowSizes: t } = (function (e) {
                let {
                        scrollerRef: t,
                        containerRef: s,
                        itemSelector: n,
                        maskMarginMultiplier: l,
                        maskWidth: r,
                        singleStep: i,
                    } = e,
                    a = t.current?.getScrollerNode(),
                    o = s.current;
                if (null == a || null == o || a.scrollWidth <= a.clientWidth) return eJ;
                let u = Array.from(a.querySelectorAll(n));
                if (0 === u.length) return eJ;
                let c = a.clientWidth - 2 * r * l;
                function d(e) {
                    return e.offsetLeft + e.offsetWidth;
                }
                let m = i ? [] : [0],
                    h = [],
                    E = 0;
                for (let e = 0; e < u.length; e++) {
                    E < e && (E = e);
                    let t = u[e].offsetLeft;
                    for (; E + 1 < u.length && d(u[E + 1]) - t <= c;) E++;
                    let s = E - e + 1;
                    if ((h.push(s), i)) {
                        m.push(eK(a, u[e], o));
                        continue;
                    }
                    if (E === u.length - 1) break;
                    e > 0 && m.push((t + d(u[E])) / 2);
                }
                return h.length < 2 ? eJ : (i || m.push(a.scrollWidth), { anchors: m, windowSizes: h });
            })({
                scrollerRef: j,
                containerRef: p,
                itemSelector: n,
                maskWidth: l,
                maskMarginMultiplier: u,
                singleStep: g,
            });
            (Q(t), L((t) => (t.length === e.length && t.every((t, s) => t === e[s]) ? t : e)));
        }, [l, n, u, g, L]),
        F = i.useCallback(() => {
            if (null == p.current || p.current?.clientWidth === 0) return R(!0);
            R(p.current?.clientWidth >= 1260);
        }, [p]),
        q = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    s = j.current?.getScrollerNode();
                if (null == s || M.length < 2 || (null != f && !f(e * t))) return !1;
                let { currentIndex: n, scrollLefts: l } = e0(s, M, g),
                    r = g ? t : (y[n] ?? 1),
                    i = Math.max(0, Math.min(M.length - 1, n + e * r));
                return ((S.current = ea.pk.ARROW), s.scrollTo({ left: l[i], behavior: H }), !0);
            },
            [H, M, y, g, f],
        ),
        P = (function (e) {
            let { isEnabled: t, advance: s } = e,
                n = i.useRef(null),
                l = i.useCallback(() => {
                    t && s(1);
                }, [t, s]),
                r = i.useCallback(() => {
                    t &&
                        null != n.current &&
                        (window.clearInterval(n.current), (n.current = window.setInterval(l, 3500)));
                }, [t, l]);
            return (
                i.useEffect(
                    () => (
                        t && (n.current = window.setInterval(l, 3500)),
                        () => {
                            null != n.current && window.clearInterval(n.current);
                        }
                    ),
                    [t, l],
                ),
                r
            );
        })({ isEnabled: v, advance: q }),
        k = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                q(e, t) && P();
            },
            [q, P],
        ),
        w = i.useCallback(
            (e) => {
                0 !== e && k(e > 0 ? 1 : -1, Math.abs(e));
            },
            [k],
        );
    i.useImperativeHandle(E, () => ({ scrollBySteps: w }), [w]);
    let B = i.useCallback(
            (e, t) => {
                let s = j.current?.getScrollerNode();
                if (null == s || null == e || !s.contains(e)) return;
                let n = s.getBoundingClientRect(),
                    r = e.getBoundingClientRect(),
                    i = n.left + l - r.left,
                    a = r.right - (n.right - l);
                (i <= 0 && a <= 0) ||
                    ((S.current = ea.pk.MANUAL),
                    i > 0
                        ? s.scrollTo({ left: s.scrollLeft - i, behavior: t })
                        : a > 0 && s.scrollTo({ left: s.scrollLeft + a, behavior: t }));
            },
            [l],
        ),
        V = i.useCallback(
            (e) => {
                let t = e.target.closest(n);
                null != t && B(t, H);
            },
            [n, B, H],
        ),
        G = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            if (null == e) return;
            let { currentIndex: t } = e0(e, M, g),
                s = S.current ?? ea.pk.MANUAL;
            S.current = null;
            let n = N.current;
            N.current = e.scrollLeft;
            let l = e.scrollLeft > n ? ea.VU.RIGHT : ea.VU.LEFT,
                r = y[t] ?? 1;
            x?.({
                scrollingType: s,
                scrollWindowStartIndex: t,
                scrollWindowEndIndex: t + r - 1,
                scrollWindowSize: r,
                scrollingDirection: l,
            });
        }, [x, M, y, g]),
        W = i.useCallback(
            (e) => {
                let t = "ArrowLeft" === e.key ? -1 : +("ArrowRight" === e.key);
                if (0 === t) return;
                e.preventDefault();
                let s = j.current?.getScrollerNode();
                if (null == s) return;
                let l = Array.from(s.querySelectorAll(n)),
                    r = e.target.closest(n),
                    i = null == r ? -1 : l.indexOf(r),
                    a = l[i + t],
                    o = null == a ? null : a.matches(eX) ? a : a.querySelector(eX);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && B(a, "instant"));
            },
            [n, B],
        ),
        K = i.useCallback(() => {
            (U(), D(), F());
        }, [U, D, F]);
    (0, eH.g)(p, K, [], { fireOnMount: !0 });
    let z = a > 0,
        $ = i.useMemo(
            () => ({
                "--custom-scroller-mask-width": `${l}px`,
                "--custom-scroller-overflow-amount": `${a}px`,
                "--custom-scroller-scroll-behavior": H,
            }),
            [l, a, H],
        );
    return (0, r.jsxs)("div", {
        className: o()(s, ez.m7),
        ref: p,
        style: $,
        children: [
            d &&
                (0, r.jsxs)("div", {
                    className: ez.rU,
                    children: [
                        (0, r.jsx)(eU.K, {
                            icon: eD.Z,
                            variant: "overlay-secondary",
                            onClick: () => k(-1),
                            disabled: !A,
                            "aria-label": ew.intl.string(ew.t.vgfxaA),
                            tabIndex: -1,
                        }),
                        (0, r.jsx)(eU.K, {
                            icon: eF.K,
                            variant: "overlay-secondary",
                            onClick: () => k(1),
                            disabled: !O,
                            "aria-label": ew.intl.string(ew.t.XiOHRX),
                            tabIndex: -1,
                        }),
                    ],
                }),
            !d &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(ez.k9, ez.RW, { [ez.Q2]: A }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(eU.K, {
                                icon: eD.Z,
                                variant: "overlay-secondary",
                                onClick: () => k(-1),
                                disabled: !A,
                                "aria-label": ew.intl.string(ew.t.vgfxaA),
                                tabIndex: -1,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: o()(ez.k9, ez.K3, { [ez.Q2]: O }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(eU.K, {
                                icon: eF.K,
                                variant: "overlay-secondary",
                                onClick: () => k(1),
                                disabled: !O,
                                tabIndex: -1,
                                "aria-label": ew.intl.string(ew.t.XiOHRX),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: o()({ [ez.sF]: A && b, [ez.RC]: O && b, [ez.Ni]: z && !A, [ez.GA]: z && !O }),
                children: (0, r.jsx)(eq.zC, {
                    ref: C,
                    orientation: "horizontal",
                    onScroll: U,
                    onScrollEnd: G,
                    onFocusCapture: V,
                    onKeyDown: W,
                    style: c ? eZ : void 0,
                    className: o()({ [ez.x2]: z, [ez.$o]: g }, ez.XG),
                    children: (0, r.jsxs)(eP.X.Provider, {
                        value: j,
                        children: [
                            t,
                            !g &&
                                M.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: ez.fw, style: { insetInlineStart: `${e}px` } },
                                        t,
                                    ),
                                ),
                        ],
                    }),
                }),
            }),
        ],
    });
});
var e8 = s(479669);
function e2(e, t, s) {
    if (null != s) {
        if (e) {
            let e = s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] });
            return {
                "--custom-quest-highlight-blur": (0, e8.to)([e], (e) => `${25 * e}px`),
                "--custom-quest-highlight-alpha": (0, e8.to)([e], (e) => `${e}`),
            };
        }
        if (t)
            return { opacity: (0, e8.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var e4 = s(440703),
    e3 = s(731355),
    e7 = s(621466),
    e6 = s(717421),
    e5 = s(939249),
    e9 = s(259678),
    te = s(508770),
    tt = s(406810),
    ts = s(628284),
    tn = s(65154),
    tl = s(687966),
    tr = s(155718),
    ti = s(496431),
    ta = s(640708),
    to = s(287809),
    tu = s(58703),
    tc = s(927813),
    td = s(541830),
    tm = s(971649),
    th = s(651892),
    tE = s(801365),
    tf = s(814793),
    tx = s(453384),
    tg = s(646764),
    tv = s(398025),
    tj = s(818348),
    tC = s(499621);
function tS(e) {
    let [t, s] = i.useState(!1),
        n = i.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function t_(e) {
    let { hero: t, contentPosition: s, impressionRef: n } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = tS(
            i.useCallback(
                (e) => {
                    (0, er.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ea.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, e7.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(tj.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, e6.z)({ hoverSpring: +!!a, config: e8.config.gentle }),
        d = i.useCallback(() => {
            (0, eo._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: es.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ea.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: n.current?.getId(),
                    sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, n]);
    return (0, r.jsxs)(e5.D, {
        tag: "div",
        className: o()(tC.FW, tC.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [e$]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: tC.Ve,
                children: (0, r.jsx)(eu.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tC.pv, tC.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tC.pv, tC.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(e8.animated.div, {
                className: tC.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), d());
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function tN(e) {
    let { hero: t, game: s, contentPosition: n, shelfImage: l, impressionRef: a } = e,
        u = i.useRef(null),
        { isHovering: c, hoverProps: d } = tS(
            i.useCallback(
                (e) => {
                    (0, er.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ea.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        );
    i.useEffect(() => {
        let e = u.current;
        (0, e7.vq)(e, HTMLVideoElement) && (c ? ((e.currentTime = 0), e.play().catch(tj.tE)) : e.pause());
    }, [c]);
    let h = i.useCallback(() => {
            (0, eo._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: es.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ea.Cy.OPEN_GAME_LINK,
                    position: n,
                    impressionId: a.current?.getId(),
                    sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, n, a]),
        E = i.useRef(null),
        [f, x] = i.useState({ top: !1, bottom: !1 }),
        v = i.useCallback(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                s = e.getDistanceFromBottom() > 4;
            x((e) => (e.top === t && e.bottom === s ? e : { top: t, bottom: s }));
        }, []);
    i.useLayoutEffect(() => {
        v();
    }, [v]);
    let { topFade: j, bottomFade: C } = (0, e6.z)({
            topFade: +!!f.top,
            bottomFade: +!!f.bottom,
            config: { ...e8.config.gentle, duration: 100 },
        }),
        S = i.useMemo(() => {
            let e = null != s.firstReleaseDate ? new Date(s.firstReleaseDate).getFullYear() : NaN,
                t = isNaN(e) ? null : e,
                n = s.genres.at(0);
            return [
                t,
                null != n ? (0, td.du)(n) : null,
                s.getCompanyByRole(tr.wk.DEVELOPER).at(0)?.name ?? null,
            ].filter((e) => null != e);
        }, [s]),
        _ = i.useMemo(() => S.length > 0, [S]);
    return (0, r.jsxs)(e5.D, {
        tag: "div",
        className: o()(tC.FW, tC.n7),
        onClick: h,
        [e$]: !0,
        ...d,
        children: [
            (0, r.jsx)("div", { className: tC.hu }),
            (0, r.jsx)("div", {
                className: tC.fQ,
                children: (0, r.jsx)(eu.N, {
                    showVideo: !0,
                    assetRef: u,
                    imageAsset:
                        null != l
                            ? {
                                  asset: { url: l, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tC.pv, tC.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tC.pv, tC.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsxs)("div", {
                className: tC.iq,
                children: [
                    (0, r.jsxs)("div", {
                        className: tC.o7,
                        children: [
                            (0, r.jsx)(eh.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: s.name,
                            }),
                            _ &&
                                (0, r.jsx)("p", {
                                    className: tC.c9,
                                    children: S.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(J.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: e,
                                                    }),
                                                    t < S.length - 1 && (0, r.jsx)(ta.A, { width: 3, height: 3 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsx)(e8.animated.div, {
                        className: tC.hX,
                        style: {
                            maskImage: (0, e8.to)(
                                [j, C],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(e9.vN, {
                            children: (0, r.jsx)(eq.Ch, {
                                ref: E,
                                className: tC.hw,
                                onScroll: v,
                                fade: !c,
                                children: (0, r.jsx)(J.E, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    className: tC.W1,
                                    children: s.description,
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)(g.$, {
                        fullWidth: !0,
                        variant: "secondary",
                        onClick: (e) => {
                            (e.stopPropagation(), h());
                        },
                        text: t.cta.buttonLabel,
                    }),
                ],
            }),
        ],
    });
}
function tp(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        a = i.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: E } = (0, ti.A)(a, tc.A.Millis.MINUTE),
        f = i.useMemo(
            () =>
                (0, tu.uN)(
                    { days: u, hours: c, minutes: d, seconds: E },
                    { days: ew.t["Ux/De1"], hours: ew.t.Lzd5Ie, minutes: ew.t.odmpbP },
                ),
            [u, c, d, E],
        ),
        x = (0, h.bG)([to.default], () => to.default.getCurrentUser()),
        v = i.useMemo(() => (0, tE.mq)(s.config, x), [s.config, x]),
        C = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, th.xv)(e).type) {
                        case e4.l.IN_GAME:
                            return ew.intl.string(ew.t["O/J2kr"]);
                        case e4.l.COLLECTIBLE:
                            return ew.intl.string(ew.t.Jg17Ut);
                        case e4.l.VIRTUAL_CURRENCY:
                            return ew.intl.string(ew.t.ElYQFS);
                        default:
                            return (0, tE.mq)(e, t);
                    }
                })(s.config, x),
            [s.config, x],
        ),
        { completedRatio: S, completedRatioDisplay: _ } = (0, $.O9)(s),
        N = i.useMemo(() => (0, tE.wo)(s.config, x), [s.config, x]),
        p = (0, ei.tG)(),
        A = (0, ei.WS)(),
        T = (0, tm.wW)(),
        { isHovering: O, hoverProps: I } = tS(
            i.useCallback(
                (e) => {
                    A({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ea.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, A, l, s.id],
            ),
        ),
        { hoverSpring: b } = (0, e6.z)({ hoverSpring: +!!O, config: e8.config.gentle }),
        R = i.useCallback(() => {
            (n(s.id),
                (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, Z.r)({
                          type: ee.F.CLICK_INTERNAL,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: ea.Cy.VIEW_QUESTS,
                          surfaceId: es.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: l,
                          impressionId: T(),
                      })
                    : p({
                          adContentId: t,
                          relatedQuestId: s.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: es.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: ea.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                      }));
        }, [n, t, s.id, p, l, T]);
    return (0, r.jsxs)(e5.D, {
        tag: "div",
        className: o()(tC.FW, tC.$R),
        onClick: R,
        "aria-label": ew.intl.string(ew.t["th2+0j"]),
        [e$]: !0,
        ...I,
        children: [
            (0, r.jsx)("div", { className: tC.hu }),
            (0, r.jsxs)(j.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(te.E, { type: { text: C } }),
                    (0, r.jsx)(e8.animated.div, {
                        style: { opacity: (0, tv.a)(b.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(te.E, { type: { text: f }, icon: tt.ClockIcon }),
                    }),
                ],
            }),
            (0, r.jsx)(e8.animated.div, {
                className: tC.Tr,
                style: { transform: b.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tx.A, {
                    percentComplete: S,
                    overlayText: O && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tg.A, {
                        quest: s,
                        questContent: es.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: O,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(e8.animated.div, {
                className: tC.tw,
                style: {
                    opacity: (0, tv.a)(b.to([0, 1], [1, 0])),
                    transform: b.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(j.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(J.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: tC.Ht,
                            children: v,
                        }),
                        (0, r.jsxs)(j.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(ts.y, { size: "xs", color: ek.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(J.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, tf.pv)(s.config) === e3.Z.VIDEO
                                            ? (0, r.jsx)(tn.S, { size: "xs", color: ek.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(tl.GameControllerIcon, {
                                                  size: "xs",
                                                  color: ek.A.colors.ICON_MUTED.css,
                                              }),
                                        (0, r.jsx)(J.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: _,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(e8.animated.div, {
                className: tC.um,
                style: { transform: b.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), R());
                    },
                    text: ew.intl.string(ew.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var tA = s(190107),
    tT = s(531525),
    tO = s(726356);
function tI(e) {
    let { hero: t, shelfQuests: s, isBannerLoading: n, onQuestCtaClick: l } = e,
        a = (0, eb.C)(),
        { enabled: o } = ey.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        u = i.useMemo(
            () =>
                o
                    ? (s
                          .map((e) => (0, eQ.xc)(e) ?? (0, eQ._3)(e)?.at(0) ?? null)
                          .filter(eM.Vq)
                          .at(0) ?? null)
                    : null,
            [s, o],
        ),
        { isLoading: c, data: d, error: h } = (0, eI.I)(u),
        E = (0, eO.A)(d),
        f = o && null != d && !E;
    i.useEffect(() => {
        o &&
            null != u &&
            null != h &&
            (eR.default.track(ef.HAw.AD_ASSET_LOADING_FAILURE, {
                source: tA.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                ad_creative_id: t.id,
                ad_creative_type: m.p.QUEST_HOME_HERO,
                application_ids: [u],
            }),
            eL.A.captureException(h, { tags: { source: tA.rE.QUEST_HOME_HERO_SHELF_DESKTOP } }));
    }, [o, h, t.id, u]);
    let x = i.useMemo(
            () => (f ? (null != t.shelfImage ? t.shelfImage : (d?.getCoverURL(512) ?? null)) : null),
            [f, t, d],
        ),
        g = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                [s, n] = i.useState(void 0);
            return (
                i.useEffect(() => {
                    let s = !1;
                    return (
                        (null != e ? eT(e, t) : Promise.resolve(void 0))
                            .then((e) => {
                                s || n(e);
                            })
                            .catch(() => {}),
                        () => {
                            s = !0;
                        }
                    );
                }, [e, t]),
                s
            );
        })(
            i.useMemo(() => (null != x ? (0, el.UX)(x, { format: "webp", width: 400, height: 600 }) : null), [x]),
            8,
        ),
        v = i.useMemo(() => (null == g ? null : (0, eC.Z)(g)), [g]),
        C = i.useMemo(() => {
            if (null != v)
                return {
                    "--custom-hero-shelf-scrim-gradient-start": v[0],
                    "--custom-hero-shelf-scrim-gradient-end": v[1],
                };
        }, [v]);
    return n || c
        ? (0, r.jsx)(tb, { numShelfCards: s.length + 1 })
        : (0, r.jsx)(e1, {
              className: tO.vo,
              overflowAmount: 25,
              maskWidth: eG(a),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(j.B, {
                  className: tO.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  style: C,
                  children: [
                      !o &&
                          (0, r.jsx)(ec.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: es.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, s) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(t_, { hero: t, contentPosition: 0, impressionRef: s }),
                                  }),
                          }),
                      f &&
                          (0, r.jsx)(ec.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: es.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, s) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tN, {
                                          hero: t,
                                          game: d,
                                          shelfImage: x,
                                          contentPosition: 0,
                                          impressionRef: s,
                                      }),
                                  }),
                          }),
                      s.map((e, s) =>
                          (0, r.jsx)(
                              ec.Z,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  relatedQuestId: e.id,
                                  questContent: es.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: s + 1,
                                  sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                                  children: (n) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              n.current = e;
                                          },
                                          children: (0, r.jsx)(tp, {
                                              heroId: t.id,
                                              quest: e,
                                              onQuestCtaClick: l,
                                              contentPosition: s + 1,
                                          }),
                                      }),
                              },
                              e.id,
                          ),
                      ),
                  ],
              }),
          });
}
function tb(e) {
    let { className: t, numShelfCards: s } = e,
        { enabled: n } = ey.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        l = (0, eb.C)(),
        i = n ? Math.max(s, 3) : Math.max(s, 4);
    return (0, r.jsx)(e1, {
        className: o()(tO.vo, t),
        overflowAmount: 25,
        maskWidth: eG(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(j.B, {
            className: tO.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: i }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(tT.m, tO.W_, { [tO.E8]: n && 0 === t }) }, t),
            ),
        }),
    });
}
var tR = s(74498);
function tM() {
    return (0, r.jsx)("div", { className: tR.Np });
}
function tL(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, ed.A)(n);
    let l = i.useMemo(() => (null != s ? (0, el.WV)(s) : null) ?? t, [s, t]);
    return (0, r.jsx)(Y._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eu.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: n,
                imageAsset: {
                    alt: "",
                    className: tR.LY,
                    asset: { url: l, mimetype: (0, el.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: tR.LY,
                    asset: { url: s, mimetype: (0, el.vm)(s), isAnimated: !0 },
                    assetId: s,
                },
            }),
    });
}
function ty(e) {
    let { heroImage: t, heroVideo: s } = e;
    return null == s
        ? (0, r.jsxs)("div", {
              className: tR.Tv,
              children: [
                  (0, r.jsx)(tM, {}),
                  (0, r.jsx)("div", {
                      className: tR.LO,
                      children: (0, r.jsx)(Y._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: tR.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tR.LO, tR.jx, tR.hw),
                      children: (0, r.jsx)("img", { className: tR.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tR.LO, tR.jx, tR.Co),
                      children: (0, r.jsx)("img", { className: tR.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: tR.Tv,
              children: [
                  (0, r.jsx)(tM, {}),
                  (0, r.jsx)("div", { className: tR.LO, children: (0, r.jsx)(tL, { heroImage: t, heroVideo: s }) }),
              ],
          });
}
function tQ(e) {
    let { hero: t, hasFetchedQuests: s, hasNoAccessibleQuests: n } = e,
        l = (0, ei.WS)(),
        r = i.useRef(!1);
    return (
        i.useEffect(() => {
            let e = t.questIds;
            s &&
                null != e &&
                e.length > 0 &&
                n &&
                !r.current &&
                ((r.current = !0),
                l({
                    adContentId: t.id,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    event: ef.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: es.uF.QUEST_HOME_HERO,
                }));
        }, [s, n, t.id, t.questIds, l]),
        null
    );
}
function tH(e) {
    let { hero: t, onQuestCtaClick: s, isBannerLoading: n } = e,
        l = (0, h.bG)([et.A], () => et.A.quests),
        a = (0, h.bG)([et.A], () => et.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, $.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, ej.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let E = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        f = E[0];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ec.Z, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: es.uF.QUEST_HOME_HERO,
                sourceQuestContent: es.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(tQ, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === E.length }),
                            (0, r.jsx)(ev, {
                                ref: (t) => {
                                    e.current = n ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [tR.lX]: n }),
                                topContent: (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, r.jsx)(Y._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, r.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: tR.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(J.E, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: tR.yu,
                                            children: ew.intl.string(ew.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                buttons: (0, r.jsxs)(x.e, {
                                    children: [
                                        (0, r.jsx)(g.$, {
                                            onClick: () => {
                                                (0, eo._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: es.uF.QUEST_HOME_HERO,
                                                        ctaContent: ea.Cy.OPEN_GAME_LINK,
                                                        impressionId: l.current?.getId(),
                                                        sourceQuestContent: es.uF.QUEST_HOME_HERO,
                                                    },
                                                );
                                            },
                                            size: "md",
                                            text: t.cta.buttonLabel,
                                            variant: "overlay-primary",
                                        }),
                                        !c &&
                                            null != f &&
                                            (0, r.jsx)(g.$, {
                                                onClick: () => {
                                                    (s(f),
                                                        (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                            ? (0, Z.r)({
                                                                  type: ee.F.CLICK_INTERNAL,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  adCreativeId: t.id,
                                                                  questContentCTA: ea.Cy.VIEW_QUESTS,
                                                                  surfaceId: es.uF.QUEST_HOME_HERO,
                                                                  sourceQuestContent: es.uF.QUEST_HOME_HERO,
                                                              })
                                                            : (0, er.vK)({
                                                                  adContentId: t.id,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  questContent: es.uF.QUEST_HOME_HERO,
                                                                  questContentCTA: ea.Cy.VIEW_QUESTS,
                                                                  sourceQuestContent: es.uF.QUEST_HOME_HERO,
                                                              }));
                                                },
                                                size: "md",
                                                text: ew.intl.string(ew.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(ty, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(tI, { hero: t, isBannerLoading: n, shelfQuests: u, onQuestCtaClick: s }),
        ],
    });
}
function tU() {
    return (0, r.jsx)("div", { className: o()(ex.iE, ex.FG, ex.B3), children: (0, r.jsx)(X.y, {}) });
}
var tD = s(130490),
    tF = s(228366),
    tq = s(396813);
s(667532);
var tP = s(890497),
    tk = s(663417),
    tw = s(922016),
    tB = s(624479),
    tV = s(416052),
    tG = s(417098);
function tW(e) {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(tG.$T, {
        color: tG.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : ew.intl.string(ew.t.ZErSg5) }),
    });
}
var tK = s(602853),
    tz = s(817281),
    t$ = s(688810),
    tY = s(487245),
    tJ = s(363195),
    tX = s(912875);
let tZ = function () {
    let { analyticsLocations: e } = (0, t$.Ay)(),
        t = (0, h.bG)([tJ.A], () => tJ.A.theme),
        s = i.useRef(null);
    i.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, tK.r)(ek.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.LIGHT),
        l = (0, tK.r)(ek.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.DARK),
        a = (0, tK.r)(ek.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.ONYX),
        o = i.useMemo(
            () => [
                { theme: ef.NJ8.LIGHT, label: ew.t.K2sFfo, color: n.hex() },
                { theme: ef.NJ8.DARK, label: ew.t.b8Cei3, color: l.hex() },
                { theme: ef.NJ8.ONYX, label: ew.t.Do4ZJx, color: a.hex() },
            ],
            [n, l, a],
        ),
        u = i.useCallback(
            (t) => {
                ((0, tY.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, tz.u_)({ theme: t }));
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != s.current && u(s.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: tX.N,
        children: (0, r.jsxs)("div", {
            className: tX.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        e5.D,
                        {
                            tag: "div",
                            className: tX.Du,
                            onClick: () => u(e.theme),
                            "aria-label": ew.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${tX.WT} ${t === e.theme ? tX.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: tX.i, children: ew.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(eU.K, {
                    onClick: c,
                    "aria-label": ew.intl.string(ew.t.yBZMsQ),
                    icon: tk.RefreshIcon,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var t0 = s(219354);
let t1 = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, $.pT)(),
        E = (0, h.bG)([et.A], () => (null != t ? et.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, h.bG)([et.A], () => null != t && et.A.isFetchingQuestPreview(t), [t]),
        v = i.useMemo(() => {
            let e = m.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return (null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e);
        }, [m, t]),
        j = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, tq.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, tq.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, tq.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = i.useCallback(
            (e) => {
                (0, B.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: t0.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: t0.Br,
                    children: (0, r.jsxs)("div", {
                        className: t0.bo,
                        children: [
                            (0, r.jsx)(tZ, {}),
                            (0, r.jsxs)("div", {
                                className: t0.b8,
                                children: [
                                    (0, r.jsx)(
                                        tP.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: _,
                                            placeholder: ew.intl.string(ew.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, B.uJ)(t?.trim())) return e;
                                                let s = e.filter(
                                                    (e) =>
                                                        e.label.toLowerCase().includes(t.toLowerCase()) ||
                                                        e.value.toLowerCase().includes(t.toLowerCase()),
                                                );
                                                return 0 === s.length && "" !== t.trim()
                                                    ? [{ label: t.trim(), value: t.trim() }]
                                                    : s;
                                            },
                                        },
                                        `${t}-${n?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, r.jsx)(eU.K, {
                                        onClick: l,
                                        "aria-label": ew.intl.string(ew.t.wzzjk9),
                                        icon: tk.RefreshIcon,
                                        loading: f,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != n &&
                (0, r.jsx)("div", {
                    className: t0.in,
                    children: (0, r.jsxs)(x.e, {
                        className: t0.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ew.intl.string(ew.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ew.intl.string(ew.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: S,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ew.intl.string(ew.t.cKSLr4),
                            }),
                            (0, r.jsx)(tw.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: t0.PP,
                                        children: (0, r.jsx)("div", {
                                            className: t0.sH,
                                            children: (0, r.jsx)(tV.A, {
                                                value: tj.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: ew.intl.string(ew.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(eU.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": ew.intl.string(ew.t.rNGQfD),
                                        icon: tB.CopyIcon,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != E ? (0, r.jsx)(tW, { error: E }) : null,
            f ? (0, r.jsx)(X.y, {}) : null,
        ],
    });
};
var t8 = s(364522),
    t2 = s(761508),
    t4 = s(425069);
function t3() {
    return (0, r.jsx)("div", { className: t4.y });
}
var t7 = s(834615),
    t6 = s(34665);
let t5 = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t6.x3,
        children: (0, r.jsxs)("div", {
            className: t6.B0,
            children: [
                (0, r.jsx)(eh.D, {
                    className: t6.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.L2mlUb),
                }),
                (0, r.jsx)(ec.R, {
                    questOrQuests: t,
                    questContent: es.uF.ACTIVITY_PANEL,
                    sourceQuestContent: es.uF.ACTIVITY_PANEL,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(t7.default, { quest: t }),
                        }),
                }),
            ],
        }),
    });
};
var t9 = s(242939),
    se = s(717695),
    st = s(466209),
    ss = s(83978);
let sn = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t6.x3,
        children: (0, r.jsxs)("div", {
            className: st.wp,
            children: [
                (0, r.jsx)(eh.D, {
                    className: st.Oo,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: st.RE,
                    children: (0, r.jsx)("div", {
                        className: st.Z,
                        children: (0, r.jsx)("div", {
                            className: ss.C3,
                            children: (0, r.jsx)(se.A, {
                                children: (0, r.jsx)(Y.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(t9.QuestBar, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var sl = s(322338);
function sr(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t6.x3,
        children: (0, r.jsxs)("div", {
            className: t6.B0,
            children: [
                (0, r.jsx)(eh.D, {
                    className: t6.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: t6.YT,
                    children: (0, r.jsx)(sl.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var si = s(711038),
    sa = s(622409);
let so = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: t6.x3,
        children: (0, r.jsxs)("div", {
            className: t6.B0,
            children: [
                (0, r.jsx)(eh.D, { variant: "heading-md/semibold", children: ew.intl.string(ew.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: sa.wu,
                    children: (0, r.jsx)("span", { className: sa.cy, children: ew.intl.string(ew.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: sa.oU,
                    children: (0, r.jsx)("div", {
                        className: sa.zx,
                        children: (0, r.jsx)("div", {
                            className: sa.Lj,
                            children: (0, r.jsx)("div", {
                                className: sa.n0,
                                children: (0, r.jsx)(si.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var su = s(976014),
    sc = s(484810);
function sd(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: sc.y, children: t });
}
var sm = s(612324),
    sh = s(365199),
    sE = s(270045),
    sf = s(79545),
    sx = s(173936),
    sg = s(914410);
function sv(e, t) {
    let s = (0, tE.wo)(e, t);
    if (null == s) return;
    let n = (0, tE.l0)(e, t);
    return s > 700 * n ? el.i2.TIER_4 : s > 200 * n ? el.i2.TIER_3 : s > 100 * n ? el.i2.TIER_2 : el.i2.TIER_1;
}
var sj = s(339350),
    sC = s(782134),
    sS = s(271536),
    s_ = s(768622),
    sN = s(793934),
    sp = s(662940),
    sA = s(710969);
let sT = 2 * tc.A.Millis.DAY,
    sO = 3 * tc.A.Millis.DAY,
    sI = new Map(eV.map((e) => [e.identifier, e])),
    sb = {
        [eB.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return ((n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n));
            });
        },
    };
function sR(e) {
    return e.features.includes(tA.Li.EXCLUDE_FROM_FEATURED);
}
function sM(e, t) {
    let s = sI.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
var sL = s(853978);
function sy(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, sf.Pd)(t),
        l = (0, h.bG)([et.A], () => n === sf.UA.UNENROLLED && null != et.A.questEnrollmentBlockedUntil, [n]),
        a = (0, $.fc)(t),
        u = (0, $.I3)(t),
        c = i.useMemo(() => (0, sp.Dd)(t.config, n, l), [t.config, n, l]),
        d = i.useMemo(() => (0, sp.CK)(n, a, u, l), [n, a, u, l]),
        m = (function (e) {
            let t = (0, sf.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case sf.UA.UNENROLLED:
                            case sf.UA.ENROLLED:
                            case sf.UA.INCOMPLETE:
                                return !0;
                            case sf.UA.COMPLETED:
                            case sf.UA.CLAIMED:
                            case sf.UA.EXPIRED:
                            case sf.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < sO &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, ti.A)(n, tc.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        E = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(sL.fC, { [sL.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: sL.qS,
                children: [
                    null != E &&
                        (0, r.jsx)(J.E, {
                            variant: "text-xs/semibold",
                            className: sL.SJ,
                            color: "text-overlay-light",
                            children: E,
                        }),
                    null != E &&
                        null != d &&
                        (0, r.jsx)(J.E, {
                            variant: "text-xs/semibold",
                            color: "text-overlay-light",
                            className: sL.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: sL.BA,
                            children: [
                                (function (e, t) {
                                    let s = { size: "xxs", className: sL.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(sj.Q, { ...s });
                                    switch ((0, sp.pv)(e)) {
                                        case sp.UK.PLAY:
                                            return (0, r.jsx)(tl.GameControllerIcon, { ...s });
                                        case sp.UK.WATCH:
                                            return (0, r.jsx)(sC.PlayIcon, { ...s });
                                        case sp.UK.ACTIVITY:
                                            return (0, r.jsx)(sS.q, { ...s });
                                        case sp.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(s_.g, { ...s });
                                        case sp.UK.ARENA:
                                            return (0, r.jsx)(sN.q, { ...s });
                                    }
                                })(t, l),
                                (0, r.jsx)(J.E, {
                                    variant: "text-xs/semibold",
                                    tag: "span",
                                    color: "text-overlay-light",
                                    children: d,
                                }),
                            ],
                        }),
                ],
            }),
            t.preview &&
                (0, r.jsx)("div", {
                    className: o()(sL.qS, sL.WZ),
                    children: (0, r.jsx)(J.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: ew.intl.string(ew.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var sQ = s(409626),
    sH = s(3738),
    sU = s(646917),
    sD = s(866665),
    sF = s(743368),
    sq = s(657113),
    sP = s(617986),
    sk = s(964051);
function sw(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, sf.Pd)(t),
        { ctaOnHover: a } = G.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        u = (0, h.bG)([et.A], () => i === sf.UA.UNENROLLED && null != et.A.questEnrollmentBlockedUntil, [i]),
        c = !(0, eQ.no)(t) || ![sf.UA.ENROLLED, sf.UA.UNENROLLED, sf.UA.INCOMPLETE].includes(i),
        d = i === sf.UA.EXPIRED || (i === sf.UA.CLAIMED && (0, eQ.GL)(t)),
        m = (0, $.do)({ quest: t, content: s, ctaContent: ea.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsxs)("div", {
        className: o()(sk.lO, { [sk.Fq]: l || !a }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)("div", { className: sk.Cj }),
            (0, r.jsx)(em.N, {
                theme: ef.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, sk.tn),
                        children: (0, r.jsxs)(x.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                c &&
                                    (d
                                        ? (0, r.jsx)(g.$, {
                                              variant: "secondary",
                                              text: t.config.ctaConfig.buttonLabel,
                                              onClick: m,
                                          })
                                        : (0, r.jsx)(sD.m, {
                                              text: ew.intl.string(ew.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, r.jsx)(eU.K, {
                                                  variant: "secondary",
                                                  icon: sF.W,
                                                  "aria-label": ew.intl.string(ew.t.LLLLPD),
                                                  onClick: m,
                                              }),
                                          })),
                                !d &&
                                    !u &&
                                    (0, r.jsx)(sq.A, {
                                        quest: t,
                                        surface: sf.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                                u &&
                                    (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: ew.intl.string(ew.t.vY9GgG),
                                        onClick: () => (0, sP.m6)(t, s, n),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var sB = s(403581),
    sV = s(576761),
    sG = s(41327);
function sW(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, $.ZP)(s),
        i = (0, sV.B9)(n);
    if (null == l) return null;
    let a = i
        ? ew.intl.formatToPlainString(ew.t.l2UfLG, { bonusOrbMultiplier: l })
        : ew.intl.formatToPlainString(ew.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(e5.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, sP.gC)(l, n), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: sG.k,
            children: [
                (0, r.jsx)(sB.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(J.E, { variant: "text-sm/normal", color: "currentColor", className: sG.Q, children: a }),
            ],
        }),
    });
}
var sK = s(947641),
    sz = s(194261),
    s$ = s(106799),
    sY = s(476334);
function sJ(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        a = (0, h.bG)([to.default], () => to.default.getCurrentUser()),
        u = (0, tE.mq)(t.config, a),
        c = (0, tE.ks)(t.config),
        d = (0, tE.wo)(t.config, a),
        m = sv(t.config, a),
        { completedRatio: E } = (0, $.O9)(t),
        f = (0, sf.Pd)(t),
        x = (0, $.Hv)(),
        g = t.userStatus?.claimedAt != null,
        v = f === sf.UA.COMPLETED || f === sf.UA.EXPIRED_CLAIMABLE || g,
        j = g ? "completed" : f === sf.UA.EXPIRED ? "expired" : null,
        C = (0, tD.ix)({ quest: t, questContent: s, sourceQuestContent: n }),
        S = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), x && !g)) {
                    ((0, er.Y5)({
                        questId: t.id,
                        questContent: s,
                        questContentCTA: ea.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: n,
                    }),
                        (0, sP.FS)());
                    return;
                }
                C();
            },
            [C, x, g, t.id, s, n],
        ),
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tg.A, {
                    quest: t,
                    orbTier: m,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: sY.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === j &&
                    (0, r.jsx)("div", {
                        className: sY.EY,
                        children: (0, r.jsx)(sK.r, { className: sY.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === j &&
                    (0, r.jsx)("div", {
                        className: sY.EY,
                        children: (0, r.jsx)(sz.LockIcon, { size: "sm", className: sY.Sz, color: "currentColor" }),
                    }),
            ],
        }),
        N = (0, r.jsx)("div", { className: f === sf.UA.UNENROLLED ? sY.fm : sY.n5, children: _ }),
        p = (0, r.jsx)(tx.A, { size: 66, percentComplete: E, useAltStyle: !0, children: N }),
        A = v
            ? (0, r.jsx)(e5.D, {
                  className: sY.q9,
                  onClick: S,
                  "aria-label": g
                      ? (0, tE.r7)(t.config)
                          ? ew.intl.string(ew.t.bAGFz3)
                          : ew.intl.string(ew.t.vTgCWx)
                      : ew.intl.string(ew.t.cfY4PE),
                  children: p,
              })
            : p;
    return (0, r.jsxs)("div", {
        className: o()(sY.CZ, { [sY.Pv]: l }),
        children: [
            (0, r.jsx)(em.N, {
                theme: ef.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, sY.tE, { [sY.cB]: l }),
                        children: f === sf.UA.UNENROLLED ? N : A,
                    }),
            }),
            (0, r.jsxs)("div", {
                className: o()(sY.FS, { [sY.IR]: l }),
                children: [
                    (0, r.jsx)(J.E, {
                        variant: "text-sm/medium",
                        className: sY.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(sY.oV, { [sY.FJ]: l }),
                        children: [
                            c && (0, r.jsx)(s$.A, { className: sY.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                J.E,
                                {
                                    variant: "text-md/medium",
                                    className: sY.zN,
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    tag: "span",
                                    children: c ? d : u,
                                },
                                `${t.id}_reward`,
                            ),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var sX = s(604970);
function sZ(e) {
    let { quest: t, questContent: s, isHovering: n, sourceQuestContent: l } = e,
        a = i.useRef(null),
        u = (0, sH.A9)(t, l, tA.rE.QUEST_HOME_DESKTOP, sQ.GameProfileSources.QuestHome, a),
        c = (0, sU.z)(),
        d = (0, $.SD)(t, c);
    return (0, r.jsxs)("div", {
        ref: a,
        className: sX.qr,
        children: [
            (0, r.jsx)(sJ, { quest: t, questContent: s, sourceQuestContent: l, isHovering: n }),
            (0, r.jsxs)("div", {
                className: sX.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: sX.Wi,
                        children: [
                            (0, r.jsx)(J.E, {
                                variant: "text-sm/normal",
                                className: o()(sX.Wj, sX.h_, { [sX.C4]: n }),
                                children: u,
                            }),
                            (0, r.jsx)(J.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(sX.Wj, sX.XV, { [sX.Hz]: n }),
                                children: u,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: sX.Gv,
                        children: [
                            (0, r.jsx)(J.E, {
                                variant: "text-sm/normal",
                                className: sX.I4,
                                children: ew.intl.string(ew.t.o6FLcF),
                            }),
                            d &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(J.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(sW, { questId: t.id, orbMultiplierEligibility: c }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(sw, { quest: t, questContent: s, sourceQuestContent: l, isHovering: n }),
        ],
    });
}
var s0 = s(434295);
let s1 = { [el.i2.TIER_2]: s0.qt, [el.i2.TIER_3]: s0.jR, [el.i2.TIER_4]: s0.cd };
function s8(e) {
    let {
            quest: t,
            questContent: s,
            sourceQuestContent: n,
            isHovering: l,
            isShareable: i,
            onCopyShareLink: a,
            onMenuOpen: u,
            onMenuClose: c,
        } = e,
        { completedRatio: d, completedRatioDisplay: m } = (0, $.O9)(t, !0),
        E = (0, el.tW)(t, el.fY.LOGO_TYPE, ef.NJ8.DARK).url,
        f = (0, h.bG)([tJ.A], () => tJ.A.theme) === ef.NJ8.LIGHT,
        x = (0, h.bG)([to.default], () => to.default.getCurrentUser()),
        g = sv(t.config, x),
        v = null != g ? s1[g] : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f
                ? (0, r.jsx)(em.N, {
                      theme: ef.NJ8.DARK,
                      disableAdaptiveTheme: !0,
                      children: (e) => (0, r.jsx)("div", { className: o()(e, s0.f5, v), "aria-hidden": !0 }),
                  })
                : (0, r.jsx)("div", { className: o()(s0.f5, v), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: o()(s0.ZF, v, { [s0.SP]: l }), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: s0.ZH, children: (0, r.jsx)(sy, { quest: t, isHovering: l }) }),
            (0, r.jsxs)("div", {
                className: o()(s0.o1, { [s0.SP]: l }),
                children: [
                    i &&
                        (0, r.jsx)(e5.D, {
                            tag: "div",
                            className: s0.hP,
                            onClick: a,
                            "aria-label": ew.intl.string(ew.t.WqhZss),
                            children: (0, r.jsx)(sx.LinkIcon, { size: "sm", color: "currentColor" }),
                        }),
                    (0, r.jsx)(sE.C, {
                        questContent: s,
                        quest: t,
                        hideLearnMore: !0,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: n,
                        onOpen: u,
                        onClose: c,
                        children: (e) =>
                            (0, r.jsx)(e5.D, {
                                ...e,
                                tag: "div",
                                className: s0.hP,
                                "aria-label": ew.intl.string(ew.t.DEoVWZ),
                                children: (0, r.jsx)(sh.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o()(s0.KJ, { [s0.R]: l }),
                children: [
                    (0, r.jsx)("div", {
                        className: s0.Ez,
                        children: (0, r.jsx)("img", { className: s0.dK, src: E, alt: t.config.messages.gameTitle }),
                    }),
                    (0, r.jsxs)("div", {
                        className: s0.Cd,
                        children: [
                            (0, r.jsx)(J.E, {
                                variant: "text-sm/semibold",
                                color: "text-overlay-light",
                                className: s0.ZV,
                                children: m,
                            }),
                            (0, r.jsx)("div", {
                                className: s0.oU,
                                children: (0, r.jsx)(sg.Ay, {
                                    variant: sg.qP.UNSET,
                                    override: { default: { gradientStart: "#189E4E", gradientEnd: "#44FC7E" } },
                                    weight: sg.fh.LIGHT,
                                    progress: Math.round(100 * d),
                                    glowing: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(s0.SJ, { [s0.SP]: l }),
                children: (0, r.jsx)(sZ, { quest: t, questContent: s, isHovering: l, sourceQuestContent: n }),
            }),
        ],
    });
}
var s2 = s(720875),
    s4 = s(614972),
    s3 = s(688755),
    s7 = s(831368),
    s6 = s(704289);
function s5(e) {
    let {
            sectionIdentifier: t,
            quest: s,
            questContent: n,
            isInFeaturedSection: l,
            isActive: a,
            className: u,
            contentPosition: c,
            rowIndex: d,
            eagerLoadAssets: m,
            impressionRef: E,
            onMenuOpenChange: f,
            sourceQuestContent: x,
        } = e,
        g = i.useMemo(() => (0, el.tW)(s, el.fY.QUEST_BAR_HERO_IMAGE), [s]),
        v = i.useMemo(() => (0, el.tW)(s, el.fY.QUEST_BAR_HERO_VIDEO), [s]),
        {
            isActive: j,
            shouldRender: C,
            hoverHandlers: S,
            handleMenuOpen: _,
            handleMenuClose: N,
        } = (function () {
            let { fadeDurationMs: e = 400, onMenuOpenChange: t } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                [s, n] = i.useState(!1),
                [l, r] = i.useState(!1),
                a = i.useRef(!1),
                o = i.useRef(!1),
                u = i.useRef(!1),
                c = i.useRef(t);
            i.useEffect(() => {
                c.current = t;
            }, [t]);
            let d = i.useRef(null),
                m = i.useRef(null);
            function h() {
                null != d.current && (cancelAnimationFrame(d.current), (d.current = null));
            }
            function E() {
                null != m.current && (clearTimeout(m.current), (m.current = null));
            }
            let f = i.useCallback(() => {
                    (E(),
                        r(!0),
                        h(),
                        (d.current = requestAnimationFrame(() => {
                            d.current = requestAnimationFrame(() => {
                                ((d.current = null), n(!0));
                            });
                        })));
                }, []),
                x = i.useCallback(() => {
                    (h(),
                        n(!1),
                        E(),
                        (m.current = setTimeout(() => {
                            ((m.current = null), r(!1));
                        }, e)));
                }, [e]),
                g = i.useCallback(() => {
                    a.current || o.current || u.current || x();
                }, [x]),
                v = i.useCallback(() => {
                    u.current || ((u.current = !0), c.current?.(!0));
                }, []),
                j = i.useCallback(() => {
                    (u.current && ((u.current = !1), c.current?.(!1)), g());
                }, [g]),
                C = i.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            ((a.current = !0), f());
                        },
                        onMouseLeave: () => {
                            ((a.current = !1), g());
                        },
                        onFocus: () => {
                            ((o.current = !0), f());
                        },
                        onBlur: () => {
                            ((o.current = !1), g());
                        },
                    }),
                    [f, g],
                );
            return (
                i.useEffect(
                    () => () => {
                        (h(), E(), u.current && ((u.current = !1), c.current?.(!1)));
                    },
                    [],
                ),
                { isActive: s, shouldRender: l, deactivate: x, hoverHandlers: C, handleMenuOpen: v, handleMenuClose: j }
            );
        })({ onMenuOpenChange: f }),
        p = j || !0 === a,
        A = !0 === l,
        T = (0, s4.c)({ onMenuOpen: _, onMenuClose: N }),
        O = (0, sf.Pd)(s),
        I = (0, tm.go)(),
        b = (0, tf.E0)(s.config),
        R = (0, h.bG)([tJ.A], () => tJ.A.theme),
        M = R === ef.NJ8.ASH || R === ef.NJ8.DARK,
        L = R === ef.NJ8.LIGHT,
        y = i.useContext(eP.X),
        { visibilityElementRef: Q, almostVisibleInViewport: H } = (0, s7.I)(
            y?.current?.getScrollerNode() ?? null,
            m ?? !1,
        ),
        {
            handleHoverStart: U,
            handleHoverEnd: D,
            isEventWithinParent: F,
        } = (0, s3.B)({ quest: s, questContent: n, contentPosition: c, rowIndex: d, sourceQuestContent: x }),
        q = (0, tD.Lk)({
            isShareable: b,
            questId: s.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: n,
                    ctaContent: ea.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: I,
                    sourceQuestContent: x,
                }),
                [n, x, I],
            ),
        }),
        P = (0, sm.A)(E, Q),
        k = ew.intl.formatToPlainString(ew.t.EAYZAr, { questName: s.config.messages.questName }),
        w = o()(s6.kL, { [s6.Cn]: A, [s6.DM]: p }, u),
        B = (0, r.jsx)(s2.A, {
            showPlaceholder: !H,
            width: 800,
            height: 450,
            className: s6.Tv,
            children: (0, r.jsx)(eu.N, {
                imageAsset:
                    null != g
                        ? { asset: g, assetId: "QuestTileV2", alt: ew.intl.string(ew.t.jnijWz), className: s6.Tv }
                        : void 0,
                videoAsset:
                    null != v
                        ? {
                              asset: v,
                              assetId: "QuestTileV2_heroAnimated",
                              className: o()(s6.Tv, s6.gJ, { [s6.C7]: p }),
                          }
                        : void 0,
                imageSize: { width: 800, height: 450 },
                showVideo: C || !0 === a,
            }),
        }),
        V = A
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      B,
                      (0, r.jsx)(s4.q.Provider, {
                          value: T,
                          children: (0, r.jsx)(s8, {
                              quest: s,
                              questContent: n,
                              sourceQuestContent: x,
                              isHovering: p,
                              isShareable: b,
                              onCopyShareLink: q,
                              onMenuOpen: _,
                              onMenuClose: N,
                          }),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      B,
                      (0, r.jsx)("div", { className: o()(s6.sL, { [s6.Mq]: O === sf.UA.EXPIRED }) }),
                      L
                          ? (0, r.jsx)(em.N, {
                                theme: ef.NJ8.ONYX,
                                disableAdaptiveTheme: !0,
                                children: (e) => (0, r.jsx)("div", { className: o()(e, s6.f5) }),
                            })
                          : (0, r.jsx)("div", { className: o()(s6.f5, { [s6.kg]: M }) }),
                      (0, r.jsxs)("div", {
                          className: s6.qy,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: s6.wx,
                                  children: [
                                      (0, r.jsx)(sy, { quest: s, isHovering: p }),
                                      (0, r.jsx)("div", {
                                          className: o()(s6.$s, { [s6.rk]: p }),
                                          onClick: (e) => e.stopPropagation(),
                                          children: (0, r.jsx)(sE.C, {
                                              questContent: n,
                                              quest: s,
                                              hideLearnMore: !0,
                                              shouldShowDisclosure: !0,
                                              showShareLink: !0,
                                              sourceQuestContent: x,
                                              onOpen: _,
                                              onClose: N,
                                              children: (e) =>
                                                  (0, r.jsx)(e5.D, {
                                                      ...e,
                                                      tag: "div",
                                                      className: s6.E9,
                                                      "aria-label": ew.intl.string(ew.t.DEoVWZ),
                                                      children: (0, r.jsx)(sh.MoreHorizontalIcon, {
                                                          size: "sm",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(s4.q.Provider, {
                                  value: T,
                                  children: (0, r.jsx)(sZ, {
                                      quest: s,
                                      questContent: n,
                                      isHovering: p,
                                      sourceQuestContent: x,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    return (0, r.jsx)("div", {
        id: (0, su.sT)(s.id, t),
        className: s6.uW,
        "data-quest-tile": A ? "featured-v2" : "standard",
        "data-quest-tile-hovered": p ? "" : void 0,
        onMouseEnter: () => {
            (S.onMouseEnter(), U());
        },
        onMouseLeave: () => {
            (S.onMouseLeave(), D());
        },
        onFocus: (e) => {
            F(e) || (S.onFocus(), U());
        },
        onBlur: (e) => {
            F(e) || (S.onBlur(), D());
        },
        children: (0, r.jsx)("article", {
            ref: P,
            "aria-label": k,
            style: { "--custom-featured-tile-width": "291px" },
            className: w,
            children: V,
        }),
    });
}
let s9 = i.memo(function (e) {
    let t = (0, h.bG)([et.A], () => (null != e.questId ? et.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(ec.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === es.uF.QUESTS_EMBED,
              overrideVisibility: e.overrideVisibility,
              onImpression: e.onImpression,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(s5, { ...e, quest: s, impressionRef: t }),
          });
});
function ne(e) {
    let { quest: t } = e,
        { useNewTile: s } = G.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: t6.x3,
        children: (0, r.jsxs)("div", {
            className: t6.B0,
            children: [
                (0, r.jsx)(eh.D, {
                    className: t6.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(sd, {
                          children: (0, r.jsx)(s9, {
                              className: t6.d,
                              quest: t,
                              questContent: es.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: es.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                      })
                    : (0, r.jsx)(su.Ay, {
                          className: t6.d,
                          quest: t,
                          questContent: es.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: es.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var nt = s(97808),
    ns = s(778712),
    nn = s(87664),
    nl = s(427262),
    nr = s(198525),
    ni = s(381351);
let na = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, h.bG)([to.default], () => to.default.getCurrentUser()),
        u = nl.Ay.useName(a),
        c = (0, nn.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(nr.default, {
                    name: u,
                    quest: t,
                    memberListItemRef: l,
                    applicationStream: c,
                    ...e,
                    closePopout: () => {
                        n(!1);
                    },
                }),
            [t, c, u],
        );
    return (0, r.jsx)("div", {
        className: t6.x3,
        children: (0, r.jsxs)("div", {
            className: t6.B0,
            children: [
                (0, r.jsx)(eh.D, {
                    className: ni.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: ni.$Q, children: ew.intl.string(ew.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: ni.k0,
                    children: (0, r.jsx)(tw.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: s,
                        onRequestClose: () => n(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: tw.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(ni.Tn, { [ni.wH]: s }),
                                children: (0, r.jsx)(e5.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: ni.lm,
                                        children: [
                                            (0, r.jsx)(nt.eu, {
                                                size: ns._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: ef.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: ni.Fj,
                                                children: [
                                                    (0, r.jsx)(J.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(J.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: ew.intl.string(ew.t.b9w3bO),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                    }),
                }),
            ],
        }),
    });
};
function no(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, h.bG)([et.A], () => et.A.getQuest(t));
    if (null != (0, h.bG)([et.A], () => et.A.getFetchQuestPreviewError(t)) || null == n) return null;
    function l(e) {
        return null == s || 0 === s.length || s.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sn, { quest: n }), (0, r.jsx)(t3, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ne, { quest: n }), (0, r.jsx)(t3, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(so, { questId: n.id }), (0, r.jsx)(t3, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sr, { quest: n }), (0, r.jsx)(t3, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(na, { quest: n }), (0, r.jsx)(t3, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t5, { quest: n }), (0, r.jsx)(t3, {})] }),
        ],
    });
}
var nu = s(875696);
function nc(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: a } = e,
        u = [
            { value: "quest_bar", label: ew.intl.string(ew.t.rjVPdM) },
            { value: "share_embed", label: ew.intl.string(ew.t["D/gSWS"]) },
            { value: "home_card", label: ew.intl.string(ew.t["5wnpF3"]) },
            { value: "channel_call_header", label: ew.intl.string(ew.t.gWinpQ) },
            { value: "members_list", label: ew.intl.string(ew.t.wpYima) },
            { value: "activity_panel", label: ew.intl.string(ew.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, r.jsx)(t8.Ip, {
        className: o()(nu.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: nu.qE,
            children: [
                (0, r.jsx)(eh.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ew.intl.string(ew.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: nu.pf, children: l }),
                (0, r.jsxs)(t2.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(t2.V.Item, { id: "all", children: ew.intl.string(ew.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(t2.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: nu.tZ, children: (0, r.jsx)("div", { className: nu.Qs, children: t }) }),
            ],
        }),
    });
}
let nd = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: s } = (0, u.zy)(),
                n = i.useMemo(() => new URLSearchParams(s).get($.L1.QUEST_ID) ?? e, [s, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === n) return;
                        let s = new URLSearchParams();
                        (s.set($.L1.TAB, $.NC.PREVIEW_TOOL),
                            s.set($.L1.QUEST_ID, e),
                            t.push(`${ef.BVt.QUEST_HOME}?${s.toString()}`));
                    },
                    [t, n],
                );
            return { questId: n, setQuestId: l };
        })(t),
        a = (0, h.bG)([et.A], () => (null != n ? et.A.getQuest(n) : void 0), [n]),
        o = (0, h.bG)([et.A], () => (null != n ? et.A.getQuestLoadedViaPreview(n) : null), [n]);
    (i.useEffect(() => {
        null != n &&
            (0, tq.dQ)(n).then(() => {
                (0, tq.Gt)(n);
            });
    }, [n]),
        i.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === n && (0, tq.dQ)(n);
            }
            return (
                tF.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    tF.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]));
    let [c, d] = i.useState([]);
    return (0, r.jsx)(nc, {
        className: s,
        controls: (0, r.jsx)(t1, {
            questId: n,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != n && (0, tq.dQ)(n);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(no, { questId: o?.id, selectedSections: c }) : null,
    });
};
var nm = s(203879),
    nh = s(167417),
    nE = s(783977),
    nf = s(305866),
    nx = s(915089),
    ng = s(255604);
function nv(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(J.E, { className: ng.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let nj = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, nx.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(tw.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(nf.l, { className: ng.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var nC = s(368884);
let nS = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, $.Nb)(),
        l = i.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(nj, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, th.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: nC.B }),
                                    (0, r.jsx)(nv, { id: a, children: e.heading }),
                                    (0, r.jsx)(nh.$, {
                                        "aria-labelledby": a,
                                        options: n,
                                        selectedValues: o,
                                        onChange: l(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, r.jsx)("hr", { className: nC.B }),
                    (0, r.jsx)("div", {
                        className: nC.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                (t([]), o());
                            },
                            size: "sm",
                            text: ew.intl.string(ew.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: ew.intl.formatToPlainString(ew.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: nE.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var n_ = s(144228),
    nN = s(715482);
let np = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, h.bG)([_.Ay], () => _.Ay.keyboardModeEnabled),
        o = (0, $.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(nj, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(nv, { id: t, children: ew.intl.string(ew.t.tZXJIS) }),
                    (0, r.jsx)(n_.z, {
                        options: u,
                        onChange: (e) => {
                            (l(e), a || s());
                        },
                        value: n,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                "aria-label": ew.intl.formatToPlainString(ew.t.lPlIMo, { selected: (0, th.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, th.Js)(n),
                icon: nN.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var nA = s(691540),
    nT = s(857250),
    nO = s(97483);
function nI() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, nA.P0)((0, nT.o)(ew.intl.string(ew.t["5ABf1w"]), nO.Ck.FAILURE)),
                eR.default.track(ef.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function nb(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            var l;
            r(((l = e.current?.clientWidth), null == l ? 1 : Math.max(1, Math.min(n, Math.floor((l + s) / (t + s))))));
        }, [r, t, s, n, e]);
    return ((0, eH.g)(e, a, [t, s], { fireOnMount: !0 }), l);
}
var nR = s(768497),
    nM = s(288613);
let nL = 4 * tc.A.Millis.SECOND;
function ny(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = nb(l, s, n);
    return (0, r.jsx)("div", {
        className: nR.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let nQ = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: h } = nI(),
        E = i.useRef(""),
        [f, x] = i.useState(null),
        [g, v] = i.useState(0),
        { useNewTile: j } = G.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: C }, S] = (0, e6.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: nL },
        })),
        _ = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, sA.vc)(e, s, n);
                return null == t ? (h(e), !1) : (x(t.id), v((e) => e + 1), !0);
            },
            [s, n, l, h, a],
        );
    return (i.useImperativeHandle(t, () => ({ scrollToQuest: _ }), [_]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            E.current = "";
            return;
        }
        l || !a || (m.hash !== E.current && _(m.hash.slice(1)) && (E.current = m.hash));
    }, [m.hash, l, a, _]),
    i.useLayoutEffect(() => {
        if (null == f) return;
        let e = document.getElementById(`quest-tile-${f}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            S({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || x(null);
                },
            }));
    }, [f, g, S]),
    l && 0 === s.length)
        ? (0, r.jsx)(X.y, { className: nR.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: nR.y7,
                children: [
                    (0, r.jsx)(eh.D, {
                        variant: "heading-xl/semibold",
                        children: ew.intl.string(c ? ew.t.PBfFnx : ew.t.NqFP6z),
                    }),
                    (0, r.jsx)(J.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: c ? ew.intl.format(ew.t.LdYS1H, { onClick: d }) : ew.intl.string(ew.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(ny, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = f === t.id,
                            i = null != f && !l;
                        return (0, r.jsxs)(
                            e8.animated.div,
                            {
                                className: o()({ [nM.XB]: l, [sc.y]: j }),
                                style: e2(l, i, C),
                                children: [
                                    l &&
                                        (0, r.jsx)("div", {
                                            className: nM.OA,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)("div", { className: nM.E4 }, g),
                                        }),
                                    j
                                        ? (0, r.jsx)(s9, {
                                              quest: t,
                                              questContent: es.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: nR.d,
                                              sourceQuestContent: es.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(su.Ay, {
                                              quest: t,
                                              questContent: es.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: nR.d,
                                              sourceQuestContent: es.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var nH = s(458518),
    nU = s(349095);
let nD = [],
    nF = $.L1.SORT,
    nq = $.L1.FILTER,
    nP = i.forwardRef(function (e, t) {
        let s,
            n,
            l,
            a,
            o = i.useRef(null),
            [c, d] =
                ((s = (0, nH.o)()),
                (n = (0, u.W6)()),
                (l = i.useRef(null)),
                (a = i.useCallback(
                    (e) => {
                        let t = new URLSearchParams(l.current ?? s);
                        for (let [s, n] of Object.entries(e)) null == n ? t.delete(s) : t.set(s, n);
                        ((l.current = t),
                            n.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                l.current = null;
                            }));
                    },
                    [s, n],
                )),
                [s, a]),
            m = i.useMemo(() => {
                var e;
                return (
                    (e = c.get(nF)),
                    ((0, B.uJ)(e) ? null : (Object.values(tA.kL).find((t) => t === e) ?? null)) ?? tA.kL.SUGGESTED
                );
            }, [c]),
            h = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, B.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tA.WQ)(e))
                            .filter(eM.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(nq)) ?? nD,
                [c],
            ),
            E = i.useCallback(
                (e) => {
                    d({ [nF]: e });
                },
                [d],
            ),
            f = i.useCallback(
                (e) => {
                    d({
                        [nq]:
                            0 === e.length
                                ? null
                                : e
                                      .map((e) => {
                                          let { filter: t } = e;
                                          return t;
                                      })
                                      .join(","),
                    });
                },
                [d],
            ),
            {
                quests: x,
                excludedQuests: g,
                isFetchingCurrentQuests: v,
                hasFetched: j,
            } = (0, $.Qh)(
                $.NC.ALL,
                i.useMemo(() => ({ sortMethod: m, filters: h, removeExpiredQuests: !0 }), [m, h]),
            ),
            C = i.useCallback(() => {
                f(nD);
            }, [f]),
            S = i.useRef(null),
            _ = i.useRef(null),
            N = (0, u.zy)(),
            p = (0, u.W6)();
        return (
            i.useEffect(() => {
                "" !== N.hash &&
                    null != S.current &&
                    null != _.current &&
                    (m !== S.current || h !== _.current) &&
                    p.replace({ ...N, hash: void 0 });
            }, [m, h, N, p]),
            i.useEffect(() => {
                S.current = m;
            }, [m]),
            i.useEffect(() => {
                _.current = h;
            }, [h]),
            (0, $.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: x.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        (C(),
                            E(tA.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            }));
                    },
                }),
                [C, E],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: nU.Mj,
                        children: [
                            (0, r.jsx)(eh.D, { variant: "heading-lg/medium", children: ew.intl.string(ew.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: nU.Nf,
                                children: [
                                    (0, r.jsx)(np, { onChange: E, optionClassName: nU.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(nS, { onChange: f, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(nQ, {
                        ref: o,
                        quests: x,
                        excludedQuests: g,
                        isFetching: v,
                        hasFetched: j,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: C,
                    }),
                ],
            })
        );
    });
var nk = s(575593),
    nw = s(462887),
    nB = s(765671),
    nV = s(736653),
    nG = s(162232),
    nW = s(734736),
    nK = s(303136),
    nz = s(842245),
    n$ = s(181713);
let nY = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? n$.A : n$.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(nz.k, t),
        children: s
            ? (0, r.jsx)(nK.A, {
                  preload: "auto",
                  className: nz.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: nz.L, src: l, alt: n }),
    });
};
var nJ = s(57718),
    nX = s(966354);
let nZ = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        E = (0, i.useRef)(null),
        f = (0, h.bG)([to.default], () => to.default.getCurrentUser()),
        { ref: x, height: g = 0 } = (0, nB.Ay)(),
        v = (0, nV.Ay)(),
        j = (0, $.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        C = t.userStatus?.claimedTier ?? 0,
        S = t.config.rewards[C],
        _ = S?.type === e4.l.FRACTIONAL_PREMIUM,
        N = S?.type === e4.l.COLLECTIBLE,
        p = S?.type === e4.l.VIRTUAL_CURRENCY,
        A = S?.collectibleProduct?.items?.[0],
        T = A?.type === nk.R.AVATAR_DECORATION ? A : null,
        O = i.useMemo(
            () =>
                null == S
                    ? null
                    : !0 === p && t.userStatus?.orbQuantityClaimed != null
                      ? ew.intl.format(ew.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : S.name,
            [S, p, t],
        );
    (0, nB.i4)(d, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == d.current || null == E.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = E.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let I = (0, nw.M)(v),
        R = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, el.tW)(t, el.fY.REWARD), [t]),
        L = s ? g + 8 : 0,
        { content_position: y, row_index: Q, ...H } = (0, ea.fF)(es.uF.TROPHY_CASE_CARD);
    function U() {
        (n(!0), eR.default.track(ef.HAw.QUEST_HOVER, { quest_id: t.id, ...H }));
    }
    function D() {
        n(!1);
    }
    function F(e) {
        (c(!0), eR.default.track(ef.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id }));
    }
    return null == S || u
        ? null
        : (0, r.jsx)(e9.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: U,
                  onBlur: D,
                  onMouseEnter: U,
                  onMouseLeave: D,
                  className: o()(nX.kL, { [nX.yo]: s }),
                  children: [
                      null != f &&
                          N &&
                          null != T &&
                          (0, r.jsx)("div", {
                              ref: E,
                              className: nX.FX,
                              style: { top: l },
                              children: (0, r.jsx)(nG.A, {
                                  avatarDecorationOverride: T,
                                  user: f,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      _
                          ? (0, r.jsx)(nW.A, { className: nX.Sl })
                          : p
                            ? (0, r.jsx)(nY, {
                                  className: nX.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(b.A, {
                                    className: nX.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => F(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: nX.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => F(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(nX.Lw, { [nX.en]: I, [nX.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: nX.r$,
                          style: { transform: `translateY(-${L}px)` },
                          children: (0, r.jsx)(nJ.Ay, {
                              logotypeClassName: o()(nX.wm, { [nX.A0]: R }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: x,
                          className: nX.zH,
                          children: [
                              (0, r.jsx)(eh.D, {
                                  className: nX.DD,
                                  variant: "heading-md/semibold",
                                  color: "text-overlay-light",
                                  children: ew.intl.format(ew.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(J.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "text-overlay-light",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: ew.intl.format(ew.t["kXVcV+"], { reward: O, claimedDate: j }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var n0 = s(396478);
function n1(e) {
    let { onClick: t } = e,
        n = (0, nV.Ay)();
    return (0, r.jsxs)(n0.pp, {
        theme: n,
        children: [
            (0, r.jsx)(n0.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(n0.SG, { note: ew.intl.format(ew.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var n8 = s(178093);
function n2(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, $.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(X.y, { className: n8.u })
        : 0 === n.length
          ? (0, r.jsx)(n1, { onClick: () => t($.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(n8.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(nZ, { quest: e }, e.id)),
            });
}
var n4 = s(192308);
let n3 = i.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
function n7(e) {
    let { children: t, sectionIdentifier: s, questId: n, duplicate: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: u,
            highlightCount: c,
            highlightAnimationProgress: d,
        } = i.useContext(n3),
        m = a === n && u === s && !l,
        h = l || (null != a && (a !== n || u !== s)),
        { useNewTile: E } = G.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        f = i.useMemo(() => e2(m, h, d), [m, h, d]);
    return (0, r.jsxs)(e8.animated.div, {
        [e$]: "",
        className: o()({ [nM.XB]: m, [nM.FR]: E, [sc.y]: E }),
        style: f,
        children: [
            m &&
                (0, r.jsx)("div", {
                    className: nM.OA,
                    "aria-hidden": !0,
                    children: (0, r.jsx)("div", { className: nM.E4 }, c),
                }),
            t,
        ],
    });
}
var n6 = s(333007),
    n5 = s(765548),
    n9 = s(897833);
let le = i.forwardRef(function (e, t) {
    var s, n;
    let { containerWidth: l, questIds: a, sectionIdentifier: o } = e,
        u = (0, eb.C)(),
        { variant: c } = G.Mk.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        d = c === G.d.LARGE_MASK_MARGIN,
        m = a.length >= 2,
        h = i.useRef(null),
        E = i.useRef(null),
        f = i.useRef(null),
        x = (0, n4.useHasAnyModalOpen)(),
        { targetQuestId: g, targetSectionIdentifier: v } = i.useContext(n3),
        j = null != g && v === o,
        [C, S] = i.useState(!1),
        [_, N] = i.useState(!1),
        p = i.useCallback((e) => {
            N(e);
        }, []),
        {
            rotation: A,
            activeSlotIndex: T,
            scrollStart: O,
            hasFocusWithin: I,
        } = (function (e) {
            let { numQuests: t, ready: s, rootRef: n, scrollerRef: l } = e,
                [r, a] = i.useState(-2),
                [o, u] = i.useState(0),
                [c, d] = i.useState(!1),
                m = i.useRef(!1),
                h = i.useRef(0),
                E = (0, n5.A)(() => {
                    let e = l.current?.getScrollerNode(),
                        t = n.current;
                    if (null == e || null == t) return null;
                    let s = Array.from(e.querySelectorAll(eY));
                    if (s.length < 4) return null;
                    let r = s[1].offsetLeft - s[0].offsetLeft;
                    return r <= 0 ? null : { node: e, stride: r, rest: eK(e, s[2], t) };
                }),
                f = (0, n5.A)(() => {
                    ((m.current = !1), 0 !== h.current && window.clearTimeout(h.current), (h.current = 0));
                }),
                x = (0, n5.A)(() => {
                    if (m.current) return;
                    let e = E();
                    if (null == e) return;
                    let t = e.node.scrollLeft - e.rest;
                    if (!(1 > Math.abs(t))) {
                        var s, n, l;
                        ((s = e.node),
                            (n = Math.round(t / e.stride)),
                            (l = e.rest),
                            (0, n6.flushSync)(() => {
                                (0 !== n && a((e) => e + n), 0 !== o && u(0));
                            }),
                            s.scrollTo({ left: l, behavior: "instant" }));
                    }
                }),
                g = (0, n5.A)(() => {
                    m.current && (f(), x());
                }),
                v = (0, n5.A)(
                    (e) =>
                        !!s &&
                        !m.current &&
                        ((0, n6.flushSync)(() => {
                            u(e);
                        }),
                        (m.current = !0),
                        (h.current = window.setTimeout(g, 1500)),
                        !0),
                );
            return (
                i.useLayoutEffect(() => {
                    if (!s) return;
                    let e = E();
                    null != e && e.node.scrollTo({ left: e.rest, behavior: "instant" });
                }, [E, t, s]),
                i.useEffect(() => {
                    let e = l.current?.getScrollerNode();
                    if (null == e || !s) return;
                    function t() {
                        d(!0);
                    }
                    function n(t) {
                        ((0, e7.vq)(t.relatedTarget, Node) && e.contains(t.relatedTarget)) || (d(!1), x());
                    }
                    function r() {
                        if (m.current) return void g();
                        let t = e.ownerDocument.activeElement;
                        ((0, e7.vq)(t) && e.contains(t) && t.matches(":focus-visible")) || x();
                    }
                    let i = new ResizeObserver(() => {
                        f();
                    });
                    return (
                        e.addEventListener("focusin", t),
                        e.addEventListener("focusout", n),
                        e.addEventListener("scrollend", r),
                        i.observe(e),
                        () => {
                            (i.disconnect(),
                                e.removeEventListener("scrollend", r),
                                e.removeEventListener("focusin", t),
                                e.removeEventListener("focusout", n),
                                f());
                        }
                    );
                }, [f, g, t, s, l, x]),
                { rotation: r, activeSlotIndex: t > 1 ? 2 + o : 0, scrollStart: v, hasFocusWithin: c }
            );
        })({ numQuests: a.length, ready: null != l && m, rootRef: h, scrollerRef: E }),
        b = C || I || _,
        R = null == l ? 0 : ((s = l + 50), (n = a.length) < 2 ? n : Math.ceil(s / 295) + 2 + 1),
        M = i.useMemo(() => {
            let e = [],
                t = new Set();
            for (let s = 0; s < R; s++) {
                let n = A + s,
                    l = ((n % a.length) + a.length) % a.length;
                (e.push({ questId: a[l], questIndex: l, key: `${a[l]}-${n}`, isDuplicate: t.has(a[l]) }), t.add(a[l]));
            }
            return e;
        }, [a, A, R]),
        L = i.useCallback(
            (e) => {
                let t = M.findIndex((t) => t.questId === e);
                -1 !== t && f.current?.scrollBySteps(t - 2);
            },
            [M],
        );
    return (
        i.useImperativeHandle(t, () => ({ scrollToQuest: L }), [L]),
        (0, r.jsxs)("div", {
            ref: h,
            className: n9.I6,
            children: [
                (0, r.jsx)("div", { className: n9.Cz, "aria-hidden": !0 }),
                (0, r.jsx)(e1, {
                    maskWidth: eG(u),
                    overflowAmount: 25,
                    disableUserScroll: m,
                    groupedArrows: m,
                    onScrollStart: O,
                    autoCycle: m && !(C || _ || I || x || j),
                    singleStep: !0,
                    scrollerRef: E,
                    controlRef: f,
                    maskMarginMultiplier: d ? 2 : 0.75,
                    children: (0, r.jsx)("div", {
                        className: n9.FO,
                        style: { "--custom-featured-tile-gap": "4px" },
                        onPointerEnter: () => S(!0),
                        onPointerLeave: () => S(!1),
                        children: M.map((e, t) =>
                            (0, r.jsx)(
                                n7,
                                {
                                    questId: e.questId,
                                    duplicate: e.isDuplicate,
                                    sectionIdentifier: o,
                                    children: (0, r.jsx)(s9, {
                                        isInFeaturedSection: !0,
                                        isActive: t === T && !b,
                                        onMenuOpenChange: p,
                                        questId: e.questId,
                                        questContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                                        contentPosition: e.questIndex,
                                        rowIndex: 0,
                                        sourceQuestContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                                        sectionIdentifier: o,
                                    }),
                                },
                                e.key,
                            ),
                        ),
                    }),
                }),
            ],
        })
    );
});
var lt = s(915655);
function ls(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(lt.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: o()(tT.m, lt.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: lt.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(tT.m, lt.Vr) }, t),
                ),
            }),
        ],
    });
}
var ln = s(384343);
function ll(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(n3),
        { useNewTile: o } = G.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = G.Mk.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        c = (0, eb.C)(),
        d = a === l,
        m = i.useCallback(
            (e) => {
                let {
                    scrollingType: n,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    scrollingDirection: a,
                } = e;
                (0, er.kO)({
                    scrollingType: d ? ea.pk.AUTO : n,
                    scrollingDirection: a,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    questContent: t,
                    carouselSize: s.length,
                });
            },
            [t, s.length, d],
        ),
        h = u === G.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(e1, {
        maskWidth: eG(c),
        overflowAmount: 25,
        maskMarginMultiplier: h ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${eW(c, h)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: ln.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        n7,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(s9, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: ln.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(su.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === eB.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: ln.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: ln.fu }),
            ],
        }),
    });
}
var lr = s(958538);
let li = tc.A.Millis.WEEK;
function la() {
    let e = et.A.quests;
    if (0 === et.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, sA.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class lo extends h.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        (this.waitFor(et.A), (n = new Map()));
        let t = !1;
        if (null != e) {
            let s = Date.now() - li;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return (this.syncWith([et.A], la), t);
    }
    getState() {
        let e = {};
        for (let [t, s] of n) e[t] = s;
        return { discoveredAtByQuestId: e };
    }
    getDiscoveredAtByQuestId() {
        return n;
    }
}
let lu = new lo(tF.h, {
    QUESTS_MARK_DISCOVERED: function (e) {
        if (null == et.A.getQuest(e.questId)) return !1;
        let t = new Map(n);
        (t.set(e.questId, new Date().toISOString()), (n = t));
    },
});
function lc(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
let ld = function () {
    let e = (0, nl.Gn)(),
        t = (0, $.Cv)(),
        s = (0, h.bG)([et.A], () => et.A.lastFetchedCurrentQuests > 0),
        { quests: n, isFetchingCurrentQuests: l } = (0, $.Qh)($.NC.ALL, {
            sortMethod: tA.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, lr.A)(
            () =>
                n.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            n.map((e) => {
                let { id: t } = e;
                return t;
            }),
            lc,
        ),
        a = (0, tD.T2)(),
        o = (0, h.bG)([lu], () => lu.getDiscoveredAtByQuestId(), []),
        u = i.useMemo(() => (l || !s) && 0 === r.length, [l, s, r.length]),
        { useNewTile: c } = G.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        d = i.useMemo(
            () =>
                u
                    ? []
                    : (function (e) {
                          let {
                                  allQuestIds: t,
                                  hero: s,
                                  discoveredAtByQuestId: n,
                                  isStaff: l,
                                  isPreviewerOnAnyQuest: r,
                                  useNewTile: i = !1,
                              } = e,
                              a = new Map(),
                              o = new Set();
                          function u(e) {
                              if (o.has(e)) return;
                              let t = et.A.getQuestConfig(e);
                              if (null == t) return;
                              let u = (function (e) {
                                  let {
                                          quest: t,
                                          hero: s,
                                          discoveredAtByQuestId: n,
                                          questIdsBySectionIdentifier: l,
                                          isStaff: r,
                                          isPreviewerOnAnyQuest: i,
                                          useNewTile: a = !1,
                                      } = e,
                                      { userStatus: o, preview: u } = et.A.getQuest(t.id) ?? {},
                                      c = [],
                                      d =
                                          null != o &&
                                          null != o.enrolledAt &&
                                          null != o.completedAt &&
                                          null == o.claimedAt;
                                  if ((0, sA.kd)(t) && !d) return r ? [eB.EXPIRED] : null;
                                  if (
                                      (n.has(t.id) && c.push(eB.DISCOVERED),
                                      i && !0 === u && c.push(eB.PREVIEW),
                                      null != o && null != o.enrolledAt && null == o.claimedAt)
                                  )
                                      return [...c, eB.IN_PROGRESS];
                                  let m = !sR(t);
                                  return m && null != s && (0, tf.I0)(s, t.id) && sM(eB.FEATURED, l)
                                      ? [...c, eB.FEATURED]
                                      : new Date(t.expiresAt).valueOf() <= Date.now() + (a ? sO : sT)
                                        ? [...c, eB.ENDING_SOON]
                                        : m && sM(eB.FEATURED, l)
                                          ? [...c, eB.FEATURED]
                                          : (0, tE.ks)(t)
                                            ? [...c, eB.ORB]
                                            : [...c, eB.SPECIAL_QUESTS];
                              })({
                                  quest: t,
                                  hero: s,
                                  discoveredAtByQuestId: n,
                                  questIdsBySectionIdentifier: a,
                                  isStaff: l,
                                  isPreviewerOnAnyQuest: r,
                                  useNewTile: i,
                              });
                              null != u &&
                                  (u.forEach((t) => {
                                      a.set(t, [...(a.get(t) ?? []), e]);
                                  }),
                                  o.add(e));
                          }
                          return (
                              s?.questIds?.forEach((e) => {
                                  let t = et.A.getQuestConfig(e);
                                  null == t || sR(t) || u(e);
                              }),
                              t.forEach((e) => u(e)),
                              eV
                                  .map((e) => {
                                      let t = sb?.[e.identifier];
                                      if (null != e.shouldShowFn && !e.shouldShowFn(l, r))
                                          return { ...e, questIds: [] };
                                      let s =
                                          null != t
                                              ? t(a.get(e.identifier) ?? [], { discoveredAtByQuestId: n })
                                              : (a.get(e.identifier) ?? []);
                                      return { ...e, questIds: s };
                                  })
                                  .filter((e) => {
                                      let { questIds: t } = e;
                                      return t.length > 0;
                                  })
                          );
                      })({
                          allQuestIds: r,
                          hero: a,
                          discoveredAtByQuestId: o,
                          isStaff: e,
                          isPreviewerOnAnyQuest: t,
                          useNewTile: c,
                      }),
            [r, a, o, u, e, t, c],
        ),
        m = i.useCallback((e) => d.find((t) => t.questIds.includes(e))?.identifier ?? null, [d]);
    return { sections: d, isFetchingCurrentQuests: u, getSectionIdentifierForTargetedQuest: m };
};
var lm = s(113775);
let lh = {
        [eB.FEATURED]: es.uF.QUEST_HOME_FEATURED_SECTION,
        [eB.IN_PROGRESS]: es.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [eB.ENDING_SOON]: es.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [eB.ORB]: es.uF.QUEST_HOME_ORB_SECTION,
        [eB.DISCOVERED]: es.uF.QUEST_HOME_DISCOVERED_SECTION,
        [eB.EXPIRED]: es.uF.QUEST_HOME_EXPIRED_SECTION,
        [eB.PREVIEW]: es.uF.QUEST_HOME_PREVIEW_SECTION,
        [eB.SPECIAL_QUESTS]: es.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    lE = 4 * tc.A.Millis.SECOND,
    lf = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l } = e,
            { useNewTile: a, useNewFeaturedTiles: u } = G.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
            { sections: c, isFetchingCurrentQuests: d, getSectionIdentifierForTargetedQuest: m } = ld(),
            h = i.useRef(null),
            E = i.useRef(null),
            { showToast: f } = nI(),
            [x, g] = i.useState(null),
            [v, j] = i.useState(null),
            [C, S] = i.useState(0),
            [_, N] = i.useState(null),
            p = i.useRef(null),
            A = i.useCallback(
                (e) => {
                    N(e.contentRect.width);
                },
                [N],
            );
        (0, eH.g)(h, A, [A], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: T }, O] = (0, e6.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: lE },
            })),
            I = i.useCallback(
                (e, t) => {
                    if (null == e || null == _ || d || n) return !1;
                    t && (0, tq.sB)(e);
                    let s = m(e),
                        l = !0 === t && s !== eB.FEATURED ? eB.DISCOVERED : s;
                    if (null == s) return (f(e), !1);
                    let r = document.getElementById((0, su.sT)(e, l ?? void 0));
                    return (
                        null != r &&
                        (g(e),
                        j(l),
                        S((e) => e + 1),
                        l === eB.FEATURED && a && u
                            ? E.current?.scrollToQuest(e)
                            : r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        O({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || (g(null), j(null));
                            },
                        }),
                        !0)
                    );
                },
                [a, u, g, S, O, d, n, f, _, m],
            );
        (i.useImperativeHandle(t, () => ({ scrollToQuest: I }), [I]),
            i.useLayoutEffect(() => {
                if (null == s) {
                    p.current = null;
                    return;
                }
                p.current !== s && I(s, !0) && (p.current = s);
            }, [s, I]));
        let b = i.useMemo(
            () => ({ targetQuestId: x, targetSectionIdentifier: v, highlightCount: C, highlightAnimationProgress: T }),
            [x, v, C, T],
        );
        return (0, r.jsx)(n3.Provider, {
            value: b,
            children: (0, r.jsx)("div", {
                className: o()(lm.kL, l),
                ref: h,
                children: d
                    ? (0, r.jsx)(ls, { role: "status", "aria-label": ew.intl.string(ew.t.ZTNur7) })
                    : c.length > 0
                      ? c.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: lm.p9,
                                    children: [
                                        (0, r.jsx)(eh.D, {
                                            variant: "heading-lg/semibold",
                                            style: { "--custom-section-title-inset": "2px" },
                                            className: lm.Gf,
                                            children: ew.intl.string(l),
                                        }),
                                        s === eB.FEATURED && a && u
                                            ? (0, r.jsx)(le, {
                                                  ref: E,
                                                  questIds: n,
                                                  containerWidth: _,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(ll, {
                                                  questIds: n,
                                                  rowIndex: t,
                                                  sectionIdentifier: s,
                                                  questContent: lh[s],
                                              }),
                                    ],
                                },
                                s,
                            );
                        })
                      : (0, r.jsxs)("div", {
                            className: lm.y7,
                            children: [
                                (0, r.jsx)(eh.D, {
                                    variant: "heading-xl/semibold",
                                    children: ew.intl.string(ew.t.NqFP6z),
                                }),
                                (0, r.jsx)(J.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: ew.intl.string(ew.t.LhD4yH),
                                }),
                            ],
                        }),
            }),
        });
    });
var lx = s(196765),
    lg = s(121894),
    lv = s(851936);
let lj = (0, lx.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, lv.L)({ location: tA.rE.QUEST_HOME_DESKTOP });
        if (s.info === tj.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        (n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, lg.r)(() => e(l)));
    },
}));
var lC = s(516226),
    lS = s(613956),
    l_ = s(604880),
    lN = s(318808);
function lp(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, sP.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: lS.MY,
        children: [
            (0, r.jsx)("img", { className: lS.Bg, src: lN.Ay, alt: "" }),
            (0, r.jsx)("div", { className: lS.r$, children: (0, r.jsx)("img", { src: l_, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: lS.Nr,
                children: [
                    (0, r.jsx)(eh.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: lS.ky,
                        children: ew.intl.string(ew.t.GXmn57),
                    }),
                    (0, r.jsx)(J.E, {
                        variant: "text-md/normal",
                        className: lS.G3,
                        children: ew.intl.string(ew.t.bWuKqh),
                    }),
                    (0, r.jsx)(g.$, {
                        variant: "primary",
                        text: ew.intl.string(ew.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function lA(e) {
    let { alt: t, ariaLabel: s, ariaHidden: n, role: l, width: i = 288, height: a = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: i, height: a },
        src: "https://cdn.discordapp.com/assets/content/964e407bb0ca2d2738cb00779040e7aaf668b99fdbbe776e69247d582cfcb230.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": n,
        role: l ?? "img",
    });
}
var lT = s(215130);
let lO = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, eb.C)(),
        { useNewTile: n } = G.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = G.Mk.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        u = l === G.d.LARGE_MASK_MARGIN,
        c = n ? 12 : 20,
        d = nb(a, eW(s, u), c, 3);
    return (0, r.jsxs)(j.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: lT.kL,
        ref: a,
        children: [
            (0, r.jsxs)(eh.D, {
                variant: "heading-lg/medium",
                children: [ew.intl.string(ew.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(j.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: lT.y7,
                      children: [
                          (0, r.jsx)(lA, { alt: ew.intl.string(ew.t["Xe+fJM"]) }),
                          (0, r.jsxs)(j.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(eh.D, {
                                      variant: "heading-lg/medium",
                                      children: ew.intl.string(ew.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(eh.D, {
                                      variant: "heading-sm/medium",
                                      children: ew.intl.string(ew.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: lT.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${eW(s, u)}px`,
                          "--custom-quest-grid-gap": `${c}px`,
                      },
                      children:
                          null !== d &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        sd,
                                        {
                                            children: (0, r.jsx)(s9, {
                                                eagerLoadAssets: !0,
                                                questId: e,
                                                questContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                                contentPosition: t,
                                                rowIndex: Math.floor(t / d),
                                                className: o()(lT.d, lT.hS),
                                                sourceQuestContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                            }),
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        su.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / d),
                                            className: lT.d,
                                            sourceQuestContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var lI = s(649852),
    lb = s.n(lI),
    lR = s(379078),
    lM = s(704554),
    lL = s(823784);
let ly = {
        searchType: lR.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(eM.Vq);
        },
        sortType: lR.r.JARO_WINKLER,
        throttleMs: 200,
    },
    lQ = function () {
        let [e, t] = i.useState(""),
            [s, n] = i.useState(null),
            l = (0, h.yK)([et.A], () =>
                (0, $.mn)(Array.from(et.A.quests.values()), { sortMethod: tA.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => lb()(er.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, lL.tv)();
                (null != e &&
                    (0, er.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, lL.l6)());
            }, [o]),
            c = i.useCallback(() => {
                (u(), t(""));
            }, [u]);
        i.useEffect(
            () => () => {
                u();
            },
            [u],
        );
        let d = i.useCallback(
            (e) => {
                if (
                    (n(
                        a
                            ? e
                                  .map((e) => {
                                      let { id: t } = e;
                                      return t;
                                  })
                                  .filter(eM.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: s } = (0, lL.$N)();
                    (s && (0, er.OQ)({ searchSessionId: t.uuid }),
                        o({
                            searchSessionId: t.uuid,
                            searchQuery: r,
                            searchQueryLength: r.length,
                            resultsCount: e.length,
                            hasResults: e.length > 0,
                        }));
                } else c();
            },
            [a, r, o, c],
        );
        return ((0, lM.RT)(r, l, d, ly), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: c });
    };
var lH = s(631001),
    lU = s(758836),
    lD = s(613057),
    lF = s(620241);
let lq = i.createContext({});
function lP(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lq);
    return (0, r.jsxs)(eP.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(H.A, { className: lF.Jo, innerClassName: lF.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lk(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(U.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: f.r });
}
function lw(e) {
    let { onLoadComplete: t, className: s, isVirtualCurrencyEnabled: n } = e,
        l = (0, h.bG)([_.Ay], () => _.Ay.useReducedMotion),
        a = (0, h.bG)([P.A], () => P.A.isFocused()),
        { ref: o, inViewport: u } = (0, nm.p)(),
        c = i.useRef(null);
    if (
        (i.useEffect(() => {
            c?.current != null &&
                (c.current.paused || (a && u && !l)
                    ? c.current.paused && !l && u && a && c.current.play()
                    : c.current.pause());
        }, [l, u, a]),
        n)
    ) {
        let e = (0, k.TM)();
        return (0, r.jsx)(Y._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (n) =>
                (0, r.jsx)(b.A, {
                    ref: (e) => {
                        ((c.current = e), (o.current = e), (n.current = e));
                    },
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    className: s,
                    onProgress: t,
                    "data-mtctest-ignore": "true",
                    controls: !1,
                    children: (0, r.jsx)("source", {
                        src: e
                            ? "https://cdn.discordapp.com/assets/content/529e0aea2b87be4a587568435eaac176bf71b8dd46035db9c88acdee11187eb8.mp4"
                            : "https://cdn.discordapp.com/assets/content/fbd6cf99b9be35ba1d953fd30b81a35c9bd8edf7808b576ef6fc7c65cbc1d9a6.webm",
                        type: e ? "video/mp4" : "video/webm",
                    }),
                }),
        });
    }
    return (0, r.jsx)(Y._M, {
        id: "QuestHomeHeroBackground_bannerImage",
        children: (e) =>
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/fff9144c814ffc3126fdcaf5ec5bc68eff6d09e23ac8af5a3fbe61b05970cda0.png",
                className: s,
                alt: "",
                onLoad: t,
                ref: e,
            }),
    });
}
function lB(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(lF.Tv, { [lF.lJ]: s }),
        children: [
            (0, r.jsx)(tM, {}),
            (0, r.jsx)("div", { className: o()(lF.nz, { [lF.ZZ]: s }) }),
            (0, r.jsx)(lw, {
                onLoadComplete: t,
                className: o()(lF.Fe, { [lF.H4]: s, [lF.Q8]: !s }),
                isVirtualCurrencyEnabled: s,
            }),
        ],
    });
}
function lV(e) {
    let { className: t, onAssetLoad: s } = e,
        { enabled: n } = K.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        l = !n,
        a = i.useCallback(() => {
            l ? window.open(ef.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(ef.MVz.QUESTS_LEARN_MORE));
        }, [l]);
    return (0, r.jsx)(ev, {
        className: t,
        adContentId: l ? tA.yr : tA.uz,
        title: l ? ew.intl.format(ew.t.BCBIlp, {}) : ew.intl.format(ew.t.lmMBfy, {}),
        subtitle: l ? ew.intl.format(ew.t.U9FY0J, {}) : ew.intl.string(ew.t.oWCrBq),
        buttons: l
            ? (0, r.jsxs)(x.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: ew.intl.string(ew.t["1Wm127"]),
                          onClick: () =>
                              (0, O.Cz)({
                                  tab: lU.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: N.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: ew.intl.string(ew.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: ew.intl.string(ew.t.hvVgAZ),
                  onClick: a,
                  icon: v.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lB, { onAssetLoad: s, isVirtualCurrencyEnabled: l }),
    });
}
function lG(e) {
    let { onAssetLoad: t, hasSearchResults: s } = e,
        { isLoading: n } = (0, Y.zT)(),
        { showDefaultBanner: l } = z.C.useConfig({ location: tA.rE.QUEST_HOME_DEFAULT_BANNER });
    return l
        ? (0, r.jsxs)("div", {
              className: o()(lF.iS, { [lF.R]: s }),
              children: [n && (0, r.jsx)(tU, {}), (0, r.jsx)(lV, { className: o()({ [lF.lX]: n }), onAssetLoad: t })],
          })
        : null;
}
function lW(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, Y.zT)(),
        c = l || u;
    return (0, r.jsxs)("div", {
        className: o()(lF.iS, { [lF.R]: i }),
        children: [
            c && (0, r.jsx)(tU, {}),
            !l &&
                (null == n || a
                    ? (0, r.jsx)(lV, { className: o()({ [lF.lX]: u }), onAssetLoad: t })
                    : (0, r.jsx)(tH, { hero: n, isBannerLoading: u, onQuestCtaClick: s })),
        ],
    });
}
let lK = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(s.search).getAll($.L1.AD_CREATIVE_IDS), [s.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        f = (0, h.bG)([T.A], () => T.A.getState("quests")),
        {
            selectedTab: x,
            onSelectTab: g,
            tabs: v,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = lH.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, $.p5)(),
                { enabled: r } = G.Mk.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = G.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                lH.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = i.useCallback((e) => {
                lH.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: $.NC.ALL, label: o ? ew.intl.string(ew.t.Jt6u7B) : ew.intl.string(ew.t["0SzXmi"]) },
                            t
                                ? {
                                      id: $.NC.CLAIMED,
                                      label: o ? ew.intl.string(ew.t["3TVY/R"]) : ew.intl.string(ew.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: $.NC.PREVIEW_TOOL, label: ew.intl.string(ew.t.BDUDau) } : null,
                        ].filter(eM.Vq),
                    [t, l, o],
                ),
                selectedTab: s,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: _, setQuery: b, matchingQuestIds: M, onSearchClose: L } = lQ(),
        { onScroll: H } = (0, Q.G)(),
        U = V.A.getState().getUtmCurrentContext(),
        D = lj((e) => e.registerAssetLoad),
        P = i.useRef(U);
    (i.useEffect(() => {
        P.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = P;
            (0, p.x)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: x,
                },
            });
        }, [x]),
        (0, I.HU)({ location: ew.intl.string(ew.t.JALI2K) }));
    let k = i.useRef(null),
        { enabled: w } = G.Mk.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: W } = G.aD.useConfig({ location: tA.rE.QUEST_HOME_DESKTOP }),
        K = w || W,
        J = i.useRef(null),
        X = i.useCallback((e) => {
            J.current?.scrollToQuest(e);
        }, []),
        Z = i.useMemo(() => ((0, B.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: ee, isLoading: et, confirmedEmpty: es } = (0, tD.lg)(l[0] ?? null),
        { showHeroPlaceholder: en } = (0, z.x)(),
        el = i.useCallback(() => {
            ((0, F.Y)({
                pageType: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ef.JJy.ORBS_BALANCE_MENU,
                ctaObject: ef.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, O.Cz)({ tab: lU.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU }));
        }, []);
    (i.useEffect(() => {
        (0, S.I)(ef.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            y.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != f) return;
            let e = new URLSearchParams(s.search),
                l = e.get($.L1.TAB);
            if (l === $.NC.PREVIEW_TOOL) {
                let t = e.get($.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: lD.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== $.NC.PREVIEW_TOOL) {
                let t = (0, B.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get($.L1.SORT),
                    r = e.get($.L1.FILTER),
                    i = e.get($.L1.AD_CREATIVE_IDS);
                A.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: lD.XK.QUEST_HOME,
                    params: { questId: (0, B.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, f, n.action, s.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(E.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]));
    let er = i.useCallback(
            (e) => {
                (n.replace({ ...n.location, hash: void 0 }), k.current?.scrollToTop({ animate: !1 }), g(e), L());
            },
            [n, g, L],
        ),
        ei = i.useMemo(() => null != M && K, [M, K]),
        ea = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        eo = i.useMemo(() => ({ onScroll: H, scrollerRef: k }), [H, k]),
        eu = et && !en;
    return a
        ? (0, r.jsx)(lp, { adCreativeIds: l })
        : (0, r.jsx)(lC.M.Provider, {
              value: ea,
              children: (0, r.jsx)(lq.Provider, {
                  value: eo,
                  children: (0, r.jsx)("div", {
                      className: o()(lF.kL, { [lF.KY]: !t }),
                      children: (0, r.jsxs)(lP, {
                          header: (0, r.jsx)(lk, {
                              selectedTab: x,
                              onSelectTab: er,
                              tabs: v,
                              endContent: (0, r.jsxs)(j.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      K &&
                                          (0, r.jsx)(C.I, {
                                              query: _,
                                              onChange: b,
                                              placeholder: ew.intl.string(ew.t.y10TI2),
                                              onClear: L,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(q.SS, {
                                          analyticsPage: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: q.cP.END,
                                          ctaText: ew.intl.string(ew.t["J+vlIR"]),
                                          ctaOnClick: el,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              x === $.NC.ALL &&
                              !eu &&
                              (0, r.jsx)(
                                  Y.y5,
                                  {
                                      source: tA.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: ee?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: es
                                          ? (0, r.jsx)(lG, { onAssetLoad: D, hasSearchResults: ei })
                                          : (0, r.jsx)(lW, {
                                                onAssetLoad: D,
                                                onQuestCtaClick: X,
                                                hasSearchResults: ei,
                                                questHomeHero: ee,
                                                isLoadingQuestHomeHero: et,
                                            }),
                                  },
                                  ee?.id,
                              ),
                          children: [
                              ei && null != M && (0, r.jsx)(lO, { matchingQuestIds: M }),
                              x === $.NC.CLAIMED
                                  ? (0, r.jsx)(n2, { onSelectTab: er, className: ei ? lF.R : void 0 })
                                  : x === $.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(nd, { className: ei ? lF.R : void 0 })
                                    : K
                                      ? (0, r.jsx)(lf, {
                                            className: ei ? lF.R : void 0,
                                            ref: J,
                                            deepLinkedQuestId: Z,
                                            isLoadingQuestHomeHero: et,
                                        })
                                      : (0, r.jsx)(nP, { ref: J }),
                          ],
                      }),
                  }),
              }),
          });
};
