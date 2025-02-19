n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(230711),
    l = n(267642),
    o = n(981631),
    c = n(474936),
    d = n(388032),
    u = n(382550);
function m(e) {
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
function g(e, t) {
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
function p(e) {
    let { guildBoostSlot: t, onClose: p, hasCancelableGuildBoostSlot: h, premiumSubscription: f, onSelect: N, fractionalState: x } = e,
        b = {
            transfer: {
                label: null != t.premiumGuildSubscription ? d.NW.string(d.t['PR0n//']) : d.NW.string(d.t['+fmEYG']),
                subtext: t.isOnCooldown() ? d.NW.string(d.t.XnB8Mz) : null,
                disabled: t.isOnCooldown()
            },
            cancel: {
                label: d.NW.string(d.t.twFU3d),
                subtext: h ? null : d.NW.string(d.t.oQ9lOj),
                disabled: !h
            },
            uncancel: {
                label: d.NW.string(d.t['2glQNj']),
                subtext: null,
                disabled: !1
            }
        };
    switch (f.status) {
        case o.O0b.PAST_DUE:
            (b.cancel.disabled = !0), (b.cancel.subtext = d.NW.string(d.t.WnL6DQ)), (b.uncancel.disabled = !0);
            break;
        case o.O0b.PAUSE_PENDING:
        case o.O0b.PAUSED:
            x === c.a$.NONE && ((b.transfer.disabled = !0), (b.transfer.subtext = d.NW.string(d.t.LiLRRU))), (b.cancel.subtext = d.NW.string(d.t['1ywaWF'])), (b.cancel.disabled = !0), (b.uncancel.disabled = !0);
    }
    x !== c.a$.NONE && ((b.cancel.subtext = d.NW.string(d.t.dq4vq6)), (b.cancel.disabled = !0), (b.uncancel.disabled = !0));
    let _ = i.useMemo(
        () =>
            f.isPausedOrPausePending && x === c.a$.NONE
                ? (0, r.jsx)(s.sNh, {
                      id: 'manage-subscription',
                      label: d.NW.string(d.t.obRG6e),
                      action: () => a.Z.open(o.oAB.SUBSCRIPTIONS),
                      iconLeft: s.WGR,
                      className: u.manageSubscription
                  })
                : null,
        [x, f]
    );
    return (0, r.jsxs)(s.v2r, {
        onSelect: N,
        navId: 'subscription-context',
        variant: 'fixed',
        'aria-label': d.NW.string(d.t.ogxXGh),
        onClose: p,
        children: [
            (0, r.jsx)(s.sNh, {
                id: 'apply',
                label: b.transfer.label,
                subtext: b.transfer.subtext,
                action: function () {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 760558));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                g(m({}, n), {
                                    guildBoostSlots: [t],
                                    locationSection: o.jXE.SETTINGS_PREMIUM
                                })
                            );
                    });
                },
                disabled: b.transfer.disabled
            }),
            (0, l.tl)(t)
                ? (0, r.jsx)(s.sNh, {
                      id: 'uncancel',
                      label: b.uncancel.label,
                      subtext: b.uncancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
                              return (n) => (0, r.jsx)(e, g(m({}, n), { guildBoostSlotId: t.id }));
                          });
                      },
                      disabled: b.uncancel.disabled
                  })
                : (0, r.jsx)(s.sNh, {
                      id: 'cancel',
                      label: b.cancel.label,
                      subtext: b.cancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
                              return (n) => (0, r.jsx)(e, g(m({}, n), { guildBoostSlot: t }));
                          });
                      },
                      disabled: b.cancel.disabled,
                      color: 'danger'
                  }),
            _
        ]
    });
}
