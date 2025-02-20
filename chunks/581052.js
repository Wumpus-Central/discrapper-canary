n.d(t, { V: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(823162),
    o = n(594174),
    s = n(388032);
function c(e) {
    let t = (0, i.e7)([o.default], () => o.default.getCurrentUser());
    return (null == t ? void 0 : t.isStaff()) !== !0
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !e.isMessageRequest &&
                      (0, r.jsx)(l.sNh, {
                          id: 'mark-as-message-request',
                          label: s.NW.string(s.t.L6623t),
                          action: () => (0, a.Xy)(e.id)
                      }),
                  (0, r.jsx)(l.sNh, {
                      id: 'clear-message-request',
                      label: s.NW.string(s.t['85YWlZ']),
                      action: () => (0, a.qR)(e.id)
                  })
              ]
          });
}
