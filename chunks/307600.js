"use strict";
n.d(t, { h: () => D, m: () => b });
var r = n(791332),
    i = n.n(r),
    s = n(157559),
    a = n(318972),
    o = n(975807),
    l = n(73539),
    u = n(754450),
    c = n(343328),
    d = n(868582),
    _ = n(784947),
    f = n(235393),
    p = n(694403),
    h = n(953866),
    E = n(249324),
    m = n(788995),
    g = n(556022),
    A = n(734057),
    I = n(71393),
    T = n(259439),
    S = n(155078),
    y = n(320501),
    N = n(994500),
    v = n(309010),
    C = n(954571),
    O = n(652215),
    R = n(985018);
function b(e, t) {
    let n = A.A.getChannel(v.A.getChannelId());
    return (null == n || n.type !== O.rbe.DM || !!N.A.isFriend(n.getRecipientId() ?? "")) && e === t;
}
function D(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        N = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: v, onClick: b, onConfirm: D, onCancel: L, shouldConfirm: w, messageId: M, channelId: P } = e,
        x = i().sanitizeUrl(e.href);
    if (null == x) {
        null != t && t.preventDefault(),
            s.A.show({
                title: R.intl.string(R.t.x87gan),
                body: R.intl.format(R.t["9rqRwl"], { url: e.href }),
                isDismissable: !0,
                contextKey: N,
            });
        return;
    }
    let k = x;
    try {
        decodeURI(x);
    } catch (e) {
        k = encodeURI(x);
    }
    let U = null,
        G = !1,
        F = M,
        V = P,
        B = null;
    if (null != M && null != P) {
        let e = y.A.getMessage(P, M),
            t = A.A.getBasicChannel(P);
        U = t?.guild_id ?? null;
        let n = I.A.getGuild(U),
            r =
                e?.messageReference?.guild_id != null &&
                e?.webhookId != null &&
                e?.hasFlag(O.pr7.IS_CROSSPOST) &&
                null != U;
        r && e?.messageReference?.guild_id != null
            ? ((F = e.messageReference.message_id),
              (V = e.messageReference.channel_id),
              (B = e.messageReference.guild_id))
            : (B = U);
        let i = t?.type === O.rbe.GUILD_ANNOUNCEMENT && n?.features.has(O.GuildFeatures.COMMUNITY) === !0,
            s = e?.hasFlag(O.pr7.EPHEMERAL) === !0;
        G = null != e && !s && (r || i);
    }
    if (null != P) {
        let e = A.A.getChannel(P),
            t = I.A.getGuild(e?.getGuildId());
        null != e &&
            null != t &&
            t.features.has(O.GuildFeatures.DISCOVERABLE) &&
            C.default.track(O.HAw.URL_CLICKED, { url_domain: (0, S.E)(k), guild_id: t.id, channel_id: e.id }),
            (0, c.A)(P) && C.default.track(O.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: k });
    }
    if ((f.A.trackLinkClicked(k), null != b)) {
        if (b(t)) return;
    } else {
        let { default: e } = n(352423),
            i = e(k, { skipExtensionCheck: void 0, analyticsLocations: r, messageId: M });
        if (null != i && i(t)) return;
    }
    let H = () => {
            (G &&
                f.A.trackAnnouncementMessageLinkClicked({
                    messageId: F,
                    channelId: P,
                    guildId: U,
                    sourceChannelId: V,
                    sourceGuildId: B,
                }),
            null != D)
                ? D()
                : (0, o.A)(k);
        },
        j = L ?? (() => {});
    if (null !== u.A.isBlockedDomain(k)) {
        t?.preventDefault(), l.A.show(k);
        return;
    }
    if (null != (0, g.m)(k)) {
        t?.preventDefault(), m.A.show(k);
        return;
    }
    if ((0, _.Y)(k)) {
        t?.preventDefault(), d.A.show(k);
        return;
    }
    let Y = ("function" == typeof v ? v() : v) || E.j.has(k),
        W = (0, S.J)(k),
        K = "http:" !== W && "https:" !== W;
    if ((!K && (Y || T.A.isTrustedDomain(k))) || (K && T.A.isTrustedProtocol(k)))
        return void (null == t || (null != w && w)
            ? H()
            : G &&
              f.A.trackAnnouncementMessageLinkClicked({
                  messageId: F,
                  channelId: P,
                  guildId: U,
                  sourceChannelId: V,
                  sourceGuildId: B,
              }));
    if ((null != t && t.preventDefault(), K))
        h.A.show({ url: k, trustUrl: a.u, onConfirm: H, onCancel: j, isProtocol: !0, contextKey: N });
    else {
        let e = (0, p.W1)(k),
            t = null != e ? e.displayTarget : k;
        h.A.show({ url: t, trustUrl: a.b, onConfirm: H, onCancel: j, isProtocol: !1, contextKey: N });
    }
}
