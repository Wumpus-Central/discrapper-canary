n.d(t, { A: () => I });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(141931),
    o = n(562465),
    d = n(306173),
    c = n(397927),
    u = n(73153),
    m = n(787880),
    h = n(142120),
    x = n(69555),
    p = n(237984),
    g = n(349435),
    _ = n(674272),
    f = n(253932),
    v = n(559248),
    b = n(179690),
    j = n(309010),
    A = n(837921),
    C = n(652215),
    S = n(327337),
    T = n(431804),
    y = n(229988),
    N = n(473169);
function E() {
    throw Error("Send help");
}
function I() {
    let e = f.j0.useSetting(),
        [t, i] = s.useState(!1);
    return t
        ? {}
        : (0, a.jsxs)(c.HOs, {
              children: [
                  (0, a.jsx)("div", { className: l()(y.N, N.SX), children: (0, a.jsx)(v.M, {}) }),
                  (0, a.jsx)("div", {
                      className: l()(y.N, N.QB),
                      children: (0, a.jsx)(c.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, _.A)({ source: T.y.KEYBIND }),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(y.N, N.QB),
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
                                              n.e("54105"),
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
                                      { modalKey: S.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(y.N, N.QB),
                      children: (0, a.jsx)(c.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () => (0, m.g)(),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(y.N, N.QB),
                      children: (0, a.jsx)(c.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Reset Hang Status State",
                          onClick: x.B7,
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(y.N, N.QB),
                      children: (0, a.jsx)(c.Button, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: d.Oy,
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: l()(y.N, N.QB),
                      children: (0, a.jsx)(c.dOG, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => f.j0.updateSetting(e),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: l()(y.N, N.QB),
                      children: [
                          (0, a.jsx)(c.Button, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, p.o)(),
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
                              onClick: () => (0, b.sy)(!0),
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
                      className: l()(y.N, N.QB),
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
                              onClick: () => i(!0),
                          }),
                          (0, a.jsx)(c.Button, { variant: "primary", size: "sm", text: "onClick Throw", onClick: E }),
                      ],
                  }),
              ],
          });
}
