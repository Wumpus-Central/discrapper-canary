t.d(n, { V: () => d });
var i = t(54381);
t(473749);
var r = t(442837),
    l = t(481060),
    a = t(823162),
    s = t(594174),
    o = t(388032);
function d(e) {
    let n = (0, r.e7)([s.default], () => s.default.getCurrentUser());
    return (null == n ? void 0 : n.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !e.isMessageRequest &&
                      (0, i.jsx)(l.sNh, {
                          id: "mark-as-message-request",
                          label: o.intl.string(o.t.L6623r),
                          action: () => (0, a.Xy)(e.id),
                      }),
                  (0, i.jsx)(l.sNh, {
                      id: "clear-message-request",
                      label: o.intl.string(o.t["85YWlY"]),
                      action: () => (0, a.qR)(e.id),
                  }),
              ],
          });
}
