n.d(t, { Z: () => h });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(230711),
    a = n(124570),
    o = n(267642),
    c = n(981631),
    d = n(474936),
    u = n(388032),
    m = n(898582);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { guildBoostSlot: t, onClose: h, hasCancelableGuildBoostSlot: f, premiumSubscription: b, onSelect: _, fractionalState: x, user: E } = e,
        j = {
            transfer: {
                label: null != t.premiumGuildSubscription ? u.intl.string(u.t['PR0n//']) : u.intl.string(u.t['+fmEYG']),
                subtext: t.isOnCooldown() ? u.intl.string(u.t.XnB8Mz) : null,
                disabled: t.isOnCooldown()
            },
            cancel: {
                label: u.intl.string(u.t.twFU3d),
                subtext: f ? null : u.intl.string(u.t.oQ9lOj),
                disabled: !f
            },
            uncancel: {
                label: u.intl.string(u.t['2glQNj']),
                subtext: null,
                disabled: !1
            }
        };
    switch (b.status) {
        case c.O0b.PAST_DUE:
            (j.cancel.disabled = !0), (j.cancel.subtext = u.intl.string(u.t.WnL6DQ)), (j.uncancel.disabled = !0);
            break;
        case c.O0b.PAUSE_PENDING:
        case c.O0b.PAUSED:
            x === d.a$.NONE && ((j.transfer.disabled = !0), (j.transfer.subtext = u.intl.string(u.t.LiLRRU)), (0, a.y)('guild_boost_slot_popout', E, x) || ((j.cancel.subtext = u.intl.string(u.t['1ywaWF'])), (j.cancel.disabled = !0), (j.uncancel.disabled = !0)));
    }
    (0, a.y)('guild_boost_slot_popout', E, x) && ((j.cancel.subtext = u.intl.string(u.t.dq4vq6)), (j.cancel.disabled = !0), (j.uncancel.disabled = !0));
    let C = r.useMemo(
        () =>
            b.isPausedOrPausePending && x === d.a$.NONE
                ? (0, i.jsx)(s.sNh, {
                      id: 'manage-subscription',
                      label: u.intl.string(u.t.obRG6e),
                      action: () => l.Z.open(c.oAB.SUBSCRIPTIONS),
                      iconLeft: s.WGR,
                      className: m.manageSubscription
                  })
                : null,
        [x, b]
    );
    return (0, i.jsxs)(s.v2r, {
        onSelect: _,
        navId: 'subscription-context',
        variant: 'fixed',
        'aria-label': u.intl.string(u.t.ogxXGh),
        onClose: h,
        children: [
            (0, i.jsx)(s.sNh, {
                id: 'apply',
                label: j.transfer.label,
                subtext: j.transfer.subtext,
                action: function () {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 760558));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                g(p({}, n), {
                                    guildBoostSlots: [t],
                                    locationSection: c.jXE.SETTINGS_PREMIUM
                                })
                            );
                    });
                },
                disabled: j.transfer.disabled
            }),
            (0, o.tl)(t)
                ? (0, i.jsx)(s.sNh, {
                      id: 'uncancel',
                      label: j.uncancel.label,
                      subtext: j.uncancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
                              return (n) => (0, i.jsx)(e, g(p({}, n), { guildBoostSlotId: t.id }));
                          });
                      },
                      disabled: j.uncancel.disabled
                  })
                : (0, i.jsx)(s.sNh, {
                      id: 'cancel',
                      label: j.cancel.label,
                      subtext: j.cancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
                              return (n) => (0, i.jsx)(e, g(p({}, n), { guildBoostSlot: t }));
                          });
                      },
                      disabled: j.cancel.disabled,
                      color: 'danger'
                  }),
            C
        ]
    });
}
