n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(313789),
    s = n(518596),
    l = n(267642),
    c = n(981631),
    u = n(474936),
    d = n(388032),
    f = n(573567);
function p(e, t, n) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let {
        guildBoostSlot: t,
        onClose: p,
        hasCancelableGuildBoostSlot: m,
        premiumSubscription: g,
        onSelect: E,
        fractionalState: b,
    } = e;
    function y() {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 760558));
            return (n) =>
                (0, r.jsx)(
                    e,
                    h(_({}, n), {
                        guildBoostSlots: [t],
                        locationSection: c.jXE.SETTINGS_PREMIUM,
                    }),
                );
        });
    }
    function O() {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
            return (n) => (0, r.jsx)(e, h(_({}, n), { guildBoostSlot: t }));
        });
    }
    function v() {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
            return (n) => (0, r.jsx)(e, h(_({}, n), { guildBoostSlotId: t.id }));
        });
    }
    let S = {
        transfer: {
            label: null != t.premiumGuildSubscription ? d.intl.string(d.t["PR0n//"]) : d.intl.string(d.t["+fmEYG"]),
            subtext: t.isOnCooldown() ? d.intl.string(d.t.XnB8M0) : null,
            disabled: t.isOnCooldown(),
        },
        cancel: {
            label: d.intl.string(d.t.twFU3R),
            subtext: m ? null : d.intl.string(d.t.oQ9lOh),
            disabled: !m,
        },
        uncancel: {
            label: d.intl.string(d.t["2glQNp"]),
            subtext: null,
            disabled: !1,
        },
    };
    switch (g.status) {
        case c.O0b.PAST_DUE:
            (S.cancel.disabled = !0), (S.cancel.subtext = d.intl.string(d.t.WnL6DV)), (S.uncancel.disabled = !0);
            break;
        case c.O0b.PAUSE_PENDING:
        case c.O0b.PAUSED:
            b === u.a$.NONE &&
                ((S.transfer.disabled = !0),
                (S.transfer.subtext = d.intl.string(d.t.LiLRRT)),
                (S.cancel.subtext = d.intl.string(d.t["1ywaWL"])),
                (S.cancel.disabled = !0),
                (S.uncancel.disabled = !0));
    }
    let I = i.useMemo(
        () =>
            g.isPausedOrPausePending && b === u.a$.NONE
                ? (0, r.jsx)(a.sNh, {
                      id: "manage-subscription",
                      label: d.intl.string(d.t.obRG6Y),
                      action: () => (0, s.openUserSettings)(o.n.SUBSCRIPTIONS_PANEL, { section: c.oAB.SUBSCRIPTIONS }),
                      iconLeft: a.WGR,
                      className: f.manageSubscription,
                  })
                : null,
        [b, g],
    );
    return (0, r.jsxs)(a.v2r, {
        onSelect: E,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": d.intl.string(d.t.ogxXGq),
        onClose: p,
        children: [
            (0, r.jsx)(a.sNh, {
                id: "apply",
                label: S.transfer.label,
                subtext: S.transfer.subtext,
                action: y,
                disabled: S.transfer.disabled,
            }),
            (0, l.tl)(t)
                ? (0, r.jsx)(a.sNh, {
                      id: "uncancel",
                      label: S.uncancel.label,
                      subtext: S.uncancel.subtext,
                      action: v,
                      disabled: S.uncancel.disabled,
                  })
                : (0, r.jsx)(a.sNh, {
                      id: "cancel",
                      label: S.cancel.label,
                      subtext: S.cancel.subtext,
                      action: O,
                      disabled: S.cancel.disabled,
                      color: "danger",
                  }),
            I,
        ],
    });
}
