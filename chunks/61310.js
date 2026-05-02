a.d(t, { Y: () => o, f: () => l });
var r,
    n = a(339984),
    l =
        (((r = {}).USER_DEFAULT_PROFILE_AVATAR = "USER_DEFAULT_PROFILE_AVATAR"),
        (r.USER_DEFAULT_PROFILE_BANNER = "USER_DEFAULT_PROFILE_BANNER"),
        (r.USER_GUILD_PROFILE_AVATAR = "USER_GUILD_PROFILE_AVATAR"),
        (r.USER_GUILD_PROFILE_BANNER = "USER_GUILD_PROFILE_BANNER"),
        (r.GUILD_ICON = "GUILD_ICON"),
        (r.GUILD_BANNER = "GUILD_BANNER"),
        (r.GUILD_DISCOVERY_SPLASH = "GUILD_DISCOVERY_SPLASH"),
        (r.GUILD_INVITE_SPLASH = "GUILD_INVITE_SPLASH"),
        (r.EMOJI = "EMOJI"),
        (r.STICKER = "STICKER"),
        r);
function o(e, t) {
    switch (e) {
        case n.HL.AVATAR:
            return null != t ? "USER_GUILD_PROFILE_AVATAR" : "USER_DEFAULT_PROFILE_AVATAR";
        case n.HL.BANNER:
            return null != t ? "USER_GUILD_PROFILE_BANNER" : "USER_DEFAULT_PROFILE_BANNER";
        case n.HL.GUILD_BANNER:
        case n.HL.VIDEO_BACKGROUND:
        case n.HL.SCHEDULED_EVENT_IMAGE:
        case n.HL.HOME_HEADER:
        case n.HL.AVATAR_DECORATION:
        case n.HL.GUILD_ICON:
            return null;
    }
}
