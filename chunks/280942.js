n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(230711),
    l = n(124570),
    o = n(267642),
    c = n(981631),
    d = n(474936),
    u = n(388032),
    m = n(898582);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { guildBoostSlot: t, onClose: h, hasCancelableGuildBoostSlot: f, premiumSubscription: b, onSelect: N, fractionalState: x, user: _ } = e,
        E = {
            transfer: {
                label: null != t.premiumGuildSubscription ? u.NW.string(u.t['PR0n//']) : u.NW.string(u.t['+fmEYG']),
                subtext: t.isOnCooldown() ? u.NW.string(u.t.XnB8Mz) : null,
                disabled: t.isOnCooldown()
            },
            cancel: {
                label: u.NW.string(u.t.twFU3d),
                subtext: f ? null : u.NW.string(u.t.oQ9lOj),
                disabled: !f
            },
            uncancel: {
                label: u.NW.string(u.t['2glQNj']),
                subtext: null,
                disabled: !1
            }
        };
    switch (b.status) {
        case c.O0b.PAST_DUE:
            (E.cancel.disabled = !0), (E.cancel.subtext = u.NW.string(u.t.WnL6DQ)), (E.uncancel.disabled = !0);
            break;
        case c.O0b.PAUSE_PENDING:
        case c.O0b.PAUSED:
            x === d.a$.NONE && ((E.transfer.disabled = !0), (E.transfer.subtext = u.NW.string(u.t.LiLRRU))), (E.cancel.subtext = u.NW.string(u.t['1ywaWF'])), (E.cancel.disabled = !0), (E.uncancel.disabled = !0);
    }
    (0, l.y)('guild_boost_slot_popout', _, x) && ((E.cancel.subtext = u.NW.string(u.t.dq4vq6)), (E.cancel.disabled = !0), (E.uncancel.disabled = !0));
    let j = i.useMemo(
        () =>
            b.isPausedOrPausePending && x === d.a$.NONE
                ? (0, r.jsx)(s.sNh, {
                      id: 'manage-subscription',
                      label: u.NW.string(u.t.obRG6e),
                      action: () => a.Z.open(c.oAB.SUBSCRIPTIONS),
                      iconLeft: s.WGR,
                      className: m.manageSubscription
                  })
                : null,
        [x, b]
    );
    return (0, r.jsxs)(s.v2r, {
        onSelect: N,
        navId: 'subscription-context',
        variant: 'fixed',
        'aria-label': u.NW.string(u.t.ogxXGh),
        onClose: h,
        children: [
            (0, r.jsx)(s.sNh, {
                id: 'apply',
                label: E.transfer.label,
                subtext: E.transfer.subtext,
                action: function () {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 760558));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                p(g({}, n), {
                                    guildBoostSlots: [t],
                                    locationSection: c.jXE.SETTINGS_PREMIUM
                                })
                            );
                    });
                },
                disabled: E.transfer.disabled
            }),
            (0, o.tl)(t)
                ? (0, r.jsx)(s.sNh, {
                      id: 'uncancel',
                      label: E.uncancel.label,
                      subtext: E.uncancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
                              return (n) => (0, r.jsx)(e, p(g({}, n), { guildBoostSlotId: t.id }));
                          });
                      },
                      disabled: E.uncancel.disabled
                  })
                : (0, r.jsx)(s.sNh, {
                      id: 'cancel',
                      label: E.cancel.label,
                      subtext: E.cancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
                              return (n) => (0, r.jsx)(e, p(g({}, n), { guildBoostSlot: t }));
                          });
                      },
                      disabled: E.cancel.disabled,
                      color: 'danger'
                  }),
            j
        ]
    });
}
