n.d(t, { h: () => Y, m: () => W });
var i = n(478676),
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
    c = n(477900);
n(582128);
var u = n(192308);
let _ = {
    show(e) {
        (0, u.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("364956"),
                n.e("454048"),
                n.e("420577"),
                n.e("335681"),
                n.e("520723"),
            ]).then(n.bind(n, 667934));
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
        return ("" !== t && null !== t && A.default.track(h.HAw.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: t }), t);
    }
};
var f = n(343328),
    p = n(235393),
    T = n(694403);
let m = new Set(),
    g = {
        show(e) {
            let { url: t, trustUrl: i, onConfirm: r, onCancel: a, isProtocol: s, contextKey: l } = e,
                o = `masked-link-${t}`;
            if (m.has(o)) return void a();
            m.add(o);
            let d = !1;
            function _(e) {
                d || ((d = !0), m.delete(o), e ? r() : a());
            }
            (0, u.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("384540"),
                        n.e("165595"),
                        n.e("335681"),
                        n.e("914782"),
                    ]).then(n.bind(n, 885293));
                    return (n) =>
                        (0, c.jsx)(e, {
                            ...n,
                            url: t,
                            isProtocol: s,
                            trustUrl: i,
                            onConfirm: () => _(!0),
                            onCancel: () => _(!1),
                        });
                },
                { contextKey: l, modalKey: o, onCloseCallback: () => _(!1) },
            );
        },
    },
    S = new Set([
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
            "https://account.battle.net/connections/discord",
        ]),
    ]);
var N = n(788995),
    C = n(432e3),
    O = n(734057),
    R = n(71393),
    L = n(17928),
    y = n(506774),
    D = n(998218),
    v = n(155078),
    b = n(272984);
let M = "MaskedLinkStore",
    P = new Set(),
    U = new Set(),
    w = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.replace("//", "");
function G(e) {
    let t = (0, v.E)(e);
    switch (t) {
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case w:
        case location.hostname:
            return !0;
        default:
            return b.UN.includes(t) || D.A.isDiscordHostname(t) || P.has(t);
    }
}
function x(e) {
    let t = (0, v.J)(e);
    return U.has(t);
}
class k extends L.Ay.Store {
    static displayName = "MaskedLinkStore";
    initialize() {
        let e = y.w.get(M) ?? {};
        if (Array.isArray(e)) ((P = new Set(null != e ? Array.from(e) : null)), (U = new Set()));
        else {
            let { trustedDomains: t, trustedProtocols: n } = e;
            ((P = new Set(null != t ? Array.from(t) : null)), (U = new Set(null != n ? Array.from(n) : null)));
        }
    }
    isTrustedDomain(e) {
        return G(e);
    }
    isTrustedProtocol(e) {
        return x(e);
    }
}
let F = new k(s.h, {
    MASKED_LINK_ADD_TRUSTED_DOMAIN: function (e) {
        let { url: t } = e;
        if (G(t)) return !1;
        (P.add((0, v.E)(t)), y.w.set(M, { trustedDomains: P, trustedProtocols: U }));
    },
    MASKED_LINK_ADD_TRUSTED_PROTOCOL: function (e) {
        let { url: t } = e;
        if (x(t)) return !1;
        (U.add((0, v.J)(t)), y.w.set(M, { trustedDomains: P, trustedProtocols: U }));
    },
});
var B = n(232835),
    V = n(994500),
    H = n(309010),
    j = n(375708);
function W(e, t) {
    let n = O.A.getChannel(H.Ay.getChannelId());
    return (null == n || n.type !== h.rbe.DM || !!V.A.isFriend(n.getRecipientId() ?? "")) && e === t;
}
function Y(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        s = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: c, onClick: u, onConfirm: E, onCancel: m, shouldConfirm: L, messageId: y, channelId: D } = e,
        b = m ?? (() => {}),
        M = r().sanitizeUrl(e.href);
    if (null == M) {
        (null != t && t.preventDefault(),
            a.A.show({
                title: j.intl.string(j.t.x87gan),
                body: j.intl.format(j.t["9rqRwl"], { url: e.href }),
                isDismissable: !0,
                contextKey: s,
            }),
            b());
        return;
    }
    let P = M;
    try {
        decodeURI(M);
    } catch (e) {
        P = encodeURI(M);
    }
    let U = null,
        w = !1,
        G = y,
        x = D,
        k = null;
    if (null != y && null != D) {
        let e = B.A.getMessage(D, y),
            t = O.A.getBasicChannel(D);
        U = t?.guild_id ?? null;
        let n = R.A.getGuild(U),
            i =
                e?.messageReference?.guild_id != null &&
                e?.webhookId != null &&
                e?.hasFlag(h.pr7.IS_CROSSPOST) &&
                null != U;
        i && e?.messageReference?.guild_id != null
            ? ((G = e.messageReference.message_id),
              (x = e.messageReference.channel_id),
              (k = e.messageReference.guild_id))
            : (k = U);
        let r = t?.type === h.rbe.GUILD_ANNOUNCEMENT && n?.features.has(h.GuildFeatures.COMMUNITY) === !0,
            a = e?.hasFlag(h.pr7.EPHEMERAL) === !0;
        w = null != e && !a && (i || r);
    }
    if (null != D) {
        let e = O.A.getChannel(D),
            t = R.A.getGuild(e?.getGuildId());
        (null != e &&
            null != t &&
            t.features.has(h.GuildFeatures.DISCOVERABLE) &&
            A.default.track(h.HAw.URL_CLICKED, { url_domain: (0, v.E)(P), guild_id: t.id, channel_id: e.id }),
            (0, f.A)(D) && A.default.track(h.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: P }));
    }
    if ((p.A.trackLinkClicked(P), null != u)) {
        if (u(t)) return;
    } else {
        let { default: e } = n(983555),
            r = e(P, { skipExtensionCheck: void 0, analyticsLocations: i, messageId: y, channelId: D });
        if (null != r && r(t)) return;
    }
    function V() {
        (w &&
            p.A.trackAnnouncementMessageLinkClicked({
                messageId: G,
                channelId: D,
                guildId: U,
                sourceChannelId: x,
                sourceGuildId: k,
            }),
        null != E)
            ? E()
            : (0, d.A)(P);
    }
    if (null !== I.isBlockedDomain(P)) {
        (t?.preventDefault(), _.show(P), b());
        return;
    }
    if (null != (0, C.m)(P)) {
        (t?.preventDefault(), N.A.show(P), b());
        return;
    }
    let H = ("function" == typeof c ? c() : c) || S.has(P),
        W = (0, v.J)(P),
        Y = "http:" !== W && "https:" !== W;
    if ((!Y && (H || F.isTrustedDomain(P))) || (Y && F.isTrustedProtocol(P)))
        return void (null == t || (null != L && L)
            ? V()
            : w &&
              p.A.trackAnnouncementMessageLinkClicked({
                  messageId: G,
                  channelId: D,
                  guildId: U,
                  sourceChannelId: x,
                  sourceGuildId: k,
              }));
    if ((null != t && t.preventDefault(), Y))
        g.show({ url: P, trustUrl: o, onConfirm: V, onCancel: b, isProtocol: !0, contextKey: s });
    else {
        let e = (0, T.W1)(P),
            t = null != e ? e.displayTarget : P;
        g.show({ url: t, trustUrl: l, onConfirm: V, onCancel: b, isProtocol: !1, contextKey: s });
    }
}
