(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(755721),
    o = n(481060),
    a = n(626135),
    s = n(288552),
    c = n(981631),
    u = n(388032),
    d = n(413813);
function h(e) {
    let { type: t, onClick: n } = e,
        [l, h] = i.useState(!1),
        f = () => {
            (n(),
                a.default.track(c.rMx.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0
                }));
        },
        g = (e) => {
            e.shiftKey ? f() : h(!0);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l
                ? (0, r.jsx)(p, {
                      confirm: f,
                      cancel: () => h(!1)
                  })
                : null,
            'bottom-floating' === t
                ? (0, r.jsx)(s.a, {
                      text: u.intl.string(u.t['8k+6QU']),
                      icon: o.W6s,
                      onClick: g
                  })
                : (0, r.jsx)(o.M0o, {
                      tooltip: u.intl.string(u.t['8k+6QU']),
                      color: o.YX$.TERTIARY,
                      icon: (0, r.jsx)(o.W6s, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                      className: d.controlButton,
                      onClick: g
                  })
        ]
    });
}
function p(e) {
    let { cancel: t, confirm: n } = e;
    return (0, r.jsx)(o.sYh, {
        dismissable: !0,
        header: u.intl.string(u.t.h4bVZ2),
        confirmText: u.intl.string(u.t.e6RscX),
        cancelText: u.intl.string(u.t['ETE/oK']),
        confirmButtonColor: l.zx.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, r.jsx)(o.Text, {
            color: 'text-default',
            variant: 'text-sm/normal',
            children: u.intl.string(u.t['0MQ0BQ'])
        })
    });
}
