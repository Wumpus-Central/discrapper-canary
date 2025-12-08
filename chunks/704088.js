n.d(t, { U: () => S }), n(388685), n(49124), n(415506);
var a = n(54381),
    l = n(473749),
    r = n(663042),
    i = n(442837),
    s = n(544891),
    o = n(199849),
    c = n(159691),
    d = n(481060),
    u = n(720553),
    m = n(535664),
    p = n(5900),
    h = n(299886),
    x = n(848984),
    f = n(773275),
    g = n(261538),
    b = n(868802),
    v = n(594174),
    j = n(246992),
    _ = n(474936);
let y = l.forwardRef((e, t) => {
    let [n, r] = l.useState(null),
        [i, o] = l.useState(null),
        [d, u] = l.useState(!1),
        m = l.useCallback(async () => {
            u(!0), o(null), r(null);
            try {
                let e = await s.tn.get({
                    url: "/users/@me/debug/warp/license",
                    rejectWithError: !0,
                });
                r(e.body);
            } catch (l) {
                var e, t;
                let n =
                        (null == l || null == (e = l.body) ? void 0 : e.message) ||
                        (null == l ? void 0 : l.message) ||
                        "Unknown error occurred",
                    a = (null == l ? void 0 : l.status) || (null == l || null == (t = l.body) ? void 0 : t.code);
                o("Error ".concat(a ? "(".concat(a, ")") : "", ": ").concat(n));
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
                (0, a.jsx)(c.zxk, {
                    text: d ? "Loading..." : "Fetch WARP License Info",
                    onClick: m,
                    disabled: d,
                }),
                null != i &&
                    (0, a.jsx)("div", {
                        style: {
                            padding: "12px",
                            backgroundColor: "#ed4245",
                            borderRadius: "4px",
                            color: "white",
                            fontFamily: "monospace",
                            fontSize: "12px",
                        },
                        children: i,
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
y.displayName = "DebugWarpLicenseInfo";
let C = (e) => {
        let { onSuccess: t } = e,
            [n, r] = l.useState(!1),
            [i, o] = l.useState(0),
            [d, u] = l.useState(null);
        l.useEffect(() => {
            if (i > 0) {
                let e = setTimeout(() => {
                    o(i - 1), 1 === i && t();
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [i, t]);
        let m = async () => {
            r(!0), u(null);
            try {
                await s.tn.post({
                    url: "/users/@me/debug/warp/license/extension-task",
                    rejectWithError: !0,
                }),
                    o(5);
            } catch (l) {
                var e, t;
                let n =
                        (null == l || null == (e = l.body) ? void 0 : e.message) ||
                        (null == l ? void 0 : l.message) ||
                        "Unknown error occurred",
                    a = (null == l ? void 0 : l.status) || (null == l || null == (t = l.body) ? void 0 : t.code);
                u("Error ".concat(a ? "(".concat(a, ")") : "", ": ").concat(n));
            } finally {
                r(!1);
            }
        };
        return (0, a.jsxs)("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: "12px",
            },
            children: [
                (0, a.jsx)(c.zxk, {
                    text: n
                        ? "Triggering Task..."
                        : i > 0
                          ? "Refreshing in ".concat(i, "s...")
                          : "Trigger License Extension Task",
                    onClick: m,
                    disabled: n || i > 0,
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
    S = () => {
        let [e, t] = l.useState(-1),
            [n, s] = l.useState(-1),
            [S, E] = l.useState(!1),
            [O, N] = l.useState(5000),
            [T, P] = l.useState(!1),
            I = l.useRef(null),
            w = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
            k = (0, x.u)(),
            [R] = l.useState(() =>
                (0, f.o8)({
                    finishSetup: async () => !0,
                    perkAvailableToUser: k,
                }),
            ),
            {
                installationStatus: A,
                setInstallationStatus: Z,
                connectionStatus: D,
                setConnectionStatus: L,
                setConnect: M,
                setDisconnect: U,
                setInstall: F,
                setIsWeb: B,
                setIsSupportedPrivateBrowsingPerkPlatform: G,
                isWeb: z,
                isSupportedPrivateBrowsingPerkPlatform: V,
                setGetWarpInstallationStatus: H,
                perkAvailableToUser: W,
                setPerkAvailableToUser: K,
            } = (0, r.o)(R),
            q = l.useCallback(
                async () => (
                    L(p.Ij.INITIALIZING),
                    t(
                        setTimeout(() => {
                            L(p.Ij.CONNECTED);
                        }, 1000),
                    ),
                    !0
                ),
                [L, t],
            );
        l.useEffect(() => {
            M(q);
        }, [q, M]);
        let Y = l.useCallback(async () => p._n.INSTALLING, []);
        l.useEffect(() => {
            K(k);
        }, [k, K]),
            l.useEffect(() => {
                H(Y);
            }, [H, Y]);
        let J = l.useCallback(async () => (clearTimeout(e), L(p.Ij.DISCONNECTED), !0), [e, L]),
            X = l.useCallback(
                () =>
                    new Promise((e, t) => {
                        Z(p._n.INSTALLING),
                            s(
                                setTimeout(() => {
                                    if (S) return void t(Error("Installation failed"));
                                    e();
                                }, O),
                            );
                    }),
                [S, O, Z, s],
            );
        l.useEffect(() => {
            z && A !== p._n.UNKNOWN && Z(p._n.UNKNOWN);
        }, [z, Z, A]),
            l.useEffect(() => {
                U(J);
            }, [J, U]),
            l.useEffect(() => {
                F(X);
            }, [X, F]),
            l.useEffect(() => {
                A !== p._n.INSTALLING && clearTimeout(n);
            }, [n, A]),
            l.useEffect(() => {
                if (A !== p._n.INSTALLED && D !== p.Ij.INITIALIZING) return void L(p.Ij.INITIALIZING);
            }, [A, D, L]);
        let { enabled: Q } = h.H.useConfig({ location: "private_browsing_perk_settings_page" });
        return Q
            ? (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(c.X6q, {
                          variant: "heading-xl/semibold",
                          style: { marginTop: "16px" },
                          children: "Private Browsing Perk Components",
                      }),
                      (0, a.jsxs)(g.$0, {
                          children: [
                              (0, a.jsx)(c.X6q, {
                                  variant: "heading-lg/semibold",
                                  children: "Configure Private Browsing Perk State",
                              }),
                              (0, a.jsxs)(g.pg, {
                                  children: [
                                      (0, a.jsxs)(g.BZ, {
                                          children: [
                                              (0, a.jsx)(c.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Nitro",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(c.rsf, {
                                                      onChange: () => {
                                                          W ? (0, m.C)(null, w) : (0, m.C)(_.F_, w);
                                                      },
                                                      checked: W,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(g.BZ, {
                                          children: [
                                              (0, a.jsx)(c.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Web",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(c.rsf, {
                                                      onChange: () => B(!z),
                                                      checked: z,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(g.BZ, {
                                          children: [
                                              (0, a.jsx)(c.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Supported Platform",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(c.rsf, {
                                                      onChange: () => G(!V),
                                                      checked: V,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(g.BZ, {
                                          children: [
                                              (0, a.jsx)(c.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Installation Status",
                                              }),
                                              (0, a.jsx)(o.B6, {
                                                  select: (e) => Z(e),
                                                  isSelected: (e) => e === A,
                                                  serialize: (e) => "".concat(e),
                                                  disabled: z,
                                                  options: [
                                                      {
                                                          label: "Unknown",
                                                          value: p._n.UNKNOWN,
                                                      },
                                                      {
                                                          label: "Not Installed",
                                                          value: p._n.NOT_INSTALLED,
                                                      },
                                                      {
                                                          label: "Installed",
                                                          value: p._n.INSTALLED,
                                                      },
                                                      {
                                                          label: "Installing",
                                                          value: p._n.INSTALLING,
                                                      },
                                                      {
                                                          label: "Accept Terms",
                                                          value: p._n.WAITING_FOR_TERMS,
                                                      },
                                                      {
                                                          label: "Existing Installation",
                                                          value: p._n.EXISTING_INSTALLATION,
                                                      },
                                                      {
                                                          label: "Unsupported (ZeroTrust)",
                                                          value: p._n.ZERO_TRUST,
                                                      },
                                                      {
                                                          label: "Installing Timeout",
                                                          value: p._n.INSTALLING_TIMEOUT,
                                                      },
                                                      {
                                                          label: "Error",
                                                          value: p._n.ERROR,
                                                      },
                                                  ],
                                                  popoutLayerContext: j.O$,
                                              }),
                                          ],
                                      }),
                                      A === p._n.INSTALLED &&
                                          (0, a.jsxs)(g.BZ, {
                                              children: [
                                                  (0, a.jsx)(c.xvT, {
                                                      variant: "text-md/semibold",
                                                      children: "Connection Status",
                                                  }),
                                                  (0, a.jsx)(o.B6, {
                                                      select: (e) => L(e),
                                                      isSelected: (e) => e === D,
                                                      serialize: (e) => "".concat(e),
                                                      options: [
                                                          {
                                                              label: "Initializing",
                                                              value: p.Ij.INITIALIZING,
                                                          },
                                                          {
                                                              label: "Connected",
                                                              value: p.Ij.CONNECTED,
                                                          },
                                                          {
                                                              label: "Disconnected",
                                                              value: p.Ij.DISCONNECTED,
                                                          },
                                                          {
                                                              label: "Error",
                                                              value: p.Ij.ERROR,
                                                          },
                                                      ],
                                                      popoutLayerContext: j.O$,
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              A === p._n.NOT_INSTALLED &&
                                  (0, a.jsxs)(g.pg, {
                                      children: [
                                          (0, a.jsxs)(g.BZ, {
                                              children: [
                                                  (0, a.jsx)(c.xvT, {
                                                      variant: "text-md/semibold",
                                                      children: "Install with error",
                                                  }),
                                                  (0, a.jsx)("div", {
                                                      style: { width: "45px" },
                                                      children: (0, a.jsx)(c.rsf, {
                                                          onChange: () => E(!S),
                                                          checked: S,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, a.jsxs)(g.BZ, {
                                              children: [
                                                  (0, a.jsx)(c.xvT, {
                                                      variant: "text-md/semibold",
                                                      children: "Install time",
                                                  }),
                                                  (0, a.jsx)(o.B6, {
                                                      select: (e) => N(e),
                                                      isSelected: (e) => e === O,
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
                                                      popoutLayerContext: j.O$,
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                          ],
                      }),
                      (0, a.jsxs)(f.xz.Provider, {
                          value: R,
                          children: [
                              (0, a.jsxs)(g.$0, {
                                  children: [
                                      (0, a.jsx)(c.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Settings Component",
                                      }),
                                      (0, a.jsx)(b.M, {}),
                                  ],
                              }),
                              (0, a.jsxs)(g.$0, {
                                  children: [
                                      (0, a.jsx)(c.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Exit Modal Upsell",
                                      }),
                                      (0, a.jsx)(c.zxk, {
                                          text: "Show exit modal",
                                          onClick: () => {
                                              P(!0);
                                          },
                                      }),
                                      T &&
                                          (0, a.jsx)(u.default, {
                                              url: "https://www.discord.com",
                                              trustUrl: () => !1,
                                              onCancel: () => P(!1),
                                              isProtocol: !1,
                                              onConfirm: () => {},
                                              onClose: async () => {
                                                  P(!1);
                                              },
                                              transitionState: d.Dvm.ENTERED,
                                          }),
                                  ],
                              }),
                              (0, a.jsxs)(g.$0, {
                                  children: [
                                      (0, a.jsx)(c.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk License Extension Task",
                                      }),
                                      (0, a.jsx)(C, {
                                          onSuccess: () => {
                                              var e;
                                              null == (e = I.current) || e.refresh();
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)(g.$0, {
                                  children: [
                                      (0, a.jsx)(c.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk WARP License Info",
                                      }),
                                      (0, a.jsx)(y, { ref: I }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              })
            : (0, a.jsx)("div", {
                  children: (0, a.jsx)(c.X6q, {
                      variant: "heading-xl/semibold",
                      style: { marginTop: "16px" },
                      children: "Private Browsing Perk Experiment Not Enabled",
                  }),
              });
    };
