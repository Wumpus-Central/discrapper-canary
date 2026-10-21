(n.r(t), n.d(t, { waitForCSSLoad: () => tw, default: () => tN }));
var r = n(477900),
    i = n(582128),
    l = n(17928),
    s = n(684013),
    o = n(964486),
    a = n(573435),
    u = n(626584),
    d = n(567249),
    c = n(979186),
    h = n(32584),
    f = n(309010),
    g = n(531685),
    p = n(723702),
    m = n(19575),
    A = n(9302),
    y = n(365971),
    v = n(777334),
    x = n(41984),
    w = n(973196),
    E = n(870373);
n(321073);
var C = n(503698),
    b = n.n(C),
    N = n(192308),
    O = n(939249),
    _ = n(825484),
    D = n(821609),
    I = n(632015),
    S = n(952270),
    j = n(663417),
    T = n(138134),
    k = n(972213),
    L = n(328162),
    P = n(231723),
    R = n(345874),
    M = n(442433),
    U = n(793574),
    G = n(688810),
    K = n(607470),
    B = n(880144),
    F = n(616356),
    W = n(734057),
    H = n(71393),
    V = n(360906),
    Y = n(532624),
    z = n(532294),
    J = n(625494),
    $ = n(350535),
    X = n(589051),
    Z = n(223251),
    Q = n(834730),
    q = n(257581);
function ee(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: l, "data-testid": s } = e;
    return (0, r.jsxs)("div", {
        className: b()(q.UD, i),
        "data-testid": s,
        children: [
            (0, r.jsx)(O.D, {
                className: q.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(l, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(Q.E, {
                      className: q.P,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}
var et = n(554146),
    en = n(297264),
    er = n(352255),
    ei = n(782603),
    el = n(428689),
    es = n(7807),
    eo = n(131607),
    ea = n(49999),
    eu = n(105292),
    ed = n(831931);
function ec(e) {
    let { locked: t } = e,
        [n, l] = (0, eo.kn)(t ? [] : [et.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], { bypassAutoDismiss: !0 });
    return (i.useEffect(() => {
        if (!t && n === et.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === et.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && l(ea.i.AUTO_DISMISS);
            };
    }, [t, l, n]),
    t || n !== et.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: ed.A,
              children: (0, r.jsxs)("div", {
                  className: ed.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: ed.vJ,
                          children: [
                              (0, r.jsx)(en.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: eu.intl.string(eu.t.jzjJQg),
                              }),
                              (0, r.jsx)(Q.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eu.intl.string(eu.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: ed.S1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ed.bS,
                                  children: [
                                      (0, r.jsx)(er.X, {}),
                                      (0, r.jsx)(Q.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: eu.intl.string(eu.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ed.bS,
                                  children: [
                                      (0, r.jsx)(ei.BellIcon, {}),
                                      (0, r.jsx)(Q.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: eu.intl.string(eu.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ed.bS,
                                  children: [
                                      (0, r.jsx)(el.VideoIcon, {}),
                                      (0, r.jsx)(Q.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: eu.intl.string(eu.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ed.bS,
                                  children: [
                                      (0, r.jsx)(es.J, {}),
                                      (0, r.jsx)(Q.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: eu.intl.string(eu.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var eh = n(232554),
    ef = n(351906),
    eg = n(243612),
    ep = n(391973),
    em = n(881957),
    eA = n(5463),
    ey = n(129537),
    ev = n(127242),
    ex = n(968898),
    ew = n(481484),
    eE = n(545807),
    eC = n(652215),
    eb = n(671210),
    eN = n(645280);
let eO = [],
    e_ = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: s,
                renderButtons: a,
                resizeValidation: u,
                containerRenderGate: d,
                className: c,
                dragContainerClassName: f,
            } = e,
            p = (0, l.bG)([h.A], () => h.A.getWidgetConfig(t.type), [t.type]),
            m = (0, ex.RE)(t.id, ex.X1),
            A = (0, ew.A)(),
            [v, w] = i.useState(() => d?.stores ?? eO);
        (0, o.Ay)(() => {
            w(d?.stores ?? eO);
        });
        let C = (0, l.bG)(v, () => d?.shouldRender({ widget: t, locked: A }) ?? !0, [d, A, t]),
            N = (0, eE.A)(),
            O = (0, l.bG)([g.A], () => g.A.windowSize((0, y.Q2)(N))),
            _ = i.useCallback((e, t, n, r, i) => {
                let l = g.A.windowSize((0, y.Q2)((0, eE.b)())),
                    s = (0, eA.NO)(n, l),
                    o = (0, eA.R9)(r, l);
                ((0, ep.uD)(t), (0, ep.Ju)({ widgetId: t, anchor: s, size: o }));
                let a = e === ey.P.MOVE,
                    u = (0, eA.Ly)(n, l.width, l.height, i.width, i.height);
                (0, E.g)(eC.HAw.OVERLAY_LAYOUT_UPDATED, {
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
            D = i.useCallback((e) => {
                (0, ep.uD)(e);
            }, []),
            { id: I, pinned: S, zIndex: j, size: T, anchor: k, minSize: L } = t,
            P = i.useMemo(() => (0, eA.fd)(T, O), [T, O]),
            R = (0, eA.Nv)(k, O),
            { resizeX: M, resizeY: U, dragAnywhere: G, constrainAutoSizeToExplicitResizeEvents: K } = p ?? {},
            B = !A,
            F = S || !A,
            W = i.useMemo(() => ({ minX: 0, minY: 0, maxX: O.width, maxY: O.height }), [O]),
            H = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: c }),
                [t, n, c],
            ),
            V = null != p && p.layoutPolicy !== em.X.DEBUG,
            Y = i.useCallback(
                (e) =>
                    null != s || null != a || V
                        ? (0, r.jsxs)("div", {
                              className: b()(eN.vJ, m && eN.vw),
                              children: [
                                  s?.(t),
                                  a?.(t, e),
                                  V
                                      ? (0, r.jsx)(ex.hM, {
                                            label: eu.intl.string(eb.default.uF5NtC),
                                            onClick: () => (0, ep.sx)([t.id], !0),
                                        })
                                      : null,
                              ],
                          })
                        : null,
                [t, s, m, a, V],
            ),
            z = (0, l.bG)([ev.A], () => ev.A.hasRenderDebugMode(x.x7.WidgetAreas)),
            J = i.useMemo(() => {
                if (null != u) return (e) => u({ ...e, widget: t });
            }, [u, t]);
        return C
            ? (0, r.jsx)(ey.A, {
                  className: b()({ [eN.Yz]: z, [eN.xu]: z && !S, [eN.E]: z && S }, f),
                  id: I,
                  size: P,
                  anchor: R,
                  container: W,
                  minSize: L ?? { width: 0, height: 0 },
                  hidden: !F,
                  locked: A,
                  resizeX: M ?? !1,
                  resizeY: U ?? !1,
                  style: { zIndex: j },
                  dragAnywhere: G ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: K ?? !1,
                  active: B,
                  onUpdate: _,
                  onClick: D,
                  targetWindow: N,
                  forceShowExtras: m,
                  renderExtras: Y,
                  resizeValidation: J,
                  children: H,
              })
            : null;
    });
var eD = n(85395),
    eI = n(644434);
function eS(e) {
    return e.widget.id;
}
function ej(e, t, n, i) {
    return n === eh.wL.YEETED ? null : (0, r.jsx)(e_, { ...t, transitionState: n, cleanUp: i }, e);
}
let eT = [];
function ek() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.A,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.A,
        n = e.getLayout(eI.GJ);
    if (null == n) return eT;
    let r = [];
    for (let i of n.widgets) {
        let n = e.getWidget(i);
        if (null == n || n.hidden) continue;
        let l = eD.A[n.type];
        null != l &&
            (null == l.predicate || l.predicate()) &&
            (t.isOverlayWidgetDisabled(n.type) || r.push({ widget: n, ...l }));
    }
    return r;
}
let eL = i.memo(function (e) {
    let { className: t } = e,
        n = (0, eE.A)(),
        s = (0, l.bG)([g.A], () => g.A.windowSize((0, y.Q2)(n))),
        o = (0, l.bG)([h.A, ef.A], () => ek(h.A, ef.A), [], eg.VC),
        a = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: s, children: e }), [t, s]);
    return (0, r.jsx)(eh.F, { items: o, renderItem: ej, getItemKey: eS, wrapChildren: a });
});
var eP = n(233741),
    eR = n(222506);
let eM = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eU(e) {
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
var eK = n(302614),
    eB = n(296027),
    eF = n(592598),
    eW = n(237984),
    eH = n(394072),
    eV = n(667419),
    eY = n(528772),
    ez = n(944775),
    eJ = n(317084),
    e$ = n(427603),
    eX = n(980504),
    eZ = n(355870);
let eQ = i.memo(function () {
    let [e, t] = (0, l.yK)([eY.A], () => [eY.A.enabled, eY.A.keepOpen]),
        n = (0, l.bG)([f.Ay], () => f.Ay.getVoiceChannelId()),
        i = (0, l.bG)([W.A], () => W.A.getChannel(n), [n]),
        s = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(eK.A, {
              className: eZ.k,
              children: (0, r.jsx)(eJ.A, {
                  width: eX.ed.width,
                  height: eX.ed.height,
                  guildId: s,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, e$.A)();
                      null != e && (0, ez.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var eq = n(793480),
    e0 = n(114994),
    e1 = n(371169),
    e3 = n(897720),
    e2 = n(856988),
    e5 = n(155037),
    e8 = n(331322),
    e4 = n(255324);
let e7 = Array.from(new Set(Object.values(eD.A).flatMap((e) => e?.containerRenderGate?.stores ?? []))),
    e6 = [h.A, ef.A, ...e7];
function e9(e) {
    let { onBrowse: t } = e;
    return (0, l.bG)(e6, () =>
        ek(h.A, ef.A).every((e) => {
            let { widget: t, containerRenderGate: n } = e;
            return n?.shouldRender({ widget: t, locked: !1 }) === !1;
        }),
    )
        ? (0, r.jsx)(eK.A, {
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
                              (0, r.jsx)(en.D, {
                                  variant: "heading-lg/semibold",
                                  color: "text-strong",
                                  children: eu.intl.string(eb.default.Fgbxdv),
                              }),
                              (0, r.jsx)(Q.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eu.intl.string(eb.default.Flw3aW),
                              }),
                          ],
                      }),
                      (0, r.jsx)(D.$, {
                          variant: "overlay-primary",
                          icon: I.f,
                          text: eu.intl.string(eb.default["Qk/rJB"]),
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
        ? (0, r.jsx)(K.A, {
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
    (0, M.L3)(
        e,
        async () => {
            let { default: e } = await n.e("386437").then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: eI.GJ, version: 4 });
        },
        { context: eC.BRT.OVERLAY },
    );
}
let to = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i, widgetsPanelOpen: l, onToggleWidgetsPanel: s } = e;
        return (0, r.jsx)(O.D, {
            "data-testid": "overlay-background",
            "data-locked": i,
            className: b()(tn.LK, { [tn.Zo]: !i, [tn.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === eC.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: ts,
            children: i
                ? null
                : (0, r.jsxs)(eK.A, {
                      className: tn.BE,
                      children: [
                          (0, r.jsxs)(_.e, {
                              size: "sm",
                              children: [
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-browse-button",
                                      variant: l ? "overlay-primary" : "overlay-secondary",
                                      icon: I.f,
                                      text: eu.intl.string(eb.default["Qk/rJB"]),
                                      "aria-expanded": l,
                                      onClick: s,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-hide-all-button",
                                      variant: "overlay-secondary",
                                      icon: S.EyeSlashIcon,
                                      text: eu.intl.string(eb.default.MpBSOt),
                                      onClick: eV.ff,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-reset-button",
                                      variant: "overlay-secondary",
                                      icon: j.RefreshIcon,
                                      text: eu.intl.string(eu.t["hW+EMu"]),
                                      onClick: eV.eL,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(ee, {
                              "data-testid": "overlay-report-button",
                              onClick: () => (0, eW.b)(U.A.OVERLAY, eC.BRT.OVERLAY),
                              IconComponent: T.FlagIcon,
                          }),
                          (0, r.jsx)(ee, {
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
            ? (0, r.jsx)(eK.A, {
                  className: tn.BE,
                  children: (0, r.jsx)(ee, {
                      "data-testid": "overlay-unlock-button",
                      onClick: () => s.A.setInputLocked(!1, eP.A.getTargetPID()),
                      IconComponent: L.w,
                  }),
              })
            : null;
    });
function tu() {
    s.A.setInputLocked(!0, eP.A.getTargetPID());
}
function td(e) {
    let t = eR.A.isInputLocked(eP.A.getTargetPID());
    ("alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? J._.dispatch(eC.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && J._.dispatch(eC.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && s.A.setInputLocked(!0, eP.A.getTargetPID());
        })(e, t),
        (tr || (0, eH.SE)()) &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = Y.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, $.pi)(t.shortcut).some(
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
        return (0, l.bG)([ev.A], () => ev.A.hasRenderDebugMode(x.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: tn.N1 })
            : null;
    }),
    th = i.memo(function () {
        let e = (0, eE.A)(),
            t = (0, l.bG)([eP.A], () => eP.A.getTargetPID()),
            n = (0, l.bG)([eR.A], () => eR.A.isInputLocked(t), [t]),
            s = (0, l.bG)([eP.A], () => eP.A.isFocused(t), [t]),
            o = (0, l.bG)(
                [Y.Ay],
                () => (null != Y.Ay.getOverlayKeybind() ? (0, $.dI)(Y.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        i.useEffect(() => {
            if ((J._.dispatch(eC.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                return (
                    (0, N.closeAllModalsInContext)(P.KX),
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
                (0, r.jsx)(eL, { className: b()({ [tn.ZK]: n, [tn.al]: !n }) }),
                n || a ? null : (0, r.jsx)(e9, { onBrowse: c }),
                !n && a ? (0, r.jsx)(te.Ay, { onClose: h }) : null,
                (tr || (0, eH.SE)()) && (0, r.jsx)(ta, { locked: n, focused: s }),
                (0, r.jsx)(ec, { locked: n }),
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
        x,
        w,
        E,
        C,
        b,
        N,
        O,
        _,
        D = (0, eE.A)(),
        I = (0, l.bG)([z.default], () => z.default.incompatibleApp),
        S = (0, l.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(D),
                    t = g.A.windowSize(e);
                return t.height < 360 || t.width < 640;
            },
            [D],
        ),
        { analyticsLocations: j } = (0, G.Ay)(U.A.OVERLAY);
    return (
        (n = (0, eE.A)()),
        (a = (0, l.bG)([eP.A], () => eP.A.getTargetPID(), [])),
        (u = (0, l.bG)(
            [Y.Ay],
            () => {
                let e = Y.Ay.getOverlayKeybind();
                return null != e ? e.shortcut : [];
            },
            [],
        )),
        (d = (0, l.bG)([eR.A], () => eR.A.isInputLocked(a), [a])),
        (c = (0, l.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(n);
                return g.A.isVisible(e) && g.A.isFocused(e);
            },
            [n],
        )),
        (p = i.useRef([])),
        (m = i.useMemo(() => (0, $.pi)(u).map((e) => eU(e)), [u])),
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
                let t = eU(e),
                    n = p.current,
                    r = n.some((e) => eG(e, t)),
                    i = (function (e) {
                        let t = e.key.toLowerCase();
                        for (let e of eM) if (t.includes(e)) return !0;
                        return !1;
                    })(e);
                (r || i || n.push(t),
                    0 !== m.length &&
                        n.length === m.length &&
                        m.every((e) => n.some((t) => eG(e, t))) &&
                        (e.preventDefault(), e.stopPropagation()));
            }
            function t(e) {
                let t = eU(e),
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
            (0, X.E)();
        }),
        (x = (0, eE.A)()),
        (e = () => {
            (s.A.overlayReady(eP.A.getTargetPID()),
                x.addEventListener("keydown", td, !0),
                x.addEventListener("keyup", td));
        }),
        (t = () => {
            (x.removeEventListener("keydown", td, !0), x.removeEventListener("keyup", td));
        }),
        (w = i.useRef({ mount: e, unmount: t })),
        i.useEffect(() => {
            w.current = { mount: e, unmount: t };
        }),
        i.useEffect(
            () => (
                w.current.mount(),
                () => {
                    w.current.unmount();
                }
            ),
            [],
        ),
        (E = i.useRef(null)),
        (0, o.Ay)(() => {
            let e = (0, eg.qv)(),
                t = f.Ay.getVoiceChannelId(),
                n = W.A.getChannel(t),
                r = null != n ? H.A.getGuild(n.guild_id) : null,
                i = null != F.A.getCurrentUserActiveStream(),
                l = null != t,
                o = (0, B.A)(V.Ay) && !i && null != e,
                a = l && null != r && null != t,
                u = eP.A.getTargetPID();
            if (eB.default.hasChangedRenderMode(u)) return;
            let d = eF.A.isNotificationDisabled(tt.KS.WelcomeNudge),
                c = eF.A.isNotificationDisabled(tt.KS.GoLiveNudge),
                h = eF.A.isNotificationDisabled(tt.KS.ActivityInvite),
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
        ((C = (0, eq.TW)("overlay_conjure_widgets")),
        i.useEffect(() => {
            C && (0, e1.hF)();
        }, [C]),
        (b = (0, l.bG)([e0.A], () => e0.A.hasFetchSucceeded())),
        (N = (0, l.bG)([e0.A], () => e0.A.getProjects())),
        (O = (0, l.bG)([h.A], () => null != h.A.getLayout(eI.GJ))),
        (_ = (0, l.yK)([h.A], () => h.A.getWidgetsByTypeAndLayout(eC.uss.CONJURE, eI.GJ))),
        i.useEffect(() => {
            if (!C || !b || !O) return;
            let e = h.A.getWidgetDefaultSettings(eC.uss.CONJURE);
            if (null == e) return;
            let t = (0, e2.c3)({
                layoutId: eI.GJ,
                listed: N,
                existing: _,
                layoutSize: g.A.windowSize((0, y.Q2)((0, eE.b)())),
                defaultSettings: e,
            });
            if (!(0, e2.P$)(t)) {
                for (let e of t.deleteWidgetIds) (0, ep.uv)(e);
                for (let { widgetId: e, meta: n } of t.metaUpdates) (0, ep.cC)(e, { ...n });
                for (let { widgetId: e, minSize: n } of t.minSizeUpdates) (0, ep.Ju)({ widgetId: e, minSize: n });
                if ((t.create.length > 0 && (0, ep.uF)(t.create), t.deleteWidgetIds.length > 0)) {
                    let e = new Set();
                    for (let t of h.A.getWidgetsByTypeAndLayout(eC.uss.CONJURE, eI.GJ))
                        (0, e3.Du)(t) && e.add(t.meta.applicationId);
                    (0, e5.A)(e);
                }
            }
        }, [C, b, O, N, _]),
        S || I)
            ? null
            : (0, r.jsx)(G.f5, {
                  value: j,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: tn.Lw,
                      children: [
                          ti,
                          (0, r.jsx)(th, {}),
                          (0, r.jsx)(eQ, {}),
                          (0, r.jsx)(Z.A, {}),
                          (0, r.jsx)(R.N, { appContext: eC.BRT.OVERLAY }),
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
(n(191701), n(921955));
let tv = !p.isPlatformEmbedded && !1,
    tx = new u.A("AppOverlay");
function tw(e, t) {
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
async function tE(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await m.Ay.isAlwaysOnTop(t);
        } catch (e) {
            (tx.error("Window does not exist while trying to show inactive", e), (0, v.pj)(e, x.Ue.OutOfProcess));
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await m.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                m.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    (tx.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t)));
                } else throw ((0, v.pj)(e, x.Ue.OutOfProcess), e);
            }
    }
}
function tC() {
    s.A.setFocusedPID(A.DEV_PID, null);
}
function tb() {
    s.A.setFocusedPID(null, null);
}
let tN = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: u } = e;
    ((t = (0, l.bG)([d.A], () => d.A.getWindow(u))),
        (0, o.Ay)(() => {
            if (null == t) return;
            let e = tv || (0, eH.SE)();
            return (
                e &&
                    (t.document.hasFocus() && s.A.setFocusedPID(A.DEV_PID, null),
                    t.addEventListener("focus", tC),
                    t.addEventListener("blur", tb)),
                () => {
                    e && (t.removeEventListener("focus", tC), t.removeEventListener("blur", tb));
                }
            );
        }));
    let m = (function (e, t) {
            let n,
                r,
                a = (0, l.bG)(
                    [tg.A],
                    () => !!(!p.isPlatformEmbedded || (0, eH.SE)()) || tg.A.isWindowHandleInitialized(),
                ),
                u = (0, l.bG)([d.A], () => d.A.getWindow(e)),
                c = (0, l.bG)([eP.A], () => eP.A.getFocusedPID()),
                m = i.useMemo(() => !!(!p.isPlatformEmbedded || (0, eH.SE)()) || (null != c && -1 !== c), [c]),
                [A, v] = i.useState(!1),
                w = i.useRef(!1),
                C = i.useCallback(() => {
                    let e = eP.A.getTargetPID(),
                        n = null != f.Ay.getVoiceChannelId();
                    ((0, E.g)(eC.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: eP.A.isPinned(eC.uss.TEXT),
                        overlay_render_method: x.Ue[eB.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, tp.Fd)());
                }, [t]),
                b = i.useRef(!1),
                N = i.useRef(null),
                O = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await tw(e, N), b.current)) return;
                            tA("cssLoaded", !0);
                        } catch (e) {
                            (tx.error("Timed out waiting for CSS to load", e),
                                s.A.setOverlayCrashed(eP.A.getTargetPID(), e),
                                tA("errorMessage", "CSS failed load"));
                            return;
                        }
                        try {
                            if ((await tE(e, t), b.current)) return;
                            (0, tp.Mq)();
                        } catch (e) {
                            (s.A.setOverlayCrashed(eP.A.getTargetPID(), e), tA("errorMessage", "showInactive failed"));
                            return;
                        }
                        (await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            b.current || (v(!0), C()));
                    },
                    [C],
                ),
                _ = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!w.current && (tA("hasUseEffectFired", !0), tA("trackedPidFocused", m), a)) {
                        if (null == u) return void tA("errorMessage", "No targetOverlayWindow");
                        if (!m) {
                            _.current ||
                                (s.A.updateOverlayState(
                                    eP.A.getTargetPID(),
                                    x.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (_.current = !0));
                            return;
                        }
                        ((w.current = !0), tA("reactInitializationStarted", !0), O(u, e));
                    }
                }, [O, m, e, u, a]),
                (0, o.l0)(() => {
                    (clearInterval(N.current), (b.current = !0));
                }),
                (n = (0, l.bG)([g.A], () => g.A.windowSize(null != u ? (0, y.Q2)(u) : void 0))),
                (r = (0, l.bG)([eP.A], () => eP.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != u && A && u.innerHeight === n.height && u.innerWidth === n.width)
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
                }, [A, u, c, r, n]),
                A
            );
        })(u, eI.GJ),
        v = (0, l.bG)([eP.A], () => eP.A.getFocusedPID()),
        C = (0, l.bG)([eR.A], () => eR.A.isInputLocked(v), [v]),
        b = (0, l.bG)([eB.default, eP.A], () =>
            (0, ty.S)(eP.A.getNativeLimitedInteraction(), eB.default.getOverlayMethod(eP.A.getTargetPID())),
        );
    return m
        ? (0, r.jsx)(w.p, {
              disabled: b,
              children: (0, r.jsxs)(c.A, {
                  themeOverride: eC.NJ8.ONYX,
                  appContext: eC.BRT.OVERLAY,
                  withTitleBar: n,
                  windowKey: u,
                  title: "Discord Overlay",
                  hideModals: C,
                  children: [(0, r.jsx)(tf, {}), (0, r.jsx)(a.Al, {})],
              }),
          })
        : null;
});
