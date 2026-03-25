n.d(t, {
    DA: () => e_,
    F1: () => ev,
    G6: () => eu,
    Gj: () => eC,
    Gk: () => eN,
    PP: () => em,
    Ql: () => eg,
    VQ: () => ey,
    fE: () => eb,
    nR: () => eT,
    ze: () => eI,
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(812729),
    o = n.n(r),
    d = n(284009),
    c = n.n(d),
    u = n(735438),
    m = n.n(u),
    _ = n(311907),
    g = n(990078),
    x = n(397927),
    A = n(544420),
    h = n(97260),
    p = n(684013),
    f = n(117178),
    T = n(56562),
    S = n(964486),
    E = n(793574),
    b = n(587895),
    C = n(429913),
    v = n(15285),
    N = n(286237),
    I = n(769015),
    j = n(496885),
    y = n(810412),
    O = n(93465),
    R = n(206885),
    L = n(41984),
    P = n(589051),
    D = n(833551),
    G = n(592598),
    M = n(395011),
    U = n(663677),
    k = n(237984),
    w = n(897720),
    V = n(393172),
    B = n(968898),
    F = n(847521),
    H = n(942405),
    z = n(824189),
    Y = n(95701),
    X = n(427157),
    K = n(288737),
    W = n(760751),
    Z = n(555528),
    q = n(189081),
    Q = n(287809),
    J = n(532624),
    $ = n(242286),
    ee = n(256415),
    et = n(954571),
    en = n(403362),
    ei = n(350535),
    es = n(9302),
    el = n(780964),
    ea = n(652215),
    er = n(672396);
n(392164);
var eo = n(985018),
    ed = n(322877);
let ec = ex(null),
    eu = 1,
    em = 25,
    e_ = [0, 5, 10, 15, 20, 25];
function eg() {
    var e;
    let t = ex(ec);
    (e = ec),
        m().isEqual(m().omit(t, "old_enabled"), m().omit(e, "old_enabled")) ||
            (et.default.track(ea.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (ec = t));
}
function ex(e) {
    let t = ee.default.getNotificationPositionMode(),
        n = t !== ea.G6Q.DISABLED,
        i = J.Ay.getOverlayKeybind(),
        s = J.Ay.getOverlayChatKeybind();
    return {
        enabled: $.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: G.A.isNotificationDisabled(er.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ei.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, ei.dI)(s.shortcut) : null,
        text_opacity_slider: ee.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? $.default.enabled,
    };
}
function eA(e) {
    let {
        header: t,
        icon: n,
        title: s,
        description: l,
        action: r,
        hint: o,
        warning: d,
        onClick: c,
        "aria-label": u,
        className: m,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(ed.HS, m),
        children: [
            (0, i.jsxs)(x.sqX, {
                "aria-label": u,
                onClick: c,
                children: [
                    null != t && (0, i.jsx)("div", { className: ed.x_, children: t }),
                    (0, i.jsxs)("div", {
                        className: ed.rN,
                        children: [
                            null != n && (0, i.jsx)("div", { className: ed.$t, children: n }),
                            (0, i.jsxs)("div", {
                                className: ed.c8,
                                children: [
                                    (0, i.jsx)(x.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: ed.SZ,
                                        children: s,
                                    }),
                                    null != l &&
                                        (0, i.jsx)(x.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != o &&
                                        (0, i.jsx)(x.Text, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", { className: ed.a$, children: r }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: ed.Om, children: d }),
        ],
    });
}
function eh(e) {
    let { children: t, className: n, onExpand: l, ...r } = e,
        [o, d] = s.useState(!1);
    return (0, i.jsx)(x.Nt8, {
        className: ed.uR,
        collapsibleContent: (0, i.jsx)("div", { className: ed.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(eA, {
                ...r,
                onClick: (e) => {
                    var n;
                    d((n = !o)), l?.(n), t?.(e);
                },
                className: a()(ed.AC, n),
                action: (0, i.jsxs)("div", {
                    className: ed.rc,
                    children: [
                        r.action,
                        o
                            ? (0, i.jsx)(x.abt, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, i.jsx)(x._BQ, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              }),
                    ],
                }),
            });
        },
    });
}
let ep = new Set([
        L.AR.INITIALIZING,
        L.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        L.AR.WAITING_FOR_MODULE_TRACKING,
        L.AR.WAITING_FOR_OVERLAY_OPEN,
        L.AR.WAITING_FOR_POPOUT_OPEN,
        L.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        L.AR.WAITING_FOR_REACT_INITIALIZATION,
        L.AR.WAITING_FOR_PID_FOCUS,
        L.AR.WAITING_FOR_SUCCESSFUL_SHOW,
    ]),
    ef = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eT() {
    let { runningGame: e, runningGameApplication: t } = (0, N.A)(),
        n = e?.pid,
        l = (0, _.bG)(
            [D.default],
            () => (null == e || null == n ? null : D.default.getTrackedGameByPid(n)),
            [e, n],
            o(),
        ),
        { enabledLegacy: a, enabledOOP: r } = (0, _.cf)(
            [W.A, q.A],
            () =>
                null == e && null == l
                    ? { enabledLegacy: !1, enabledOOP: !1 }
                    : null == e
                      ? { enabledLegacy: l?.legacyEnabled ?? !1, enabledOOP: l?.oopEnabled ?? !1 }
                      : (0, v.hw)(e, !1, [W.A, q.A]),
            [e, l],
        ),
        d = (0, _.bG)([v.Ay, W.A, q.A], () => (null == e ? null : (0, v.xU)(e, v.Ay, W.A, q.A)), [e], o()),
        [c, u] = s.useState(r),
        [m, h] = s.useState(a),
        [f, E] = s.useState(!1);
    s.useEffect(() => {
        u(r), h(a);
    }, [r, a]);
    let b = !(0, es.supportsLegacy)(),
        C = !(0, es.supportsOutOfProcess)(),
        { legacyEnabled: O, oopEnabled: R } = (0, _.cf)([D.default], () => D.default.getGlobalEnabledStatus()),
        P = (t, n) => {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case y.OverlayToggledClientSettingType.LEGACY_GAME:
                    h(t), A.A.toggleOverlay(e, t, c), (i = !t && m);
                    break;
                case y.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), A.A.toggleOverlay(e, m, t), (s = !t && c);
                    break;
                case y.OverlayToggledClientSettingType.LEGACY:
                    p.A.setEnabled(t, R), (0, y.Q3)(t, y.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case y.OverlayToggledClientSettingType.OOP:
                    p.A.setEnabled(O, t), (0, y.Q3)(t, y.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || s) &&
                (0, U.L)(
                    i ? y.OverlayToggledClientSettingType.LEGACY_GAME : y.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        },
        G = b && C,
        M = !O && !R,
        k = !c && !O && m && !b,
        w = !m && !R && c && !C,
        V = l?.overlayMethod === L.Ue.Disabled,
        B = l?.state === L.AR.OVERLAY_RENDERING && !V,
        F = l?.state != null && ep.has(l.state) && !V,
        H = l?.overlayMethod === L.Ue.OutOfProcess,
        Y = l?.overlayMethod === L.Ue.OutOfProcessLimitedInteraction,
        X = l?.overlayMethod === L.Ue.Hook,
        K = l?.state === L.AR.OVERLAY_CRASHED || l?.state === L.AR.OVERLAY_CRASHED_DISABLED,
        Z = !c && !m,
        [Q, J] = (() => {
            switch (!0) {
                case B && H:
                    return [
                        eo.intl.format(eo.t.hFVBIg, {
                            overlayMethod: eo.intl.string(eo.t.a3eXSw),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    x.Text,
                                    {
                                        tag: "span",
                                        variant: "text-sm/medium",
                                        color: "text-feedback-positive",
                                        children: e,
                                    },
                                    t,
                                );
                            },
                        }),
                        null,
                    ];
                case B && Y:
                    return [
                        eo.intl.format(eo.t.hFVBIg, {
                            overlayMethod: eo.intl.string(eo.t["506Aba"]),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    x.Text,
                                    {
                                        tag: "span",
                                        variant: "text-sm/medium",
                                        color: "text-feedback-warning",
                                        children: e,
                                    },
                                    t,
                                );
                            },
                        }),
                        null,
                    ];
                case B && X:
                    return [
                        eo.intl.format(eo.t.hFVBIg, {
                            overlayMethod: eo.intl.string(eo.t.bvlpDR),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    x.Text,
                                    { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                    t,
                                );
                            },
                        }),
                        (function () {
                            switch (!0) {
                                case l?.fullscreenType !== T.aI.BORDERLESS_FULLSCREEN:
                                    return eo.intl.string(eo.t.mJmbeC);
                                case C:
                                    return eo.intl.string(eo.t.C7bLTQ);
                                case !l?.oopEnabled:
                                    return eo.intl.string(eo.t.WiY24u);
                                case !R:
                                    return eo.intl.string(eo.t.cAFVsL);
                                case !l?.supportsOutOfProcess:
                                    return eo.intl.string(eo.t.XcGEcs);
                                default:
                                    return eo.intl.string(eo.t.bJXH2v);
                            }
                        })(),
                    ];
                case K:
                    return [eo.intl.string(eo.t.OFC2aw), null];
                case G:
                    return [eo.intl.string(eo.t.m7X4az), null];
                case M:
                    return [eo.intl.string(eo.t["9DUS5l"]), null];
                case Z:
                    return [eo.intl.string(eo.t.nQ9EdJ), null];
                case k:
                case w:
                    return [eo.intl.string(eo.t.VWUn0a), null];
                case F:
                    if (H) return [eo.intl.string(eo.t["s8+CFq"]), null];
                    if (X) return [eo.intl.string(eo.t.JEEdqt), null];
                    if (Y) return [eo.intl.string(eo.t.pzBMwY), null];
                    return [eo.intl.string(eo.t["2Xhy9k"]), null];
                case null == l:
                    return [eo.intl.string(eo.t.vwHPRi), null];
                case V: {
                    let e = l?.fullscreenType === T.aI.FULLSCREEN ? eo.intl.string(eo.t.mJmbeC) : null;
                    return [eo.intl.string(eo.t.VPW4XY), e];
                }
                default:
                    return [eo.intl.string(eo.t.ONovP5), null];
            }
        })();
    (0, S.Ay)(() => {
        A.A.getDetectableGames();
    });
    let [$, ee] = s.useMemo(
        () =>
            F
                ? ["text-muted", x.LU0.colors.TEXT_MUTED.css]
                : B && Y
                  ? ["text-feedback-warning", x.LU0.colors.TEXT_FEEDBACK_WARNING.css]
                  : B && H
                    ? ["text-feedback-positive", x.LU0.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : B && X
                      ? ["text-strong", x.LU0.colors.TEXT_STRONG.css]
                      : ["interactive-text-default", x.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css],
        [F, B, Y, H, X],
    );
    return null == e
        ? null
        : (0, i.jsxs)(eh, {
              onExpand: E,
              className: f ? ed.tx : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      t?.name ?? d?.name ?? e?.gameName ?? "",
                      null != d && d.verified
                          ? (0, i.jsx)(g.m, {
                                text: eo.intl.string(eo.t["4PJP5p"]),
                                children: (0, i.jsx)(j.A, {
                                    size: 16,
                                    color: x.LU0.colors.BACKGROUND_BRAND.css,
                                    children: (0, i.jsx)(x.Uzd, {
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                        color: x.LU0.colors.WHITE.css,
                                    }),
                                }),
                            })
                          : null,
                  ],
              }),
              description: Q,
              hint: null != J ? J : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      B || F ? (0, i.jsx)(x.kN9, { size: "xxs", color: ee }) : (0, i.jsx)("div", { className: ed.W4 }),
                      (0, i.jsx)(x.Text, {
                          variant: "text-xs/semibold",
                          color: $,
                          children: eo.intl.string(eo.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, i.jsx)(I.A, { game: t, pid: e?.pid, size: I.M.MEDIUM }),
              "aria-label": eo.intl.string(eo.t["87O5GC"]),
              action: (0, i.jsx)(x.DUT, {
                  onClick: (e) => ef(e),
                  children: (0, i.jsx)(x.dOG, {
                      checked: (c && R) || (m && O),
                      disabled: G,
                      onChange: (t) => {
                          ((t, n) => {
                              if (null == e) return;
                              let i = !1,
                                  s = !1;
                              switch (n) {
                                  case "game":
                                      A.A.toggleOverlay(e, t, t), h(t), u(t), (i = !t && m), (s = !t && c);
                                      break;
                                  case "global":
                                      p.A.setEnabled(t, t), (i = !t && O), (s = !t && R);
                                      break;
                                  case "both":
                                      p.A.setEnabled(t, t),
                                          A.A.toggleOverlay(e, t, t),
                                          h(t),
                                          u(t),
                                          (i = (!t && O) || (!t && m)),
                                          (s = (!t && R) || (!t && c));
                              }
                              let l = null;
                              i
                                  ? (l =
                                        "game" === n
                                            ? y.OverlayToggledClientSettingType.LEGACY_GAME
                                            : y.OverlayToggledClientSettingType.LEGACY)
                                  : s &&
                                    (l =
                                        "game" === n
                                            ? y.OverlayToggledClientSettingType.OOP_GAME
                                            : y.OverlayToggledClientSettingType.OOP),
                                  null != l && (0, U.L)(l, e.id ?? null);
                          })(
                              t,
                              ((e, t) => {
                                  let n = !t && e,
                                      i = !R && c,
                                      s = !O && m,
                                      l = !c && R,
                                      a = !m && O;
                                  switch (!0) {
                                      case n && (i || s) && (l || a):
                                          return "both";
                                      case n && (i || s):
                                          return "global";
                                      default:
                                          return "game";
                                  }
                              })(t, (c && R) || (m && O)),
                          );
                      },
                  }),
              }),
              warning: (0, i.jsx)(z.A, { className: ed.Hh, game: e }),
              children: [
                  (0, i.jsx)(eA, {
                      title: eo.intl.string(eo.t["7BlVIs"]),
                      description: eo.intl.string(eo.t.ndgADE),
                      hint: R ? void 0 : eo.intl.string(eo.t.cAFVsL),
                      "aria-label": eo.intl.string(eo.t["7BlVIs"]),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.dOG, {
                                  checked: c && R,
                                  disabled: C,
                                  onChange: (e) => {
                                      e && !R
                                          ? P(e, y.OverlayToggledClientSettingType.OOP)
                                          : P(e, y.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: ed.Kz }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(eA, {
                      title: eo.intl.string(eo.t.BfFpW1),
                      description: eo.intl.string(eo.t.OzInYk),
                      hint: O ? void 0 : eo.intl.string(eo.t["3sYHXm"]),
                      "aria-label": eo.intl.string(eo.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.dOG, {
                                  checked: m && O,
                                  disabled: b,
                                  onChange: (e) => {
                                      e && !O
                                          ? P(e, y.OverlayToggledClientSettingType.LEGACY)
                                          : P(e, y.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: ed.Kz }),
                          ],
                      }),
                  }),
              ],
          });
}
function eS(e) {
    let { game: t, gameApplication: n } = e,
        l = s.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        a = (0, _.bG)([b.A], () => (null != n ? n : b.A.getApplication(t?.id)), [n, t]);
    return (0, i.jsx)(I.A, { game: a, pid: l, size: I.M.SMALL });
}
function eE(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: l,
            getEnabledFromStatus: a,
            onChange: r,
            clientSettingType: o,
            ariaLabel: d,
        } = e,
        c = (0, _.cf)([v.Ay, W.A, q.A], () => (0, v.xU)(t, v.Ay, W.A, q.A)),
        u = (0, _.cf)([W.A, q.A], () => (0, v.hw)(t, !1, [W.A, q.A]), [t]),
        m = a(u),
        [g, A] = s.useState(m);
    return (
        s.useEffect(() => {
            A(m);
        }, [m]),
        (0, i.jsx)(eA, {
            title: t.name,
            icon: (0, i.jsx)(eS, { game: c, gameApplication: n }),
            "aria-label": d,
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(x.dOG, {
                        checked: g,
                        disabled: l,
                        onChange: (e) => {
                            let n;
                            return (n = !e && g), void (A(e), r(e, c, u), n && (0, U.L)(o, c.id ?? t?.id ?? null));
                        },
                    }),
                    (0, i.jsx)("div", { className: ed.Kz }),
                ],
            }),
        })
    );
}
function eb() {
    let [e, t] = s.useState(!1),
        { legacyEnabled: n, oopEnabled: l } = (0, _.cf)([D.default], () => D.default.getGlobalEnabledStatus()),
        a = (0, _.yK)([v.Ay], () => v.Ay.getGamesSeen(!0)).filter((e) => !(0, F.n1)(e)),
        r = (0, C.A)(a.map((e) => e.id)),
        o = !(0, es.supportsLegacy)(),
        d = (e) => {
            p.A.setEnabled(e, l);
            let t = v.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, y.Q3)(e, y.OverlayToggledClientSettingType.LEGACY, t),
                !e && n && (0, U.L)(y.OverlayToggledClientSettingType.LEGACY, t);
        },
        c = (e, t, n) => {
            let { enabledOOP: i } = n;
            A.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () =>
                (0, es.supportsLegacy)()
                    ? o
                        ? eo.intl.string(eo.t.r9jEVw)
                        : eo.intl.string(eo.t.OzInYk)
                    : eo.intl.string(eo.t["8Ox6/E"]),
            [o],
        );
    return 0 === a.length
        ? (0, i.jsx)(eA, {
              title: eo.intl.string(eo.t.BfFpW1),
              description: u,
              "aria-label": eo.intl.string(eo.t.BfFpW1),
              className: ed.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.dOG, { checked: n, disabled: o, onChange: (e) => d(e) }),
                      R.O && (0, i.jsx)("div", { className: ed.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(eh, {
              onExpand: t,
              className: e ? ed.tx : void 0,
              title: eo.intl.string(eo.t.BfFpW1),
              description: u,
              "aria-label": eo.intl.string(eo.t.BfFpW1),
              action: (0, i.jsx)(x.DUT, {
                  onClick: (e) => ef(e),
                  children: (0, i.jsx)(x.dOG, { checked: n, disabled: o, onChange: (e) => d(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: ed.SC,
                      children: (0, i.jsx)(x.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eo.intl.string(eo.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(x.IpV, {
                      className: ed.XG,
                      children: a.map((e, t) =>
                          (0, i.jsx)(
                              eE,
                              {
                                  rawGame: e,
                                  clientSettingType: y.OverlayToggledClientSettingType.LEGACY_GAME,
                                  supportDisabled: o,
                                  gameApplication: r[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: c,
                                  ariaLabel: eo.intl.format(eo.t.hvPYsF, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eC() {
    let [e, t] = s.useState(!1),
        { oopEnabled: n, legacyEnabled: l } = (0, _.cf)([D.default], () => D.default.getGlobalEnabledStatus()),
        a = !(0, es.supportsOutOfProcess)(),
        r = (0, _.yK)([v.Ay], () => v.Ay.getGamesSeen(!0)).filter((e) => !(0, F.n1)(e)),
        o = (0, C.A)(r.map((e) => e.id)),
        d = (e) => {
            let t = !e && n;
            p.A.setEnabled(l, e);
            let i = v.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, y.Q3)(e, y.OverlayToggledClientSettingType.OOP, i),
                t && (0, U.L)(y.OverlayToggledClientSettingType.OOP, i);
        },
        c = (e, t, n) => {
            let { enabledLegacy: i } = n;
            A.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () => (R.O ? (a ? eo.intl.string(eo.t.C7bLTQ) : eo.intl.string(eo.t.ndgADE)) : eo.intl.string(eo.t.m7X4az)),
            [a],
        );
    return 0 === r.length
        ? (0, i.jsx)(eA, {
              title: eo.intl.string(eo.t["7BlVIs"]),
              description: u,
              "aria-label": eo.intl.string(eo.t["7BlVIs"]),
              className: ed.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.dOG, { checked: n, disabled: a, onChange: (e) => d(e) }),
                      R.O && (0, i.jsx)("div", { className: ed.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(eh, {
              onExpand: t,
              className: e ? ed.tx : void 0,
              title: eo.intl.string(eo.t["7BlVIs"]),
              description: u,
              "aria-label": eo.intl.string(eo.t["7BlVIs"]),
              action: (0, i.jsx)(x.DUT, {
                  onClick: (e) => ef(e),
                  children: (0, i.jsx)(x.dOG, { checked: n, disabled: a, onChange: (e) => d(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: ed.SC,
                      children: (0, i.jsx)(x.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eo.intl.string(eo.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(x.IpV, {
                      className: ed.XG,
                      children: r.map((e, t) =>
                          (0, i.jsx)(
                              eE,
                              {
                                  rawGame: e,
                                  clientSettingType: y.OverlayToggledClientSettingType.OOP_GAME,
                                  gameApplication: o[t],
                                  supportDisabled: a,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: c,
                                  ariaLabel: eo.intl.format(eo.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function ev() {
    return (0, P.X4)(E.A.USER_SETTINGS)
        ? (0, i.jsx)(eA, {
              title: eo.intl.string(eo.t["z4/l+V"]),
              description: eo.intl.string(eo.t["3aZq/0"]),
              action: (0, i.jsx)(x.Button, {
                  variant: "primary",
                  text: eo.intl.string(eo.t.s2nVhG),
                  onClick: () => {
                      (0, k.b)(E.A.USER_SETTINGS, ea.BRT.APP);
                  },
              }),
              "aria-label": eo.intl.string(eo.t["z4/l+V"]),
          })
        : null;
}
function eN() {
    let e = (0, _.bG)([J.Ay], () => J.Ay.getOverlayKeybind()),
        t = !(0, es.supportsLegacy)(),
        n = !(0, es.supportsOutOfProcess)(),
        [s, l] = (0, _.yK)([v.Ay], () => [v.Ay.canShowAdminWarning, v.Ay.getVisibleGame()], []),
        a = (0, H.NP)(),
        r = null != l && l.elevated && s && !a,
        o = !(0, J.DV)(e?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: ed.hc,
        children: (0, i.jsxs)("div", {
            className: ed.eH,
            children: [
                (0, i.jsxs)("div", {
                    className: ed.Bu,
                    children: [
                        (0, i.jsx)(x.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: eo.intl.string(eo.t.VsAZcC),
                        }),
                        r &&
                            (0, i.jsx)(x.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ed.y7,
                                children: eo.intl.string(eo.t.NsowVa),
                            }),
                        o &&
                            (0, i.jsx)(x.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ed.y7,
                                children: eo.intl.string(eo.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ed.IH,
                    children: (0, i.jsx)(f.A, {
                        disabled: t && n,
                        defaultValue: null != e ? e.shortcut : [],
                        onChange: function (t) {
                            c()(null != e, "Keybind should never be undefined"), h.A.setKeybind({ ...e, shortcut: t });
                        },
                    }),
                }),
            ],
        }),
    });
}
function eI(e) {
    return [
        {
            title: eo.t.eVE4LX,
            description: eo.t["72WNqk"],
            disabledSetting: O.M.TEXT_CHAT,
            key: el.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
        },
        {
            title: eo.t.oifnSh,
            description: eo.t.bgU5r0,
            disabledSetting: O.M.WELCOME_GENERAL,
            key: el.X.OVERLAY_NOTIFICATIONS_WELCOME,
        },
        {
            title: eo.t.hqsZJW,
            description: eo.t.kHjdqc,
            disabledSetting: O.M.GO_LIVE_NUDGE,
            key: el.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
        },
        {
            title: eo.t.sop3rn,
            description: eo.t.pjgffc,
            disabledSetting: O.M.GAME_ACTIVITY,
            key: el.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
        },
        {
            title: eo.t["2QVhbb"],
            description: eo.t.wQ4ilB,
            disabledSetting: O.M.NOW_PLAYING,
            key: el.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
        },
        e && {
            title: eo.t.giM9fA,
            description: eo.t.EhAfWj,
            disabledSetting: O.M.NOW_PLAYING_DIFFERENT_GAMES,
            key: el.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
            usePredicate: () => {
                let { showNowPlayingForDifferentGames: e } = (0, P.M8)(
                        "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                    ),
                    t = (0, _.bG)([G.A], () => G.A.isNotificationDisabledBySetting(O.M.NOW_PLAYING));
                return !!e && !t;
            },
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
}
function ej(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new K.A({
            channelId: "123",
            userId: s,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i,
        }),
        user: new X.A({ id: s, username: e }),
        member: {
            nick: e,
            userId: s,
            guildId: "890",
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: "#000000",
            colorStrings: { primaryColor: "#000000", secondaryColor: null, tertiaryColor: null },
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0,
    };
}
function ey() {
    let e,
        t = (0, _.bG)([Q.default], () => Q.default.getCurrentUser()),
        {
            avatarSizeMode: n,
            displayNameMode: l,
            displayUserMode: r,
        } = (0, _.cf)([ee.default], () => ({
            avatarSizeMode: ee.default.getAvatarSizeMode(),
            displayNameMode: ee.default.getDisplayNameMode(),
            displayUserMode: ee.default.getDisplayUserMode(),
        })),
        [o] = s.useState(() => [
            ej(eo.intl.string(eo.t.C0ZDvo), !0, !1),
            ej(eo.intl.string(eo.t.iOtj8E), !1, !1, !0),
            ej(eo.intl.string(eo.t["0oqNgL"]), !1, !0),
        ]),
        d = (0, _.bG)([M.A, Z.A], () => {
            let e = M.A.getWidgetByType(ea.uss.VOICE_V3);
            if (null == e) return null;
            let t = Z.A.getWidget(e.id);
            return null != t && (0, w.ZO)(t) ? t : null;
        }),
        c = d?.meta?.voiceStatesMaxShown ?? 8,
        u = [null != t ? (((e = ej(t.username)).user = t), e) : null, ...o].filter(en.Vq),
        m = [new Map(u.map((e) => [e.user.id, e])), u.map((e) => e.user.id)],
        g = (0, i.jsx)(x.NPJ, {
            theme: ea.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: a()(ed.Y5, e),
                    children: [
                        (0, i.jsx)("div", {
                            className: ed.kJ,
                            children: (0, i.jsx)(V.DH, {
                                id: "voice-widget",
                                title: eo.intl.string(eo.t.KNJ6Vq),
                                channel: (0, Y.createChannelRecord)({
                                    id: "123",
                                    name: "Test Channel",
                                    type: ea.rbe.GUILD_VOICE,
                                    guild_id: "456",
                                }),
                                overlayVoiceStates: m,
                                displayNameMode: l,
                                displayUserMode: r,
                                avatarSizeMode: n,
                                widget: ea.uss.VOICE,
                                anchorLeft: !0,
                                application: null,
                                stream: null,
                                streamApplication: null,
                                streamMetadata: null,
                                locked: !1,
                                pinned: !1,
                                isSettingsPreview: !0,
                                isPreviewingInGame: !1,
                                maxDisplayedVoiceStates: c,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: ed.R$,
                            children: [
                                (0, i.jsx)(B.Pl, { children: eo.intl.string(eo.t.KNJ6Vq) }),
                                (0, i.jsx)(B.CS, {}),
                                (0, i.jsx)(B.O0, { id: d?.id ?? "voice-widget", pinned: d?.pinned ?? !1 }),
                            ],
                        }),
                    ],
                }),
        });
    return (0, i.jsx)("div", { className: ed.F9, children: g });
}
