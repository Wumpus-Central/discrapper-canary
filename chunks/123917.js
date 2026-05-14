"use strict";
n.d(t, { h: () => Y, m: () => j });
var i = n(791332),
    r = n.n(i),
    s = n(157559),
    a = n(228366);
function o(e) {
    a.h.dispatch({ type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url: e });
}
function l(e) {
    a.h.dispatch({ type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url: e });
}
var u = n(975807),
    c = n(627968);
n(64700);
var d = n(192308);
let _ = {
    show(e) {
        (0, d.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("83307"), n.e("20577"), n.e("58062"), n.e("20723")]).then(
                n.bind(n, 667934),
            );
            return (n) => (0, c.jsx)(t, { ...n, url: e });
        });
    },
};
var f = n(306173),
    h = n(174459),
    p = n(652215);
let E = class {
    static isBlockedDomain(e) {
        let t = (0, f.xd)() ? (0, f.tR)(e) : null;
        return "" !== t && null !== t && h.default.track(p.HAw.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: t }), t;
    }
};
var m = n(343328),
    g = n(235393),
    A = n(527214);
let I = {
        show(e) {
            let { url: t, trustUrl: i, onConfirm: r, onCancel: s, isProtocol: a, contextKey: o } = e;
            (0, d.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("4407"), n.e("58062"), n.e("14782")]).then(
                        n.bind(n, 885293),
                    );
                    return (n) =>
                        (0, c.jsx)(e, { ...n, url: t, isProtocol: a, trustUrl: i, onConfirm: r, onCancel: s });
                },
                { contextKey: o },
            );
        },
    },
    T = new Set([
        ...new Set([
            "https://account.riotgames.com/#connected-accounts",
            "https://aes.sgp.pvp.net/providers/discord/link/v1",
            "https://marvelrivals.com/discord",
            "https://wutheringwaves-dc.kurogames-global.com/",
            "https://id.embark.games/id/connected-platforms",
            "https://myaccount.ea.com/am/ui/connected-accounts",
            "https://playbpsr.com/discord_bind",
            "https://infinitynikki.infoldgames.com/proj/dcbd.html",
            "https://vrchat.com/home/profile",
            "https://account.1047games.com/",
            "https://discord.facepunch.com/",
        ]),
    ]);
var S = n(788995),
    N = n(432e3),
    y = n(734057),
    C = n(71393),
    v = n(17928),
    O = n(506774),
    R = n(998218),
    b = n(155078),
    D = n(272984);
let L = "MaskedLinkStore",
    w = new Set(),
    M = new Set(),
    P = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.replace("//", "");
function x(e) {
    let t = (0, b.E)(e);
    switch (t) {
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case P:
        case location.hostname:
            return !0;
        default:
            return D.UN.includes(t) || R.A.isDiscordHostname(t) || w.has(t);
    }
}
function U(e) {
    let t = (0, b.J)(e);
    return M.has(t);
}
class k extends v.Ay.Store {
    static displayName = "MaskedLinkStore";
    initialize() {
        let e = O.w.get(L) ?? {};
        if (Array.isArray(e)) (w = new Set(null != e ? Array.from(e) : null)), (M = new Set());
        else {
            let { trustedDomains: t, trustedProtocols: n } = e;
            (w = new Set(null != t ? Array.from(t) : null)), (M = new Set(null != n ? Array.from(n) : null));
        }
    }
    isTrustedDomain(e) {
        return x(e);
    }
    isTrustedProtocol(e) {
        return U(e);
    }
}
let G = new k(a.h, {
    MASKED_LINK_ADD_TRUSTED_DOMAIN: function (e) {
        let { url: t } = e;
        if (x(t)) return !1;
        w.add((0, b.E)(t)), O.w.set(L, { trustedDomains: w, trustedProtocols: M });
    },
    MASKED_LINK_ADD_TRUSTED_PROTOCOL: function (e) {
        let { url: t } = e;
        if (U(t)) return !1;
        M.add((0, b.J)(t)), O.w.set(L, { trustedDomains: w, trustedProtocols: M });
    },
});
var F = n(232835),
    V = n(994500),
    B = n(309010),
    H = n(375708);
function j(e, t) {
    let n = y.A.getChannel(B.A.getChannelId());
    return (null == n || n.type !== p.rbe.DM || !!V.A.isFriend(n.getRecipientId() ?? "")) && e === t;
}
function Y(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        a = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: c, onClick: d, onConfirm: f, onCancel: v, shouldConfirm: O, messageId: R, channelId: D } = e,
        L = r().sanitizeUrl(e.href);
    if (null == L) {
        null != t && t.preventDefault(),
            s.A.show({
                title: H.intl.string(H.t.x87gan),
                body: H.intl.format(H.t["9rqRwl"], { url: e.href }),
                isDismissable: !0,
                contextKey: a,
            });
        return;
    }
    let w = L;
    try {
        decodeURI(L);
    } catch (e) {
        w = encodeURI(L);
    }
    let M = null,
        P = !1,
        x = R,
        U = D,
        k = null;
    if (null != R && null != D) {
        let e = F.A.getMessage(D, R),
            t = y.A.getBasicChannel(D);
        M = t?.guild_id ?? null;
        let n = C.A.getGuild(M),
            i =
                e?.messageReference?.guild_id != null &&
                e?.webhookId != null &&
                e?.hasFlag(p.pr7.IS_CROSSPOST) &&
                null != M;
        i && e?.messageReference?.guild_id != null
            ? ((x = e.messageReference.message_id),
              (U = e.messageReference.channel_id),
              (k = e.messageReference.guild_id))
            : (k = M);
        let r = t?.type === p.rbe.GUILD_ANNOUNCEMENT && n?.features.has(p.GuildFeatures.COMMUNITY) === !0,
            s = e?.hasFlag(p.pr7.EPHEMERAL) === !0;
        P = null != e && !s && (i || r);
    }
    if (null != D) {
        let e = y.A.getChannel(D),
            t = C.A.getGuild(e?.getGuildId());
        null != e &&
            null != t &&
            t.features.has(p.GuildFeatures.DISCOVERABLE) &&
            h.default.track(p.HAw.URL_CLICKED, { url_domain: (0, b.E)(w), guild_id: t.id, channel_id: e.id }),
            (0, m.A)(D) && h.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: w });
    }
    if ((g.A.trackLinkClicked(w), null != d)) {
        if (d(t)) return;
    } else {
        let { default: e } = n(464792),
            r = e(w, { skipExtensionCheck: void 0, analyticsLocations: i, messageId: R });
        if (null != r && r(t)) return;
    }
    let V = () => {
            (P &&
                g.A.trackAnnouncementMessageLinkClicked({
                    messageId: x,
                    channelId: D,
                    guildId: M,
                    sourceChannelId: U,
                    sourceGuildId: k,
                }),
            null != f)
                ? f()
                : (0, u.A)(w);
        },
        B = v ?? (() => {});
    if (null !== E.isBlockedDomain(w)) {
        t?.preventDefault(), _.show(w);
        return;
    }
    if (null != (0, N.m)(w)) {
        t?.preventDefault(), S.A.show(w);
        return;
    }
    let j = ("function" == typeof c ? c() : c) || T.has(w),
        Y = (0, b.J)(w),
        W = "http:" !== Y && "https:" !== Y;
    if ((!W && (j || G.isTrustedDomain(w))) || (W && G.isTrustedProtocol(w)))
        return void (null == t || (null != O && O)
            ? V()
            : P &&
              g.A.trackAnnouncementMessageLinkClicked({
                  messageId: x,
                  channelId: D,
                  guildId: M,
                  sourceChannelId: U,
                  sourceGuildId: k,
              }));
    if ((null != t && t.preventDefault(), W))
        I.show({ url: w, trustUrl: l, onConfirm: V, onCancel: B, isProtocol: !0, contextKey: a });
    else {
        let e = (0, A.W1)(w),
            t = null != e ? e.displayTarget : w;
        I.show({ url: t, trustUrl: o, onConfirm: V, onCancel: B, isProtocol: !1, contextKey: a });
    }
}
