n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(192308),
    a = n(477782),
    r = n(443865),
    o = n(861672),
    d = n(780964),
    u = n(858897),
    c = n(473145),
    g = n(652215),
    m = n(788868),
    _ = n(985018);
function A(e) {
    let {
            guildBoostSlot: t,
            onClose: A,
            hasCancelableGuildBoostSlot: h,
            premiumSubscription: p,
            onSelect: x,
            fractionalState: E,
        } = e,
        T = {
            transfer: {
                label: null != t.premiumGuildSubscription ? _.intl.string(_.t["PR0n//"]) : _.intl.string(_.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? _.intl.string(_.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: _.intl.string(_.t.twFU3R), subtext: h ? null : _.intl.string(_.t.oQ9lOh), disabled: !h },
            uncancel: { label: _.intl.string(_.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (p.status) {
        case g.Dmq.PAST_DUE:
            (T.cancel.disabled = !0), (T.cancel.subtext = _.intl.string(_.t.WnL6DV)), (T.uncancel.disabled = !0);
            break;
        case g.Dmq.PAUSE_PENDING:
        case g.Dmq.PAUSED:
            E === m.xc.NONE &&
                ((T.transfer.disabled = !0),
                (T.transfer.subtext = _.intl.string(_.t.LiLRRT)),
                (T.cancel.subtext = _.intl.string(_.t["1ywaWL"])),
                (T.cancel.disabled = !0),
                (T.uncancel.disabled = !0));
    }
    let S = s.useMemo(
        () =>
            p.isPausedOrPausePending && E === m.xc.NONE
                ? (0, i.jsx)(a.Dr, {
                      id: "manage-subscription",
                      label: _.intl.string(_.t.obRG6Y),
                      action: () => (0, u.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: r.x,
                      leadingAccessory: { type: "icon", icon: r.x },
                  })
                : null,
        [E, p],
    );
    return (0, i.jsxs)(o.W, {
        "data-menu-migrated-auto": !0,
        onSelect: x,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": _.intl.string(_.t.ogxXGq),
        onClose: A,
        children: [
            (0, i.jsx)(a.Dr, {
                id: "apply",
                label: T.transfer.label,
                subtext: T.transfer.subtext,
                action: function () {
                    (0, l.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 657516));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: g.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: T.transfer.disabled,
            }),
            (0, c.I5)(t)
                ? (0, i.jsx)(a.Dr, {
                      id: "uncancel",
                      label: T.uncancel.label,
                      subtext: T.uncancel.subtext,
                      action: function () {
                          (0, l.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, i.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: T.uncancel.disabled,
                  })
                : (0, i.jsx)(a.Dr, {
                      id: "cancel",
                      label: T.cancel.label,
                      subtext: T.cancel.subtext,
                      action: function () {
                          (0, l.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, i.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: T.cancel.disabled,
                      color: "danger",
                  }),
            S,
        ],
    });
}
