n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    l = n(812729),
    a = n.n(l),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(544420),
    u = n(684013),
    m = n(56562),
    _ = n(964486),
    g = n(15285),
    x = n(286237),
    A = n(769015),
    h = n(496885),
    p = n(810412),
    f = n(41984),
    T = n(833551),
    S = n(663677),
    E = n(824189),
    b = n(760751),
    C = n(189081),
    v = n(9302),
    N = n(505136),
    I = n(686533),
    j = n(525923),
    y = n(985018),
    O = n(502040);
function R() {
    let { runningGame: e, runningGameApplication: t } = (0, x.A)(),
        n = e?.pid,
        l = (0, r.bG)(
            [T.default],
            () => (null == e || null == n ? null : T.default.getTrackedGameByPid(n)),
            [e, n],
            a(),
        ),
        { enabledLegacy: R, enabledOOP: L } = (0, r.cf)(
            [b.A, C.A],
            () =>
                null == e && null == l
                    ? { enabledLegacy: !1, enabledOOP: !1 }
                    : null == e
                      ? { enabledLegacy: l?.legacyEnabled ?? !1, enabledOOP: l?.oopEnabled ?? !1 }
                      : (0, g.hw)(e, !1, [b.A, C.A]),
            [e, l],
        ),
        P = (0, r.bG)([g.Ay, b.A, C.A], () => (null == e ? null : (0, g.xU)(e, g.Ay, b.A, C.A)), [e], a()),
        [D, G] = s.useState(L),
        [M, U] = s.useState(R),
        [k, w] = s.useState(!1);
    s.useEffect(() => {
        G(L), U(R);
    }, [L, R]);
    let V = !(0, v.supportsLegacy)(),
        B = !(0, v.supportsOutOfProcess)(),
        { legacyEnabled: F, oopEnabled: H } = (0, r.cf)([T.default], () => T.default.getGlobalEnabledStatus()),
        z = (t, n) => {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case p.OverlayToggledClientSettingType.LEGACY_GAME:
                    U(t), c.A.toggleOverlay(e, t, D), (i = !t && M);
                    break;
                case p.OverlayToggledClientSettingType.OOP_GAME:
                    G(t), c.A.toggleOverlay(e, M, t), (s = !t && D);
                    break;
                case p.OverlayToggledClientSettingType.LEGACY:
                    u.A.setEnabled(t, H), (0, p.Q3)(t, p.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case p.OverlayToggledClientSettingType.OOP:
                    u.A.setEnabled(F, t), (0, p.Q3)(t, p.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || s) &&
                (0, S.L)(
                    i ? p.OverlayToggledClientSettingType.LEGACY_GAME : p.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        },
        Y = V && B,
        X = !F && !H,
        K = !D && !F && M && !V,
        W = !M && !H && D && !B,
        Z = l?.overlayMethod === f.Ue.Disabled,
        q = l?.state === f.AR.OVERLAY_RENDERING && !Z,
        Q = l?.state != null && j.wZ.has(l.state) && !Z,
        J = l?.overlayMethod === f.Ue.OutOfProcess,
        $ = l?.overlayMethod === f.Ue.OutOfProcessLimitedInteraction,
        ee = l?.overlayMethod === f.Ue.Hook,
        et = l?.state === f.AR.OVERLAY_CRASHED || l?.state === f.AR.OVERLAY_CRASHED_DISABLED,
        en = !D && !M,
        [ei, es] = (() => {
            switch (!0) {
                case q && J:
                    return [
                        y.intl.format(y.t.hFVBIg, {
                            overlayMethod: y.intl.string(y.t.a3eXSw),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    d.Text,
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
                case q && $:
                    return [
                        y.intl.format(y.t.hFVBIg, {
                            overlayMethod: y.intl.string(y.t["506Aba"]),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    d.Text,
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
                case q && ee:
                    return [
                        y.intl.format(y.t.hFVBIg, {
                            overlayMethod: y.intl.string(y.t.bvlpDR),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    d.Text,
                                    { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                    t,
                                );
                            },
                        }),
                        (function () {
                            switch (!0) {
                                case l?.fullscreenType !== m.aI.BORDERLESS_FULLSCREEN:
                                    return y.intl.string(y.t.mJmbeC);
                                case B:
                                    return y.intl.string(y.t.C7bLTQ);
                                case !l?.oopEnabled:
                                    return y.intl.string(y.t.WiY24u);
                                case !H:
                                    return y.intl.string(y.t.cAFVsL);
                                case !l?.supportsOutOfProcess:
                                    return y.intl.string(y.t.XcGEcs);
                                default:
                                    return y.intl.string(y.t.bJXH2v);
                            }
                        })(),
                    ];
                case et:
                    return [y.intl.string(y.t.OFC2aw), null];
                case Y:
                    return [y.intl.string(y.t.m7X4az), null];
                case X:
                    return [y.intl.string(y.t["9DUS5l"]), null];
                case en:
                    return [y.intl.string(y.t.nQ9EdJ), null];
                case K:
                case W:
                    return [y.intl.string(y.t.VWUn0a), null];
                case Q:
                    if (J) return [y.intl.string(y.t["s8+CFq"]), null];
                    if (ee) return [y.intl.string(y.t.JEEdqt), null];
                    if ($) return [y.intl.string(y.t.pzBMwY), null];
                    return [y.intl.string(y.t["2Xhy9k"]), null];
                case null == l:
                    return [y.intl.string(y.t.vwHPRi), null];
                case Z: {
                    let e = l?.fullscreenType === m.aI.FULLSCREEN ? y.intl.string(y.t.mJmbeC) : null;
                    return [y.intl.string(y.t.VPW4XY), e];
                }
                default:
                    return [y.intl.string(y.t.ONovP5), null];
            }
        })();
    (0, _.Ay)(() => {
        c.A.getDetectableGames();
    });
    let [el, ea] = s.useMemo(
        () =>
            Q
                ? ["text-muted", d.LU0.colors.TEXT_MUTED.css]
                : q && $
                  ? ["text-feedback-warning", d.LU0.colors.TEXT_FEEDBACK_WARNING.css]
                  : q && J
                    ? ["text-feedback-positive", d.LU0.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : q && ee
                      ? ["text-strong", d.LU0.colors.TEXT_STRONG.css]
                      : ["interactive-text-default", d.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css],
        [Q, q, $, J, ee],
    );
    return null == e
        ? null
        : (0, i.jsxs)(N.A, {
              onExpand: w,
              className: k ? O.tx : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      t?.name ?? P?.name ?? e?.gameName ?? "",
                      null != P && P.verified
                          ? (0, i.jsx)(o.m, {
                                text: y.intl.string(y.t["4PJP5p"]),
                                children: (0, i.jsx)(h.A, {
                                    size: j.zj,
                                    color: d.LU0.colors.BACKGROUND_BRAND.css,
                                    children: (0, i.jsx)(d.Uzd, {
                                        size: "custom",
                                        width: j.zj,
                                        height: j.zj,
                                        color: d.LU0.colors.WHITE.css,
                                    }),
                                }),
                            })
                          : null,
                  ],
              }),
              description: ei,
              hint: null != es ? es : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      q || Q ? (0, i.jsx)(d.kN9, { size: "xxs", color: ea }) : (0, i.jsx)("div", { className: O.W4 }),
                      (0, i.jsx)(d.Text, {
                          variant: "text-xs/semibold",
                          color: el,
                          children: y.intl.string(y.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, i.jsx)(A.A, { game: t, pid: e?.pid, size: A.M.MEDIUM }),
              "aria-label": y.intl.string(y.t["87O5GC"]),
              action: (0, i.jsx)(d.DUT, {
                  onClick: (e) => (0, I.$)(e),
                  children: (0, i.jsx)(d.dOG, {
                      checked: (D && H) || (M && F),
                      disabled: Y,
                      onChange: (t) => {
                          ((t, n) => {
                              if (null == e) return;
                              let i = !1,
                                  s = !1;
                              switch (n) {
                                  case "game":
                                      c.A.toggleOverlay(e, t, t), U(t), G(t), (i = !t && M), (s = !t && D);
                                      break;
                                  case "global":
                                      u.A.setEnabled(t, t), (i = !t && F), (s = !t && H);
                                      break;
                                  case "both":
                                      u.A.setEnabled(t, t),
                                          c.A.toggleOverlay(e, t, t),
                                          U(t),
                                          G(t),
                                          (i = (!t && F) || (!t && M)),
                                          (s = (!t && H) || (!t && D));
                              }
                              let l = null;
                              i
                                  ? (l =
                                        "game" === n
                                            ? p.OverlayToggledClientSettingType.LEGACY_GAME
                                            : p.OverlayToggledClientSettingType.LEGACY)
                                  : s &&
                                    (l =
                                        "game" === n
                                            ? p.OverlayToggledClientSettingType.OOP_GAME
                                            : p.OverlayToggledClientSettingType.OOP),
                                  null != l && (0, S.L)(l, e.id ?? null);
                          })(
                              t,
                              ((e, t) => {
                                  let n = !t && e,
                                      i = !H && D,
                                      s = !F && M,
                                      l = !D && H,
                                      a = !M && F;
                                  switch (!0) {
                                      case n && (i || s) && (l || a):
                                          return "both";
                                      case n && (i || s):
                                          return "global";
                                      default:
                                          return "game";
                                  }
                              })(t, (D && H) || (M && F)),
                          );
                      },
                  }),
              }),
              warning: (0, i.jsx)(E.A, { className: O.Hh, game: e }),
              children: [
                  (0, i.jsx)(I.A, {
                      title: y.intl.string(y.t["7BlVIs"]),
                      description: y.intl.string(y.t.ndgADE),
                      hint: H ? void 0 : y.intl.string(y.t.cAFVsL),
                      "aria-label": y.intl.string(y.t["7BlVIs"]),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.dOG, {
                                  checked: D && H,
                                  disabled: B,
                                  onChange: (e) => {
                                      e && !H
                                          ? z(e, p.OverlayToggledClientSettingType.OOP)
                                          : z(e, p.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: O.Kz }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(I.A, {
                      title: y.intl.string(y.t.BfFpW1),
                      description: y.intl.string(y.t.OzInYk),
                      hint: F ? void 0 : y.intl.string(y.t["3sYHXm"]),
                      "aria-label": y.intl.string(y.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.dOG, {
                                  checked: M && F,
                                  disabled: V,
                                  onChange: (e) => {
                                      e && !F
                                          ? z(e, p.OverlayToggledClientSettingType.LEGACY)
                                          : z(e, p.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: O.Kz }),
                          ],
                      }),
                  }),
              ],
          });
}
