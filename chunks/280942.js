n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(230711),
    l = n(267642),
    o = n(981631),
    c = n(474936),
    d = n(388032),
    u = n(629777);
function m(e) {
    let { guildBoostSlot: t, onClose: m, hasCancelableGuildBoostSlot: g, premiumSubscription: h, onSelect: p, fractionalState: x } = e,
        f = {
            transfer: {
                label: null != t.premiumGuildSubscription ? d.intl.string(d.t['PR0n//']) : d.intl.string(d.t['+fmEYG']),
                subtext: t.isOnCooldown() ? d.intl.string(d.t.XnB8Mz) : null,
                disabled: t.isOnCooldown()
            },
            cancel: {
                label: d.intl.string(d.t.twFU3d),
                subtext: g ? null : d.intl.string(d.t.oQ9lOj),
                disabled: !g
            },
            uncancel: {
                label: d.intl.string(d.t['2glQNj']),
                subtext: null,
                disabled: !1
            }
        };
    switch (h.status) {
        case o.O0b.PAST_DUE:
            (f.cancel.disabled = !0), (f.cancel.subtext = d.intl.string(d.t.WnL6DQ)), (f.uncancel.disabled = !0);
            break;
        case o.O0b.PAUSE_PENDING:
        case o.O0b.PAUSED:
            x === c.a$.NONE && ((f.transfer.disabled = !0), (f.transfer.subtext = d.intl.string(d.t.LiLRRU))), (f.cancel.subtext = d.intl.string(d.t['1ywaWF'])), (f.cancel.disabled = !0), (f.uncancel.disabled = !0);
    }
    x !== c.a$.NONE && ((f.cancel.subtext = d.intl.string(d.t.dq4vq6)), (f.cancel.disabled = !0), (f.uncancel.disabled = !0));
    let _ = r.useMemo(
        () =>
            h.isPausedOrPausePending && x === c.a$.NONE
                ? (0, i.jsx)(s.MenuItem, {
                      id: 'manage-subscription',
                      label: d.intl.string(d.t.obRG6e),
                      action: () => a.Z.open(o.oAB.SUBSCRIPTIONS),
                      iconLeft: s.LightbulbIcon,
                      className: u.manageSubscription
                  })
                : null,
        [x, h]
    );
    return (0, i.jsxs)(s.Menu, {
        onSelect: p,
        navId: 'subscription-context',
        variant: 'fixed',
        'aria-label': d.intl.string(d.t.ogxXGh),
        onClose: m,
        children: [
            (0, i.jsx)(s.MenuItem, {
                id: 'apply',
                label: f.transfer.label,
                subtext: f.transfer.subtext,
                action: function () {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 760558));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guildBoostSlots: [t],
                                locationSection: o.jXE.SETTINGS_PREMIUM
                            });
                    });
                },
                disabled: f.transfer.disabled
            }),
            (0, l.tl)(t)
                ? (0, i.jsx)(s.MenuItem, {
                      id: 'uncancel',
                      label: f.uncancel.label,
                      subtext: f.uncancel.subtext,
                      action: function () {
                          (0, s.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildBoostSlotId: t.id
                                  });
                          });
                      },
                      disabled: f.uncancel.disabled
                  })
                : (0, i.jsx)(s.MenuItem, {
                      id: 'cancel',
                      label: f.cancel.label,
                      subtext: f.cancel.subtext,
                      action: function () {
                          (0, s.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildBoostSlot: t
                                  });
                          });
                      },
                      disabled: f.cancel.disabled,
                      color: 'danger'
                  }),
            _
        ]
    });
}
