t.d(a, { Y: () => i, f: () => l });
var n,
    r = t(339984),
    l =
        (((n = {}).USER_DEFAULT_PROFILE_AVATAR = "USER_DEFAULT_PROFILE_AVATAR"),
        (n.USER_DEFAULT_PROFILE_BANNER = "USER_DEFAULT_PROFILE_BANNER"),
        (n.USER_GUILD_PROFILE_AVATAR = "USER_GUILD_PROFILE_AVATAR"),
        (n.USER_GUILD_PROFILE_BANNER = "USER_GUILD_PROFILE_BANNER"),
        (n.GUILD_ICON = "GUILD_ICON"),
        (n.GUILD_BANNER = "GUILD_BANNER"),
        (n.GUILD_DISCOVERY_SPLASH = "GUILD_DISCOVERY_SPLASH"),
        (n.GUILD_INVITE_SPLASH = "GUILD_INVITE_SPLASH"),
        (n.EMOJI = "EMOJI"),
        (n.STICKER = "STICKER"),
        n);
function i(e, a) {
    switch (e) {
        case r.HL.AVATAR:
            return null != a ? "USER_GUILD_PROFILE_AVATAR" : "USER_DEFAULT_PROFILE_AVATAR";
        case r.HL.BANNER:
            return null != a ? "USER_GUILD_PROFILE_BANNER" : "USER_DEFAULT_PROFILE_BANNER";
        case r.HL.GUILD_BANNER:
        case r.HL.VIDEO_BACKGROUND:
        case r.HL.SCHEDULED_EVENT_IMAGE:
        case r.HL.HOME_HEADER:
        case r.HL.AVATAR_DECORATION:
        case r.HL.GUILD_ICON:
            return null;
    }
}
