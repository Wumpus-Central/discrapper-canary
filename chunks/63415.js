n.d(t, {
    p: () => _,
}),
    n(896048),
    n(457529),
    n(65821);
var a = n(627968),
    l = n(64700),
    i = n(353640),
    r = n(311907),
    s = n(562465),
    o = n(732955),
    c = n(397927),
    d = n(885293),
    u = n(10094),
    m = n(602450),
    p = n(967370),
    h = n(411683),
    f = n(557571),
    x = n(252561),
    b = n(459301),
    g = n(287809),
    v = n(788868);
let j = l.forwardRef((e, t) => {
    let [n, i] = l.useState(null),
        [r, c] = l.useState(null),
        [d, u] = l.useState(!1),
        m = l.useCallback(async () => {
            u(!0), c(null), i(null);
            try {
                let e = await s.Bo.get({
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
        l.useImperativeHandle(t, () => ({
            refresh: m,
        })),
        (0, a.jsxs)("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: "12px",
            },
            children: [
                (0, a.jsx)(o.$nd, {
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
j.displayName = "DebugWarpLicenseInfo";
let y = (e) => {
        let { onSuccess: t } = e,
            [n, i] = l.useState(!1),
            [r, c] = l.useState(0),
            [d, u] = l.useState(null);
        l.useEffect(() => {
            if (r > 0) {
                let e = setTimeout(() => {
                    c(r - 1), 1 === r && t();
                }, 1e3);
                return () => clearTimeout(e);
            }
        }, [r, t]);
        let m = async () => {
            i(!0), u(null);
            try {
                await s.Bo.post({
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
                (0, a.jsx)(o.$nd, {
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
    _ = () => {
        let [e, t] = l.useState(-1),
            [n, s] = l.useState(-1),
            [_, A] = l.useState(!1),
            [C, S] = l.useState(5e3),
            [O, E] = l.useState(!1),
            N = l.useRef(null),
            T = (0, r.bG)([g.default], () => g.default.getCurrentUser()),
            I = (0, h.L)(),
            [w] = l.useState(() =>
                (0, f.YQ)({
                    finishSetup: async () => !0,
                    perkAvailableToUser: I,
                }),
            ),
            {
                installationStatus: k,
                setInstallationStatus: P,
                connectionStatus: R,
                setConnectionStatus: D,
                setConnect: M,
                setDisconnect: L,
                setInstall: U,
                setIsWeb: B,
                setIsSupportedPrivateBrowsingPerkPlatform: G,
                isWeb: F,
                isSupportedPrivateBrowsingPerkPlatform: V,
                setGetWarpInstallationStatus: H,
                perkAvailableToUser: W,
                setPerkAvailableToUser: K,
            } = (0, i.P)(w),
            z = l.useCallback(
                async () => (
                    D(m.l7.INITIALIZING),
                    t(
                        setTimeout(() => {
                            D(m.l7.CONNECTED);
                        }, 1e3),
                    ),
                    !0
                ),
                [D, t],
            );
        l.useEffect(() => {
            M(z);
        }, [z, M]);
        let q = l.useCallback(async () => m.Lk.INSTALLING, []);
        l.useEffect(() => {
            K(I);
        }, [I, K]),
            l.useEffect(() => {
                H(q);
            }, [H, q]);
        let Q = l.useCallback(async () => (clearTimeout(e), D(m.l7.DISCONNECTED), !0), [e, D]),
            Y = l.useCallback(
                () =>
                    new Promise((e, t) => {
                        P(m.Lk.INSTALLING),
                            s(
                                setTimeout(() => {
                                    _ ? t(Error("Installation failed")) : e();
                                }, C),
                            );
                    }),
                [_, C, P, s],
            );
        l.useEffect(() => {
            F && k !== m.Lk.UNKNOWN && P(m.Lk.UNKNOWN);
        }, [F, P, k]),
            l.useEffect(() => {
                L(Q);
            }, [Q, L]),
            l.useEffect(() => {
                U(Y);
            }, [Y, U]),
            l.useEffect(() => {
                k !== m.Lk.INSTALLING && clearTimeout(n);
            }, [n, k]),
            l.useEffect(() => {
                if (k !== m.Lk.INSTALLED && R !== m.l7.INITIALIZING) return void D(m.l7.INITIALIZING);
            }, [k, R, D]);
        let { enabled: J } = p.S.useConfig({
            location: "private_browsing_perk_settings_page",
        });
        return J
            ? (0, a.jsxs)("div", {
                  children: [
                      (0, a.jsx)(o.DZT, {
                          variant: "heading-xl/semibold",
                          style: {
                              marginTop: "16px",
                          },
                          children: "Private Browsing Perk Components",
                      }),
                      (0, a.jsxs)(x.wn, {
                          children: [
                              (0, a.jsx)(o.DZT, {
                                  variant: "heading-lg/semibold",
                                  children: "Configure Private Browsing Perk State",
                              }),
                              (0, a.jsxs)(x.LB, {
                                  children: [
                                      (0, a.jsxs)(x.MG, {
                                          children: [
                                              (0, a.jsx)(o.EYj, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Nitro",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: {
                                                      width: "45px",
                                                  },
                                                  children: (0, a.jsx)(o.dOG, {
                                                      onChange: () => {
                                                          W ? (0, u.O)(null, T) : (0, u.O)(v.$I, T);
                                                      },
                                                      checked: W,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(x.MG, {
                                          children: [
                                              (0, a.jsx)(o.EYj, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Web",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: {
                                                      width: "45px",
                                                  },
                                                  children: (0, a.jsx)(o.dOG, {
                                                      onChange: () => B(!F),
                                                      checked: F,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(x.MG, {
                                          children: [
                                              (0, a.jsx)(o.EYj, {
                                                  variant: "text-md/semibold",
                                                  children: "Is Supported Platform",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: {
                                                      width: "45px",
                                                  },
                                                  children: (0, a.jsx)(o.dOG, {
                                                      onChange: () => G(!V),
                                                      checked: V,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(x.MG, {
                                          children: (0, a.jsx)(c.l6P, {
                                              label: "Installation Status",
                                              onSelectionChange: P,
                                              value: k,
                                              disabled: F,
                                              options: [
                                                  {
                                                      id: "unknown",
                                                      label: "Unknown",
                                                      value: m.Lk.UNKNOWN,
                                                  },
                                                  {
                                                      id: "notInstalled",
                                                      label: "Not Installed",
                                                      value: m.Lk.NOT_INSTALLED,
                                                  },
                                                  {
                                                      id: "installed",
                                                      label: "Installed",
                                                      value: m.Lk.INSTALLED,
                                                  },
                                                  {
                                                      id: "installing",
                                                      label: "Installing",
                                                      value: m.Lk.INSTALLING,
                                                  },
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
                                                  {
                                                      id: "error",
                                                      label: "Error",
                                                      value: m.Lk.ERROR,
                                                  },
                                              ],
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                      }),
                                      k === m.Lk.INSTALLED &&
                                          (0, a.jsx)(x.MG, {
                                              children: (0, a.jsx)(c.l6P, {
                                                  label: "Connection Status",
                                                  onSelectionChange: D,
                                                  value: R,
                                                  options: [
                                                      {
                                                          id: "initializing",
                                                          label: "Initializing",
                                                          value: m.l7.INITIALIZING,
                                                      },
                                                      {
                                                          id: "connected",
                                                          label: "Connected",
                                                          value: m.l7.CONNECTED,
                                                      },
                                                      {
                                                          id: "disconnected",
                                                          label: "Disconnected",
                                                          value: m.l7.DISCONNECTED,
                                                      },
                                                      {
                                                          id: "error",
                                                          label: "Error",
                                                          value: m.l7.ERROR,
                                                      },
                                                  ],
                                                  selectionMode: "single",
                                                  fullWidth: !0,
                                              }),
                                          }),
                                  ],
                              }),
                              k === m.Lk.NOT_INSTALLED &&
                                  (0, a.jsxs)(x.LB, {
                                      children: [
                                          (0, a.jsxs)(x.MG, {
                                              children: [
                                                  (0, a.jsx)(o.EYj, {
                                                      variant: "text-md/semibold",
                                                      children: "Install with error",
                                                  }),
                                                  (0, a.jsx)("div", {
                                                      style: {
                                                          width: "45px",
                                                      },
                                                      children: (0, a.jsx)(o.dOG, {
                                                          onChange: () => A(!_),
                                                          checked: _,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, a.jsx)(x.MG, {
                                              children: (0, a.jsx)(c.l6P, {
                                                  label: "Install time",
                                                  onSelectionChange: S,
                                                  value: C,
                                                  options: [
                                                      {
                                                          id: "1second",
                                                          label: "1 second",
                                                          value: 1e3,
                                                      },
                                                      {
                                                          id: "5seconds",
                                                          label: "5 seconds",
                                                          value: 5e3,
                                                      },
                                                      {
                                                          id: "10seconds",
                                                          label: "10 seconds",
                                                          value: 1e4,
                                                      },
                                                      {
                                                          id: "1minute",
                                                          label: "1 minute",
                                                          value: 6e4,
                                                      },
                                                      {
                                                          id: "5minutes",
                                                          label: "5 minutes",
                                                          value: 3e5,
                                                      },
                                                      {
                                                          id: "10minutes",
                                                          label: "10 minutes",
                                                          value: 6e5,
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
                      (0, a.jsxs)(f.y0.Provider, {
                          value: w,
                          children: [
                              (0, a.jsxs)(x.wn, {
                                  children: [
                                      (0, a.jsx)(o.DZT, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Settings Component",
                                      }),
                                      (0, a.jsx)(b.m, {}),
                                  ],
                              }),
                              (0, a.jsxs)(x.wn, {
                                  children: [
                                      (0, a.jsx)(o.DZT, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk Exit Modal Upsell",
                                      }),
                                      (0, a.jsx)(o.$nd, {
                                          text: "Show exit modal",
                                          onClick: () => {
                                              E(!0);
                                          },
                                      }),
                                      O &&
                                          (0, a.jsx)(d.default, {
                                              url: "https://www.discord.com",
                                              trustUrl: () => !1,
                                              onCancel: () => E(!1),
                                              isProtocol: !1,
                                              onConfirm: () => {},
                                              onClose: async () => {
                                                  E(!1);
                                              },
                                              transitionState: c.ip4.ENTERED,
                                          }),
                                  ],
                              }),
                              (0, a.jsxs)(x.wn, {
                                  children: [
                                      (0, a.jsx)(o.DZT, {
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
                              (0, a.jsxs)(x.wn, {
                                  children: [
                                      (0, a.jsx)(o.DZT, {
                                          variant: "heading-lg/medium",
                                          children: "Private Browsing Perk WARP License Info",
                                      }),
                                      (0, a.jsx)(j, {
                                          ref: N,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              })
            : (0, a.jsx)("div", {
                  children: (0, a.jsx)(o.DZT, {
                      variant: "heading-xl/semibold",
                      style: {
                          marginTop: "16px",
                      },
                      children: "Private Browsing Perk Experiment Not Enabled",
                  }),
              });
    };
