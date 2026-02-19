"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(435371),
    r = n(421380),
    a = n(397927),
    o = n(954571),
    c = n(652215),
    d = n(985018);
function u(e) {
    let { onClick: t } = e,
        [n, r] = s.useState(!1),
        u = () => {
            t(),
                o.default.track(c.HAw.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0,
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(h, { confirm: u, cancel: () => r(!1) }) : null,
            (0, i.jsx)(l.m_, {
                text: d.intl.string(d.t["8k+6QY"]),
                children: (0, i.jsx)(a.K0, {
                    variant: "secondary",
                    "aria-label": d.intl.string(d.t["8k+6QY"]),
                    size: "sm",
                    icon: a.iA$,
                    onClick: (e) => {
                        e.shiftKey ? u() : r(!0);
                    },
                }),
            }),
        ],
    });
}
function h(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(a.MJ3, {
        dismissable: !0,
        header: d.intl.string(d.t.h4bVZ2),
        confirmText: d.intl.string(d.t.e6RscS),
        cancelText: d.intl.string(d.t["ETE/oC"]),
        confirmButtonColor: r.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(a.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: d.intl.string(d.t["0MQ0Bf"]),
        }),
    });
}
