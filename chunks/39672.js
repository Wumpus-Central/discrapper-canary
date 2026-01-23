n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(780964),
    o = n(840065),
    l = n(473145),
    c = n(652215),
    u = n(788868),
    d = n(985018),
    f = n(245006);

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

function h(e, t) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e) {
    let {
        guildBoostSlot: t,
        onClose: p,
        hasCancelableGuildBoostSlot: h,
        premiumSubscription: g,
        onSelect: E,
        fractionalState: y,
    } = e;

    function b() {
        (0, a.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 657516));
            return (n) =>
                (0, r.jsx)(
                    e,
                    m(_({}, n), {
                        guildBoostSlots: [t],
                        locationSection: c.JJy.SETTINGS_PREMIUM,
                    }),
                );
        });
    }

    function O() {
        (0, a.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
            return (n) =>
                (0, r.jsx)(
                    e,
                    m(_({}, n), {
                        guildBoostSlot: t,
                    }),
                );
        });
    }

    function v() {
        (0, a.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
            return (n) =>
                (0, r.jsx)(
                    e,
                    m(_({}, n), {
                        guildBoostSlotId: t.id,
                    }),
                );
        });
    }
    let A = {
        transfer: {
            label: null != t.premiumGuildSubscription ? d.intl.string(d.t["PR0n//"]) : d.intl.string(d.t["+fmEYG"]),
            subtext: t.isOnCooldown() ? d.intl.string(d.t.XnB8M0) : null,
            disabled: t.isOnCooldown(),
        },
        cancel: {
            label: d.intl.string(d.t.twFU3R),
            subtext: h ? null : d.intl.string(d.t.oQ9lOh),
            disabled: !h,
        },
        uncancel: {
            label: d.intl.string(d.t["2glQNp"]),
            subtext: null,
            disabled: !1,
        },
    };
    switch (g.status) {
        case c.Dmq.PAST_DUE:
            (A.cancel.disabled = !0), (A.cancel.subtext = d.intl.string(d.t.WnL6DV)), (A.uncancel.disabled = !0);
            break;
        case c.Dmq.PAUSE_PENDING:
        case c.Dmq.PAUSED:
            y === u.xc.NONE &&
                ((A.transfer.disabled = !0),
                (A.transfer.subtext = d.intl.string(d.t.LiLRRT)),
                (A.cancel.subtext = d.intl.string(d.t["1ywaWL"])),
                (A.cancel.disabled = !0),
                (A.uncancel.disabled = !0));
    }
    let I = i.useMemo(
        () =>
            g.isPausedOrPausePending && y === u.xc.NONE
                ? (0, r.jsx)(a.Drp, {
                      id: "manage-subscription",
                      label: d.intl.string(d.t.obRG6Y),
                      action: () =>
                          (0, o.openUserSettings)(s.X.SUBSCRIPTIONS_PANEL, {
                              section: c.nc_.SUBSCRIPTIONS,
                          }),
                      iconLeft: a.xmO,
                      className: f.v,
                  })
                : null,
        [y, g],
    );
    return (0, r.jsxs)(a.W1t, {
        "data-menu-mixed": !0,
        onSelect: E,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": d.intl.string(d.t.ogxXGq),
        onClose: p,
        children: [
            (0, r.jsx)(a.Drp, {
                id: "apply",
                label: A.transfer.label,
                subtext: A.transfer.subtext,
                action: b,
                disabled: A.transfer.disabled,
            }),
            (0, l.I5)(t)
                ? (0, r.jsx)(a.Drp, {
                      id: "uncancel",
                      label: A.uncancel.label,
                      subtext: A.uncancel.subtext,
                      action: v,
                      disabled: A.uncancel.disabled,
                  })
                : (0, r.jsx)(a.Drp, {
                      id: "cancel",
                      label: A.cancel.label,
                      subtext: A.cancel.subtext,
                      action: O,
                      disabled: A.cancel.disabled,
                      color: "danger",
                  }),
            I,
        ],
    });
}
