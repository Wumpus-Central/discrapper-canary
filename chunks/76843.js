"use strict";
n.d(t, { h: () => W, m: () => j });
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
var d = n(975807),
    _ = n(627968);
n(64700);
var u = n(192308);
let c = {
    show(e) {
        (0, u.openModalLazy)(async () => {
            let { default: t } = await n.e("18469").then(n.bind(n, 534340));
            return (n) => (0, _.jsx)(t, { ...n, url: e });
        });
    },
};
var E = n(306173),
    h = n(954571),
    m = n(652215);
let f = class {
    static isBlockedDomain(e) {
        let t = (0, E.xd)() ? (0, E.tR)(e) : null;
        return "" !== t && null !== t && h.default.track(m.HAw.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: t }), t;
    }
};
var g = n(343328),
    p = n(235393),
    A = n(527214);
let I = {
        show(e) {
            let { url: t, trustUrl: i, onConfirm: r, onCancel: s, isProtocol: a, contextKey: o } = e;
            (0, u.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("14782").then(n.bind(n, 885293));
                    return (n) =>
                        (0, _.jsx)(e, { ...n, url: t, isProtocol: a, trustUrl: i, onConfirm: r, onCancel: s });
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
        ]),
    ]);
var S = n(788995),
    N = n(432e3),
    C = n(734057),
    R = n(71393),
    O = n(17928),
    y = n(506774),
    v = n(998218),
    D = n(155078),
    L = n(272984);
let b = "MaskedLinkStore",
    w = new Set(),
    P = new Set(),
    k = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.replace("//", "");
function M(e) {
    let t = (0, D.E)(e);
    switch (t) {
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case k:
        case location.hostname:
            return !0;
        default:
            return L.UN.includes(t) || v.A.isDiscordHostname(t) || w.has(t);
    }
}
function U(e) {
    let t = (0, D.J)(e);
    return P.has(t);
}
class x extends O.Ay.Store {
    static displayName = "MaskedLinkStore";
    initialize() {
        let e = y.w.get(b) ?? {};
        if (Array.isArray(e)) (w = new Set(null != e ? Array.from(e) : null)), (P = new Set());
        else {
            let { trustedDomains: t, trustedProtocols: n } = e;
            (w = new Set(null != t ? Array.from(t) : null)), (P = new Set(null != n ? Array.from(n) : null));
        }
    }
    isTrustedDomain(e) {
        return M(e);
    }
    isTrustedProtocol(e) {
        return U(e);
    }
}
let G = new x(a.h, {
    MASKED_LINK_ADD_TRUSTED_DOMAIN: function (e) {
        let { url: t } = e;
        if (M(t)) return !1;
        w.add((0, D.E)(t)), y.w.set(b, { trustedDomains: w, trustedProtocols: P });
    },
    MASKED_LINK_ADD_TRUSTED_PROTOCOL: function (e) {
        let { url: t } = e;
        if (U(t)) return !1;
        P.add((0, D.J)(t)), y.w.set(b, { trustedDomains: w, trustedProtocols: P });
    },
});
var V = n(232835),
    F = n(994500),
    B = n(309010),
    H = n(985018);
function j(e, t) {
    let n = C.A.getChannel(B.A.getChannelId());
    return (null == n || n.type !== m.rbe.DM || !!F.A.isFriend(n.getRecipientId() ?? "")) && e === t;
}
function W(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        a = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: _, onClick: u, onConfirm: E, onCancel: O, shouldConfirm: y, messageId: v, channelId: L } = e,
        b = r().sanitizeUrl(e.href);
    if (null == b) {
        null != t && t.preventDefault(),
            s.A.show({
                title: H.intl.string(H.t.x87gan),
                body: H.intl.format(H.t["9rqRwl"], { url: e.href }),
                isDismissable: !0,
                contextKey: a,
            });
        return;
    }
    let w = b;
    try {
        decodeURI(b);
    } catch (e) {
        w = encodeURI(b);
    }
    let P = null,
        k = !1,
        M = v,
        U = L,
        x = null;
    if (null != v && null != L) {
        let e = V.A.getMessage(L, v),
            t = C.A.getBasicChannel(L);
        P = t?.guild_id ?? null;
        let n = R.A.getGuild(P),
            i =
                e?.messageReference?.guild_id != null &&
                e?.webhookId != null &&
                e?.hasFlag(m.pr7.IS_CROSSPOST) &&
                null != P;
        i && e?.messageReference?.guild_id != null
            ? ((M = e.messageReference.message_id),
              (U = e.messageReference.channel_id),
              (x = e.messageReference.guild_id))
            : (x = P);
        let r = t?.type === m.rbe.GUILD_ANNOUNCEMENT && n?.features.has(m.GuildFeatures.COMMUNITY) === !0,
            s = e?.hasFlag(m.pr7.EPHEMERAL) === !0;
        k = null != e && !s && (i || r);
    }
    if (null != L) {
        let e = C.A.getChannel(L),
            t = R.A.getGuild(e?.getGuildId());
        null != e &&
            null != t &&
            t.features.has(m.GuildFeatures.DISCOVERABLE) &&
            h.default.track(m.HAw.URL_CLICKED, { url_domain: (0, D.E)(w), guild_id: t.id, channel_id: e.id }),
            (0, g.A)(L) && h.default.track(m.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: w });
    }
    if ((p.A.trackLinkClicked(w), null != u)) {
        if (u(t)) return;
    } else {
        let { default: e } = n(464792),
            r = e(w, { skipExtensionCheck: void 0, analyticsLocations: i, messageId: v });
        if (null != r && r(t)) return;
    }
    let F = () => {
            (k &&
                p.A.trackAnnouncementMessageLinkClicked({
                    messageId: M,
                    channelId: L,
                    guildId: P,
                    sourceChannelId: U,
                    sourceGuildId: x,
                }),
            null != E)
                ? E()
                : (0, d.A)(w);
        },
        B = O ?? (() => {});
    if (null !== f.isBlockedDomain(w)) {
        t?.preventDefault(), c.show(w);
        return;
    }
    if (null != (0, N.m)(w)) {
        t?.preventDefault(), S.A.show(w);
        return;
    }
    let j = ("function" == typeof _ ? _() : _) || T.has(w),
        W = (0, D.J)(w),
        Y = "http:" !== W && "https:" !== W;
    if ((!Y && (j || G.isTrustedDomain(w))) || (Y && G.isTrustedProtocol(w)))
        return void (null == t || (null != y && y)
            ? F()
            : k &&
              p.A.trackAnnouncementMessageLinkClicked({
                  messageId: M,
                  channelId: L,
                  guildId: P,
                  sourceChannelId: U,
                  sourceGuildId: x,
              }));
    if ((null != t && t.preventDefault(), Y))
        I.show({ url: w, trustUrl: l, onConfirm: F, onCancel: B, isProtocol: !0, contextKey: a });
    else {
        let e = (0, A.W1)(w),
            t = null != e ? e.displayTarget : w;
        I.show({ url: t, trustUrl: o, onConfirm: F, onCancel: B, isProtocol: !1, contextKey: a });
    }
}
