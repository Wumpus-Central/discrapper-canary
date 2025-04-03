n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(626135),
    o = n(288552),
    s = n(981631),
    c = n(388032),
    u = n(413813);
function d(e) {
    let { type: t, onClick: n } = e,
        [d, m] = i.useState(!1),
        f = () => {
            n(),
                l.default.track(s.rMx.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0
                });
        },
        h = (e) => {
            e.shiftKey ? f() : m(!0);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            d
                ? (0, r.jsx)(p, {
                      confirm: f,
                      cancel: () => m(!1)
                  })
                : null,
            'bottom-floating' === t
                ? (0, r.jsx)(o.a, {
                      text: c.NW.string(c.t['8k+6QU']),
                      icon: a.W6s,
                      onClick: h
                  })
                : (0, r.jsx)(a.M0o, {
                      tooltip: c.NW.string(c.t['8k+6QU']),
                      color: a.YX$.TERTIARY,
                      icon: (0, r.jsx)(a.W6s, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                      className: u.controlButton,
                      onClick: h
                  })
        ]
    });
}
function p(e) {
    let { cancel: t, confirm: n } = e;
    return (0, r.jsx)(a.sYh, {
        dismissable: !0,
        header: c.NW.string(c.t.h4bVZ2),
        confirmText: c.NW.string(c.t.e6RscX),
        cancelText: c.NW.string(c.t['ETE/oK']),
        confirmButtonColor: a.zxk.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, r.jsx)(a.Text, {
            color: 'text-normal',
            variant: 'text-sm/normal',
            children: c.NW.string(c.t['0MQ0BQ'])
        })
    });
}
