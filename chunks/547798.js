n.d(t, {
    A: () => k,
}),
    n(65821),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(141931),
    o = n(562465),
    c = n(306173),
    d = n(397927),
    u = n(73153),
    m = n(787880),
    p = n(796104),
    h = n(146104),
    f = n(142120),
    x = n(69555),
    b = n(237984),
    g = n(349435),
    v = n(674272),
    j = n(253932),
    y = n(559248),
    _ = n(179690),
    A = n(309010),
    C = n(837921),
    S = n(652215),
    O = n(327337),
    E = n(431804),
    N = n(229988),
    T = n(473169);

function I() {
    throw Error("Send help");
}

function k() {
    let e = j.j0.useSetting(),
        [t, i] = l.useState(!1);
    return t
        ? {}
        : (0, a.jsxs)(d.HOs, {
              children: [
                  (0, a.jsx)("div", {
                      className: r()(N.N, T.SX),
                      children: (0, a.jsx)(y.M, {}),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(N.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () =>
                              (0, v.A)({
                                  source: E.y.KEYBIND,
                              }),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(N.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e, t;
                              return (
                                  (t = null != (e = A.A.getChannelId()) ? e : "21154681615024128"),
                                  void (0, d.mMO)(
                                      async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("45033"),
                                              n.e("46717"),
                                              n.e("54105"),
                                          ]).then(n.bind(n, 788099));
                                          return (n) =>
                                              (0, a.jsx)(
                                                  e,
                                                  (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                              a = Object.keys(n);
                                                          "function" == typeof Object.getOwnPropertySymbols &&
                                                              (a = a.concat(
                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(n, e)
                                                                          .enumerable;
                                                                  }),
                                                              )),
                                                              a.forEach(function (t) {
                                                                  var a;
                                                                  (a = n[t]),
                                                                      t in e
                                                                          ? Object.defineProperty(e, t, {
                                                                                value: a,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0,
                                                                            })
                                                                          : (e[t] = a);
                                                              });
                                                      }
                                                      return e;
                                                  })(
                                                      {
                                                          otherUserId: "9876543210",
                                                          channelId: t,
                                                          warningId: "test-warning-id",
                                                          warningType: g._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                      },
                                                      n,
                                                  ),
                                              );
                                      },
                                      {
                                          modalKey: O.V,
                                      },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(N.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Clicker Game",
                          onClick: () => (0, h.A)("devtools"),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(N.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () => (0, m.g)(),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(N.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Reset Hang Status State",
                          onClick: x.B7,
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(N.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: c.Oy,
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(N.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Reset to fake checkpoint",
                          onClick: () => (0, p.nX)(!0),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(N.N, T.QB),
                      children: (0, a.jsx)(d.dOG, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => j.j0.updateSetting(e),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: r()(N.N, T.QB),
                      children: [
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, b.o)(),
                          }),
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  f.A.getSocket().close(), f.A.getSocket().connect();
                              },
                          }),
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  u.h.dispatch({
                                      type: "CLEAR_CACHES",
                                      reason: "Requested by user",
                                      preventWritingCachesAgainThisSession: !0,
                                      resetSocket: !0,
                                  });
                              },
                          }),
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, _.sy)(!0),
                          }),
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  o.Bo.post({
                                      url: S.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                                      rejectWithError: !0,
                                  });
                              },
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: r()(N.N, T.QB),
                      children: [
                          (0, a.jsx)(d.l6P, {
                              label: "Trigger native crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  {
                                      label: "Native libdiscord crash",
                                      value: void 0,
                                      id: "libdiscord",
                                  },
                                  {
                                      label: "Abort()",
                                      value: 0,
                                      id: "abort",
                                  },
                                  {
                                      label: "SIGSEGV()",
                                      value: 1,
                                      id: "sigsegv",
                                  },
                                  {
                                      label: "EXCEPTION_ACCESS_VIOLATION",
                                      value: 2,
                                      id: "exception_access_violation",
                                  },
                                  {
                                      label: "RaiseFailFastException",
                                      value: 3,
                                      id: "raise_fail_fast_exception",
                                  },
                                  {
                                      label: "Out of Memory",
                                      value: 4,
                                      id: "out_of_memory",
                                  },
                              ],
                              onSelectionChange: (e) => null != e && C.Ay.crash(e),
                          }),
                          (0, a.jsx)(d.l6P, {
                              label: "Trigger JS crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  {
                                      label: "Native JS crash",
                                      value: void 0,
                                      id: "native_js_crash",
                                  },
                                  {
                                      label: "Delayed exception in renderer process",
                                      value: s.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: s.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: s.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void C.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => i(!0),
                          }),
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "onClick Throw",
                              onClick: I,
                          }),
                      ],
                  }),
              ],
          });
}
