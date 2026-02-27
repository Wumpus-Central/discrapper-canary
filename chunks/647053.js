"use strict";
n.d(t, { A8: () => l, O_: () => s, RM: () => c, gX: () => o, i4: () => d, k$: () => a, rY: () => u }), n(321073);
var r = n(179771),
    i = n(985018);
let s = [
        () => i.intl.string(i.t["6xfSCq"]),
        () => i.intl.string(i.t.ymSk0r),
        () => i.intl.string(i.t.EnN7c5),
        () => i.intl.string(i.t["4wMpBs"]),
        () => i.intl.string(i.t.CncpnK),
        () => i.intl.string(i.t.X9pGvJ),
        () => i.intl.string(i.t.sGOSG4),
        () => i.intl.string(i.t.JfibUq),
    ],
    a = [
        r.F.BOT,
        r.F.OPENID,
        r.F.IDENTIFY,
        r.F.IDENTIFY_PREMIUM,
        r.F.EMAIL,
        r.F.CONNECTIONS,
        r.F.MESSAGES_READ,
        r.F.GUILDS,
        r.F.GUILDS_JOIN,
        r.F.GUILDS_MEMBERS_READ,
        r.F.GUILDS_CHANNELS_READ,
        r.F.GDM_JOIN,
        r.F.RPC,
        r.F.RPC_NOTIFICATIONS_READ,
        r.F.RPC_VOICE_READ,
        r.F.RPC_VOICE_WRITE,
        r.F.RPC_VIDEO_READ,
        r.F.RPC_VIDEO_WRITE,
        r.F.RPC_SCREENSHARE_READ,
        r.F.RPC_SCREENSHARE_WRITE,
        r.F.RPC_ACTIVITIES_WRITE,
        r.F.APPLICATION_IDENTITIES_WRITE,
        r.F.APPLICATIONS_BUILDS_UPLOAD,
        r.F.APPLICATIONS_BUILDS_READ,
        r.F.APPLICATIONS_COMMANDS,
        r.F.APPLICATIONS_COMMANDS_UPDATE,
        r.F.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE,
        r.F.APPLICATIONS_STORE_UPDATE,
        r.F.APPLICATIONS_ENTITLEMENTS,
        r.F.ACTIVITIES_INVITES_WRITE,
        r.F.ACTIVITIES_READ,
        r.F.ACTIVITIES_WRITE,
        r.F.RELATIONSHIPS_READ,
        r.F.RELATIONSHIPS_WRITE,
        r.F.VOICE,
        r.F.DM_CHANNELS_READ,
        r.F.DM_CHANNELS_MESSAGES_READ,
        r.F.DM_CHANNELS_MESSAGES_WRITE,
        r.F.ROLE_CONNECTIONS_WRITE,
        r.F.PRESENCES_READ,
        r.F.PRESENCES_WRITE,
        r.F.GATEWAY_CONNECT,
        r.F.PAYMENT_SOURCES_COUNTRY_CODE,
        r.F.SDK_SOCIAL_LAYER_PRESENCE,
        r.F.SDK_SOCIAL_LAYER,
    ],
    o = a.concat([r.F.WEBHOOK_INCOMING, r.F.BOT]),
    l = ["rpc.api"];
function u(e, t) {
    switch (e) {
        case r.F.IDENTIFY:
            return [i.intl.string(i.t.DD9KQh)];
        case r.F.IDENTIFY_PREMIUM:
            return [i.intl.string(i.t.xhQsxx)];
        case r.F.OPENID:
            return [i.intl.string(i.t.R5IKv1)];
        case r.F.EMAIL:
            return [i.intl.string(i.t.rvFS2t)];
        case r.F.BOT:
            return [i.intl.string(i.t.pRpdox)];
        case r.F.CONNECTIONS:
            return [i.intl.string(i.t["1AwaU1"])];
        case r.F.MESSAGES_READ:
            return [i.intl.string(i.t.jVXrHb)];
        case r.F.GUILDS:
            return [i.intl.string(i.t.QKGJkC)];
        case r.F.GUILDS_JOIN:
            return [i.intl.string(i.t.ETGDR9)];
        case r.F.GUILDS_MEMBERS_READ:
            if (t.includes(r.F.VOICE)) return [i.intl.string(i.t.OSvmfH)];
            return [i.intl.string(i.t.o6M1aS)];
        case r.F.GUILDS_CHANNELS_READ:
            return [i.intl.string(i.t.BWGAgt)];
        case r.F.GDM_JOIN:
            return [i.intl.string(i.t["55B4wA"])];
        case r.F.RPC:
            return [i.intl.string(i.t.EDBEeK)];
        case r.F.RPC_NOTIFICATIONS_READ:
            return [i.intl.string(i.t["6kDHWV"])];
        case r.F.RPC_VOICE_WRITE:
            return [i.intl.string(i.t["531s7c"])];
        case r.F.RPC_VIDEO_READ:
            return [i.intl.string(i.t.zbUSWO)];
        case r.F.RPC_VIDEO_WRITE:
            return [i.intl.string(i.t["y+MdAM"])];
        case r.F.RPC_SCREENSHARE_READ:
            return [i.intl.string(i.t.b0i0CO)];
        case r.F.RPC_SCREENSHARE_WRITE:
            return [i.intl.string(i.t["9Rmxux"])];
        case r.F.RPC_VOICE_READ:
            return [i.intl.string(i.t.rznmpz)];
        case r.F.RPC_ACTIVITIES_WRITE:
            return [i.intl.string(i.t.KQwJDf)];
        case r.F.APPLICATIONS_BUILDS_UPLOAD:
            return [i.intl.string(i.t.Iwbtgk)];
        case r.F.APPLICATIONS_BUILDS_READ:
            return [i.intl.string(i.t.ZkZCCW)];
        case r.F.APPLICATIONS_COMMANDS:
            return [i.intl.string(i.t.H4q49X)];
        case r.F.APPLICATIONS_COMMANDS_UPDATE:
            return [i.intl.string(i.t.mxeq6u)];
        case r.F.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
            return [i.intl.string(i.t["7SIoW7"])];
        case r.F.APPLICATIONS_STORE_UPDATE:
            return [i.intl.string(i.t["Rba/Xn"])];
        case r.F.APPLICATIONS_ENTITLEMENTS:
            return [i.intl.string(i.t.xeNgGI)];
        case r.F.ACTIVITIES_READ:
            return [i.intl.string(i.t["4+tSce"])];
        case r.F.ACTIVITIES_WRITE:
            return [i.intl.string(i.t["6OsWXX"])];
        case r.F.RELATIONSHIPS_READ:
            return [i.intl.string(i.t["521/7W"])];
        case r.F.RELATIONSHIPS_WRITE:
            return [i.intl.string(i.t["qR/txQ"])];
        case r.F.VOICE:
            return [i.intl.string(i.t.XK5zdO)];
        case r.F.DM_CHANNELS_READ:
            return [i.intl.string(i.t.w8emlT)];
        case r.F.ROLE_CONNECTIONS_WRITE:
            return [i.intl.string(i.t.Bv0wZj)];
        case r.F.PRESENCES_READ:
            return [i.intl.string(i.t.JUWeyf)];
        case r.F.PRESENCES_WRITE:
            return [i.intl.string(i.t.apHLwv)];
        case r.F.DM_CHANNELS_MESSAGES_READ:
            return [i.intl.string(i.t.FHeB8p)];
        case r.F.DM_CHANNELS_MESSAGES_WRITE:
            return [i.intl.string(i.t["mdh+xY"])];
        case r.F.GATEWAY_CONNECT:
            return [i.intl.string(i.t["uJd+85"])];
        case r.F.PAYMENT_SOURCES_COUNTRY_CODE:
            return [i.intl.string(i.t.hycwLK)];
        case r.F.ACTIVITIES_INVITES_WRITE:
            return [i.intl.string(i.t.IM4Cje)];
        case r.F.APPLICATION_IDENTITIES_WRITE:
            return [i.intl.string(i.t["1zioRF"])];
        case r.F.SDK_SOCIAL_LAYER_PRESENCE: {
            let e = [
                i.intl.string(i.t.Pl1dTW),
                i.intl.string(i.t.mPRcyT),
                i.intl.string(i.t.F7J4NE),
                i.intl.string(i.t.syJLx9),
            ];
            return t.includes(r.F.APPLICATION_IDENTITIES_WRITE) || e.push(i.intl.string(i.t["1zioRF"])), e;
        }
        case r.F.SDK_SOCIAL_LAYER: {
            let e = [
                i.intl.string(i.t.Pl1dTW),
                i.intl.string(i.t["hc/+yg"]),
                i.intl.string(i.t.mPRcyT),
                i.intl.string(i.t.F7J4NE),
                i.intl.string(i.t["2wxXX9"]),
            ];
            return t.includes(r.F.APPLICATION_IDENTITIES_WRITE) || e.push(i.intl.string(i.t["1zioRF"])), e;
        }
        default:
            return [e];
    }
}
function c(e) {
    return e === r.F.SDK_SOCIAL_LAYER_PRESENCE || e === r.F.SDK_SOCIAL_LAYER;
}
function d(e) {
    return e.includes(r.F.DM_CHANNELS_MESSAGES_WRITE) || e.includes(r.F.SDK_SOCIAL_LAYER)
        ? i.intl.format(i.t.o0GMBD, {})
        : e.includes(r.F.MESSAGES_READ) || e.includes(r.F.DM_CHANNELS_MESSAGES_READ)
          ? i.intl.format(i.t.Soy7jJ, {})
          : i.intl.format(i.t["TeL+Ct"], {});
}
