n.d(t, { p: () => A });
var a = n(627968),
    s = n(64700),
    i = n(353640),
    l = n(311907),
    r = n(562465),
    o = n(732955),
    d = n(397927),
    c = n(885293),
    u = n(10094),
    m = n(602450),
    h = n(967370),
    x = n(411683),
    p = n(557571),
    g = n(252561),
    _ = n(459301),
    f = n(287809),
    v = n(788868);
let b = s.forwardRef((e, t) => {
    let [n, i] = s.useState(null),
        [l, d] = s.useState(null),
        [c, u] = s.useState(!1),
        m = s.useCallback(async () => {
            u(!0), d(null), i(null);
            try {
                let e = await r.Bo.get({ url: "/users/@me/debug/warp/license", rejectWithError: !0 });
                i(e.body);
            } catch (n) {
                let e = n?.body?.message || n?.message || "Unknown error occurred",
                    t = n?.status || n?.body?.code;
                d(`Error ${t ? `(${t})` : ""}: ${e}`);
            } finally {
                u(!1);
            }
        }, []);
    return (
        s.useImperativeHandle(t, () => ({ refresh: m })),
        (0, a.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: "12px" },
            children: [
                (0, a.jsx)(o.$nd, { text: c ? "Loading..." : "Fetch WARP License Info", onClick: m, disabled: c }),
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
b.displayName = "DebugWarpLicenseInfo";
let j = (e) => {
        let { onSuccess: t } = e,
            [n, i] = s.useState(!1),
            [l, d] = s.useState(0),
            [c, u] = s.useState(null);
        s.useEffect(() => {
            if (l > 0) {
                let e = setTimeout(() => {
                    d(l - 1), 1 === l && t();
                }, 1e3);
                return () => clearTimeout(e);
            }
        }, [l, t]);
        let m = async () => {
            i(!0), u(null);
            try {
                await r.Bo.post({ url: "/users/@me/debug/warp/license/extension-task", rejectWithError: !0 }), d(5);
            } catch (n) {
                let e = n?.body?.message || n?.message || "Unknown error occurred",
                    t = n?.status || n?.body?.code;
                u(`Error ${t ? `(${t})` : ""}: ${e}`);
            } finally {
                i(!1);
            }
        };
        return (0, a.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: "12px" },
            children: [
                (0, a.jsx)(o.$nd, {
                    text: n
                        ? "Triggering Task..."
                        : l > 0
                          ? `Refreshing in ${l}s...`
                          : "Trigger License Extension Task",
                    onClick: m,
                    disabled: n || l > 0,
                }),
                null != c &&
                    (0, a.jsx)("div", {
                        style: {
                            padding: "12px",
                            backgroundColor: "#ed4245",
                            borderRadius: "4px",
                            color: "white",
                            fontFamily: "monospace",
                            fontSize: "12px",
                        },
                        children: c,
                    }),
            ],
        });
    },
    A = () => {
        let [e, t] = s.useState(-1),
            [n, r] = s.useState(-1),
            [A, C] = s.useState(!1),
            [S, T] = s.useState(5e3),
            [y, N] = s.useState(!1),
            E = s.useRef(null),
            I = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
            k = (0, x.L)(),
            [R] = s.useState(() => (0, p.YQ)({ finishSetup: async () => !0, perkAvailableToUser: k })),
            {
                installationStatus: O,
                setInstallationStatus: w,
                connectionStatus: D,
                setConnectionStatus: M,
                setConnect: P,
                setDisconnect: L,
                setInstall: U,
                setIsWeb: B,
                setIsSupportedPrivateBrowsingPerkPlatform: G,
                isWeb: F,
                isSupportedPrivateBrowsingPerkPlatform: V,
                setGetWarpInstallationStatus: W,
                perkAvailableToUser: H,
                setPerkAvailableToUser: K,
            } = (0, i.P)(R),
            z = s.useCallback(
                async () => (
                    M(m.l7.INITIALIZING),
                    t(
                        setTimeout(() => {
                            M(m.l7.CONNECTED);
                        }, 1e3),
                    ),
                    !0
                ),
                [M, t],
            );
        s.useEffect(() => {
            P(z);
        }, [z, P]);
        let $ = s.useCallback(async () => m.Lk.INSTALLING, []);
        s.useEffect(() => {
            K(k);
        }, [k, K]),
            s.useEffect(() => {
                W($);
            }, [W, $]);
        let q = s.useCallback(async () => (clearTimeout(e), M(m.l7.DISCONNECTED), !0), [e, M]),
            Q = s.useCallback(
                () =>
                    new Promise((e, t) => {
                        w(m.Lk.INSTALLING),
                            r(
                                setTimeout(() => {
                                    A ? t(Error("Installation failed")) : e();
                                }, S),
                            );
                    }),
                [A, S, w, r],
            );
        return (s.useEffect(() => {
            F && O !== m.Lk.UNKNOWN && w(m.Lk.UNKNOWN);
        }, [F, w, O]),
        s.useEffect(() => {
            L(q);
        }, [q, L]),
        s.useEffect(() => {
            U(Q);
        }, [Q, U]),
        s.useEffect(() => {
            O !== m.Lk.INSTALLING && clearTimeout(n);
        }, [n, O]),
        s.useEffect(() => {
            if (O !== m.Lk.INSTALLED && D !== m.l7.INITIALIZING) return void M(m.l7.INITIALIZING);
        }, [O, D, M]),
        (0, h.lM)("private_browsing_perk_settings_page"))
            ? (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(o.DZT, {
                          variant: "heading-xl/semibold",
                          style: { marginTop: "16px" },
                          children: "Private Browsing Perk Components",
                      }),
                      (0, a.jsxs)(g.wn, {
                          children: [
                              (0, a.jsx)(o.DZT, {
                                  variant: "heading-lg/semibold",
                                  children: "Configure Private Browsing Perk State",
                              }),
                              (0, a.jsxs)(g.LB, {
                                  children: [
                                      (0, a.jsxs)(g.MG, {
                                          children: [
                                              (0, a.jsx)(o.EYj, { variant: "text-md/semibold", children: "Is Nitro" }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(o.dOG, {
                                                      onChange: () => {
                                                          H ? (0, u.O)(null, I) : (0, u.O)(v.$I, I);
                                                      },
                                                      checked: H,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(g.MG, {
                                          children: [
                                              (0, a.jsx)(o.EYj, { variant: "text-md/semibold", children: "Is Web" }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(o.dOG, { onChange: () => B(!F), checked: F }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(g.MG, {
                                          children: [
                                              (0, a.jsx)(o.EYj, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Supported Platform",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(o.dOG, { onChange: () => G(!V), checked: V }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(g.MG, {
                                          children: (0, a.jsx)(d.l6P, {
                                              label: "Installation Status",
                                              onSelectionChange: w,
                                              value: O,
                                              disabled: F,
                                              options: [
                                                  { id: "unknown", label: "Unknown", value: m.Lk.UNKNOWN },
                                                  {
                                                      id: "notInstalled",
                                                      label: "Not Installed",
                                                      value: m.Lk.NOT_INSTALLED,
                                                  },
                                                  { id: "installed", label: "Installed", value: m.Lk.INSTALLED },
                                                  { id: "installing", label: "Installing", value: m.Lk.INSTALLING },
                                                  {
                                                      id: "waitingForTerms",
                                                      label: "Accept Terms",
                                                      value: m.Lk.WAITING_FOR_TERMS,
                                                  },
                                                  {
                                                      id: "existingInstallation",
                                                      label: "Existing Installation",
                                                      value: m.Lk.EXISTING_INSTALLATION,
                                                  },
                                                  {
                                                      id: "zeroTrust",
                                                      label: "Unsupported (ZeroTrust)",
                                                      value: m.Lk.ZERO_TRUST,
                                                  },
                                                  {
                                                      id: "installingTimeout",
                                                      label: "Installing Timeout",
                                                      value: m.Lk.INSTALLING_TIMEOUT,
                                                  },
                                                  { id: "error", label: "Error", value: m.Lk.ERROR },
                                              ],
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                      }),
                                      O === m.Lk.INSTALLED &&
                                          (0, a.jsx)(g.MG, {
                                              children: (0, a.jsx)(d.l6P, {
                                                  label: "Connection Status",
                                                  onSelectionChange: M,
                                                  value: D,
                                                  options: [
                                                      {
                                                          id: "initializing",
                                                          label: "Initializing",
                                                          value: m.l7.INITIALIZING,
                                                      },
                                                      { id: "connected", label: "Connected", value: m.l7.CONNECTED },
                                                      {
                                                          id: "disconnected",
                                                          label: "Disconnected",
                                                          value: m.l7.DISCONNECTED,
                                                      },
                                                      { id: "error", label: "Error", value: m.l7.ERROR },
                                                  ],
                                                  selectionMode: "single",
                                                  fullWidth: !0,
                                              }),
                                          }),
                                  ],
                              }),
                              O === m.Lk.NOT_INSTALLED &&
                                  (0, a.jsxs)(g.LB, {
                                      children: [
                                          (0, a.jsxs)(g.MG, {
                                              children: [
                                                  (0, a.jsx)(o.EYj, {
                                                      variant: "text-md/semibold",
                                                      children: "Install with error",
                                                  }),
                                                  (0, a.jsx)("div", {
                                                      style: { width: "45px" },
                                                      children: (0, a.jsx)(o.dOG, {
                                                          onChange: () => C(!A),
                                                          checked: A,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, a.jsx)(g.MG, {
                                              children: (0, a.jsx)(d.l6P, {
                                                  label: "Install time",
                                                  onSelectionChange: T,
                                                  value: S,
                                                  options: [
                                                      { id: "1second", label: "1 second", value: 1e3 },
                                                      { id: "5seconds", label: "5 seconds", value: 5e3 },
                                                      { id: "10seconds", label: "10 seconds", value: 1e4 },
                                                      { id: "1minute", label: "1 minute", value: 6e4 },
                                                      { id: "5minutes", label: "5 minutes", value: 3e5 },
                                                      { id: "10minutes", label: "10 minutes", value: 6e5 },
                                                  ],
                                                  selectionMode: "single",
                                                  fullWidth: !0,
                                              }),
                                          }),
                                      ],
                                  }),
                          ],
                      }),
                      (0, a.jsxs)(p.y0.Provider, {
                          value: R,
                          children: [
                              (0, a.jsxs)(g.wn, {
                                  children: [
                                      (0, a.jsx)(o.DZT, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Settings Component",
                                      }),
                                      (0, a.jsx)(_.m, {}),
                                  ],
                              }),
                              (0, a.jsxs)(g.wn, {
                                  children: [
                                      (0, a.jsx)(o.DZT, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Exit Modal Upsell",
                                      }),
                                      (0, a.jsx)(o.$nd, {
                                          text: "Show exit modal",
                                          onClick: () => {
                                              N(!0);
                                          },
                                      }),
                                      y &&
                                          (0, a.jsx)(c.default, {
                                              url: "https://www.discord.com",
                                              trustUrl: () => !1,
                                              onCancel: () => N(!1),
                                              isProtocol: !1,
                                              onConfirm: () => {},
                                              onClose: async () => {
                                                  N(!1);
                                              },
                                              transitionState: d.ip4.ENTERED,
                                          }),
                                  ],
                              }),
                              (0, a.jsxs)(g.wn, {
                                  children: [
                                      (0, a.jsx)(o.DZT, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk License Extension Task",
                                      }),
                                      (0, a.jsx)(j, {
                                          onSuccess: () => {
                                              E.current?.refresh();
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)(g.wn, {
                                  children: [
                                      (0, a.jsx)(o.DZT, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk WARP License Info",
                                      }),
                                      (0, a.jsx)(b, { ref: E }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              })
            : (0, a.jsx)("div", {
                  children: (0, a.jsx)(o.DZT, {
                      variant: "heading-xl/semibold",
                      style: { marginTop: "16px" },
                      children: "Private Browsing Perk Experiment Not Enabled",
                  }),
              });
    };
