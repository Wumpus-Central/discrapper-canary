let s;
(n.r(t), n.d(t, { default: () => l6 }), n(323874), n(14289), n(35956));
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
    _ = n(944791),
    S = n(775602),
    p = n(793574),
    N = n(139286),
    A = n(197111),
    O = n(10088),
    T = n(969935),
    b = n(726249),
    I = n(607470),
    R = n(826673),
    y = n(840251),
    M = n(688151);
let L = new y.E([], M.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var H = n(899647),
    Q = n(979590),
    U = n(651266),
    D = n(783531),
    F = n(318346),
    P = n(863705),
    k = n(531685),
    q = n(676279),
    w = n(975571),
    B = n(240248),
    V = n(87549),
    W = n(945810);
let G = (0, W.mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var K = n(860996),
    z = n(61387),
    $ = n(557637),
    Y = n(834730),
    X = n(939249),
    J = n(289873),
    Z = n(438457),
    ee = n(144779),
    et = n(122760),
    en = n(506988),
    es = n(914313),
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
    let { row_index: n, ...s } = (0, ei.fF)(en.uF.QUEST_HOME_HERO);
    (0, eh.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: s,
        sourceQuestContent: en.uF.QUEST_HOME_HERO,
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
                                                (0, r.jsx)(Y.E, {
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
    e_ = n(635377),
    eS = n.n(e_),
    ep = n(998304),
    eN = n(515718);
let eA = new (eS())({ max: 50 });
var eO = n(49491),
    eT = n(454908),
    eb = n(855531),
    eI = n(120692),
    eR = n(646514),
    ey = n(62617);
function eM(e) {
    let { alt: t, ariaLabel: n, ariaHidden: s, role: l, width: a, height: o, className: u, style: c } = e,
        d = i.useMemo(
            () => (0, ey.H)({ width: a, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, o, c],
        );
    return (0, r.jsx)("img", {
        style: d,
        src: "https://cdn.discordapp.com/assets/content/f7e273b7dc25e6660e31315b01153be32ddbbb5d2934b9021b70aff085d022b2.svg",
        className: (0, ey.Z)(u),
        alt: t,
        "aria-label": n,
        "aria-hidden": s,
        role: l ?? "img",
    });
}
var eL = n(650809),
    eH = n(48507),
    eQ = n(111159),
    eU = n(717421),
    eD = n(559106),
    eF = n(516521);
n(321073);
var eP = n(535185),
    ek = n(408278),
    eq = n(548411),
    ew = n(554830),
    eB = n(321503),
    eV = n(792996),
    eW =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let eG = [
    { type: "featured-quests", identifier: "featured", title: eV.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: eV.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: eV.t.P0lmqC },
    { type: "quests", identifier: "orb", title: eV.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: eV.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: eV.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: eV.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: eV.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function eK(e) {
    return eR.A.space.SPACE_XL.resolve({ density: e });
}
function ez(e, t) {
    return (1220 - 2 * eK(e) * (t ? 2 : 0.75)) / 3;
}
function e$(e, t, n) {
    return e.scrollLeft + (t.getBoundingClientRect().left - (n.getBoundingClientRect().left + 2));
}
var eY = n(915850);
let eX = "data-scroll-target",
    eJ = `[${eX}]`,
    eZ = { anchors: [], windowSizes: [] },
    e0 = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])',
    e1 = { overflowX: "hidden" };
function e3(e, t, n) {
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
let e2 = i.memo(function (e) {
    let {
            children: t,
            className: n,
            itemSelector: s = eJ,
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
        _ = i.useRef(null),
        p = i.useRef(0),
        N = i.useRef(null),
        [A, O] = i.useState(!1),
        [T, b] = i.useState(!1),
        [I, R] = i.useState(!0),
        [y, M] = i.useState([]),
        [L, H] = i.useState([]),
        Q = (0, E.bG)([S.Ay], () => S.Ay.useReducedMotion) ? "auto" : "smooth",
        U = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (O(e.scrollLeft > 0), b(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
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
                if (null == a || null == o || a.scrollWidth <= a.clientWidth) return eZ;
                let u = Array.from(a.querySelectorAll(s));
                if (0 === u.length) return eZ;
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
                        m.push(e$(a, u[e], o));
                        continue;
                    }
                    if (h === u.length - 1) break;
                    e > 0 && m.push((t + d(u[h])) / 2);
                }
                return E.length < 2 ? eZ : (i || m.push(a.scrollWidth), { anchors: m, windowSizes: E });
            })({
                scrollerRef: j,
                containerRef: N,
                itemSelector: s,
                maskWidth: l,
                maskMarginMultiplier: u,
                singleStep: x,
            });
            (H(t), M((t) => (t.length === e.length && t.every((t, n) => t === e[n]) ? t : e)));
        }, [l, s, u, x, M]),
        F = i.useCallback(() => {
            if (null == N.current || N.current?.clientWidth === 0) return R(!0);
            R(N.current?.clientWidth >= 1260);
        }, [N]),
        P = i.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    s = j.current?.getScrollerNode();
                if (null == s || y.length < 2 || (null != f && !f(e * n))) return !1;
                let { currentIndex: l, scrollLefts: r } = e3(s, y, x),
                    i = x ? n : (L[l] ?? 1),
                    a = Math.max(0, Math.min(y.length - 1, l + e * i));
                return ((_.current = t), s.scrollTo({ left: r[a], behavior: Q }), !0);
            },
            [Q, y, L, x, f],
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
                    ((_.current = ei.pk.MANUAL),
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
                null != n && B(n, Q);
            },
            [s, B, Q],
        ),
        W = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            if (null == e) return;
            let { currentIndex: t } = e3(e, y, x),
                n = _.current ?? ei.pk.MANUAL;
            _.current = null;
            let s = p.current;
            p.current = e.scrollLeft;
            let l = e.scrollLeft > s ? ei.VU.RIGHT : ei.VU.LEFT,
                r = L[t] ?? 1;
            g?.({
                scrollingType: n,
                scrollWindowStartIndex: t,
                scrollWindowEndIndex: t + r - 1,
                scrollWindowSize: r,
                scrollingDirection: l,
            });
        }, [g, y, L, x]),
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
                    o = null == a ? null : a.matches(e0) ? a : a.querySelector(e0);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && B(a, "instant"));
            },
            [s, B],
        ),
        K = i.useCallback(() => {
            (U(), D(), F());
        }, [U, D, F]);
    (0, eP.g)(N, K, [], { fireOnMount: !0 });
    let z = a > 0,
        $ = i.useMemo(
            () => ({
                "--custom-scroller-mask-width": `${l}px`,
                "--custom-scroller-overflow-amount": `${a}px`,
                "--custom-scroller-scroll-behavior": Q,
            }),
            [l, a, Q],
        );
    return (0, r.jsxs)("div", {
        className: o()(n, eY.m7),
        ref: N,
        style: $,
        children: [
            d &&
                (0, r.jsxs)("div", {
                    className: eY.rU,
                    children: [
                        (0, r.jsx)(ek.K, {
                            icon: eq.ArrowLargeLeftIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(-1, ei.pk.ARROW),
                            disabled: !A,
                            "aria-label": eV.intl.string(eV.t.vgfxaA),
                            tabIndex: -1,
                        }),
                        (0, r.jsx)(ek.K, {
                            icon: ew.ArrowLargeRightIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(1, ei.pk.ARROW),
                            disabled: !T,
                            "aria-label": eV.intl.string(eV.t.XiOHRX),
                            tabIndex: -1,
                        }),
                    ],
                }),
            !d &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(eY.k9, eY.RW, { [eY.Q2]: A }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(ek.K, {
                                icon: eq.ArrowLargeLeftIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(-1, ei.pk.ARROW),
                                disabled: !A,
                                "aria-label": eV.intl.string(eV.t.vgfxaA),
                                tabIndex: -1,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: o()(eY.k9, eY.K3, { [eY.Q2]: T }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(ek.K, {
                                icon: ew.ArrowLargeRightIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(1, ei.pk.ARROW),
                                disabled: !T,
                                tabIndex: -1,
                                "aria-label": eV.intl.string(eV.t.XiOHRX),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: o()({ [eY.sF]: A && I, [eY.RC]: T && I, [eY.Ni]: z && !A, [eY.GA]: z && !T }),
                children: (0, r.jsx)(eF.zC, {
                    ref: C,
                    orientation: "horizontal",
                    onScroll: U,
                    onScrollEnd: W,
                    onFocusCapture: V,
                    onKeyDown: G,
                    style: c ? e1 : void 0,
                    className: o()({ [eY.x2]: z, [eY.$o]: x }, eY.XG),
                    children: (0, r.jsxs)(eB.X.Provider, {
                        value: j,
                        children: [
                            t,
                            !x &&
                                y.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: eY.fw, style: { insetInlineStart: `${e}px` } },
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
var e7 = n(440703),
    e4 = n(731355),
    e5 = n(621466),
    e6 = n(805251),
    e8 = n(406810),
    e9 = n(628284),
    te = n(65154),
    tt = n(687966),
    tn = n(155718),
    ts = n(496431),
    tl = n(640708),
    tr = n(287809),
    ti = n(5377),
    ta = n(927813),
    to = n(541830),
    tu = n(971649),
    tc = n(651892),
    td = n(417404),
    tm = n(814793),
    tE = n(453384),
    th = n(639701),
    tf = n(398025),
    tg = n(221596),
    tx = n(818348),
    tv = n(499621);
function tj(e) {
    let [t, n] = i.useState(!1),
        s = i.useCallback(() => {
            t || (n(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (n(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: s, onMouseLeave: l, onFocus: s, onBlur: l } };
}
function tC(e) {
    let { hero: t, contentPosition: n, impressionRef: s } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = tj(
            i.useCallback(
                (e) => {
                    (0, eh.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: en.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(en.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, e5.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(tx.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, eU.z)({ hoverSpring: +!!a, config: eI.config.gentle }),
        d = i.useCallback(() => {
            (0, ea._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: en.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                    position: n,
                    impressionId: s.current?.getId(),
                    sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, n, s]);
    return (0, r.jsxs)(X.D, {
        tag: "div",
        className: o()(tv.FW, tv.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [eX]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: tv.Ve,
                children: (0, r.jsx)(eo.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tv.pv, tv.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tv.pv, tv.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(eI.animated.div, {
                className: tv.hn,
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
        { isHovering: c, hoverProps: d } = tj(
            i.useCallback(
                (e) => {
                    (0, eh.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: en.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(en.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = u.current;
        (0, e5.vq)(e, HTMLVideoElement) && (c ? ((e.currentTime = 0), e.play().catch(tx.tE)) : e.pause());
    }, [c]);
    let E = i.useCallback(() => {
            (0, ea._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: en.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: a.current?.getId(),
                    sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
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
    let { topFade: j, bottomFade: C } = (0, eU.z)({
            topFade: +!!f.top,
            bottomFade: +!!f.bottom,
            config: { ...eI.config.gentle, duration: 100 },
        }),
        _ = i.useMemo(() => {
            let e = null != n.firstReleaseDate ? new Date(n.firstReleaseDate).getFullYear() : 0 / 0,
                t = isNaN(e) ? null : e,
                s = n.genres.at(0);
            return [
                t,
                null != s ? (0, to.du)(s) : null,
                n.getCompanyByRole(tn.wk.DEVELOPER).at(0)?.name ?? null,
            ].filter((e) => null != e);
        }, [n]),
        S = i.useMemo(() => _.length > 0, [_]);
    return (0, r.jsxs)(X.D, {
        tag: "div",
        className: o()(tv.FW, tv.n7),
        onClick: E,
        [eX]: !0,
        ...d,
        children: [
            (0, r.jsx)("div", { className: tv.hu }),
            (0, r.jsx)("div", {
                className: tv.fQ,
                children: (0, r.jsx)(eo.N, {
                    showVideo: !0,
                    assetRef: u,
                    imageAsset:
                        null != l
                            ? {
                                  asset: { url: l, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tv.pv, tv.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tv.pv, tv.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsxs)("div", {
                className: tv.iq,
                children: [
                    (0, r.jsxs)("div", {
                        className: tv.o7,
                        children: [
                            (0, r.jsx)(em.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: n.name,
                            }),
                            S &&
                                (0, r.jsx)("p", {
                                    className: tv.c9,
                                    children: _.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(Y.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: e,
                                                    }),
                                                    t < _.length - 1 && (0, r.jsx)(tl.A, { width: 3, height: 3 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsx)(eI.animated.div, {
                        className: tv.hX,
                        style: {
                            maskImage: (0, eI.to)(
                                [j, C],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(eD.vN, {
                            children: (0, r.jsx)(eF.Ch, {
                                ref: h,
                                className: tv.hw,
                                onScroll: v,
                                fade: !c,
                                children: (0, r.jsx)(Y.E, {
                                    variant: "body-md/normal",
                                    color: "text-muted",
                                    className: tv.W1,
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
function tS(e) {
    let { heroId: t, quest: n, onQuestCtaClick: s, contentPosition: l, className: a } = e,
        u = i.useMemo(() => new Date(n.config.expiresAt), [n.config.expiresAt]),
        { days: c, hours: d, minutes: h, seconds: f } = (0, ts.A)(u, ta.A.Millis.MINUTE),
        g = i.useMemo(
            () =>
                (0, ti.uN)(
                    { days: c, hours: d, minutes: h, seconds: f },
                    { days: eV.t["Ux/De1"], hours: eV.t.Lzd5Ie, minutes: eV.t.odmpbP },
                ),
            [c, d, h, f],
        ),
        v = (0, E.bG)([tr.default], () => tr.default.getCurrentUser()),
        C = i.useMemo(() => (0, td.mq)(n.config, v), [n.config, v]),
        _ = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, tc.xv)(e).type) {
                        case e7.l.IN_GAME:
                            return eV.intl.string(eV.t["O/J2kr"]);
                        case e7.l.COLLECTIBLE:
                            return eV.intl.string(eV.t.Jg17Ut);
                        case e7.l.VIRTUAL_CURRENCY:
                            return eV.intl.string(eV.t.ElYQFS);
                        default:
                            return (0, td.mq)(e, t);
                    }
                })(n.config, v),
            [n.config, v],
        ),
        { completedRatio: S, completedRatioDisplay: p } = (0, z.O9)(n),
        N = i.useMemo(() => (0, td.wo)(n.config, v), [n.config, v]),
        A = (0, er.WS)(),
        O = (0, tu.wW)(),
        { isHovering: T, hoverProps: b } = tj(
            i.useCallback(
                (e) => {
                    A({
                        adContentId: t,
                        relatedQuestId: n.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: en.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(en.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, A, l, n.id],
            ),
        ),
        { hoverSpring: I } = (0, eU.z)({ hoverSpring: +!!T, config: eI.config.gentle }),
        R = i.useCallback(() => {
            (s(n.id),
                (0, Z.r)({
                    type: ee.F.CLICK_INTERNAL,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    adCreativeId: t,
                    relatedQuestId: n.id,
                    questContentCTA: ei.Cy.VIEW_QUESTS,
                    surfaceId: en.uF.QUEST_HOME_HERO_SHELF,
                    sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: l,
                    impressionId: O(),
                }));
        }, [s, t, n.id, l, O]);
    return (0, r.jsxs)(X.D, {
        tag: "div",
        className: o()(tv.FW, tv.$R, a),
        onClick: R,
        "aria-label": eV.intl.string(eV.t["th2+0j"]),
        [eX]: !0,
        ...b,
        children: [
            (0, r.jsx)("div", { className: tv.hu }),
            (0, r.jsxs)(j.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(e6.E, { type: { text: _ } }),
                    (0, r.jsx)(eI.animated.div, {
                        style: { opacity: (0, tf.a)(I.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(e6.E, { type: { text: g }, icon: e8.ClockIcon }),
                    }),
                ],
            }),
            (0, r.jsx)(eI.animated.div, {
                className: tv.Tr,
                style: { transform: I.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tE.A, {
                    percentComplete: S,
                    overlayText: T && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(th.A, {
                        quest: n,
                        location: tg.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                        questContent: en.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: T,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(eI.animated.div, {
                className: tv.tw,
                style: {
                    opacity: (0, tf.a)(I.to([0, 1], [1, 0])),
                    transform: I.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(j.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(Y.E, {
                            variant: "body-md/semibold",
                            color: "text-strong",
                            className: tv.Ht,
                            children: C,
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
                                        (0, r.jsx)(e9.CircleCheckIcon, {
                                            size: "xs",
                                            color: eR.A.colors.ICON_MUTED.css,
                                        }),
                                        (0, r.jsx)(Y.E, {
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
                                        (0, tm.pv)(n.config) === e4.Z.VIDEO
                                            ? (0, r.jsx)(te.CirclePlayIcon, {
                                                  size: "xs",
                                                  color: eR.A.colors.ICON_MUTED.css,
                                              })
                                            : (0, r.jsx)(tt.GameControllerIcon, {
                                                  size: "xs",
                                                  color: eR.A.colors.ICON_MUTED.css,
                                              }),
                                        (0, r.jsx)(Y.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: p,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(eI.animated.div, {
                className: tv.um,
                style: { transform: I.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), R());
                    },
                    text: eV.intl.string(eV.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var tp = n(192308);
let tN = "hexagon-campaign-perks-modal";
var tA = n(47671),
    tO = n(644235),
    tT = n(253932);
function tb() {
    let e = (0, E.bG)([tA.A], () => null != tA.A.gradientPreset),
        t = (0, tO.lo)(tT.eh.useSetting().customUserThemeSettings);
    return e || t;
}
var tI = n(211824),
    tR = n(701256),
    ty = n(164900),
    tM = n(161005);
let tL = [
    { key: "client-theme", icon: eL.PaintPaletteIcon, label: tR.default.TTUKuI },
    { key: "display-name-style", icon: eH.LettersIcon, label: eV.t.NEzEws },
    { key: "app-icon", icon: eQ.ClydeIcon, label: eV.t.RPh2ou },
];
function tH(e) {
    let { hero: t, contentPosition: s, impressionRef: l } = e,
        a = tb(),
        { hoverProps: u } = tj(
            i.useCallback(
                (e) => {
                    (0, eh.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: en.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(en.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        ),
        c = i.useRef(null),
        [d, E] = i.useState({ top: !1, bottom: !1 }),
        h = i.useCallback(() => {
            let e = c.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                n = e.getDistanceFromBottom() > 4;
            E((e) => (e.top === t && e.bottom === n ? e : { top: t, bottom: n }));
        }, []);
    i.useLayoutEffect(() => {
        h();
    }, [h]);
    let { topFade: f, bottomFade: g } = (0, eU.z)({
            topFade: +!!d.top,
            bottomFade: +!!d.bottom,
            config: { ...eI.config.gentle, duration: 100 },
        }),
        v = i.useCallback(() => {
            ((0, Z.r)({
                type: ee.F.CLICK_INTERNAL,
                adCreativeType: m.p.QUEST_HOME_HERO,
                adCreativeId: t.id,
                questContentCTA: ei.Cy.OPEN_AD_PERK_MODAL,
                surfaceId: en.uF.QUEST_HOME_HERO_SHELF,
                sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                questContentPosition: s,
                impressionId: l.current?.getId(),
            }),
                (function (e) {
                    let { sourceQuestContent: t } = e,
                        s = (0, tp.lx)(),
                        l = { current: !1 };
                    (0, tp.mM)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e(578667),
                                n.e(71866),
                                n.e(891473),
                                n.e(412117),
                                n.e(263406),
                                n.e(1955),
                                n.e(341161),
                                n.e(410526),
                                n.e(202985),
                                n.e(603619),
                                n.e(175927),
                                n.e(470126),
                                n.e(149697),
                                n.e(128804),
                                n.e(60882),
                                n.e(71151),
                                n.e(227853),
                                n.e(286615),
                                n.e(735042),
                                n.e(311541),
                                n.e(274227),
                                n.e(870088),
                                n.e(300641),
                                n.e(571163),
                                n.e(586662),
                                n.e(831377),
                                n.e(709976),
                                n.e(860596),
                                n.e(279774),
                                n.e(763945),
                                n.e(261204),
                                n.e(686731),
                                n.e(807432),
                                n.e(873532),
                                n.e(590088),
                                n.e(807003),
                                n.e(46083),
                                n.e(152133),
                                n.e(747802),
                                n.e(626353),
                                n.e(71169),
                                n.e(906470),
                                n.e(736663),
                                n.e(419121),
                                n.e(489020),
                                n.e(919789),
                                n.e(669130),
                                n.e(802890),
                                n.e(82937),
                                n.e(987221),
                                n.e(157064),
                                n.e(156957),
                                n.e(918786),
                                n.e(701335),
                                n.e(257935),
                                n.e(724086),
                                n.e(358937),
                                n.e(448738),
                                n.e(206189),
                                n.e(804439),
                                n.e(795345),
                                n.e(894292),
                                n.e(153302),
                                n.e(88683),
                                n.e(239204),
                                n.e(923981),
                                n.e(750370),
                                n.e(972281),
                                n.e(307107),
                                n.e(896622),
                                n.e(466592),
                                n.e(73946),
                                n.e(228271),
                                n.e(387970),
                                n.e(847445),
                                n.e(547510),
                                n.e(966366),
                                n.e(983513),
                                n.e(76928),
                                n.e(699250),
                                n.e(528311),
                                n.e(411938),
                                n.e(653383),
                                n.e(217991),
                                n.e(9796),
                                n.e(952068),
                                n.e(768289),
                                n.e(772565),
                                n.e(195707),
                                n.e(533781),
                                n.e(328276),
                                n.e(592e3),
                                n.e(524434),
                                n.e(882304),
                                n.e(984),
                                n.e(226229),
                                n.e(118994),
                                n.e(516497),
                                n.e(24774),
                                n.e(326794),
                                n.e(670870),
                                n.e(684231),
                                n.e(570690),
                                n.e(886631),
                                n.e(435860),
                                n.e(426782),
                                n.e(406322),
                                n.e(942571),
                                n.e(464759),
                                n.e(763343),
                                n.e(194704),
                                n.e(274461),
                                n.e(830560),
                                n.e(384054),
                                n.e(847131),
                                n.e(572430),
                                n.e(816348),
                                n.e(165291),
                                n.e(109383),
                                n.e(818291),
                                n.e(243794),
                                n.e(519435),
                                n.e(990185),
                                n.e(752924),
                                n.e(849162),
                                n.e(660201),
                                n.e(770925),
                                n.e(179301),
                                n.e(918347),
                                n.e(689521),
                                n.e(237403),
                                n.e(10886),
                                n.e(84993),
                                n.e(592268),
                                n.e(374962),
                                n.e(553627),
                                n.e(887141),
                                n.e(736919),
                                n.e(440636),
                                n.e(568960),
                                n.e(459257),
                                n.e(924697),
                                n.e(549009),
                                n.e(339715),
                                n.e(985301),
                                n.e(981059),
                                n.e(631323),
                                n.e(464452),
                                n.e(243852),
                                n.e(714144),
                                n.e(816027),
                                n.e(458855),
                                n.e(305161),
                                n.e(845486),
                                n.e(401425),
                                n.e(120561),
                                n.e(880186),
                                n.e(58353),
                                n.e(17256),
                                n.e(377016),
                                n.e(433665),
                                n.e(324469),
                                n.e(70379),
                                n.e(417333),
                                n.e(905581),
                                n.e(834552),
                                n.e(993103),
                                n.e(863232),
                                n.e(708757),
                                n.e(295507),
                                n.e(332447),
                                n.e(959880),
                                n.e(174016),
                                n.e(22921),
                                n.e(910471),
                                n.e(11301),
                                n.e(430858),
                                n.e(861060),
                                n.e(364827),
                                n.e(77333),
                                n.e(626565),
                                n.e(257980),
                                n.e(960235),
                                n.e(585968),
                                n.e(486137),
                                n.e(80421),
                                n.e(206027),
                                n.e(393471),
                                n.e(177641),
                                n.e(198329),
                                n.e(678157),
                                n.e(942374),
                                n.e(223219),
                                n.e(130795),
                                n.e(10866),
                                n.e(313537),
                                n.e(40291),
                                n.e(733115),
                                n.e(397270),
                                n.e(406222),
                                n.e(393336),
                                n.e(761597),
                                n.e(373122),
                                n.e(649408),
                                n.e(221856),
                                n.e(186212),
                                n.e(755936),
                                n.e(147662),
                                n.e(316344),
                                n.e(973973),
                                n.e(274501),
                                n.e(544571),
                                n.e(692990),
                                n.e(714496),
                                n.e(305834),
                                n.e(745959),
                                n.e(858529),
                                n.e(481987),
                                n.e(595653),
                                n.e(958038),
                                n.e(532039),
                                n.e(719466),
                                n.e(14234),
                                n.e(576909),
                                n.e(830228),
                                n.e(27355),
                                n.e(953665),
                                n.e(406174),
                                n.e(126437),
                                n.e(481647),
                                n.e(713708),
                                n.e(776273),
                                n.e(749248),
                                n.e(704434),
                                n.e(900361),
                                n.e(21921),
                                n.e(885533),
                                n.e(282833),
                                n.e(393766),
                                n.e(258398),
                                n.e(676418),
                                n.e(572963),
                                n.e(70833),
                                n.e(897073),
                                n.e(161275),
                                n.e(761253),
                                n.e(401518),
                                n.e(166495),
                                n.e(362274),
                                n.e(570849),
                                n.e(45072),
                                n.e(139970),
                                n.e(173764),
                                n.e(188689),
                                n.e(830221),
                                n.e(858164),
                                n.e(521930),
                                n.e(357688),
                                n.e(308555),
                                n.e(977547),
                                n.e(508371),
                                n.e(554241),
                                n.e(41250),
                                n.e(724303),
                                n.e(179049),
                                n.e(132737),
                                n.e(53102),
                                n.e(146070),
                                n.e(538733),
                                n.e(658216),
                                n.e(854622),
                                n.e(629482),
                                n.e(590365),
                                n.e(989088),
                                n.e(37977),
                                n.e(136149),
                                n.e(470068),
                                n.e(817989),
                                n.e(88599),
                                n.e(780262),
                                n.e(720590),
                                n.e(147626),
                                n.e(870663),
                                n.e(727779),
                                n.e(412743),
                                n.e(585503),
                                n.e(437065),
                                n.e(203589),
                                n.e(709640),
                                n.e(382465),
                                n.e(294857),
                                n.e(15481),
                                n.e(179745),
                                n.e(952548),
                                n.e(893917),
                                n.e(668802),
                                n.e(631358),
                                n.e(459414),
                                n.e(335395),
                                n.e(636373),
                                n.e(19220),
                                n.e(945413),
                                n.e(402026),
                                n.e(163235),
                                n.e(230664),
                                n.e(655708),
                                n.e(632756),
                                n.e(564850),
                                n.e(941040),
                                n.e(124791),
                                n.e(35771),
                                n.e(648344),
                                n.e(170104),
                                n.e(491793),
                                n.e(889638),
                                n.e(256769),
                                n.e(553984),
                                n.e(902564),
                                n.e(142867),
                                n.e(884601),
                                n.e(782969),
                                n.e(30441),
                                n.e(704727),
                                n.e(214285),
                                n.e(248330),
                                n.e(255580),
                                n.e(373004),
                                n.e(803332),
                                n.e(776766),
                                n.e(938149),
                                n.e(408362),
                                n.e(741678),
                                n.e(504370),
                                n.e(96539),
                                n.e(474610),
                                n.e(852617),
                                n.e(102698),
                                n.e(125964),
                                n.e(415266),
                                n.e(787139),
                                n.e(608557),
                                n.e(737021),
                                n.e(775951),
                                n.e(495786),
                                n.e(428967),
                                n.e(254506),
                                n.e(447937),
                                n.e(874342),
                                n.e(138830),
                                n.e(258033),
                                n.e(757901),
                                n.e(976516),
                                n.e(400501),
                                n.e(985794),
                                n.e(770182),
                                n.e(695358),
                                n.e(767837),
                                n.e(473384),
                                n.e(129080),
                                n.e(432209),
                                n.e(996868),
                                n.e(506620),
                                n.e(238232),
                                n.e(368062),
                                n.e(859991),
                                n.e(667092),
                                n.e(225575),
                                n.e(608032),
                                n.e(477970),
                                n.e(709371),
                                n.e(466718),
                                n.e(330724),
                                n.e(599719),
                                n.e(318939),
                                n.e(178048),
                                n.e(556868),
                                n.e(823300),
                                n.e(987478),
                                n.e(961508),
                                n.e(67422),
                                n.e(726511),
                                n.e(140667),
                                n.e(713567),
                                n.e(444567),
                                n.e(695170),
                                n.e(606949),
                                n.e(540715),
                                n.e(506045),
                                n.e(147540),
                                n.e(294607),
                                n.e(618706),
                                n.e(363430),
                                n.e(708536),
                                n.e(25572),
                                n.e(215920),
                                n.e(439089),
                                n.e(982730),
                                n.e(800872),
                                n.e(452531),
                                n.e(573330),
                                n.e(65393),
                                n.e(275859),
                                n.e(257113),
                                n.e(416236),
                            ]).then(n.bind(n, 74314));
                            return (n) => (0, r.jsx)(e, { ...n, sourceQuestContent: t, savingRef: l });
                        },
                        {
                            modalKey: tN,
                            contextKey: s,
                            onCloseRequest: () => {
                                l.current || (0, tp.Oo)(tN, s);
                            },
                        },
                    );
                })({ sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF }));
        }, [t.id, s, l]);
    return (0, r.jsxs)("div", {
        className: o()(ty.Nr, tM.Tp, { [tM.D7]: !a }),
        [eX]: !0,
        ...u,
        children: [
            (0, r.jsxs)("div", {
                className: ty.$_,
                children: [
                    (0, r.jsx)("div", { className: ty.qx }),
                    (0, r.jsx)(eM, { alt: "", ariaHidden: !0, width: 244, className: ty.yr }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: ty.Qs,
                children: [
                    (0, r.jsx)(eI.animated.div, {
                        className: ty.ns,
                        style: {
                            maskImage: (0, eI.to)(
                                [f, g],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(eD.vN, {
                            children: (0, r.jsx)(eF.zC, {
                                ref: c,
                                className: ty.zH,
                                onScroll: h,
                                children: (0, r.jsxs)(j.B, {
                                    gap: 20,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 12,
                                            children: [
                                                (0, r.jsx)(em.D, {
                                                    variant: "heading-xl/semibold",
                                                    color: "text-strong",
                                                    children: eV.intl.string(tR.default["fShp/D"]),
                                                }),
                                                (0, r.jsx)(Y.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-default",
                                                    children: eV.intl.format(tR.default.lCtBoO, {
                                                        nonPremiumEndDate: tI.Fg,
                                                        premiumEndDate: tI.zv,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(j.B, {
                                            gap: 8,
                                            children: tL.map((e) => {
                                                let { key: t, icon: n, label: s } = e;
                                                return (0, r.jsxs)(
                                                    j.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        gap: 8,
                                                        children: [
                                                            (0, r.jsx)(n, {
                                                                size: "refresh_sm",
                                                                color: eR.A.colors.ICON_DEFAULT.css,
                                                            }),
                                                            (0, r.jsx)(Y.E, {
                                                                variant: "body-sm/medium",
                                                                color: "text-default",
                                                                children: eV.intl.string(s),
                                                            }),
                                                        ],
                                                    },
                                                    t,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(x.$, {
                            variant: "primary",
                            fullWidth: !0,
                            text: eV.intl.string(tR.default["KX1/jp"]),
                            onClick: v,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var tQ = n(418842),
    tU = n(129230),
    tD = n(403362),
    tF = n(856383);
let tP = (0, W.mj)({
    name: "2026-06-hero-shelf-ad-tile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tk = n(792620);
function tq(e, t, n) {
    if (null != n) {
        if (e) {
            let e = n.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] });
            return {
                "--custom-quest-highlight-blur": (0, eI.to)([e], (e) => `${25 * e}px`),
                "--custom-quest-highlight-alpha": (0, eI.to)([e], (e) => `${e}`),
            };
        }
        if (t)
            return { opacity: (0, eI.to)([n.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var tw = n(531525),
    tB = n(726356);
function tV(e) {
    let { hero: t, shelfQuests: n, isBannerLoading: s, onQuestCtaClick: l } = e,
        a = (0, tQ.C)(),
        { enabled: u } = tP.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        c = (0, eb.kV)(t),
        d = tb(),
        E = u && !c,
        h = i.useMemo(
            () =>
                E
                    ? (n
                          .map((e) => (0, tk.xc)(e) ?? (0, tk._3)(e)?.at(0) ?? null)
                          .filter(tD.Vq)
                          .at(0) ?? null)
                    : null,
            [n, E],
        ),
        { isLoading: f, data: g, error: x } = (0, eT.I)(h),
        v = (0, eO.A)(g),
        C = E && null != g && !v;
    i.useEffect(() => {
        E &&
            null != h &&
            null != x &&
            (tU.default.track(ef.HAw.AD_ASSET_LOADING_FAILURE, {
                source: tg.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                ad_creative_id: t.id,
                ad_creative_type: m.p.QUEST_HOME_HERO,
                application_ids: [h],
            }),
            tF.A.captureException(x, { tags: { source: tg.rE.QUEST_HOME_HERO_SHELF_DESKTOP } }));
    }, [E, x, t.id, h]);
    let _ = i.useMemo(
            () => (C ? (null != t.shelfImage ? t.shelfImage : (g?.getCoverURL(512) ?? null)) : null),
            [C, t, g],
        ),
        S = (function (e) {
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
                                                      ? (n((0, eN.Sf)(l, t, 10)),
                                                        (l.onerror = null),
                                                        (l.onload = null),
                                                        (l = null))
                                                      : s("image is null");
                                              }),
                                              (l.src = e));
                                      })
                                  ).map((e) => {
                                      let [t, n, s] = e;
                                      return (0, ep.Ob)(t, n, s);
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
            i.useMemo(() => (null != _ ? (0, el.UX)(_, { format: "webp", width: 400, height: 600 }) : null), [_]),
            8,
        ),
        p = i.useMemo(() => (null == S ? null : (0, eC.Z)(S)), [S]),
        N = i.useMemo(() => {
            if (null != p)
                return {
                    "--custom-hero-shelf-scrim-gradient-start": p[0],
                    "--custom-hero-shelf-scrim-gradient-end": p[1],
                };
        }, [p]);
    return s || f
        ? (0, r.jsx)(tW, { numShelfCards: n.length + 1, hasWideLeadingTile: u || c })
        : (0, r.jsx)(e2, {
              className: o()(tB.vo, { [tM.vo]: c }),
              overflowAmount: 25,
              maskWidth: eK(a),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(j.B, {
                  className: tB.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  style: N,
                  children: [
                      c &&
                          (0, r.jsx)(eu.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: en.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tH, { hero: t, contentPosition: 0, impressionRef: n }),
                                  }),
                          }),
                      !u &&
                          !c &&
                          (0, r.jsx)(eu.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: en.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tC, { hero: t, contentPosition: 0, impressionRef: n }),
                                  }),
                          }),
                      C &&
                          (0, r.jsx)(eu.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: en.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(t_, {
                                          hero: t,
                                          game: g,
                                          shelfImage: _,
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
                                  questContent: en.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: n + 1,
                                  sourceQuestContent: en.uF.QUEST_HOME_HERO_SHELF,
                                  children: (s) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              s.current = e;
                                          },
                                          children: (0, r.jsx)(tS, {
                                              heroId: t.id,
                                              quest: e,
                                              onQuestCtaClick: l,
                                              contentPosition: n + 1,
                                              className: c ? o()(tM.Tp, { [tM.D7]: !d }) : void 0,
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
function tW(e) {
    let { className: t, numShelfCards: n, hasWideLeadingTile: s } = e,
        l = (0, tQ.C)(),
        i = s ? Math.max(n, 3) : Math.max(n, 4);
    return (0, r.jsx)(e2, {
        className: o()(tB.vo, t),
        overflowAmount: 25,
        maskWidth: eK(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(j.B, {
            className: tB.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: i }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(tw.m, tB.W_, { [tB.E8]: s && 0 === t }) }, t),
            ),
        }),
    });
}
var tG = n(74498);
function tK() {
    return (0, r.jsx)("div", { className: tG.Np });
}
function tz(e) {
    let { heroImage: t, heroVideo: n } = e,
        s = i.useRef(null);
    (0, ec.A)(s);
    let l = i.useMemo(() => (null != n ? (0, el.WV)(n) : null) ?? t, [n, t]);
    return (0, r.jsx)($._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eo.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: s,
                imageAsset: {
                    alt: "",
                    className: tG.LY,
                    asset: { url: l, mimetype: (0, el.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: tG.LY,
                    asset: { url: n, mimetype: (0, el.vm)(n), isAnimated: !0 },
                    assetId: n,
                },
            }),
    });
}
function t$(e) {
    let { heroImage: t, heroVideo: n } = e;
    return null == n
        ? (0, r.jsxs)("div", {
              className: tG.Tv,
              children: [
                  (0, r.jsx)(tK, {}),
                  (0, r.jsx)("div", {
                      className: tG.LO,
                      children: (0, r.jsx)($._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: tG.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tG.LO, tG.jx, tG.hw),
                      children: (0, r.jsx)("img", { className: tG.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tG.LO, tG.jx, tG.Co),
                      children: (0, r.jsx)("img", { className: tG.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: tG.Tv,
              children: [
                  (0, r.jsx)(tK, {}),
                  (0, r.jsx)("div", { className: tG.LO, children: (0, r.jsx)(tz, { heroImage: t, heroVideo: n }) }),
              ],
          });
}
function tY(e) {
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
                    sourceQuestContent: en.uF.QUEST_HOME_HERO,
                }));
        }, [n, s, t.id, t.questIds, l]),
        null
    );
}
function tX(e) {
    let { hero: t, onQuestCtaClick: n, isBannerLoading: s } = e,
        l = (0, E.bG)([et.A], () => et.A.quests),
        a = (0, E.bG)([et.A], () => et.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, z.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, ej.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        f = h[0],
        { enabled: v } = es.Ay.useConfig({ location: tg.rE.QUEST_HOME_HERO });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eu.Z, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: en.uF.QUEST_HOME_HERO,
                sourceQuestContent: en.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(tY, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(ev, {
                                ref: (t) => {
                                    e.current = s ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [tG.lX]: s }),
                                topContent: (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, r.jsx)($._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, r.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: tG.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(Y.E, {
                                            color: "text-strong",
                                            variant: "body-sm/normal",
                                            className: tG.yu,
                                            children: eV.intl.string(eV.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                overlay:
                                    v &&
                                    (0, r.jsx)(X.D, {
                                        tag: "div",
                                        className: tG.fj,
                                        "aria-label": t.cta.buttonLabel,
                                        onClick: () => {
                                            (0, ea._Q)(
                                                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                                                {
                                                    content: en.uF.QUEST_HOME_HERO_BANNER,
                                                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                                                    impressionId: l.current?.getId(),
                                                    sourceQuestContent: en.uF.QUEST_HOME_HERO,
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
                                                        content: en.uF.QUEST_HOME_HERO,
                                                        ctaContent: ei.Cy.OPEN_GAME_LINK,
                                                        impressionId: l.current?.getId(),
                                                        sourceQuestContent: en.uF.QUEST_HOME_HERO,
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
                                                        (0, Z.r)({
                                                            type: ee.F.CLICK_INTERNAL,
                                                            adCreativeType: m.p.QUEST_HOME_HERO,
                                                            adCreativeId: t.id,
                                                            questContentCTA: ei.Cy.VIEW_QUESTS,
                                                            surfaceId: en.uF.QUEST_HOME_HERO,
                                                            sourceQuestContent: en.uF.QUEST_HOME_HERO,
                                                        }));
                                                },
                                                size: "md",
                                                text: eV.intl.string(eV.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(t$, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(tV, { hero: t, isBannerLoading: s, shelfQuests: u, onQuestCtaClick: n }),
        ],
    });
}
function tJ() {
    return (0, r.jsx)("div", { className: o()(eg.iE, eg.FG, eg.B3), children: (0, r.jsx)(J.y, {}) });
}
var tZ = n(201805),
    t0 = n(73153),
    t1 = n(343559);
n(667532);
var t3 = n(890497),
    t2 = n(663417),
    t7 = n(265872),
    t4 = n(624479),
    t5 = n(416052),
    t6 = n(417098);
function t8(e) {
    let { error: t } = e,
        n = t.getAnyErrorMessage();
    return (0, r.jsx)(t6.$T, {
        color: t6.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != n ? n : eV.intl.string(eV.t.ZErSg5) }),
    });
}
var t9 = n(602853),
    ne = n(817281),
    nt = n(688810),
    nn = n(270746),
    ns = n(413599),
    nl = n(912875);
let nr = function () {
    let { analyticsLocations: e } = (0, nt.Ay)(),
        t = (0, E.bG)([ns.A], () => ns.A.theme),
        n = i.useRef(null);
    i.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let s = (0, t9.r)(eR.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.LIGHT),
        l = (0, t9.r)(eR.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.DARK),
        a = (0, t9.r)(eR.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.ONYX),
        o = i.useMemo(
            () => [
                { theme: ef.NJ8.LIGHT, label: eV.t.K2sFfo, color: s.hex() },
                { theme: ef.NJ8.DARK, label: eV.t.b8Cei3, color: l.hex() },
                { theme: ef.NJ8.ONYX, label: eV.t.Do4ZJx, color: a.hex() },
            ],
            [s, l, a],
        ),
        u = i.useCallback(
            (t) => {
                ((0, nn.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, ne.u_)({ theme: t }));
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != n.current && u(n.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: nl.N,
        children: (0, r.jsxs)("div", {
            className: nl.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        X.D,
                        {
                            tag: "div",
                            className: nl.Du,
                            onClick: () => u(e.theme),
                            "aria-label": eV.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${nl.WT} ${t === e.theme ? nl.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: nl.i, children: eV.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(ek.K, {
                    onClick: c,
                    "aria-label": eV.intl.string(eV.t.yBZMsQ),
                    icon: t2.RefreshIcon,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var ni = n(219354);
let na = function (e) {
    let { questId: t, setQuestId: n, quest: s, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, z.pT)(),
        h = (0, E.bG)([et.A], () => (null != t ? et.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, E.bG)([et.A], () => null != t && et.A.isFetchingQuestPreview(t), [t]),
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
                    await (0, t1.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, t1.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, t1.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(
            (e) => {
                (0, B.uJ)(e) || null == n || n(e);
            },
            [n],
        );
    return (0, r.jsxs)("div", {
        className: ni.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: ni.Br,
                    children: (0, r.jsxs)("div", {
                        className: ni.bo,
                        children: [
                            (0, r.jsx)(nr, {}),
                            (0, r.jsxs)("div", {
                                className: ni.b8,
                                children: [
                                    (0, r.jsx)(
                                        t3.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: S,
                                            placeholder: eV.intl.string(eV.t.Zw8jxn),
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
                                    (0, r.jsx)(ek.K, {
                                        onClick: l,
                                        "aria-label": eV.intl.string(eV.t.wzzjk9),
                                        icon: t2.RefreshIcon,
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
                    className: ni.in,
                    children: (0, r.jsxs)(g.e, {
                        className: ni.xv,
                        children: [
                            (0, r.jsx)(x.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eV.intl.string(eV.t.jQEfRT),
                            }),
                            (0, r.jsx)(x.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eV.intl.string(eV.t.taqkwK),
                            }),
                            (0, r.jsx)(x.$, {
                                onClick: _,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eV.intl.string(eV.t.cKSLr4),
                            }),
                            (0, r.jsx)(t7.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: ni.PP,
                                        children: (0, r.jsx)("div", {
                                            className: ni.sH,
                                            children: (0, r.jsx)(t5.A, {
                                                value: tx.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eV.intl.string(eV.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(ek.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": eV.intl.string(eV.t.rNGQfD),
                                        icon: t4.CopyIcon,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(t8, { error: h }) : null,
            f ? (0, r.jsx)(J.y, {}) : null,
        ],
    });
};
var no = n(95362),
    nu = n(761508),
    nc = n(425069);
function nd() {
    return (0, r.jsx)("div", { className: nc.y });
}
var nm = n(834615),
    nE = n(34665);
let nh = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nE.x3,
        children: (0, r.jsxs)("div", {
            className: nE.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: nE.R_,
                    variant: "heading-sm/semibold",
                    children: eV.intl.string(eV.t.L2mlUb),
                }),
                (0, r.jsx)(eu.R, {
                    questOrQuests: t,
                    questContent: en.uF.ACTIVITY_PANEL,
                    sourceQuestContent: en.uF.ACTIVITY_PANEL,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(nm.default, { quest: t }),
                        }),
                }),
            ],
        }),
    });
};
var nf = n(66246),
    ng = n(717695),
    nx = n(466209),
    nv = n(83978);
let nj = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nE.x3,
        children: (0, r.jsxs)("div", {
            className: nx.wp,
            children: [
                (0, r.jsx)(em.D, {
                    className: nx.Oo,
                    variant: "heading-sm/semibold",
                    children: eV.intl.string(eV.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: nx.RE,
                    children: (0, r.jsx)("div", {
                        className: nx.Z,
                        children: (0, r.jsx)("div", {
                            className: nv.C3,
                            children: (0, r.jsx)(ng.A, {
                                children: (0, r.jsx)($.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(nf.QuestBarQuestContent, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var nC = n(10394);
function n_(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nE.x3,
        children: (0, r.jsxs)("div", {
            className: nE.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: nE.R_,
                    variant: "heading-sm/semibold",
                    children: eV.intl.string(eV.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: nE.YT,
                    children: (0, r.jsx)(nC.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var nS = n(632623),
    np = n(622409);
let nN = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: nE.x3,
        children: (0, r.jsxs)("div", {
            className: nE.B0,
            children: [
                (0, r.jsx)(em.D, { variant: "heading-sm/semibold", children: eV.intl.string(eV.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: np.wu,
                    children: (0, r.jsx)("span", { className: np.cy, children: eV.intl.string(eV.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: np.oU,
                    children: (0, r.jsx)("div", {
                        className: np.zx,
                        children: (0, r.jsx)("div", {
                            className: np.Lj,
                            children: (0, r.jsx)("div", {
                                className: np.n0,
                                children: (0, r.jsx)(nS.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var nA = n(731388),
    nO = n(484810);
function nT(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: nO.y, children: t });
}
var nb = n(612324),
    nI = n(365199),
    nR = n(270045),
    ny = n(79545),
    nM = n(173936),
    nL = n(914410),
    nH = n(426110),
    nQ = n(339350),
    nU = n(782134),
    nD = n(271536),
    nF = n(768622),
    nP = n(793934),
    nk = n(662940),
    nq = n(977416);
let nw = 2 * ta.A.Millis.DAY,
    nB = 3 * ta.A.Millis.DAY,
    nV = new Map(eG.map((e) => [e.identifier, e])),
    nW = {
        [eW.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: n } = t;
            return e.slice().sort((e, t) => {
                var s, l;
                return ((s = n.get(e)), (l = n.get(t)), null == s || null == l ? 0 : l.localeCompare(s));
            });
        },
    };
function nG(e) {
    return e.features.includes(tg.Li.EXCLUDE_FROM_FEATURED);
}
function nK(e, t) {
    let n = nV.get(e)?.maxItems,
        s = t.get(e)?.length ?? 0;
    return null == n || s < n;
}
var nz = n(853978);
function n$(e) {
    let { quest: t, isHovering: n = !1 } = e,
        s = (0, ny.Pd)(t),
        l = (0, E.bG)([et.A], () => s === ny.UA.UNENROLLED && null != et.A.questEnrollmentBlockedUntil, [s]),
        a = (0, z.fc)(t),
        u = (0, z.I3)(t),
        c = i.useMemo(() => (0, nk.Dd)(t.config, s, l), [t.config, s, l]),
        d = i.useMemo(() => (0, nk.CK)(s, a, u, l), [s, a, u, l]),
        m = (function (e) {
            let t = (0, ny.Pd)(e),
                [n] = i.useState(() => Date.now()),
                s = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = s.getTime() - n,
                r =
                    (function (e) {
                        switch (e) {
                            case ny.UA.UNENROLLED:
                            case ny.UA.ENROLLED:
                            case ny.UA.INCOMPLETE:
                                return !0;
                            case ny.UA.COMPLETED:
                            case ny.UA.CLAIMED:
                            case ny.UA.EXPIRED:
                            case ny.UA.EXPIRED_CLAIMABLE:
                            case ny.UA.EXPIRED_CLAIMED:
                                return !1;
                        }
                    })(t) &&
                    l < nB &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, ts.A)(s, ta.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(nz.fC, { [nz.R]: n }),
        children: [
            (0, r.jsxs)("div", {
                className: nz.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(Y.E, {
                            variant: "body-xs/semibold",
                            className: nz.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(Y.E, {
                            variant: "body-xs/semibold",
                            color: "text-overlay-light",
                            className: nz.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: nz.BA,
                            children: [
                                (function (e, t) {
                                    let n = { size: "xxs", className: nz.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(nQ.HourglassIcon, { ...n });
                                    switch ((0, nk.pv)(e)) {
                                        case nk.UK.PLAY:
                                            return (0, r.jsx)(tt.GameControllerIcon, { ...n });
                                        case nk.UK.WATCH:
                                            return (0, r.jsx)(nU.PlayIcon, { ...n });
                                        case nk.UK.ACTIVITY:
                                            return (0, r.jsx)(nD.QuestsMissionsIcon, { ...n });
                                        case nk.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(nF.FlashIcon, { ...n });
                                        case nk.UK.ARENA:
                                            return (0, r.jsx)(nP.QuestsArenaIcon, { ...n });
                                    }
                                })(t, l),
                                (0, r.jsx)(Y.E, {
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
                    className: o()(nz.qS, nz.WZ),
                    children: (0, r.jsx)(Y.E, {
                        variant: "body-xs/semibold",
                        color: "currentColor",
                        children: eV.intl.string(eV.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var nY = n(409626),
    nX = n(870273),
    nJ = n(646917),
    nZ = n(866665),
    n0 = n(743368),
    n1 = n(452411),
    n3 = n(321538),
    n2 = n(964051);
function n7(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l, contentPosition: i, rowIndex: a } = e,
        u = (0, ny.Pd)(t),
        { ctaOnHover: c } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        d = (0, E.bG)([et.A], () => u === ny.UA.UNENROLLED && null != et.A.questEnrollmentBlockedUntil, [u]),
        m = !(0, tk.no)(t) || ![ny.UA.ENROLLED, ny.UA.UNENROLLED, ny.UA.INCOMPLETE].includes(u),
        h = u === ny.UA.EXPIRED || u === ny.UA.EXPIRED_CLAIMED || (u === ny.UA.CLAIMED && (0, tk.GL)(t)),
        f = (0, z.do)({ quest: t, content: n, ctaContent: ei.Cy.OPEN_GAME_LINK, sourceQuestContent: s });
    return (0, r.jsxs)("div", {
        className: o()(n2.lO, { [n2.Fq]: l || !c }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)("div", { className: n2.Cj }),
            (0, r.jsx)(ed.N, {
                theme: ef.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, n2.tn),
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
                                        : (0, r.jsx)(nZ.m, {
                                              text: eV.intl.string(eV.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, r.jsx)(ek.K, {
                                                  variant: "secondary",
                                                  icon: n0.LinkExternalMediumIcon,
                                                  "aria-label": eV.intl.string(eV.t.LLLLPD),
                                                  onClick: f,
                                              }),
                                          })),
                                !h &&
                                    !d &&
                                    (0, r.jsx)(n1.A, {
                                        quest: t,
                                        surface: ny.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: n,
                                        analyticsCtxSourceQuestContent: s,
                                        analyticsCtxQuestContentPosition: i,
                                        analyticsCtxQuestContentRowIndex: a,
                                    }),
                                d &&
                                    (0, r.jsx)(x.$, {
                                        variant: "overlay-primary",
                                        text: eV.intl.string(eV.t.vY9GgG),
                                        onClick: () => (0, n3.m6)(t, n, s),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var n4 = n(403581),
    n5 = n(576761),
    n6 = n(41327);
function n8(e) {
    let { onClick: t, questId: n, orbMultiplierEligibility: s } = e,
        l = (0, z.ZP)(n),
        i = (0, n5.B9)(s);
    if (null == l) return null;
    let a = i
        ? eV.intl.formatToPlainString(eV.t.l2UfLG, { bonusOrbMultiplier: l })
        : eV.intl.formatToPlainString(eV.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(X.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, n3.gC)(l, s), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: n6.k,
            children: [
                (0, r.jsx)(n4.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(Y.E, { variant: "body-sm/normal", color: "currentColor", className: n6.Q, children: a }),
            ],
        }),
    });
}
var n9 = n(947641),
    se = n(194261),
    st = n(106799),
    sn = n(476334);
function ss(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l } = e,
        a = (0, E.bG)([tr.default], () => tr.default.getCurrentUser()),
        u = (0, td.mq)(t.config, a),
        c = (0, td.ks)(t.config),
        d = (0, td.wo)(t.config, a),
        { completedRatio: m } = (0, z.O9)(t),
        h = (0, ny.Pd)(t),
        f = (0, z.Hv)(),
        g = h === ny.UA.CLAIMED || h === ny.UA.EXPIRED_CLAIMED,
        x = g || h === ny.UA.COMPLETED || h === ny.UA.EXPIRED_CLAIMABLE,
        v = (0, tZ.ix)({ quest: t, questContent: n, sourceQuestContent: s }),
        j = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), f && !g)) {
                    ((0, eh.Y5)({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: ei.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: s,
                    }),
                        (0, n3.FS)());
                    return;
                }
                v();
            },
            [v, f, g, t.id, n, s],
        ),
        C = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(th.A, {
                    quest: t,
                    location: tg.rE.QUEST_HOME_DESKTOP,
                    questContent: n,
                    autoplay: l,
                    lazyLoad: !0,
                    className: sn.al,
                    fullWidth: !0,
                    sourceQuestContent: s,
                }),
                g &&
                    (0, r.jsx)("div", {
                        className: sn.EY,
                        children: (0, r.jsx)(n9.CheckmarkLargeBoldIcon, {
                            className: sn.AM,
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                h === ny.UA.EXPIRED &&
                    (0, r.jsx)("div", {
                        className: sn.EY,
                        children: (0, r.jsx)(se.LockIcon, { size: "sm", className: sn.Sz, color: "currentColor" }),
                    }),
            ],
        }),
        _ = (0, r.jsx)("div", { className: h === ny.UA.UNENROLLED ? sn.fm : sn.n5, children: C }),
        S = (0, r.jsx)(tE.A, { size: 66, percentComplete: m, useAltStyle: !0, children: _ }),
        p = x
            ? (0, r.jsx)(X.D, {
                  className: sn.q9,
                  onClick: j,
                  "aria-label": g
                      ? (0, td.r7)(t.config)
                          ? eV.intl.string(eV.t.bAGFz3)
                          : eV.intl.string(eV.t.vTgCWx)
                      : eV.intl.string(eV.t.cfY4PE),
                  children: S,
              })
            : S;
    return (0, r.jsxs)("div", {
        className: o()(sn.CZ, { [sn.Pv]: l }),
        children: [
            (0, r.jsx)(ed.N, {
                theme: ef.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, sn.tE, { [sn.cB]: l }),
                        children: h === ny.UA.UNENROLLED ? _ : p,
                    }),
            }),
            (0, r.jsxs)("div", {
                className: o()(sn.FS, { [sn.IR]: l }),
                children: [
                    (0, r.jsx)(Y.E, {
                        variant: "body-sm/medium",
                        className: sn.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(sn.oV, { [sn.FJ]: l }),
                        children: [
                            c && (0, r.jsx)(st.A, { className: sn.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                Y.E,
                                {
                                    variant: "body-md/medium",
                                    className: sn.zN,
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
var sl = n(604970);
function sr(e) {
    let { quest: t, questContent: n, isHovering: s, sourceQuestContent: l, contentPosition: a, rowIndex: u } = e,
        c = i.useRef(null),
        d = (0, nX.A9)(t, l, tg.rE.QUEST_HOME_DESKTOP, nY.GameProfileSources.QuestHome, c),
        m = (0, nJ.z)(),
        E = (0, z.SD)(t, m);
    return (0, r.jsxs)("div", {
        ref: c,
        className: sl.qr,
        children: [
            (0, r.jsx)(ss, { quest: t, questContent: n, sourceQuestContent: l, isHovering: s }),
            (0, r.jsxs)("div", {
                className: sl.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: sl.Wi,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                className: o()(sl.Wj, sl.h_, { [sl.C4]: s }),
                                children: d,
                            }),
                            (0, r.jsx)(Y.E, {
                                "aria-hidden": !0,
                                variant: "body-sm/normal",
                                lineClamp: 1,
                                className: o()(sl.Wj, sl.XV, { [sl.Hz]: s }),
                                children: d,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: sl.Gv,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                className: sl.I4,
                                children: eV.intl.string(eV.t.o6FLcF),
                            }),
                            E &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(Y.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(n8, { questId: t.id, orbMultiplierEligibility: m }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(n7, {
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
var si = n(434295);
let sa = { [el.i2.TIER_2]: si.qt, [el.i2.TIER_3]: si.jR, [el.i2.TIER_4]: si.cd };
function so(e) {
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
        { completedRatio: h, completedRatioDisplay: f } = (0, z.O9)(t, !0),
        g = (0, el.tW)(t, el.fY.LOGO_TYPE, ef.NJ8.DARK).url,
        x = (0, E.bG)([ns.A], () => ns.A.theme) === ef.NJ8.LIGHT,
        v = (0, nH.Qn)(t.config),
        j = null != v ? sa[v] : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            x
                ? (0, r.jsx)(ed.N, {
                      theme: ef.NJ8.DARK,
                      disableAdaptiveTheme: !0,
                      children: (e) => (0, r.jsx)("div", { className: o()(e, si.f5, j), "aria-hidden": !0 }),
                  })
                : (0, r.jsx)("div", { className: o()(si.f5, j), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: o()(si.ZF, j, { [si.SP]: l }), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: si.ZH, children: (0, r.jsx)(n$, { quest: t, isHovering: l }) }),
            (0, r.jsxs)("div", {
                className: o()(si.o1, { [si.SP]: l }),
                children: [
                    i &&
                        (0, r.jsx)(X.D, {
                            tag: "div",
                            className: si.hP,
                            onClick: a,
                            "aria-label": eV.intl.string(eV.t.WqhZss),
                            children: (0, r.jsx)(nM.LinkIcon, { size: "sm", color: "currentColor" }),
                        }),
                    (0, r.jsx)(nR.C, {
                        questContent: n,
                        quest: t,
                        hideLearnMore: !0,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: s,
                        onOpen: u,
                        onClose: c,
                        children: (e) =>
                            (0, r.jsx)(X.D, {
                                ...e,
                                tag: "div",
                                className: si.hP,
                                "aria-label": eV.intl.string(eV.t.DEoVWZ),
                                children: (0, r.jsx)(nI.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o()(si.KJ, { [si.R]: l }),
                children: [
                    (0, r.jsx)("div", {
                        className: si.Ez,
                        children: (0, r.jsx)("img", { className: si.dK, src: g, alt: t.config.messages.gameTitle }),
                    }),
                    (0, r.jsxs)("div", {
                        className: si.Cd,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/semibold",
                                color: "text-overlay-light",
                                className: si.ZV,
                                children: f,
                            }),
                            (0, r.jsx)("div", {
                                className: si.oU,
                                children: (0, r.jsx)(nL.Ay, {
                                    variant: nL.qP.UNSET,
                                    override: { default: { gradientStart: "#189E4E", gradientEnd: "#44FC7E" } },
                                    weight: nL.fh.LIGHT,
                                    progress: Math.round(100 * h),
                                    glowing: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(si.SJ, { [si.SP]: l }),
                children: (0, r.jsx)(sr, {
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
var su = n(720875),
    sc = n(614972),
    sd = n(688755),
    sm = n(831368),
    sE = n(704289);
function sh(e) {
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
            hoverHandlers: _,
            handleMenuOpen: S,
            handleMenuClose: p,
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
        N = j || !0 === a,
        A = !0 === l,
        O = (0, sc.c)({ onMenuOpen: S, onMenuClose: p }),
        T = (0, ny.Pd)(n),
        b = T === ny.UA.EXPIRED || T === ny.UA.EXPIRED_CLAIMED,
        I = (0, tm.E0)(n.config),
        R = (0, E.bG)([ns.A], () => ns.A.theme),
        y = R === ef.NJ8.ASH || R === ef.NJ8.DARK,
        M = R === ef.NJ8.LIGHT,
        L = i.useContext(eB.X),
        { visibilityElementRef: H, almostVisibleInViewport: Q } = (0, sm.I)(
            L?.current?.getScrollerNode() ?? null,
            m ?? !1,
        ),
        {
            handleHoverStart: U,
            handleHoverEnd: D,
            isEventWithinParent: F,
        } = (0, sd.B)({ quest: n, questContent: s, contentPosition: c, rowIndex: d, sourceQuestContent: g }),
        P = (0, tZ.Lk)({
            isShareable: I,
            questId: n.id,
            trackingCtx: i.useMemo(
                () => ({ content: s, ctaContent: ei.Cy.CONTEXT_MENU_COPY_LINK, sourceQuestContent: g }),
                [s, g],
            ),
        }),
        k = (0, nb.A)(h, H),
        q = eV.intl.formatToPlainString(eV.t.EAYZAr, { questName: n.config.messages.questName }),
        w = o()(sE.kL, { [sE.Cn]: A, [sE.DM]: N }, u),
        B = (0, r.jsx)(su.A, {
            showPlaceholder: !Q,
            width: 800,
            height: 450,
            className: sE.Tv,
            children: (0, r.jsx)(eo.N, {
                imageAsset:
                    null != x
                        ? { asset: x, assetId: "QuestTileV2", alt: eV.intl.string(eV.t.jnijWz), className: sE.Tv }
                        : void 0,
                videoAsset:
                    null != v
                        ? {
                              asset: v,
                              assetId: "QuestTileV2_heroAnimated",
                              className: o()(sE.Tv, sE.gJ, { [sE.C7]: N }),
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
                      (0, r.jsx)(sc.q.Provider, {
                          value: O,
                          children: (0, r.jsx)(so, {
                              quest: n,
                              questContent: s,
                              sourceQuestContent: g,
                              isHovering: N,
                              isShareable: I,
                              onCopyShareLink: P,
                              onMenuOpen: S,
                              onMenuClose: p,
                              contentPosition: c,
                              rowIndex: d,
                          }),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      B,
                      (0, r.jsx)("div", { className: o()(sE.sL, { [sE.Mq]: b }) }),
                      M
                          ? (0, r.jsx)(ed.N, {
                                theme: ef.NJ8.ONYX,
                                disableAdaptiveTheme: !0,
                                children: (e) => (0, r.jsx)("div", { className: o()(e, sE.f5) }),
                            })
                          : (0, r.jsx)("div", { className: o()(sE.f5, { [sE.kg]: y }) }),
                      (0, r.jsxs)("div", {
                          className: sE.qy,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: sE.wx,
                                  children: [
                                      (0, r.jsx)(n$, { quest: n, isHovering: N }),
                                      (0, r.jsx)("div", {
                                          className: o()(sE.$s, { [sE.rk]: N }),
                                          onClick: (e) => e.stopPropagation(),
                                          children: (0, r.jsx)(nR.C, {
                                              questContent: s,
                                              quest: n,
                                              hideLearnMore: !0,
                                              shouldShowDisclosure: !0,
                                              showShareLink: !0,
                                              sourceQuestContent: g,
                                              onOpen: S,
                                              onClose: p,
                                              children: (e) =>
                                                  (0, r.jsx)(X.D, {
                                                      ...e,
                                                      tag: "div",
                                                      className: sE.E9,
                                                      "aria-label": eV.intl.string(eV.t.DEoVWZ),
                                                      children: (0, r.jsx)(nI.MoreHorizontalIcon, {
                                                          size: "sm",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(sc.q.Provider, {
                                  value: O,
                                  children: (0, r.jsx)(sr, {
                                      quest: n,
                                      questContent: s,
                                      isHovering: N,
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
        id: (0, nA.sT)(n.id, t),
        className: sE.uW,
        "data-quest-tile": A ? "featured-v2" : "standard",
        "data-quest-tile-hovered": N ? "" : void 0,
        onMouseEnter: () => {
            (_.onMouseEnter(), U());
        },
        onMouseLeave: () => {
            (_.onMouseLeave(), D());
        },
        onFocus: (e) => {
            F(e) || (_.onFocus(), U());
        },
        onBlur: (e) => {
            F(e) || (_.onBlur(), D());
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
let sf = i.memo(function (e) {
    let t = (0, E.bG)([et.A], () => (null != e.questId ? et.A.getQuest(e.questId) : void 0), [e.questId]),
        n = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == n
        ? null
        : (0, r.jsx)(eu.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === en.uF.QUESTS_EMBED,
              overrideVisibility: e.overrideVisibility,
              onImpression: e.onImpression,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(sh, { ...e, quest: n, impressionRef: t }),
          });
});
function sg(e) {
    let { quest: t, isFeatured: n } = e,
        { useNewTile: s } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: nE.x3,
        children: (0, r.jsxs)("div", {
            className: nE.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: nE.R_,
                    variant: "heading-sm/semibold",
                    children: n ? eV.intl.string(eV.t.AzkvWe) : eV.intl.string(eV.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(nT, {
                          children: (0, r.jsx)(sf, {
                              className: nE.d,
                              quest: t,
                              questContent: en.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              isInFeaturedSection: n,
                              sourceQuestContent: en.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                      })
                    : (0, r.jsx)(nA.Ay, {
                          className: nE.d,
                          quest: t,
                          questContent: en.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: en.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var sx = n(97808),
    sv = n(778712),
    sj = n(87664),
    sC = n(427262),
    s_ = n(198525),
    sS = n(381351);
let sp = function (e) {
    let { quest: t } = e,
        [n, s] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([tr.default], () => tr.default.getCurrentUser()),
        u = sC.Ay.useName(a),
        c = (0, sj.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(s_.default, {
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
        className: nE.x3,
        children: (0, r.jsxs)("div", {
            className: nE.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: sS.R_,
                    variant: "heading-sm/semibold",
                    children: eV.intl.string(eV.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: sS.$Q, children: eV.intl.string(eV.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: sS.k0,
                    children: (0, r.jsx)(t7.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => s(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: t7.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(sS.Tn, { [sS.wH]: n }),
                                children: (0, r.jsx)(X.D, {
                                    onClick: () => s(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: sS.lm,
                                        children: [
                                            (0, r.jsx)(sx.eu, {
                                                size: sv._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: ef.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: sS.Fj,
                                                children: [
                                                    (0, r.jsx)(Y.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(Y.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-muted",
                                                        children: eV.intl.string(eV.t.b9w3bO),
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
function sN(e) {
    let { questId: t, selectedSections: n } = e,
        s = (0, E.bG)([et.A], () => et.A.getQuest(t)),
        l = (0, E.bG)([et.A], () => et.A.getFetchQuestPreviewError(t)),
        { useNewTile: i } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP });
    if (null != l || null == s) return null;
    function a(e) {
        return null == n || 0 === n.length || n.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nj, { quest: s }), (0, r.jsx)(nd, {})] }),
            a("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sg, { quest: s }), (0, r.jsx)(nd, {})] }),
            a("featured_tile") &&
                i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(sg, { quest: s, isFeatured: !0 }), (0, r.jsx)(nd, {})],
                }),
            a("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nN, { questId: s.id }), (0, r.jsx)(nd, {})] }),
            a("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n_, { quest: s }), (0, r.jsx)(nd, {})] }),
            a("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sp, { quest: s }), (0, r.jsx)(nd, {})] }),
            a("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nh, { quest: s }), (0, r.jsx)(nd, {})] }),
        ],
    });
}
var sA = n(875696);
function sO(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: s, controls: l, className: a } = e,
        u = (function () {
            let { useNewTile: e } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP });
            return [
                { value: "quest_bar", label: eV.intl.string(eV.t.rjVPdM) },
                { value: "home_card", label: eV.intl.string(eV.t["5wnpF3"]) },
                ...(e ? [{ value: "featured_tile", label: eV.intl.string(eV.t.AzkvWe) }] : []),
                { value: "share_embed", label: eV.intl.string(eV.t["D/gSWS"]) },
                { value: "channel_call_header", label: eV.intl.string(eV.t.gWinpQ) },
                { value: "members_list", label: eV.intl.string(eV.t.wpYima) },
                { value: "activity_panel", label: eV.intl.string(eV.t.L2mlUb) },
            ];
        })(),
        c = 0 === n.length || n.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === n.length ? n[0] : "all"), [n, c]);
    return (0, r.jsx)(no.Ip, {
        className: o()(sA.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: sA.qE,
            children: [
                (0, r.jsx)(em.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eV.intl.string(eV.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: sA.pf, children: l }),
                (0, r.jsxs)(nu.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        s?.(e);
                    },
                    children: [
                        (0, r.jsx)(nu.V.Item, { id: "all", children: eV.intl.string(eV.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(nu.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: sA.tZ, children: (0, r.jsx)("div", { className: sA.Qs, children: t }) }),
            ],
        }),
    });
}
let sT = function (e) {
    let { questId: t, className: n } = e,
        { questId: s, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: n } = (0, u.zy)(),
                s = i.useMemo(() => new URLSearchParams(n).get(z.L1.QUEST_ID) ?? e, [n, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === s) return;
                        let n = new URLSearchParams();
                        (n.set(z.L1.TAB, z.NC.PREVIEW_TOOL),
                            n.set(z.L1.QUEST_ID, e),
                            t.push(`${ef.BVt.QUEST_HOME}?${n.toString()}`));
                    },
                    [t, s],
                );
            return { questId: s, setQuestId: l };
        })(t),
        a = (0, E.bG)([et.A], () => (null != s ? et.A.getQuest(s) : void 0), [s]),
        o = (0, E.bG)([et.A], () => (null != s ? et.A.getQuestLoadedViaPreview(s) : null), [s]);
    (i.useEffect(() => {
        null != s &&
            (0, t1.dQ)(s).then(() => {
                (0, t1.Gt)(s);
            });
    }, [s]),
        i.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === s && (0, t1.dQ)(s);
            }
            return (
                t0.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    t0.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]));
    let [c, d] = i.useState([]);
    return (0, r.jsx)(sO, {
        className: n,
        controls: (0, r.jsx)(na, {
            questId: s,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != s && (0, t1.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(sN, { questId: o?.id, selectedSections: c }) : null,
    });
};
var sb = n(203879),
    sI = n(167417),
    sR = n(783977),
    sy = n(305866),
    sM = n(915089),
    sL = n(255604);
function sH(e) {
    let { children: t, id: n } = e;
    return (0, r.jsx)(Y.E, { className: sL.g, color: "text-subtle", id: n, variant: "body-sm/semibold", children: t });
}
let sQ = function (e) {
    let { children: t, renderPopout: n } = e,
        s = (0, sM.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(t7.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(sy.l, { className: sL.S, "aria-labelledby": s, children: n(e, s) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var sU = n(368884);
let sD = function (e) {
    let { onChange: t, selectedFilters: n } = e,
        s = (0, z.Nb)(),
        l = i.useCallback(
            (e) => (s) => {
                let l = e.filter((e) => s.includes(e.filter));
                t([...n.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [n, t],
        );
    return (0, r.jsx)(sQ, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    s.map((e, t) => {
                        let s = e.options.map((e) => ({ label: (0, tc.up)(e.filter), value: e.filter })),
                            o = n.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter),
                            u = 0 === t ? a : `${a}-${t}`;
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: sU.B }),
                                    (0, r.jsx)(sH, { id: u, children: e.heading }),
                                    (0, r.jsx)(sI.$, {
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
                    (0, r.jsx)("hr", { className: sU.B }),
                    (0, r.jsx)("div", {
                        className: sU.W,
                        children: (0, r.jsx)(x.$, {
                            fullWidth: !0,
                            onClick: () => {
                                (t([]), o());
                            },
                            size: "sm",
                            text: eV.intl.string(eV.t.VkKicb),
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
                text: eV.intl.formatToPlainString(eV.t.CEfkXl, { numSelectedFilters: n.length }),
                icon: sR.FiltersHorizontalIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sF = n(771871),
    sP = n(715482);
let sk = function (e) {
    let { onChange: t, optionClassName: n, selectedSortMethod: s } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        o = (0, z.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: n })), [o, n]);
    return (0, r.jsx)(sQ, {
        renderPopout: (e, t) => {
            let { closePopout: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(sH, { id: t, children: eV.intl.string(eV.t.tZXJIS) }),
                    (0, r.jsx)(sF.z, {
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
                "aria-label": eV.intl.formatToPlainString(eV.t.lPlIMo, { selected: (0, tc.Js)(s) }),
                buttonRef: t,
                size: "sm",
                text: (0, tc.Js)(s),
                icon: sP.ChevronLargeDownIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sq = n(710969),
    sw = n(858899);
function sB() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, sw.P0)({ text: eV.intl.string(eV.t["5ABf1w"]), variant: "critical" }),
                tU.default.track(ef.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function sV(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            var l;
            r(((l = e.current?.clientWidth), null == l ? 1 : Math.max(1, Math.min(s, Math.floor((l + n) / (t + n))))));
        }, [r, t, n, s, e]);
    return ((0, eP.g)(e, a, [t, n], { fireOnMount: !0 }), l);
}
var sW = n(768497),
    sG = n(288613);
let sK = 4 * ta.A.Millis.SECOND;
function sz(e) {
    let { children: t, tileMinWidth: n, gridGap: s } = e,
        l = i.useRef(null),
        a = sV(l, n, s);
    return (0, r.jsx)("div", {
        className: sW.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${n}px`, "--custom-quest-grid-gap": `${s}px` },
        children: null !== a && t(a),
    });
}
function s$(e) {
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
        { showToast: E } = sB(),
        h = i.useRef(null),
        [f, g] = i.useState(null),
        [x, v] = i.useState(0),
        { useNewTile: j } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: C }, _] = (0, eU.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sK },
        })),
        S = i.useCallback(
            (e) => {
                if ((s && 0 === t.length) || !l) return !1;
                let r = (0, sq.vc)(e, t, n);
                return null == r ? (E(e), !1) : (g(r.id), v((e) => e + 1), !0);
            },
            [t, n, s, E, l],
        );
    return (i.useImperativeHandle(d, () => ({ scrollToQuest: S }), [S]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = null;
            return;
        }
        !s && l && m !== h.current && S(m.hash.slice(1)) && (h.current = m);
    }, [m, s, l, S]),
    i.useLayoutEffect(() => {
        if (null == f) return;
        let e = document.getElementById(`quest-tile-${f}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            _({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || g(null);
                },
            }));
    }, [f, x, _]),
    s && 0 === t.length)
        ? (0, r.jsx)(J.y, { className: sW.u1 })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: sW.y7,
                children: [
                    (0, r.jsx)(em.D, {
                        variant: "heading-xl/semibold",
                        children: eV.intl.string(a ? eV.t.PBfFnx : eV.t.NqFP6z),
                    }),
                    (0, r.jsx)(Y.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: a ? eV.intl.format(eV.t.LdYS1H, { onClick: c }) : eV.intl.string(eV.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(sz, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    t.map((t, n) => {
                        let s = Math.floor(n / e),
                            l = f === t.id,
                            i = null != f && !l;
                        return (0, r.jsxs)(
                            eI.animated.div,
                            {
                                className: o()({ [sG.XB]: l, [nO.y]: j }),
                                style: tq(l, i, C),
                                children: [
                                    l &&
                                        (0, r.jsx)("div", {
                                            className: sG.OA,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)("div", { className: sG.E4 }, x),
                                        }),
                                    j
                                        ? (0, r.jsx)(sf, {
                                              quest: t,
                                              questContent: en.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sW.d,
                                              sourceQuestContent: en.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(nA.Ay, {
                                              quest: t,
                                              questContent: en.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sW.d,
                                              sourceQuestContent: en.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
}
var sY = n(458518),
    sX = n(349095);
let sJ = [],
    sZ = z.L1.SORT,
    s0 = z.L1.FILTER;
function s1(e) {
    let t,
        n,
        s,
        l,
        { ref: a, ...o } = e,
        c = i.useRef(null),
        [d, m] =
            ((t = (0, sY.o)()),
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
                (e = d.get(sZ)),
                ((0, B.uJ)(e) ? null : (Object.values(tg.kL).find((t) => t === e) ?? null)) ?? tg.kL.SUGGESTED
            );
        }, [d]),
        h = i.useMemo(
            () =>
                (function (e) {
                    if ((0, B.uJ)(e)) return null;
                    let t = e
                        .split(",")
                        .map((e) => (0, tg.WQ)(e))
                        .filter(tD.Vq);
                    return t.length > 0 ? t : null;
                })(d.get(s0)) ?? sJ,
            [d],
        ),
        f = i.useCallback(
            (e) => {
                m({ [sZ]: e });
            },
            [m],
        ),
        g = i.useCallback(
            (e) => {
                m({
                    [s0]:
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
        } = (0, z.Qh)(
            z.NC.ALL,
            i.useMemo(() => ({ sortMethod: E, filters: h, removeExpiredQuests: !0 }), [E, h]),
        ),
        _ = i.useCallback(() => {
            g(sJ);
        }, [g]),
        S = i.useRef(null),
        p = i.useRef(null),
        N = (0, u.zy)(),
        A = (0, u.W6)();
    return (
        i.useEffect(() => {
            "" !== N.hash &&
                null != S.current &&
                null != p.current &&
                (E !== S.current || h !== p.current) &&
                A.replace({ ...N, hash: void 0 });
        }, [E, h, N, A]),
        i.useEffect(() => {
            S.current = E;
        }, [E]),
        i.useEffect(() => {
            p.current = h;
        }, [h]),
        (0, z.$P)({ selectedSortMethod: E, selectedFilters: h, numQuestsVisible: x.length }),
        i.useImperativeHandle(
            a,
            () => ({
                scrollToQuest: (e) => {
                    (_(),
                        f(tg.kL.SUGGESTED),
                        requestAnimationFrame(() => {
                            c.current?.scrollToQuest(e);
                        }));
                },
            }),
            [_, f],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: sX.Mj,
                    children: [
                        (0, r.jsx)(em.D, { variant: "heading-lg/medium", children: eV.intl.string(eV.t.giYD00) }),
                        (0, r.jsxs)("div", {
                            className: sX.Nf,
                            children: [
                                (0, r.jsx)(sk, { onChange: f, optionClassName: sX.Uq, selectedSortMethod: E }),
                                (0, r.jsx)(sD, { onChange: g, selectedFilters: h }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(s$, {
                    ref: c,
                    quests: x,
                    excludedQuests: v,
                    isFetching: j,
                    hasFetched: C,
                    hasFiltersApplied: h.length > 0,
                    onClearFilters: _,
                }),
            ],
        })
    );
}
var s3 = n(575593),
    s2 = n(462887),
    s7 = n(765671),
    s4 = n(736653),
    s5 = n(162232),
    s6 = n(734736),
    s8 = n(303136),
    s9 = n(842245);
let le = function (e) {
    let { assetUrl: t, className: n, isAnimated: s = !1, questName: l } = e,
        i = t + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(s9.k, n),
        children: s
            ? (0, r.jsx)(s8.A, {
                  preload: "auto",
                  className: s9.L,
                  fallbackImage: i,
                  children: (0, r.jsx)("source", { src: t, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: s9.L, src: i, alt: l }),
    });
};
var lt = n(57718),
    ln = n(966354);
let ls = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [n, s] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        f = (0, E.bG)([tr.default], () => tr.default.getCurrentUser()),
        { ref: g, height: x = 0 } = (0, s7.Ay)(),
        v = (0, s4.Ay)(),
        j = (0, z.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        C = t.userStatus?.claimedTier ?? 0,
        _ = t.config.rewards[C],
        S = _?.type === e7.l.FRACTIONAL_PREMIUM,
        p = _?.type === e7.l.COLLECTIBLE,
        N = _?.type === e7.l.VIRTUAL_CURRENCY,
        A = (0, nH.Pk)(t),
        O = _?.collectibleProduct?.items?.[0],
        T = O?.type === s3.R.AVATAR_DECORATION ? O : null,
        b = i.useMemo(
            () =>
                null == _
                    ? null
                    : !0 === N && t.userStatus?.orbQuantityClaimed != null
                      ? eV.intl.format(eV.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : _.name,
            [_, N, t],
        );
    (0, s7.i4)(d, (e) => {
        let { height: t } = e;
        if (!p || null == t || null == m.current || null == d.current || null == h.current) return;
        let n = d.current.getBoundingClientRect(),
            s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((s.top - n.top - l.height) / 2);
    });
    let R = (0, s2.M)(v),
        y = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, el.tW)(t, el.fY.REWARD, void 0, void 0, A), [t, A]),
        L = n ? x + 8 : 0,
        { content_position: H, row_index: Q, ...U } = (0, ei.fF)(en.uF.TROPHY_CASE_CARD);
    function D() {
        (s(!0), tU.default.track(ef.HAw.QUEST_HOVER, { quest_id: t.id, ...U }));
    }
    function F() {
        s(!1);
    }
    function P(e) {
        (c(!0), tU.default.track(ef.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id }));
    }
    return null == _ || u
        ? null
        : (0, r.jsx)(eD.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: D,
                  onBlur: F,
                  onMouseEnter: D,
                  onMouseLeave: F,
                  className: o()(ln.kL, { [ln.yo]: n }),
                  children: [
                      null != f &&
                          p &&
                          null != T &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: ln.FX,
                              style: { top: l },
                              children: (0, r.jsx)(s5.A, {
                                  avatarDecorationOverride: T,
                                  user: f,
                                  guildId: null,
                                  animateOnHover: !n,
                              }),
                          }),
                      S
                          ? (0, r.jsx)(s6.A, { className: ln.Sl })
                          : N
                            ? (0, r.jsx)(le, {
                                  className: ln.Sl,
                                  isAnimated: n,
                                  questName: t.config.messages.questName,
                                  assetUrl: M.url,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(I.A, {
                                    className: ln.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => P(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: ln.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => P(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(ln.Lw, { [ln.en]: R, [ln.So]: !R }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: ln.r$,
                          style: { transform: `translateY(-${L}px)` },
                          children: (0, r.jsx)(lt.Ay, {
                              logotypeClassName: o()(ln.wm, { [ln.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: g,
                          className: ln.zH,
                          children: [
                              (0, r.jsx)(em.D, {
                                  className: ln.DD,
                                  variant: "heading-sm/semibold",
                                  color: "text-overlay-light",
                                  children: eV.intl.format(eV.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(Y.E, {
                                  variant: "body-sm/medium",
                                  color: R ? "text-muted" : "text-overlay-light",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: eV.intl.format(eV.t["kXVcV+"], { reward: b, claimedDate: j }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var ll = n(396478);
function lr(e) {
    let { onClick: t } = e,
        s = (0, s4.Ay)();
    return (0, r.jsxs)(ll.pp, {
        theme: s,
        children: [
            (0, r.jsx)(ll.G8, { lightSrc: n(826223), darkSrc: n(317017), width: 415, height: 200 }),
            (0, r.jsx)(ll.SG, { note: eV.intl.format(eV.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var li = n(178093);
function la(e) {
    let { onSelectTab: t, className: n } = e,
        { claimedQuests: s, isFetchingClaimedQuests: l } = (0, z.Iq)();
    return l && 0 === s.length
        ? (0, r.jsx)(J.y, { className: li.u })
        : 0 === s.length
          ? (0, r.jsx)(lr, { onClick: () => t(z.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(li.U, n),
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(ls, { quest: e }, e.id)),
            });
}
let lo = i.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
function lu(e) {
    let { children: t, sectionIdentifier: n, questId: s, duplicate: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: u,
            highlightCount: c,
            highlightAnimationProgress: d,
        } = i.useContext(lo),
        m = a === s && u === n && !l,
        E = l || (null != a && (a !== s || u !== n)),
        { useNewTile: h } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        f = i.useMemo(() => tq(m, E, d), [m, E, d]);
    return (0, r.jsxs)(eI.animated.div, {
        [eX]: "",
        className: o()({ [sG.XB]: m, [sG.FR]: h, [nO.y]: h }),
        style: f,
        children: [
            m &&
                (0, r.jsx)("div", {
                    className: sG.OA,
                    "aria-hidden": !0,
                    children: (0, r.jsx)("div", { className: sG.E4 }, c),
                }),
            t,
        ],
    });
}
var lc = n(333007),
    ld = n(765548),
    lm = n(897833);
function lE(e) {
    var t, n;
    let { containerWidth: s, questIds: l, sectionIdentifier: a, ref: o } = e,
        u = (0, tQ.C)(),
        { variant: c } = es.Mk.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        d = c === es.d.LARGE_MASK_MARGIN,
        m = l.length >= 2,
        E = i.useRef(null),
        h = i.useRef(null),
        f = i.useRef(null),
        g = (0, tp.Rv)(),
        { targetQuestId: x, targetSectionIdentifier: v } = i.useContext(lo),
        j = null != x && v === a,
        [C, _] = i.useState(!1),
        [S, p] = i.useState(!1),
        N = i.useCallback((e) => {
            p(e);
        }, []),
        {
            rotation: A,
            activeSlotIndex: O,
            scrollStart: T,
            isRepositionScroll: b,
            hasFocusWithin: I,
        } = (function (e) {
            let { numQuests: t, ready: n, rootRef: s, scrollerRef: l } = e,
                [r, a] = i.useState(-2),
                [o, u] = i.useState(0),
                [c, d] = i.useState(!1),
                m = i.useRef(!1),
                E = i.useRef(0),
                h = i.useRef(null),
                f = (0, ld.A)(() => {
                    let e = l.current?.getScrollerNode(),
                        t = s.current;
                    if (null == e || null == t) return null;
                    let n = Array.from(e.querySelectorAll(eJ));
                    if (n.length < 4) return null;
                    let r = n[1].offsetLeft - n[0].offsetLeft;
                    return r <= 0 ? null : { node: e, stride: r, rest: e$(e, n[2], t) };
                }),
                g = (0, ld.A)(() => {
                    let e = h.current;
                    h.current = null;
                    let t = l.current?.getScrollerNode()?.scrollLeft;
                    return null != e && null != t && 1 > Math.abs(t - e);
                }),
                x = (0, ld.A)(() => {
                    ((m.current = !1), 0 !== E.current && window.clearTimeout(E.current), (E.current = 0));
                }),
                v = (0, ld.A)(() => {
                    if (m.current) return;
                    let e = f();
                    if (null == e) return;
                    let t = e.node.scrollLeft - e.rest;
                    if (!(1 > Math.abs(t))) {
                        var n, s, l;
                        ((n = e.node),
                            (s = Math.round(t / e.stride)),
                            (l = e.rest),
                            (0, lc.flushSync)(() => {
                                (0 !== s && a((e) => e + s), 0 !== o && u(0));
                            }),
                            (h.current = l),
                            n.scrollTo({ left: l, behavior: "instant" }));
                    }
                }),
                j = (0, ld.A)(() => {
                    m.current && (x(), v());
                }),
                C = (0, ld.A)(
                    (e) =>
                        !!n &&
                        !m.current &&
                        ((0, lc.flushSync)(() => {
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
                        ((0, e5.vq)(t.relatedTarget, Node) && e.contains(t.relatedTarget)) || (d(!1), v());
                    }
                    function r() {
                        if (m.current) return void j();
                        let t = e.ownerDocument.activeElement;
                        ((0, e5.vq)(t) && e.contains(t) && t.matches(":focus-visible")) || v();
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
        R = C || I || S,
        y = null == s ? 0 : ((t = s + 50), (n = l.length) < 2 ? n : Math.ceil(t / 295) + 2 + 1),
        M = i.useMemo(() => {
            let e = [],
                t = new Set();
            for (let n = 0; n < y; n++) {
                let s = A + n,
                    r = ((s % l.length) + l.length) % l.length;
                (e.push({ questId: l[r], questIndex: r, key: `${l[r]}-${s}`, isDuplicate: t.has(l[r]) }), t.add(l[r]));
            }
            return e;
        }, [l, A, y]),
        L = i.useCallback(
            (e) => {
                let t = M.findIndex((t) => t.questId === e);
                -1 !== t &&
                    (E.current?.scrollIntoView({ block: "center", behavior: "smooth" }),
                    f.current?.scrollBySteps(t - 2));
            },
            [M],
        ),
        H = i.useCallback(
            (e) => {
                let {
                    scrollingType: t,
                    scrollWindowStartIndex: n,
                    scrollWindowEndIndex: s,
                    scrollWindowSize: r,
                    scrollingDirection: i,
                } = e;
                b() ||
                    (0, eh.kO)({
                        scrollingType: t,
                        scrollingDirection: i,
                        scrollWindowStartIndex: n,
                        scrollWindowEndIndex: s,
                        scrollWindowSize: r,
                        questContent: en.uF.QUEST_HOME_FEATURED_SECTION,
                        carouselSize: l.length,
                    });
            },
            [b, l.length],
        );
    return (
        i.useImperativeHandle(o, () => ({ scrollToQuest: L }), [L]),
        (0, r.jsxs)("div", {
            ref: E,
            className: lm.I6,
            children: [
                (0, r.jsx)("div", { className: lm.Cz, "aria-hidden": !0 }),
                (0, r.jsx)(e2, {
                    maskWidth: eK(u),
                    overflowAmount: 25,
                    disableUserScroll: m,
                    groupedArrows: m,
                    onScrollStart: T,
                    onScrollEnd: H,
                    autoCycle: m && !(C || S || I || g || j),
                    singleStep: !0,
                    scrollerRef: h,
                    controlRef: f,
                    maskMarginMultiplier: d ? 2 : 0.75,
                    children: (0, r.jsx)("div", {
                        className: lm.FO,
                        style: { "--custom-featured-tile-gap": "4px" },
                        onPointerEnter: () => _(!0),
                        onPointerLeave: () => _(!1),
                        children: M.map((e, t) =>
                            (0, r.jsx)(
                                lu,
                                {
                                    questId: e.questId,
                                    duplicate: e.isDuplicate,
                                    sectionIdentifier: a,
                                    children: (0, r.jsx)(sf, {
                                        isInFeaturedSection: !0,
                                        isActive: t === O && !R,
                                        onMenuOpenChange: N,
                                        questId: e.questId,
                                        questContent: en.uF.QUEST_HOME_FEATURED_SECTION,
                                        contentPosition: e.questIndex,
                                        rowIndex: 0,
                                        sourceQuestContent: en.uF.QUEST_HOME_FEATURED_SECTION,
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
var lh = n(915655);
function lf(e) {
    let { className: t, ...n } = e;
    return (0, r.jsxs)("div", {
        className: o()(lh.kL, t),
        ...n,
        children: [
            (0, r.jsx)("div", { className: o()(tw.m, lh.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: lh.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(tw.m, lh.Vr) }, t),
                ),
            }),
        ],
    });
}
var lg = n(384343);
function lx(e) {
    let { questContent: t, questIds: n, rowIndex: s, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(lo),
        { useNewTile: o } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = es.Mk.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        c = (0, tQ.C)(),
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
        E = u === es.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(e2, {
        maskWidth: eK(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${ez(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: lg.FO,
            children: [
                n.map((e, n) =>
                    (0, r.jsx)(
                        lu,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(sf, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lg.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(nA.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === eW.FEATURED,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lg.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: lg.fu }),
            ],
        }),
    });
}
var lv = n(125822);
let lj = ta.A.Millis.WEEK;
function lC() {
    let e = et.A.quests;
    if (0 === et.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let n of s.keys()) {
        let l = e.get(n);
        (null == l || (0, nq.Ic)(l)) && (null == t && (t = new Map(s)), t.delete(n));
    }
    return null != t && ((s = t), !0);
}
class l_ extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        (this.waitFor(et.A), (s = new Map()));
        let t = !1;
        if (null != e) {
            let n = Date.now() - lj;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < n) {
                    t = !0;
                    continue;
                }
                s.set(l, r);
            }
        }
        return (this.syncWith([et.A], lC), t);
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
let lS = new l_(t0.h, {
    QUESTS_MARK_DISCOVERED: function (e) {
        if (null == et.A.getQuest(e.questId)) return !1;
        let t = new Map(s);
        (t.set(e.questId, new Date().toISOString()), (s = t));
    },
});
function lp(e, t) {
    if (e === t) return !0;
    let n = new Set(e),
        s = new Set(t);
    return n.size === s.size && [...n].every((e) => s.has(e));
}
let lN = function () {
    let e = (0, sC.Gn)(),
        t = (0, z.Cv)(),
        n = (0, E.bG)([et.A], () => et.A.lastFetchedCurrentQuests > 0),
        { quests: s, isFetchingCurrentQuests: l } = (0, z.Qh)(z.NC.ALL, {
            sortMethod: tg.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, lv.A)(
            () =>
                s.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            s.map((e) => {
                let { id: t } = e;
                return t;
            }),
            lp,
        ),
        a = (0, tZ.T2)(),
        o = (0, E.bG)([lS], () => lS.getDiscoveredAtByQuestId(), []),
        u = i.useMemo(() => (l || !n) && 0 === r.length, [l, n, r.length]),
        { useNewTile: c } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
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
                              let t = et.A.getQuestConfig(e);
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
                                      { userStatus: o, preview: u } = et.A.getQuest(t.id) ?? {},
                                      c = [],
                                      d =
                                          null != o &&
                                          null != o.enrolledAt &&
                                          null != o.completedAt &&
                                          null == o.claimedAt;
                                  if ((0, nq.kd)(t) && !d) return r ? [eW.EXPIRED] : null;
                                  if (
                                      (s.has(t.id) && c.push(eW.DISCOVERED),
                                      i && !0 === u && c.push(eW.PREVIEW),
                                      null != o && null != o.enrolledAt && null == o.claimedAt)
                                  )
                                      return [...c, eW.IN_PROGRESS];
                                  let m = !nG(t);
                                  return m && null != n && (0, tm.I0)(n, t.id) && nK(eW.FEATURED, l)
                                      ? [...c, eW.FEATURED]
                                      : new Date(t.expiresAt).valueOf() <= Date.now() + (a ? nB : nw)
                                        ? [...c, eW.ENDING_SOON]
                                        : m && nK(eW.FEATURED, l)
                                          ? [...c, eW.FEATURED]
                                          : (0, td.ks)(t)
                                            ? [...c, eW.ORB]
                                            : [...c, eW.SPECIAL_QUESTS];
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
                                  let t = et.A.getQuestConfig(e);
                                  null == t || nG(t) || u(e);
                              }),
                              t.forEach((e) => u(e)),
                              eG
                                  .map((e) => {
                                      let t = nW?.[e.identifier];
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
var lA = n(113775);
let lO = {
        [eW.FEATURED]: en.uF.QUEST_HOME_FEATURED_SECTION,
        [eW.IN_PROGRESS]: en.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [eW.ENDING_SOON]: en.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [eW.ORB]: en.uF.QUEST_HOME_ORB_SECTION,
        [eW.DISCOVERED]: en.uF.QUEST_HOME_DISCOVERED_SECTION,
        [eW.EXPIRED]: en.uF.QUEST_HOME_EXPIRED_SECTION,
        [eW.PREVIEW]: en.uF.QUEST_HOME_PREVIEW_SECTION,
        [eW.SPECIAL_QUESTS]: en.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    lT = 4 * ta.A.Millis.SECOND;
function lb(e) {
    let { deepLinkedQuestId: t, isLoadingQuestHomeHero: n, className: s, ref: l } = e,
        a = (0, u.zy)(),
        { useNewTile: c, useNewFeaturedTiles: d } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        { sections: m, isFetchingCurrentQuests: E, getSectionIdentifierForTargetedQuest: h } = lN(),
        f = i.useRef(null),
        g = i.useRef(null),
        { showToast: x } = sB(),
        [v, j] = i.useState(null),
        [C, _] = i.useState(null),
        [S, p] = i.useState(0),
        [N, A] = i.useState(null),
        O = i.useRef(null),
        T = i.useCallback(
            (e) => {
                A(e.contentRect.width);
            },
            [A],
        );
    (0, eP.g)(f, T, [T], { fireOnMount: !0 });
    let [{ highlightAnimationProgress: b }, I] = (0, eU.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: lT },
        })),
        R = i.useCallback(
            (e, t) => {
                if (null == e || null == N || E || n) return !1;
                t && (0, t1.sB)(e);
                let s = h(e),
                    l = !0 === t && s !== eW.FEATURED ? eW.DISCOVERED : s;
                if (null == s) return (x(e), !1);
                let r = document.getElementById((0, nA.sT)(e, l ?? void 0));
                return (
                    null != r &&
                    (j(e),
                    _(l),
                    p((e) => e + 1),
                    l === eW.FEATURED && c && d
                        ? g.current?.scrollToQuest(e)
                        : r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                    I({
                        from: { highlightAnimationProgress: 0 },
                        to: { highlightAnimationProgress: 1 },
                        reset: !0,
                        onRest: (e) => {
                            e.cancelled || (j(null), _(null));
                        },
                    }),
                    !0)
                );
            },
            [c, d, j, p, I, E, n, x, N, h],
        );
    (i.useImperativeHandle(l, () => ({ scrollToQuest: R }), [R]),
        i.useLayoutEffect(() => {
            if (null == t) {
                O.current = null;
                return;
            }
            O.current !== a && R(t, !0) && (O.current = a);
        }, [a, t, R]));
    let y = i.useMemo(
        () => ({ targetQuestId: v, targetSectionIdentifier: C, highlightCount: S, highlightAnimationProgress: b }),
        [v, C, S, b],
    );
    return (0, r.jsx)(lo.Provider, {
        value: y,
        children: (0, r.jsx)("div", {
            className: o()(lA.kL, s),
            ref: f,
            children: E
                ? (0, r.jsx)(lf, { role: "status", "aria-label": eV.intl.string(eV.t.ZTNur7) })
                : m.length > 0
                  ? m.map((e, t) => {
                        let { identifier: n, questIds: s, title: l } = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: lA.p9,
                                children: [
                                    (0, r.jsx)(em.D, {
                                        variant: "heading-lg/semibold",
                                        style: { "--custom-section-title-inset": "2px" },
                                        className: lA.Gf,
                                        children: eV.intl.string(l),
                                    }),
                                    n === eW.FEATURED && c && d
                                        ? (0, r.jsx)(lE, {
                                              ref: g,
                                              questIds: s,
                                              containerWidth: N,
                                              sectionIdentifier: n,
                                          })
                                        : (0, r.jsx)(lx, {
                                              questIds: s,
                                              rowIndex: t,
                                              sectionIdentifier: n,
                                              questContent: lO[n],
                                          }),
                                ],
                            },
                            n,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: lA.y7,
                        children: [
                            (0, r.jsx)(em.D, { variant: "heading-xl/semibold", children: eV.intl.string(eV.t.NqFP6z) }),
                            (0, r.jsx)(Y.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: eV.intl.string(eV.t.LhD4yH),
                            }),
                        ],
                    }),
        }),
    });
}
var lI = n(196765),
    lR = n(121894),
    ly = n(851936);
let lM = (0, lI.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let n = t().logger ?? (0, ly.L)({ location: tg.rE.QUEST_HOME_DESKTOP });
        if (n.info === tx.tE || t().elapsed >= 6e4) return;
        let s = performance.now() - t().startTime;
        s > 6e4 && (s = 6e4);
        let l = { elapsed: s };
        (s - t().lastOutputLogTime > 1e3 &&
            (n.info(`QuestHome asset loading duration so far: ${s}ms`), (l.lastOutputLogTime = s)),
            null == t().logger && (l.logger = n),
            (0, lR.r)(() => e(l)));
    },
}));
var lL = n(516226),
    lH = n(620241);
function lQ(e) {
    let { children: t, hasSearchResults: n } = e,
        { showDefaultBanner: s } = K.C.useConfig({ location: tg.rE.QUEST_HOME_DEFAULT_BANNER });
    return s ? (0, r.jsx)("div", { className: o()(lH.iS, { [lH.R]: n }), children: t }) : null;
}
function lU(e) {
    let { children: t, onQuestCtaClick: n, questHomeHero: s, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, $.zT)(),
        c = null != s && !a,
        d = l || (c && u);
    return (0, r.jsxs)("div", {
        className: o()(lH.iS, { [lH.R]: i }),
        children: [
            d && (0, r.jsx)(tJ, {}),
            !l && (c ? (0, r.jsx)(tX, { hero: s, isBannerLoading: u, onQuestCtaClick: n }) : t),
        ],
    });
}
var lD = n(613956),
    lF = n(604880),
    lP = n(318808);
function lk(e) {
    let { adCreativeIds: t } = e,
        n = i.useCallback(() => (0, n3.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: lD.MY,
        children: [
            (0, r.jsx)("img", { className: lD.Bg, src: lP.Ay, alt: "" }),
            (0, r.jsx)("div", { className: lD.r$, children: (0, r.jsx)("img", { src: lF, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: lD.Nr,
                children: [
                    (0, r.jsx)(em.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: lD.ky,
                        children: eV.intl.string(eV.t.GXmn57),
                    }),
                    (0, r.jsx)(Y.E, {
                        variant: "body-md/normal",
                        className: lD.G3,
                        children: eV.intl.string(eV.t.bWuKqh),
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        text: eV.intl.string(eV.t.UQvCf7),
                        fullWidth: !0,
                        onClick: n,
                    }),
                ],
            }),
        ],
    });
}
var lq = n(143592),
    lw = n(215130);
let lB = function (e) {
    let { matchingQuestIds: t } = e,
        n = (0, tQ.C)(),
        { useNewTile: s } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = es.Mk.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        u = l === es.d.LARGE_MASK_MARGIN,
        c = s ? 12 : 20,
        d = sV(a, ez(n, u), c, 3);
    return (0, r.jsxs)(j.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: lw.kL,
        ref: a,
        children: [
            (0, r.jsxs)(em.D, {
                variant: "heading-lg/medium",
                children: [eV.intl.string(eV.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(j.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: lw.y7,
                      children: [
                          (0, r.jsx)(lq.e, { alt: eV.intl.string(eV.t["Xe+fJM"]) }),
                          (0, r.jsxs)(j.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(em.D, {
                                      variant: "heading-lg/medium",
                                      children: eV.intl.string(eV.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(em.D, {
                                      variant: "heading-xs/medium",
                                      children: eV.intl.string(eV.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: lw.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${ez(n, u)}px`,
                          "--custom-quest-grid-gap": `${c}px`,
                      },
                      children:
                          null !== d &&
                          t.map((e, t) =>
                              s
                                  ? (0, r.jsx)(
                                        nT,
                                        {
                                            children: (0, r.jsx)(sf, {
                                                eagerLoadAssets: !0,
                                                questId: e,
                                                questContent: en.uF.QUEST_HOME_SEARCH_RESULT,
                                                contentPosition: t,
                                                rowIndex: Math.floor(t / d),
                                                className: o()(lw.d, lw.hS),
                                                sourceQuestContent: en.uF.QUEST_HOME_SEARCH_RESULT,
                                            }),
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        nA.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: en.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / d),
                                            className: lw.d,
                                            sourceQuestContent: en.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
function lV() {
    let { enabled: e } = es.Mk.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: t } = es.aD.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        { newLayoutWithSearch: n } = es.s9.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP });
    return e || t || n;
}
var lW = n(649852),
    lG = n.n(lW),
    lK = n(379078),
    lz = n(704554),
    l$ = n(823784);
let lY = {
        searchType: lK.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(tD.Vq);
        },
        sortType: lK.r.JARO_WINKLER,
        throttleMs: 200,
    },
    lX = function () {
        let [e, t] = i.useState(""),
            [n, s] = i.useState(null),
            l = (0, E.yK)([et.A], () =>
                (0, z.mn)(Array.from(et.A.quests.values()), { sortMethod: tg.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => lG()(eh.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, l$.tv)();
                (null != e &&
                    (0, eh.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, l$.l6)());
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
                                  .filter(tD.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: n } = (0, l$.$N)();
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
        return ((0, lz.RT)(r, l, d, lY), { matchingQuestIds: n, query: e, setQuery: t, onSearchClose: c });
    };
var lJ = n(631001),
    lZ = n(758836),
    l0 = n(613057);
let l1 = i.createContext({});
function l3(e) {
    let { banner: t, children: n, header: s, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(l1);
    return (0, r.jsxs)(eB.X.Provider, {
        value: o,
        children: [
            s,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(Q.A, { className: lH.Jo, innerClassName: lH.FG, children: [!l && t, n] }),
                ],
            }),
        ],
    });
}
function l2(e) {
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
function l7(e) {
    let { onLoadComplete: t, className: n, isVirtualCurrencyEnabled: s } = e,
        l = (0, E.bG)([S.Ay], () => S.Ay.useReducedMotion),
        a = (0, E.bG)([k.A], () => k.A.isFocused()),
        { ref: o, inViewport: u } = (0, sb.p)(),
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
        return (0, r.jsx)($._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (s) =>
                (0, r.jsx)(I.A, {
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
    return (0, r.jsx)($._M, {
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
function l4(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(lH.Tv, { [lH.lJ]: n }),
        children: [
            (0, r.jsx)(tK, {}),
            (0, r.jsx)("div", { className: o()(lH.nz, { [lH.ZZ]: n }) }),
            (0, r.jsx)(l7, {
                onLoadComplete: t,
                className: o()(lH.Fe, { [lH.H4]: n, [lH.Q8]: !n }),
                isVirtualCurrencyEnabled: n,
            }),
        ],
    });
}
function l5(e) {
    let { onAssetLoad: t } = e,
        { enabled: n } = G.useConfig({ location: tg.rE.QUEST_HOME_DESKTOP }),
        s = !n,
        l = i.useCallback(() => {
            s ? window.open(ef.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(ef.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(ev, {
        adContentId: s ? tg.yr : tg.uz,
        title: s ? eV.intl.format(eV.t.BCBIlp, {}) : eV.intl.format(eV.t.lmMBfy, {}),
        subtitle: s ? eV.intl.format(eV.t.U9FY0J, {}) : eV.intl.string(eV.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(g.e, {
                  children: [
                      (0, r.jsx)(x.$, {
                          variant: "overlay-primary",
                          text: eV.intl.string(eV.t["3bdWzt"]),
                          onClick: () =>
                              (0, T.Cz)({
                                  tab: lZ.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: p.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(x.$, {
                          variant: "overlay-secondary",
                          text: eV.intl.string(eV.t["7kTAgJ"]),
                          onClick: l,
                      }),
                  ],
              })
            : (0, r.jsx)(x.$, {
                  variant: "overlay-primary",
                  text: eV.intl.string(eV.t.hvVgAZ),
                  onClick: l,
                  icon: v.LinkExternalSmallIcon,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(l4, { onAssetLoad: t, isVirtualCurrencyEnabled: s }),
    });
}
let l6 = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, u.zy)(),
        s = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(n.search).getAll(z.L1.AD_CREATIVE_IDS), [n.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        f = (0, E.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: g,
            onSelectTab: x,
            tabs: v,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                n = lJ.A.useField("tab"),
                s = (0, u.zy)(),
                l = (0, z.p5)(),
                r = lV();
            i.useEffect(() => {
                lJ.A.getState().initializeFromUrl(s.search, l);
            }, [s.search, l]);
            let a = i.useCallback((e) => {
                lJ.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: z.NC.ALL, label: r ? eV.intl.string(eV.t.Jt6u7B) : eV.intl.string(eV.t["0SzXmi"]) },
                            t
                                ? {
                                      id: z.NC.CLAIMED,
                                      label: r ? eV.intl.string(eV.t["3TVY/R"]) : eV.intl.string(eV.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: z.NC.PREVIEW_TOOL, label: eV.intl.string(eV.t.BDUDau) } : null,
                        ].filter(tD.Vq),
                    [t, l, r],
                ),
                selectedTab: n,
                onSelectTab: a,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: S, setQuery: I, matchingQuestIds: y, onSearchClose: M } = lX(),
        { onScroll: Q } = (0, H.G)(),
        U = V.A.getState().getUtmCurrentContext(),
        D = lM((e) => e.registerAssetLoad),
        k = i.useRef(U);
    (i.useEffect(() => {
        k.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = k;
            (0, N.x)({
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
        (0, b.HU)({ location: eV.intl.string(eV.t.JALI2K) }));
    let q = i.useRef(null),
        w = lV(),
        W = i.useRef(null),
        G = i.useCallback((e) => {
            W.current?.scrollToQuest(e);
        }, []),
        Y = i.useMemo(() => ((0, B.uJ)(n.hash) ? null : n.hash.substring(1)), [n.hash]),
        { questHomeHero: X, isLoading: J, confirmedEmpty: Z } = (0, tZ.lg)(l[0] ?? null),
        { showHeroPlaceholder: ee } = (0, K.x)(),
        et = i.useCallback(() => {
            ((0, F.Y)({
                pageType: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ef.JJy.ORBS_BALANCE_MENU,
                ctaObject: ef.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, T.Cz)({ tab: lZ.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.ORBS_BALANCE_MENU }));
        }, []);
    (i.useEffect(() => {
        (0, _.I)(ef.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            L.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != f) return;
            let e = new URLSearchParams(n.search),
                l = e.get(z.L1.TAB);
            if (l === z.NC.PREVIEW_TOOL) {
                let t = e.get(z.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: l0.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === s.action && r?.type === "navigate" && t && l !== z.NC.PREVIEW_TOOL) {
                let t = (0, B.uJ)(n.hash) ? null : n.hash.substring(1),
                    s = e.get(z.L1.SORT),
                    r = e.get(z.L1.FILTER),
                    i = e.get(z.L1.AD_CREATIVE_IDS);
                A.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: l0.XK.QUEST_HOME,
                    params: { questId: (0, B.uJ)(t) ? void 0 : t, sort: s, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [n.search, f, s.action, n.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]));
    let en = i.useCallback(
            (e) => {
                (s.replace({ ...s.location, hash: void 0 }), q.current?.scrollToTop({ animate: !1 }), x(e), M());
            },
            [s, x, M],
        ),
        es = i.useMemo(() => null != y && w, [y, w]),
        el = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        er = i.useMemo(() => ({ onScroll: Q, scrollerRef: q }), [Q, q]),
        ei = J && !ee;
    return a
        ? (0, r.jsx)(lk, { adCreativeIds: l })
        : (0, r.jsx)(lL.M.Provider, {
              value: el,
              children: (0, r.jsx)(l1.Provider, {
                  value: er,
                  children: (0, r.jsx)("div", {
                      className: o()(lH.kL, { [lH.KY]: !t }),
                      children: (0, r.jsxs)(l3, {
                          header: (0, r.jsx)(l2, {
                              selectedTab: g,
                              onSelectTab: en,
                              tabs: v,
                              endContent: (0, r.jsxs)(j.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      w &&
                                          (0, r.jsx)(C.I, {
                                              query: S,
                                              onChange: I,
                                              placeholder: eV.intl.string(eV.t.y10TI2),
                                              onClear: M,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(P.SS, {
                                          analyticsPage: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: P.cP.END,
                                          ctaText: eV.intl.string(eV.t["J+vlIR"]),
                                          ctaOnClick: et,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              g === z.NC.ALL &&
                              !ei &&
                              (0, r.jsx)(
                                  $.y5,
                                  {
                                      source: tg.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: X?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: Z
                                          ? (0, r.jsx)(lQ, {
                                                hasSearchResults: es,
                                                children: (0, r.jsx)(l5, { onAssetLoad: D }),
                                            })
                                          : (0, r.jsx)(lU, {
                                                onQuestCtaClick: G,
                                                hasSearchResults: es,
                                                questHomeHero: X,
                                                isLoadingQuestHomeHero: J,
                                                children: (0, r.jsx)(l5, { onAssetLoad: D }),
                                            }),
                                  },
                                  X?.id,
                              ),
                          children: [
                              es && null != y && (0, r.jsx)(lB, { matchingQuestIds: y }),
                              g === z.NC.CLAIMED
                                  ? (0, r.jsx)(la, { onSelectTab: en, className: es ? lH.R : void 0 })
                                  : g === z.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(sT, { className: es ? lH.R : void 0 })
                                    : w
                                      ? (0, r.jsx)(lb, {
                                            className: es ? lH.R : void 0,
                                            ref: W,
                                            deepLinkedQuestId: Y,
                                            isLoadingQuestHomeHero: J,
                                        })
                                      : (0, r.jsx)(s1, { ref: W }),
                          ],
                      }),
                  }),
              }),
          });
};
