n.d(t, { Z: () => g });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(230711),
    l = n(267642),
    o = n(981631),
    c = n(474936),
    d = n(388032),
    u = n(898582);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
function g(e) {
    let {
            guildBoostSlot: t,
            onClose: g,
            hasCancelableGuildBoostSlot: h,
            premiumSubscription: f,
            onSelect: b,
            fractionalState: x,
        } = e,
        _ = {
            transfer: {
                label: null != t.premiumGuildSubscription ? d.intl.string(d.t["PR0n//"]) : d.intl.string(d.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? d.intl.string(d.t.XnB8Mz) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: {
                label: d.intl.string(d.t.twFU3d),
                subtext: h ? null : d.intl.string(d.t.oQ9lOj),
                disabled: !h,
            },
            uncancel: {
                label: d.intl.string(d.t["2glQNj"]),
                subtext: null,
                disabled: !1,
            },
        };
    switch (f.status) {
        case o.O0b.PAST_DUE:
            (_.cancel.disabled = !0), (_.cancel.subtext = d.intl.string(d.t.WnL6DQ)), (_.uncancel.disabled = !0);
            break;
        case o.O0b.PAUSE_PENDING:
        case o.O0b.PAUSED:
            x === c.a$.NONE &&
                ((_.transfer.disabled = !0),
                (_.transfer.subtext = d.intl.string(d.t.LiLRRU)),
                (_.cancel.subtext = d.intl.string(d.t["1ywaWF"])),
                (_.cancel.disabled = !0),
                (_.uncancel.disabled = !0));
    }
    let j = r.useMemo(
        () =>
            f.isPausedOrPausePending && x === c.a$.NONE
                ? (0, i.jsx)(s.sNh, {
                      id: "manage-subscription",
                      label: d.intl.string(d.t.obRG6e),
                      action: () => a.Z.open(o.oAB.SUBSCRIPTIONS),
                      iconLeft: s.WGR,
                      className: u.manageSubscription,
                  })
                : null,
        [x, f],
    );
    return (0, i.jsxs)(s.v2r, {
        onSelect: b,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": d.intl.string(d.t.ogxXGh),
        onClose: g,
        children: [
            (0, i.jsx)(s.sNh, {
                id: "apply",
                label: _.transfer.label,
                subtext: _.transfer.subtext,
                action: function () {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 760558));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                p(m({}, n), {
                                    guildBoostSlots: [t],
                                    locationSection: o.jXE.SETTINGS_PREMIUM,
                                }),
                            );
                    });
                },
                disabled: _.transfer.disabled,
            }),
            (0, l.tl)(t)
                ? (0, i.jsx)(s.sNh, {
                      id: "uncancel",
                      label: _.uncancel.label,
                      subtext: _.uncancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
                              return (n) => (0, i.jsx)(e, p(m({}, n), { guildBoostSlotId: t.id }));
                          });
                      },
                      disabled: _.uncancel.disabled,
                  })
                : (0, i.jsx)(s.sNh, {
                      id: "cancel",
                      label: _.cancel.label,
                      subtext: _.cancel.subtext,
                      action: function () {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
                              return (n) => (0, i.jsx)(e, p(m({}, n), { guildBoostSlot: t }));
                          });
                      },
                      disabled: _.cancel.disabled,
                      color: "danger",
                  }),
            j,
        ],
    });
}
