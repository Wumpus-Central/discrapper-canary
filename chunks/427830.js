(n.r(t), n.d(t, { default: () => tC, waitForCSSLoad: () => tx }));
var r = n(477900),
    i = n(582128),
    l = n(855986),
    s = n(684013),
    o = n(964486),
    a = n(573435),
    u = n(626584),
    d = n(293432),
    c = n(853757),
    h = n(83880),
    f = n(309010),
    g = n(531685),
    p = n(723702),
    m = n(253400),
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
    _ = n(825484),
    D = n(821609),
    I = n(632015),
    S = n(952270),
    j = n(663417),
    T = n(138134),
    k = n(972213),
    P = n(328162),
    L = n(616667),
    R = n(442433),
    M = n(793574),
    G = n(688810),
    U = n(607470),
    K = n(880144),
    B = n(616356),
    F = n(734057),
    W = n(71393),
    H = n(754712),
    V = n(532624),
    Y = n(373954),
    z = n(188567),
    J = n(350535),
    $ = n(589051),
    X = n(223251),
    Z = n(834730),
    Q = n(257581);
function q(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: l, "data-testid": s } = e;
    return (0, r.jsxs)("div", {
        className: C()(Q.UD, i),
        "data-testid": s,
        children: [
            (0, r.jsx)(O.D, {
                className: Q.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(l, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(Z.E, {
                      className: Q.P,
                      "aria-hidden": !0,
                      variant: "footnote/semibold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}
var ee = n(554146),
    et = n(534514),
    en = n(352255),
    er = n(782603),
    ei = n(428689),
    el = n(7807),
    es = n(263775),
    eo = n(49999),
    ea = n(792996),
    eu = n(831931);
function ed(e) {
    let { locked: t } = e,
        [n, l] = (0, es.kn)(t ? [] : [ee.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], { bypassAutoDismiss: !0 });
    return (i.useEffect(() => {
        if (!t && n === ee.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === ee.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && l(eo.i.AUTO_DISMISS);
            };
    }, [t, l, n]),
    t || n !== ee.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: eu.A,
              children: (0, r.jsxs)("div", {
                  className: eu.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: eu.vJ,
                          children: [
                              (0, r.jsx)(et.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: ea.intl.string(ea.t.jzjJQg),
                              }),
                              (0, r.jsx)(Z.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: ea.intl.string(ea.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eu.S1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: eu.bS,
                                  children: [
                                      (0, r.jsx)(en.X, {}),
                                      (0, r.jsx)(Z.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ea.intl.string(ea.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eu.bS,
                                  children: [
                                      (0, r.jsx)(er.BellIcon, {}),
                                      (0, r.jsx)(Z.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ea.intl.string(ea.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eu.bS,
                                  children: [
                                      (0, r.jsx)(ei.VideoIcon, {}),
                                      (0, r.jsx)(Z.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ea.intl.string(ea.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eu.bS,
                                  children: [
                                      (0, r.jsx)(el.J, {}),
                                      (0, r.jsx)(Z.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ea.intl.string(ea.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var ec = n(232554),
    eh = n(351906),
    ef = n(243612),
    eg = n(391973),
    ep = n(881957),
    em = n(5463),
    eA = n(129537),
    ey = n(127242),
    ev = n(968898),
    ew = n(481484),
    ex = n(545807),
    eE = n(652215),
    eb = n(361729),
    eC = n(645280);
let eN = [],
    eO = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: s,
                renderButtons: a,
                resizeValidation: u,
                containerRenderGate: d,
                inGameVisibility: c,
                className: f,
                dragContainerClassName: p,
            } = e,
            m = (0, l.bG)([h.A], () => h.A.getWidgetConfig(t.type), [t.type]),
            A = (0, ev.RE)(t.id, 7e3),
            v = (0, ew.A)(),
            [x, b] = i.useState(() => d?.stores ?? eN);
        (0, o.Ay)(() => {
            b(d?.stores ?? eN);
        });
        let N = (0, l.bG)(x, () => d?.shouldRender({ widget: t, locked: v }) ?? !0, [d, v, t]),
            [O] = i.useState(() => c?.stores ?? eN),
            _ = (0, l.bG)(O, () => c?.isShownInGame(t) ?? t.pinned, [c, t]),
            D = (0, ex.A)(),
            I = (0, l.bG)([g.A], () => g.A.windowSize((0, y.Q2)(D))),
            S = i.useCallback((e, t, n, r, i) => {
                let l = g.A.windowSize((0, y.Q2)((0, ex.b)())),
                    s = (0, em.NO)(n, l),
                    o = (0, em.R9)(r, l);
                ((0, eg.uD)(t), (0, eg.Ju)({ widgetId: t, anchor: s, size: o }));
                let a = e === eA.P.MOVE,
                    u = (0, em.Ly)(n, l.width, l.height, i.width, i.height);
                (0, E.g)(eE.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !a,
                    was_dragged: a,
                    widget_type: h.A.getWidgetType(t),
                    window_width: l.width,
                    window_height: l.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: u.left,
                    widget_top: u.top,
                });
            }, []),
            j = i.useCallback((e) => {
                (0, eg.uD)(e);
            }, []),
            { id: T, zIndex: k, size: P, anchor: L, minSize: R } = t,
            M = i.useMemo(() => (0, em.fd)(P, I), [P, I]),
            G = (0, em.Nv)(L, I),
            { resizeX: U, resizeY: K, dragAnywhere: B, constrainAutoSizeToExplicitResizeEvents: F } = m ?? {},
            W = !v,
            H = _ || !v,
            V = i.useMemo(() => ({ minX: 0, minY: 0, maxX: I.width, maxY: I.height }), [I]),
            Y = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: f }),
                [t, n, f],
            ),
            z = null != m && m.layoutPolicy !== ep.X.DEBUG,
            J = i.useCallback(
                (e) =>
                    null != s || null != a || z
                        ? (0, r.jsxs)("div", {
                              className: C()(eC.vJ, A && eC.vw),
                              children: [
                                  s?.(t),
                                  a?.(t, e),
                                  z
                                      ? (0, r.jsx)(ev.hM, {
                                            label: ea.intl.string(eb.default.uF5NtC),
                                            onClick: () => (0, eg.sx)([t.id], !0),
                                        })
                                      : null,
                              ],
                          })
                        : null,
                [t, s, A, a, z],
            ),
            $ = (0, l.bG)([ey.A], () => ey.A.hasRenderDebugMode(w.x7.WidgetAreas)),
            X = i.useMemo(() => {
                if (null != u) return (e) => u({ ...e, widget: t });
            }, [u, t]);
        return N
            ? (0, r.jsx)(eA.A, {
                  className: C()({ [eC.Yz]: $, [eC.xu]: $ && !_, [eC.E]: $ && _ }, p),
                  id: T,
                  size: M,
                  anchor: G,
                  container: V,
                  minSize: R ?? { width: 0, height: 0 },
                  hidden: !H,
                  locked: v,
                  resizeX: U ?? !1,
                  resizeY: K ?? !1,
                  style: { zIndex: k },
                  dragAnywhere: B ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: F ?? !1,
                  active: W,
                  onUpdate: S,
                  onClick: j,
                  targetWindow: D,
                  forceShowExtras: A,
                  renderExtras: J,
                  resizeValidation: X,
                  children: Y,
              })
            : null;
    });
var e_ = n(415173),
    eD = n(644434);
function eI(e) {
    return e.widget.id;
}
function eS(e, t, n, i) {
    return n === ec.wL.YEETED ? null : (0, r.jsx)(eO, { ...t, transitionState: n, cleanUp: i }, e);
}
let ej = [];
function eT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.A,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.A,
        n = e.getLayout(eD.GJ);
    if (null == n) return ej;
    let r = [];
    for (let i of n.widgets) {
        let n = e.getWidget(i);
        if (null == n || n.hidden) continue;
        let l = e_.A[n.type];
        null != l &&
            (null == l.predicate || l.predicate()) &&
            (t.isOverlayWidgetDisabled(n.type) || r.push({ widget: n, ...l }));
    }
    return r;
}
let ek = i.memo(function (e) {
    let { className: t } = e,
        n = (0, ex.A)(),
        s = (0, l.bG)([g.A], () => g.A.windowSize((0, y.Q2)(n))),
        o = (0, l.bG)([h.A, eh.A], () => eT(h.A, eh.A), [], ef.VC),
        a = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: s, children: e }), [t, s]);
    return (0, r.jsx)(ec.F, { items: o, renderItem: eS, getItemKey: eI, wrapChildren: a });
});
var eP = n(887287),
    eL = n(222506);
let eR = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eM(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l };
}
function eG(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var eU = n(302614),
    eK = n(861862),
    eB = n(592598),
    eF = n(237984),
    eW = n(394072),
    eH = n(667419),
    eV = n(528772),
    eY = n(944775),
    ez = n(177303),
    eJ = n(427603),
    e$ = n(980504),
    eX = n(355870);
let eZ = i.memo(function () {
    let [e, t] = (0, l.yK)([eV.A], () => [eV.A.enabled, eV.A.keepOpen]),
        n = (0, l.bG)([f.Ay], () => f.Ay.getVoiceChannelId()),
        i = (0, l.bG)([F.A], () => F.A.getChannel(n), [n]),
        s = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(eU.A, {
              className: eX.k,
              children: (0, r.jsx)(ez.A, {
                  width: e$.ed.width,
                  height: e$.ed.height,
                  guildId: s,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, eJ.A)();
                      null != e && (0, eY.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var eQ = n(499466),
    eq = n(191827),
    e0 = n(233470),
    e1 = n(743082),
    e3 = n(897720),
    e2 = n(856988),
    e5 = n(155037),
    e8 = n(331322),
    e4 = n(255324);
let e6 = Array.from(new Set(Object.values(e_.A).flatMap((e) => e?.containerRenderGate?.stores ?? []))),
    e7 = [h.A, eh.A, ...e6];
function e9(e) {
    let { onBrowse: t } = e;
    return (0, l.bG)(e7, () =>
        eT(h.A, eh.A).every((e) => {
            let { widget: t, containerRenderGate: n } = e;
            return n?.shouldRender({ widget: t, locked: !1 }) === !1;
        }),
    )
        ? (0, r.jsx)(eU.A, {
              className: e4.p$,
              children: (0, r.jsxs)(e8.B, {
                  align: "center",
                  gap: 12,
                  "data-testid": "overlay-widgets-empty-state",
                  children: [
                      (0, r.jsx)(I.f, { size: "lg", color: "currentColor" }),
                      (0, r.jsxs)(e8.B, {
                          align: "center",
                          gap: 4,
                          children: [
                              (0, r.jsx)(et.D, {
                                  variant: "heading-lg/semibold",
                                  color: "text-strong",
                                  children: ea.intl.string(eb.default.Fgbxdv),
                              }),
                              (0, r.jsx)(Z.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: ea.intl.string(eb.default.Flw3aW),
                              }),
                          ],
                      }),
                      (0, r.jsx)(D.$, {
                          variant: "overlay-primary",
                          icon: I.f,
                          text: ea.intl.string(eb.default["Qk/rJB"]),
                          onClick: t,
                      }),
                  ],
              }),
          })
        : null;
}
var te = n(776162),
    tt = n(672396),
    tn = n(558606);
let tr = !p.isPlatformEmbedded && !1,
    ti = tr
        ? (0, r.jsx)(U.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: tn.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function tl(e) {
    e.preventDefault();
}
function ts(e) {
    (0, R.L3)(
        e,
        async () => {
            let { default: e } = await n.e(386437).then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: eD.GJ, version: 4 });
        },
        { context: eE.BRT.OVERLAY },
    );
}
let to = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i, widgetsPanelOpen: l, onToggleWidgetsPanel: s } = e;
        return (0, r.jsx)(O.D, {
            "data-testid": "overlay-background",
            "data-locked": i,
            className: C()(tn.LK, { [tn.Zo]: !i, [tn.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === eE.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: ts,
            children: i
                ? null
                : (0, r.jsxs)(eU.A, {
                      className: tn.BE,
                      children: [
                          (0, r.jsxs)(_.e, {
                              size: "sm",
                              children: [
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-browse-button",
                                      variant: l ? "overlay-primary" : "overlay-secondary",
                                      icon: I.f,
                                      text: ea.intl.string(eb.default["Qk/rJB"]),
                                      "aria-expanded": l,
                                      onClick: s,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-hide-all-button",
                                      variant: "overlay-secondary",
                                      icon: S.EyeSlashIcon,
                                      text: ea.intl.string(eb.default.MpBSOt),
                                      onClick: eH.ff,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-reset-button",
                                      variant: "overlay-secondary",
                                      icon: j.RefreshIcon,
                                      text: ea.intl.string(ea.t["hW+EMu"]),
                                      onClick: eH.eL,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(q, {
                              "data-testid": "overlay-report-button",
                              onClick: () => (0, eF.b)(M.A.OVERLAY, eE.BRT.OVERLAY),
                              IconComponent: T.FlagIcon,
                          }),
                          (0, r.jsx)(q, {
                              "data-testid": "overlay-close-button",
                              keybind: t,
                              onClick: n,
                              IconComponent: k.XLargeIcon,
                          }),
                      ],
                  }),
        });
    }),
    ta = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(eU.A, {
                  className: tn.BE,
                  children: (0, r.jsx)(q, {
                      "data-testid": "overlay-unlock-button",
                      onClick: () => s.A.setInputLocked(!1, eP.A.getTargetPID()),
                      IconComponent: P.w,
                  }),
              })
            : null;
    });
function tu() {
    s.A.setInputLocked(!0, eP.A.getTargetPID());
}
function td(e) {
    let t = eL.A.isInputLocked(eP.A.getTargetPID());
    ("alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? z._.dispatch(eE.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && z._.dispatch(eE.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && s.A.setInputLocked(!0, eP.A.getTargetPID());
        })(e, t),
        (tr || (0, eW.SE)()) &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = V.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, J.pi)(t.shortcut).some(
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
            (e.preventDefault(), e.stopPropagation(), s.A.setInputLocked(!t, eP.A.getTargetPID())));
}
let tc = i.memo(function () {
        return (0, l.bG)([ey.A], () => ey.A.hasRenderDebugMode(w.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: tn.N1 })
            : null;
    }),
    th = i.memo(function () {
        let e = (0, ex.A)(),
            t = (0, l.bG)([eP.A], () => eP.A.getTargetPID()),
            n = (0, l.bG)([eL.A], () => eL.A.isInputLocked(t), [t]),
            s = (0, l.bG)([eP.A], () => eP.A.isFocused(t), [t]),
            o = (0, l.bG)(
                [V.Ay],
                () => (null != V.Ay.getOverlayKeybind() ? (0, J.dI)(V.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        i.useEffect(() => {
            if ((z._.dispatch(eE.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                return (
                    (0, N.K3)("popout"),
                    e.addEventListener("contextmenu", tl, !1),
                    () => {
                        e.removeEventListener("contextmenu", tl, !1);
                    }
                );
            e.removeEventListener("contextmenu", tl, !1);
        }, [n, e]);
        let [a, u] = i.useState(!1);
        n && a && u(!1);
        let d = i.useCallback(() => u((e) => !e), []),
            c = i.useCallback(() => u(!0), []),
            h = i.useCallback(() => u(!1), []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(to, { locked: n, keybind: o, onClick: tu, widgetsPanelOpen: a, onToggleWidgetsPanel: d }),
                (0, r.jsx)(ek, { className: C()({ [tn.ZK]: n, [tn.al]: !n }) }),
                n || a ? null : (0, r.jsx)(e9, { onBrowse: c }),
                !n && a ? (0, r.jsx)(te.Ay, { onClose: h }) : null,
                (tr || (0, eW.SE)()) && (0, r.jsx)(ta, { locked: n, focused: s }),
                (0, r.jsx)(ed, { locked: n }),
            ],
        });
    });
function tf() {
    var e, t;
    let n,
        a,
        u,
        d,
        c,
        p,
        m,
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
        I = (0, ex.A)(),
        S = (0, l.bG)([Y.default], () => Y.default.incompatibleApp),
        j = (0, l.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(I),
                    t = g.A.windowSize(e);
                return t.height < 360 || t.width < 640;
            },
            [I],
        ),
        { analyticsLocations: T } = (0, G.Ay)(M.A.OVERLAY);
    return (
        (n = (0, ex.A)()),
        (a = (0, l.bG)([eP.A], () => eP.A.getTargetPID(), [])),
        (u = (0, l.bG)(
            [V.Ay],
            () => {
                let e = V.Ay.getOverlayKeybind();
                return null != e ? e.shortcut : [];
            },
            [],
        )),
        (d = (0, l.bG)([eL.A], () => eL.A.isInputLocked(a), [a])),
        (c = (0, l.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(n);
                return g.A.isVisible(e) && g.A.isFocused(e);
            },
            [n],
        )),
        (p = i.useRef([])),
        (m = i.useMemo(() => (0, J.pi)(u).map((e) => eM(e)), [u])),
        (A = i.useMemo(() => u.length > 0, [u])),
        (v = !d && A && c),
        i.useEffect(() => {
            p.current = [];
        }, [d, m]),
        i.useEffect(() => {
            if (!v) {
                p.current = [];
                return;
            }
            function e(e) {
                let t = eM(e),
                    n = p.current,
                    r = n.some((e) => eG(e, t)),
                    i = (function (e) {
                        let t = e.key.toLowerCase();
                        for (let e of eR) if (t.includes(e)) return !0;
                        return !1;
                    })(e);
                (r || i || n.push(t),
                    0 !== m.length &&
                        n.length === m.length &&
                        m.every((e) => n.some((t) => eG(e, t))) &&
                        (e.preventDefault(), e.stopPropagation()));
            }
            function t(e) {
                let t = eM(e),
                    n = p.current,
                    r = n.findIndex((e) => eG(e, t));
                r > -1 && n.splice(r, 1);
            }
            return (
                n.addEventListener("keydown", e, !0),
                n.addEventListener("keyup", t, !0),
                () => {
                    (n.removeEventListener("keydown", e, !0), n.removeEventListener("keyup", t, !0));
                }
            );
        }, [v, m, n]),
        (0, o.Ay)(() => {
            (0, $.E)();
        }),
        (w = (0, ex.A)()),
        (e = () => {
            (s.A.overlayReady(eP.A.getTargetPID()),
                w.addEventListener("keydown", td, !0),
                w.addEventListener("keyup", td));
        }),
        (t = () => {
            (w.removeEventListener("keydown", td, !0), w.removeEventListener("keyup", td));
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
            let e = (0, ef.qv)(),
                t = f.Ay.getVoiceChannelId(),
                n = F.A.getChannel(t),
                r = null != n ? W.A.getGuild(n.guild_id) : null,
                i = null != B.A.getCurrentUserActiveStream(),
                l = null != t,
                o = (0, K.A)(H.Ay) && !i && null != e,
                a = l && null != r && null != t,
                u = eP.A.getTargetPID();
            if (eK.default.hasChangedRenderMode(u)) return;
            let d = eB.A.isNotificationDisabled(tt.KS.WelcomeNudge),
                c = eB.A.isNotificationDisabled(tt.KS.GoLiveNudge),
                h = eB.A.isNotificationDisabled(tt.KS.ActivityInvite),
                g = [];
            (!d &&
                (g.push({ type: tt.Jr.WELCOME }),
                !c &&
                    (o && a
                        ? g.push({ type: tt.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : o && g.push({ type: tt.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || g.push({ type: tt.Jr.CONTENT_INVENTORY, entries: [] })),
                null != E.current && clearTimeout(E.current),
                (E.current = setTimeout(() => {
                    s.A.overlayMounted(...g);
                }, 1e3)));
        }),
        (0, o.l0)(() => {
            null != E.current && (clearTimeout(E.current), (E.current = null));
        }),
        ((b = (0, eQ.TW)("overlay_conjure_widgets")),
        i.useEffect(() => {
            b && (0, e0.listProjects)();
        }, [b]),
        (C = (0, l.bG)([eq.A], () => eq.A.hasFetchSucceeded())),
        (N = (0, l.bG)([eq.A], () => eq.A.getProjects())),
        (O = (0, l.bG)([h.A], () => null != h.A.getLayout(eD.GJ))),
        i.useEffect(() => {
            if (b) for (let e of N) (0, e1.fD)(e.id);
        }, [b, N]),
        (_ = (0, ew.A)()),
        i.useEffect(() => {
            b && !_ && (0, e1.mw)(N.map((e) => e.id));
        }, [b, _, N]),
        (D = (0, l.yK)([h.A], () => h.A.getWidgetsByTypeAndLayout(eE.uss.CONJURE, eD.GJ))),
        i.useEffect(() => {
            if (!b || !C || !O) return;
            let e = h.A.getWidgetDefaultSettings(eE.uss.CONJURE);
            if (null == e) return;
            let t = (0, e2.c3)({
                layoutId: eD.GJ,
                listed: N,
                existing: D,
                layoutSize: g.A.windowSize((0, y.Q2)((0, ex.b)())),
                defaultSettings: e,
            });
            if (!(0, e2.P$)(t)) {
                for (let e of t.deleteWidgetIds) (0, eg.uv)(e);
                for (let { widgetId: e, meta: n } of t.metaUpdates) (0, eg.cC)(e, { ...n });
                for (let { widgetId: e, minSize: n } of t.minSizeUpdates) (0, eg.Ju)({ widgetId: e, minSize: n });
                if ((t.create.length > 0 && (0, eg.uF)(t.create), t.deleteWidgetIds.length > 0)) {
                    let e = new Set();
                    for (let t of h.A.getWidgetsByTypeAndLayout(eE.uss.CONJURE, eD.GJ))
                        (0, e3.Du)(t) && e.add(t.meta.applicationId);
                    (0, e5.A)(e);
                }
            }
        }, [b, C, O, N, D]),
        j || S)
            ? null
            : (0, r.jsx)(G.f5, {
                  value: T,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: tn.Lw,
                      children: [
                          ti,
                          (0, r.jsx)(th, {}),
                          (0, r.jsx)(eZ, {}),
                          (0, r.jsx)(X.A, {}),
                          (0, r.jsx)(L.N, { appContext: eE.BRT.OVERLAY }),
                          (0, r.jsx)(tc, {}),
                      ],
                  }),
              })
    );
}
var tg = n(661886),
    tp = n(682763),
    tm = n(73153);
function tA(e, t) {
    tg.A.getPopoutInitializationStages()[e] !== t &&
        tm.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175);
var ty = n(366032);
(n(348639), n(921955));
let tv = !p.isPlatformEmbedded && !1,
    tw = new u.A("AppOverlay");
function tx(e, t) {
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
function tE() {
    s.A.setFocusedPID(A.DEV_PID, null);
}
function tb() {
    s.A.setFocusedPID(null, null);
}
let tC = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: u } = e;
    ((t = (0, l.bG)([d.A], () => d.A.getWindow(u))),
        (0, o.Ay)(() => {
            if (null == t) return;
            let e = tv || (0, eW.SE)();
            return (
                e &&
                    (t.document.hasFocus() && s.A.setFocusedPID(A.DEV_PID, null),
                    t.addEventListener("focus", tE),
                    t.addEventListener("blur", tb)),
                () => {
                    e && (t.removeEventListener("focus", tE), t.removeEventListener("blur", tb));
                }
            );
        }));
    let b = (function (e, t) {
            let n,
                r,
                a = (0, l.bG)(
                    [tg.A],
                    () => !!(!p.isPlatformEmbedded || (0, eW.SE)()) || tg.A.isWindowHandleInitialized(),
                ),
                u = (0, l.bG)([d.A], () => d.A.getWindow(e)),
                c = (0, l.bG)([eP.A], () => eP.A.getFocusedPID()),
                A = i.useMemo(() => !!(!p.isPlatformEmbedded || (0, eW.SE)()) || (null != c && -1 !== c), [c]),
                [x, b] = i.useState(!1),
                C = i.useRef(!1),
                N = i.useCallback(() => {
                    let e = eP.A.getTargetPID(),
                        n = null != f.Ay.getVoiceChannelId();
                    ((0, E.g)(eE.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: eP.A.isPinned(eE.uss.TEXT),
                        overlay_render_method: w.Ue[eK.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, tp.Fd)());
                }, [t]),
                O = i.useRef(!1),
                _ = i.useRef(null),
                D = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await tx(e, _), O.current)) return;
                            tA("cssLoaded", !0);
                        } catch (e) {
                            (tw.error("Timed out waiting for CSS to load", e),
                                s.A.setOverlayCrashed(eP.A.getTargetPID(), e),
                                tA("errorMessage", "CSS failed load"));
                            return;
                        }
                        try {
                            if (
                                (await (async function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
                                    if (p.isPlatformEmbedded) {
                                        try {
                                            await m.Ay.isAlwaysOnTop(t);
                                        } catch (e) {
                                            (tw.error("Window does not exist while trying to show inactive", e),
                                                (0, v.pj)(e, w.Ue.OutOfProcess));
                                        }
                                        for (let i = 0; i < r; i++)
                                            try {
                                                if (!(await m.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                                                m.Ay.showInactive(t);
                                                return;
                                            } catch (e) {
                                                if (e.message?.includes("IPC") && i < r - 1) {
                                                    let t = (n / 2) * Math.pow(2, i + 1);
                                                    (tw.error(`Failed to show inactive, retrying in ${t}ms`, e),
                                                        await new Promise((e) => setTimeout(e, t)));
                                                } else throw ((0, v.pj)(e, w.Ue.OutOfProcess), e);
                                            }
                                    }
                                })(e, t),
                                O.current)
                            )
                                return;
                            (0, tp.Mq)();
                        } catch (e) {
                            (s.A.setOverlayCrashed(eP.A.getTargetPID(), e), tA("errorMessage", "showInactive failed"));
                            return;
                        }
                        (await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            O.current || (b(!0), N()));
                    },
                    [N],
                ),
                I = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!C.current && (tA("hasUseEffectFired", !0), tA("trackedPidFocused", A), a)) {
                        if (null == u) return void tA("errorMessage", "No targetOverlayWindow");
                        if (!A) {
                            I.current ||
                                (s.A.updateOverlayState(
                                    eP.A.getTargetPID(),
                                    w.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (I.current = !0));
                            return;
                        }
                        ((C.current = !0), tA("reactInitializationStarted", !0), D(u, e));
                    }
                }, [D, A, e, u, a]),
                (0, o.l0)(() => {
                    (clearInterval(_.current), (O.current = !0));
                }),
                (n = (0, l.bG)([g.A], () => g.A.windowSize(null != u ? (0, y.Q2)(u) : void 0))),
                (r = (0, l.bG)([eP.A], () => eP.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != u && x && u.innerHeight === n.height && u.innerWidth === n.width)
                        return (
                            (e = u.requestAnimationFrame(() => {
                                e = u.requestAnimationFrame(() => {
                                    (u.clearTimeout(t), s.A.overlayUIFocusedPid(c ?? -1, r));
                                });
                            })),
                            (t = u.setTimeout(() => {
                                (u.cancelAnimationFrame(e), s.A.overlayUIFocusedPid(c ?? -1, r));
                            }, 500)),
                            () => {
                                (u.cancelAnimationFrame(e), u.clearTimeout(t));
                            }
                        );
                }, [x, u, c, r, n]),
                x
            );
        })(u, eD.GJ),
        C = (0, l.bG)([eP.A], () => eP.A.getFocusedPID()),
        N = (0, l.bG)([eL.A], () => eL.A.isInputLocked(C), [C]),
        O = (0, l.bG)([eK.default, eP.A], () =>
            (0, ty.S)(eP.A.getNativeLimitedInteraction(), eK.default.getOverlayMethod(eP.A.getTargetPID())),
        );
    return b
        ? (0, r.jsx)(x.p, {
              disabled: O,
              children: (0, r.jsxs)(c.A, {
                  themeOverride: eE.NJ8.ONYX,
                  appContext: eE.BRT.OVERLAY,
                  withTitleBar: n,
                  windowKey: u,
                  title: "Discord Overlay",
                  hideModals: N,
                  children: [(0, r.jsx)(tf, {}), (0, r.jsx)(a.Al, {})],
              }),
          })
        : null;
});
