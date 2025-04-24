n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
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
        C = {
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
            (C.cancel.disabled = !0), (C.cancel.subtext = u.intl.string(u.t.WnL6DQ)), (C.uncancel.disabled = !0);
            break;
        case c.O0b.PAUSE_PENDING:
        case c.O0b.PAUSED:
            x === d.a$.NONE && ((C.transfer.disabled = !0), (C.transfer.subtext = u.intl.string(u.t.LiLRRU)), (0, a.y)('guild_boost_slot_popout', E, x) || ((C.cancel.subtext = u.intl.string(u.t['1ywaWF'])), (C.cancel.disabled = !0), (C.uncancel.disabled = !0)));
    }
    (0, a.y)('guild_boost_slot_popout', E, x) && ((C.cancel.subtext = u.intl.string(u.t.dq4vq6)), (C.cancel.disabled = !0), (C.uncancel.disabled = !0));
    let j = r.useMemo(
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
                label: C.transfer.label,
                subtext: C.transfer.subtext,
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
                disabled: C.transfer.disabled
            }),
            (0, o.tl)(t)
                ? (0, i.jsx)(s.sNh, {
                      id: 'uncancel',
                      label: C.uncancel.label,
                      subtext: C.uncancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
                              return (n) => (0, i.jsx)(e, g(p({}, n), { guildBoostSlotId: t.id }));
                          });
                      },
                      disabled: C.uncancel.disabled
                  })
                : (0, i.jsx)(s.sNh, {
                      id: 'cancel',
                      label: C.cancel.label,
                      subtext: C.cancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
                              return (n) => (0, i.jsx)(e, g(p({}, n), { guildBoostSlot: t }));
                          });
                      },
                      disabled: C.cancel.disabled,
                      color: 'danger'
                  }),
            j
        ]
    });
}
