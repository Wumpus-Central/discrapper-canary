n.d(t, { A: () => A });
var s = n(627968),
    a = n(64700),
    l = n(990078),
    i = n(862482),
    r = n(408278),
    o = n(921457),
    d = n(640238),
    c = n(834730),
    u = n(954571),
    h = n(652215),
    _ = n(985018);
function A(e) {
    let { onClick: t } = e,
        [n, i] = a.useState(!1),
        d = () => {
            t(),
                u.default.track(h.HAw.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0,
                });
        };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            n ? (0, s.jsx)(m, { confirm: d, cancel: () => i(!1) }) : null,
            (0, s.jsx)(l.m, {
                text: _.intl.string(_.t["8k+6QY"]),
                children: (0, s.jsx)(r.K, {
                    variant: "secondary",
                    "aria-label": _.intl.string(_.t["8k+6QY"]),
                    size: "sm",
                    icon: o.i,
                    onClick: (e) => {
                        e.shiftKey ? d() : i(!0);
                    },
                }),
            }),
        ],
    });
}
function m(e) {
    let { cancel: t, confirm: n } = e;
    return (0, s.jsx)(d.M, {
        dismissable: !0,
        header: _.intl.string(_.t.h4bVZ2),
        confirmText: _.intl.string(_.t.e6RscS),
        cancelText: _.intl.string(_.t["ETE/oC"]),
        confirmButtonColor: i.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, s.jsx)(c.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: _.intl.string(_.t["0MQ0Bf"]),
        }),
    });
}
