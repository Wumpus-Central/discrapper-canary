n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(435371),
    a = n(421380),
    s = n(397927),
    o = n(954571),
    c = n(652215),
    u = n(985018);

function d(e) {
    let { onClick: t } = e,
        [n, a] = l.useState(!1),
        d = () => {
            t(),
                o.default.track(c.HAw.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0,
                });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n
                ? (0, r.jsx)(f, {
                      confirm: d,
                      cancel: () => a(!1),
                  })
                : null,
            (0, r.jsx)(i.m_, {
                text: u.intl.string(u.t["8k+6QY"]),
                children: (0, r.jsx)(s.K0, {
                    variant: "secondary",
                    "aria-label": u.intl.string(u.t["8k+6QY"]),
                    size: "sm",
                    icon: s.iA$,
                    onClick: (e) => {
                        e.shiftKey ? d() : a(!0);
                    },
                }),
            }),
        ],
    });
}

function f(e) {
    let { cancel: t, confirm: n } = e;
    return (0, r.jsx)(s.MJ3, {
        dismissable: !0,
        header: u.intl.string(u.t.h4bVZ2),
        confirmText: u.intl.string(u.t.e6RscS),
        cancelText: u.intl.string(u.t["ETE/oC"]),
        confirmButtonColor: a.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, r.jsx)(s.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: u.intl.string(u.t["0MQ0Bf"]),
        }),
    });
}
