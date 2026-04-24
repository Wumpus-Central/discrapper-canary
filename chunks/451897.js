n.d(t, { default: () => m });
var l = n(627968);
n(64700);
var a = n(17928),
    e = n(550079),
    r = n(477782),
    d = n(442433),
    c = n(587895),
    s = n(646938),
    A = n(189081),
    o = n(253932),
    u = n(957565),
    b = n(985018),
    h = n(192308),
    I = n(969341),
    p = n(340829),
    g = n(738533),
    T = n(723702),
    L = n(328153),
    D = n(134861),
    _ = n(144914),
    f = n(715671),
    E = n(651743),
    y = n(652215),
    x = n(665260),
    S = n(314116),
    C = n(59636),
    N = n(954571),
    P = n(258057),
    j = n(568004);
function G(i) {
    var t;
    let c,
        s,
        G,
        m,
        O,
        v,
        M,
        V,
        k,
        { application: H, libraryApplication: R, analyticsContext: U, onSelect: X } = i,
        w = { ...(null != U ? U.location : null), object: y.ZSU.CONTEXT_MENU },
        Z =
            ((m = (0, a.bG)([L.Ay], () => L.Ay.getRunningVerifiedApplicationIds().includes(R.id), [R.id])),
            (O = (0, a.bG)(
                [A.A, E.A, p.A, D.A],
                () =>
                    (0, _.A)({
                        LibraryApplicationStore: A.A,
                        LaunchableGameStore: E.A,
                        DispatchApplicationStore: p.A,
                        ConnectedAppsStore: D.A,
                        applicationId: R.id,
                        branchId: R.branchId,
                    }),
                [R.branchId, R.id],
            )),
            m || !O
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "launch",
                      label: b.intl.string(b.t.XKUw8m),
                      action: () => f.playApplication(R.id, R, { analyticsParams: { location: w } }),
                  })),
        K = (function (i) {
            let t = (0, a.bG)([L.Ay], () => L.Ay.getRunningVerifiedApplicationIds().includes(i.id), [i.id]),
                [n, e] = (0, a.yK)([p.A], () => [p.A.isUpToDate(i.id, i.branchId), p.A.shouldPatch(i.id, i.branchId)], [
                    i.branchId,
                    i.id,
                ]);
            return n && !t && e
                ? (0, l.jsx)(r.Dr, {
                      id: "repair",
                      label: b.intl.string(b.t.CKCcdz),
                      action: () =>
                          f.repairApplication(i.id, i.branchId, y.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
                  })
                : null;
        })(R),
        F =
            ((t = R),
            (c = (0, a.bG)([L.Ay], () => L.Ay.getRunningVerifiedApplicationIds().includes(t.id), [t.id])),
            (s = (0, a.bG)([p.A], () => p.A.isInstalled(t.id, t.branchId), [t.branchId, t.id])),
            (G = (0, a.bG)([j.A], () => j.A.getTargetManifests(t.id, t.branchId), [t.branchId, t.id])),
            s
                ? c
                    ? null
                    : (0, l.jsx)(r.Dr, {
                          id: "uninstall",
                          label: b.intl.string(b.t.DwgfOM),
                          action: () => (0, P.z)(t.id, t.branchId, y.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
                      })
                : null == G
                  ? null
                  : (0, l.jsx)(r.Dr, {
                        id: "install",
                        label: b.intl.string(b.t["N+XVnt"]),
                        action: () =>
                            f.installApplication(t.id, t.branchId, y.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
                    })),
        B =
            null == R
                ? null
                : (0, l.jsx)(r.sL, {
                      id: "private",
                      label: b.intl.string(b.t.fHDNJv),
                      action: function () {
                          if (null == R) return;
                          let i = (0, x.PQ)(R.getFlags(), y.hM6.PRIVATE);
                          C.V(R.id, R.branchId, i),
                              N.default.track(y.HAw.APPLICATION_SETTINGS_UPDATED, {
                                  private_enabled: (0, x.Lt)(i, y.hM6.PRIVATE),
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
                          let i = (0, x.PQ)(R.getFlags(), y.hM6.OVERLAY_DISABLED);
                          C.V(R.id, R.branchId, i),
                              N.default.track(y.HAw.APPLICATION_SETTINGS_UPDATED, {
                                  overlay_disabled: (0, x.Lt)(i, y.hM6.OVERLAY_DISABLED),
                                  ...R.getAnalyticsData(),
                              });
                      },
                      checked: R.hasFlag(y.hM6.OVERLAY_DISABLED),
                  }),
        Q =
            ((v = R.getBranchedName(H)),
            null !=
                (M = (0, a.bG)([p.A], () => {
                    let i = p.A.getState(R.id, R.branchId);
                    return i?.installPath;
                }, [R.branchId, R.id])) && (0, T.isDesktop)()
                ? (0, l.jsx)(r.Dr, {
                      id: "create-shortcut",
                      label: b.intl.string(b.t.T4tecH),
                      action: () => g.A.createShortcuts(!0, !1, v, R.id, M),
                  })
                : null),
        Y = (function (i, t) {
            let n = (0, a.bG)([p.A], () => p.A.isInstalled(i.id, i.branchId), [i.branchId, i.id]),
                e = (0, a.bG)([A.A], () => !A.A.hasRemovedLibraryApplicationThisSession);
            if (n && !i.isHidden()) return null;
            function d() {
                let t = (0, x.PQ)(i.getFlags(), y.hM6.HIDDEN);
                C.V(i.id, i.branchId, t),
                    N.default.track(y.HAw.APPLICATION_SETTINGS_UPDATED, {
                        hidden_enabled: (0, x.Lt)(t, y.hM6.HIDDEN),
                        ...i.getAnalyticsData(),
                    });
            }
            return (0, l.jsx)(r.Dr, {
                id: "in-library",
                label: i.isHidden() ? b.intl.string(b.t["0dnEUJ"]) : b.intl.string(b.t.TuJXLx),
                action: function () {
                    null != i &&
                        null != t &&
                        (i.isHidden() || !e
                            ? d()
                            : (0, S.A)({
                                  title: b.intl.string(b.t.oB7isi),
                                  subtitle: b.intl.format(b.t.HXfjKt, { name: t.name }),
                                  variant: "primary",
                                  confirmText: b.intl.string(b.t.OWjIiV),
                                  onConfirm: () => d(),
                              }));
                },
            });
        })(R, H),
        q =
            ((V = H.primarySkuId),
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
                          null != V
                              ? (0, l.jsx)(r.Dr, {
                                    id: "sku-id",
                                    label: b.intl.string(b.t.hReUdL),
                                    action: () => (0, u.C)(V),
                                })
                              : null,
                      ],
                  })
                : null),
        J = (0, a.bG)([I.Ay], () => I.Ay.hasContext(H.id), [H.id])
            ? (0, l.jsx)(r.Dr, {
                  id: "ingame-voice",
                  label: b.intl.string(b.t["pOul5/"]),
                  action: () =>
                      (0, h.openModalLazy)(async () => {
                          let { default: i } = await Promise.all([n.e("28367"), n.e("58847")]).then(n.bind(n, 880510));
                          return (t) => (0, l.jsx)(i, { ...t, mediaEngineContext: H.id, subtitle: H.name });
                      }),
              })
            : null;
    return (0, l.jsxs)(e.W, {
        "data-menu-migrated": !0,
        navId: "game-context",
        onClose: d.Z_,
        "aria-label": b.intl.string(b.t.tKobzb),
        onSelect: X,
        children: [Z, K, F, B, z, Q, Y, (0, l.jsx)(r.rX, { children: q }), (0, l.jsx)(r.rX, { children: J })],
    });
}
function m(i) {
    let { applicationId: t, branchId: n } = i,
        e = (0, a.bG)([c.A], () => c.A.getApplication(t), [t]),
        r = (0, a.bG)([A.A], () => (null != n ? A.A.getLibraryApplication(t, n) : A.A.getActiveLibraryApplication(t)), [
            t,
            n,
        ]);
    return null == e || null == r
        ? (0, l.jsx)(s.default, { ...i, id: t, label: b.intl.string(b.t["FfCL+6"]) })
        : (0, l.jsx)(G, { ...i, application: e, libraryApplication: r });
}
