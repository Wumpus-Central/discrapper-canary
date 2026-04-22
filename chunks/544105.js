"use strict";
n.d(t, {
    EY: () => l,
    Gp: () => o,
    K8: () => E,
    NL: () => d,
    f$: () => _,
    hv: () => f,
    hw: () => c,
    sS: () => u,
    v_: () => h,
    yM: () => p,
}),
    n(323874),
    n(14289),
    n(35956);
var r,
    i,
    s = n(179771),
    a = n(652215);
let o = "xbox://communitylinking/donut/audio",
    l = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
    u = [
        s.F.VOICE,
        s.F.DM_CHANNELS_READ,
        s.F.GUILDS,
        s.F.GUILDS_MEMBERS_READ,
        s.F.IDENTIFY,
        s.F.CONNECTIONS,
        s.F.ACTIVITIES_READ,
    ],
    d = [s.F.VOICE, s.F.DM_CHANNELS_READ, s.F.GUILDS, s.F.GUILDS_MEMBERS_READ, s.F.IDENTIFY, s.F.CONNECTIONS],
    c = (e) => {
        let { guildId: t, channelName: n, guildName: r, channelId: i, muted: s, deafened: a, nonce: o } = e,
            l = { channelid: i, guildid: t, channelname: n, guildname: r, muted: String(s), deafened: String(a) };
        return null != o && (l.nonce = o), new URLSearchParams(l);
    };
var _ = (((r = {}).PLAYSTATION = "playstation"), (r.XBOX = "xbox"), r);
let f = new Set(["xbox", "playstation"]);
a.yTV.XBOX, a.yTV.PS5;
var E =
    (((i = {})[(i.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4)] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED"),
    (i[(i.CONSOLE_DEVICE_UNAVAILABLE = 270001)] = "CONSOLE_DEVICE_UNAVAILABLE"),
    (i[(i.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002)] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS"),
    (i[(i.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003)] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED"),
    (i[(i.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004)] = "CONSOLE_DEVICE_INVALID_POWER_MODE"),
    (i[(i.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005)] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR"),
    (i[(i.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006)] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED"),
    (i[(i.CONSOLE_DEVICE_BAD_COMMAND = 270007)] = "CONSOLE_DEVICE_BAD_COMMAND"),
    i);
let h = new Set([27e4]),
    p = "console error alert";
