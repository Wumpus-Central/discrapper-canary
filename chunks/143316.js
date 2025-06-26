n.d(t, { Z: () => d }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(626135),
    s = n(288552),
    a = n(981631),
    c = n(388032),
    u = n(413813);
function d(e) {
    let { type: t, onClick: n } = e,
        [d, p] = i.useState(!1),
        f = () => {
            n(),
                o.default.track(a.rMx.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0
                });
        },
        g = (e) => {
            e.shiftKey ? f() : p(!0);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            d
                ? (0, r.jsx)(h, {
                      confirm: f,
                      cancel: () => p(!1)
                  })
                : null,
            'bottom-floating' === t
                ? (0, r.jsx)(s.a, {
                      text: c.intl.string(c.t['8k+6QU']),
                      icon: l.W6s,
                      onClick: g
                  })
                : (0, r.jsx)(l.M0o, {
                      tooltip: c.intl.string(c.t['8k+6QU']),
                      color: l.YX$.TERTIARY,
                      icon: (0, r.jsx)(l.W6s, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                      className: u.controlButton,
                      onClick: g
                  })
        ]
    });
}
function h(e) {
    let { cancel: t, confirm: n } = e;
    return (0, r.jsx)(l.sYh, {
        dismissable: !0,
        header: c.intl.string(c.t.h4bVZ2),
        confirmText: c.intl.string(c.t.e6RscX),
        cancelText: c.intl.string(c.t['ETE/oK']),
        confirmButtonColor: l.zxk.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, r.jsx)(l.Text, {
            color: 'text-default',
            variant: 'text-sm/normal',
            children: c.intl.string(c.t['0MQ0BQ'])
        })
    });
}
