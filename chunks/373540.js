var c = n(477900);
n(582128);
var e = n(189213),
    a = n(732159),
    l = n(192308),
    o = n(516288);
n.d(
    i,
    {},
    {
        A: function (t, i, n, s) {
            let r = (0, o.t)(t, i);
            function u(t) {
                return null == r.cancel
                    ? (0, c.jsx)(e.a, {
                          ...t,
                          title: r.title,
                          subtitle: r.body,
                          actions: [{ text: r.action, onClick: t.onClose }],
                      })
                    : (0, c.jsx)(a.u, {
                          ...t,
                          title: r.title,
                          subtitle: r.body,
                          confirmText: r.action,
                          cancelText: r.cancel,
                          variant: "primary",
                          onConfirm: () => n?.(),
                      });
            }
            null != s && (0, l.kB)(s) ? (0, l.zb)(s, u) : (0, l.qf)(u, { modalKey: s });
        },
    },
);
