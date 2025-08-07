e.d(n, { V: () => u });
var i = e(255367);
e(73800);
var r = e(442837),
    l = e(481060),
    s = e(823162),
    a = e(594174),
    d = e(388032);
function u(t) {
    let n = (0, r.e7)([a.default], () => a.default.getCurrentUser());
    return (null == n ? void 0 : n.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !t.isMessageRequest &&
                      (0, i.jsx)(l.sNh, {
                          id: "mark-as-message-request",
                          label: d.intl.string(d.t.L6623t),
                          action: () => (0, s.Xy)(t.id),
                      }),
                  (0, i.jsx)(l.sNh, {
                      id: "clear-message-request",
                      label: d.intl.string(d.t["85YWlZ"]),
                      action: () => (0, s.qR)(t.id),
                  }),
              ],
          });
}
