n.d(t, { Z: () => h });
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(230711),
    a = n(267642),
    o = n(981631),
    c = n(474936),
    d = n(388032),
    u = n(106429);
function h(e) {
    let { guildBoostSlot: t, onClose: h, hasCancelableGuildBoostSlot: m, premiumSubscription: g, onSelect: x, fractionalState: _ } = e,
        p = {
            transfer: {
                label: null != t.premiumGuildSubscription ? d.intl.string(d.t['PR0n//']) : d.intl.string(d.t['+fmEYG']),
                subtext: t.isOnCooldown() ? d.intl.string(d.t.XnB8Mz) : null,
                disabled: t.isOnCooldown()
            },
            cancel: {
                label: d.intl.string(d.t.twFU3d),
                subtext: m ? null : d.intl.string(d.t.oQ9lOj),
                disabled: !m
            },
            uncancel: {
                label: d.intl.string(d.t['2glQNj']),
                subtext: null,
                disabled: !1
            }
        };
    switch (g.status) {
        case o.O0b.PAST_DUE:
            (p.cancel.disabled = !0), (p.cancel.subtext = d.intl.string(d.t.WnL6DQ)), (p.uncancel.disabled = !0);
            break;
        case o.O0b.PAUSE_PENDING:
        case o.O0b.PAUSED:
            _ === c.a$.NONE && ((p.transfer.disabled = !0), (p.transfer.subtext = d.intl.string(d.t.LiLRRU))), (p.cancel.subtext = d.intl.string(d.t['1ywaWF'])), (p.cancel.disabled = !0), (p.uncancel.disabled = !0);
    }
    _ !== c.a$.NONE && ((p.cancel.subtext = d.intl.string(d.t.dq4vq6)), (p.cancel.disabled = !0), (p.uncancel.disabled = !0));
    let E = s.useMemo(
        () =>
            g.isPausedOrPausePending && _ === c.a$.NONE
                ? (0, i.jsx)(l.sNh, {
                      id: 'manage-subscription',
                      label: d.intl.string(d.t.obRG6e),
                      action: () => r.Z.open(o.oAB.SUBSCRIPTIONS),
                      iconLeft: l.WGR,
                      className: u.manageSubscription
                  })
                : null,
        [_, g]
    );
    return (0, i.jsxs)(l.v2r, {
        onSelect: x,
        navId: 'subscription-context',
        variant: 'fixed',
        'aria-label': d.intl.string(d.t.ogxXGh),
        onClose: h,
        children: [
            (0, i.jsx)(l.sNh, {
                id: 'apply',
                label: p.transfer.label,
                subtext: p.transfer.subtext,
                action: function () {
                    (0, l.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 760558));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guildBoostSlots: [t],
                                locationSection: o.jXE.SETTINGS_PREMIUM
                            });
                    });
                },
                disabled: p.transfer.disabled
            }),
            (0, a.tl)(t)
                ? (0, i.jsx)(l.sNh, {
                      id: 'uncancel',
                      label: p.uncancel.label,
                      subtext: p.uncancel.subtext,
                      action: function () {
                          (0, l.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildBoostSlotId: t.id
                                  });
                          });
                      },
                      disabled: p.uncancel.disabled
                  })
                : (0, i.jsx)(l.sNh, {
                      id: 'cancel',
                      label: p.cancel.label,
                      subtext: p.cancel.subtext,
                      action: function () {
                          (0, l.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildBoostSlot: t
                                  });
                          });
                      },
                      disabled: p.cancel.disabled,
                      color: 'danger'
                  }),
            E
        ]
    });
}
