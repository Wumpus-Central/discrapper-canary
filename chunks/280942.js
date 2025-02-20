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
    let { guildBoostSlot: t, onClose: p, hasCancelableGuildBoostSlot: h, premiumSubscription: f, onSelect: b, fractionalState: N } = e,
        x = {
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
            (x.cancel.disabled = !0), (x.cancel.subtext = d.NW.string(d.t.WnL6DQ)), (x.uncancel.disabled = !0);
            break;
        case o.O0b.PAUSE_PENDING:
        case o.O0b.PAUSED:
            N === c.a$.NONE && ((x.transfer.disabled = !0), (x.transfer.subtext = d.NW.string(d.t.LiLRRU))), (x.cancel.subtext = d.NW.string(d.t['1ywaWF'])), (x.cancel.disabled = !0), (x.uncancel.disabled = !0);
    }
    N !== c.a$.NONE && ((x.cancel.subtext = d.NW.string(d.t.dq4vq6)), (x.cancel.disabled = !0), (x.uncancel.disabled = !0));
    let _ = i.useMemo(
        () =>
            f.isPausedOrPausePending && N === c.a$.NONE
                ? (0, r.jsx)(s.sNh, {
                      id: 'manage-subscription',
                      label: d.NW.string(d.t.obRG6e),
                      action: () => a.Z.open(o.oAB.SUBSCRIPTIONS),
                      iconLeft: s.WGR,
                      className: u.manageSubscription
                  })
                : null,
        [N, f]
    );
    return (0, r.jsxs)(s.v2r, {
        onSelect: b,
        navId: 'subscription-context',
        variant: 'fixed',
        'aria-label': d.NW.string(d.t.ogxXGh),
        onClose: p,
        children: [
            (0, r.jsx)(s.sNh, {
                id: 'apply',
                label: x.transfer.label,
                subtext: x.transfer.subtext,
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
                disabled: x.transfer.disabled
            }),
            (0, l.tl)(t)
                ? (0, r.jsx)(s.sNh, {
                      id: 'uncancel',
                      label: x.uncancel.label,
                      subtext: x.uncancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
                              return (n) => (0, r.jsx)(e, g(m({}, n), { guildBoostSlotId: t.id }));
                          });
                      },
                      disabled: x.uncancel.disabled
                  })
                : (0, r.jsx)(s.sNh, {
                      id: 'cancel',
                      label: x.cancel.label,
                      subtext: x.cancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
                              return (n) => (0, r.jsx)(e, g(m({}, n), { guildBoostSlot: t }));
                          });
                      },
                      disabled: x.cancel.disabled,
                      color: 'danger'
                  }),
            _
        ]
    });
}
