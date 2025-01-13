n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(626135),
    o = n(288552),
    s = n(981631),
    c = n(388032),
    d = n(76334);
function u(e) {
    let { type: t, onClick: n } = e,
        [u, h] = r.useState(!1),
        f = () => {
            n(),
                a.default.track(s.rMx.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0
                });
        },
        p = (e) => {
            e.shiftKey ? f() : h(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u
                ? (0, i.jsx)(m, {
                      confirm: f,
                      cancel: () => h(!1)
                  })
                : null,
            'bottom-floating' === t
                ? (0, i.jsx)(o.a, {
                      text: c.intl.string(c.t['8k+6QU']),
                      icon: l.DoubleCheckmarkIcon,
                      onClick: p
                  })
                : (0, i.jsx)(l.CircleIconButton, {
                      tooltip: c.intl.string(c.t['8k+6QU']),
                      color: l.CircleIconButtonColors.TERTIARY,
                      icon: (0, i.jsx)(l.DoubleCheckmarkIcon, {
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
    return (0, i.jsx)(l.DeclarativeConfirmModal, {
        dismissable: !0,
        header: c.intl.string(c.t.h4bVZ2),
        confirmText: c.intl.string(c.t.e6RscX),
        cancelText: c.intl.string(c.t['ETE/oK']),
        confirmButtonColor: l.Button.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(l.Text, {
            color: 'text-normal',
            variant: 'text-sm/normal',
            children: c.intl.string(c.t['0MQ0BQ'])
        })
    });
}
