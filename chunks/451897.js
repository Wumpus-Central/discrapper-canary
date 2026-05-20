t.d(n, { default: () => O });
var l = t(627968);
t(64700);
var a = t(17928),
    e = t(980707),
    r = t(477782),
    d = t(442433),
    c = t(587895),
    s = t(646938),
    A = t(189081),
    o = t(885386),
    u = t(957565),
    b = t(375708),
    h = t(192308),
    p = t(761853),
    I = t(340829),
    g = t(738533),
    T = t(723702),
    L = t(952818),
    D = t(134861),
    _ = t(144914),
    E = t(113673),
    f = t(651743),
    y = t(652215),
    N = t(665260),
    P = t(314116),
    x = t(59636),
    C = t(174459),
    S = t(258057),
    j = t(568004);
function G(i) {
    var n;
    let c,
        s,
        G,
        O,
        m,
        M,
        V,
        v,
        k,
        { application: H, libraryApplication: R, analyticsContext: U, onSelect: X } = i,
        w = { ...(null != U ? U.location : null), object: y.ZSU.CONTEXT_MENU },
        K =
            ((O = (0, a.bG)([L.Ay], () => L.Ay.getRunningVerifiedApplicationIds().includes(R.id), [R.id])),
            (m = (0, a.bG)(
                [A.A, f.A, I.A, D.A],
                () =>
                    (0, _.A)({
                        LibraryApplicationStore: A.A,
                        LaunchableGameStore: f.A,
                        DispatchApplicationStore: I.A,
                        ConnectedAppsStore: D.A,
                        applicationId: R.id,
                        branchId: R.branchId,
                    }),
                [R.branchId, R.id],
            )),
            O || !m
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "launch",
                      label: b.intl.string(b.t.XKUw8m),
                      action: () => E.playApplication(R.id, R, { analyticsParams: { location: w } }),
                  })),
        F = (function (i) {
            let n = (0, a.bG)([L.Ay], () => L.Ay.getRunningVerifiedApplicationIds().includes(i.id), [i.id]),
                [t, e] = (0, a.yK)([I.A], () => [I.A.isUpToDate(i.id, i.branchId), I.A.shouldPatch(i.id, i.branchId)], [
                    i.branchId,
                    i.id,
                ]);
            return t && !n && e
                ? (0, l.jsx)(r.Dr, {
                      id: "repair",
                      label: b.intl.string(b.t.CKCcdz),
                      action: () =>
                          E.repairApplication(i.id, i.branchId, y.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
                  })
                : null;
        })(R),
        Z =
            ((n = R),
            (c = (0, a.bG)([L.Ay], () => L.Ay.getRunningVerifiedApplicationIds().includes(n.id), [n.id])),
            (s = (0, a.bG)([I.A], () => I.A.isInstalled(n.id, n.branchId), [n.branchId, n.id])),
            (G = (0, a.bG)([j.A], () => j.A.getTargetManifests(n.id, n.branchId), [n.branchId, n.id])),
            s
                ? c
                    ? null
                    : (0, l.jsx)(r.Dr, {
                          id: "uninstall",
                          label: b.intl.string(b.t.DwgfOM),
                          action: () => (0, S.z)(n.id, n.branchId, y.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
                      })
                : null == G
                  ? null
                  : (0, l.jsx)(r.Dr, {
                        id: "install",
                        label: b.intl.string(b.t["N+XVnt"]),
                        action: () =>
                            E.installApplication(n.id, n.branchId, y.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
                    })),
        B =
            null == R
                ? null
                : (0, l.jsx)(r.sL, {
                      id: "private",
                      label: b.intl.string(b.t.fHDNJv),
                      action: function () {
                          if (null == R) return;
                          let i = (0, N.PQ)(R.getFlags(), y.hM6.PRIVATE);
                          x.V(R.id, R.branchId, i),
                              C.default.track(y.HAw.APPLICATION_SETTINGS_UPDATED, {
                                  private_enabled: (0, N.Lt)(i, y.hM6.PRIVATE),
                                  ...R.getAnalyticsData(),
                              });
                      },
                      checked: R.hasFlag(y.hM6.PRIVATE),
                  }),
        z =
            null == R
                ? null
                : (0, l.jsx)(r.sL, {
                      id: "on-overlay",
                      label: b.intl.string(b.t.rgZKg2),
                      action: function () {
                          if (null == R) return;
                          let i = (0, N.PQ)(R.getFlags(), y.hM6.OVERLAY_DISABLED);
                          x.V(R.id, R.branchId, i),
                              C.default.track(y.HAw.APPLICATION_SETTINGS_UPDATED, {
                                  overlay_disabled: (0, N.Lt)(i, y.hM6.OVERLAY_DISABLED),
                                  ...R.getAnalyticsData(),
                              });
                      },
                      checked: R.hasFlag(y.hM6.OVERLAY_DISABLED),
                  }),
        Q =
            ((M = R.getBranchedName(H)),
            null !=
                (V = (0, a.bG)([I.A], () => {
                    let i = I.A.getState(R.id, R.branchId);
                    return i?.installPath;
                }, [R.branchId, R.id])) && (0, T.isDesktop)()
                ? (0, l.jsx)(r.Dr, {
                      id: "create-shortcut",
                      label: b.intl.string(b.t.T4tecH),
                      action: () => g.A.createShortcuts(!0, !1, M, R.id, V),
                  })
                : null),
        Y = (function (i, n) {
            let t = (0, a.bG)([I.A], () => I.A.isInstalled(i.id, i.branchId), [i.branchId, i.id]),
                e = (0, a.bG)([A.A], () => !A.A.hasRemovedLibraryApplicationThisSession);
            if (t && !i.isHidden()) return null;
            function d() {
                let n = (0, N.PQ)(i.getFlags(), y.hM6.HIDDEN);
                x.V(i.id, i.branchId, n),
                    C.default.track(y.HAw.APPLICATION_SETTINGS_UPDATED, {
                        hidden_enabled: (0, N.Lt)(n, y.hM6.HIDDEN),
                        ...i.getAnalyticsData(),
                    });
            }
            return (0, l.jsx)(r.Dr, {
                id: "in-library",
                label: i.isHidden() ? b.intl.string(b.t["0dnEUJ"]) : b.intl.string(b.t.TuJXLx),
                action: function () {
                    null != i &&
                        null != n &&
                        (i.isHidden() || !e
                            ? d()
                            : (0, P.A)({
                                  title: b.intl.string(b.t.oB7isi),
                                  subtitle: b.intl.format(b.t.HXfjKt, { name: n.name }),
                                  variant: "primary",
                                  confirmText: b.intl.string(b.t.OWjIiV),
                                  onConfirm: () => d(),
                              }));
                },
            });
        })(R, H),
        J =
            ((v = H.primarySkuId),
            (k = o.Q_.useSetting()),
            !__OVERLAY__ && k && u.p5
                ? (0, l.jsxs)(r.Dr, {
                      id: "application-dev",
                      label: b.intl.string(b.t.OpuAlK),
                      action: () => (0, u.C)(H.id),
                      children: [
                          (0, l.jsx)(r.Dr, {
                              id: "app-id",
                              label: b.intl.string(b.t.qSHshq),
                              action: () => (0, u.C)(H.id),
                          }),
                          null != R
                              ? (0, l.jsx)(r.Dr, {
                                    id: "branch-id",
                                    label: b.intl.string(b.t.g7oyyo),
                                    action: () => (0, u.C)(R.branchId),
                                })
                              : null,
                          null != v
                              ? (0, l.jsx)(r.Dr, {
                                    id: "sku-id",
                                    label: b.intl.string(b.t.hReUdL),
                                    action: () => (0, u.C)(v),
                                })
                              : null,
                      ],
                  })
                : null),
        q = (0, a.bG)([p.Ay], () => p.Ay.hasContext(H.id), [H.id])
            ? (0, l.jsx)(r.Dr, {
                  id: "ingame-voice",
                  label: b.intl.string(b.t["pOul5/"]),
                  action: () =>
                      (0, h.openModalLazy)(async () => {
                          let { default: i } = await Promise.all([
                              t.e("3633"),
                              t.e("56927"),
                              t.e("8516"),
                              t.e("28367"),
                              t.e("25246"),
                              t.e("97162"),
                              t.e("46327"),
                              t.e("96531"),
                          ]).then(t.bind(t, 880510));
                          return (n) => (0, l.jsx)(i, { ...n, mediaEngineContext: H.id, subtitle: H.name });
                      }),
              })
            : null;
    return (0, l.jsxs)(e.W, {
        "data-menu-migrated": !0,
        navId: "game-context",
        onClose: d.Z_,
        "aria-label": b.intl.string(b.t.tKobzb),
        onSelect: X,
        children: [K, F, Z, B, z, Q, Y, (0, l.jsx)(r.rX, { children: J }), (0, l.jsx)(r.rX, { children: q })],
    });
}
function O(i) {
    let { applicationId: n, branchId: t } = i,
        e = (0, a.bG)([c.A], () => c.A.getApplication(n), [n]),
        r = (0, a.bG)([A.A], () => (null != t ? A.A.getLibraryApplication(n, t) : A.A.getActiveLibraryApplication(n)), [
            n,
            t,
        ]);
    return null == e || null == r
        ? (0, l.jsx)(s.default, { ...i, id: n, label: b.intl.string(b.t["FfCL+6"]) })
        : (0, l.jsx)(G, { ...i, application: e, libraryApplication: r });
}
