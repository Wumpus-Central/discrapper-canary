"use strict";
n.d(t, { Y: () => a, f: () => s });
var i,
    r = n(339984),
    s =
        (((i = {}).USER_DEFAULT_PROFILE_AVATAR = "USER_DEFAULT_PROFILE_AVATAR"),
        (i.USER_DEFAULT_PROFILE_BANNER = "USER_DEFAULT_PROFILE_BANNER"),
        (i.USER_GUILD_PROFILE_AVATAR = "USER_GUILD_PROFILE_AVATAR"),
        (i.USER_GUILD_PROFILE_BANNER = "USER_GUILD_PROFILE_BANNER"),
        (i.GUILD_ICON = "GUILD_ICON"),
        (i.GUILD_BANNER = "GUILD_BANNER"),
        (i.GUILD_DISCOVERY_SPLASH = "GUILD_DISCOVERY_SPLASH"),
        (i.GUILD_INVITE_SPLASH = "GUILD_INVITE_SPLASH"),
        (i.EMOJI = "EMOJI"),
        (i.STICKER = "STICKER"),
        i);
function a(e, t) {
    switch (e) {
        case r.HL.AVATAR:
            return null != t ? "USER_GUILD_PROFILE_AVATAR" : "USER_DEFAULT_PROFILE_AVATAR";
        case r.HL.BANNER:
            return null != t ? "USER_GUILD_PROFILE_BANNER" : "USER_DEFAULT_PROFILE_BANNER";
        case r.HL.GUILD_BANNER:
        case r.HL.VIDEO_BACKGROUND:
        case r.HL.SCHEDULED_EVENT_IMAGE:
        case r.HL.HOME_HEADER:
        case r.HL.AVATAR_DECORATION:
        case r.HL.GUILD_ICON:
            return null;
    }
}
