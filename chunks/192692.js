(n.r(t), n.d(t, { default: () => tL, waitForCSSLoad: () => tk }));
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
    m = n(723702),
    p = n(253400),
    A = n(9302),
    y = n(365971),
    v = n(777334),
    E = n(41984),
    x = n(973196),
    w = n(870373);
n(321073);
var b = n(503698),
    C = n.n(b),
    N = n(192308),
    O = n(939249),
    _ = n(825484),
    D = n(821609),
    S = n(632015),
    I = n(952270),
    j = n(663417),
    T = n(138134),
    k = n(972213),
    R = n(328162),
    P = n(616667),
    L = n(442433),
    M = n(793574),
    G = n(688810),
    U = n(607470),
    K = n(880144),
    W = n(652896),
    B = n(830012),
    F = n(861862),
    V = n(887287),
    H = n(616356),
    Y = n(988468),
    z = n(753181),
    J = n(310685),
    $ = n(76795);
function X() {
    let e = (0, J.T)("StreamDrawingOverlay"),
        t = (0, l.bG)([H.A, z.A, Y.Ay, V.A, F.default], () => {
            let e = H.A.getCurrentUserActiveStream();
            if (null == e) return null;
            let t = (0, W._z)(e),
                n = Y.Ay.getGoLiveSource(),
                r = null != n ? n.desktopSource?.id : z.A.getStreamSourceId(t),
                i = n?.desktopSource?.sourcePid ?? z.A.getStreamPid(t);
            if (null == r || !r.startsWith("window:") || null == i || i <= 0 || V.A.getTargetPID() !== i) return null;
            let l = V.A.getFocusedWindowHandle();
            return (null == l || (0, B.A)(r, l)) &&
                F.default.isOverlayOOPEnabledForPid(i) &&
                F.default.getTrackedGameByPid(i)?.state === E.AR.OVERLAY_RENDERING
                ? t
                : null;
        });
    return e && null != t ? (0, r.jsx)($.A, { streamKey: t, dimensions: null, overlay: !0 }, t) : null;
}
var Q = n(734057),
    q = n(71393),
    Z = n(532624),
    ee = n(373954),
    et = n(188567),
    en = n(350535),
    er = n(589051),
    ei = n(223251),
    el = n(834730),
    es = n(257581);
function eo(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: l, "data-testid": s } = e;
    return (0, r.jsxs)("div", {
        className: C()(es.UD, i),
        "data-testid": s,
        children: [
            (0, r.jsx)(O.D, {
                className: es.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(l, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(el.E, {
                      className: es.P,
                      "aria-hidden": !0,
                      variant: "footnote/semibold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}
var ea = n(554146),
    eu = n(534514),
    ed = n(352255),
    ec = n(782603),
    eh = n(428689),
    ef = n(7807),
    eg = n(263775),
    em = n(49999),
    ep = n(792996),
    eA = n(831931);
function ey(e) {
    let { locked: t } = e,
        [n, l] = (0, eg.kn)(t ? [] : [ea.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], { bypassAutoDismiss: !0 });
    return (i.useEffect(() => {
        if (!t && n === ea.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === ea.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && l(em.i.AUTO_DISMISS);
            };
    }, [t, l, n]),
    t || n !== ea.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: eA.A,
              children: (0, r.jsxs)("div", {
                  className: eA.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: eA.vJ,
                          children: [
                              (0, r.jsx)(eu.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: ep.intl.string(ep.t.jzjJQg),
                              }),
                              (0, r.jsx)(el.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: ep.intl.string(ep.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eA.S1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: eA.bS,
                                  children: [
                                      (0, r.jsx)(ed.WidgetsPlusIcon, {}),
                                      (0, r.jsx)(el.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ep.intl.string(ep.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eA.bS,
                                  children: [
                                      (0, r.jsx)(ec.BellIcon, {}),
                                      (0, r.jsx)(el.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ep.intl.string(ep.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eA.bS,
                                  children: [
                                      (0, r.jsx)(eh.VideoIcon, {}),
                                      (0, r.jsx)(el.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ep.intl.string(ep.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eA.bS,
                                  children: [
                                      (0, r.jsx)(ef.SoundboardIcon, {}),
                                      (0, r.jsx)(el.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ep.intl.string(ep.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var ev = n(232554),
    eE = n(351906),
    ex = n(243612),
    ew = n(391973),
    eb = n(881957),
    eC = n(5463),
    eN = n(129537),
    eO = n(127242),
    e_ = n(968898),
    eD = n(481484),
    eS = n(545807),
    eI = n(652215),
    ej = n(361729),
    eT = n(645280);
let ek = [],
    eR = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: s,
                renderButtons: a,
                resizeValidation: u,
                containerRenderGate: d,
                inGameVisibility: c,
                className: f,
                dragContainerClassName: m,
            } = e,
            p = (0, l.bG)([h.A], () => h.A.getWidgetConfig(t.type), [t.type]),
            A = (0, e_.RE)(t.id, 7e3),
            v = (0, eD.A)(),
            [x, b] = i.useState(() => d?.stores ?? ek);
        (0, o.Ay)(() => {
            b(d?.stores ?? ek);
        });
        let N = (0, l.bG)(x, () => d?.shouldRender({ widget: t, locked: v }) ?? !0, [d, v, t]),
            [O] = i.useState(() => c?.stores ?? ek),
            _ = (0, l.bG)(O, () => c?.isShownInGame(t) ?? t.pinned, [c, t]),
            D = (0, eS.A)(),
            S = (0, l.bG)([g.A], () => g.A.windowSize((0, y.Q2)(D))),
            I = i.useCallback((e, t, n, r, i) => {
                let l = g.A.windowSize((0, y.Q2)((0, eS.b)())),
                    s = (0, eC.NO)(n, l),
                    o = (0, eC.R9)(r, l);
                ((0, ew.uD)(t), (0, ew.Ju)({ widgetId: t, anchor: s, size: o }));
                let a = e === eN.P.MOVE,
                    u = (0, eC.Ly)(n, l.width, l.height, i.width, i.height);
                (0, w.g)(eI.HAw.OVERLAY_LAYOUT_UPDATED, {
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
                (0, ew.uD)(e);
            }, []),
            { id: T, zIndex: k, size: R, anchor: P, minSize: L } = t,
            M = i.useMemo(() => (0, eC.fd)(R, S), [R, S]),
            G = (0, eC.Nv)(P, S),
            { resizeX: U, resizeY: K, dragAnywhere: W, constrainAutoSizeToExplicitResizeEvents: B } = p ?? {},
            F = !v,
            V = _ || !v,
            H = i.useMemo(() => ({ minX: 0, minY: 0, maxX: S.width, maxY: S.height }), [S]),
            Y = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: f }),
                [t, n, f],
            ),
            z = null != p && p.layoutPolicy !== eb.X.DEBUG,
            J = i.useCallback(
                (e) =>
                    null != s || null != a || z
                        ? (0, r.jsxs)("div", {
                              className: C()(eT.vJ, A && eT.vw),
                              children: [
                                  s?.(t),
                                  a?.(t, e),
                                  z
                                      ? (0, r.jsx)(e_.hM, {
                                            label: ep.intl.string(ej.default.uF5NtC),
                                            onClick: () => (0, ew.sx)([t.id], !0),
                                        })
                                      : null,
                              ],
                          })
                        : null,
                [t, s, A, a, z],
            ),
            $ = (0, l.bG)([eO.A], () => eO.A.hasRenderDebugMode(E.x7.WidgetAreas)),
            X = i.useMemo(() => {
                if (null != u) return (e) => u({ ...e, widget: t });
            }, [u, t]);
        return N
            ? (0, r.jsx)(eN.A, {
                  className: C()({ [eT.Yz]: $, [eT.xu]: $ && !_, [eT.E]: $ && _ }, m),
                  id: T,
                  size: M,
                  anchor: G,
                  container: H,
                  minSize: L ?? { width: 0, height: 0 },
                  hidden: !V,
                  locked: v,
                  resizeX: U ?? !1,
                  resizeY: K ?? !1,
                  style: { zIndex: k },
                  dragAnywhere: W ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: B ?? !1,
                  active: F,
                  onUpdate: I,
                  onClick: j,
                  targetWindow: D,
                  forceShowExtras: A,
                  renderExtras: J,
                  resizeValidation: X,
                  children: Y,
              })
            : null;
    });
var eP = n(415173),
    eL = n(644434);
function eM(e) {
    return e.widget.id;
}
function eG(e, t, n, i) {
    return n === ev.wL.YEETED ? null : (0, r.jsx)(eR, { ...t, transitionState: n, cleanUp: i }, e);
}
let eU = [];
function eK() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.A,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.A,
        n = e.getLayout(eL.GJ);
    if (null == n) return eU;
    let r = [];
    for (let i of n.widgets) {
        let n = e.getWidget(i);
        if (null == n || n.hidden) continue;
        let l = eP.A[n.type];
        null != l &&
            (null == l.predicate || l.predicate()) &&
            (t.isOverlayWidgetDisabled(n.type) || r.push({ widget: n, ...l }));
    }
    return r;
}
let eW = i.memo(function (e) {
    let { className: t } = e,
        n = (0, eS.A)(),
        s = (0, l.bG)([g.A], () => g.A.windowSize((0, y.Q2)(n))),
        o = (0, l.bG)([h.A, eE.A], () => eK(h.A, eE.A), [], ex.VC),
        a = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: s, children: e }), [t, s]);
    return (0, r.jsx)(ev.F, { items: o, renderItem: eG, getItemKey: eM, wrapChildren: a });
});
var eB = n(222506);
let eF = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eV(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l };
}
function eH(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var eY = n(302614),
    ez = n(592598),
    eJ = n(237984),
    e$ = n(394072),
    eX = n(667419),
    eQ = n(528772),
    eq = n(944775),
    eZ = n(177303),
    e0 = n(427603),
    e1 = n(980504),
    e2 = n(355870);
let e3 = i.memo(function () {
    let [e, t] = (0, l.yK)([eQ.A], () => [eQ.A.enabled, eQ.A.keepOpen]),
        n = (0, l.bG)([f.Ay], () => f.Ay.getVoiceChannelId()),
        i = (0, l.bG)([Q.A], () => Q.A.getChannel(n), [n]),
        s = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(eY.A, {
              className: e2.k,
              children: (0, r.jsx)(eZ.A, {
                  width: e1.ed.width,
                  height: e1.ed.height,
                  guildId: s,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, e0.A)();
                      null != e && (0, eq.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var e8 = n(934058),
    e5 = n(190488),
    e6 = n(630398),
    e4 = n(233470),
    e7 = n(743082),
    e9 = n(897720),
    te = n(312130),
    tt = n(856988),
    tn = n(155037),
    tr = n(73153),
    ti = n(46653);
let tl = { users: {} };
class ts extends l.Ay.DeviceSettingsStore {
    static displayName = "ConjureServerOverlayWidgetNoticeStore";
    static persistKey = "ConjureServerOverlayWidgetNoticeStore";
    initialize(e) {
        (this.waitFor(ti.default), (tl = { users: e?.users ?? {} }));
    }
    isDismissed(e) {
        let t = ti.default.getId();
        return null != t && (tl.users[t]?.includes(e) ?? !1);
    }
    getUserAgnosticState() {
        return tl;
    }
}
let to = new ts(tr.h, {
    CONJURE_SERVER_OVERLAY_WIDGET_NOTICE_DISMISS: function (e) {
        let { applicationId: t } = e,
            n = ti.default.getId();
        if (null == n) return !1;
        let r = tl.users[n] ?? [];
        if (r.includes(t)) return !1;
        tl = { users: { ...tl.users, [n]: [...r, t].slice(-200) } };
    },
});
var ta = n(331322),
    tu = n(255324);
let td = Array.from(new Set(Object.values(eP.A).flatMap((e) => e?.containerRenderGate?.stores ?? []))),
    tc = [h.A, eE.A, ...td];
function th(e) {
    let { onBrowse: t } = e;
    return (0, l.bG)(tc, () =>
        eK(h.A, eE.A).every((e) => {
            let { widget: t, containerRenderGate: n } = e;
            return n?.shouldRender({ widget: t, locked: !1 }) === !1;
        }),
    )
        ? (0, r.jsx)(eY.A, {
              className: tu.p$,
              children: (0, r.jsxs)(ta.B, {
                  align: "center",
                  gap: 12,
                  "data-testid": "overlay-widgets-empty-state",
                  children: [
                      (0, r.jsx)(S.WidgetsIcon, { size: "lg", color: "currentColor" }),
                      (0, r.jsxs)(ta.B, {
                          align: "center",
                          gap: 4,
                          children: [
                              (0, r.jsx)(eu.D, {
                                  variant: "heading-lg/semibold",
                                  color: "text-strong",
                                  children: ep.intl.string(ej.default.Fgbxdv),
                              }),
                              (0, r.jsx)(el.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: ep.intl.string(ej.default.Flw3aW),
                              }),
                          ],
                      }),
                      (0, r.jsx)(D.$, {
                          variant: "overlay-primary",
                          icon: S.WidgetsIcon,
                          text: ep.intl.string(ej.default["Qk/rJB"]),
                          onClick: t,
                      }),
                  ],
              }),
          })
        : null;
}
var tf = n(776162),
    tg = n(672396),
    tm = n(558606);
let tp = !m.isPlatformEmbedded && !1,
    tA = tp
        ? (0, r.jsx)(U.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: tm.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function ty(e) {
    e.preventDefault();
}
function tv(e) {
    (0, L.L3)(
        e,
        async () => {
            let { default: e } = await n.e(386437).then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: eL.GJ, version: 4 });
        },
        { context: eI.BRT.OVERLAY },
    );
}
let tE = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i, widgetsPanelOpen: l, onToggleWidgetsPanel: s } = e;
        return (0, r.jsx)(O.D, {
            "data-testid": "overlay-background",
            "data-locked": i,
            className: C()(tm.LK, { [tm.Zo]: !i, [tm.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === eI.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: tv,
            children: i
                ? null
                : (0, r.jsxs)(eY.A, {
                      className: tm.BE,
                      children: [
                          (0, r.jsxs)(_.e, {
                              size: "sm",
                              children: [
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-browse-button",
                                      variant: l ? "overlay-primary" : "overlay-secondary",
                                      icon: S.WidgetsIcon,
                                      text: ep.intl.string(ej.default["Qk/rJB"]),
                                      "aria-expanded": l,
                                      onClick: s,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-hide-all-button",
                                      variant: "overlay-secondary",
                                      icon: I.EyeSlashIcon,
                                      text: ep.intl.string(ej.default.MpBSOt),
                                      onClick: eX.ff,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-reset-button",
                                      variant: "overlay-secondary",
                                      icon: j.RefreshIcon,
                                      text: ep.intl.string(ep.t["hW+EMu"]),
                                      onClick: eX.eL,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(eo, {
                              "data-testid": "overlay-report-button",
                              onClick: () => (0, eJ.b)(M.A.OVERLAY, eI.BRT.OVERLAY),
                              IconComponent: T.FlagIcon,
                          }),
                          (0, r.jsx)(eo, {
                              "data-testid": "overlay-close-button",
                              keybind: t,
                              onClick: n,
                              IconComponent: k.XLargeIcon,
                          }),
                      ],
                  }),
        });
    }),
    tx = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(eY.A, {
                  className: tm.BE,
                  children: (0, r.jsx)(eo, {
                      "data-testid": "overlay-unlock-button",
                      onClick: () => s.A.setInputLocked(!1, V.A.getTargetPID()),
                      IconComponent: R.LockUnlockedIcon,
                  }),
              })
            : null;
    });
function tw() {
    s.A.setInputLocked(!0, V.A.getTargetPID());
}
function tb(e) {
    let t = eB.A.isInputLocked(V.A.getTargetPID());
    ("alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? et._.dispatch(eI.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && et._.dispatch(eI.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && s.A.setInputLocked(!0, V.A.getTargetPID());
        })(e, t),
        (tp || (0, e$.SE)()) &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = Z.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, en.pi)(t.shortcut).some(
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
            (e.preventDefault(), e.stopPropagation(), s.A.setInputLocked(!t, V.A.getTargetPID())));
}
let tC = i.memo(function () {
        return (0, l.bG)([eO.A], () => eO.A.hasRenderDebugMode(E.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: tm.N1 })
            : null;
    }),
    tN = i.memo(function () {
        let e = (0, eS.A)(),
            t = (0, l.bG)([V.A], () => V.A.getTargetPID()),
            n = (0, l.bG)([eB.A], () => eB.A.isInputLocked(t), [t]),
            s = (0, l.bG)([V.A], () => V.A.isFocused(t), [t]),
            o = (0, l.bG)(
                [Z.Ay],
                () => (null != Z.Ay.getOverlayKeybind() ? (0, en.dI)(Z.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        i.useEffect(() => {
            if ((et._.dispatch(eI.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                return (
                    (0, N.K3)("popout"),
                    e.addEventListener("contextmenu", ty, !1),
                    () => {
                        e.removeEventListener("contextmenu", ty, !1);
                    }
                );
            e.removeEventListener("contextmenu", ty, !1);
        }, [n, e]);
        let [a, u] = i.useState(!1);
        n && a && u(!1);
        let d = i.useCallback(() => u((e) => !e), []),
            c = i.useCallback(() => u(!0), []),
            h = i.useCallback(() => u(!1), []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tE, { locked: n, keybind: o, onClick: tw, widgetsPanelOpen: a, onToggleWidgetsPanel: d }),
                (0, r.jsx)(eW, { className: C()({ [tm.ZK]: n, [tm.al]: !n }) }),
                n || a ? null : (0, r.jsx)(th, { onBrowse: c }),
                !n && a ? (0, r.jsx)(tf.Ay, { onClose: h }) : null,
                (tp || (0, e$.SE)()) && (0, r.jsx)(tx, { locked: n, focused: s }),
                (0, r.jsx)(ey, { locked: n }),
                (0, r.jsx)(X, {}),
            ],
        });
    });
function tO() {
    var e, t;
    let n,
        a,
        u,
        d,
        c,
        m,
        p,
        A,
        v,
        E,
        x,
        w,
        b,
        C,
        N,
        O,
        _,
        D,
        S,
        I,
        j,
        T,
        k,
        R,
        L,
        U = (0, eS.A)(),
        W = (0, l.bG)([ee.default], () => ee.default.incompatibleApp),
        B = (0, l.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(U),
                    t = g.A.windowSize(e);
                return t.height < 360 || t.width < 640;
            },
            [U],
        ),
        { analyticsLocations: z } = (0, G.Ay)(M.A.OVERLAY);
    return (
        (n = (0, eS.A)()),
        (a = (0, l.bG)([V.A], () => V.A.getTargetPID(), [])),
        (u = (0, l.bG)(
            [Z.Ay],
            () => {
                let e = Z.Ay.getOverlayKeybind();
                return null != e ? e.shortcut : [];
            },
            [],
        )),
        (d = (0, l.bG)([eB.A], () => eB.A.isInputLocked(a), [a])),
        (c = (0, l.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(n);
                return g.A.isVisible(e) && g.A.isFocused(e);
            },
            [n],
        )),
        (m = i.useRef([])),
        (p = i.useMemo(() => (0, en.pi)(u).map((e) => eV(e)), [u])),
        (A = i.useMemo(() => u.length > 0, [u])),
        (v = !d && A && c),
        i.useEffect(() => {
            m.current = [];
        }, [d, p]),
        i.useEffect(() => {
            if (!v) {
                m.current = [];
                return;
            }
            function e(e) {
                let t = eV(e),
                    n = m.current,
                    r = n.some((e) => eH(e, t)),
                    i = (function (e) {
                        let t = e.key.toLowerCase();
                        for (let e of eF) if (t.includes(e)) return !0;
                        return !1;
                    })(e);
                (r || i || n.push(t),
                    0 !== p.length &&
                        n.length === p.length &&
                        p.every((e) => n.some((t) => eH(e, t))) &&
                        (e.preventDefault(), e.stopPropagation()));
            }
            function t(e) {
                let t = eV(e),
                    n = m.current,
                    r = n.findIndex((e) => eH(e, t));
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
            (0, er.E)();
        }),
        (E = (0, eS.A)()),
        (e = () => {
            (s.A.overlayReady(V.A.getTargetPID()),
                E.addEventListener("keydown", tb, !0),
                E.addEventListener("keyup", tb));
        }),
        (t = () => {
            (E.removeEventListener("keydown", tb, !0), E.removeEventListener("keyup", tb));
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
        (w = i.useRef(null)),
        (0, o.Ay)(() => {
            let e = (0, ex.qv)(),
                t = f.Ay.getVoiceChannelId(),
                n = Q.A.getChannel(t),
                r = null != n ? q.A.getGuild(n.guild_id) : null,
                i = null != H.A.getCurrentUserActiveStream(),
                l = null != t,
                o = (0, K.A)(Y.Ay) && !i && null != e,
                a = l && null != r && null != t,
                u = V.A.getTargetPID();
            if (F.default.hasChangedRenderMode(u)) return;
            let d = ez.A.isNotificationDisabled(tg.KS.WelcomeNudge),
                c = ez.A.isNotificationDisabled(tg.KS.GoLiveNudge),
                h = ez.A.isNotificationDisabled(tg.KS.ActivityInvite),
                g = [];
            (!d &&
                (g.push({ type: tg.Jr.WELCOME }),
                !c &&
                    (o && a
                        ? g.push({ type: tg.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : o && g.push({ type: tg.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || g.push({ type: tg.Jr.CONTENT_INVENTORY, entries: [] })),
                null != w.current && clearTimeout(w.current),
                (w.current = setTimeout(() => {
                    s.A.overlayMounted(...g);
                }, 1e3)));
        }),
        (0, o.l0)(() => {
            null != w.current && (clearTimeout(w.current), (w.current = null));
        }),
        ((b = (0, te.H)()),
        i.useEffect(() => {
            b && (0, e4.listProjects)();
        }, [b]),
        (0, e6.A)({ refetchOnMount: !1 }),
        (C = (0, eD.A)()),
        (N = (0, l.yK)([e8.A, to, q.A], () =>
            e8.A.getServerProjects().filter((e) => {
                let t = e.application_id;
                return (
                    null != e.guild_id &&
                    null != q.A.getGuild(e.guild_id) &&
                    !e8.A.isServerProjectEnabled(t) &&
                    !to.isDismissed(t)
                );
            }),
        )),
        (O = i.useRef(new Set())),
        i.useEffect(() => {
            if (C) return void O.current.clear();
            for (let e of N) {
                if (O.current.size >= 3) return;
                let t = e.application_id;
                O.current.has(t) ||
                    (O.current.add(t), tr.h.dispatch({ type: "CONJURE_SERVER_OVERLAY_WIDGET_NOTIFY", project: e }));
            }
        }, [C, N]),
        (_ = (0, l.bG)([e8.A], () => e8.A.hasOwnedFetchSucceeded())),
        (D = (0, l.bG)([e8.A], () => e8.A.hasServerFetchSucceeded())),
        (S = (0, l.bG)([e8.A], () => e8.A.getProjects())),
        (I = i.useMemo(() => (b ? S : S.filter(e5.j)), [b, S])),
        (j = b && _),
        (T = (0, l.bG)([h.A], () => null != h.A.getLayout(eL.GJ))),
        (k = i.useMemo(() => I.filter((e) => !(0, e5.j)(e)), [I])),
        i.useEffect(() => {
            for (let e of k) (0, e7.fD)(e.id);
        }, [k]),
        (R = (0, eD.A)()),
        i.useEffect(() => {
            R || (0, e7.mw)(k.map((e) => e.id));
        }, [R, k]),
        (L = (0, l.yK)([h.A], () => h.A.getWidgetsByTypeAndLayout(eI.uss.CONJURE, eL.GJ))),
        i.useEffect(() => {
            if ((!j && !D) || !T) return;
            let e = h.A.getWidgetDefaultSettings(eI.uss.CONJURE);
            if (null == e) return;
            let t = (0, tt.c3)({
                layoutId: eL.GJ,
                listed: I,
                existing: L,
                layoutSize: g.A.windowSize((0, y.Q2)((0, eS.b)())),
                defaultSettings: e,
                removable: { owned: j, server: D },
            });
            if (!(0, tt.P$)(t)) {
                for (let e of t.deleteWidgetIds) (0, ew.uv)(e);
                for (let { widgetId: e, meta: n } of t.metaUpdates) (0, ew.cC)(e, { ...n });
                for (let { widgetId: e, minSize: n } of t.minSizeUpdates) (0, ew.Ju)({ widgetId: e, minSize: n });
                if ((t.create.length > 0 && (0, ew.uF)(t.create), t.deleteWidgetIds.length > 0)) {
                    let e = new Set();
                    for (let t of h.A.getWidgetsByTypeAndLayout(eI.uss.CONJURE, eL.GJ))
                        (0, e9.Du)(t) && e.add(t.meta.applicationId);
                    (0, tn.A)(e);
                }
            }
        }, [j, D, T, I, L]),
        B || W)
            ? null
            : (0, r.jsx)(G.f5, {
                  value: z,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: tm.Lw,
                      children: [
                          tA,
                          (0, r.jsx)(tN, {}),
                          (0, r.jsx)(e3, {}),
                          (0, r.jsx)(ei.A, {}),
                          (0, r.jsx)(P.N, { appContext: eI.BRT.OVERLAY }),
                          (0, r.jsx)(tC, {}),
                      ],
                  }),
              })
    );
}
var t_ = n(661886),
    tD = n(682763);
function tS(e, t) {
    t_.A.getPopoutInitializationStages()[e] !== t &&
        tr.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175);
var tI = n(366032);
(n(847181), n(921955));
let tj = !m.isPlatformEmbedded && !1,
    tT = new u.A("AppOverlay");
function tk(e, t) {
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
function tR() {
    s.A.setFocusedPID(A.DEV_PID, null);
}
function tP() {
    s.A.setFocusedPID(null, null);
}
let tL = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: u } = e;
    ((t = (0, l.bG)([d.A], () => d.A.getWindow(u))),
        (0, o.Ay)(() => {
            if (null == t) return;
            let e = tj || (0, e$.SE)();
            return (
                e &&
                    (t.document.hasFocus() && s.A.setFocusedPID(A.DEV_PID, null),
                    t.addEventListener("focus", tR),
                    t.addEventListener("blur", tP)),
                () => {
                    e && (t.removeEventListener("focus", tR), t.removeEventListener("blur", tP));
                }
            );
        }));
    let b = (function (e, t) {
            let n,
                r,
                a = (0, l.bG)(
                    [t_.A],
                    () => !!(!m.isPlatformEmbedded || (0, e$.SE)()) || t_.A.isWindowHandleInitialized(),
                ),
                u = (0, l.bG)([d.A], () => d.A.getWindow(e)),
                c = (0, l.bG)([V.A], () => V.A.getFocusedPID()),
                A = i.useMemo(() => !!(!m.isPlatformEmbedded || (0, e$.SE)()) || (null != c && -1 !== c), [c]),
                [x, b] = i.useState(!1),
                C = i.useRef(!1),
                N = i.useCallback(() => {
                    let e = V.A.getTargetPID(),
                        n = null != f.Ay.getVoiceChannelId();
                    ((0, w.g)(eI.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: V.A.isPinned(eI.uss.TEXT),
                        overlay_render_method: E.Ue[F.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, tD.Fd)());
                }, [t]),
                O = i.useRef(!1),
                _ = i.useRef(null),
                D = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await tk(e, _), O.current)) return;
                            tS("cssLoaded", !0);
                        } catch (e) {
                            (tT.error("Timed out waiting for CSS to load", e),
                                s.A.setOverlayCrashed(V.A.getTargetPID(), e),
                                tS("errorMessage", "CSS failed load"));
                            return;
                        }
                        try {
                            if (
                                (await (async function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
                                    if (m.isPlatformEmbedded) {
                                        try {
                                            await p.Ay.isAlwaysOnTop(t);
                                        } catch (e) {
                                            (tT.error("Window does not exist while trying to show inactive", e),
                                                (0, v.pj)(e, E.Ue.OutOfProcess));
                                        }
                                        for (let i = 0; i < r; i++)
                                            try {
                                                if (!(await p.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                                                p.Ay.showInactive(t);
                                                return;
                                            } catch (e) {
                                                if (e.message?.includes("IPC") && i < r - 1) {
                                                    let t = (n / 2) * Math.pow(2, i + 1);
                                                    (tT.error(`Failed to show inactive, retrying in ${t}ms`, e),
                                                        await new Promise((e) => setTimeout(e, t)));
                                                } else throw ((0, v.pj)(e, E.Ue.OutOfProcess), e);
                                            }
                                    }
                                })(e, t),
                                O.current)
                            )
                                return;
                            (0, tD.Mq)();
                        } catch (e) {
                            (s.A.setOverlayCrashed(V.A.getTargetPID(), e), tS("errorMessage", "showInactive failed"));
                            return;
                        }
                        (await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            O.current || (b(!0), N()));
                    },
                    [N],
                ),
                S = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!C.current && (tS("hasUseEffectFired", !0), tS("trackedPidFocused", A), a)) {
                        if (null == u) return void tS("errorMessage", "No targetOverlayWindow");
                        if (!A) {
                            S.current ||
                                (s.A.updateOverlayState(
                                    V.A.getTargetPID(),
                                    E.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (S.current = !0));
                            return;
                        }
                        ((C.current = !0), tS("reactInitializationStarted", !0), D(u, e));
                    }
                }, [D, A, e, u, a]),
                (0, o.l0)(() => {
                    (clearInterval(_.current), (O.current = !0));
                }),
                (n = (0, l.bG)([g.A], () => g.A.windowSize(null != u ? (0, y.Q2)(u) : void 0))),
                (r = (0, l.bG)([V.A], () => V.A.getFocusedWindowHandle())),
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
        })(u, eL.GJ),
        C = (0, l.bG)([V.A], () => V.A.getFocusedPID()),
        N = (0, l.bG)([eB.A], () => eB.A.isInputLocked(C), [C]),
        O = (0, l.bG)([F.default, V.A], () =>
            (0, tI.S)(V.A.getNativeLimitedInteraction(), F.default.getOverlayMethod(V.A.getTargetPID())),
        );
    return b
        ? (0, r.jsx)(x.p, {
              disabled: O,
              children: (0, r.jsxs)(c.A, {
                  themeOverride: eI.NJ8.ONYX,
                  appContext: eI.BRT.OVERLAY,
                  withTitleBar: n,
                  windowKey: u,
                  title: "Discord Overlay",
                  hideModals: N,
                  children: [(0, r.jsx)(tO, {}), (0, r.jsx)(a.Al, {})],
              }),
          })
        : null;
});
