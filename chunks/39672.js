n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(780964),
    l = n(840065),
    o = n(473145),
    c = n(652215),
    d = n(788868),
    u = n(985018);
function _(e) {
    let {
            guildBoostSlot: t,
            onClose: _,
            hasCancelableGuildBoostSlot: m,
            premiumSubscription: A,
            onSelect: g,
            fractionalState: E,
        } = e,
        h = {
            transfer: {
                label: null != t.premiumGuildSubscription ? u.intl.string(u.t["PR0n//"]) : u.intl.string(u.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? u.intl.string(u.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: u.intl.string(u.t.twFU3R), subtext: m ? null : u.intl.string(u.t.oQ9lOh), disabled: !m },
            uncancel: { label: u.intl.string(u.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (A.status) {
        case c.Dmq.PAST_DUE:
            (h.cancel.disabled = !0), (h.cancel.subtext = u.intl.string(u.t.WnL6DV)), (h.uncancel.disabled = !0);
            break;
        case c.Dmq.PAUSE_PENDING:
        case c.Dmq.PAUSED:
            E === d.xc.NONE &&
                ((h.transfer.disabled = !0),
                (h.transfer.subtext = u.intl.string(u.t.LiLRRT)),
                (h.cancel.subtext = u.intl.string(u.t["1ywaWL"])),
                (h.cancel.disabled = !0),
                (h.uncancel.disabled = !0));
    }
    let p = s.useMemo(
        () =>
            A.isPausedOrPausePending && E === d.xc.NONE
                ? (0, i.jsx)(r.Drp, {
                      id: "manage-subscription",
                      label: u.intl.string(u.t.obRG6Y),
                      action: () => (0, l.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL, { section: c.nc_.SUBSCRIPTIONS }),
                      iconLeft: r.xmO,
                      leadingAccessory: { type: "icon", icon: r.xmO },
                  })
                : null,
        [E, A],
    );
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: g,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: _,
        children: [
            (0, i.jsx)(r.Drp, {
                id: "apply",
                label: h.transfer.label,
                subtext: h.transfer.subtext,
                action: function () {
                    (0, r.mMO)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 657516));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: c.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: h.transfer.disabled,
            }),
            (0, o.I5)(t)
                ? (0, i.jsx)(r.Drp, {
                      id: "uncancel",
                      label: h.uncancel.label,
                      subtext: h.uncancel.subtext,
                      action: function () {
                          (0, r.mMO)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, i.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: h.uncancel.disabled,
                  })
                : (0, i.jsx)(r.Drp, {
                      id: "cancel",
                      label: h.cancel.label,
                      subtext: h.cancel.subtext,
                      action: function () {
                          (0, r.mMO)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, i.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: h.cancel.disabled,
                      color: "danger",
                  }),
            p,
        ],
    });
}
