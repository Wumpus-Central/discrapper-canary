let s;
(n.r(t), n.d(t, { default: () => rE }), n(323874), n(14289), n(35956));
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
    x = n(825484),
    g = n(821609),
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
let H = new y.E([], M.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var L = n(899647),
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
var w = n(773527),
    B = n(47671),
    V = n(644235),
    W = n(253932);
function G() {
    let e = (0, E.bG)([B.A], () => null != B.A.gradientPreset),
        t = (0, V.lo)(W.eh.useSetting().customUserThemeSettings);
    return e || t;
}
var K = n(594906);
function z(e) {
    let { hero: t } = e,
        n = G();
    return !(0, w.Tn)(t) || n ? null : (0, r.jsx)("div", { className: K.D, "aria-hidden": !0 });
}
var $ = n(120692),
    Y = n(62617);
function X(e) {
    let { alt: t, ariaLabel: n, ariaHidden: s, role: l, width: a, height: o, className: u, style: c } = e,
        d = i.useMemo(
            () => (0, Y.H)({ width: a, height: o, intrinsicWidth: 182, intrinsicHeight: 78, style: c }),
            [a, o, c],
        );
    return (0, r.jsx)("img", {
        style: d,
        src: "https://cdn.discordapp.com/assets/content/3517a070223ca50267cf58285f0efed6b78c7047b963d66faf823d10de79c46c.svg",
        className: (0, Y.Z)(u),
        alt: t,
        "aria-label": n,
        "aria-hidden": s,
        role: l ?? "img",
    });
}
var J = n(834730),
    Z = n(866323),
    ee = n(506988),
    et = n(590202),
    en = n(332560),
    es = n(196765);
let el = (0, es.v)((e) => ({
    isIntroCardScrolledPast: !1,
    setIsIntroCardScrolledPast: (t) => e({ isIntroCardScrolledPast: t }),
}));
var er = n(484063),
    ei = n(701256),
    ea = n(792996),
    eo = n(90308);
let eu = { transform: "translateY(-100%)" },
    ec = { transform: "translateY(0%)" };
function ed(e) {
    let { style: t } = e,
        n = i.useCallback(() => {
            ((0, en.iM)({ content: ee.uF.QUEST_HOME_HERO_STICKY_HEADER, questContentCTA: et.Cy.OPEN_AD_PERK_MODAL }),
                (0, er.A)({ sourceQuestContent: ee.uF.QUEST_HOME_HERO_STICKY_HEADER }));
        }, []);
    return (0, r.jsxs)($.animated.div, {
        className: eo.M0,
        style: t,
        children: [
            (0, r.jsxs)("div", {
                className: eo.i8,
                children: [
                    (0, r.jsx)(X, { alt: "", ariaHidden: !0, height: 39, className: eo.$e }),
                    (0, r.jsx)(J.E, {
                        variant: "body-sm/semibold",
                        color: "text-overlay-light",
                        lineClamp: 1,
                        className: eo.DD,
                        children: ea.intl.string(ei.default["fShp/D"]),
                    }),
                ],
            }),
            (0, r.jsx)(g.$, {
                variant: "overlay-primary",
                size: "sm",
                text: ea.intl.string(ei.default["KX1/jp"]),
                onClick: n,
            }),
        ],
    });
}
function em() {
    let e = el((e) => e.isIntroCardScrolledPast);
    i.useEffect(() => {
        e && (0, en.TW)({ content: ee.uF.QUEST_HOME_HERO_STICKY_HEADER });
    }, [e]);
    let t = (0, Z.p)(e, { from: eu, enter: ec, leave: eu, config: $.config.stiff });
    return (0, r.jsx)("div", {
        className: eo.kL,
        children: (0, r.jsx)("div", { className: eo.$Q, children: t((e, t) => t && (0, r.jsx)(ed, { style: e })) }),
    });
}
var eE = n(62234),
    eh = n(318346),
    ef = n(32163),
    ex = n(531685),
    eg = n(676279),
    ev = n(975571),
    ej = n(240248),
    eC = n(87549),
    e_ = n(945810);
let eS = (0, e_.mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ep = n(860996),
    eN = n(61387),
    eA = n(557637),
    eO = n(939249),
    eT = n(289873),
    eb = n(438457),
    eI = n(144779),
    eR = n(122760),
    ey = n(914313),
    eM = n(760914),
    eH = n(18437),
    eL = n(574112),
    eQ = n(415441),
    eU = n(280905),
    eD = n(139384),
    eF = n(43990),
    eP = n(534514),
    ek = n(770178),
    eq = n(561844),
    ew = n(652215),
    eB = n(691388);
function eV(e, t) {
    let { row_index: n, ...s } = (0, et.fF)(ee.uF.QUEST_HOME_HERO);
    (0, eq.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: s,
        sourceQuestContent: ee.uF.QUEST_HOME_HERO,
    });
}
let eW = function (e) {
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
        x = (0, ek.w)(f, [], { fireOnMount: !0 }),
        g = i.useCallback(() => eV(t, ew.HAw.QUEST_HOVER), [t]),
        v = i.useCallback(() => eV(t, ew.HAw.QUEST_HOVER_OFF), [t]);
    return (0, r.jsx)(eF.N, {
        theme: ew.NJ8.ONYX,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(eB.iE, e, c),
                onMouseEnter: g,
                onMouseLeave: v,
                ref: (e) => {
                    ((x.current = e), "function" == typeof m ? m(e) : null != m && (m.current = e));
                },
                children: (0, r.jsxs)("div", {
                    className: eB.FG,
                    children: [
                        d,
                        (0, r.jsxs)(j.B, {
                            className: o()(eB.Qs, { [eB.X]: null != d && !1 !== d }),
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(j.B, {
                                    className: eB.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(eP.D, {
                                                    color: "text-strong",
                                                    variant: E,
                                                    className: eB.DD,
                                                    children: s,
                                                }),
                                                (0, r.jsx)(J.E, {
                                                    color: "text-strong",
                                                    variant: "body-md/normal",
                                                    className: eB.VA,
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
var eG = n(113597);
(n(134528), n(947204));
var eK = n(749401),
    ez = n(635377),
    e$ = n.n(ez),
    eY = n(998304),
    eX = n(515718);
let eJ = new (e$())({ max: 50 });
var eZ = n(49491),
    e0 = n(454908),
    e1 = n(646514),
    e2 = n(169099),
    e4 = n(650809),
    e5 = n(48507),
    e8 = n(111159),
    e3 = n(717421),
    e6 = n(559106),
    e7 = n(516521);
n(321073);
var e9 = n(535185),
    te = n(408278),
    tt = n(548411),
    tn = n(554830),
    ts = n(321503),
    tl =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let tr = [
    { type: "featured-quests", identifier: "featured", title: ea.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: ea.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: ea.t.P0lmqC },
    { type: "quests", identifier: "orb", title: ea.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: ea.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: ea.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: ea.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: ea.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function ti(e) {
    return e1.A.space.SPACE_XL.resolve({ density: e });
}
function ta(e, t) {
    return (1220 - 2 * ti(e) * (t ? 2 : 0.75)) / 3;
}
function to(e, t, n) {
    return e.scrollLeft + (t.getBoundingClientRect().left - (n.getBoundingClientRect().left + 2));
}
var tu = n(915850);
let tc = "data-scroll-target",
    td = `[${tc}]`,
    tm = { anchors: [], windowSizes: [] },
    tE = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])',
    th = { overflowX: "hidden" };
function tf(e, t, n) {
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
let tx = i.memo(function (e) {
    let {
            children: t,
            className: n,
            itemSelector: s = td,
            maskWidth: l = 24,
            overflowAmount: a = 0,
            maskMarginMultiplier: u = 1,
            disableUserScroll: c = !1,
            groupedArrows: d = !1,
            scrollerRef: m,
            controlRef: h,
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
        _ = i.useRef(null),
        p = i.useRef(0),
        N = i.useRef(null),
        [A, O] = i.useState(!1),
        [T, b] = i.useState(!1),
        [I, R] = i.useState(!0),
        [y, M] = i.useState([]),
        [H, L] = i.useState([]),
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
                if (null == a || null == o || a.scrollWidth <= a.clientWidth) return tm;
                let u = Array.from(a.querySelectorAll(s));
                if (0 === u.length) return tm;
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
                        m.push(to(a, u[e], o));
                        continue;
                    }
                    if (h === u.length - 1) break;
                    e > 0 && m.push((t + d(u[h])) / 2);
                }
                return E.length < 2 ? tm : (i || m.push(a.scrollWidth), { anchors: m, windowSizes: E });
            })({
                scrollerRef: j,
                containerRef: N,
                itemSelector: s,
                maskWidth: l,
                maskMarginMultiplier: u,
                singleStep: g,
            });
            (L(t), M((t) => (t.length === e.length && t.every((t, n) => t === e[n]) ? t : e)));
        }, [l, s, u, g, M]),
        F = i.useCallback(() => {
            if (null == N.current || N.current?.clientWidth === 0) return R(!0);
            R(N.current?.clientWidth >= 1260);
        }, [N]),
        P = i.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    s = j.current?.getScrollerNode();
                if (null == s || y.length < 2 || (null != f && !f(e * n))) return !1;
                let { currentIndex: l, scrollLefts: r } = tf(s, y, g),
                    i = g ? n : (H[l] ?? 1),
                    a = Math.max(0, Math.min(y.length - 1, l + e * i));
                return ((_.current = t), s.scrollTo({ left: r[a], behavior: Q }), !0);
            },
            [Q, y, H, g, f],
        ),
        k = (function (e) {
            let { isEnabled: t, advance: n } = e,
                s = i.useRef(null),
                l = i.useCallback(() => {
                    t && n(1, et.pk.AUTO);
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
                0 !== e && q(e > 0 ? 1 : -1, et.pk.AUTO, Math.abs(e));
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
                    ((_.current = et.pk.MANUAL),
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
            let { currentIndex: t } = tf(e, y, g),
                n = _.current ?? et.pk.MANUAL;
            _.current = null;
            let s = p.current;
            p.current = e.scrollLeft;
            let l = e.scrollLeft > s ? et.VU.RIGHT : et.VU.LEFT,
                r = H[t] ?? 1;
            x?.({
                scrollingType: n,
                scrollWindowStartIndex: t,
                scrollWindowEndIndex: t + r - 1,
                scrollWindowSize: r,
                scrollingDirection: l,
            });
        }, [x, y, H, g]),
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
                    o = null == a ? null : a.matches(tE) ? a : a.querySelector(tE);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && B(a, "instant"));
            },
            [s, B],
        ),
        K = i.useCallback(() => {
            (U(), D(), F());
        }, [U, D, F]);
    (0, e9.g)(N, K, [], { fireOnMount: !0 });
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
        className: o()(n, tu.m7),
        ref: N,
        style: $,
        children: [
            d &&
                (0, r.jsxs)("div", {
                    className: tu.rU,
                    children: [
                        (0, r.jsx)(te.K, {
                            icon: tt.ArrowLargeLeftIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(-1, et.pk.ARROW),
                            disabled: !A,
                            "aria-label": ea.intl.string(ea.t.vgfxaA),
                            tabIndex: -1,
                        }),
                        (0, r.jsx)(te.K, {
                            icon: tn.ArrowLargeRightIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(1, et.pk.ARROW),
                            disabled: !T,
                            "aria-label": ea.intl.string(ea.t.XiOHRX),
                            tabIndex: -1,
                        }),
                    ],
                }),
            !d &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(tu.k9, tu.RW, { [tu.Q2]: A }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(te.K, {
                                icon: tt.ArrowLargeLeftIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(-1, et.pk.ARROW),
                                disabled: !A,
                                "aria-label": ea.intl.string(ea.t.vgfxaA),
                                tabIndex: -1,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: o()(tu.k9, tu.K3, { [tu.Q2]: T }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(te.K, {
                                icon: tn.ArrowLargeRightIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(1, et.pk.ARROW),
                                disabled: !T,
                                tabIndex: -1,
                                "aria-label": ea.intl.string(ea.t.XiOHRX),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: o()({ [tu.sF]: A && I, [tu.RC]: T && I, [tu.Ni]: z && !A, [tu.GA]: z && !T }),
                children: (0, r.jsx)(e7.zC, {
                    ref: C,
                    orientation: "horizontal",
                    onScroll: U,
                    onScrollEnd: W,
                    onFocusCapture: V,
                    onKeyDown: G,
                    style: c ? th : void 0,
                    className: o()({ [tu.x2]: z, [tu.$o]: g }, tu.XG),
                    children: (0, r.jsxs)(ts.X.Provider, {
                        value: j,
                        children: [
                            t,
                            !g &&
                                y.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: tu.fw, style: { insetInlineStart: `${e}px` } },
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
var tg = n(440703),
    tv = n(731355),
    tj = n(621466),
    tC = n(805251),
    t_ = n(406810),
    tS = n(628284),
    tp = n(65154),
    tN = n(687966),
    tA = n(155718),
    tO = n(496431),
    tT = n(640708),
    tb = n(287809),
    tI = n(5377),
    tR = n(927813),
    ty = n(541830),
    tM = n(971649),
    tH = n(651892),
    tL = n(417404),
    tQ = n(814793),
    tU = n(453384),
    tD = n(639701),
    tF = n(398025),
    tP = n(221596),
    tk = n(818348),
    tq = n(499621);
function tw(e) {
    let [t, n] = i.useState(!1),
        s = i.useCallback(() => {
            t || (n(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (n(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: s, onMouseLeave: l, onFocus: s, onBlur: l } };
}
function tB(e) {
    let { hero: t, contentPosition: n, impressionRef: s } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = tw(
            i.useCallback(
                (e) => {
                    (0, eq.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ew.HAw.QUEST_HOVER : ew.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ee.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, et.jO)(ee.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, tj.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(tk.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, e3.z)({ hoverSpring: +!!a, config: $.config.gentle }),
        d = i.useCallback(() => {
            (0, eL._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: ee.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: et.Cy.OPEN_GAME_LINK,
                    position: n,
                    impressionId: s.current?.getId(),
                    sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, n, s]);
    return (0, r.jsxs)(eO.D, {
        tag: "div",
        className: o()(tq.FW, tq.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [tc]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: tq.Ve,
                children: (0, r.jsx)(eQ.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tq.pv, tq.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tq.pv, tq.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)($.animated.div, {
                className: tq.hn,
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
function tV(e) {
    let { hero: t, game: n, contentPosition: s, shelfImage: l, impressionRef: a } = e,
        u = i.useRef(null),
        { isHovering: c, hoverProps: d } = tw(
            i.useCallback(
                (e) => {
                    (0, eq.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ew.HAw.QUEST_HOVER : ew.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ee.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, et.jO)(ee.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = u.current;
        (0, tj.vq)(e, HTMLVideoElement) && (c ? ((e.currentTime = 0), e.play().catch(tk.tE)) : e.pause());
    }, [c]);
    let E = i.useCallback(() => {
            (0, eL._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: ee.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: et.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: a.current?.getId(),
                    sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, a]),
        h = i.useRef(null),
        [f, x] = i.useState({ top: !1, bottom: !1 }),
        v = i.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                n = e.getDistanceFromBottom() > 4;
            x((e) => (e.top === t && e.bottom === n ? e : { top: t, bottom: n }));
        }, []);
    i.useLayoutEffect(() => {
        v();
    }, [v]);
    let { topFade: j, bottomFade: C } = (0, e3.z)({
            topFade: +!!f.top,
            bottomFade: +!!f.bottom,
            config: { ...$.config.gentle, duration: 100 },
        }),
        _ = i.useMemo(() => {
            let e = null != n.firstReleaseDate ? new Date(n.firstReleaseDate).getFullYear() : 0 / 0,
                t = isNaN(e) ? null : e,
                s = n.genres.at(0);
            return [
                t,
                null != s ? (0, ty.du)(s) : null,
                n.getCompanyByRole(tA.wk.DEVELOPER).at(0)?.name ?? null,
            ].filter((e) => null != e);
        }, [n]),
        S = i.useMemo(() => _.length > 0, [_]);
    return (0, r.jsxs)(eO.D, {
        tag: "div",
        className: o()(tq.FW, tq.n7),
        onClick: E,
        [tc]: !0,
        ...d,
        children: [
            (0, r.jsx)("div", { className: tq.hu }),
            (0, r.jsx)("div", {
                className: tq.fQ,
                children: (0, r.jsx)(eQ.N, {
                    showVideo: !0,
                    assetRef: u,
                    imageAsset:
                        null != l
                            ? {
                                  asset: { url: l, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tq.pv, tq.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tq.pv, tq.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsxs)("div", {
                className: tq.iq,
                children: [
                    (0, r.jsxs)("div", {
                        className: tq.o7,
                        children: [
                            (0, r.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: n.name,
                            }),
                            S &&
                                (0, r.jsx)("p", {
                                    className: tq.c9,
                                    children: _.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(J.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: e,
                                                    }),
                                                    t < _.length - 1 && (0, r.jsx)(tT.A, { width: 3, height: 3 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsx)($.animated.div, {
                        className: tq.hX,
                        style: {
                            maskImage: (0, $.to)(
                                [j, C],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(e6.vN, {
                            children: (0, r.jsx)(e7.Ch, {
                                ref: h,
                                className: tq.hw,
                                onScroll: v,
                                fade: !c,
                                children: (0, r.jsx)(J.E, {
                                    variant: "body-md/normal",
                                    color: "text-muted",
                                    className: tq.W1,
                                    children: n.description,
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)(g.$, {
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
function tW(e) {
    let { heroId: t, quest: n, onQuestCtaClick: s, contentPosition: l, className: a } = e,
        u = i.useMemo(() => new Date(n.config.expiresAt), [n.config.expiresAt]),
        { days: c, hours: d, minutes: h, seconds: f } = (0, tO.A)(u, tR.A.Millis.MINUTE),
        x = i.useMemo(
            () =>
                (0, tI.uN)(
                    { days: c, hours: d, minutes: h, seconds: f },
                    { days: ea.t["Ux/De1"], hours: ea.t.Lzd5Ie, minutes: ea.t.odmpbP },
                ),
            [c, d, h, f],
        ),
        v = (0, E.bG)([tb.default], () => tb.default.getCurrentUser()),
        C = i.useMemo(() => (0, tL.mq)(n.config, v), [n.config, v]),
        _ = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, tH.xv)(e).type) {
                        case tg.l.IN_GAME:
                            return ea.intl.string(ea.t["O/J2kr"]);
                        case tg.l.COLLECTIBLE:
                            return ea.intl.string(ea.t.Jg17Ut);
                        case tg.l.VIRTUAL_CURRENCY:
                            return ea.intl.string(ea.t.ElYQFS);
                        default:
                            return (0, tL.mq)(e, t);
                    }
                })(n.config, v),
            [n.config, v],
        ),
        { completedRatio: S, completedRatioDisplay: p } = (0, eN.O9)(n),
        N = i.useMemo(() => (0, tL.wo)(n.config, v), [n.config, v]),
        A = (0, eH.WS)(),
        O = (0, tM.wW)(),
        { isHovering: T, hoverProps: b } = tw(
            i.useCallback(
                (e) => {
                    A({
                        adContentId: t,
                        relatedQuestId: n.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ew.HAw.QUEST_HOVER : ew.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ee.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, et.jO)(ee.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, A, l, n.id],
            ),
        ),
        { hoverSpring: I } = (0, e3.z)({ hoverSpring: +!!T, config: $.config.gentle }),
        R = i.useCallback(() => {
            (s(n.id),
                (0, eb.r)({
                    type: eI.F.CLICK_INTERNAL,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    adCreativeId: t,
                    relatedQuestId: n.id,
                    questContentCTA: et.Cy.VIEW_QUESTS,
                    surfaceId: ee.uF.QUEST_HOME_HERO_SHELF,
                    sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: l,
                    impressionId: O(),
                }));
        }, [s, t, n.id, l, O]);
    return (0, r.jsxs)(eO.D, {
        tag: "div",
        className: o()(tq.FW, tq.$R, a),
        onClick: R,
        "aria-label": ea.intl.string(ea.t["th2+0j"]),
        [tc]: !0,
        ...b,
        children: [
            (0, r.jsx)("div", { className: tq.hu }),
            (0, r.jsxs)(j.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(tC.E, { type: { text: _ } }),
                    (0, r.jsx)($.animated.div, {
                        style: { opacity: (0, tF.a)(I.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(tC.E, { type: { text: x }, icon: t_.ClockIcon }),
                    }),
                ],
            }),
            (0, r.jsx)($.animated.div, {
                className: tq.Tr,
                style: { transform: I.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tU.A, {
                    percentComplete: S,
                    overlayText: T && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tD.A, {
                        quest: n,
                        location: tP.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                        questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: T,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)($.animated.div, {
                className: tq.tw,
                style: {
                    opacity: (0, tF.a)(I.to([0, 1], [1, 0])),
                    transform: I.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(j.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(J.E, {
                            variant: "body-md/semibold",
                            color: "text-strong",
                            className: tq.Ht,
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
                                        (0, r.jsx)(tS.CircleCheckIcon, {
                                            size: "xs",
                                            color: e1.A.colors.ICON_MUTED.css,
                                        }),
                                        (0, r.jsx)(J.E, {
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
                                        (0, tQ.pv)(n.config) === tv.Z.VIDEO
                                            ? (0, r.jsx)(tp.CirclePlayIcon, {
                                                  size: "xs",
                                                  color: e1.A.colors.ICON_MUTED.css,
                                              })
                                            : (0, r.jsx)(tN.GameControllerIcon, {
                                                  size: "xs",
                                                  color: e1.A.colors.ICON_MUTED.css,
                                              }),
                                        (0, r.jsx)(J.E, {
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
            (0, r.jsx)($.animated.div, {
                className: tq.um,
                style: { transform: I.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), R());
                    },
                    text: ea.intl.string(ea.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var tG = n(211824),
    tK = n(164900),
    tz = n(161005);
let t$ = [
    { key: "client-theme", icon: e4.PaintPaletteIcon, label: ei.default.TTUKuI },
    { key: "display-name-style", icon: e5.LettersIcon, label: ea.t.NEzEws },
    { key: "app-icon", icon: e8.ClydeIcon, label: ea.t.RPh2ou },
];
function tY(e) {
    let { hero: t, contentPosition: n, impressionRef: s } = e,
        l = G(),
        { hoverProps: a } = tw(
            i.useCallback(
                (e) => {
                    (0, eq.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ew.HAw.QUEST_HOVER : ew.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ee.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, et.jO)(ee.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
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
    let { topFade: h, bottomFade: f } = (0, e3.z)({
            topFade: +!!c.top,
            bottomFade: +!!c.bottom,
            config: { ...$.config.gentle, duration: 100 },
        }),
        x = i.useCallback(() => {
            ((0, eb.r)({
                type: eI.F.CLICK_INTERNAL,
                adCreativeType: m.p.QUEST_HOME_HERO,
                adCreativeId: t.id,
                questContentCTA: et.Cy.OPEN_AD_PERK_MODAL,
                surfaceId: ee.uF.QUEST_HOME_HERO_SHELF,
                sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                questContentPosition: n,
                impressionId: s.current?.getId(),
            }),
                (0, er.A)({ sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF }));
        }, [t.id, n, s]);
    return (0, r.jsxs)("div", {
        className: o()(tK.Nr, tz.Tp, { [tz.D7]: !l }),
        [tc]: !0,
        ...a,
        children: [
            (0, r.jsxs)("div", {
                className: tK.$_,
                children: [
                    (0, r.jsx)("div", { className: tK.qx }),
                    (0, r.jsx)(e2.r, { alt: "", ariaHidden: !0, width: 244, className: tK.yr }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: tK.Qs,
                children: [
                    (0, r.jsx)($.animated.div, {
                        className: tK.ns,
                        style: {
                            maskImage: (0, $.to)(
                                [h, f],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(e6.vN, {
                            children: (0, r.jsx)(e7.zC, {
                                ref: u,
                                className: tK.zH,
                                onScroll: E,
                                children: (0, r.jsxs)(j.B, {
                                    gap: 20,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 12,
                                            children: [
                                                (0, r.jsx)(eP.D, {
                                                    variant: "heading-xl/semibold",
                                                    color: "text-strong",
                                                    children: ea.intl.string(ei.default["fShp/D"]),
                                                }),
                                                (0, r.jsx)(J.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-default",
                                                    children: ea.intl.format(ei.default.lCtBoO, {
                                                        nonPremiumEndDate: tG.Fg,
                                                        premiumEndDate: tG.zv,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(j.B, {
                                            gap: 8,
                                            children: t$.map((e) => {
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
                                                                color: e1.A.colors.ICON_DEFAULT.css,
                                                            }),
                                                            (0, r.jsx)(J.E, {
                                                                variant: "body-sm/medium",
                                                                color: "text-default",
                                                                children: ea.intl.string(s),
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
                        children: (0, r.jsx)(g.$, {
                            variant: "primary",
                            fullWidth: !0,
                            text: ea.intl.string(ei.default["KX1/jp"]),
                            onClick: x,
                        }),
                    }),
                ],
            }),
        ],
    });
}
let tX = [0, 0.01];
var tJ = n(418842),
    tZ = n(129230),
    t0 = n(403362),
    t1 = n(856383);
let t2 = (0, e_.mj)({
    name: "2026-06-hero-shelf-ad-tile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var t4 = n(792620);
function t5(e, t, n) {
    if (null != n) {
        if (e) {
            let e = n.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] });
            return {
                "--custom-quest-highlight-blur": (0, $.to)([e], (e) => `${25 * e}px`),
                "--custom-quest-highlight-alpha": (0, $.to)([e], (e) => `${e}`),
            };
        }
        if (t) return { opacity: (0, $.to)([n.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var t8 = n(531525),
    t3 = n(726356);
function t6(e) {
    let { hero: t, shelfQuests: n, isBannerLoading: s, onQuestCtaClick: l } = e,
        a = (0, tJ.C)(),
        { enabled: u } = t2.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        c = (0, P.kV)(t),
        d = G(),
        E = u && !c,
        h = (function (e) {
            let [t, n] = i.useState(null),
                s = i.useContext(ts.X),
                l = el((e) => e.setIsIntroCardScrolledPast);
            return (
                i.useEffect(() => {
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
                        { root: s?.current?.getScrollerNode() ?? null, rootMargin: "-30px 0px 0px 0px", threshold: tX },
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
        })(c),
        f = i.useMemo(
            () =>
                E
                    ? (n
                          .map((e) => (0, t4.xc)(e) ?? (0, t4._3)(e)?.at(0) ?? null)
                          .filter(t0.Vq)
                          .at(0) ?? null)
                    : null,
            [n, E],
        ),
        { isLoading: x, data: g, error: v } = (0, e0.I)(f),
        C = (0, eZ.A)(g),
        _ = E && null != g && !C;
    i.useEffect(() => {
        E &&
            null != f &&
            null != v &&
            (tZ.default.track(ew.HAw.AD_ASSET_LOADING_FAILURE, {
                source: tP.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                ad_creative_id: t.id,
                ad_creative_type: m.p.QUEST_HOME_HERO,
                application_ids: [f],
            }),
            t1.A.captureException(v, { tags: { source: tP.rE.QUEST_HOME_HERO_SHELF_DESKTOP } }));
    }, [E, v, t.id, f]);
    let S = i.useMemo(
            () => (_ ? (null != t.shelfImage ? t.shelfImage : (g?.getCoverURL(512) ?? null)) : null),
            [_, t, g],
        ),
        p = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                [n, s] = i.useState(void 0);
            return (
                i.useEffect(() => {
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
            i.useMemo(() => (null != S ? (0, eM.UX)(S, { format: "webp", width: 400, height: 600 }) : null), [S]),
            8,
        ),
        N = i.useMemo(() => (null == p ? null : (0, eK.Z)(p)), [p]),
        A = i.useMemo(() => {
            if (null != N)
                return {
                    "--custom-hero-shelf-scrim-gradient-start": N[0],
                    "--custom-hero-shelf-scrim-gradient-end": N[1],
                };
        }, [N]);
    return s || x
        ? (0, r.jsx)(t7, { numShelfCards: n.length + 1, hasWideLeadingTile: u || c })
        : (0, r.jsx)("div", {
              ref: h,
              children: (0, r.jsx)(tx, {
                  className: o()(t3.vo, { [tz.vo]: c }),
                  overflowAmount: 25,
                  maskWidth: ti(a),
                  maskMarginMultiplier: 0.75,
                  children: (0, r.jsxs)(j.B, {
                      className: t3.I2,
                      direction: "horizontal",
                      fullWidth: !1,
                      gap: 20,
                      style: A,
                      children: [
                          c &&
                              (0, r.jsx)(eU.Z, {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: 0,
                                  sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                  children: (e, n) =>
                                      (0, r.jsx)("div", {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          children: (0, r.jsx)(tY, { hero: t, contentPosition: 0, impressionRef: n }),
                                      }),
                              }),
                          !u &&
                              !c &&
                              (0, r.jsx)(eU.Z, {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: 0,
                                  sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                  children: (e, n) =>
                                      (0, r.jsx)("div", {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          children: (0, r.jsx)(tB, { hero: t, contentPosition: 0, impressionRef: n }),
                                      }),
                              }),
                          _ &&
                              (0, r.jsx)(eU.Z, {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: 0,
                                  sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                  children: (e, n) =>
                                      (0, r.jsx)("div", {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          children: (0, r.jsx)(tV, {
                                              hero: t,
                                              game: g,
                                              shelfImage: S,
                                              contentPosition: 0,
                                              impressionRef: n,
                                          }),
                                      }),
                              }),
                          n.map((e, n) =>
                              (0, r.jsx)(
                                  eU.Z,
                                  {
                                      adContentId: t.id,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      relatedQuestId: e.id,
                                      questContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                      questContentPosition: n + 1,
                                      sourceQuestContent: ee.uF.QUEST_HOME_HERO_SHELF,
                                      children: (s) =>
                                          (0, r.jsx)("div", {
                                              ref: (e) => {
                                                  s.current = e;
                                              },
                                              children: (0, r.jsx)(tW, {
                                                  heroId: t.id,
                                                  quest: e,
                                                  onQuestCtaClick: l,
                                                  contentPosition: n + 1,
                                                  className: c ? o()(tz.Tp, { [tz.D7]: !d }) : void 0,
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
function t7(e) {
    let { className: t, numShelfCards: n, hasWideLeadingTile: s } = e,
        l = (0, tJ.C)(),
        i = s ? Math.max(n, 3) : Math.max(n, 4);
    return (0, r.jsx)(tx, {
        className: o()(t3.vo, t),
        overflowAmount: 25,
        maskWidth: ti(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(j.B, {
            className: t3.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: i }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(t8.m, t3.W_, { [t3.E8]: s && 0 === t }) }, t),
            ),
        }),
    });
}
var t9 = n(74498);
function ne(e) {
    let { showHexagonCampaignOverlay: t = !1 } = e;
    return (0, r.jsx)("div", {
        className: o()(t9.Np, { [t9.Zv]: t }),
        children: t && (0, r.jsx)("div", { className: t9.hl }),
    });
}
function nt(e) {
    let { heroImage: t, heroVideo: n } = e,
        s = i.useRef(null);
    (0, eD.A)(s);
    let l = i.useMemo(() => (null != n ? (0, eM.WV)(n) : null) ?? t, [n, t]);
    return (0, r.jsx)(eA._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eQ.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: s,
                imageAsset: {
                    alt: "",
                    className: t9.LY,
                    asset: { url: l, mimetype: (0, eM.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: t9.LY,
                    asset: { url: n, mimetype: (0, eM.vm)(n), isAnimated: !0 },
                    assetId: n,
                },
            }),
    });
}
function nn(e) {
    let { heroImage: t, heroVideo: n, showHexagonCampaignOverlay: s } = e;
    return null == n
        ? (0, r.jsxs)("div", {
              className: t9.Tv,
              children: [
                  (0, r.jsx)(ne, { showHexagonCampaignOverlay: s }),
                  (0, r.jsx)("div", {
                      className: t9.LO,
                      children: (0, r.jsx)(eA._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: t9.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(t9.LO, t9.jx, t9.hw),
                      children: (0, r.jsx)("img", { className: t9.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(t9.LO, t9.jx, t9.Co),
                      children: (0, r.jsx)("img", { className: t9.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: t9.Tv,
              children: [
                  (0, r.jsx)(ne, { showHexagonCampaignOverlay: s }),
                  (0, r.jsx)("div", { className: t9.LO, children: (0, r.jsx)(nt, { heroImage: t, heroVideo: n }) }),
              ],
          });
}
function ns(e) {
    let { hero: t, hasFetchedQuests: n, hasNoAccessibleQuests: s } = e,
        l = (0, eH.WS)(),
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
                    event: ew.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                }));
        }, [n, s, t.id, t.questIds, l]),
        null
    );
}
function nl(e) {
    let { hero: t, onQuestCtaClick: n, isBannerLoading: s } = e,
        l = (0, E.bG)([eR.A], () => eR.A.quests),
        a = (0, E.bG)([eR.A], () => eR.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, eN.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, eG.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        f = h[0],
        { enabled: v } = ey.Ay.useConfig({ location: tP.rE.QUEST_HOME_HERO });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eU.Z, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: ee.uF.QUEST_HOME_HERO,
                sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ns, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(eW, {
                                ref: (t) => {
                                    e.current = s ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [t9.lX]: s }),
                                topContent: (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, r.jsx)(eA._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, r.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: t9.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(J.E, {
                                            color: "text-strong",
                                            variant: "body-sm/normal",
                                            className: t9.yu,
                                            children: ea.intl.string(ea.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                overlay:
                                    v &&
                                    (0, r.jsx)(eO.D, {
                                        tag: "div",
                                        className: t9.fj,
                                        "aria-label": t.cta.buttonLabel,
                                        onClick: () => {
                                            (0, eL._Q)(
                                                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                                                {
                                                    content: ee.uF.QUEST_HOME_HERO_BANNER,
                                                    ctaContent: et.Cy.OPEN_GAME_LINK,
                                                    impressionId: l.current?.getId(),
                                                    sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                                                },
                                            );
                                        },
                                    }),
                                buttons: (0, r.jsxs)(x.e, {
                                    children: [
                                        (0, r.jsx)(g.$, {
                                            onClick: () => {
                                                (0, eL._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: ee.uF.QUEST_HOME_HERO,
                                                        ctaContent: et.Cy.OPEN_GAME_LINK,
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
                                            null != f &&
                                            (0, r.jsx)(g.$, {
                                                onClick: () => {
                                                    (n(f),
                                                        (0, eb.r)({
                                                            type: eI.F.CLICK_INTERNAL,
                                                            adCreativeType: m.p.QUEST_HOME_HERO,
                                                            adCreativeId: t.id,
                                                            questContentCTA: et.Cy.VIEW_QUESTS,
                                                            surfaceId: ee.uF.QUEST_HOME_HERO,
                                                            sourceQuestContent: ee.uF.QUEST_HOME_HERO,
                                                        }));
                                                },
                                                size: "md",
                                                text: ea.intl.string(ea.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(nn, {
                                    heroImage: t.heroImage,
                                    heroVideo: t.heroVideo,
                                    showHexagonCampaignOverlay: (0, w.Tn)(t),
                                }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(t6, { hero: t, isBannerLoading: s, shelfQuests: u, onQuestCtaClick: n }),
        ],
    });
}
function nr() {
    return (0, r.jsx)("div", { className: o()(eB.iE, eB.FG, eB.B3), children: (0, r.jsx)(eT.y, {}) });
}
var ni = n(73153),
    na = n(153229);
n(667532);
var no = n(890497),
    nu = n(663417),
    nc = n(265872),
    nd = n(624479),
    nm = n(416052),
    nE = n(417098);
function nh(e) {
    let { error: t } = e,
        n = t.getAnyErrorMessage();
    return (0, r.jsx)(nE.$T, {
        color: nE.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != n ? n : ea.intl.string(ea.t.ZErSg5) }),
    });
}
var nf = n(602853),
    nx = n(817281),
    ng = n(688810),
    nv = n(270746),
    nj = n(413599),
    nC = n(912875);
let n_ = function () {
    let { analyticsLocations: e } = (0, ng.Ay)(),
        t = (0, E.bG)([nj.A], () => nj.A.theme),
        n = i.useRef(null);
    i.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let s = (0, nf.r)(e1.A.colors.BACKGROUND_BASE_LOW, ew.NJ8.LIGHT),
        l = (0, nf.r)(e1.A.colors.BACKGROUND_BASE_LOW, ew.NJ8.DARK),
        a = (0, nf.r)(e1.A.colors.BACKGROUND_BASE_LOW, ew.NJ8.ONYX),
        o = i.useMemo(
            () => [
                { theme: ew.NJ8.LIGHT, label: ea.t.K2sFfo, color: s.hex() },
                { theme: ew.NJ8.DARK, label: ea.t.b8Cei3, color: l.hex() },
                { theme: ew.NJ8.ONYX, label: ea.t.Do4ZJx, color: a.hex() },
            ],
            [s, l, a],
        ),
        u = i.useCallback(
            (t) => {
                ((0, nv.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, nx.u_)({ theme: t }));
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != n.current && u(n.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: nC.N,
        children: (0, r.jsxs)("div", {
            className: nC.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        eO.D,
                        {
                            tag: "div",
                            className: nC.Du,
                            onClick: () => u(e.theme),
                            "aria-label": ea.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${nC.WT} ${t === e.theme ? nC.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: nC.i, children: ea.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(te.K, {
                    onClick: c,
                    "aria-label": ea.intl.string(ea.t.yBZMsQ),
                    icon: nu.RefreshIcon,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var nS = n(219354);
let np = function (e) {
    let { questId: t, setQuestId: n, quest: s, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, eN.pT)(),
        h = (0, E.bG)([eR.A], () => (null != t ? eR.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, E.bG)([eR.A], () => null != t && eR.A.isFetchingQuestPreview(t), [t]),
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
                    await (0, na.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, na.UZ)(t);
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
                    await (0, na.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(
            (e) => {
                (0, ej.uJ)(e) || null == n || n(e);
            },
            [n],
        );
    return (0, r.jsxs)("div", {
        className: nS.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: nS.Br,
                    children: (0, r.jsxs)("div", {
                        className: nS.bo,
                        children: [
                            (0, r.jsx)(n_, {}),
                            (0, r.jsxs)("div", {
                                className: nS.b8,
                                children: [
                                    (0, r.jsx)(
                                        no.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: S,
                                            placeholder: ea.intl.string(ea.t.Zw8jxn),
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
                                    (0, r.jsx)(te.K, {
                                        onClick: l,
                                        "aria-label": ea.intl.string(ea.t.wzzjk9),
                                        icon: nu.RefreshIcon,
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
                    className: nS.in,
                    children: (0, r.jsxs)(x.e, {
                        className: nS.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ea.intl.string(ea.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ea.intl.string(ea.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: _,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ea.intl.string(ea.t.cKSLr4),
                            }),
                            (0, r.jsx)(nc.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: nS.PP,
                                        children: (0, r.jsx)("div", {
                                            className: nS.sH,
                                            children: (0, r.jsx)(nm.A, {
                                                value: tk.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: ea.intl.string(ea.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(te.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": ea.intl.string(ea.t.rNGQfD),
                                        icon: nd.CopyIcon,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(nh, { error: h }) : null,
            f ? (0, r.jsx)(eT.y, {}) : null,
        ],
    });
};
var nN = n(95362),
    nA = n(761508),
    nO = n(425069);
function nT() {
    return (0, r.jsx)("div", { className: nO.y });
}
var nb = n(834615),
    nI = n(34665);
let nR = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nI.x3,
        children: (0, r.jsxs)("div", {
            className: nI.B0,
            children: [
                (0, r.jsx)(eP.D, {
                    className: nI.R_,
                    variant: "heading-sm/semibold",
                    children: ea.intl.string(ea.t.L2mlUb),
                }),
                (0, r.jsx)(eU.R, {
                    questOrQuests: t,
                    questContent: ee.uF.ACTIVITY_PANEL,
                    sourceQuestContent: ee.uF.ACTIVITY_PANEL,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(nb.default, { quest: t }),
                        }),
                }),
            ],
        }),
    });
};
var ny = n(66246),
    nM = n(717695),
    nH = n(466209),
    nL = n(83978);
let nQ = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nI.x3,
        children: (0, r.jsxs)("div", {
            className: nH.wp,
            children: [
                (0, r.jsx)(eP.D, {
                    className: nH.Oo,
                    variant: "heading-sm/semibold",
                    children: ea.intl.string(ea.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: nH.RE,
                    children: (0, r.jsx)("div", {
                        className: nH.Z,
                        children: (0, r.jsx)("div", {
                            className: nL.C3,
                            children: (0, r.jsx)(nM.A, {
                                children: (0, r.jsx)(eA.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(ny.QuestBarQuestContent, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var nU = n(10394);
function nD(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nI.x3,
        children: (0, r.jsxs)("div", {
            className: nI.B0,
            children: [
                (0, r.jsx)(eP.D, {
                    className: nI.R_,
                    variant: "heading-sm/semibold",
                    children: ea.intl.string(ea.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: nI.YT,
                    children: (0, r.jsx)(nU.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var nF = n(632623),
    nP = n(622409);
let nk = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: nI.x3,
        children: (0, r.jsxs)("div", {
            className: nI.B0,
            children: [
                (0, r.jsx)(eP.D, { variant: "heading-sm/semibold", children: ea.intl.string(ea.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: nP.wu,
                    children: (0, r.jsx)("span", { className: nP.cy, children: ea.intl.string(ea.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: nP.oU,
                    children: (0, r.jsx)("div", {
                        className: nP.zx,
                        children: (0, r.jsx)("div", {
                            className: nP.Lj,
                            children: (0, r.jsx)("div", {
                                className: nP.n0,
                                children: (0, r.jsx)(nF.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var nq = n(731388),
    nw = n(484810);
function nB(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: nw.y, children: t });
}
var nV = n(612324),
    nW = n(365199),
    nG = n(270045),
    nK = n(79545),
    nz = n(173936),
    n$ = n(914410),
    nY = n(426110),
    nX = n(339350),
    nJ = n(782134),
    nZ = n(271536),
    n0 = n(768622),
    n1 = n(793934),
    n2 = n(662940),
    n4 = n(977416);
let n5 = 2 * tR.A.Millis.DAY,
    n8 = 3 * tR.A.Millis.DAY,
    n3 = new Map(tr.map((e) => [e.identifier, e])),
    n6 = {
        [tl.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: n } = t;
            return e.slice().sort((e, t) => {
                var s, l;
                return ((s = n.get(e)), (l = n.get(t)), null == s || null == l ? 0 : l.localeCompare(s));
            });
        },
    };
function n7(e) {
    return e.features.includes(tP.Li.EXCLUDE_FROM_FEATURED);
}
function n9(e, t) {
    let n = n3.get(e)?.maxItems,
        s = t.get(e)?.length ?? 0;
    return null == n || s < n;
}
var se = n(853978);
function st(e) {
    let { quest: t, isHovering: n = !1 } = e,
        s = (0, nK.Pd)(t),
        l = (0, E.bG)([eR.A], () => s === nK.UA.UNENROLLED && null != eR.A.questEnrollmentBlockedUntil, [s]),
        a = (0, eN.fc)(t),
        u = (0, eN.I3)(t),
        c = i.useMemo(() => (0, n2.Dd)(t.config, s, l), [t.config, s, l]),
        d = i.useMemo(() => (0, n2.CK)(s, a, u, l), [s, a, u, l]),
        m = (function (e) {
            let t = (0, nK.Pd)(e),
                [n] = i.useState(() => Date.now()),
                s = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = s.getTime() - n,
                r =
                    (function (e) {
                        switch (e) {
                            case nK.UA.UNENROLLED:
                            case nK.UA.ENROLLED:
                            case nK.UA.INCOMPLETE:
                                return !0;
                            case nK.UA.COMPLETED:
                            case nK.UA.CLAIMED:
                            case nK.UA.EXPIRED:
                            case nK.UA.EXPIRED_CLAIMABLE:
                            case nK.UA.EXPIRED_CLAIMED:
                                return !1;
                        }
                    })(t) &&
                    l < n8 &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, tO.A)(s, tR.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(se.fC, { [se.R]: n }),
        children: [
            (0, r.jsxs)("div", {
                className: se.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(J.E, {
                            variant: "body-xs/semibold",
                            className: se.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(J.E, {
                            variant: "body-xs/semibold",
                            color: "text-overlay-light",
                            className: se.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: se.BA,
                            children: [
                                (function (e, t) {
                                    let n = { size: "xxs", className: se.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(nX.HourglassIcon, { ...n });
                                    switch ((0, n2.pv)(e)) {
                                        case n2.UK.PLAY:
                                            return (0, r.jsx)(tN.GameControllerIcon, { ...n });
                                        case n2.UK.WATCH:
                                            return (0, r.jsx)(nJ.PlayIcon, { ...n });
                                        case n2.UK.ACTIVITY:
                                            return (0, r.jsx)(nZ.QuestsMissionsIcon, { ...n });
                                        case n2.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(n0.FlashIcon, { ...n });
                                        case n2.UK.ARENA:
                                            return (0, r.jsx)(n1.QuestsArenaIcon, { ...n });
                                    }
                                })(t, l),
                                (0, r.jsx)(J.E, {
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
                    className: o()(se.qS, se.WZ),
                    children: (0, r.jsx)(J.E, {
                        variant: "body-xs/semibold",
                        color: "currentColor",
                        children: ea.intl.string(ea.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var sn = n(409626),
    ss = n(870273),
    sl = n(646917),
    sr = n(866665),
    si = n(743368),
    sa = n(452411),
    so = n(321538),
    su = n(964051);
function sc(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l, contentPosition: i, rowIndex: a } = e,
        u = (0, nK.Pd)(t),
        { ctaOnHover: c } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        d = (0, E.bG)([eR.A], () => u === nK.UA.UNENROLLED && null != eR.A.questEnrollmentBlockedUntil, [u]),
        m = !(0, t4.no)(t) || ![nK.UA.ENROLLED, nK.UA.UNENROLLED, nK.UA.INCOMPLETE].includes(u),
        h = u === nK.UA.EXPIRED || u === nK.UA.EXPIRED_CLAIMED || (u === nK.UA.CLAIMED && (0, t4.GL)(t)),
        f = (0, eN.do)({ quest: t, content: n, ctaContent: et.Cy.OPEN_GAME_LINK, sourceQuestContent: s });
    return (0, r.jsxs)("div", {
        className: o()(su.lO, { [su.Fq]: l || !c }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)("div", { className: su.Cj }),
            (0, r.jsx)(eF.N, {
                theme: ew.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, su.tn),
                        children: (0, r.jsxs)(x.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                m &&
                                    (h
                                        ? (0, r.jsx)(g.$, {
                                              variant: "secondary",
                                              text: t.config.ctaConfig.buttonLabel,
                                              onClick: f,
                                          })
                                        : (0, r.jsx)(sr.m, {
                                              text: ea.intl.string(ea.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, r.jsx)(te.K, {
                                                  variant: "secondary",
                                                  icon: si.LinkExternalMediumIcon,
                                                  "aria-label": ea.intl.string(ea.t.LLLLPD),
                                                  onClick: f,
                                              }),
                                          })),
                                !h &&
                                    !d &&
                                    (0, r.jsx)(sa.A, {
                                        quest: t,
                                        surface: nK.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: n,
                                        analyticsCtxSourceQuestContent: s,
                                        analyticsCtxQuestContentPosition: i,
                                        analyticsCtxQuestContentRowIndex: a,
                                    }),
                                d &&
                                    (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: ea.intl.string(ea.t.vY9GgG),
                                        onClick: () => (0, so.m6)(t, n, s),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var sd = n(403581),
    sm = n(576761),
    sE = n(41327);
function sh(e) {
    let { onClick: t, questId: n, orbMultiplierEligibility: s } = e,
        l = (0, eN.ZP)(n),
        i = (0, sm.B9)(s);
    if (null == l) return null;
    let a = i
        ? ea.intl.formatToPlainString(ea.t.l2UfLG, { bonusOrbMultiplier: l })
        : ea.intl.formatToPlainString(ea.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(eO.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, so.gC)(l, s), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: sE.k,
            children: [
                (0, r.jsx)(sd.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(J.E, { variant: "body-sm/normal", color: "currentColor", className: sE.Q, children: a }),
            ],
        }),
    });
}
var sf = n(947641),
    sx = n(194261),
    sg = n(106799),
    sv = n(476334);
function sj(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l } = e,
        a = (0, E.bG)([tb.default], () => tb.default.getCurrentUser()),
        u = (0, tL.mq)(t.config, a),
        c = (0, tL.ks)(t.config),
        d = (0, tL.wo)(t.config, a),
        { completedRatio: m } = (0, eN.O9)(t),
        h = (0, nK.Pd)(t),
        f = (0, eN.Hv)(),
        x = h === nK.UA.CLAIMED || h === nK.UA.EXPIRED_CLAIMED,
        g = x || h === nK.UA.COMPLETED || h === nK.UA.EXPIRED_CLAIMABLE,
        v = (0, F.ix)({ quest: t, questContent: n, sourceQuestContent: s }),
        j = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), f && !x)) {
                    ((0, eq.Y5)({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: et.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: s,
                    }),
                        (0, so.FS)());
                    return;
                }
                v();
            },
            [v, f, x, t.id, n, s],
        ),
        C = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tD.A, {
                    quest: t,
                    location: tP.rE.QUEST_HOME_DESKTOP,
                    questContent: n,
                    autoplay: l,
                    lazyLoad: !0,
                    className: sv.al,
                    fullWidth: !0,
                    sourceQuestContent: s,
                }),
                x &&
                    (0, r.jsx)("div", {
                        className: sv.EY,
                        children: (0, r.jsx)(sf.CheckmarkLargeBoldIcon, {
                            className: sv.AM,
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                h === nK.UA.EXPIRED &&
                    (0, r.jsx)("div", {
                        className: sv.EY,
                        children: (0, r.jsx)(sx.LockIcon, { size: "sm", className: sv.Sz, color: "currentColor" }),
                    }),
            ],
        }),
        _ = (0, r.jsx)("div", { className: h === nK.UA.UNENROLLED ? sv.fm : sv.n5, children: C }),
        S = (0, r.jsx)(tU.A, { size: 66, percentComplete: m, useAltStyle: !0, children: _ }),
        p = g
            ? (0, r.jsx)(eO.D, {
                  className: sv.q9,
                  onClick: j,
                  "aria-label": x
                      ? (0, tL.r7)(t.config)
                          ? ea.intl.string(ea.t.bAGFz3)
                          : ea.intl.string(ea.t.vTgCWx)
                      : ea.intl.string(ea.t.cfY4PE),
                  children: S,
              })
            : S;
    return (0, r.jsxs)("div", {
        className: o()(sv.CZ, { [sv.Pv]: l }),
        children: [
            (0, r.jsx)(eF.N, {
                theme: ew.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, sv.tE, { [sv.cB]: l }),
                        children: h === nK.UA.UNENROLLED ? _ : p,
                    }),
            }),
            (0, r.jsxs)("div", {
                className: o()(sv.FS, { [sv.IR]: l }),
                children: [
                    (0, r.jsx)(J.E, {
                        variant: "body-sm/medium",
                        className: sv.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(sv.oV, { [sv.FJ]: l }),
                        children: [
                            c && (0, r.jsx)(sg.A, { className: sv.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                J.E,
                                {
                                    variant: "body-md/medium",
                                    className: sv.zN,
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
var sC = n(604970);
function s_(e) {
    let { quest: t, questContent: n, isHovering: s, sourceQuestContent: l, contentPosition: a, rowIndex: u } = e,
        c = i.useRef(null),
        d = (0, ss.A9)(t, l, tP.rE.QUEST_HOME_DESKTOP, sn.GameProfileSources.QuestHome, c),
        m = (0, sl.z)(),
        E = (0, eN.SD)(t, m);
    return (0, r.jsxs)("div", {
        ref: c,
        className: sC.qr,
        children: [
            (0, r.jsx)(sj, { quest: t, questContent: n, sourceQuestContent: l, isHovering: s }),
            (0, r.jsxs)("div", {
                className: sC.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: sC.Wi,
                        children: [
                            (0, r.jsx)(J.E, {
                                variant: "body-sm/normal",
                                className: o()(sC.Wj, sC.h_, { [sC.C4]: s }),
                                children: d,
                            }),
                            (0, r.jsx)(J.E, {
                                "aria-hidden": !0,
                                variant: "body-sm/normal",
                                lineClamp: 1,
                                className: o()(sC.Wj, sC.XV, { [sC.Hz]: s }),
                                children: d,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: sC.Gv,
                        children: [
                            (0, r.jsx)(J.E, {
                                variant: "body-sm/normal",
                                className: sC.I4,
                                children: ea.intl.string(ea.t.o6FLcF),
                            }),
                            E &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(J.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(sh, { questId: t.id, orbMultiplierEligibility: m }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(sc, {
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
var sS = n(434295);
let sp = { [eM.i2.TIER_2]: sS.qt, [eM.i2.TIER_3]: sS.jR, [eM.i2.TIER_4]: sS.cd };
function sN(e) {
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
        { completedRatio: h, completedRatioDisplay: f } = (0, eN.O9)(t, !0),
        x = (0, eM.tW)(t, eM.fY.LOGO_TYPE, ew.NJ8.DARK).url,
        g = (0, E.bG)([nj.A], () => nj.A.theme) === ew.NJ8.LIGHT,
        v = (0, nY.Qn)(t.config),
        j = null != v ? sp[v] : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            g
                ? (0, r.jsx)(eF.N, {
                      theme: ew.NJ8.DARK,
                      disableAdaptiveTheme: !0,
                      children: (e) => (0, r.jsx)("div", { className: o()(e, sS.f5, j), "aria-hidden": !0 }),
                  })
                : (0, r.jsx)("div", { className: o()(sS.f5, j), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: o()(sS.ZF, j, { [sS.SP]: l }), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: sS.ZH, children: (0, r.jsx)(st, { quest: t, isHovering: l }) }),
            (0, r.jsxs)("div", {
                className: o()(sS.o1, { [sS.SP]: l }),
                children: [
                    i &&
                        (0, r.jsx)(eO.D, {
                            tag: "div",
                            className: sS.hP,
                            onClick: a,
                            "aria-label": ea.intl.string(ea.t.WqhZss),
                            children: (0, r.jsx)(nz.LinkIcon, { size: "sm", color: "currentColor" }),
                        }),
                    (0, r.jsx)(nG.C, {
                        questContent: n,
                        quest: t,
                        hideLearnMore: !0,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: s,
                        onOpen: u,
                        onClose: c,
                        children: (e) =>
                            (0, r.jsx)(eO.D, {
                                ...e,
                                tag: "div",
                                className: sS.hP,
                                "aria-label": ea.intl.string(ea.t.DEoVWZ),
                                children: (0, r.jsx)(nW.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o()(sS.KJ, { [sS.R]: l }),
                children: [
                    (0, r.jsx)("div", {
                        className: sS.Ez,
                        children: (0, r.jsx)("img", { className: sS.dK, src: x, alt: t.config.messages.gameTitle }),
                    }),
                    (0, r.jsxs)("div", {
                        className: sS.Cd,
                        children: [
                            (0, r.jsx)(J.E, {
                                variant: "body-sm/semibold",
                                color: "text-overlay-light",
                                className: sS.ZV,
                                children: f,
                            }),
                            (0, r.jsx)("div", {
                                className: sS.oU,
                                children: (0, r.jsx)(n$.Ay, {
                                    variant: n$.qP.UNSET,
                                    override: { default: { gradientStart: "#189E4E", gradientEnd: "#44FC7E" } },
                                    weight: n$.fh.LIGHT,
                                    progress: Math.round(100 * h),
                                    glowing: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(sS.SJ, { [sS.SP]: l }),
                children: (0, r.jsx)(s_, {
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
var sA = n(720875),
    sO = n(614972),
    sT = n(688755),
    sb = n(831368),
    sI = n(704289);
function sR(e) {
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
            sourceQuestContent: x,
        } = e,
        g = i.useMemo(() => (0, eM.tW)(n, eM.fY.QUEST_BAR_HERO_IMAGE), [n]),
        v = i.useMemo(() => (0, eM.tW)(n, eM.fY.QUEST_BAR_HERO_VIDEO), [n]),
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
                x = i.useCallback(() => {
                    (E(),
                        s(!1),
                        h(),
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
                        (E(), h(), u.current && ((u.current = !1), c.current?.(!1)));
                    },
                    [],
                ),
                { isActive: n, shouldRender: l, deactivate: x, hoverHandlers: C, handleMenuOpen: v, handleMenuClose: j }
            );
        })({ onMenuOpenChange: f }),
        N = j || !0 === a,
        A = !0 === l,
        O = (0, sO.c)({ onMenuOpen: S, onMenuClose: p }),
        T = (0, nK.Pd)(n),
        b = T === nK.UA.EXPIRED || T === nK.UA.EXPIRED_CLAIMED,
        I = (0, tQ.E0)(n.config),
        R = (0, E.bG)([nj.A], () => nj.A.theme),
        y = R === ew.NJ8.ASH || R === ew.NJ8.DARK,
        M = R === ew.NJ8.LIGHT,
        H = i.useContext(ts.X),
        { visibilityElementRef: L, almostVisibleInViewport: Q } = (0, sb.I)(
            H?.current?.getScrollerNode() ?? null,
            m ?? !1,
        ),
        {
            handleHoverStart: U,
            handleHoverEnd: D,
            isEventWithinParent: P,
        } = (0, sT.B)({ quest: n, questContent: s, contentPosition: c, rowIndex: d, sourceQuestContent: x }),
        k = (0, F.Lk)({
            isShareable: I,
            questId: n.id,
            trackingCtx: i.useMemo(
                () => ({ content: s, ctaContent: et.Cy.CONTEXT_MENU_COPY_LINK, sourceQuestContent: x }),
                [s, x],
            ),
        }),
        q = (0, nV.A)(h, L),
        w = ea.intl.formatToPlainString(ea.t.EAYZAr, { questName: n.config.messages.questName }),
        B = o()(sI.kL, { [sI.Cn]: A, [sI.DM]: N }, u),
        V = (0, r.jsx)(sA.A, {
            showPlaceholder: !Q,
            width: 800,
            height: 450,
            className: sI.Tv,
            children: (0, r.jsx)(eQ.N, {
                imageAsset:
                    null != g
                        ? { asset: g, assetId: "QuestTileV2", alt: ea.intl.string(ea.t.jnijWz), className: sI.Tv }
                        : void 0,
                videoAsset:
                    null != v
                        ? {
                              asset: v,
                              assetId: "QuestTileV2_heroAnimated",
                              className: o()(sI.Tv, sI.gJ, { [sI.C7]: N }),
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
                      (0, r.jsx)(sO.q.Provider, {
                          value: O,
                          children: (0, r.jsx)(sN, {
                              quest: n,
                              questContent: s,
                              sourceQuestContent: x,
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
                      (0, r.jsx)("div", { className: o()(sI.sL, { [sI.Mq]: b }) }),
                      M
                          ? (0, r.jsx)(eF.N, {
                                theme: ew.NJ8.ONYX,
                                disableAdaptiveTheme: !0,
                                children: (e) => (0, r.jsx)("div", { className: o()(e, sI.f5) }),
                            })
                          : (0, r.jsx)("div", { className: o()(sI.f5, { [sI.kg]: y }) }),
                      (0, r.jsxs)("div", {
                          className: sI.qy,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: sI.wx,
                                  children: [
                                      (0, r.jsx)(st, { quest: n, isHovering: N }),
                                      (0, r.jsx)("div", {
                                          className: o()(sI.$s, { [sI.rk]: N }),
                                          onClick: (e) => e.stopPropagation(),
                                          children: (0, r.jsx)(nG.C, {
                                              questContent: s,
                                              quest: n,
                                              hideLearnMore: !0,
                                              shouldShowDisclosure: !0,
                                              showShareLink: !0,
                                              sourceQuestContent: x,
                                              onOpen: S,
                                              onClose: p,
                                              children: (e) =>
                                                  (0, r.jsx)(eO.D, {
                                                      ...e,
                                                      tag: "div",
                                                      className: sI.E9,
                                                      "aria-label": ea.intl.string(ea.t.DEoVWZ),
                                                      children: (0, r.jsx)(nW.MoreHorizontalIcon, {
                                                          size: "sm",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(sO.q.Provider, {
                                  value: O,
                                  children: (0, r.jsx)(s_, {
                                      quest: n,
                                      questContent: s,
                                      isHovering: N,
                                      sourceQuestContent: x,
                                      contentPosition: c,
                                      rowIndex: d,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    return (0, r.jsx)("div", {
        id: (0, nq.sT)(n.id, t),
        className: sI.uW,
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
let sy = i.memo(function (e) {
    let t = (0, E.bG)([eR.A], () => (null != e.questId ? eR.A.getQuest(e.questId) : void 0), [e.questId]),
        n = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == n
        ? null
        : (0, r.jsx)(eU.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === ee.uF.QUESTS_EMBED,
              overrideVisibility: e.overrideVisibility,
              onImpression: e.onImpression,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(sR, { ...e, quest: n, impressionRef: t }),
          });
});
function sM(e) {
    let { quest: t, isFeatured: n } = e,
        { useNewTile: s } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: nI.x3,
        children: (0, r.jsxs)("div", {
            className: nI.B0,
            children: [
                (0, r.jsx)(eP.D, {
                    className: nI.R_,
                    variant: "heading-sm/semibold",
                    children: n ? ea.intl.string(ea.t.AzkvWe) : ea.intl.string(ea.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(nB, {
                          children: (0, r.jsx)(sy, {
                              className: nI.d,
                              quest: t,
                              questContent: ee.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              isInFeaturedSection: n,
                              sourceQuestContent: ee.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                      })
                    : (0, r.jsx)(nq.Ay, {
                          className: nI.d,
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
var sH = n(97808),
    sL = n(778712),
    sQ = n(87664),
    sU = n(427262),
    sD = n(198525),
    sF = n(381351);
let sP = function (e) {
    let { quest: t } = e,
        [n, s] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([tb.default], () => tb.default.getCurrentUser()),
        u = sU.Ay.useName(a),
        c = (0, sQ.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(sD.default, {
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
        className: nI.x3,
        children: (0, r.jsxs)("div", {
            className: nI.B0,
            children: [
                (0, r.jsx)(eP.D, {
                    className: sF.R_,
                    variant: "heading-sm/semibold",
                    children: ea.intl.string(ea.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: sF.$Q, children: ea.intl.string(ea.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: sF.k0,
                    children: (0, r.jsx)(nc.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => s(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: nc.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(sF.Tn, { [sF.wH]: n }),
                                children: (0, r.jsx)(eO.D, {
                                    onClick: () => s(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: sF.lm,
                                        children: [
                                            (0, r.jsx)(sH.eu, {
                                                size: sL._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: ew.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: sF.Fj,
                                                children: [
                                                    (0, r.jsx)(J.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(J.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-muted",
                                                        children: ea.intl.string(ea.t.b9w3bO),
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
function sk(e) {
    let { questId: t, selectedSections: n } = e,
        s = (0, E.bG)([eR.A], () => eR.A.getQuest(t)),
        l = (0, E.bG)([eR.A], () => eR.A.getFetchQuestPreviewError(t)),
        { useNewTile: i } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP });
    if (null != l || null == s) return null;
    function a(e) {
        return null == n || 0 === n.length || n.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nQ, { quest: s }), (0, r.jsx)(nT, {})] }),
            a("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sM, { quest: s }), (0, r.jsx)(nT, {})] }),
            a("featured_tile") &&
                i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(sM, { quest: s, isFeatured: !0 }), (0, r.jsx)(nT, {})],
                }),
            a("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nk, { questId: s.id }), (0, r.jsx)(nT, {})] }),
            a("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nD, { quest: s }), (0, r.jsx)(nT, {})] }),
            a("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sP, { quest: s }), (0, r.jsx)(nT, {})] }),
            a("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nR, { quest: s }), (0, r.jsx)(nT, {})] }),
        ],
    });
}
var sq = n(875696);
function sw(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: s, controls: l, className: a } = e,
        u = (function () {
            let { useNewTile: e } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP });
            return [
                { value: "quest_bar", label: ea.intl.string(ea.t.rjVPdM) },
                { value: "home_card", label: ea.intl.string(ea.t["5wnpF3"]) },
                ...(e ? [{ value: "featured_tile", label: ea.intl.string(ea.t.AzkvWe) }] : []),
                { value: "share_embed", label: ea.intl.string(ea.t["D/gSWS"]) },
                { value: "channel_call_header", label: ea.intl.string(ea.t.gWinpQ) },
                { value: "members_list", label: ea.intl.string(ea.t.wpYima) },
                { value: "activity_panel", label: ea.intl.string(ea.t.L2mlUb) },
            ];
        })(),
        c = 0 === n.length || n.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === n.length ? n[0] : "all"), [n, c]);
    return (0, r.jsx)(nN.Ip, {
        className: o()(sq.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: sq.qE,
            children: [
                (0, r.jsx)(eP.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ea.intl.string(ea.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: sq.pf, children: l }),
                (0, r.jsxs)(nA.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        s?.(e);
                    },
                    children: [
                        (0, r.jsx)(nA.V.Item, { id: "all", children: ea.intl.string(ea.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(nA.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: sq.tZ, children: (0, r.jsx)("div", { className: sq.Qs, children: t }) }),
            ],
        }),
    });
}
let sB = function (e) {
    let { questId: t, className: n } = e,
        { questId: s, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: n } = (0, u.zy)(),
                s = i.useMemo(() => new URLSearchParams(n).get(eN.L1.QUEST_ID) ?? e, [n, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === s) return;
                        let n = new URLSearchParams();
                        (n.set(eN.L1.TAB, eN.NC.PREVIEW_TOOL),
                            n.set(eN.L1.QUEST_ID, e),
                            t.push(`${ew.BVt.QUEST_HOME}?${n.toString()}`));
                    },
                    [t, s],
                );
            return { questId: s, setQuestId: l };
        })(t),
        a = (0, E.bG)([eR.A], () => (null != s ? eR.A.getQuest(s) : void 0), [s]),
        o = (0, E.bG)([eR.A], () => (null != s ? eR.A.getQuestLoadedViaPreview(s) : null), [s]);
    (i.useEffect(() => {
        null != s &&
            (0, na.dQ)(s).then(() => {
                (0, na.Gt)(s);
            });
    }, [s]),
        i.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === s && (0, na.dQ)(s);
            }
            return (
                ni.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    ni.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]));
    let [c, d] = i.useState([]);
    return (0, r.jsx)(sw, {
        className: n,
        controls: (0, r.jsx)(np, {
            questId: s,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != s && (0, na.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(sk, { questId: o?.id, selectedSections: c }) : null,
    });
};
var sV = n(203879),
    sW = n(167417),
    sG = n(783977),
    sK = n(305866),
    sz = n(915089),
    s$ = n(255604);
function sY(e) {
    let { children: t, id: n } = e;
    return (0, r.jsx)(J.E, { className: s$.g, color: "text-subtle", id: n, variant: "body-sm/semibold", children: t });
}
let sX = function (e) {
    let { children: t, renderPopout: n } = e,
        s = (0, sz.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(nc.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(sK.l, { className: s$.S, "aria-labelledby": s, children: n(e, s) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var sJ = n(368884);
let sZ = function (e) {
    let { onChange: t, selectedFilters: n } = e,
        s = (0, eN.Nb)(),
        l = i.useCallback(
            (e) => (s) => {
                let l = e.filter((e) => s.includes(e.filter));
                t([...n.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [n, t],
        );
    return (0, r.jsx)(sX, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    s.map((e, t) => {
                        let s = e.options.map((e) => ({ label: (0, tH.up)(e.filter), value: e.filter })),
                            o = n.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter),
                            u = 0 === t ? a : `${a}-${t}`;
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: sJ.B }),
                                    (0, r.jsx)(sY, { id: u, children: e.heading }),
                                    (0, r.jsx)(sW.$, {
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
                    (0, r.jsx)("hr", { className: sJ.B }),
                    (0, r.jsx)("div", {
                        className: sJ.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                (t([]), o());
                            },
                            size: "sm",
                            text: ea.intl.string(ea.t.VkKicb),
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
                text: ea.intl.formatToPlainString(ea.t.CEfkXl, { numSelectedFilters: n.length }),
                icon: sG.FiltersHorizontalIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var s0 = n(771871),
    s1 = n(715482);
let s2 = function (e) {
    let { onChange: t, optionClassName: n, selectedSortMethod: s } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        o = (0, eN.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: n })), [o, n]);
    return (0, r.jsx)(sX, {
        renderPopout: (e, t) => {
            let { closePopout: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(sY, { id: t, children: ea.intl.string(ea.t.tZXJIS) }),
                    (0, r.jsx)(s0.z, {
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
            (0, r.jsx)(g.$, {
                ...e,
                "aria-label": ea.intl.formatToPlainString(ea.t.lPlIMo, { selected: (0, tH.Js)(s) }),
                buttonRef: t,
                size: "sm",
                text: (0, tH.Js)(s),
                icon: s1.ChevronLargeDownIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var s4 = n(710969),
    s5 = n(858899);
function s8() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, s5.P0)({ text: ea.intl.string(ea.t["5ABf1w"]), variant: "critical" }),
                tZ.default.track(ew.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function s3(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            var l;
            r(((l = e.current?.clientWidth), null == l ? 1 : Math.max(1, Math.min(s, Math.floor((l + n) / (t + n))))));
        }, [r, t, n, s, e]);
    return ((0, e9.g)(e, a, [t, n], { fireOnMount: !0 }), l);
}
var s6 = n(768497),
    s7 = n(288613);
let s9 = 4 * tR.A.Millis.SECOND;
function le(e) {
    let { children: t, tileMinWidth: n, gridGap: s } = e,
        l = i.useRef(null),
        a = s3(l, n, s);
    return (0, r.jsx)("div", {
        className: s6.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${n}px`, "--custom-quest-grid-gap": `${s}px` },
        children: null !== a && t(a),
    });
}
function lt(e) {
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
        { showToast: E } = s8(),
        h = i.useRef(null),
        [f, x] = i.useState(null),
        [g, v] = i.useState(0),
        { useNewTile: j } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: C }, _] = (0, e3.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: s9 },
        })),
        S = i.useCallback(
            (e) => {
                if ((s && 0 === t.length) || !l) return !1;
                let r = (0, s4.vc)(e, t, n);
                return null == r ? (E(e), !1) : (x(r.id), v((e) => e + 1), !0);
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
                    e.cancelled || x(null);
                },
            }));
    }, [f, g, _]),
    s && 0 === t.length)
        ? (0, r.jsx)(eT.y, { className: s6.u1 })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: s6.y7,
                children: [
                    (0, r.jsx)(eP.D, {
                        variant: "heading-xl/semibold",
                        children: ea.intl.string(a ? ea.t.PBfFnx : ea.t.NqFP6z),
                    }),
                    (0, r.jsx)(J.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: a ? ea.intl.format(ea.t.LdYS1H, { onClick: c }) : ea.intl.string(ea.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(le, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    t.map((t, n) => {
                        let s = Math.floor(n / e),
                            l = f === t.id,
                            i = null != f && !l;
                        return (0, r.jsxs)(
                            $.animated.div,
                            {
                                className: o()({ [s7.XB]: l, [nw.y]: j }),
                                style: t5(l, i, C),
                                children: [
                                    l &&
                                        (0, r.jsx)("div", {
                                            className: s7.OA,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)("div", { className: s7.E4 }, g),
                                        }),
                                    j
                                        ? (0, r.jsx)(sy, {
                                              quest: t,
                                              questContent: ee.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: s6.d,
                                              sourceQuestContent: ee.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(nq.Ay, {
                                              quest: t,
                                              questContent: ee.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: s6.d,
                                              sourceQuestContent: ee.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
}
var ln = n(458518),
    ls = n(349095);
let ll = [],
    lr = eN.L1.SORT,
    li = eN.L1.FILTER;
function la(e) {
    let t,
        n,
        s,
        l,
        { ref: a, ...o } = e,
        c = i.useRef(null),
        [d, m] =
            ((t = (0, ln.o)()),
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
                (e = d.get(lr)),
                ((0, ej.uJ)(e) ? null : (Object.values(tP.kL).find((t) => t === e) ?? null)) ?? tP.kL.SUGGESTED
            );
        }, [d]),
        h = i.useMemo(
            () =>
                (function (e) {
                    if ((0, ej.uJ)(e)) return null;
                    let t = e
                        .split(",")
                        .map((e) => (0, tP.WQ)(e))
                        .filter(t0.Vq);
                    return t.length > 0 ? t : null;
                })(d.get(li)) ?? ll,
            [d],
        ),
        f = i.useCallback(
            (e) => {
                m({ [lr]: e });
            },
            [m],
        ),
        x = i.useCallback(
            (e) => {
                m({
                    [li]:
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
            quests: g,
            excludedQuests: v,
            isFetchingCurrentQuests: j,
            hasFetched: C,
        } = (0, eN.Qh)(
            eN.NC.ALL,
            i.useMemo(() => ({ sortMethod: E, filters: h, removeExpiredQuests: !0 }), [E, h]),
        ),
        _ = i.useCallback(() => {
            x(ll);
        }, [x]),
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
        (0, eN.$P)({ selectedSortMethod: E, selectedFilters: h, numQuestsVisible: g.length }),
        i.useImperativeHandle(
            a,
            () => ({
                scrollToQuest: (e) => {
                    (_(),
                        f(tP.kL.SUGGESTED),
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
                    className: ls.Mj,
                    children: [
                        (0, r.jsx)(eP.D, { variant: "heading-lg/medium", children: ea.intl.string(ea.t.giYD00) }),
                        (0, r.jsxs)("div", {
                            className: ls.Nf,
                            children: [
                                (0, r.jsx)(s2, { onChange: f, optionClassName: ls.Uq, selectedSortMethod: E }),
                                (0, r.jsx)(sZ, { onChange: x, selectedFilters: h }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(lt, {
                    ref: c,
                    quests: g,
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
var lo = n(575593),
    lu = n(462887),
    lc = n(765671),
    ld = n(736653),
    lm = n(162232),
    lE = n(734736),
    lh = n(303136),
    lf = n(842245);
let lx = function (e) {
    let { assetUrl: t, className: n, isAnimated: s = !1, questName: l } = e,
        i = t + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(lf.k, n),
        children: s
            ? (0, r.jsx)(lh.A, {
                  preload: "auto",
                  className: lf.L,
                  fallbackImage: i,
                  children: (0, r.jsx)("source", { src: t, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: lf.L, src: i, alt: l }),
    });
};
var lg = n(57718),
    lv = n(966354);
let lj = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [n, s] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        f = (0, E.bG)([tb.default], () => tb.default.getCurrentUser()),
        { ref: x, height: g = 0 } = (0, lc.Ay)(),
        v = (0, ld.Ay)(),
        j = (0, eN.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        C = t.userStatus?.claimedTier ?? 0,
        _ = t.config.rewards[C],
        S = _?.type === tg.l.FRACTIONAL_PREMIUM,
        p = _?.type === tg.l.COLLECTIBLE,
        N = _?.type === tg.l.VIRTUAL_CURRENCY,
        A = (0, nY.Pk)(t),
        O = _?.collectibleProduct?.items?.[0],
        T = O?.type === lo.R.AVATAR_DECORATION ? O : null,
        b = i.useMemo(
            () =>
                null == _
                    ? null
                    : !0 === N && t.userStatus?.orbQuantityClaimed != null
                      ? ea.intl.format(ea.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : _.name,
            [_, N, t],
        );
    (0, lc.i4)(d, (e) => {
        let { height: t } = e;
        if (!p || null == t || null == m.current || null == d.current || null == h.current) return;
        let n = d.current.getBoundingClientRect(),
            s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((s.top - n.top - l.height) / 2);
    });
    let R = (0, lu.M)(v),
        y = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, eM.tW)(t, eM.fY.REWARD, void 0, void 0, A), [t, A]),
        H = n ? g + 8 : 0,
        { content_position: L, row_index: Q, ...U } = (0, et.fF)(ee.uF.TROPHY_CASE_CARD);
    function D() {
        (s(!0), tZ.default.track(ew.HAw.QUEST_HOVER, { quest_id: t.id, ...U }));
    }
    function F() {
        s(!1);
    }
    function P(e) {
        (c(!0), tZ.default.track(ew.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id }));
    }
    return null == _ || u
        ? null
        : (0, r.jsx)(e6.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: D,
                  onBlur: F,
                  onMouseEnter: D,
                  onMouseLeave: F,
                  className: o()(lv.kL, { [lv.yo]: n }),
                  children: [
                      null != f &&
                          p &&
                          null != T &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: lv.FX,
                              style: { top: l },
                              children: (0, r.jsx)(lm.A, {
                                  avatarDecorationOverride: T,
                                  user: f,
                                  guildId: null,
                                  animateOnHover: !n,
                              }),
                          }),
                      S
                          ? (0, r.jsx)(lE.A, { className: lv.Sl })
                          : N
                            ? (0, r.jsx)(lx, {
                                  className: lv.Sl,
                                  isAnimated: n,
                                  questName: t.config.messages.questName,
                                  assetUrl: M.url,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(I.A, {
                                    className: lv.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => P(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: lv.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => P(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(lv.Lw, { [lv.en]: R, [lv.So]: !R }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: lv.r$,
                          style: { transform: `translateY(-${H}px)` },
                          children: (0, r.jsx)(lg.Ay, {
                              logotypeClassName: o()(lv.wm, { [lv.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: x,
                          className: lv.zH,
                          children: [
                              (0, r.jsx)(eP.D, {
                                  className: lv.DD,
                                  variant: "heading-sm/semibold",
                                  color: "text-overlay-light",
                                  children: ea.intl.format(ea.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(J.E, {
                                  variant: "body-sm/medium",
                                  color: R ? "text-muted" : "text-overlay-light",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: ea.intl.format(ea.t["kXVcV+"], { reward: b, claimedDate: j }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var lC = n(396478);
function l_(e) {
    let { onClick: t } = e,
        s = (0, ld.Ay)();
    return (0, r.jsxs)(lC.pp, {
        theme: s,
        children: [
            (0, r.jsx)(lC.G8, { lightSrc: n(826223), darkSrc: n(317017), width: 415, height: 200 }),
            (0, r.jsx)(lC.SG, { note: ea.intl.format(ea.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var lS = n(178093);
function lp(e) {
    let { onSelectTab: t, className: n } = e,
        { claimedQuests: s, isFetchingClaimedQuests: l } = (0, eN.Iq)();
    return l && 0 === s.length
        ? (0, r.jsx)(eT.y, { className: lS.u })
        : 0 === s.length
          ? (0, r.jsx)(l_, { onClick: () => t(eN.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(lS.U, n),
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(lj, { quest: e }, e.id)),
            });
}
var lN = n(192308);
let lA = i.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
function lO(e) {
    let { children: t, sectionIdentifier: n, questId: s, duplicate: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: u,
            highlightCount: c,
            highlightAnimationProgress: d,
        } = i.useContext(lA),
        m = a === s && u === n && !l,
        E = l || (null != a && (a !== s || u !== n)),
        { useNewTile: h } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        f = i.useMemo(() => t5(m, E, d), [m, E, d]);
    return (0, r.jsxs)($.animated.div, {
        [tc]: "",
        className: o()({ [s7.XB]: m, [s7.FR]: h, [nw.y]: h }),
        style: f,
        children: [
            m &&
                (0, r.jsx)("div", {
                    className: s7.OA,
                    "aria-hidden": !0,
                    children: (0, r.jsx)("div", { className: s7.E4 }, c),
                }),
            t,
        ],
    });
}
var lT = n(333007),
    lb = n(765548),
    lI = n(897833);
function lR(e) {
    var t, n;
    let { containerWidth: s, questIds: l, sectionIdentifier: a, ref: o } = e,
        u = (0, tJ.C)(),
        { variant: c } = ey.Mk.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        d = c === ey.d.LARGE_MASK_MARGIN,
        m = l.length >= 2,
        E = i.useRef(null),
        h = i.useRef(null),
        f = i.useRef(null),
        x = (0, lN.Rv)(),
        { targetQuestId: g, targetSectionIdentifier: v } = i.useContext(lA),
        j = null != g && v === a,
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
                f = (0, lb.A)(() => {
                    let e = l.current?.getScrollerNode(),
                        t = s.current;
                    if (null == e || null == t) return null;
                    let n = Array.from(e.querySelectorAll(td));
                    if (n.length < 4) return null;
                    let r = n[1].offsetLeft - n[0].offsetLeft;
                    return r <= 0 ? null : { node: e, stride: r, rest: to(e, n[2], t) };
                }),
                x = (0, lb.A)(() => {
                    let e = h.current;
                    h.current = null;
                    let t = l.current?.getScrollerNode()?.scrollLeft;
                    return null != e && null != t && 1 > Math.abs(t - e);
                }),
                g = (0, lb.A)(() => {
                    ((m.current = !1), 0 !== E.current && window.clearTimeout(E.current), (E.current = 0));
                }),
                v = (0, lb.A)(() => {
                    if (m.current) return;
                    let e = f();
                    if (null == e) return;
                    let t = e.node.scrollLeft - e.rest;
                    if (!(1 > Math.abs(t))) {
                        var n, s, l;
                        ((n = e.node),
                            (s = Math.round(t / e.stride)),
                            (l = e.rest),
                            (0, lT.flushSync)(() => {
                                (0 !== s && a((e) => e + s), 0 !== o && u(0));
                            }),
                            (h.current = l),
                            n.scrollTo({ left: l, behavior: "instant" }));
                    }
                }),
                j = (0, lb.A)(() => {
                    m.current && (g(), v());
                }),
                C = (0, lb.A)(
                    (e) =>
                        !!n &&
                        !m.current &&
                        ((0, lT.flushSync)(() => {
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
                        ((0, tj.vq)(t.relatedTarget, Node) && e.contains(t.relatedTarget)) || (d(!1), v());
                    }
                    function r() {
                        if (m.current) return void j();
                        let t = e.ownerDocument.activeElement;
                        ((0, tj.vq)(t) && e.contains(t) && t.matches(":focus-visible")) || v();
                    }
                    let i = new ResizeObserver(() => {
                        g();
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
                                g());
                        }
                    );
                }, [g, j, t, n, l, v]),
                {
                    rotation: r,
                    activeSlotIndex: t > 1 ? 2 + o : 0,
                    scrollStart: C,
                    isRepositionScroll: x,
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
        H = i.useCallback(
            (e) => {
                let t = M.findIndex((t) => t.questId === e);
                -1 !== t &&
                    (E.current?.scrollIntoView({ block: "center", behavior: "smooth" }),
                    f.current?.scrollBySteps(t - 2));
            },
            [M],
        ),
        L = i.useCallback(
            (e) => {
                let {
                    scrollingType: t,
                    scrollWindowStartIndex: n,
                    scrollWindowEndIndex: s,
                    scrollWindowSize: r,
                    scrollingDirection: i,
                } = e;
                b() ||
                    (0, eq.kO)({
                        scrollingType: t,
                        scrollingDirection: i,
                        scrollWindowStartIndex: n,
                        scrollWindowEndIndex: s,
                        scrollWindowSize: r,
                        questContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
                        carouselSize: l.length,
                    });
            },
            [b, l.length],
        );
    return (
        i.useImperativeHandle(o, () => ({ scrollToQuest: H }), [H]),
        (0, r.jsxs)("div", {
            ref: E,
            className: lI.I6,
            children: [
                (0, r.jsx)("div", { className: lI.Cz, "aria-hidden": !0 }),
                (0, r.jsx)(tx, {
                    maskWidth: ti(u),
                    overflowAmount: 25,
                    disableUserScroll: m,
                    groupedArrows: m,
                    onScrollStart: T,
                    onScrollEnd: L,
                    autoCycle: m && !(C || S || I || x || j),
                    singleStep: !0,
                    scrollerRef: h,
                    controlRef: f,
                    maskMarginMultiplier: d ? 2 : 0.75,
                    children: (0, r.jsx)("div", {
                        className: lI.FO,
                        style: { "--custom-featured-tile-gap": "4px" },
                        onPointerEnter: () => _(!0),
                        onPointerLeave: () => _(!1),
                        children: M.map((e, t) =>
                            (0, r.jsx)(
                                lO,
                                {
                                    questId: e.questId,
                                    duplicate: e.isDuplicate,
                                    sectionIdentifier: a,
                                    children: (0, r.jsx)(sy, {
                                        isInFeaturedSection: !0,
                                        isActive: t === O && !R,
                                        onMenuOpenChange: N,
                                        questId: e.questId,
                                        questContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
                                        contentPosition: e.questIndex,
                                        rowIndex: 0,
                                        sourceQuestContent: ee.uF.QUEST_HOME_FEATURED_SECTION,
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
var ly = n(915655);
function lM(e) {
    let { className: t, ...n } = e;
    return (0, r.jsxs)("div", {
        className: o()(ly.kL, t),
        ...n,
        children: [
            (0, r.jsx)("div", { className: o()(t8.m, ly.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: ly.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(t8.m, ly.Vr) }, t),
                ),
            }),
        ],
    });
}
var lH = n(384343);
function lL(e) {
    let { questContent: t, questIds: n, rowIndex: s, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(lA),
        { useNewTile: o } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = ey.Mk.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        c = (0, tJ.C)(),
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
                (0, eq.kO)({
                    scrollingType: d ? et.pk.AUTO : s,
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
        E = u === ey.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(tx, {
        maskWidth: ti(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${ta(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: lH.FO,
            children: [
                n.map((e, n) =>
                    (0, r.jsx)(
                        lO,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(sy, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lH.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(nq.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === tl.FEATURED,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lH.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: lH.fu }),
            ],
        }),
    });
}
var lQ = n(125822);
let lU = tR.A.Millis.WEEK;
function lD() {
    let e = eR.A.quests;
    if (0 === eR.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let n of s.keys()) {
        let l = e.get(n);
        (null == l || (0, n4.Ic)(l)) && (null == t && (t = new Map(s)), t.delete(n));
    }
    return null != t && ((s = t), !0);
}
class lF extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        (this.waitFor(eR.A), (s = new Map()));
        let t = !1;
        if (null != e) {
            let n = Date.now() - lU;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < n) {
                    t = !0;
                    continue;
                }
                s.set(l, r);
            }
        }
        return (this.syncWith([eR.A], lD), t);
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
let lP = new lF(ni.h, {
    QUESTS_MARK_DISCOVERED: function (e) {
        if (null == eR.A.getQuest(e.questId)) return !1;
        let t = new Map(s);
        (t.set(e.questId, new Date().toISOString()), (s = t));
    },
});
function lk(e, t) {
    if (e === t) return !0;
    let n = new Set(e),
        s = new Set(t);
    return n.size === s.size && [...n].every((e) => s.has(e));
}
let lq = function () {
    let e = (0, sU.Gn)(),
        t = (0, eN.Cv)(),
        n = (0, E.bG)([eR.A], () => eR.A.lastFetchedCurrentQuests > 0),
        { quests: s, isFetchingCurrentQuests: l } = (0, eN.Qh)(eN.NC.ALL, {
            sortMethod: tP.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, lQ.A)(
            () =>
                s.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            s.map((e) => {
                let { id: t } = e;
                return t;
            }),
            lk,
        ),
        a = (0, F.T2)(),
        o = (0, E.bG)([lP], () => lP.getDiscoveredAtByQuestId(), []),
        u = i.useMemo(() => (l || !n) && 0 === r.length, [l, n, r.length]),
        { useNewTile: c } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
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
                              let t = eR.A.getQuestConfig(e);
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
                                      { userStatus: o, preview: u } = eR.A.getQuest(t.id) ?? {},
                                      c = [],
                                      d =
                                          null != o &&
                                          null != o.enrolledAt &&
                                          null != o.completedAt &&
                                          null == o.claimedAt;
                                  if ((0, n4.kd)(t) && !d) return r ? [tl.EXPIRED] : null;
                                  if (
                                      (s.has(t.id) && c.push(tl.DISCOVERED),
                                      i && !0 === u && c.push(tl.PREVIEW),
                                      null != o && null != o.enrolledAt && null == o.claimedAt)
                                  )
                                      return [...c, tl.IN_PROGRESS];
                                  let m = !n7(t);
                                  return m && null != n && (0, tQ.I0)(n, t.id) && n9(tl.FEATURED, l)
                                      ? [...c, tl.FEATURED]
                                      : new Date(t.expiresAt).valueOf() <= Date.now() + (a ? n8 : n5)
                                        ? [...c, tl.ENDING_SOON]
                                        : m && n9(tl.FEATURED, l)
                                          ? [...c, tl.FEATURED]
                                          : (0, tL.ks)(t)
                                            ? [...c, tl.ORB]
                                            : [...c, tl.SPECIAL_QUESTS];
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
                                  let t = eR.A.getQuestConfig(e);
                                  null == t || n7(t) || u(e);
                              }),
                              t.forEach((e) => u(e)),
                              tr
                                  .map((e) => {
                                      let t = n6?.[e.identifier];
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
var lw = n(113775);
let lB = {
        [tl.FEATURED]: ee.uF.QUEST_HOME_FEATURED_SECTION,
        [tl.IN_PROGRESS]: ee.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [tl.ENDING_SOON]: ee.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [tl.ORB]: ee.uF.QUEST_HOME_ORB_SECTION,
        [tl.DISCOVERED]: ee.uF.QUEST_HOME_DISCOVERED_SECTION,
        [tl.EXPIRED]: ee.uF.QUEST_HOME_EXPIRED_SECTION,
        [tl.PREVIEW]: ee.uF.QUEST_HOME_PREVIEW_SECTION,
        [tl.SPECIAL_QUESTS]: ee.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    lV = 4 * tR.A.Millis.SECOND;
function lW(e) {
    let { deepLinkedQuestId: t, isLoadingQuestHomeHero: n, className: s, ref: l } = e,
        a = (0, u.zy)(),
        { useNewTile: c, useNewFeaturedTiles: d } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        { sections: m, isFetchingCurrentQuests: E, getSectionIdentifierForTargetedQuest: h } = lq(),
        f = i.useRef(null),
        x = i.useRef(null),
        { showToast: g } = s8(),
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
    (0, e9.g)(f, T, [T], { fireOnMount: !0 });
    let [{ highlightAnimationProgress: b }, I] = (0, e3.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: lV },
        })),
        R = i.useCallback(
            (e, t) => {
                if (null == e || null == N || E || n) return !1;
                t && (0, na.sB)(e);
                let s = h(e),
                    l = !0 === t && s !== tl.FEATURED ? tl.DISCOVERED : s;
                if (null == s) return (g(e), !1);
                let r = document.getElementById((0, nq.sT)(e, l ?? void 0));
                return (
                    null != r &&
                    (j(e),
                    _(l),
                    p((e) => e + 1),
                    l === tl.FEATURED && c && d
                        ? x.current?.scrollToQuest(e)
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
            [c, d, j, p, I, E, n, g, N, h],
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
    return (0, r.jsx)(lA.Provider, {
        value: y,
        children: (0, r.jsx)("div", {
            className: o()(lw.kL, s),
            ref: f,
            children: E
                ? (0, r.jsx)(lM, { role: "status", "aria-label": ea.intl.string(ea.t.ZTNur7) })
                : m.length > 0
                  ? m.map((e, t) => {
                        let { identifier: n, questIds: s, title: l } = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: lw.p9,
                                children: [
                                    (0, r.jsx)(eP.D, {
                                        variant: "heading-lg/semibold",
                                        style: { "--custom-section-title-inset": "2px" },
                                        className: lw.Gf,
                                        children: ea.intl.string(l),
                                    }),
                                    n === tl.FEATURED && c && d
                                        ? (0, r.jsx)(lR, {
                                              ref: x,
                                              questIds: s,
                                              containerWidth: N,
                                              sectionIdentifier: n,
                                          })
                                        : (0, r.jsx)(lL, {
                                              questIds: s,
                                              rowIndex: t,
                                              sectionIdentifier: n,
                                              questContent: lB[n],
                                          }),
                                ],
                            },
                            n,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: lw.y7,
                        children: [
                            (0, r.jsx)(eP.D, { variant: "heading-xl/semibold", children: ea.intl.string(ea.t.NqFP6z) }),
                            (0, r.jsx)(J.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: ea.intl.string(ea.t.LhD4yH),
                            }),
                        ],
                    }),
        }),
    });
}
var lG = n(121894),
    lK = n(851936);
let lz = (0, es.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let n = t().logger ?? (0, lK.L)({ location: tP.rE.QUEST_HOME_DESKTOP });
        if (n.info === tk.tE || t().elapsed >= 6e4) return;
        let s = performance.now() - t().startTime;
        s > 6e4 && (s = 6e4);
        let l = { elapsed: s };
        (s - t().lastOutputLogTime > 1e3 &&
            (n.info(`QuestHome asset loading duration so far: ${s}ms`), (l.lastOutputLogTime = s)),
            null == t().logger && (l.logger = n),
            (0, lG.r)(() => e(l)));
    },
}));
var l$ = n(516226),
    lY = n(620241);
function lX(e) {
    let { children: t, hasSearchResults: n } = e,
        { showDefaultBanner: s } = ep.C.useConfig({ location: tP.rE.QUEST_HOME_DEFAULT_BANNER });
    return s ? (0, r.jsx)("div", { className: o()(lY.iS, { [lY.R]: n }), children: t }) : null;
}
function lJ(e) {
    let { children: t, onQuestCtaClick: n, questHomeHero: s, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, eA.zT)(),
        c = null != s && !a,
        d = l || (c && u);
    return (0, r.jsxs)("div", {
        className: o()(lY.iS, { [lY.R]: i }),
        children: [
            d && (0, r.jsx)(nr, {}),
            !l && (c ? (0, r.jsx)(nl, { hero: s, isBannerLoading: u, onQuestCtaClick: n }) : t),
        ],
    });
}
var lZ = n(613956),
    l0 = n(604880),
    l1 = n(318808);
function l2(e) {
    let { adCreativeIds: t } = e,
        n = i.useCallback(() => (0, so.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: lZ.MY,
        children: [
            (0, r.jsx)("img", { className: lZ.Bg, src: l1.Ay, alt: "" }),
            (0, r.jsx)("div", { className: lZ.r$, children: (0, r.jsx)("img", { src: l0, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: lZ.Nr,
                children: [
                    (0, r.jsx)(eP.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: lZ.ky,
                        children: ea.intl.string(ea.t.GXmn57),
                    }),
                    (0, r.jsx)(J.E, {
                        variant: "body-md/normal",
                        className: lZ.G3,
                        children: ea.intl.string(ea.t.bWuKqh),
                    }),
                    (0, r.jsx)(g.$, {
                        variant: "primary",
                        text: ea.intl.string(ea.t.UQvCf7),
                        fullWidth: !0,
                        onClick: n,
                    }),
                ],
            }),
        ],
    });
}
var l4 = n(143592),
    l5 = n(215130);
let l8 = function (e) {
    let { matchingQuestIds: t } = e,
        n = (0, tJ.C)(),
        { useNewTile: s } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = ey.Mk.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        u = l === ey.d.LARGE_MASK_MARGIN,
        c = s ? 12 : 20,
        d = s3(a, ta(n, u), c, 3);
    return (0, r.jsxs)(j.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: l5.kL,
        ref: a,
        children: [
            (0, r.jsxs)(eP.D, {
                variant: "heading-lg/medium",
                children: [ea.intl.string(ea.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(j.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: l5.y7,
                      children: [
                          (0, r.jsx)(l4.e, { alt: ea.intl.string(ea.t["Xe+fJM"]) }),
                          (0, r.jsxs)(j.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(eP.D, {
                                      variant: "heading-lg/medium",
                                      children: ea.intl.string(ea.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(eP.D, {
                                      variant: "heading-xs/medium",
                                      children: ea.intl.string(ea.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: l5.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${ta(n, u)}px`,
                          "--custom-quest-grid-gap": `${c}px`,
                      },
                      children:
                          null !== d &&
                          t.map((e, t) =>
                              s
                                  ? (0, r.jsx)(
                                        nB,
                                        {
                                            children: (0, r.jsx)(sy, {
                                                eagerLoadAssets: !0,
                                                questId: e,
                                                questContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                                contentPosition: t,
                                                rowIndex: Math.floor(t / d),
                                                className: o()(l5.d, l5.hS),
                                                sourceQuestContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                            }),
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        nq.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / d),
                                            className: l5.d,
                                            sourceQuestContent: ee.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
function l3() {
    let { enabled: e } = ey.Mk.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: t } = ey.aD.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        { newLayoutWithSearch: n } = ey.s9.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP });
    return e || t || n;
}
var l6 = n(649852),
    l7 = n.n(l6),
    l9 = n(379078),
    re = n(704554),
    rt = n(823784);
let rn = {
        searchType: l9.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(t0.Vq);
        },
        sortType: l9.r.JARO_WINKLER,
        throttleMs: 200,
    },
    rs = function () {
        let [e, t] = i.useState(""),
            [n, s] = i.useState(null),
            l = (0, E.yK)([eR.A], () =>
                (0, eN.mn)(Array.from(eR.A.quests.values()), { sortMethod: tP.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => l7()(eq.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, rt.tv)();
                (null != e &&
                    (0, eq.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, rt.l6)());
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
                                  .filter(t0.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: n } = (0, rt.$N)();
                    (n && (0, eq.OQ)({ searchSessionId: t.uuid }),
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
        return ((0, re.RT)(r, l, d, rn), { matchingQuestIds: n, query: e, setQuery: t, onSearchClose: c });
    };
var rl = n(631001),
    rr = n(758836),
    ri = n(613057);
let ra = i.createContext({});
function ro(e) {
    let { backdrop: t, banner: n, children: s, header: l, withFullBleedBanner: a = !1 } = e,
        { onScroll: o, scrollerRef: u } = i.useContext(ra);
    return (0, r.jsxs)(ts.X.Provider, {
        value: u,
        children: [
            l,
            (0, r.jsx)(em, {}),
            (0, r.jsxs)(D.A, {
                onScroll: o,
                ref: u,
                children: [
                    t,
                    a && n,
                    (0, r.jsxs)(Q.A, { className: lY.Jo, innerClassName: lY.FG, children: [!a && n, s] }),
                ],
            }),
        ],
    });
}
function ru(e) {
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
function rc(e) {
    let { onLoadComplete: t, className: n, isVirtualCurrencyEnabled: s } = e,
        l = (0, E.bG)([S.Ay], () => S.Ay.useReducedMotion),
        a = (0, E.bG)([ex.A], () => ex.A.isFocused()),
        { ref: o, inViewport: u } = (0, sV.p)(),
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
        let e = (0, eg.TM)();
        return (0, r.jsx)(eA._M, {
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
    return (0, r.jsx)(eA._M, {
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
function rd(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(lY.Tv, { [lY.lJ]: n }),
        children: [
            (0, r.jsx)(ne, {}),
            (0, r.jsx)("div", { className: o()(lY.nz, { [lY.ZZ]: n }) }),
            (0, r.jsx)(rc, {
                onLoadComplete: t,
                className: o()(lY.Fe, { [lY.H4]: n, [lY.Q8]: !n }),
                isVirtualCurrencyEnabled: n,
            }),
        ],
    });
}
function rm(e) {
    let { onAssetLoad: t } = e,
        { enabled: n } = eS.useConfig({ location: tP.rE.QUEST_HOME_DESKTOP }),
        s = !n,
        l = i.useCallback(() => {
            s ? window.open(ew.X7G.PAID_TERMS_ORBS) : window.open(ev.A.getArticleURL(ew.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(eW, {
        adContentId: s ? tP.yr : tP.uz,
        title: s ? ea.intl.format(ea.t.BCBIlp, {}) : ea.intl.format(ea.t.lmMBfy, {}),
        subtitle: s ? ea.intl.format(ea.t.U9FY0J, {}) : ea.intl.string(ea.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(x.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: ea.intl.string(ea.t["3bdWzt"]),
                          onClick: () =>
                              (0, T.Cz)({
                                  tab: rr.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: p.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: ea.intl.string(ea.t["7kTAgJ"]),
                          onClick: l,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: ea.intl.string(ea.t.hvVgAZ),
                  onClick: l,
                  icon: v.LinkExternalSmallIcon,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(rd, { onAssetLoad: t, isVirtualCurrencyEnabled: s }),
    });
}
let rE = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, u.zy)(),
        s = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(n.search).getAll(eN.L1.AD_CREATIVE_IDS), [n.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        f = (0, E.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: x,
            onSelectTab: g,
            tabs: v,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                n = rl.A.useField("tab"),
                s = (0, u.zy)(),
                l = (0, eN.p5)(),
                r = l3();
            i.useEffect(() => {
                rl.A.getState().initializeFromUrl(s.search, l);
            }, [s.search, l]);
            let a = i.useCallback((e) => {
                rl.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: eN.NC.ALL, label: r ? ea.intl.string(ea.t.Jt6u7B) : ea.intl.string(ea.t["0SzXmi"]) },
                            t
                                ? {
                                      id: eN.NC.CLAIMED,
                                      label: r ? ea.intl.string(ea.t["3TVY/R"]) : ea.intl.string(ea.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: eN.NC.PREVIEW_TOOL, label: ea.intl.string(ea.t.BDUDau) } : null,
                        ].filter(t0.Vq),
                    [t, l, r],
                ),
                selectedTab: n,
                onSelectTab: a,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: S, setQuery: I, matchingQuestIds: y, onSearchClose: M } = rs(),
        { onScroll: Q } = (0, L.G)(),
        U = eC.A.getState().getUtmCurrentContext(),
        D = lz((e) => e.registerAssetLoad),
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
                    tab: x,
                },
            });
        }, [x]),
        (0, b.HU)({ location: ea.intl.string(ea.t.JALI2K) }),
        (0, eE.Ay)());
    let k = i.useRef(null),
        w = l3(),
        B = i.useRef(null),
        V = i.useCallback((e) => {
            B.current?.scrollToQuest(e);
        }, []),
        W = i.useMemo(() => ((0, ej.uJ)(n.hash) ? null : n.hash.substring(1)), [n.hash]),
        { questHomeHero: G, isLoading: K, confirmedEmpty: $ } = (0, F.lg)(l[0] ?? null),
        { showHeroPlaceholder: Y } = (0, ep.x)(),
        X = i.useCallback(() => {
            ((0, eh.Y)({
                pageType: ew.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ew.JJy.ORBS_BALANCE_MENU,
                ctaObject: ew.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, T.Cz)({ tab: rr.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.ORBS_BALANCE_MENU }));
        }, []);
    (i.useEffect(() => {
        (0, _.I)(ew.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            H.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != f) return;
            let e = new URLSearchParams(n.search),
                l = e.get(eN.L1.TAB);
            if (l === eN.NC.PREVIEW_TOOL) {
                let t = e.get(eN.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", ew.e$_.DEEP_LINK, {
                    type: ri.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === s.action && r?.type === "navigate" && t && l !== eN.NC.PREVIEW_TOOL) {
                let t = (0, ej.uJ)(n.hash) ? null : n.hash.substring(1),
                    s = e.get(eN.L1.SORT),
                    r = e.get(eN.L1.FILTER),
                    i = e.get(eN.L1.AD_CREATIVE_IDS);
                A.A.openNativeAppModal("quests", ew.e$_.DEEP_LINK, {
                    type: ri.XK.QUEST_HOME,
                    params: { questId: (0, ej.uJ)(t) ? void 0 : t, sort: s, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [n.search, f, s.action, n.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]));
    let J = i.useCallback(
            (e) => {
                (s.replace({ ...s.location, hash: void 0 }), k.current?.scrollToTop({ animate: !1 }), g(e), M());
            },
            [s, g, M],
        ),
        Z = i.useMemo(() => null != y && w, [y, w]),
        ee = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        et = i.useMemo(() => ({ onScroll: Q, scrollerRef: k }), [Q, k]),
        en = K && !Y;
    return a
        ? (0, r.jsx)(l2, { adCreativeIds: l })
        : (0, r.jsx)(l$.M.Provider, {
              value: ee,
              children: (0, r.jsx)(ra.Provider, {
                  value: et,
                  children: (0, r.jsx)("div", {
                      className: o()(lY.kL, { [lY.KY]: !t }),
                      children: (0, r.jsxs)(ro, {
                          backdrop: x === eN.NC.ALL && !Z && (0, r.jsx)(z, { hero: G }),
                          header: (0, r.jsx)(ru, {
                              selectedTab: x,
                              onSelectTab: J,
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
                                              placeholder: ea.intl.string(ea.t.y10TI2),
                                              onClear: M,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(ef.SS, {
                                          analyticsPage: ew.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: ef.cP.END,
                                          ctaText: ea.intl.string(ea.t["J+vlIR"]),
                                          ctaOnClick: X,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              x === eN.NC.ALL &&
                              !en &&
                              (0, r.jsx)(
                                  eA.y5,
                                  {
                                      source: tP.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: G?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: $
                                          ? (0, r.jsx)(lX, {
                                                hasSearchResults: Z,
                                                children: (0, r.jsx)(rm, { onAssetLoad: D }),
                                            })
                                          : (0, r.jsx)(lJ, {
                                                onQuestCtaClick: V,
                                                hasSearchResults: Z,
                                                questHomeHero: G,
                                                isLoadingQuestHomeHero: K,
                                                children: (0, r.jsx)(rm, { onAssetLoad: D }),
                                            }),
                                  },
                                  G?.id,
                              ),
                          children: [
                              Z && null != y && (0, r.jsx)(l8, { matchingQuestIds: y }),
                              x === eN.NC.CLAIMED
                                  ? (0, r.jsx)(lp, { onSelectTab: J, className: Z ? lY.R : void 0 })
                                  : x === eN.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(sB, { className: Z ? lY.R : void 0 })
                                    : w
                                      ? (0, r.jsx)(lW, {
                                            className: Z ? lY.R : void 0,
                                            ref: B,
                                            deepLinkedQuestId: W,
                                            isLoadingQuestHomeHero: K,
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(la, { ref: B }), !Z && (0, r.jsx)(q, {})],
                                        }),
                          ],
                      }),
                  }),
              }),
          });
};
