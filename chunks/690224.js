let l, i;
n.d(t, { A: () => a8 });
var s,
    a,
    r = n(627968),
    o = n(64700),
    c = n(503698),
    d = n.n(c),
    u = n(873174),
    h = n(837381),
    m = n(17928),
    A = n(446837),
    g = n(187322),
    p = n(536804),
    f = n(789279),
    C = n(584648),
    E = n(448539),
    x = n(45596);
let S =
    ((s = d()(x.qZ, x.Vl)),
    (a = window.ResizeObserver ?? A.t),
    (l = new Map()),
    (i = new a((e) => {
        e.forEach((e) => {
            let { target: t } = e;
            l.get(t)?.(e);
        });
    })),
    o.forwardRef(function (e, t) {
        let {
                children: n,
                className: a,
                onResize: c,
                contentClassName: u,
                onScroll: h,
                dir: m = "ltr",
                fade: A = !1,
                customTheme: S = !1,
                style: _,
                ...I
            } = e,
            y = o.useRef(null),
            N = o.useRef(null),
            [j, T] = o.useState(!1),
            { scrollerRef: b, getScrollerState: v } = (0, p.A)(),
            M = (0, f.A)(b);
        o.useImperativeHandle(
            t,
            () => ({
                getScrollerNode: () => b.current,
                isScrolling: () => null != y.current,
                getScrollerState: v,
                ...(0, C.A)(b, v, M),
            }),
            [b, v, M],
        );
        let R = o.useCallback(
            (e) => {
                null == y.current ? T(!0) : clearTimeout(y.current),
                    (y.current = setTimeout(() => {
                        (y.current = null), T(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h],
        );
        return (
            o.useEffect(() => () => clearTimeout(y.current), []),
            (0, E.A)({ ref: b, key: "container", onUpdate: c, resizeObserver: i, listenerMap: l }),
            (0, E.A)({ ref: N, key: "content", onUpdate: c, resizeObserver: i, listenerMap: l }),
            (0, r.jsx)("div", {
                ref: b,
                className: d()(a, { [x.Rv]: A, [x.D8]: S, [s]: !0, [x.fs]: !0, [x.qw]: j && A }),
                style: _,
                dir: m,
                onScroll: R,
                ...I,
                children: (0, r.jsx)(g.xp, {
                    containerRef: N,
                    children: (0, r.jsxs)("div", {
                        ref: N,
                        className: d()(u, x.Qs),
                        children: [n, j && (0, r.jsx)("div", { className: x.X3 })],
                    }),
                }),
            })
        );
    }));
var _ = n(312138),
    I = n(720149),
    y = n(432371),
    N = n(765548),
    j = n(775602);
n(321073);
var T = n(228366),
    b = n(911411),
    v = n(290863);
let M = [],
    R = [],
    D = [];
var L = n(429913),
    P = n(47167),
    k = n(828488),
    O = n(958720),
    G = n(922016),
    U = n(761259),
    w = n(174459),
    F = n(652215);
function H(e) {
    return { channel_id: e.id, channel_type: e.type, guild_id: e.guild_id ?? null };
}
let B = {
    trackEntrypointImpression(e) {
        w.default.track(F.HAw.TOPICAL_NAV_ENTRYPOINT_IMPRESSION, {
            ...H(e.channel),
            conversation_count: e.conversationCount,
        });
    },
    trackTopicsUnitImpression(e) {
        w.default.track(F.HAw.TOPICAL_NAV_TOPICS_UNIT_IMPRESSION, {
            ...H(e.channel),
            conversation_ids: e.conversationIds,
        });
    },
    trackPreviewImpression(e) {
        w.default.track(F.HAw.TOPICAL_NAV_PREVIEW_IMPRESSION, { ...H(e.channel), conversation_id: e.conversationId });
    },
    trackTopicsUnitClicked(e) {
        w.default.track(F.HAw.TOPICAL_NAV_TOPICS_UNIT_CLICKED, { ...H(e.channel), conversation_id: e.conversationId });
    },
};
n(30146);
var V = n(735438),
    K = n.n(V),
    z = n(935208);
let W = { tension: 240, friction: 30 },
    $ = { tension: 320, friction: 28 },
    q = 6,
    J = -3,
    Z = 9;
var Y = n(834730),
    X = n(717421),
    Q = n(708988),
    ee = n(872351),
    et = n(802986),
    en = n(375708),
    el = n(839181);
let ei = (0, u.animated)("button"),
    es = (0, u.animated)(Y.E);
function ea(e) {
    e.preventDefault();
}
let er = o.memo(function (e) {
    let t,
        n,
        l,
        i,
        s,
        {
            conversation: a,
            layout: c,
            isExpanded: h,
            anchorId: m,
            hoveredConversationId: A,
            selectedConversationId: g,
            onHoverConversationChange: p,
            onJump: f,
        } = e,
        C = g === a.id,
        E = A === a.id,
        x = null != A && !E,
        S = null == m ? "up" : z.default.compare(a.startMessageId, m) > 0 ? "down" : "up",
        _ = a.title,
        I = Math.min(16, Math.max(4, Math.round(0.6 * _.length))),
        y = (0, X.z)({ y: c.y, opacity: +!c.hidden, config: W }, "respect-motion-settings"),
        N = (0, X.z)(
            {
                ...((t = h && C),
                (n = 0),
                h && (C && E ? (n = -17) : C ? (n = -13) : E && (n = -24)),
                (l = 0),
                (i = 4),
                (s = 1),
                C && E ? ((l = 0), (i = 0), (s = 0.5)) : h && E && ((l = 1), (i = 0), (s = 1)),
                {
                    textScale: h ? 1 : 0.5,
                    textX: n,
                    textOpacity: +!!h,
                    lineScaleX: h ? 3 : 1,
                    pillOpacity: +!!t,
                    pillX: t ? (E ? -4 : 0) : 8,
                    pillScale: t ? 1 : 0.85,
                    arrowOpacity: l,
                    arrowX: i,
                    arrowScale: s,
                }),
                lineWidth: I,
                lineOpacity: +(!h && !c.hidden),
                config: $,
            },
            "respect-motion-settings",
        ),
        j = o.useCallback(() => p(a.id), [p, a.id]),
        T = o.useCallback(() => p(null), [p]),
        b = o.useCallback(() => f(a.id), [f, a.id]),
        v = c.hidden || c.edge;
    return (0, r.jsxs)(ei, {
        "aria-current": C ? "true" : void 0,
        "aria-hidden": v ? "true" : void 0,
        className: d()(el.ng, { [el._D]: C, [el.DJ]: E, [el.KZ]: x }),
        style: {
            transform: y.y.to((e) => `translateY(${e}px)`),
            opacity: y.opacity,
            pointerEvents: v ? "none" : void 0,
        },
        onMouseDown: ea,
        onMouseEnter: j,
        onMouseLeave: T,
        onClick: b,
        children: [
            (0, r.jsx)(u.animated.span, {
                className: el.Og,
                style: {
                    opacity: N.pillOpacity,
                    transform: (0, u.to)(
                        [N.pillX, N.pillScale],
                        (e, t) => `translateY(-50%) translateX(${e}px) scale(${t})`,
                    ),
                },
                children: (0, r.jsx)(Y.E, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "none",
                    className: el.B6,
                    children: _,
                }),
            }),
            (0, r.jsx)(es, {
                tag: "span",
                variant: C ? "text-md/semibold" : "text-md/normal",
                color: C ? "text-strong" : E ? "text-default" : x ? "text-muted" : "text-subtle",
                className: el.QV,
                lineClamp: 1,
                style: {
                    opacity: N.textOpacity,
                    transform: (0, u.to)([N.textScale, N.textX], (e, t) => `scale(${e}) translateX(${t}px)`),
                },
                children: _,
            }),
            (0, r.jsx)("span", {
                className: el.iF,
                children: (0, r.jsx)(u.animated.span, {
                    className: el.iN,
                    style: {
                        width: N.lineWidth,
                        opacity: N.lineOpacity,
                        transform: N.lineScaleX.to((e) => `scaleX(${e})`),
                    },
                }),
            }),
            (0, r.jsx)(u.animated.span, {
                className: el.$N,
                "aria-hidden": "true",
                style: {
                    opacity: N.arrowOpacity,
                    transform: (0, u.to)([N.arrowX, N.arrowScale], (e, t) => `translateX(${e}px) scale(${t})`),
                },
                children:
                    "down" === S
                        ? (0, r.jsx)(Q.M, { size: "refresh_sm", color: "currentColor" })
                        : (0, r.jsx)(ee.z, { size: "refresh_sm", color: "currentColor" }),
            }),
        ],
    });
});
function eo(e) {
    let {
            items: t,
            isExpanded: n,
            anchorId: l,
            hoveredConversationId: i,
            selectedConversationId: s,
            showTopFade: a,
            showBottomFade: c,
            onHoverConversationChange: u,
            onJump: h,
        } = e,
        m = o.useMemo(() => (n && null != s ? (t.find((e) => e.conversation.id === s)?.slot ?? -1) : -1), [n, t, s]),
        A = o.useMemo(() => {
            let e = new Map();
            for (let t = J; t <= Z; t++)
                e.set(
                    t,
                    (function (e) {
                        let t,
                            { slot: n, jumpedSlot: l, isExpanded: i, showTopFade: s, showBottomFade: a } = e,
                            r = n < 0 || n > 6;
                        return (
                            i ? ((t = 28 * n), l >= 0 && n !== l && (t += n < l ? -8 : 8)) : (t = 42 + 14 * n),
                            {
                                y: t,
                                hidden: r,
                                edge: i ? !r && ((0 === n && s) || (6 === n && a)) : (n <= 0 && s) || (n >= 6 && a),
                            }
                        );
                    })({ slot: t, jumpedSlot: m, isExpanded: n, showTopFade: a, showBottomFade: c }),
                );
            return e;
        }, [m, n, a, c]);
    return (0, r.jsx)("div", {
        className: d()(el._R, n && el.h1),
        role: "list",
        "aria-label": en.intl.string(et.default["Sw/4fg"]),
        children: t.map((e) => {
            let { conversation: t, slot: a } = e,
                o = A.get(a);
            return null == o
                ? null
                : (0, r.jsx)(
                      er,
                      {
                          conversation: t,
                          layout: o,
                          isExpanded: n,
                          anchorId: l,
                          hoveredConversationId: i,
                          selectedConversationId: s,
                          onHoverConversationChange: u,
                          onJump: h,
                      },
                      t.id,
                  );
        }),
    });
}
var ec = n(778712),
    ed = n(97808),
    eu = n(465364),
    eh = n(854627),
    em = n(885386),
    eA = n(58703),
    eg = n(562153),
    ep = n(57004);
let ef = [
    { name: "40%", l1: "75%", l2: "50%" },
    { name: "55%", l1: "90%", l2: null },
    { name: "30%", l1: "60%", l2: "80%" },
    { name: "65%", l1: "45%", l2: "70%" },
];
function eC(e) {
    let { channel: t, message: n } = e,
        l = eg.Ay.useName(t.guild_id, t.id, n.author),
        { avatarSrc: i, avatarDecorationSrc: s } = (0, eh.A)({
            userId: n.author.id,
            guildId: t.guild_id,
            size: ec._3.SIZE_32,
        }),
        a = o.useMemo(() => (0, eu.Ay)(n).content, [n]),
        c = em.PZ.useSetting(),
        d = o.useMemo(() => (0, eA.mk)(n.timestamp, !0, c), [n.timestamp, c]);
    return (0, r.jsxs)("div", {
        className: ep.QS,
        children: [
            (0, r.jsx)(ed.eu, {
                className: ep.MM,
                src: i,
                avatarDecoration: s,
                size: ec._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, r.jsxs)("div", {
                className: ep.gp,
                children: [
                    (0, r.jsxs)("div", {
                        className: ep.yl,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: l,
                            }),
                            (0, r.jsx)(Y.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: d,
                            }),
                        ],
                    }),
                    (0, r.jsx)(Y.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            }),
        ],
    });
}
function eE() {
    return (0, r.jsx)("div", {
        className: ep.Rq,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) => {
            let n = ef[t % ef.length];
            return (0, r.jsxs)(
                "div",
                {
                    className: ep.uA,
                    children: [
                        (0, r.jsx)("div", { className: ep.h }),
                        (0, r.jsxs)("div", {
                            className: ep.jE,
                            children: [
                                (0, r.jsx)("div", { className: ep.zw, style: { width: n.name } }),
                                (0, r.jsx)("div", { className: ep.P4, style: { width: n.l1 } }),
                                null != n.l2 && (0, r.jsx)("div", { className: ep.P4, style: { width: n.l2 } }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function ex(e) {
    let { channel: t, conversationId: n } = e,
        l = (0, m.bG)([O.A], () => O.A.getHydratedMessages(t.id, n), [n, t.id]);
    o.useEffect(() => {
        let e = t.getGuildId();
        null != e && null == l && (0, U.ik)(t.id, e, n);
    }, [n, l, t]);
    let i = l?.slice(0, 4) ?? [];
    return (0, r.jsx)("div", {
        className: ep.Zt,
        children: (0, r.jsx)("div", {
            className: ep.eU,
            children:
                null == l
                    ? (0, r.jsx)(eE, {})
                    : i.length > 0
                      ? (0, r.jsx)("div", {
                            className: ep.z0,
                            children: i.map((e) => (0, r.jsx)(eC, { channel: t, message: e }, e.id)),
                        })
                      : null,
        }),
    });
}
var eS = n(311394);
function e_(e) {
    let { channel: t, scrollManager: n, conversations: l } = e,
        i = (0, m.bG)([O.A], () => O.A.getSelectedConversation(t.id)?.id ?? null, [t.id]),
        s = (function (e) {
            let [t, n] = o.useState(null);
            return (
                o.useEffect(() => {
                    let t = (e) => n(e?.id ?? null);
                    return e.addAutomaticAnchorCallback(t, !0), () => e.removeAutomaticAnchorCallback(t);
                }, [e]),
                t
            );
        })(n),
        a = o.useMemo(
            () =>
                0 === l.length
                    ? null
                    : (l[
                          (function (e, t) {
                              if (0 === e.length) return 0;
                              if (null == t) return e.length - 1;
                              let n = e.findLastIndex((e) => 0 >= z.default.compare(e.startMessageId, t));
                              return n >= 0 ? n : 0;
                          })(l, s)
                      ]?.id ?? null),
            [s, l],
        ),
        c = o.useMemo(
            () =>
                0 === l.length
                    ? null
                    : null != i && l.some((e) => e.id === i)
                      ? i
                      : null != a && l.some((e) => e.id === a)
                        ? a
                        : l[l.length - 1].id,
            [a, l, i],
        ),
        { clampLow: h, clampHigh: A } = (function (e) {
            if (0 === e) return { clampLow: 0, clampHigh: 0 };
            let t = Math.min(2, e - 1),
                n = Math.max(t, e - 1 - 2);
            return { clampLow: t, clampHigh: n };
        })(l.length),
        g = o.useMemo(
            () =>
                (function (e, t, n, l) {
                    if (0 === e.length) return 0;
                    let i = null != t ? e.findIndex((e) => e.id === t) : -1,
                        s = i >= 0 ? i : e.length - 1;
                    return (0, V.clamp)(s, n, l);
                })(l, c, h, A),
            [l, c, h, A],
        ),
        [p, f] = o.useState(!1),
        C = o.useCallback(() => f(!1), []),
        E = o.useMemo(
            () =>
                (function (e, t) {
                    let n = [];
                    for (let l = -6; l <= q; l++) {
                        let i = t + l;
                        i >= 0 && i < e.length && n.push({ conversation: e[i], index: i, slot: 3 + l });
                    }
                    return n;
                })(l, g),
            [l, g],
        ),
        x = o.useMemo(() => E.filter((e) => e.slot >= 0 && e.slot <= 6).map((e) => e.conversation), [E]),
        { showTopFade: S, showBottomFade: _ } = o.useMemo(
            () => ({ showTopFade: g >= 3, showBottomFade: g < l.length - 3 }),
            [g, l.length],
        ),
        I = o.useRef(null),
        [y, N] = o.useState(null),
        j = null != y && y !== i ? y : null;
    o.useEffect(() => {
        B.trackEntrypointImpression({ channel: t, conversationCount: x.length });
    }, [t.id]),
        o.useEffect(() => {
            null != j && B.trackPreviewImpression({ channel: t, conversationId: j });
        }, [t, j]);
    let T = o.useCallback((e) => {
            N(e);
        }, []),
        b = o.useCallback(() => {
            N(null), C();
        }, [C]),
        v = o.useCallback(
            (e) => {
                let n = t.getGuildId();
                null != n && (B.trackTopicsUnitClicked({ channel: t, conversationId: e }), (0, U.xI)(t.id, n, e), C());
            },
            [t, C],
        ),
        M = o.useCallback(() => (null != j ? (0, r.jsx)(ex, { channel: t, conversationId: j }) : null), [t, j]),
        R = o.useCallback(
            (e) => {
                let t;
                null != (t = n.ref.current?.getScrollerNode?.()) && 0 === e.deltaMode && (t.scrollTop += e.deltaY),
                    p && (N(null), C());
            },
            [n, p, C],
        ),
        D = o.useCallback(() => {
            f(!0), B.trackTopicsUnitImpression({ channel: t, conversationIds: x.map((e) => e.id) });
        }, [t, x]);
    return 0 === l.length
        ? null
        : (0, r.jsx)(u.animated.div, {
              className: eS.kL,
              style: { insetInlineEnd: 16 },
              children: (0, r.jsxs)("div", {
                  className: d()(eS.rI, p && eS.RK),
                  onMouseEnter: D,
                  onMouseLeave: b,
                  onWheel: R,
                  children: [
                      (0, r.jsx)("div", { className: d()(eS.oT, p && eS.RK), "aria-hidden": !0 }),
                      (0, r.jsx)(G.Y, {
                          targetElementRef: I,
                          shouldShow: p && null != j,
                          position: "top",
                          align: "right",
                          spacing: 12,
                          animation: G.Y.Animation.FADE,
                          renderPopout: M,
                          children: () =>
                              (0, r.jsx)("div", {
                                  ref: I,
                                  className: d()(eS.nd, p ? eS.mc : eS._z, p && S && eS.OP, p && _ && eS.yc),
                                  style: { height: 188 },
                                  children: (0, r.jsx)(eo, {
                                      items: E,
                                      isExpanded: p,
                                      anchorId: s,
                                      hoveredConversationId: y,
                                      selectedConversationId: i,
                                      showTopFade: S,
                                      showBottomFade: _,
                                      onHoverConversationChange: T,
                                      onJump: v,
                                  }),
                              }),
                      }),
                  ],
              }),
          });
}
function eI(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, k.sV)(t.guild_id, "scrollbar_chips"),
        i = (0, m.yK)([O.A], () => (l ? O.A.getChannelConversations(t.id).map((e) => e.conversation) : []), [t.id, l]);
    return l && 0 !== i.length ? (0, r.jsx)(e_, { channel: t, scrollManager: n, conversations: i }) : null;
}
var ey = n(354328),
    eN = n(559149),
    ej = n(164956),
    eT = n(302031),
    eb = n(822074),
    ev = n(617617),
    eM = n(495544),
    eR = n(72314),
    eD = n(580745),
    eL = n(834942),
    eP = n(232835),
    ek = n(576705),
    eO = n(222823),
    eG = n(399263),
    eU = n(287809),
    ew = n(234320),
    eF = n(863439),
    eH = n(448761),
    eB = n(857069),
    eV = n(694318);
n(938796);
var eK = n(253506),
    ez = n(665260),
    eW = n(704844),
    e$ = n(320095),
    eq = n(963852);
let eJ = new Map();
function eZ(e, t) {
    let n = (0, eq.Ay)({
            channelId: t,
            type: F.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: F.pr7.EPHEMERAL,
            state: F.cmJ.SENT,
        }),
        l = (0, e$.rh)(n);
    return (l.applicationId = e.applicationId), (l.timestamp = e.timestamp), l;
}
var eY = n(326337),
    eX = n(114212),
    eQ = n(615170);
function e0(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: i, groupSpacing: s } = e;
    return o.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, r.jsx)("div", {
            className: eQ.i,
            style: { height: i },
            children: n.map((n, l) =>
                (0, r.jsx)(eX.Ay, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, l, i, s]);
}
var e1 = n(830178),
    e2 = n(887129),
    e3 = n(625494),
    e4 = n(375901),
    e7 = n(381941),
    e8 = n(621466),
    e5 = n(951001),
    e6 = n(334738),
    e9 = n(267102),
    te = n(976860),
    tt = n(863922),
    tn = n(284009),
    tl = n.n(tn),
    ti = n(939249),
    ts = n(807884),
    ta = n(93474),
    tr = n(201275),
    to = n(384231),
    tc = n(853145),
    td = n(9842),
    tu = n(734057),
    th = n(540999),
    tm = n(521427),
    tA = n(143413),
    tg = n(763754),
    tp = n(33453);
function tf(e) {
    let { children: t, className: n, flashKey: l } = e,
        [i, s] = o.useState(!1),
        a = o.useRef(null);
    return (
        o.useEffect(
            () => (
                s(!0),
                (a.current = window.setTimeout(() => {
                    s(!1);
                }, 2e3)),
                () => {
                    null != a.current && clearTimeout(a.current);
                }
            ),
            [l],
        ),
        (0, r.jsx)("div", { "data-flash": i, className: d()(tp.j, n), children: t })
    );
}
var tC = n(491182),
    tE = n(860227),
    tx = n(112758),
    tS = n(516287),
    t_ = n(843626),
    tI = n(294454),
    ty = n(857071),
    tN = n(517997),
    tj = n(406704),
    tT = n(747926),
    tb = n(54570),
    tv = n(8880),
    tM = n(957565),
    tR = n(723702),
    tD = n(697470),
    tL = n(492841),
    tP = n(707985),
    tk = n(519222);
let tO = function (e, t, n) {
    let l = o.useRef(n);
    return (
        (l.current = n),
        o.useCallback(
            (n) => {
                if (!l.current || n.target !== n.currentTarget) return;
                let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    s = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    a = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    r = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    o = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    c = eP.A.getMessage(t, e),
                    d = tu.A.getChannel(t);
                if (null == c || null == d) return;
                let u = eM.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (ek.A.can(F.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, tk.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, tR.isMac)() ? r : a) && tM.p5 && (n.preventDefault(), (0, tM.C)(c.content));
                        break;
                    case "e":
                        i && !d.isSystemDM() && (0, tD.A)(c, u) && (n.preventDefault(), (0, tk.u_)(d, c));
                        break;
                    case "p":
                        (i || o) && (0, tL.A)(c, d) && (n.preventDefault(), (0, tk.rS)(d, c, n));
                        break;
                    case "+":
                        (i || o) &&
                            (function (e) {
                                let t = null == e.guild_id || eL.A.canChatInGuild(e.guild_id),
                                    n = em.jW.getSetting(),
                                    { disableReactionCreates: l } = (0, tP.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && ek.A.can(F.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && ty.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, tj.jr)(e),
                                    });
                                return !l && n;
                            })(d) &&
                            (n.preventDefault(),
                            e3._.dispatchKeyed(F.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || o) && (0, tN.r)(d, c) && (n.preventDefault(), (0, tk.$b)(d, c, n));
                        break;
                    case "f":
                        (i || o) &&
                            (0, t_.p)(c) &&
                            (n.preventDefault(), (0, tI.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            tv.A.isSpeakingMessage(t, e) ? (0, tb.pr)() : (0, tb.kP)(d, c));
                        break;
                    case "t":
                        if (i && (0, tj.D1)(d, c)) n.preventDefault(), (0, tT.Tv)(d, c, "Message Shortcut");
                        else if (c.hasFlag(F.pr7.HAS_THREAD)) {
                            let e = tu.A.getChannel(z.default.castMessageIdAsChannelId(c.id));
                            null != e && (i || o) && (n.preventDefault(), (0, tT.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, tk.cl)(d, c));
                        break;
                    case "escape":
                        eD.A.isEditing(d.id, c.id) ? I.A.endEditMessage(d.id) : e3._.dispatch(F.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var tG = n(754459),
    tU = n(375199),
    tw = n(824556),
    tF = n(699352),
    tH = n(877413),
    tB = n.n(tH),
    tV = n(231483),
    tK = n(975571),
    tz = n(164664),
    tW = n(291812),
    t$ = n(606049),
    tq = n(147860),
    tJ = n(334211),
    tZ = n(992595);
let tY = o.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: d()(tq.K1, { [tq.oE]: l }),
                    children: [
                        (0, r.jsx)("div", {
                            className: tq.Oz,
                            children: (0, r.jsx)(tV.l, { size: "xs", color: "currentColor", className: tq.F_ }),
                        }),
                        (0, r.jsx)("div", {
                            className: tq.jC,
                            children: (0, r.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, eu.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: d()(tq.ah, { [tq.oE]: l }),
                    children: (0, r.jsx)(tz.A, {
                        message: t,
                        onDeleteMessage: i,
                        children: (0, r.jsx)(Y.E, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: tq.C2,
                            children: en.intl.format(en.t["Nd3Gh+"], {
                                helpUrl: tK.A.getArticleURL(F.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    tX = o.memo(function (e) {
        let { className: t, compact: n, message: l, children: i, content: s, onUpdate: a } = e,
            c = l.editedTimestamp?.toString(),
            u = o.useRef(!1),
            h = (0, m.bG)([ta.A], () => ta.A.getMessage(l.id), [l.id]),
            A = o.useCallback(() => {
                if (h?.isBlockedEdit) {
                    var e;
                    (e = l.id), T.h.dispatch({ type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: e });
                } else I.A.deleteMessage(l.channel_id, l.id, !0);
            }, [l, h]);
        return (
            o.useLayoutEffect(() => {
                u.current ? null != a && a() : (u.current = !0);
            }, [a, l.content, s, c, i]),
            (0, r.jsxs)("div", {
                id: (0, tE.CJ)(l),
                className: d()(t, tZ.PT, {
                    [tJ.BK]: !0,
                    [tJ.nB]: "rtl" === tB()(l.content),
                    [tq.Dy]: h?.isBlockedEdit,
                    [tq.bv]: !h?.isBlockedEdit,
                }),
                children: [
                    i ?? (0, tW._A)(l, s),
                    h?.isBlockedEdit &&
                        null != l.timestamp &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " ",
                                (0, r.jsx)(t$.A, {
                                    timestamp: l.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, r.jsxs)("span", {
                                        className: tJ.oh,
                                        children: ["(", en.intl.string(en.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(tY, {
                        notice: h?.errorMessage ?? en.intl.string(en.t.zQ69pv),
                        message: l,
                        compact: n,
                        onDismiss: A,
                    }),
                ],
            })
        );
    }, tW.sP);
var tQ = n(111956),
    t0 = n.n(tQ),
    t1 = n(311283),
    t2 = n(473935),
    t3 = n(173936),
    t4 = n(290136),
    t7 = n(666492),
    t8 = n(606096),
    t5 = n(997146),
    t6 = n(366605),
    t9 = n(163328),
    ne = n(110384),
    nt = n(22231),
    nn = n(563119),
    nl = n(581925),
    ni = n(778492),
    ns = n(241326),
    na = n(365199),
    nr = n(417270),
    no = n(565645),
    nc = n(812930),
    nd = n(822123),
    nu = n(7584),
    nh = n(635222),
    nm = n(969043),
    nA = n(427209),
    ng = n(743738),
    np = n(649963),
    nf = n(815807),
    nC = n(429433),
    nE = n(966597),
    nx = n(85109),
    nS = n(71393),
    n_ = n(690521),
    nI = n(403362),
    ny = n(628691),
    nN = n(194085),
    nj = n(607399),
    nT = n(460905);
function nb(e) {
    let { channel: t, message: n, togglePopout: l, renderEmojiPicker: i, shouldShow: s } = e,
        a = o.useRef(null);
    return (0, r.jsx)(G.Y, {
        targetElementRef: a,
        animation: G.Y.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return i(t, n, l, !1);
        },
        shouldShow: s,
        onRequestClose: l,
        position: nj.Fr ? "top" : "left",
        align: nj.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, r.jsx)(nN.qv, { ref: a, label: en.intl.string(en.t.lfIHs4), icon: nT.n, onClick: l }, "add-reaction"),
    });
}
var nv = n(720882),
    nM = n(307731),
    nR = n(237774);
let nD = [nu.Ay.getByName("100"), nu.Ay.getByName("laughing"), nu.Ay.getByName("sparkling_heart")].filter(nI.Vq);
function nL(e) {
    e.stopPropagation();
}
function nP(e) {
    let { message: t, channel: n, canReport: l, onClose: i, updatePosition: s } = e;
    return (0, nv.c)({
        message: t,
        channel: n,
        textSelection: "",
        favoriteableType: null,
        favoriteableId: null,
        favoriteableName: null,
        itemHref: void 0,
        itemSrc: void 0,
        itemSafeSrc: void 0,
        itemTextContent: void 0,
        canReport: l,
        onHeightUpdate: s,
        onClose: i,
        navId: "message-actions",
        ariaLabel: en.intl.string(en.t.Lv7LxN),
    });
}
let nk = o.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, nd.QZ)(t.guild_id).filter(
            (e) =>
                !n_.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: nM.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        i = (l.length >= 3 ? l : [...(0, nh.A)(l.concat(nD)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: i.map((e) => {
            let l = s.find((t) => (0, nf.i6)(t.emoji, (0, nf.jq)(e))),
                i = null != l ? en.intl.string(en.t.wunKKA) : en.intl.string(en.t.XVx5BN),
                a = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? en.intl.formatToPlainString(en.t.vjeruO, { emojiName: a })
                        : en.intl.formatToPlainString(en.t.L1JQwE, { emojiName: a });
            return (0, r.jsx)(
                nN.qv,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: nR.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, r.jsx)(Y.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: nR.zM,
                                children: i,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: () =>
                        nU({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: np.qN.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, r.jsx)(no.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: nR.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function nO(e) {
    let {
            channel: t,
            message: n,
            canCopy: l,
            canPin: i,
            canDelete: s,
            canReport: a,
            canEdit: c,
            canPublish: d,
            canReact: u,
            canConfigureJoin: h,
            canReply: A,
            canStartThread: g,
            canViewThread: p,
            canForward: f,
            canManageOfficialMessages: C,
            isGuildOfficial: E,
            isExpanded: x,
            showMoreUtilities: S,
            showEmojiPicker: _,
            showMessageBookmarksActions: y,
            isMessageBookmark: N,
            setPopout: T,
            hasDeveloperMode: b,
            isFocused: v,
        } = (function (e) {
            let {
                    channel: t,
                    message: n,
                    showEmojiPicker: l,
                    showEmojiBurstPicker: i,
                    showMoreUtilities: s,
                    messageWindow: a,
                    setPopout: r,
                    isFocused: o,
                } = e,
                { author: c } = n,
                d = (0, m.bG)([nS.A], () => nS.A.getGuild(t.guild_id), [t.guild_id]),
                u = (0, m.bG)([eM.default], () => eM.default.getId()),
                h = (0, tj.Id)(t),
                A = (0, tj.s5)(t),
                { firstMessage: g } = (0, m.bG)([nm.A], () => nm.A.getMessage(t.id), [t.id]),
                p = em.jW.useSetting(),
                f = em.Q_.useSetting(),
                C = (0, m.bG)([eL.A], () => null == t.guild_id || eL.A.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: E, canAddNewReactions: x } = (0, m.cf)(
                    [ek.A],
                    () => ({
                        canAddNewReactions: C && ek.A.can(F.xBc.ADD_REACTIONS, t),
                        canManageMessages: ek.A.can(F.xBc.MANAGE_MESSAGES, t),
                    }),
                    [t, C],
                ),
                S = (0, tN.u)(t, n),
                _ = (0, tj.n)(t, n),
                I = (0, tj.R)(n),
                y = (0, m.bG)([ty.A], () => null != t.guild_id && ty.A.isLurking(t.guild_id), [t]),
                N = c.id === u,
                T = (E || n.canDeleteOwnMessage(u)) && h && !F.MRS.UNDELETABLE.has(n.type);
            n.type === F.lAJ.AUTO_MODERATION_ACTION && (T = T && E),
                t.isModeratorReportChannel() && (T = T && n.id !== g?.id && !(0, tA.A)(n));
            let b = (0, ny.ul)(n),
                v = (0, tL.A)(n, t),
                M = !t.isSystemDM() && (0, tD.A)(n, u) && h && !A,
                { disableReactionCreates: R } = (0, tP.A)({
                    channel: t,
                    canChat: C,
                    renderReactions: p,
                    canAddNewReactions: x,
                    isLurking: y,
                    isActiveChannelOrUnarchivableThread: h,
                }),
                D =
                    t.type === F.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(F.GuildFeatures.NEWS) &&
                    (N || E) &&
                    (0, nc.A)(n),
                L = t.getGuildId(),
                P =
                    null != L &&
                    n.type === F.lAJ.USER_JOIN &&
                    ek.A.canWithPartialContext(F.xBc.MANAGE_GUILD, { guildId: L }),
                k = (0, t_.m)(n),
                O = (0, tm.Vc)(t.guild_id, t, "MessageHoverBar"),
                G = n.hasFlag(F.pr7.IS_GUILD_OFFICIAL),
                { enabled: U } = nE.A.useConfig({ location: "message_utilities" }),
                w = (0, m.bG)([nx.A], () => null != nx.A.getSavedMessage(t.id, n.id)),
                H = (0, t1.A)(a),
                B = (0, m.bG)([j.A], () => j.A.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: v,
                canEdit: M,
                canDelete: T,
                canReport: b,
                canReply: S,
                canStartThread: _,
                canViewThread: I,
                canForward: k,
                canManageOfficialMessages: O,
                isGuildOfficial: G,
                canCopy: tM.p5,
                hasDeveloperMode: f,
                canReact: !R && p,
                canPublish: D,
                canConfigureJoin: P,
                isExpanded: H && !B && !l && !i && !s,
                showEmojiPicker: l,
                showEmojiBurstPicker: i,
                showMoreUtilities: s,
                showMessageBookmarksActions: U,
                isMessageBookmark: w,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        M = o.useRef(null),
        R = o.useCallback(() => {
            S ||
                w.default.track(F.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                T({ moreUtilities: !S });
        }, [S, T, n]),
        D = o.useCallback(() => {
            T({ emojiPicker: !_ });
        }, [_, T]),
        L = (0, tj.Id)(t),
        P = n.hasFlag(F.pr7.CROSSPOSTED);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            x
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l && b
                              ? (0, r.jsx)(
                                    nN.qv,
                                    {
                                        label: en.intl.string(en.t.zBoHlf),
                                        icon: t2.L,
                                        onClick: (e) => (0, tk.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, r.jsx)(
                                    nN.qv,
                                    { label: en.intl.string(en.t.WqhZss), icon: t3.q, onClick: () => (0, tk.S)(t, n) },
                                    "copy-link",
                                )
                              : null,
                          h
                              ? (0, r.jsx)(
                                    nN.qv,
                                    { label: en.intl.string(en.t.NpHUi1), icon: t4.c, onClick: () => (0, tk.vc)(t) },
                                    "configure",
                                )
                              : null,
                          L
                              ? (0, r.jsx)(
                                    nN.qv,
                                    { label: en.intl.string(en.t.RpE9k7), icon: t7.Q, onClick: () => (0, tk.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          y
                              ? (0, r.jsx)(
                                    nN.qv,
                                    {
                                        label: N ? en.intl.string(en.t.LHUP9D) : en.intl.string(en.t["9p3D9p"]),
                                        icon: N ? t8.c : t5.c,
                                        onClick: () => (N ? (0, tk.r7)(t, n) : (0, tk.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          i
                              ? (0, r.jsx)(
                                    nN.qv,
                                    {
                                        label: n.pinned ? en.intl.string(en.t["Bse+F/"]) : en.intl.string(en.t.CvQ18w),
                                        icon: t6.t,
                                        onClick: (e) => (0, tk.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          g && f
                              ? (0, r.jsx)(
                                    nN.qv,
                                    { label: en.intl.string(en.t.rBIGBL), icon: t9.y, onClick: () => (0, tk.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          A && c
                              ? (0, r.jsx)(
                                    nN.qv,
                                    {
                                        label: en.intl.string(en.t["5IEsGx"]),
                                        icon: ne.W,
                                        onClick: (e) => (0, tk.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            u
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          x
                              ? null
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(nk, { channel: t, message: n }), (0, r.jsx)(nN.$$, {})],
                                }),
                          (0, r.jsx)(nb, {
                              togglePopout: D,
                              renderEmojiPicker: nw,
                              shouldShow: _,
                              isFocused: v,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            A && !c
                ? (0, r.jsx)(
                      nN.qv,
                      { label: en.intl.string(en.t["5IEsGx"]), icon: ne.W, onClick: (e) => (0, tk.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            c
                ? (0, r.jsx)(
                      nN.qv,
                      { label: en.intl.string(en.t.bt75uw), icon: nt.R, onClick: () => (0, tk.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, r.jsx)(
                      nN.qv,
                      { label: en.intl.string(en.t.I3ltXO), icon: nA.A, onClick: () => (0, tk.Z4)(t, n) },
                      "forward",
                  )
                : null,
            g && !f
                ? (0, r.jsx)(
                      nN.qv,
                      { label: en.intl.string(en.t.rBIGBL), icon: t9.y, onClick: () => (0, tk.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !g && p
                ? (0, r.jsx)(
                      nN.qv,
                      { label: en.intl.string(en.t["39d0Wj"]), icon: t9.y, onClick: () => (0, tk.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            C
                ? (0, r.jsx)(
                      nN.qv,
                      {
                          label: E ? en.intl.string(en.t["2km5Gf"]) : en.intl.string(en.t["lE/PG3"]),
                          icon: E ? nn.$ : nl.L,
                          onClick: () => I.A.patchMessageGuildOfficial(t.id, n.id, !E),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, r.jsx)(
                      nN.qv,
                      {
                          label: P ? en.intl.string(en.t["1kWJAr"]) : en.intl.string(en.t.MFGE51),
                          icon: ni.k,
                          onClick: () => (0, tk.Le)(t, n),
                          disabled: P,
                      },
                      "publish",
                  )
                : null,
            s && x
                ? (0, r.jsx)(
                      nN.qv,
                      {
                          label: en.intl.string(en.t.oyYWHE),
                          icon: ns.u,
                          onClick: (e) => (0, tk.RC)(t, n, e),
                          dangerous: !0,
                          separator: !x,
                      },
                      "delete",
                  )
                : null,
            x && s
                ? null
                : (0, r.jsx)(G.Y, {
                      targetElementRef: M,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: i } = e;
                          return (0, r.jsx)(nP, {
                              channel: t,
                              message: n,
                              canReport: a,
                              onClose: i,
                              updatePosition: l,
                          });
                      },
                      shouldShow: S,
                      onRequestClose: R,
                      position: "left",
                      align: "top",
                      animation: G.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: i } = t;
                          return (0, r.jsx)(
                              nN.qv,
                              {
                                  ref: M,
                                  label: en.intl.string(en.t["UKOtz+"]),
                                  icon: na.j,
                                  selected: i,
                                  onClick: R,
                                  ...l,
                              },
                              "more",
                          );
                      },
                  }),
        ],
    });
}
function nG(e) {
    let { channel: t, message: n } = e,
        l = (0, m.bG)([ta.A], () => null != ta.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, ng.Bl)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l &&
                i &&
                (0, r.jsx)(
                    nN.qv,
                    { label: en.intl.string(en.t["5911Lb"]), icon: nr.m, onClick: () => (0, tk.Io)(t, n) },
                    "retry",
                ),
            (0, r.jsx)(
                nN.qv,
                { label: en.intl.string(en.t.oyYWHE), icon: ns.u, onClick: (e) => (0, tk.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function nU(e) {
    let { type: t, emoji: n, channel: l, message: i, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, nf.jq)(n);
    "add" === t
        ? (0, np.BB)(l.id, i.id, r, s, { burst: a })
        : (0, np.et)({ channelId: l.id, messageId: i.id, emoji: r, location: s, options: { burst: a } });
}
function nw(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? F.liQ.GUILD_CHANNEL : F.liQ.DM_CHANNEL,
                section: (0, nf.sn)(e),
                object: F.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, r.jsx)(nC.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (l) => {
            let { emoji: i, willClose: s, isBurst: a } = l;
            nU({ type: "add", emoji: i, channel: e, message: t, location: np.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? t0()(n, 150)() : n());
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let nF = o.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, m.bG)([eD.A], () => eD.A.isEditing(t.id, n.id), [t.id, n.id]),
        a = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === F.cmJ.SEND_FAILED ? (0, r.jsx)(nG, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== F.cmJ.SEND_FAILED ? (0, r.jsx)(nO, { ...e }) : null;
        })(e);
    return s || (null == a && null == o)
        ? null
        : (0, r.jsx)("div", {
              className: d()(e.className, { [nR.kL]: !0, [nR.gN]: l, [nR.nK]: i }),
              onClick: nL,
              onContextMenu: nL,
              role: "group",
              "aria-label": en.intl.string(en.t.Lv7LxN),
              children: (0, r.jsxs)(nN.Ay, { className: e.innerClassName, children: [a, o] }),
          });
});
var nH = n(701628),
    nB = n(639288),
    nV = n(10364);
let nK = o.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: l = !1,
                groupId: i,
                isGroupStart: s,
                usernameProfile: a,
                avatarProfile: c,
                setPopout: d,
                author: u,
                repliedMessage: h,
                roleIcon: m,
            } = e,
            A = (0, tx.r4)(t.author.id, n.id),
            g = (0, tx.m)(t, n, a, d),
            p = (0, tx.Jo)(c, d),
            f = o.useCallback(() => {
                d({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 });
            }, [d]);
        return (0, r.jsx)(nB.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: h,
            author: u,
            compact: l,
            subscribeToGroupId: i,
            showTimestampOnHover: !s && l && t.type !== F.lAJ.REPLY,
            renderPopout: nV.A,
            showAvatarPopout: c,
            showUsernamePopout: a,
            onClickAvatar: p,
            onClickUsername: g,
            onContextMenu: A,
            onPopoutRequestClose: f,
            roleIcon: m,
        });
    }),
    nz = o.memo(t$.A);
function nW(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: l,
            replyReference: i,
            author: s,
            repliedMessage: a,
            roleIcon: o,
        } = e,
        { message: c, compact: d, channel: u, groupId: h } = t,
        { usernameProfile: m, avatarProfile: A } = l;
    if ((0, tA.A)(c)) return null;
    let g = c.id === h;
    return g || d || null != i
        ? (0, r.jsx)(nK, {
              message: c,
              channel: u,
              compact: d,
              subscribeToGroupId: h,
              isGroupStart: g,
              groupId: h,
              setPopout: n,
              usernameProfile: m,
              avatarProfile: A,
              author: s,
              repliedMessage: a,
              roleIcon: o,
          })
        : (0, r.jsx)(nz, {
              compact: !0,
              timestamp: c.timestamp,
              isInline: !1,
              id: (0, tE.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var n$ = n(141268),
    nq = n(155718),
    nJ = n(168186),
    nZ = n(994500),
    nY = n(217424),
    nX = n(807081),
    nQ = n(387408),
    n0 = n(942075),
    n1 = n(808829),
    n2 = n(552691),
    n3 = n(861464),
    n4 = n(805964);
let n7 = o.memo(function (e) {
    let {
            baseMessage: t,
            referencedMessage: n,
            channel: l,
            compact: i = !1,
            referencedUsernameProfile: s,
            referencedAvatarProfile: a,
            setPopout: c,
            isReplySpineClickable: d,
            showReplySpine: u,
        } = e,
        h = n.state === td.a.LOADED ? n.message : void 0,
        A = (0, tg.X4)(h),
        g = (0, to.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = o.useMemo(() => {
            if (null == h) return null;
            let e = (0, nQ.A)(h);
            if (e.type === F.lAJ.USER_JOIN)
                return (0, nX.$)(
                    en.intl.formatToParts(n3.A.getSystemMessageUserJoin(e.id), {
                        username: null != A ? A.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === F.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, nX.$)(
                    (0, n0.WC)({
                        username: null != A ? A.nick : e.author.username,
                        guildId: l?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === F.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, nX.$)((0, n1.P)({ application: e?.application, username: A?.nick }));
            if (e.type === F.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, nX.$)((0, n2.g6)({ application: e?.application, username: A?.nick }));
            if (e.type === F.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, nX.$)((0, n2.uk)({ application: e?.application, username: A?.nick }));
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0 },
                    n = e.isFirstMessageInForumPost(l)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0 }
                        : { ...t, formatInline: !0, allowHeading: g, allowList: g };
                return (0, eu.Ay)(e, n).content;
            }
            return null;
        }, [h, A, l, g]),
        { isReplyAuthorBlocked: f, isReplyAuthorIgnored: C } = (0, m.cf)(
            [nZ.A],
            () => ({
                isReplyAuthorBlocked: null != h && nZ.A.isBlockedForMessage(h),
                isReplyAuthorIgnored: null != h && nZ.A.isIgnoredForMessage(h),
            }),
            [h],
        ),
        E = (0, tx.r4)(h?.author.id, l.id),
        x = (0, tx.Ck)(t, h),
        S = (0, tx.H9)(h, l, s, c),
        _ = (0, tx.Ge)(a, c),
        I = o.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        y = (0, tg.X4)(t);
    return (0, r.jsx)(n4.A, {
        repliedAuthor: A,
        baseMessage: t,
        channel: l,
        baseAuthor: y,
        referencedMessage: n,
        content: p,
        compact: i,
        isReplyAuthorBlocked: f,
        isReplyAuthorIgnored: C,
        showAvatarPopout: a,
        showUsernamePopout: s,
        renderPopout: nV.A,
        onClickAvatar: _,
        onClickUsername: S,
        onClickReply: x,
        onContextMenu: E,
        onPopoutRequestClose: I,
        isReplySpineClickable: d,
        showReplySpine: u,
    });
});
function n8(e) {
    let {
        message: t,
        channel: n,
        compact: l,
        setPopout: i,
        referencedUsernameProfile: s,
        referencedAvatarProfile: a,
        replyReference: o,
        replyMessage: c,
        isReplySpineClickable: d,
        showReplySpine: u = !0,
    } = e;
    return (
        null != o &&
        (0, r.jsx)(n7, {
            baseMessage: t,
            replyReference: o,
            referencedMessage: c,
            channel: n,
            compact: l,
            setPopout: i,
            referencedUsernameProfile: s,
            referencedAvatarProfile: a,
            isReplySpineClickable: d,
            showReplySpine: u,
        })
    );
}
let n5 = o.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: l = !1,
            interactionUsernameProfile: i,
            interactionAvatarProfile: s,
            interactionData: a,
            referencedUsernameProfile: c,
            referencedAvatarProfile: d,
            setPopout: u,
        } = e,
        { isInteractionUserBlocked: h, isInteractionUserIgnored: A } = (0, m.cf)(
            [nZ.A],
            () => ({
                isInteractionUserBlocked: nZ.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nZ.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        g = (0, m.bG)([td.A], () => td.A.getMessageByReference(t?.messageReference)),
        p = (0, tx.r4)(t.interaction?.user.id, n.id),
        f = (0, tx.T0)(t.interaction, n, i, u),
        C = (0, tx.Yq)(s, u),
        E = (0, nJ.Am)(t),
        x = E?.type === nq.G4.APPLICATION_COMMAND ? E.target_user?.id : void 0,
        S = (0, tx.r4)(x, n.id),
        _ = (0, tx.I)(x, n, c, u),
        I = (0, tx.Ge)(d, u),
        y = (0, tx.U_)(a, u),
        N = o.useCallback(() => {
            u({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [u]),
        j = o.useCallback(
            () =>
                n8({
                    message: t,
                    channel: n,
                    compact: l,
                    setPopout: u,
                    referencedAvatarProfile: d,
                    referencedUsernameProfile: c,
                    replyReference: t.messageReference,
                    replyMessage: g,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [n, l, t, d, g, c, u],
        );
    return (0, r.jsx)(nY.A, {
        message: t,
        channel: n,
        compact: l,
        isInteractionUserBlocked: h,
        isInteractionUserIgnored: A,
        showAvatarPopout: s,
        showUsernamePopout: i,
        showDataPopout: a,
        showTargetAvatarPopout: d,
        showTargetUsernamePopout: c,
        onClickAvatar: C,
        onClickUsername: f,
        onClickCommand: y,
        onUserContextMenu: p,
        onClickTargetAvatar: I,
        onClickTargetUsername: _,
        onTargetUserContextMenu: S,
        onPopoutRequestClose: N,
        renderTargetMessage: j,
    });
});
var n6 = n(352043);
function n9(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: i = !1,
        className: s,
    } = e;
    tl()(n.type === F.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...a } = (0, h.rm)(e.id ?? ""),
        o = (0, m.bG)([td.A], () => td.A.getMessageByReference(l)),
        { popouts: c, setPopout: u } = (0, tG.A)(n.id, e7.Fd),
        A = (0, tg.Ay)(n),
        g = (0, tE.fF)(n),
        p = (0, tE.ZD)(n);
    return n.type === F.lAJ.THREAD_STARTER_MESSAGE && null != o && o.state === td.a.LOADED
        ? (0, r.jsx)(le, { ...e, viewingChannelId: n.channel_id, message: o.message, groupId: o.message.id })
        : (0, r.jsx)(tC.A, {
              ...a,
              id: t,
              compact: i,
              className: d()(s, { [nH.iU]: !0, [nH.HJ]: !i, [nH.H4]: !0, [nH._A]: !0 }),
              childrenHeader: nW({ messageProps: e, setPopout: u, messagePopouts: c, replyReference: l, author: A }),
              childrenSystemMessage: (0, n6.A)(e),
              childrenMessageContent: null,
              "aria-labelledby": g,
              "aria-describedby": p,
              hasThread: !1,
              author: A,
          });
}
function le(e) {
    let {
            id: t,
            message: n,
            message: { id: l, channel_id: i },
            channel: { guild_id: s },
            compact: a = !1,
            className: c,
            groupId: u,
            viewingChannelId: A,
        } = e,
        g = n.type === F.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: p, ...f } = (0, h.rm)(e.id ?? ""),
        { isFocused: C, handleFocus: E, handleBlur: x } = (0, tx.G8)(p),
        { popouts: S, selected: _, setPopout: I } = (0, tG.A)(n.id, e7.Fd),
        y = em.hD.useSetting(),
        N = em.rs.useSetting(),
        T = (0, m.bG)([td.A], () => td.A.getMessageByReference(g)),
        b = (0, to.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: v,
            handleMouseLeave: M,
            isHovered: R,
        } = (0, tx.yp)({ groupId: u, message: n, defaultValue: _ }),
        D = (0, m.bG)([j.A], () => j.A.keyboardModeEnabled),
        L = _ || (D && C),
        P = L || R,
        k = (0, m.bG)([th.A], () => th.A.isDeveloper),
        {
            content: O,
            hasSpoilerEmbeds: G,
            hasBailedAst: U,
        } = (0, tU.A)(n, {
            hideSimpleEmbedContent: y && N,
            formatInline: !1,
            allowList: b,
            allowHeading: b,
            allowLinks: !0,
            allowDevLinks: k,
            previewLinkTarget: !0,
            viewingChannelId: A,
        }),
        w = tO(l, i, D),
        H = (0, tg.Ay)(n),
        B = (0, tE.fF)(n, u),
        V = (0, tE.ZD)(n),
        K = (0, r.jsx)(tS.x, { value: P, children: (0, n$.A)(e, O, !1) }),
        z = o.useCallback(() => (0, te.uh)(s, i, l), [s, i, l]),
        W = (0, tr.$7)({ guildId: s, roleId: H.iconRoleId });
    return (0, r.jsxs)("div", {
        className: nH.m5,
        children: [
            (0, r.jsx)(ti.D, {
                className: nH.lA,
                onClick: z,
                "aria-label": en.intl.string(en.t.k5WiPf),
                children: en.intl.string(en.t.k5WiPf),
            }),
            (0, r.jsx)(tC.A, {
                ...f,
                id: t,
                compact: a,
                className: d()(c, {
                    [nH.iU]: !0,
                    [nH.HJ]: !a,
                    [nH.mK]: n.mentioned,
                    [nH.M1]: (0, e$.ec)(n),
                    [nH.H4]: (0, tA.A)(n),
                    [nH._A]: n.id === u || n.type === F.lAJ.REPLY,
                    [nH.wH]: L,
                }),
                zalgo: !0,
                onKeyDown: w,
                onFocus: E,
                onBlur: x,
                childrenRepliedMessage:
                    n.type === F.lAJ.REPLY &&
                    n8({
                        ...e,
                        setPopout: I,
                        referencedUsernameProfile: S.referencedUsernameProfile,
                        referencedAvatarProfile: S.referencedAvatarProfile,
                        replyReference: g,
                        replyMessage: T,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: nW({
                    messageProps: e,
                    setPopout: I,
                    messagePopouts: S,
                    replyReference: g,
                    author: H,
                    repliedMessage: T,
                    roleIcon: W,
                }),
                childrenAccessories: (0, tF.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: G,
                    hasBailedAst: U,
                    isInteracting: P,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                }),
                childrenSystemMessage: (0, n6.A)(e),
                childrenMessageContent: K,
                onMouseMove: v,
                onMouseLeave: M,
                "aria-labelledby": B,
                "aria-describedby": V,
                hasThread: !1,
                author: H,
            }),
        ],
    });
}
let lt = o.memo(function (e) {
    let t,
        n,
        {
            id: l,
            message: i,
            message: { id: s },
            channel: a,
            channel: { id: c },
            compact: u = !1,
            className: A,
            flashKey: p,
            groupId: f,
            renderContentOnly: C,
        } = e;
    tl()(i.type !== F.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let E = F.sl8.has(i.type) ? i.messageReference : void 0,
        { onFocus: x, ...S } = (0, h.rm)(e.id ?? ""),
        _ = em.hD.useSetting(),
        I = em.rs.useSetting(),
        y = (0, m.bG)([td.A], () => td.A.getMessageByReference(E)),
        { popouts: N, selected: T, setPopout: b } = (0, tG.A)(i.id, e7.Fd),
        v = (0, tx.VL)(i, a, b),
        M = (0, tx.ri)(i, a),
        {
            handleMouseEnter: R,
            handleMouseLeave: D,
            hasHovered: L,
            isHovered: P,
        } = (0, tx.yp)({ groupId: f, message: i, defaultValue: T }),
        { isFocused: k, hasFocused: O, handleFocus: G, handleBlur: U } = (0, tx.G8)(x),
        w = o.useCallback(
            (e) => {
                G(e), R(e);
            },
            [G, R],
        ),
        H = o.useCallback(
            (e) => {
                U(e), D();
            },
            [U, D],
        ),
        B = (0, m.bG)([eD.A], () => eD.A.isEditing(c, s), [c, s]),
        V = (0, m.bG)([j.A], () => j.A.keyboardModeEnabled),
        K = T || B || (V && k),
        W = K || P,
        $ = (0, m.bG)(
            [tu.A],
            () => i.hasFlag(F.pr7.HAS_THREAD) && tu.A.getChannel(z.default.castMessageIdAsChannelId(i.id)),
        ),
        q = i.isFirstMessageInForumPost(a),
        J = (0, to.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        Z = (0, m.bG)([th.A], () => th.A.isDeveloper),
        {
            content: Y,
            hasSpoilerEmbeds: X,
            hasBailedAst: Q,
        } = (0, tU.A)(i, {
            hideSimpleEmbedContent: _ && I,
            formatInline: !1,
            allowList: q || J,
            allowHeading: q || J,
            allowLinks: !0,
            allowDevLinks: Z,
            previewLinkTarget: !0,
        }),
        ee = tO(s, c, V),
        et = (0, tg.Ay)(i),
        el = (0, m.bG)([tc.A], () => tc.A.getPendingReply(c)),
        ei =
            ((t = o.useRef(p)),
            o.useEffect(() => {
                t.current = p ?? t.current;
            }),
            p ?? t.current),
        es = (0, tr.$7)({ guildId: a.guild_id, roleId: et.iconRoleId }),
        ea = (0, ts.A)(c, s)?.color ?? null,
        er = (0, tE.fF)(i, f),
        eo = (0, tE.ZD)(i),
        ec = (0, m.bG)([ta.A], () => ta.A.getMessage(s), [s]),
        ed = (0, tm.bW)(a.guild_id, "ChatMessage"),
        eu = (0, tw.A)({ message: i, channel: a, officialMessagesEnabled: ed }),
        eh = o.useRef(window),
        eA = null != ec;
    (n =
        i.type === F.lAJ.CUSTOM_GIFT
            ? ""
            : !B && eA
              ? (function (e, t) {
                    let { message: n, compact: l } = e;
                    return (0, r.jsx)(tX, { message: n, content: t, compact: l ?? !1 });
                })(e, Y)
              : (0, n$.A)(e, Y, B)),
        (n = (0, r.jsx)(tS.x, { value: W, children: n }));
    let eg = i.id === f,
        ep = (0, r.jsx)(g.vN, {
            offset: { left: 4, right: 4 },
            children: (0, r.jsx)("li", {
                id: l,
                className: nH.Nt,
                "aria-setsize": -1,
                style: null != ea ? { backgroundColor: ea } : void 0,
                children: (0, r.jsx)(tC.A, {
                    ...S,
                    "aria-setsize": -1,
                    "aria-roledescription": en.intl.string(en.t.BAB0yK),
                    "aria-labelledby": er,
                    "aria-describedby": eo,
                    onFocus: w,
                    onBlur: H,
                    onContextMenu: v,
                    onKeyDown: ee,
                    onClick: M,
                    compact: u,
                    contentOnly: C,
                    className: d()(A, {
                        [nH.iU]: !0,
                        [nH.HJ]: !u,
                        [nH.mK]: i.mentioned,
                        [nH.M1]: (0, e$.ec)(i),
                        [nH.SH]: i.type === F.lAJ.NITRO_NOTIFICATION,
                        [nH.Sg]: i.hasFlag(F.pr7.IS_GUILD_OFFICIAL) && ed,
                        [nH.H4]: (0, tA.A)(i),
                        [nH._A]: !C && (eg || i.type === F.lAJ.REPLY),
                        [nH.wH]: K,
                        [nH.$n]: el?.message.id === i.id,
                        [nH.$w]: i.isCommandType() && i.state === F.cmJ.SENDING,
                        [nH.DX]: eA,
                    }),
                    zalgo: !B,
                    childrenRepliedMessage:
                        C || i.type !== F.lAJ.REPLY
                            ? void 0
                            : n8({
                                  ...e,
                                  setPopout: b,
                                  referencedUsernameProfile: N.referencedUsernameProfile,
                                  referencedAvatarProfile: N.referencedAvatarProfile,
                                  replyReference: E,
                                  replyMessage: y,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (function (e, t, n) {
                        let { message: l, channel: i, compact: s } = e;
                        return null != l.interaction && "" !== l.interaction.displayName
                            ? (0, r.jsx)(n5, { message: l, channel: i, compact: s, setPopout: t, ...n })
                            : null;
                    })(e, b, N),
                    childrenHeader: C
                        ? void 0
                        : nW({
                              messageProps: e,
                              setPopout: b,
                              messagePopouts: N,
                              replyReference: E,
                              author: et,
                              repliedMessage: y,
                              roleIcon: es,
                          }),
                    childrenAccessories: (0, tF.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: X,
                        hasBailedAst: Q,
                        handleContextMenu: v,
                        isInteracting: W,
                        isAutomodBlockedMessage: eA,
                        forceAddReactions: i.type === F.lAJ.EMOJI_ADDED,
                    }),
                    childrenButtons:
                        L || O
                            ? (function (e) {
                                  let {
                                          setPopout: t,
                                          messagePopouts: { emojiPicker: n, emojiBurstPicker: l, moreUtilities: i },
                                          isFocused: s,
                                          buttonProps: { message: a, channel: o, groupId: c, compact: d = !1 },
                                          messageWindow: u,
                                      } = e,
                                      h = a.state === F.cmJ.SENDING,
                                      m = a.id === c,
                                      A = (0, ez.Lt)(a.flags, F.pr7.EPHEMERAL),
                                      g = a.state === F.cmJ.SEND_FAILED;
                                  return h || (A && !g)
                                      ? null
                                      : (0, r.jsx)(nF, {
                                            className: nH.Uo,
                                            innerClassName: nH.Mc,
                                            isHeader: !d && m && !(0, tA.A)(a),
                                            isReply: !d && a.type === F.lAJ.REPLY && null != a.messageReference,
                                            channel: o,
                                            message: a,
                                            messageWindow: u,
                                            setPopout: t,
                                            showEmojiPicker: n,
                                            showEmojiBurstPicker: l,
                                            showMoreUtilities: i,
                                            isFocused: s,
                                        });
                              })({
                                  buttonProps: e,
                                  setPopout: b,
                                  messagePopouts: N,
                                  isFocused: P || k,
                                  messageWindow: eh.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, n6.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: R,
                    onMouseLeave: D,
                    hasThread: !C && i.hasFlag(F.pr7.HAS_THREAD) && null != $,
                    isSystemMessage: (0, tA.A)(i),
                    hasReply: i.type === F.lAJ.REPLY,
                    messageRef: (e) => {
                        (eu.current = e), (eh.current = e?.ownerDocument?.defaultView ?? window);
                    },
                    author: et,
                }),
            }),
        });
    return null != ei
        ? (0, r.jsx)(
              tf,
              { flashKey: ei, className: d()({ [nH.bB]: !0, [nH._A]: !u && i.id === f }), children: ep },
              `bg-flash-${l}`,
          )
        : ep;
});
function ln(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, e8.vq)(l, HTMLElement); ) (n += l.offsetTop ?? 0), (l = l.offsetParent);
    return n;
}
function ll(e) {
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: t, jumpTargetOffset: n } = e;
    if (e.has(t) || (!e.hasMoreBefore && t === z.default.castChannelIdAsMessageId(e.channelId))) {
        if (0 === n) return t;
        let l = e.getByIndex(e.indexOf(t) + n);
        return l?.id ?? t;
    }
    let l = [
            t,
            ...e.map((e) => {
                let { id: t } = e;
                return t;
            }),
        ].sort(z.default.compare),
        i = l.indexOf(t),
        s = l[i + (Math.abs(n) > 0 ? n : 1)] ?? l[i - 1];
    return null != s ? s : null;
}
let li = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class ls {
    props;
    ref = o.createRef();
    automaticAnchor = null;
    messageFetchAnchor = null;
    focusAnchor = null;
    loading;
    jumping = !1;
    pinned;
    dragging = !1;
    isAtBottom = !1;
    prevScrollTop = null;
    anchorTimeout = null;
    initialScrollTop = null;
    acking = !1;
    scrollCounter = 0;
    offsetHeightCache = 0;
    scrollHeightCache = 0;
    scrollTopCache = -1;
    scrollHeightBeforeLoad = 0;
    loadMorePausedUntilUserScroll = !1;
    _bottomAnchor = null;
    _automaticAnchorCallbacks = [];
    _scrollCompleteCallbacks = [];
    constructor(e) {
        if (((this.props = e), (this.loading = e.messages.loadingMore), null != e.messages.jumpTargetId))
            this.pinned = !1;
        else {
            const t = eR.A.isAtBottom(e.channel.id);
            (this.pinned = t ?? !0),
                (this.initialScrollTop = t ? null : (eR.A.getChannelDimensions(e.channel.id)?.scrollTop ?? null));
        }
    }
    isReady() {
        return this.props.messages.ready;
    }
    isLoading() {
        return this.loading || this.props.messages.loadingMore;
    }
    isPinned() {
        return this.pinned;
    }
    isJumping() {
        return this.jumping;
    }
    isDragging() {
        return this.dragging;
    }
    isInitialized() {
        return void 0 === this.initialScrollTop;
    }
    isScrollLoadingDisabled() {
        return (
            !!this.loadMorePausedUntilUserScroll ||
            this.isLoading() ||
            !this.isInitialized() ||
            this.isJumping() ||
            this.isDragging() ||
            !this.props.canLoadMore
        );
    }
    isActivelyScrolling() {
        return this.scrollCounter >= 5;
    }
    getDocument() {
        return this.ref.current?.getScrollerNode()?.ownerDocument;
    }
    getElementFromMessageId(e) {
        let t = this.getDocument(),
            {
                channel: { id: n },
            } = this.props;
        return null == t ? null : t.getElementById((0, e4.j)(n, e));
    }
    isScrolledToBottom() {
        let {
            scrollTop: e,
            scrollHeight: t,
            offsetHeight: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
        return e >= t - n - 2 && !this.props.messages.hasMoreAfter;
    }
    mergePropsAndUpdate(e) {
        this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck();
    }
    mergePropsAndUpdate_(e) {
        let t = this.props.messages,
            n = this.props.focusId;
        this.props = { ...e };
        let { offsetHeight: l, scrollHeight: i } = this.getScrollerState(),
            s = this.isHeightChange(l, i);
        if (
            ((this.offsetHeightCache = l),
            (this.scrollHeightCache = i),
            (this.loading = e.messages.loadingMore),
            t.channelId !== e.messages.channelId)
        )
            this.loadMorePausedUntilUserScroll = !1;
        else if (t.loadingMore && !e.messages.loadingMore) {
            let e = Math.abs(i - this.scrollHeightBeforeLoad);
            this.loadMorePausedUntilUserScroll = e < 100;
        }
        if (this.isInitialized() || this.isReady()) {
            if (!this.isInitialized()) return void this.restoreScroll();
        } else {
            null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
            return;
        }
        if (null != e.messages.jumpTargetId) {
            if (this.isLoading()) return;
            let n = ll(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping())
                    return void (null != n
                        ? this.scrollToMessage({ jumpTargetId: n, animate: !0 })
                        : (this.jumping = !1));
            } else {
                let l,
                    i = t.first();
                null != i &&
                    e.messages.last() !== t.last() &&
                    e.messages.first() !== t.first() &&
                    (l = z.default.extractTimestamp(i.id)),
                    this.scrollToMessage({ jumpTargetId: n, animate: !0, fromTimestamp: l });
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let a = e.messages.last(),
            r = t.last();
        if (null != a && a.state === F.cmJ.SENDING && r?.id !== a.id) return void this.setScrollToBottom();
        let { focusId: o } = this.props;
        if (null != o && n !== o) {
            let e = this.getElementFromMessageId(o);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: e7.mZ + this.props.additionalMessagePadding,
                    callback: this.handleScroll,
                });
        }
        s && this.fixScrollPosition(l, i);
    }
    getAnchorData(e, t, n) {
        let l = this.getElementFromMessageId(e),
            i = this.ref.current?.getScrollerNode();
        if (!(0, e8.vq)(l) || null == i) return null;
        let { offsetHeight: s } = l,
            a = ln(l, i),
            r = a - t;
        return (
            null != n && (r = Math.max(-s, Math.min(n, r))),
            { id: e, offsetFromTop: r, offsetTop: a, offsetHeight: s, clamped: null != r }
        );
    }
    cleanAutomaticAnchor() {
        this.setAutomaticAnchor(null);
    }
    newMessageBarBuffer() {
        return this.props.channel.isForumPost() ? e7.Gt : e7.k8;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            l = this.getScrollerState(),
            { scrollTop: i } = l,
            s = t && i >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            a = null,
            r = (t) => (-1 === t ? z.default.castChannelIdAsMessageId(n.id) : e._array[t]?.id),
            o = -1,
            c = !1;
        for (;;) {
            let t = r(o);
            if (null == t) break;
            let n = this.getAnchorData(t, i);
            if (((this._bottomAnchor = n), c && null != n && n.offsetTop > i + s + l.offsetHeight)) break;
            if (c) {
                o++;
                continue;
            }
            null != n && (n.offsetTop >= i + s || o === e.length - 1) && ((a = n), (c = !0)), o++;
        }
        return a;
    }
    findFetchAnchor(e) {
        let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            l = e ? -1 : 1,
            i = null,
            s = t._array.length - 1;
        for (let a = e ? s : 0; null != t._array[a]; a += l) {
            let e = t._array[a],
                l = this.getAnchorData(e.id, n);
            if (null != l) {
                i = l;
                break;
            }
        }
        return i;
    }
    getAnchorFixData() {
        for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == e) continue;
            let t = this.getElementFromMessageId(e.id);
            if (!(0, e8.vq)(t)) continue;
            let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
            return { node: t, fixedScrollTop: t.offsetTop - (e.offsetFromTop + n) };
        }
        return null;
    }
    fixAnchorScrollPosition() {
        let e = this.getAnchorFixData();
        if (null == e) return void this.handleScroll();
        let { node: t, fixedScrollTop: n } = e;
        null != this.focusAnchor
            ? (this.isPinned()
                  ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                  : this.mergeTo(n, this.handleScroll),
              this.ref.current?.scrollIntoViewNode({
                  node: t,
                  padding: e7.mZ + this.props.additionalMessagePadding,
                  callback: this.handleScroll,
              }))
            : this.mergeTo(n, this.handleScroll),
            this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()),
            this.isLoading() || (this.messageFetchAnchor = null);
    }
    hasAnchor() {
        return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor;
    }
    updateFocusAnchor(e, t, n) {
        let l = (this.focusAnchor = null != e ? this.getAnchorData(e, t) : null);
        null != l && (l.offsetFromTop >= n || t > l.offsetTop + l.offsetHeight) && (this.focusAnchor = null);
    }
    handleFocusAnchorScroll(e, t) {
        this.updateFocusAnchor(this.focusAnchor?.id, e, t);
    }
    updateFetchAnchor(e, t, n) {
        let l = this.ref.current?.getScrollerNode();
        null != this.messageFetchAnchor &&
            null != l &&
            (this.messageFetchAnchor = this.getAnchorData(
                this.messageFetchAnchor.id,
                e,
                this.isInPlaceholderRegion({ scrollTop: e, offsetHeight: t, scrollHeight: n }) > 0 ? t : void 0,
            ));
    }
    updateAutomaticAnchor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.ref.current?.getScrollerNode();
        if (null == this.automaticAnchor || null == n) return;
        let l = this.getAnchorData(this.automaticAnchor.id, e);
        t && null != l && null != this.automaticAnchor && (l.offsetFromTop = this.automaticAnchor.offsetFromTop),
            this.setAutomaticAnchor(l);
    }
    updateVisibleMessagesDebounced = K().debounce(tt.s_, 300);
    setAutomaticAnchor(e) {
        (this.automaticAnchor = e),
            this._automaticAnchorCallbacks?.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(e?.id, this._bottomAnchor?.id);
    }
    getScrollerState() {
        return this.ref.current?.getScrollerState() ?? li;
    }
    handleScroll = (e) => {
        if (!this.isInitialized()) return;
        let t = this.getScrollerState(),
            n = this.isScrolledToBottom(t);
        if (
            (n !== this.isAtBottom &&
                (n
                    ? ((this.isAtBottom = !0), this.props.handleScrollToBottom())
                    : ((this.isAtBottom = !1), this.props.handleScrollFromBottom())),
            t.offsetHeight !== this.offsetHeightCache || t.scrollHeight !== this.scrollHeightCache)
        )
            (this.scrollCounter = 0),
                clearTimeout(this.anchorTimeout),
                this.isPinned() ||
                    (null == this.automaticAnchor
                        ? this.setAutomaticAnchor(this.findAnchor())
                        : this.updateAutomaticAnchor(t.scrollTop, !0)),
                clearTimeout(this.anchorTimeout),
                this.fixScrollPosition(t.offsetHeight, t.scrollHeight),
                (this.scrollTopCache = t.scrollTop);
        else {
            if (null != e && e.target !== this.ref.current?.getScrollerNode()) return;
            this.scrollTopCache !== t.scrollTop &&
                (this.loadMorePausedUntilUserScroll && null != e && (this.loadMorePausedUntilUserScroll = !1),
                (this.pinned = n),
                (this.scrollCounter = Math.min(this.scrollCounter + 1, 5)),
                this.pinned
                    ? this.cleanAutomaticAnchor()
                    : null != this.automaticAnchor
                      ? this.updateAutomaticAnchor(t.scrollTop, !0)
                      : this.setAutomaticAnchor(this.findAnchor()),
                (this.scrollTopCache = t.scrollTop),
                clearTimeout(this.anchorTimeout),
                (this.anchorTimeout = setTimeout(() => {
                    (this.scrollCounter = 0), (this.anchorTimeout = null), (this.prevScrollTop = null);
                    let { scrollHeight: e, offsetHeight: t } = this.getScrollerState();
                    this.isHeightChange(t, e)
                        ? this.handleScroll()
                        : (this.cleanAutomaticAnchor(), this.isPinned() || this.setAutomaticAnchor(this.findAnchor()));
                }, 35)));
        }
        if (
            (this.handleFocusAnchorScroll(t.scrollTop, t.offsetHeight),
            this.updateStoreDimensionsDebounced(),
            this.isScrollLoadingDisabled())
        )
            return this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(t);
        let l = this.isInScrollTriggerLoadingRegion(t);
        1 === l ? this.loadMore() : 2 === l ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(t);
    };
    handleResize = (e, t) => {
        let { offsetHeightCache: n, scrollHeightCache: l } = this;
        "container" === t ? (n = e.contentRect.height) : "content" === t && (l = e.contentRect.height),
            this.isHeightChange(n, l) && this.fixScrollPosition(n, l);
    };
    handleMouseDown = (e) => {
        e.target === e.currentTarget && (this.dragging = !0);
    };
    handleMouseUp = () => {
        (this.dragging = !1), this.handleScroll();
    };
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            { messages: i, placeholderHeight: s } = this.props;
        return i.hasMoreBefore && t < s && l > n ? 1 : i.hasMoreAfter && t >= l - n - s ? 2 : 0;
    }
    isInScrollTriggerLoadingRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            { messages: i } = this.props;
        return i.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && l > n
            ? 1
            : i.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e)
              ? 2
              : 0;
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            {
                prevScrollTop: i,
                props: { placeholderHeight: s },
            } = this;
        if (((this.prevScrollTop = t), null == i)) return;
        let a = this.isInPlaceholderRegion(e),
            r = t - i;
        0 !== a &&
            0 !== r &&
            (1 === a && t + r <= 0
                ? (this.mergeTo(s - n), (this.prevScrollTop = s - n))
                : 2 === a && t + r >= l - n && (this.mergeTo(l - s), (this.prevScrollTop = l - s)));
    }
    enableAutomaticAck() {
        this.isInitialized() &&
            !this.acking &&
            ((this.acking = !0),
            this.updateStoreDimensions(() => {
                (0, e6._9)(this.props.channel.id, this.props.windowId);
            }));
    }
    fixScrollPosition(e, t) {
        (this.offsetHeightCache = e),
            (this.scrollHeightCache = t),
            this.fixJumpTarget(),
            this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor
                ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                : this.fixAnchorScrollPosition();
    }
    fixJumpTarget() {
        if (!this.isJumping()) return;
        let { messages: e, hasUnreads: t } = this.props;
        if (null != e.jumpTargetId) {
            let n = ll(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, e8.vq)(l)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : e7.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = this.getDocument()?.getElementById(e7.q4),
            i = () => {
                (this.jumping = !1), this.setAutomaticAnchor(this.findAnchor()), null != n && n(), this.handleScroll();
            };
        (this.pinned = !1),
            (this.jumping = e),
            null != l
                ? this.scrollTo(this.getOffsetOrientationFromNode(l, t, this.newMessageBarBuffer()), e, i)
                : this.scrollTo(this.getOffsetToPreventLoading("top"), e, i);
    }
    getOffsetOrientationFromNode(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            l = this.ref.current?.getScrollerNode();
        if (null == l) return 0;
        let i = this.getScrollerState(),
            s = ln(e, l);
        return "middle" === t ? Math.min(s - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = ll(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1 })
            : this.props.hasUnreads &&
                this.props.channel.type !== F.rbe.GUILD_VOICE &&
                this.props.channel.type !== F.rbe.GUILD_STAGE_VOICE
              ? this.scrollToNewMessages()
              : null != e
                ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll)
                : this.setScrollToBottom();
    }
    loadMore = (() => {
        var e = this;
        return function () {
            let t,
                n,
                l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { messages: i } = e.props;
            if (l) {
                let e = i.last();
                null != e && (n = e.id);
            } else {
                let e = i.first();
                null != e && (t = e.id);
            }
            (e.messageFetchAnchor = e.findFetchAnchor(l)),
                (e.scrollHeightBeforeLoad = e.scrollHeightCache),
                (e.loading = !0),
                I.A.fetchMessages({
                    channelId: e.props.channel.id,
                    before: t,
                    after: n,
                    limit: Math.min(F.EMb, 2 * (0, eY.h)("scrollManager.loadMore")),
                    truncate: !0,
                });
        };
    })();
    scrollTo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.ref.current?.scrollTo({ to: e, animate: !j.A.useReducedMotion && t, callback: n }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    mergeTo(e, t) {
        this.ref.current?.mergeTo({ to: e, callback: t }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    setScrollToBottom() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { messages: t, channel: n } = this.props;
        if (t.hasMoreAfter)
            I.A.jumpToPresent(n.id, (0, eY.h)("scrollManager.jumpToPresent")), (0, te.uh)(n.getGuildId() ?? F.ME, n.id);
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                (this.jumping = !1), this.handleScroll();
            });
    }
    updateStoreDimensionsDebounced = K().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) e5.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: i, offsetHeight: s } = this.getScrollerState();
            e5.A.updateChannelDimensions(t.id, Date.now(), l - n, i - n, s, e);
        }
    }
    scrollIntoViewRect() {}
    scrollPageUp() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.ref.current?.scrollPageUp({ animate: e });
    }
    scrollPageDown() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.ref.current?.scrollPageDown({ animate: e });
    }
    scrollToMessage(e) {
        let { jumpTargetId: t, animate: n = !1, fromTimestamp: l } = e;
        if (null == this.ref.current) return;
        if (t === this.props.channel.id) return void this.scrollTo(0);
        let i = this.getElementFromMessageId(t);
        this.isJumping() ||
            !n ||
            null == l ||
            j.A.useReducedMotion ||
            (z.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0);
        let s = () => {
            (this.jumping = !1),
                (0, e8.vq)(i) && ((i.tabIndex = -1), i.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                this._scrollCompleteCallbacks.forEach((e) => e());
        };
        (0, e8.vq)(i)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      i,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : e7.mZ,
                  ),
                  n,
                  s,
              )
            : this.scrollToNewMessages(n, "middle", s);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: l } = t,
            { messages: i, hasUnreads: s, placeholderHeight: a } = this.props;
        if ("top" === e)
            if (!i.hasMoreBefore) return 0;
            else return s ? a - e7.N0 - 2 : a + 500;
        return i.hasMoreAfter ? n - l - a - 500 : n - l;
    }
    getOffsetToPreventLoading(e) {
        let { messages: t } = this.props,
            n = 0;
        return (
            "top" === e && t.hasMoreBefore ? (n = 2) : "bottom" === e && t.hasMoreAfter && (n = -2),
            this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
        );
    }
    getSnapshotBeforeUpdate(e) {
        if (this.hasAnchor() || null != e) {
            let { scrollTop: t, offsetHeight: n, scrollHeight: l } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, l), this.updateAutomaticAnchor(t);
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this._automaticAnchorCallbacks.push(e),
            (this._automaticAnchorCallbacks = K().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = K().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = K().uniq(this._scrollCompleteCallbacks));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = K().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        (this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, e6.Z5)(this.props.channel.id, this.props.windowId);
    }
}
n(667532);
var la = n(95561),
    lr = n(486227),
    lo = n(731738),
    lc = n(192308),
    ld = n(534514),
    lu = n(832712),
    lh = n(807393),
    lm = n(381689),
    lA = n(754302),
    lg = n(632738),
    lp = n(544231),
    lf = n(349435),
    lC = n(665909);
function lE(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/41b06cc820452b3b01d2a90f76b9ba4007cf4c795b2647fc3f0ff7d6a0632785.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var lx = n(821609),
    lS = n(789645),
    l_ = n(834581);
function lI(e) {
    let { header: t, description: n, onDismiss: l, buttons: i, dismissible: s = !0 } = e,
        a = o.useCallback(() => {
            l?.();
        }, [l]);
    return (0, r.jsxs)("div", {
        className: l_.HZ,
        children: [
            (0, r.jsxs)("div", {
                className: l_.Be,
                children: [
                    (0, r.jsx)(lE, { alt: "", size: 32 }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(ld.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, r.jsx)(Y.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: l_.Uo,
                children: i?.map((e, t) =>
                    (0, r.jsx)(
                        lx.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            s
                ? (0, r.jsx)(ti.D, {
                      className: l_.b,
                      onClick: a,
                      role: "button",
                      "aria-label": en.intl.string(en.t.WAI6xu),
                      children: (0, r.jsx)(lS.P, { size: "md", color: "currentColor", className: l_.b }),
                  })
                : null,
        ],
    });
}
function ly(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: l,
        warningType: i,
        header: s,
        description: a,
        onDismiss: c,
        buttons: d,
    } = e;
    o.useEffect(() => {
        lh.A.increment({ name: lo.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = o.useCallback(() => {
        c?.(), (0, lC._$)({ channelId: t, warningId: n, senderId: l, warningType: i, cta: lC.Wm.USER_BANNER_DISMISS });
    }, [c, t, n, l, i]);
    return (0, r.jsx)(lI, { buttons: d, description: a, header: s, onDismiss: u });
}
var lN = n(477427);
function lj(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = [
            { title: en.intl.string(en.t.wSZfJR), description: en.intl.string(en.t.CRwzW5) },
            { title: en.intl.string(en.t.cmMUaB), description: en.intl.string(en.t.n6G1ue) },
            { title: en.intl.string(en.t["5SPKSy"]), description: en.intl.string(en.t.eyjeJQ) },
        ],
        a = o.useCallback(() => {
            (0, lp.xi)(t, [l]);
        }, [t, l]),
        c = (e) => {
            lu.A.updateChannelOverrideSettings(null, t, { muted: !0 }, lN.fd.Muted),
                lm.A.showMuteSuccessToast(i, t),
                (0, lC._$)({ channelId: t, warningId: l, senderId: i, warningType: lf._j.LIKELY_ATO, cta: e }),
                a();
        };
    return (
        o.useEffect(() => {
            (0, lC.mO)(F.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: lf._j.LIKELY_ATO,
            }),
                lh.A.increment({ name: lo.K.SAFETY_WARNING_VIEW });
        }, [t, l, i]),
        (0, r.jsx)(ly, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: lf._j.LIKELY_ATO,
            header: en.intl.string(en.t.R8UsiI),
            description: en.intl.string(en.t.lI8nQl),
            onDismiss: a,
            buttons: [
                {
                    text: en.intl.string(en.t.tC1pvL),
                    variant: "primary",
                    onClick: () => {
                        (0, lc.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("55941"), n.e("82911"), n.e("47894")]).then(
                                n.bind(n, 129493),
                            );
                            return (n) => {
                                let { transitionState: a, onClose: o } = n;
                                return (0, r.jsx)(e, {
                                    transitionState: a,
                                    onClose: o,
                                    channelId: t,
                                    warningId: l,
                                    senderId: i,
                                    description: en.intl.string(en.t["/uid3p"]),
                                    safetyTipRows: s.map((e, t) =>
                                        (0, r.jsx)(
                                            lA.B,
                                            {
                                                listType: "numbered",
                                                index: t,
                                                title: e.title,
                                                description: e.description,
                                            },
                                            t,
                                        ),
                                    ),
                                    actionRows: [
                                        (0, r.jsx)(
                                            lg.PQ,
                                            {
                                                title: en.intl.string(en.t.ftIK2A),
                                                description: en.intl.string(en.t.w2ve0t),
                                                buttonText: en.intl.string(en.t.ftIK2A),
                                                onButtonPress: () => {
                                                    c(lC.Wm.USER_MODAL_MUTE), o();
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, r.jsx)(ti.D, {
                                        onClick: () =>
                                            (0, lC._$)({
                                                channelId: t,
                                                warningId: l,
                                                senderId: i,
                                                warningType: lf._j.LIKELY_ATO,
                                                cta: lC.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, r.jsx)(ld.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: en.intl.format(en.t.UkH122, {
                                                learnMoreLink:
                                                    "https://discord.com/safety/understanding-and-avoiding-common-scams",
                                            }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, lC._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: lf._j.LIKELY_ATO,
                                cta: lC.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                { text: en.intl.string(en.t.ftIK2A), onClick: () => c(lC.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var lT = n(564771),
    lb = n(310784),
    lv = n.n(lb),
    lM = n(534890),
    lR = n(922529),
    lD = n(507610);
function lL(e) {
    let { item: t, channel: n, index: l } = e,
        i = (0, m.bG)([O.A], () => O.A.getSelectedConversation(n.id)),
        s = (0, m.bG)([O.A], () => O.A.getSelectedConversationColor(n.id));
    if (null == i) return null;
    let a = null != t.content,
        o = null != s ? lv()(s).alpha(1).css() : void 0;
    return (0, r.jsx)("div", {
        style: null != o ? { "--conversation-color": o } : void 0,
        children: (0, r.jsx)(
            lR.A,
            {
                className: d()(lD.yF, a ? lD.AC : lD.xR),
                contentClassName: a ? lD.Ij : lD.Xe,
                children: a
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(lM.o, { size: "xs", color: "currentColor", className: lD.Kk }),
                              t.content,
                          ],
                      })
                    : (0, r.jsx)(lM.o, { size: "xs", color: "currentColor", className: lD.Kk }),
            },
            `conv-divider-${t.contentKey ?? l}`,
        ),
    });
}
var lP = n(495273),
    lk = n(429933),
    lO = n(93246),
    lG = n(95701),
    lU = n(808728),
    lw = n(427262),
    lF = n(314307),
    lH = n(713654),
    lB = n(435470),
    lV = n(376310),
    lK = n(42362);
function lz(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: l } = e,
        i =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, r.jsx)("div", {
        className: d()(lK._, { [lK.L]: l }),
        children: Array.from(t).map((e) =>
            (0, r.jsx)(lV.A, { tag: e, onRemove: i, size: null == i ? lV.A.Sizes.SMALL : lV.A.Sizes.MEDIUM }, e.id),
        ),
    });
}
var lW = n(873185);
function l$(e) {
    let { channel: t } = e,
        n = (0, lB.kt)(t),
        { firstMessage: l } = (0, m.cf)([nm.A], () => nm.A.getMessage(t.id)),
        i = new Set((0, lB.zt)(t, n)),
        s = (0, lH.gU)(t) ?? lM.o,
        a = (0, P.Ay)(t);
    return (0, r.jsxs)(lF.Ay, {
        channelId: t.id,
        className: lW.kL,
        children: [
            (0, r.jsx)("div", { className: lW.P0, children: (0, r.jsx)(s, { className: lW.Kk, strokeWidth: 1.75 }) }),
            (0, r.jsx)(lF.cr, { className: lW.wx, children: a }),
            null == l &&
                (0, r.jsx)(Y.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: en.intl.string(en.t.mE3KJN),
                }),
            (0, r.jsx)(lz, { appliedTags: i, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var lq = n(289873),
    lJ = n(548118),
    lZ = n(513461),
    lY = n(654265),
    lX = n(561446),
    lQ = n(806700);
function l0(e) {
    let { joinRequest: t, guild: n } = e,
        l = (0, m.bG)([eU.default], () => eU.default.getUser(t.userId));
    return (0, r.jsxs)("div", {
        className: lQ.I8,
        children: [
            (0, r.jsxs)("div", {
                className: lQ.Ov,
                children: [
                    null != n &&
                        (0, r.jsxs)("div", {
                            className: lQ.yB,
                            children: [
                                (0, r.jsx)(lJ.Ay, { guild: n, active: !0, size: lJ.Ay.Sizes.SMOL, className: lQ.$f }),
                                (0, r.jsx)(ld.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != l &&
                        (0, r.jsx)(ld.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: en.intl.format(en.t.jDV3i6, { username: l.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== lZ.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === lZ.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("hr", { className: lQ.g2 }),
                            (0, r.jsxs)("div", {
                                className: lQ.fs,
                                children: [
                                    (0, r.jsx)(Y.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, r.jsx)(Y.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function l1(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: i } = (0, lY.A)(t.id);
    return (0, r.jsx)(lF.Ay, {
        channelId: t.id,
        className: lQ.kL,
        children:
            null != l && null != l.formResponses
                ? (0, r.jsxs)("div", {
                      className: lQ.KJ,
                      children: [
                          (0, r.jsx)("div", { children: (0, r.jsx)(l0, { guild: i, joinRequest: l }) }),
                          (0, r.jsx)(lX.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, r.jsx)(lq.y, {})
                  : null,
    });
}
var l2 = n(825484),
    l3 = n(241541),
    l4 = n(793574),
    l7 = n(571694),
    l8 = n(922301),
    l5 = n(368919),
    l6 = n(598104),
    l9 = n(990078),
    ie = n(396787),
    it = n(817789);
function il(e) {
    let { channel: t, children: n, className: l, editable: i, location: s } = e;
    return i
        ? (0, r.jsx)(l9.m, {
              position: "bottom",
              text: en.intl.string(en.t["0qPSMV"]),
              children: (0, r.jsxs)(ti.D, {
                  className: d()(it.e, l),
                  onClick: () => (0, ie.jv)(t.id, s),
                  children: [
                      n,
                      (0, r.jsx)("div", {
                          className: it.Z,
                          children: (0, r.jsx)(nt.R, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("div", { className: l, children: n });
}
var ii = n(73028),
    is = n(880682),
    ia = n(322923);
function ir(e) {
    let t,
        { channel: n, children: l, user: i } = e,
        s = (0, m.bG)([j.A], () => j.A.useReducedMotion),
        a = (0, P.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: u,
        } = (0, eh.A)({ userId: i?.id, size: ec._3.SIZE_80, animateOnHover: !0 }),
        [h, A] = o.useState(!1),
        g = o.useCallback(() => {
            d.onMouseEnter(), A(!0);
        }, [d]),
        p = o.useCallback(() => {
            d.onMouseLeave(), A(!1);
        }, [d]),
        f = !n.isMultiUserDM() && i?.displayNameStyles != null;
    return (0, r.jsxs)(lF.Ay, {
        channelId: n.id,
        onMouseEnter: g,
        onMouseLeave: p,
        children: [
            ((t = !s && u),
            n.isMultiUserDM()
                ? (0, r.jsx)(il, {
                      channel: n,
                      editable: !0,
                      location: l4.A.EMPTY_GROUP_DM,
                      children: (0, r.jsx)(l6.A, { channel: n, size: ec._3.SIZE_80, animated: t, "aria-label": a }),
                  })
                : (0, r.jsx)(ed.eu, {
                      "aria-label": a,
                      size: ec._3.SIZE_80,
                      src: (0, l7.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, r.jsx)(lF.cr, {
                children: f
                    ? (0, r.jsx)(l5.A, {
                          userName: a,
                          displayNameStyles: i?.displayNameStyles,
                          effectDisplayType: h ? l8.G.ANIMATED : l8.G.STATIC,
                          loop: !0,
                      })
                    : a,
            }),
            (0, r.jsx)(lF.j1, { children: l }),
            n.isMultiUserDM() &&
                (0, r.jsxs)(l2.e, {
                    className: ia.U,
                    children: [
                        (0, r.jsx)(is.NE, { channel: n, text: en.intl.string(en.t["6Qgrev"]), icon: l3.D }),
                        (0, r.jsx)(lx.$, {
                            icon: nt.R,
                            variant: "secondary",
                            text: en.intl.string(en.t["5Q9+/L"]),
                            "aria-label": en.intl.string(en.t["5Q9+/L"]),
                            onClick: () => (0, ii.U)(n.id, l4.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var io = n(136722),
    ic = n(342952),
    id = n(177953),
    iu = n(725570),
    ih = n(435183),
    im = n(685374),
    iA = n(87e3),
    ig = n(474462);
function ip(e) {
    let t,
        { className: n, children: l, verified: i, roleColor: s, roleName: a } = e;
    return (
        (t = i
            ? (0, r.jsx)(iA.A, { size: 12, color: s, className: ig.TS })
            : (0, r.jsx)("div", { className: ig.yY, style: { backgroundColor: s } })),
        (0, r.jsxs)("div", { className: d()(n, ig.JC), style: { "--custom-role-label-color": s }, children: [t, a, l] })
    );
}
var iC = n(468689),
    iE = n(46054),
    ix = n(34457),
    iS = n(317525),
    i_ = n(488926),
    iI = n(84476);
function iy(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: i = !1,
        onClick: s,
        disabled: a = !1,
        verified: o = !1,
    } = e;
    return (0, r.jsx)(ti.D, {
        className: d()(t, iI.x6, { [iI.r9]: a }),
        onClick: a ? void 0 : s,
        "aria-disabled": a,
        role: "button",
        children: (0, r.jsx)(ip, {
            className: iI.JC,
            roleColor: n,
            roleName: l,
            verified: o,
            children:
                i &&
                (0, r.jsx)(lS.P, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: iI.Tj,
                    colorClass: iI.eG,
                }),
        }),
    });
}
var iN = n(516757);
function ij(e) {
    let { channel: t } = e,
        [n, l] = o.useState(!1),
        i = (0, P.Ay)(t, !0),
        s = t.guild_id,
        a = (0, m.bG)([iS.A], () => (null != s ? iS.A.getSortedRoles(s) : void 0)),
        c = (0, m.bG)([eU.default, nS.A], () => eU.default.getUser(nS.A.getGuild(s)?.ownerId)),
        u = o.useMemo(() => (null != a ? a.filter((e) => !(0, ix.Oy)(e)) : []), [a]),
        h = o.useMemo(
            () =>
                K()(u)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = i_.aH({ forceRoles: { [e.id]: e }, context: t });
                        return io.X8(n, io.kg(F.xBc.ADMINISTRATOR, F.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, u],
        ),
        A = (0, m.yK)([eU.default], () => {
            let e = {};
            for (let n of (null != c && (e[c.id] = c), Object.values(t.permissionOverwrites))) {
                if (n.type !== nq.r2.MEMBER || null != e[n.id]) continue;
                let t = eU.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return K()(e)
                .filter((e) => {
                    let n = i_.$3({ permission: F.xBc.ADMINISTRATOR, user: e, context: t }),
                        l = t.permissionOverwrites[e.id] ?? i_.x3,
                        i = io.zy(l.allow, F.xBc.VIEW_CHANNEL);
                    return n || i;
                })
                .value();
        }, [t, c]),
        g = ek.A.can(F.xBc.MANAGE_CHANNELS, t) || ek.A.can(F.xBc.MANAGE_ROLES, t),
        p = o.useCallback(() => l(!1), []);
    return (0, r.jsxs)(lF.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(lF.WK, { locked: !0, channelType: t.type }),
            (0, r.jsx)(lF.cr, { children: en.intl.format(en.t.I3R7Vn, { channelName: i }) }),
            (0, r.jsx)(lF.j1, {
                className: tZ.PT,
                children: en.intl.format(en.t.QuwqjG, {
                    channelName: i,
                    topicHook: () => iE.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            g
                ? (0, r.jsxs)("div", {
                      className: iN.$x,
                      children: [
                          (0, r.jsx)(lx.$, {
                              size: "sm",
                              variant: "secondary",
                              text: en.intl.string(en.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: id.n,
                          }),
                          (0, r.jsx)(lx.$, {
                              size: "sm",
                              variant: "secondary",
                              text: en.intl.string(en.t["3gUsJb"]),
                              onClick: function () {
                                  ih.Ay.open(t.id);
                              },
                              icon: nt.R,
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: iN.ol,
                children: [
                    (function () {
                        if (1 !== A.length || h.length > 0)
                            return (0, r.jsx)(ic.A, { guildId: t.guild_id, className: iN.HD, maxUsers: 5, users: A });
                        let e = A[0],
                            n = lw.Ay.getName(e);
                        return (0, r.jsxs)("div", {
                            className: iN.HD,
                            children: [
                                (0, r.jsx)(ed.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: ec._3.SIZE_24,
                                }),
                                (0, r.jsx)(Y.E, {
                                    tag: "span",
                                    className: iN.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, r.jsx)(Y.E, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: en.intl.string(en.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    h.map((e, n) => {
                        let l = e.colorString ?? F.TpD,
                            i = e.tags?.guild_connections !== void 0;
                        return g
                            ? (0, r.jsx)(
                                  iy,
                                  {
                                      className: d()(iN.JC, { [iN.HV]: n === h.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      disabled: !g,
                                      verified: i,
                                      onClick: () => {
                                          iC.A.open(t.guild_id, F.BEX.MEMBERS), iC.A.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, r.jsx)(
                                  ip,
                                  {
                                      className: d()(iN.JC, { [iN.HV]: n === h.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      verified: i,
                                  },
                                  e.id,
                              );
                    }),
                ],
            }),
            n
                ? (0, r.jsx)(iu.aF, {
                      renderModal: (e) =>
                          (0, r.jsx)(im.default, { ...e, onClose: () => (p(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
var iT = n(329856);
function ib(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t, !0),
        l = (0, m.bG)([ek.A], () => ek.A.can(F.xBc.MANAGE_CHANNELS, t) && lG.bk.has(t.type));
    return (0, r.jsxs)(lF.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(lF.WK, { channelType: t.type }),
            (0, r.jsx)(lF.cr, { children: en.intl.format(en.t.I3R7Vn, { channelName: n }) }),
            (0, r.jsx)(lF.j1, {
                className: tZ.PT,
                children: en.intl.format(en.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => iE.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            l
                ? (0, r.jsx)("div", {
                      className: iT.U,
                      children: (0, r.jsx)(lx.$, {
                          size: "sm",
                          variant: "secondary",
                          text: en.intl.string(en.t["3gUsJb"]),
                          onClick: () => {
                              ih.Ay.open(t.id);
                          },
                          icon: nt.R,
                      }),
                  })
                : null,
        ],
    });
}
var iv = n(463930),
    iM = n(442433),
    iR = n(688810),
    iD = n(967144),
    iL = n(342296),
    iP = n(696451),
    ik = n(415296);
function iO(e) {
    let { userId: t, channel: l } = e,
        i = o.useRef(null),
        { analyticsLocations: s } = (0, iR.Ay)(l4.A.USERNAME),
        a = (0, m.bG)([eU.default], () => eU.default.getUser(t)),
        c = (0, m.bG)([iP.Ay], () => (null != t ? iP.Ay.getMember(l.guild_id, t) : null)),
        u = (0, iD.gn)(l.guild_id, t ?? void 0, c?.colorStrings ?? null);
    function h(e) {
        if (null == a) return null;
        (0, iM.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("20706"),
                n.e("94881"),
                n.e("26132"),
                n.e("46652"),
                n.e("93190"),
                n.e("8757"),
                n.e("85968"),
                n.e("60195"),
                n.e("29787"),
                n.e("94000"),
                n.e("91994"),
                n.e("76665"),
                n.e("76273"),
                n.e("24198"),
                n.e("23427"),
                n.e("72883"),
                n.e("43116"),
                n.e("70515"),
                n.e("66939"),
                n.e("85802"),
                n.e("24966"),
            ]).then(n.bind(n, 175269));
            return (t) => (0, r.jsx)(e, { ...t, user: a, guildId: l.guild_id, channel: l });
        });
    }
    let A = c?.nick ?? lw.Ay.getName(a) ?? "???",
        g = c?.colorString;
    return null == a
        ? (0, r.jsx)("span", { className: d()(ik.eM, ik.sL), children: A })
        : (0, r.jsx)(iR.f5, {
              value: s,
              children: (0, r.jsx)(iL.A, {
                  targetElementRef: i,
                  user: a,
                  guildId: l.guild_id,
                  channelId: l.id,
                  roleId: c?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(ti.D, {
                          ...e,
                          innerRef: i,
                          tag: "span",
                          className: ik.eM,
                          onContextMenu: h,
                          children: (0, r.jsx)(iv.g, { name: A, colorString: g ?? null, colorStrings: u }),
                      }),
              }),
          });
}
function iG(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, r.jsx)("div", { style: { marginTop: -8 } })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Y.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, r.jsx)("div", {
                          className: ik.VA,
                          children: en.intl.format(en.t.imPXd5, {
                              usernameHook: (e, n) => (0, r.jsx)(iO, { userId: t.ownerId, channel: t }, n),
                          }),
                      }),
                  }),
                  t.type === F.rbe.PRIVATE_THREAD
                      ? (0, r.jsx)(Y.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: en.intl.string(en.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function iU(e) {
    let { channel: t } = e,
        n = (0, lH.gU)(t) ?? t9.y,
        l = (0, P.Ay)(t);
    return (0, r.jsxs)(lF.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)("div", { className: ik.P0, children: (0, r.jsx)(n, { className: ik.Kk }) }),
            (0, r.jsx)(lF.cr, { children: l }),
            (0, r.jsx)(iG, { channel: t }),
        ],
    });
}
var iw = n(222983),
    iF = n(157550),
    iH = n(957283),
    iB = n(189213),
    iV = n(824552),
    iK = n(933958),
    iz = n(869003),
    iW = n(841595),
    i$ = n(546183),
    iq = n(543465),
    iJ = n(308528),
    iZ = n(928658),
    iY = n(978914),
    iX = n(977347);
function iQ(e) {
    let { channel: t, user: n } = e,
        l = !0 === n.bot,
        {
            message: i,
            isReportable: s,
            isLoaded: a,
        } = (function (e, t, n) {
            let l,
                i =
                    (l = (0, m.bG)([nZ.A], () => nZ.A.getRelationshipType(t), [t])) === F.eA$.NONE ||
                    l === F.eA$.BLOCKED ||
                    l === F.eA$.PENDING_INCOMING,
                s = n || i,
                a = (0, iX.D)(e.id, t),
                { message: r, loaded: o, error: c } = (0, iY.I)(e, { enabled: s }),
                d = a ?? (r?.author?.id === t ? r : null);
            return { message: d, isReportable: s, isLoaded: null != d || o || c };
        })(t, n.id, l),
        { channelId: c } = (0, iH.N)(),
        d = t.id === c,
        u = !nj.Fr && !d,
        h = o.useCallback(() => {
            null != i &&
                (0, iZ.b8)(i, () => {
                    iJ.A.closePrivateChannel(t.id, u);
                });
        }, [t.id, i, u]);
    return !s || (null == i && a)
        ? null
        : (0, r.jsx)(lx.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == i,
              onClick: h,
              text: en.intl.string(en.t.HHZmDn),
          });
}
function i0(e) {
    let { channel: t } = e,
        l = (0, m.bG)([iq.Ay], () => iq.Ay.isChannelMuted(null, t.id));
    return (0, r.jsx)(lx.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? en.intl.string(en.t.YqAjXy) : en.intl.string(en.t.w4m945),
        onClick: function () {
            (0, lc.openModalLazy)(async () => {
                let { default: e } = await n.e("99312").then(n.bind(n, 259763));
                return (n) => (0, r.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function i1(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        i = (0, m.bG)([iK.Ay], () => iK.Ay.getSelfEmbeddedActivities());
    function s() {
        iV.A.delete(l.id);
        let e = i.get(n.id);
        null != e && iz.A.leaveActivity({ location: e.location, applicationId: n.id });
    }
    return (0, r.jsx)(lx.$, {
        variant: "secondary",
        text: en.intl.string(en.t["5S3sQF"]),
        onClick: () => {
            (0, lc.openModal)((e) =>
                (0, r.jsx)(iB.Modal, {
                    title: en.intl.string(en.t["DT39A+"]),
                    subtitle: en.intl.formatToPlainString(en.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: en.intl.string(en.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: en.intl.string(en.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                s(), e.onClose();
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                w.default.track(F.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
}
function i2(e) {
    var t;
    let { channel: n, user: l } = e,
        i =
            ((t = l?.id ?? F.dJq),
            (0, m.bG)([iW.A], () => (null !== t ? iW.A.getUserProfile(t ?? F.dJq)?.application : void 0)) ?? void 0),
        { authorizedAppToken: s, authorizedAppsFetchState: a } = (0, m.cf)([i$.default], () => ({
            authorizedAppToken: i$.default.getNewestTokenForApplication(i?.id),
            authorizedAppsFetchState: i$.default.getFetchState(),
        }));
    return (o.useEffect(() => {
        l.bot && a === i$.FetchState.NOT_FETCHED && iV.A.fetch();
    }, [l.bot, a]),
    l.bot && null != i && null != s)
        ? (0, r.jsxs)(l2.e, {
              size: "sm",
              children: [
                  (0, r.jsx)(i0, { channel: n }),
                  (0, r.jsx)(i1, { application: i, channel: n, oauth2Token: s }),
                  (0, r.jsx)(iQ, { channel: n, user: l }),
              ],
          })
        : (0, r.jsx)(l2.e, { size: "sm", children: (0, r.jsx)(iQ, { channel: n, user: l }) });
}
var i3 = n(573435),
    i4 = n(903209),
    i7 = n(975732),
    i8 = n(486020),
    i5 = n(518477),
    i6 = n(864401);
function i9(e) {
    let { userId: t, channelId: n, showDivider: l = !1 } = e,
        i = (0, m.bG)([iW.A], () => iW.A.getMutualGuilds(t), [t]),
        s = eU.default.getUser(t);
    o.useEffect(() => {
        null == i && null != s && (0, i4.A)(t, s.getAvatarURL(null, 80), { withMutualGuilds: !0 });
    }, [i, t, s]);
    let a = o.useMemo(() => {
        if (null == i) return [];
        let e = i.slice(0, 3),
            t = e.length - 1;
        return e
            .map((e, n) => {
                let { guild: l } = e,
                    i = i8.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 24 });
                if (null == i) return null;
                let s = (0, r.jsx)("img", { src: i, alt: "", className: i6.my }, l.id);
                return n === t
                    ? s
                    : (0, r.jsx)(
                          i3.Ay,
                          {
                              className: i6.cp,
                              mask: i3.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              width: 24,
                              height: 24,
                              children: s,
                          },
                          l.id,
                      );
            })
            .filter(nI.Vq);
    }, [i]);
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: d()(i6.kL, l ? i6.yF : null),
              children: (0, r.jsx)(Y.E, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: en.intl.string(en.t.zjVh8h),
              }),
          })
        : (0, r.jsxs)(ti.D, {
              className: d()(i6.kL, i6.vk, { [i6.yF]: l }),
              onClick: () => {
                  (0, i7.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: i5.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [l4.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, r.jsx)("div", { className: i6.H, children: a }),
                  (0, r.jsx)(Y.E, {
                      className: i6.NI,
                      variant: "text-sm/normal",
                      children: en.intl.format(en.t.eE3oep, { count: i.length }),
                  }),
              ],
          });
}
var se = n(717398),
    st = n(327166),
    sn = n(390848),
    sl = n(175709);
function si(e) {
    let { userId: t } = e;
    return (0, r.jsx)(lx.$, {
        size: "sm",
        variant: "secondary",
        onClick: () => {
            se.A.blockUser(t, { location: F.liQ.DM_CHANNEL });
        },
        text: en.intl.string(en.t.l4Emac),
    });
}
function ss(e) {
    let { userId: t, showingBanner: n } = e,
        l = (0, st.D)(t);
    return n
        ? null
        : (0, r.jsx)(lx.$, {
              variant: "primary",
              onClick: () => {
                  se.A.addRelationship({ userId: t, context: { location: F.liQ.DM_CHANNEL } });
              },
              text: l,
          });
}
function sa(e) {
    let { userId: t } = e;
    return (0, r.jsx)(lx.$, {
        variant: "secondary",
        onClick: () => {
            se.A.removeFriend(t, { location: F.liQ.DM_CHANNEL });
        },
        text: en.intl.string(en.t.cvSt1J),
    });
}
function sr(e) {
    let { userId: t } = e;
    return (0, r.jsx)(lx.$, {
        variant: "secondary",
        onClick: () => {
            se.A.unblockUser(t, { location: F.liQ.DM_CHANNEL });
        },
        text: en.intl.string(en.t.XyHpKH),
    });
}
function so(e) {
    let { channel: t, user: n, showingBanner: l } = e,
        i = (0, m.bG)([nZ.A], () => nZ.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, sn.I)({
            userId: n.id,
            applicationId: i,
            isGameRelationship: !1,
            location: F.liQ.DM_CHANNEL,
        });
    return (0, r.jsxs)("div", {
        className: sl.K,
        children: [
            (0, r.jsx)(Y.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: en.intl.format(en.t.uIomXw, { username: lw.Ay.getName(n) }),
            }),
            (0, r.jsxs)(l2.e, {
                size: "sm",
                children: [
                    (0, r.jsx)(lx.$, { variant: "primary", onClick: s, text: en.intl.string(en.t["+WbSn5"]) }),
                    (0, r.jsx)(lx.$, {
                        variant: "secondary",
                        onClick: () => {
                            se.A.cancelFriendRequest(n.id, { location: F.liQ.DM_CHANNEL });
                        },
                        text: en.intl.string(en.t.rQSndv),
                    }),
                    (0, r.jsx)(si, { userId: n.id }),
                    l ? null : (0, r.jsx)(iQ, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function sc(e) {
    let t,
        { channel: n, user: l, showingBanner: i } = e,
        s = (0, m.bG)([nZ.A], () => nZ.A.getRelationshipType(l.id), [l.id]);
    if (s === F.eA$.PENDING_INCOMING) return (0, r.jsx)(so, { channel: n, user: l, showingBanner: i });
    switch (s) {
        case F.eA$.NONE:
            l.bot || (t = (0, r.jsx)(ss, { userId: l.id, showingBanner: i }));
            break;
        case F.eA$.FRIEND:
            t = (0, r.jsx)(sa, { userId: l.id });
            break;
        case F.eA$.BLOCKED:
            t = (0, r.jsx)(sr, { userId: l.id });
            break;
        case F.eA$.PENDING_OUTGOING:
            t = (0, r.jsx)(lx.$, { variant: "primary", disabled: !0, text: en.intl.string(en.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let a = s !== F.eA$.BLOCKED;
    return (0, r.jsxs)(l2.e, {
        size: "sm",
        children: [t, a ? (0, r.jsx)(si, { userId: l.id }) : null, i ? null : (0, r.jsx)(iQ, { channel: n, user: l })],
    });
}
var sd = n(691540),
    su = n(857250),
    sh = n(97483),
    sm = n(92650),
    sA = n(138298),
    sg = n(761640);
function sp(e) {
    let { channel: t, user: n } = e,
        l = o.useCallback(() => {
            (0, sd.P0)((0, su.o)(en.intl.string(en.t.a2j0hv), sh.Ck.FAILURE));
        }, []),
        i = o.useCallback(() => {
            sA.A.closeChannelSidebar(sg.fe);
        }, []),
        s = o.useCallback(() => {
            sA.A.closeChannelSidebar(sg.fe);
        }, []),
        {
            acceptMessageRequest: a,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, sm.t)({ user: eU.default.getUser(n.id), onError: l, onAcceptSuccess: s, onRejectSuccess: i }),
        A = d || u || h || m;
    return (0, r.jsxs)(l2.e, {
        size: "sm",
        children: [
            (0, r.jsx)(lx.$, {
                variant: "primary",
                disabled: A,
                onClick: () => a(t.id),
                loading: d,
                text: en.intl.string(en.t.Kz8Pwr),
            }),
            (0, r.jsx)(lx.$, {
                variant: "secondary",
                disabled: A,
                onClick: () => c(t.id),
                loading: u,
                text: en.intl.string(en.t.B2nygW),
            }),
            (0, r.jsx)(iQ, { channel: t, user: n }),
        ],
    });
}
var sf = n(331674);
function sC(e) {
    let t,
        { channel: n, user: l, showingBanner: i } = e,
        { channelId: s } = (0, iH.N)(),
        a = (0, m.bG)([iF.A], () => null != s && iF.A.isSpam(s), [s]),
        o = (0, m.bG)([nZ.A], () => nZ.A.getRelationshipType(l.id), [l.id]),
        c = n.id === s,
        d = !0 === l.bot,
        u = l.isNonUserBot(),
        h = sf.n;
    return (
        u
            ? (t = null)
            : a || c
              ? (t = (0, r.jsx)(sp, { channel: n, user: l }))
              : d
                ? (t = (0, r.jsx)(i2, { channel: n, user: l }))
                : ((t = (0, r.jsx)(sc, { channel: n, user: l, showingBanner: i })),
                  o === F.eA$.PENDING_INCOMING && (h = sf.O)),
        (0, r.jsxs)("div", {
            className: h,
            children: [(0, r.jsx)(i9, { userId: l.id, channelId: n.id, showDivider: h !== sf.O }), t],
        })
    );
}
var sE = n(746080),
    sx = n(818050);
function sS(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, lP.Ae)(n),
        i = (0, m.bG)([lU.Ay], () => null != n.guild_id && n === lU.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, lk.A)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(l$, { channel: n });
    if (lG.Le.has(n.type)) return (0, r.jsx)(iU, { channel: n });
    if (i) return (0, r.jsx)(iw.A, { channel: n });
    if (l) return (0, r.jsx)(ij, { channel: n });
    return (0, r.jsx)(ib, { channel: n });
}
function s_(e) {
    let { channel: t, showingBanner: n } = e,
        l = (0, P.Ay)(t),
        { type: i } = t,
        s = (0, m.bG)([eU.default], () => (t.isPrivate() ? eU.default.getUser(t.getRecipientId()) : null)),
        a = lw.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, m.cf)([ek.A], () => ({
            canManageRoles: ek.A.can(F.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: ek.A.can(F.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, r.jsx)(ir, { channel: t, children: en.intl.string(en.t.Rzvnig) });
    if (i === F.rbe.DM)
        return (0, r.jsxs)(ir, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, r.jsx)(ld.D, { variant: "heading-xl/medium", className: sx.SX, children: a }),
                en.intl.format(en.t["Qvg+6+"], { username: l }),
                s?.isProvisional ? (0, r.jsx)(lO.Y, { userId: s.id }) : null,
                null != s ? (0, r.jsx)(sC, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, r.jsxs)(lF.Ay, {
                channelId: t.id,
                children: [
                    (0, r.jsx)(lF.cr, { children: en.intl.format(en.t.I3R7Vn, { channelName: l }) }),
                    (0, r.jsx)(lF.j1, { children: en.intl.string(en.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(sE.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(l1, { channel: t });
        else return (0, r.jsx)(ir, { channel: t, children: en.intl.format(en.t.MFwcqO, { name: l }) });
    return c
        ? (0, r.jsx)(sS, { channel: t, canManageRoles: o })
        : (0, r.jsx)(lF.Ay, {
              channelId: t.id,
              children: (0, r.jsx)(lF.j1, { children: en.intl.format(en.t.hPVEQG, { channelName: l }) }),
          });
}
var sI = n(506774),
    sy = n(933832),
    sN = n(782603),
    sj = n(408278),
    sT = n(763175),
    sb = n(56562),
    sv = n(765671),
    sM = n(304072),
    sR = n(578623),
    sD = n(702841),
    sL = n(696986),
    sP = n(871237),
    sk = n(36491),
    sO = n(953727);
function sG(e) {
    let { width: t = 45, height: n = 46, ...l } = e;
    return (0, r.jsxs)("svg", {
        ...(0, sO.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 49 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, r.jsx)("path", {
                d: "M29.424 22.375L30.9908 17.9974C31.6183 16.242 32.8917 14.792 34.5514 13.943L46.105 8.03515C47.7328 7.19988 49.3851 9.15697 48.2694 10.6141C47.1536 12.0713 45.1905 13.7662 42.0689 15.0465L45.5563 15.0222C46.9464 15.01 47.4829 16.8268 46.3123 17.5767C44.3247 18.8632 41.3372 19.924 37.4962 18.8144L38.9229 20.1557C39.6728 20.863 39.1119 22.1128 38.0815 22.0397C36.6183 21.9238 34.8746 21.4909 33.6857 20.2106C33.6857 20.2106 32.8992 22.375 30.8201 23.5639C30.0397 24.0089 29.1252 23.2224 29.424 22.375Z",
                fill: "white",
            }),
            (0, r.jsx)("path", {
                d: "M19.5767 46.8513C20.112 45.2515 18.84 43.3838 16.7357 42.6798C14.6314 41.9757 12.4916 42.7018 11.9563 44.3016C11.421 45.9014 12.6929 47.769 14.7973 48.4731C16.9016 49.1772 19.0414 48.4511 19.5767 46.8513Z",
                fill: "#66B9FF",
            }),
            (0, r.jsx)("path", {
                d: "M25.2658 39.551C25.0403 40.2339 24.4915 40.7521 23.7172 41.0996C23.9001 41.6423 23.9184 42.1788 23.7477 42.6848C23.577 43.1909 23.1685 43.6847 22.6198 44.0261C22.7379 44.4329 22.7336 44.8655 22.6076 45.2699C21.9918 47.0929 18.791 47.666 15.456 46.5441C12.121 45.4223 9.90783 43.0384 10.5175 41.2155C10.6648 40.8046 10.9325 40.4476 11.2857 40.1912C11.0662 39.6059 11.0236 39.0206 11.2065 38.478C11.3894 37.9354 11.7186 37.5574 12.1881 37.2342C11.7796 36.4904 11.6576 35.7405 11.8832 35.0637C12.56 33.0457 16.1083 32.4116 19.803 33.6493C23.4978 34.8869 25.9426 37.533 25.2658 39.551Z",
                fill: "#89D6FF",
            }),
            (0, r.jsx)("path", {
                d: "M9.76155 19.8454C11.6089 14.3277 19.0166 11.8341 26.2963 14.279C33.5759 16.7238 37.984 23.1743 36.1366 28.692C34.9294 32.2891 31.3628 34.5998 27.0096 35.0998C26.5376 35.1499 26.0849 35.3144 25.6908 35.5789C25.2966 35.8435 24.9729 36.2001 24.7477 36.6179L23.9855 38.0506C23.1686 39.3737 20.6079 39.7517 17.9557 38.8615C15.1146 37.9104 13.2368 35.868 13.694 34.2584L13.9318 33.0207C14.0215 32.5411 13.9898 32.0467 13.8397 31.5824C13.6895 31.1181 13.4257 30.6988 13.0722 30.3625C9.97494 27.3506 8.56657 23.406 9.76155 19.8454Z",
                fill: "#FFEFA3",
            }),
            (0, r.jsx)("path", {
                d: "M21.0407 42.2577C19.8335 42.2577 18.5166 42.0321 17.2119 41.5932C15.1755 40.9164 13.4013 39.7763 12.3344 38.4716C12.2837 38.4193 12.2444 38.3572 12.2191 38.289C12.1938 38.2207 12.1829 38.148 12.1872 38.0754C12.1915 38.0027 12.2109 37.9318 12.2441 37.8671C12.2773 37.8023 12.3236 37.7452 12.3801 37.6993C12.4366 37.6535 12.502 37.6199 12.5722 37.6006C12.6423 37.5814 12.7158 37.577 12.7877 37.5877C12.8597 37.5984 12.9287 37.624 12.9902 37.6628C13.0518 37.7016 13.1046 37.7528 13.1453 37.8131C14.0903 38.9654 15.6938 39.9836 17.5411 40.6055C19.2848 41.1908 21.0895 41.3615 22.504 41.0749C22.5736 41.0547 22.6467 41.0491 22.7186 41.0586C22.7905 41.068 22.8597 41.0923 22.9217 41.1298C22.9838 41.1674 23.0374 41.2174 23.0791 41.2767C23.1208 41.336 23.1498 41.4033 23.1642 41.4744C23.1786 41.5455 23.1781 41.6188 23.1627 41.6897C23.1473 41.7605 23.1174 41.8275 23.0748 41.8862C23.0322 41.9449 22.9779 41.9941 22.9154 42.0308C22.8528 42.0675 22.7833 42.0908 22.7113 42.0992C22.1613 42.2092 21.6015 42.2623 21.0407 42.2577V42.2577ZM20.8761 45.0745C21.0147 45.062 21.1429 44.9956 21.233 44.8896C21.3231 44.7835 21.3679 44.6463 21.3577 44.5075C21.3453 44.3693 21.2787 44.2417 21.1725 44.1526C21.0662 44.0635 20.9289 44.0201 20.7907 44.0319C19.5043 44.1416 17.9862 43.9283 16.5229 43.4344C14.9377 42.904 13.5233 42.0931 12.5478 41.1481C12.4458 41.0675 12.3175 41.0276 12.1878 41.0362C12.058 41.0448 11.9361 41.1014 11.8457 41.1948C11.7553 41.2882 11.7029 41.4119 11.6985 41.5419C11.6942 41.6718 11.7383 41.7987 11.8222 41.898C12.9075 42.9528 14.4622 43.849 16.1876 44.4282C17.5228 44.8733 18.858 45.105 20.0957 45.105C20.364 45.105 20.62 45.0928 20.8761 45.0745V45.0745Z",
                fill: "#3F96EF",
            }),
            (0, r.jsx)("path", {
                d: "M11.6396 20.8698C13.2065 16.1813 19.4924 14.0657 25.6746 16.1386C31.8568 18.2116 35.5942 23.6865 34.0212 28.375C32.9969 31.4296 29.9729 33.3867 26.2782 33.8074C25.8773 33.851 25.493 33.9914 25.1584 34.2166C24.8238 34.4418 24.549 34.7449 24.3577 35.0999L23.7114 36.3193C23.0163 37.4411 20.8459 37.7642 18.59 37.0082C16.1817 36.1973 14.5844 34.4658 14.9746 33.1001L15.1819 32.0454C15.2562 31.6382 15.2283 31.2189 15.1006 30.8252C14.9729 30.4314 14.7494 30.0756 14.4502 29.7895C11.8164 27.2349 10.6275 23.8877 11.6396 20.8698Z",
                fill: "url(#paint0_linear_859_60333)",
            }),
            (0, r.jsx)("path", {
                d: "M18.8521 39.1186C19.1939 39.1973 19.54 39.2563 19.8886 39.2954C21.5042 33.412 23.2053 28.7905 24.7234 26.0652C28.1254 27.1627 29.3875 26.6993 29.8387 26.1018C30.2898 25.5043 30.1374 24.6691 29.3875 23.5838C28.6376 22.4986 27.9121 22.151 27.0341 22.3096C26.1562 22.4681 25.2111 23.2851 24.2539 24.8032C23.3483 24.4754 22.4627 24.0947 21.6018 23.6631C21.7908 21.6572 21.553 20.3098 20.9007 19.5965C20.5105 19.1697 19.7666 18.749 18.468 19.1575C17.1694 19.566 16.9316 20.2305 16.9255 20.7183C16.9072 21.9072 18.5351 23.1997 20.48 24.2545C19.9617 28.0589 18.1571 33.6985 16.4377 38.2041C16.7412 38.3718 17.0547 38.5205 17.3767 38.6492C18.0412 36.8933 18.9801 34.3021 19.8032 31.6073C20.6263 28.9125 21.1994 26.5896 21.4677 24.7605C22.2298 25.1263 22.998 25.4495 23.7174 25.7177C22.9187 27.1688 22.0895 29.0954 21.2421 31.4549C20.6507 33.0949 19.7971 35.6556 18.8521 39.1186ZM27.217 23.3399C27.3816 23.3095 27.8694 23.2241 28.5278 24.1752C29.0766 24.9739 29.0887 25.3641 29.0095 25.4677C28.8022 25.7421 27.6133 25.8579 25.2782 25.1446C25.9854 24.0655 26.6439 23.4375 27.217 23.3399ZM20.6019 23.1204C18.9862 22.1876 17.962 21.2548 17.9681 20.7366C17.9742 20.4439 18.5412 20.2366 18.785 20.1574C19.0013 20.0837 19.2273 20.0426 19.4557 20.0354C19.8825 20.0354 20.0593 20.2244 20.1263 20.3037C20.5653 20.7793 20.6995 21.7791 20.6019 23.1204Z",
                fill: "#FFC31A",
            }),
            (0, r.jsx)("path", {
                d: "M32.5883 3.43255C32.9256 3.21613 33.2127 2.93007 33.4304 2.59358C33.648 2.25708 33.7912 1.87793 33.8503 1.48156L34.0515 0.115857C34.0573 0.0830328 34.0746 0.0533456 34.1003 0.0321176C34.126 0.0108896 34.1584 -0.000490999 34.1918 1.62532e-05C34.2244 -0.000288277 34.256 0.0113057 34.2807 0.032628C34.3054 0.0539503 34.3215 0.0835394 34.3259 0.115857L34.5271 1.48156C34.5862 1.87793 34.7294 2.25708 34.9471 2.59358C35.1647 2.93007 35.4519 3.21613 35.7892 3.43255L35.966 3.54839C35.9867 3.55964 36.004 3.57641 36.0158 3.59685C36.0277 3.6173 36.0336 3.64062 36.033 3.66423C36.0336 3.68785 36.0277 3.71117 36.0158 3.73162C36.004 3.75206 35.9867 3.76883 35.966 3.78007L35.7892 3.90201C35.4524 4.11903 35.1657 4.40525 34.9481 4.74163C34.7305 5.07802 34.587 5.45688 34.5271 5.85301L34.3259 7.21871C34.3216 7.25162 34.3057 7.28194 34.2812 7.30426C34.2566 7.32659 34.2249 7.33948 34.1918 7.34065V7.34065C34.1579 7.33971 34.1254 7.32703 34.0998 7.30479C34.0742 7.28256 34.0572 7.25213 34.0515 7.21871L33.8503 5.85301C33.7905 5.45688 33.647 5.07802 33.4294 4.74163C33.2118 4.40525 32.9251 4.11903 32.5883 3.90201L32.4115 3.78617C32.3918 3.77413 32.3758 3.75702 32.3651 3.73663C32.3543 3.71624 32.3493 3.69334 32.3505 3.67033V3.67033C32.3493 3.64732 32.3543 3.62442 32.3651 3.60403C32.3758 3.58364 32.3918 3.56653 32.4115 3.55449L32.5883 3.43255Z",
                fill: "#55EF84",
            }),
            (0, r.jsx)("path", {
                d: "M39.3804 39.3185C39.7181 39.1011 40.0054 38.8141 40.2231 38.4765C40.4408 38.139 40.5837 37.7588 40.6424 37.3614L40.8497 35.9957C40.8541 35.9634 40.8702 35.9338 40.8949 35.9125C40.9196 35.8912 40.9512 35.8796 40.9838 35.8799V35.8799C41.0165 35.8796 41.0481 35.8912 41.0728 35.9125C41.0974 35.9338 41.1135 35.9634 41.118 35.9957L41.3253 37.3614C41.3851 37.7584 41.5285 38.1382 41.7461 38.4755C41.9636 38.8129 42.2504 39.1003 42.5873 39.3185L42.7641 39.4283C42.7826 39.4415 42.7977 39.4589 42.8083 39.479C42.8189 39.4991 42.8246 39.5214 42.8251 39.5441V39.5563C42.8246 39.5782 42.8189 39.5996 42.8082 39.6187C42.7976 39.6379 42.7825 39.6541 42.7641 39.666L42.5873 39.7819C42.2498 39.9996 41.9627 40.2867 41.7451 40.6242C41.5274 40.9617 41.3843 41.3418 41.3253 41.739L41.118 43.0986C41.1137 43.1315 41.0978 43.1618 41.0733 43.1841C41.0487 43.2065 41.017 43.2194 40.9838 43.2205V43.2205C40.9507 43.2194 40.919 43.2065 40.8944 43.1841C40.8699 43.1618 40.854 43.1315 40.8497 43.0986L40.6424 41.739C40.5845 41.3414 40.4419 40.9609 40.2241 40.6233C40.0064 40.2856 39.7186 39.9987 39.3804 39.7819L39.2035 39.666C39.1852 39.6541 39.1701 39.6379 39.1594 39.6187C39.1488 39.5996 39.143 39.5782 39.1426 39.5563V39.5441C39.143 39.5214 39.1488 39.4991 39.1594 39.479C39.17 39.4589 39.1851 39.4415 39.2035 39.4283L39.3804 39.3185Z",
                fill: "#FF78B5",
            }),
            (0, r.jsx)("path", {
                d: "M26.5035 8.52263C26.7308 8.37742 26.9245 8.18538 27.0717 7.95934C27.2189 7.73329 27.3162 7.47844 27.3571 7.2118L27.4912 6.29118C27.4953 6.2696 27.5065 6.25004 27.5231 6.23565C27.5397 6.22127 27.5607 6.21291 27.5826 6.21192V6.21192C27.6049 6.21172 27.6265 6.21966 27.6433 6.23426C27.6602 6.24885 27.6711 6.26909 27.6741 6.29118L27.8143 7.2118C27.8541 7.47805 27.9503 7.73273 28.0964 7.95879C28.2426 8.18486 28.4353 8.37709 28.6618 8.52263L28.7776 8.60189C28.7914 8.60981 28.8027 8.62143 28.8103 8.63544C28.8178 8.64944 28.8213 8.66527 28.8203 8.68115C28.8208 8.69613 28.8171 8.71096 28.8096 8.72391C28.802 8.73686 28.7909 8.7474 28.7776 8.75431L28.6618 8.83357C28.4353 8.97911 28.2426 9.17135 28.0964 9.39741C27.9503 9.62348 27.8541 9.87815 27.8143 10.1444L27.6741 11.065C27.6711 11.0871 27.6602 11.1074 27.6433 11.1219C27.6265 11.1365 27.6049 11.1445 27.5826 11.1443V11.1443C27.5607 11.1433 27.5397 11.1349 27.5231 11.1206C27.5065 11.1062 27.4953 11.0866 27.4912 11.065L27.3571 10.1444C27.3162 9.87776 27.2189 9.62291 27.0717 9.39686C26.9245 9.17082 26.7308 8.97878 26.5035 8.83357L26.3876 8.75431C26.3752 8.74646 26.3648 8.73571 26.3573 8.72297C26.3499 8.71023 26.3457 8.69588 26.345 8.68115V8.68115C26.3452 8.66548 26.3492 8.6501 26.3566 8.6363C26.364 8.62251 26.3747 8.6107 26.3876 8.60189L26.5035 8.52263Z",
                fill: "#89D6FF",
            }),
            (0, r.jsx)("path", {
                d: "M0.524839 29.6125C0.752168 29.4673 0.945898 29.2752 1.09309 29.0492C1.24028 28.8231 1.33755 28.5683 1.3784 28.3016L1.51253 27.381C1.51663 27.3594 1.52789 27.3399 1.54448 27.3255C1.56108 27.3111 1.58204 27.3027 1.60399 27.3018V27.3018C1.62627 27.3016 1.64786 27.3095 1.6647 27.3241C1.68154 27.3387 1.69247 27.3589 1.69544 27.381L1.83567 28.3016C1.87543 28.5679 1.9716 28.8226 2.11776 29.0486C2.26391 29.2747 2.45667 29.4669 2.68313 29.6125L2.79897 29.6917C2.81276 29.6997 2.82407 29.7113 2.83161 29.7253C2.83915 29.7393 2.84263 29.7551 2.84165 29.771V29.771C2.84218 29.786 2.83846 29.8008 2.8309 29.8138C2.82335 29.8267 2.81228 29.8372 2.79897 29.8442L2.68313 29.9295C2.45667 30.0751 2.26391 30.2673 2.11776 30.4934C1.9716 30.7194 1.87543 30.9741 1.83567 31.2403L1.69544 32.161C1.69247 32.1831 1.68154 32.2033 1.6647 32.2179C1.64786 32.2325 1.62627 32.2404 1.60399 32.2402C1.58204 32.2392 1.56108 32.2309 1.54448 32.2165C1.52789 32.2021 1.51663 32.1825 1.51253 32.161L1.3784 31.2403C1.33755 30.9737 1.24028 30.7189 1.09309 30.4928C0.945898 30.2668 0.752168 30.0747 0.524839 29.9295L0.408999 29.8503C0.396513 29.8424 0.386111 29.8317 0.378679 29.8189C0.371248 29.8062 0.367008 29.7918 0.366321 29.7771V29.7771C0.365528 29.7604 0.369036 29.7438 0.37651 29.7288C0.383983 29.7139 0.39517 29.7011 0.408999 29.6917L0.524839 29.6125Z",
                fill: "#3541D6",
            }),
            (0, r.jsx)("path", {
                d: "M14.5781 21.0834L14.8647 16.6449C14.9792 14.8659 14.41 13.1103 13.2734 11.7369L5.37186 2.17094C4.25003 0.823536 2.06735 1.91488 2.49413 3.6159C2.92091 5.31693 3.99396 7.55448 6.2559 9.8591L3.20137 8.51778C1.98809 7.98126 0.829688 9.37135 1.57351 10.4749C2.83556 12.3527 5.05482 14.4135 8.84707 14.8951L7.08508 15.5353C6.15835 15.8706 6.17664 17.1814 7.10946 17.5046C8.43858 17.9618 10.1335 18.2423 11.6638 17.5655C11.6638 17.5655 11.5297 19.7604 12.9076 21.5956C13.4258 22.2845 14.5233 21.9431 14.5781 21.0834Z",
                fill: "white",
            }),
            (0, r.jsx)("path", {
                d: "M32.7407 25.4545C32.9236 27.1067 32.9663 28.3992 33.6369 28.3261C34.3076 28.2529 35.3441 26.8384 35.1611 25.1862C34.9782 23.5339 33.643 22.2658 32.9724 22.339C32.3017 22.4121 32.5578 23.8022 32.7407 25.4545Z",
                fill: "white",
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                    id: "paint0_linear_859_60333",
                    x1: "34.2419",
                    y1: "5.70262",
                    x2: "5.61649",
                    y2: "53.1558",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, r.jsx)("stop", { offset: "0.14", stopColor: "#FFE45C" }),
                        (0, r.jsx)("stop", { offset: "0.83", stopColor: "#FFC31A" }),
                    ],
                }),
            }),
        ],
    });
}
var sU = n(788780);
function sw(e) {
    let { threadId: t } = e,
        n = (0, sD.bG)([tu.A], () => tu.A.getChannel(t)),
        l = (0, sD.bG)([tu.A], () => tu.A.getChannel(n?.parent_id)),
        i = o.useCallback(() => {
            null != n &&
                null != l &&
                ((0, la.zV)(F.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, tM.C)((0, sP.af)(n, l)));
        }, [n, l]);
    return (0, r.jsxs)("div", {
        className: sU.BQ,
        children: [
            (0, r.jsx)(sG, {}),
            (0, r.jsxs)("div", {
                className: sU.BB,
                children: [
                    (0, r.jsx)(Y.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: en.intl.string(en.t["5uAO7d"]),
                    }),
                    (0, r.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: en.intl.format(en.t.WnfPV3, {
                            helpArticleUrl: tK.A.getCreatorSupportArticleURL(F.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, r.jsx)(sL.h, { size: 4 }),
                    (0, r.jsx)(lx.$, { text: en.intl.string(en.t.C5UQC9), variant: "primary", icon: t3.q, onClick: i }),
                ],
            }),
            (0, r.jsx)(ti.D, {
                className: sU.b,
                onClick: () => {
                    (0, sk.sF)(t);
                },
                "aria-label": en.intl.string(en.t["0+xZH0"]),
                children: (0, r.jsx)(lS.P, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var sF = n(505527),
    sH = n(467073),
    sB = n(960538),
    sV = n(604121),
    sK = n(238301);
let sz = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    sW = o.memo(function (e) {
        let { channel: t, isLastItem: n } = e,
            l = (0, m.bG)([j.A], () => j.A.useReducedMotion),
            i = (0, m.bG)([ek.A], () => ek.A.can(F.xBc.SEND_MESSAGES_IN_THREADS, t)),
            s = (0, tj.s5)(t),
            a = (0, m.bG)([eM.default], () => eM.default.getId());
        return n
            ? i && !s && t.ownerId !== a
                ? (0, r.jsxs)("div", {
                      className: sK.aP,
                      children: [
                          (0, r.jsx)(sV.a, { importData: sz, shouldAnimate: !l, className: sK.lY }),
                          (0, r.jsxs)("div", {
                              className: sK.FS,
                              children: [
                                  (0, r.jsx)(ld.D, {
                                      variant: "heading-md/semibold",
                                      children: en.intl.string(en.t.OmBThA),
                                  }),
                                  (0, r.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: en.intl.string(en.t.zcs5ko),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null
            : (0, r.jsx)("div", { className: sK.yF });
    });
var s$ = n(930390),
    sq = n(831688),
    sJ = n(226698),
    sZ = n(892340),
    sY = n(715757),
    sX = n(390897),
    sQ = n(862482),
    s0 = n(215026),
    s1 = n(66834),
    s2 = n(964486),
    s3 = n(351001),
    s4 = n(400528);
function s7(e) {
    let { text: t, icon: n, onClick: l, disabled: i, submitting: s } = e;
    return (0, r.jsx)(l9.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, r.jsx)(sj.K, {
            icon: n,
            variant: "secondary",
            onClick: l,
            disabled: i,
            loading: s,
            "aria-label": t,
            size: "sm",
        }),
    });
}
var s8 = n(221314),
    s5 = n(145530),
    s6 = n(905499),
    s9 = n(406810),
    ae = n(991982),
    at = n(838111),
    an = n(870136);
function al(e) {
    let { channel: t, message: l, snapshot: i } = e,
        { moderatorReport: s } = i,
        a = s?.reported_user_id,
        c = (0, m.bG)([eU.default], () => (null != a ? eU.default.getUser(a) : null)),
        d = (0, m.bG)([nS.A], () => nS.A.getGuild(t.guild_id));
    (0, sY.ml)(l);
    let u = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, m.bG)([s4.A], () => null != l && s4.A.isUserBanned(l.id)),
                a = null != l && null == s,
                [c, d] = o.useState(a),
                u = (0, m.bG)([ek.A], () => null != l && null != i && (0, s3.fJ)(l, i, [ek.A]));
            if (
                ((0, s2.Ay)(() => {
                    a && s1.A.searchGuildBans(t.guild_id, void 0, [l?.id]).finally(() => d(!1));
                }),
                !u)
            )
                return null;
            let h = !0 === s ? en.intl.string(s8.default.dpfwQ1) : en.intl.string(s8.default.ASv23S),
                A = `ban-user-${l?.id}`;
            return (0, r.jsx)(
                s7,
                {
                    text: h,
                    icon: s0.w,
                    onClick: () => {
                        null != l &&
                            (0, lc.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("33847"), n.e("2504")]).then(
                                    n.bind(n, 333179),
                                );
                                return (n) => (0, r.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: !0 === s || c,
                    submitting: c,
                    color: sQ.$n.Colors.RED,
                },
                A,
            );
        })({ channel: t, user: c, guild: d }),
        h = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, m.bG)([ek.A], () => null != l && null != i && (0, s3.KX)(l, i, [ek.A])),
                a = (0, m.bG)([iP.Ay], () => null == l || null == iP.Ay.getMember(t.guild_id, l.id));
            if (!s) return null;
            let o = a ? en.intl.string(s8.default.Ux67nW) : en.intl.string(s8.default["snp/lJ"]),
                c = `kick-user-${l?.id}`;
            return (0, r.jsx)(
                s7,
                {
                    text: o,
                    icon: s6.N,
                    onClick: () => {
                        null != l &&
                            (0, lc.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("97660"), n.e("40243")]).then(
                                    n.bind(n, 547166),
                                );
                                return (n) => (0, r.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: a,
                },
                c,
            );
        })({ channel: t, user: c, guild: d }),
        A = [
            (function (e) {
                let { message: t, user: n, guild: l, channel: i } = e,
                    s = (0, m.bG)([ek.A], () => null != n && null != l && (0, s3.Kd)(n, l, [ek.A])),
                    { messageReference: a } = t,
                    o = (0, m.bG)([eP.A], () => (null != a ? eP.A.getMessage(a.channel_id, a.message_id) : null)),
                    c = (0, m.bG)([tu.A], () => (null != o ? tu.A.getChannel(o.channel_id) : null)),
                    d = (0, m.bG)([tu.A], () => tu.A.getChannel(i.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let u = null == o ? en.intl.string(s8.default["0IZbwC"]) : en.intl.string(s8.default.Uj6oD4),
                    h = null == o,
                    A = `delete-message-${t.id}`;
                return (0, r.jsx)(
                    s7,
                    {
                        text: u,
                        icon: ns.u,
                        onClick: () => {
                            null != c &&
                                null != o &&
                                s5.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: i.id });
                        },
                        disabled: h,
                        color: sQ.$n.Colors.RED,
                    },
                    A,
                );
            })({ channel: t, message: l, user: c, guild: d }),
            u,
            h,
            (function (e) {
                let { channel: t, user: n, guild: l } = e,
                    i = (0, m.bG)(
                        [eU.default, nS.A, ek.A],
                        () => null != n && null != l && (0, at.b)(l.id, n.id, [eU.default, nS.A, ek.A]),
                    ),
                    [s, a] = (0, an.Ay)(n?.id, t.guild_id),
                    o = (0, m.bG)([iP.Ay], () => null != l && null != n && null != iP.Ay.getMember(l.id, n.id));
                if (!i || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, r.jsx)(
                    s7,
                    {
                        text: a ? en.intl.string(s8.default["6uMZbv"]) : en.intl.string(s8.default["Sgg/uI"]),
                        icon: s9.O,
                        onClick: () => {
                            null != n && (0, ae.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
                        },
                        disabled: a,
                    },
                    c,
                );
            })({ channel: t, user: c, guild: d }),
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== A.length
        ? (0, r.jsx)(r.Fragment, { children: A.map((e, t) => (0, r.jsx)(o.Fragment, { children: e }, t)) })
        : null;
}
function ai(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, r.jsx)(al, { channel: n, message: t, snapshot: e }, l)),
    });
}
var as = n(152007),
    aa = n(867455),
    ar = n(473503),
    ao = n(853742),
    ac = n(189971),
    ad = n(347353),
    au = n(518229);
function ah(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        i = (0, sZ.uW)(t),
        [s, a] = o.useState(!1),
        c = () => {
            a(!0),
                sJ.A.resolveFlag(t.id).then(() => {
                    a(!1);
                });
        };
    return i
        ? (0, r.jsx)(lx.$, {
              size: "sm",
              variant: "secondary",
              text: l ? en.intl.string(s8.default["2Y4vkk"]) : en.intl.string(s8.default.YIbR4r),
              onClick: () => {
                  !0 === sI.w.get(sX.f)
                      ? c()
                      : (0, lc.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, r.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: sy.A,
              disabled: l,
          })
        : null;
}
function am(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: i } = e,
        { ref: s, width: a } = (0, sv.Ay)(),
        [c, u] = o.useState(3),
        [h, A] = o.useState(!n),
        [g, p] = (0, sM.A)(!1, 2e3),
        f = (0, m.bG)([tu.A], () => tu.A.getChannel(t), [t]),
        { firstMessage: C } = (0, ar.OA)(f),
        E = (0, m.bG)([as.A], () => as.A.hasJoined(t)),
        { disableReactionUpdates: x, disableReactionCreates: S, isLurking: _, isPendingMember: y } = (0, sH.A)(f),
        N = (0, sY.W1)(f),
        j = (0, m.bG)([tu.A], () => tu.A.getChannel(i)),
        T = (0, lB.Ck)(j),
        b = (0, m.bG)([sR.A], () => sR.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        v = o.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    A((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    if (
        (o.useLayoutEffect(() => {
            let e = s.current;
            if (null == e || !n) return;
            let t = new IntersectionObserver(v, { threshold: 1 });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }),
        o.useLayoutEffect(() => {
            null == a || u(Math.floor((a - 280) / 58));
        }, [a]),
        null == f)
    )
        return null;
    let M = null != C && C.reactions.length > 0,
        R = () => {
            (0, ao.jC)({ postId: f.id, location: { section: F.JJy.CHANNEL_HEADER } }),
                (0, tM.C)((0, sP.af)(f, j), () => p(!0));
        },
        D = E ? sy.A : sN.X;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: d()(ac.kL, { [ac.wx]: h }),
                ref: s,
                children: [
                    N
                        ? (0, r.jsx)("div", {
                              className: ac.kX,
                              children: null != C && (0, r.jsx)(ai, { message: C, channel: f }),
                          })
                        : (0, r.jsx)("div", {
                              className: ac.hY,
                              children:
                                  null != C &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          !M &&
                                              !S &&
                                              null != T &&
                                              (0, r.jsx)("div", {
                                                  className: ad.reactions,
                                                  children: (0, r.jsx)(sq.qT, {
                                                      message: C,
                                                      readOnly: !1,
                                                      useChatFontScaling: !1,
                                                      isLurking: _,
                                                      isPendingMember: y,
                                                      emoji: T,
                                                      type: sF.v.NORMAL,
                                                      hideCount: !0,
                                                      count: 0,
                                                      me: !1,
                                                      burst_count: 0,
                                                      me_burst: !1,
                                                      emojiSize: "reaction",
                                                  }),
                                              }),
                                          (0, r.jsx)(s$.A, {
                                              message: C,
                                              channel: f,
                                              disableReactionCreates: !0,
                                              disableReactionUpdates: x,
                                              isLurking: _,
                                              isPendingMember: y,
                                              maxReactions: c,
                                              className: ac.Br,
                                              useChatFontScaling: !1,
                                              isForumToolbar: !0,
                                              forceHideReactionCreates: !0,
                                          }),
                                          !S &&
                                              (0, r.jsx)(sB.t, {
                                                  message: C,
                                                  channel: f,
                                                  useChatFontScaling: !1,
                                                  className: d()(au.secondary, ac.vU, { [ac.w$]: !M }),
                                                  isForumToolbar: !0,
                                                  children: !M && en.intl.string(en.t.xpOyTO),
                                              }),
                                      ],
                                  }),
                          }),
                    (0, r.jsxs)("div", {
                        className: ac.Uo,
                        children: [
                            N
                                ? (0, r.jsx)(ah, { channel: f })
                                : !_ &&
                                  (0, r.jsx)(l9.m, {
                                      text: en.intl.string(en.t.F7oeDv),
                                      children: (0, r.jsx)(lx.$, {
                                          icon: D,
                                          size: "sm",
                                          variant: "secondary",
                                          text: E ? en.intl.string(en.t["7OkUzs"]) : en.intl.string(en.t["3aOv+h"]),
                                          onClick: () => {
                                              E
                                                  ? aa.A.leaveThread(f, "Forum Toolbar")
                                                  : aa.A.joinThread(f, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, r.jsx)(l9.m, {
                                text: en.intl.string(en.t.WqhZss),
                                children: g
                                    ? (0, r.jsx)(lx.$, {
                                          icon: sy.A,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: R,
                                          text: en.intl.string(en.t.t5VZ88),
                                      })
                                    : (0, r.jsx)(sj.K, {
                                          icon: t3.q,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: R,
                                          "aria-label": en.intl.string(en.t.WqhZss),
                                      }),
                            }),
                            !n &&
                                (0, r.jsx)(l9.m, {
                                    text: en.intl.string(en.t.nFP4oa),
                                    children: (0, r.jsx)(sj.K, {
                                        icon: sT.D,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => {
                                            I.A.jumpToMessage({
                                                channelId: f.id,
                                                messageId: f.id,
                                                flash: !0,
                                                jumpType: sb.US.INSTANT,
                                            });
                                        },
                                        "aria-label": en.intl.string(en.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            b && (0, r.jsx)(sw, { threadId: t }),
            (0, r.jsx)(sW, { channel: f, isLastItem: l }),
        ],
    });
}
var aA = n(640708),
    ag = n(378570),
    ap = n(452082),
    af = n(327337);
function aC(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = o.useCallback(() => {
            (0, lp.xi)(t, [l]);
        }, [t, l]),
        a = (0, m.bG)([nZ.A], () => nZ.A.isBlocked(i)),
        c = o.useMemo(
            () => ({ channelId: t, warningId: l, senderId: i, warningType: lf._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, l, i],
        );
    o.useEffect(() => {
        (0, lC.QF)({ ...c, viewName: lC.gN.SAFETY_WARNING_BANNER }), lh.A.increment({ name: lo.K.SAFETY_WARNING_VIEW });
    }, [c]);
    let d = o.useCallback(
            (e) => {
                (0, lC._$)({ ...c, cta: e });
            },
            [c],
        ),
        u = o.useCallback(() => {
            (0, lc.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("25028"),
                        n.e("6627"),
                        n.e("43549"),
                        n.e("70940"),
                        n.e("2033"),
                        n.e("82830"),
                        n.e("19959"),
                        n.e("20516"),
                    ]).then(n.bind(n, 131882));
                    return (n) => {
                        let { transitionState: s, onClose: a } = n;
                        return (0, r.jsx)(e, {
                            otherUserId: i,
                            channelId: t,
                            warningId: l,
                            warningType: lf._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: a,
                        });
                    };
                },
                { modalKey: af.V },
            ),
                d(lC.Wm.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, i, l, d]),
        h = o.useCallback(() => {
            s(), d(lC.Wm.USER_BANNER_BLOCK_CONFIRM);
        }, [s, d]),
        A = o.useCallback(() => {
            s(), d(lC.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [s, d]),
        g = o.useCallback(() => {
            (0, lc.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70940"), n.e("84938")]).then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: s } = n;
                    return (0, r.jsx)(e, {
                        transitionState: l,
                        onBlock: h,
                        onBlockAndReport: A,
                        onCancel: () => {
                            s?.(), d(lC.Wm.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: s,
                        userId: i,
                        channelId: t,
                    });
                };
            });
        }, [h, A, i, t, d]);
    return (0, r.jsx)(ly, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: lf._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: en.intl.string(en.t.ZzlB5p),
        description: en.intl.string(en.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: en.intl.string(en.t.Qyu4UK), variant: "primary", onClick: u },
            ...(a ? [] : [{ text: en.intl.string(en.t["7q0bNY"]), variant: "secondary", onClick: g }]),
        ],
    });
}
var aE = n(74114);
function ax(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: i } = (0, m.cf)([nZ.A], () => ({ isIgnored: nZ.A.isIgnored(t) }), [t]),
        s = o.useCallback(() => {
            (0, lC._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: lf._j.STRANGER_DANGER,
                cta: lC.Wm.USER_MODAL_IGNORE,
            }),
                se.A.ignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]),
        a = o.useCallback(() => {
            (0, lC._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: lf._j.STRANGER_DANGER,
                cta: lC.Wm.USER_MODAL_UNIGNORE,
            }),
                se.A.unignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]);
    return (0, r.jsx)(lg.PQ, {
        title: en.intl.string(en.t.avyV7P),
        description: en.intl.string(en.t.naWE6W),
        buttonText: i ? en.intl.string(en.t["3SrzRT"]) : en.intl.string(en.t.avyV7P),
        onButtonPress: i ? a : s,
    });
}
function aS(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        { isBlocked: s } = (0, m.cf)([nZ.A], () => ({ isBlocked: nZ.A.isBlocked(i) }), [i]),
        a = o.useCallback(() => {
            (0, lp.xi)(t, [l]);
        }, [t, l]),
        c = (0, af.eT)(),
        d = o.useCallback(
            (e) => () => {
                se.A.blockUser(i, { location: af.Rx }).then(() => {
                    a();
                }),
                    (0, lC._$)({ channelId: t, warningId: l, senderId: i, warningType: lf._j.STRANGER_DANGER, cta: e });
            },
            [a, t, l, i],
        );
    o.useEffect(() => {
        (0, lC.mO)(F.HAw.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: lf._j.STRANGER_DANGER,
        }),
            lh.A.increment({ name: lo.K.SAFETY_WARNING_VIEW });
    }, [t, l, i]);
    let u = () => {
            (0, lc.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("55941"), n.e("82911"), n.e("47894")]).then(
                    n.bind(n, 129493),
                );
                return (n) => {
                    let { transitionState: s, onClose: a } = n;
                    return (0, r.jsx)(e, {
                        transitionState: s,
                        onClose: a,
                        channelId: t,
                        warningId: l,
                        senderId: i,
                        description: en.intl.string(en.t.DJMZX6),
                        safetyTipRows: c.map((e, t) =>
                            (0, r.jsx)(lA.B, { index: t, listType: "numbered", title: e }, t),
                        ),
                        actionRows: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(ax, { senderId: i, channelId: t, warningId: l }, "more-tips-button"),
                                (0, r.jsx)(
                                    lg.PQ,
                                    {
                                        title: en.intl.string(en.t["5QYPO2"]),
                                        description: en.intl.string(en.t.G08MKu),
                                        buttonText: en.intl.string(en.t["5QYPO2"]),
                                        buttonVariant: "critical-primary",
                                        onButtonPress: () => {
                                            a(), h(lC.Wm.USER_MODAL_BLOCK_CONFIRM, lC.Wm.USER_MODAL_BLOCK_CANCEL, u);
                                        },
                                    },
                                    "block-button",
                                ),
                            ],
                        }),
                    });
                };
            });
        },
        h = (e, s, a) => {
            (0, lc.openModalLazy)(async () => {
                let { default: o } = await Promise.all([n.e("74370"), n.e("14788"), n.e("67554")]).then(
                    n.bind(n, 219801),
                );
                return (n) =>
                    (0, r.jsx)(o, {
                        ...n,
                        userId: i,
                        confirmBlock: d(e),
                        onCancel: () => {
                            a?.(),
                                (0, lC._$)({
                                    channelId: t,
                                    warningId: l,
                                    senderId: i,
                                    warningType: lf._j.STRANGER_DANGER,
                                    cta: s,
                                });
                        },
                    });
            });
        };
    return (0, r.jsx)(ly, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: lf._j.STRANGER_DANGER,
        header: en.intl.string(en.t.iOkDpM),
        description: en.intl.string(en.t.ISUbcM),
        onDismiss: a,
        buttons: [
            {
                text: en.intl.string(en.t["Qk/c48"]),
                variant: "primary",
                onClick: () => {
                    u(),
                        (0, lC._$)({
                            channelId: t,
                            warningId: l,
                            senderId: i,
                            warningType: lf._j.STRANGER_DANGER,
                            cta: lC.Wm.OPEN_MORE_TIPS,
                        });
                },
            },
            ...(s
                ? []
                : [
                      {
                          text: en.intl.string(en.t.ie0QdN),
                          variant: "critical-primary",
                          onClick: () => h(lC.Wm.USER_BANNER_BLOCK_CONFIRM, lC.Wm.USER_BANNER_BLOCK_CANCEL),
                      },
                  ]),
        ],
    });
}
var a_ = n(866323),
    aI = n(306788),
    ay = n(340833),
    aN = n(913642),
    aj = n(453302),
    aT = n(670455),
    ab = n(182147);
function av(e) {
    let { summary: t, channel: n } = e,
        l = (0, sD.bG)([eb.A], () => eb.A.summaryFeedback(t)),
        i = (e, l) => {
            e.stopPropagation(), (0, aj.A)({ summary: t, channel: n, rating: l });
        },
        s = (0, a_.p)(
            null == l,
            {
                enter: { from: { opacity: 0 }, to: { opacity: 1 } },
                leave: { opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
    return (0, r.jsx)(r.Fragment, {
        children: s((e, t) =>
            t
                ? (0, r.jsx)("div", {
                      className: ab.RD,
                      children: (0, r.jsxs)(u.animated.div, {
                          style: e,
                          className: ab.GK,
                          children: [
                              (0, r.jsx)(Y.E, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: en.intl.string(en.t["5ZsiE9"]),
                              }),
                              (0, r.jsx)(ti.D, {
                                  onClick: (e) => i(e, aT.P0.GOOD),
                                  children: (0, r.jsx)(aN.A, { className: ab.O1, width: 12, height: 12 }),
                              }),
                              (0, r.jsx)(ti.D, {
                                  onClick: (e) => i(e, aT.P0.BAD),
                                  children: (0, r.jsx)(ay.A, { className: ab.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function aM(e) {
    let t,
        { item: n, channel: l, index: i } = e,
        s = (0, sD.bG)([eb.A], () => eb.A.selectedSummary(l.id));
    if (null == s) return null;
    let a = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(aI.K, { size: "xs", color: "currentColor", className: ab.cR }), n.content],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(av, { summary: s, channel: l }),
                      (0, r.jsx)(aI.K, { size: "xs", color: "currentColor", className: ab.Jq }),
                  ],
              })),
        (0, r.jsx)(
            lR.A,
            {
                className: d()(ab.aK, o ? ab.Ke : ab.hO),
                contentClassName: o ? ab.Ew : ab.rD,
                isUnread: a,
                id: a ? e7.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? i}`,
        )
    );
}
var aR = n(383233),
    aD = n(309010),
    aL = n(927813),
    aP = n(675171),
    ak = n(806621),
    aO = n(636922);
n(801541);
var aG = n(889137),
    aU = n(952270),
    aw = n(428678),
    aF = n(353182),
    aH = n(888675),
    aB = n(21623);
function aV(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: s, canUncollapse: a = !0 } = e,
        o = (0, aG.YW)({ collapsedReason: s })
            .with({ collapsedReason: en.t["VFWjc+"] }, () =>
                (0, r.jsx)(aU.G, { size: "md", color: "currentColor", className: aB.Q6 }),
            )
            .with({ collapsedReason: en.t["+FcYM/"] }, () =>
                (0, r.jsx)(aw.K, { size: "md", color: "currentColor", className: aB.Q6 }),
            )
            .with({ collapsedReason: en.t.rHRovo }, () =>
                (0, r.jsx)(aF._, { size: "md", color: "currentColor", className: aB.TG }),
            )
            .otherwise(() => (0, r.jsx)(lS.P, { size: "md", color: "currentColor", className: aB.Q6 }));
    return (0, r.jsx)(tC.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, r.jsx)(aH.A, {
            compact: i,
            className: aB.L9,
            iconNode: o,
            children: (0, r.jsxs)("div", {
                className: a ? aB.Fo : aB.GU,
                children: [
                    en.intl.format(s, { count: l }),
                    a &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " \u2014 ",
                                (0, r.jsx)(ti.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: aB.rB,
                                    children: t ? en.intl.string(en.t.fgq1gs) : en.intl.string(en.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let aK = o.memo(function (e) {
    let { messages: t, channel: n, compact: l = !1, unreadId: i, collapsedReason: s, canUncollapse: a = !0 } = e,
        { hasJumpTarget: c = !1 } = t,
        [u, h] = o.useState(c && a),
        m = o.useCallback(() => {
            a && h((e) => !e);
        }, [a]);
    o.useEffect(() => {
        c && a && h(!0);
    }, [c, a]);
    let A = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, r.jsxs)("div", {
        className: d()({ [nH._A]: !0, [aB.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === F.TZK.DIVIDER)
                ? (0, r.jsx)(lR.A, { isUnread: !0, id: i }, "divider")
                : null,
            (0, r.jsx)(
                aV,
                { count: A, compact: l, expanded: u, onClick: m, collapsedReason: s, canUncollapse: a },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === F.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, r.jsx)(lR.A, { isUnread: !0, isBeforeGroup: e, id: i }, "divider");
                      }
                      if (e.type === F.TZK.MESSAGE || e.type === F.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === F.TZK.THREAD_STARTER_MESSAGE ? n9 : lt;
                          return (0, r.jsx)(
                              t,
                              {
                                  id: (0, e4.j)(n.id, e.content.id),
                                  className: aB.__invalid_blocked,
                                  compact: l,
                                  channel: n,
                                  message: e.content,
                                  groupId: e.groupId,
                                  flashKey: e.flashKey,
                                  isLastItem: !1,
                                  renderContentOnly: !1,
                              },
                              e.content.id,
                          );
                      }
                  })
                : null,
        ],
    });
});
var az = n(34337),
    aW = n(330001),
    a$ = n(631576),
    aq = n(750385),
    aJ = n(148355),
    aZ = n(310876);
let aY = "749054660769218631";
function aX(e) {
    let { channel: t } = e,
        [n, l] = o.useState("");
    o.useEffect(() => {
        (0, a$.zk)("847199849233514549", !0);
    }, []);
    let i = (0, m.bG)(
            [eP.A, eM.default],
            () =>
                !!K()(eP.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== eM.default.getId() && e.state === F.cmJ.SENT && !(0, tA.A)(e)),
        ),
        s = (0, m.bG)([eU.default], () => eU.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        a = lw.Ay.useName(s) ?? en.intl.string(en.t.y1Wu2f),
        c = (0, m.bG)([aq.A], () => aq.A.getStickerById(aY)),
        d = o.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    (0, aW.W)({ channelId: t.id, source: "In-channel greet" }), await I.A.sendGreetMessage(t.id, aY);
                } catch (e) {
                    e.ok || 429 !== e.status || l(en.intl.string(en.t.Whhv4w));
                }
        }, [t.id, n]),
        u = en.intl.formatToPlainString(en.t.m0zYbV, { username: a }),
        h =
            null != n && "" !== n
                ? (0, r.jsx)(Y.E, {
                      className: aZ.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return i
        ? (0, r.jsxs)("div", {
              className: aZ.ft,
              children: [
                  (0, r.jsxs)(ti.D, {
                      className: null != n && "" !== n ? aZ.AO : aZ.Iq,
                      "aria-label": en.intl.string(en.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, r.jsx)(aJ.A, { sticker: c, size: 24 }),
                          (0, r.jsx)(Y.E, { className: aZ.Qq, variant: "text-md/medium", children: u }),
                      ],
                  }),
                  h,
              ],
          })
        : (0, r.jsxs)("div", {
              className: aZ.nj,
              children: [
                  (0, r.jsx)(aJ.A, { sticker: c, size: 160, className: aZ.Xr }),
                  (0, r.jsx)(lx.$, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: d,
                      disabled: !!n,
                      text: u,
                  }),
                  h,
              ],
          });
}
var aQ = n(900210),
    a0 = n(626360);
function a1(e) {
    return null != e && e.type === F.TZK.MESSAGE && e.content.id === e.groupId;
}
let a2 = o.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: i, compact: s } = e;
    return (0, r.jsx)(aO.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new aR.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: F.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, r.jsx)(lT.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var a3 = n(408899);
let a4 = (0, u.animated)(S),
    a7 = o.memo(
        function (e) {
            var t;
            let n,
                l,
                i,
                {
                    className: s,
                    messageGroupSpacing: a,
                    scrollerClassName: c,
                    channel: u,
                    messages: A,
                    unreadCount: g,
                    showNewMessagesBar: p,
                    messageDisplayCompact: f,
                    channelStream: C,
                    uploads: E,
                    hasUnreads: x,
                    editingMessageId: S,
                    fontSize: b,
                    keyboardModeEnabled: v,
                    filterAfterTimestamp: M,
                    showingQuarantineBanner: R,
                    hideSummaries: D = !1,
                    jumpBarClassName: L,
                    typingGradient: O,
                } = e,
                [G, U] = o.useState(eR.A.isAtBottom(u.id) ?? !1),
                w = (0, P.Ay)(u),
                H = (0, eY.I)(f, b),
                B = f ? H : Math.round(0.87 * H),
                V = Math.max(1, Math.round((B / 30) * 8)),
                W = o.useMemo(
                    () =>
                        (function (e) {
                            let {
                                compact: t,
                                messageGroups: n,
                                groupRange: l,
                                attachments: i,
                                fontSize: s,
                                groupSpacing: a,
                            } = e;
                            if (i > n)
                                throw Error(
                                    `generateMessageSpecs: too many attachments relative to messageGroups: ${n}, ${i}`,
                                );
                            let r = s / F.hH7.FONT_SIZE_DEFAULT,
                                o = t ? eX.BP : eX.B5,
                                c = t ? eX.Uj : eX._G,
                                d = 0,
                                u = Array(n)
                                    .fill(null)
                                    .map(() => {
                                        let e = K().random(1, l);
                                        return (d += a * r), (d += o * r), (d += (e - 1) * c * r), e;
                                    }),
                                h = u.map((e, t) => t),
                                m = [];
                            for (; m.length < i; ) {
                                let e = { width: K().random(140, 400), height: K().random(100, 320) };
                                m.push([h.splice(K().random(0, h.length - 1), 1)[0], e]), (d += e.height + eX.VF * r);
                            }
                            return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                        })({
                            compact: f,
                            messageGroups: B,
                            groupRange: 4,
                            attachments: V,
                            fontSize: b,
                            groupSpacing: a,
                        }),
                    [f, B, V, b, a],
                ),
                $ = (function (e) {
                    let {
                            messages: t,
                            channel: n,
                            compact: l,
                            hasUnreads: i,
                            focusId: s,
                            placeholderHeight: a,
                            canLoadMore: r = !0,
                            handleScrollToBottom: c,
                            handleScrollFromBottom: d,
                            additionalMessagePadding: u = 0,
                        } = e,
                        { windowId: h } = o.useContext(e9.Ay),
                        [m] = o.useState(
                            () =>
                                new ls({
                                    messages: t,
                                    channel: n,
                                    compact: l,
                                    hasUnreads: i,
                                    focusId: s,
                                    placeholderHeight: a,
                                    canLoadMore: r,
                                    windowId: h,
                                    handleScrollToBottom: c,
                                    handleScrollFromBottom: d,
                                    additionalMessagePadding: u,
                                }),
                        );
                    return (
                        m.getSnapshotBeforeUpdate(s),
                        o.useLayoutEffect(() =>
                            m.mergePropsAndUpdate({
                                messages: t,
                                channel: n,
                                compact: l,
                                hasUnreads: i,
                                focusId: s,
                                placeholderHeight: a,
                                canLoadMore: r,
                                windowId: h,
                                handleScrollToBottom: c,
                                handleScrollFromBottom: d,
                                additionalMessagePadding: u,
                            }),
                        ),
                        o.useLayoutEffect(() => () => m.cleanup(), [m]),
                        m
                    );
                })({
                    messages: A,
                    channel: u,
                    compact: f,
                    hasUnreads: x,
                    focusId: S,
                    placeholderHeight: W.totalHeight,
                    canLoadMore: null == M,
                    handleScrollToBottom: o.useCallback(() => U(!0), [U]),
                    handleScrollFromBottom: o.useCallback(() => U(!1), [U]),
                    additionalMessagePadding: 48,
                }),
                q = (0, k.sV)(u.guild_id, "scrollbar_chips"),
                J = (function (e) {
                    let { scrollerRef: t, ...n } = e,
                        l = (0, N.A)(() => {
                            let e = t.current;
                            return null == e
                                ? Promise.resolve()
                                : new Promise((t) => {
                                      e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                                  });
                        }),
                        i = (0, N.A)(() => {
                            let e = t.current;
                            return null == e
                                ? Promise.resolve()
                                : new Promise((t) => {
                                      e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                                  });
                        }),
                        s = o.useCallback(
                            (e) => {
                                if (!n.keyboardModeEnabled) return;
                                let l = t.current?.getScrollerNode()?.ownerDocument,
                                    i = l?.querySelector(e);
                                null != i &&
                                    t.current?.scrollIntoViewNode({
                                        node: i,
                                        padding: 4 * e7.mZ,
                                        callback: () => i?.focus(),
                                    });
                            },
                            [n.keyboardModeEnabled, t],
                        ),
                        a = o.useCallback(() => {
                            n.hasMoreAfter || e3._.dispatchToLastSubscribed(F.jej.TEXTAREA_FOCUS);
                        }, [n.hasMoreAfter]),
                        r = (0, e2.Ay)({
                            id: e4.D,
                            preserveFocusPosition: !1,
                            setFocus: s,
                            isEnabled: n.keyboardModeEnabled && !n.isEditing,
                            scrollToStart: i,
                            scrollToEnd: l,
                            onNavigateNextAtEnd: a,
                        }),
                        c = o.useCallback(
                            (e) => {
                                let { atEnd: t = !1 } = e;
                                t ? r.focusLastVisibleItem() : r.focusFirstVisibleItem();
                            },
                            [r],
                        );
                    return (0, ew.Vo)({ event: F.jej.FOCUS_MESSAGES, handler: c }), r;
                })({ scrollerRef: $.ref, isEditing: null != S, keyboardModeEnabled: v, hasMoreAfter: A.hasMoreAfter }),
                Z = (0, m.bG)([ej.A], () =>
                    ek.A.can(F.xBc.READ_MESSAGE_HISTORY, u) ? null : ej.A.getViewingRolesTimestamp(u.getGuildId()),
                ),
                {
                    channelStreamMarkup: X,
                    newMessagesBar: Q,
                    jumpToPresentBar: ee,
                    forumPostActionBar: et,
                    safetyWarningBanner: el,
                } = (function (e) {
                    let t,
                        n,
                        l,
                        i,
                        {
                            channel: s,
                            messages: a,
                            unreadCount: c,
                            showNewMessagesBar: d,
                            messageDisplayCompact: u,
                            channelStream: h,
                            uploads: A,
                            scrollManager: g,
                            specs: p,
                            filterAfterTimestamp: f,
                            showingQuarantineBanner: C,
                            hideSummaries: E,
                            jumpBarClassName: x,
                        } = e,
                        S = eU.default.getCurrentUser(),
                        _ = () => g.isInitialized() || a.ready,
                        N = (0, ak.r)(s),
                        b = a.length > 0 && a.first()?.isFirstMessageInForumPost(s),
                        v = (0, y.cI)(s),
                        M = (0, m.bG)([eb.A], () => eb.A.shouldShowTopicsBar() && !E),
                        R = (0, aE.l)(s.id),
                        D = (0, ap.j)(s.id, af.Rx),
                        L = (0, lr.E)(s.id),
                        P = (0, aP.A)(),
                        k = (function (e, t) {
                            if (e.isDM() && null != t)
                                if (t.type === lf._j.STRANGER_DANGER)
                                    return (0, r.jsx)(aS, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                                else if (t.type === lf._j.LIKELY_ATO)
                                    return (0, r.jsx)(lj, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                                else
                                    return (0, r.jsx)(aC, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                            return null;
                        })(s, R ?? D ?? L),
                        O = s.isForumPost() && !b ? (0, r.jsx)(am, { postId: s.id }) : null,
                        G = (0, lk.A)(s.id),
                        U = (0, sY.W1)(s);
                    (t = em.Sf.useSetting()),
                        (n = (0, sD.bG)([j.A], () => j.A.useReducedMotion)),
                        o.useEffect(() => {
                            function e(e) {
                                let { messageId: l, channelId: i, emoji: s, optimistic: a, reactionType: r } = e;
                                a ||
                                    r !== sF.v.BURST ||
                                    !t ||
                                    n ||
                                    (0, np.on)({ channelId: i, messageId: l, emoji: s, key: aQ.W.EXTERNAL });
                            }
                            return (
                                T.h.subscribe("MESSAGE_REACTION_ADD", e),
                                () => {
                                    T.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                                }
                            );
                        }, [t, n]);
                    let w = null,
                        H = [],
                        B = h.map((e, t) => {
                            if (e.type === F.TZK.DIVIDER) {
                                let n = null != e.unreadId;
                                return null != f
                                    ? null
                                    : e.isConversationDivider
                                      ? (0, r.jsx)(
                                            lL,
                                            { index: t, item: e, channel: s },
                                            `conv-divider-${e.contentKey ?? t}`,
                                        )
                                      : e.isSummaryDivider
                                        ? (0, r.jsx)(aM, {
                                              index: t,
                                              item: e,
                                              channel: s,
                                              isBeforeGroup: null == e.content && a1(h[t + 1]),
                                          })
                                        : (0, r.jsx)(
                                              lR.A,
                                              {
                                                  isUnread: n,
                                                  isBeforeGroup: null == e.content && a1(h[t + 1]),
                                                  id: n ? e7.q4 : void 0,
                                                  itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                                  children: e.content,
                                              },
                                              `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                          );
                            }
                            if (e.type === F.TZK.FORUM_POST_ACTION_BAR)
                                return (0, r.jsx)(
                                    am,
                                    {
                                        parentChannelId: s.parent_id,
                                        postId: s.id,
                                        isLastItem: t + 1 === h.length,
                                        isFirstMessage: !0,
                                    },
                                    `forum-post-action-bar-${s.id}`,
                                );
                            if (
                                e.type === F.TZK.MESSAGE_GROUP_BLOCKED ||
                                e.type === F.TZK.MESSAGE_GROUP_IGNORED ||
                                e.type === F.TZK.MESSAGE_GROUP_SPAMMER ||
                                e.type === F.TZK.MESSAGE_GROUP_SUSPENDED_USER
                            ) {
                                let t,
                                    n = !0;
                                return (
                                    e.type === F.TZK.MESSAGE_GROUP_BLOCKED
                                        ? (t = en.t["+FcYM/"])
                                        : e.type === F.TZK.MESSAGE_GROUP_IGNORED
                                          ? (t = en.t["VFWjc+"])
                                          : e.type === F.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                            ? ((t = en.t.rHRovo), (n = !1))
                                            : (t = en.t.xfkfTK),
                                    (0, r.jsx)(
                                        aK,
                                        {
                                            unreadId: e7.q4,
                                            messages: e,
                                            channel: s,
                                            compact: u,
                                            collapsedReason: t,
                                            canUncollapse: n,
                                        },
                                        e.key,
                                    )
                                );
                            }
                            if (null != f && f > e.content.timestamp.getTime() * aL.A.Millis.SECOND) return;
                            e.type === F.TZK.MESSAGE && null == w && (w = e);
                            let n = e.groupId === w?.groupId ? w.content.id : e.groupId,
                                l = U && e.content.isFirstMessageInForumPost(s),
                                i = e.type === F.TZK.THREAD_STARTER_MESSAGE ? n9 : lt;
                            return (0, r.jsx)(
                                i,
                                {
                                    compact: u && !l,
                                    channel: s,
                                    message: e.content,
                                    groupId: n,
                                    flashKey: e.flashKey,
                                    id: (0, e4.j)(s.id, e.content.id),
                                    isLastItem: t >= h.length - 1,
                                    renderContentOnly: G || l,
                                },
                                e.content.id,
                            );
                        });
                    H.push(...B);
                    let V = h[h.length - 1];
                    if (
                        (null != S &&
                            A.forEach((e, t) => {
                                let n = 0 === t && (0, eB.l)(s, V, new aR.Ay({ type: F.lAJ.DEFAULT, author: S }));
                                H.push(
                                    (0, r.jsx)(
                                        a2,
                                        { file: e, channel: s, user: S, isGroupStart: n, compact: u },
                                        `upload-${e.id}`,
                                    ),
                                );
                            }),
                        a.hasMoreBefore && null == f)
                    ) {
                        a.length > 0 &&
                            H.unshift((0, r.jsx)("div", { style: { height: e7.N0, flex: "0 0 auto" } }, "buffer"));
                        let { useReducedMotion: e } = j.A;
                        ((e && _()) || !e) && H.unshift((0, r.jsx)(e0, { compact: u, ...p }, "has-more"));
                    }
                    if (
                        ((a.hasMoreBefore && null == f) ||
                            H.unshift((0, r.jsx)(s_, { channel: s, showingBanner: C }, "empty-message")),
                        a.hasMoreAfter && H.push((0, r.jsx)(e0, { compact: u, ...p }, "has-more-after")),
                        !C && N && _() && H.push((0, r.jsx)(aX, { channel: s })),
                        c > 0 && d && _())
                    ) {
                        let e,
                            t,
                            n = eO.Ay.getOldestUnreadTimestamp(s.id),
                            i = 0 !== n ? n : z.default.extractTimestamp(s.id),
                            a = (0, eA.ro)(new Date(), new Date(i));
                        if (
                            (eO.Ay.isEstimated(s.id)
                                ? ((e = a ? en.t.wvtbbG : en.t.tHqbtg), (t = en.t.vaPWFe))
                                : ((e = a ? en.t["BctFH/"] : en.t["3wXb9P"]), (t = en.t["4H8ldG"])),
                            v && (0, y.Kc)(s) && P.includes(a0.i.SUMMARIES))
                        ) {
                            let n = eO.Ay.ackMessageId(s.id),
                                a = (function (e, t) {
                                    let n = eb.A.summaries(e) ?? [],
                                        l = 0;
                                    for (let e of n) z.default.compare(e.endId, t) > 0 && (l += 1);
                                    return l;
                                })(s.id, eO.Ay.getOldestUnreadMessageId(s.id));
                            if (
                                ((0, la.zV)(F.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                                    num_unread_summaries: a,
                                    num_unread_messages: c,
                                    last_ack_message_id: n,
                                    summaries_enabled_by_user: M,
                                    summaries_enabled_for_channel: (0, y.pk)(s),
                                }),
                                (0, y.pk)(s))
                            ) {
                                let n = M
                                    ? en.intl.format(t, { count: c })
                                    : en.intl.format(e, { count: c, timestamp: i });
                                if (M) {
                                    let e =
                                        a > 0
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(Y.E, {
                                                          variant: "text-sm/medium",
                                                          color: "currentColor",
                                                          children: en.intl.format(t, { count: c }),
                                                      }),
                                                      (0, r.jsx)(aA.A, {
                                                          style: { paddingLeft: 8, paddingRight: 8 },
                                                          height: 4,
                                                          width: 4,
                                                      }),
                                                      (0, r.jsx)(Y.E, {
                                                          variant: "text-sm/medium",
                                                          color: "currentColor",
                                                          children: en.intl.format(en.t.CBftDc, { count: a }),
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(Y.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: n,
                                              });
                                    l = (0, r.jsx)(az.OZ, { scrollManager: g, content: e, channel: s });
                                } else {
                                    let e = (0, r.jsx)("div", {
                                        style: { display: "flex", textTransform: "none", alignItems: "center" },
                                        children:
                                            a > 0
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(Y.E, {
                                                              variant: "text-sm/medium",
                                                              color: "currentColor",
                                                              children: en.intl.format(t, { count: c }),
                                                          }),
                                                          (0, r.jsx)(aA.A, {
                                                              style: { paddingLeft: 8, paddingRight: 8 },
                                                              height: 4,
                                                              width: 4,
                                                          }),
                                                          (0, r.jsx)(Y.E, {
                                                              variant: "text-sm/medium",
                                                              color: "currentColor",
                                                              children: en.intl.format(en.t.CBftDc, { count: a }),
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(Y.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: n,
                                                  }),
                                    });
                                    l = (0, r.jsx)(az.GN, { content: e, channelId: s.id });
                                }
                            }
                        } else
                            P.includes(a0.i.NEW_MESSAGES) &&
                                (l = (0, r.jsx)(az.GN, {
                                    content: en.intl.format(e, { count: c, timestamp: i }),
                                    channelId: s.id,
                                }));
                    }
                    if (
                        (null == l &&
                            (0, y.pk)(s) &&
                            M &&
                            P.includes(a0.i.SUMMARIES) &&
                            (l = (0, r.jsx)(az.UK, { channel: s, scrollManager: g })),
                        a.error)
                    )
                        i = (0, r.jsx)(az.Ez, {
                            loading: a.loadingMore,
                            onClick: () => {
                                var e;
                                return (
                                    (e = s.id),
                                    void I.A.fetchMessages({
                                        channelId: e,
                                        limit: (0, eY.h)("renderStream.reload"),
                                        truncate: !0,
                                    })
                                );
                            },
                            className: x,
                        });
                    else if (a.hasMoreAfter && _()) {
                        let { jumpReturnTargetId: e } = a;
                        i =
                            a.loadingMore && a.jumpedToPresent
                                ? (0, r.jsx)(az.Ab, { className: x })
                                : null != e
                                  ? (0, r.jsx)(az.Ab, {
                                        type: az.ks.REPLY,
                                        onClick: () => {
                                            I.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                        },
                                        className: x,
                                    })
                                  : (0, r.jsx)(az.Ab, {
                                        onClick: () => {
                                            let e;
                                            return (
                                                I.A.jumpToPresent(s.id, (0, eY.h)("renderStream.jumpToPresent")),
                                                (e = aD.A.getChannelId()),
                                                void (s.id === e && (0, ag.iN)(s.id))
                                            );
                                        },
                                        className: x,
                                    });
                    }
                    return {
                        channelStreamMarkup: H,
                        newMessagesBar: l,
                        jumpToPresentBar: i,
                        forumPostActionBar: O,
                        safetyWarningBanner: k,
                    };
                })({
                    channel: u,
                    messages: A,
                    unreadCount: g,
                    showNewMessagesBar: p,
                    messageDisplayCompact: f,
                    channelStream: C,
                    uploads: E,
                    loadMore: $.loadMore,
                    scrollManager: $,
                    specs: W,
                    filterAfterTimestamp: M ?? Z,
                    showingQuarantineBanner: R,
                    hideSummaries: D,
                    jumpToPresent: () => {
                        A.hasPresent()
                            ? $.ref.current?.scrollToBottom({ animate: !j.A.useReducedMotion })
                            : I.A.jumpToPresent(u.id, H);
                    },
                    jumpBarClassName: L,
                });
            (t = $.ref),
                (n = o.useCallback(() => t.current?.scrollToBottom(), [t])),
                (l = o.useCallback(() => t.current?.scrollPageUp({ animate: !j.A.useReducedMotion }), [t])),
                (i = o.useCallback(() => t.current?.scrollPageDown({ animate: !j.A.useReducedMotion }), [t])),
                (0, ew.Vo)({ event: F.jej.SCROLLTO_PRESENT, handler: n }),
                (0, ew.Vo)({ event: F.jej.SCROLL_PAGE_UP, handler: l }),
                (0, ew.Vo)({ event: F.jej.SCROLL_PAGE_DOWN, handler: i });
            let ei = (0, _.R7)(),
                { ref: es, ...ea } = (0, h.LT)(J),
                er = (0, N.A)((e) => {
                    ($.ref.current = e), (es.current = e?.getScrollerNode() ?? null);
                }),
                eo = (0, m.bG)([ev.A], () => {
                    let e = ev.A.settings.appearance?.clientThemeSettings;
                    return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
                }),
                ec = o.useMemo(() => (O ? (G ? a3.gA : a3.ru) : a3.Zd), [O, G]),
                ed = o.useMemo(() => (O ? (G ? a3.cz : a3.XF) : a3.U6), [O, G]);
            return (0, r.jsxs)(h.hD, {
                navigator: J,
                children: [
                    null != el && el,
                    (0, r.jsxs)("div", {
                        className: d()(a3.Og, s, `group-spacing-${a}`),
                        children: [
                            null == el && Q,
                            (0, r.jsxs)(a4, {
                                ref: er,
                                customTheme: !0,
                                className: d()(c, a3.XG, eo ? ed : void 0),
                                contentClassName: a3.gT,
                                onResize: $.handleResize,
                                onScroll: $.handleScroll,
                                onMouseDown: $.handleMouseDown,
                                onMouseUp: $.handleMouseUp,
                                ...ei,
                                tabIndex: -1,
                                role: "group",
                                children: [
                                    et,
                                    (0, r.jsxs)("ol", {
                                        className: a3.bv,
                                        "aria-label": en.intl.formatToPlainString(en.t.XarRiL, {
                                            channelName: w ?? "",
                                        }),
                                        ...ea,
                                        children: [
                                            (0, r.jsx)("span", {
                                                className: a3.$4,
                                                id: "messagesNavigationDescription",
                                                "aria-hidden": !0,
                                                children: en.intl.string(en.t["Spb3s/"]),
                                            }),
                                            X,
                                            (0, r.jsx)("div", {
                                                className: d()({
                                                    [a3.lB]: !R,
                                                    [a3.Ie]: 0 === A.length && !A.loadingMore,
                                                    [a3.Fb]:
                                                        1 === A.length &&
                                                        !A.loadingMore &&
                                                        u.isForumPost() &&
                                                        A.first()?.isFirstMessageInForumPost(u),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            eo ? null : (0, r.jsx)("div", { className: ec }),
                            ee,
                            q && (0, r.jsx)(eI, { channel: u, scrollManager: $ }),
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    a8 = o.memo(function (e) {
        let {
                channel: t,
                showingQuarantineBanner: n,
                hideSummaries: l = !1,
                forceCompact: i = !1,
                forceCozy: s = !1,
                typingGradient: a = !1,
                ...c
            } = e,
            {
                canManageMessages: d,
                permissionVersion: u,
                canChat: h,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, m.bG)([eL.A], () => null == t || eL.A.canChatInGuild(t), [t]),
                    { canManageMessages: l, permissionVersion: i } = (0, m.cf)(
                        [ek.A],
                        () => ({
                            canManageMessages: ek.A.can(F.xBc.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? ek.A.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return { canChat: n, permissionVersion: i, canManageMessages: l };
            })(t),
            {
                messageGroupSpacing: A,
                fontSize: g,
                messageDisplayCompact: p,
                renderSpoilers: f,
                keyboardModeEnabled: C,
            } = (function () {
                let e = em.hH.useSetting(),
                    t = em.gs.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: l,
                        keyboardModeEnabled: i,
                    } = (0, m.cf)([j.A], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = j.A;
                        return { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n };
                    });
                return {
                    messageGroupSpacing: n,
                    messageDisplayCompact: e,
                    renderSpoilers: t,
                    fontSize: l,
                    keyboardModeEnabled: i,
                };
            })(),
            {
                messages: E,
                channelStream: x,
                oldestUnreadMessageId: S,
                editingMessageId: _,
            } = (function (e) {
                var t;
                let n,
                    l = (0, m.bG)([eP.A], () => eP.A.getMessages(e.id), [e.id]),
                    i = (0, m.bG)([eO.Ay], () => eO.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                    { enabled: s } = eN.A.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    a = eU.default.getUser(eM.default.getId())?.hasFlag(F.nhx.SPAMMER) ?? !1,
                    r = (0, y.cI)(e),
                    c = (0, ey.A)("use_topic_dividers_in_chat"),
                    d = (0, m.yK)([eb.A], () => (r && c ? (eb.A.summaries(e.id) ?? []) : []), [r, e.id, c]),
                    u = (0, m.bG)([eb.A], () => (r ? eb.A.selectedSummary(e.id) : null), [r, e.id]),
                    h = (0, k.Lw)(e.getGuildId(), "message_stream"),
                    A = (0, m.bG)([O.A], () => (h ? O.A.getSelectedConversation(e.id) : null), [h, e.id]),
                    g =
                        ((t = l),
                        (n = o.useMemo(() => {
                            let e = new Set();
                            return (
                                t.forEach((t) => {
                                    null != t.applicationId && null == t.application && e.add(t.applicationId);
                                }),
                                Array.from(e)
                            );
                        }, [t])),
                        (0, L.A)(n));
                !(function (e, t) {
                    let [n, l] = (function (e, t) {
                        let [n, l] = o.useMemo(
                                () =>
                                    (function (e, t) {
                                        if (!t.isPrivate()) return [D, R];
                                        let n = e.filter(
                                                (e) => e.application?.id != null && e.activity?.party_id != null,
                                            ),
                                            l = n.map((e) => e.id);
                                        return [n, l];
                                    })(e, t),
                                [e, t],
                            ),
                            i = (0, m.yK)([v.A], () => {
                                let e = [];
                                return (
                                    n.forEach((t) => {
                                        null !=
                                            v.A.findActivity(
                                                t.author.id,
                                                (e) =>
                                                    e.application_id === t.application?.id &&
                                                    e.party?.id === t.activity?.party_id,
                                                null,
                                                !0,
                                            ) && e.push(t.id);
                                    }),
                                    e
                                );
                            }, [n]);
                        return [
                            l,
                            o.useMemo(
                                () =>
                                    (function (e, t) {
                                        if (0 === e.length) return M;
                                        let n = [];
                                        return (
                                            e.forEach((e) => {
                                                let l = e.application?.id,
                                                    i = e.activity?.party_id;
                                                if (e.id in t || null == l || null == i) return;
                                                let s = e.timestamp.getTime(),
                                                    a = {
                                                        userId: e.author.id,
                                                        applicationId: l,
                                                        partyId: i,
                                                        messageId: e.id,
                                                        channelId: e.channel_id,
                                                        inviteTime: s,
                                                    };
                                                n.push(a);
                                            }),
                                            n
                                        );
                                    })(n, i),
                                [n, i],
                            ),
                        ];
                    })(e, t);
                    o.useEffect(() => {
                        for (let e of l)
                            b.A.isSubscribed(e) ||
                                T.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                    }, [l]);
                })(l, e);
                let p = o.useMemo(
                    () =>
                        (function (e) {
                            let t,
                                n,
                                l,
                                {
                                    channel: i,
                                    messages: s,
                                    oldestUnreadMessageId: a,
                                    treatSpam: r,
                                    summaries: o,
                                    selectedSummary: c,
                                    selectedConversation: d,
                                } = e,
                                u = [],
                                h = !1,
                                m = null != a ? z.default.extractTimestamp(a) : null,
                                A = null;
                            return (
                                s.forEach((e) => {
                                    var g, p;
                                    let f, C, E;
                                    if (null != o && o.length > 0) {
                                        let t = z.default.extractTimestamp(e.id);
                                        for (let e = 0; e < o?.length; e++) {
                                            if (null == o[e]) continue;
                                            let n = z.default.extractTimestamp(o[e].startId),
                                                l = z.default.extractTimestamp(o[e].endId);
                                            if (t >= n && t <= l) {
                                                if (A === o[e].id) break;
                                                u.push({
                                                    type: F.TZK.DIVIDER,
                                                    content: o[e].topic,
                                                    contentKey: o[e].id,
                                                }),
                                                    (A = o[e].id);
                                                break;
                                            }
                                        }
                                    }
                                    let x = (0, eA.i$)(e.timestamp, "LL");
                                    x !== t &&
                                        null == A &&
                                        (u.push({ type: F.TZK.DIVIDER, content: x, contentKey: x }), (t = x));
                                    let S = u[u.length - 1],
                                        _ = null,
                                        I = (0, eV.kf)(e);
                                    h = h || I;
                                    let y = (function (e, t, n) {
                                        if (eH.M.NON_COLLAPSIBLE.has(t.type));
                                        else if (t.hasFlag(F.pr7.HIDDEN_SUSPENDED_USER))
                                            return F.TZK.MESSAGE_GROUP_SUSPENDED_USER;
                                        else if (t.blocked) return F.TZK.MESSAGE_GROUP_BLOCKED;
                                        else if (t.ignored) return F.TZK.MESSAGE_GROUP_IGNORED;
                                        else if ((0, eV.iJ)(e) && n) return F.TZK.MESSAGE_GROUP_SPAMMER;
                                        return null;
                                    })(i, e, I && r);
                                    (null !== y &&
                                        ([_, S] =
                                            ((C = g = S),
                                            null == g || g.type !== y
                                                ? ((f = { type: y, content: [], key: e.id }), u.push(f))
                                                : (C = (f = g).content[f.content.length - 1]),
                                            [f, C])),
                                    a === e.id && null != m)
                                        ? (null != S && S.type === F.TZK.DIVIDER
                                              ? (S.unreadId = e.id)
                                              : null !== _
                                                ? ((p = _),
                                                  e.isFirstMessageInForumPost(i) ||
                                                      p.content.push({ type: F.TZK.DIVIDER, unreadId: e.id }),
                                                  (p.hasUnread = !0))
                                                : e.isFirstMessageInForumPost(i) ||
                                                  u.push({ type: F.TZK.DIVIDER, unreadId: e.id }),
                                          (m = null))
                                        : null != m &&
                                          z.default.extractTimestamp(e.id) > m &&
                                          (e.isFirstMessageInForumPost(i) ||
                                              u.push({ type: F.TZK.DIVIDER, unreadId: e.id }),
                                          (m = null));
                                    let N =
                                        null !=
                                        (E = (function (e, t) {
                                            if (eJ.get(t.id) === e.id) return eZ(e, t.id);
                                            if (
                                                null == e.applicationId ||
                                                !(0, ez.Lt)(e.flags, F.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                !t.isDM() ||
                                                e.author.id === eM.default.getId() ||
                                                null != e.activity ||
                                                (0, ez.Lt)(t.recipientFlags ?? 0, eK.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
                                                eJ.has(t.id)
                                            )
                                                return null;
                                            let n = eZ(e, t.id);
                                            eJ.set(t.id, e.id);
                                            let l = (0, ez.lA)(
                                                t.recipientFlags ?? 0,
                                                eK.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                !0,
                                            );
                                            return eW.A.updatePrivateChannelRecipientFlags(t.id, l), n;
                                        })(e, i))
                                            ? { message: E, position: "before" }
                                            : null;
                                    null != N &&
                                        "before" === N.position &&
                                        u.push({ type: F.TZK.MESSAGE, content: N.message, groupId: N.message.id });
                                    let j = S?.type === F.TZK.MESSAGE ? l : S;
                                    (0, eB.l)(i, j, e) && (n = e.id);
                                    let T = {
                                        type:
                                            e.type === F.lAJ.THREAD_STARTER_MESSAGE
                                                ? F.TZK.THREAD_STARTER_MESSAGE
                                                : F.TZK.MESSAGE,
                                        content: e,
                                        groupId: n,
                                    };
                                    n === e.id && (l = T);
                                    let { jumpSequenceId: b, jumpFlash: v, jumpTargetId: M } = s;
                                    v && e.id === M && null != b && (T.flashKey = b),
                                        s.jumpTargetId === e.id && (T.jumpTarget = !0),
                                        null != c &&
                                            e.id === c.startId &&
                                            c.count > 1 &&
                                            u.push({
                                                type: F.TZK.DIVIDER,
                                                content: c.topic,
                                                contentKey: c.startId,
                                                isSummaryDivider: !0,
                                            }),
                                        null != d &&
                                            e.id === d.startMessageId &&
                                            d.messageCount > 1 &&
                                            u.push({
                                                type: F.TZK.DIVIDER,
                                                content: d.title,
                                                contentKey: `conv-start-${d.id}`,
                                                isConversationDivider: !0,
                                            }),
                                        null !== _
                                            ? (_.content.push(T), T.jumpTarget && (_.hasJumpTarget = !0))
                                            : u.push(T),
                                        e.isFirstMessageInForumPost(i) && u.push({ type: F.TZK.FORUM_POST_ACTION_BAR }),
                                        null != N &&
                                            "after" === N.position &&
                                            u.push({ type: F.TZK.MESSAGE, content: N.message, groupId: N.message.id }),
                                        null != c &&
                                            e.id === c.endId &&
                                            c.count > 1 &&
                                            u.push({ type: F.TZK.DIVIDER, contentKey: c.endId, isSummaryDivider: !0 }),
                                        null != d &&
                                            e.id === d.endMessageId &&
                                            d.messageCount > 1 &&
                                            u.push({
                                                type: F.TZK.DIVIDER,
                                                contentKey: `conv-end-${d.id}`,
                                                isConversationDivider: !0,
                                            });
                                }),
                                h && (0, eV.iJ)(i) && eN.A.trackExposure({ location: "416cc9_1" }),
                                u
                            );
                        })({
                            channel: e,
                            messages: l,
                            oldestUnreadMessageId: i,
                            treatSpam: s && !a,
                            summaries: d,
                            selectedSummary: u,
                            selectedConversation: A,
                        }),
                    [l, e, i, s, d, u, A, g, a],
                );
                return {
                    messages: l,
                    channelStream: p,
                    oldestUnreadMessageId: i,
                    editingMessageId: (0, m.bG)([eD.A], () => eD.A.getEditingMessage(e.id)?.id),
                };
            })(t),
            I = t.getGuildId();
        return (
            o.useEffect(() => {
                null != I && k.W$.trackExposure({ guildId: I, location: "guild_entry" });
            }, [I]),
            (0, r.jsx)(eT.Bs.Provider, {
                value: (0, eF.A)(f, d),
                children: (0, r.jsx)(e1.t, {
                    children: (0, r.jsx)(a7, {
                        ...c,
                        messageGroupSpacing: A,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !s && (i || p),
                        messages: E,
                        channelStream: x,
                        permissionVersion: u,
                        uploads: (0, m.bG)([eG.A], () => eG.A.getFiles(t.id), [t]),
                        unreadCount: (0, m.bG)([eO.Ay], () => eO.Ay.getUnreadCount(t.id), [t]),
                        hasUnreads: null != S,
                        canChat: h,
                        editingMessageId: _,
                        fontSize: g,
                        keyboardModeEnabled: C,
                        showingQuarantineBanner: n,
                        hideSummaries: l,
                        typingGradient: a,
                    }),
                }),
            })
        );
    });
