(n.r(t), n.d(t, { waitForCSSLoad: () => ta, default: () => th }));
var r = n(477900),
    i = n(582128),
    s = n(17928),
    l = n(684013),
    o = n(964486),
    a = n(573435),
    d = n(626584),
    u = n(567249),
    c = n(979186),
    h = n(38502),
    f = n(309010),
    g = n(531685),
    m = n(723702),
    p = n(19575),
    A = n(9302),
    y = n(365971),
    v = n(777334),
    w = n(41984),
    x = n(973196),
    E = n(870373);
n(321073);
var b = n(503698),
    C = n.n(b),
    N = n(192308),
    O = n(939249),
    _ = n(138134),
    D = n(972213),
    I = n(328162),
    T = n(231723),
    S = n(384018),
    j = n(442433),
    k = n(793574),
    M = n(688810),
    L = n(607470),
    R = n(880144),
    P = n(616356),
    U = n(734057),
    G = n(71393),
    K = n(192820),
    W = n(532624),
    F = n(532294),
    B = n(625494),
    H = n(350535),
    V = n(589051),
    Y = n(223251),
    z = n(834730),
    J = n(257581);
function X(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: s, "data-testid": l } = e;
    return (0, r.jsxs)("div", {
        className: C()(J.UD, i),
        "data-testid": l,
        children: [
            (0, r.jsx)(O.D, {
                className: J.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(s, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(z.E, {
                      className: J.P,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}
var $ = n(554146),
    Z = n(297264),
    q = n(352255),
    Q = n(782603),
    ee = n(428689),
    et = n(7807),
    en = n(131607),
    er = n(49999),
    ei = n(660183),
    es = n(831931);
function el(e) {
    let { locked: t } = e,
        [n, s] = (0, en.kn)(t ? [] : [$.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], { bypassAutoDismiss: !0 });
    return (i.useEffect(() => {
        if (!t && n === $.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === $.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && s(er.i.AUTO_DISMISS);
            };
    }, [t, s, n]),
    t || n !== $.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: es.A,
              children: (0, r.jsxs)("div", {
                  className: es.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: es.vJ,
                          children: [
                              (0, r.jsx)(Z.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: ei.intl.string(ei.t.jzjJQg),
                              }),
                              (0, r.jsx)(z.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ei.intl.string(ei.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: es.S1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: es.bS,
                                  children: [
                                      (0, r.jsx)(q.X, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: ei.intl.string(ei.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: es.bS,
                                  children: [
                                      (0, r.jsx)(Q.BellIcon, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: ei.intl.string(ei.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: es.bS,
                                  children: [
                                      (0, r.jsx)(ee.VideoIcon, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: ei.intl.string(ei.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: es.bS,
                                  children: [
                                      (0, r.jsx)(et.J, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: ei.intl.string(ei.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var eo = n(232554),
    ea = n(351906),
    ed = n(243612),
    eu = n(391973),
    ec = n(5463),
    eh = n(129537),
    ef = n(127242),
    eg = n(968898),
    em = n(481484),
    ep = n(545807),
    eA = n(652215),
    ey = n(645280);
let ev = [],
    ew = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: l,
                renderButtons: a,
                resizeValidation: d,
                containerRenderGate: u,
                className: c,
                dragContainerClassName: f,
            } = e,
            m = (0, s.bG)([h.A], () => h.A.getWidgetConfig(t.type), [t.type]),
            p = (0, eg.RE)(t.id, eg.X1),
            A = (0, em.A)(),
            [v, x] = i.useState(() => u?.stores ?? ev);
        (0, o.Ay)(() => {
            x(u?.stores ?? ev);
        });
        let b = (0, s.bG)(v, () => u?.shouldRender({ widget: t, locked: A }) ?? !0, [u, A, t]),
            N = (0, ep.A)(),
            O = (0, s.bG)([g.A], () => g.A.windowSize((0, y.Q2)(N))),
            _ = i.useCallback((e, t, n, r, i) => {
                let s = g.A.windowSize((0, y.Q2)((0, ep.b)())),
                    l = (0, ec.NO)(n, s),
                    o = (0, ec.R9)(r, s);
                ((0, eu.uD)(t), (0, eu.Ju)({ widgetId: t, anchor: l, size: o }));
                let a = e === eh.P.MOVE,
                    d = (0, ec.Ly)(n, s.width, s.height, i.width, i.height);
                (0, E.g)(eA.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !a,
                    was_dragged: a,
                    widget_type: h.A.getWidgetType(t),
                    window_width: s.width,
                    window_height: s.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: d.left,
                    widget_top: d.top,
                });
            }, []),
            D = i.useCallback((e) => {
                (0, eu.uD)(e);
            }, []),
            { id: I, pinned: T, zIndex: S, size: j, anchor: k, minSize: M } = t,
            L = i.useMemo(() => (0, ec.fd)(j, O), [j, O]),
            R = (0, ec.Nv)(k, O),
            { resizeX: P, resizeY: U, dragAnywhere: G, constrainAutoSizeToExplicitResizeEvents: K } = m ?? {},
            W = !A,
            F = T || !A,
            B = i.useMemo(() => ({ minX: 0, minY: 0, maxX: O.width, maxY: O.height }), [O]),
            H = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: c }),
                [t, n, c],
            ),
            V = i.useCallback(
                (e) =>
                    null != l || null != a
                        ? (0, r.jsxs)("div", { className: C()(ey.vJ, p && ey.vw), children: [l?.(t), a?.(t, e)] })
                        : null,
                [t, l, p, a],
            ),
            Y = (0, s.bG)([ef.A], () => ef.A.hasRenderDebugMode(w.x7.WidgetAreas)),
            z = i.useMemo(() => {
                if (null != d) return (e) => d({ ...e, widget: t });
            }, [d, t]);
        return b
            ? (0, r.jsx)(eh.A, {
                  className: C()({ [ey.Yz]: Y, [ey.xu]: Y && !T, [ey.E]: Y && T }, f),
                  id: I,
                  size: L,
                  anchor: R,
                  container: B,
                  minSize: M ?? { width: 0, height: 0 },
                  hidden: !F,
                  locked: A,
                  resizeX: P ?? !1,
                  resizeY: U ?? !1,
                  style: { zIndex: S },
                  dragAnywhere: G ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: K ?? !1,
                  active: W,
                  onUpdate: _,
                  onClick: D,
                  targetWindow: N,
                  forceShowExtras: p,
                  renderExtras: V,
                  resizeValidation: z,
                  children: H,
              })
            : null;
    });
var ex = n(85395),
    eE = n(644434);
function eb(e) {
    return e.widget.id;
}
function eC(e, t, n, i) {
    return n === eo.wL.YEETED ? null : (0, r.jsx)(ew, { ...t, transitionState: n, cleanUp: i }, e);
}
let eN = [],
    eO = i.memo(function (e) {
        let { className: t } = e,
            n = (0, ep.A)(),
            l = (0, s.bG)([g.A], () => g.A.windowSize((0, y.Q2)(n))),
            o = (0, s.bG)(
                [h.A, ea.A],
                () => {
                    let e = h.A.getLayout(eE.GJ);
                    if (null == e) return eN;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = h.A.getWidget(n);
                        if (null == e) continue;
                        let r = ex.A[e.type];
                        null != r &&
                            (null == r.predicate || r.predicate()) &&
                            (ea.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...r }));
                    }
                    return t;
                },
                [],
                ed.VC,
            ),
            a = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: l, children: e }), [t, l]);
        return (0, r.jsx)(eo.F, { items: o, renderItem: eC, getItemKey: eb, wrapChildren: a });
    });
var e_ = n(233741),
    eD = n(222506);
let eI = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eT(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: s } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: s };
}
function eS(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var ej = n(302614),
    ek = n(296027),
    eM = n(592598),
    eL = n(237984),
    eR = n(394072),
    eP = n(528772),
    eU = n(944775),
    eG = n(317084),
    eK = n(427603),
    eW = n(980504),
    eF = n(355870);
let eB = i.memo(function () {
    let [e, t] = (0, s.yK)([eP.A], () => [eP.A.enabled, eP.A.keepOpen]),
        n = (0, s.bG)([f.Ay], () => f.Ay.getVoiceChannelId()),
        i = (0, s.bG)([U.A], () => U.A.getChannel(n), [n]),
        l = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(ej.A, {
              className: eF.k,
              children: (0, r.jsx)(eG.A, {
                  width: eW.ed.width,
                  height: eW.ed.height,
                  guildId: l,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, eK.A)();
                      null != e && (0, eU.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var eH = n(793480),
    eV = n(114994),
    eY = n(371169),
    ez = n(897720),
    eJ = n(132500);
function eX(e, t) {
    return null != e && Number.isFinite(e.width) && Number.isFinite(e.height) && e.width > 0 && e.height > 0
        ? { width: Math.round(e.width) + eE.GY.width, height: Math.round(e.height) + eE.GY.height }
        : t;
}
function e$(e, t) {
    return eX(e.overlay_widget?.min_size, t.minSize);
}
var eZ = n(155037),
    eq = n(672396),
    eQ = n(558606);
let e0 = !m.isPlatformEmbedded && !1,
    e1 = e0
        ? (0, r.jsx)(L.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: eQ.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function e2(e) {
    e.preventDefault();
}
function e3(e) {
    (0, j.L3)(
        e,
        async () => {
            let { default: e } = await n.e("386437").then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: eE.GJ, version: 4 });
        },
        { context: eA.BRT.OVERLAY },
    );
}
let e8 = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(O.D, {
            "data-testid": "overlay-background",
            "data-locked": i,
            className: C()(eQ.LK, { [eQ.Zo]: !i, [eQ.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === eA.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: e3,
            children: i
                ? null
                : (0, r.jsxs)(ej.A, {
                      className: eQ.BE,
                      children: [
                          (0, r.jsx)(X, {
                              "data-testid": "overlay-report-button",
                              onClick: () => (0, eL.b)(k.A.OVERLAY, eA.BRT.OVERLAY),
                              IconComponent: _.FlagIcon,
                          }),
                          (0, r.jsx)(X, {
                              "data-testid": "overlay-close-button",
                              keybind: t,
                              onClick: n,
                              IconComponent: D.XLargeIcon,
                          }),
                      ],
                  }),
        });
    }),
    e4 = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(ej.A, {
                  className: eQ.BE,
                  children: (0, r.jsx)(X, {
                      "data-testid": "overlay-unlock-button",
                      onClick: () => l.A.setInputLocked(!1, e_.A.getTargetPID()),
                      IconComponent: I.w,
                  }),
              })
            : null;
    });
function e5() {
    l.A.setInputLocked(!0, e_.A.getTargetPID());
}
function e7(e) {
    let t = eD.A.isInputLocked(e_.A.getTargetPID());
    ("alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? B._.dispatch(eA.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && B._.dispatch(eA.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && l.A.setInputLocked(!0, e_.A.getTargetPID());
        })(e, t),
        (e0 || (0, eR.SE)()) &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = W.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, H.pi)(t.shortcut).some(
                        (t) =>
                            0 !== t.keyCode &&
                            t.keyCode === e.keyCode &&
                            t.shiftKey === e.shiftKey &&
                            t.metaKey === e.metaKey &&
                            t.altKey === e.altKey &&
                            t.ctrlKey === e.ctrlKey,
                    )
                );
            })(e) &&
            (e.preventDefault(), e.stopPropagation(), l.A.setInputLocked(!t, e_.A.getTargetPID())));
}
let e6 = i.memo(function () {
        return (0, s.bG)([ef.A], () => ef.A.hasRenderDebugMode(w.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: eQ.N1 })
            : null;
    }),
    e9 = i.memo(function () {
        let e = (0, ep.A)(),
            t = (0, s.bG)([e_.A], () => e_.A.getTargetPID()),
            n = (0, s.bG)([eD.A], () => eD.A.isInputLocked(t), [t]),
            l = (0, s.bG)([e_.A], () => e_.A.isFocused(t), [t]),
            o = (0, s.bG)(
                [W.Ay],
                () => (null != W.Ay.getOverlayKeybind() ? (0, H.dI)(W.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            i.useEffect(() => {
                if ((B._.dispatch(eA.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, N.closeAllModalsInContext)(T.KX),
                        e.addEventListener("contextmenu", e2, !1),
                        () => {
                            e.removeEventListener("contextmenu", e2, !1);
                        }
                    );
                e.removeEventListener("contextmenu", e2, !1);
            }, [n, e]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(e8, { locked: n, keybind: o, onClick: e5 }),
                    (0, r.jsx)(eO, { className: C()({ [eQ.ZK]: n, [eQ.al]: !n }) }),
                    (e0 || (0, eR.SE)()) && (0, r.jsx)(e4, { locked: n, focused: l }),
                    (0, r.jsx)(el, { locked: n }),
                ],
            })
        );
    });
function te() {
    var e, t;
    let n,
        a,
        d,
        u,
        c,
        m,
        p,
        A,
        v,
        w,
        x,
        E,
        b,
        C,
        N,
        O,
        _,
        D,
        I = (0, ep.A)(),
        T = (0, s.bG)([F.default], () => F.default.incompatibleApp),
        j = (0, s.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(I),
                    t = g.A.windowSize(e);
                return t.height < 360 || t.width < 640;
            },
            [I],
        ),
        { analyticsLocations: L } = (0, M.Ay)(k.A.OVERLAY);
    return (
        (n = (0, ep.A)()),
        (a = (0, s.bG)([e_.A], () => e_.A.getTargetPID(), [])),
        (d = (0, s.bG)(
            [W.Ay],
            () => {
                let e = W.Ay.getOverlayKeybind();
                return null != e ? e.shortcut : [];
            },
            [],
        )),
        (u = (0, s.bG)([eD.A], () => eD.A.isInputLocked(a), [a])),
        (c = (0, s.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(n);
                return g.A.isVisible(e) && g.A.isFocused(e);
            },
            [n],
        )),
        (m = i.useRef([])),
        (p = i.useMemo(() => (0, H.pi)(d).map((e) => eT(e)), [d])),
        (A = i.useMemo(() => d.length > 0, [d])),
        (v = !u && A && c),
        i.useEffect(() => {
            m.current = [];
        }, [u, p]),
        i.useEffect(() => {
            if (!v) {
                m.current = [];
                return;
            }
            function e(e) {
                let t = eT(e),
                    n = m.current,
                    r = n.some((e) => eS(e, t)),
                    i = (function (e) {
                        let t = e.key.toLowerCase();
                        for (let e of eI) if (t.includes(e)) return !0;
                        return !1;
                    })(e);
                (r || i || n.push(t),
                    0 !== p.length &&
                        n.length === p.length &&
                        p.every((e) => n.some((t) => eS(e, t))) &&
                        (e.preventDefault(), e.stopPropagation()));
            }
            function t(e) {
                let t = eT(e),
                    n = m.current,
                    r = n.findIndex((e) => eS(e, t));
                r > -1 && n.splice(r, 1);
            }
            return (
                n.addEventListener("keydown", e, !0),
                n.addEventListener("keyup", t, !0),
                () => {
                    (n.removeEventListener("keydown", e, !0), n.removeEventListener("keyup", t, !0));
                }
            );
        }, [v, p, n]),
        (0, o.Ay)(() => {
            (0, V.E)();
        }),
        (w = (0, ep.A)()),
        (e = () => {
            (l.A.overlayReady(e_.A.getTargetPID()),
                w.addEventListener("keydown", e7, !0),
                w.addEventListener("keyup", e7));
        }),
        (t = () => {
            (w.removeEventListener("keydown", e7, !0), w.removeEventListener("keyup", e7));
        }),
        (x = i.useRef({ mount: e, unmount: t })),
        i.useEffect(() => {
            x.current = { mount: e, unmount: t };
        }),
        i.useEffect(
            () => (
                x.current.mount(),
                () => {
                    x.current.unmount();
                }
            ),
            [],
        ),
        (E = i.useRef(null)),
        (0, o.Ay)(() => {
            let e = (0, ed.qv)(),
                t = f.Ay.getVoiceChannelId(),
                n = U.A.getChannel(t),
                r = null != n ? G.A.getGuild(n.guild_id) : null,
                i = null != P.A.getCurrentUserActiveStream(),
                s = null != t,
                o = (0, R.A)(K.Ay) && !i && null != e,
                a = s && null != r && null != t,
                d = e_.A.getTargetPID();
            if (ek.default.hasChangedRenderMode(d)) return;
            let u = eM.A.isNotificationDisabled(eq.KS.WelcomeNudge),
                c = eM.A.isNotificationDisabled(eq.KS.GoLiveNudge),
                h = eM.A.isNotificationDisabled(eq.KS.ActivityInvite),
                g = [];
            (!u &&
                (g.push({ type: eq.Jr.WELCOME }),
                !c &&
                    (o && a
                        ? g.push({ type: eq.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : o && g.push({ type: eq.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || g.push({ type: eq.Jr.CONTENT_INVENTORY, entries: [] })),
                null != E.current && clearTimeout(E.current),
                (E.current = setTimeout(() => {
                    l.A.overlayMounted(...g);
                }, 1e3)));
        }),
        (0, o.l0)(() => {
            null != E.current && (clearTimeout(E.current), (E.current = null));
        }),
        ((b = (0, eH.TW)("overlay_conjure_widgets")),
        i.useEffect(() => {
            b && (0, eY.hF)();
        }, [b]),
        (C = (0, s.bG)([eV.A], () => eV.A.hasFetchSucceeded())),
        (N = (0, s.bG)([eV.A], () => eV.A.getProjects())),
        (O = (0, s.bG)([eV.A], () => eV.A.getHiddenApplicationIds())),
        (_ = (0, s.bG)([h.A], () => null != h.A.getLayout(eE.GJ))),
        (D = (0, s.yK)([h.A], () => h.A.getWidgetsByTypeAndLayout(eA.uss.CONJURE, eE.GJ))),
        i.useEffect(() => {
            if (!b || !C || !_) return;
            let e = h.A.getWidgetDefaultSettings(eA.uss.CONJURE);
            if (null == e) return;
            let t = (function (e) {
                let {
                        layoutId: t,
                        listed: n,
                        hiddenApplicationIds: r,
                        existing: i,
                        layoutSize: s,
                        defaultSettings: l,
                        createId: o = eJ.A,
                    } = e,
                    a = { create: [], deleteWidgetIds: [], metaUpdates: [], minSizeUpdates: [] },
                    d = new Map();
                for (let e of n) {
                    let t = e.application_id;
                    r.has(t) || d.has(t) || d.set(t, e);
                }
                let u = new Set();
                for (let e of i) {
                    if (!(0, ez.Du)(e)) {
                        a.deleteWidgetIds.push(e.id);
                        continue;
                    }
                    let { applicationId: t, projectId: n } = e.meta,
                        r = d.get(t);
                    if (null == r || u.has(t)) {
                        a.deleteWidgetIds.push(e.id);
                        continue;
                    }
                    (u.add(t),
                        n !== r.id &&
                            a.metaUpdates.push({ widgetId: e.id, meta: { applicationId: t, projectId: r.id } }));
                    let i = e$(r, l);
                    (e.minSize.width !== i.width || e.minSize.height !== i.height) &&
                        a.minSizeUpdates.push({ widgetId: e.id, minSize: i });
                }
                let c = u.size;
                for (let [e, n] of d) {
                    if (u.has(e)) continue;
                    let {
                        anchor: r,
                        size: i,
                        minSize: d,
                    } = (function (e, t, n, r) {
                        let i = e$(e, r),
                            s = eX(
                                e.overlay_widget?.default_size,
                                (function (e) {
                                    let { width: t, height: n } = e.size;
                                    return {
                                        width: "number" == typeof t ? t : e.minSize.width,
                                        height: "number" == typeof n ? n : e.minSize.height,
                                    };
                                })(r),
                            ),
                            l = Math.max(s.width, i.width),
                            o = Math.max(s.height, i.height);
                        if (n.width <= 0 || n.height <= 0)
                            return { anchor: r.anchor, size: { width: l, height: o }, minSize: i };
                        ((l = Math.min(l, n.width)), (o = Math.min(o, n.height)));
                        let a = 24 * t,
                            d = Math.max(0, Math.min((n.width - l) / 2 + a, n.width - l)),
                            u = Math.max(0, Math.min(0.15 * n.height + a, n.height - o));
                        return {
                            anchor: (0, ec.NO)({ top: u, left: d }, n),
                            size: { width: l, height: o },
                            minSize: i,
                        };
                    })(n, c, s, l);
                    (c++,
                        a.create.push({
                            id: o(),
                            layoutId: t,
                            type: eA.uss.CONJURE,
                            anchor: r,
                            size: (0, ec.R9)({ fixed: !0, ...i }, s),
                            minSize: d,
                            pinned: l.pinned,
                            meta: { applicationId: e, projectId: n.id },
                        }));
                }
                return a;
            })({
                layoutId: eE.GJ,
                listed: N,
                hiddenApplicationIds: O,
                existing: D,
                layoutSize: g.A.windowSize((0, y.Q2)((0, ep.b)())),
                defaultSettings: e,
            });
            if (
                0 !== t.create.length ||
                0 !== t.deleteWidgetIds.length ||
                0 !== t.metaUpdates.length ||
                0 !== t.minSizeUpdates.length
            ) {
                for (let e of t.deleteWidgetIds) (0, eu.uv)(e);
                for (let { widgetId: e, meta: n } of t.metaUpdates) (0, eu.cC)(e, { ...n });
                for (let { widgetId: e, minSize: n } of t.minSizeUpdates) (0, eu.Ju)({ widgetId: e, minSize: n });
                if ((t.create.length > 0 && (0, eu.uF)(t.create), t.deleteWidgetIds.length > 0)) {
                    let e = new Set();
                    for (let t of h.A.getWidgetsByTypeAndLayout(eA.uss.CONJURE, eE.GJ))
                        (0, ez.Du)(t) && e.add(t.meta.applicationId);
                    (0, eZ.Ay)(e);
                }
            }
        }, [b, C, _, N, O, D]),
        j || T)
            ? null
            : (0, r.jsx)(M.f5, {
                  value: L,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: eQ.Lw,
                      children: [
                          e1,
                          (0, r.jsx)(e9, {}),
                          (0, r.jsx)(eB, {}),
                          (0, r.jsx)(Y.A, {}),
                          (0, r.jsx)(S.N, { appContext: eA.BRT.OVERLAY }),
                          (0, r.jsx)(e6, {}),
                      ],
                  }),
              })
    );
}
var tt = n(661886),
    tn = n(682763),
    tr = n(73153);
function ti(e, t) {
    tt.A.getPopoutInitializationStages()[e] !== t &&
        tr.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175);
var ts = n(366032);
(n(191701), n(921955));
let tl = !m.isPlatformEmbedded && !1,
    to = new d.A("AppOverlay");
function ta(e, t) {
    return new Promise((n, r) => {
        let i = Date.now();
        t.current = setInterval(() => {
            if (
                (function () {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        n = e.document.styleSheets,
                        r = new Map();
                    for (let e of n) null != e.href && r.set(e.href, e);
                    for (let e of t) {
                        if (null == e.href) continue;
                        let t = r.get(e.href);
                        if (null == t) return !1;
                        try {
                            if (0 === t.cssRules.length) return !1;
                        } catch (e) {}
                    }
                    return !0;
                })()
            ) {
                (n(), clearInterval(t.current));
                return;
            }
            Date.now() - i > 12e4 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current));
        }, 200);
    });
}
async function td(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (m.isPlatformEmbedded) {
        try {
            await p.Ay.isAlwaysOnTop(t);
        } catch (e) {
            (to.error("Window does not exist while trying to show inactive", e), (0, v.pj)(e, w.Ue.OutOfProcess));
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await p.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                p.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    (to.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t)));
                } else throw ((0, v.pj)(e, w.Ue.OutOfProcess), e);
            }
    }
}
function tu() {
    l.A.setFocusedPID(A.DEV_PID, null);
}
function tc() {
    l.A.setFocusedPID(null, null);
}
let th = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: d } = e;
    ((t = (0, s.bG)([u.A], () => u.A.getWindow(d))),
        (0, o.Ay)(() => {
            if (null == t) return;
            let e = tl || (0, eR.SE)();
            return (
                e &&
                    (t.document.hasFocus() && l.A.setFocusedPID(A.DEV_PID, null),
                    t.addEventListener("focus", tu),
                    t.addEventListener("blur", tc)),
                () => {
                    e && (t.removeEventListener("focus", tu), t.removeEventListener("blur", tc));
                }
            );
        }));
    let p = (function (e, t) {
            let n,
                r,
                a = (0, s.bG)(
                    [tt.A],
                    () => !!(!m.isPlatformEmbedded || (0, eR.SE)()) || tt.A.isWindowHandleInitialized(),
                ),
                d = (0, s.bG)([u.A], () => u.A.getWindow(e)),
                c = (0, s.bG)([e_.A], () => e_.A.getFocusedPID()),
                p = i.useMemo(() => !!(!m.isPlatformEmbedded || (0, eR.SE)()) || (null != c && -1 !== c), [c]),
                [A, v] = i.useState(!1),
                x = i.useRef(!1),
                b = i.useCallback(() => {
                    let e = e_.A.getTargetPID(),
                        n = null != f.Ay.getVoiceChannelId();
                    ((0, E.g)(eA.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: e_.A.isPinned(eA.uss.TEXT),
                        overlay_render_method: w.Ue[ek.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, tn.Fd)());
                }, [t]),
                C = i.useRef(!1),
                N = i.useRef(null),
                O = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await ta(e, N), C.current)) return;
                            ti("cssLoaded", !0);
                        } catch (e) {
                            (to.error("Timed out waiting for CSS to load", e),
                                l.A.setOverlayCrashed(e_.A.getTargetPID(), e),
                                ti("errorMessage", "CSS failed load"));
                            return;
                        }
                        try {
                            if ((await td(e, t), C.current)) return;
                            (0, tn.Mq)();
                        } catch (e) {
                            (l.A.setOverlayCrashed(e_.A.getTargetPID(), e), ti("errorMessage", "showInactive failed"));
                            return;
                        }
                        (await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            C.current || (v(!0), b()));
                    },
                    [b],
                ),
                _ = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!x.current && (ti("hasUseEffectFired", !0), ti("trackedPidFocused", p), a)) {
                        if (null == d) return void ti("errorMessage", "No targetOverlayWindow");
                        if (!p) {
                            _.current ||
                                (l.A.updateOverlayState(
                                    e_.A.getTargetPID(),
                                    w.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (_.current = !0));
                            return;
                        }
                        ((x.current = !0), ti("reactInitializationStarted", !0), O(d, e));
                    }
                }, [O, p, e, d, a]),
                (0, o.l0)(() => {
                    (clearInterval(N.current), (C.current = !0));
                }),
                (n = (0, s.bG)([g.A], () => g.A.windowSize(null != d ? (0, y.Q2)(d) : void 0))),
                (r = (0, s.bG)([e_.A], () => e_.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != d && A && d.innerHeight === n.height && d.innerWidth === n.width)
                        return (
                            (e = d.requestAnimationFrame(() => {
                                e = d.requestAnimationFrame(() => {
                                    (d.clearTimeout(t), l.A.overlayUIFocusedPid(c ?? -1, r));
                                });
                            })),
                            (t = d.setTimeout(() => {
                                (d.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(c ?? -1, r));
                            }, 500)),
                            () => {
                                (d.cancelAnimationFrame(e), d.clearTimeout(t));
                            }
                        );
                }, [A, d, c, r, n]),
                A
            );
        })(d, eE.GJ),
        v = (0, s.bG)([e_.A], () => e_.A.getFocusedPID()),
        b = (0, s.bG)([eD.A], () => eD.A.isInputLocked(v), [v]),
        C = (0, s.bG)([ek.default, e_.A], () =>
            (0, ts.S)(e_.A.getNativeLimitedInteraction(), ek.default.getOverlayMethod(e_.A.getTargetPID())),
        );
    return p
        ? (0, r.jsx)(x.p, {
              disabled: C,
              children: (0, r.jsxs)(c.A, {
                  themeOverride: eA.NJ8.ONYX,
                  appContext: eA.BRT.OVERLAY,
                  withTitleBar: n,
                  windowKey: d,
                  title: "Discord Overlay",
                  hideModals: b,
                  children: [(0, r.jsx)(te, {}), (0, r.jsx)(a.Al, {})],
              }),
          })
        : null;
});
