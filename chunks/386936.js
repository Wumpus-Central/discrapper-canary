var i,
    r = n(129230),
    a = n(652215),
    s =
        (((i = {}).MODAL_VIEWED = "modal_viewed"),
        (i.MODAL_DISMISSED = "modal_dismissed"),
        (i.MODAL_GUILD_SETTINGS_CLICKED = "modal_guild_settings_clicked"),
        (i.SUPPRESSED_BY_COOLDOWN = "suppressed_by_cooldown"),
        (i.MODAL_DISABLED_DMS = "modal_disabled_dms"),
        i);
n.d(
    t,
    {},
    {
        $: function (e, t) {
            r.default.track(a.HAw.DM_SETTINGS_UPSELL_ACTION, { action: e, guild_id: t });
        },
        s: s,
    },
);
