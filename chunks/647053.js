"use strict";
n.d(t, { A8: () => l, O_: () => s, RM: () => c, gX: () => o, i4: () => d, k$: () => a, rY: () => u }), n(321073);
var i = n(179771),
    r = n(375708);
let s = [
        () => r.intl.string(r.t["6xfSCq"]),
        () => r.intl.string(r.t.ymSk0r),
        () => r.intl.string(r.t.EnN7c5),
        () => r.intl.string(r.t["4wMpBs"]),
        () => r.intl.string(r.t.CncpnK),
        () => r.intl.string(r.t.X9pGvJ),
        () => r.intl.string(r.t.sGOSG4),
        () => r.intl.string(r.t.JfibUq),
    ],
    a = [
        i.F.BOT,
        i.F.OPENID,
        i.F.IDENTIFY,
        i.F.IDENTIFY_PREMIUM,
        i.F.EMAIL,
        i.F.CONNECTIONS,
        i.F.MESSAGES_READ,
        i.F.GUILDS,
        i.F.GUILDS_JOIN,
        i.F.GUILDS_MEMBERS_READ,
        i.F.GUILDS_CHANNELS_READ,
        i.F.GDM_JOIN,
        i.F.RPC,
        i.F.RPC_NOTIFICATIONS_READ,
        i.F.RPC_VOICE_READ,
        i.F.RPC_VOICE_WRITE,
        i.F.RPC_VIDEO_READ,
        i.F.RPC_VIDEO_WRITE,
        i.F.RPC_SCREENSHARE_READ,
        i.F.RPC_SCREENSHARE_WRITE,
        i.F.RPC_ACTIVITIES_WRITE,
        i.F.APPLICATION_IDENTITIES_WRITE,
        i.F.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE,
        i.F.APPLICATIONS_BUILDS_UPLOAD,
        i.F.APPLICATIONS_BUILDS_READ,
        i.F.APPLICATIONS_COMMANDS,
        i.F.APPLICATIONS_COMMANDS_UPDATE,
        i.F.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE,
        i.F.APPLICATIONS_STORE_UPDATE,
        i.F.APPLICATIONS_ENTITLEMENTS,
        i.F.ACTIVITIES_INVITES_WRITE,
        i.F.ACTIVITIES_READ,
        i.F.ACTIVITIES_WRITE,
        i.F.RELATIONSHIPS_READ,
        i.F.RELATIONSHIPS_WRITE,
        i.F.VOICE,
        i.F.DM_CHANNELS_READ,
        i.F.DM_CHANNELS_MESSAGES_READ,
        i.F.DM_CHANNELS_MESSAGES_WRITE,
        i.F.ROLE_CONNECTIONS_WRITE,
        i.F.PRESENCES_READ,
        i.F.PRESENCES_WRITE,
        i.F.GATEWAY_CONNECT,
        i.F.PAYMENT_SOURCES_COUNTRY_CODE,
        i.F.SDK_SOCIAL_LAYER_PRESENCE,
        i.F.SDK_SOCIAL_LAYER,
    ],
    o = a.concat([i.F.WEBHOOK_INCOMING, i.F.BOT]),
    l = ["rpc.api"];
function u(e, t) {
    switch (e) {
        case i.F.IDENTIFY:
            return [r.intl.string(r.t.DD9KQh)];
        case i.F.IDENTIFY_PREMIUM:
            return [r.intl.string(r.t.xhQsxx)];
        case i.F.OPENID:
            return [r.intl.string(r.t.R5IKv1)];
        case i.F.EMAIL:
            return [r.intl.string(r.t.rvFS2t)];
        case i.F.BOT:
            return [r.intl.string(r.t.pRpdox)];
        case i.F.CONNECTIONS:
            return [r.intl.string(r.t["1AwaU1"])];
        case i.F.MESSAGES_READ:
            return [r.intl.string(r.t.jVXrHb)];
        case i.F.GUILDS:
            return [r.intl.string(r.t.QKGJkC)];
        case i.F.GUILDS_JOIN:
            return [r.intl.string(r.t.ETGDR9)];
        case i.F.GUILDS_MEMBERS_READ:
            if (t.includes(i.F.VOICE)) return [r.intl.string(r.t.OSvmfH)];
            return [r.intl.string(r.t.o6M1aS)];
        case i.F.GUILDS_CHANNELS_READ:
            return [r.intl.string(r.t.BWGAgt)];
        case i.F.GDM_JOIN:
            return [r.intl.string(r.t["55B4wA"])];
        case i.F.RPC:
            return [r.intl.string(r.t.EDBEeK)];
        case i.F.RPC_NOTIFICATIONS_READ:
            return [r.intl.string(r.t["6kDHWV"])];
        case i.F.RPC_VOICE_WRITE:
            return [r.intl.string(r.t["531s7c"])];
        case i.F.RPC_VIDEO_READ:
            return [r.intl.string(r.t.zbUSWO)];
        case i.F.RPC_VIDEO_WRITE:
            return [r.intl.string(r.t["y+MdAM"])];
        case i.F.RPC_SCREENSHARE_READ:
            return [r.intl.string(r.t.b0i0CO)];
        case i.F.RPC_SCREENSHARE_WRITE:
            return [r.intl.string(r.t["9Rmxux"])];
        case i.F.RPC_VOICE_READ:
            return [r.intl.string(r.t.rznmpz)];
        case i.F.RPC_ACTIVITIES_WRITE:
            return [r.intl.string(r.t.KQwJDf)];
        case i.F.APPLICATIONS_BUILDS_UPLOAD:
            return [r.intl.string(r.t.Iwbtgk)];
        case i.F.APPLICATIONS_BUILDS_READ:
            return [r.intl.string(r.t.ZkZCCW)];
        case i.F.APPLICATIONS_COMMANDS:
            return [r.intl.string(r.t.H4q49X)];
        case i.F.APPLICATIONS_COMMANDS_UPDATE:
            return [r.intl.string(r.t.mxeq6u)];
        case i.F.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
            return [r.intl.string(r.t["7SIoW7"])];
        case i.F.APPLICATIONS_STORE_UPDATE:
            return [r.intl.string(r.t["Rba/Xn"])];
        case i.F.APPLICATIONS_ENTITLEMENTS:
            return [r.intl.string(r.t.xeNgGI)];
        case i.F.ACTIVITIES_READ:
            return [r.intl.string(r.t["4+tSce"])];
        case i.F.ACTIVITIES_WRITE:
            return [r.intl.string(r.t["6OsWXX"])];
        case i.F.RELATIONSHIPS_READ:
            return [r.intl.string(r.t["521/7W"])];
        case i.F.RELATIONSHIPS_WRITE:
            return [r.intl.string(r.t["qR/txQ"])];
        case i.F.VOICE:
            return [r.intl.string(r.t.XK5zdO)];
        case i.F.DM_CHANNELS_READ:
            return [r.intl.string(r.t.w8emlT)];
        case i.F.ROLE_CONNECTIONS_WRITE:
            return [r.intl.string(r.t.Bv0wZj)];
        case i.F.PRESENCES_READ:
            return [r.intl.string(r.t.JUWeyf)];
        case i.F.PRESENCES_WRITE:
            return [r.intl.string(r.t.apHLwv)];
        case i.F.DM_CHANNELS_MESSAGES_READ:
            return [r.intl.string(r.t.FHeB8p)];
        case i.F.DM_CHANNELS_MESSAGES_WRITE:
            return [r.intl.string(r.t["mdh+xY"])];
        case i.F.GATEWAY_CONNECT:
            return [r.intl.string(r.t["uJd+85"])];
        case i.F.PAYMENT_SOURCES_COUNTRY_CODE:
            return [r.intl.string(r.t.hycwLK)];
        case i.F.ACTIVITIES_INVITES_WRITE:
            return [r.intl.string(r.t.IM4Cje)];
        case i.F.APPLICATION_IDENTITIES_WRITE:
            return [r.intl.string(r.t["1zioRF"])];
        case i.F.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE:
            return [r.intl.string(r.t["4l1DWw"])];
        case i.F.SDK_SOCIAL_LAYER_PRESENCE: {
            let e = [
                r.intl.string(r.t.Pl1dTW),
                r.intl.string(r.t.mPRcyT),
                r.intl.string(r.t.F7J4NE),
                r.intl.string(r.t.syJLx9),
            ];
            return t.includes(i.F.APPLICATION_IDENTITIES_WRITE) || e.push(r.intl.string(r.t["1zioRF"])), e;
        }
        case i.F.SDK_SOCIAL_LAYER: {
            let e = [
                r.intl.string(r.t.Pl1dTW),
                r.intl.string(r.t["hc/+yg"]),
                r.intl.string(r.t.mPRcyT),
                r.intl.string(r.t.F7J4NE),
                r.intl.string(r.t["2wxXX9"]),
            ];
            return t.includes(i.F.APPLICATION_IDENTITIES_WRITE) || e.push(r.intl.string(r.t["1zioRF"])), e;
        }
        default:
            return [e];
    }
}
function c(e) {
    return e === i.F.SDK_SOCIAL_LAYER_PRESENCE || e === i.F.SDK_SOCIAL_LAYER;
}
function d(e) {
    return e.includes(i.F.DM_CHANNELS_MESSAGES_WRITE) || e.includes(i.F.SDK_SOCIAL_LAYER)
        ? r.intl.format(r.t.o0GMBD, {})
        : e.includes(i.F.MESSAGES_READ) || e.includes(i.F.DM_CHANNELS_MESSAGES_READ)
          ? r.intl.format(r.t.Soy7jJ, {})
          : r.intl.format(r.t["TeL+Ct"], {});
}
