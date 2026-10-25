a.d(n, { A: () => s });
var e = a(477900);
a(582128);
var i = a(189213),
    l = a(732159),
    o = a(192308),
    c = a(516288);
function s(t, n, a, s) {
    let u = (0, c.t)(t, n);
    function r(t) {
        return null == u.cancel
            ? (0, e.jsx)(i.a, {
                  ...t,
                  title: u.title,
                  subtitle: u.body,
                  actions: [{ text: u.action, onClick: t.onClose }],
              })
            : (0, e.jsx)(l.u, {
                  ...t,
                  title: u.title,
                  subtitle: u.body,
                  confirmText: u.action,
                  cancelText: u.cancel,
                  variant: "primary",
                  onConfirm: () => a?.(),
              });
    }
    null != s && (0, o.hasModalOpen)(s) ? (0, o.updateModal)(s, r) : (0, o.openModal)(r, { modalKey: s });
}
