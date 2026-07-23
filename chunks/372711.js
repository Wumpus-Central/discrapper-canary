let n;
s.r(t), s.d(t, { default: () => lv }), s(323874), s(14289), s(35956);
var l,
    r = s(627968),
    i = s(64700),
    a = s(503698),
    o = s.n(a),
    u = s(873263),
    c = s(562708),
    d = s(607399),
    m = s(323889),
    E = s(17928),
    h = s(554146),
    x = s(577473),
    f = s(825484),
    g = s(821609),
    j = s(509434),
    v = s(331322),
    S = s(892547),
    C = s(944791),
    _ = s(775602),
    N = s(793574),
    p = s(139286),
    T = s(197111),
    A = s(10088),
    O = s(34332),
    I = s(726249),
    b = s(607470),
    R = s(826673),
    M = s(840251),
    Q = s(688151);
let L = new M.E([], Q.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var y = s(711111),
    U = s(979590),
    H = s(749638),
    D = s(783531),
    q = s(318346),
    F = s(70926),
    P = s(531685),
    k = s(676279),
    w = s(975571),
    B = s(240248),
    G = s(87549),
    W = s(192444);
let V = (0, s(945810).mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var K = s(201274),
    z = s(557637),
    $ = s(834730),
    Y = s(289873),
    J = s(274670),
    X = s(144779),
    Z = s(859703),
    ee = s(24001),
    et = s(104886),
    es = s(291749),
    en = s(561844),
    el = s(18437),
    er = s(590202),
    ei = s(901406),
    ea = s(415441),
    eo = s(73473),
    eu = s(139384),
    ec = s(43990),
    ed = s(297264),
    em = s(770178),
    eE = s(652215),
    eh = s(915121);
function ex(e, t) {
    let { row_index: s, ...n } = (0, er.fF)(ee.uF.QUEST_HOME_HERO);
    (0, en.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: ee.uF.QUEST_HOME_HERO,
    });
}
let ef = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, E] = i.useState("display-lg"),
        h = i.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, em.w)(h, [], { fireOnMount: !0 }),
        f = i.useCallback(() => ex(s, eE.HAw.QUEST_HOVER), [s]),
        g = i.useCallback(() => ex(s, eE.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(ec.N, {
        theme: eE.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(eh.iE, e, d),
                onMouseEnter: f,
                onMouseLeave: g,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: eh.FG,
                    children: [
                        (0, r.jsxs)(v.B, {
                            className: eh.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(v.B, {
                                    className: eh.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(v.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(ed.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: eh.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)($.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: eh.VA,
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
var eg = s(339889),
    ej = s(418842),
    ev = s(535185),
    eS = s(408278),
    eC = s(548411),
    e_ = s(554830),
    eN = s(689175),
    ep = s(321503),
    eT = s(661531),
    eA = s(375708),
    eO =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let eI = [
    { type: "featured-quests", identifier: "featured", title: eA.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: eA.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: eA.t.P0lmqC },
    { type: "quests", identifier: "orb", title: eA.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: eA.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: eA.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: eA.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: eA.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function eb(e) {
    return eT.A.space.SPACE_XL.resolve({ density: e });
}
function eR(e, t) {
    return (1220 - 2 * eb(e) * (t ? 2 : 0.75)) / 3;
}
var eM = s(631499);
let eQ = "data-scroll-target",
    eL = `[${eQ}]`,
    ey = { anchors: [], pageSize: 1 },
    eU = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function eH(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let eD = i.memo(function (e) {
    let {
            children: t,
            className: s,
            itemSelector: n = eL,
            maskWidth: l = 24,
            overflowAmount: a = 0,
            maskMarginMultiplier: u = 1,
            onScrollEnd: c,
        } = e,
        d = i.useRef(null),
        m = i.useRef(null),
        h = i.useRef(0),
        x = i.useRef(null),
        [f, g] = i.useState(!1),
        [j, v] = i.useState(!1),
        [S, C] = i.useState(!0),
        [N, p] = i.useState([]),
        [T, A] = i.useState(1),
        O = (0, E.bG)([_.Ay], () => _.Ay.useReducedMotion) ? "auto" : "smooth",
        I = i.useCallback(() => {
            let e = d.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (g(e.scrollLeft > 0), v(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        b = i.useCallback(() => {
            let { anchors: e, pageSize: t } = (function (e) {
                let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                    r = t.current?.getScrollerNode();
                if (null == r || r.scrollWidth <= r.clientWidth) return ey;
                let i = Array.from(r.querySelectorAll(s));
                if (0 === i.length) return ey;
                let a = i[0].offsetWidth,
                    o = i.length > 1 ? i[1].offsetLeft - i[0].offsetLeft - a : 0,
                    u = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (a + o))),
                    c = i.length - u + 1;
                return c <= 1
                    ? ey
                    : {
                          anchors: [
                              0,
                              ...i.slice(1, c - 1).map((e, t) => {
                                  let s = i[t + u];
                                  return (e.offsetLeft + s.offsetLeft + s.offsetWidth) / 2;
                              }),
                              r.scrollWidth,
                          ],
                          pageSize: u,
                      };
            })({ scrollerRef: d, itemSelector: n, maskWidth: l, maskMarginMultiplier: u });
            A(t), p((t) => (t.length === e.length && t.every((t, s) => t === e[s]) ? t : e));
        }, [l, n, u, p]),
        R = i.useCallback(() => {
            if (null == x.current || x.current?.clientWidth === 0) return C(!0);
            C(x.current?.clientWidth >= 1260);
        }, [x]),
        M = i.useCallback(
            (e) => {
                let t = d.current?.getScrollerNode();
                if (null == t || N.length < 2) return;
                let { currentIndex: s, scrollLefts: n } = eH(t, N),
                    l = Math.max(0, Math.min(N.length - 1, s + e * T));
                (m.current = er.pk.ARROW), t.scrollTo({ left: n[l], behavior: O });
            },
            [O, N, T],
        ),
        Q = i.useCallback((e, t) => {
            let s = d.current?.getScrollerNode();
            if (null == s || null == e || !s.contains(e)) return;
            let n = s.getBoundingClientRect(),
                l = e.getBoundingClientRect(),
                r = n.left - l.left,
                i = l.right - n.right;
            (0 !== r || 0 !== i) &&
                ((m.current = er.pk.MANUAL),
                r > 0
                    ? s.scrollTo({ left: s.scrollLeft - r, behavior: t })
                    : i > 0 && s.scrollTo({ left: s.scrollLeft + i, behavior: t }));
        }, []),
        L = i.useCallback(
            (e) => {
                let t = e.target.closest(n);
                null != t && Q(t, O);
            },
            [n, Q, O],
        ),
        y = i.useCallback(() => {
            let e = d.current?.getScrollerNode();
            if (null == e) return;
            let { currentIndex: t } = eH(e, N),
                s = m.current ?? er.pk.MANUAL;
            m.current = null;
            let n = h.current;
            h.current = e.scrollLeft;
            let l = e.scrollLeft > n ? er.VU.RIGHT : er.VU.LEFT;
            c?.({
                scrollingType: s,
                scrollWindowStartIndex: t,
                scrollWindowEndIndex: t + T - 1,
                scrollWindowSize: T,
                scrollingDirection: l,
            });
        }, [c, N, T]),
        U = i.useCallback(
            (e) => {
                let t = "ArrowLeft" === e.key ? -1 : +("ArrowRight" === e.key);
                if (0 === t) return;
                e.preventDefault();
                let s = d.current?.getScrollerNode();
                if (null == s) return;
                let l = Array.from(s.querySelectorAll(n)),
                    r = e.target.closest(n),
                    i = null == r ? -1 : l.indexOf(r),
                    a = l[i + t],
                    o = null == a ? null : a.matches(eU) ? a : a.querySelector(eU);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && Q(a, "instant"));
            },
            [n, Q],
        ),
        H = i.useCallback(() => {
            I(), b(), R();
        }, [I, b, R]);
    (0, ev.g)(x, H, [], { fireOnMount: !0 });
    let D = a > 0,
        q = i.useMemo(
            () => ({
                "--custom-scroller-mask-width": `${l}px`,
                "--custom-scroller-overflow-amount": `${a}px`,
                "--custom-scroller-scroll-behavior": O,
            }),
            [l, a, O],
        );
    return (0, r.jsxs)("div", {
        className: o()(s, eM.m7),
        ref: x,
        style: q,
        children: [
            (0, r.jsx)("div", {
                className: o()(eM.k9, eM.RW, { [eM.Q2]: f }),
                "aria-hidden": !0,
                children: (0, r.jsx)(eS.K, {
                    icon: eC.Z,
                    variant: "overlay-secondary",
                    onClick: () => M(-1),
                    disabled: !f,
                    "aria-label": eA.intl.string(eA.t.vgfxaA),
                    tabIndex: -1,
                }),
            }),
            (0, r.jsx)("div", {
                className: o()(eM.k9, eM.K3, { [eM.Q2]: j }),
                "aria-hidden": !0,
                children: (0, r.jsx)(eS.K, {
                    icon: e_.K,
                    variant: "overlay-secondary",
                    onClick: () => M(1),
                    disabled: !j,
                    tabIndex: -1,
                    "aria-label": eA.intl.string(eA.t.XiOHRX),
                }),
            }),
            (0, r.jsx)("div", {
                className: o()({ [eM.sF]: f && S, [eM.RC]: j && S, [eM.Ni]: D && !f, [eM.GA]: D && !j }),
                children: (0, r.jsx)(eN.zC, {
                    ref: d,
                    orientation: "horizontal",
                    onScroll: I,
                    onScrollEnd: y,
                    onFocusCapture: L,
                    onKeyDown: U,
                    className: o()({ [eM.x2]: D }, eM.XG),
                    children: (0, r.jsxs)(ep.X.Provider, {
                        value: d,
                        children: [
                            t,
                            N.map((e, t) =>
                                (0, r.jsx)(
                                    "div",
                                    { "aria-hidden": !0, className: eM.fw, style: { insetInlineStart: `${e}px` } },
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
var eq = s(617498);
function eF(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, eq.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, eq.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var eP = s(440703),
    ek = s(731355),
    ew = s(621466),
    eB = s(717421),
    eG = s(939249),
    eW = s(508770),
    eV = s(406810),
    eK = s(628284),
    ez = s(65154),
    e$ = s(687966),
    eY = s(496431),
    eJ = s(287809),
    eX = s(58703),
    eZ = s(927813),
    e0 = s(971649),
    e1 = s(651892),
    e2 = s(801365),
    e7 = s(814793),
    e3 = s(453384),
    e8 = s(646764),
    e6 = s(398025),
    e4 = s(818348),
    e5 = s(815872);
function e9(e) {
    let [t, s] = i.useState(!1),
        n = i.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function te(e) {
    let { hero: t, contentPosition: s, impressionRef: n } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = e9(
            i.useCallback(
                (e) => {
                    (0, en.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eE.HAw.QUEST_HOVER : eE.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ee.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, er.jO)(ee.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, ew.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(e4.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, eB.z)({ hoverSpring: +!!a, config: eq.config.gentle }),
        d = i.useCallback(() => {
            (0, ei._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: ee.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: er.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: n.current?.getId(),
                    sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, n]);
    return (0, r.jsxs)(eG.D, {
        tag: "div",
        className: o()(e5.FW, e5.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [eQ]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: e5.Ve,
                children: (0, r.jsx)(ea.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(e5.pv, e5.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(e5.pv, e5.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(eq.animated.div, {
                className: e5.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), d();
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function tt(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        a = i.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: h } = (0, eY.A)(a, eZ.A.Millis.MINUTE),
        x = i.useMemo(
            () =>
                (0, eX.uN)(
                    { days: u, hours: c, minutes: d, seconds: h },
                    { days: eA.t["Ux/De1"], hours: eA.t.Lzd5Ie, minutes: eA.t.odmpbP },
                ),
            [u, c, d, h],
        ),
        f = (0, E.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        j = i.useMemo(() => (0, e2.mq)(s.config, f), [s.config, f]),
        S = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, e1.xv)(e).type) {
                        case eP.l.IN_GAME:
                            return eA.intl.string(eA.t["O/J2kr"]);
                        case eP.l.COLLECTIBLE:
                            return eA.intl.string(eA.t.Jg17Ut);
                        case eP.l.VIRTUAL_CURRENCY:
                            return eA.intl.string(eA.t.ElYQFS);
                        default:
                            return (0, e2.mq)(e, t);
                    }
                })(s.config, f),
            [s.config, f],
        ),
        { completedRatio: C, completedRatioDisplay: _ } = (0, K.O9)(s),
        N = i.useMemo(() => (0, e2.wo)(s.config, f), [s.config, f]),
        p = (0, el.tG)(),
        T = (0, el.WS)(),
        A = (0, e0.wW)(),
        { isHovering: O, hoverProps: I } = e9(
            i.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eE.HAw.QUEST_HOVER : eE.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ee.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, er.jO)(ee.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: b } = (0, eB.z)({ hoverSpring: +!!O, config: eq.config.gentle }),
        R = i.useCallback(() => {
            n(s.id),
                (0, et.E5)(et.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, J.r)({
                          type: X.F.CLICK_INTERNAL,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: er.Cy.VIEW_QUESTS,
                          surfaceId: ee.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: l,
                          impressionId: A(),
                      })
                    : p({
                          adContentId: t,
                          relatedQuestId: s.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: er.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, p, l, A]);
    return (0, r.jsxs)(eG.D, {
        tag: "div",
        className: o()(e5.FW, e5.$R),
        onClick: R,
        "aria-label": eA.intl.string(eA.t["th2+0j"]),
        [eQ]: !0,
        ...I,
        children: [
            (0, r.jsxs)(v.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(eW.E, { type: { text: S } }),
                    (0, r.jsx)(eq.animated.div, {
                        style: { opacity: (0, e6.a)(b.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(eW.E, { type: { text: x }, icon: eV.O }),
                    }),
                ],
            }),
            (0, r.jsx)(eq.animated.div, {
                className: e5.Tr,
                style: { transform: b.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(e3.A, {
                    percentComplete: C,
                    overlayText: O && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(e8.A, {
                        quest: s,
                        questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: O,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(eq.animated.div, {
                className: e5.tw,
                style: {
                    opacity: (0, e6.a)(b.to([0, 1], [1, 0])),
                    transform: b.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(v.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)($.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: e5.Ht,
                            children: j,
                        }),
                        (0, r.jsxs)(v.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(v.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(eK.y, { size: "xs", color: eT.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)($.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(v.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, e7.pv)(s.config) === ek.Z.VIDEO
                                            ? (0, r.jsx)(ez.S, { size: "xs", color: eT.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(e$._, { size: "xs", color: eT.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)($.E, {
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
            (0, r.jsx)(eq.animated.div, {
                className: e5.um,
                style: { transform: b.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), R();
                    },
                    text: eA.intl.string(eA.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var ts = s(627568),
    tn = s(168291);
function tl(e) {
    let { hero: t, shelfQuests: s, isBannerLoading: n, onQuestCtaClick: l } = e,
        i = (0, ej.C)();
    return n
        ? (0, r.jsx)(tr, { numShelfCards: s.length + 1 })
        : (0, r.jsx)(eD, {
              className: tn.vo,
              overflowAmount: 25,
              maskWidth: eb(i),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(v.B, {
                  className: tn.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  children: [
                      (0, r.jsx)(eo.R, {
                          adContentId: t.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: 0,
                          sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                          children: (e, s) =>
                              (0, r.jsx)("div", {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  children: (0, r.jsx)(te, { hero: t, contentPosition: 0, impressionRef: s }),
                              }),
                      }),
                      s.map((e, s) =>
                          (0, r.jsx)(
                              eo.R,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: s + 1,
                                  sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                  children: (n) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              n.current = e;
                                          },
                                          children: (0, r.jsx)(tt, {
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
function tr(e) {
    let { className: t, numShelfCards: s } = e,
        n = (0, ej.C)(),
        l = Math.max(s, 4);
    return (0, r.jsx)(eD, {
        className: o()(tn.vo, t),
        overflowAmount: 25,
        maskWidth: eb(n),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(v.B, {
            className: tn.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: l - 1 }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(ts.m, tn.W_) }, t),
            ),
        }),
    });
}
var ti = s(190107),
    ta = s(632099);
function to() {
    return (0, r.jsx)("div", { className: ta.Np });
}
function tu(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, eu.A)(n, ti.rE.QUEST_HOME_DESKTOP);
    let l = i.useMemo(() => (null != s ? (0, es.WV)(s) : null) ?? t, [s, t]);
    return (0, r.jsx)(z._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(ea.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: n,
                imageAsset: {
                    alt: "",
                    className: ta.LY,
                    asset: { url: l, mimetype: (0, es.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: ta.LY,
                    asset: { url: s, mimetype: (0, es.vm)(s), isAnimated: !0 },
                    assetId: s,
                },
            }),
    });
}
function tc(e) {
    let { heroImage: t, heroVideo: s } = e;
    return null == s
        ? (0, r.jsxs)("div", {
              className: ta.Tv,
              children: [
                  (0, r.jsx)(to, {}),
                  (0, r.jsx)("div", {
                      className: ta.LO,
                      children: (0, r.jsx)(z._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: ta.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(ta.LO, ta.jx, ta.hw),
                      children: (0, r.jsx)("img", { className: ta.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(ta.LO, ta.jx, ta.Co),
                      children: (0, r.jsx)("img", { className: ta.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: ta.Tv,
              children: [
                  (0, r.jsx)(to, {}),
                  (0, r.jsx)("div", { className: ta.LO, children: (0, r.jsx)(tu, { heroImage: t, heroVideo: s }) }),
              ],
          });
}
function td(e) {
    let { hero: t, hasFetchedQuests: s, hasNoAccessibleQuests: n } = e,
        l = (0, el.WS)(),
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
                    event: eE.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                }));
        }, [s, n, t.id, t.questIds, l]),
        null
    );
}
function tm(e) {
    let { hero: t, onQuestCtaClick: s, isBannerLoading: n } = e,
        l = (0, E.bG)([Z.A], () => Z.A.quests),
        a = (0, E.bG)([Z.A], () => Z.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, K.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, eg.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        x = h[0];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eo.R, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: ee.uF.QUEST_HOME_HERO,
                sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(td, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(ef, {
                                ref: (t) => {
                                    e.current = n ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [ta.lX]: n }),
                                topContent: (0, r.jsxs)(v.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, r.jsx)(z._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, r.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: ta.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)($.E, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: ta.yu,
                                            children: eA.intl.string(eA.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                buttons: (0, r.jsxs)(f.e, {
                                    children: [
                                        (0, r.jsx)(g.$, {
                                            onClick: () => {
                                                (0, ei._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: ee.uF.QUEST_HOME_HERO,
                                                        ctaContent: er.Cy.OPEN_GAME_LINK,
                                                        impressionId: l.current?.getId(),
                                                        sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                                                    },
                                                );
                                            },
                                            size: "md",
                                            text: t.cta.buttonLabel,
                                            variant: "overlay-primary",
                                        }),
                                        !c &&
                                            null != x &&
                                            (0, r.jsx)(g.$, {
                                                onClick: () => {
                                                    s(x),
                                                        (0, et.E5)(et.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                            ? (0, J.r)({
                                                                  type: X.F.CLICK_INTERNAL,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  adCreativeId: t.id,
                                                                  questContentCTA: er.Cy.VIEW_QUESTS,
                                                                  surfaceId: ee.uF.QUEST_HOME_HERO,
                                                                  sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                                                              })
                                                            : (0, en.vK)({
                                                                  adContentId: t.id,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  questContent: ee.uF.QUEST_HOME_HERO,
                                                                  questContentCTA: er.Cy.VIEW_QUESTS,
                                                                  sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                                                              });
                                                },
                                                size: "md",
                                                text: eA.intl.string(eA.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(tc, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(tl, { hero: t, isBannerLoading: n, shelfQuests: u, onQuestCtaClick: s }),
        ],
    });
}
function tE() {
    return (0, r.jsx)("div", { className: o()(eh.iE, eh.FG, eh.B3), children: (0, r.jsx)(Y.y, {}) });
}
var th = s(764336);
s(321073);
var tx = s(228366),
    tf = s(352774);
s(667532);
var tg = s(783878),
    tj = s(663417),
    tv = s(922016),
    tS = s(624479),
    tC = s(416052),
    t_ = s(417098);
function tN(e) {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(t_.$T, {
        color: t_.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : eA.intl.string(eA.t.ZErSg5) }),
    });
}
var tp = s(602853),
    tT = s(817281),
    tA = s(688810),
    tO = s(487245),
    tI = s(363195),
    tb = s(907236);
let tR = function () {
    let { analyticsLocations: e } = (0, tA.Ay)(),
        t = (0, E.bG)([tI.A], () => tI.A.theme),
        s = i.useRef(null);
    i.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, tp.r)(eT.A.colors.BACKGROUND_BASE_LOW, eE.NJ8.LIGHT),
        l = (0, tp.r)(eT.A.colors.BACKGROUND_BASE_LOW, eE.NJ8.DARKER),
        a = (0, tp.r)(eT.A.colors.BACKGROUND_BASE_LOW, eE.NJ8.MIDNIGHT),
        o = i.useMemo(
            () => [
                { theme: eE.NJ8.LIGHT, label: eA.t.K2sFfo, color: n.hex() },
                { theme: eE.NJ8.DARKER, label: eA.t.b8Cei3, color: l.hex() },
                { theme: eE.NJ8.MIDNIGHT, label: eA.t.Do4ZJx, color: a.hex() },
            ],
            [n, l, a],
        ),
        u = i.useCallback(
            (t) => {
                (0, tO.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, tT.u_)({ theme: t });
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != s.current && u(s.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: tb.N,
        children: (0, r.jsxs)("div", {
            className: tb.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        eG.D,
                        {
                            tag: "div",
                            className: tb.Du,
                            onClick: () => u(e.theme),
                            "aria-label": eA.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${tb.WT} ${t === e.theme ? tb.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: tb.i, children: eA.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(eS.K, {
                    onClick: c,
                    "aria-label": eA.intl.string(eA.t.yBZMsQ),
                    icon: tj.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var tM = s(340369);
let tQ = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, K.pT)(),
        h = (0, E.bG)([Z.A], () => (null != t ? Z.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, E.bG)([Z.A], () => null != t && Z.A.isFetchingQuestPreview(t), [t]),
        j = i.useMemo(() => {
            let e = m.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [m, t]),
        v = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, tf.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, tf.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, tf.Yb)(t, e);
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
        className: tM.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: tM.Br,
                    children: (0, r.jsxs)("div", {
                        className: tM.bo,
                        children: [
                            (0, r.jsx)(tR, {}),
                            (0, r.jsxs)("div", {
                                className: tM.b8,
                                children: [
                                    (0, r.jsx)(
                                        tg.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: _,
                                            placeholder: eA.intl.string(eA.t.Zw8jxn),
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
                                    (0, r.jsx)(eS.K, {
                                        onClick: l,
                                        "aria-label": eA.intl.string(eA.t.wzzjk9),
                                        icon: tj.f,
                                        loading: x,
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
                    className: tM.in,
                    children: (0, r.jsxs)(f.e, {
                        className: tM.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: v,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eA.intl.string(eA.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: S,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eA.intl.string(eA.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eA.intl.string(eA.t.cKSLr4),
                            }),
                            (0, r.jsx)(tv.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: tM.PP,
                                        children: (0, r.jsx)("div", {
                                            className: tM.sH,
                                            children: (0, r.jsx)(tC.A, {
                                                value: e4.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eA.intl.string(eA.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(eS.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": eA.intl.string(eA.t.rNGQfD),
                                        icon: tS.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(tN, { error: h }) : null,
            x ? (0, r.jsx)(Y.y, {}) : null,
        ],
    });
};
var tL = s(364522),
    ty = s(761508),
    tU = s(70676);
function tH() {
    return (0, r.jsx)("div", { className: tU.y });
}
var tD = s(684603),
    tq = s(371960);
let tF = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: tq.x3,
        children: (0, r.jsxs)("div", {
            className: tq.B0,
            children: [
                (0, r.jsx)(ed.D, {
                    className: tq.R_,
                    variant: "heading-md/semibold",
                    children: eA.intl.string(eA.t.L2mlUb),
                }),
                (0, r.jsx)(tD.default, { quest: t }),
            ],
        }),
    });
};
var tP = s(242939),
    tk = s(717695),
    tw = s(928050),
    tB = s(152049);
let tG = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: tq.x3,
        children: (0, r.jsxs)("div", {
            className: tw.wp,
            children: [
                (0, r.jsx)(ed.D, {
                    className: tw.Oo,
                    variant: "heading-md/semibold",
                    children: eA.intl.string(eA.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: tw.RE,
                    children: (0, r.jsx)("div", {
                        className: tw.Z,
                        children: (0, r.jsx)("div", {
                            className: tB.C3,
                            children: (0, r.jsx)(tk.A, {
                                children: (0, r.jsx)(z.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(tP.QuestBar, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var tW = s(527549),
    tV = s(442444);
function tK(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: tq.x3,
        children: (0, r.jsxs)("div", {
            className: tq.B0,
            children: [
                (0, r.jsx)(ed.D, {
                    className: tq.R_,
                    variant: "heading-md/semibold",
                    children: eA.intl.string(eA.t.gWinpQ),
                }),
                (0, r.jsx)($.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children:
                        "QuestChannelCallHeader (live \u2014 branches on your experiment assignment: control = legacy UI, T1 = bar below)",
                }),
                (0, r.jsx)("div", {
                    className: tq.YT,
                    children: (0, r.jsx)(tW.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
                (0, r.jsx)($.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: "T1 \u2014 horizontal bar (unenrolled)",
                }),
                (0, r.jsx)("div", {
                    className: tq.YT,
                    children: (0, r.jsx)(tV.A, { quest: t, isFocused: !1, onAcceptQuest: () => {}, isEnrolling: !1 }),
                }),
            ],
        }),
    });
}
var tz = s(711038),
    t$ = s(660794);
let tY = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: tq.x3,
        children: (0, r.jsxs)("div", {
            className: tq.B0,
            children: [
                (0, r.jsx)(ed.D, { variant: "heading-md/semibold", children: eA.intl.string(eA.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: t$.wu,
                    children: (0, r.jsx)("span", { className: t$.cy, children: eA.intl.string(eA.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: t$.oU,
                    children: (0, r.jsx)("div", {
                        className: t$.zx,
                        children: (0, r.jsx)("div", {
                            className: t$.Lj,
                            children: (0, r.jsx)("div", {
                                className: t$.n0,
                                children: (0, r.jsx)(tz.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var tJ = s(976014),
    tX = s(612324),
    tZ = s(173936),
    t0 = s(365199),
    t1 = s(890856),
    t2 = s(270045),
    t7 = s(79545),
    t3 = s(720875),
    t8 = s(614972),
    t6 = s(339350),
    t4 = s(782134),
    t5 = s(271536),
    t9 = s(768622),
    se = s(793934),
    st = s(662940);
let ss = 2 * eZ.A.Millis.DAY;
var sn = s(927013);
function sl(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, t7.Pd)(t),
        l = (0, E.bG)([Z.A], () => n === t7.UA.UNENROLLED && null != Z.A.questEnrollmentBlockedUntil, [n]),
        a = (0, K.fc)(t),
        u = (0, K.I3)(t),
        c = i.useMemo(() => (0, st.Dd)(t.config, n, l), [t.config, n, l]),
        d = i.useMemo(() => (0, st.CK)(n, a, u, l), [n, a, u, l]),
        m = (function (e) {
            let t = (0, t7.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case t7.UA.UNENROLLED:
                            case t7.UA.ENROLLED:
                            case t7.UA.INCOMPLETE:
                                return !0;
                            case t7.UA.COMPLETED:
                            case t7.UA.CLAIMED:
                            case t7.UA.EXPIRED:
                            case t7.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < ss &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, eY.A)(n, eZ.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(sn.fC, { [sn.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: sn.qS,
                children: [
                    null != h &&
                        (0, r.jsx)($.E, {
                            variant: "text-xs/semibold",
                            className: sn.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)($.E, {
                            variant: "text-xs/semibold",
                            color: "text-overlay-light",
                            className: sn.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: sn.BA,
                            children: [
                                (function (e, t) {
                                    let s = { size: "xxs", className: sn.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(t6.Q, { ...s });
                                    switch ((0, st.pv)(e)) {
                                        case st.UK.PLAY:
                                            return (0, r.jsx)(e$._, { ...s });
                                        case st.UK.WATCH:
                                            return (0, r.jsx)(t4.u, { ...s });
                                        case st.UK.ACTIVITY:
                                            return (0, r.jsx)(t5.q, { ...s });
                                        case st.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(t9.g, { ...s });
                                        case st.UK.ARENA:
                                            return (0, r.jsx)(se.q, { ...s });
                                    }
                                })(t, l),
                                (0, r.jsx)($.E, {
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
                    className: o()(sn.qS, sn.WZ),
                    children: (0, r.jsx)($.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: eA.intl.string(eA.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var sr = s(409626),
    si = s(3738),
    sa = s(646917),
    so = s(866665),
    su = s(743368),
    sc = s(792620),
    sd = s(657113),
    sm = s(617986),
    sE = s(936516);
function sh(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: i } = e,
        a = (0, t7.Pd)(t),
        { ctaOnHover: u } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        c = (0, E.bG)([Z.A], () => a === t7.UA.UNENROLLED && null != Z.A.questEnrollmentBlockedUntil, [a]),
        d = !(0, sc.no)(t) || ![t7.UA.ENROLLED, t7.UA.UNENROLLED, t7.UA.INCOMPLETE].includes(a),
        m = a === t7.UA.EXPIRED || (a === t7.UA.CLAIMED && (0, sc.GL)(t)),
        h = (0, K.do)({ quest: t, content: s, ctaContent: er.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsxs)("div", {
        className: o()(sE.lO, { [sE.Fq]: l || !u }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)("div", { className: sE.Cj }),
            (0, r.jsx)(ec.N, {
                theme: eE.NJ8.DARKER,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, sE.tn),
                        children: (0, r.jsxs)(f.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                d &&
                                    (m || i
                                        ? (0, r.jsx)(g.$, {
                                              variant: "secondary",
                                              text: t.config.ctaConfig.buttonLabel,
                                              onClick: h,
                                          })
                                        : (0, r.jsx)(so.m, {
                                              text: eA.intl.string(eA.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, r.jsx)(eS.K, {
                                                  variant: "secondary",
                                                  icon: su.W,
                                                  "aria-label": eA.intl.string(eA.t.LLLLPD),
                                                  onClick: h,
                                              }),
                                          })),
                                !m &&
                                    !c &&
                                    (0, r.jsx)(sd.A, {
                                        quest: t,
                                        surface: t7.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                                c &&
                                    (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: eA.intl.string(eA.t.vY9GgG),
                                        onClick: () => (0, sm.m6)(t, s, n),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var sx = s(403581),
    sf = s(576761),
    sg = s(473056);
function sj(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, K.ZP)(s),
        i = (0, sf.B9)(n);
    if (null == l) return null;
    let a = i
        ? eA.intl.formatToPlainString(eA.t.l2UfLG, { bonusOrbMultiplier: l })
        : eA.intl.formatToPlainString(eA.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(eG.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, sm.gC)(l, n), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: sg.k,
            children: [
                (0, r.jsx)(sx.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)($.E, { variant: "text-sm/normal", color: "currentColor", className: sg.Q, children: a }),
            ],
        }),
    });
}
var sv = s(947641),
    sS = s(194261),
    sC = s(106799),
    s_ = s(710969),
    sN = s(719095);
function sp(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, E.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        a = (0, e2.mq)(t.config, i),
        u = (0, e2.ks)(t.config),
        c = (0, e2.wo)(t.config, i),
        d = (0, e2.l0)(t.config, i),
        m =
            null != c
                ? c > 700 * d
                    ? es.i2.TIER_4
                    : c > 200 * d
                      ? es.i2.TIER_3
                      : c > 100 * d
                        ? es.i2.TIER_2
                        : es.i2.TIER_1
                : void 0,
        { completedRatio: h } = (0, K.O9)(t),
        x = t.userStatus?.claimedAt != null,
        f = (0, s_.Ic)(t),
        g = t.userStatus?.enrolledAt == null,
        j = x ? "completed" : f ? "expired" : null,
        v = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(e8.A, {
                    quest: t,
                    orbTier: m,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: sN.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === j &&
                    (0, r.jsx)("div", {
                        className: sN.EY,
                        children: (0, r.jsx)(sv.r, { className: sN.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === j &&
                    (0, r.jsx)("div", {
                        className: sN.EY,
                        children: (0, r.jsx)(sS.X, { size: "sm", className: sN.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: o()(sN.CZ, { [sN.Pv]: l }),
        children: [
            (0, r.jsx)("div", {
                className: o()(sN.tE, { [sN.cB]: l }),
                children: g
                    ? (0, r.jsx)("div", { className: sN.fm, children: v })
                    : (0, r.jsx)(e3.A, {
                          size: 66,
                          percentComplete: h,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: sN.n5, children: v }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: o()(sN.FS, { [sN.IR]: l }),
                children: [
                    (0, r.jsx)($.E, {
                        variant: "text-sm/medium",
                        className: sN.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(sN.oV, { [sN.FJ]: l }),
                        children: [
                            u && (0, r.jsx)(sC.A, { className: sN.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                $.E,
                                {
                                    variant: "text-md/medium",
                                    className: sN.zN,
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    tag: "span",
                                    children: u ? c : a,
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
var sT = s(758175);
function sA(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: a } = e,
        u = i.useRef(null),
        c = (0, si.A9)(t, a, ti.rE.QUEST_HOME_DESKTOP, sr.GameProfileSources.QuestHome, u),
        d = (0, sa.z)(),
        m = (0, K.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: u,
        className: sT.qr,
        children: [
            (0, r.jsx)(sp, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n }),
            (0, r.jsxs)("div", {
                className: sT.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: sT.Wi,
                        children: [
                            (0, r.jsx)($.E, {
                                variant: "text-sm/normal",
                                className: o()(sT.Wj, sT.h_, { [sT.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)($.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(sT.Wj, sT.XV, { [sT.Hz]: n }),
                                children: c,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: sT.Gv,
                        children: [
                            (0, r.jsx)($.E, {
                                variant: "text-sm/normal",
                                className: sT.I4,
                                children: eA.intl.string(eA.t.o6FLcF),
                            }),
                            m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)($.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(sj, { questId: t.id, orbMultiplierEligibility: d }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(sh, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var sO = s(688755),
    sI = s(831368),
    sb = s(343360);
function sR(e) {
    let {
            sectionIdentifier: t,
            quest: s,
            questContent: n,
            isInFeaturedSection: l,
            className: a,
            contentPosition: u,
            rowIndex: c,
            eagerLoadAssets: d,
            impressionRef: m,
            sourceQuestContent: h,
        } = e,
        x = i.useMemo(() => (0, es.tW)(s, es.fY.QUEST_BAR_HERO_IMAGE), [s]),
        f = i.useMemo(() => (0, es.tW)(s, es.fY.QUEST_BAR_HERO_VIDEO), [s]),
        {
            isActive: g,
            shouldRender: j,
            hoverHandlers: v,
            handleMenuOpen: S,
            handleMenuClose: C,
        } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400,
                [t, s] = i.useState(!1),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(!1),
                o = i.useRef(!1),
                u = i.useRef(!1),
                c = i.useRef(null),
                d = i.useRef(null);
            function m() {
                null != c.current && (cancelAnimationFrame(c.current), (c.current = null));
            }
            function E() {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            }
            let h = i.useCallback(() => {
                    E(),
                        l(!0),
                        m(),
                        (c.current = requestAnimationFrame(() => {
                            c.current = requestAnimationFrame(() => {
                                (c.current = null), s(!0);
                            });
                        }));
                }, []),
                x = i.useCallback(() => {
                    m(),
                        s(!1),
                        E(),
                        (d.current = setTimeout(() => {
                            (d.current = null), l(!1);
                        }, e));
                }, [e]),
                f = i.useCallback(() => a(!0), []),
                g = i.useCallback(() => {
                    a(!1), o.current || u.current || x();
                }, [x]),
                j = i.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            (o.current = !0), h();
                        },
                        onMouseLeave: () => {
                            (o.current = !1), r || x();
                        },
                        onFocus: () => {
                            (u.current = !0), h();
                        },
                        onBlur: () => {
                            (u.current = !1), r || x();
                        },
                    }),
                    [h, x, r],
                );
            return (
                i.useEffect(
                    () => () => {
                        m(), E();
                    },
                    [],
                ),
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: j, handleMenuOpen: f, handleMenuClose: g }
            );
        })(),
        _ = (0, t8.c)({ onMenuOpen: S, onMenuClose: C }),
        N = (0, t7.Pd)(s),
        p = (0, e0.go)(),
        T = (0, e7.E0)(s.config),
        { clickableTile: A } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        O = (0, E.bG)([tI.A], () => tI.A.theme),
        I = O === eE.NJ8.DARK || O === eE.NJ8.DARKER,
        b = O === eE.NJ8.LIGHT,
        R = i.useContext(ep.X),
        { visibilityElementRef: M, almostVisibleInViewport: Q } = (0, sI.I)(
            R?.current?.getScrollerNode() ?? null,
            d ?? !1,
        ),
        {
            handleHoverStart: L,
            handleHoverEnd: y,
            isEventWithinParent: U,
        } = (0, sO.B)({ quest: s, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: h }),
        H = (0, th.Lk)({
            isShareable: T,
            questId: s.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: n,
                    ctaContent: er.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: p,
                    sourceQuestContent: h,
                }),
                [n, h, p],
            ),
        }),
        D = (0, K.do)({ quest: s, content: n, ctaContent: er.Cy.OPEN_GAME_LINK, sourceQuestContent: h }),
        q = (0, tX.A)(m, M),
        F = eA.intl.formatToPlainString(eA.t.EAYZAr, { questName: s.config.messages.questName }),
        P = o()(sb.kL, { [sb.F1]: A, [sb.iR]: l, [sb.DM]: g }, a),
        k = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(t3.A, {
                    showPlaceholder: !Q,
                    width: 600,
                    height: 450,
                    className: sb.Tv,
                    children: (0, r.jsx)(ea.N, {
                        imageAsset:
                            null != x
                                ? {
                                      asset: x,
                                      assetId: "QuestTileV2",
                                      alt: eA.intl.string(eA.t.jnijWz),
                                      className: sb.Tv,
                                  }
                                : void 0,
                        videoAsset:
                            null != f
                                ? {
                                      asset: f,
                                      assetId: "QuestTileV2_heroAnimated",
                                      className: o()(sb.Tv, sb.gJ, { [sb.C7]: g }),
                                  }
                                : void 0,
                        imageSize: { width: 600, height: 450 },
                        showVideo: j,
                    }),
                }),
                (0, r.jsx)("div", { className: o()(sb.sL, { [sb.Mq]: N === t7.UA.EXPIRED }) }),
                b
                    ? (0, r.jsx)(ec.N, {
                          theme: eE.NJ8.MIDNIGHT,
                          disableAdaptiveTheme: !0,
                          children: (e) => (0, r.jsx)("div", { className: o()(e, sb.f5) }),
                      })
                    : (0, r.jsx)("div", { className: o()(sb.f5, { [sb.kg]: I }) }),
                (0, r.jsxs)("div", {
                    className: sb.qy,
                    children: [
                        (0, r.jsxs)("div", {
                            className: sb.wx,
                            children: [
                                (0, r.jsx)(sl, { quest: s, isHovering: g }),
                                (0, r.jsxs)("div", {
                                    className: o()(sb.$s, { [sb.rk]: g }),
                                    onClick: (e) => e.stopPropagation(),
                                    children: [
                                        l &&
                                            T &&
                                            (0, r.jsx)(eG.D, {
                                                tag: "div",
                                                className: sb.E9,
                                                onClick: H,
                                                "aria-label": eA.intl.string(eA.t.WqhZss),
                                                children: (0, r.jsx)(tZ.q, { size: "sm", color: "currentColor" }),
                                            }),
                                        (0, r.jsx)(t2.C, {
                                            questContent: n,
                                            quest: s,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            sourceQuestContent: h,
                                            onOpen: S,
                                            onClose: C,
                                            children: (e) =>
                                                (0, r.jsx)(eG.D, {
                                                    ...e,
                                                    tag: "div",
                                                    className: sb.E9,
                                                    "aria-label": eA.intl.string(eA.t.DEoVWZ),
                                                    children: (0, r.jsx)(t0.j, { size: "sm", color: "currentColor" }),
                                                }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(t8.q.Provider, {
                            value: _,
                            children: (0, r.jsx)(sA, {
                                quest: s,
                                questContent: n,
                                isInFeaturedSection: l,
                                isHovering: g,
                                sourceQuestContent: h,
                            }),
                        }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", {
        id: (0, tJ.sT)(s.id, t),
        className: sb.uW,
        onMouseEnter: () => {
            v.onMouseEnter(), L();
        },
        onMouseLeave: () => {
            v.onMouseLeave(), y();
        },
        onFocus: (e) => {
            U(e) || (v.onFocus(), L());
        },
        onBlur: (e) => {
            U(e) || (v.onBlur(), y());
        },
        children: A
            ? (0, r.jsx)(t1.s, { tag: "article", ref: q, onClick: D, "aria-label": F, className: P, children: k })
            : (0, r.jsx)("article", { ref: q, "aria-label": F, className: P, children: k }),
    });
}
let sM = i.memo(function (e) {
    let t = (0, E.bG)([Z.A], () => (null != e.questId ? Z.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(eo.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === ee.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(sR, { ...e, quest: s, impressionRef: t }),
          });
});
function sQ(e) {
    let { quest: t } = e,
        { useNewTile: s } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: tq.x3,
        children: (0, r.jsxs)("div", {
            className: tq.B0,
            children: [
                (0, r.jsx)(ed.D, {
                    className: tq.R_,
                    variant: "heading-md/semibold",
                    children: eA.intl.string(eA.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(sM, {
                          className: tq.d,
                          quest: t,
                          questContent: ee.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: ee.uF.INTERNAL_PREVIEW_TOOL,
                      })
                    : (0, r.jsx)(tJ.Ay, {
                          className: tq.d,
                          quest: t,
                          questContent: ee.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: ee.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var sL = s(97808),
    sy = s(778712),
    sU = s(87664),
    sH = s(427262),
    sD = s(198525),
    sq = s(715672);
let sF = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        u = sH.Ay.useName(a),
        c = (0, sU.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(sD.default, {
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
        className: tq.x3,
        children: (0, r.jsxs)("div", {
            className: tq.B0,
            children: [
                (0, r.jsx)(ed.D, {
                    className: sq.R_,
                    variant: "heading-md/semibold",
                    children: eA.intl.string(eA.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: sq.$Q, children: eA.intl.string(eA.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: sq.k0,
                    children: (0, r.jsx)(tv.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: s,
                        onRequestClose: () => n(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: tv.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(sq.Tn, { [sq.wH]: s }),
                                children: (0, r.jsx)(eG.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: sq.lm,
                                        children: [
                                            (0, r.jsx)(sL.eu, {
                                                size: sy._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: eE.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: sq.Fj,
                                                children: [
                                                    (0, r.jsx)($.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)($.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: eA.intl.string(eA.t.b9w3bO),
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
function sP(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, E.bG)([Z.A], () => Z.A.getQuest(t));
    if (null != (0, E.bG)([Z.A], () => Z.A.getFetchQuestPreviewError(t)) || null == n) return null;
    function l(e) {
        return null == s || 0 === s.length || s.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tG, { quest: n }), (0, r.jsx)(tH, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sQ, { quest: n }), (0, r.jsx)(tH, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tY, { questId: n.id }), (0, r.jsx)(tH, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tK, { quest: n }), (0, r.jsx)(tH, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sF, { quest: n }), (0, r.jsx)(tH, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(tF, { quest: n }), (0, r.jsx)(tH, {})] }),
        ],
    });
}
var sk = s(711731);
function sw(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: a } = e,
        u = [
            { value: "quest_bar", label: eA.intl.string(eA.t.rjVPdM) },
            { value: "share_embed", label: eA.intl.string(eA.t["D/gSWS"]) },
            { value: "home_card", label: eA.intl.string(eA.t["5wnpF3"]) },
            { value: "channel_call_header", label: eA.intl.string(eA.t.gWinpQ) },
            { value: "members_list", label: eA.intl.string(eA.t.wpYima) },
            { value: "activity_panel", label: eA.intl.string(eA.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, r.jsx)(tL.Ip, {
        className: o()(sk.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: sk.qE,
            children: [
                (0, r.jsx)(ed.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eA.intl.string(eA.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: sk.pf, children: l }),
                (0, r.jsxs)(ty.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(ty.V.Item, { id: "all", children: eA.intl.string(eA.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(ty.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: sk.tZ, children: (0, r.jsx)("div", { className: sk.Qs, children: t }) }),
            ],
        }),
    });
}
let sB = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: s } = (0, u.zy)(),
                n = i.useMemo(() => new URLSearchParams(s).get(K.L1.QUEST_ID) ?? e, [s, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === n) return;
                        let s = new URLSearchParams();
                        s.set(K.L1.TAB, K.NC.PREVIEW_TOOL),
                            s.set(K.L1.QUEST_ID, e),
                            t.push(`${eE.BVt.QUEST_HOME}?${s.toString()}`);
                    },
                    [t, n],
                );
            return { questId: n, setQuestId: l };
        })(t),
        a = (0, E.bG)([Z.A], () => (null != n ? Z.A.getQuest(n) : void 0), [n]),
        o = (0, E.bG)([Z.A], () => (null != n ? Z.A.getQuestLoadedViaPreview(n) : null), [n]);
    i.useEffect(() => {
        null != n &&
            (0, tf.dQ)(n).then(() => {
                (0, tf.Gt)(n);
            });
    }, [n]),
        i.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === n && (0, tf.dQ)(n);
            }
            return (
                tx.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    tx.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [c, d] = i.useState([]);
    return (0, r.jsx)(sw, {
        className: s,
        controls: (0, r.jsx)(tQ, {
            questId: n,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != n && (0, tf.dQ)(n);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(sP, { questId: o?.id, selectedSections: c }) : null,
    });
};
var sG = s(203879),
    sW = s(403362),
    sV = s(167417),
    sK = s(783977),
    sz = s(305866),
    s$ = s(915089),
    sY = s(192229);
function sJ(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)($.E, { className: sY.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let sX = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, s$.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(tv.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(sz.l, { className: sY.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var sZ = s(605123);
let s0 = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, K.Nb)(),
        l = i.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(sX, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, e1.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: sZ.B }),
                                    (0, r.jsx)(sJ, { id: a, children: e.heading }),
                                    (0, r.jsx)(sV.$, {
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
                    (0, r.jsx)("hr", { className: sZ.B }),
                    (0, r.jsx)("div", {
                        className: sZ.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: eA.intl.string(eA.t.VkKicb),
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
                text: eA.intl.formatToPlainString(eA.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: sK.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var s1 = s(144228),
    s2 = s(715482);
let s7 = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([_.Ay], () => _.Ay.keyboardModeEnabled),
        o = (0, K.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(sX, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(sJ, { id: t, children: eA.intl.string(eA.t.tZXJIS) }),
                    (0, r.jsx)(s1.z, {
                        options: u,
                        onChange: (e) => {
                            l(e), a || s();
                        },
                        value: n,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                "aria-label": eA.intl.formatToPlainString(eA.t.lPlIMo, { selected: (0, e1.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, e1.Js)(n),
                icon: s2.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var s3 = s(691540),
    s8 = s(857250),
    s6 = s(97483),
    s4 = s(174459);
function s5() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, s3.P0)((0, s8.o)(eA.intl.string(eA.t["5ABf1w"]), s6.Ck.FAILURE)),
                s4.default.track(eE.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function s9(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function ne(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            r(s9(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, ev.g)(e, a, [t, s], { fireOnMount: !0 }), l;
}
var nt = s(904080);
let ns = 4 * eZ.A.Millis.SECOND;
function nn(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = ne(l, s, n);
    return (0, r.jsx)("div", {
        className: nt.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let nl = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = s5(),
        h = i.useRef(""),
        [x, f] = i.useState(null),
        [g, j] = i.useState(0),
        { useNewTile: v } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: S }, C] = (0, eB.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: ns },
        })),
        _ = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, s_.vc)(e, s, n);
                return null == t ? (E(e), !1) : (f(t.id), j((e) => e + 1), !0);
            },
            [s, n, l, E, a],
        );
    return (i.useImperativeHandle(t, () => ({ scrollToQuest: _ }), [_]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        l || !a || (m.hash !== h.current && _(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, l, a, _]),
    i.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            C({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || f(null);
                },
            }));
    }, [x, g, C]),
    l && 0 === s.length)
        ? (0, r.jsx)(Y.y, { className: nt.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: nt.y7,
                children: [
                    (0, r.jsx)(ed.D, {
                        variant: "heading-xl/semibold",
                        children: eA.intl.string(c ? eA.t.PBfFnx : eA.t.NqFP6z),
                    }),
                    (0, r.jsx)($.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: c ? eA.intl.format(eA.t.LdYS1H, { onClick: d }) : eA.intl.string(eA.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(nn, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            i = null != x && !l;
                        return (0, r.jsxs)(
                            eq.animated.div,
                            {
                                className: o()({ [nt.XB]: l }),
                                style: eF(l, i, S),
                                children: [
                                    l && (0, r.jsx)("div", { className: nt.E4 }, g),
                                    v
                                        ? (0, r.jsx)(sM, {
                                              quest: t,
                                              questContent: ee.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: nt.d,
                                              sourceQuestContent: ee.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(tJ.Ay, {
                                              quest: t,
                                              questContent: ee.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: nt.d,
                                              sourceQuestContent: ee.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var nr = s(458518),
    ni = s(367518);
let na = [],
    no = K.L1.SORT,
    nu = K.L1.FILTER,
    nc = i.forwardRef(function (e, t) {
        let s,
            n,
            l,
            a,
            o = i.useRef(null),
            [c, d] =
                ((s = (0, nr.o)()),
                (n = (0, u.W6)()),
                (l = i.useRef(null)),
                (a = i.useCallback(
                    (e) => {
                        let t = new URLSearchParams(l.current ?? s);
                        for (let [s, n] of Object.entries(e)) null == n ? t.delete(s) : t.set(s, n);
                        (l.current = t),
                            n.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                l.current = null;
                            });
                    },
                    [s, n],
                )),
                [s, a]),
            m = i.useMemo(() => {
                var e;
                return (
                    (e = c.get(no)),
                    ((0, B.uJ)(e) ? null : (Object.values(ti.kL).find((t) => t === e) ?? null)) ?? ti.kL.SUGGESTED
                );
            }, [c]),
            E = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, B.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, ti.WQ)(e))
                            .filter(sW.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(nu)) ?? na,
                [c],
            ),
            h = i.useCallback(
                (e) => {
                    d({ [no]: e });
                },
                [d],
            ),
            x = i.useCallback(
                (e) => {
                    d({
                        [nu]:
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
                quests: f,
                excludedQuests: g,
                isFetchingCurrentQuests: j,
                hasFetched: v,
            } = (0, K.Qh)(
                K.NC.ALL,
                i.useMemo(() => ({ sortMethod: m, filters: E, removeExpiredQuests: !0 }), [m, E]),
            ),
            S = i.useCallback(() => {
                x(na);
            }, [x]),
            C = i.useRef(null),
            _ = i.useRef(null),
            N = (0, u.zy)(),
            p = (0, u.W6)();
        return (
            i.useEffect(() => {
                "" !== N.hash &&
                    null != C.current &&
                    null != _.current &&
                    (m !== C.current || E !== _.current) &&
                    p.replace({ ...N, hash: void 0 });
            }, [m, E, N, p]),
            i.useEffect(() => {
                C.current = m;
            }, [m]),
            i.useEffect(() => {
                _.current = E;
            }, [E]),
            (0, K.$P)({ selectedSortMethod: m, selectedFilters: E, numQuestsVisible: f.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        S(),
                            h(ti.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [S, h],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: ni.Mj,
                        children: [
                            (0, r.jsx)(ed.D, { variant: "heading-lg/medium", children: eA.intl.string(eA.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: ni.Nf,
                                children: [
                                    (0, r.jsx)(s7, { onChange: h, optionClassName: ni.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(s0, { onChange: x, selectedFilters: E }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(nl, {
                        ref: o,
                        quests: f,
                        excludedQuests: g,
                        isFetching: j,
                        hasFetched: v,
                        hasFiltersApplied: E.length > 0,
                        onClearFilters: S,
                    }),
                ],
            })
        );
    });
var nd = s(575593),
    nm = s(462887),
    nE = s(187322),
    nh = s(765671),
    nx = s(736653),
    nf = s(162232),
    ng = s(734736),
    nj = s(303136),
    nv = s(696698),
    nS = s(181713);
let nC = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? nS.A : nS.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(nv.k, t),
        children: s
            ? (0, r.jsx)(nj.A, {
                  preload: "auto",
                  className: nv.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: nv.L, src: l, alt: n }),
    });
};
var n_ = s(57718),
    nN = s(417817);
let np = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        x = (0, E.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, nh.Ay)(),
        j = (0, nx.Ay)(),
        v = (0, K.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        S = t.userStatus?.claimedTier ?? 0,
        C = t.config.rewards[S],
        _ = C?.type === eP.l.FRACTIONAL_PREMIUM,
        N = C?.type === eP.l.COLLECTIBLE,
        p = C?.type === eP.l.VIRTUAL_CURRENCY,
        T = C?.collectibleProduct?.items?.[0],
        A = T?.type === nd.R.AVATAR_DECORATION ? T : null,
        O = i.useMemo(
            () =>
                null == C
                    ? null
                    : !0 === p && t.userStatus?.orbQuantityClaimed != null
                      ? eA.intl.format(eA.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : C.name,
            [C, p, t],
        );
    (0, nh.i4)(d, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == d.current || null == h.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let I = (0, nm.M)(j),
        R = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, es.tW)(t, es.fY.REWARD), [t]),
        Q = s ? g + 8 : 0,
        { content_position: L, row_index: y, ...U } = (0, er.fF)(ee.uF.TROPHY_CASE_CARD);
    function H() {
        n(!0), s4.default.track(eE.HAw.QUEST_HOVER, { quest_id: t.id, ...U });
    }
    function D() {
        n(!1);
    }
    function q(e) {
        c(!0), s4.default.track(eE.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
    }
    return null == C || u
        ? null
        : (0, r.jsx)(nE.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: H,
                  onBlur: D,
                  onMouseEnter: H,
                  onMouseLeave: D,
                  className: o()(nN.kL, { [nN.yo]: s }),
                  children: [
                      null != x &&
                          N &&
                          null != A &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: nN.FX,
                              style: { top: l },
                              children: (0, r.jsx)(nf.A, {
                                  avatarDecorationOverride: A,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      _
                          ? (0, r.jsx)(ng.A, { className: nN.Sl })
                          : p
                            ? (0, r.jsx)(nC, {
                                  className: nN.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(b.A, {
                                    className: nN.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => q(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: nN.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => q(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(nN.Lw, { [nN.en]: I, [nN.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: nN.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(n_.Ay, {
                              logotypeClassName: o()(nN.wm, { [nN.A0]: R }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: nN.zH,
                          children: [
                              (0, r.jsx)(ed.D, {
                                  className: nN.DD,
                                  variant: "heading-md/semibold",
                                  color: "text-overlay-light",
                                  children: eA.intl.format(eA.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)($.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "text-overlay-light",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: eA.intl.format(eA.t["kXVcV+"], { reward: O, claimedDate: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var nT = s(396478);
function nA(e) {
    let { onClick: t } = e,
        n = (0, nx.Ay)();
    return (0, r.jsxs)(nT.pp, {
        theme: n,
        children: [
            (0, r.jsx)(nT.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(nT.SG, { note: eA.intl.format(eA.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var nO = s(839944);
function nI(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, K.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(Y.y, { className: nO.u })
        : 0 === n.length
          ? (0, r.jsx)(nA, { onClick: () => t(K.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(nO.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(np, { quest: e }, e.id)),
            });
}
let nb = i.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
var nR = s(912532);
function nM(e) {
    let { children: t, sectionIdentifier: s, questId: n, featuredSection: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: o,
            highlightCount: u,
            highlightAnimationProgress: c,
        } = i.useContext(nb),
        d = a === n && o === s,
        m = null != a && (a !== n || o !== s),
        { useNewTile: E } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        h = l ? "var(--radius-lg)" : "var(--radius-sm)",
        x = i.useMemo(() => ({ ...eF(d, m, c), borderRadius: E ? h : "10px" }), [d, m, c, E, h]);
    return (0, r.jsxs)(eq.animated.div, {
        [eQ]: "",
        className: d ? nR.X : void 0,
        style: x,
        children: [d && (0, r.jsx)("div", { className: nR.E }, u), t],
    });
}
var nQ = s(359246);
function nL(e) {
    let { containerWidth: t, questIds: s, sectionIdentifier: n, setMaxRowIndex: l } = e,
        { useNewTile: a } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        o = i.useMemo(() => (null == t ? null : s9(t, 345, 20, 2)), [t]);
    return (
        i.useEffect(() => {
            null !== o && l(Math.ceil(s.length / o) - 1);
        }, [s.length, o, l]),
        (0, r.jsx)("div", {
            className: nQ.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != o &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        nM,
                        {
                            featuredSection: !0,
                            questId: e,
                            sectionIdentifier: n,
                            children: a
                                ? (0, r.jsx)(
                                      sM,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      tJ.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  ),
                        },
                        `animated-wrapper-${e}-${n}`,
                    ),
                ),
        })
    );
}
var ny = s(948884);
function nU(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(ny.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: o()(ts.m, ny.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: ny.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(ts.m, ny.Vr) }, t),
                ),
            }),
        ],
    });
}
var nH = s(412372);
function nD(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(nb),
        { useNewTile: o } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = W.Mk.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        c = (0, ej.C)(),
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
                (0, en.kO)({
                    scrollingType: d ? er.pk.AUTO : n,
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
        E = u === W.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(eD, {
        maskWidth: eb(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${eR(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: nH.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        nM,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(sM, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nH.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(tJ.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === eO.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: nH.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: nH.fu }),
            ],
        }),
    });
}
var nq = s(958538);
let nF = eZ.A.Millis.WEEK;
function nP() {
    let e = Z.A.quests;
    if (0 === Z.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, s_.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class nk extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(Z.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - nF;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([Z.A], nP), t;
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
let nw = new nk(tx.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            if (null == Z.A.getQuest(e.questId)) return !1;
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    nB = 2 * eZ.A.Millis.DAY,
    nG = new Map(eI.map((e) => [e.identifier, e])),
    nW = {
        [eO.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function nV(e, t) {
    let s = nG.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
function nK(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
let nz = function () {
    let e = (0, sH.Gn)(),
        t = (0, K.Cv)(),
        s = (0, E.bG)([Z.A], () => Z.A.lastFetchedCurrentQuests > 0),
        { quests: n, isFetchingCurrentQuests: l } = (0, K.Qh)(K.NC.ALL, {
            sortMethod: ti.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, nq.A)(
            () =>
                n.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            n.map((e) => {
                let { id: t } = e;
                return t;
            }),
            nK,
        ),
        a = (0, th.T2)(),
        o = (0, E.bG)([nw], () => nw.getDiscoveredAtByQuestId(), []),
        u = i.useMemo(() => (l || !s) && 0 === r.length, [l, s, r.length]),
        c = i.useMemo(
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
                              } = e,
                              i = new Map(),
                              a = new Set();
                          function o(e) {
                              if (a.has(e)) return;
                              let t = Z.A.getQuestConfig(e);
                              if (null == t) return;
                              let o = (function (e) {
                                  let {
                                          quest: t,
                                          hero: s,
                                          discoveredAtByQuestId: n,
                                          questIdsBySectionIdentifier: l,
                                          isStaff: r,
                                          isPreviewerOnAnyQuest: i,
                                      } = e,
                                      { userStatus: a, preview: o } = Z.A.getQuest(t.id) ?? {},
                                      u = [],
                                      c =
                                          null != a &&
                                          null != a.enrolledAt &&
                                          null != a.completedAt &&
                                          null == a.claimedAt;
                                  return (0, s_.kd)(t) && !c
                                      ? r
                                          ? [eO.EXPIRED]
                                          : null
                                      : (n.has(t.id) && u.push(eO.DISCOVERED),
                                          i && !0 === o && u.push(eO.PREVIEW),
                                          null != a && null != a.enrolledAt && null == a.claimedAt)
                                        ? [...u, eO.IN_PROGRESS]
                                        : null != s && (0, e7.I0)(s, t.id) && nV(eO.FEATURED, l)
                                          ? [...u, eO.FEATURED]
                                          : new Date(t.expiresAt).valueOf() <= Date.now() + nB
                                            ? [...u, eO.ENDING_SOON]
                                            : nV(eO.FEATURED, l)
                                              ? [...u, eO.FEATURED]
                                              : (0, e2.ks)(t)
                                                ? [...u, eO.ORB]
                                                : [...u, eO.SPECIAL_QUESTS];
                              })({
                                  quest: t,
                                  hero: s,
                                  discoveredAtByQuestId: n,
                                  questIdsBySectionIdentifier: i,
                                  isStaff: l,
                                  isPreviewerOnAnyQuest: r,
                              });
                              null != o &&
                                  (o.forEach((t) => {
                                      i.set(t, [...(i.get(t) ?? []), e]);
                                  }),
                                  a.add(e));
                          }
                          return (
                              s?.questIds?.forEach((e) => o(e)),
                              t.forEach((e) => o(e)),
                              eI
                                  .map((e) => {
                                      let t = nW?.[e.identifier];
                                      if (null != e.shouldShowFn && !e.shouldShowFn(l, r))
                                          return { ...e, questIds: [] };
                                      let s =
                                          null != t
                                              ? t(i.get(e.identifier) ?? [], { discoveredAtByQuestId: n })
                                              : (i.get(e.identifier) ?? []);
                                      return { ...e, questIds: s };
                                  })
                                  .filter((e) => {
                                      let { questIds: t } = e;
                                      return t.length > 0;
                                  })
                          );
                      })({ allQuestIds: r, hero: a, discoveredAtByQuestId: o, isStaff: e, isPreviewerOnAnyQuest: t }),
            [r, a, o, u, e, t],
        ),
        d = i.useCallback((e) => c.find((t) => t.questIds.includes(e))?.identifier ?? null, [c]);
    return { sections: c, isFetchingCurrentQuests: u, getSectionIdentifierForTargetedQuest: d };
};
var n$ = s(673672);
let nY = {
        [eO.FEATURED]: ee.uF.QUEST_HOME_FEATURED_SECTION,
        [eO.IN_PROGRESS]: ee.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [eO.ENDING_SOON]: ee.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [eO.ORB]: ee.uF.QUEST_HOME_ORB_SECTION,
        [eO.DISCOVERED]: ee.uF.QUEST_HOME_DISCOVERED_SECTION,
        [eO.EXPIRED]: ee.uF.QUEST_HOME_EXPIRED_SECTION,
        [eO.PREVIEW]: ee.uF.QUEST_HOME_PREVIEW_SECTION,
        [eO.SPECIAL_QUESTS]: ee.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    nJ = 4 * eZ.A.Millis.SECOND,
    nX = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l, withQuestHomeHero: a = !0 } = e,
            { useNewTile: u, useLargeFeaturedTiles: c } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
            { sections: d, isFetchingCurrentQuests: m, getSectionIdentifierForTargetedQuest: E } = nz(),
            h = i.useRef(null),
            { showToast: x } = s5(),
            [f, g] = i.useState(null),
            [j, v] = i.useState(null),
            [S, C] = i.useState(0),
            [_, N] = i.useState(null),
            [p, T] = i.useState(0),
            A = i.useRef(null),
            O = i.useCallback(
                (e) => {
                    N(e.contentRect.width);
                },
                [N],
            );
        (0, ev.g)(h, O, [O], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: I }, b] = (0, eB.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nJ },
            })),
            R = i.useCallback(
                (e, t) => {
                    if (null == e || null == _ || m || n) return !1;
                    t && (0, tf.sB)(e);
                    let s = E(e),
                        l = !0 === t && s !== eO.FEATURED ? eO.DISCOVERED : s;
                    if (null == s) return x(e), !1;
                    let r = document.getElementById((0, tJ.sT)(e, l ?? void 0));
                    return (
                        null != r &&
                        (g(e),
                        v(l),
                        C((e) => e + 1),
                        r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        b({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || (g(null), v(null));
                            },
                        }),
                        !0)
                    );
                },
                [g, C, b, m, n, x, _, E],
            );
        i.useImperativeHandle(t, () => ({ scrollToQuest: R }), [R]),
            i.useLayoutEffect(() => {
                if (null == s) {
                    A.current = null;
                    return;
                }
                A.current !== s && R(s, !0) && (A.current = s);
            }, [s, R]);
        let M = i.useMemo(
                () => ({
                    targetQuestId: f,
                    targetSectionIdentifier: j,
                    highlightCount: S,
                    highlightAnimationProgress: I,
                }),
                [f, j, S, I],
            ),
            Q = i.useMemo(
                () =>
                    d.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === eO.FEATURED;
                    }),
                [d],
            );
        return (0, r.jsx)(nb.Provider, {
            value: M,
            children: (0, r.jsx)("div", {
                className: o()(n$.kL, l, { [n$.Sy]: !a }),
                ref: h,
                children: m
                    ? (0, r.jsx)(nU, { role: "status", "aria-label": eA.intl.string(eA.t.ZTNur7) })
                    : d.length > 0
                      ? d.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: n$.p9,
                                    children: [
                                        (0, r.jsx)(ed.D, {
                                            variant: "heading-lg/semibold",
                                            className: n$.Gf,
                                            children: eA.intl.string(l),
                                        }),
                                        s === eO.FEATURED && u && c
                                            ? (0, r.jsx)(nL, {
                                                  questIds: n,
                                                  setMaxRowIndex: T,
                                                  containerWidth: _,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(nD, {
                                                  questIds: n,
                                                  rowIndex: t < Q ? t : t + p,
                                                  sectionIdentifier: s,
                                                  questContent: nY[s],
                                              }),
                                    ],
                                },
                                s,
                            );
                        })
                      : (0, r.jsxs)("div", {
                            className: n$.y7,
                            children: [
                                (0, r.jsx)(ed.D, {
                                    variant: "heading-xl/semibold",
                                    children: eA.intl.string(eA.t.NqFP6z),
                                }),
                                (0, r.jsx)($.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: eA.intl.string(eA.t.LhD4yH),
                                }),
                            ],
                        }),
            }),
        });
    });
var nZ = s(353640),
    n0 = s(121894),
    n1 = s(851936);
let n2 = (0, nZ.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, n1.L)({ location: ti.rE.QUEST_HOME_DESKTOP });
        if (s.info === e4.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, n0.r)(() => e(l));
    },
}));
var n7 = s(516226),
    n3 = s(14311),
    n8 = s(604880),
    n6 = s(318808);
function n4(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, sm.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: n3.MY,
        children: [
            (0, r.jsx)("img", { className: n3.Bg, src: n6.Ay, alt: "" }),
            (0, r.jsx)("div", { className: n3.r$, children: (0, r.jsx)("img", { src: n8, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: n3.Nr,
                children: [
                    (0, r.jsx)(ed.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: n3.ky,
                        children: eA.intl.string(eA.t.GXmn57),
                    }),
                    (0, r.jsx)($.E, {
                        variant: "text-md/normal",
                        className: n3.G3,
                        children: eA.intl.string(eA.t.bWuKqh),
                    }),
                    (0, r.jsx)(g.$, {
                        variant: "primary",
                        text: eA.intl.string(eA.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function n5(e) {
    let { alt: t, ariaLabel: s, ariaHidden: n, role: l, width: i = 288, height: a = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: i, height: a },
        src: "https://cdn.discordapp.com/assets/content/bcf3b3d09bc5184860051e378d0e0d815edeaffb108593db1d2bb64ae405927f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": n,
        role: l ?? "img",
    });
}
var n9 = s(843121);
let le = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, ej.C)(),
        { useNewTile: n } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = W.Mk.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        o = l === W.d.LARGE_MASK_MARGIN,
        u = ne(a, eR(s, o), 20, 3);
    return (0, r.jsxs)(v.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: n9.kL,
        ref: a,
        children: [
            (0, r.jsxs)(ed.D, {
                variant: "heading-lg/medium",
                children: [eA.intl.string(eA.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(v.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: n9.y7,
                      children: [
                          (0, r.jsx)(n5, { alt: eA.intl.string(eA.t["Xe+fJM"]) }),
                          (0, r.jsxs)(v.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(ed.D, {
                                      variant: "heading-lg/medium",
                                      children: eA.intl.string(eA.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(ed.D, {
                                      variant: "heading-sm/medium",
                                      children: eA.intl.string(eA.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: n9.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${eR(s, o)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== u &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        sM,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n9.d,
                                            sourceQuestContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        tJ.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: n9.d,
                                            sourceQuestContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var lt = s(649852),
    ls = s.n(lt),
    ln = s(379078),
    ll = s(704554),
    lr = s(823784);
let li = {
        searchType: ln.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(sW.Vq);
        },
        sortType: ln.r.JARO_WINKLER,
        throttleMs: 200,
    },
    la = function () {
        let [e, t] = i.useState(""),
            [s, n] = i.useState(null),
            l = (0, E.yK)([Z.A], () =>
                (0, K.mn)(Array.from(Z.A.quests.values()), { sortMethod: ti.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => ls()(en.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, lr.tv)();
                null != e &&
                    (0, en.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, lr.l6)();
            }, [o]),
            c = i.useCallback(() => {
                u(), t("");
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
                                  .filter(sW.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: s } = (0, lr.$N)();
                    s && (0, en.OQ)({ searchSessionId: t.uuid }),
                        o({
                            searchSessionId: t.uuid,
                            searchQuery: r,
                            searchQueryLength: r.length,
                            resultsCount: e.length,
                            hasResults: e.length > 0,
                        });
                } else c();
            },
            [a, r, o, c],
        );
        return (0, ll.RT)(r, l, d, li), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: c };
    };
var lo = s(631001),
    lu = s(758836),
    lc = s(613057),
    ld = s(553576);
let lm = i.createContext({});
function lE(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lm);
    return (0, r.jsxs)(ep.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(U.A, { className: ld.Jo, innerClassName: ld.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lh(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(H.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function lx(e) {
    let { onLoadComplete: t, className: s, isVirtualCurrencyEnabled: n } = e,
        l = (0, E.bG)([_.Ay], () => _.Ay.useReducedMotion),
        a = (0, E.bG)([P.A], () => P.A.isFocused()),
        { ref: o, inViewport: u } = (0, sG.p)(),
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
        return (0, r.jsx)(z._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (n) =>
                (0, r.jsx)(b.A, {
                    ref: (e) => {
                        (c.current = e), (o.current = e), (n.current = e);
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
    return (0, r.jsx)(z._M, {
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
function lf(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(ld.Tv, { [ld.lJ]: s }),
        children: [
            (0, r.jsx)(to, {}),
            (0, r.jsx)("div", { className: o()(ld.nz, { [ld.ZZ]: s }) }),
            (0, r.jsx)(lx, {
                onLoadComplete: t,
                className: o()(ld.Fe, { [ld.H4]: s, [ld.Q8]: !s }),
                isVirtualCurrencyEnabled: s,
            }),
        ],
    });
}
function lg(e) {
    let { className: t, onAssetLoad: s } = e,
        { enabled: n } = V.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        l = !n,
        a = i.useCallback(() => {
            l ? window.open(eE.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(eE.MVz.QUESTS_LEARN_MORE));
        }, [l]);
    return (0, r.jsx)(ef, {
        className: t,
        adContentId: l ? ti.yr : ti.uz,
        title: l ? eA.intl.format(eA.t.BCBIlp, {}) : eA.intl.format(eA.t.lmMBfy, {}),
        subtitle: l ? eA.intl.format(eA.t.U9FY0J, {}) : eA.intl.string(eA.t.oWCrBq),
        buttons: l
            ? (0, r.jsxs)(f.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: eA.intl.string(eA.t["1Wm127"]),
                          onClick: () =>
                              (0, O.Cz)({
                                  tab: lu.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: N.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: eA.intl.string(eA.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: eA.intl.string(eA.t.hvVgAZ),
                  onClick: a,
                  icon: j.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lf, { onAssetLoad: s, isVirtualCurrencyEnabled: l }),
    });
}
function lj(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, z.zT)(),
        c = l || u;
    return (0, r.jsxs)("div", {
        className: o()(ld.iS, { [ld.R]: i }),
        children: [
            c && (0, r.jsx)(tE, {}),
            !l &&
                (null == n || a
                    ? (0, r.jsx)(lg, { className: o()({ [ld.lX]: u }), onAssetLoad: t })
                    : (0, r.jsx)(tm, { hero: n, isBannerLoading: u, onQuestCtaClick: s })),
        ],
    });
}
let lv = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(s.search).getAll(K.L1.AD_CREATIVE_IDS), [s.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        x = (0, E.bG)([A.A], () => A.A.getState("quests")),
        {
            selectedTab: f,
            onSelectTab: g,
            tabs: j,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = lo.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, K.p5)(),
                { enabled: r } = W.Mk.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                lo.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = i.useCallback((e) => {
                lo.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: K.NC.ALL, label: o ? eA.intl.string(eA.t.Jt6u7B) : eA.intl.string(eA.t["0SzXmi"]) },
                            t
                                ? {
                                      id: K.NC.CLAIMED,
                                      label: o ? eA.intl.string(eA.t["3TVY/R"]) : eA.intl.string(eA.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: K.NC.PREVIEW_TOOL, label: eA.intl.string(eA.t.BDUDau) } : null,
                        ].filter(sW.Vq),
                    [t, l, o],
                ),
                selectedTab: s,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: _, setQuery: b, matchingQuestIds: M, onSearchClose: Q } = la(),
        { onScroll: U } = (0, y.G)(),
        H = G.A.getState().getUtmCurrentContext(),
        D = n2((e) => e.registerAssetLoad),
        P = i.useRef(H);
    i.useEffect(() => {
        P.current = H;
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
                    tab: f,
                },
            });
        }, [f]),
        (0, I.HU)({ location: eA.intl.string(eA.t.JALI2K) });
    let k = i.useRef(null),
        { enabled: w } = W.Mk.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: V } = W.aD.useConfig({ location: ti.rE.QUEST_HOME_DESKTOP }),
        $ = w || V,
        Y = i.useRef(null),
        J = i.useCallback((e) => {
            Y.current?.scrollToQuest(e);
        }, []),
        X = i.useMemo(() => ((0, B.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: Z, isLoading: ee } = (0, th.lg)(l[0] ?? null),
        et = i.useCallback(() => {
            (0, q.Y)({
                pageType: eE.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eE.JJy.ORBS_BALANCE_MENU,
                ctaObject: eE.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, O.Cz)({ tab: lu.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU });
        }, []);
    i.useEffect(() => {
        (0, C.I)(eE.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            L.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != x) return;
            let e = new URLSearchParams(s.search),
                l = e.get(K.L1.TAB);
            if (l === K.NC.PREVIEW_TOOL) {
                let t = e.get(K.L1.QUEST_ID);
                T.A.openNativeAppModal("quests", eE.e$_.DEEP_LINK, {
                    type: lc.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== K.NC.PREVIEW_TOOL) {
                let t = (0, B.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(K.L1.SORT),
                    r = e.get(K.L1.FILTER),
                    i = e.get(K.L1.AD_CREATIVE_IDS);
                T.A.openNativeAppModal("quests", eE.e$_.DEEP_LINK, {
                    type: lc.XK.QUEST_HOME,
                    params: { questId: (0, B.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, x, n.action, s.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let es = i.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), k.current?.scrollToTop({ animate: !1 }), g(e), Q();
            },
            [n, g, Q],
        ),
        en = i.useMemo(() => null != M && $, [M, $]),
        el = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        er = i.useMemo(() => ({ onScroll: U, scrollerRef: k }), [U, k]),
        ei = (0, W.Qj)() && 0 === l.length;
    return a
        ? (0, r.jsx)(n4, { adCreativeIds: l })
        : (0, r.jsx)(n7.M.Provider, {
              value: el,
              children: (0, r.jsx)(lm.Provider, {
                  value: er,
                  children: (0, r.jsx)("div", {
                      className: o()(ld.kL, { [ld.KY]: !t }),
                      children: (0, r.jsxs)(lE, {
                          header: (0, r.jsx)(lh, {
                              selectedTab: f,
                              onSelectTab: es,
                              tabs: j,
                              endContent: (0, r.jsxs)(v.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      $ &&
                                          (0, r.jsx)(S.I, {
                                              query: _,
                                              onChange: b,
                                              placeholder: eA.intl.string(eA.t.y10TI2),
                                              onClear: Q,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(F.SS, {
                                          analyticsPage: eE.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: F.cP.END,
                                          ctaText: eA.intl.string(eA.t["J+vlIR"]),
                                          ctaOnClick: et,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              f === K.NC.ALL &&
                              !ei &&
                              (0, r.jsx)(
                                  z.y5,
                                  {
                                      source: ti.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: Z?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: (0, r.jsx)(lj, {
                                          onAssetLoad: D,
                                          onQuestCtaClick: J,
                                          hasSearchResults: en,
                                          questHomeHero: Z,
                                          isLoadingQuestHomeHero: ee,
                                      }),
                                  },
                                  Z?.id,
                              ),
                          children: [
                              en && null != M && (0, r.jsx)(le, { matchingQuestIds: M }),
                              f === K.NC.CLAIMED
                                  ? (0, r.jsx)(nI, { onSelectTab: es, className: en ? ld.R : void 0 })
                                  : f === K.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(sB, { className: en ? ld.R : void 0 })
                                    : $
                                      ? (0, r.jsx)(nX, {
                                            className: en ? ld.R : void 0,
                                            ref: Y,
                                            deepLinkedQuestId: X,
                                            isLoadingQuestHomeHero: !ei && ee,
                                            withQuestHomeHero: !ei,
                                        })
                                      : (0, r.jsx)(nc, { ref: Y }),
                          ],
                      }),
                  }),
              }),
          });
};
