(n.d(t, {
    EY: () => o,
    Gp: () => l,
    K8: () => A,
    NL: () => c,
    f$: () => _,
    hv: () => E,
    hw: () => u,
    sS: () => d,
    v_: () => h,
    yM: () => f,
}),
    n(323874),
    n(14289),
    n(35956));
var i,
    r,
    a = n(570138),
    s = n(179771);
let l = "xbox://communitylinking/donut/audio",
    o = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
    d = [
        s.F.VOICE,
        s.F.DM_CHANNELS_READ,
        s.F.GUILDS,
        s.F.GUILDS_MEMBERS_READ,
        s.F.IDENTIFY,
        s.F.CONNECTIONS,
        s.F.ACTIVITIES_READ,
    ],
    c = [s.F.VOICE, s.F.DM_CHANNELS_READ, s.F.GUILDS, s.F.GUILDS_MEMBERS_READ, s.F.IDENTIFY, s.F.CONNECTIONS],
    u = (e) => {
        let { guildId: t, channelName: n, guildName: i, channelId: r, muted: a, deafened: s, nonce: l } = e,
            o = { channelid: r, guildid: t, channelname: n, guildname: i, muted: String(a), deafened: String(s) };
        return (null != l && (o.nonce = l), new URLSearchParams(o));
    };
var _ = (((i = {}).PLAYSTATION = "playstation"), (i.XBOX = "xbox"), i);
let E = new Set(["xbox", "playstation"]);
(a.y.XBOX, a.y.PLAYSTATION_5);
var A =
    (((r = {})[(r.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4)] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED"),
    (r[(r.CONSOLE_DEVICE_UNAVAILABLE = 270001)] = "CONSOLE_DEVICE_UNAVAILABLE"),
    (r[(r.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002)] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS"),
    (r[(r.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003)] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED"),
    (r[(r.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004)] = "CONSOLE_DEVICE_INVALID_POWER_MODE"),
    (r[(r.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005)] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR"),
    (r[(r.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006)] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED"),
    (r[(r.CONSOLE_DEVICE_BAD_COMMAND = 270007)] = "CONSOLE_DEVICE_BAD_COMMAND"),
    r);
let h = new Set([27e4]),
    f = "console error alert";
