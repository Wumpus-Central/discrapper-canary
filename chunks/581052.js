n.d(t, { V: () => o });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(823162),
    a = n(594174),
    d = n(388032);
function o(e) {
    let t = (0, r.e7)([a.default], () => a.default.getCurrentUser());
    return (null == t ? void 0 : t.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !e.isMessageRequest &&
                      (0, i.jsx)(l.sNh, {
                          id: 'mark-as-message-request',
                          label: d.NW.string(d.t.L6623t),
                          action: () => (0, s.Xy)(e.id)
                      }),
                  (0, i.jsx)(l.sNh, {
                      id: 'clear-message-request',
                      label: d.NW.string(d.t['85YWlZ']),
                      action: () => (0, s.qR)(e.id)
                  })
              ]
          });
}
