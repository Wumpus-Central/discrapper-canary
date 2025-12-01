n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(681715),
    o = n(755721),
    a = n(481060),
    s = n(626135),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { onClick: t } = e,
        [n, o] = i.useState(!1),
        d = () => {
            t(),
                s.default.track(c.rMx.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0,
                });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n
                ? (0, r.jsx)(f, {
                      confirm: d,
                      cancel: () => o(!1),
                  })
                : null,
            (0, r.jsx)(l.u, {
                text: u.intl.string(u.t["8k+6QY"]),
                children: (0, r.jsx)(a.hU, {
                    variant: "secondary",
                    "aria-label": u.intl.string(u.t["8k+6QY"]),
                    size: "sm",
                    icon: a.W6s,
                    onClick: (e) => {
                        e.shiftKey ? d() : o(!0);
                    },
                }),
            }),
        ],
    });
}
function f(e) {
    let { cancel: t, confirm: n } = e;
    return (0, r.jsx)(a.sYh, {
        dismissable: !0,
        header: u.intl.string(u.t.h4bVZ2),
        confirmText: u.intl.string(u.t.e6RscS),
        cancelText: u.intl.string(u.t["ETE/oC"]),
        confirmButtonColor: o.zx.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, r.jsx)(a.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: u.intl.string(u.t["0MQ0Bf"]),
        }),
    });
}
