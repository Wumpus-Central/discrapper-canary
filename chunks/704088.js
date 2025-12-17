n.d(t, { U: () => S }), n(388685), n(49124), n(415506);
var a = n(54381),
    r = n(473749),
    l = n(663042),
    i = n(442837),
    s = n(544891),
    o = n(199849),
    c = n(159691),
    d = n(481060),
    u = n(720553),
    m = n(535664),
    p = n(5900),
    h = n(299886),
    f = n(848984),
    x = n(773275),
    b = n(261538),
    g = n(868802),
    v = n(594174),
    j = n(246992),
    y = n(474936);
let C = r.forwardRef((e, t) => {
    let [n, l] = r.useState(null),
        [i, o] = r.useState(null),
        [d, u] = r.useState(!1),
        m = r.useCallback(async () => {
            u(!0), o(null), l(null);
            try {
                let e = await s.tn.get({
                    url: "/users/@me/debug/warp/license",
                    rejectWithError: !0,
                });
                l(e.body);
            } catch (r) {
                var e, t;
                let n =
                        (null == r || null == (e = r.body) ? void 0 : e.message) ||
                        (null == r ? void 0 : r.message) ||
                        "Unknown error occurred",
                    a = (null == r ? void 0 : r.status) || (null == r || null == (t = r.body) ? void 0 : t.code);
                o("Error ".concat(a ? "(".concat(a, ")") : "", ": ").concat(n));
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
C.displayName = "DebugWarpLicenseInfo";
let _ = (e) => {
        let { onSuccess: t } = e,
            [n, l] = r.useState(!1),
            [i, o] = r.useState(0),
            [d, u] = r.useState(null);
        r.useEffect(() => {
            if (i > 0) {
                let e = setTimeout(() => {
                    o(i - 1), 1 === i && t();
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [i, t]);
        let m = async () => {
            l(!0), u(null);
            try {
                await s.tn.post({
                    url: "/users/@me/debug/warp/license/extension-task",
                    rejectWithError: !0,
                }),
                    o(5);
            } catch (r) {
                var e, t;
                let n =
                        (null == r || null == (e = r.body) ? void 0 : e.message) ||
                        (null == r ? void 0 : r.message) ||
                        "Unknown error occurred",
                    a = (null == r ? void 0 : r.status) || (null == r || null == (t = r.body) ? void 0 : t.code);
                u("Error ".concat(a ? "(".concat(a, ")") : "", ": ").concat(n));
            } finally {
                l(!1);
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
        let [e, t] = r.useState(-1),
            [n, s] = r.useState(-1),
            [S, E] = r.useState(!1),
            [T, O] = r.useState(5000),
            [N, w] = r.useState(!1),
            P = r.useRef(null),
            I = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
            k = (0, f.u)(),
            [R] = r.useState(() =>
                (0, x.o8)({
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
                setInstall: B,
                setIsWeb: F,
                setIsSupportedPrivateBrowsingPerkPlatform: G,
                isWeb: V,
                isSupportedPrivateBrowsingPerkPlatform: H,
                setGetWarpInstallationStatus: z,
                perkAvailableToUser: W,
                setPerkAvailableToUser: K,
            } = (0, l.o)(R),
            q = r.useCallback(
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
        r.useEffect(() => {
            M(q);
        }, [q, M]);
        let Y = r.useCallback(async () => p._n.INSTALLING, []);
        r.useEffect(() => {
            K(k);
        }, [k, K]),
            r.useEffect(() => {
                z(Y);
            }, [z, Y]);
        let Q = r.useCallback(async () => (clearTimeout(e), L(p.Ij.DISCONNECTED), !0), [e, L]),
            X = r.useCallback(
                () =>
                    new Promise((e, t) => {
                        Z(p._n.INSTALLING),
                            s(
                                setTimeout(() => {
                                    if (S) return void t(Error("Installation failed"));
                                    e();
                                }, T),
                            );
                    }),
                [S, T, Z, s],
            );
        r.useEffect(() => {
            V && A !== p._n.UNKNOWN && Z(p._n.UNKNOWN);
        }, [V, Z, A]),
            r.useEffect(() => {
                U(Q);
            }, [Q, U]),
            r.useEffect(() => {
                B(X);
            }, [X, B]),
            r.useEffect(() => {
                A !== p._n.INSTALLING && clearTimeout(n);
            }, [n, A]),
            r.useEffect(() => {
                if (A !== p._n.INSTALLED && D !== p.Ij.INITIALIZING) return void L(p.Ij.INITIALIZING);
            }, [A, D, L]);
        let { enabled: J } = h.H.useConfig({ location: "private_browsing_perk_settings_page" });
        return J
            ? (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(c.X6q, {
                          variant: "heading-xl/semibold",
                          style: { marginTop: "16px" },
                          children: "Private Browsing Perk Components",
                      }),
                      (0, a.jsxs)(b.$0, {
                          children: [
                              (0, a.jsx)(c.X6q, {
                                  variant: "heading-lg/semibold",
                                  children: "Configure Private Browsing Perk State",
                              }),
                              (0, a.jsxs)(b.pg, {
                                  children: [
                                      (0, a.jsxs)(b.BZ, {
                                          children: [
                                              (0, a.jsx)(c.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Nitro",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(c.rsf, {
                                                      onChange: () => {
                                                          W ? (0, m.C)(null, I) : (0, m.C)(y.F_, I);
                                                      },
                                                      checked: W,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(b.BZ, {
                                          children: [
                                              (0, a.jsx)(c.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Web",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(c.rsf, {
                                                      onChange: () => F(!V),
                                                      checked: V,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(b.BZ, {
                                          children: [
                                              (0, a.jsx)(c.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Supported Platform",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(c.rsf, {
                                                      onChange: () => G(!H),
                                                      checked: H,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(b.BZ, {
                                          children: [
                                              (0, a.jsx)(c.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Installation Status",
                                              }),
                                              (0, a.jsx)(o.B6, {
                                                  select: (e) => Z(e),
                                                  isSelected: (e) => e === A,
                                                  serialize: (e) => "".concat(e),
                                                  disabled: V,
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
                                          (0, a.jsxs)(b.BZ, {
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
                                  (0, a.jsxs)(b.pg, {
                                      children: [
                                          (0, a.jsxs)(b.BZ, {
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
                                          (0, a.jsxs)(b.BZ, {
                                              children: [
                                                  (0, a.jsx)(c.xvT, {
                                                      variant: "text-md/semibold",
                                                      children: "Install time",
                                                  }),
                                                  (0, a.jsx)(o.B6, {
                                                      select: (e) => O(e),
                                                      isSelected: (e) => e === T,
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
                      (0, a.jsxs)(x.xz.Provider, {
                          value: R,
                          children: [
                              (0, a.jsxs)(b.$0, {
                                  children: [
                                      (0, a.jsx)(c.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Settings Component",
                                      }),
                                      (0, a.jsx)(g.M, {}),
                                  ],
                              }),
                              (0, a.jsxs)(b.$0, {
                                  children: [
                                      (0, a.jsx)(c.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Exit Modal Upsell",
                                      }),
                                      (0, a.jsx)(c.zxk, {
                                          text: "Show exit modal",
                                          onClick: () => {
                                              w(!0);
                                          },
                                      }),
                                      N &&
                                          (0, a.jsx)(u.default, {
                                              url: "https://www.discord.com",
                                              trustUrl: () => !1,
                                              onCancel: () => w(!1),
                                              isProtocol: !1,
                                              onConfirm: () => {},
                                              onClose: async () => {
                                                  w(!1);
                                              },
                                              transitionState: d.Dvm.ENTERED,
                                          }),
                                  ],
                              }),
                              (0, a.jsxs)(b.$0, {
                                  children: [
                                      (0, a.jsx)(c.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk License Extension Task",
                                      }),
                                      (0, a.jsx)(_, {
                                          onSuccess: () => {
                                              var e;
                                              null == (e = P.current) || e.refresh();
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)(b.$0, {
                                  children: [
                                      (0, a.jsx)(c.X6q, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk WARP License Info",
                                      }),
                                      (0, a.jsx)(C, { ref: P }),
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
