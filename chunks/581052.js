t.d(e, { V: () => u });
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    d = t(823162),
    s = t(594174),
    a = t(388032);
function u(n) {
    let e = (0, l.e7)([s.default], () => s.default.getCurrentUser());
    return (null == e ? void 0 : e.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !n.isMessageRequest &&
                      (0, i.jsx)(r.sNh, {
                          id: 'mark-as-message-request',
                          label: a.NW.string(a.t.L6623t),
                          action: () => (0, d.Xy)(n.id)
                      }),
                  (0, i.jsx)(r.sNh, {
                      id: 'clear-message-request',
                      label: a.NW.string(a.t['85YWlZ']),
                      action: () => (0, d.qR)(n.id)
                  })
              ]
          });
}
