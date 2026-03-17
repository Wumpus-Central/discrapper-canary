n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(780964),
    r = n(840065),
    o = n(473145),
    d = n(652215),
    c = n(788868),
    u = n(985018);
function _(e) {
    let {
            guildBoostSlot: t,
            onClose: _,
            hasCancelableGuildBoostSlot: m,
            premiumSubscription: g,
            onSelect: A,
            fractionalState: h,
        } = e,
        x = {
            transfer: {
                label: null != t.premiumGuildSubscription ? u.intl.string(u.t["PR0n//"]) : u.intl.string(u.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? u.intl.string(u.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: u.intl.string(u.t.twFU3R), subtext: m ? null : u.intl.string(u.t.oQ9lOh), disabled: !m },
            uncancel: { label: u.intl.string(u.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (g.status) {
        case d.Dmq.PAST_DUE:
            (x.cancel.disabled = !0), (x.cancel.subtext = u.intl.string(u.t.WnL6DV)), (x.uncancel.disabled = !0);
            break;
        case d.Dmq.PAUSE_PENDING:
        case d.Dmq.PAUSED:
            h === c.xc.NONE &&
                ((x.transfer.disabled = !0),
                (x.transfer.subtext = u.intl.string(u.t.LiLRRT)),
                (x.cancel.subtext = u.intl.string(u.t["1ywaWL"])),
                (x.cancel.disabled = !0),
                (x.uncancel.disabled = !0));
    }
    let p = s.useMemo(
        () =>
            g.isPausedOrPausePending && h === c.xc.NONE
                ? (0, i.jsx)(l.Drp, {
                      id: "manage-subscription",
                      label: u.intl.string(u.t.obRG6Y),
                      action: () => (0, r.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: l.xmO,
                      leadingAccessory: { type: "icon", icon: l.xmO },
                  })
                : null,
        [h, g],
    );
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: A,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: _,
        children: [
            (0, i.jsx)(l.Drp, {
                id: "apply",
                label: x.transfer.label,
                subtext: x.transfer.subtext,
                action: function () {
                    (0, l.mMO)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 657516));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: d.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: x.transfer.disabled,
            }),
            (0, o.I5)(t)
                ? (0, i.jsx)(l.Drp, {
                      id: "uncancel",
                      label: x.uncancel.label,
                      subtext: x.uncancel.subtext,
                      action: function () {
                          (0, l.mMO)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, i.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: x.uncancel.disabled,
                  })
                : (0, i.jsx)(l.Drp, {
                      id: "cancel",
                      label: x.cancel.label,
                      subtext: x.cancel.subtext,
                      action: function () {
                          (0, l.mMO)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, i.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: x.cancel.disabled,
                      color: "danger",
                  }),
            p,
        ],
    });
}
