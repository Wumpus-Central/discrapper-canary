n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(230711),
    s = n(267642),
    l = n(981631),
    c = n(474936),
    u = n(388032),
    d = n(573567);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let {
        guildBoostSlot: t,
        onClose: f,
        hasCancelableGuildBoostSlot: p,
        premiumSubscription: m,
        onSelect: g,
        fractionalState: E,
    } = e;
    function b() {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 760558));
            return (n) =>
                (0, r.jsx)(
                    e,
                    h(_({}, n), {
                        guildBoostSlots: [t],
                        locationSection: l.jXE.SETTINGS_PREMIUM,
                    }),
                );
        });
    }
    function y() {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
            return (n) => (0, r.jsx)(e, h(_({}, n), { guildBoostSlot: t }));
        });
    }
    function O() {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
            return (n) => (0, r.jsx)(e, h(_({}, n), { guildBoostSlotId: t.id }));
        });
    }
    let v = {
        transfer: {
            label: null != t.premiumGuildSubscription ? u.intl.string(u.t["PR0n//"]) : u.intl.string(u.t["+fmEYG"]),
            subtext: t.isOnCooldown() ? u.intl.string(u.t.XnB8Mz) : null,
            disabled: t.isOnCooldown(),
        },
        cancel: {
            label: u.intl.string(u.t.twFU3d),
            subtext: p ? null : u.intl.string(u.t.oQ9lOj),
            disabled: !p,
        },
        uncancel: {
            label: u.intl.string(u.t["2glQNj"]),
            subtext: null,
            disabled: !1,
        },
    };
    switch (m.status) {
        case l.O0b.PAST_DUE:
            (v.cancel.disabled = !0), (v.cancel.subtext = u.intl.string(u.t.WnL6DQ)), (v.uncancel.disabled = !0);
            break;
        case l.O0b.PAUSE_PENDING:
        case l.O0b.PAUSED:
            E === c.a$.NONE &&
                ((v.transfer.disabled = !0),
                (v.transfer.subtext = u.intl.string(u.t.LiLRRU)),
                (v.cancel.subtext = u.intl.string(u.t["1ywaWF"])),
                (v.cancel.disabled = !0),
                (v.uncancel.disabled = !0));
    }
    let I = i.useMemo(
        () =>
            m.isPausedOrPausePending && E === c.a$.NONE
                ? (0, r.jsx)(a.sNh, {
                      id: "manage-subscription",
                      label: u.intl.string(u.t.obRG6e),
                      action: () => o.Z.open(l.oAB.SUBSCRIPTIONS),
                      iconLeft: a.WGR,
                      className: d.manageSubscription,
                  })
                : null,
        [E, m],
    );
    return (0, r.jsxs)(a.v2r, {
        onSelect: g,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": u.intl.string(u.t.ogxXGh),
        onClose: f,
        children: [
            (0, r.jsx)(a.sNh, {
                id: "apply",
                label: v.transfer.label,
                subtext: v.transfer.subtext,
                action: b,
                disabled: v.transfer.disabled,
            }),
            (0, s.tl)(t)
                ? (0, r.jsx)(a.sNh, {
                      id: "uncancel",
                      label: v.uncancel.label,
                      subtext: v.uncancel.subtext,
                      action: O,
                      disabled: v.uncancel.disabled,
                  })
                : (0, r.jsx)(a.sNh, {
                      id: "cancel",
                      label: v.cancel.label,
                      subtext: v.cancel.subtext,
                      action: y,
                      disabled: v.cancel.disabled,
                      color: "danger",
                  }),
            I,
        ],
    });
}
