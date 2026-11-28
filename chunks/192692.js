(n.r(t), n.d(t, { default: () => tM, waitForCSSLoad: () => tR }));
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
    w = n(973196),
    x = n(870373);
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
    $ = n(76795),
    X = n(210608);
function Q() {
    let e = (0, l.bG)([H.A, z.A, Y.Ay, V.A, F.default], () => {
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
        }),
        t = (0, J.TC)(null == e ? null : (0, W.Iy)(e).channelId, "StreamDrawingOverlay"),
        n = (0, l.bG)([X.A], () => null != e && X.A.isStreamDrawingAllowed(e), [e]);
    return t && n && null != e ? (0, r.jsx)($.A, { streamKey: e, dimensions: null, overlay: !0 }, e) : null;
}
var q = n(734057),
    Z = n(71393),
    ee = n(532624),
    et = n(373954),
    en = n(188567),
    er = n(350535),
    ei = n(589051),
    el = n(223251),
    es = n(834730),
    eo = n(257581);
function ea(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: l, "data-testid": s } = e;
    return (0, r.jsxs)("div", {
        className: C()(eo.UD, i),
        "data-testid": s,
        children: [
            (0, r.jsx)(O.D, {
                className: eo.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(l, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(es.E, {
                      className: eo.P,
                      "aria-hidden": !0,
                      variant: "footnote/semibold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}
var eu = n(554146),
    ed = n(534514),
    ec = n(352255),
    eh = n(782603),
    ef = n(428689),
    eg = n(7807),
    em = n(263775),
    ep = n(49999),
    eA = n(792996),
    ey = n(831931);
function ev(e) {
    let { locked: t } = e,
        [n, l] = (0, em.kn)(t ? [] : [eu.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], { bypassAutoDismiss: !0 });
    return (i.useEffect(() => {
        if (!t && n === eu.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === eu.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && l(ep.i.AUTO_DISMISS);
            };
    }, [t, l, n]),
    t || n !== eu.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: ey.A,
              children: (0, r.jsxs)("div", {
                  className: ey.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: ey.vJ,
                          children: [
                              (0, r.jsx)(ed.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: eA.intl.string(eA.t.jzjJQg),
                              }),
                              (0, r.jsx)(es.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: eA.intl.string(eA.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: ey.S1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ey.bS,
                                  children: [
                                      (0, r.jsx)(ec.WidgetsPlusIcon, {}),
                                      (0, r.jsx)(es.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: eA.intl.string(eA.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ey.bS,
                                  children: [
                                      (0, r.jsx)(eh.BellIcon, {}),
                                      (0, r.jsx)(es.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: eA.intl.string(eA.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ey.bS,
                                  children: [
                                      (0, r.jsx)(ef.VideoIcon, {}),
                                      (0, r.jsx)(es.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: eA.intl.string(eA.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ey.bS,
                                  children: [
                                      (0, r.jsx)(eg.SoundboardIcon, {}),
                                      (0, r.jsx)(es.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: eA.intl.string(eA.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var eE = n(232554),
    ew = n(351906),
    ex = n(243612),
    eb = n(391973),
    eC = n(881957),
    eN = n(5463),
    eO = n(129537),
    e_ = n(127242),
    eD = n(968898),
    eS = n(481484),
    eI = n(545807),
    ej = n(652215),
    eT = n(313855),
    ek = n(645280);
let eR = [],
    eP = i.memo(function (e) {
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
            A = (0, eD.RE)(t.id, 7e3),
            v = (0, eS.A)(),
            [w, b] = i.useState(() => d?.stores ?? eR);
        (0, o.Ay)(() => {
            b(d?.stores ?? eR);
        });
        let N = (0, l.bG)(w, () => d?.shouldRender({ widget: t, locked: v }) ?? !0, [d, v, t]),
            [O] = i.useState(() => c?.stores ?? eR),
            _ = (0, l.bG)(O, () => c?.isShownInGame(t) ?? t.pinned, [c, t]),
            D = (0, eI.A)(),
            S = (0, l.bG)([g.A], () => g.A.windowSize((0, y.Q2)(D))),
            I = i.useCallback((e, t, n, r, i) => {
                let l = g.A.windowSize((0, y.Q2)((0, eI.b)())),
                    s = (0, eN.NO)(n, l),
                    o = (0, eN.R9)(r, l);
                ((0, eb.uD)(t), (0, eb.Ju)({ widgetId: t, anchor: s, size: o }));
                let a = e === eO.P.MOVE,
                    u = (0, eN.Ly)(n, l.width, l.height, i.width, i.height);
                (0, x.g)(ej.HAw.OVERLAY_LAYOUT_UPDATED, {
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
                (0, eb.uD)(e);
            }, []),
            { id: T, zIndex: k, size: R, anchor: P, minSize: L } = t,
            M = i.useMemo(() => (0, eN.fd)(R, S), [R, S]),
            G = (0, eN.Nv)(P, S),
            { resizeX: U, resizeY: K, dragAnywhere: W, constrainAutoSizeToExplicitResizeEvents: B } = p ?? {},
            F = !v,
            V = _ || !v,
            H = i.useMemo(() => ({ minX: 0, minY: 0, maxX: S.width, maxY: S.height }), [S]),
            Y = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: f }),
                [t, n, f],
            ),
            z = null != p && p.layoutPolicy !== eC.X.DEBUG,
            J = i.useCallback(
                (e) =>
                    null != s || null != a || z
                        ? (0, r.jsxs)("div", {
                              className: C()(ek.vJ, A && ek.vw),
                              children: [
                                  s?.(t),
                                  a?.(t, e),
                                  z
                                      ? (0, r.jsx)(eD.hM, {
                                            label: eA.intl.string(eT.default.uF5NtC),
                                            onClick: () => (0, eb.sx)([t.id], !0),
                                        })
                                      : null,
                              ],
                          })
                        : null,
                [t, s, A, a, z],
            ),
            $ = (0, l.bG)([e_.A], () => e_.A.hasRenderDebugMode(E.x7.WidgetAreas)),
            X = i.useMemo(() => {
                if (null != u) return (e) => u({ ...e, widget: t });
            }, [u, t]);
        return N
            ? (0, r.jsx)(eO.A, {
                  className: C()({ [ek.Yz]: $, [ek.xu]: $ && !_, [ek.E]: $ && _ }, m),
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
var eL = n(415173),
    eM = n(644434);
function eG(e) {
    return e.widget.id;
}
function eU(e, t, n, i) {
    return n === eE.wL.YEETED ? null : (0, r.jsx)(eP, { ...t, transitionState: n, cleanUp: i }, e);
}
let eK = [];
function eW() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.A,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.A,
        n = e.getLayout(eM.GJ);
    if (null == n) return eK;
    let r = [];
    for (let i of n.widgets) {
        let n = e.getWidget(i);
        if (null == n || n.hidden) continue;
        let l = eL.A[n.type];
        null != l &&
            (null == l.predicate || l.predicate()) &&
            (t.isOverlayWidgetDisabled(n.type) || r.push({ widget: n, ...l }));
    }
    return r;
}
let eB = i.memo(function (e) {
    let { className: t } = e,
        n = (0, eI.A)(),
        s = (0, l.bG)([g.A], () => g.A.windowSize((0, y.Q2)(n))),
        o = (0, l.bG)([h.A, ew.A], () => eW(h.A, ew.A), [], ex.VC),
        a = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: s, children: e }), [t, s]);
    return (0, r.jsx)(eE.F, { items: o, renderItem: eU, getItemKey: eG, wrapChildren: a });
});
var eF = n(222506);
let eV = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eH(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l };
}
function eY(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var ez = n(302614),
    eJ = n(592598),
    e$ = n(237984),
    eX = n(394072),
    eQ = n(667419),
    eq = n(528772),
    eZ = n(944775),
    e0 = n(177303),
    e1 = n(427603),
    e2 = n(980504),
    e3 = n(355870);
let e8 = i.memo(function () {
    let [e, t] = (0, l.yK)([eq.A], () => [eq.A.enabled, eq.A.keepOpen]),
        n = (0, l.bG)([f.Ay], () => f.Ay.getVoiceChannelId()),
        i = (0, l.bG)([q.A], () => q.A.getChannel(n), [n]),
        s = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(ez.A, {
              className: e3.k,
              children: (0, r.jsx)(e0.A, {
                  width: e2.ed.width,
                  height: e2.ed.height,
                  guildId: s,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, e1.A)();
                      null != e && (0, eZ.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var e5 = n(934058),
    e6 = n(190488),
    e7 = n(630398),
    e4 = n(233470),
    e9 = n(743082),
    te = n(897720),
    tt = n(312130),
    tn = n(856988),
    tr = n(155037),
    ti = n(73153),
    tl = n(46653);
let ts = { users: {} };
class to extends l.Ay.DeviceSettingsStore {
    static displayName = "ConjureServerOverlayWidgetNoticeStore";
    static persistKey = "ConjureServerOverlayWidgetNoticeStore";
    initialize(e) {
        (this.waitFor(tl.default), (ts = { users: e?.users ?? {} }));
    }
    isDismissed(e) {
        let t = tl.default.getId();
        return null != t && (ts.users[t]?.includes(e) ?? !1);
    }
    getUserAgnosticState() {
        return ts;
    }
}
let ta = new to(ti.h, {
    CONJURE_SERVER_OVERLAY_WIDGET_NOTICE_DISMISS: function (e) {
        let { applicationId: t } = e,
            n = tl.default.getId();
        if (null == n) return !1;
        let r = ts.users[n] ?? [];
        if (r.includes(t)) return !1;
        ts = { users: { ...ts.users, [n]: [...r, t].slice(-200) } };
    },
});
var tu = n(331322),
    td = n(255324);
let tc = Array.from(new Set(Object.values(eL.A).flatMap((e) => e?.containerRenderGate?.stores ?? []))),
    th = [h.A, ew.A, ...tc];
function tf(e) {
    let { onBrowse: t } = e;
    return (0, l.bG)(th, () =>
        eW(h.A, ew.A).every((e) => {
            let { widget: t, containerRenderGate: n } = e;
            return n?.shouldRender({ widget: t, locked: !1 }) === !1;
        }),
    )
        ? (0, r.jsx)(ez.A, {
              className: td.p$,
              children: (0, r.jsxs)(tu.B, {
                  align: "center",
                  gap: 12,
                  "data-testid": "overlay-widgets-empty-state",
                  children: [
                      (0, r.jsx)(S.WidgetsIcon, { size: "lg", color: "currentColor" }),
                      (0, r.jsxs)(tu.B, {
                          align: "center",
                          gap: 4,
                          children: [
                              (0, r.jsx)(ed.D, {
                                  variant: "heading-lg/semibold",
                                  color: "text-strong",
                                  children: eA.intl.string(eT.default.Fgbxdv),
                              }),
                              (0, r.jsx)(es.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: eA.intl.string(eT.default.Flw3aW),
                              }),
                          ],
                      }),
                      (0, r.jsx)(D.$, {
                          variant: "overlay-primary",
                          icon: S.WidgetsIcon,
                          text: eA.intl.string(eT.default["Qk/rJB"]),
                          onClick: t,
                      }),
                  ],
              }),
          })
        : null;
}
var tg = n(776162),
    tm = n(672396),
    tp = n(558606);
let tA = !m.isPlatformEmbedded && !1,
    ty = tA
        ? (0, r.jsx)(U.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: tp.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function tv(e) {
    e.preventDefault();
}
function tE(e) {
    (0, L.L3)(
        e,
        async () => {
            let { default: e } = await n.e(386437).then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: eM.GJ, version: 4 });
        },
        { context: ej.BRT.OVERLAY },
    );
}
let tw = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i, widgetsPanelOpen: l, onToggleWidgetsPanel: s } = e;
        return (0, r.jsx)(O.D, {
            "data-testid": "overlay-background",
            "data-locked": i,
            className: C()(tp.LK, { [tp.Zo]: !i, [tp.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === ej.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: tE,
            children: i
                ? null
                : (0, r.jsxs)(ez.A, {
                      className: tp.BE,
                      children: [
                          (0, r.jsxs)(_.e, {
                              size: "sm",
                              children: [
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-browse-button",
                                      variant: l ? "overlay-primary" : "overlay-secondary",
                                      icon: S.WidgetsIcon,
                                      text: eA.intl.string(eT.default["Qk/rJB"]),
                                      "aria-expanded": l,
                                      onClick: s,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-hide-all-button",
                                      variant: "overlay-secondary",
                                      icon: I.EyeSlashIcon,
                                      text: eA.intl.string(eT.default.MpBSOt),
                                      onClick: eQ.ff,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-reset-button",
                                      variant: "overlay-secondary",
                                      icon: j.RefreshIcon,
                                      text: eA.intl.string(eA.t["hW+EMu"]),
                                      onClick: eQ.eL,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(ea, {
                              "data-testid": "overlay-report-button",
                              onClick: () => (0, e$.b)(M.A.OVERLAY, ej.BRT.OVERLAY),
                              IconComponent: T.FlagIcon,
                          }),
                          (0, r.jsx)(ea, {
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
            ? (0, r.jsx)(ez.A, {
                  className: tp.BE,
                  children: (0, r.jsx)(ea, {
                      "data-testid": "overlay-unlock-button",
                      onClick: () => s.A.setInputLocked(!1, V.A.getTargetPID()),
                      IconComponent: R.LockUnlockedIcon,
                  }),
              })
            : null;
    });
function tb() {
    s.A.setInputLocked(!0, V.A.getTargetPID());
}
function tC(e) {
    let t = eF.A.isInputLocked(V.A.getTargetPID());
    ("alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? en._.dispatch(ej.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && en._.dispatch(ej.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && s.A.setInputLocked(!0, V.A.getTargetPID());
        })(e, t),
        (tA || (0, eX.SE)()) &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = ee.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, er.pi)(t.shortcut).some(
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
let tN = i.memo(function () {
        return (0, l.bG)([e_.A], () => e_.A.hasRenderDebugMode(E.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: tp.N1 })
            : null;
    }),
    tO = i.memo(function () {
        let e = (0, eI.A)(),
            t = (0, l.bG)([V.A], () => V.A.getTargetPID()),
            n = (0, l.bG)([eF.A], () => eF.A.isInputLocked(t), [t]),
            s = (0, l.bG)([V.A], () => V.A.isFocused(t), [t]),
            o = (0, l.bG)(
                [ee.Ay],
                () => (null != ee.Ay.getOverlayKeybind() ? (0, er.dI)(ee.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        i.useEffect(() => {
            if ((en._.dispatch(ej.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                return (
                    (0, N.K3)("popout"),
                    e.addEventListener("contextmenu", tv, !1),
                    () => {
                        e.removeEventListener("contextmenu", tv, !1);
                    }
                );
            e.removeEventListener("contextmenu", tv, !1);
        }, [n, e]);
        let [a, u] = i.useState(!1);
        n && a && u(!1);
        let d = i.useCallback(() => u((e) => !e), []),
            c = i.useCallback(() => u(!0), []),
            h = i.useCallback(() => u(!1), []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tw, { locked: n, keybind: o, onClick: tb, widgetsPanelOpen: a, onToggleWidgetsPanel: d }),
                (0, r.jsx)(eB, { className: C()({ [tp.ZK]: n, [tp.al]: !n }) }),
                n || a ? null : (0, r.jsx)(tf, { onBrowse: c }),
                !n && a ? (0, r.jsx)(tg.Ay, { onClose: h }) : null,
                (tA || (0, eX.SE)()) && (0, r.jsx)(tx, { locked: n, focused: s }),
                (0, r.jsx)(ev, { locked: n }),
                (0, r.jsx)(Q, {}),
            ],
        });
    });
function t_() {
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
        w,
        x,
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
        U = (0, eI.A)(),
        W = (0, l.bG)([et.default], () => et.default.incompatibleApp),
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
        (n = (0, eI.A)()),
        (a = (0, l.bG)([V.A], () => V.A.getTargetPID(), [])),
        (u = (0, l.bG)(
            [ee.Ay],
            () => {
                let e = ee.Ay.getOverlayKeybind();
                return null != e ? e.shortcut : [];
            },
            [],
        )),
        (d = (0, l.bG)([eF.A], () => eF.A.isInputLocked(a), [a])),
        (c = (0, l.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(n);
                return g.A.isVisible(e) && g.A.isFocused(e);
            },
            [n],
        )),
        (m = i.useRef([])),
        (p = i.useMemo(() => (0, er.pi)(u).map((e) => eH(e)), [u])),
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
                let t = eH(e),
                    n = m.current,
                    r = n.some((e) => eY(e, t)),
                    i = (function (e) {
                        let t = e.key.toLowerCase();
                        for (let e of eV) if (t.includes(e)) return !0;
                        return !1;
                    })(e);
                (r || i || n.push(t),
                    0 !== p.length &&
                        n.length === p.length &&
                        p.every((e) => n.some((t) => eY(e, t))) &&
                        (e.preventDefault(), e.stopPropagation()));
            }
            function t(e) {
                let t = eH(e),
                    n = m.current,
                    r = n.findIndex((e) => eY(e, t));
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
            (0, ei.E)();
        }),
        (E = (0, eI.A)()),
        (e = () => {
            (s.A.overlayReady(V.A.getTargetPID()),
                E.addEventListener("keydown", tC, !0),
                E.addEventListener("keyup", tC));
        }),
        (t = () => {
            (E.removeEventListener("keydown", tC, !0), E.removeEventListener("keyup", tC));
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
        (x = i.useRef(null)),
        (0, o.Ay)(() => {
            let e = (0, ex.qv)(),
                t = f.Ay.getVoiceChannelId(),
                n = q.A.getChannel(t),
                r = null != n ? Z.A.getGuild(n.guild_id) : null,
                i = null != H.A.getCurrentUserActiveStream(),
                l = null != t,
                o = (0, K.A)(Y.Ay) && !i && null != e,
                a = l && null != r && null != t,
                u = V.A.getTargetPID();
            if (F.default.hasChangedRenderMode(u)) return;
            let d = eJ.A.isNotificationDisabled(tm.KS.WelcomeNudge),
                c = eJ.A.isNotificationDisabled(tm.KS.GoLiveNudge),
                h = eJ.A.isNotificationDisabled(tm.KS.ActivityInvite),
                g = [];
            (!d &&
                (g.push({ type: tm.Jr.WELCOME }),
                !c &&
                    (o && a
                        ? g.push({ type: tm.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : o && g.push({ type: tm.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || g.push({ type: tm.Jr.CONTENT_INVENTORY, entries: [] })),
                null != x.current && clearTimeout(x.current),
                (x.current = setTimeout(() => {
                    s.A.overlayMounted(...g);
                }, 1e3)));
        }),
        (0, o.l0)(() => {
            null != x.current && (clearTimeout(x.current), (x.current = null));
        }),
        ((b = (0, tt.H)()),
        i.useEffect(() => {
            b && (0, e4.listProjects)();
        }, [b]),
        (0, e7.A)({ refetchOnMount: !1 }),
        (C = (0, eS.A)()),
        (N = (0, l.yK)([e5.A, ta, Z.A], () =>
            e5.A.getServerProjects().filter((e) => {
                let t = e.application_id;
                return (
                    null != e.guild_id &&
                    null != Z.A.getGuild(e.guild_id) &&
                    !e5.A.isServerProjectEnabled(t) &&
                    !ta.isDismissed(t)
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
                    (O.current.add(t), ti.h.dispatch({ type: "CONJURE_SERVER_OVERLAY_WIDGET_NOTIFY", project: e }));
            }
        }, [C, N]),
        (_ = (0, l.bG)([e5.A], () => e5.A.hasOwnedFetchSucceeded())),
        (D = (0, l.bG)([e5.A], () => e5.A.hasServerFetchSucceeded())),
        (S = (0, l.bG)([e5.A], () => e5.A.getProjects())),
        (I = i.useMemo(() => (b ? S : S.filter(e6.j)), [b, S])),
        (j = b && _),
        (T = (0, l.bG)([h.A], () => null != h.A.getLayout(eM.GJ))),
        (k = i.useMemo(() => I.filter((e) => !(0, e6.j)(e)), [I])),
        i.useEffect(() => {
            for (let e of k) (0, e9.fD)(e.id);
        }, [k]),
        (R = (0, eS.A)()),
        i.useEffect(() => {
            R || (0, e9.mw)(k.map((e) => e.id));
        }, [R, k]),
        (L = (0, l.yK)([h.A], () => h.A.getWidgetsByTypeAndLayout(ej.uss.CONJURE, eM.GJ))),
        i.useEffect(() => {
            if ((!j && !D) || !T) return;
            let e = h.A.getWidgetDefaultSettings(ej.uss.CONJURE);
            if (null == e) return;
            let t = (0, tn.c3)({
                layoutId: eM.GJ,
                listed: I,
                existing: L,
                layoutSize: g.A.windowSize((0, y.Q2)((0, eI.b)())),
                defaultSettings: e,
                removable: { owned: j, server: D },
            });
            if (!(0, tn.P$)(t)) {
                for (let e of t.deleteWidgetIds) (0, eb.uv)(e);
                for (let { widgetId: e, meta: n } of t.metaUpdates) (0, eb.cC)(e, { ...n });
                for (let { widgetId: e, minSize: n } of t.minSizeUpdates) (0, eb.Ju)({ widgetId: e, minSize: n });
                if ((t.create.length > 0 && (0, eb.uF)(t.create), t.deleteWidgetIds.length > 0)) {
                    let e = new Set();
                    for (let t of h.A.getWidgetsByTypeAndLayout(ej.uss.CONJURE, eM.GJ))
                        (0, te.Du)(t) && e.add(t.meta.applicationId);
                    (0, tr.A)(e);
                }
            }
        }, [j, D, T, I, L]),
        B || W)
            ? null
            : (0, r.jsx)(G.f5, {
                  value: z,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: tp.Lw,
                      children: [
                          ty,
                          (0, r.jsx)(tO, {}),
                          (0, r.jsx)(e8, {}),
                          (0, r.jsx)(el.A, {}),
                          (0, r.jsx)(P.N, { appContext: ej.BRT.OVERLAY }),
                          (0, r.jsx)(tN, {}),
                      ],
                  }),
              })
    );
}
var tD = n(661886),
    tS = n(682763);
function tI(e, t) {
    tD.A.getPopoutInitializationStages()[e] !== t &&
        ti.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175);
var tj = n(366032);
(n(847181), n(921955));
let tT = !m.isPlatformEmbedded && !1,
    tk = new u.A("AppOverlay");
function tR(e, t) {
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
function tP() {
    s.A.setFocusedPID(A.DEV_PID, null);
}
function tL() {
    s.A.setFocusedPID(null, null);
}
let tM = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: u } = e;
    ((t = (0, l.bG)([d.A], () => d.A.getWindow(u))),
        (0, o.Ay)(() => {
            if (null == t) return;
            let e = tT || (0, eX.SE)();
            return (
                e &&
                    (t.document.hasFocus() && s.A.setFocusedPID(A.DEV_PID, null),
                    t.addEventListener("focus", tP),
                    t.addEventListener("blur", tL)),
                () => {
                    e && (t.removeEventListener("focus", tP), t.removeEventListener("blur", tL));
                }
            );
        }));
    let b = (function (e, t) {
            let n,
                r,
                a = (0, l.bG)(
                    [tD.A],
                    () => !!(!m.isPlatformEmbedded || (0, eX.SE)()) || tD.A.isWindowHandleInitialized(),
                ),
                u = (0, l.bG)([d.A], () => d.A.getWindow(e)),
                c = (0, l.bG)([V.A], () => V.A.getFocusedPID()),
                A = i.useMemo(() => !!(!m.isPlatformEmbedded || (0, eX.SE)()) || (null != c && -1 !== c), [c]),
                [w, b] = i.useState(!1),
                C = i.useRef(!1),
                N = i.useCallback(() => {
                    let e = V.A.getTargetPID(),
                        n = null != f.Ay.getVoiceChannelId();
                    ((0, x.g)(ej.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: V.A.isPinned(ej.uss.TEXT),
                        overlay_render_method: E.Ue[F.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, tS.Fd)());
                }, [t]),
                O = i.useRef(!1),
                _ = i.useRef(null),
                D = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await tR(e, _), O.current)) return;
                            tI("cssLoaded", !0);
                        } catch (e) {
                            (tk.error("Timed out waiting for CSS to load", e),
                                s.A.setOverlayCrashed(V.A.getTargetPID(), e),
                                tI("errorMessage", "CSS failed load"));
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
                                            (tk.error("Window does not exist while trying to show inactive", e),
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
                                                    (tk.error(`Failed to show inactive, retrying in ${t}ms`, e),
                                                        await new Promise((e) => setTimeout(e, t)));
                                                } else throw ((0, v.pj)(e, E.Ue.OutOfProcess), e);
                                            }
                                    }
                                })(e, t),
                                O.current)
                            )
                                return;
                            (0, tS.Mq)();
                        } catch (e) {
                            (s.A.setOverlayCrashed(V.A.getTargetPID(), e), tI("errorMessage", "showInactive failed"));
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
                    if (!C.current && (tI("hasUseEffectFired", !0), tI("trackedPidFocused", A), a)) {
                        if (null == u) return void tI("errorMessage", "No targetOverlayWindow");
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
                        ((C.current = !0), tI("reactInitializationStarted", !0), D(u, e));
                    }
                }, [D, A, e, u, a]),
                (0, o.l0)(() => {
                    (clearInterval(_.current), (O.current = !0));
                }),
                (n = (0, l.bG)([g.A], () => g.A.windowSize(null != u ? (0, y.Q2)(u) : void 0))),
                (r = (0, l.bG)([V.A], () => V.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != u && w && u.innerHeight === n.height && u.innerWidth === n.width)
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
                }, [w, u, c, r, n]),
                w
            );
        })(u, eM.GJ),
        C = (0, l.bG)([V.A], () => V.A.getFocusedPID()),
        N = (0, l.bG)([eF.A], () => eF.A.isInputLocked(C), [C]),
        O = (0, l.bG)([F.default, V.A], () =>
            (0, tj.S)(V.A.getNativeLimitedInteraction(), F.default.getOverlayMethod(V.A.getTargetPID())),
        );
    return b
        ? (0, r.jsx)(w.p, {
              disabled: O,
              children: (0, r.jsxs)(c.A, {
                  themeOverride: ej.NJ8.ONYX,
                  appContext: ej.BRT.OVERLAY,
                  withTitleBar: n,
                  windowKey: u,
                  title: "Discord Overlay",
                  hideModals: N,
                  children: [(0, r.jsx)(t_, {}), (0, r.jsx)(a.Al, {})],
              }),
          })
        : null;
});
