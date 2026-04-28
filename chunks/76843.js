"use strict";
n.d(t, { h: () => W, m: () => Y });
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
var _ = n(975807),
    d = n(627968);
n(64700);
var u = n(192308);
let c = {
    show(e) {
        (0, u.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("83307"),
                n.e("20577"),
                n.e("58062"),
                n.e("46598"),
                n.e("18469"),
            ]).then(n.bind(n, 534340));
            return (n) => (0, d.jsx)(t, { ...n, url: e });
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
    I = n(235393),
    A = n(527214);
let p = {
        show(e) {
            let { url: t, trustUrl: i, onConfirm: r, onCancel: s, isProtocol: a, contextKey: o } = e;
            (0, u.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("4407"), n.e("58062"), n.e("14782")]).then(
                        n.bind(n, 885293),
                    );
                    return (n) =>
                        (0, d.jsx)(e, { ...n, url: t, isProtocol: a, trustUrl: i, onConfirm: r, onCancel: s });
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
    O = n(734057),
    R = n(71393),
    C = n(17928),
    y = n(506774),
    D = n(998218),
    L = n(155078),
    v = n(272984);
let w = "MaskedLinkStore",
    P = new Set(),
    b = new Set(),
    k = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.replace("//", "");
function U(e) {
    let t = (0, L.E)(e);
    switch (t) {
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case k:
        case location.hostname:
            return !0;
        default:
            return v.UN.includes(t) || D.A.isDiscordHostname(t) || P.has(t);
    }
}
function M(e) {
    let t = (0, L.J)(e);
    return b.has(t);
}
class G extends C.Ay.Store {
    static displayName = "MaskedLinkStore";
    initialize() {
        let e = y.w.get(w) ?? {};
        if (Array.isArray(e)) (P = new Set(null != e ? Array.from(e) : null)), (b = new Set());
        else {
            let { trustedDomains: t, trustedProtocols: n } = e;
            (P = new Set(null != t ? Array.from(t) : null)), (b = new Set(null != n ? Array.from(n) : null));
        }
    }
    isTrustedDomain(e) {
        return U(e);
    }
    isTrustedProtocol(e) {
        return M(e);
    }
}
let x = new G(a.h, {
    MASKED_LINK_ADD_TRUSTED_DOMAIN: function (e) {
        let { url: t } = e;
        if (U(t)) return !1;
        P.add((0, L.E)(t)), y.w.set(w, { trustedDomains: P, trustedProtocols: b });
    },
    MASKED_LINK_ADD_TRUSTED_PROTOCOL: function (e) {
        let { url: t } = e;
        if (M(t)) return !1;
        b.add((0, L.J)(t)), y.w.set(w, { trustedDomains: P, trustedProtocols: b });
    },
});
var V = n(232835),
    F = n(994500),
    B = n(309010),
    H = n(985018);
function Y(e, t) {
    let n = O.A.getChannel(B.A.getChannelId());
    return (null == n || n.type !== m.rbe.DM || !!F.A.isFriend(n.getRecipientId() ?? "")) && e === t;
}
function W(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        a = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: d, onClick: u, onConfirm: E, onCancel: C, shouldConfirm: y, messageId: D, channelId: v } = e,
        w = r().sanitizeUrl(e.href);
    if (null == w) {
        null != t && t.preventDefault(),
            s.A.show({
                title: H.intl.string(H.t.x87gan),
                body: H.intl.format(H.t["9rqRwl"], { url: e.href }),
                isDismissable: !0,
                contextKey: a,
            });
        return;
    }
    let P = w;
    try {
        decodeURI(w);
    } catch (e) {
        P = encodeURI(w);
    }
    let b = null,
        k = !1,
        U = D,
        M = v,
        G = null;
    if (null != D && null != v) {
        let e = V.A.getMessage(v, D),
            t = O.A.getBasicChannel(v);
        b = t?.guild_id ?? null;
        let n = R.A.getGuild(b),
            i =
                e?.messageReference?.guild_id != null &&
                e?.webhookId != null &&
                e?.hasFlag(m.pr7.IS_CROSSPOST) &&
                null != b;
        i && e?.messageReference?.guild_id != null
            ? ((U = e.messageReference.message_id),
              (M = e.messageReference.channel_id),
              (G = e.messageReference.guild_id))
            : (G = b);
        let r = t?.type === m.rbe.GUILD_ANNOUNCEMENT && n?.features.has(m.GuildFeatures.COMMUNITY) === !0,
            s = e?.hasFlag(m.pr7.EPHEMERAL) === !0;
        k = null != e && !s && (i || r);
    }
    if (null != v) {
        let e = O.A.getChannel(v),
            t = R.A.getGuild(e?.getGuildId());
        null != e &&
            null != t &&
            t.features.has(m.GuildFeatures.DISCOVERABLE) &&
            h.default.track(m.HAw.URL_CLICKED, { url_domain: (0, L.E)(P), guild_id: t.id, channel_id: e.id }),
            (0, g.A)(v) && h.default.track(m.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: P });
    }
    if ((I.A.trackLinkClicked(P), null != u)) {
        if (u(t)) return;
    } else {
        let { default: e } = n(464792),
            r = e(P, { skipExtensionCheck: void 0, analyticsLocations: i, messageId: D });
        if (null != r && r(t)) return;
    }
    let F = () => {
            (k &&
                I.A.trackAnnouncementMessageLinkClicked({
                    messageId: U,
                    channelId: v,
                    guildId: b,
                    sourceChannelId: M,
                    sourceGuildId: G,
                }),
            null != E)
                ? E()
                : (0, _.A)(P);
        },
        B = C ?? (() => {});
    if (null !== f.isBlockedDomain(P)) {
        t?.preventDefault(), c.show(P);
        return;
    }
    if (null != (0, N.m)(P)) {
        t?.preventDefault(), S.A.show(P);
        return;
    }
    let Y = ("function" == typeof d ? d() : d) || T.has(P),
        W = (0, L.J)(P),
        K = "http:" !== W && "https:" !== W;
    if ((!K && (Y || x.isTrustedDomain(P))) || (K && x.isTrustedProtocol(P)))
        return void (null == t || (null != y && y)
            ? F()
            : k &&
              I.A.trackAnnouncementMessageLinkClicked({
                  messageId: U,
                  channelId: v,
                  guildId: b,
                  sourceChannelId: M,
                  sourceGuildId: G,
              }));
    if ((null != t && t.preventDefault(), K))
        p.show({ url: P, trustUrl: l, onConfirm: F, onCancel: B, isProtocol: !0, contextKey: a });
    else {
        let e = (0, A.W1)(P),
            t = null != e ? e.displayTarget : P;
        p.show({ url: t, trustUrl: o, onConfirm: F, onCancel: B, isProtocol: !1, contextKey: a });
    }
}
