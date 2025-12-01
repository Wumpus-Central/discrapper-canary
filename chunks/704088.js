n.d(t, { U: () => C }), n(388685), n(49124), n(415506);
var a = n(54381),
    l = n(473749),
    i = n(663042),
    r = n(442837),
    s = n(544891),
    o = n(159691),
    c = n(481060),
    d = n(720553),
    u = n(535664),
    m = n(5900),
    p = n(299886),
    h = n(848984),
    x = n(773275),
    f = n(261538),
    g = n(868802),
    b = n(594174),
    v = n(246992),
    j = n(474936);
let _ = l.forwardRef((e, t) => {
    let [n, i] = l.useState(null),
        [r, c] = l.useState(null),
        [d, u] = l.useState(!1),
        m = l.useCallback(async () => {
            u(!0), c(null), i(null);
            try {
                let e = await s.tn.get({
                    url: "/users/@me/debug/warp/license",
                    rejectWithError: !0,
                });
                i(e.body);
            } catch (l) {
                var e, t;
                let n =
                        (null == l || null == (e = l.body) ? void 0 : e.message) ||
                        (null == l ? void 0 : l.message) ||
                        "Unknown error occurred",
                    a = (null == l ? void 0 : l.status) || (null == l || null == (t = l.body) ? void 0 : t.code);
                c("Error ".concat(a ? "(".concat(a, ")") : "", ": ").concat(n));
            } finally {
                u(!1);
            }
        }, []);
    return (
        l.useImperativeHandle(t, () => ({ refresh: m })),
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
                null != r &&
                    (0, a.jsx)("div", {
                        style: {
                            padding: "12px",
                            backgroundColor: "#ed4245",
                            borderRadius: "4px",
                            color: "white",
                            fontFamily: "monospace",
                            fontSize: "12px",
                        },
                        children: r,
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
_.displayName = "DebugWarpLicenseInfo";
let y = (e) => {
        let { onSuccess: t } = e,
            [n, i] = l.useState(!1),
            [r, c] = l.useState(0),
            [d, u] = l.useState(null);
        l.useEffect(() => {
            if (r > 0) {
                let e = setTimeout(() => {
                    c(r - 1), 1 === r && t();
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [r, t]);
        let m = async () => {
            i(!0), u(null);
            try {
                await s.tn.post({
                    url: "/users/@me/debug/warp/license/extension-task",
                    rejectWithError: !0,
                }),
                    c(5);
            } catch (l) {
                var e, t;
                let n =
                        (null == l || null == (e = l.body) ? void 0 : e.message) ||
                        (null == l ? void 0 : l.message) ||
                        "Unknown error occurred",
                    a = (null == l ? void 0 : l.status) || (null == l || null == (t = l.body) ? void 0 : t.code);
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
                        : r > 0
                          ? "Refreshing in ".concat(r, "s...")
                          : "Trigger License Extension Task",
                    onClick: m,
                    disabled: n || r > 0,
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
        let [e, t] = l.useState(-1),
            [n, s] = l.useState(-1),
            [C, S] = l.useState(!1),
            [E, T] = l.useState(5000),
            [N, O] = l.useState(!1),
            P = l.useRef(null),
            I = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
            w = (0, h.u)(),
            [k] = l.useState(() =>
                (0, x.o8)({
                    finishSetup: async () => !0,
                    perkAvailableToUser: w,
                }),
            ),
            {
                installationStatus: R,
                setInstallationStatus: A,
                connectionStatus: Z,
                setConnectionStatus: D,
                setConnect: L,
                setDisconnect: M,
                setInstall: U,
                setIsWeb: F,
                setIsSupportedPrivateBrowsingPerkPlatform: B,
                isWeb: G,
                isSupportedPrivateBrowsingPerkPlatform: z,
                setGetWarpInstallationStatus: H,
                perkAvailableToUser: V,
                setPerkAvailableToUser: W,
            } = (0, i.o)(k),
            K = l.useCallback(
                async () => (
                    D(m.Ij.INITIALIZING),
                    t(
                        setTimeout(() => {
                            D(m.Ij.CONNECTED);
                        }, 1000),
                    ),
                    !0
                ),
                [D, t],
            );
        l.useEffect(() => {
            L(K);
        }, [K, L]);
        let q = l.useCallback(async () => m._n.INSTALLING, []);
        l.useEffect(() => {
            W(w);
        }, [w, W]),
            l.useEffect(() => {
                H(q);
            }, [H, q]);
        let Y = l.useCallback(async () => (clearTimeout(e), D(m.Ij.DISCONNECTED), !0), [e, D]),
            J = l.useCallback(
                () =>
                    new Promise((e, t) => {
                        A(m._n.INSTALLING),
                            s(
                                setTimeout(() => {
                                    if (C) return void t(Error("Installation failed"));
                                    e();
                                }, E),
                            );
                    }),
                [C, E, A, s],
            );
        l.useEffect(() => {
            G && R !== m._n.UNKNOWN && A(m._n.UNKNOWN);
        }, [G, A, R]),
            l.useEffect(() => {
                M(Y);
            }, [Y, M]),
            l.useEffect(() => {
                U(J);
            }, [J, U]),
            l.useEffect(() => {
                R !== m._n.INSTALLING && clearTimeout(n);
            }, [n, R]),
            l.useEffect(() => {
                if (R !== m._n.INSTALLED && Z !== m.Ij.INITIALIZING) return void D(m.Ij.INITIALIZING);
            }, [R, Z, D]);
        let { enabled: X } = p.H.useConfig({ location: "private_browsing_perk_settings_page" });
        return X
            ? (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(o.X6q, {
                          variant: "heading-xl/semibold",
                          style: { marginTop: "16px" },
                          children: "Private Browsing Perk Components",
                      }),
                      (0, a.jsxs)(f.$0, {
                          children: [
                              (0, a.jsx)(o.X6q, {
                                  variant: "heading-lg/semibold",
                                  children: "Configure Private Browsing Perk State",
                              }),
                              (0, a.jsxs)(f.pg, {
                                  children: [
                                      (0, a.jsxs)(f.BZ, {
                                          children: [
                                              (0, a.jsx)(o.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Nitro",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(o.rsf, {
                                                      onChange: () => {
                                                          V ? (0, u.C)(null, I) : (0, u.C)(j.F_, I);
                                                      },
                                                      checked: V,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(f.BZ, {
                                          children: [
                                              (0, a.jsx)(o.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Web",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(o.rsf, {
                                                      onChange: () => F(!G),
                                                      checked: G,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(f.BZ, {
                                          children: [
                                              (0, a.jsx)(o.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Supported Platform",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(o.rsf, {
                                                      onChange: () => B(!z),
                                                      checked: z,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(f.BZ, {
                                          children: [
                                              (0, a.jsx)(o.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Installation Status",
                                              }),
                                              (0, a.jsx)(c.PhF, {
                                                  select: (e) => A(e),
                                                  isSelected: (e) => e === R,
                                                  serialize: (e) => "".concat(e),
                                                  disabled: G,
                                                  options: [
                                                      {
                                                          label: "Unknown",
                                                          value: m._n.UNKNOWN,
                                                      },
                                                      {
                                                          label: "Not Installed",
                                                          value: m._n.NOT_INSTALLED,
                                                      },
                                                      {
                                                          label: "Installed",
                                                          value: m._n.INSTALLED,
                                                      },
                                                      {
                                                          label: "Installing",
                                                          value: m._n.INSTALLING,
                                                      },
                                                      {
                                                          label: "Existing Installation",
                                                          value: m._n.EXISTING_INSTALLATION,
                                                      },
                                                      {
                                                          label: "Unsupported (ZeroTrust)",
                                                          value: m._n.ZERO_TRUST,
                                                      },
                                                      {
                                                          label: "Error",
                                                          value: m._n.ERROR,
                                                      },
                                                  ],
                                                  popoutLayerContext: v.O$,
                                              }),
                                          ],
                                      }),
                                      R === m._n.INSTALLED &&
                                          (0, a.jsxs)(f.BZ, {
                                              children: [
                                                  (0, a.jsx)(o.xvT, {
                                                      variant: "text-md/semibold",
                                                      children: "Connection Status",
                                                  }),
                                                  (0, a.jsx)(c.PhF, {
                                                      select: (e) => D(e),
                                                      isSelected: (e) => e === Z,
                                                      serialize: (e) => "".concat(e),
                                                      options: [
                                                          {
                                                              label: "Initializing",
                                                              value: m.Ij.INITIALIZING,
                                                          },
                                                          {
                                                              label: "Connected",
                                                              value: m.Ij.CONNECTED,
                                                          },
                                                          {
                                                              label: "Disconnected",
                                                              value: m.Ij.DISCONNECTED,
                                                          },
                                                          {
                                                              label: "Error",
                                                              value: m.Ij.ERROR,
                                                          },
                                                      ],
                                                      popoutLayerContext: v.O$,
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              R === m._n.NOT_INSTALLED &&
                                  (0, a.jsxs)(f.pg, {
                                      children: [
                                          (0, a.jsxs)(f.BZ, {
                                              children: [
                                                  (0, a.jsx)(o.xvT, {
                                                      variant: "text-md/semibold",
                                                      children: "Install with error",
                                                  }),
                                                  (0, a.jsx)("div", {
                                                      style: { width: "45px" },
                                                      children: (0, a.jsx)(o.rsf, {
                                                          onChange: () => S(!C),
                                                          checked: C,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, a.jsxs)(f.BZ, {
                                              children: [
                                                  (0, a.jsx)(o.xvT, {
                                                      variant: "text-md/semibold",
                                                      children: "Install time",
                                                  }),
                                                  (0, a.jsx)(c.PhF, {
                                                      select: (e) => T(e),
                                                      isSelected: (e) => e === E,
                                                      serialize: (e) => "".concat(e),
                                                      options: [
                                                          {
                                                              label: "1 second",
                                                              value: 1000,
                                                          },
                                                          {
                                                              label: "5 seconds",
                                                              value: 5000,
                                                          },
                                                          {
                                                              label: "10 seconds",
                                                              value: 10000,
                                                          },
                                                          {
                                                              label: "1 minute",
                                                              value: 60000,
                                                          },
                                                          {
                                                              label: "5 minutes",
                                                              value: 300000,
                                                          },
                                                          {
                                                              label: "10 minutes",
                                                              value: 600000,
                                                          },
                                                      ],
                                                      popoutLayerContext: v.O$,
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                          ],
                      }),
                      (0, a.jsxs)(x.xz.Provider, {
                          value: k,
                          children: [
                              (0, a.jsxs)(f.$0, {
                                  children: [
                                      (0, a.jsx)(o.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Settings Component",
                                      }),
                                      (0, a.jsx)(g.M, {}),
                                  ],
                              }),
                              (0, a.jsxs)(f.$0, {
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
                                      N &&
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
                              (0, a.jsxs)(f.$0, {
                                  children: [
                                      (0, a.jsx)(o.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk License Extension Task",
                                      }),
                                      (0, a.jsx)(y, {
                                          onSuccess: () => {
                                              var e;
                                              null == (e = P.current) || e.refresh();
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)(f.$0, {
                                  children: [
                                      (0, a.jsx)(o.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk WARP License Info",
                                      }),
                                      (0, a.jsx)(_, { ref: P }),
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
