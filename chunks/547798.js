a.d(t, { A: () => O });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(141931),
    o = a(562465),
    d = a(306173),
    c = a(192308),
    u = a(573613),
    m = a(821609),
    h = a(243721),
    p = a(691885),
    x = a(73153),
    g = a(787880),
    v = a(142120),
    b = a(237984),
    _ = a(43203),
    f = a(349435),
    j = a(674272),
    A = a(253932),
    y = a(407186),
    C = a(543924),
    E = a(309010),
    S = a(837921),
    N = a(652215),
    k = a(327337),
    I = a(431804),
    D = a(865349),
    T = a(818050);
function w() {
    throw Error("Send help");
}
function O() {
    let e = A.j0.useSetting(),
        [t, i] = l.useState(!1);
    return t
        ? {}
        : (0, n.jsxs)(u.Ip, {
              children: [
                  (0, n.jsx)("div", { className: s()(D.N, T.SX), children: (0, n.jsx)(C.M, {}) }),
                  (0, n.jsx)("div", {
                      className: s()(D.N, T.QB),
                      children: (0, n.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, j.A)({ source: I.y.KEYBIND }),
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: s()(D.N, T.QB),
                      children: (0, n.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = E.A.getChannelId() ?? "21154681615024128"),
                                  void (0, c.openModalLazy)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              a.e("45033"),
                                              a.e("46717"),
                                              a.e("45998"),
                                          ]).then(a.bind(a, 788099));
                                          return (a) =>
                                              (0, n.jsx)(t, {
                                                  otherUserId: "9876543210",
                                                  channelId: e,
                                                  warningId: "test-warning-id",
                                                  warningType: f._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: k.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: s()(D.N, T.QB),
                      children: (0, n.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () => (0, g.g)(),
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: s()(D.N, T.QB),
                      children: (0, n.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, _.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: s()(D.N, T.QB),
                      children: (0, n.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: d.Oy,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: s()(D.N, T.QB),
                      children: (0, n.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = v.A.getSocket();
                              x.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: s()(D.N, T.QB),
                      children: (0, n.jsx)(h.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => A.j0.updateSetting(e),
                      }),
                  }),
                  (0, n.jsxs)("div", {
                      className: s()(D.N, T.QB),
                      children: [
                          (0, n.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, b.o)(),
                          }),
                          (0, n.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  v.A.getSocket().close(), v.A.getSocket().connect();
                              },
                          }),
                          (0, n.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  x.h.dispatch({
                                      type: "CLEAR_CACHES",
                                      reason: "Requested by user",
                                      preventWritingCachesAgainThisSession: !0,
                                      resetSocket: !0,
                                  });
                              },
                          }),
                          (0, n.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, y.sy)(!0),
                          }),
                          (0, n.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  o.Bo.post({ url: N.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: s()(D.N, T.QB),
                      children: [
                          (0, n.jsx)(p.l, {
                              label: "Trigger native crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native libdiscord crash", value: void 0, id: "libdiscord" },
                                  { label: "Abort()", value: 0, id: "abort" },
                                  { label: "SIGSEGV()", value: 1, id: "sigsegv" },
                                  { label: "EXCEPTION_ACCESS_VIOLATION", value: 2, id: "exception_access_violation" },
                                  { label: "RaiseFailFastException", value: 3, id: "raise_fail_fast_exception" },
                                  { label: "Out of Memory", value: 4, id: "out_of_memory" },
                              ],
                              onSelectionChange: (e) => null != e && S.Ay.crash(e),
                          }),
                          (0, n.jsx)(p.l, {
                              label: "Trigger JS crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native JS crash", value: void 0, id: "native_js_crash" },
                                  {
                                      label: "Delayed exception in renderer process",
                                      value: r.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: r.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: r.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void S.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, n.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => i(!0),
                          }),
                          (0, n.jsx)(m.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: w }),
                      ],
                  }),
              ],
          });
}
