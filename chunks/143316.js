n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(626135),
    s = n(288552),
    o = n(981631),
    c = n(388032),
    d = n(76334);
function u(e) {
    let { type: t, onClick: n } = e,
        [u, h] = l.useState(!1),
        _ = () => {
            n(),
                r.default.track(o.rMx.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0
                });
        },
        p = (e) => {
            e.shiftKey ? _() : h(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u
                ? (0, i.jsx)(m, {
                      confirm: _,
                      cancel: () => h(!1)
                  })
                : null,
            'bottom-floating' === t
                ? (0, i.jsx)(s.a, {
                      text: c.intl.string(c.t['8k+6QU']),
                      icon: a.W6s,
                      onClick: p
                  })
                : (0, i.jsx)(a.M0o, {
                      tooltip: c.intl.string(c.t['8k+6QU']),
                      color: a.YX$.TERTIARY,
                      icon: (0, i.jsx)(a.W6s, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                      className: d.controlButton,
                      onClick: p
                  })
        ]
    });
}
function m(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(a.sYh, {
        dismissable: !0,
        header: c.intl.string(c.t.h4bVZ2),
        confirmText: c.intl.string(c.t.e6RscX),
        cancelText: c.intl.string(c.t['ETE/oK']),
        confirmButtonColor: a.zxk.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(a.Text, {
            color: 'text-normal',
            variant: 'text-sm/normal',
            children: c.intl.string(c.t['0MQ0BQ'])
        })
    });
}
