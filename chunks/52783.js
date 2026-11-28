let s;
(n.r(t), n.d(t, { default: () => l3 }), n(323874), n(14289), n(35956));
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    o = n(806163),
    c = n(613412),
    u = n(607399),
    d = n(323889),
    m = n(855986),
    h = n(554146),
    E = n(577473),
    g = n(825484),
    x = n(821609),
    f = n(509434),
    v = n(331322),
    j = n(683438),
    _ = n(944791),
    C = n(775602),
    S = n(793574),
    N = n(139286),
    p = n(197111),
    O = n(10088),
    T = n(969935),
    b = n(726249),
    A = n(607470),
    I = n(826673),
    R = n(840251),
    H = n(688151);
let y = new R.E([], H.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var M = n(899647),
    L = n(979590),
    Q = n(651266),
    U = n(783531),
    F = n(201805),
    D = n(855531),
    k = n(76229);
function P() {
    let e = (0, F.T2)();
    return (0, D.kV)(e)
        ? (0, l.jsx)("div", {
              className: k.q,
              children: (0, l.jsx)("img", { className: k.w, src: "/assets/c52c36cb76d57790.png", alt: "" }),
          })
        : null;
}
var q = n(189916),
    w = n(47671),
    B = n(644235),
    V = n(253932);
function W() {
    let e = (0, m.bG)([w.A], () => null != w.A.gradientPreset),
        t = (0, B.lo)(V.eh.useSetting().customUserThemeSettings);
    return e || t;
}
var G = n(594906);
function z(e) {
    let { hero: t } = e,
        n = W();
    return !(0, q.Tn)(t) || n ? null : (0, l.jsx)("div", { className: G.D, "aria-hidden": !0 });
}
var K = n(156150),
    $ = n(62617);
function Y(e) {
    let { alt: t, ariaLabel: n, ariaHidden: s, role: i, width: a, height: o, className: c, style: u } = e,
        d = r.useMemo(
            () => (0, $.H)({ width: a, height: o, intrinsicWidth: 182, intrinsicHeight: 78, style: u }),
            [a, o, u],
        );
    return (0, l.jsx)("img", {
        style: d,
        src: "https://cdn.discordapp.com/assets/content/3517a070223ca50267cf58285f0efed6b78c7047b963d66faf823d10de79c46c.svg",
        className: (0, $.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
var X = n(834730),
    J = n(866323),
    Z = n(506988),
    ee = n(590202),
    et = n(332560),
    en = n(196765);
let es = (0, en.v)((e) => ({
    isIntroCardScrolledPast: !1,
    setIsIntroCardScrolledPast: (t) => e({ isIntroCardScrolledPast: t }),
}));
var el = n(484063),
    er = n(464066),
    ei = n(792996),
    ea = n(90308);
let eo = { transform: "translateY(-100%)" },
    ec = { transform: "translateY(0%)" };
function eu(e) {
    let { style: t } = e,
        n = r.useCallback(() => {
            ((0, et.iM)({ content: Z.uF.QUEST_HOME_HERO_STICKY_HEADER, questContentCTA: ee.Cy.OPEN_AD_PERK_MODAL }),
                (0, el.A)({ sourceQuestContent: Z.uF.QUEST_HOME_HERO_STICKY_HEADER }));
        }, []);
    return (0, l.jsxs)(K.animated.div, {
        className: ea.M0,
        style: t,
        children: [
            (0, l.jsxs)("div", {
                className: ea.i8,
                children: [
                    (0, l.jsx)(Y, { alt: "", ariaHidden: !0, height: 39, className: ea.$e }),
                    (0, l.jsx)(X.E, {
                        variant: "body-sm/semibold",
                        color: "text-overlay-light",
                        lineClamp: 1,
                        className: ea.DD,
                        children: ei.intl.string(er.default["fShp/D"]),
                    }),
                ],
            }),
            (0, l.jsx)(x.$, {
                variant: "overlay-primary",
                size: "sm",
                text: ei.intl.string(er.default["KX1/jp"]),
                onClick: n,
            }),
        ],
    });
}
function ed() {
    let e = es((e) => e.isIntroCardScrolledPast);
    r.useEffect(() => {
        e && (0, et.TW)({ content: Z.uF.QUEST_HOME_HERO_STICKY_HEADER });
    }, [e]);
    let t = (0, J.p)(e, { from: eo, enter: ec, leave: eo, config: K.config.stiff });
    return (0, l.jsx)("div", {
        className: ea.kL,
        children: (0, l.jsx)("div", { className: ea.$Q, children: t((e, t) => t && (0, l.jsx)(eu, { style: e })) }),
    });
}
var em = n(62234),
    eh = n(210714),
    eE = n(318346),
    eg = n(435775),
    ex = n(531685),
    ef = n(676279),
    ev = n(975571),
    ej = n(240248),
    e_ = n(87549),
    eC = n(945810);
let eS = (0, eC.mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eN = n(860996),
    ep = n(61387),
    eO = n(557637),
    eT = n(939249),
    eb = n(289873),
    eA = n(438457),
    eI = n(144779),
    eR = n(122760),
    eH = n(914313),
    ey = n(760914),
    eM = n(18437),
    eL = n(574112),
    eQ = n(415441),
    eU = n(280905),
    eF = n(139384),
    eD = n(43990),
    ek = n(534514),
    eP = n(770178),
    eq = n(561844),
    ew = n(652215),
    eB = n(691388);
function eV(e, t) {
    let { row_index: n, ...s } = (0, ee.fF)(Z.uF.QUEST_HOME_HERO);
    (0, eq.Qg)({
        adContentId: e,
        adCreativeType: d.p.QUEST_HOME_HERO,
        event: t,
        properties: s,
        sourceQuestContent: Z.uF.QUEST_HOME_HERO,
    });
}
let eW = function (e) {
    let {
            adContentId: t,
            topContent: n,
            title: s,
            subtitle: i,
            buttons: o,
            background: c,
            className: u,
            overlay: d,
            ref: m,
        } = e,
        [h, E] = r.useState("display-lg"),
        g = r.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, eP.w)(g, [], { fireOnMount: !0 }),
        f = r.useCallback(() => eV(t, ew.HAw.QUEST_HOVER), [t]),
        j = r.useCallback(() => eV(t, ew.HAw.QUEST_HOVER_OFF), [t]);
    return (0, l.jsx)(eD.N, {
        theme: ew.NJ8.ONYX,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, l.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: a()(eB.iE, e, u),
                onMouseEnter: f,
                onMouseLeave: j,
                ref: (e) => {
                    ((x.current = e), "function" == typeof m ? m(e) : null != m && (m.current = e));
                },
                children: (0, l.jsxs)("div", {
                    className: eB.FG,
                    children: [
                        d,
                        (0, l.jsxs)(v.B, {
                            className: a()(eB.Qs, { [eB.X]: null != d && !1 !== d }),
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, l.jsxs)(v.B, {
                                    className: eB.yp,
                                    gap: 16,
                                    children: [
                                        (0, l.jsxs)(v.B, {
                                            gap: 8,
                                            children: [
                                                (0, l.jsx)(ek.D, {
                                                    color: "text-strong",
                                                    variant: h,
                                                    className: eB.DD,
                                                    children: s,
                                                }),
                                                (0, l.jsx)(X.E, {
                                                    color: "text-strong",
                                                    variant: "body-md/normal",
                                                    className: eB.VA,
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                        o,
                                    ],
                                }),
                            ],
                        }),
                        c,
                    ],
                }),
            }),
    });
};
var eG = n(113597);
(n(134528), n(947204));
var ez = n(749401),
    eK = n(635377),
    e$ = n.n(eK),
    eY = n(998304),
    eX = n(515718);
let eJ = new (e$())({ max: 50 });
var eZ = n(49491),
    e0 = n(454908),
    e1 = n(646514),
    e4 = n(169099),
    e2 = n(650809),
    e5 = n(48507),
    e8 = n(111159),
    e6 = n(717421),
    e7 = n(559106),
    e3 = n(516521);
n(321073);
var e9 = n(535185),
    te = n(408278),
    tt = n(548411),
    tn = n(554830),
    ts = n(321503),
    tl = n(709245),
    tr = n(915850);
let ti = "data-scroll-target",
    ta = `[${ti}]`,
    to = { anchors: [], windowSizes: [] },
    tc = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])',
    tu = { overflowX: "hidden" };
function td(e, t, n) {
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
let tm = r.memo(function (e) {
    let {
            children: t,
            className: n,
            itemSelector: s = ta,
            maskWidth: i = 24,
            overflowAmount: o = 0,
            maskMarginMultiplier: c = 1,
            disableUserScroll: u = !1,
            groupedArrows: d = !1,
            scrollerRef: h,
            controlRef: E,
            onScrollStart: g,
            onScrollEnd: x,
            singleStep: f = !1,
            autoCycle: v = !1,
        } = e,
        j = r.useRef(null),
        _ = r.useCallback(
            (e) => {
                ((j.current = e), null != h && (h.current = e));
            },
            [h],
        ),
        S = r.useRef(null),
        N = r.useRef(0),
        p = r.useRef(null),
        [O, T] = r.useState(!1),
        [b, A] = r.useState(!1),
        [I, R] = r.useState(!0),
        [H, y] = r.useState([]),
        [M, L] = r.useState([]),
        Q = (0, m.bG)([C.Ay], () => C.Ay.useReducedMotion) ? "auto" : "smooth",
        U = r.useCallback(() => {
            let e = j.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (T(e.scrollLeft > 0), A(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        F = r.useCallback(() => {
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
                if (null == a || null == o || a.scrollWidth <= a.clientWidth) return to;
                let c = Array.from(a.querySelectorAll(s));
                if (0 === c.length) return to;
                let u = a.clientWidth - 2 * r * l;
                function d(e) {
                    return e.offsetLeft + e.offsetWidth;
                }
                let m = i ? [] : [0],
                    h = [],
                    E = 0;
                for (let e = 0; e < c.length; e++) {
                    E < e && (E = e);
                    let t = c[e].offsetLeft;
                    for (; E + 1 < c.length && d(c[E + 1]) - t <= u;) E++;
                    let n = E - e + 1;
                    if ((h.push(n), i)) {
                        m.push((0, tl.Rg)(a, c[e], o));
                        continue;
                    }
                    if (E === c.length - 1) break;
                    e > 0 && m.push((t + d(c[E])) / 2);
                }
                return h.length < 2 ? to : (i || m.push(a.scrollWidth), { anchors: m, windowSizes: h });
            })({
                scrollerRef: j,
                containerRef: p,
                itemSelector: s,
                maskWidth: i,
                maskMarginMultiplier: c,
                singleStep: f,
            });
            (L(t), y((t) => (t.length === e.length && t.every((t, n) => t === e[n]) ? t : e)));
        }, [i, s, c, f, y]),
        D = r.useCallback(() => {
            if (null == p.current || p.current?.clientWidth === 0) return R(!0);
            R(p.current?.clientWidth >= 1260);
        }, [p]),
        k = r.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    s = j.current?.getScrollerNode();
                if (null == s || H.length < 2 || (null != g && !g(e * n))) return !1;
                let { currentIndex: l, scrollLefts: r } = td(s, H, f),
                    i = f ? n : (M[l] ?? 1),
                    a = Math.max(0, Math.min(H.length - 1, l + e * i));
                return ((S.current = t), s.scrollTo({ left: r[a], behavior: Q }), !0);
            },
            [Q, H, M, f, g],
        ),
        P = (function (e) {
            let { isEnabled: t, advance: n } = e,
                s = r.useRef(null),
                l = r.useCallback(() => {
                    t && n(1, ee.pk.AUTO);
                }, [t, n]),
                i = r.useCallback(() => {
                    t &&
                        null != s.current &&
                        (window.clearInterval(s.current), (s.current = window.setInterval(l, 3500)));
                }, [t, l]);
            return (
                r.useEffect(
                    () => (
                        t && (s.current = window.setInterval(l, 3500)),
                        () => {
                            null != s.current && window.clearInterval(s.current);
                        }
                    ),
                    [t, l],
                ),
                i
            );
        })({ isEnabled: v, advance: k }),
        q = r.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                k(e, t, n) && P();
            },
            [k, P],
        ),
        w = r.useCallback(
            (e) => {
                0 !== e && q(e > 0 ? 1 : -1, ee.pk.AUTO, Math.abs(e));
            },
            [q],
        );
    r.useImperativeHandle(E, () => ({ scrollBySteps: w }), [w]);
    let B = r.useCallback(
            (e, t) => {
                let n = j.current?.getScrollerNode();
                if (null == n || null == e || !n.contains(e)) return;
                let s = n.getBoundingClientRect(),
                    l = e.getBoundingClientRect(),
                    r = s.left + i - l.left,
                    a = l.right - (s.right - i);
                (r <= 0 && a <= 0) ||
                    ((S.current = ee.pk.MANUAL),
                    r > 0
                        ? n.scrollTo({ left: n.scrollLeft - r, behavior: t })
                        : a > 0 && n.scrollTo({ left: n.scrollLeft + a, behavior: t }));
            },
            [i],
        ),
        V = r.useCallback(
            (e) => {
                let t = e.target;
                if (!t.matches(":focus-visible")) return;
                let n = t.closest(s);
                null != n && B(n, Q);
            },
            [s, B, Q],
        ),
        W = r.useCallback(() => {
            let e = j.current?.getScrollerNode();
            if (null == e) return;
            let { currentIndex: t } = td(e, H, f),
                n = S.current ?? ee.pk.MANUAL;
            S.current = null;
            let s = N.current;
            N.current = e.scrollLeft;
            let l = e.scrollLeft > s ? ee.VU.RIGHT : ee.VU.LEFT,
                r = M[t] ?? 1;
            x?.({
                scrollingType: n,
                scrollWindowStartIndex: t,
                scrollWindowEndIndex: t + r - 1,
                scrollWindowSize: r,
                scrollingDirection: l,
            });
        }, [x, H, M, f]),
        G = r.useCallback(
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
                    o = null == a ? null : a.matches(tc) ? a : a.querySelector(tc);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && B(a, "instant"));
            },
            [s, B],
        ),
        z = r.useCallback(() => {
            (U(), F(), D());
        }, [U, F, D]);
    (0, e9.g)(p, z, [], { fireOnMount: !0 });
    let K = o > 0,
        $ = r.useMemo(
            () => ({
                "--custom-scroller-mask-width": `${i}px`,
                "--custom-scroller-overflow-amount": `${o}px`,
                "--custom-scroller-scroll-behavior": Q,
            }),
            [i, o, Q],
        );
    return (0, l.jsxs)("div", {
        className: a()(n, tr.m7),
        ref: p,
        style: $,
        children: [
            d &&
                (0, l.jsxs)("div", {
                    className: tr.rU,
                    children: [
                        (0, l.jsx)(te.K, {
                            icon: tt.ArrowLargeLeftIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(-1, ee.pk.ARROW),
                            disabled: !O,
                            "aria-label": ei.intl.string(ei.t.vgfxaA),
                            tabIndex: -1,
                        }),
                        (0, l.jsx)(te.K, {
                            icon: tn.ArrowLargeRightIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(1, ee.pk.ARROW),
                            disabled: !b,
                            "aria-label": ei.intl.string(ei.t.XiOHRX),
                            tabIndex: -1,
                        }),
                    ],
                }),
            !d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("div", {
                            className: a()(tr.k9, tr.RW, { [tr.Q2]: O }),
                            "aria-hidden": !0,
                            children: (0, l.jsx)(te.K, {
                                icon: tt.ArrowLargeLeftIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(-1, ee.pk.ARROW),
                                disabled: !O,
                                "aria-label": ei.intl.string(ei.t.vgfxaA),
                                tabIndex: -1,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: a()(tr.k9, tr.K3, { [tr.Q2]: b }),
                            "aria-hidden": !0,
                            children: (0, l.jsx)(te.K, {
                                icon: tn.ArrowLargeRightIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(1, ee.pk.ARROW),
                                disabled: !b,
                                tabIndex: -1,
                                "aria-label": ei.intl.string(ei.t.XiOHRX),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: a()({ [tr.sF]: O && I, [tr.RC]: b && I, [tr.Ni]: K && !O, [tr.GA]: K && !b }),
                children: (0, l.jsx)(e3.zC, {
                    ref: _,
                    orientation: "horizontal",
                    onScroll: U,
                    onScrollEnd: W,
                    onFocusCapture: V,
                    onKeyDown: G,
                    style: u ? tu : void 0,
                    className: a()({ [tr.x2]: K, [tr.$o]: f }, tr.XG),
                    children: (0, l.jsxs)(ts.X.Provider, {
                        value: j,
                        children: [
                            t,
                            !f &&
                                H.map((e, t) =>
                                    (0, l.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: tr.fw, style: { insetInlineStart: `${e}px` } },
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
var th = n(440703),
    tE = n(731355),
    tg = n(621466),
    tx = n(805251),
    tf = n(406810),
    tv = n(628284),
    tj = n(65154),
    t_ = n(687966),
    tC = n(155718),
    tS = n(496431),
    tN = n(640708),
    tp = n(287809),
    tO = n(5377),
    tT = n(927813),
    tb = n(541830),
    tA = n(971649),
    tI = n(651892),
    tR = n(417404),
    tH = n(814793),
    ty = n(453384),
    tM = n(639701),
    tL = n(398025),
    tQ = n(221596),
    tU = n(818348),
    tF = n(499621);
function tD(e) {
    let [t, n] = r.useState(!1),
        s = r.useCallback(() => {
            t || (n(!0), e?.(!0));
        }, [t, e]),
        l = r.useCallback(() => {
            t && (n(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: s, onMouseLeave: l, onFocus: s, onBlur: l } };
}
function tk(e) {
    let { hero: t, contentPosition: n, impressionRef: s } = e,
        i = r.useRef(null),
        { isHovering: o, hoverProps: c } = tD(
            r.useCallback(
                (e) => {
                    (0, eq.Qg)({
                        adContentId: t.id,
                        adCreativeType: d.p.QUEST_HOME_HERO,
                        event: e ? ew.HAw.QUEST_HOVER : ew.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Z.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ee.jO)(Z.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        );
    r.useEffect(() => {
        let e = i.current;
        (0, tg.vq)(e, HTMLVideoElement) && (o ? ((e.currentTime = 0), e.play().catch(tU.tE)) : e.pause());
    }, [o]);
    let { hoverSpring: u } = (0, e6.z)({ hoverSpring: +!!o, config: K.config.gentle }),
        m = r.useCallback(() => {
            (0, eL._Q)(
                { adContentId: t.id, adCreativeType: d.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: Z.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ee.Cy.OPEN_GAME_LINK,
                    position: n,
                    impressionId: s.current?.getId(),
                    sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, n, s]);
    return (0, l.jsxs)(eT.D, {
        tag: "div",
        className: a()(tF.FW, tF.Bm),
        onClick: m,
        "aria-label": t.cta.buttonLabel,
        [ti]: !0,
        ...c,
        children: [
            (0, l.jsx)("div", {
                className: tF.Ve,
                children: (0, l.jsx)(eQ.N, {
                    showVideo: !0,
                    assetRef: i,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: a()(tF.pv, tF.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: a()(tF.pv, tF.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, l.jsx)(K.animated.div, {
                className: tF.hn,
                style: { transform: u.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, l.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), m());
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function tP(e) {
    let { hero: t, game: n, contentPosition: s, shelfImage: i, impressionRef: o } = e,
        c = r.useRef(null),
        { isHovering: u, hoverProps: m } = tD(
            r.useCallback(
                (e) => {
                    (0, eq.Qg)({
                        adContentId: t.id,
                        adCreativeType: d.p.QUEST_HOME_HERO,
                        event: e ? ew.HAw.QUEST_HOVER : ew.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Z.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ee.jO)(Z.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    r.useEffect(() => {
        let e = c.current;
        (0, tg.vq)(e, HTMLVideoElement) && (u ? ((e.currentTime = 0), e.play().catch(tU.tE)) : e.pause());
    }, [u]);
    let h = r.useCallback(() => {
            (0, eL._Q)(
                { adContentId: t.id, adCreativeType: d.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: Z.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ee.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: o.current?.getId(),
                    sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, o]),
        E = r.useRef(null),
        [g, f] = r.useState({ top: !1, bottom: !1 }),
        v = r.useCallback(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                n = e.getDistanceFromBottom() > 4;
            f((e) => (e.top === t && e.bottom === n ? e : { top: t, bottom: n }));
        }, []);
    r.useLayoutEffect(() => {
        v();
    }, [v]);
    let { topFade: j, bottomFade: _ } = (0, e6.z)({
            topFade: +!!g.top,
            bottomFade: +!!g.bottom,
            config: { ...K.config.gentle, duration: 100 },
        }),
        C = r.useMemo(() => {
            let e = null != n.firstReleaseDate ? new Date(n.firstReleaseDate).getFullYear() : 0 / 0,
                t = isNaN(e) ? null : e,
                s = n.genres.at(0);
            return [
                t,
                null != s ? (0, tb.du)(s) : null,
                n.getCompanyByRole(tC.wk.DEVELOPER).at(0)?.name ?? null,
            ].filter((e) => null != e);
        }, [n]),
        S = r.useMemo(() => C.length > 0, [C]);
    return (0, l.jsxs)(eT.D, {
        tag: "div",
        className: a()(tF.FW, tF.n7),
        onClick: h,
        [ti]: !0,
        ...m,
        children: [
            (0, l.jsx)("div", { className: tF.hu }),
            (0, l.jsx)("div", {
                className: tF.fQ,
                children: (0, l.jsx)(eQ.N, {
                    showVideo: !0,
                    assetRef: c,
                    imageAsset:
                        null != i
                            ? {
                                  asset: { url: i, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: a()(tF.pv, tF.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: a()(tF.pv, tF.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, l.jsxs)("div", {
                className: tF.iq,
                children: [
                    (0, l.jsxs)("div", {
                        className: tF.o7,
                        children: [
                            (0, l.jsx)(ek.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: n.name,
                            }),
                            S &&
                                (0, l.jsx)("p", {
                                    className: tF.c9,
                                    children: C.map((e, t) =>
                                        (0, l.jsxs)(
                                            r.Fragment,
                                            {
                                                children: [
                                                    (0, l.jsx)(X.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: e,
                                                    }),
                                                    t < C.length - 1 && (0, l.jsx)(tN.A, { width: 3, height: 3 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    (0, l.jsx)(K.animated.div, {
                        className: tF.hX,
                        style: {
                            maskImage: (0, K.to)(
                                [j, _],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, l.jsx)(e7.vN, {
                            children: (0, l.jsx)(e3.Ch, {
                                ref: E,
                                className: tF.hw,
                                onScroll: v,
                                fade: !u,
                                children: (0, l.jsx)(X.E, {
                                    variant: "body-md/normal",
                                    color: "text-muted",
                                    className: tF.W1,
                                    children: n.description,
                                }),
                            }),
                        }),
                    }),
                    (0, l.jsx)(x.$, {
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
function tq(e) {
    let { heroId: t, quest: n, onQuestCtaClick: s, contentPosition: i, className: o } = e,
        c = r.useMemo(() => new Date(n.config.expiresAt), [n.config.expiresAt]),
        { days: u, hours: h, minutes: E, seconds: g } = (0, tS.A)(c, tT.A.Millis.MINUTE),
        f = r.useMemo(
            () =>
                (0, tO.uN)(
                    { days: u, hours: h, minutes: E, seconds: g },
                    { days: ei.t["Ux/De1"], hours: ei.t.Lzd5Ie, minutes: ei.t.odmpbP },
                ),
            [u, h, E, g],
        ),
        j = (0, m.bG)([tp.default], () => tp.default.getCurrentUser()),
        _ = r.useMemo(() => (0, tR.mq)(n.config, j), [n.config, j]),
        C = r.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, tI.xv)(e).type) {
                        case th.l.IN_GAME:
                            return ei.intl.string(ei.t["O/J2kr"]);
                        case th.l.COLLECTIBLE:
                            return ei.intl.string(ei.t.Jg17Ut);
                        case th.l.VIRTUAL_CURRENCY:
                            return ei.intl.string(ei.t.ElYQFS);
                        default:
                            return (0, tR.mq)(e, t);
                    }
                })(n.config, j),
            [n.config, j],
        ),
        { completedRatio: S, completedRatioDisplay: N } = (0, ep.O9)(n),
        p = r.useMemo(() => (0, tR.wo)(n.config, j), [n.config, j]),
        O = (0, eM.WS)(),
        T = (0, tA.wW)(),
        { isHovering: b, hoverProps: A } = tD(
            r.useCallback(
                (e) => {
                    O({
                        adContentId: t,
                        relatedQuestId: n.id,
                        adCreativeType: d.p.QUEST_HOME_HERO,
                        event: e ? ew.HAw.QUEST_HOVER : ew.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Z.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ee.jO)(Z.uF.QUEST_HOME_HERO_SHELF),
                            content_position: i,
                        },
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, O, i, n.id],
            ),
        ),
        { hoverSpring: I } = (0, e6.z)({ hoverSpring: +!!b, config: K.config.gentle }),
        R = r.useCallback(() => {
            (s(n.id),
                (0, eA.r)({
                    type: eI.F.CLICK_INTERNAL,
                    adCreativeType: d.p.QUEST_HOME_HERO,
                    adCreativeId: t,
                    relatedQuestId: n.id,
                    questContentCTA: ee.Cy.VIEW_QUESTS,
                    surfaceId: Z.uF.QUEST_HOME_HERO_SHELF,
                    sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: i,
                    impressionId: T(),
                }));
        }, [s, t, n.id, i, T]);
    return (0, l.jsxs)(eT.D, {
        tag: "div",
        className: a()(tF.FW, tF.$R, o),
        onClick: R,
        "aria-label": ei.intl.string(ei.t["th2+0j"]),
        [ti]: !0,
        ...A,
        children: [
            (0, l.jsx)("div", { className: tF.hu }),
            (0, l.jsxs)(v.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, l.jsx)(tx.E, { type: { text: C } }),
                    (0, l.jsx)(K.animated.div, {
                        style: { opacity: (0, tL.a)(I.to([0, 1], [1, 0])) },
                        children: (0, l.jsx)(tx.E, { type: { text: f }, icon: tf.ClockIcon }),
                    }),
                ],
            }),
            (0, l.jsx)(K.animated.div, {
                className: tF.Tr,
                style: { transform: I.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, l.jsx)(ty.A, {
                    percentComplete: S,
                    overlayText: b && null != p ? `${p}` : void 0,
                    size: 120,
                    children: (0, l.jsx)(tM.A, {
                        quest: n,
                        location: tQ.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                        questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: b,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, l.jsx)(K.animated.div, {
                className: tF.tw,
                style: {
                    opacity: (0, tL.a)(I.to([0, 1], [1, 0])),
                    transform: I.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, l.jsxs)(v.B, {
                    gap: 4,
                    children: [
                        (0, l.jsx)(X.E, {
                            variant: "body-md/semibold",
                            color: "text-strong",
                            className: tF.Ht,
                            children: _,
                        }),
                        (0, l.jsxs)(v.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, l.jsxs)(v.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: tF.tv,
                                    children: [
                                        (0, l.jsx)(tv.CircleCheckIcon, {
                                            size: "xs",
                                            color: e1.A.colors.ICON_MUTED.css,
                                            className: tF.K3,
                                        }),
                                        (0, l.jsx)(X.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            className: tF.eA,
                                            children: n.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)(v.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: tF.qB,
                                    children: [
                                        (0, tH.pv)(n.config) === tE.Z.VIDEO
                                            ? (0, l.jsx)(tj.CirclePlayIcon, {
                                                  size: "xs",
                                                  color: e1.A.colors.ICON_MUTED.css,
                                              })
                                            : (0, l.jsx)(t_.GameControllerIcon, {
                                                  size: "xs",
                                                  color: e1.A.colors.ICON_MUTED.css,
                                              }),
                                        (0, l.jsx)(X.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: N,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(K.animated.div, {
                className: tF.um,
                style: { transform: I.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, l.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), R());
                    },
                    text: ei.intl.string(ei.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var tw = n(211824),
    tB = n(164900),
    tV = n(161005);
let tW = [
    { key: "client-theme", icon: e2.PaintPaletteIcon, label: er.default.TTUKuI },
    { key: "display-name-style", icon: e5.LettersIcon, label: ei.t.NEzEws },
    { key: "app-icon", icon: e8.ClydeIcon, label: ei.t.RPh2ou },
];
function tG(e) {
    let { hero: t, contentPosition: n, impressionRef: s } = e,
        i = W(),
        { hoverProps: o } = tD(
            r.useCallback(
                (e) => {
                    (0, eq.Qg)({
                        adContentId: t.id,
                        adCreativeType: d.p.QUEST_HOME_HERO,
                        event: e ? ew.HAw.QUEST_HOVER : ew.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Z.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ee.jO)(Z.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        ),
        c = r.useRef(null),
        [u, m] = r.useState({ top: !1, bottom: !1 }),
        h = r.useCallback(() => {
            let e = c.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                n = e.getDistanceFromBottom() > 4;
            m((e) => (e.top === t && e.bottom === n ? e : { top: t, bottom: n }));
        }, []);
    r.useLayoutEffect(() => {
        h();
    }, [h]);
    let { topFade: E, bottomFade: g } = (0, e6.z)({
            topFade: +!!u.top,
            bottomFade: +!!u.bottom,
            config: { ...K.config.gentle, duration: 100 },
        }),
        f = r.useCallback(() => {
            ((0, eA.r)({
                type: eI.F.CLICK_INTERNAL,
                adCreativeType: d.p.QUEST_HOME_HERO,
                adCreativeId: t.id,
                questContentCTA: ee.Cy.OPEN_AD_PERK_MODAL,
                surfaceId: Z.uF.QUEST_HOME_HERO_SHELF,
                sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                questContentPosition: n,
                impressionId: s.current?.getId(),
            }),
                (0, el.A)({ sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF }));
        }, [t.id, n, s]);
    return (0, l.jsxs)("div", {
        className: a()(tB.Nr, tV.Tp, { [tV.D7]: !i }),
        [ti]: !0,
        ...o,
        children: [
            (0, l.jsxs)("div", {
                className: tB.$_,
                children: [
                    (0, l.jsx)("div", { className: tB.qx }),
                    (0, l.jsx)(e4.r, { alt: "", ariaHidden: !0, width: 244, className: tB.yr }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: tB.Qs,
                children: [
                    (0, l.jsx)(K.animated.div, {
                        className: tB.ns,
                        style: {
                            maskImage: (0, K.to)(
                                [E, g],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, l.jsx)(e7.vN, {
                            children: (0, l.jsx)(e3.zC, {
                                ref: c,
                                className: tB.zH,
                                onScroll: h,
                                children: (0, l.jsxs)(v.B, {
                                    gap: 20,
                                    children: [
                                        (0, l.jsxs)(v.B, {
                                            gap: 12,
                                            children: [
                                                (0, l.jsx)(ek.D, {
                                                    variant: "heading-xl/semibold",
                                                    color: "text-strong",
                                                    children: ei.intl.string(er.default["fShp/D"]),
                                                }),
                                                (0, l.jsx)(X.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-default",
                                                    children: ei.intl.format(er.default.lCtBoO, {
                                                        nonPremiumEndDate: tw.Fg,
                                                        premiumEndDate: tw.zv,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsx)(v.B, {
                                            gap: 8,
                                            children: tW.map((e) => {
                                                let { key: t, icon: n, label: s } = e;
                                                return (0, l.jsxs)(
                                                    v.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        gap: 8,
                                                        children: [
                                                            (0, l.jsx)(n, {
                                                                size: "refresh_sm",
                                                                color: e1.A.colors.ICON_DEFAULT.css,
                                                            }),
                                                            (0, l.jsx)(X.E, {
                                                                variant: "body-sm/medium",
                                                                color: "text-default",
                                                                children: ei.intl.string(s),
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
                    (0, l.jsx)("div", {
                        children: (0, l.jsx)(x.$, {
                            variant: "primary",
                            fullWidth: !0,
                            text: ei.intl.string(er.default["KX1/jp"]),
                            onClick: f,
                        }),
                    }),
                ],
            }),
        ],
    });
}
let tz = [0, 0.01];
var tK = n(418842),
    t$ = n(129230),
    tY = n(403362),
    tX = n(856383);
let tJ = (0, eC.mj)({
    name: "2026-06-hero-shelf-ad-tile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tZ = n(792620);
function t0(e, t, n) {
    if (null != n) {
        if (e) {
            let e = n.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] });
            return {
                "--custom-quest-highlight-blur": (0, K.to)([e], (e) => `${25 * e}px`),
                "--custom-quest-highlight-alpha": (0, K.to)([e], (e) => `${e}`),
            };
        }
        if (t) return { opacity: (0, K.to)([n.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var t1 = n(531525),
    t4 = n(726356);
function t2(e) {
    let { hero: t, shelfQuests: n, isBannerLoading: s, onQuestCtaClick: i } = e,
        o = (0, tK.C)(),
        { enabled: c } = tJ.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        u = (0, D.kV)(t),
        m = W(),
        h = c && !u,
        E = (function (e) {
            let [t, n] = r.useState(null),
                s = r.useContext(ts.X),
                l = es((e) => e.setIsIntroCardScrolledPast);
            return (
                r.useEffect(() => {
                    if (!e || null == t) return;
                    let n = new IntersectionObserver(
                        (e) => {
                            let t = e.at(-1);
                            if (null == t) return;
                            let n = t.rootBounds?.top ?? 0;
                            l(
                                t.boundingClientRect.height > 0 &&
                                    t.intersectionRatio <= 0.01 &&
                                    t.boundingClientRect.top < n,
                            );
                        },
                        { root: s?.current?.getScrollerNode() ?? null, rootMargin: "-30px 0px 0px 0px", threshold: tz },
                    );
                    return (
                        n.observe(t),
                        () => {
                            (n.disconnect(), l(!1));
                        }
                    );
                }, [e, t, s, l]),
                n
            );
        })(u),
        g = r.useMemo(
            () =>
                h
                    ? (n
                          .map((e) => (0, tZ.xc)(e) ?? (0, tZ._3)(e)?.at(0) ?? null)
                          .filter(tY.Vq)
                          .at(0) ?? null)
                    : null,
            [n, h],
        ),
        { isLoading: x, data: f, error: j } = (0, e0.I)(g),
        _ = (0, eZ.A)(f),
        C = h && null != f && !_;
    r.useEffect(() => {
        h &&
            null != g &&
            null != j &&
            (t$.default.track(ew.HAw.AD_ASSET_LOADING_FAILURE, {
                source: tQ.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                ad_creative_id: t.id,
                ad_creative_type: d.p.QUEST_HOME_HERO,
                application_ids: [g],
            }),
            tX.A.captureException(j, { tags: { source: tQ.rE.QUEST_HOME_HERO_SHELF_DESKTOP } }));
    }, [h, j, t.id, g]);
    let S = r.useMemo(
            () => (C ? (null != t.shelfImage ? t.shelfImage : (f?.getCoverURL(512) ?? null)) : null),
            [C, t, f],
        ),
        N = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                [n, s] = r.useState(void 0);
            return (
                r.useEffect(() => {
                    let n = !1;
                    return (
                        (null != e
                            ? (async function (e) {
                                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                                      n = eJ.get(`${e}-${t}`);
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
                                                      ? (n((0, eX.Sf)(l, t, 10)),
                                                        (l.onerror = null),
                                                        (l.onload = null),
                                                        (l = null))
                                                      : s("image is null");
                                              }),
                                              (l.src = e));
                                      })
                                  ).map((e) => {
                                      let [t, n, s] = e;
                                      return (0, eY.Ob)(t, n, s);
                                  });
                                  return (eJ.set(`${e}-${t}`, s), s);
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
            r.useMemo(() => (null != S ? (0, ey.UX)(S, { format: "webp", width: 400, height: 600 }) : null), [S]),
            8,
        ),
        p = r.useMemo(() => (null == N ? null : (0, ez.Z)(N)), [N]),
        O = r.useMemo(() => {
            if (null != p)
                return {
                    "--custom-hero-shelf-scrim-gradient-start": p[0],
                    "--custom-hero-shelf-scrim-gradient-end": p[1],
                };
        }, [p]);
    return s || x
        ? (0, l.jsx)(t5, { numShelfCards: n.length + 1, hasWideLeadingTile: c || u })
        : (0, l.jsx)("div", {
              ref: E,
              children: (0, l.jsx)(tm, {
                  className: a()(t4.vo, { [tV.vo]: u }),
                  overflowAmount: 25,
                  maskWidth: (0, tl.Qm)(o),
                  maskMarginMultiplier: 0.75,
                  children: (0, l.jsxs)(v.B, {
                      className: t4.I2,
                      direction: "horizontal",
                      fullWidth: !1,
                      gap: 20,
                      style: O,
                      children: [
                          u &&
                              (0, l.jsx)(eU.Z, {
                                  adContentId: t.id,
                                  adCreativeType: d.p.QUEST_HOME_HERO,
                                  questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: 0,
                                  sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                                  children: (e, n) =>
                                      (0, l.jsx)("div", {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          children: (0, l.jsx)(tG, { hero: t, contentPosition: 0, impressionRef: n }),
                                      }),
                              }),
                          !c &&
                              !u &&
                              (0, l.jsx)(eU.Z, {
                                  adContentId: t.id,
                                  adCreativeType: d.p.QUEST_HOME_HERO,
                                  questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: 0,
                                  sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                                  children: (e, n) =>
                                      (0, l.jsx)("div", {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          children: (0, l.jsx)(tk, { hero: t, contentPosition: 0, impressionRef: n }),
                                      }),
                              }),
                          C &&
                              (0, l.jsx)(eU.Z, {
                                  adContentId: t.id,
                                  adCreativeType: d.p.QUEST_HOME_HERO,
                                  questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: 0,
                                  sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                                  children: (e, n) =>
                                      (0, l.jsx)("div", {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          children: (0, l.jsx)(tP, {
                                              hero: t,
                                              game: f,
                                              shelfImage: S,
                                              contentPosition: 0,
                                              impressionRef: n,
                                          }),
                                      }),
                              }),
                          n.map((e, n) =>
                              (0, l.jsx)(
                                  eU.Z,
                                  {
                                      adContentId: t.id,
                                      adCreativeType: d.p.QUEST_HOME_HERO,
                                      relatedQuestId: e.id,
                                      questContent: Z.uF.QUEST_HOME_HERO_SHELF,
                                      questContentPosition: n + 1,
                                      sourceQuestContent: Z.uF.QUEST_HOME_HERO_SHELF,
                                      children: (s) =>
                                          (0, l.jsx)("div", {
                                              ref: (e) => {
                                                  s.current = e;
                                              },
                                              children: (0, l.jsx)(tq, {
                                                  heroId: t.id,
                                                  quest: e,
                                                  onQuestCtaClick: i,
                                                  contentPosition: n + 1,
                                                  className: u ? a()(tV.Tp, { [tV.D7]: !m }) : void 0,
                                              }),
                                          }),
                                  },
                                  e.id,
                              ),
                          ),
                      ],
                  }),
              }),
          });
}
function t5(e) {
    let { className: t, numShelfCards: n, hasWideLeadingTile: s } = e,
        r = (0, tK.C)(),
        i = s ? Math.max(n, 3) : Math.max(n, 4);
    return (0, l.jsx)(tm, {
        className: a()(t4.vo, t),
        overflowAmount: 25,
        maskWidth: (0, tl.Qm)(r),
        maskMarginMultiplier: 0.75,
        children: (0, l.jsx)(v.B, {
            className: t4.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: i }).map((e, t) =>
                (0, l.jsx)("div", { className: a()(t1.m, t4.W_, { [t4.E8]: s && 0 === t }) }, t),
            ),
        }),
    });
}
var t8 = n(74498);
function t6(e) {
    let { showHexagonCampaignOverlay: t = !1 } = e;
    return (0, l.jsx)("div", {
        className: a()(t8.Np, { [t8.Zv]: t }),
        children: t && (0, l.jsx)("div", { className: t8.hl }),
    });
}
function t7(e) {
    let { heroImage: t, heroVideo: n } = e,
        s = r.useRef(null);
    (0, eF.A)(s);
    let i = r.useMemo(() => (null != n ? (0, ey.WV)(n) : null) ?? t, [n, t]);
    return (0, l.jsx)(eO._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, l.jsx)(eQ.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: s,
                imageAsset: {
                    alt: "",
                    className: t8.LY,
                    asset: { url: i, mimetype: (0, ey.vm)(i), isAnimated: !1 },
                    assetId: i,
                },
                videoAsset: {
                    alt: "",
                    className: t8.LY,
                    asset: { url: n, mimetype: (0, ey.vm)(n), isAnimated: !0 },
                    assetId: n,
                },
            }),
    });
}
function t3(e) {
    let { heroImage: t, heroVideo: n, showHexagonCampaignOverlay: s } = e;
    return null == n
        ? (0, l.jsxs)("div", {
              className: t8.Tv,
              children: [
                  (0, l.jsx)(t6, { showHexagonCampaignOverlay: s }),
                  (0, l.jsx)("div", {
                      className: t8.LO,
                      children: (0, l.jsx)(eO._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, l.jsx)("img", { ref: e, className: t8.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, l.jsx)("div", {
                      className: a()(t8.LO, t8.jx, t8.hw),
                      children: (0, l.jsx)("img", { className: t8.LY, src: t, alt: "" }),
                  }),
                  (0, l.jsx)("div", {
                      className: a()(t8.LO, t8.jx, t8.Co),
                      children: (0, l.jsx)("img", { className: t8.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: t8.Tv,
              children: [
                  (0, l.jsx)(t6, { showHexagonCampaignOverlay: s }),
                  (0, l.jsx)("div", { className: t8.LO, children: (0, l.jsx)(t7, { heroImage: t, heroVideo: n }) }),
              ],
          });
}
function t9(e) {
    let { hero: t, hasFetchedQuests: n, hasNoAccessibleQuests: s } = e,
        l = (0, eM.WS)(),
        i = r.useRef(!1);
    return (
        r.useEffect(() => {
            let e = t.questIds;
            n &&
                null != e &&
                e.length > 0 &&
                s &&
                !i.current &&
                ((i.current = !0),
                l({
                    adContentId: t.id,
                    adCreativeType: d.p.QUEST_HOME_HERO,
                    event: ew.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                }));
        }, [n, s, t.id, t.questIds, l]),
        null
    );
}
function ne(e) {
    let { hero: t, onQuestCtaClick: n, isBannerLoading: s } = e,
        i = (0, m.bG)([eR.A], () => eR.A.quests),
        o = (0, m.bG)([eR.A], () => eR.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: c, isShelfEnabled: u } = (0, ep.t9)(t),
        { dismissQuestHomeHeroContent: h } = (0, eG.I)();
    r.useEffect(() => {
        h();
    }, [h]);
    let E = r.useMemo(() => t.questIds?.filter((e) => i.has(e)) ?? [], [i, t.questIds]),
        f = E[0],
        { enabled: j } = eH.Ay.useConfig({ location: tQ.rE.QUEST_HOME_HERO });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eU.Z, {
                adContentId: t.id,
                adCreativeType: d.p.QUEST_HOME_HERO,
                questContent: Z.uF.QUEST_HOME_HERO,
                sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                children: (e, r) =>
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(t9, { hero: t, hasFetchedQuests: o, hasNoAccessibleQuests: 0 === E.length }),
                            (0, l.jsx)(eW, {
                                ref: (t) => {
                                    e.current = s ? null : t;
                                },
                                adContentId: t.id,
                                className: a()({ [t8.lX]: s }),
                                topContent: (0, l.jsxs)(v.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, l.jsx)(eO._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, l.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: t8.wm,
                                                    }),
                                            }),
                                        (0, l.jsx)(X.E, {
                                            color: "text-strong",
                                            variant: "body-sm/normal",
                                            className: t8.yu,
                                            children: ei.intl.string(ei.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                overlay:
                                    j &&
                                    (0, l.jsx)(eT.D, {
                                        tag: "div",
                                        className: t8.fj,
                                        "aria-label": t.cta.buttonLabel,
                                        onClick: () => {
                                            (0, eL._Q)(
                                                { adContentId: t.id, adCreativeType: d.p.QUEST_HOME_HERO, cta: t.cta },
                                                {
                                                    content: Z.uF.QUEST_HOME_HERO_BANNER,
                                                    ctaContent: ee.Cy.OPEN_GAME_LINK,
                                                    impressionId: r.current?.getId(),
                                                    sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                                },
                                            );
                                        },
                                    }),
                                buttons: (0, l.jsxs)(g.e, {
                                    children: [
                                        (0, l.jsx)(x.$, {
                                            onClick: () => {
                                                (0, eL._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: d.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: Z.uF.QUEST_HOME_HERO,
                                                        ctaContent: ee.Cy.OPEN_GAME_LINK,
                                                        impressionId: r.current?.getId(),
                                                        sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                                    },
                                                );
                                            },
                                            size: "md",
                                            text: t.cta.buttonLabel,
                                            variant: "overlay-primary",
                                        }),
                                        !u &&
                                            null != f &&
                                            (0, l.jsx)(x.$, {
                                                onClick: () => {
                                                    (n(f),
                                                        (0, eA.r)({
                                                            type: eI.F.CLICK_INTERNAL,
                                                            adCreativeType: d.p.QUEST_HOME_HERO,
                                                            adCreativeId: t.id,
                                                            questContentCTA: ee.Cy.VIEW_QUESTS,
                                                            surfaceId: Z.uF.QUEST_HOME_HERO,
                                                            sourceQuestContent: Z.uF.QUEST_HOME_HERO,
                                                        }));
                                                },
                                                size: "md",
                                                text: ei.intl.string(ei.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, l.jsx)(t3, {
                                    heroImage: t.heroImage,
                                    heroVideo: t.heroVideo,
                                    showHexagonCampaignOverlay: (0, q.Tn)(t),
                                }),
                            }),
                        ],
                    }),
            }),
            u && (0, l.jsx)(t2, { hero: t, isBannerLoading: s, shelfQuests: c, onQuestCtaClick: n }),
        ],
    });
}
function nt() {
    return (0, l.jsx)("div", { className: a()(eB.iE, eB.FG, eB.B3), children: (0, l.jsx)(eb.y, {}) });
}
var nn = n(73153),
    ns = n(797553);
n(667532);
var nl = n(890497),
    nr = n(663417),
    ni = n(265872),
    na = n(624479),
    no = n(416052),
    nc = n(417098);
function nu(e) {
    let { error: t } = e,
        n = t.getAnyErrorMessage();
    return (0, l.jsx)(nc.$T, {
        color: nc.Hv.DANGER,
        children: (0, l.jsx)("div", { children: null != n ? n : ei.intl.string(ei.t.ZErSg5) }),
    });
}
var nd = n(602853),
    nm = n(817281),
    nh = n(688810),
    nE = n(270746),
    ng = n(413599),
    nx = n(912875);
let nf = function () {
    let { analyticsLocations: e } = (0, nh.Ay)(),
        t = (0, m.bG)([ng.A], () => ng.A.theme),
        n = r.useRef(null);
    r.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let s = (0, nd.r)(e1.A.colors.BACKGROUND_BASE_LOW, ew.NJ8.LIGHT),
        i = (0, nd.r)(e1.A.colors.BACKGROUND_BASE_LOW, ew.NJ8.DARK),
        a = (0, nd.r)(e1.A.colors.BACKGROUND_BASE_LOW, ew.NJ8.ONYX),
        o = r.useMemo(
            () => [
                { theme: ew.NJ8.LIGHT, label: ei.t.K2sFfo, color: s.hex() },
                { theme: ew.NJ8.DARK, label: ei.t.b8Cei3, color: i.hex() },
                { theme: ew.NJ8.ONYX, label: ei.t.Do4ZJx, color: a.hex() },
            ],
            [s, i, a],
        ),
        c = r.useCallback(
            (t) => {
                ((0, nE.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, nm.u_)({ theme: t }));
            },
            [e],
        ),
        u = r.useCallback(() => {
            null != n.current && c(n.current);
        }, [c]);
    return (0, l.jsx)("div", {
        className: nx.N,
        children: (0, l.jsxs)("div", {
            className: nx.t7,
            children: [
                o.map((e) =>
                    (0, l.jsxs)(
                        eT.D,
                        {
                            tag: "div",
                            className: nx.Du,
                            onClick: () => c(e.theme),
                            "aria-label": ei.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, l.jsx)("div", {
                                    className: `${nx.WT} ${t === e.theme ? nx.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, l.jsx)("span", { className: nx.i, children: ei.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, l.jsx)(te.K, {
                    onClick: u,
                    "aria-label": ei.intl.string(ei.t.yBZMsQ),
                    icon: nr.RefreshIcon,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var nv = n(219354);
let nj = function (e) {
    let { questId: t, setQuestId: n, quest: s, refreshQuest: i } = e,
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = r.useRef(null),
        h = (0, ep.pT)(),
        E = (0, m.bG)([eR.A], () => (null != t ? eR.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, m.bG)([eR.A], () => null != t && eR.A.isFetchingQuestPreview(t), [t]),
        v = r.useMemo(() => {
            let e = h.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return (null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e);
        }, [h, t]),
        j = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, ns.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, ns.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, ns.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = r.useCallback(
            (e) => {
                (0, ej.uJ)(e) || null == n || n(e);
            },
            [n],
        );
    return (0, l.jsxs)("div", {
        className: nv.Fr,
        children: [
            (0, l.jsx)("div", {
                children: (0, l.jsx)("div", {
                    className: nv.Br,
                    children: (0, l.jsxs)("div", {
                        className: nv.bo,
                        children: [
                            (0, l.jsx)(nf, {}),
                            (0, l.jsxs)("div", {
                                className: nv.b8,
                                children: [
                                    (0, l.jsx)(
                                        nl.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: S,
                                            placeholder: ei.intl.string(ei.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, ej.uJ)(t?.trim())) return e;
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
                                    (0, l.jsx)(te.K, {
                                        onClick: i,
                                        "aria-label": ei.intl.string(ei.t.wzzjk9),
                                        icon: nr.RefreshIcon,
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
                (0, l.jsx)("div", {
                    className: nv.in,
                    children: (0, l.jsxs)(g.e, {
                        className: nv.xv,
                        children: [
                            (0, l.jsx)(x.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ei.intl.string(ei.t.jQEfRT),
                            }),
                            (0, l.jsx)(x.$, {
                                onClick: _,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ei.intl.string(ei.t.taqkwK),
                            }),
                            (0, l.jsx)(x.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ei.intl.string(ei.t.cKSLr4),
                            }),
                            (0, l.jsx)(ni.Y, {
                                targetElementRef: d,
                                shouldShow: c,
                                onRequestClose: () => u(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, l.jsx)("div", {
                                        className: nv.PP,
                                        children: (0, l.jsx)("div", {
                                            className: nv.sH,
                                            children: (0, l.jsx)(no.A, {
                                                value: tU.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: ei.intl.string(ei.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, l.jsx)(te.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => u(!c),
                                        "aria-label": ei.intl.string(ei.t.rNGQfD),
                                        icon: na.CopyIcon,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != E ? (0, l.jsx)(nu, { error: E }) : null,
            f ? (0, l.jsx)(eb.y, {}) : null,
        ],
    });
};
var n_ = n(95362),
    nC = n(761508),
    nS = n(425069);
function nN() {
    return (0, l.jsx)("div", { className: nS.y });
}
var np = n(834615),
    nO = n(34665);
let nT = function (e) {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: nO.x3,
        children: (0, l.jsxs)("div", {
            className: nO.B0,
            children: [
                (0, l.jsx)(ek.D, {
                    className: nO.R_,
                    variant: "heading-sm/semibold",
                    children: ei.intl.string(ei.t.L2mlUb),
                }),
                (0, l.jsx)(eU.R, {
                    questOrQuests: t,
                    questContent: Z.uF.ACTIVITY_PANEL,
                    sourceQuestContent: Z.uF.ACTIVITY_PANEL,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, l.jsx)(np.default, { quest: t }),
                        }),
                }),
            ],
        }),
    });
};
var nb = n(66246),
    nA = n(717695),
    nI = n(466209),
    nR = n(83978);
let nH = function (e) {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: nO.x3,
        children: (0, l.jsxs)("div", {
            className: nI.wp,
            children: [
                (0, l.jsx)(ek.D, {
                    className: nI.Oo,
                    variant: "heading-sm/semibold",
                    children: ei.intl.string(ei.t.rjVPdM),
                }),
                (0, l.jsx)("div", {
                    className: nI.RE,
                    children: (0, l.jsx)("div", {
                        className: nI.Z,
                        children: (0, l.jsx)("div", {
                            className: nR.C3,
                            children: (0, l.jsx)(nA.A, {
                                children: (0, l.jsx)(eO.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: d.p.QUEST,
                                    children: (0, l.jsx)(nb.QuestBarQuestContent, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ny = n(10394);
function nM(e) {
    let { quest: t } = e;
    return (0, l.jsx)("div", {
        className: nO.x3,
        children: (0, l.jsxs)("div", {
            className: nO.B0,
            children: [
                (0, l.jsx)(ek.D, {
                    className: nO.R_,
                    variant: "heading-sm/semibold",
                    children: ei.intl.string(ei.t.gWinpQ),
                }),
                (0, l.jsx)("div", {
                    className: nO.YT,
                    children: (0, l.jsx)(ny.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var nL = n(632623),
    nQ = n(622409);
let nU = function (e) {
    let { questId: t } = e;
    return (0, l.jsx)("div", {
        className: nO.x3,
        children: (0, l.jsxs)("div", {
            className: nO.B0,
            children: [
                (0, l.jsx)(ek.D, { variant: "heading-sm/semibold", children: ei.intl.string(ei.t.IcljUu) }),
                (0, l.jsx)("div", {
                    className: nQ.wu,
                    children: (0, l.jsx)("span", { className: nQ.cy, children: ei.intl.string(ei.t.q97mEu) }),
                }),
                (0, l.jsx)("div", {
                    className: nQ.oU,
                    children: (0, l.jsx)("div", {
                        className: nQ.zx,
                        children: (0, l.jsx)("div", {
                            className: nQ.Lj,
                            children: (0, l.jsx)("div", {
                                className: nQ.n0,
                                children: (0, l.jsx)(nL.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var nF = n(793217),
    nD = n(484810);
function nk(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: nD.y, children: t });
}
var nP = n(612324),
    nq = n(365199),
    nw = n(270045),
    nB = n(79545),
    nV = n(173936),
    nW = n(914410),
    nG = n(426110),
    nz = n(742070),
    nK = n(409626),
    n$ = n(870273),
    nY = n(646917),
    nX = n(866665),
    nJ = n(743368),
    nZ = n(452411),
    n0 = n(321538),
    n1 = n(964051);
function n4(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: r, contentPosition: i, rowIndex: o } = e,
        c = (0, nB.Pd)(t),
        { ctaOnHover: u } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        d = (0, m.bG)([eR.A], () => c === nB.UA.UNENROLLED && null != eR.A.questEnrollmentBlockedUntil, [c]),
        h = !(0, tZ.no)(t) || ![nB.UA.ENROLLED, nB.UA.UNENROLLED, nB.UA.INCOMPLETE].includes(c),
        E = c === nB.UA.EXPIRED || c === nB.UA.EXPIRED_CLAIMED || (c === nB.UA.CLAIMED && (0, tZ.GL)(t)),
        f = (0, ep.do)({ quest: t, content: n, ctaContent: ee.Cy.OPEN_GAME_LINK, sourceQuestContent: s });
    return (0, l.jsxs)("div", {
        className: a()(n1.lO, { [n1.Fq]: r || !u }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, l.jsx)("div", { className: n1.Cj }),
            (0, l.jsx)(eD.N, {
                theme: ew.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: a()(e, n1.tn),
                        children: (0, l.jsxs)(g.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                h &&
                                    (E
                                        ? (0, l.jsx)(x.$, {
                                              variant: "secondary",
                                              text: t.config.ctaConfig.buttonLabel,
                                              onClick: f,
                                          })
                                        : (0, l.jsx)(nX.m, {
                                              text: ei.intl.string(ei.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, l.jsx)(te.K, {
                                                  variant: "secondary",
                                                  icon: nJ.LinkExternalMediumIcon,
                                                  "aria-label": ei.intl.string(ei.t.LLLLPD),
                                                  onClick: f,
                                              }),
                                          })),
                                !E &&
                                    !d &&
                                    (0, l.jsx)(nZ.A, {
                                        quest: t,
                                        surface: nB.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: n,
                                        analyticsCtxSourceQuestContent: s,
                                        analyticsCtxQuestContentPosition: i,
                                        analyticsCtxQuestContentRowIndex: o,
                                    }),
                                d &&
                                    (0, l.jsx)(x.$, {
                                        variant: "overlay-primary",
                                        text: ei.intl.string(ei.t.vY9GgG),
                                        onClick: () => (0, n0.m6)(t, n, s),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var n2 = n(443541),
    n5 = n(947641),
    n8 = n(194261),
    n6 = n(106799),
    n7 = n(476334);
function n3(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: i } = e,
        o = (0, m.bG)([tp.default], () => tp.default.getCurrentUser()),
        c = (0, tR.mq)(t.config, o),
        u = (0, tR.ks)(t.config),
        d = (0, tR.wo)(t.config, o),
        { completedRatio: h } = (0, ep.O9)(t),
        E = (0, nB.Pd)(t),
        g = (0, ep.Hv)(),
        x = E === nB.UA.CLAIMED || E === nB.UA.EXPIRED_CLAIMED,
        f = x || E === nB.UA.COMPLETED || E === nB.UA.EXPIRED_CLAIMABLE,
        v = (0, F.ix)({ quest: t, questContent: n, sourceQuestContent: s }),
        j = r.useCallback(
            (e) => {
                if ((e.stopPropagation(), g && !x)) {
                    ((0, eq.Y5)({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: ee.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: s,
                    }),
                        (0, n0.FS)());
                    return;
                }
                v();
            },
            [v, g, x, t.id, n, s],
        ),
        _ = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tM.A, {
                    quest: t,
                    location: tQ.rE.QUEST_HOME_DESKTOP,
                    questContent: n,
                    autoplay: i,
                    lazyLoad: !0,
                    className: n7.al,
                    fullWidth: !0,
                    sourceQuestContent: s,
                }),
                x &&
                    (0, l.jsx)("div", {
                        className: n7.EY,
                        children: (0, l.jsx)(n5.CheckmarkLargeBoldIcon, {
                            className: n7.AM,
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                E === nB.UA.EXPIRED &&
                    (0, l.jsx)("div", {
                        className: n7.EY,
                        children: (0, l.jsx)(n8.LockIcon, { size: "sm", className: n7.Sz, color: "currentColor" }),
                    }),
            ],
        }),
        C = (0, l.jsx)("div", { className: E === nB.UA.UNENROLLED ? n7.fm : n7.n5, children: _ }),
        S = (0, l.jsx)(ty.A, { size: 66, percentComplete: h, useAltStyle: !0, children: C }),
        N = f
            ? (0, l.jsx)(eT.D, {
                  className: n7.q9,
                  onClick: j,
                  "aria-label": x
                      ? (0, tR.r7)(t.config)
                          ? ei.intl.string(ei.t.bAGFz3)
                          : ei.intl.string(ei.t.vTgCWx)
                      : ei.intl.string(ei.t.cfY4PE),
                  children: S,
              })
            : S;
    return (0, l.jsxs)("div", {
        className: a()(n7.CZ, { [n7.Pv]: i }),
        children: [
            (0, l.jsx)(eD.N, {
                theme: ew.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: a()(e, n7.tE, { [n7.cB]: i }),
                        children: E === nB.UA.UNENROLLED ? C : N,
                    }),
            }),
            (0, l.jsxs)("div", {
                className: a()(n7.FS, { [n7.IR]: i }),
                children: [
                    (0, l.jsx)(X.E, {
                        variant: "body-sm/medium",
                        className: n7.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, l.jsxs)("div", {
                        className: a()(n7.oV, { [n7.FJ]: i }),
                        children: [
                            u && (0, l.jsx)(n6.A, { className: n7.Kq, customSize: 14 }),
                            (0, l.jsx)(
                                X.E,
                                {
                                    variant: "body-md/medium",
                                    className: n7.zN,
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    tag: "span",
                                    children: u ? d : c,
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
var n9 = n(604970);
function se(e) {
    let { quest: t, questContent: n, isHovering: s, sourceQuestContent: i, contentPosition: o, rowIndex: c } = e,
        u = r.useRef(null),
        d = (0, n$.A9)(t, i, tQ.rE.QUEST_HOME_DESKTOP, nK.GameProfileSources.QuestHome, u),
        m = (0, nY.z)(),
        h = (0, ep.SD)(t, m);
    return (0, l.jsxs)("div", {
        ref: u,
        className: n9.qr,
        children: [
            (0, l.jsx)(n3, { quest: t, questContent: n, sourceQuestContent: i, isHovering: s }),
            (0, l.jsxs)("div", {
                className: n9.yM,
                children: [
                    (0, l.jsxs)("div", {
                        className: n9.Wi,
                        children: [
                            (0, l.jsx)(X.E, {
                                variant: "body-sm/normal",
                                className: a()(n9.Wj, n9.h_, { [n9.C4]: s }),
                                children: d,
                            }),
                            (0, l.jsx)(X.E, {
                                "aria-hidden": !0,
                                variant: "body-sm/normal",
                                lineClamp: 1,
                                className: a()(n9.Wj, n9.XV, { [n9.Hz]: s }),
                                children: d,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: n9.Gv,
                        children: [
                            (0, l.jsx)(X.E, {
                                variant: "body-sm/normal",
                                className: n9.I4,
                                children: ei.intl.string(ei.t.o6FLcF),
                            }),
                            h &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(X.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, l.jsx)(n2.f, { questId: t.id, orbMultiplierEligibility: m }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(n4, {
                quest: t,
                questContent: n,
                sourceQuestContent: i,
                isHovering: s,
                contentPosition: o,
                rowIndex: c,
            }),
        ],
    });
}
var st = n(434295);
let sn = { [ey.i2.TIER_2]: st.qt, [ey.i2.TIER_3]: st.jR, [ey.i2.TIER_4]: st.cd };
function ss(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: s,
            isHovering: r,
            isShareable: i,
            onCopyShareLink: o,
            onMenuOpen: c,
            onMenuClose: u,
            contentPosition: d,
            rowIndex: h,
        } = e,
        { completedRatio: E, completedRatioDisplay: g } = (0, ep.O9)(t, !0),
        x = (0, ey.tW)(t, ey.fY.LOGO_TYPE, ew.NJ8.DARK).url,
        f = (0, m.bG)([ng.A], () => ng.A.theme) === ew.NJ8.LIGHT,
        v = (0, nG.Qn)(t.config),
        j = null != v ? sn[v] : void 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            f
                ? (0, l.jsx)(eD.N, {
                      theme: ew.NJ8.DARK,
                      disableAdaptiveTheme: !0,
                      children: (e) => (0, l.jsx)("div", { className: a()(e, st.f5, j), "aria-hidden": !0 }),
                  })
                : (0, l.jsx)("div", { className: a()(st.f5, j), "aria-hidden": !0 }),
            (0, l.jsx)("div", { className: a()(st.ZF, j, { [st.SP]: r }), "aria-hidden": !0 }),
            (0, l.jsx)("div", { className: st.ZH, children: (0, l.jsx)(nz.Q, { quest: t, isHovering: r }) }),
            (0, l.jsxs)("div", {
                className: a()(st.o1, { [st.SP]: r }),
                children: [
                    i &&
                        (0, l.jsx)(eT.D, {
                            tag: "div",
                            className: st.hP,
                            onClick: o,
                            "aria-label": ei.intl.string(ei.t.WqhZss),
                            children: (0, l.jsx)(nV.LinkIcon, { size: "sm", color: "currentColor" }),
                        }),
                    (0, l.jsx)(nw.C, {
                        questContent: n,
                        quest: t,
                        hideLearnMore: !0,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: s,
                        onOpen: c,
                        onClose: u,
                        children: (e) =>
                            (0, l.jsx)(eT.D, {
                                ...e,
                                tag: "div",
                                className: st.hP,
                                "aria-label": ei.intl.string(ei.t.DEoVWZ),
                                children: (0, l.jsx)(nq.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: a()(st.KJ, { [st.R]: r }),
                children: [
                    (0, l.jsx)("div", {
                        className: st.Ez,
                        children: (0, l.jsx)("img", { className: st.dK, src: x, alt: t.config.messages.gameTitle }),
                    }),
                    (0, l.jsxs)("div", {
                        className: st.Cd,
                        children: [
                            (0, l.jsx)(X.E, {
                                variant: "body-sm/semibold",
                                color: "text-overlay-light",
                                className: st.ZV,
                                children: g,
                            }),
                            (0, l.jsx)("div", {
                                className: st.oU,
                                children: (0, l.jsx)(nW.Ay, {
                                    variant: nW.qP.UNSET,
                                    override: { default: { gradientStart: "#189E4E", gradientEnd: "#44FC7E" } },
                                    weight: nW.fh.LIGHT,
                                    progress: Math.round(100 * E),
                                    glowing: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: a()(st.SJ, { [st.SP]: r }),
                children: (0, l.jsx)(se, {
                    quest: t,
                    questContent: n,
                    isHovering: r,
                    sourceQuestContent: s,
                    contentPosition: d,
                    rowIndex: h,
                }),
            }),
        ],
    });
}
var sl = n(720875),
    sr = n(614972),
    si = n(688755),
    sa = n(831368),
    so = n(704289);
function sc(e) {
    let {
            sectionIdentifier: t,
            quest: n,
            questContent: s,
            isInFeaturedSection: i,
            isActive: o,
            className: c,
            contentPosition: u,
            rowIndex: d,
            eagerLoadAssets: h,
            impressionRef: E,
            onMenuOpenChange: g,
            sourceQuestContent: x,
        } = e,
        f = r.useMemo(() => (0, ey.tW)(n, ey.fY.QUEST_BAR_HERO_IMAGE), [n]),
        v = r.useMemo(() => (0, ey.tW)(n, ey.fY.QUEST_BAR_HERO_VIDEO), [n]),
        {
            isActive: j,
            shouldRender: _,
            hoverHandlers: C,
            handleMenuOpen: S,
            handleMenuClose: N,
        } = (function () {
            let { fadeDurationMs: e = 400, onMenuOpenChange: t } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                [n, s] = r.useState(!1),
                [l, i] = r.useState(!1),
                a = r.useRef(!1),
                o = r.useRef(!1),
                c = r.useRef(!1),
                u = r.useRef(t);
            r.useEffect(() => {
                u.current = t;
            }, [t]);
            let d = r.useRef(null),
                m = r.useRef(null);
            function h() {
                null != d.current && (cancelAnimationFrame(d.current), (d.current = null));
            }
            function E() {
                null != m.current && (clearTimeout(m.current), (m.current = null));
            }
            let g = r.useCallback(() => {
                    (E(),
                        i(!0),
                        h(),
                        (d.current = requestAnimationFrame(() => {
                            d.current = requestAnimationFrame(() => {
                                ((d.current = null), s(!0));
                            });
                        })));
                }, []),
                x = r.useCallback(() => {
                    (h(),
                        s(!1),
                        E(),
                        (m.current = setTimeout(() => {
                            ((m.current = null), i(!1));
                        }, e)));
                }, [e]),
                f = r.useCallback(() => {
                    a.current || o.current || c.current || x();
                }, [x]),
                v = r.useCallback(() => {
                    c.current || ((c.current = !0), u.current?.(!0));
                }, []),
                j = r.useCallback(() => {
                    (c.current && ((c.current = !1), u.current?.(!1)), f());
                }, [f]),
                _ = r.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            ((a.current = !0), g());
                        },
                        onMouseLeave: () => {
                            ((a.current = !1), f());
                        },
                        onFocus: () => {
                            ((o.current = !0), g());
                        },
                        onBlur: () => {
                            ((o.current = !1), f());
                        },
                    }),
                    [g, f],
                );
            return (
                r.useEffect(
                    () => () => {
                        (h(), E(), c.current && ((c.current = !1), u.current?.(!1)));
                    },
                    [],
                ),
                { isActive: n, shouldRender: l, deactivate: x, hoverHandlers: _, handleMenuOpen: v, handleMenuClose: j }
            );
        })({ onMenuOpenChange: g }),
        p = j || !0 === o,
        O = !0 === i,
        T = (0, sr.c)({ onMenuOpen: S, onMenuClose: N }),
        b = (0, nB.Pd)(n),
        A = b === nB.UA.EXPIRED || b === nB.UA.EXPIRED_CLAIMED,
        I = (0, tH.E0)(n.config),
        R = (0, m.bG)([ng.A], () => ng.A.theme),
        H = R === ew.NJ8.ASH || R === ew.NJ8.DARK,
        y = R === ew.NJ8.LIGHT,
        M = r.useContext(ts.X),
        { visibilityElementRef: L, almostVisibleInViewport: Q } = (0, sa.I)(
            M?.current?.getScrollerNode() ?? null,
            h ?? !1,
        ),
        {
            handleHoverStart: U,
            handleHoverEnd: D,
            isEventWithinParent: k,
        } = (0, si.B)({ quest: n, questContent: s, contentPosition: u, rowIndex: d, sourceQuestContent: x }),
        P = (0, F.Lk)({
            isShareable: I,
            questId: n.id,
            trackingCtx: r.useMemo(
                () => ({ content: s, ctaContent: ee.Cy.CONTEXT_MENU_COPY_LINK, sourceQuestContent: x }),
                [s, x],
            ),
        }),
        q = (0, nP.A)(E, L),
        w = ei.intl.formatToPlainString(ei.t.EAYZAr, { questName: n.config.messages.questName }),
        B = a()(so.kL, { [so.Cn]: O, [so.DM]: p }, c),
        V = (0, l.jsx)(sl.A, {
            showPlaceholder: !Q,
            width: 800,
            height: 450,
            className: so.Tv,
            children: (0, l.jsx)(eQ.N, {
                imageAsset:
                    null != f
                        ? { asset: f, assetId: "QuestTileV2", alt: ei.intl.string(ei.t.jnijWz), className: so.Tv }
                        : void 0,
                videoAsset:
                    null != v
                        ? {
                              asset: v,
                              assetId: "QuestTileV2_heroAnimated",
                              className: a()(so.Tv, so.gJ, { [so.C7]: p }),
                          }
                        : void 0,
                imageSize: { width: 800, height: 450 },
                showVideo: _ || !0 === o,
            }),
        }),
        W = O
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      V,
                      (0, l.jsx)(sr.q.Provider, {
                          value: T,
                          children: (0, l.jsx)(ss, {
                              quest: n,
                              questContent: s,
                              sourceQuestContent: x,
                              isHovering: p,
                              isShareable: I,
                              onCopyShareLink: P,
                              onMenuOpen: S,
                              onMenuClose: N,
                              contentPosition: u,
                              rowIndex: d,
                          }),
                      }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      V,
                      (0, l.jsx)("div", { className: a()(so.sL, { [so.Mq]: A }) }),
                      y
                          ? (0, l.jsx)(eD.N, {
                                theme: ew.NJ8.ONYX,
                                disableAdaptiveTheme: !0,
                                children: (e) => (0, l.jsx)("div", { className: a()(e, so.f5) }),
                            })
                          : (0, l.jsx)("div", { className: a()(so.f5, { [so.kg]: H }) }),
                      (0, l.jsxs)("div", {
                          className: so.qy,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: so.wx,
                                  children: [
                                      (0, l.jsx)(nz.Q, { quest: n, isHovering: p }),
                                      (0, l.jsx)("div", {
                                          className: a()(so.$s, { [so.rk]: p }),
                                          onClick: (e) => e.stopPropagation(),
                                          children: (0, l.jsx)(nw.C, {
                                              questContent: s,
                                              quest: n,
                                              hideLearnMore: !0,
                                              shouldShowDisclosure: !0,
                                              showShareLink: !0,
                                              sourceQuestContent: x,
                                              onOpen: S,
                                              onClose: N,
                                              children: (e) =>
                                                  (0, l.jsx)(eT.D, {
                                                      ...e,
                                                      tag: "div",
                                                      className: so.E9,
                                                      "aria-label": ei.intl.string(ei.t.DEoVWZ),
                                                      children: (0, l.jsx)(nq.MoreHorizontalIcon, {
                                                          size: "sm",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(sr.q.Provider, {
                                  value: T,
                                  children: (0, l.jsx)(se, {
                                      quest: n,
                                      questContent: s,
                                      isHovering: p,
                                      sourceQuestContent: x,
                                      contentPosition: u,
                                      rowIndex: d,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    return (0, l.jsx)("div", {
        id: (0, nF.sT)(n.id, t),
        className: so.uW,
        "data-quest-tile": O ? "featured-v2" : "standard",
        [tl.YF]: p ? "" : void 0,
        onMouseEnter: () => {
            (C.onMouseEnter(), U());
        },
        onMouseLeave: () => {
            (C.onMouseLeave(), D());
        },
        onFocus: (e) => {
            k(e) || (C.onFocus(), U());
        },
        onBlur: (e) => {
            k(e) || (C.onBlur(), D());
        },
        children: (0, l.jsx)("article", {
            ref: q,
            "aria-label": w,
            style: { "--custom-featured-tile-width": "291px" },
            className: B,
            children: W,
        }),
    });
}
let su = r.memo(function (e) {
    let t = (0, m.bG)([eR.A], () => (null != e.questId ? eR.A.getQuest(e.questId) : void 0), [e.questId]),
        n = r.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == n
        ? null
        : (0, l.jsx)(eU.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === Z.uF.QUESTS_EMBED,
              overrideVisibility: e.overrideVisibility,
              onImpression: e.onImpression,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, l.jsx)(sc, { ...e, quest: n, impressionRef: t }),
          });
});
function sd(e) {
    let { quest: t, isFeatured: n } = e,
        { useNewTile: s } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP });
    return (0, l.jsx)("div", {
        className: nO.x3,
        children: (0, l.jsxs)("div", {
            className: nO.B0,
            children: [
                (0, l.jsx)(ek.D, {
                    className: nO.R_,
                    variant: "heading-sm/semibold",
                    children: n ? ei.intl.string(ei.t.AzkvWe) : ei.intl.string(ei.t["5wnpF3"]),
                }),
                s
                    ? (0, l.jsx)(nk, {
                          children: (0, l.jsx)(su, {
                              className: nO.d,
                              quest: t,
                              questContent: Z.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              isInFeaturedSection: n,
                              sourceQuestContent: Z.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                      })
                    : (0, l.jsx)(nF.Ay, {
                          className: nO.d,
                          quest: t,
                          questContent: Z.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: Z.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var sm = n(97808),
    sh = n(778712),
    sE = n(87664),
    sg = n(427262),
    sx = n(198525),
    sf = n(381351);
let sv = function (e) {
    let { quest: t } = e,
        [n, s] = r.useState(!1),
        i = r.useRef(null),
        o = (0, m.bG)([tp.default], () => tp.default.getCurrentUser()),
        c = sg.Ay.useName(o),
        u = (0, sE.A)(o?.id),
        d = r.useCallback(
            (e) =>
                (0, l.jsx)(sx.default, {
                    name: c,
                    quest: t,
                    memberListItemRef: i,
                    applicationStream: u,
                    ...e,
                    closePopout: () => {
                        s(!1);
                    },
                }),
            [t, u, c],
        );
    return (0, l.jsx)("div", {
        className: nO.x3,
        children: (0, l.jsxs)("div", {
            className: nO.B0,
            children: [
                (0, l.jsx)(ek.D, {
                    className: sf.R_,
                    variant: "heading-sm/semibold",
                    children: ei.intl.string(ei.t.jY7Zxg),
                }),
                (0, l.jsx)("div", { className: sf.$Q, children: ei.intl.string(ei.t.q3hbne) }),
                (0, l.jsx)("div", {
                    className: sf.k0,
                    children: (0, l.jsx)(ni.Y, {
                        targetElementRef: i,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => s(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: ni.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, l.jsx)("div", {
                                ref: i,
                                className: a()(sf.Tn, { [sf.wH]: n }),
                                children: (0, l.jsx)(eT.D, {
                                    onClick: () => s(!n),
                                    tabIndex: 0,
                                    children: (0, l.jsxs)("div", {
                                        className: sf.lm,
                                        children: [
                                            (0, l.jsx)(sm.eu, {
                                                size: sh._3.SIZE_32,
                                                src: o?.getAvatarURL(void 0, 32),
                                                status: ew.clD.ONLINE,
                                                "aria-label": o?.username,
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: sf.Fj,
                                                children: [
                                                    (0, l.jsx)(X.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-strong",
                                                        children: c,
                                                    }),
                                                    (0, l.jsx)(X.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-muted",
                                                        children: ei.intl.string(ei.t.b9w3bO),
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
function sj(e) {
    let { questId: t, selectedSections: n } = e,
        s = (0, m.bG)([eR.A], () => eR.A.getQuest(t)),
        r = (0, m.bG)([eR.A], () => eR.A.getFetchQuestPreviewError(t)),
        { useNewTile: i } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP });
    if (null != r || null == s) return null;
    function a(e) {
        return null == n || 0 === n.length || n.includes(e);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a("quest_bar") && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(nH, { quest: s }), (0, l.jsx)(nN, {})] }),
            a("home_card") && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(sd, { quest: s }), (0, l.jsx)(nN, {})] }),
            a("featured_tile") &&
                i &&
                (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(sd, { quest: s, isFeatured: !0 }), (0, l.jsx)(nN, {})],
                }),
            a("share_embed") &&
                (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(nU, { questId: s.id }), (0, l.jsx)(nN, {})] }),
            a("channel_call_header") &&
                (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(nM, { quest: s }), (0, l.jsx)(nN, {})] }),
            a("members_list") &&
                (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(sv, { quest: s }), (0, l.jsx)(nN, {})] }),
            a("activity_panel") &&
                (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(nT, { quest: s }), (0, l.jsx)(nN, {})] }),
        ],
    });
}
var s_ = n(875696);
function sC(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: s, controls: i, className: o } = e,
        c = (function () {
            let { useNewTile: e } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP });
            return [
                { value: "quest_bar", label: ei.intl.string(ei.t.rjVPdM) },
                { value: "home_card", label: ei.intl.string(ei.t["5wnpF3"]) },
                ...(e ? [{ value: "featured_tile", label: ei.intl.string(ei.t.AzkvWe) }] : []),
                { value: "share_embed", label: ei.intl.string(ei.t["D/gSWS"]) },
                { value: "channel_call_header", label: ei.intl.string(ei.t.gWinpQ) },
                { value: "members_list", label: ei.intl.string(ei.t.wpYima) },
                { value: "activity_panel", label: ei.intl.string(ei.t.L2mlUb) },
            ];
        })(),
        u = 0 === n.length || n.length === c.length,
        d = r.useMemo(() => (u ? "all" : 1 === n.length ? n[0] : "all"), [n, u]);
    return (0, l.jsx)(n_.Ip, {
        className: a()(s_.kL, o),
        orientation: "auto",
        children: (0, l.jsxs)("div", {
            className: s_.qE,
            children: [
                (0, l.jsx)(ek.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ei.intl.string(ei.t.BDUDau),
                }),
                (0, l.jsx)("div", { className: s_.pf, children: i }),
                (0, l.jsxs)(nC.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        s?.(e);
                    },
                    children: [
                        (0, l.jsx)(nC.V.Item, { id: "all", children: ei.intl.string(ei.t.Y9DnPa) }),
                        c.map((e) => (0, l.jsx)(nC.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, l.jsx)("div", { className: s_.tZ, children: (0, l.jsx)("div", { className: s_.Qs, children: t }) }),
            ],
        }),
    });
}
let sS = function (e) {
    let { questId: t, className: n } = e,
        { questId: s, setQuestId: i } = (function (e) {
            let t = (0, o.W6)(),
                { search: n } = (0, o.zy)(),
                s = r.useMemo(() => new URLSearchParams(n).get(ep.L1.QUEST_ID) ?? e, [n, e]),
                l = r.useCallback(
                    (e) => {
                        if (e === s) return;
                        let n = new URLSearchParams();
                        (n.set(ep.L1.TAB, ep.NC.PREVIEW_TOOL),
                            n.set(ep.L1.QUEST_ID, e),
                            t.push(`${ew.BVt.QUEST_HOME}?${n.toString()}`));
                    },
                    [t, s],
                );
            return { questId: s, setQuestId: l };
        })(t),
        a = (0, m.bG)([eR.A], () => (null != s ? eR.A.getQuest(s) : void 0), [s]),
        c = (0, m.bG)([eR.A], () => (null != s ? eR.A.getQuestLoadedViaPreview(s) : null), [s]);
    (r.useEffect(() => {
        null != s &&
            (0, ns.dQ)(s).then(() => {
                (0, ns.Gt)(s);
            });
    }, [s]),
        r.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === s && (0, ns.dQ)(s);
            }
            return (
                nn.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    nn.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]));
    let [u, d] = r.useState([]);
    return (0, l.jsx)(sC, {
        className: n,
        controls: (0, l.jsx)(nj, {
            questId: s,
            setQuestId: i,
            quest: a,
            refreshQuest: function () {
                null != s && (0, ns.dQ)(s);
            },
        }),
        selectedSections: u,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: c?.id != null ? (0, l.jsx)(sj, { questId: c?.id, selectedSections: u }) : null,
    });
};
var sN = n(203879),
    sp = n(167417),
    sO = n(783977),
    sT = n(305866),
    sb = n(915089),
    sA = n(255604);
function sI(e) {
    let { children: t, id: n } = e;
    return (0, l.jsx)(X.E, { className: sA.g, color: "text-subtle", id: n, variant: "body-sm/semibold", children: t });
}
let sR = function (e) {
    let { children: t, renderPopout: n } = e,
        s = (0, sb.GV)(),
        i = r.useRef(null);
    return (0, l.jsx)(ni.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, l.jsx)(sT.l, { className: sA.S, "aria-labelledby": s, children: n(e, s) }),
        scrollBehavior: "close",
        targetElementRef: i,
        children: (e) => t(e, i),
    });
};
var sH = n(368884);
let sy = function (e) {
    let { onChange: t, selectedFilters: n } = e,
        s = (0, ep.Nb)(),
        i = r.useCallback(
            (e) => (s) => {
                let l = e.filter((e) => s.includes(e.filter));
                t([...n.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [n, t],
        );
    return (0, l.jsx)(sR, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, l.jsxs)("div", {
                children: [
                    s.map((e, t) => {
                        let s = e.options.map((e) => ({ label: (0, tI.up)(e.filter), value: e.filter })),
                            o = n.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter),
                            c = 0 === t ? a : `${a}-${t}`;
                        return (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, l.jsx)("hr", { className: sH.B }),
                                    (0, l.jsx)(sI, { id: c, children: e.heading }),
                                    (0, l.jsx)(sp.$, {
                                        "aria-labelledby": c,
                                        options: s,
                                        selectedValues: o,
                                        onChange: i(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, l.jsx)("hr", { className: sH.B }),
                    (0, l.jsx)("div", {
                        className: sH.W,
                        children: (0, l.jsx)(x.$, {
                            fullWidth: !0,
                            onClick: () => {
                                (t([]), o());
                            },
                            size: "sm",
                            text: ei.intl.string(ei.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, l.jsx)(x.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: ei.intl.formatToPlainString(ei.t.CEfkXl, { numSelectedFilters: n.length }),
                icon: sO.FiltersHorizontalIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sM = n(771871),
    sL = n(715482);
let sQ = function (e) {
    let { onChange: t, optionClassName: n, selectedSortMethod: s } = e,
        i = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, m.bG)([C.Ay], () => C.Ay.keyboardModeEnabled),
        o = (0, ep.XD)(),
        c = r.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: n })), [o, n]);
    return (0, l.jsx)(sR, {
        renderPopout: (e, t) => {
            let { closePopout: n } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(sI, { id: t, children: ei.intl.string(ei.t.tZXJIS) }),
                    (0, l.jsx)(sM.z, {
                        "aria-labelledby": t,
                        options: c,
                        onChange: (e) => {
                            (i(e), a || n());
                        },
                        value: s,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, l.jsx)(x.$, {
                ...e,
                "aria-label": ei.intl.formatToPlainString(ei.t.lPlIMo, { selected: (0, tI.Js)(s) }),
                buttonRef: t,
                size: "sm",
                text: (0, tI.Js)(s),
                icon: sL.ChevronLargeDownIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sU = n(710969),
    sF = n(858899);
function sD() {
    let e = r.useRef(null);
    return {
        showToast: r.useCallback((t) => {
            e.current !== t &&
                ((0, sF.P0)({ text: ei.intl.string(ei.t["5ABf1w"]), variant: "critical" }),
                t$.default.track(ew.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function sk(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, i] = r.useState(null),
        a = r.useCallback(() => {
            var l;
            i(((l = e.current?.clientWidth), null == l ? 1 : Math.max(1, Math.min(s, Math.floor((l + n) / (t + n))))));
        }, [i, t, n, s, e]);
    return ((0, e9.g)(e, a, [t, n], { fireOnMount: !0 }), l);
}
var sP = n(768497),
    sq = n(288613);
let sw = 4 * tT.A.Millis.SECOND;
function sB(e) {
    let { children: t, tileMinWidth: n, gridGap: s } = e,
        i = r.useRef(null),
        a = sk(i, n, s);
    return (0, l.jsx)("div", {
        className: sP.kL,
        ref: i,
        style: { "--custom-min-quest-tile-width": `${n}px`, "--custom-quest-grid-gap": `${s}px` },
        children: null !== a && t(a),
    });
}
function sV(e) {
    let {
            quests: t,
            excludedQuests: n,
            isFetching: s,
            hasFetched: i,
            hasFiltersApplied: c = !1,
            onClearFilters: u,
            ref: d,
        } = e,
        m = (0, o.zy)(),
        { showToast: h } = sD(),
        E = r.useRef(null),
        [g, x] = r.useState(null),
        [f, v] = r.useState(0),
        { useNewTile: j } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: _ }, C] = (0, e6.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sw },
        })),
        S = r.useCallback(
            (e) => {
                if ((s && 0 === t.length) || !i) return !1;
                let l = (0, sU.vc)(e, t, n);
                return null == l ? (h(e), !1) : (x(l.id), v((e) => e + 1), !0);
            },
            [t, n, s, h, i],
        );
    return (r.useImperativeHandle(d, () => ({ scrollToQuest: S }), [S]),
    r.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            E.current = null;
            return;
        }
        !s && i && m !== E.current && S(m.hash.slice(1)) && (E.current = m);
    }, [m, s, i, S]),
    r.useLayoutEffect(() => {
        if (null == g) return;
        let e = document.getElementById(`quest-tile-${g}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            C({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || x(null);
                },
            }));
    }, [g, f, C]),
    s && 0 === t.length)
        ? (0, l.jsx)(eb.y, { className: sP.u1 })
        : 0 === t.length
          ? (0, l.jsxs)("div", {
                className: sP.y7,
                children: [
                    (0, l.jsx)(ek.D, {
                        variant: "heading-xl/semibold",
                        children: ei.intl.string(c ? ei.t.PBfFnx : ei.t.NqFP6z),
                    }),
                    (0, l.jsx)(X.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: c ? ei.intl.format(ei.t.LdYS1H, { onClick: u }) : ei.intl.string(ei.t.LhD4yH),
                    }),
                ],
            })
          : (0, l.jsx)(sB, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    t.map((t, n) => {
                        let s = Math.floor(n / e),
                            r = g === t.id,
                            i = null != g && !r;
                        return (0, l.jsxs)(
                            K.animated.div,
                            {
                                className: a()({ [sq.XB]: r, [nD.y]: j }),
                                style: t0(r, i, _),
                                children: [
                                    r &&
                                        (0, l.jsx)("div", {
                                            className: sq.OA,
                                            "aria-hidden": !0,
                                            children: (0, l.jsx)("div", { className: sq.E4 }, f),
                                        }),
                                    j
                                        ? (0, l.jsx)(su, {
                                              quest: t,
                                              questContent: Z.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sP.d,
                                              sourceQuestContent: Z.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, l.jsx)(nF.Ay, {
                                              quest: t,
                                              questContent: Z.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sP.d,
                                              sourceQuestContent: Z.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
}
var sW = n(458518),
    sG = n(349095);
let sz = [],
    sK = ep.L1.SORT,
    s$ = ep.L1.FILTER;
function sY(e) {
    let t,
        n,
        s,
        i,
        { ref: a, ...c } = e,
        u = r.useRef(null),
        [d, m] =
            ((t = (0, sW.o)()),
            (n = (0, o.W6)()),
            (s = r.useRef(null)),
            (i = r.useCallback(
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
            [t, i]),
        h = r.useMemo(() => {
            var e;
            return (
                (e = d.get(sK)),
                ((0, ej.uJ)(e) ? null : (Object.values(tQ.kL).find((t) => t === e) ?? null)) ?? tQ.kL.SUGGESTED
            );
        }, [d]),
        E = r.useMemo(
            () =>
                (function (e) {
                    if ((0, ej.uJ)(e)) return null;
                    let t = e
                        .split(",")
                        .map((e) => (0, tQ.WQ)(e))
                        .filter(tY.Vq);
                    return t.length > 0 ? t : null;
                })(d.get(s$)) ?? sz,
            [d],
        ),
        g = r.useCallback(
            (e) => {
                m({ [sK]: e });
            },
            [m],
        ),
        x = r.useCallback(
            (e) => {
                m({
                    [s$]:
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
            quests: f,
            excludedQuests: v,
            isFetchingCurrentQuests: j,
            hasFetched: _,
        } = (0, ep.Qh)(
            ep.NC.ALL,
            r.useMemo(() => ({ sortMethod: h, filters: E, removeExpiredQuests: !0 }), [h, E]),
        ),
        C = r.useCallback(() => {
            x(sz);
        }, [x]),
        S = r.useRef(null),
        N = r.useRef(null),
        p = (0, o.zy)(),
        O = (0, o.W6)();
    return (
        r.useEffect(() => {
            "" !== p.hash &&
                null != S.current &&
                null != N.current &&
                (h !== S.current || E !== N.current) &&
                O.replace({ ...p, hash: void 0 });
        }, [h, E, p, O]),
        r.useEffect(() => {
            S.current = h;
        }, [h]),
        r.useEffect(() => {
            N.current = E;
        }, [E]),
        (0, ep.$P)({ selectedSortMethod: h, selectedFilters: E, numQuestsVisible: f.length }),
        r.useImperativeHandle(
            a,
            () => ({
                scrollToQuest: (e) => {
                    (C(),
                        g(tQ.kL.SUGGESTED),
                        requestAnimationFrame(() => {
                            u.current?.scrollToQuest(e);
                        }));
                },
            }),
            [C, g],
        ),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: sG.Mj,
                    children: [
                        (0, l.jsx)(ek.D, { variant: "heading-lg/medium", children: ei.intl.string(ei.t.giYD00) }),
                        (0, l.jsxs)("div", {
                            className: sG.Nf,
                            children: [
                                (0, l.jsx)(sQ, { onChange: g, optionClassName: sG.Uq, selectedSortMethod: h }),
                                (0, l.jsx)(sy, { onChange: x, selectedFilters: E }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(sV, {
                    ref: u,
                    quests: f,
                    excludedQuests: v,
                    isFetching: j,
                    hasFetched: _,
                    hasFiltersApplied: E.length > 0,
                    onClearFilters: C,
                }),
            ],
        })
    );
}
var sX = n(575593),
    sJ = n(462887),
    sZ = n(765671),
    s0 = n(736653),
    s1 = n(162232),
    s4 = n(734736),
    s2 = n(303136),
    s5 = n(842245);
let s8 = function (e) {
    let { assetUrl: t, className: n, isAnimated: s = !1, questName: r } = e,
        i = t + "?format=webp";
    return (0, l.jsx)("div", {
        className: a()(s5.k, n),
        children: s
            ? (0, l.jsx)(s2.A, {
                  preload: "auto",
                  className: s5.L,
                  fallbackImage: i,
                  children: (0, l.jsx)("source", { src: t, type: "video/webm" }),
              })
            : (0, l.jsx)("img", { className: s5.L, src: i, alt: r }),
    });
};
var s6 = n(57718),
    s7 = n(966354);
let s3 = (0, r.memo)(function (e) {
    let { quest: t } = e,
        [n, s] = (0, r.useState)(!1),
        [i, o] = (0, r.useState)(24),
        [c, u] = (0, r.useState)(!1),
        d = (0, r.useRef)(null),
        h = (0, r.useRef)(null),
        E = (0, r.useRef)(null),
        g = (0, m.bG)([tp.default], () => tp.default.getCurrentUser()),
        { ref: x, height: f = 0 } = (0, sZ.Ay)(),
        v = (0, s0.Ay)(),
        j = (0, ep.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        _ = t.userStatus?.claimedTier ?? 0,
        C = t.config.rewards[_],
        S = C?.type === th.l.FRACTIONAL_PREMIUM,
        N = C?.type === th.l.COLLECTIBLE,
        p = C?.type === th.l.VIRTUAL_CURRENCY,
        O = (0, nG.Pk)(t),
        T = C?.collectibleProduct?.items?.[0],
        b = T?.type === sX.R.AVATAR_DECORATION ? T : null,
        I = r.useMemo(
            () =>
                null == C
                    ? null
                    : !0 === p && t.userStatus?.orbQuantityClaimed != null
                      ? ei.intl.format(ei.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : C.name,
            [C, p, t],
        );
    (0, sZ.i4)(d, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == h.current || null == d.current || null == E.current) return;
        let n = d.current.getBoundingClientRect(),
            s = h.current.getBoundingClientRect(),
            l = E.current.getBoundingClientRect();
        o((s.top - n.top - l.height) / 2);
    });
    let R = (0, sJ.M)(v),
        H = r.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        y = r.useMemo(() => (0, ey.tW)(t, ey.fY.REWARD, void 0, void 0, O), [t, O]),
        M = n ? f + 8 : 0,
        { content_position: L, row_index: Q, ...U } = (0, ee.fF)(Z.uF.TROPHY_CASE_CARD);
    function F() {
        (s(!0), t$.default.track(ew.HAw.QUEST_HOVER, { quest_id: t.id, ...U }));
    }
    function D() {
        s(!1);
    }
    function k(e) {
        (u(!0), t$.default.track(ew.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id }));
    }
    return null == C || c
        ? null
        : (0, l.jsx)(e7.vN, {
              children: (0, l.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: F,
                  onBlur: D,
                  onMouseEnter: F,
                  onMouseLeave: D,
                  className: a()(s7.kL, { [s7.yo]: n }),
                  children: [
                      null != g &&
                          N &&
                          null != b &&
                          (0, l.jsx)("div", {
                              ref: E,
                              className: s7.FX,
                              style: { top: i },
                              children: (0, l.jsx)(s1.A, {
                                  avatarDecorationOverride: b,
                                  user: g,
                                  guildId: null,
                                  animateOnHover: !n,
                              }),
                          }),
                      S
                          ? (0, l.jsx)(s4.A, { className: s7.Sl })
                          : p
                            ? (0, l.jsx)(s8, {
                                  className: s7.Sl,
                                  isAnimated: n,
                                  questName: t.config.messages.questName,
                                  assetUrl: y.url,
                              })
                            : y.isAnimated
                              ? (0, l.jsx)(A.A, {
                                    className: s7.JU,
                                    autoPlay: !1,
                                    children: (0, l.jsx)("source", {
                                        src: y.url,
                                        type: y.mimetype ?? void 0,
                                        onError: () => k(y.url),
                                    }),
                                })
                              : (0, l.jsx)("img", {
                                    className: s7.Sl,
                                    src: y.url,
                                    alt: t.config.messages.questName,
                                    onError: () => k(y.url),
                                }),
                      (0, l.jsx)("div", { className: a()(s7.Lw, { [s7.en]: R, [s7.So]: !R }) }),
                      (0, l.jsx)("div", {
                          ref: h,
                          className: s7.r$,
                          style: { transform: `translateY(-${M}px)` },
                          children: (0, l.jsx)(s6.Ay, {
                              logotypeClassName: a()(s7.wm, { [s7.A0]: H }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, l.jsxs)("div", {
                          ref: x,
                          className: s7.zH,
                          children: [
                              (0, l.jsx)(ek.D, {
                                  className: s7.DD,
                                  variant: "heading-sm/semibold",
                                  color: "text-overlay-light",
                                  children: ei.intl.format(ei.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, l.jsx)(X.E, {
                                  variant: "body-sm/medium",
                                  color: R ? "text-muted" : "text-overlay-light",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: ei.intl.format(ei.t["kXVcV+"], { reward: I, claimedDate: j }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var s9 = n(396478);
function le(e) {
    let { onClick: t } = e,
        s = (0, s0.Ay)();
    return (0, l.jsxs)(s9.pp, {
        theme: s,
        children: [
            (0, l.jsx)(s9.G8, { lightSrc: n(826223), darkSrc: n(317017), width: 415, height: 200 }),
            (0, l.jsx)(s9.SG, { note: ei.intl.format(ei.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var lt = n(178093);
function ln(e) {
    let { onSelectTab: t, className: n } = e,
        { claimedQuests: s, isFetchingClaimedQuests: r } = (0, ep.Iq)();
    return r && 0 === s.length
        ? (0, l.jsx)(eb.y, { className: lt.u })
        : 0 === s.length
          ? (0, l.jsx)(le, { onClick: () => t(ep.NC.ALL) })
          : (0, l.jsx)("div", {
                className: a()(lt.U, n),
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, l.jsx)(s3, { quest: e }, e.id)),
            });
}
var ls = n(192308);
let ll = r.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
function lr(e) {
    let { children: t, sectionIdentifier: n, questId: s, duplicate: i } = e,
        {
            targetQuestId: o,
            targetSectionIdentifier: c,
            highlightCount: u,
            highlightAnimationProgress: d,
        } = r.useContext(ll),
        m = o === s && c === n && !i,
        h = i || (null != o && (o !== s || c !== n)),
        { useNewTile: E } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        g = r.useMemo(() => t0(m, h, d), [m, h, d]);
    return (0, l.jsxs)(K.animated.div, {
        [ti]: "",
        className: a()({ [sq.XB]: m, [sq.FR]: E, [nD.y]: E }),
        style: g,
        children: [
            m &&
                (0, l.jsx)("div", {
                    className: sq.OA,
                    "aria-hidden": !0,
                    children: (0, l.jsx)("div", { className: sq.E4 }, u),
                }),
            t,
        ],
    });
}
var li = n(333007),
    la = n(765548),
    lo = n(897833);
function lc(e) {
    let { containerWidth: t, questIds: n, sectionIdentifier: s, ref: i } = e,
        a = (0, tK.C)(),
        { variant: o } = eH.Mk.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        c = o === eH.d.LARGE_MASK_MARGIN,
        u = n.length >= 2,
        d = r.useRef(null),
        m = r.useRef(null),
        h = r.useRef(null),
        E = (0, ls.Rv)(),
        { targetQuestId: g, targetSectionIdentifier: x } = r.useContext(ll),
        f = null != g && x === s,
        [v, j] = r.useState(!1),
        [_, C] = r.useState(!1),
        S = r.useCallback((e) => {
            C(e);
        }, []),
        {
            rotation: N,
            activeSlotIndex: p,
            scrollStart: O,
            isRepositionScroll: T,
            hasFocusWithin: b,
        } = (function (e) {
            let { numQuests: t, ready: n, rootRef: s, scrollerRef: l } = e,
                [i, a] = r.useState(-2),
                [o, c] = r.useState(0),
                [u, d] = r.useState(!1),
                m = r.useRef(!1),
                h = r.useRef(0),
                E = r.useRef(null),
                g = (0, la.A)(() => {
                    let e = l.current?.getScrollerNode(),
                        t = s.current;
                    if (null == e || null == t) return null;
                    let n = Array.from(e.querySelectorAll(ta));
                    if (n.length < 4) return null;
                    let r = n[1].offsetLeft - n[0].offsetLeft;
                    return r <= 0 ? null : { node: e, stride: r, rest: (0, tl.Rg)(e, n[2], t) };
                }),
                x = (0, la.A)(() => {
                    let e = E.current;
                    E.current = null;
                    let t = l.current?.getScrollerNode()?.scrollLeft;
                    return null != e && null != t && 1 > Math.abs(t - e);
                }),
                f = (0, la.A)(() => {
                    ((m.current = !1), 0 !== h.current && window.clearTimeout(h.current), (h.current = 0));
                }),
                v = (0, la.A)(() => {
                    if (m.current) return;
                    let e = g();
                    if (null == e) return;
                    let t = e.node.scrollLeft - e.rest;
                    if (!(1 > Math.abs(t))) {
                        var n, s, l;
                        ((n = e.node),
                            (s = Math.round(t / e.stride)),
                            (l = e.rest),
                            (0, li.flushSync)(() => {
                                (0 !== s && a((e) => e + s), 0 !== o && c(0));
                            }),
                            (E.current = l),
                            n.scrollTo({ left: l, behavior: "instant" }));
                    }
                }),
                j = (0, la.A)(() => {
                    m.current && (f(), v());
                }),
                _ = (0, la.A)(
                    (e) =>
                        !!n &&
                        !m.current &&
                        ((0, li.flushSync)(() => {
                            c(e);
                        }),
                        (m.current = !0),
                        (h.current = window.setTimeout(j, 1500)),
                        !0),
                );
            return (
                r.useLayoutEffect(() => {
                    if (!n) return;
                    let e = g();
                    null != e && ((E.current = e.rest), e.node.scrollTo({ left: e.rest, behavior: "instant" }));
                }, [g, t, n]),
                r.useEffect(() => {
                    let e = l.current?.getScrollerNode();
                    if (null == e || !n) return;
                    function t() {
                        d(!0);
                    }
                    function s(t) {
                        ((0, tg.vq)(t.relatedTarget, Node) && e.contains(t.relatedTarget)) || (d(!1), v());
                    }
                    function r() {
                        if (m.current) return void j();
                        let t = e.ownerDocument.activeElement;
                        ((0, tg.vq)(t) && e.contains(t) && t.matches(":focus-visible")) || v();
                    }
                    let i = new ResizeObserver(() => {
                        f();
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
                                f());
                        }
                    );
                }, [f, j, t, n, l, v]),
                {
                    rotation: i,
                    activeSlotIndex: t > 1 ? 2 + o : 0,
                    scrollStart: _,
                    isRepositionScroll: x,
                    hasFocusWithin: u,
                }
            );
        })({ numQuests: n.length, ready: null != t && u, rootRef: d, scrollerRef: m }),
        A = v || b || _,
        I = null == t ? 0 : (0, tl.mU)(t + 50, n.length),
        R = r.useMemo(() => {
            let e = [],
                t = new Set();
            for (let s = 0; s < I; s++) {
                let l = N + s,
                    r = ((l % n.length) + n.length) % n.length;
                (e.push({ questId: n[r], questIndex: r, key: `${n[r]}-${l}`, isDuplicate: t.has(n[r]) }), t.add(n[r]));
            }
            return e;
        }, [n, N, I]),
        H = r.useCallback(
            (e) => {
                let t = R.findIndex((t) => t.questId === e);
                -1 !== t &&
                    (d.current?.scrollIntoView({ block: "center", behavior: "smooth" }),
                    h.current?.scrollBySteps(t - 2));
            },
            [R],
        ),
        y = r.useCallback(
            (e) => {
                let {
                    scrollingType: t,
                    scrollWindowStartIndex: s,
                    scrollWindowEndIndex: l,
                    scrollWindowSize: r,
                    scrollingDirection: i,
                } = e;
                T() ||
                    (0, eq.kO)({
                        scrollingType: t,
                        scrollingDirection: i,
                        scrollWindowStartIndex: s,
                        scrollWindowEndIndex: l,
                        scrollWindowSize: r,
                        questContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                        carouselSize: n.length,
                    });
            },
            [T, n.length],
        );
    return (
        r.useImperativeHandle(i, () => ({ scrollToQuest: H }), [H]),
        (0, l.jsxs)("div", {
            ref: d,
            className: lo.I6,
            children: [
                (0, l.jsx)("div", { className: lo.Cz, "aria-hidden": !0 }),
                (0, l.jsx)(tm, {
                    maskWidth: (0, tl.Qm)(a),
                    overflowAmount: 25,
                    disableUserScroll: u,
                    groupedArrows: u,
                    onScrollStart: O,
                    onScrollEnd: y,
                    autoCycle: u && !(v || _ || b || E || f),
                    singleStep: !0,
                    scrollerRef: m,
                    controlRef: h,
                    maskMarginMultiplier: c ? 2 : 0.75,
                    children: (0, l.jsx)("div", {
                        className: lo.FO,
                        style: { "--custom-featured-tile-gap": "4px" },
                        onPointerEnter: () => j(!0),
                        onPointerLeave: () => j(!1),
                        children: R.map((e, t) =>
                            (0, l.jsx)(
                                lr,
                                {
                                    questId: e.questId,
                                    duplicate: e.isDuplicate,
                                    sectionIdentifier: s,
                                    children: (0, l.jsx)(su, {
                                        isInFeaturedSection: !0,
                                        isActive: t === p && !A,
                                        onMenuOpenChange: S,
                                        questId: e.questId,
                                        questContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                                        contentPosition: e.questIndex,
                                        rowIndex: 0,
                                        sourceQuestContent: Z.uF.QUEST_HOME_FEATURED_SECTION,
                                        sectionIdentifier: s,
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
var lu = n(915655);
function ld(e) {
    let { className: t, ...n } = e;
    return (0, l.jsxs)("div", {
        className: a()(lu.kL, t),
        ...n,
        children: [
            (0, l.jsx)("div", { className: a()(t1.m, lu.Gf), "aria-hidden": !0 }),
            (0, l.jsx)("div", {
                className: lu.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, l.jsx)("div", { className: a()(t1.m, lu.Vr) }, t),
                ),
            }),
        ],
    });
}
var lm = n(384343);
function lh(e) {
    let { questContent: t, questIds: n, rowIndex: s, sectionIdentifier: i } = e,
        { targetSectionIdentifier: a } = r.useContext(ll),
        { useNewTile: o } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        { variant: c } = eH.Mk.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        u = (0, tK.C)(),
        d = a === i,
        m = r.useCallback(
            (e) => {
                let {
                    scrollingType: s,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    scrollingDirection: a,
                } = e;
                (0, eq.kO)({
                    scrollingType: d ? ee.pk.AUTO : s,
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
        h = c === eH.d.LARGE_MASK_MARGIN;
    return (0, l.jsx)(tm, {
        maskWidth: (0, tl.Qm)(u),
        overflowAmount: 25,
        maskMarginMultiplier: h ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, l.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${(0, tl.Hf)(u, h)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: lm.FO,
            children: [
                n.map((e, n) =>
                    (0, l.jsx)(
                        lr,
                        {
                            questId: e,
                            sectionIdentifier: i,
                            children: o
                                ? (0, l.jsx)(su, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lm.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: i,
                                  })
                                : (0, l.jsx)(nF.Ay, {
                                      questId: e,
                                      isInFeaturedSection: i === tl.gi.FEATURED,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lm.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: i,
                                  }),
                        },
                        `animated-wrapper-${e}-${i}`,
                    ),
                ),
                (0, l.jsx)("div", { className: lm.fu }),
            ],
        }),
    });
}
var lE = n(125822),
    lg = n(977416);
let lx = tT.A.Millis.WEEK;
function lf() {
    let e = eR.A.quests;
    if (0 === eR.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let n of s.keys()) {
        let l = e.get(n);
        (null == l || (0, lg.Ic)(l)) && (null == t && (t = new Map(s)), t.delete(n));
    }
    return null != t && ((s = t), !0);
}
class lv extends m.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        (this.waitFor(eR.A), (s = new Map()));
        let t = !1;
        if (null != e) {
            let n = Date.now() - lx;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < n) {
                    t = !0;
                    continue;
                }
                s.set(l, r);
            }
        }
        return (this.syncWith([eR.A], lf), t);
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
let lj = new lv(nn.h, {
    QUESTS_MARK_DISCOVERED: function (e) {
        if (null == eR.A.getQuest(e.questId)) return !1;
        let t = new Map(s);
        (t.set(e.questId, new Date().toISOString()), (s = t));
    },
});
var l_ = n(948417);
function lC(e, t) {
    if (e === t) return !0;
    let n = new Set(e),
        s = new Set(t);
    return n.size === s.size && [...n].every((e) => s.has(e));
}
let lS = function () {
    let e = (0, sg.Gn)(),
        t = (0, ep.Cv)(),
        n = (0, m.bG)([eR.A], () => eR.A.lastFetchedCurrentQuests > 0),
        { quests: s, isFetchingCurrentQuests: l } = (0, ep.Qh)(ep.NC.ALL, {
            sortMethod: tQ.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        i = (0, lE.A)(
            () =>
                s.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            s.map((e) => {
                let { id: t } = e;
                return t;
            }),
            lC,
        ),
        a = (0, F.T2)(),
        o = (0, m.bG)([lj], () => lj.getDiscoveredAtByQuestId(), []),
        c = r.useMemo(() => (l || !n) && 0 === i.length, [l, n, i.length]),
        { useNewTile: u } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        d = r.useMemo(
            () =>
                c
                    ? []
                    : (0, l_.P_)({
                          allQuestIds: i,
                          hero: a,
                          discoveredAtByQuestId: o,
                          isStaff: e,
                          isPreviewerOnAnyQuest: t,
                          useNewTile: u,
                      }),
            [i, a, o, c, e, t, u],
        ),
        h = r.useCallback((e) => d.find((t) => t.questIds.includes(e))?.identifier ?? null, [d]);
    return { sections: d, isFetchingCurrentQuests: c, getSectionIdentifierForTargetedQuest: h };
};
var lN = n(113775);
let lp = {
        [tl.gi.FEATURED]: Z.uF.QUEST_HOME_FEATURED_SECTION,
        [tl.gi.IN_PROGRESS]: Z.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [tl.gi.ENDING_SOON]: Z.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [tl.gi.ORB]: Z.uF.QUEST_HOME_ORB_SECTION,
        [tl.gi.DISCOVERED]: Z.uF.QUEST_HOME_DISCOVERED_SECTION,
        [tl.gi.EXPIRED]: Z.uF.QUEST_HOME_EXPIRED_SECTION,
        [tl.gi.PREVIEW]: Z.uF.QUEST_HOME_PREVIEW_SECTION,
        [tl.gi.SPECIAL_QUESTS]: Z.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    lO = 4 * tT.A.Millis.SECOND;
function lT(e) {
    let { deepLinkedQuestId: t, isLoadingQuestHomeHero: n, className: s, ref: i } = e,
        c = (0, o.zy)(),
        { useNewTile: u, useNewFeaturedTiles: d } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        { sections: m, isFetchingCurrentQuests: h, getSectionIdentifierForTargetedQuest: E } = lS(),
        g = r.useRef(null),
        x = r.useRef(null),
        { showToast: f } = sD(),
        [v, j] = r.useState(null),
        [_, C] = r.useState(null),
        [S, N] = r.useState(0),
        [p, O] = r.useState(null),
        T = r.useRef(null),
        b = r.useCallback(
            (e) => {
                O(e.contentRect.width);
            },
            [O],
        );
    (0, e9.g)(g, b, [b], { fireOnMount: !0 });
    let [{ highlightAnimationProgress: A }, I] = (0, e6.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: lO },
        })),
        R = r.useCallback(
            (e, t) => {
                if (null == e || null == p || h || n) return !1;
                t && (0, ns.sB)(e);
                let s = E(e),
                    l = !0 === t && s !== tl.gi.FEATURED ? tl.gi.DISCOVERED : s;
                if (null == s) return (f(e), !1);
                let r = document.getElementById((0, nF.sT)(e, l ?? void 0));
                return (
                    null != r &&
                    (j(e),
                    C(l),
                    N((e) => e + 1),
                    l === tl.gi.FEATURED && u && d
                        ? x.current?.scrollToQuest(e)
                        : r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                    I({
                        from: { highlightAnimationProgress: 0 },
                        to: { highlightAnimationProgress: 1 },
                        reset: !0,
                        onRest: (e) => {
                            e.cancelled || (j(null), C(null));
                        },
                    }),
                    !0)
                );
            },
            [u, d, j, N, I, h, n, f, p, E],
        );
    (r.useImperativeHandle(i, () => ({ scrollToQuest: R }), [R]),
        r.useLayoutEffect(() => {
            if (null == t) {
                T.current = null;
                return;
            }
            T.current !== c && R(t, !0) && (T.current = c);
        }, [c, t, R]));
    let H = r.useMemo(
        () => ({ targetQuestId: v, targetSectionIdentifier: _, highlightCount: S, highlightAnimationProgress: A }),
        [v, _, S, A],
    );
    return (0, l.jsx)(ll.Provider, {
        value: H,
        children: (0, l.jsx)("div", {
            className: a()(lN.kL, s),
            ref: g,
            children: h
                ? (0, l.jsx)(ld, { role: "status", "aria-label": ei.intl.string(ei.t.ZTNur7) })
                : m.length > 0
                  ? m.map((e, t) => {
                        let { identifier: n, questIds: s, title: r } = e;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: lN.p9,
                                children: [
                                    (0, l.jsx)(ek.D, {
                                        variant: "heading-lg/semibold",
                                        style: { "--custom-section-title-inset": "2px" },
                                        className: lN.Gf,
                                        children: ei.intl.string(r),
                                    }),
                                    n === tl.gi.FEATURED && u && d
                                        ? (0, l.jsx)(lc, {
                                              ref: x,
                                              questIds: s,
                                              containerWidth: p,
                                              sectionIdentifier: n,
                                          })
                                        : (0, l.jsx)(lh, {
                                              questIds: s,
                                              rowIndex: t,
                                              sectionIdentifier: n,
                                              questContent: lp[n],
                                          }),
                                ],
                            },
                            n,
                        );
                    })
                  : (0, l.jsxs)("div", {
                        className: lN.y7,
                        children: [
                            (0, l.jsx)(ek.D, { variant: "heading-xl/semibold", children: ei.intl.string(ei.t.NqFP6z) }),
                            (0, l.jsx)(X.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: ei.intl.string(ei.t.LhD4yH),
                            }),
                        ],
                    }),
        }),
    });
}
var lb = n(121894),
    lA = n(851936);
let lI = (0, en.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let n = t().logger ?? (0, lA.L)({ location: tQ.rE.QUEST_HOME_DESKTOP });
        if (n.info === tU.tE || t().elapsed >= 6e4) return;
        let s = performance.now() - t().startTime;
        s > 6e4 && (s = 6e4);
        let l = { elapsed: s };
        (s - t().lastOutputLogTime > 1e3 &&
            (n.info(`QuestHome asset loading duration so far: ${s}ms`), (l.lastOutputLogTime = s)),
            null == t().logger && (l.logger = n),
            (0, lb.r)(() => e(l)));
    },
}));
var lR = n(516226),
    lH = n(620241);
function ly(e) {
    let { children: t, hasSearchResults: n } = e,
        { showDefaultBanner: s } = eN.C.useConfig({ location: tQ.rE.QUEST_HOME_DEFAULT_BANNER });
    return s ? (0, l.jsx)("div", { className: a()(lH.iS, { [lH.R]: n }), children: t }) : null;
}
function lM(e) {
    let { children: t, onQuestCtaClick: n, questHomeHero: s, isLoadingQuestHomeHero: r, hasSearchResults: i } = e,
        { hasError: o, isLoading: c } = (0, eO.zT)(),
        u = null != s && !o,
        d = r || (u && c);
    return (0, l.jsxs)("div", {
        className: a()(lH.iS, { [lH.R]: i }),
        children: [
            d && (0, l.jsx)(nt, {}),
            !r && (u ? (0, l.jsx)(ne, { hero: s, isBannerLoading: c, onQuestCtaClick: n }) : t),
        ],
    });
}
var lL = n(613956),
    lQ = n(604880),
    lU = n(318808);
function lF(e) {
    let { adCreativeIds: t } = e,
        n = r.useCallback(() => (0, n0.zg)(t), [t]);
    return (0, l.jsxs)("div", {
        className: lL.MY,
        children: [
            (0, l.jsx)("img", { className: lL.Bg, src: lU.Ay, alt: "" }),
            (0, l.jsx)("div", { className: lL.r$, children: (0, l.jsx)("img", { src: lQ, alt: "" }) }),
            (0, l.jsxs)("div", {
                className: lL.Nr,
                children: [
                    (0, l.jsx)(ek.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: lL.ky,
                        children: ei.intl.string(ei.t.GXmn57),
                    }),
                    (0, l.jsx)(X.E, {
                        variant: "body-md/normal",
                        className: lL.G3,
                        children: ei.intl.string(ei.t.bWuKqh),
                    }),
                    (0, l.jsx)(x.$, {
                        variant: "primary",
                        text: ei.intl.string(ei.t.UQvCf7),
                        fullWidth: !0,
                        onClick: n,
                    }),
                ],
            }),
        ],
    });
}
var lD = n(143592),
    lk = n(215130);
let lP = function (e) {
    let { matchingQuestIds: t } = e,
        n = (0, tK.C)(),
        { useNewTile: s } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        { variant: i } = eH.Mk.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        o = r.useRef(null),
        c = i === eH.d.LARGE_MASK_MARGIN,
        u = s ? 12 : 20,
        d = sk(o, (0, tl.Hf)(n, c), u, 3);
    return (0, l.jsxs)(v.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: lk.kL,
        ref: o,
        children: [
            (0, l.jsxs)(ek.D, {
                variant: "heading-lg/medium",
                children: [ei.intl.string(ei.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, l.jsxs)(v.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: lk.y7,
                      children: [
                          (0, l.jsx)(lD.e, { alt: ei.intl.string(ei.t["Xe+fJM"]) }),
                          (0, l.jsxs)(v.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, l.jsx)(ek.D, {
                                      variant: "heading-lg/medium",
                                      children: ei.intl.string(ei.t["Xe+fJM"]),
                                  }),
                                  (0, l.jsx)(ek.D, {
                                      variant: "heading-xs/medium",
                                      children: ei.intl.string(ei.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsx)("div", {
                      className: lk.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${(0, tl.Hf)(n, c)}px`,
                          "--custom-quest-grid-gap": `${u}px`,
                      },
                      children:
                          null !== d &&
                          t.map((e, t) =>
                              s
                                  ? (0, l.jsx)(
                                        nk,
                                        {
                                            children: (0, l.jsx)(su, {
                                                eagerLoadAssets: !0,
                                                questId: e,
                                                questContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                                contentPosition: t,
                                                rowIndex: Math.floor(t / d),
                                                className: a()(lk.d, lk.hS),
                                                sourceQuestContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                            }),
                                        },
                                        e,
                                    )
                                  : (0, l.jsx)(
                                        nF.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / d),
                                            className: lk.d,
                                            sourceQuestContent: Z.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var lq = n(947079);
function lw() {
    let { enabled: e } = eH.Mk.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: t } = eH.aD.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        { newLayoutWithSearch: n } = (0, lq.V)();
    return e || t || n;
}
var lB = n(649852),
    lV = n.n(lB),
    lW = n(379078),
    lG = n(704554),
    lz = n(823784);
let lK = {
        searchType: lW.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(tY.Vq);
        },
        sortType: lW.r.JARO_WINKLER,
        throttleMs: 200,
    },
    l$ = function () {
        let [e, t] = r.useState(""),
            [n, s] = r.useState(null),
            l = (0, m.yK)([eR.A], () =>
                (0, ep.mn)(Array.from(eR.A.quests.values()), { sortMethod: tQ.kL.SUGGESTED }).map((e) => e.config),
            ),
            i = e.trim().toLowerCase(),
            a = "" !== i,
            o = r.useMemo(() => lV()(eq.gr, 1e3), []),
            c = r.useCallback(() => {
                o.cancel();
                let e = (0, lz.tv)();
                (null != e &&
                    (0, eq.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, lz.l6)());
            }, [o]),
            u = r.useCallback(() => {
                (c(), t(""));
            }, [c]);
        r.useEffect(
            () => () => {
                c();
            },
            [c],
        );
        let d = r.useCallback(
            (e) => {
                if (
                    (s(
                        a
                            ? e
                                  .map((e) => {
                                      let { id: t } = e;
                                      return t;
                                  })
                                  .filter(tY.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: n } = (0, lz.$N)();
                    (n && (0, eq.OQ)({ searchSessionId: t.uuid }),
                        o({
                            searchSessionId: t.uuid,
                            searchQuery: i,
                            searchQueryLength: i.length,
                            resultsCount: e.length,
                            hasResults: e.length > 0,
                        }));
                } else u();
            },
            [a, i, o, u],
        );
        return ((0, lG.RT)(i, l, d, lK), { matchingQuestIds: n, query: e, setQuery: t, onSearchClose: u });
    };
var lY = n(877227),
    lX = n(839214);
let lJ = Object.freeze({ tab: ep.NC.ALL }),
    lZ = (0, lX.D)((e) => ({
        ...lJ,
        initializeFromUrl: (t, n) => {
            let s = new URLSearchParams(t).get(ep.L1.TAB);
            (s !== ep.NC.PREVIEW_TOOL || n) && null != s && Object.values(ep.NC).includes(s)
                ? e({ tab: s })
                : e({ tab: ep.NC.ALL });
        },
        setTab: (t) => {
            e({ tab: t });
            let n = new URLSearchParams();
            n.set(ep.L1.TAB, t);
            let s = `${ew.BVt.QUEST_HOME}?${n.toString()}`;
            (0, lY.pX)(s.toString());
        },
    }));
var l0 = n(758836),
    l1 = n(613057);
let l4 = r.createContext({});
function l2(e) {
    let { backdrop: t, banner: n, children: s, header: i, withFullBleedBanner: a = !1 } = e,
        { onScroll: o, scrollerRef: c } = r.useContext(l4);
    return (0, l.jsxs)(ts.X.Provider, {
        value: c,
        children: [
            i,
            (0, l.jsx)(ed, {}),
            (0, l.jsxs)(U.A, {
                onScroll: o,
                ref: c,
                children: [
                    t,
                    a && n,
                    (0, l.jsxs)(L.A, { className: lH.Jo, innerClassName: lH.FG, children: [!a && n, s] }),
                ],
            }),
        ],
    });
}
function l5(e) {
    let { selectedTab: t, onSelectTab: n, tabs: s, endContent: r } = e;
    return (0, l.jsx)(Q.S, {
        selectedTabId: t,
        handleTransition: n,
        tabs: s,
        endContent: r,
        icon: E.QuestsIcon,
        keepToastsBelow: !0,
    });
}
function l8(e) {
    let { onLoadComplete: t, className: n, isVirtualCurrencyEnabled: s } = e,
        i = (0, m.bG)([C.Ay], () => C.Ay.useReducedMotion),
        a = (0, m.bG)([ex.A], () => ex.A.isFocused()),
        { ref: o, inViewport: c } = (0, sN.p)(),
        u = r.useRef(null);
    if (
        (r.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (a && c && !i)
                    ? u.current.paused && !i && c && a && u.current.play()
                    : u.current.pause());
        }, [i, c, a]),
        s)
    ) {
        let e = (0, ef.TM)();
        return (0, l.jsx)(eO._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (s) =>
                (0, l.jsx)(A.A, {
                    ref: (e) => {
                        ((u.current = e), (o.current = e), (s.current = e));
                    },
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    className: n,
                    onProgress: t,
                    "data-mtctest-ignore": "true",
                    controls: !1,
                    children: (0, l.jsx)("source", {
                        src: e
                            ? "https://cdn.discordapp.com/assets/content/529e0aea2b87be4a587568435eaac176bf71b8dd46035db9c88acdee11187eb8.mp4"
                            : "https://cdn.discordapp.com/assets/content/fbd6cf99b9be35ba1d953fd30b81a35c9bd8edf7808b576ef6fc7c65cbc1d9a6.webm",
                        type: e ? "video/mp4" : "video/webm",
                    }),
                }),
        });
    }
    return (0, l.jsx)(eO._M, {
        id: "QuestHomeHeroBackground_bannerImage",
        children: (e) =>
            (0, l.jsx)("img", {
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
    return (0, l.jsxs)("div", {
        className: a()(lH.Tv, { [lH.lJ]: n }),
        children: [
            (0, l.jsx)(t6, {}),
            (0, l.jsx)("div", { className: a()(lH.nz, { [lH.ZZ]: n }) }),
            (0, l.jsx)(l8, {
                onLoadComplete: t,
                className: a()(lH.Fe, { [lH.H4]: n, [lH.Q8]: !n }),
                isVirtualCurrencyEnabled: n,
            }),
        ],
    });
}
function l7(e) {
    let { onAssetLoad: t } = e,
        { enabled: n } = eS.useConfig({ location: tQ.rE.QUEST_HOME_DESKTOP }),
        s = !n,
        i = r.useCallback(() => {
            s ? window.open(ew.X7G.PAID_TERMS_ORBS) : window.open(ev.A.getArticleURL(ew.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, l.jsx)(eW, {
        adContentId: s ? tQ.yr : tQ.uz,
        title: s ? ei.intl.format(ei.t.BCBIlp, {}) : ei.intl.format(ei.t.lmMBfy, {}),
        subtitle: s ? ei.intl.format(ei.t.U9FY0J, {}) : ei.intl.string(ei.t.oWCrBq),
        buttons: s
            ? (0, l.jsxs)(g.e, {
                  children: [
                      (0, l.jsx)(x.$, {
                          variant: "overlay-primary",
                          text: ei.intl.string(ei.t["3bdWzt"]),
                          onClick: () =>
                              (0, T.Cz)({
                                  tab: l0.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: S.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, l.jsx)(x.$, {
                          variant: "overlay-secondary",
                          text: ei.intl.string(ei.t["7kTAgJ"]),
                          onClick: i,
                      }),
                  ],
              })
            : (0, l.jsx)(x.$, {
                  variant: "overlay-primary",
                  text: ei.intl.string(ei.t.hvVgAZ),
                  onClick: i,
                  icon: f.LinkExternalSmallIcon,
                  iconPosition: "end",
              }),
        background: (0, l.jsx)(l6, { onAssetLoad: t, isVirtualCurrencyEnabled: s }),
    });
}
let l3 = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, o.zy)(),
        s = (0, o.W6)(),
        i = r.useMemo(() => new URLSearchParams(n.search).getAll(ep.L1.AD_CREATIVE_IDS), [n.search]),
        E = (u.Fr || u.v1) && i.length > 0,
        g = (0, m.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: x,
            onSelectTab: f,
            tabs: C,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                n = lZ.useField("tab"),
                s = (0, o.zy)(),
                l = (0, ep.p5)(),
                i = lw();
            r.useEffect(() => {
                lZ.getState().initializeFromUrl(s.search, l);
            }, [s.search, l]);
            let a = r.useCallback((e) => {
                lZ.getState().setTab(e);
            }, []);
            return {
                tabs: r.useMemo(
                    () =>
                        [
                            { id: ep.NC.ALL, label: i ? ei.intl.string(ei.t.Jt6u7B) : ei.intl.string(ei.t["0SzXmi"]) },
                            t
                                ? {
                                      id: ep.NC.CLAIMED,
                                      label: i ? ei.intl.string(ei.t["3TVY/R"]) : ei.intl.string(ei.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: ep.NC.PREVIEW_TOOL, label: ei.intl.string(ei.t.BDUDau) } : null,
                        ].filter(tY.Vq),
                    [t, l, i],
                ),
                selectedTab: n,
                onSelectTab: a,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: A, setQuery: R, matchingQuestIds: H, onSearchClose: L } = l$(),
        { onScroll: Q } = (0, M.G)(),
        U = e_.A.getState().getUtmCurrentContext(),
        D = lI((e) => e.registerAssetLoad),
        k = r.useRef(U);
    (r.useEffect(() => {
        k.current = U;
    }),
        r.useEffect(() => {
            let { current: e } = k;
            (0, N.x)({
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
        (0, b.HU)({ location: ei.intl.string(ei.t.JALI2K) }),
        (0, em.Ay)());
    let q = r.useRef(null),
        w = lw(),
        B = r.useRef(null),
        V = r.useCallback((e) => {
            B.current?.scrollToQuest(e);
        }, []),
        W = r.useMemo(() => ((0, ej.uJ)(n.hash) ? null : n.hash.substring(1)), [n.hash]),
        { questHomeHero: G, isLoading: K, confirmedEmpty: $ } = (0, F.lg)(i[0] ?? null),
        { showHeroPlaceholder: Y } = (0, eN.x)(),
        X = r.useCallback(() => {
            ((0, eE.Y)({
                pageType: ew.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ew.JJy.ORBS_BALANCE_MENU,
                ctaObject: ew.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, T.Cz)({ tab: l0.G2.ORBS, analyticsLocations: [], analyticsSource: S.A.ORBS_BALANCE_MENU }));
        }, []);
    (r.useEffect(() => {
        ((0, _.I)(ew.BVt.QUEST_HOME), (0, eh.d0)("quest_home"));
    }, []),
        r.useEffect(() => {
            y.trigger();
        }, []),
        r.useEffect(() => {
            if (E || null != g) return;
            let e = new URLSearchParams(n.search),
                l = e.get(ep.L1.TAB);
            if (l === ep.NC.PREVIEW_TOOL) {
                let t = e.get(ep.L1.QUEST_ID);
                p.A.openNativeAppModal("quests", ew.e$_.DEEP_LINK, {
                    type: l1.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === s.action && r?.type === "navigate" && t && l !== ep.NC.PREVIEW_TOOL) {
                let t = (0, ej.uJ)(n.hash) ? null : n.hash.substring(1),
                    s = e.get(ep.L1.SORT),
                    r = e.get(ep.L1.FILTER),
                    i = e.get(ep.L1.AD_CREATIVE_IDS);
                p.A.openNativeAppModal("quests", ew.e$_.DEEP_LINK, {
                    type: l1.XK.QUEST_HOME,
                    params: { questId: (0, ej.uJ)(t) ? void 0 : t, sort: s, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [n.search, g, s.action, n.hash, t, E]),
        r.useEffect(() => {
            t && (0, I.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]));
    let J = r.useCallback(
            (e) => {
                (s.replace({ ...s.location, hash: void 0 }), q.current?.scrollToTop({ animate: !1 }), f(e), L());
            },
            [s, f, L],
        ),
        Z = r.useMemo(() => null != H && w, [H, w]),
        ee = r.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        et = r.useMemo(() => ({ onScroll: Q, scrollerRef: q }), [Q, q]),
        en = K && !Y;
    return E
        ? (0, l.jsx)(lF, { adCreativeIds: i })
        : (0, l.jsx)(lR.M.Provider, {
              value: ee,
              children: (0, l.jsx)(l4.Provider, {
                  value: et,
                  children: (0, l.jsx)("div", {
                      className: a()(lH.kL, { [lH.KY]: !t }),
                      children: (0, l.jsxs)(l2, {
                          backdrop: x === ep.NC.ALL && !Z && (0, l.jsx)(z, { hero: G }),
                          header: (0, l.jsx)(l5, {
                              selectedTab: x,
                              onSelectTab: J,
                              tabs: C,
                              endContent: (0, l.jsxs)(v.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      w &&
                                          (0, l.jsx)(j.I, {
                                              query: A,
                                              onChange: R,
                                              placeholder: ei.intl.string(ei.t.y10TI2),
                                              onClear: L,
                                              size: "sm",
                                          }),
                                      (0, l.jsx)(eg.SS, {
                                          analyticsPage: ew.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: eg.cP.END,
                                          ctaText: ei.intl.string(ei.t["J+vlIR"]),
                                          ctaOnClick: X,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              x === ep.NC.ALL &&
                              !en &&
                              (0, l.jsx)(
                                  eO.y5,
                                  {
                                      source: tQ.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: G?.id ?? null,
                                      adCreativeType: d.p.QUEST_HOME_HERO,
                                      children: $
                                          ? (0, l.jsx)(ly, {
                                                hasSearchResults: Z,
                                                children: (0, l.jsx)(l7, { onAssetLoad: D }),
                                            })
                                          : (0, l.jsx)(lM, {
                                                onQuestCtaClick: V,
                                                hasSearchResults: Z,
                                                questHomeHero: G,
                                                isLoadingQuestHomeHero: K,
                                                children: (0, l.jsx)(l7, { onAssetLoad: D }),
                                            }),
                                  },
                                  G?.id,
                              ),
                          children: [
                              Z && null != H && (0, l.jsx)(lP, { matchingQuestIds: H }),
                              x === ep.NC.CLAIMED
                                  ? (0, l.jsx)(ln, { onSelectTab: J, className: Z ? lH.R : void 0 })
                                  : x === ep.NC.PREVIEW_TOOL
                                    ? (0, l.jsx)(sS, { className: Z ? lH.R : void 0 })
                                    : w
                                      ? (0, l.jsx)(lT, {
                                            className: Z ? lH.R : void 0,
                                            ref: B,
                                            deepLinkedQuestId: W,
                                            isLoadingQuestHomeHero: K,
                                        })
                                      : (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(sY, { ref: B }), !Z && (0, l.jsx)(P, {})],
                                        }),
                          ],
                      }),
                  }),
              }),
          });
};
