n.d(t, { A: () => I });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(141931),
    o = n(562465),
    d = n(306173),
    c = n(397927),
    u = n(73153),
    m = n(787880),
    h = n(142120),
    x = n(237984),
    p = n(43203),
    g = n(349435),
    f = n(674272),
    v = n(253932),
    _ = n(407186),
    b = n(543924),
    j = n(309010),
    A = n(837921),
    C = n(652215),
    y = n(327337),
    S = n(431804),
    E = n(413269),
    T = n(885106);
function N() {
    throw Error("Send help");
}
function I() {
    let e = v.j0.useSetting(),
        [t, s] = i.useState(!1);
    return t
        ? {}
        : (0, a.jsxs)(c.HOs, {
              children: [
                  (0, a.jsx)("div", { className: l()(E.N, T.SX), children: (0, a.jsx)(b.M, {}) }),
                  (0, a.jsx)("div", {
                      className: l()(E.N, T.QB),
                      children: (0, a.jsx)(c.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, f.A)({ source: S.y.KEYBIND }),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(E.N, T.QB),
                      children: (0, a.jsx)(c.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = j.A.getChannelId() ?? "21154681615024128"),
                                  void (0, c.mMO)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              n.e("45033"),
                                              n.e("46717"),
                                              n.e("64690"),
                                          ]).then(n.bind(n, 788099));
                                          return (n) =>
                                              (0, a.jsx)(t, {
                                                  otherUserId: "9876543210",
                                                  channelId: e,
                                                  warningId: "test-warning-id",
                                                  warningType: g._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...n,
                                              });
                                      },
                                      { modalKey: y.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(E.N, T.QB),
                      children: (0, a.jsx)(c.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () => (0, m.g)(),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(E.N, T.QB),
                      children: (0, a.jsx)(c.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, p.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(E.N, T.QB),
                      children: (0, a.jsx)(c.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: d.Oy,
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(E.N, T.QB),
                      children: (0, a.jsx)(c.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = h.A.getSocket();
                              u.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(E.N, T.QB),
                      children: (0, a.jsx)(c.dOG, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => v.j0.updateSetting(e),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: l()(E.N, T.QB),
                      children: [
                          (0, a.jsx)(c.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, x.o)(),
                          }),
                          (0, a.jsx)(c.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  h.A.getSocket().close(), h.A.getSocket().connect();
                              },
                          }),
                          (0, a.jsx)(c.Button, {
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
                          (0, a.jsx)(c.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, _.sy)(!0),
                          }),
                          (0, a.jsx)(c.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  o.Bo.post({ url: C.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: l()(E.N, T.QB),
                      children: [
                          (0, a.jsx)(c.l6P, {
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
                              onSelectionChange: (e) => null != e && A.Ay.crash(e),
                          }),
                          (0, a.jsx)(c.l6P, {
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
                              onSelectionChange: (e) => (null != e ? void A.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, a.jsx)(c.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => s(!0),
                          }),
                          (0, a.jsx)(c.Button, { variant: "primary", size: "sm", text: "onClick Throw", onClick: N }),
                      ],
                  }),
              ],
          });
}
