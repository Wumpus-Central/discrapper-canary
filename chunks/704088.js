n.d(t, { U: () => C }), n(388685), n(49124), n(415506);
var a = n(54381),
    r = n(473749),
    i = n(121168),
    l = n(442837),
    s = n(544891),
    o = n(159691),
    c = n(481060),
    d = n(720553),
    u = n(535664),
    m = n(5900),
    p = n(299886),
    h = n(848984),
    f = n(773275),
    b = n(261538),
    x = n(868802),
    g = n(594174),
    v = n(474936);
let j = r.forwardRef((e, t) => {
    let [n, i] = r.useState(null),
        [l, c] = r.useState(null),
        [d, u] = r.useState(!1),
        m = r.useCallback(async () => {
            u(!0), c(null), i(null);
            try {
                let e = await s.tn.get({
                    url: "/users/@me/debug/warp/license",
                    rejectWithError: !0,
                });
                i(e.body);
            } catch (r) {
                var e, t;
                let n =
                        (null == r || null == (e = r.body) ? void 0 : e.message) ||
                        (null == r ? void 0 : r.message) ||
                        "Unknown error occurred",
                    a = (null == r ? void 0 : r.status) || (null == r || null == (t = r.body) ? void 0 : t.code);
                c("Error ".concat(a ? "(".concat(a, ")") : "", ": ").concat(n));
            } finally {
                u(!1);
            }
        }, []);
    return (
        r.useImperativeHandle(t, () => ({ refresh: m })),
        (0, a.jsxs)("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: "12px",
            },
            children: [
                (0, a.jsx)(o.zxk, {
                    text: d ? "Loading..." : "Fetch WARP License Info",
                    onClick: m,
                    disabled: d,
                }),
                null != l &&
                    (0, a.jsx)("div", {
                        style: {
                            padding: "12px",
                            backgroundColor: "#ed4245",
                            borderRadius: "4px",
                            color: "white",
                            fontFamily: "monospace",
                            fontSize: "12px",
                        },
                        children: l,
                    }),
                null != n &&
                    (0, a.jsx)("pre", {
                        style: {
                            width: "100%",
                            minHeight: "200px",
                            fontFamily: "monospace",
                            fontSize: "12px",
                            padding: "12px",
                            backgroundColor: "#2f3136",
                            color: "#dcddde",
                            border: "1px solid #202225",
                            borderRadius: "4px",
                            margin: 0,
                            overflow: "auto",
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                        },
                        children: JSON.stringify(n, null, 2),
                    }),
            ],
        })
    );
});
j.displayName = "DebugWarpLicenseInfo";
let y = (e) => {
        let { onSuccess: t } = e,
            [n, i] = r.useState(!1),
            [l, c] = r.useState(0),
            [d, u] = r.useState(null);
        r.useEffect(() => {
            if (l > 0) {
                let e = setTimeout(() => {
                    c(l - 1), 1 === l && t();
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [l, t]);
        let m = async () => {
            i(!0), u(null);
            try {
                await s.tn.post({
                    url: "/users/@me/debug/warp/license/extension-task",
                    rejectWithError: !0,
                }),
                    c(5);
            } catch (r) {
                var e, t;
                let n =
                        (null == r || null == (e = r.body) ? void 0 : e.message) ||
                        (null == r ? void 0 : r.message) ||
                        "Unknown error occurred",
                    a = (null == r ? void 0 : r.status) || (null == r || null == (t = r.body) ? void 0 : t.code);
                u("Error ".concat(a ? "(".concat(a, ")") : "", ": ").concat(n));
            } finally {
                i(!1);
            }
        };
        return (0, a.jsxs)("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: "12px",
            },
            children: [
                (0, a.jsx)(o.zxk, {
                    text: n
                        ? "Triggering Task..."
                        : l > 0
                          ? "Refreshing in ".concat(l, "s...")
                          : "Trigger License Extension Task",
                    onClick: m,
                    disabled: n || l > 0,
                }),
                null != d &&
                    (0, a.jsx)("div", {
                        style: {
                            padding: "12px",
                            backgroundColor: "#ed4245",
                            borderRadius: "4px",
                            color: "white",
                            fontFamily: "monospace",
                            fontSize: "12px",
                        },
                        children: d,
                    }),
            ],
        });
    },
    C = () => {
        let [e, t] = r.useState(-1),
            [n, s] = r.useState(-1),
            [C, _] = r.useState(!1),
            [S, E] = r.useState(5000),
            [T, O] = r.useState(!1),
            N = r.useRef(null),
            P = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
            w = (0, h.u)(),
            [I] = r.useState(() =>
                (0, f.o8)({
                    finishSetup: async () => !0,
                    perkAvailableToUser: w,
                }),
            ),
            {
                installationStatus: k,
                setInstallationStatus: R,
                connectionStatus: A,
                setConnectionStatus: Z,
                setConnect: D,
                setDisconnect: M,
                setInstall: L,
                setIsWeb: U,
                setIsSupportedPrivateBrowsingPerkPlatform: B,
                isWeb: F,
                isSupportedPrivateBrowsingPerkPlatform: G,
                setGetWarpInstallationStatus: V,
                perkAvailableToUser: W,
                setPerkAvailableToUser: z,
            } = (0, i.o)(I),
            H = r.useCallback(
                async () => (
                    Z(m.Ij.INITIALIZING),
                    t(
                        setTimeout(() => {
                            Z(m.Ij.CONNECTED);
                        }, 1000),
                    ),
                    !0
                ),
                [Z, t],
            );
        r.useEffect(() => {
            D(H);
        }, [H, D]);
        let q = r.useCallback(async () => m._n.INSTALLING, []);
        r.useEffect(() => {
            z(w);
        }, [w, z]),
            r.useEffect(() => {
                V(q);
            }, [V, q]);
        let K = r.useCallback(async () => (clearTimeout(e), Z(m.Ij.DISCONNECTED), !0), [e, Z]),
            Q = r.useCallback(
                () =>
                    new Promise((e, t) => {
                        R(m._n.INSTALLING),
                            s(
                                setTimeout(() => {
                                    if (C) return void t(Error("Installation failed"));
                                    e();
                                }, S),
                            );
                    }),
                [C, S, R, s],
            );
        r.useEffect(() => {
            F && k !== m._n.UNKNOWN && R(m._n.UNKNOWN);
        }, [F, R, k]),
            r.useEffect(() => {
                M(K);
            }, [K, M]),
            r.useEffect(() => {
                L(Q);
            }, [Q, L]),
            r.useEffect(() => {
                k !== m._n.INSTALLING && clearTimeout(n);
            }, [n, k]),
            r.useEffect(() => {
                if (k !== m._n.INSTALLED && A !== m.Ij.INITIALIZING) return void Z(m.Ij.INITIALIZING);
            }, [k, A, Z]);
        let { enabled: Y } = p.H.useConfig({ location: "private_browsing_perk_settings_page" });
        return Y
            ? (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(o.X6q, {
                          variant: "heading-xl/semibold",
                          style: { marginTop: "16px" },
                          children: "Private Browsing Perk Components",
                      }),
                      (0, a.jsxs)(b.$0, {
                          children: [
                              (0, a.jsx)(o.X6q, {
                                  variant: "heading-lg/semibold",
                                  children: "Configure Private Browsing Perk State",
                              }),
                              (0, a.jsxs)(b.pg, {
                                  children: [
                                      (0, a.jsxs)(b.BZ, {
                                          children: [
                                              (0, a.jsx)(o.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Nitro",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(o.rsf, {
                                                      onChange: () => {
                                                          W ? (0, u.C)(null, P) : (0, u.C)(v.F_, P);
                                                      },
                                                      checked: W,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(b.BZ, {
                                          children: [
                                              (0, a.jsx)(o.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Web",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(o.rsf, {
                                                      onChange: () => U(!F),
                                                      checked: F,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(b.BZ, {
                                          children: [
                                              (0, a.jsx)(o.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Supported Platform",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(o.rsf, {
                                                      onChange: () => B(!G),
                                                      checked: G,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(b.BZ, {
                                          children: (0, a.jsx)(c.PhF, {
                                              label: "Installation Status",
                                              onSelectionChange: R,
                                              value: k,
                                              disabled: F,
                                              options: [
                                                  {
                                                      id: "unknown",
                                                      label: "Unknown",
                                                      value: m._n.UNKNOWN,
                                                  },
                                                  {
                                                      id: "notInstalled",
                                                      label: "Not Installed",
                                                      value: m._n.NOT_INSTALLED,
                                                  },
                                                  {
                                                      id: "installed",
                                                      label: "Installed",
                                                      value: m._n.INSTALLED,
                                                  },
                                                  {
                                                      id: "installing",
                                                      label: "Installing",
                                                      value: m._n.INSTALLING,
                                                  },
                                                  {
                                                      id: "waitingForTerms",
                                                      label: "Accept Terms",
                                                      value: m._n.WAITING_FOR_TERMS,
                                                  },
                                                  {
                                                      id: "existingInstallation",
                                                      label: "Existing Installation",
                                                      value: m._n.EXISTING_INSTALLATION,
                                                  },
                                                  {
                                                      id: "zeroTrust",
                                                      label: "Unsupported (ZeroTrust)",
                                                      value: m._n.ZERO_TRUST,
                                                  },
                                                  {
                                                      id: "installingTimeout",
                                                      label: "Installing Timeout",
                                                      value: m._n.INSTALLING_TIMEOUT,
                                                  },
                                                  {
                                                      id: "error",
                                                      label: "Error",
                                                      value: m._n.ERROR,
                                                  },
                                              ],
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                      }),
                                      k === m._n.INSTALLED &&
                                          (0, a.jsx)(b.BZ, {
                                              children: (0, a.jsx)(c.PhF, {
                                                  label: "Connection Status",
                                                  onSelectionChange: Z,
                                                  value: A,
                                                  options: [
                                                      {
                                                          id: "initializing",
                                                          label: "Initializing",
                                                          value: m.Ij.INITIALIZING,
                                                      },
                                                      {
                                                          id: "connected",
                                                          label: "Connected",
                                                          value: m.Ij.CONNECTED,
                                                      },
                                                      {
                                                          id: "disconnected",
                                                          label: "Disconnected",
                                                          value: m.Ij.DISCONNECTED,
                                                      },
                                                      {
                                                          id: "error",
                                                          label: "Error",
                                                          value: m.Ij.ERROR,
                                                      },
                                                  ],
                                                  selectionMode: "single",
                                                  fullWidth: !0,
                                              }),
                                          }),
                                  ],
                              }),
                              k === m._n.NOT_INSTALLED &&
                                  (0, a.jsxs)(b.pg, {
                                      children: [
                                          (0, a.jsxs)(b.BZ, {
                                              children: [
                                                  (0, a.jsx)(o.xvT, {
                                                      variant: "text-md/semibold",
                                                      children: "Install with error",
                                                  }),
                                                  (0, a.jsx)("div", {
                                                      style: { width: "45px" },
                                                      children: (0, a.jsx)(o.rsf, {
                                                          onChange: () => _(!C),
                                                          checked: C,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, a.jsx)(b.BZ, {
                                              children: (0, a.jsx)(c.PhF, {
                                                  label: "Install time",
                                                  onSelectionChange: E,
                                                  value: S,
                                                  options: [
                                                      {
                                                          id: "1second",
                                                          label: "1 second",
                                                          value: 1000,
                                                      },
                                                      {
                                                          id: "5seconds",
                                                          label: "5 seconds",
                                                          value: 5000,
                                                      },
                                                      {
                                                          id: "10seconds",
                                                          label: "10 seconds",
                                                          value: 10000,
                                                      },
                                                      {
                                                          id: "1minute",
                                                          label: "1 minute",
                                                          value: 60000,
                                                      },
                                                      {
                                                          id: "5minutes",
                                                          label: "5 minutes",
                                                          value: 300000,
                                                      },
                                                      {
                                                          id: "10minutes",
                                                          label: "10 minutes",
                                                          value: 600000,
                                                      },
                                                  ],
                                                  selectionMode: "single",
                                                  fullWidth: !0,
                                              }),
                                          }),
                                      ],
                                  }),
                          ],
                      }),
                      (0, a.jsxs)(f.xz.Provider, {
                          value: I,
                          children: [
                              (0, a.jsxs)(b.$0, {
                                  children: [
                                      (0, a.jsx)(o.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Settings Component",
                                      }),
                                      (0, a.jsx)(x.M, {}),
                                  ],
                              }),
                              (0, a.jsxs)(b.$0, {
                                  children: [
                                      (0, a.jsx)(o.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Exit Modal Upsell",
                                      }),
                                      (0, a.jsx)(o.zxk, {
                                          text: "Show exit modal",
                                          onClick: () => {
                                              O(!0);
                                          },
                                      }),
                                      T &&
                                          (0, a.jsx)(d.default, {
                                              url: "https://www.discord.com",
                                              trustUrl: () => !1,
                                              onCancel: () => O(!1),
                                              isProtocol: !1,
                                              onConfirm: () => {},
                                              onClose: async () => {
                                                  O(!1);
                                              },
                                              transitionState: c.Dvm.ENTERED,
                                          }),
                                  ],
                              }),
                              (0, a.jsxs)(b.$0, {
                                  children: [
                                      (0, a.jsx)(o.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk License Extension Task",
                                      }),
                                      (0, a.jsx)(y, {
                                          onSuccess: () => {
                                              var e;
                                              null == (e = N.current) || e.refresh();
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)(b.$0, {
                                  children: [
                                      (0, a.jsx)(o.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk WARP License Info",
                                      }),
                                      (0, a.jsx)(j, { ref: N }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              })
            : (0, a.jsx)("div", {
                  children: (0, a.jsx)(o.X6q, {
                      variant: "heading-xl/semibold",
                      style: { marginTop: "16px" },
                      children: "Private Browsing Perk Experiment Not Enabled",
                  }),
              });
    };
