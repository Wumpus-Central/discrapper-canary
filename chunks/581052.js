e.d(t, { V: () => u });
var i = e(255367);
e(73800);
var l = e(442837),
    r = e(481060),
    d = e(823162),
    s = e(594174),
    a = e(388032);
function u(n) {
    let t = (0, l.e7)([s.default], () => s.default.getCurrentUser());
    return (null == t ? void 0 : t.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !n.isMessageRequest &&
                      (0, i.jsx)(r.sNh, {
                          id: 'mark-as-message-request',
                          label: a.intl.string(a.t.L6623t),
                          action: () => (0, d.Xy)(n.id)
                      }),
                  (0, i.jsx)(r.sNh, {
                      id: 'clear-message-request',
                      label: a.intl.string(a.t['85YWlZ']),
                      action: () => (0, d.qR)(n.id)
                  })
              ]
          });
}
