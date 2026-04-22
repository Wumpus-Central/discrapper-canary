n.d(t, { A: () => M });
var i = n(627968),
    s = n(64700),
    l = n(812729),
    a = n.n(l),
    r = n(311907),
    o = n(990078),
    d = n(834730),
    u = n(827734),
    c = n(478016),
    g = n(31300),
    m = n(939249),
    _ = n(243721),
    A = n(544420),
    h = n(684013),
    p = n(56562),
    x = n(964486),
    E = n(15285),
    T = n(286237),
    S = n(769015),
    f = n(496885),
    b = n(810412),
    C = n(41984),
    v = n(833551),
    N = n(663677),
    I = n(824189),
    y = n(760751),
    j = n(189081),
    O = n(9302),
    R = n(505136),
    L = n(686533),
    D = n(525923),
    P = n(985018),
    G = n(481384);
function M() {
    let { runningGame: e, runningGameApplication: t } = (0, T.A)(),
        n = e?.pid,
        l = (0, r.bG)(
            [v.default],
            () => (null == e || null == n ? null : v.default.getTrackedGameByPid(n)),
            [e, n],
            a(),
        ),
        { enabledLegacy: M, enabledOOP: U } = (0, r.cf)(
            [y.A, j.A],
            () =>
                null == e && null == l
                    ? { enabledLegacy: !1, enabledOOP: !1 }
                    : null == e
                      ? { enabledLegacy: l?.legacyEnabled ?? !1, enabledOOP: l?.oopEnabled ?? !1 }
                      : (0, E.hw)(e, !1, [y.A, j.A]),
            [e, l],
        ),
        k = (0, r.bG)([E.Ay, y.A, j.A], () => (null == e ? null : (0, E.xU)(e, E.Ay, y.A, j.A)), [e], a()),
        [w, V] = s.useState(U),
        [B, F] = s.useState(M),
        [z, H] = s.useState(!1);
    s.useEffect(() => {
        V(U), F(M);
    }, [U, M]);
    let Y = !(0, O.supportsLegacy)(),
        X = !(0, O.supportsOutOfProcess)(),
        { legacyEnabled: K, oopEnabled: W } = (0, r.cf)([v.default], () => v.default.getGlobalEnabledStatus()),
        Z = (t, n) => {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case b.OverlayToggledClientSettingType.LEGACY_GAME:
                    F(t), A.Ay.toggleOverlay(e, t, w), (i = !t && B);
                    break;
                case b.OverlayToggledClientSettingType.OOP_GAME:
                    V(t), A.Ay.toggleOverlay(e, B, t), (s = !t && w);
                    break;
                case b.OverlayToggledClientSettingType.LEGACY:
                    h.A.setEnabled(t, W), (0, b.Q3)(t, b.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case b.OverlayToggledClientSettingType.OOP:
                    h.A.setEnabled(K, t), (0, b.Q3)(t, b.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || s) &&
                (0, N.L)(
                    i ? b.OverlayToggledClientSettingType.LEGACY_GAME : b.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        },
        q = Y && X,
        Q = !K && !W,
        J = !w && !K && B && !Y,
        $ = !B && !W && w && !X,
        ee = l?.overlayMethod === C.Ue.Disabled,
        et = l?.state === C.AR.OVERLAY_RENDERING && !ee,
        en = l?.state != null && D.wZ.has(l.state) && !ee,
        ei = l?.overlayMethod === C.Ue.OutOfProcess,
        es = l?.overlayMethod === C.Ue.OutOfProcessLimitedInteraction,
        el = l?.overlayMethod === C.Ue.Hook,
        ea = l?.state === C.AR.OVERLAY_CRASHED || l?.state === C.AR.OVERLAY_CRASHED_DISABLED,
        er = !w && !B,
        [eo, ed] = (() => {
            switch (!0) {
                case et && ei:
                    return [
                        P.intl.format(P.t.hFVBIg, {
                            overlayMethod: P.intl.string(P.t.a3eXSw),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    d.E,
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
                case et && es:
                    return [
                        P.intl.format(P.t.hFVBIg, {
                            overlayMethod: P.intl.string(P.t["506Aba"]),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    d.E,
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
                case et && el:
                    return [
                        P.intl.format(P.t.hFVBIg, {
                            overlayMethod: P.intl.string(P.t.bvlpDR),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    d.E,
                                    { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                    t,
                                );
                            },
                        }),
                        (function () {
                            switch (!0) {
                                case l?.fullscreenType !== p.aI.BORDERLESS_FULLSCREEN:
                                    return P.intl.string(P.t.mJmbeC);
                                case X:
                                    return P.intl.string(P.t.C7bLTQ);
                                case !l?.oopEnabled:
                                    return P.intl.string(P.t.WiY24u);
                                case !W:
                                    return P.intl.string(P.t.cAFVsL);
                                case !l?.supportsOutOfProcess:
                                    return P.intl.string(P.t.XcGEcs);
                                default:
                                    return P.intl.string(P.t.bJXH2v);
                            }
                        })(),
                    ];
                case ea:
                    return [P.intl.string(P.t.OFC2aw), null];
                case q:
                    return [P.intl.string(P.t.m7X4az), null];
                case Q:
                    return [P.intl.string(P.t["9DUS5l"]), null];
                case er:
                    return [P.intl.string(P.t.nQ9EdJ), null];
                case J:
                case $:
                    return [P.intl.string(P.t.VWUn0a), null];
                case en:
                    if (ei) return [P.intl.string(P.t["s8+CFq"]), null];
                    if (el) return [P.intl.string(P.t.JEEdqt), null];
                    if (es) return [P.intl.string(P.t.pzBMwY), null];
                    return [P.intl.string(P.t["2Xhy9k"]), null];
                case null == l:
                    return [P.intl.string(P.t.vwHPRi), null];
                case ee: {
                    let e = l?.fullscreenType === p.aI.FULLSCREEN ? P.intl.string(P.t.mJmbeC) : null;
                    return [P.intl.string(P.t.VPW4XY), e];
                }
                default:
                    return [P.intl.string(P.t.ONovP5), null];
            }
        })();
    (0, x.Ay)(() => {
        A.Ay.getDetectableGames();
    });
    let [eu, ec] = s.useMemo(
        () =>
            en
                ? ["text-muted", u.A.colors.TEXT_MUTED.css]
                : et && es
                  ? ["text-feedback-warning", u.A.colors.TEXT_FEEDBACK_WARNING.css]
                  : et && ei
                    ? ["text-feedback-positive", u.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : et && el
                      ? ["text-strong", u.A.colors.TEXT_STRONG.css]
                      : ["interactive-text-default", u.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
        [en, et, es, ei, el],
    );
    return null == e
        ? null
        : (0, i.jsxs)(R.A, {
              onExpand: H,
              className: z ? G.tx : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      t?.name ?? k?.name ?? e?.gameName ?? "",
                      null != k && k.verified
                          ? (0, i.jsx)(o.m, {
                                text: P.intl.string(P.t["4PJP5p"]),
                                children: (0, i.jsx)(f.A, {
                                    size: D.zj,
                                    color: u.A.colors.BACKGROUND_BRAND.css,
                                    children: (0, i.jsx)(c.U, {
                                        size: "custom",
                                        width: D.zj,
                                        height: D.zj,
                                        color: u.A.colors.WHITE.css,
                                    }),
                                }),
                            })
                          : null,
                  ],
              }),
              description: eo,
              hint: null != ed ? ed : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      et || en ? (0, i.jsx)(g.k, { size: "xxs", color: ec }) : (0, i.jsx)("div", { className: G.W4 }),
                      (0, i.jsx)(d.E, { variant: "text-xs/semibold", color: eu, children: P.intl.string(P.t.CDOx3w) }),
                  ],
              }),
              icon: (0, i.jsx)(S.A, { game: t, pid: e?.pid, size: S.M.MEDIUM }),
              "aria-label": P.intl.string(P.t["87O5GC"]),
              action: (0, i.jsx)(m.D, {
                  onClick: (e) => (0, L.$)(e),
                  children: (0, i.jsx)(_.d, {
                      checked: (w && W) || (B && K),
                      disabled: q,
                      onChange: (t) => {
                          ((t, n) => {
                              if (null == e) return;
                              let i = !1,
                                  s = !1;
                              switch (n) {
                                  case "game":
                                      A.Ay.toggleOverlay(e, t, t), F(t), V(t), (i = !t && B), (s = !t && w);
                                      break;
                                  case "global":
                                      h.A.setEnabled(t, t), (i = !t && K), (s = !t && W);
                                      break;
                                  case "both":
                                      h.A.setEnabled(t, t),
                                          A.Ay.toggleOverlay(e, t, t),
                                          F(t),
                                          V(t),
                                          (i = (!t && K) || (!t && B)),
                                          (s = (!t && W) || (!t && w));
                              }
                              let l = null;
                              i
                                  ? (l =
                                        "game" === n
                                            ? b.OverlayToggledClientSettingType.LEGACY_GAME
                                            : b.OverlayToggledClientSettingType.LEGACY)
                                  : s &&
                                    (l =
                                        "game" === n
                                            ? b.OverlayToggledClientSettingType.OOP_GAME
                                            : b.OverlayToggledClientSettingType.OOP),
                                  null != l && (0, N.L)(l, e.id ?? null);
                          })(
                              t,
                              ((e, t) => {
                                  let n = !t && e,
                                      i = !W && w,
                                      s = !K && B,
                                      l = !w && W,
                                      a = !B && K;
                                  switch (!0) {
                                      case n && (i || s) && (l || a):
                                          return "both";
                                      case n && (i || s):
                                          return "global";
                                      default:
                                          return "game";
                                  }
                              })(t, (w && W) || (B && K)),
                          );
                      },
                  }),
              }),
              warning: (0, i.jsx)(I.A, { className: G.Hh, game: e }),
              children: [
                  (0, i.jsx)(L.A, {
                      title: P.intl.string(P.t["7BlVIs"]),
                      description: P.intl.string(P.t.ndgADE),
                      hint: W ? void 0 : P.intl.string(P.t.cAFVsL),
                      "aria-label": P.intl.string(P.t["7BlVIs"]),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(_.d, {
                                  checked: w && W,
                                  disabled: X,
                                  onChange: (e) => {
                                      e && !W
                                          ? Z(e, b.OverlayToggledClientSettingType.OOP)
                                          : Z(e, b.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: G.Kz }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(L.A, {
                      title: P.intl.string(P.t.BfFpW1),
                      description: P.intl.string(P.t.OzInYk),
                      hint: K ? void 0 : P.intl.string(P.t["3sYHXm"]),
                      "aria-label": P.intl.string(P.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(_.d, {
                                  checked: B && K,
                                  disabled: Y,
                                  onChange: (e) => {
                                      e && !K
                                          ? Z(e, b.OverlayToggledClientSettingType.LEGACY)
                                          : Z(e, b.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: G.Kz }),
                          ],
                      }),
                  }),
              ],
          });
}
