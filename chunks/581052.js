e.d(t, { V: () => u });
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    a = e(823162),
    s = e(594174),
    d = e(388032);
function u(n) {
    let t = (0, l.e7)([s.default], () => s.default.getCurrentUser());
    return (null == t ? void 0 : t.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !n.isMessageRequest &&
                      (0, i.jsx)(r.sNh, {
                          id: 'mark-as-message-request',
                          label: d.intl.string(d.t.L6623t),
                          action: () => (0, a.Xy)(n.id)
                      }),
                  (0, i.jsx)(r.sNh, {
                      id: 'clear-message-request',
                      label: d.intl.string(d.t['85YWlZ']),
                      action: () => (0, a.qR)(n.id)
                  })
              ]
          });
}
