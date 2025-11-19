n.d(t, { U: () => j }), n(388685), n(415506);
var a = n(54381),
    l = n(473749),
    i = n(663042),
    r = n(442837),
    s = n(159691),
    o = n(481060),
    c = n(720553),
    d = n(535664),
    u = n(5900),
    m = n(953865),
    p = n(299886),
    h = n(848984),
    x = n(29594),
    g = n(868802),
    f = n(594174),
    b = n(246992),
    v = n(474936);
let j = () => {
    let [e, t] = l.useState(-1),
        [n, j] = l.useState(-1),
        [_, y] = l.useState(!1),
        [C, S] = l.useState(5000),
        [E, N] = l.useState(!1),
        T = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        O = (0, h.u)(),
        P = async () => (
            R(u.Ij.INITIALIZING),
            t(
                setTimeout(() => {
                    R(u.Ij.CONNECTED);
                }, 1000),
            ),
            !0
        ),
        I = (0, l.useRef)(
            (0, m.o8)({
                connect: P,
                finishSetup: async () => !0,
                perkAvailableToUser: O,
            }),
        ).current,
        {
            installationStatus: w,
            setInstallationStatus: k,
            connectionStatus: A,
            setConnectionStatus: R,
            setDisconnect: Z,
            setInstall: D,
            setIsWeb: L,
            setIsSupportedPrivateBrowsingPerkPlatform: M,
            isWeb: U,
            isSupportedPrivateBrowsingPerkPlatform: B,
            setGetWarpInstallationStatus: F,
            perkAvailableToUser: G,
            setPerkAvailableToUser: z,
        } = (0, i.o)(I),
        H = (0, l.useCallback)(async () => u._n.INSTALLING, []);
    (0, l.useEffect)(() => {
        z(O);
    }, [O, z]),
        (0, l.useEffect)(() => {
            F(H);
        }, [F, H]);
    let V = (0, l.useCallback)(async () => (clearTimeout(e), R(u.Ij.DISCONNECTED), !0), [e, R]),
        W = (0, l.useCallback)(
            () =>
                new Promise((e, t) => {
                    k(u._n.INSTALLING),
                        j(
                            setTimeout(() => {
                                if (_) return void t(Error("Installation failed"));
                                e();
                            }, C),
                        );
                }),
            [_, C, k, j],
        );
    (0, l.useEffect)(() => {
        U && w !== u._n.UNKNOWN && k(u._n.UNKNOWN);
    }, [U, k, w]),
        (0, l.useEffect)(() => {
            Z(V);
        }, [V, Z]),
        (0, l.useEffect)(() => {
            D(W);
        }, [W, D]),
        (0, l.useEffect)(() => {
            w !== u._n.INSTALLING && clearTimeout(n);
        }, [n, w]),
        (0, l.useEffect)(() => {
            if (w !== u._n.INSTALLED && A !== u.Ij.INITIALIZING) return void R(u.Ij.INITIALIZING);
        }, [w, A, R]);
    let { enabled: K } = p.H.useConfig({ location: "private_browsing_perk_settings_page" });
    return K
        ? (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(s.X6q, {
                      variant: "heading-xl/semibold",
                      style: { marginTop: "16px" },
                      children: "Private Browsing Perk Components",
                  }),
                  (0, a.jsxs)(x.$0, {
                      children: [
                          (0, a.jsx)(s.X6q, {
                              variant: "heading-lg/semibold",
                              children: "Configure Private Browsing Perk State",
                          }),
                          (0, a.jsxs)(x.pg, {
                              children: [
                                  (0, a.jsxs)(x.BZ, {
                                      children: [
                                          (0, a.jsx)(s.xvT, {
                                              variant: "text-md/semibold",
                                              children: "Is Nitro",
                                          }),
                                          (0, a.jsx)("div", {
                                              style: { width: "45px" },
                                              children: (0, a.jsx)(s.rsf, {
                                                  onChange: () => {
                                                      G ? (0, d.C)(null, T) : (0, d.C)(v.F_, T);
                                                  },
                                                  checked: G,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)(x.BZ, {
                                      children: [
                                          (0, a.jsx)(s.xvT, {
                                              variant: "text-md/semibold",
                                              children: "Is Web",
                                          }),
                                          (0, a.jsx)("div", {
                                              style: { width: "45px" },
                                              children: (0, a.jsx)(s.rsf, {
                                                  onChange: () => L(!U),
                                                  checked: U,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)(x.BZ, {
                                      children: [
                                          (0, a.jsx)(s.xvT, {
                                              variant: "text-md/semibold",
                                              children: "Is Supported Platform",
                                          }),
                                          (0, a.jsx)("div", {
                                              style: { width: "45px" },
                                              children: (0, a.jsx)(s.rsf, {
                                                  onChange: () => M(!B),
                                                  checked: B,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)(x.BZ, {
                                      children: [
                                          (0, a.jsx)(s.xvT, {
                                              variant: "text-md/semibold",
                                              children: "Installation Status",
                                          }),
                                          (0, a.jsx)(o.PhF, {
                                              select: (e) => k(e),
                                              isSelected: (e) => e === w,
                                              serialize: (e) => "".concat(e),
                                              disabled: U,
                                              options: [
                                                  {
                                                      label: "Unknown",
                                                      value: u._n.UNKNOWN,
                                                  },
                                                  {
                                                      label: "Not Installed",
                                                      value: u._n.NOT_INSTALLED,
                                                  },
                                                  {
                                                      label: "Installed",
                                                      value: u._n.INSTALLED,
                                                  },
                                                  {
                                                      label: "Installing",
                                                      value: u._n.INSTALLING,
                                                  },
                                                  {
                                                      label: "Existing Installation",
                                                      value: u._n.EXISTING_INSTALLATION,
                                                  },
                                                  {
                                                      label: "Unsupported (ZeroTrust)",
                                                      value: u._n.ZERO_TRUST,
                                                  },
                                                  {
                                                      label: "Error",
                                                      value: u._n.ERROR,
                                                  },
                                              ],
                                              popoutLayerContext: b.O$,
                                          }),
                                      ],
                                  }),
                                  w === u._n.INSTALLED &&
                                      (0, a.jsxs)(x.BZ, {
                                          children: [
                                              (0, a.jsx)(s.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Connection Status",
                                              }),
                                              (0, a.jsx)(o.PhF, {
                                                  select: (e) => R(e),
                                                  isSelected: (e) => e === A,
                                                  serialize: (e) => "".concat(e),
                                                  options: [
                                                      {
                                                          label: "Initializing",
                                                          value: u.Ij.INITIALIZING,
                                                      },
                                                      {
                                                          label: "Connected",
                                                          value: u.Ij.CONNECTED,
                                                      },
                                                      {
                                                          label: "Disconnected",
                                                          value: u.Ij.DISCONNECTED,
                                                      },
                                                      {
                                                          label: "Error",
                                                          value: u.Ij.ERROR,
                                                      },
                                                  ],
                                                  popoutLayerContext: b.O$,
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                          w === u._n.NOT_INSTALLED &&
                              (0, a.jsxs)(x.pg, {
                                  children: [
                                      (0, a.jsxs)(x.BZ, {
                                          children: [
                                              (0, a.jsx)(s.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Install with error",
                                              }),
                                              (0, a.jsx)("div", {
                                                  style: { width: "45px" },
                                                  children: (0, a.jsx)(s.rsf, {
                                                      onChange: () => y(!_),
                                                      checked: _,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)(x.BZ, {
                                          children: [
                                              (0, a.jsx)(s.xvT, {
                                                  variant: "text-md/semibold",
                                                  children: "Install time",
                                              }),
                                              (0, a.jsx)(o.PhF, {
                                                  select: (e) => S(e),
                                                  isSelected: (e) => e === C,
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
                                                  popoutLayerContext: b.O$,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, a.jsxs)(m.xz.Provider, {
                      value: I,
                      children: [
                          (0, a.jsxs)(x.$0, {
                              children: [
                                  (0, a.jsx)(s.X6q, {
                                      variant: "heading-lg/medium",
                                      children: "Private Browsing Perk Settings Component",
                                  }),
                                  (0, a.jsx)(g.M, {}),
                              ],
                          }),
                          (0, a.jsxs)(x.$0, {
                              children: [
                                  (0, a.jsx)(s.X6q, {
                                      variant: "heading-lg/medium",
                                      children: "Private Browsing Perk Exit Modal Upsell",
                                  }),
                                  (0, a.jsx)(s.zxk, {
                                      text: "Show exit modal",
                                      onClick: () => {
                                          N(!0);
                                      },
                                  }),
                                  E &&
                                      (0, a.jsx)(c.default, {
                                          url: "https://www.discord.com",
                                          trustUrl: () => !1,
                                          onCancel: () => N(!1),
                                          isProtocol: !1,
                                          onConfirm: () => {},
                                          onClose: async () => {
                                              N(!1);
                                          },
                                          transitionState: o.Dvm.ENTERED,
                                      }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, a.jsx)("div", {
              children: (0, a.jsx)(s.X6q, {
                  variant: "heading-xl/semibold",
                  style: { marginTop: "16px" },
                  children: "Private Browsing Perk Experiment Not Enabled",
              }),
          });
};
