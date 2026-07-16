"use strict";
n.d(t, { h: () => W, m: () => j });
var i = n(791332),
    r = n.n(i),
    a = n(157559),
    s = n(228366);
function l(e) {
    s.h.dispatch({ type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url: e });
}
function o(e) {
    s.h.dispatch({ type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url: e });
}
var d = n(975807),
    c = n(627968);
n(64700);
var u = n(192308);
let _ = {
    show(e) {
        (0, u.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("83307"), n.e("20577"), n.e("58062"), n.e("20723")]).then(
                n.bind(n, 667934),
            );
            return (n) => (0, c.jsx)(t, { ...n, url: e });
        });
    },
};
var E = n(306173),
    A = n(174459),
    h = n(652215);
let I = class {
    static isBlockedDomain(e) {
        let t = (0, E.xd)() ? (0, E.tR)(e) : null;
        return "" !== t && null !== t && A.default.track(h.HAw.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: t }), t;
    }
};
var f = n(343328),
    p = n(235393),
    T = n(694403);
let m = {
        show(e) {
            let { url: t, trustUrl: i, onConfirm: r, onCancel: a, isProtocol: s, contextKey: l } = e;
            (0, u.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("4407"), n.e("58062"), n.e("14782")]).then(
                        n.bind(n, 885293),
                    );
                    return (n) =>
                        (0, c.jsx)(e, { ...n, url: t, isProtocol: s, trustUrl: i, onConfirm: r, onCancel: a });
                },
                { contextKey: l },
            );
        },
    },
    g = new Set([
        ...new Set([
            "https://account.riotgames.com/#connected-accounts",
            "https://aes.sgp.pvp.net/providers/discord/link/v1",
            "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
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
    C = n(734057),
    R = n(71393),
    O = n(17928),
    L = n(506774),
    y = n(998218),
    D = n(155078),
    v = n(272984);
let b = "MaskedLinkStore",
    M = new Set(),
    P = new Set(),
    U = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.replace("//", "");
function w(e) {
    let t = (0, D.E)(e);
    switch (t) {
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case U:
        case location.hostname:
            return !0;
        default:
            return v.UN.includes(t) || y.A.isDiscordHostname(t) || M.has(t);
    }
}
function G(e) {
    let t = (0, D.J)(e);
    return P.has(t);
}
class x extends O.Ay.Store {
    static displayName = "MaskedLinkStore";
    initialize() {
        let e = L.w.get(b) ?? {};
        if (Array.isArray(e)) (M = new Set(null != e ? Array.from(e) : null)), (P = new Set());
        else {
            let { trustedDomains: t, trustedProtocols: n } = e;
            (M = new Set(null != t ? Array.from(t) : null)), (P = new Set(null != n ? Array.from(n) : null));
        }
    }
    isTrustedDomain(e) {
        return w(e);
    }
    isTrustedProtocol(e) {
        return G(e);
    }
}
let k = new x(s.h, {
    MASKED_LINK_ADD_TRUSTED_DOMAIN: function (e) {
        let { url: t } = e;
        if (w(t)) return !1;
        M.add((0, D.E)(t)), L.w.set(b, { trustedDomains: M, trustedProtocols: P });
    },
    MASKED_LINK_ADD_TRUSTED_PROTOCOL: function (e) {
        let { url: t } = e;
        if (G(t)) return !1;
        P.add((0, D.J)(t)), L.w.set(b, { trustedDomains: M, trustedProtocols: P });
    },
});
var F = n(232835),
    V = n(994500),
    B = n(309010),
    H = n(375708);
function j(e, t) {
    let n = C.A.getChannel(B.Ay.getChannelId());
    return (null == n || n.type !== h.rbe.DM || !!V.A.isFriend(n.getRecipientId() ?? "")) && e === t;
}
function W(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        s = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: c, onClick: u, onConfirm: E, onCancel: O, shouldConfirm: L, messageId: y, channelId: v } = e,
        b = r().sanitizeUrl(e.href);
    if (null == b) {
        null != t && t.preventDefault(),
            a.A.show({
                title: H.intl.string(H.t.x87gan),
                body: H.intl.format(H.t["9rqRwl"], { url: e.href }),
                isDismissable: !0,
                contextKey: s,
            });
        return;
    }
    let M = b;
    try {
        decodeURI(b);
    } catch (e) {
        M = encodeURI(b);
    }
    let P = null,
        U = !1,
        w = y,
        G = v,
        x = null;
    if (null != y && null != v) {
        let e = F.A.getMessage(v, y),
            t = C.A.getBasicChannel(v);
        P = t?.guild_id ?? null;
        let n = R.A.getGuild(P),
            i =
                e?.messageReference?.guild_id != null &&
                e?.webhookId != null &&
                e?.hasFlag(h.pr7.IS_CROSSPOST) &&
                null != P;
        i && e?.messageReference?.guild_id != null
            ? ((w = e.messageReference.message_id),
              (G = e.messageReference.channel_id),
              (x = e.messageReference.guild_id))
            : (x = P);
        let r = t?.type === h.rbe.GUILD_ANNOUNCEMENT && n?.features.has(h.GuildFeatures.COMMUNITY) === !0,
            a = e?.hasFlag(h.pr7.EPHEMERAL) === !0;
        U = null != e && !a && (i || r);
    }
    if (null != v) {
        let e = C.A.getChannel(v),
            t = R.A.getGuild(e?.getGuildId());
        null != e &&
            null != t &&
            t.features.has(h.GuildFeatures.DISCOVERABLE) &&
            A.default.track(h.HAw.URL_CLICKED, { url_domain: (0, D.E)(M), guild_id: t.id, channel_id: e.id }),
            (0, f.A)(v) && A.default.track(h.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: M });
    }
    if ((p.A.trackLinkClicked(M), null != u)) {
        if (u(t)) return;
    } else {
        let { default: e } = n(983555),
            r = e(M, { skipExtensionCheck: void 0, analyticsLocations: i, messageId: y, channelId: v });
        if (null != r && r(t)) return;
    }
    function V() {
        (U &&
            p.A.trackAnnouncementMessageLinkClicked({
                messageId: w,
                channelId: v,
                guildId: P,
                sourceChannelId: G,
                sourceGuildId: x,
            }),
        null != E)
            ? E()
            : (0, d.A)(M);
    }
    let B = O ?? (() => {});
    if (null !== I.isBlockedDomain(M)) {
        t?.preventDefault(), _.show(M);
        return;
    }
    if (null != (0, N.m)(M)) {
        t?.preventDefault(), S.A.show(M);
        return;
    }
    let j = ("function" == typeof c ? c() : c) || g.has(M),
        W = (0, D.J)(M),
        Y = "http:" !== W && "https:" !== W;
    if ((!Y && (j || k.isTrustedDomain(M))) || (Y && k.isTrustedProtocol(M)))
        return void (null == t || (null != L && L)
            ? V()
            : U &&
              p.A.trackAnnouncementMessageLinkClicked({
                  messageId: w,
                  channelId: v,
                  guildId: P,
                  sourceChannelId: G,
                  sourceGuildId: x,
              }));
    if ((null != t && t.preventDefault(), Y))
        m.show({ url: M, trustUrl: o, onConfirm: V, onCancel: B, isProtocol: !0, contextKey: s });
    else {
        let e = (0, T.W1)(M),
            t = null != e ? e.displayTarget : M;
        m.show({ url: t, trustUrl: l, onConfirm: V, onCancel: B, isProtocol: !1, contextKey: s });
    }
}
