let s;
(n.r(t), n.d(t, { default: () => l9 }), n(323874), n(14289), n(35956));
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
    F = n(201805),
    P = n(855531),
    k = n(76229);
function q() {
    let e = (0, F.T2)();
    return (0, P.kV)(e)
        ? (0, r.jsx)("div", {
              className: k.q,
              children: (0, r.jsx)("img", { className: k.w, src: "/assets/c52c36cb76d57790.png", alt: "" }),
          })
        : null;
}
var w = n(62234),
    B = n(318346),
    V = n(863705),
    W = n(531685),
    G = n(676279),
    K = n(975571),
    z = n(240248),
    $ = n(87549),
    Y = n(945810);
let X = (0, Y.mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var J = n(860996),
    Z = n(61387),
    ee = n(557637),
    et = n(834730),
    en = n(939249),
    es = n(289873),
    el = n(438457),
    er = n(144779),
    ei = n(122760),
    ea = n(506988),
    eo = n(914313),
    eu = n(760914),
    ec = n(18437),
    ed = n(590202),
    em = n(574112),
    eE = n(415441),
    eh = n(280905),
    ef = n(139384),
    eg = n(43990),
    ex = n(534514),
    ev = n(770178),
    ej = n(561844),
    eC = n(652215),
    e_ = n(691388);
function eS(e, t) {
    let { row_index: n, ...s } = (0, ed.fF)(ea.uF.QUEST_HOME_HERO);
    (0, ej.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: s,
        sourceQuestContent: ea.uF.QUEST_HOME_HERO,
    });
}
let ep = function (e) {
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
        g = (0, ev.w)(f, [], { fireOnMount: !0 }),
        x = i.useCallback(() => eS(t, eC.HAw.QUEST_HOVER), [t]),
        v = i.useCallback(() => eS(t, eC.HAw.QUEST_HOVER_OFF), [t]);
    return (0, r.jsx)(eg.N, {
        theme: eC.NJ8.ONYX,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(e_.iE, e, c),
                onMouseEnter: x,
                onMouseLeave: v,
                ref: (e) => {
                    ((g.current = e), "function" == typeof m ? m(e) : null != m && (m.current = e));
                },
                children: (0, r.jsxs)("div", {
                    className: e_.FG,
                    children: [
                        d,
                        (0, r.jsxs)(j.B, {
                            className: o()(e_.Qs, { [e_.X]: null != d && !1 !== d }),
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(j.B, {
                                    className: e_.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(ex.D, {
                                                    color: "text-strong",
                                                    variant: E,
                                                    className: e_.DD,
                                                    children: s,
                                                }),
                                                (0, r.jsx)(et.E, {
                                                    color: "text-strong",
                                                    variant: "body-md/normal",
                                                    className: e_.VA,
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
var eN = n(113597);
(n(134528), n(947204));
var eA = n(749401),
    eO = n(635377),
    eT = n.n(eO),
    eb = n(998304),
    eI = n(515718);
let eR = new (eT())({ max: 50 });
var ey = n(49491),
    eM = n(454908),
    eL = n(120692),
    eH = n(646514),
    eQ = n(169099),
    eU = n(650809),
    eD = n(48507),
    eF = n(111159),
    eP = n(717421),
    ek = n(559106),
    eq = n(516521);
n(321073);
var ew = n(535185),
    eB = n(408278),
    eV = n(548411),
    eW = n(554830),
    eG = n(321503),
    eK = n(792996),
    ez =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let e$ = [
    { type: "featured-quests", identifier: "featured", title: eK.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: eK.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: eK.t.P0lmqC },
    { type: "quests", identifier: "orb", title: eK.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: eK.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: eK.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: eK.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: eK.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function eY(e) {
    return eH.A.space.SPACE_XL.resolve({ density: e });
}
function eX(e, t) {
    return (1220 - 2 * eY(e) * (t ? 2 : 0.75)) / 3;
}
function eJ(e, t, n) {
    return e.scrollLeft + (t.getBoundingClientRect().left - (n.getBoundingClientRect().left + 2));
}
var eZ = n(915850);
let e0 = "data-scroll-target",
    e1 = `[${e0}]`,
    e2 = { anchors: [], windowSizes: [] },
    e4 = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])',
    e5 = { overflowX: "hidden" };
function e8(e, t, n) {
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
let e3 = i.memo(function (e) {
    let {
            children: t,
            className: n,
            itemSelector: s = e1,
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
                if (null == a || null == o || a.scrollWidth <= a.clientWidth) return e2;
                let u = Array.from(a.querySelectorAll(s));
                if (0 === u.length) return e2;
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
                        m.push(eJ(a, u[e], o));
                        continue;
                    }
                    if (h === u.length - 1) break;
                    e > 0 && m.push((t + d(u[h])) / 2);
                }
                return E.length < 2 ? e2 : (i || m.push(a.scrollWidth), { anchors: m, windowSizes: E });
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
                let { currentIndex: l, scrollLefts: r } = e8(s, y, x),
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
                    t && n(1, ed.pk.AUTO);
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
                0 !== e && q(e > 0 ? 1 : -1, ed.pk.AUTO, Math.abs(e));
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
                    ((_.current = ed.pk.MANUAL),
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
            let { currentIndex: t } = e8(e, y, x),
                n = _.current ?? ed.pk.MANUAL;
            _.current = null;
            let s = p.current;
            p.current = e.scrollLeft;
            let l = e.scrollLeft > s ? ed.VU.RIGHT : ed.VU.LEFT,
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
                    o = null == a ? null : a.matches(e4) ? a : a.querySelector(e4);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && B(a, "instant"));
            },
            [s, B],
        ),
        K = i.useCallback(() => {
            (U(), D(), F());
        }, [U, D, F]);
    (0, ew.g)(N, K, [], { fireOnMount: !0 });
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
        className: o()(n, eZ.m7),
        ref: N,
        style: $,
        children: [
            d &&
                (0, r.jsxs)("div", {
                    className: eZ.rU,
                    children: [
                        (0, r.jsx)(eB.K, {
                            icon: eV.ArrowLargeLeftIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(-1, ed.pk.ARROW),
                            disabled: !A,
                            "aria-label": eK.intl.string(eK.t.vgfxaA),
                            tabIndex: -1,
                        }),
                        (0, r.jsx)(eB.K, {
                            icon: eW.ArrowLargeRightIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(1, ed.pk.ARROW),
                            disabled: !T,
                            "aria-label": eK.intl.string(eK.t.XiOHRX),
                            tabIndex: -1,
                        }),
                    ],
                }),
            !d &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(eZ.k9, eZ.RW, { [eZ.Q2]: A }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(eB.K, {
                                icon: eV.ArrowLargeLeftIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(-1, ed.pk.ARROW),
                                disabled: !A,
                                "aria-label": eK.intl.string(eK.t.vgfxaA),
                                tabIndex: -1,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: o()(eZ.k9, eZ.K3, { [eZ.Q2]: T }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(eB.K, {
                                icon: eW.ArrowLargeRightIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(1, ed.pk.ARROW),
                                disabled: !T,
                                tabIndex: -1,
                                "aria-label": eK.intl.string(eK.t.XiOHRX),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: o()({ [eZ.sF]: A && I, [eZ.RC]: T && I, [eZ.Ni]: z && !A, [eZ.GA]: z && !T }),
                children: (0, r.jsx)(eq.zC, {
                    ref: C,
                    orientation: "horizontal",
                    onScroll: U,
                    onScrollEnd: W,
                    onFocusCapture: V,
                    onKeyDown: G,
                    style: c ? e5 : void 0,
                    className: o()({ [eZ.x2]: z, [eZ.$o]: x }, eZ.XG),
                    children: (0, r.jsxs)(eG.X.Provider, {
                        value: j,
                        children: [
                            t,
                            !x &&
                                y.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: eZ.fw, style: { insetInlineStart: `${e}px` } },
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
var e6 = n(440703),
    e7 = n(731355),
    e9 = n(621466),
    te = n(805251),
    tt = n(406810),
    tn = n(628284),
    ts = n(65154),
    tl = n(687966),
    tr = n(155718),
    ti = n(496431),
    ta = n(640708),
    to = n(287809),
    tu = n(5377),
    tc = n(927813),
    td = n(541830),
    tm = n(971649),
    tE = n(651892),
    th = n(417404),
    tf = n(814793),
    tg = n(453384),
    tx = n(639701),
    tv = n(398025),
    tj = n(221596),
    tC = n(818348),
    t_ = n(499621);
function tS(e) {
    let [t, n] = i.useState(!1),
        s = i.useCallback(() => {
            t || (n(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (n(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: s, onMouseLeave: l, onFocus: s, onBlur: l } };
}
function tp(e) {
    let { hero: t, contentPosition: n, impressionRef: s } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = tS(
            i.useCallback(
                (e) => {
                    (0, ej.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eC.HAw.QUEST_HOVER : eC.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ea.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ed.jO)(ea.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, e9.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(tC.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, eP.z)({ hoverSpring: +!!a, config: eL.config.gentle }),
        d = i.useCallback(() => {
            (0, em._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: ea.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ed.Cy.OPEN_GAME_LINK,
                    position: n,
                    impressionId: s.current?.getId(),
                    sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, n, s]);
    return (0, r.jsxs)(en.D, {
        tag: "div",
        className: o()(t_.FW, t_.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [e0]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: t_.Ve,
                children: (0, r.jsx)(eE.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(t_.pv, t_.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(t_.pv, t_.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(eL.animated.div, {
                className: t_.hn,
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
function tN(e) {
    let { hero: t, game: n, contentPosition: s, shelfImage: l, impressionRef: a } = e,
        u = i.useRef(null),
        { isHovering: c, hoverProps: d } = tS(
            i.useCallback(
                (e) => {
                    (0, ej.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eC.HAw.QUEST_HOVER : eC.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ea.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ed.jO)(ea.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = u.current;
        (0, e9.vq)(e, HTMLVideoElement) && (c ? ((e.currentTime = 0), e.play().catch(tC.tE)) : e.pause());
    }, [c]);
    let E = i.useCallback(() => {
            (0, em._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: ea.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ed.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: a.current?.getId(),
                    sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
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
    let { topFade: j, bottomFade: C } = (0, eP.z)({
            topFade: +!!f.top,
            bottomFade: +!!f.bottom,
            config: { ...eL.config.gentle, duration: 100 },
        }),
        _ = i.useMemo(() => {
            let e = null != n.firstReleaseDate ? new Date(n.firstReleaseDate).getFullYear() : 0 / 0,
                t = isNaN(e) ? null : e,
                s = n.genres.at(0);
            return [
                t,
                null != s ? (0, td.du)(s) : null,
                n.getCompanyByRole(tr.wk.DEVELOPER).at(0)?.name ?? null,
            ].filter((e) => null != e);
        }, [n]),
        S = i.useMemo(() => _.length > 0, [_]);
    return (0, r.jsxs)(en.D, {
        tag: "div",
        className: o()(t_.FW, t_.n7),
        onClick: E,
        [e0]: !0,
        ...d,
        children: [
            (0, r.jsx)("div", { className: t_.hu }),
            (0, r.jsx)("div", {
                className: t_.fQ,
                children: (0, r.jsx)(eE.N, {
                    showVideo: !0,
                    assetRef: u,
                    imageAsset:
                        null != l
                            ? {
                                  asset: { url: l, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(t_.pv, t_.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(t_.pv, t_.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsxs)("div", {
                className: t_.iq,
                children: [
                    (0, r.jsxs)("div", {
                        className: t_.o7,
                        children: [
                            (0, r.jsx)(ex.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: n.name,
                            }),
                            S &&
                                (0, r.jsx)("p", {
                                    className: t_.c9,
                                    children: _.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(et.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: e,
                                                    }),
                                                    t < _.length - 1 && (0, r.jsx)(ta.A, { width: 3, height: 3 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsx)(eL.animated.div, {
                        className: t_.hX,
                        style: {
                            maskImage: (0, eL.to)(
                                [j, C],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(ek.vN, {
                            children: (0, r.jsx)(eq.Ch, {
                                ref: h,
                                className: t_.hw,
                                onScroll: v,
                                fade: !c,
                                children: (0, r.jsx)(et.E, {
                                    variant: "body-md/normal",
                                    color: "text-muted",
                                    className: t_.W1,
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
function tA(e) {
    let { heroId: t, quest: n, onQuestCtaClick: s, contentPosition: l, className: a } = e,
        u = i.useMemo(() => new Date(n.config.expiresAt), [n.config.expiresAt]),
        { days: c, hours: d, minutes: h, seconds: f } = (0, ti.A)(u, tc.A.Millis.MINUTE),
        g = i.useMemo(
            () =>
                (0, tu.uN)(
                    { days: c, hours: d, minutes: h, seconds: f },
                    { days: eK.t["Ux/De1"], hours: eK.t.Lzd5Ie, minutes: eK.t.odmpbP },
                ),
            [c, d, h, f],
        ),
        v = (0, E.bG)([to.default], () => to.default.getCurrentUser()),
        C = i.useMemo(() => (0, th.mq)(n.config, v), [n.config, v]),
        _ = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, tE.xv)(e).type) {
                        case e6.l.IN_GAME:
                            return eK.intl.string(eK.t["O/J2kr"]);
                        case e6.l.COLLECTIBLE:
                            return eK.intl.string(eK.t.Jg17Ut);
                        case e6.l.VIRTUAL_CURRENCY:
                            return eK.intl.string(eK.t.ElYQFS);
                        default:
                            return (0, th.mq)(e, t);
                    }
                })(n.config, v),
            [n.config, v],
        ),
        { completedRatio: S, completedRatioDisplay: p } = (0, Z.O9)(n),
        N = i.useMemo(() => (0, th.wo)(n.config, v), [n.config, v]),
        A = (0, ec.WS)(),
        O = (0, tm.wW)(),
        { isHovering: T, hoverProps: b } = tS(
            i.useCallback(
                (e) => {
                    A({
                        adContentId: t,
                        relatedQuestId: n.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eC.HAw.QUEST_HOVER : eC.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ea.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ed.jO)(ea.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, A, l, n.id],
            ),
        ),
        { hoverSpring: I } = (0, eP.z)({ hoverSpring: +!!T, config: eL.config.gentle }),
        R = i.useCallback(() => {
            (s(n.id),
                (0, el.r)({
                    type: er.F.CLICK_INTERNAL,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    adCreativeId: t,
                    relatedQuestId: n.id,
                    questContentCTA: ed.Cy.VIEW_QUESTS,
                    surfaceId: ea.uF.QUEST_HOME_HERO_SHELF,
                    sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: l,
                    impressionId: O(),
                }));
        }, [s, t, n.id, l, O]);
    return (0, r.jsxs)(en.D, {
        tag: "div",
        className: o()(t_.FW, t_.$R, a),
        onClick: R,
        "aria-label": eK.intl.string(eK.t["th2+0j"]),
        [e0]: !0,
        ...b,
        children: [
            (0, r.jsx)("div", { className: t_.hu }),
            (0, r.jsxs)(j.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(te.E, { type: { text: _ } }),
                    (0, r.jsx)(eL.animated.div, {
                        style: { opacity: (0, tv.a)(I.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(te.E, { type: { text: g }, icon: tt.ClockIcon }),
                    }),
                ],
            }),
            (0, r.jsx)(eL.animated.div, {
                className: t_.Tr,
                style: { transform: I.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tg.A, {
                    percentComplete: S,
                    overlayText: T && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tx.A, {
                        quest: n,
                        location: tj.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                        questContent: ea.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: T,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(eL.animated.div, {
                className: t_.tw,
                style: {
                    opacity: (0, tv.a)(I.to([0, 1], [1, 0])),
                    transform: I.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(j.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(et.E, {
                            variant: "body-md/semibold",
                            color: "text-strong",
                            className: t_.Ht,
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
                                        (0, r.jsx)(tn.CircleCheckIcon, {
                                            size: "xs",
                                            color: eH.A.colors.ICON_MUTED.css,
                                        }),
                                        (0, r.jsx)(et.E, {
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
                                        (0, tf.pv)(n.config) === e7.Z.VIDEO
                                            ? (0, r.jsx)(ts.CirclePlayIcon, {
                                                  size: "xs",
                                                  color: eH.A.colors.ICON_MUTED.css,
                                              })
                                            : (0, r.jsx)(tl.GameControllerIcon, {
                                                  size: "xs",
                                                  color: eH.A.colors.ICON_MUTED.css,
                                              }),
                                        (0, r.jsx)(et.E, {
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
            (0, r.jsx)(eL.animated.div, {
                className: t_.um,
                style: { transform: I.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), R());
                    },
                    text: eK.intl.string(eK.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var tO = n(484063),
    tT = n(47671),
    tb = n(644235),
    tI = n(253932);
function tR() {
    let e = (0, E.bG)([tT.A], () => null != tT.A.gradientPreset),
        t = (0, tb.lo)(tI.eh.useSetting().customUserThemeSettings);
    return e || t;
}
var ty = n(211824),
    tM = n(701256),
    tL = n(164900),
    tH = n(161005);
let tQ = [
    { key: "client-theme", icon: eU.PaintPaletteIcon, label: tM.default.TTUKuI },
    { key: "display-name-style", icon: eD.LettersIcon, label: eK.t.NEzEws },
    { key: "app-icon", icon: eF.ClydeIcon, label: eK.t.RPh2ou },
];
function tU(e) {
    let { hero: t, contentPosition: n, impressionRef: s } = e,
        l = tR(),
        { hoverProps: a } = tS(
            i.useCallback(
                (e) => {
                    (0, ej.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eC.HAw.QUEST_HOVER : eC.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ea.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ed.jO)(ea.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        ),
        u = i.useRef(null),
        [c, d] = i.useState({ top: !1, bottom: !1 }),
        E = i.useCallback(() => {
            let e = u.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                n = e.getDistanceFromBottom() > 4;
            d((e) => (e.top === t && e.bottom === n ? e : { top: t, bottom: n }));
        }, []);
    i.useLayoutEffect(() => {
        E();
    }, [E]);
    let { topFade: h, bottomFade: f } = (0, eP.z)({
            topFade: +!!c.top,
            bottomFade: +!!c.bottom,
            config: { ...eL.config.gentle, duration: 100 },
        }),
        g = i.useCallback(() => {
            ((0, el.r)({
                type: er.F.CLICK_INTERNAL,
                adCreativeType: m.p.QUEST_HOME_HERO,
                adCreativeId: t.id,
                questContentCTA: ed.Cy.OPEN_AD_PERK_MODAL,
                surfaceId: ea.uF.QUEST_HOME_HERO_SHELF,
                sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                questContentPosition: n,
                impressionId: s.current?.getId(),
            }),
                (0, tO.A)({ sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF }));
        }, [t.id, n, s]);
    return (0, r.jsxs)("div", {
        className: o()(tL.Nr, tH.Tp, { [tH.D7]: !l }),
        [e0]: !0,
        ...a,
        children: [
            (0, r.jsxs)("div", {
                className: tL.$_,
                children: [
                    (0, r.jsx)("div", { className: tL.qx }),
                    (0, r.jsx)(eQ.r, { alt: "", ariaHidden: !0, width: 244, className: tL.yr }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: tL.Qs,
                children: [
                    (0, r.jsx)(eL.animated.div, {
                        className: tL.ns,
                        style: {
                            maskImage: (0, eL.to)(
                                [h, f],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(ek.vN, {
                            children: (0, r.jsx)(eq.zC, {
                                ref: u,
                                className: tL.zH,
                                onScroll: E,
                                children: (0, r.jsxs)(j.B, {
                                    gap: 20,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 12,
                                            children: [
                                                (0, r.jsx)(ex.D, {
                                                    variant: "heading-xl/semibold",
                                                    color: "text-strong",
                                                    children: eK.intl.string(tM.default["fShp/D"]),
                                                }),
                                                (0, r.jsx)(et.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-default",
                                                    children: eK.intl.format(tM.default.lCtBoO, {
                                                        nonPremiumEndDate: ty.Fg,
                                                        premiumEndDate: ty.zv,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(j.B, {
                                            gap: 8,
                                            children: tQ.map((e) => {
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
                                                                color: eH.A.colors.ICON_DEFAULT.css,
                                                            }),
                                                            (0, r.jsx)(et.E, {
                                                                variant: "body-sm/medium",
                                                                color: "text-default",
                                                                children: eK.intl.string(s),
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
                            text: eK.intl.string(tM.default["KX1/jp"]),
                            onClick: g,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var tD = n(418842),
    tF = n(129230),
    tP = n(403362),
    tk = n(856383);
let tq = (0, Y.mj)({
    name: "2026-06-hero-shelf-ad-tile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tw = n(792620);
function tB(e, t, n) {
    if (null != n) {
        if (e) {
            let e = n.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] });
            return {
                "--custom-quest-highlight-blur": (0, eL.to)([e], (e) => `${25 * e}px`),
                "--custom-quest-highlight-alpha": (0, eL.to)([e], (e) => `${e}`),
            };
        }
        if (t)
            return { opacity: (0, eL.to)([n.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var tV = n(531525),
    tW = n(726356);
function tG(e) {
    let { hero: t, shelfQuests: n, isBannerLoading: s, onQuestCtaClick: l } = e,
        a = (0, tD.C)(),
        { enabled: u } = tq.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        c = (0, P.kV)(t),
        d = tR(),
        E = u && !c,
        h = i.useMemo(
            () =>
                E
                    ? (n
                          .map((e) => (0, tw.xc)(e) ?? (0, tw._3)(e)?.at(0) ?? null)
                          .filter(tP.Vq)
                          .at(0) ?? null)
                    : null,
            [n, E],
        ),
        { isLoading: f, data: g, error: x } = (0, eM.I)(h),
        v = (0, ey.A)(g),
        C = E && null != g && !v;
    i.useEffect(() => {
        E &&
            null != h &&
            null != x &&
            (tF.default.track(eC.HAw.AD_ASSET_LOADING_FAILURE, {
                source: tj.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                ad_creative_id: t.id,
                ad_creative_type: m.p.QUEST_HOME_HERO,
                application_ids: [h],
            }),
            tk.A.captureException(x, { tags: { source: tj.rE.QUEST_HOME_HERO_SHELF_DESKTOP } }));
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
                                      n = eR.get(`${e}-${t}`);
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
                                                      ? (n((0, eI.Sf)(l, t, 10)),
                                                        (l.onerror = null),
                                                        (l.onload = null),
                                                        (l = null))
                                                      : s("image is null");
                                              }),
                                              (l.src = e));
                                      })
                                  ).map((e) => {
                                      let [t, n, s] = e;
                                      return (0, eb.Ob)(t, n, s);
                                  });
                                  return (eR.set(`${e}-${t}`, s), s);
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
            i.useMemo(() => (null != _ ? (0, eu.UX)(_, { format: "webp", width: 400, height: 600 }) : null), [_]),
            8,
        ),
        p = i.useMemo(() => (null == S ? null : (0, eA.Z)(S)), [S]),
        N = i.useMemo(() => {
            if (null != p)
                return {
                    "--custom-hero-shelf-scrim-gradient-start": p[0],
                    "--custom-hero-shelf-scrim-gradient-end": p[1],
                };
        }, [p]);
    return s || f
        ? (0, r.jsx)(tK, { numShelfCards: n.length + 1, hasWideLeadingTile: u || c })
        : (0, r.jsx)(e3, {
              className: o()(tW.vo, { [tH.vo]: c }),
              overflowAmount: 25,
              maskWidth: eY(a),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(j.B, {
                  className: tW.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  style: N,
                  children: [
                      c &&
                          (0, r.jsx)(eh.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: ea.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tU, { hero: t, contentPosition: 0, impressionRef: n }),
                                  }),
                          }),
                      !u &&
                          !c &&
                          (0, r.jsx)(eh.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: ea.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tp, { hero: t, contentPosition: 0, impressionRef: n }),
                                  }),
                          }),
                      C &&
                          (0, r.jsx)(eh.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: ea.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tN, {
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
                              eh.Z,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  relatedQuestId: e.id,
                                  questContent: ea.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: n + 1,
                                  sourceQuestContent: ea.uF.QUEST_HOME_HERO_SHELF,
                                  children: (s) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              s.current = e;
                                          },
                                          children: (0, r.jsx)(tA, {
                                              heroId: t.id,
                                              quest: e,
                                              onQuestCtaClick: l,
                                              contentPosition: n + 1,
                                              className: c ? o()(tH.Tp, { [tH.D7]: !d }) : void 0,
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
function tK(e) {
    let { className: t, numShelfCards: n, hasWideLeadingTile: s } = e,
        l = (0, tD.C)(),
        i = s ? Math.max(n, 3) : Math.max(n, 4);
    return (0, r.jsx)(e3, {
        className: o()(tW.vo, t),
        overflowAmount: 25,
        maskWidth: eY(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(j.B, {
            className: tW.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: i }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(tV.m, tW.W_, { [tW.E8]: s && 0 === t }) }, t),
            ),
        }),
    });
}
var tz = n(74498);
function t$() {
    return (0, r.jsx)("div", { className: tz.Np });
}
function tY(e) {
    let { heroImage: t, heroVideo: n } = e,
        s = i.useRef(null);
    (0, ef.A)(s);
    let l = i.useMemo(() => (null != n ? (0, eu.WV)(n) : null) ?? t, [n, t]);
    return (0, r.jsx)(ee._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eE.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: s,
                imageAsset: {
                    alt: "",
                    className: tz.LY,
                    asset: { url: l, mimetype: (0, eu.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: tz.LY,
                    asset: { url: n, mimetype: (0, eu.vm)(n), isAnimated: !0 },
                    assetId: n,
                },
            }),
    });
}
function tX(e) {
    let { heroImage: t, heroVideo: n } = e;
    return null == n
        ? (0, r.jsxs)("div", {
              className: tz.Tv,
              children: [
                  (0, r.jsx)(t$, {}),
                  (0, r.jsx)("div", {
                      className: tz.LO,
                      children: (0, r.jsx)(ee._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: tz.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tz.LO, tz.jx, tz.hw),
                      children: (0, r.jsx)("img", { className: tz.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tz.LO, tz.jx, tz.Co),
                      children: (0, r.jsx)("img", { className: tz.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: tz.Tv,
              children: [
                  (0, r.jsx)(t$, {}),
                  (0, r.jsx)("div", { className: tz.LO, children: (0, r.jsx)(tY, { heroImage: t, heroVideo: n }) }),
              ],
          });
}
function tJ(e) {
    let { hero: t, hasFetchedQuests: n, hasNoAccessibleQuests: s } = e,
        l = (0, ec.WS)(),
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
                    event: eC.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: ea.uF.QUEST_HOME_HERO,
                }));
        }, [n, s, t.id, t.questIds, l]),
        null
    );
}
function tZ(e) {
    let { hero: t, onQuestCtaClick: n, isBannerLoading: s } = e,
        l = (0, E.bG)([ei.A], () => ei.A.quests),
        a = (0, E.bG)([ei.A], () => ei.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, Z.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, eN.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        f = h[0],
        { enabled: v } = eo.Ay.useConfig({ location: tj.rE.QUEST_HOME_HERO });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eh.Z, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: ea.uF.QUEST_HOME_HERO,
                sourceQuestContent: ea.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(tJ, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(ep, {
                                ref: (t) => {
                                    e.current = s ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [tz.lX]: s }),
                                topContent: (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, r.jsx)(ee._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, r.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: tz.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(et.E, {
                                            color: "text-strong",
                                            variant: "body-sm/normal",
                                            className: tz.yu,
                                            children: eK.intl.string(eK.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                overlay:
                                    v &&
                                    (0, r.jsx)(en.D, {
                                        tag: "div",
                                        className: tz.fj,
                                        "aria-label": t.cta.buttonLabel,
                                        onClick: () => {
                                            (0, em._Q)(
                                                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                                                {
                                                    content: ea.uF.QUEST_HOME_HERO_BANNER,
                                                    ctaContent: ed.Cy.OPEN_GAME_LINK,
                                                    impressionId: l.current?.getId(),
                                                    sourceQuestContent: ea.uF.QUEST_HOME_HERO,
                                                },
                                            );
                                        },
                                    }),
                                buttons: (0, r.jsxs)(g.e, {
                                    children: [
                                        (0, r.jsx)(x.$, {
                                            onClick: () => {
                                                (0, em._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: ea.uF.QUEST_HOME_HERO,
                                                        ctaContent: ed.Cy.OPEN_GAME_LINK,
                                                        impressionId: l.current?.getId(),
                                                        sourceQuestContent: ea.uF.QUEST_HOME_HERO,
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
                                                        (0, el.r)({
                                                            type: er.F.CLICK_INTERNAL,
                                                            adCreativeType: m.p.QUEST_HOME_HERO,
                                                            adCreativeId: t.id,
                                                            questContentCTA: ed.Cy.VIEW_QUESTS,
                                                            surfaceId: ea.uF.QUEST_HOME_HERO,
                                                            sourceQuestContent: ea.uF.QUEST_HOME_HERO,
                                                        }));
                                                },
                                                size: "md",
                                                text: eK.intl.string(eK.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(tX, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(tG, { hero: t, isBannerLoading: s, shelfQuests: u, onQuestCtaClick: n }),
        ],
    });
}
function t0() {
    return (0, r.jsx)("div", { className: o()(e_.iE, e_.FG, e_.B3), children: (0, r.jsx)(es.y, {}) });
}
var t1 = n(73153),
    t2 = n(343559);
n(667532);
var t4 = n(890497),
    t5 = n(663417),
    t8 = n(265872),
    t3 = n(624479),
    t6 = n(416052),
    t7 = n(417098);
function t9(e) {
    let { error: t } = e,
        n = t.getAnyErrorMessage();
    return (0, r.jsx)(t7.$T, {
        color: t7.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != n ? n : eK.intl.string(eK.t.ZErSg5) }),
    });
}
var ne = n(602853),
    nt = n(817281),
    nn = n(688810),
    ns = n(270746),
    nl = n(413599),
    nr = n(912875);
let ni = function () {
    let { analyticsLocations: e } = (0, nn.Ay)(),
        t = (0, E.bG)([nl.A], () => nl.A.theme),
        n = i.useRef(null);
    i.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let s = (0, ne.r)(eH.A.colors.BACKGROUND_BASE_LOW, eC.NJ8.LIGHT),
        l = (0, ne.r)(eH.A.colors.BACKGROUND_BASE_LOW, eC.NJ8.DARK),
        a = (0, ne.r)(eH.A.colors.BACKGROUND_BASE_LOW, eC.NJ8.ONYX),
        o = i.useMemo(
            () => [
                { theme: eC.NJ8.LIGHT, label: eK.t.K2sFfo, color: s.hex() },
                { theme: eC.NJ8.DARK, label: eK.t.b8Cei3, color: l.hex() },
                { theme: eC.NJ8.ONYX, label: eK.t.Do4ZJx, color: a.hex() },
            ],
            [s, l, a],
        ),
        u = i.useCallback(
            (t) => {
                ((0, ns.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, nt.u_)({ theme: t }));
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != n.current && u(n.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: nr.N,
        children: (0, r.jsxs)("div", {
            className: nr.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        en.D,
                        {
                            tag: "div",
                            className: nr.Du,
                            onClick: () => u(e.theme),
                            "aria-label": eK.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${nr.WT} ${t === e.theme ? nr.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: nr.i, children: eK.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(eB.K, {
                    onClick: c,
                    "aria-label": eK.intl.string(eK.t.yBZMsQ),
                    icon: t5.RefreshIcon,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var na = n(219354);
let no = function (e) {
    let { questId: t, setQuestId: n, quest: s, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, Z.pT)(),
        h = (0, E.bG)([ei.A], () => (null != t ? ei.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, E.bG)([ei.A], () => null != t && ei.A.isFetchingQuestPreview(t), [t]),
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
                    await (0, t2.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, t2.UZ)(t);
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
                    await (0, t2.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(
            (e) => {
                (0, z.uJ)(e) || null == n || n(e);
            },
            [n],
        );
    return (0, r.jsxs)("div", {
        className: na.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: na.Br,
                    children: (0, r.jsxs)("div", {
                        className: na.bo,
                        children: [
                            (0, r.jsx)(ni, {}),
                            (0, r.jsxs)("div", {
                                className: na.b8,
                                children: [
                                    (0, r.jsx)(
                                        t4.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: S,
                                            placeholder: eK.intl.string(eK.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, z.uJ)(t?.trim())) return e;
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
                                    (0, r.jsx)(eB.K, {
                                        onClick: l,
                                        "aria-label": eK.intl.string(eK.t.wzzjk9),
                                        icon: t5.RefreshIcon,
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
                    className: na.in,
                    children: (0, r.jsxs)(g.e, {
                        className: na.xv,
                        children: [
                            (0, r.jsx)(x.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eK.intl.string(eK.t.jQEfRT),
                            }),
                            (0, r.jsx)(x.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eK.intl.string(eK.t.taqkwK),
                            }),
                            (0, r.jsx)(x.$, {
                                onClick: _,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eK.intl.string(eK.t.cKSLr4),
                            }),
                            (0, r.jsx)(t8.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: na.PP,
                                        children: (0, r.jsx)("div", {
                                            className: na.sH,
                                            children: (0, r.jsx)(t6.A, {
                                                value: tC.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eK.intl.string(eK.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(eB.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": eK.intl.string(eK.t.rNGQfD),
                                        icon: t3.CopyIcon,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(t9, { error: h }) : null,
            f ? (0, r.jsx)(es.y, {}) : null,
        ],
    });
};
var nu = n(95362),
    nc = n(761508),
    nd = n(425069);
function nm() {
    return (0, r.jsx)("div", { className: nd.y });
}
var nE = n(834615),
    nh = n(34665);
let nf = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nh.x3,
        children: (0, r.jsxs)("div", {
            className: nh.B0,
            children: [
                (0, r.jsx)(ex.D, {
                    className: nh.R_,
                    variant: "heading-sm/semibold",
                    children: eK.intl.string(eK.t.L2mlUb),
                }),
                (0, r.jsx)(eh.R, {
                    questOrQuests: t,
                    questContent: ea.uF.ACTIVITY_PANEL,
                    sourceQuestContent: ea.uF.ACTIVITY_PANEL,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(nE.default, { quest: t }),
                        }),
                }),
            ],
        }),
    });
};
var ng = n(66246),
    nx = n(717695),
    nv = n(466209),
    nj = n(83978);
let nC = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nh.x3,
        children: (0, r.jsxs)("div", {
            className: nv.wp,
            children: [
                (0, r.jsx)(ex.D, {
                    className: nv.Oo,
                    variant: "heading-sm/semibold",
                    children: eK.intl.string(eK.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: nv.RE,
                    children: (0, r.jsx)("div", {
                        className: nv.Z,
                        children: (0, r.jsx)("div", {
                            className: nj.C3,
                            children: (0, r.jsx)(nx.A, {
                                children: (0, r.jsx)(ee.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(ng.QuestBarQuestContent, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var n_ = n(10394);
function nS(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nh.x3,
        children: (0, r.jsxs)("div", {
            className: nh.B0,
            children: [
                (0, r.jsx)(ex.D, {
                    className: nh.R_,
                    variant: "heading-sm/semibold",
                    children: eK.intl.string(eK.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: nh.YT,
                    children: (0, r.jsx)(n_.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var np = n(632623),
    nN = n(622409);
let nA = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: nh.x3,
        children: (0, r.jsxs)("div", {
            className: nh.B0,
            children: [
                (0, r.jsx)(ex.D, { variant: "heading-sm/semibold", children: eK.intl.string(eK.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: nN.wu,
                    children: (0, r.jsx)("span", { className: nN.cy, children: eK.intl.string(eK.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: nN.oU,
                    children: (0, r.jsx)("div", {
                        className: nN.zx,
                        children: (0, r.jsx)("div", {
                            className: nN.Lj,
                            children: (0, r.jsx)("div", {
                                className: nN.n0,
                                children: (0, r.jsx)(np.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var nO = n(731388),
    nT = n(484810);
function nb(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: nT.y, children: t });
}
var nI = n(612324),
    nR = n(365199),
    ny = n(270045),
    nM = n(79545),
    nL = n(173936),
    nH = n(914410),
    nQ = n(426110),
    nU = n(339350),
    nD = n(782134),
    nF = n(271536),
    nP = n(768622),
    nk = n(793934),
    nq = n(662940),
    nw = n(977416);
let nB = 2 * tc.A.Millis.DAY,
    nV = 3 * tc.A.Millis.DAY,
    nW = new Map(e$.map((e) => [e.identifier, e])),
    nG = {
        [ez.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: n } = t;
            return e.slice().sort((e, t) => {
                var s, l;
                return ((s = n.get(e)), (l = n.get(t)), null == s || null == l ? 0 : l.localeCompare(s));
            });
        },
    };
function nK(e) {
    return e.features.includes(tj.Li.EXCLUDE_FROM_FEATURED);
}
function nz(e, t) {
    let n = nW.get(e)?.maxItems,
        s = t.get(e)?.length ?? 0;
    return null == n || s < n;
}
var n$ = n(853978);
function nY(e) {
    let { quest: t, isHovering: n = !1 } = e,
        s = (0, nM.Pd)(t),
        l = (0, E.bG)([ei.A], () => s === nM.UA.UNENROLLED && null != ei.A.questEnrollmentBlockedUntil, [s]),
        a = (0, Z.fc)(t),
        u = (0, Z.I3)(t),
        c = i.useMemo(() => (0, nq.Dd)(t.config, s, l), [t.config, s, l]),
        d = i.useMemo(() => (0, nq.CK)(s, a, u, l), [s, a, u, l]),
        m = (function (e) {
            let t = (0, nM.Pd)(e),
                [n] = i.useState(() => Date.now()),
                s = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = s.getTime() - n,
                r =
                    (function (e) {
                        switch (e) {
                            case nM.UA.UNENROLLED:
                            case nM.UA.ENROLLED:
                            case nM.UA.INCOMPLETE:
                                return !0;
                            case nM.UA.COMPLETED:
                            case nM.UA.CLAIMED:
                            case nM.UA.EXPIRED:
                            case nM.UA.EXPIRED_CLAIMABLE:
                            case nM.UA.EXPIRED_CLAIMED:
                                return !1;
                        }
                    })(t) &&
                    l < nV &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, ti.A)(s, tc.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(n$.fC, { [n$.R]: n }),
        children: [
            (0, r.jsxs)("div", {
                className: n$.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(et.E, {
                            variant: "body-xs/semibold",
                            className: n$.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(et.E, {
                            variant: "body-xs/semibold",
                            color: "text-overlay-light",
                            className: n$.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: n$.BA,
                            children: [
                                (function (e, t) {
                                    let n = { size: "xxs", className: n$.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(nU.HourglassIcon, { ...n });
                                    switch ((0, nq.pv)(e)) {
                                        case nq.UK.PLAY:
                                            return (0, r.jsx)(tl.GameControllerIcon, { ...n });
                                        case nq.UK.WATCH:
                                            return (0, r.jsx)(nD.PlayIcon, { ...n });
                                        case nq.UK.ACTIVITY:
                                            return (0, r.jsx)(nF.QuestsMissionsIcon, { ...n });
                                        case nq.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(nP.FlashIcon, { ...n });
                                        case nq.UK.ARENA:
                                            return (0, r.jsx)(nk.QuestsArenaIcon, { ...n });
                                    }
                                })(t, l),
                                (0, r.jsx)(et.E, {
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
                    className: o()(n$.qS, n$.WZ),
                    children: (0, r.jsx)(et.E, {
                        variant: "body-xs/semibold",
                        color: "currentColor",
                        children: eK.intl.string(eK.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var nX = n(409626),
    nJ = n(870273),
    nZ = n(646917),
    n0 = n(866665),
    n1 = n(743368),
    n2 = n(452411),
    n4 = n(321538),
    n5 = n(964051);
function n8(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l, contentPosition: i, rowIndex: a } = e,
        u = (0, nM.Pd)(t),
        { ctaOnHover: c } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        d = (0, E.bG)([ei.A], () => u === nM.UA.UNENROLLED && null != ei.A.questEnrollmentBlockedUntil, [u]),
        m = !(0, tw.no)(t) || ![nM.UA.ENROLLED, nM.UA.UNENROLLED, nM.UA.INCOMPLETE].includes(u),
        h = u === nM.UA.EXPIRED || u === nM.UA.EXPIRED_CLAIMED || (u === nM.UA.CLAIMED && (0, tw.GL)(t)),
        f = (0, Z.do)({ quest: t, content: n, ctaContent: ed.Cy.OPEN_GAME_LINK, sourceQuestContent: s });
    return (0, r.jsxs)("div", {
        className: o()(n5.lO, { [n5.Fq]: l || !c }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)("div", { className: n5.Cj }),
            (0, r.jsx)(eg.N, {
                theme: eC.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, n5.tn),
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
                                        : (0, r.jsx)(n0.m, {
                                              text: eK.intl.string(eK.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, r.jsx)(eB.K, {
                                                  variant: "secondary",
                                                  icon: n1.LinkExternalMediumIcon,
                                                  "aria-label": eK.intl.string(eK.t.LLLLPD),
                                                  onClick: f,
                                              }),
                                          })),
                                !h &&
                                    !d &&
                                    (0, r.jsx)(n2.A, {
                                        quest: t,
                                        surface: nM.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: n,
                                        analyticsCtxSourceQuestContent: s,
                                        analyticsCtxQuestContentPosition: i,
                                        analyticsCtxQuestContentRowIndex: a,
                                    }),
                                d &&
                                    (0, r.jsx)(x.$, {
                                        variant: "overlay-primary",
                                        text: eK.intl.string(eK.t.vY9GgG),
                                        onClick: () => (0, n4.m6)(t, n, s),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var n3 = n(403581),
    n6 = n(576761),
    n7 = n(41327);
function n9(e) {
    let { onClick: t, questId: n, orbMultiplierEligibility: s } = e,
        l = (0, Z.ZP)(n),
        i = (0, n6.B9)(s);
    if (null == l) return null;
    let a = i
        ? eK.intl.formatToPlainString(eK.t.l2UfLG, { bonusOrbMultiplier: l })
        : eK.intl.formatToPlainString(eK.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(en.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, n4.gC)(l, s), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: n7.k,
            children: [
                (0, r.jsx)(n3.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(et.E, { variant: "body-sm/normal", color: "currentColor", className: n7.Q, children: a }),
            ],
        }),
    });
}
var se = n(947641),
    st = n(194261),
    sn = n(106799),
    ss = n(476334);
function sl(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l } = e,
        a = (0, E.bG)([to.default], () => to.default.getCurrentUser()),
        u = (0, th.mq)(t.config, a),
        c = (0, th.ks)(t.config),
        d = (0, th.wo)(t.config, a),
        { completedRatio: m } = (0, Z.O9)(t),
        h = (0, nM.Pd)(t),
        f = (0, Z.Hv)(),
        g = h === nM.UA.CLAIMED || h === nM.UA.EXPIRED_CLAIMED,
        x = g || h === nM.UA.COMPLETED || h === nM.UA.EXPIRED_CLAIMABLE,
        v = (0, F.ix)({ quest: t, questContent: n, sourceQuestContent: s }),
        j = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), f && !g)) {
                    ((0, ej.Y5)({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: ed.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: s,
                    }),
                        (0, n4.FS)());
                    return;
                }
                v();
            },
            [v, f, g, t.id, n, s],
        ),
        C = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tx.A, {
                    quest: t,
                    location: tj.rE.QUEST_HOME_DESKTOP,
                    questContent: n,
                    autoplay: l,
                    lazyLoad: !0,
                    className: ss.al,
                    fullWidth: !0,
                    sourceQuestContent: s,
                }),
                g &&
                    (0, r.jsx)("div", {
                        className: ss.EY,
                        children: (0, r.jsx)(se.CheckmarkLargeBoldIcon, {
                            className: ss.AM,
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                h === nM.UA.EXPIRED &&
                    (0, r.jsx)("div", {
                        className: ss.EY,
                        children: (0, r.jsx)(st.LockIcon, { size: "sm", className: ss.Sz, color: "currentColor" }),
                    }),
            ],
        }),
        _ = (0, r.jsx)("div", { className: h === nM.UA.UNENROLLED ? ss.fm : ss.n5, children: C }),
        S = (0, r.jsx)(tg.A, { size: 66, percentComplete: m, useAltStyle: !0, children: _ }),
        p = x
            ? (0, r.jsx)(en.D, {
                  className: ss.q9,
                  onClick: j,
                  "aria-label": g
                      ? (0, th.r7)(t.config)
                          ? eK.intl.string(eK.t.bAGFz3)
                          : eK.intl.string(eK.t.vTgCWx)
                      : eK.intl.string(eK.t.cfY4PE),
                  children: S,
              })
            : S;
    return (0, r.jsxs)("div", {
        className: o()(ss.CZ, { [ss.Pv]: l }),
        children: [
            (0, r.jsx)(eg.N, {
                theme: eC.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, ss.tE, { [ss.cB]: l }),
                        children: h === nM.UA.UNENROLLED ? _ : p,
                    }),
            }),
            (0, r.jsxs)("div", {
                className: o()(ss.FS, { [ss.IR]: l }),
                children: [
                    (0, r.jsx)(et.E, {
                        variant: "body-sm/medium",
                        className: ss.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(ss.oV, { [ss.FJ]: l }),
                        children: [
                            c && (0, r.jsx)(sn.A, { className: ss.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                et.E,
                                {
                                    variant: "body-md/medium",
                                    className: ss.zN,
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
var sr = n(604970);
function si(e) {
    let { quest: t, questContent: n, isHovering: s, sourceQuestContent: l, contentPosition: a, rowIndex: u } = e,
        c = i.useRef(null),
        d = (0, nJ.A9)(t, l, tj.rE.QUEST_HOME_DESKTOP, nX.GameProfileSources.QuestHome, c),
        m = (0, nZ.z)(),
        E = (0, Z.SD)(t, m);
    return (0, r.jsxs)("div", {
        ref: c,
        className: sr.qr,
        children: [
            (0, r.jsx)(sl, { quest: t, questContent: n, sourceQuestContent: l, isHovering: s }),
            (0, r.jsxs)("div", {
                className: sr.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: sr.Wi,
                        children: [
                            (0, r.jsx)(et.E, {
                                variant: "body-sm/normal",
                                className: o()(sr.Wj, sr.h_, { [sr.C4]: s }),
                                children: d,
                            }),
                            (0, r.jsx)(et.E, {
                                "aria-hidden": !0,
                                variant: "body-sm/normal",
                                lineClamp: 1,
                                className: o()(sr.Wj, sr.XV, { [sr.Hz]: s }),
                                children: d,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: sr.Gv,
                        children: [
                            (0, r.jsx)(et.E, {
                                variant: "body-sm/normal",
                                className: sr.I4,
                                children: eK.intl.string(eK.t.o6FLcF),
                            }),
                            E &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(et.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(n9, { questId: t.id, orbMultiplierEligibility: m }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(n8, {
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
var sa = n(434295);
let so = { [eu.i2.TIER_2]: sa.qt, [eu.i2.TIER_3]: sa.jR, [eu.i2.TIER_4]: sa.cd };
function su(e) {
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
        { completedRatio: h, completedRatioDisplay: f } = (0, Z.O9)(t, !0),
        g = (0, eu.tW)(t, eu.fY.LOGO_TYPE, eC.NJ8.DARK).url,
        x = (0, E.bG)([nl.A], () => nl.A.theme) === eC.NJ8.LIGHT,
        v = (0, nQ.Qn)(t.config),
        j = null != v ? so[v] : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            x
                ? (0, r.jsx)(eg.N, {
                      theme: eC.NJ8.DARK,
                      disableAdaptiveTheme: !0,
                      children: (e) => (0, r.jsx)("div", { className: o()(e, sa.f5, j), "aria-hidden": !0 }),
                  })
                : (0, r.jsx)("div", { className: o()(sa.f5, j), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: o()(sa.ZF, j, { [sa.SP]: l }), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: sa.ZH, children: (0, r.jsx)(nY, { quest: t, isHovering: l }) }),
            (0, r.jsxs)("div", {
                className: o()(sa.o1, { [sa.SP]: l }),
                children: [
                    i &&
                        (0, r.jsx)(en.D, {
                            tag: "div",
                            className: sa.hP,
                            onClick: a,
                            "aria-label": eK.intl.string(eK.t.WqhZss),
                            children: (0, r.jsx)(nL.LinkIcon, { size: "sm", color: "currentColor" }),
                        }),
                    (0, r.jsx)(ny.C, {
                        questContent: n,
                        quest: t,
                        hideLearnMore: !0,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: s,
                        onOpen: u,
                        onClose: c,
                        children: (e) =>
                            (0, r.jsx)(en.D, {
                                ...e,
                                tag: "div",
                                className: sa.hP,
                                "aria-label": eK.intl.string(eK.t.DEoVWZ),
                                children: (0, r.jsx)(nR.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o()(sa.KJ, { [sa.R]: l }),
                children: [
                    (0, r.jsx)("div", {
                        className: sa.Ez,
                        children: (0, r.jsx)("img", { className: sa.dK, src: g, alt: t.config.messages.gameTitle }),
                    }),
                    (0, r.jsxs)("div", {
                        className: sa.Cd,
                        children: [
                            (0, r.jsx)(et.E, {
                                variant: "body-sm/semibold",
                                color: "text-overlay-light",
                                className: sa.ZV,
                                children: f,
                            }),
                            (0, r.jsx)("div", {
                                className: sa.oU,
                                children: (0, r.jsx)(nH.Ay, {
                                    variant: nH.qP.UNSET,
                                    override: { default: { gradientStart: "#189E4E", gradientEnd: "#44FC7E" } },
                                    weight: nH.fh.LIGHT,
                                    progress: Math.round(100 * h),
                                    glowing: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(sa.SJ, { [sa.SP]: l }),
                children: (0, r.jsx)(si, {
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
var sc = n(720875),
    sd = n(614972),
    sm = n(688755),
    sE = n(831368),
    sh = n(704289);
function sf(e) {
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
        x = i.useMemo(() => (0, eu.tW)(n, eu.fY.QUEST_BAR_HERO_IMAGE), [n]),
        v = i.useMemo(() => (0, eu.tW)(n, eu.fY.QUEST_BAR_HERO_VIDEO), [n]),
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
        O = (0, sd.c)({ onMenuOpen: S, onMenuClose: p }),
        T = (0, nM.Pd)(n),
        b = T === nM.UA.EXPIRED || T === nM.UA.EXPIRED_CLAIMED,
        I = (0, tf.E0)(n.config),
        R = (0, E.bG)([nl.A], () => nl.A.theme),
        y = R === eC.NJ8.ASH || R === eC.NJ8.DARK,
        M = R === eC.NJ8.LIGHT,
        L = i.useContext(eG.X),
        { visibilityElementRef: H, almostVisibleInViewport: Q } = (0, sE.I)(
            L?.current?.getScrollerNode() ?? null,
            m ?? !1,
        ),
        {
            handleHoverStart: U,
            handleHoverEnd: D,
            isEventWithinParent: P,
        } = (0, sm.B)({ quest: n, questContent: s, contentPosition: c, rowIndex: d, sourceQuestContent: g }),
        k = (0, F.Lk)({
            isShareable: I,
            questId: n.id,
            trackingCtx: i.useMemo(
                () => ({ content: s, ctaContent: ed.Cy.CONTEXT_MENU_COPY_LINK, sourceQuestContent: g }),
                [s, g],
            ),
        }),
        q = (0, nI.A)(h, H),
        w = eK.intl.formatToPlainString(eK.t.EAYZAr, { questName: n.config.messages.questName }),
        B = o()(sh.kL, { [sh.Cn]: A, [sh.DM]: N }, u),
        V = (0, r.jsx)(sc.A, {
            showPlaceholder: !Q,
            width: 800,
            height: 450,
            className: sh.Tv,
            children: (0, r.jsx)(eE.N, {
                imageAsset:
                    null != x
                        ? { asset: x, assetId: "QuestTileV2", alt: eK.intl.string(eK.t.jnijWz), className: sh.Tv }
                        : void 0,
                videoAsset:
                    null != v
                        ? {
                              asset: v,
                              assetId: "QuestTileV2_heroAnimated",
                              className: o()(sh.Tv, sh.gJ, { [sh.C7]: N }),
                          }
                        : void 0,
                imageSize: { width: 800, height: 450 },
                showVideo: C || !0 === a,
            }),
        }),
        W = A
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      V,
                      (0, r.jsx)(sd.q.Provider, {
                          value: O,
                          children: (0, r.jsx)(su, {
                              quest: n,
                              questContent: s,
                              sourceQuestContent: g,
                              isHovering: N,
                              isShareable: I,
                              onCopyShareLink: k,
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
                      V,
                      (0, r.jsx)("div", { className: o()(sh.sL, { [sh.Mq]: b }) }),
                      M
                          ? (0, r.jsx)(eg.N, {
                                theme: eC.NJ8.ONYX,
                                disableAdaptiveTheme: !0,
                                children: (e) => (0, r.jsx)("div", { className: o()(e, sh.f5) }),
                            })
                          : (0, r.jsx)("div", { className: o()(sh.f5, { [sh.kg]: y }) }),
                      (0, r.jsxs)("div", {
                          className: sh.qy,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: sh.wx,
                                  children: [
                                      (0, r.jsx)(nY, { quest: n, isHovering: N }),
                                      (0, r.jsx)("div", {
                                          className: o()(sh.$s, { [sh.rk]: N }),
                                          onClick: (e) => e.stopPropagation(),
                                          children: (0, r.jsx)(ny.C, {
                                              questContent: s,
                                              quest: n,
                                              hideLearnMore: !0,
                                              shouldShowDisclosure: !0,
                                              showShareLink: !0,
                                              sourceQuestContent: g,
                                              onOpen: S,
                                              onClose: p,
                                              children: (e) =>
                                                  (0, r.jsx)(en.D, {
                                                      ...e,
                                                      tag: "div",
                                                      className: sh.E9,
                                                      "aria-label": eK.intl.string(eK.t.DEoVWZ),
                                                      children: (0, r.jsx)(nR.MoreHorizontalIcon, {
                                                          size: "sm",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(sd.q.Provider, {
                                  value: O,
                                  children: (0, r.jsx)(si, {
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
        id: (0, nO.sT)(n.id, t),
        className: sh.uW,
        "data-quest-tile": A ? "featured-v2" : "standard",
        "data-quest-tile-hovered": N ? "" : void 0,
        onMouseEnter: () => {
            (_.onMouseEnter(), U());
        },
        onMouseLeave: () => {
            (_.onMouseLeave(), D());
        },
        onFocus: (e) => {
            P(e) || (_.onFocus(), U());
        },
        onBlur: (e) => {
            P(e) || (_.onBlur(), D());
        },
        children: (0, r.jsx)("article", {
            ref: q,
            "aria-label": w,
            style: { "--custom-featured-tile-width": "291px" },
            className: B,
            children: W,
        }),
    });
}
let sg = i.memo(function (e) {
    let t = (0, E.bG)([ei.A], () => (null != e.questId ? ei.A.getQuest(e.questId) : void 0), [e.questId]),
        n = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == n
        ? null
        : (0, r.jsx)(eh.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === ea.uF.QUESTS_EMBED,
              overrideVisibility: e.overrideVisibility,
              onImpression: e.onImpression,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(sf, { ...e, quest: n, impressionRef: t }),
          });
});
function sx(e) {
    let { quest: t, isFeatured: n } = e,
        { useNewTile: s } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: nh.x3,
        children: (0, r.jsxs)("div", {
            className: nh.B0,
            children: [
                (0, r.jsx)(ex.D, {
                    className: nh.R_,
                    variant: "heading-sm/semibold",
                    children: n ? eK.intl.string(eK.t.AzkvWe) : eK.intl.string(eK.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(nb, {
                          children: (0, r.jsx)(sg, {
                              className: nh.d,
                              quest: t,
                              questContent: ea.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              isInFeaturedSection: n,
                              sourceQuestContent: ea.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                      })
                    : (0, r.jsx)(nO.Ay, {
                          className: nh.d,
                          quest: t,
                          questContent: ea.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: ea.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var sv = n(97808),
    sj = n(778712),
    sC = n(87664),
    s_ = n(427262),
    sS = n(198525),
    sp = n(381351);
let sN = function (e) {
    let { quest: t } = e,
        [n, s] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([to.default], () => to.default.getCurrentUser()),
        u = s_.Ay.useName(a),
        c = (0, sC.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(sS.default, {
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
        className: nh.x3,
        children: (0, r.jsxs)("div", {
            className: nh.B0,
            children: [
                (0, r.jsx)(ex.D, {
                    className: sp.R_,
                    variant: "heading-sm/semibold",
                    children: eK.intl.string(eK.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: sp.$Q, children: eK.intl.string(eK.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: sp.k0,
                    children: (0, r.jsx)(t8.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => s(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: t8.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(sp.Tn, { [sp.wH]: n }),
                                children: (0, r.jsx)(en.D, {
                                    onClick: () => s(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: sp.lm,
                                        children: [
                                            (0, r.jsx)(sv.eu, {
                                                size: sj._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: eC.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: sp.Fj,
                                                children: [
                                                    (0, r.jsx)(et.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(et.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-muted",
                                                        children: eK.intl.string(eK.t.b9w3bO),
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
function sA(e) {
    let { questId: t, selectedSections: n } = e,
        s = (0, E.bG)([ei.A], () => ei.A.getQuest(t)),
        l = (0, E.bG)([ei.A], () => ei.A.getFetchQuestPreviewError(t)),
        { useNewTile: i } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP });
    if (null != l || null == s) return null;
    function a(e) {
        return null == n || 0 === n.length || n.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nC, { quest: s }), (0, r.jsx)(nm, {})] }),
            a("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sx, { quest: s }), (0, r.jsx)(nm, {})] }),
            a("featured_tile") &&
                i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(sx, { quest: s, isFeatured: !0 }), (0, r.jsx)(nm, {})],
                }),
            a("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nA, { questId: s.id }), (0, r.jsx)(nm, {})] }),
            a("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nS, { quest: s }), (0, r.jsx)(nm, {})] }),
            a("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sN, { quest: s }), (0, r.jsx)(nm, {})] }),
            a("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nf, { quest: s }), (0, r.jsx)(nm, {})] }),
        ],
    });
}
var sO = n(875696);
function sT(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: s, controls: l, className: a } = e,
        u = (function () {
            let { useNewTile: e } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP });
            return [
                { value: "quest_bar", label: eK.intl.string(eK.t.rjVPdM) },
                { value: "home_card", label: eK.intl.string(eK.t["5wnpF3"]) },
                ...(e ? [{ value: "featured_tile", label: eK.intl.string(eK.t.AzkvWe) }] : []),
                { value: "share_embed", label: eK.intl.string(eK.t["D/gSWS"]) },
                { value: "channel_call_header", label: eK.intl.string(eK.t.gWinpQ) },
                { value: "members_list", label: eK.intl.string(eK.t.wpYima) },
                { value: "activity_panel", label: eK.intl.string(eK.t.L2mlUb) },
            ];
        })(),
        c = 0 === n.length || n.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === n.length ? n[0] : "all"), [n, c]);
    return (0, r.jsx)(nu.Ip, {
        className: o()(sO.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: sO.qE,
            children: [
                (0, r.jsx)(ex.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eK.intl.string(eK.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: sO.pf, children: l }),
                (0, r.jsxs)(nc.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        s?.(e);
                    },
                    children: [
                        (0, r.jsx)(nc.V.Item, { id: "all", children: eK.intl.string(eK.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(nc.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: sO.tZ, children: (0, r.jsx)("div", { className: sO.Qs, children: t }) }),
            ],
        }),
    });
}
let sb = function (e) {
    let { questId: t, className: n } = e,
        { questId: s, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: n } = (0, u.zy)(),
                s = i.useMemo(() => new URLSearchParams(n).get(Z.L1.QUEST_ID) ?? e, [n, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === s) return;
                        let n = new URLSearchParams();
                        (n.set(Z.L1.TAB, Z.NC.PREVIEW_TOOL),
                            n.set(Z.L1.QUEST_ID, e),
                            t.push(`${eC.BVt.QUEST_HOME}?${n.toString()}`));
                    },
                    [t, s],
                );
            return { questId: s, setQuestId: l };
        })(t),
        a = (0, E.bG)([ei.A], () => (null != s ? ei.A.getQuest(s) : void 0), [s]),
        o = (0, E.bG)([ei.A], () => (null != s ? ei.A.getQuestLoadedViaPreview(s) : null), [s]);
    (i.useEffect(() => {
        null != s &&
            (0, t2.dQ)(s).then(() => {
                (0, t2.Gt)(s);
            });
    }, [s]),
        i.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === s && (0, t2.dQ)(s);
            }
            return (
                t1.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    t1.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]));
    let [c, d] = i.useState([]);
    return (0, r.jsx)(sT, {
        className: n,
        controls: (0, r.jsx)(no, {
            questId: s,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != s && (0, t2.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(sA, { questId: o?.id, selectedSections: c }) : null,
    });
};
var sI = n(203879),
    sR = n(167417),
    sy = n(783977),
    sM = n(305866),
    sL = n(915089),
    sH = n(255604);
function sQ(e) {
    let { children: t, id: n } = e;
    return (0, r.jsx)(et.E, { className: sH.g, color: "text-subtle", id: n, variant: "body-sm/semibold", children: t });
}
let sU = function (e) {
    let { children: t, renderPopout: n } = e,
        s = (0, sL.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(t8.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(sM.l, { className: sH.S, "aria-labelledby": s, children: n(e, s) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var sD = n(368884);
let sF = function (e) {
    let { onChange: t, selectedFilters: n } = e,
        s = (0, Z.Nb)(),
        l = i.useCallback(
            (e) => (s) => {
                let l = e.filter((e) => s.includes(e.filter));
                t([...n.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [n, t],
        );
    return (0, r.jsx)(sU, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    s.map((e, t) => {
                        let s = e.options.map((e) => ({ label: (0, tE.up)(e.filter), value: e.filter })),
                            o = n.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter),
                            u = 0 === t ? a : `${a}-${t}`;
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: sD.B }),
                                    (0, r.jsx)(sQ, { id: u, children: e.heading }),
                                    (0, r.jsx)(sR.$, {
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
                    (0, r.jsx)("hr", { className: sD.B }),
                    (0, r.jsx)("div", {
                        className: sD.W,
                        children: (0, r.jsx)(x.$, {
                            fullWidth: !0,
                            onClick: () => {
                                (t([]), o());
                            },
                            size: "sm",
                            text: eK.intl.string(eK.t.VkKicb),
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
                text: eK.intl.formatToPlainString(eK.t.CEfkXl, { numSelectedFilters: n.length }),
                icon: sy.FiltersHorizontalIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sP = n(771871),
    sk = n(715482);
let sq = function (e) {
    let { onChange: t, optionClassName: n, selectedSortMethod: s } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        o = (0, Z.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: n })), [o, n]);
    return (0, r.jsx)(sU, {
        renderPopout: (e, t) => {
            let { closePopout: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(sQ, { id: t, children: eK.intl.string(eK.t.tZXJIS) }),
                    (0, r.jsx)(sP.z, {
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
                "aria-label": eK.intl.formatToPlainString(eK.t.lPlIMo, { selected: (0, tE.Js)(s) }),
                buttonRef: t,
                size: "sm",
                text: (0, tE.Js)(s),
                icon: sk.ChevronLargeDownIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sw = n(710969),
    sB = n(858899);
function sV() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, sB.P0)({ text: eK.intl.string(eK.t["5ABf1w"]), variant: "critical" }),
                tF.default.track(eC.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function sW(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            var l;
            r(((l = e.current?.clientWidth), null == l ? 1 : Math.max(1, Math.min(s, Math.floor((l + n) / (t + n))))));
        }, [r, t, n, s, e]);
    return ((0, ew.g)(e, a, [t, n], { fireOnMount: !0 }), l);
}
var sG = n(768497),
    sK = n(288613);
let sz = 4 * tc.A.Millis.SECOND;
function s$(e) {
    let { children: t, tileMinWidth: n, gridGap: s } = e,
        l = i.useRef(null),
        a = sW(l, n, s);
    return (0, r.jsx)("div", {
        className: sG.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${n}px`, "--custom-quest-grid-gap": `${s}px` },
        children: null !== a && t(a),
    });
}
function sY(e) {
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
        { showToast: E } = sV(),
        h = i.useRef(null),
        [f, g] = i.useState(null),
        [x, v] = i.useState(0),
        { useNewTile: j } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: C }, _] = (0, eP.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sz },
        })),
        S = i.useCallback(
            (e) => {
                if ((s && 0 === t.length) || !l) return !1;
                let r = (0, sw.vc)(e, t, n);
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
        ? (0, r.jsx)(es.y, { className: sG.u1 })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: sG.y7,
                children: [
                    (0, r.jsx)(ex.D, {
                        variant: "heading-xl/semibold",
                        children: eK.intl.string(a ? eK.t.PBfFnx : eK.t.NqFP6z),
                    }),
                    (0, r.jsx)(et.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: a ? eK.intl.format(eK.t.LdYS1H, { onClick: c }) : eK.intl.string(eK.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(s$, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    t.map((t, n) => {
                        let s = Math.floor(n / e),
                            l = f === t.id,
                            i = null != f && !l;
                        return (0, r.jsxs)(
                            eL.animated.div,
                            {
                                className: o()({ [sK.XB]: l, [nT.y]: j }),
                                style: tB(l, i, C),
                                children: [
                                    l &&
                                        (0, r.jsx)("div", {
                                            className: sK.OA,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)("div", { className: sK.E4 }, x),
                                        }),
                                    j
                                        ? (0, r.jsx)(sg, {
                                              quest: t,
                                              questContent: ea.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sG.d,
                                              sourceQuestContent: ea.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(nO.Ay, {
                                              quest: t,
                                              questContent: ea.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sG.d,
                                              sourceQuestContent: ea.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
}
var sX = n(458518),
    sJ = n(349095);
let sZ = [],
    s0 = Z.L1.SORT,
    s1 = Z.L1.FILTER;
function s2(e) {
    let t,
        n,
        s,
        l,
        { ref: a, ...o } = e,
        c = i.useRef(null),
        [d, m] =
            ((t = (0, sX.o)()),
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
                (e = d.get(s0)),
                ((0, z.uJ)(e) ? null : (Object.values(tj.kL).find((t) => t === e) ?? null)) ?? tj.kL.SUGGESTED
            );
        }, [d]),
        h = i.useMemo(
            () =>
                (function (e) {
                    if ((0, z.uJ)(e)) return null;
                    let t = e
                        .split(",")
                        .map((e) => (0, tj.WQ)(e))
                        .filter(tP.Vq);
                    return t.length > 0 ? t : null;
                })(d.get(s1)) ?? sZ,
            [d],
        ),
        f = i.useCallback(
            (e) => {
                m({ [s0]: e });
            },
            [m],
        ),
        g = i.useCallback(
            (e) => {
                m({
                    [s1]:
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
        } = (0, Z.Qh)(
            Z.NC.ALL,
            i.useMemo(() => ({ sortMethod: E, filters: h, removeExpiredQuests: !0 }), [E, h]),
        ),
        _ = i.useCallback(() => {
            g(sZ);
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
        (0, Z.$P)({ selectedSortMethod: E, selectedFilters: h, numQuestsVisible: x.length }),
        i.useImperativeHandle(
            a,
            () => ({
                scrollToQuest: (e) => {
                    (_(),
                        f(tj.kL.SUGGESTED),
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
                    className: sJ.Mj,
                    children: [
                        (0, r.jsx)(ex.D, { variant: "heading-lg/medium", children: eK.intl.string(eK.t.giYD00) }),
                        (0, r.jsxs)("div", {
                            className: sJ.Nf,
                            children: [
                                (0, r.jsx)(sq, { onChange: f, optionClassName: sJ.Uq, selectedSortMethod: E }),
                                (0, r.jsx)(sF, { onChange: g, selectedFilters: h }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(sY, {
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
var s4 = n(575593),
    s5 = n(462887),
    s8 = n(765671),
    s3 = n(736653),
    s6 = n(162232),
    s7 = n(734736),
    s9 = n(303136),
    le = n(842245);
let lt = function (e) {
    let { assetUrl: t, className: n, isAnimated: s = !1, questName: l } = e,
        i = t + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(le.k, n),
        children: s
            ? (0, r.jsx)(s9.A, {
                  preload: "auto",
                  className: le.L,
                  fallbackImage: i,
                  children: (0, r.jsx)("source", { src: t, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: le.L, src: i, alt: l }),
    });
};
var ln = n(57718),
    ls = n(966354);
let ll = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [n, s] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        f = (0, E.bG)([to.default], () => to.default.getCurrentUser()),
        { ref: g, height: x = 0 } = (0, s8.Ay)(),
        v = (0, s3.Ay)(),
        j = (0, Z.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        C = t.userStatus?.claimedTier ?? 0,
        _ = t.config.rewards[C],
        S = _?.type === e6.l.FRACTIONAL_PREMIUM,
        p = _?.type === e6.l.COLLECTIBLE,
        N = _?.type === e6.l.VIRTUAL_CURRENCY,
        A = (0, nQ.Pk)(t),
        O = _?.collectibleProduct?.items?.[0],
        T = O?.type === s4.R.AVATAR_DECORATION ? O : null,
        b = i.useMemo(
            () =>
                null == _
                    ? null
                    : !0 === N && t.userStatus?.orbQuantityClaimed != null
                      ? eK.intl.format(eK.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : _.name,
            [_, N, t],
        );
    (0, s8.i4)(d, (e) => {
        let { height: t } = e;
        if (!p || null == t || null == m.current || null == d.current || null == h.current) return;
        let n = d.current.getBoundingClientRect(),
            s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((s.top - n.top - l.height) / 2);
    });
    let R = (0, s5.M)(v),
        y = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, eu.tW)(t, eu.fY.REWARD, void 0, void 0, A), [t, A]),
        L = n ? x + 8 : 0,
        { content_position: H, row_index: Q, ...U } = (0, ed.fF)(ea.uF.TROPHY_CASE_CARD);
    function D() {
        (s(!0), tF.default.track(eC.HAw.QUEST_HOVER, { quest_id: t.id, ...U }));
    }
    function F() {
        s(!1);
    }
    function P(e) {
        (c(!0), tF.default.track(eC.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id }));
    }
    return null == _ || u
        ? null
        : (0, r.jsx)(ek.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: D,
                  onBlur: F,
                  onMouseEnter: D,
                  onMouseLeave: F,
                  className: o()(ls.kL, { [ls.yo]: n }),
                  children: [
                      null != f &&
                          p &&
                          null != T &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: ls.FX,
                              style: { top: l },
                              children: (0, r.jsx)(s6.A, {
                                  avatarDecorationOverride: T,
                                  user: f,
                                  guildId: null,
                                  animateOnHover: !n,
                              }),
                          }),
                      S
                          ? (0, r.jsx)(s7.A, { className: ls.Sl })
                          : N
                            ? (0, r.jsx)(lt, {
                                  className: ls.Sl,
                                  isAnimated: n,
                                  questName: t.config.messages.questName,
                                  assetUrl: M.url,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(I.A, {
                                    className: ls.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => P(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: ls.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => P(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(ls.Lw, { [ls.en]: R, [ls.So]: !R }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: ls.r$,
                          style: { transform: `translateY(-${L}px)` },
                          children: (0, r.jsx)(ln.Ay, {
                              logotypeClassName: o()(ls.wm, { [ls.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: g,
                          className: ls.zH,
                          children: [
                              (0, r.jsx)(ex.D, {
                                  className: ls.DD,
                                  variant: "heading-sm/semibold",
                                  color: "text-overlay-light",
                                  children: eK.intl.format(eK.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(et.E, {
                                  variant: "body-sm/medium",
                                  color: R ? "text-muted" : "text-overlay-light",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: eK.intl.format(eK.t["kXVcV+"], { reward: b, claimedDate: j }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var lr = n(396478);
function li(e) {
    let { onClick: t } = e,
        s = (0, s3.Ay)();
    return (0, r.jsxs)(lr.pp, {
        theme: s,
        children: [
            (0, r.jsx)(lr.G8, { lightSrc: n(826223), darkSrc: n(317017), width: 415, height: 200 }),
            (0, r.jsx)(lr.SG, { note: eK.intl.format(eK.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var la = n(178093);
function lo(e) {
    let { onSelectTab: t, className: n } = e,
        { claimedQuests: s, isFetchingClaimedQuests: l } = (0, Z.Iq)();
    return l && 0 === s.length
        ? (0, r.jsx)(es.y, { className: la.u })
        : 0 === s.length
          ? (0, r.jsx)(li, { onClick: () => t(Z.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(la.U, n),
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(ll, { quest: e }, e.id)),
            });
}
var lu = n(192308);
let lc = i.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
function ld(e) {
    let { children: t, sectionIdentifier: n, questId: s, duplicate: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: u,
            highlightCount: c,
            highlightAnimationProgress: d,
        } = i.useContext(lc),
        m = a === s && u === n && !l,
        E = l || (null != a && (a !== s || u !== n)),
        { useNewTile: h } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        f = i.useMemo(() => tB(m, E, d), [m, E, d]);
    return (0, r.jsxs)(eL.animated.div, {
        [e0]: "",
        className: o()({ [sK.XB]: m, [sK.FR]: h, [nT.y]: h }),
        style: f,
        children: [
            m &&
                (0, r.jsx)("div", {
                    className: sK.OA,
                    "aria-hidden": !0,
                    children: (0, r.jsx)("div", { className: sK.E4 }, c),
                }),
            t,
        ],
    });
}
var lm = n(333007),
    lE = n(765548),
    lh = n(897833);
function lf(e) {
    var t, n;
    let { containerWidth: s, questIds: l, sectionIdentifier: a, ref: o } = e,
        u = (0, tD.C)(),
        { variant: c } = eo.Mk.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        d = c === eo.d.LARGE_MASK_MARGIN,
        m = l.length >= 2,
        E = i.useRef(null),
        h = i.useRef(null),
        f = i.useRef(null),
        g = (0, lu.Rv)(),
        { targetQuestId: x, targetSectionIdentifier: v } = i.useContext(lc),
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
                f = (0, lE.A)(() => {
                    let e = l.current?.getScrollerNode(),
                        t = s.current;
                    if (null == e || null == t) return null;
                    let n = Array.from(e.querySelectorAll(e1));
                    if (n.length < 4) return null;
                    let r = n[1].offsetLeft - n[0].offsetLeft;
                    return r <= 0 ? null : { node: e, stride: r, rest: eJ(e, n[2], t) };
                }),
                g = (0, lE.A)(() => {
                    let e = h.current;
                    h.current = null;
                    let t = l.current?.getScrollerNode()?.scrollLeft;
                    return null != e && null != t && 1 > Math.abs(t - e);
                }),
                x = (0, lE.A)(() => {
                    ((m.current = !1), 0 !== E.current && window.clearTimeout(E.current), (E.current = 0));
                }),
                v = (0, lE.A)(() => {
                    if (m.current) return;
                    let e = f();
                    if (null == e) return;
                    let t = e.node.scrollLeft - e.rest;
                    if (!(1 > Math.abs(t))) {
                        var n, s, l;
                        ((n = e.node),
                            (s = Math.round(t / e.stride)),
                            (l = e.rest),
                            (0, lm.flushSync)(() => {
                                (0 !== s && a((e) => e + s), 0 !== o && u(0));
                            }),
                            (h.current = l),
                            n.scrollTo({ left: l, behavior: "instant" }));
                    }
                }),
                j = (0, lE.A)(() => {
                    m.current && (x(), v());
                }),
                C = (0, lE.A)(
                    (e) =>
                        !!n &&
                        !m.current &&
                        ((0, lm.flushSync)(() => {
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
                        ((0, e9.vq)(t.relatedTarget, Node) && e.contains(t.relatedTarget)) || (d(!1), v());
                    }
                    function r() {
                        if (m.current) return void j();
                        let t = e.ownerDocument.activeElement;
                        ((0, e9.vq)(t) && e.contains(t) && t.matches(":focus-visible")) || v();
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
                    (0, ej.kO)({
                        scrollingType: t,
                        scrollingDirection: i,
                        scrollWindowStartIndex: n,
                        scrollWindowEndIndex: s,
                        scrollWindowSize: r,
                        questContent: ea.uF.QUEST_HOME_FEATURED_SECTION,
                        carouselSize: l.length,
                    });
            },
            [b, l.length],
        );
    return (
        i.useImperativeHandle(o, () => ({ scrollToQuest: L }), [L]),
        (0, r.jsxs)("div", {
            ref: E,
            className: lh.I6,
            children: [
                (0, r.jsx)("div", { className: lh.Cz, "aria-hidden": !0 }),
                (0, r.jsx)(e3, {
                    maskWidth: eY(u),
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
                        className: lh.FO,
                        style: { "--custom-featured-tile-gap": "4px" },
                        onPointerEnter: () => _(!0),
                        onPointerLeave: () => _(!1),
                        children: M.map((e, t) =>
                            (0, r.jsx)(
                                ld,
                                {
                                    questId: e.questId,
                                    duplicate: e.isDuplicate,
                                    sectionIdentifier: a,
                                    children: (0, r.jsx)(sg, {
                                        isInFeaturedSection: !0,
                                        isActive: t === O && !R,
                                        onMenuOpenChange: N,
                                        questId: e.questId,
                                        questContent: ea.uF.QUEST_HOME_FEATURED_SECTION,
                                        contentPosition: e.questIndex,
                                        rowIndex: 0,
                                        sourceQuestContent: ea.uF.QUEST_HOME_FEATURED_SECTION,
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
var lg = n(915655);
function lx(e) {
    let { className: t, ...n } = e;
    return (0, r.jsxs)("div", {
        className: o()(lg.kL, t),
        ...n,
        children: [
            (0, r.jsx)("div", { className: o()(tV.m, lg.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: lg.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(tV.m, lg.Vr) }, t),
                ),
            }),
        ],
    });
}
var lv = n(384343);
function lj(e) {
    let { questContent: t, questIds: n, rowIndex: s, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(lc),
        { useNewTile: o } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = eo.Mk.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        c = (0, tD.C)(),
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
                (0, ej.kO)({
                    scrollingType: d ? ed.pk.AUTO : s,
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
        E = u === eo.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(e3, {
        maskWidth: eY(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${eX(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: lv.FO,
            children: [
                n.map((e, n) =>
                    (0, r.jsx)(
                        ld,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(sg, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lv.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(nO.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === ez.FEATURED,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lv.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: lv.fu }),
            ],
        }),
    });
}
var lC = n(125822);
let l_ = tc.A.Millis.WEEK;
function lS() {
    let e = ei.A.quests;
    if (0 === ei.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let n of s.keys()) {
        let l = e.get(n);
        (null == l || (0, nw.Ic)(l)) && (null == t && (t = new Map(s)), t.delete(n));
    }
    return null != t && ((s = t), !0);
}
class lp extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        (this.waitFor(ei.A), (s = new Map()));
        let t = !1;
        if (null != e) {
            let n = Date.now() - l_;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < n) {
                    t = !0;
                    continue;
                }
                s.set(l, r);
            }
        }
        return (this.syncWith([ei.A], lS), t);
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
let lN = new lp(t1.h, {
    QUESTS_MARK_DISCOVERED: function (e) {
        if (null == ei.A.getQuest(e.questId)) return !1;
        let t = new Map(s);
        (t.set(e.questId, new Date().toISOString()), (s = t));
    },
});
function lA(e, t) {
    if (e === t) return !0;
    let n = new Set(e),
        s = new Set(t);
    return n.size === s.size && [...n].every((e) => s.has(e));
}
let lO = function () {
    let e = (0, s_.Gn)(),
        t = (0, Z.Cv)(),
        n = (0, E.bG)([ei.A], () => ei.A.lastFetchedCurrentQuests > 0),
        { quests: s, isFetchingCurrentQuests: l } = (0, Z.Qh)(Z.NC.ALL, {
            sortMethod: tj.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, lC.A)(
            () =>
                s.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            s.map((e) => {
                let { id: t } = e;
                return t;
            }),
            lA,
        ),
        a = (0, F.T2)(),
        o = (0, E.bG)([lN], () => lN.getDiscoveredAtByQuestId(), []),
        u = i.useMemo(() => (l || !n) && 0 === r.length, [l, n, r.length]),
        { useNewTile: c } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
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
                              let t = ei.A.getQuestConfig(e);
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
                                      { userStatus: o, preview: u } = ei.A.getQuest(t.id) ?? {},
                                      c = [],
                                      d =
                                          null != o &&
                                          null != o.enrolledAt &&
                                          null != o.completedAt &&
                                          null == o.claimedAt;
                                  if ((0, nw.kd)(t) && !d) return r ? [ez.EXPIRED] : null;
                                  if (
                                      (s.has(t.id) && c.push(ez.DISCOVERED),
                                      i && !0 === u && c.push(ez.PREVIEW),
                                      null != o && null != o.enrolledAt && null == o.claimedAt)
                                  )
                                      return [...c, ez.IN_PROGRESS];
                                  let m = !nK(t);
                                  return m && null != n && (0, tf.I0)(n, t.id) && nz(ez.FEATURED, l)
                                      ? [...c, ez.FEATURED]
                                      : new Date(t.expiresAt).valueOf() <= Date.now() + (a ? nV : nB)
                                        ? [...c, ez.ENDING_SOON]
                                        : m && nz(ez.FEATURED, l)
                                          ? [...c, ez.FEATURED]
                                          : (0, th.ks)(t)
                                            ? [...c, ez.ORB]
                                            : [...c, ez.SPECIAL_QUESTS];
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
                                  let t = ei.A.getQuestConfig(e);
                                  null == t || nK(t) || u(e);
                              }),
                              t.forEach((e) => u(e)),
                              e$
                                  .map((e) => {
                                      let t = nG?.[e.identifier];
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
var lT = n(113775);
let lb = {
        [ez.FEATURED]: ea.uF.QUEST_HOME_FEATURED_SECTION,
        [ez.IN_PROGRESS]: ea.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [ez.ENDING_SOON]: ea.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [ez.ORB]: ea.uF.QUEST_HOME_ORB_SECTION,
        [ez.DISCOVERED]: ea.uF.QUEST_HOME_DISCOVERED_SECTION,
        [ez.EXPIRED]: ea.uF.QUEST_HOME_EXPIRED_SECTION,
        [ez.PREVIEW]: ea.uF.QUEST_HOME_PREVIEW_SECTION,
        [ez.SPECIAL_QUESTS]: ea.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    lI = 4 * tc.A.Millis.SECOND;
function lR(e) {
    let { deepLinkedQuestId: t, isLoadingQuestHomeHero: n, className: s, ref: l } = e,
        a = (0, u.zy)(),
        { useNewTile: c, useNewFeaturedTiles: d } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        { sections: m, isFetchingCurrentQuests: E, getSectionIdentifierForTargetedQuest: h } = lO(),
        f = i.useRef(null),
        g = i.useRef(null),
        { showToast: x } = sV(),
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
    (0, ew.g)(f, T, [T], { fireOnMount: !0 });
    let [{ highlightAnimationProgress: b }, I] = (0, eP.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: lI },
        })),
        R = i.useCallback(
            (e, t) => {
                if (null == e || null == N || E || n) return !1;
                t && (0, t2.sB)(e);
                let s = h(e),
                    l = !0 === t && s !== ez.FEATURED ? ez.DISCOVERED : s;
                if (null == s) return (x(e), !1);
                let r = document.getElementById((0, nO.sT)(e, l ?? void 0));
                return (
                    null != r &&
                    (j(e),
                    _(l),
                    p((e) => e + 1),
                    l === ez.FEATURED && c && d
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
    return (0, r.jsx)(lc.Provider, {
        value: y,
        children: (0, r.jsx)("div", {
            className: o()(lT.kL, s),
            ref: f,
            children: E
                ? (0, r.jsx)(lx, { role: "status", "aria-label": eK.intl.string(eK.t.ZTNur7) })
                : m.length > 0
                  ? m.map((e, t) => {
                        let { identifier: n, questIds: s, title: l } = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: lT.p9,
                                children: [
                                    (0, r.jsx)(ex.D, {
                                        variant: "heading-lg/semibold",
                                        style: { "--custom-section-title-inset": "2px" },
                                        className: lT.Gf,
                                        children: eK.intl.string(l),
                                    }),
                                    n === ez.FEATURED && c && d
                                        ? (0, r.jsx)(lf, {
                                              ref: g,
                                              questIds: s,
                                              containerWidth: N,
                                              sectionIdentifier: n,
                                          })
                                        : (0, r.jsx)(lj, {
                                              questIds: s,
                                              rowIndex: t,
                                              sectionIdentifier: n,
                                              questContent: lb[n],
                                          }),
                                ],
                            },
                            n,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: lT.y7,
                        children: [
                            (0, r.jsx)(ex.D, { variant: "heading-xl/semibold", children: eK.intl.string(eK.t.NqFP6z) }),
                            (0, r.jsx)(et.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: eK.intl.string(eK.t.LhD4yH),
                            }),
                        ],
                    }),
        }),
    });
}
var ly = n(196765),
    lM = n(121894),
    lL = n(851936);
let lH = (0, ly.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let n = t().logger ?? (0, lL.L)({ location: tj.rE.QUEST_HOME_DESKTOP });
        if (n.info === tC.tE || t().elapsed >= 6e4) return;
        let s = performance.now() - t().startTime;
        s > 6e4 && (s = 6e4);
        let l = { elapsed: s };
        (s - t().lastOutputLogTime > 1e3 &&
            (n.info(`QuestHome asset loading duration so far: ${s}ms`), (l.lastOutputLogTime = s)),
            null == t().logger && (l.logger = n),
            (0, lM.r)(() => e(l)));
    },
}));
var lQ = n(516226),
    lU = n(620241);
function lD(e) {
    let { children: t, hasSearchResults: n } = e,
        { showDefaultBanner: s } = J.C.useConfig({ location: tj.rE.QUEST_HOME_DEFAULT_BANNER });
    return s ? (0, r.jsx)("div", { className: o()(lU.iS, { [lU.R]: n }), children: t }) : null;
}
function lF(e) {
    let { children: t, onQuestCtaClick: n, questHomeHero: s, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, ee.zT)(),
        c = null != s && !a,
        d = l || (c && u);
    return (0, r.jsxs)("div", {
        className: o()(lU.iS, { [lU.R]: i }),
        children: [
            d && (0, r.jsx)(t0, {}),
            !l && (c ? (0, r.jsx)(tZ, { hero: s, isBannerLoading: u, onQuestCtaClick: n }) : t),
        ],
    });
}
var lP = n(613956),
    lk = n(604880),
    lq = n(318808);
function lw(e) {
    let { adCreativeIds: t } = e,
        n = i.useCallback(() => (0, n4.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: lP.MY,
        children: [
            (0, r.jsx)("img", { className: lP.Bg, src: lq.Ay, alt: "" }),
            (0, r.jsx)("div", { className: lP.r$, children: (0, r.jsx)("img", { src: lk, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: lP.Nr,
                children: [
                    (0, r.jsx)(ex.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: lP.ky,
                        children: eK.intl.string(eK.t.GXmn57),
                    }),
                    (0, r.jsx)(et.E, {
                        variant: "body-md/normal",
                        className: lP.G3,
                        children: eK.intl.string(eK.t.bWuKqh),
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        text: eK.intl.string(eK.t.UQvCf7),
                        fullWidth: !0,
                        onClick: n,
                    }),
                ],
            }),
        ],
    });
}
var lB = n(143592),
    lV = n(215130);
let lW = function (e) {
    let { matchingQuestIds: t } = e,
        n = (0, tD.C)(),
        { useNewTile: s } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = eo.Mk.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        u = l === eo.d.LARGE_MASK_MARGIN,
        c = s ? 12 : 20,
        d = sW(a, eX(n, u), c, 3);
    return (0, r.jsxs)(j.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: lV.kL,
        ref: a,
        children: [
            (0, r.jsxs)(ex.D, {
                variant: "heading-lg/medium",
                children: [eK.intl.string(eK.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(j.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: lV.y7,
                      children: [
                          (0, r.jsx)(lB.e, { alt: eK.intl.string(eK.t["Xe+fJM"]) }),
                          (0, r.jsxs)(j.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(ex.D, {
                                      variant: "heading-lg/medium",
                                      children: eK.intl.string(eK.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(ex.D, {
                                      variant: "heading-xs/medium",
                                      children: eK.intl.string(eK.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: lV.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${eX(n, u)}px`,
                          "--custom-quest-grid-gap": `${c}px`,
                      },
                      children:
                          null !== d &&
                          t.map((e, t) =>
                              s
                                  ? (0, r.jsx)(
                                        nb,
                                        {
                                            children: (0, r.jsx)(sg, {
                                                eagerLoadAssets: !0,
                                                questId: e,
                                                questContent: ea.uF.QUEST_HOME_SEARCH_RESULT,
                                                contentPosition: t,
                                                rowIndex: Math.floor(t / d),
                                                className: o()(lV.d, lV.hS),
                                                sourceQuestContent: ea.uF.QUEST_HOME_SEARCH_RESULT,
                                            }),
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        nO.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: ea.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / d),
                                            className: lV.d,
                                            sourceQuestContent: ea.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
function lG() {
    let { enabled: e } = eo.Mk.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: t } = eo.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        { newLayoutWithSearch: n } = eo.s9.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP });
    return e || t || n;
}
var lK = n(649852),
    lz = n.n(lK),
    l$ = n(379078),
    lY = n(704554),
    lX = n(823784);
let lJ = {
        searchType: l$.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(tP.Vq);
        },
        sortType: l$.r.JARO_WINKLER,
        throttleMs: 200,
    },
    lZ = function () {
        let [e, t] = i.useState(""),
            [n, s] = i.useState(null),
            l = (0, E.yK)([ei.A], () =>
                (0, Z.mn)(Array.from(ei.A.quests.values()), { sortMethod: tj.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => lz()(ej.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, lX.tv)();
                (null != e &&
                    (0, ej.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, lX.l6)());
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
                                  .filter(tP.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: n } = (0, lX.$N)();
                    (n && (0, ej.OQ)({ searchSessionId: t.uuid }),
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
        return ((0, lY.RT)(r, l, d, lJ), { matchingQuestIds: n, query: e, setQuery: t, onSearchClose: c });
    };
var l0 = n(631001),
    l1 = n(758836),
    l2 = n(613057);
let l4 = i.createContext({});
function l5(e) {
    let { banner: t, children: n, header: s, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(l4);
    return (0, r.jsxs)(eG.X.Provider, {
        value: o,
        children: [
            s,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(Q.A, { className: lU.Jo, innerClassName: lU.FG, children: [!l && t, n] }),
                ],
            }),
        ],
    });
}
function l8(e) {
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
function l3(e) {
    let { onLoadComplete: t, className: n, isVirtualCurrencyEnabled: s } = e,
        l = (0, E.bG)([S.Ay], () => S.Ay.useReducedMotion),
        a = (0, E.bG)([W.A], () => W.A.isFocused()),
        { ref: o, inViewport: u } = (0, sI.p)(),
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
        let e = (0, G.TM)();
        return (0, r.jsx)(ee._M, {
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
    return (0, r.jsx)(ee._M, {
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
function l6(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(lU.Tv, { [lU.lJ]: n }),
        children: [
            (0, r.jsx)(t$, {}),
            (0, r.jsx)("div", { className: o()(lU.nz, { [lU.ZZ]: n }) }),
            (0, r.jsx)(l3, {
                onLoadComplete: t,
                className: o()(lU.Fe, { [lU.H4]: n, [lU.Q8]: !n }),
                isVirtualCurrencyEnabled: n,
            }),
        ],
    });
}
function l7(e) {
    let { onAssetLoad: t } = e,
        { enabled: n } = X.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        s = !n,
        l = i.useCallback(() => {
            s ? window.open(eC.X7G.PAID_TERMS_ORBS) : window.open(K.A.getArticleURL(eC.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(ep, {
        adContentId: s ? tj.yr : tj.uz,
        title: s ? eK.intl.format(eK.t.BCBIlp, {}) : eK.intl.format(eK.t.lmMBfy, {}),
        subtitle: s ? eK.intl.format(eK.t.U9FY0J, {}) : eK.intl.string(eK.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(g.e, {
                  children: [
                      (0, r.jsx)(x.$, {
                          variant: "overlay-primary",
                          text: eK.intl.string(eK.t["3bdWzt"]),
                          onClick: () =>
                              (0, T.Cz)({
                                  tab: l1.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: p.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(x.$, {
                          variant: "overlay-secondary",
                          text: eK.intl.string(eK.t["7kTAgJ"]),
                          onClick: l,
                      }),
                  ],
              })
            : (0, r.jsx)(x.$, {
                  variant: "overlay-primary",
                  text: eK.intl.string(eK.t.hvVgAZ),
                  onClick: l,
                  icon: v.LinkExternalSmallIcon,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(l6, { onAssetLoad: t, isVirtualCurrencyEnabled: s }),
    });
}
let l9 = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, u.zy)(),
        s = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(n.search).getAll(Z.L1.AD_CREATIVE_IDS), [n.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        f = (0, E.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: g,
            onSelectTab: x,
            tabs: v,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                n = l0.A.useField("tab"),
                s = (0, u.zy)(),
                l = (0, Z.p5)(),
                r = lG();
            i.useEffect(() => {
                l0.A.getState().initializeFromUrl(s.search, l);
            }, [s.search, l]);
            let a = i.useCallback((e) => {
                l0.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: Z.NC.ALL, label: r ? eK.intl.string(eK.t.Jt6u7B) : eK.intl.string(eK.t["0SzXmi"]) },
                            t
                                ? {
                                      id: Z.NC.CLAIMED,
                                      label: r ? eK.intl.string(eK.t["3TVY/R"]) : eK.intl.string(eK.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: Z.NC.PREVIEW_TOOL, label: eK.intl.string(eK.t.BDUDau) } : null,
                        ].filter(tP.Vq),
                    [t, l, r],
                ),
                selectedTab: n,
                onSelectTab: a,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: S, setQuery: I, matchingQuestIds: y, onSearchClose: M } = lZ(),
        { onScroll: Q } = (0, H.G)(),
        U = $.A.getState().getUtmCurrentContext(),
        D = lH((e) => e.registerAssetLoad),
        P = i.useRef(U);
    (i.useEffect(() => {
        P.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = P;
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
        (0, b.HU)({ location: eK.intl.string(eK.t.JALI2K) }),
        (0, w.Ay)());
    let k = i.useRef(null),
        W = lG(),
        G = i.useRef(null),
        K = i.useCallback((e) => {
            G.current?.scrollToQuest(e);
        }, []),
        Y = i.useMemo(() => ((0, z.uJ)(n.hash) ? null : n.hash.substring(1)), [n.hash]),
        { questHomeHero: X, isLoading: et, confirmedEmpty: en } = (0, F.lg)(l[0] ?? null),
        { showHeroPlaceholder: es } = (0, J.x)(),
        el = i.useCallback(() => {
            ((0, B.Y)({
                pageType: eC.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eC.JJy.ORBS_BALANCE_MENU,
                ctaObject: eC.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, T.Cz)({ tab: l1.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.ORBS_BALANCE_MENU }));
        }, []);
    (i.useEffect(() => {
        (0, _.I)(eC.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            L.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != f) return;
            let e = new URLSearchParams(n.search),
                l = e.get(Z.L1.TAB);
            if (l === Z.NC.PREVIEW_TOOL) {
                let t = e.get(Z.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", eC.e$_.DEEP_LINK, {
                    type: l2.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === s.action && r?.type === "navigate" && t && l !== Z.NC.PREVIEW_TOOL) {
                let t = (0, z.uJ)(n.hash) ? null : n.hash.substring(1),
                    s = e.get(Z.L1.SORT),
                    r = e.get(Z.L1.FILTER),
                    i = e.get(Z.L1.AD_CREATIVE_IDS);
                A.A.openNativeAppModal("quests", eC.e$_.DEEP_LINK, {
                    type: l2.XK.QUEST_HOME,
                    params: { questId: (0, z.uJ)(t) ? void 0 : t, sort: s, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [n.search, f, s.action, n.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]));
    let er = i.useCallback(
            (e) => {
                (s.replace({ ...s.location, hash: void 0 }), k.current?.scrollToTop({ animate: !1 }), x(e), M());
            },
            [s, x, M],
        ),
        ei = i.useMemo(() => null != y && W, [y, W]),
        ea = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        eo = i.useMemo(() => ({ onScroll: Q, scrollerRef: k }), [Q, k]),
        eu = et && !es;
    return a
        ? (0, r.jsx)(lw, { adCreativeIds: l })
        : (0, r.jsx)(lQ.M.Provider, {
              value: ea,
              children: (0, r.jsx)(l4.Provider, {
                  value: eo,
                  children: (0, r.jsx)("div", {
                      className: o()(lU.kL, { [lU.KY]: !t }),
                      children: (0, r.jsxs)(l5, {
                          header: (0, r.jsx)(l8, {
                              selectedTab: g,
                              onSelectTab: er,
                              tabs: v,
                              endContent: (0, r.jsxs)(j.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      W &&
                                          (0, r.jsx)(C.I, {
                                              query: S,
                                              onChange: I,
                                              placeholder: eK.intl.string(eK.t.y10TI2),
                                              onClear: M,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(V.SS, {
                                          analyticsPage: eC.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: V.cP.END,
                                          ctaText: eK.intl.string(eK.t["J+vlIR"]),
                                          ctaOnClick: el,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              g === Z.NC.ALL &&
                              !eu &&
                              (0, r.jsx)(
                                  ee.y5,
                                  {
                                      source: tj.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: X?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: en
                                          ? (0, r.jsx)(lD, {
                                                hasSearchResults: ei,
                                                children: (0, r.jsx)(l7, { onAssetLoad: D }),
                                            })
                                          : (0, r.jsx)(lF, {
                                                onQuestCtaClick: K,
                                                hasSearchResults: ei,
                                                questHomeHero: X,
                                                isLoadingQuestHomeHero: et,
                                                children: (0, r.jsx)(l7, { onAssetLoad: D }),
                                            }),
                                  },
                                  X?.id,
                              ),
                          children: [
                              ei && null != y && (0, r.jsx)(lW, { matchingQuestIds: y }),
                              g === Z.NC.CLAIMED
                                  ? (0, r.jsx)(lo, { onSelectTab: er, className: ei ? lU.R : void 0 })
                                  : g === Z.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(sb, { className: ei ? lU.R : void 0 })
                                    : W
                                      ? (0, r.jsx)(lR, {
                                            className: ei ? lU.R : void 0,
                                            ref: G,
                                            deepLinkedQuestId: Y,
                                            isLoadingQuestHomeHero: et,
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(s2, { ref: G }), !ei && (0, r.jsx)(q, {})],
                                        }),
                          ],
                      }),
                  }),
              }),
          });
};
