n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(435371),
    a = n(421380),
    r = n(397927),
    o = n(954571),
    d = n(652215),
    c = n(985018);
function u(e) {
    let { onClick: t } = e,
        [n, a] = l.useState(!1),
        u = () => {
            t(),
                o.default.track(d.HAw.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0,
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(h, { confirm: u, cancel: () => a(!1) }) : null,
            (0, i.jsx)(s.m_, {
                text: c.intl.string(c.t["8k+6QY"]),
                children: (0, i.jsx)(r.K0, {
                    variant: "secondary",
                    "aria-label": c.intl.string(c.t["8k+6QY"]),
                    size: "sm",
                    icon: r.iA$,
                    onClick: (e) => {
                        e.shiftKey ? u() : a(!0);
                    },
                }),
            }),
        ],
    });
}
function h(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(r.MJ3, {
        dismissable: !0,
        header: c.intl.string(c.t.h4bVZ2),
        confirmText: c.intl.string(c.t.e6RscS),
        cancelText: c.intl.string(c.t["ETE/oC"]),
        confirmButtonColor: a.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(r.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: c.intl.string(c.t["0MQ0Bf"]),
        }),
    });
}
