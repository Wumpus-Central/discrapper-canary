let s;
(n.r(t), n.d(t, { default: () => lB }), n(323874), n(14289), n(35956));
var l,
    r = n(477900),
    i = n(582128),
    a = n(503698),
    o = n.n(a),
    u = n(806163),
    c = n(613412),
    d = n(607399),
    m = n(323889),
    E = n(855986),
    h = n(554146),
    f = n(577473),
    g = n(825484),
    x = n(821609),
    v = n(509434),
    j = n(331322),
    C = n(683438),
    S = n(944791),
    _ = n(775602),
    N = n(793574),
    p = n(139286),
    A = n(197111),
    O = n(10088),
    T = n(969935),
    I = n(726249),
    b = n(607470),
    R = n(826673),
    M = n(840251),
    y = n(688151);
let L = new M.E([], y.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var Q = n(899647),
    H = n(979590),
    U = n(651266),
    D = n(783531),
    F = n(318346),
    P = n(863705),
    k = n(531685),
    q = n(676279),
    w = n(975571),
    B = n(240248),
    V = n(87549),
    W = n(914313),
    G = n(945810);
let K = (0, G.mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var z = n(860996),
    $ = n(61387),
    Y = n(557637),
    X = n(834730),
    J = n(939249),
    Z = n(289873),
    ee = n(438457),
    et = n(144779),
    en = n(122760),
    es = n(506988),
    el = n(760914),
    er = n(18437),
    ei = n(590202),
    ea = n(574112),
    eo = n(415441),
    eu = n(280905),
    ec = n(139384),
    ed = n(43990),
    em = n(534514),
    eE = n(770178),
    eh = n(561844),
    ef = n(652215),
    eg = n(691388);
function ex(e, t) {
    let { row_index: n, ...s } = (0, ei.fF)(es.uF.QUEST_HOME_HERO);
    (0, eh.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: s,
        sourceQuestContent: es.uF.QUEST_HOME_HERO,
    });
}
let ev = function (e) {
    let {
            adContentId: t,
            topContent: n,
            title: s,
            subtitle: l,
            buttons: a,
            background: u,
            className: c,
            overlay: d,
            ref: m,
        } = e,
        [E, h] = i.useState("display-lg"),
        f = i.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        g = (0, eE.w)(f, [], { fireOnMount: !0 }),
        x = i.useCallback(() => ex(t, ef.HAw.QUEST_HOVER), [t]),
        v = i.useCallback(() => ex(t, ef.HAw.QUEST_HOVER_OFF), [t]);
    return (0, r.jsx)(ed.N, {
        theme: ef.NJ8.ONYX,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(eg.iE, e, c),
                onMouseEnter: x,
                onMouseLeave: v,
                ref: (e) => {
                    ((g.current = e), "function" == typeof m ? m(e) : null != m && (m.current = e));
                },
                children: (0, r.jsxs)("div", {
                    className: eg.FG,
                    children: [
                        d,
                        (0, r.jsxs)(j.B, {
                            className: o()(eg.Qs, { [eg.X]: null != d && !1 !== d }),
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(j.B, {
                                    className: eg.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(em.D, {
                                                    color: "text-strong",
                                                    variant: E,
                                                    className: eg.DD,
                                                    children: s,
                                                }),
                                                (0, r.jsx)(X.E, {
                                                    color: "text-strong",
                                                    variant: "body-md/normal",
                                                    className: eg.VA,
                                                    children: l,
                                                }),
                                            ],
                                        }),
                                        a,
                                    ],
                                }),
                            ],
                        }),
                        u,
                    ],
                }),
            }),
    });
};
var ej = n(113597);
(n(134528), n(947204));
var eC = n(749401),
    eS = n(635377),
    e_ = n.n(eS),
    eN = n(998304),
    ep = n(515718);
let eA = new (e_())({ max: 50 });
var eO = n(49491),
    eT = n(454908),
    eI = n(418842),
    eb = n(129230),
    eR = n(403362),
    eM = n(856383);
let ey = (0, G.mj)({
    name: "2026-06-hero-shelf-ad-tile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eL = n(792620);
n(321073);
var eQ = n(535185),
    eH = n(408278),
    eU = n(548411),
    eD = n(554830),
    eF = n(516521),
    eP = n(321503),
    ek = n(646514),
    eq = n(792996),
    ew =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let eB = [
    { type: "featured-quests", identifier: "featured", title: eq.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: eq.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: eq.t.P0lmqC },
    { type: "quests", identifier: "orb", title: eq.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: eq.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: eq.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: eq.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: eq.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function eV(e) {
    return ek.A.space.SPACE_XL.resolve({ density: e });
}
function eW(e, t) {
    return (1220 - 2 * eV(e) * (t ? 2 : 0.75)) / 3;
}
function eG(e, t, n) {
    return e.scrollLeft + (t.getBoundingClientRect().left - (n.getBoundingClientRect().left + 2));
}
var eK = n(915850);
let ez = "data-scroll-target",
    e$ = `[${ez}]`,
    eY = { anchors: [], windowSizes: [] },
    eX = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])',
    eJ = { overflowX: "hidden" };
function eZ(e, t, n) {
    let s = t.length - 1,
        l = Math.max(0, e.scrollWidth - e.clientWidth),
        r = n
            ? t.map((e) => Math.min(l, Math.max(0, e)))
            : t.map((t, n) => (0 === n ? 0 : n === s ? l : t - e.clientWidth / 2));
    function i(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: r.reduce((e, t, n) => (i(t) < i(r[e]) ? n : e), 0), scrollLefts: r };
}
let e0 = i.memo(function (e) {
    let {
            children: t,
            className: n,
            itemSelector: s = e$,
            maskWidth: l = 24,
            overflowAmount: a = 0,
            maskMarginMultiplier: u = 1,
            disableUserScroll: c = !1,
            groupedArrows: d = !1,
            scrollerRef: m,
            controlRef: h,
            onScrollStart: f,
            onScrollEnd: g,
            singleStep: x = !1,
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
        [A, O] = i.useState(!1),
        [T, I] = i.useState(!1),
        [b, R] = i.useState(!0),
        [M, y] = i.useState([]),
        [L, Q] = i.useState([]),
        H = (0, E.bG)([_.Ay], () => _.Ay.useReducedMotion) ? "auto" : "smooth",
        U = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (O(e.scrollLeft > 0), I(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        D = i.useCallback(() => {
            let { anchors: e, windowSizes: t } = (function (e) {
                let {
                        scrollerRef: t,
                        containerRef: n,
                        itemSelector: s,
                        maskMarginMultiplier: l,
                        maskWidth: r,
                        singleStep: i,
                    } = e,
                    a = t.current?.getScrollerNode(),
                    o = n.current;
                if (null == a || null == o || a.scrollWidth <= a.clientWidth) return eY;
                let u = Array.from(a.querySelectorAll(s));
                if (0 === u.length) return eY;
                let c = a.clientWidth - 2 * r * l;
                function d(e) {
                    return e.offsetLeft + e.offsetWidth;
                }
                let m = i ? [] : [0],
                    E = [],
                    h = 0;
                for (let e = 0; e < u.length; e++) {
                    h < e && (h = e);
                    let t = u[e].offsetLeft;
                    for (; h + 1 < u.length && d(u[h + 1]) - t <= c;) h++;
                    let n = h - e + 1;
                    if ((E.push(n), i)) {
                        m.push(eG(a, u[e], o));
                        continue;
                    }
                    if (h === u.length - 1) break;
                    e > 0 && m.push((t + d(u[h])) / 2);
                }
                return E.length < 2 ? eY : (i || m.push(a.scrollWidth), { anchors: m, windowSizes: E });
            })({
                scrollerRef: j,
                containerRef: p,
                itemSelector: s,
                maskWidth: l,
                maskMarginMultiplier: u,
                singleStep: x,
            });
            (Q(t), y((t) => (t.length === e.length && t.every((t, n) => t === e[n]) ? t : e)));
        }, [l, s, u, x, y]),
        F = i.useCallback(() => {
            if (null == p.current || p.current?.clientWidth === 0) return R(!0);
            R(p.current?.clientWidth >= 1260);
        }, [p]),
        P = i.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    s = j.current?.getScrollerNode();
                if (null == s || M.length < 2 || (null != f && !f(e * n))) return !1;
                let { currentIndex: l, scrollLefts: r } = eZ(s, M, x),
                    i = x ? n : (L[l] ?? 1),
                    a = Math.max(0, Math.min(M.length - 1, l + e * i));
                return ((S.current = t), s.scrollTo({ left: r[a], behavior: H }), !0);
            },
            [H, M, L, x, f],
        ),
        k = (function (e) {
            let { isEnabled: t, advance: n } = e,
                s = i.useRef(null),
                l = i.useCallback(() => {
                    t && n(1, ei.pk.AUTO);
                }, [t, n]),
                r = i.useCallback(() => {
                    t &&
                        null != s.current &&
                        (window.clearInterval(s.current), (s.current = window.setInterval(l, 3500)));
                }, [t, l]);
            return (
                i.useEffect(
                    () => (
                        t && (s.current = window.setInterval(l, 3500)),
                        () => {
                            null != s.current && window.clearInterval(s.current);
                        }
                    ),
                    [t, l],
                ),
                r
            );
        })({ isEnabled: v, advance: P }),
        q = i.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                P(e, t, n) && k();
            },
            [P, k],
        ),
        w = i.useCallback(
            (e) => {
                0 !== e && q(e > 0 ? 1 : -1, ei.pk.AUTO, Math.abs(e));
            },
            [q],
        );
    i.useImperativeHandle(h, () => ({ scrollBySteps: w }), [w]);
    let B = i.useCallback(
            (e, t) => {
                let n = j.current?.getScrollerNode();
                if (null == n || null == e || !n.contains(e)) return;
                let s = n.getBoundingClientRect(),
                    r = e.getBoundingClientRect(),
                    i = s.left + l - r.left,
                    a = r.right - (s.right - l);
                (i <= 0 && a <= 0) ||
                    ((S.current = ei.pk.MANUAL),
                    i > 0
                        ? n.scrollTo({ left: n.scrollLeft - i, behavior: t })
                        : a > 0 && n.scrollTo({ left: n.scrollLeft + a, behavior: t }));
            },
            [l],
        ),
        V = i.useCallback(
            (e) => {
                let t = e.target;
                if (!t.matches(":focus-visible")) return;
                let n = t.closest(s);
                null != n && B(n, H);
            },
            [s, B, H],
        ),
        W = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            if (null == e) return;
            let { currentIndex: t } = eZ(e, M, x),
                n = S.current ?? ei.pk.MANUAL;
            S.current = null;
            let s = N.current;
            N.current = e.scrollLeft;
            let l = e.scrollLeft > s ? ei.VU.RIGHT : ei.VU.LEFT,
                r = L[t] ?? 1;
            g?.({
                scrollingType: n,
                scrollWindowStartIndex: t,
                scrollWindowEndIndex: t + r - 1,
                scrollWindowSize: r,
                scrollingDirection: l,
            });
        }, [g, M, L, x]),
        G = i.useCallback(
            (e) => {
                let t = "ArrowLeft" === e.key ? -1 : +("ArrowRight" === e.key);
                if (0 === t) return;
                e.preventDefault();
                let n = j.current?.getScrollerNode();
                if (null == n) return;
                let l = Array.from(n.querySelectorAll(s)),
                    r = e.target.closest(s),
                    i = null == r ? -1 : l.indexOf(r),
                    a = l[i + t],
                    o = null == a ? null : a.matches(eX) ? a : a.querySelector(eX);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && B(a, "instant"));
            },
            [s, B],
        ),
        K = i.useCallback(() => {
            (U(), D(), F());
        }, [U, D, F]);
    (0, eQ.g)(p, K, [], { fireOnMount: !0 });
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
        className: o()(n, eK.m7),
        ref: p,
        style: $,
        children: [
            d &&
                (0, r.jsxs)("div", {
                    className: eK.rU,
                    children: [
                        (0, r.jsx)(eH.K, {
                            icon: eU.ArrowLargeLeftIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(-1, ei.pk.ARROW),
                            disabled: !A,
                            "aria-label": eq.intl.string(eq.t.vgfxaA),
                            tabIndex: -1,
                        }),
                        (0, r.jsx)(eH.K, {
                            icon: eD.ArrowLargeRightIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(1, ei.pk.ARROW),
                            disabled: !T,
                            "aria-label": eq.intl.string(eq.t.XiOHRX),
                            tabIndex: -1,
                        }),
                    ],
                }),
            !d &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(eK.k9, eK.RW, { [eK.Q2]: A }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(eH.K, {
                                icon: eU.ArrowLargeLeftIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(-1, ei.pk.ARROW),
                                disabled: !A,
                                "aria-label": eq.intl.string(eq.t.vgfxaA),
                                tabIndex: -1,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: o()(eK.k9, eK.K3, { [eK.Q2]: T }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(eH.K, {
                                icon: eD.ArrowLargeRightIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(1, ei.pk.ARROW),
                                disabled: !T,
                                tabIndex: -1,
                                "aria-label": eq.intl.string(eq.t.XiOHRX),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: o()({ [eK.sF]: A && b, [eK.RC]: T && b, [eK.Ni]: z && !A, [eK.GA]: z && !T }),
                children: (0, r.jsx)(eF.zC, {
                    ref: C,
                    orientation: "horizontal",
                    onScroll: U,
                    onScrollEnd: W,
                    onFocusCapture: V,
                    onKeyDown: G,
                    style: c ? eJ : void 0,
                    className: o()({ [eK.x2]: z, [eK.$o]: x }, eK.XG),
                    children: (0, r.jsxs)(eP.X.Provider, {
                        value: j,
                        children: [
                            t,
                            !x &&
                                M.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: eK.fw, style: { insetInlineStart: `${e}px` } },
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
var e1 = n(120692);
function e2(e, t, n) {
    if (null != n) {
        if (e) {
            let e = n.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] });
            return {
                "--custom-quest-highlight-blur": (0, e1.to)([e], (e) => `${25 * e}px`),
                "--custom-quest-highlight-alpha": (0, e1.to)([e], (e) => `${e}`),
            };
        }
        if (t)
            return { opacity: (0, e1.to)([n.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var e5 = n(440703),
    e4 = n(731355),
    e8 = n(621466),
    e3 = n(717421),
    e6 = n(559106),
    e7 = n(805251),
    e9 = n(406810),
    te = n(628284),
    tt = n(65154),
    tn = n(687966),
    ts = n(155718),
    tl = n(496431),
    tr = n(640708),
    ti = n(287809),
    ta = n(5377),
    to = n(927813),
    tu = n(541830),
    tc = n(971649),
    td = n(651892),
    tm = n(417404),
    tE = n(814793),
    th = n(453384),
    tf = n(639701),
    tg = n(398025),
    tx = n(221596),
    tv = n(818348),
    tj = n(499621);
function tC(e) {
    let [t, n] = i.useState(!1),
        s = i.useCallback(() => {
            t || (n(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (n(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: s, onMouseLeave: l, onFocus: s, onBlur: l } };
}
function tS(e) {
    let { hero: t, contentPosition: n, impressionRef: s } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = tC(
            i.useCallback(
                (e) => {
                    (0, eh.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, e8.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(tv.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, e3.z)({ hoverSpring: +!!a, config: e1.config.gentle }),
        d = i.useCallback(() => {
            (0, ea._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: es.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                    position: n,
                    impressionId: s.current?.getId(),
                    sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, n, s]);
    return (0, r.jsxs)(J.D, {
        tag: "div",
        className: o()(tj.FW, tj.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [ez]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: tj.Ve,
                children: (0, r.jsx)(eo.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tj.pv, tj.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tj.pv, tj.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(e1.animated.div, {
                className: tj.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(x.$, {
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
function t_(e) {
    let { hero: t, game: n, contentPosition: s, shelfImage: l, impressionRef: a } = e,
        u = i.useRef(null),
        { isHovering: c, hoverProps: d } = tC(
            i.useCallback(
                (e) => {
                    (0, eh.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = u.current;
        (0, e8.vq)(e, HTMLVideoElement) && (c ? ((e.currentTime = 0), e.play().catch(tv.tE)) : e.pause());
    }, [c]);
    let E = i.useCallback(() => {
            (0, ea._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: es.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: a.current?.getId(),
                    sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, a]),
        h = i.useRef(null),
        [f, g] = i.useState({ top: !1, bottom: !1 }),
        v = i.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                n = e.getDistanceFromBottom() > 4;
            g((e) => (e.top === t && e.bottom === n ? e : { top: t, bottom: n }));
        }, []);
    i.useLayoutEffect(() => {
        v();
    }, [v]);
    let { topFade: j, bottomFade: C } = (0, e3.z)({
            topFade: +!!f.top,
            bottomFade: +!!f.bottom,
            config: { ...e1.config.gentle, duration: 100 },
        }),
        S = i.useMemo(() => {
            let e = null != n.firstReleaseDate ? new Date(n.firstReleaseDate).getFullYear() : 0 / 0,
                t = isNaN(e) ? null : e,
                s = n.genres.at(0);
            return [
                t,
                null != s ? (0, tu.du)(s) : null,
                n.getCompanyByRole(ts.wk.DEVELOPER).at(0)?.name ?? null,
            ].filter((e) => null != e);
        }, [n]),
        _ = i.useMemo(() => S.length > 0, [S]);
    return (0, r.jsxs)(J.D, {
        tag: "div",
        className: o()(tj.FW, tj.n7),
        onClick: E,
        [ez]: !0,
        ...d,
        children: [
            (0, r.jsx)("div", { className: tj.hu }),
            (0, r.jsx)("div", {
                className: tj.fQ,
                children: (0, r.jsx)(eo.N, {
                    showVideo: !0,
                    assetRef: u,
                    imageAsset:
                        null != l
                            ? {
                                  asset: { url: l, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tj.pv, tj.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tj.pv, tj.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsxs)("div", {
                className: tj.iq,
                children: [
                    (0, r.jsxs)("div", {
                        className: tj.o7,
                        children: [
                            (0, r.jsx)(em.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: n.name,
                            }),
                            _ &&
                                (0, r.jsx)("p", {
                                    className: tj.c9,
                                    children: S.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(X.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: e,
                                                    }),
                                                    t < S.length - 1 && (0, r.jsx)(tr.A, { width: 3, height: 3 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsx)(e1.animated.div, {
                        className: tj.hX,
                        style: {
                            maskImage: (0, e1.to)(
                                [j, C],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(e6.vN, {
                            children: (0, r.jsx)(eF.Ch, {
                                ref: h,
                                className: tj.hw,
                                onScroll: v,
                                fade: !c,
                                children: (0, r.jsx)(X.E, {
                                    variant: "body-md/normal",
                                    color: "text-muted",
                                    className: tj.W1,
                                    children: n.description,
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)(x.$, {
                        fullWidth: !0,
                        variant: "secondary",
                        onClick: (e) => {
                            (e.stopPropagation(), E());
                        },
                        text: t.cta.buttonLabel,
                    }),
                ],
            }),
        ],
    });
}
function tN(e) {
    let { heroId: t, quest: n, onQuestCtaClick: s, contentPosition: l } = e,
        a = i.useMemo(() => new Date(n.config.expiresAt), [n.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: h } = (0, tl.A)(a, to.A.Millis.MINUTE),
        f = i.useMemo(
            () =>
                (0, ta.uN)(
                    { days: u, hours: c, minutes: d, seconds: h },
                    { days: eq.t["Ux/De1"], hours: eq.t.Lzd5Ie, minutes: eq.t.odmpbP },
                ),
            [u, c, d, h],
        ),
        g = (0, E.bG)([ti.default], () => ti.default.getCurrentUser()),
        v = i.useMemo(() => (0, tm.mq)(n.config, g), [n.config, g]),
        C = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, td.xv)(e).type) {
                        case e5.l.IN_GAME:
                            return eq.intl.string(eq.t["O/J2kr"]);
                        case e5.l.COLLECTIBLE:
                            return eq.intl.string(eq.t.Jg17Ut);
                        case e5.l.VIRTUAL_CURRENCY:
                            return eq.intl.string(eq.t.ElYQFS);
                        default:
                            return (0, tm.mq)(e, t);
                    }
                })(n.config, g),
            [n.config, g],
        ),
        { completedRatio: S, completedRatioDisplay: _ } = (0, $.O9)(n),
        N = i.useMemo(() => (0, tm.wo)(n.config, g), [n.config, g]),
        p = (0, er.WS)(),
        A = (0, tc.wW)(),
        { isHovering: O, hoverProps: T } = tC(
            i.useCallback(
                (e) => {
                    p({
                        adContentId: t,
                        relatedQuestId: n.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, p, l, n.id],
            ),
        ),
        { hoverSpring: I } = (0, e3.z)({ hoverSpring: +!!O, config: e1.config.gentle }),
        b = i.useCallback(() => {
            (s(n.id),
                (0, ee.r)({
                    type: et.F.CLICK_INTERNAL,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    adCreativeId: t,
                    relatedQuestId: n.id,
                    questContentCTA: ei.Cy.VIEW_QUESTS,
                    surfaceId: es.uF.QUEST_HOME_HERO_SHELF,
                    sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: l,
                    impressionId: A(),
                }));
        }, [s, t, n.id, l, A]);
    return (0, r.jsxs)(J.D, {
        tag: "div",
        className: o()(tj.FW, tj.$R),
        onClick: b,
        "aria-label": eq.intl.string(eq.t["th2+0j"]),
        [ez]: !0,
        ...T,
        children: [
            (0, r.jsx)("div", { className: tj.hu }),
            (0, r.jsxs)(j.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(e7.E, { type: { text: C } }),
                    (0, r.jsx)(e1.animated.div, {
                        style: { opacity: (0, tg.a)(I.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(e7.E, { type: { text: f }, icon: e9.ClockIcon }),
                    }),
                ],
            }),
            (0, r.jsx)(e1.animated.div, {
                className: tj.Tr,
                style: { transform: I.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(th.A, {
                    percentComplete: S,
                    overlayText: O && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tf.A, {
                        quest: n,
                        location: tx.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                        questContent: es.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: O,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(e1.animated.div, {
                className: tj.tw,
                style: {
                    opacity: (0, tg.a)(I.to([0, 1], [1, 0])),
                    transform: I.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(j.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(X.E, {
                            variant: "body-md/semibold",
                            color: "text-strong",
                            className: tj.Ht,
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
                                        (0, r.jsx)(te.CircleCheckIcon, {
                                            size: "xs",
                                            color: ek.A.colors.ICON_MUTED.css,
                                        }),
                                        (0, r.jsx)(X.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: n.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, tE.pv)(n.config) === e4.Z.VIDEO
                                            ? (0, r.jsx)(tt.CirclePlayIcon, {
                                                  size: "xs",
                                                  color: ek.A.colors.ICON_MUTED.css,
                                              })
                                            : (0, r.jsx)(tn.GameControllerIcon, {
                                                  size: "xs",
                                                  color: ek.A.colors.ICON_MUTED.css,
                                              }),
                                        (0, r.jsx)(X.E, {
                                            variant: "body-sm/normal",
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
            (0, r.jsx)(e1.animated.div, {
                className: tj.um,
                style: { transform: I.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), b());
                    },
                    text: eq.intl.string(eq.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var tp = n(531525),
    tA = n(726356);
function tO(e) {
    let { hero: t, shelfQuests: n, isBannerLoading: s, onQuestCtaClick: l } = e,
        a = (0, eI.C)(),
        { enabled: o } = ey.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        u = i.useMemo(
            () =>
                o
                    ? (n
                          .map((e) => (0, eL.xc)(e) ?? (0, eL._3)(e)?.at(0) ?? null)
                          .filter(eR.Vq)
                          .at(0) ?? null)
                    : null,
            [n, o],
        ),
        { isLoading: c, data: d, error: E } = (0, eT.I)(u),
        h = (0, eO.A)(d),
        f = o && null != d && !h;
    i.useEffect(() => {
        o &&
            null != u &&
            null != E &&
            (eb.default.track(ef.HAw.AD_ASSET_LOADING_FAILURE, {
                source: tx.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                ad_creative_id: t.id,
                ad_creative_type: m.p.QUEST_HOME_HERO,
                application_ids: [u],
            }),
            eM.A.captureException(E, { tags: { source: tx.rE.QUEST_HOME_HERO_SHELF_DESKTOP } }));
    }, [o, E, t.id, u]);
    let g = i.useMemo(
            () => (f ? (null != t.shelfImage ? t.shelfImage : (d?.getCoverURL(512) ?? null)) : null),
            [f, t, d],
        ),
        x = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                [n, s] = i.useState(void 0);
            return (
                i.useEffect(() => {
                    let n = !1;
                    return (
                        (null != e
                            ? (async function (e) {
                                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                                      n = eA.get(`${e}-${t}`);
                                  if (null != n) return n;
                                  let s = (
                                      await new Promise((n, s) => {
                                          let l = new Image();
                                          ((l.crossOrigin = "Anonymous"),
                                              (l.onerror = (e) => {
                                                  (s(e),
                                                      null != l && ((l.onerror = null), (l.onload = null)),
                                                      (l = null));
                                              }),
                                              (l.onload = () => {
                                                  null != l
                                                      ? (n((0, ep.Sf)(l, t, 10)),
                                                        (l.onerror = null),
                                                        (l.onload = null),
                                                        (l = null))
                                                      : s("image is null");
                                              }),
                                              (l.src = e));
                                      })
                                  ).map((e) => {
                                      let [t, n, s] = e;
                                      return (0, eN.Ob)(t, n, s);
                                  });
                                  return (eA.set(`${e}-${t}`, s), s);
                              })(e, t)
                            : Promise.resolve(void 0)
                        )
                            .then((e) => {
                                n || s(e);
                            })
                            .catch(() => {}),
                        () => {
                            n = !0;
                        }
                    );
                }, [e, t]),
                n
            );
        })(
            i.useMemo(() => (null != g ? (0, el.UX)(g, { format: "webp", width: 400, height: 600 }) : null), [g]),
            8,
        ),
        v = i.useMemo(() => (null == x ? null : (0, eC.Z)(x)), [x]),
        C = i.useMemo(() => {
            if (null != v)
                return {
                    "--custom-hero-shelf-scrim-gradient-start": v[0],
                    "--custom-hero-shelf-scrim-gradient-end": v[1],
                };
        }, [v]);
    return s || c
        ? (0, r.jsx)(tT, { numShelfCards: n.length + 1 })
        : (0, r.jsx)(e0, {
              className: tA.vo,
              overflowAmount: 25,
              maskWidth: eV(a),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(j.B, {
                  className: tA.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  style: C,
                  children: [
                      !o &&
                          (0, r.jsx)(eu.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: es.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tS, { hero: t, contentPosition: 0, impressionRef: n }),
                                  }),
                          }),
                      f &&
                          (0, r.jsx)(eu.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: es.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(t_, {
                                          hero: t,
                                          game: d,
                                          shelfImage: g,
                                          contentPosition: 0,
                                          impressionRef: n,
                                      }),
                                  }),
                          }),
                      n.map((e, n) =>
                          (0, r.jsx)(
                              eu.Z,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  relatedQuestId: e.id,
                                  questContent: es.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: n + 1,
                                  sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                                  children: (s) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              s.current = e;
                                          },
                                          children: (0, r.jsx)(tN, {
                                              heroId: t.id,
                                              quest: e,
                                              onQuestCtaClick: l,
                                              contentPosition: n + 1,
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
function tT(e) {
    let { className: t, numShelfCards: n } = e,
        { enabled: s } = ey.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        l = (0, eI.C)(),
        i = s ? Math.max(n, 3) : Math.max(n, 4);
    return (0, r.jsx)(e0, {
        className: o()(tA.vo, t),
        overflowAmount: 25,
        maskWidth: eV(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(j.B, {
            className: tA.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: i }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(tp.m, tA.W_, { [tA.E8]: s && 0 === t }) }, t),
            ),
        }),
    });
}
var tI = n(74498);
function tb() {
    return (0, r.jsx)("div", { className: tI.Np });
}
function tR(e) {
    let { heroImage: t, heroVideo: n } = e,
        s = i.useRef(null);
    (0, ec.A)(s);
    let l = i.useMemo(() => (null != n ? (0, el.WV)(n) : null) ?? t, [n, t]);
    return (0, r.jsx)(Y._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eo.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: s,
                imageAsset: {
                    alt: "",
                    className: tI.LY,
                    asset: { url: l, mimetype: (0, el.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: tI.LY,
                    asset: { url: n, mimetype: (0, el.vm)(n), isAnimated: !0 },
                    assetId: n,
                },
            }),
    });
}
function tM(e) {
    let { heroImage: t, heroVideo: n } = e;
    return null == n
        ? (0, r.jsxs)("div", {
              className: tI.Tv,
              children: [
                  (0, r.jsx)(tb, {}),
                  (0, r.jsx)("div", {
                      className: tI.LO,
                      children: (0, r.jsx)(Y._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: tI.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tI.LO, tI.jx, tI.hw),
                      children: (0, r.jsx)("img", { className: tI.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tI.LO, tI.jx, tI.Co),
                      children: (0, r.jsx)("img", { className: tI.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: tI.Tv,
              children: [
                  (0, r.jsx)(tb, {}),
                  (0, r.jsx)("div", { className: tI.LO, children: (0, r.jsx)(tR, { heroImage: t, heroVideo: n }) }),
              ],
          });
}
function ty(e) {
    let { hero: t, hasFetchedQuests: n, hasNoAccessibleQuests: s } = e,
        l = (0, er.WS)(),
        r = i.useRef(!1);
    return (
        i.useEffect(() => {
            let e = t.questIds;
            n &&
                null != e &&
                e.length > 0 &&
                s &&
                !r.current &&
                ((r.current = !0),
                l({
                    adContentId: t.id,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    event: ef.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: es.uF.QUEST_HOME_HERO,
                }));
        }, [n, s, t.id, t.questIds, l]),
        null
    );
}
function tL(e) {
    let { hero: t, onQuestCtaClick: n, isBannerLoading: s } = e,
        l = (0, E.bG)([en.A], () => en.A.quests),
        a = (0, E.bG)([en.A], () => en.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, $.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, ej.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        f = h[0],
        { enabled: v } = W.Ay.useConfig({ location: tx.rE.QUEST_HOME_HERO });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eu.Z, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: es.uF.QUEST_HOME_HERO,
                sourceQuestContent: es.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ty, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(ev, {
                                ref: (t) => {
                                    e.current = s ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [tI.lX]: s }),
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
                                                        className: tI.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(X.E, {
                                            color: "text-strong",
                                            variant: "body-sm/normal",
                                            className: tI.yu,
                                            children: eq.intl.string(eq.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                overlay:
                                    v &&
                                    (0, r.jsx)(J.D, {
                                        tag: "div",
                                        className: tI.fj,
                                        "aria-label": t.cta.buttonLabel,
                                        onClick: () => {
                                            (0, ea._Q)(
                                                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                                                {
                                                    content: es.uF.QUEST_HOME_HERO_BANNER,
                                                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                                                    impressionId: l.current?.getId(),
                                                    sourceQuestContent: es.uF.QUEST_HOME_HERO,
                                                },
                                            );
                                        },
                                    }),
                                buttons: (0, r.jsxs)(g.e, {
                                    children: [
                                        (0, r.jsx)(x.$, {
                                            onClick: () => {
                                                (0, ea._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: es.uF.QUEST_HOME_HERO,
                                                        ctaContent: ei.Cy.OPEN_GAME_LINK,
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
                                            (0, r.jsx)(x.$, {
                                                onClick: () => {
                                                    (n(f),
                                                        (0, ee.r)({
                                                            type: et.F.CLICK_INTERNAL,
                                                            adCreativeType: m.p.QUEST_HOME_HERO,
                                                            adCreativeId: t.id,
                                                            questContentCTA: ei.Cy.VIEW_QUESTS,
                                                            surfaceId: es.uF.QUEST_HOME_HERO,
                                                            sourceQuestContent: es.uF.QUEST_HOME_HERO,
                                                        }));
                                                },
                                                size: "md",
                                                text: eq.intl.string(eq.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(tM, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(tO, { hero: t, isBannerLoading: s, shelfQuests: u, onQuestCtaClick: n }),
        ],
    });
}
function tQ() {
    return (0, r.jsx)("div", { className: o()(eg.iE, eg.FG, eg.B3), children: (0, r.jsx)(Z.y, {}) });
}
var tH = n(201805),
    tU = n(73153),
    tD = n(343559);
n(667532);
var tF = n(890497),
    tP = n(663417),
    tk = n(265872),
    tq = n(624479),
    tw = n(416052),
    tB = n(417098);
function tV(e) {
    let { error: t } = e,
        n = t.getAnyErrorMessage();
    return (0, r.jsx)(tB.$T, {
        color: tB.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != n ? n : eq.intl.string(eq.t.ZErSg5) }),
    });
}
var tW = n(602853),
    tG = n(817281),
    tK = n(688810),
    tz = n(270746),
    t$ = n(413599),
    tY = n(912875);
let tX = function () {
    let { analyticsLocations: e } = (0, tK.Ay)(),
        t = (0, E.bG)([t$.A], () => t$.A.theme),
        n = i.useRef(null);
    i.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let s = (0, tW.r)(ek.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.LIGHT),
        l = (0, tW.r)(ek.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.DARK),
        a = (0, tW.r)(ek.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.ONYX),
        o = i.useMemo(
            () => [
                { theme: ef.NJ8.LIGHT, label: eq.t.K2sFfo, color: s.hex() },
                { theme: ef.NJ8.DARK, label: eq.t.b8Cei3, color: l.hex() },
                { theme: ef.NJ8.ONYX, label: eq.t.Do4ZJx, color: a.hex() },
            ],
            [s, l, a],
        ),
        u = i.useCallback(
            (t) => {
                ((0, tz.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, tG.u_)({ theme: t }));
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != n.current && u(n.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: tY.N,
        children: (0, r.jsxs)("div", {
            className: tY.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        J.D,
                        {
                            tag: "div",
                            className: tY.Du,
                            onClick: () => u(e.theme),
                            "aria-label": eq.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${tY.WT} ${t === e.theme ? tY.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: tY.i, children: eq.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(eH.K, {
                    onClick: c,
                    "aria-label": eq.intl.string(eq.t.yBZMsQ),
                    icon: tP.RefreshIcon,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var tJ = n(219354);
let tZ = function (e) {
    let { questId: t, setQuestId: n, quest: s, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, $.pT)(),
        h = (0, E.bG)([en.A], () => (null != t ? en.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, E.bG)([en.A], () => null != t && en.A.isFetchingQuestPreview(t), [t]),
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
                    await (0, tD.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, tD.UZ)(t);
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
                    await (0, tD.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = i.useCallback(
            (e) => {
                (0, B.uJ)(e) || null == n || n(e);
            },
            [n],
        );
    return (0, r.jsxs)("div", {
        className: tJ.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: tJ.Br,
                    children: (0, r.jsxs)("div", {
                        className: tJ.bo,
                        children: [
                            (0, r.jsx)(tX, {}),
                            (0, r.jsxs)("div", {
                                className: tJ.b8,
                                children: [
                                    (0, r.jsx)(
                                        tF.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: _,
                                            placeholder: eq.intl.string(eq.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, B.uJ)(t?.trim())) return e;
                                                let n = e.filter(
                                                    (e) =>
                                                        e.label.toLowerCase().includes(t.toLowerCase()) ||
                                                        e.value.toLowerCase().includes(t.toLowerCase()),
                                                );
                                                return 0 === n.length && "" !== t.trim()
                                                    ? [{ label: t.trim(), value: t.trim() }]
                                                    : n;
                                            },
                                        },
                                        `${t}-${s?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, r.jsx)(eH.K, {
                                        onClick: l,
                                        "aria-label": eq.intl.string(eq.t.wzzjk9),
                                        icon: tP.RefreshIcon,
                                        loading: f,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != s &&
                (0, r.jsx)("div", {
                    className: tJ.in,
                    children: (0, r.jsxs)(g.e, {
                        className: tJ.xv,
                        children: [
                            (0, r.jsx)(x.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eq.intl.string(eq.t.jQEfRT),
                            }),
                            (0, r.jsx)(x.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eq.intl.string(eq.t.taqkwK),
                            }),
                            (0, r.jsx)(x.$, {
                                onClick: S,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eq.intl.string(eq.t.cKSLr4),
                            }),
                            (0, r.jsx)(tk.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: tJ.PP,
                                        children: (0, r.jsx)("div", {
                                            className: tJ.sH,
                                            children: (0, r.jsx)(tw.A, {
                                                value: tv.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eq.intl.string(eq.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(eH.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": eq.intl.string(eq.t.rNGQfD),
                                        icon: tq.CopyIcon,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(tV, { error: h }) : null,
            f ? (0, r.jsx)(Z.y, {}) : null,
        ],
    });
};
var t0 = n(95362),
    t1 = n(761508),
    t2 = n(425069);
function t5() {
    return (0, r.jsx)("div", { className: t2.y });
}
var t4 = n(834615),
    t8 = n(34665);
let t3 = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t8.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: t8.R_,
                    variant: "heading-sm/semibold",
                    children: eq.intl.string(eq.t.L2mlUb),
                }),
                (0, r.jsx)(eu.R, {
                    questOrQuests: t,
                    questContent: es.uF.ACTIVITY_PANEL,
                    sourceQuestContent: es.uF.ACTIVITY_PANEL,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(t4.default, { quest: t }),
                        }),
                }),
            ],
        }),
    });
};
var t6 = n(66246),
    t7 = n(717695),
    t9 = n(466209),
    ne = n(83978);
let nt = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t9.wp,
            children: [
                (0, r.jsx)(em.D, {
                    className: t9.Oo,
                    variant: "heading-sm/semibold",
                    children: eq.intl.string(eq.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: t9.RE,
                    children: (0, r.jsx)("div", {
                        className: t9.Z,
                        children: (0, r.jsx)("div", {
                            className: ne.C3,
                            children: (0, r.jsx)(t7.A, {
                                children: (0, r.jsx)(Y.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(t6.QuestBarQuestContent, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var nn = n(10394);
function ns(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t8.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: t8.R_,
                    variant: "heading-sm/semibold",
                    children: eq.intl.string(eq.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: t8.YT,
                    children: (0, r.jsx)(nn.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var nl = n(632623),
    nr = n(622409);
let ni = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t8.B0,
            children: [
                (0, r.jsx)(em.D, { variant: "heading-sm/semibold", children: eq.intl.string(eq.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: nr.wu,
                    children: (0, r.jsx)("span", { className: nr.cy, children: eq.intl.string(eq.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: nr.oU,
                    children: (0, r.jsx)("div", {
                        className: nr.zx,
                        children: (0, r.jsx)("div", {
                            className: nr.Lj,
                            children: (0, r.jsx)("div", {
                                className: nr.n0,
                                children: (0, r.jsx)(nl.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var na = n(793217),
    no = n(484810);
function nu(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: no.y, children: t });
}
var nc = n(612324),
    nd = n(365199),
    nm = n(270045),
    nE = n(79545),
    nh = n(173936),
    nf = n(914410),
    ng = n(426110),
    nx = n(339350),
    nv = n(782134),
    nj = n(271536),
    nC = n(768622),
    nS = n(793934),
    n_ = n(662940),
    nN = n(977416);
let np = 2 * to.A.Millis.DAY,
    nA = 3 * to.A.Millis.DAY,
    nO = new Map(eB.map((e) => [e.identifier, e])),
    nT = {
        [ew.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: n } = t;
            return e.slice().sort((e, t) => {
                var s, l;
                return ((s = n.get(e)), (l = n.get(t)), null == s || null == l ? 0 : l.localeCompare(s));
            });
        },
    };
function nI(e) {
    return e.features.includes(tx.Li.EXCLUDE_FROM_FEATURED);
}
function nb(e, t) {
    let n = nO.get(e)?.maxItems,
        s = t.get(e)?.length ?? 0;
    return null == n || s < n;
}
var nR = n(853978);
function nM(e) {
    let { quest: t, isHovering: n = !1 } = e,
        s = (0, nE.Pd)(t),
        l = (0, E.bG)([en.A], () => s === nE.UA.UNENROLLED && null != en.A.questEnrollmentBlockedUntil, [s]),
        a = (0, $.fc)(t),
        u = (0, $.I3)(t),
        c = i.useMemo(() => (0, n_.Dd)(t.config, s, l), [t.config, s, l]),
        d = i.useMemo(() => (0, n_.CK)(s, a, u, l), [s, a, u, l]),
        m = (function (e) {
            let t = (0, nE.Pd)(e),
                [n] = i.useState(() => Date.now()),
                s = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = s.getTime() - n,
                r =
                    (function (e) {
                        switch (e) {
                            case nE.UA.UNENROLLED:
                            case nE.UA.ENROLLED:
                            case nE.UA.INCOMPLETE:
                                return !0;
                            case nE.UA.COMPLETED:
                            case nE.UA.CLAIMED:
                            case nE.UA.EXPIRED:
                            case nE.UA.EXPIRED_CLAIMABLE:
                            case nE.UA.EXPIRED_CLAIMED:
                                return !1;
                        }
                    })(t) &&
                    l < nA &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, tl.A)(s, to.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(nR.fC, { [nR.R]: n }),
        children: [
            (0, r.jsxs)("div", {
                className: nR.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(X.E, {
                            variant: "body-xs/semibold",
                            className: nR.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(X.E, {
                            variant: "body-xs/semibold",
                            color: "text-overlay-light",
                            className: nR.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: nR.BA,
                            children: [
                                (function (e, t) {
                                    let n = { size: "xxs", className: nR.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(nx.HourglassIcon, { ...n });
                                    switch ((0, n_.pv)(e)) {
                                        case n_.UK.PLAY:
                                            return (0, r.jsx)(tn.GameControllerIcon, { ...n });
                                        case n_.UK.WATCH:
                                            return (0, r.jsx)(nv.PlayIcon, { ...n });
                                        case n_.UK.ACTIVITY:
                                            return (0, r.jsx)(nj.QuestsMissionsIcon, { ...n });
                                        case n_.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(nC.FlashIcon, { ...n });
                                        case n_.UK.ARENA:
                                            return (0, r.jsx)(nS.QuestsArenaIcon, { ...n });
                                    }
                                })(t, l),
                                (0, r.jsx)(X.E, {
                                    variant: "body-xs/semibold",
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
                    className: o()(nR.qS, nR.WZ),
                    children: (0, r.jsx)(X.E, {
                        variant: "body-xs/semibold",
                        color: "currentColor",
                        children: eq.intl.string(eq.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var ny = n(409626),
    nL = n(870273),
    nQ = n(646917),
    nH = n(866665),
    nU = n(743368),
    nD = n(452411),
    nF = n(321538),
    nP = n(964051);
function nk(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l, contentPosition: i, rowIndex: a } = e,
        u = (0, nE.Pd)(t),
        { ctaOnHover: c } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        d = (0, E.bG)([en.A], () => u === nE.UA.UNENROLLED && null != en.A.questEnrollmentBlockedUntil, [u]),
        m = !(0, eL.no)(t) || ![nE.UA.ENROLLED, nE.UA.UNENROLLED, nE.UA.INCOMPLETE].includes(u),
        h = u === nE.UA.EXPIRED || u === nE.UA.EXPIRED_CLAIMED || (u === nE.UA.CLAIMED && (0, eL.GL)(t)),
        f = (0, $.do)({ quest: t, content: n, ctaContent: ei.Cy.OPEN_GAME_LINK, sourceQuestContent: s });
    return (0, r.jsxs)("div", {
        className: o()(nP.lO, { [nP.Fq]: l || !c }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)("div", { className: nP.Cj }),
            (0, r.jsx)(ed.N, {
                theme: ef.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, nP.tn),
                        children: (0, r.jsxs)(g.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                m &&
                                    (h
                                        ? (0, r.jsx)(x.$, {
                                              variant: "secondary",
                                              text: t.config.ctaConfig.buttonLabel,
                                              onClick: f,
                                          })
                                        : (0, r.jsx)(nH.m, {
                                              text: eq.intl.string(eq.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, r.jsx)(eH.K, {
                                                  variant: "secondary",
                                                  icon: nU.LinkExternalMediumIcon,
                                                  "aria-label": eq.intl.string(eq.t.LLLLPD),
                                                  onClick: f,
                                              }),
                                          })),
                                !h &&
                                    !d &&
                                    (0, r.jsx)(nD.A, {
                                        quest: t,
                                        surface: nE.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: n,
                                        analyticsCtxSourceQuestContent: s,
                                        analyticsCtxQuestContentPosition: i,
                                        analyticsCtxQuestContentRowIndex: a,
                                    }),
                                d &&
                                    (0, r.jsx)(x.$, {
                                        variant: "overlay-primary",
                                        text: eq.intl.string(eq.t.vY9GgG),
                                        onClick: () => (0, nF.m6)(t, n, s),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var nq = n(403581),
    nw = n(576761),
    nB = n(41327);
function nV(e) {
    let { onClick: t, questId: n, orbMultiplierEligibility: s } = e,
        l = (0, $.ZP)(n),
        i = (0, nw.B9)(s);
    if (null == l) return null;
    let a = i
        ? eq.intl.formatToPlainString(eq.t.l2UfLG, { bonusOrbMultiplier: l })
        : eq.intl.formatToPlainString(eq.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(J.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, nF.gC)(l, s), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: nB.k,
            children: [
                (0, r.jsx)(nq.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(X.E, { variant: "body-sm/normal", color: "currentColor", className: nB.Q, children: a }),
            ],
        }),
    });
}
var nW = n(947641),
    nG = n(194261),
    nK = n(106799),
    nz = n(476334);
function n$(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l } = e,
        a = (0, E.bG)([ti.default], () => ti.default.getCurrentUser()),
        u = (0, tm.mq)(t.config, a),
        c = (0, tm.ks)(t.config),
        d = (0, tm.wo)(t.config, a),
        { completedRatio: m } = (0, $.O9)(t),
        h = (0, nE.Pd)(t),
        f = (0, $.Hv)(),
        g = h === nE.UA.CLAIMED || h === nE.UA.EXPIRED_CLAIMED,
        x = g || h === nE.UA.COMPLETED || h === nE.UA.EXPIRED_CLAIMABLE,
        v = (0, tH.ix)({ quest: t, questContent: n, sourceQuestContent: s }),
        j = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), f && !g)) {
                    ((0, eh.Y5)({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: ei.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: s,
                    }),
                        (0, nF.FS)());
                    return;
                }
                v();
            },
            [v, f, g, t.id, n, s],
        ),
        C = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tf.A, {
                    quest: t,
                    location: tx.rE.QUEST_HOME_DESKTOP,
                    questContent: n,
                    autoplay: l,
                    lazyLoad: !0,
                    className: nz.al,
                    fullWidth: !0,
                    sourceQuestContent: s,
                }),
                g &&
                    (0, r.jsx)("div", {
                        className: nz.EY,
                        children: (0, r.jsx)(nW.CheckmarkLargeBoldIcon, {
                            className: nz.AM,
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                h === nE.UA.EXPIRED &&
                    (0, r.jsx)("div", {
                        className: nz.EY,
                        children: (0, r.jsx)(nG.LockIcon, { size: "sm", className: nz.Sz, color: "currentColor" }),
                    }),
            ],
        }),
        S = (0, r.jsx)("div", { className: h === nE.UA.UNENROLLED ? nz.fm : nz.n5, children: C }),
        _ = (0, r.jsx)(th.A, { size: 66, percentComplete: m, useAltStyle: !0, children: S }),
        N = x
            ? (0, r.jsx)(J.D, {
                  className: nz.q9,
                  onClick: j,
                  "aria-label": g
                      ? (0, tm.r7)(t.config)
                          ? eq.intl.string(eq.t.bAGFz3)
                          : eq.intl.string(eq.t.vTgCWx)
                      : eq.intl.string(eq.t.cfY4PE),
                  children: _,
              })
            : _;
    return (0, r.jsxs)("div", {
        className: o()(nz.CZ, { [nz.Pv]: l }),
        children: [
            (0, r.jsx)(ed.N, {
                theme: ef.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, nz.tE, { [nz.cB]: l }),
                        children: h === nE.UA.UNENROLLED ? S : N,
                    }),
            }),
            (0, r.jsxs)("div", {
                className: o()(nz.FS, { [nz.IR]: l }),
                children: [
                    (0, r.jsx)(X.E, {
                        variant: "body-sm/medium",
                        className: nz.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(nz.oV, { [nz.FJ]: l }),
                        children: [
                            c && (0, r.jsx)(nK.A, { className: nz.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                X.E,
                                {
                                    variant: "body-md/medium",
                                    className: nz.zN,
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
var nY = n(604970);
function nX(e) {
    let { quest: t, questContent: n, isHovering: s, sourceQuestContent: l, contentPosition: a, rowIndex: u } = e,
        c = i.useRef(null),
        d = (0, nL.A9)(t, l, tx.rE.QUEST_HOME_DESKTOP, ny.GameProfileSources.QuestHome, c),
        m = (0, nQ.z)(),
        E = (0, $.SD)(t, m);
    return (0, r.jsxs)("div", {
        ref: c,
        className: nY.qr,
        children: [
            (0, r.jsx)(n$, { quest: t, questContent: n, sourceQuestContent: l, isHovering: s }),
            (0, r.jsxs)("div", {
                className: nY.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: nY.Wi,
                        children: [
                            (0, r.jsx)(X.E, {
                                variant: "body-sm/normal",
                                className: o()(nY.Wj, nY.h_, { [nY.C4]: s }),
                                children: d,
                            }),
                            (0, r.jsx)(X.E, {
                                "aria-hidden": !0,
                                variant: "body-sm/normal",
                                lineClamp: 1,
                                className: o()(nY.Wj, nY.XV, { [nY.Hz]: s }),
                                children: d,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: nY.Gv,
                        children: [
                            (0, r.jsx)(X.E, {
                                variant: "body-sm/normal",
                                className: nY.I4,
                                children: eq.intl.string(eq.t.o6FLcF),
                            }),
                            E &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(X.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(nV, { questId: t.id, orbMultiplierEligibility: m }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(nk, {
                quest: t,
                questContent: n,
                sourceQuestContent: l,
                isHovering: s,
                contentPosition: a,
                rowIndex: u,
            }),
        ],
    });
}
var nJ = n(434295);
let nZ = { [el.i2.TIER_2]: nJ.qt, [el.i2.TIER_3]: nJ.jR, [el.i2.TIER_4]: nJ.cd };
function n0(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: s,
            isHovering: l,
            isShareable: i,
            onCopyShareLink: a,
            onMenuOpen: u,
            onMenuClose: c,
            contentPosition: d,
            rowIndex: m,
        } = e,
        { completedRatio: h, completedRatioDisplay: f } = (0, $.O9)(t, !0),
        g = (0, el.tW)(t, el.fY.LOGO_TYPE, ef.NJ8.DARK).url,
        x = (0, E.bG)([t$.A], () => t$.A.theme) === ef.NJ8.LIGHT,
        v = (0, ng.Qn)(t.config),
        j = null != v ? nZ[v] : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            x
                ? (0, r.jsx)(ed.N, {
                      theme: ef.NJ8.DARK,
                      disableAdaptiveTheme: !0,
                      children: (e) => (0, r.jsx)("div", { className: o()(e, nJ.f5, j), "aria-hidden": !0 }),
                  })
                : (0, r.jsx)("div", { className: o()(nJ.f5, j), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: o()(nJ.ZF, j, { [nJ.SP]: l }), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: nJ.ZH, children: (0, r.jsx)(nM, { quest: t, isHovering: l }) }),
            (0, r.jsxs)("div", {
                className: o()(nJ.o1, { [nJ.SP]: l }),
                children: [
                    i &&
                        (0, r.jsx)(J.D, {
                            tag: "div",
                            className: nJ.hP,
                            onClick: a,
                            "aria-label": eq.intl.string(eq.t.WqhZss),
                            children: (0, r.jsx)(nh.LinkIcon, { size: "sm", color: "currentColor" }),
                        }),
                    (0, r.jsx)(nm.C, {
                        questContent: n,
                        quest: t,
                        hideLearnMore: !0,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: s,
                        onOpen: u,
                        onClose: c,
                        children: (e) =>
                            (0, r.jsx)(J.D, {
                                ...e,
                                tag: "div",
                                className: nJ.hP,
                                "aria-label": eq.intl.string(eq.t.DEoVWZ),
                                children: (0, r.jsx)(nd.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o()(nJ.KJ, { [nJ.R]: l }),
                children: [
                    (0, r.jsx)("div", {
                        className: nJ.Ez,
                        children: (0, r.jsx)("img", { className: nJ.dK, src: g, alt: t.config.messages.gameTitle }),
                    }),
                    (0, r.jsxs)("div", {
                        className: nJ.Cd,
                        children: [
                            (0, r.jsx)(X.E, {
                                variant: "body-sm/semibold",
                                color: "text-overlay-light",
                                className: nJ.ZV,
                                children: f,
                            }),
                            (0, r.jsx)("div", {
                                className: nJ.oU,
                                children: (0, r.jsx)(nf.Ay, {
                                    variant: nf.qP.UNSET,
                                    override: { default: { gradientStart: "#189E4E", gradientEnd: "#44FC7E" } },
                                    weight: nf.fh.LIGHT,
                                    progress: Math.round(100 * h),
                                    glowing: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(nJ.SJ, { [nJ.SP]: l }),
                children: (0, r.jsx)(nX, {
                    quest: t,
                    questContent: n,
                    isHovering: l,
                    sourceQuestContent: s,
                    contentPosition: d,
                    rowIndex: m,
                }),
            }),
        ],
    });
}
var n1 = n(720875),
    n2 = n(614972),
    n5 = n(688755),
    n4 = n(831368),
    n8 = n(704289);
function n3(e) {
    let {
            sectionIdentifier: t,
            quest: n,
            questContent: s,
            isInFeaturedSection: l,
            isActive: a,
            className: u,
            contentPosition: c,
            rowIndex: d,
            eagerLoadAssets: m,
            impressionRef: h,
            onMenuOpenChange: f,
            sourceQuestContent: g,
        } = e,
        x = i.useMemo(() => (0, el.tW)(n, el.fY.QUEST_BAR_HERO_IMAGE), [n]),
        v = i.useMemo(() => (0, el.tW)(n, el.fY.QUEST_BAR_HERO_VIDEO), [n]),
        {
            isActive: j,
            shouldRender: C,
            hoverHandlers: S,
            handleMenuOpen: _,
            handleMenuClose: N,
        } = (function () {
            let { fadeDurationMs: e = 400, onMenuOpenChange: t } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                [n, s] = i.useState(!1),
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
            function E() {
                null != d.current && (cancelAnimationFrame(d.current), (d.current = null));
            }
            function h() {
                null != m.current && (clearTimeout(m.current), (m.current = null));
            }
            let f = i.useCallback(() => {
                    (h(),
                        r(!0),
                        E(),
                        (d.current = requestAnimationFrame(() => {
                            d.current = requestAnimationFrame(() => {
                                ((d.current = null), s(!0));
                            });
                        })));
                }, []),
                g = i.useCallback(() => {
                    (E(),
                        s(!1),
                        h(),
                        (m.current = setTimeout(() => {
                            ((m.current = null), r(!1));
                        }, e)));
                }, [e]),
                x = i.useCallback(() => {
                    a.current || o.current || u.current || g();
                }, [g]),
                v = i.useCallback(() => {
                    u.current || ((u.current = !0), c.current?.(!0));
                }, []),
                j = i.useCallback(() => {
                    (u.current && ((u.current = !1), c.current?.(!1)), x());
                }, [x]),
                C = i.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            ((a.current = !0), f());
                        },
                        onMouseLeave: () => {
                            ((a.current = !1), x());
                        },
                        onFocus: () => {
                            ((o.current = !0), f());
                        },
                        onBlur: () => {
                            ((o.current = !1), x());
                        },
                    }),
                    [f, x],
                );
            return (
                i.useEffect(
                    () => () => {
                        (E(), h(), u.current && ((u.current = !1), c.current?.(!1)));
                    },
                    [],
                ),
                { isActive: n, shouldRender: l, deactivate: g, hoverHandlers: C, handleMenuOpen: v, handleMenuClose: j }
            );
        })({ onMenuOpenChange: f }),
        p = j || !0 === a,
        A = !0 === l,
        O = (0, n2.c)({ onMenuOpen: _, onMenuClose: N }),
        T = (0, nE.Pd)(n),
        I = T === nE.UA.EXPIRED || T === nE.UA.EXPIRED_CLAIMED,
        b = (0, tE.E0)(n.config),
        R = (0, E.bG)([t$.A], () => t$.A.theme),
        M = R === ef.NJ8.ASH || R === ef.NJ8.DARK,
        y = R === ef.NJ8.LIGHT,
        L = i.useContext(eP.X),
        { visibilityElementRef: Q, almostVisibleInViewport: H } = (0, n4.I)(
            L?.current?.getScrollerNode() ?? null,
            m ?? !1,
        ),
        {
            handleHoverStart: U,
            handleHoverEnd: D,
            isEventWithinParent: F,
        } = (0, n5.B)({ quest: n, questContent: s, contentPosition: c, rowIndex: d, sourceQuestContent: g }),
        P = (0, tH.Lk)({
            isShareable: b,
            questId: n.id,
            trackingCtx: i.useMemo(
                () => ({ content: s, ctaContent: ei.Cy.CONTEXT_MENU_COPY_LINK, sourceQuestContent: g }),
                [s, g],
            ),
        }),
        k = (0, nc.A)(h, Q),
        q = eq.intl.formatToPlainString(eq.t.EAYZAr, { questName: n.config.messages.questName }),
        w = o()(n8.kL, { [n8.Cn]: A, [n8.DM]: p }, u),
        B = (0, r.jsx)(n1.A, {
            showPlaceholder: !H,
            width: 800,
            height: 450,
            className: n8.Tv,
            children: (0, r.jsx)(eo.N, {
                imageAsset:
                    null != x
                        ? { asset: x, assetId: "QuestTileV2", alt: eq.intl.string(eq.t.jnijWz), className: n8.Tv }
                        : void 0,
                videoAsset:
                    null != v
                        ? {
                              asset: v,
                              assetId: "QuestTileV2_heroAnimated",
                              className: o()(n8.Tv, n8.gJ, { [n8.C7]: p }),
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
                      (0, r.jsx)(n2.q.Provider, {
                          value: O,
                          children: (0, r.jsx)(n0, {
                              quest: n,
                              questContent: s,
                              sourceQuestContent: g,
                              isHovering: p,
                              isShareable: b,
                              onCopyShareLink: P,
                              onMenuOpen: _,
                              onMenuClose: N,
                              contentPosition: c,
                              rowIndex: d,
                          }),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      B,
                      (0, r.jsx)("div", { className: o()(n8.sL, { [n8.Mq]: I }) }),
                      y
                          ? (0, r.jsx)(ed.N, {
                                theme: ef.NJ8.ONYX,
                                disableAdaptiveTheme: !0,
                                children: (e) => (0, r.jsx)("div", { className: o()(e, n8.f5) }),
                            })
                          : (0, r.jsx)("div", { className: o()(n8.f5, { [n8.kg]: M }) }),
                      (0, r.jsxs)("div", {
                          className: n8.qy,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: n8.wx,
                                  children: [
                                      (0, r.jsx)(nM, { quest: n, isHovering: p }),
                                      (0, r.jsx)("div", {
                                          className: o()(n8.$s, { [n8.rk]: p }),
                                          onClick: (e) => e.stopPropagation(),
                                          children: (0, r.jsx)(nm.C, {
                                              questContent: s,
                                              quest: n,
                                              hideLearnMore: !0,
                                              shouldShowDisclosure: !0,
                                              showShareLink: !0,
                                              sourceQuestContent: g,
                                              onOpen: _,
                                              onClose: N,
                                              children: (e) =>
                                                  (0, r.jsx)(J.D, {
                                                      ...e,
                                                      tag: "div",
                                                      className: n8.E9,
                                                      "aria-label": eq.intl.string(eq.t.DEoVWZ),
                                                      children: (0, r.jsx)(nd.MoreHorizontalIcon, {
                                                          size: "sm",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(n2.q.Provider, {
                                  value: O,
                                  children: (0, r.jsx)(nX, {
                                      quest: n,
                                      questContent: s,
                                      isHovering: p,
                                      sourceQuestContent: g,
                                      contentPosition: c,
                                      rowIndex: d,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    return (0, r.jsx)("div", {
        id: (0, na.sT)(n.id, t),
        className: n8.uW,
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
            ref: k,
            "aria-label": q,
            style: { "--custom-featured-tile-width": "291px" },
            className: w,
            children: V,
        }),
    });
}
let n6 = i.memo(function (e) {
    let t = (0, E.bG)([en.A], () => (null != e.questId ? en.A.getQuest(e.questId) : void 0), [e.questId]),
        n = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == n
        ? null
        : (0, r.jsx)(eu.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === es.uF.QUESTS_EMBED,
              overrideVisibility: e.overrideVisibility,
              onImpression: e.onImpression,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(n3, { ...e, quest: n, impressionRef: t }),
          });
});
function n7(e) {
    let { quest: t, isFeatured: n } = e,
        { useNewTile: s } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t8.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: t8.R_,
                    variant: "heading-sm/semibold",
                    children: n ? eq.intl.string(eq.t.AzkvWe) : eq.intl.string(eq.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(nu, {
                          children: (0, r.jsx)(n6, {
                              className: t8.d,
                              quest: t,
                              questContent: es.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              isInFeaturedSection: n,
                              sourceQuestContent: es.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                      })
                    : (0, r.jsx)(na.Ay, {
                          className: t8.d,
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
var n9 = n(97808),
    se = n(778712),
    st = n(87664),
    sn = n(427262),
    ss = n(198525),
    sl = n(381351);
let sr = function (e) {
    let { quest: t } = e,
        [n, s] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([ti.default], () => ti.default.getCurrentUser()),
        u = sn.Ay.useName(a),
        c = (0, st.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(ss.default, {
                    name: u,
                    quest: t,
                    memberListItemRef: l,
                    applicationStream: c,
                    ...e,
                    closePopout: () => {
                        s(!1);
                    },
                }),
            [t, c, u],
        );
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t8.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: sl.R_,
                    variant: "heading-sm/semibold",
                    children: eq.intl.string(eq.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: sl.$Q, children: eq.intl.string(eq.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: sl.k0,
                    children: (0, r.jsx)(tk.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => s(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: tk.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(sl.Tn, { [sl.wH]: n }),
                                children: (0, r.jsx)(J.D, {
                                    onClick: () => s(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: sl.lm,
                                        children: [
                                            (0, r.jsx)(n9.eu, {
                                                size: se._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: ef.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: sl.Fj,
                                                children: [
                                                    (0, r.jsx)(X.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(X.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-muted",
                                                        children: eq.intl.string(eq.t.b9w3bO),
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
function si(e) {
    let { questId: t, selectedSections: n } = e,
        s = (0, E.bG)([en.A], () => en.A.getQuest(t)),
        l = (0, E.bG)([en.A], () => en.A.getFetchQuestPreviewError(t)),
        { useNewTile: i } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP });
    if (null != l || null == s) return null;
    function a(e) {
        return null == n || 0 === n.length || n.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nt, { quest: s }), (0, r.jsx)(t5, {})] }),
            a("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n7, { quest: s }), (0, r.jsx)(t5, {})] }),
            a("featured_tile") &&
                i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(n7, { quest: s, isFeatured: !0 }), (0, r.jsx)(t5, {})],
                }),
            a("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ni, { questId: s.id }), (0, r.jsx)(t5, {})] }),
            a("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ns, { quest: s }), (0, r.jsx)(t5, {})] }),
            a("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sr, { quest: s }), (0, r.jsx)(t5, {})] }),
            a("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t3, { quest: s }), (0, r.jsx)(t5, {})] }),
        ],
    });
}
var sa = n(875696);
function so(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: s, controls: l, className: a } = e,
        u = (function () {
            let { useNewTile: e } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP });
            return [
                { value: "quest_bar", label: eq.intl.string(eq.t.rjVPdM) },
                { value: "home_card", label: eq.intl.string(eq.t["5wnpF3"]) },
                ...(e ? [{ value: "featured_tile", label: eq.intl.string(eq.t.AzkvWe) }] : []),
                { value: "share_embed", label: eq.intl.string(eq.t["D/gSWS"]) },
                { value: "channel_call_header", label: eq.intl.string(eq.t.gWinpQ) },
                { value: "members_list", label: eq.intl.string(eq.t.wpYima) },
                { value: "activity_panel", label: eq.intl.string(eq.t.L2mlUb) },
            ];
        })(),
        c = 0 === n.length || n.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === n.length ? n[0] : "all"), [n, c]);
    return (0, r.jsx)(t0.Ip, {
        className: o()(sa.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: sa.qE,
            children: [
                (0, r.jsx)(em.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eq.intl.string(eq.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: sa.pf, children: l }),
                (0, r.jsxs)(t1.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        s?.(e);
                    },
                    children: [
                        (0, r.jsx)(t1.V.Item, { id: "all", children: eq.intl.string(eq.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(t1.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: sa.tZ, children: (0, r.jsx)("div", { className: sa.Qs, children: t }) }),
            ],
        }),
    });
}
let su = function (e) {
    let { questId: t, className: n } = e,
        { questId: s, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: n } = (0, u.zy)(),
                s = i.useMemo(() => new URLSearchParams(n).get($.L1.QUEST_ID) ?? e, [n, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === s) return;
                        let n = new URLSearchParams();
                        (n.set($.L1.TAB, $.NC.PREVIEW_TOOL),
                            n.set($.L1.QUEST_ID, e),
                            t.push(`${ef.BVt.QUEST_HOME}?${n.toString()}`));
                    },
                    [t, s],
                );
            return { questId: s, setQuestId: l };
        })(t),
        a = (0, E.bG)([en.A], () => (null != s ? en.A.getQuest(s) : void 0), [s]),
        o = (0, E.bG)([en.A], () => (null != s ? en.A.getQuestLoadedViaPreview(s) : null), [s]);
    (i.useEffect(() => {
        null != s &&
            (0, tD.dQ)(s).then(() => {
                (0, tD.Gt)(s);
            });
    }, [s]),
        i.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === s && (0, tD.dQ)(s);
            }
            return (
                tU.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    tU.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]));
    let [c, d] = i.useState([]);
    return (0, r.jsx)(so, {
        className: n,
        controls: (0, r.jsx)(tZ, {
            questId: s,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != s && (0, tD.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(si, { questId: o?.id, selectedSections: c }) : null,
    });
};
var sc = n(203879),
    sd = n(167417),
    sm = n(783977),
    sE = n(305866),
    sh = n(915089),
    sf = n(255604);
function sg(e) {
    let { children: t, id: n } = e;
    return (0, r.jsx)(X.E, { className: sf.g, color: "text-subtle", id: n, variant: "body-sm/semibold", children: t });
}
let sx = function (e) {
    let { children: t, renderPopout: n } = e,
        s = (0, sh.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(tk.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(sE.l, { className: sf.S, "aria-labelledby": s, children: n(e, s) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var sv = n(368884);
let sj = function (e) {
    let { onChange: t, selectedFilters: n } = e,
        s = (0, $.Nb)(),
        l = i.useCallback(
            (e) => (s) => {
                let l = e.filter((e) => s.includes(e.filter));
                t([...n.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [n, t],
        );
    return (0, r.jsx)(sx, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    s.map((e, t) => {
                        let s = e.options.map((e) => ({ label: (0, td.up)(e.filter), value: e.filter })),
                            o = n.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter),
                            u = 0 === t ? a : `${a}-${t}`;
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: sv.B }),
                                    (0, r.jsx)(sg, { id: u, children: e.heading }),
                                    (0, r.jsx)(sd.$, {
                                        "aria-labelledby": u,
                                        options: s,
                                        selectedValues: o,
                                        onChange: l(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, r.jsx)("hr", { className: sv.B }),
                    (0, r.jsx)("div", {
                        className: sv.W,
                        children: (0, r.jsx)(x.$, {
                            fullWidth: !0,
                            onClick: () => {
                                (t([]), o());
                            },
                            size: "sm",
                            text: eq.intl.string(eq.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(x.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eq.intl.formatToPlainString(eq.t.CEfkXl, { numSelectedFilters: n.length }),
                icon: sm.FiltersHorizontalIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sC = n(771871),
    sS = n(715482);
let s_ = function (e) {
    let { onChange: t, optionClassName: n, selectedSortMethod: s } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([_.Ay], () => _.Ay.keyboardModeEnabled),
        o = (0, $.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: n })), [o, n]);
    return (0, r.jsx)(sx, {
        renderPopout: (e, t) => {
            let { closePopout: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(sg, { id: t, children: eq.intl.string(eq.t.tZXJIS) }),
                    (0, r.jsx)(sC.z, {
                        "aria-labelledby": t,
                        options: u,
                        onChange: (e) => {
                            (l(e), a || n());
                        },
                        value: s,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(x.$, {
                ...e,
                "aria-label": eq.intl.formatToPlainString(eq.t.lPlIMo, { selected: (0, td.Js)(s) }),
                buttonRef: t,
                size: "sm",
                text: (0, td.Js)(s),
                icon: sS.ChevronLargeDownIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sN = n(710969),
    sp = n(858899);
function sA() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, sp.P0)({ text: eq.intl.string(eq.t["5ABf1w"]), variant: "critical" }),
                eb.default.track(ef.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function sO(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            var l;
            r(((l = e.current?.clientWidth), null == l ? 1 : Math.max(1, Math.min(s, Math.floor((l + n) / (t + n))))));
        }, [r, t, n, s, e]);
    return ((0, eQ.g)(e, a, [t, n], { fireOnMount: !0 }), l);
}
var sT = n(768497),
    sI = n(288613);
let sb = 4 * to.A.Millis.SECOND;
function sR(e) {
    let { children: t, tileMinWidth: n, gridGap: s } = e,
        l = i.useRef(null),
        a = sO(l, n, s);
    return (0, r.jsx)("div", {
        className: sT.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${n}px`, "--custom-quest-grid-gap": `${s}px` },
        children: null !== a && t(a),
    });
}
function sM(e) {
    let {
            quests: t,
            excludedQuests: n,
            isFetching: s,
            hasFetched: l,
            hasFiltersApplied: a = !1,
            onClearFilters: c,
            ref: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = sA(),
        h = i.useRef(null),
        [f, g] = i.useState(null),
        [x, v] = i.useState(0),
        { useNewTile: j } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: C }, S] = (0, e3.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sb },
        })),
        _ = i.useCallback(
            (e) => {
                if ((s && 0 === t.length) || !l) return !1;
                let r = (0, sN.vc)(e, t, n);
                return null == r ? (E(e), !1) : (g(r.id), v((e) => e + 1), !0);
            },
            [t, n, s, E, l],
        );
    return (i.useImperativeHandle(d, () => ({ scrollToQuest: _ }), [_]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = null;
            return;
        }
        !s && l && m !== h.current && _(m.hash.slice(1)) && (h.current = m);
    }, [m, s, l, _]),
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
                    e.cancelled || g(null);
                },
            }));
    }, [f, x, S]),
    s && 0 === t.length)
        ? (0, r.jsx)(Z.y, { className: sT.u1 })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: sT.y7,
                children: [
                    (0, r.jsx)(em.D, {
                        variant: "heading-xl/semibold",
                        children: eq.intl.string(a ? eq.t.PBfFnx : eq.t.NqFP6z),
                    }),
                    (0, r.jsx)(X.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: a ? eq.intl.format(eq.t.LdYS1H, { onClick: c }) : eq.intl.string(eq.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(sR, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    t.map((t, n) => {
                        let s = Math.floor(n / e),
                            l = f === t.id,
                            i = null != f && !l;
                        return (0, r.jsxs)(
                            e1.animated.div,
                            {
                                className: o()({ [sI.XB]: l, [no.y]: j }),
                                style: e2(l, i, C),
                                children: [
                                    l &&
                                        (0, r.jsx)("div", {
                                            className: sI.OA,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)("div", { className: sI.E4 }, x),
                                        }),
                                    j
                                        ? (0, r.jsx)(n6, {
                                              quest: t,
                                              questContent: es.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sT.d,
                                              sourceQuestContent: es.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(na.Ay, {
                                              quest: t,
                                              questContent: es.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sT.d,
                                              sourceQuestContent: es.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
}
var sy = n(458518),
    sL = n(349095);
let sQ = [],
    sH = $.L1.SORT,
    sU = $.L1.FILTER;
function sD(e) {
    let t,
        n,
        s,
        l,
        { ref: a, ...o } = e,
        c = i.useRef(null),
        [d, m] =
            ((t = (0, sy.o)()),
            (n = (0, u.W6)()),
            (s = i.useRef(null)),
            (l = i.useCallback(
                (e) => {
                    let l = new URLSearchParams(s.current ?? t);
                    for (let [t, n] of Object.entries(e)) null == n ? l.delete(t) : l.set(t, n);
                    ((s.current = l),
                        n.replace({ search: l.toString() }),
                        Promise.resolve().then(() => {
                            s.current = null;
                        }));
                },
                [t, n],
            )),
            [t, l]),
        E = i.useMemo(() => {
            var e;
            return (
                (e = d.get(sH)),
                ((0, B.uJ)(e) ? null : (Object.values(tx.kL).find((t) => t === e) ?? null)) ?? tx.kL.SUGGESTED
            );
        }, [d]),
        h = i.useMemo(
            () =>
                (function (e) {
                    if ((0, B.uJ)(e)) return null;
                    let t = e
                        .split(",")
                        .map((e) => (0, tx.WQ)(e))
                        .filter(eR.Vq);
                    return t.length > 0 ? t : null;
                })(d.get(sU)) ?? sQ,
            [d],
        ),
        f = i.useCallback(
            (e) => {
                m({ [sH]: e });
            },
            [m],
        ),
        g = i.useCallback(
            (e) => {
                m({
                    [sU]:
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
            [m],
        ),
        {
            quests: x,
            excludedQuests: v,
            isFetchingCurrentQuests: j,
            hasFetched: C,
        } = (0, $.Qh)(
            $.NC.ALL,
            i.useMemo(() => ({ sortMethod: E, filters: h, removeExpiredQuests: !0 }), [E, h]),
        ),
        S = i.useCallback(() => {
            g(sQ);
        }, [g]),
        _ = i.useRef(null),
        N = i.useRef(null),
        p = (0, u.zy)(),
        A = (0, u.W6)();
    return (
        i.useEffect(() => {
            "" !== p.hash &&
                null != _.current &&
                null != N.current &&
                (E !== _.current || h !== N.current) &&
                A.replace({ ...p, hash: void 0 });
        }, [E, h, p, A]),
        i.useEffect(() => {
            _.current = E;
        }, [E]),
        i.useEffect(() => {
            N.current = h;
        }, [h]),
        (0, $.$P)({ selectedSortMethod: E, selectedFilters: h, numQuestsVisible: x.length }),
        i.useImperativeHandle(
            a,
            () => ({
                scrollToQuest: (e) => {
                    (S(),
                        f(tx.kL.SUGGESTED),
                        requestAnimationFrame(() => {
                            c.current?.scrollToQuest(e);
                        }));
                },
            }),
            [S, f],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: sL.Mj,
                    children: [
                        (0, r.jsx)(em.D, { variant: "heading-lg/medium", children: eq.intl.string(eq.t.giYD00) }),
                        (0, r.jsxs)("div", {
                            className: sL.Nf,
                            children: [
                                (0, r.jsx)(s_, { onChange: f, optionClassName: sL.Uq, selectedSortMethod: E }),
                                (0, r.jsx)(sj, { onChange: g, selectedFilters: h }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(sM, {
                    ref: c,
                    quests: x,
                    excludedQuests: v,
                    isFetching: j,
                    hasFetched: C,
                    hasFiltersApplied: h.length > 0,
                    onClearFilters: S,
                }),
            ],
        })
    );
}
var sF = n(575593),
    sP = n(462887),
    sk = n(765671),
    sq = n(736653),
    sw = n(162232),
    sB = n(734736),
    sV = n(303136),
    sW = n(842245);
let sG = function (e) {
    let { assetUrl: t, className: n, isAnimated: s = !1, questName: l } = e,
        i = t + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sW.k, n),
        children: s
            ? (0, r.jsx)(sV.A, {
                  preload: "auto",
                  className: sW.L,
                  fallbackImage: i,
                  children: (0, r.jsx)("source", { src: t, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sW.L, src: i, alt: l }),
    });
};
var sK = n(57718),
    sz = n(966354);
let s$ = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [n, s] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        f = (0, E.bG)([ti.default], () => ti.default.getCurrentUser()),
        { ref: g, height: x = 0 } = (0, sk.Ay)(),
        v = (0, sq.Ay)(),
        j = (0, $.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        C = t.userStatus?.claimedTier ?? 0,
        S = t.config.rewards[C],
        _ = S?.type === e5.l.FRACTIONAL_PREMIUM,
        N = S?.type === e5.l.COLLECTIBLE,
        p = S?.type === e5.l.VIRTUAL_CURRENCY,
        A = (0, ng.Pk)(t),
        O = S?.collectibleProduct?.items?.[0],
        T = O?.type === sF.R.AVATAR_DECORATION ? O : null,
        I = i.useMemo(
            () =>
                null == S
                    ? null
                    : !0 === p && t.userStatus?.orbQuantityClaimed != null
                      ? eq.intl.format(eq.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : S.name,
            [S, p, t],
        );
    (0, sk.i4)(d, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == d.current || null == h.current) return;
        let n = d.current.getBoundingClientRect(),
            s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((s.top - n.top - l.height) / 2);
    });
    let R = (0, sP.M)(v),
        M = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        y = i.useMemo(() => (0, el.tW)(t, el.fY.REWARD, void 0, void 0, A), [t, A]),
        L = n ? x + 8 : 0,
        { content_position: Q, row_index: H, ...U } = (0, ei.fF)(es.uF.TROPHY_CASE_CARD);
    function D() {
        (s(!0), eb.default.track(ef.HAw.QUEST_HOVER, { quest_id: t.id, ...U }));
    }
    function F() {
        s(!1);
    }
    function P(e) {
        (c(!0), eb.default.track(ef.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id }));
    }
    return null == S || u
        ? null
        : (0, r.jsx)(e6.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: D,
                  onBlur: F,
                  onMouseEnter: D,
                  onMouseLeave: F,
                  className: o()(sz.kL, { [sz.yo]: n }),
                  children: [
                      null != f &&
                          N &&
                          null != T &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: sz.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sw.A, {
                                  avatarDecorationOverride: T,
                                  user: f,
                                  guildId: null,
                                  animateOnHover: !n,
                              }),
                          }),
                      _
                          ? (0, r.jsx)(sB.A, { className: sz.Sl })
                          : p
                            ? (0, r.jsx)(sG, {
                                  className: sz.Sl,
                                  isAnimated: n,
                                  questName: t.config.messages.questName,
                                  assetUrl: y.url,
                              })
                            : y.isAnimated
                              ? (0, r.jsx)(b.A, {
                                    className: sz.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: y.url,
                                        type: y.mimetype ?? void 0,
                                        onError: () => P(y.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sz.Sl,
                                    src: y.url,
                                    alt: t.config.messages.questName,
                                    onError: () => P(y.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sz.Lw, { [sz.en]: R, [sz.So]: !R }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sz.r$,
                          style: { transform: `translateY(-${L}px)` },
                          children: (0, r.jsx)(sK.Ay, {
                              logotypeClassName: o()(sz.wm, { [sz.A0]: M }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: g,
                          className: sz.zH,
                          children: [
                              (0, r.jsx)(em.D, {
                                  className: sz.DD,
                                  variant: "heading-sm/semibold",
                                  color: "text-overlay-light",
                                  children: eq.intl.format(eq.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(X.E, {
                                  variant: "body-sm/medium",
                                  color: R ? "text-muted" : "text-overlay-light",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: eq.intl.format(eq.t["kXVcV+"], { reward: I, claimedDate: j }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sY = n(396478);
function sX(e) {
    let { onClick: t } = e,
        s = (0, sq.Ay)();
    return (0, r.jsxs)(sY.pp, {
        theme: s,
        children: [
            (0, r.jsx)(sY.G8, { lightSrc: n(826223), darkSrc: n(317017), width: 415, height: 200 }),
            (0, r.jsx)(sY.SG, { note: eq.intl.format(eq.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sJ = n(178093);
function sZ(e) {
    let { onSelectTab: t, className: n } = e,
        { claimedQuests: s, isFetchingClaimedQuests: l } = (0, $.Iq)();
    return l && 0 === s.length
        ? (0, r.jsx)(Z.y, { className: sJ.u })
        : 0 === s.length
          ? (0, r.jsx)(sX, { onClick: () => t($.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sJ.U, n),
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(s$, { quest: e }, e.id)),
            });
}
var s0 = n(192308);
let s1 = i.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
function s2(e) {
    let { children: t, sectionIdentifier: n, questId: s, duplicate: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: u,
            highlightCount: c,
            highlightAnimationProgress: d,
        } = i.useContext(s1),
        m = a === s && u === n && !l,
        E = l || (null != a && (a !== s || u !== n)),
        { useNewTile: h } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        f = i.useMemo(() => e2(m, E, d), [m, E, d]);
    return (0, r.jsxs)(e1.animated.div, {
        [ez]: "",
        className: o()({ [sI.XB]: m, [sI.FR]: h, [no.y]: h }),
        style: f,
        children: [
            m &&
                (0, r.jsx)("div", {
                    className: sI.OA,
                    "aria-hidden": !0,
                    children: (0, r.jsx)("div", { className: sI.E4 }, c),
                }),
            t,
        ],
    });
}
var s5 = n(333007),
    s4 = n(765548),
    s8 = n(897833);
function s3(e) {
    var t, n;
    let { containerWidth: s, questIds: l, sectionIdentifier: a, ref: o } = e,
        u = (0, eI.C)(),
        { variant: c } = W.Mk.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        d = c === W.d.LARGE_MASK_MARGIN,
        m = l.length >= 2,
        E = i.useRef(null),
        h = i.useRef(null),
        f = i.useRef(null),
        g = (0, s0.Rv)(),
        { targetQuestId: x, targetSectionIdentifier: v } = i.useContext(s1),
        j = null != x && v === a,
        [C, S] = i.useState(!1),
        [_, N] = i.useState(!1),
        p = i.useCallback((e) => {
            N(e);
        }, []),
        {
            rotation: A,
            activeSlotIndex: O,
            scrollStart: T,
            isRepositionScroll: I,
            hasFocusWithin: b,
        } = (function (e) {
            let { numQuests: t, ready: n, rootRef: s, scrollerRef: l } = e,
                [r, a] = i.useState(-2),
                [o, u] = i.useState(0),
                [c, d] = i.useState(!1),
                m = i.useRef(!1),
                E = i.useRef(0),
                h = i.useRef(null),
                f = (0, s4.A)(() => {
                    let e = l.current?.getScrollerNode(),
                        t = s.current;
                    if (null == e || null == t) return null;
                    let n = Array.from(e.querySelectorAll(e$));
                    if (n.length < 4) return null;
                    let r = n[1].offsetLeft - n[0].offsetLeft;
                    return r <= 0 ? null : { node: e, stride: r, rest: eG(e, n[2], t) };
                }),
                g = (0, s4.A)(() => {
                    let e = h.current;
                    h.current = null;
                    let t = l.current?.getScrollerNode()?.scrollLeft;
                    return null != e && null != t && 1 > Math.abs(t - e);
                }),
                x = (0, s4.A)(() => {
                    ((m.current = !1), 0 !== E.current && window.clearTimeout(E.current), (E.current = 0));
                }),
                v = (0, s4.A)(() => {
                    if (m.current) return;
                    let e = f();
                    if (null == e) return;
                    let t = e.node.scrollLeft - e.rest;
                    if (!(1 > Math.abs(t))) {
                        var n, s, l;
                        ((n = e.node),
                            (s = Math.round(t / e.stride)),
                            (l = e.rest),
                            (0, s5.flushSync)(() => {
                                (0 !== s && a((e) => e + s), 0 !== o && u(0));
                            }),
                            (h.current = l),
                            n.scrollTo({ left: l, behavior: "instant" }));
                    }
                }),
                j = (0, s4.A)(() => {
                    m.current && (x(), v());
                }),
                C = (0, s4.A)(
                    (e) =>
                        !!n &&
                        !m.current &&
                        ((0, s5.flushSync)(() => {
                            u(e);
                        }),
                        (m.current = !0),
                        (E.current = window.setTimeout(j, 1500)),
                        !0),
                );
            return (
                i.useLayoutEffect(() => {
                    if (!n) return;
                    let e = f();
                    null != e && ((h.current = e.rest), e.node.scrollTo({ left: e.rest, behavior: "instant" }));
                }, [f, t, n]),
                i.useEffect(() => {
                    let e = l.current?.getScrollerNode();
                    if (null == e || !n) return;
                    function t() {
                        d(!0);
                    }
                    function s(t) {
                        ((0, e8.vq)(t.relatedTarget, Node) && e.contains(t.relatedTarget)) || (d(!1), v());
                    }
                    function r() {
                        if (m.current) return void j();
                        let t = e.ownerDocument.activeElement;
                        ((0, e8.vq)(t) && e.contains(t) && t.matches(":focus-visible")) || v();
                    }
                    let i = new ResizeObserver(() => {
                        x();
                    });
                    return (
                        e.addEventListener("focusin", t),
                        e.addEventListener("focusout", s),
                        e.addEventListener("scrollend", r),
                        i.observe(e),
                        () => {
                            (i.disconnect(),
                                e.removeEventListener("scrollend", r),
                                e.removeEventListener("focusin", t),
                                e.removeEventListener("focusout", s),
                                x());
                        }
                    );
                }, [x, j, t, n, l, v]),
                {
                    rotation: r,
                    activeSlotIndex: t > 1 ? 2 + o : 0,
                    scrollStart: C,
                    isRepositionScroll: g,
                    hasFocusWithin: c,
                }
            );
        })({ numQuests: l.length, ready: null != s && m, rootRef: E, scrollerRef: h }),
        R = C || b || _,
        M = null == s ? 0 : ((t = s + 50), (n = l.length) < 2 ? n : Math.ceil(t / 295) + 2 + 1),
        y = i.useMemo(() => {
            let e = [],
                t = new Set();
            for (let n = 0; n < M; n++) {
                let s = A + n,
                    r = ((s % l.length) + l.length) % l.length;
                (e.push({ questId: l[r], questIndex: r, key: `${l[r]}-${s}`, isDuplicate: t.has(l[r]) }), t.add(l[r]));
            }
            return e;
        }, [l, A, M]),
        L = i.useCallback(
            (e) => {
                let t = y.findIndex((t) => t.questId === e);
                -1 !== t &&
                    (E.current?.scrollIntoView({ block: "center", behavior: "smooth" }),
                    f.current?.scrollBySteps(t - 2));
            },
            [y],
        ),
        Q = i.useCallback(
            (e) => {
                let {
                    scrollingType: t,
                    scrollWindowStartIndex: n,
                    scrollWindowEndIndex: s,
                    scrollWindowSize: r,
                    scrollingDirection: i,
                } = e;
                I() ||
                    (0, eh.kO)({
                        scrollingType: t,
                        scrollingDirection: i,
                        scrollWindowStartIndex: n,
                        scrollWindowEndIndex: s,
                        scrollWindowSize: r,
                        questContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                        carouselSize: l.length,
                    });
            },
            [I, l.length],
        );
    return (
        i.useImperativeHandle(o, () => ({ scrollToQuest: L }), [L]),
        (0, r.jsxs)("div", {
            ref: E,
            className: s8.I6,
            children: [
                (0, r.jsx)("div", { className: s8.Cz, "aria-hidden": !0 }),
                (0, r.jsx)(e0, {
                    maskWidth: eV(u),
                    overflowAmount: 25,
                    disableUserScroll: m,
                    groupedArrows: m,
                    onScrollStart: T,
                    onScrollEnd: Q,
                    autoCycle: m && !(C || _ || b || g || j),
                    singleStep: !0,
                    scrollerRef: h,
                    controlRef: f,
                    maskMarginMultiplier: d ? 2 : 0.75,
                    children: (0, r.jsx)("div", {
                        className: s8.FO,
                        style: { "--custom-featured-tile-gap": "4px" },
                        onPointerEnter: () => S(!0),
                        onPointerLeave: () => S(!1),
                        children: y.map((e, t) =>
                            (0, r.jsx)(
                                s2,
                                {
                                    questId: e.questId,
                                    duplicate: e.isDuplicate,
                                    sectionIdentifier: a,
                                    children: (0, r.jsx)(n6, {
                                        isInFeaturedSection: !0,
                                        isActive: t === O && !R,
                                        onMenuOpenChange: p,
                                        questId: e.questId,
                                        questContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                                        contentPosition: e.questIndex,
                                        rowIndex: 0,
                                        sourceQuestContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                                        sectionIdentifier: a,
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
}
var s6 = n(915655);
function s7(e) {
    let { className: t, ...n } = e;
    return (0, r.jsxs)("div", {
        className: o()(s6.kL, t),
        ...n,
        children: [
            (0, r.jsx)("div", { className: o()(tp.m, s6.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: s6.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(tp.m, s6.Vr) }, t),
                ),
            }),
        ],
    });
}
var s9 = n(384343);
function le(e) {
    let { questContent: t, questIds: n, rowIndex: s, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(s1),
        { useNewTile: o } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = W.Mk.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        c = (0, eI.C)(),
        d = a === l,
        m = i.useCallback(
            (e) => {
                let {
                    scrollingType: s,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    scrollingDirection: a,
                } = e;
                (0, eh.kO)({
                    scrollingType: d ? ei.pk.AUTO : s,
                    scrollingDirection: a,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    questContent: t,
                    carouselSize: n.length,
                });
            },
            [t, n.length, d],
        ),
        E = u === W.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(e0, {
        maskWidth: eV(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${eW(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: s9.FO,
            children: [
                n.map((e, n) =>
                    (0, r.jsx)(
                        s2,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(n6, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: s9.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(na.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === ew.FEATURED,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: s9.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: s9.fu }),
            ],
        }),
    });
}
var lt = n(125822);
let ln = to.A.Millis.WEEK;
function ls() {
    let e = en.A.quests;
    if (0 === en.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let n of s.keys()) {
        let l = e.get(n);
        (null == l || (0, nN.Ic)(l)) && (null == t && (t = new Map(s)), t.delete(n));
    }
    return null != t && ((s = t), !0);
}
class ll extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        (this.waitFor(en.A), (s = new Map()));
        let t = !1;
        if (null != e) {
            let n = Date.now() - ln;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < n) {
                    t = !0;
                    continue;
                }
                s.set(l, r);
            }
        }
        return (this.syncWith([en.A], ls), t);
    }
    getState() {
        let e = {};
        for (let [t, n] of s) e[t] = n;
        return { discoveredAtByQuestId: e };
    }
    getDiscoveredAtByQuestId() {
        return s;
    }
}
let lr = new ll(tU.h, {
    QUESTS_MARK_DISCOVERED: function (e) {
        if (null == en.A.getQuest(e.questId)) return !1;
        let t = new Map(s);
        (t.set(e.questId, new Date().toISOString()), (s = t));
    },
});
function li(e, t) {
    if (e === t) return !0;
    let n = new Set(e),
        s = new Set(t);
    return n.size === s.size && [...n].every((e) => s.has(e));
}
let la = function () {
    let e = (0, sn.Gn)(),
        t = (0, $.Cv)(),
        n = (0, E.bG)([en.A], () => en.A.lastFetchedCurrentQuests > 0),
        { quests: s, isFetchingCurrentQuests: l } = (0, $.Qh)($.NC.ALL, {
            sortMethod: tx.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, lt.A)(
            () =>
                s.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            s.map((e) => {
                let { id: t } = e;
                return t;
            }),
            li,
        ),
        a = (0, tH.T2)(),
        o = (0, E.bG)([lr], () => lr.getDiscoveredAtByQuestId(), []),
        u = i.useMemo(() => (l || !n) && 0 === r.length, [l, n, r.length]),
        { useNewTile: c } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        d = i.useMemo(
            () =>
                u
                    ? []
                    : (function (e) {
                          let {
                                  allQuestIds: t,
                                  hero: n,
                                  discoveredAtByQuestId: s,
                                  isStaff: l,
                                  isPreviewerOnAnyQuest: r,
                                  useNewTile: i = !1,
                              } = e,
                              a = new Map(),
                              o = new Set();
                          function u(e) {
                              if (o.has(e)) return;
                              let t = en.A.getQuestConfig(e);
                              if (null == t) return;
                              let u = (function (e) {
                                  let {
                                          quest: t,
                                          hero: n,
                                          discoveredAtByQuestId: s,
                                          questIdsBySectionIdentifier: l,
                                          isStaff: r,
                                          isPreviewerOnAnyQuest: i,
                                          useNewTile: a = !1,
                                      } = e,
                                      { userStatus: o, preview: u } = en.A.getQuest(t.id) ?? {},
                                      c = [],
                                      d =
                                          null != o &&
                                          null != o.enrolledAt &&
                                          null != o.completedAt &&
                                          null == o.claimedAt;
                                  if ((0, nN.kd)(t) && !d) return r ? [ew.EXPIRED] : null;
                                  if (
                                      (s.has(t.id) && c.push(ew.DISCOVERED),
                                      i && !0 === u && c.push(ew.PREVIEW),
                                      null != o && null != o.enrolledAt && null == o.claimedAt)
                                  )
                                      return [...c, ew.IN_PROGRESS];
                                  let m = !nI(t);
                                  return m && null != n && (0, tE.I0)(n, t.id) && nb(ew.FEATURED, l)
                                      ? [...c, ew.FEATURED]
                                      : new Date(t.expiresAt).valueOf() <= Date.now() + (a ? nA : np)
                                        ? [...c, ew.ENDING_SOON]
                                        : m && nb(ew.FEATURED, l)
                                          ? [...c, ew.FEATURED]
                                          : (0, tm.ks)(t)
                                            ? [...c, ew.ORB]
                                            : [...c, ew.SPECIAL_QUESTS];
                              })({
                                  quest: t,
                                  hero: n,
                                  discoveredAtByQuestId: s,
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
                              n?.questIds?.forEach((e) => {
                                  let t = en.A.getQuestConfig(e);
                                  null == t || nI(t) || u(e);
                              }),
                              t.forEach((e) => u(e)),
                              eB
                                  .map((e) => {
                                      let t = nT?.[e.identifier];
                                      if (null != e.shouldShowFn && !e.shouldShowFn(l, r))
                                          return { ...e, questIds: [] };
                                      let n =
                                          null != t
                                              ? t(a.get(e.identifier) ?? [], { discoveredAtByQuestId: s })
                                              : (a.get(e.identifier) ?? []);
                                      return { ...e, questIds: n };
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
var lo = n(113775);
let lu = {
        [ew.FEATURED]: es.uF.QUEST_HOME_FEATURED_SECTION,
        [ew.IN_PROGRESS]: es.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [ew.ENDING_SOON]: es.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [ew.ORB]: es.uF.QUEST_HOME_ORB_SECTION,
        [ew.DISCOVERED]: es.uF.QUEST_HOME_DISCOVERED_SECTION,
        [ew.EXPIRED]: es.uF.QUEST_HOME_EXPIRED_SECTION,
        [ew.PREVIEW]: es.uF.QUEST_HOME_PREVIEW_SECTION,
        [ew.SPECIAL_QUESTS]: es.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    lc = 4 * to.A.Millis.SECOND;
function ld(e) {
    let { deepLinkedQuestId: t, isLoadingQuestHomeHero: n, className: s, ref: l } = e,
        a = (0, u.zy)(),
        { useNewTile: c, useNewFeaturedTiles: d } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        { sections: m, isFetchingCurrentQuests: E, getSectionIdentifierForTargetedQuest: h } = la(),
        f = i.useRef(null),
        g = i.useRef(null),
        { showToast: x } = sA(),
        [v, j] = i.useState(null),
        [C, S] = i.useState(null),
        [_, N] = i.useState(0),
        [p, A] = i.useState(null),
        O = i.useRef(null),
        T = i.useCallback(
            (e) => {
                A(e.contentRect.width);
            },
            [A],
        );
    (0, eQ.g)(f, T, [T], { fireOnMount: !0 });
    let [{ highlightAnimationProgress: I }, b] = (0, e3.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: lc },
        })),
        R = i.useCallback(
            (e, t) => {
                if (null == e || null == p || E || n) return !1;
                t && (0, tD.sB)(e);
                let s = h(e),
                    l = !0 === t && s !== ew.FEATURED ? ew.DISCOVERED : s;
                if (null == s) return (x(e), !1);
                let r = document.getElementById((0, na.sT)(e, l ?? void 0));
                return (
                    null != r &&
                    (j(e),
                    S(l),
                    N((e) => e + 1),
                    l === ew.FEATURED && c && d
                        ? g.current?.scrollToQuest(e)
                        : r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                    b({
                        from: { highlightAnimationProgress: 0 },
                        to: { highlightAnimationProgress: 1 },
                        reset: !0,
                        onRest: (e) => {
                            e.cancelled || (j(null), S(null));
                        },
                    }),
                    !0)
                );
            },
            [c, d, j, N, b, E, n, x, p, h],
        );
    (i.useImperativeHandle(l, () => ({ scrollToQuest: R }), [R]),
        i.useLayoutEffect(() => {
            if (null == t) {
                O.current = null;
                return;
            }
            O.current !== a && R(t, !0) && (O.current = a);
        }, [a, t, R]));
    let M = i.useMemo(
        () => ({ targetQuestId: v, targetSectionIdentifier: C, highlightCount: _, highlightAnimationProgress: I }),
        [v, C, _, I],
    );
    return (0, r.jsx)(s1.Provider, {
        value: M,
        children: (0, r.jsx)("div", {
            className: o()(lo.kL, s),
            ref: f,
            children: E
                ? (0, r.jsx)(s7, { role: "status", "aria-label": eq.intl.string(eq.t.ZTNur7) })
                : m.length > 0
                  ? m.map((e, t) => {
                        let { identifier: n, questIds: s, title: l } = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: lo.p9,
                                children: [
                                    (0, r.jsx)(em.D, {
                                        variant: "heading-lg/semibold",
                                        style: { "--custom-section-title-inset": "2px" },
                                        className: lo.Gf,
                                        children: eq.intl.string(l),
                                    }),
                                    n === ew.FEATURED && c && d
                                        ? (0, r.jsx)(s3, {
                                              ref: g,
                                              questIds: s,
                                              containerWidth: p,
                                              sectionIdentifier: n,
                                          })
                                        : (0, r.jsx)(le, {
                                              questIds: s,
                                              rowIndex: t,
                                              sectionIdentifier: n,
                                              questContent: lu[n],
                                          }),
                                ],
                            },
                            n,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: lo.y7,
                        children: [
                            (0, r.jsx)(em.D, { variant: "heading-xl/semibold", children: eq.intl.string(eq.t.NqFP6z) }),
                            (0, r.jsx)(X.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: eq.intl.string(eq.t.LhD4yH),
                            }),
                        ],
                    }),
        }),
    });
}
var lm = n(196765),
    lE = n(121894),
    lh = n(851936);
let lf = (0, lm.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let n = t().logger ?? (0, lh.L)({ location: tx.rE.QUEST_HOME_DESKTOP });
        if (n.info === tv.tE || t().elapsed >= 6e4) return;
        let s = performance.now() - t().startTime;
        s > 6e4 && (s = 6e4);
        let l = { elapsed: s };
        (s - t().lastOutputLogTime > 1e3 &&
            (n.info(`QuestHome asset loading duration so far: ${s}ms`), (l.lastOutputLogTime = s)),
            null == t().logger && (l.logger = n),
            (0, lE.r)(() => e(l)));
    },
}));
var lg = n(516226),
    lx = n(620241);
function lv(e) {
    let { children: t, hasSearchResults: n } = e,
        { showDefaultBanner: s } = z.C.useConfig({ location: tx.rE.QUEST_HOME_DEFAULT_BANNER });
    return s ? (0, r.jsx)("div", { className: o()(lx.iS, { [lx.R]: n }), children: t }) : null;
}
function lj(e) {
    let { children: t, onQuestCtaClick: n, questHomeHero: s, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, Y.zT)(),
        c = null != s && !a,
        d = c && (l || u);
    return (0, r.jsxs)("div", {
        className: o()(lx.iS, { [lx.R]: i }),
        children: [
            d && (0, r.jsx)(tQ, {}),
            c ? !l && (0, r.jsx)(tL, { hero: s, isBannerLoading: u, onQuestCtaClick: n }) : t,
        ],
    });
}
var lC = n(613956),
    lS = n(604880),
    l_ = n(318808);
function lN(e) {
    let { adCreativeIds: t } = e,
        n = i.useCallback(() => (0, nF.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: lC.MY,
        children: [
            (0, r.jsx)("img", { className: lC.Bg, src: l_.Ay, alt: "" }),
            (0, r.jsx)("div", { className: lC.r$, children: (0, r.jsx)("img", { src: lS, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: lC.Nr,
                children: [
                    (0, r.jsx)(em.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: lC.ky,
                        children: eq.intl.string(eq.t.GXmn57),
                    }),
                    (0, r.jsx)(X.E, {
                        variant: "body-md/normal",
                        className: lC.G3,
                        children: eq.intl.string(eq.t.bWuKqh),
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        text: eq.intl.string(eq.t.UQvCf7),
                        fullWidth: !0,
                        onClick: n,
                    }),
                ],
            }),
        ],
    });
}
var lp = n(143592),
    lA = n(215130);
let lO = function (e) {
    let { matchingQuestIds: t } = e,
        n = (0, eI.C)(),
        { useNewTile: s } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = W.Mk.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        u = l === W.d.LARGE_MASK_MARGIN,
        c = s ? 12 : 20,
        d = sO(a, eW(n, u), c, 3);
    return (0, r.jsxs)(j.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: lA.kL,
        ref: a,
        children: [
            (0, r.jsxs)(em.D, {
                variant: "heading-lg/medium",
                children: [eq.intl.string(eq.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(j.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: lA.y7,
                      children: [
                          (0, r.jsx)(lp.e, { alt: eq.intl.string(eq.t["Xe+fJM"]) }),
                          (0, r.jsxs)(j.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(em.D, {
                                      variant: "heading-lg/medium",
                                      children: eq.intl.string(eq.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(em.D, {
                                      variant: "heading-xs/medium",
                                      children: eq.intl.string(eq.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: lA.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${eW(n, u)}px`,
                          "--custom-quest-grid-gap": `${c}px`,
                      },
                      children:
                          null !== d &&
                          t.map((e, t) =>
                              s
                                  ? (0, r.jsx)(
                                        nu,
                                        {
                                            children: (0, r.jsx)(n6, {
                                                eagerLoadAssets: !0,
                                                questId: e,
                                                questContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                                contentPosition: t,
                                                rowIndex: Math.floor(t / d),
                                                className: o()(lA.d, lA.hS),
                                                sourceQuestContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                            }),
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        na.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / d),
                                            className: lA.d,
                                            sourceQuestContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var lT = n(649852),
    lI = n.n(lT),
    lb = n(379078),
    lR = n(704554),
    lM = n(823784);
let ly = {
        searchType: lb.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(eR.Vq);
        },
        sortType: lb.r.JARO_WINKLER,
        throttleMs: 200,
    },
    lL = function () {
        let [e, t] = i.useState(""),
            [n, s] = i.useState(null),
            l = (0, E.yK)([en.A], () =>
                (0, $.mn)(Array.from(en.A.quests.values()), { sortMethod: tx.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => lI()(eh.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, lM.tv)();
                (null != e &&
                    (0, eh.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, lM.l6)());
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
                    (s(
                        a
                            ? e
                                  .map((e) => {
                                      let { id: t } = e;
                                      return t;
                                  })
                                  .filter(eR.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: n } = (0, lM.$N)();
                    (n && (0, eh.OQ)({ searchSessionId: t.uuid }),
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
        return ((0, lR.RT)(r, l, d, ly), { matchingQuestIds: n, query: e, setQuery: t, onSearchClose: c });
    };
var lQ = n(631001),
    lH = n(758836),
    lU = n(613057);
let lD = i.createContext({});
function lF(e) {
    let { banner: t, children: n, header: s, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lD);
    return (0, r.jsxs)(eP.X.Provider, {
        value: o,
        children: [
            s,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(H.A, { className: lx.Jo, innerClassName: lx.FG, children: [!l && t, n] }),
                ],
            }),
        ],
    });
}
function lP(e) {
    let { selectedTab: t, onSelectTab: n, tabs: s, endContent: l } = e;
    return (0, r.jsx)(U.S, {
        selectedTabId: t,
        handleTransition: n,
        tabs: s,
        endContent: l,
        icon: f.QuestsIcon,
        keepToastsBelow: !0,
    });
}
function lk(e) {
    let { onLoadComplete: t, className: n, isVirtualCurrencyEnabled: s } = e,
        l = (0, E.bG)([_.Ay], () => _.Ay.useReducedMotion),
        a = (0, E.bG)([k.A], () => k.A.isFocused()),
        { ref: o, inViewport: u } = (0, sc.p)(),
        c = i.useRef(null);
    if (
        (i.useEffect(() => {
            c?.current != null &&
                (c.current.paused || (a && u && !l)
                    ? c.current.paused && !l && u && a && c.current.play()
                    : c.current.pause());
        }, [l, u, a]),
        s)
    ) {
        let e = (0, q.TM)();
        return (0, r.jsx)(Y._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (s) =>
                (0, r.jsx)(b.A, {
                    ref: (e) => {
                        ((c.current = e), (o.current = e), (s.current = e));
                    },
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    className: n,
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
                className: n,
                alt: "",
                onLoad: t,
                ref: e,
            }),
    });
}
function lq(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(lx.Tv, { [lx.lJ]: n }),
        children: [
            (0, r.jsx)(tb, {}),
            (0, r.jsx)("div", { className: o()(lx.nz, { [lx.ZZ]: n }) }),
            (0, r.jsx)(lk, {
                onLoadComplete: t,
                className: o()(lx.Fe, { [lx.H4]: n, [lx.Q8]: !n }),
                isVirtualCurrencyEnabled: n,
            }),
        ],
    });
}
function lw(e) {
    let { onAssetLoad: t } = e,
        { enabled: n } = K.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        s = !n,
        l = i.useCallback(() => {
            s ? window.open(ef.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(ef.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(ev, {
        adContentId: s ? tx.yr : tx.uz,
        title: s ? eq.intl.format(eq.t.BCBIlp, {}) : eq.intl.format(eq.t.lmMBfy, {}),
        subtitle: s ? eq.intl.format(eq.t.U9FY0J, {}) : eq.intl.string(eq.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(g.e, {
                  children: [
                      (0, r.jsx)(x.$, {
                          variant: "overlay-primary",
                          text: eq.intl.string(eq.t["3bdWzt"]),
                          onClick: () =>
                              (0, T.Cz)({
                                  tab: lH.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: N.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(x.$, {
                          variant: "overlay-secondary",
                          text: eq.intl.string(eq.t["7kTAgJ"]),
                          onClick: l,
                      }),
                  ],
              })
            : (0, r.jsx)(x.$, {
                  variant: "overlay-primary",
                  text: eq.intl.string(eq.t.hvVgAZ),
                  onClick: l,
                  icon: v.LinkExternalSmallIcon,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lq, { onAssetLoad: t, isVirtualCurrencyEnabled: s }),
    });
}
let lB = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, u.zy)(),
        s = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(n.search).getAll($.L1.AD_CREATIVE_IDS), [n.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        f = (0, E.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: g,
            onSelectTab: x,
            tabs: v,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                n = lQ.A.useField("tab"),
                s = (0, u.zy)(),
                l = (0, $.p5)(),
                { enabled: r } = W.Mk.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                lQ.A.getState().initializeFromUrl(s.search, l);
            }, [s.search, l]);
            let c = i.useCallback((e) => {
                lQ.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: $.NC.ALL, label: o ? eq.intl.string(eq.t.Jt6u7B) : eq.intl.string(eq.t["0SzXmi"]) },
                            t
                                ? {
                                      id: $.NC.CLAIMED,
                                      label: o ? eq.intl.string(eq.t["3TVY/R"]) : eq.intl.string(eq.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: $.NC.PREVIEW_TOOL, label: eq.intl.string(eq.t.BDUDau) } : null,
                        ].filter(eR.Vq),
                    [t, l, o],
                ),
                selectedTab: n,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: _, setQuery: b, matchingQuestIds: M, onSearchClose: y } = lL(),
        { onScroll: H } = (0, Q.G)(),
        U = V.A.getState().getUtmCurrentContext(),
        D = lf((e) => e.registerAssetLoad),
        k = i.useRef(U);
    (i.useEffect(() => {
        k.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = k;
            (0, p.x)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: g,
                },
            });
        }, [g]),
        (0, I.HU)({ location: eq.intl.string(eq.t.JALI2K) }));
    let q = i.useRef(null),
        { enabled: w } = W.Mk.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: G } = W.aD.useConfig({ location: tx.rE.QUEST_HOME_DESKTOP }),
        K = w || G,
        X = i.useRef(null),
        J = i.useCallback((e) => {
            X.current?.scrollToQuest(e);
        }, []),
        Z = i.useMemo(() => ((0, B.uJ)(n.hash) ? null : n.hash.substring(1)), [n.hash]),
        { questHomeHero: ee, isLoading: et, confirmedEmpty: en } = (0, tH.lg)(l[0] ?? null),
        { showHeroPlaceholder: es } = (0, z.x)(),
        el = i.useCallback(() => {
            ((0, F.Y)({
                pageType: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ef.JJy.ORBS_BALANCE_MENU,
                ctaObject: ef.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, T.Cz)({ tab: lH.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU }));
        }, []);
    (i.useEffect(() => {
        (0, S.I)(ef.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            L.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != f) return;
            let e = new URLSearchParams(n.search),
                l = e.get($.L1.TAB);
            if (l === $.NC.PREVIEW_TOOL) {
                let t = e.get($.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: lU.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === s.action && r?.type === "navigate" && t && l !== $.NC.PREVIEW_TOOL) {
                let t = (0, B.uJ)(n.hash) ? null : n.hash.substring(1),
                    s = e.get($.L1.SORT),
                    r = e.get($.L1.FILTER),
                    i = e.get($.L1.AD_CREATIVE_IDS);
                A.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: lU.XK.QUEST_HOME,
                    params: { questId: (0, B.uJ)(t) ? void 0 : t, sort: s, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [n.search, f, s.action, n.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]));
    let er = i.useCallback(
            (e) => {
                (s.replace({ ...s.location, hash: void 0 }), q.current?.scrollToTop({ animate: !1 }), x(e), y());
            },
            [s, x, y],
        ),
        ei = i.useMemo(() => null != M && K, [M, K]),
        ea = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        eo = i.useMemo(() => ({ onScroll: H, scrollerRef: q }), [H, q]),
        eu = et && !es;
    return a
        ? (0, r.jsx)(lN, { adCreativeIds: l })
        : (0, r.jsx)(lg.M.Provider, {
              value: ea,
              children: (0, r.jsx)(lD.Provider, {
                  value: eo,
                  children: (0, r.jsx)("div", {
                      className: o()(lx.kL, { [lx.KY]: !t }),
                      children: (0, r.jsxs)(lF, {
                          header: (0, r.jsx)(lP, {
                              selectedTab: g,
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
                                              placeholder: eq.intl.string(eq.t.y10TI2),
                                              onClear: y,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(P.SS, {
                                          analyticsPage: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: P.cP.END,
                                          ctaText: eq.intl.string(eq.t["J+vlIR"]),
                                          ctaOnClick: el,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              g === $.NC.ALL &&
                              !eu &&
                              (0, r.jsx)(
                                  Y.y5,
                                  {
                                      source: tx.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: ee?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: en
                                          ? (0, r.jsx)(lv, {
                                                hasSearchResults: ei,
                                                children: (0, r.jsx)(lw, { onAssetLoad: D }),
                                            })
                                          : (0, r.jsx)(lj, {
                                                onQuestCtaClick: J,
                                                hasSearchResults: ei,
                                                questHomeHero: ee,
                                                isLoadingQuestHomeHero: et,
                                                children: (0, r.jsx)(lw, { onAssetLoad: D }),
                                            }),
                                  },
                                  ee?.id,
                              ),
                          children: [
                              ei && null != M && (0, r.jsx)(lO, { matchingQuestIds: M }),
                              g === $.NC.CLAIMED
                                  ? (0, r.jsx)(sZ, { onSelectTab: er, className: ei ? lx.R : void 0 })
                                  : g === $.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(su, { className: ei ? lx.R : void 0 })
                                    : K
                                      ? (0, r.jsx)(ld, {
                                            className: ei ? lx.R : void 0,
                                            ref: X,
                                            deepLinkedQuestId: Z,
                                            isLoadingQuestHomeHero: et,
                                        })
                                      : (0, r.jsx)(sD, { ref: X }),
                          ],
                      }),
                  }),
              }),
          });
};
