n.d(t, {
    A: () => N,
}),
    n(65821),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(141931),
    o = n(562465),
    c = n(306173),
    d = n(397927),
    u = n(73153),
    m = n(787880),
    p = n(142120),
    h = n(69555),
    x = n(237984),
    g = n(349435),
    f = n(674272),
    b = n(253932),
    v = n(559248),
    j = n(179690),
    _ = n(309010),
    y = n(837921),
    A = n(652215),
    C = n(327337),
    S = n(431804),
    O = n(229988),
    T = n(473169);

function E() {
    throw Error("Send help");
}

function N() {
    let e = b.j0.useSetting(),
        [t, r] = l.useState(!1);
    return t
        ? {}
        : (0, a.jsxs)(d.HOs, {
              children: [
                  (0, a.jsx)("div", {
                      className: i()(O.N, T.SX),
                      children: (0, a.jsx)(v.M, {}),
                  }),
                  (0, a.jsx)("div", {
                      className: i()(O.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () =>
                              (0, f.A)({
                                  source: S.y.KEYBIND,
                              }),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: i()(O.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e, t;
                              return (
                                  (t = null != (e = _.A.getChannelId()) ? e : "21154681615024128"),
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
                                          modalKey: C.V,
                                      },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: i()(O.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () => (0, m.g)(),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: i()(O.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Reset Hang Status State",
                          onClick: h.B7,
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: i()(O.N, T.QB),
                      children: (0, a.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: c.Oy,
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: i()(O.N, T.QB),
                      children: (0, a.jsx)(d.dOG, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => b.j0.updateSetting(e),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: i()(O.N, T.QB),
                      children: [
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, x.o)(),
                          }),
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  p.A.getSocket().close(), p.A.getSocket().connect();
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
                              onClick: () => (0, j.sy)(!0),
                          }),
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  o.Bo.post({
                                      url: A.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                                      rejectWithError: !0,
                                  });
                              },
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: i()(O.N, T.QB),
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
                              onSelectionChange: (e) => null != e && y.Ay.crash(e),
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
                              onSelectionChange: (e) => (null != e ? void y.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => r(!0),
                          }),
                          (0, a.jsx)(d.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "onClick Throw",
                              onClick: E,
                          }),
                      ],
                  }),
              ],
          });
}
