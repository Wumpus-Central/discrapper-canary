"use strict";
n.d(t, { Z: () => f, y: () => _ });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(314116),
    l = n(397927),
    u = n(756366),
    c = n(985018),
    d = n(754316);
let _ = (e) => {
        let { text: t = c.intl.string(u.default["/JKmHB"]), onClick: n, className: i } = e;
        return (0, r.jsxs)(s.DUT, {
            className: a()(d.U, i),
            onClick: n,
            children: [
                (0, r.jsx)(s.j96, { color: l.LU0.colors.TEXT_BRAND }),
                (0, r.jsx)(l.Text, { variant: "text-sm/medium", color: "text-brand", children: t }),
            ],
        });
    },
    f = (e) => {
        let {
                onComplete: t,
                onClose: n,
                text: i,
                className: a,
                modalTitle: s = "Modal Title",
                modalConfirmText: l = "Confirm Text",
                modalCancelText: u = "Cancel Text",
                modalSubtitle: c = "Modal Subtitle",
            } = e,
            d = () => {
                (0, o.A)({ title: s, subtitle: c, confirmText: l, cancelText: u, onConfirm: t, onCancel: n });
            };
        return (0, r.jsx)(_, { text: i, onClick: d, className: a });
    };
