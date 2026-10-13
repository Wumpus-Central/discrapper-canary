(n.r(t), n.d(t, { waitForCSSLoad: () => tL, default: () => tG }));
var r = n(477900),
    i = n(582128),
    l = n(17928),
    s = n(684013),
    o = n(964486),
    a = n(573435),
    c = n(626584),
    d = n(567249),
    u = n(979186),
    h = n(32584),
    g = n(309010),
    f = n(531685),
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
    j = n(952270),
    T = n(663417),
    S = n(138134),
    k = n(972213),
    L = n(328162),
    M = n(231723),
    P = n(345874),
    R = n(442433),
    G = n(793574),
    U = n(688810),
    K = n(607470),
    B = n(880144),
    F = n(616356),
    V = n(734057),
    W = n(71393),
    H = n(192820),
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
    ec = n(660183),
    ed = n(831931);
function eu(e) {
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
                                  children: ec.intl.string(ec.t.jzjJQg),
                              }),
                              (0, r.jsx)(Q.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ec.intl.string(ec.t["5dOfxb"]),
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
                                          children: ec.intl.string(ec.t.S6VRyK),
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
                                          children: ec.intl.string(ec.t.xq8CKY),
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
                                          children: ec.intl.string(ec.t.GwpRe0),
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
                                          children: ec.intl.string(ec.t.VUoC5F),
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
    eg = n(351906),
    ef = n(243612),
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
                resizeValidation: c,
                containerRenderGate: d,
                className: u,
                dragContainerClassName: g,
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
            O = (0, l.bG)([f.A], () => f.A.windowSize((0, y.Q2)(N))),
            _ = i.useCallback((e, t, n, r, i) => {
                let l = f.A.windowSize((0, y.Q2)((0, eE.b)())),
                    s = (0, eA.NO)(n, l),
                    o = (0, eA.R9)(r, l);
                ((0, ep.uD)(t), (0, ep.Ju)({ widgetId: t, anchor: s, size: o }));
                let a = e === ey.P.MOVE,
                    c = (0, eA.Ly)(n, l.width, l.height, i.width, i.height);
                (0, E.g)(eC.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !a,
                    was_dragged: a,
                    widget_type: h.A.getWidgetType(t),
                    window_width: l.width,
                    window_height: l.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: c.left,
                    widget_top: c.top,
                });
            }, []),
            D = i.useCallback((e) => {
                (0, ep.uD)(e);
            }, []),
            { id: I, pinned: j, zIndex: T, size: S, anchor: k, minSize: L } = t,
            M = i.useMemo(() => (0, eA.fd)(S, O), [S, O]),
            P = (0, eA.Nv)(k, O),
            { resizeX: R, resizeY: G, dragAnywhere: U, constrainAutoSizeToExplicitResizeEvents: K } = p ?? {},
            B = !A,
            F = j || !A,
            V = i.useMemo(() => ({ minX: 0, minY: 0, maxX: O.width, maxY: O.height }), [O]),
            W = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: u }),
                [t, n, u],
            ),
            H = null != p && p.layoutPolicy !== em.X.DEBUG,
            Y = i.useCallback(
                (e) =>
                    null != s || null != a || H
                        ? (0, r.jsxs)("div", {
                              className: b()(eN.vJ, m && eN.vw),
                              children: [
                                  s?.(t),
                                  a?.(t, e),
                                  H
                                      ? (0, r.jsx)(ex.hM, {
                                            label: ec.intl.string(eb.default.uF5NtC),
                                            onClick: () => (0, ep.sx)([t.id], !0),
                                        })
                                      : null,
                              ],
                          })
                        : null,
                [t, s, m, a, H],
            ),
            z = (0, l.bG)([ev.A], () => ev.A.hasRenderDebugMode(x.x7.WidgetAreas)),
            J = i.useMemo(() => {
                if (null != c) return (e) => c({ ...e, widget: t });
            }, [c, t]);
        return C
            ? (0, r.jsx)(ey.A, {
                  className: b()({ [eN.Yz]: z, [eN.xu]: z && !j, [eN.E]: z && j }, g),
                  id: I,
                  size: M,
                  anchor: P,
                  container: V,
                  minSize: L ?? { width: 0, height: 0 },
                  hidden: !F,
                  locked: A,
                  resizeX: R ?? !1,
                  resizeY: G ?? !1,
                  style: { zIndex: T },
                  dragAnywhere: U ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: K ?? !1,
                  active: B,
                  onUpdate: _,
                  onClick: D,
                  targetWindow: N,
                  forceShowExtras: m,
                  renderExtras: Y,
                  resizeValidation: J,
                  children: W,
              })
            : null;
    });
var eD = n(85395),
    eI = n(644434);
function ej(e) {
    return e.widget.id;
}
function eT(e, t, n, i) {
    return n === eh.wL.YEETED ? null : (0, r.jsx)(e_, { ...t, transitionState: n, cleanUp: i }, e);
}
let eS = [];
function ek() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.A,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.A,
        n = e.getLayout(eI.GJ);
    if (null == n) return eS;
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
        s = (0, l.bG)([f.A], () => f.A.windowSize((0, y.Q2)(n))),
        o = (0, l.bG)([h.A, eg.A], () => ek(h.A, eg.A), [], ef.VC),
        a = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: s, children: e }), [t, s]);
    return (0, r.jsx)(eh.F, { items: o, renderItem: eT, getItemKey: ej, wrapChildren: a });
});
var eM = n(233741),
    eP = n(222506);
let eR = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eG(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l };
}
function eU(e, t) {
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
    eV = n(237984),
    eW = n(394072),
    eH = n(667419),
    eY = n(528772),
    ez = n(944775),
    eJ = n(317084),
    e$ = n(427603),
    eX = n(980504),
    eZ = n(355870);
let eQ = i.memo(function () {
    let [e, t] = (0, l.yK)([eY.A], () => [eY.A.enabled, eY.A.keepOpen]),
        n = (0, l.bG)([g.Ay], () => g.Ay.getVoiceChannelId()),
        i = (0, l.bG)([V.A], () => V.A.getChannel(n), [n]),
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
    e8 = n(155037),
    e5 = n(331322),
    e4 = n(255324);
let e6 = Array.from(new Set(Object.values(eD.A).flatMap((e) => e?.containerRenderGate?.stores ?? []))),
    e7 = [h.A, eg.A, ...e6];
function e9(e) {
    let { onBrowse: t } = e;
    return (0, l.bG)(e7, () =>
        ek(h.A, eg.A).every((e) => {
            let { widget: t, containerRenderGate: n } = e;
            return n?.shouldRender({ widget: t, locked: !1 }) === !1;
        }),
    )
        ? (0, r.jsx)(eK.A, {
              className: e4.p$,
              children: (0, r.jsxs)(e5.B, {
                  align: "center",
                  gap: 12,
                  "data-testid": "overlay-widgets-empty-state",
                  children: [
                      (0, r.jsx)(I.f, { size: "lg", color: "currentColor" }),
                      (0, r.jsxs)(e5.B, {
                          align: "center",
                          gap: 4,
                          children: [
                              (0, r.jsx)(en.D, {
                                  variant: "heading-lg/semibold",
                                  color: "text-strong",
                                  children: ec.intl.string(eb.default.Fgbxdv),
                              }),
                              (0, r.jsx)(Q.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ec.intl.string(eb.default.Flw3aW),
                              }),
                          ],
                      }),
                      (0, r.jsx)(D.$, {
                          variant: "overlay-primary",
                          icon: I.f,
                          text: ec.intl.string(eb.default["Qk/rJB"]),
                          onClick: t,
                      }),
                  ],
              }),
          })
        : null;
}
var te = n(193249),
    tt = n(323384),
    tn = n(866665),
    tr = n(408278),
    ti = n(789645),
    tl = n(627363),
    ts = n(486020),
    to = n(661943);
let ta = [
    eC.uss.VOICE_V3,
    eC.uss.QUICK_ACTIONS,
    eC.uss.NOTIFICATIONS,
    eC.uss.TEXT_CHAT_V3,
    eC.uss.FRIENDS,
    eC.uss.ACTIVITY,
    eC.uss.VIDEO,
    eC.uss.GO_LIVE,
];
function tc(e) {
    let { icon: t, label: n, description: i, checked: l, onChange: s } = e;
    return (0, r.jsxs)("div", {
        className: e4.nM,
        children: [
            (0, r.jsx)("div", { className: e4.aL, children: t }),
            (0, r.jsx)("div", {
                className: e4.L6,
                children: (0, r.jsx)(te.d, { label: n, description: i, checked: l, onChange: s }),
            }),
        ],
    });
}
function td(e) {
    let { type: t, Icon: n, label: i, description: s } = e,
        o = (0, l.bG)([h.A], () => (0, eH.$e)(t, h.A), [t]);
    return (0, r.jsx)(tc, {
        icon: (0, r.jsx)(n, { size: "md", color: "currentColor" }),
        label: i,
        description: s,
        checked: o,
        onChange: (e) => (0, eH.JA)(t, !e),
    });
}
function tu(e) {
    let { project: t } = e,
        n = t.application_id,
        i = (0, l.bG)([h.A], () => (0, to.$5)(n, h.A), [n]),
        { data: s } = (0, tl.YY)(n),
        o = null != s ? ts.Ay.getApplicationIconURL({ id: n, icon: s.icon, size: 32 }) : null;
    return (0, r.jsx)(tc, {
        icon:
            null != o
                ? (0, r.jsx)("img", { src: o, alt: "", className: e4.Z2 })
                : (0, r.jsx)(tt.k, { size: "md", color: "currentColor" }),
        label: t.name,
        description: ec.intl.string(eb.default["P7TOO/"]),
        checked: !i,
        onChange: (e) => (0, to.ht)(n, !e),
    });
}
function th(e) {
    let t,
        n,
        { onClose: s } = e,
        o = i.useMemo(
            () =>
                ta.flatMap((e) => {
                    let t = eD.A[e];
                    return t?.label != null &&
                        null != t.description &&
                        null != t.icon &&
                        (null == t.predicate || t.predicate())
                        ? [{ type: e, Icon: t.icon, label: t.label(), description: t.description() }]
                        : [];
                }),
            [],
        ),
        a =
            ((t = i.useMemo(() => eD.A[eC.uss.CONJURE]?.predicate?.() ?? !1, [])),
            (n = (0, l.bG)([e0.A], () => e0.A.getProjects())),
            t ? n : []),
        c = ec.intl.string(ec.t.cpT0Cq);
    return (0, r.jsx)(eK.A, {
        className: e4.nd,
        children: (0, r.jsxs)("section", {
            className: e4.SV,
            "aria-labelledby": "overlay-widgets-panel-title",
            "data-testid": "overlay-widgets-panel",
            children: [
                (0, r.jsxs)(e5.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "start",
                    gap: 8,
                    children: [
                        (0, r.jsxs)(e5.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(en.D, {
                                    id: "overlay-widgets-panel-title",
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ec.intl.string(eb.default["Qk/rJB"]),
                                }),
                                (0, r.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ec.intl.string(eb.default.HUjIgu),
                                }),
                            ],
                        }),
                        (0, r.jsx)(tn.m, {
                            text: c,
                            children: (0, r.jsx)(tr.K, {
                                icon: ti.P,
                                variant: "icon-only",
                                size: "sm",
                                "aria-label": c,
                                onClick: s,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(e5.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(en.D, {
                            variant: "heading-sm/semibold",
                            color: "text-muted",
                            children: ec.intl.string(ec.t["/7xJCF"]),
                        }),
                        o.map((e) => {
                            let { type: t, Icon: n, label: i, description: l } = e;
                            return (0, r.jsx)(td, { type: t, Icon: n, label: i, description: l }, t);
                        }),
                    ],
                }),
                a.length > 0
                    ? (0, r.jsxs)(e5.B, {
                          gap: 8,
                          children: [
                              (0, r.jsx)(en.D, {
                                  variant: "heading-sm/semibold",
                                  color: "text-muted",
                                  children: ec.intl.string(eb.default["pbu+Yx"]),
                              }),
                              a.map((e) => (0, r.jsx)(tu, { project: e }, e.id)),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
var tg = n(672396),
    tf = n(558606);
let tp = !p.isPlatformEmbedded && !1,
    tm = tp
        ? (0, r.jsx)(K.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: tf.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function tA(e) {
    e.preventDefault();
}
function ty(e) {
    (0, R.L3)(
        e,
        async () => {
            let { default: e } = await n.e("386437").then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: eI.GJ, version: 4 });
        },
        { context: eC.BRT.OVERLAY },
    );
}
let tv = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i, widgetsPanelOpen: l, onToggleWidgetsPanel: s } = e;
        return (0, r.jsx)(O.D, {
            "data-testid": "overlay-background",
            "data-locked": i,
            className: b()(tf.LK, { [tf.Zo]: !i, [tf.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === eC.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: ty,
            children: i
                ? null
                : (0, r.jsxs)(eK.A, {
                      className: tf.BE,
                      children: [
                          (0, r.jsxs)(_.e, {
                              size: "sm",
                              children: [
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-browse-button",
                                      variant: l ? "overlay-primary" : "overlay-secondary",
                                      icon: I.f,
                                      text: ec.intl.string(eb.default["Qk/rJB"]),
                                      "aria-expanded": l,
                                      onClick: s,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-hide-all-button",
                                      variant: "overlay-secondary",
                                      icon: j.EyeSlashIcon,
                                      text: ec.intl.string(eb.default.MpBSOt),
                                      onClick: eH.ff,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-reset-button",
                                      variant: "overlay-secondary",
                                      icon: T.RefreshIcon,
                                      text: ec.intl.string(ec.t["hW+EMu"]),
                                      onClick: tw,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(ee, {
                              "data-testid": "overlay-report-button",
                              onClick: () => (0, eV.b)(G.A.OVERLAY, eC.BRT.OVERLAY),
                              IconComponent: S.FlagIcon,
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
    tx = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(eK.A, {
                  className: tf.BE,
                  children: (0, r.jsx)(ee, {
                      "data-testid": "overlay-unlock-button",
                      onClick: () => s.A.setInputLocked(!1, eM.A.getTargetPID()),
                      IconComponent: L.w,
                  }),
              })
            : null;
    });
function tw() {
    s.A.resetDefaultLayout(eI.GJ, 4);
}
function tE() {
    s.A.setInputLocked(!0, eM.A.getTargetPID());
}
function tC(e) {
    let t = eP.A.isInputLocked(eM.A.getTargetPID());
    ("alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? J._.dispatch(eC.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && J._.dispatch(eC.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && s.A.setInputLocked(!0, eM.A.getTargetPID());
        })(e, t),
        (tp || (0, eW.SE)()) &&
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
            (e.preventDefault(), e.stopPropagation(), s.A.setInputLocked(!t, eM.A.getTargetPID())));
}
let tb = i.memo(function () {
        return (0, l.bG)([ev.A], () => ev.A.hasRenderDebugMode(x.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: tf.N1 })
            : null;
    }),
    tN = i.memo(function () {
        let e = (0, eE.A)(),
            t = (0, l.bG)([eM.A], () => eM.A.getTargetPID()),
            n = (0, l.bG)([eP.A], () => eP.A.isInputLocked(t), [t]),
            s = (0, l.bG)([eM.A], () => eM.A.isFocused(t), [t]),
            o = (0, l.bG)(
                [Y.Ay],
                () => (null != Y.Ay.getOverlayKeybind() ? (0, $.dI)(Y.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        i.useEffect(() => {
            if ((J._.dispatch(eC.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                return (
                    (0, N.closeAllModalsInContext)(M.KX),
                    e.addEventListener("contextmenu", tA, !1),
                    () => {
                        e.removeEventListener("contextmenu", tA, !1);
                    }
                );
            e.removeEventListener("contextmenu", tA, !1);
        }, [n, e]);
        let [a, c] = i.useState(!1);
        n && a && c(!1);
        let d = i.useCallback(() => c((e) => !e), []),
            u = i.useCallback(() => c(!0), []),
            h = i.useCallback(() => c(!1), []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tv, { locked: n, keybind: o, onClick: tE, widgetsPanelOpen: a, onToggleWidgetsPanel: d }),
                (0, r.jsx)(eL, { className: b()({ [tf.ZK]: n, [tf.al]: !n }) }),
                n || a ? null : (0, r.jsx)(e9, { onBrowse: u }),
                !n && a ? (0, r.jsx)(th, { onClose: h }) : null,
                (tp || (0, eW.SE)()) && (0, r.jsx)(tx, { locked: n, focused: s }),
                (0, r.jsx)(eu, { locked: n }),
            ],
        });
    });
function tO() {
    var e, t;
    let n,
        a,
        c,
        d,
        u,
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
        j = (0, l.bG)(
            [f.A],
            () => {
                let e = (0, y.Q2)(D),
                    t = f.A.windowSize(e);
                return t.height < 360 || t.width < 640;
            },
            [D],
        ),
        { analyticsLocations: T } = (0, U.Ay)(G.A.OVERLAY);
    return (
        (n = (0, eE.A)()),
        (a = (0, l.bG)([eM.A], () => eM.A.getTargetPID(), [])),
        (c = (0, l.bG)(
            [Y.Ay],
            () => {
                let e = Y.Ay.getOverlayKeybind();
                return null != e ? e.shortcut : [];
            },
            [],
        )),
        (d = (0, l.bG)([eP.A], () => eP.A.isInputLocked(a), [a])),
        (u = (0, l.bG)(
            [f.A],
            () => {
                let e = (0, y.Q2)(n);
                return f.A.isVisible(e) && f.A.isFocused(e);
            },
            [n],
        )),
        (p = i.useRef([])),
        (m = i.useMemo(() => (0, $.pi)(c).map((e) => eG(e)), [c])),
        (A = i.useMemo(() => c.length > 0, [c])),
        (v = !d && A && u),
        i.useEffect(() => {
            p.current = [];
        }, [d, m]),
        i.useEffect(() => {
            if (!v) {
                p.current = [];
                return;
            }
            function e(e) {
                let t = eG(e),
                    n = p.current,
                    r = n.some((e) => eU(e, t)),
                    i = (function (e) {
                        let t = e.key.toLowerCase();
                        for (let e of eR) if (t.includes(e)) return !0;
                        return !1;
                    })(e);
                (r || i || n.push(t),
                    0 !== m.length &&
                        n.length === m.length &&
                        m.every((e) => n.some((t) => eU(e, t))) &&
                        (e.preventDefault(), e.stopPropagation()));
            }
            function t(e) {
                let t = eG(e),
                    n = p.current,
                    r = n.findIndex((e) => eU(e, t));
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
            (s.A.overlayReady(eM.A.getTargetPID()),
                x.addEventListener("keydown", tC, !0),
                x.addEventListener("keyup", tC));
        }),
        (t = () => {
            (x.removeEventListener("keydown", tC, !0), x.removeEventListener("keyup", tC));
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
            let e = (0, ef.qv)(),
                t = g.Ay.getVoiceChannelId(),
                n = V.A.getChannel(t),
                r = null != n ? W.A.getGuild(n.guild_id) : null,
                i = null != F.A.getCurrentUserActiveStream(),
                l = null != t,
                o = (0, B.A)(H.Ay) && !i && null != e,
                a = l && null != r && null != t,
                c = eM.A.getTargetPID();
            if (eB.default.hasChangedRenderMode(c)) return;
            let d = eF.A.isNotificationDisabled(tg.KS.WelcomeNudge),
                u = eF.A.isNotificationDisabled(tg.KS.GoLiveNudge),
                h = eF.A.isNotificationDisabled(tg.KS.ActivityInvite),
                f = [];
            (!d &&
                (f.push({ type: tg.Jr.WELCOME }),
                !u &&
                    (o && a
                        ? f.push({ type: tg.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : o && f.push({ type: tg.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || f.push({ type: tg.Jr.CONTENT_INVENTORY, entries: [] })),
                null != E.current && clearTimeout(E.current),
                (E.current = setTimeout(() => {
                    s.A.overlayMounted(...f);
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
                layoutSize: f.A.windowSize((0, y.Q2)((0, eE.b)())),
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
                    (0, e8.A)(e);
                }
            }
        }, [C, b, O, N, _]),
        j || I)
            ? null
            : (0, r.jsx)(U.f5, {
                  value: T,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: tf.Lw,
                      children: [
                          tm,
                          (0, r.jsx)(tN, {}),
                          (0, r.jsx)(eQ, {}),
                          (0, r.jsx)(Z.A, {}),
                          (0, r.jsx)(P.N, { appContext: eC.BRT.OVERLAY }),
                          (0, r.jsx)(tb, {}),
                      ],
                  }),
              })
    );
}
var t_ = n(661886),
    tD = n(682763),
    tI = n(73153);
function tj(e, t) {
    t_.A.getPopoutInitializationStages()[e] !== t &&
        tI.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175);
var tT = n(366032);
(n(191701), n(921955));
let tS = !p.isPlatformEmbedded && !1,
    tk = new c.A("AppOverlay");
function tL(e, t) {
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
async function tM(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await m.Ay.isAlwaysOnTop(t);
        } catch (e) {
            (tk.error("Window does not exist while trying to show inactive", e), (0, v.pj)(e, x.Ue.OutOfProcess));
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await m.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                m.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    (tk.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t)));
                } else throw ((0, v.pj)(e, x.Ue.OutOfProcess), e);
            }
    }
}
function tP() {
    s.A.setFocusedPID(A.DEV_PID, null);
}
function tR() {
    s.A.setFocusedPID(null, null);
}
let tG = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: c } = e;
    ((t = (0, l.bG)([d.A], () => d.A.getWindow(c))),
        (0, o.Ay)(() => {
            if (null == t) return;
            let e = tS || (0, eW.SE)();
            return (
                e &&
                    (t.document.hasFocus() && s.A.setFocusedPID(A.DEV_PID, null),
                    t.addEventListener("focus", tP),
                    t.addEventListener("blur", tR)),
                () => {
                    e && (t.removeEventListener("focus", tP), t.removeEventListener("blur", tR));
                }
            );
        }));
    let m = (function (e, t) {
            let n,
                r,
                a = (0, l.bG)(
                    [t_.A],
                    () => !!(!p.isPlatformEmbedded || (0, eW.SE)()) || t_.A.isWindowHandleInitialized(),
                ),
                c = (0, l.bG)([d.A], () => d.A.getWindow(e)),
                u = (0, l.bG)([eM.A], () => eM.A.getFocusedPID()),
                m = i.useMemo(() => !!(!p.isPlatformEmbedded || (0, eW.SE)()) || (null != u && -1 !== u), [u]),
                [A, v] = i.useState(!1),
                w = i.useRef(!1),
                C = i.useCallback(() => {
                    let e = eM.A.getTargetPID(),
                        n = null != g.Ay.getVoiceChannelId();
                    ((0, E.g)(eC.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: eM.A.isPinned(eC.uss.TEXT),
                        overlay_render_method: x.Ue[eB.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, tD.Fd)());
                }, [t]),
                b = i.useRef(!1),
                N = i.useRef(null),
                O = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await tL(e, N), b.current)) return;
                            tj("cssLoaded", !0);
                        } catch (e) {
                            (tk.error("Timed out waiting for CSS to load", e),
                                s.A.setOverlayCrashed(eM.A.getTargetPID(), e),
                                tj("errorMessage", "CSS failed load"));
                            return;
                        }
                        try {
                            if ((await tM(e, t), b.current)) return;
                            (0, tD.Mq)();
                        } catch (e) {
                            (s.A.setOverlayCrashed(eM.A.getTargetPID(), e), tj("errorMessage", "showInactive failed"));
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
                    if (!w.current && (tj("hasUseEffectFired", !0), tj("trackedPidFocused", m), a)) {
                        if (null == c) return void tj("errorMessage", "No targetOverlayWindow");
                        if (!m) {
                            _.current ||
                                (s.A.updateOverlayState(
                                    eM.A.getTargetPID(),
                                    x.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (_.current = !0));
                            return;
                        }
                        ((w.current = !0), tj("reactInitializationStarted", !0), O(c, e));
                    }
                }, [O, m, e, c, a]),
                (0, o.l0)(() => {
                    (clearInterval(N.current), (b.current = !0));
                }),
                (n = (0, l.bG)([f.A], () => f.A.windowSize(null != c ? (0, y.Q2)(c) : void 0))),
                (r = (0, l.bG)([eM.A], () => eM.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != c && A && c.innerHeight === n.height && c.innerWidth === n.width)
                        return (
                            (e = c.requestAnimationFrame(() => {
                                e = c.requestAnimationFrame(() => {
                                    (c.clearTimeout(t), s.A.overlayUIFocusedPid(u ?? -1, r));
                                });
                            })),
                            (t = c.setTimeout(() => {
                                (c.cancelAnimationFrame(e), s.A.overlayUIFocusedPid(u ?? -1, r));
                            }, 500)),
                            () => {
                                (c.cancelAnimationFrame(e), c.clearTimeout(t));
                            }
                        );
                }, [A, c, u, r, n]),
                A
            );
        })(c, eI.GJ),
        v = (0, l.bG)([eM.A], () => eM.A.getFocusedPID()),
        C = (0, l.bG)([eP.A], () => eP.A.isInputLocked(v), [v]),
        b = (0, l.bG)([eB.default, eM.A], () =>
            (0, tT.S)(eM.A.getNativeLimitedInteraction(), eB.default.getOverlayMethod(eM.A.getTargetPID())),
        );
    return m
        ? (0, r.jsx)(w.p, {
              disabled: b,
              children: (0, r.jsxs)(u.A, {
                  themeOverride: eC.NJ8.ONYX,
                  appContext: eC.BRT.OVERLAY,
                  withTitleBar: n,
                  windowKey: c,
                  title: "Discord Overlay",
                  hideModals: C,
                  children: [(0, r.jsx)(tO, {}), (0, r.jsx)(a.Al, {})],
              }),
          })
        : null;
});
