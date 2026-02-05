"use strict";
n.d(t, { h: () => O, m: () => R });
var r = n(791332),
    i = n.n(r),
    a = n(157559),
    s = n(318972),
    o = n(975807),
    l = n(73539),
    u = n(754450),
    c = n(343328),
    d = n(868582),
    _ = n(784947),
    f = n(235393),
    p = n(694403),
    h = n(953866),
    m = n(788995),
    g = n(556022),
    E = n(734057),
    A = n(71393),
    I = n(259439),
    T = n(155078),
    y = n(320501),
    S = n(994500),
    v = n(309010),
    C = n(954571),
    b = n(652215),
    N = n(985018);
function R(e, t) {
    let n = E.A.getChannel(v.A.getChannelId());
    return (null == n || n.type !== b.rbe.DM || !!S.A.isFriend(n.getRecipientId() ?? "")) && e === t;
}
function O(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        S = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: v, onClick: R, onConfirm: O, onCancel: D, shouldConfirm: L, messageId: w, channelId: x } = e,
        P = i().sanitizeUrl(e.href);
    if (null == P) {
        null != t && t.preventDefault(),
            a.A.show({
                title: N.intl.string(N.t.x87gan),
                body: N.intl.format(N.t["9rqRwl"], { url: e.href }),
                isDismissable: !0,
                contextKey: S,
            });
        return;
    }
    let M = P;
    try {
        decodeURI(P);
    } catch (e) {
        M = encodeURI(P);
    }
    let k = null,
        U = !1,
        G = w,
        V = x,
        F = null;
    if (null != w && null != x) {
        let e = y.A.getMessage(x, w),
            t = E.A.getBasicChannel(x);
        k = t?.guild_id ?? null;
        let n = A.A.getGuild(k),
            r =
                e?.messageReference?.guild_id != null &&
                e?.webhookId != null &&
                e?.hasFlag(b.pr7.IS_CROSSPOST) &&
                null != k;
        r && e?.messageReference?.guild_id != null
            ? ((G = e.messageReference.message_id),
              (V = e.messageReference.channel_id),
              (F = e.messageReference.guild_id))
            : (F = k);
        let i = t?.type === b.rbe.GUILD_ANNOUNCEMENT && n?.features.has(b.GuildFeatures.COMMUNITY) === !0,
            a = e?.hasFlag(b.pr7.EPHEMERAL) === !0;
        U = null != e && !a && (r || i);
    }
    if (null != x) {
        let e = E.A.getChannel(x),
            t = A.A.getGuild(e?.getGuildId());
        null != e &&
            null != t &&
            t.features.has(b.GuildFeatures.DISCOVERABLE) &&
            C.default.track(b.HAw.URL_CLICKED, { url_domain: (0, T.E)(M), guild_id: t.id, channel_id: e.id }),
            (0, c.A)(x) && C.default.track(b.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: M });
    }
    if ((f.A.trackLinkClicked(M), null != R)) {
        if (R(t)) return;
    } else {
        let { default: e } = n(352423),
            i = e(M, { skipExtensionCheck: void 0, analyticsLocations: r });
        if (null != i && i(t)) return;
    }
    let B = () => {
            (U &&
                f.A.trackAnnouncementMessageLinkClicked({
                    messageId: G,
                    channelId: x,
                    guildId: k,
                    sourceChannelId: V,
                    sourceGuildId: F,
                }),
            null != O)
                ? O()
                : (0, o.A)(M);
        },
        j = D ?? (() => {});
    if (null !== u.A.isBlockedDomain(M)) {
        t?.preventDefault(), l.A.show(M);
        return;
    }
    if (null != (0, g.m)(M)) {
        t?.preventDefault(), m.A.show(M);
        return;
    }
    if ((0, _.Y)(M)) {
        t?.preventDefault(), d.A.show(M);
        return;
    }
    let H = "function" == typeof v ? v() : v,
        Y = (0, T.J)(M),
        W = "http:" !== Y && "https:" !== Y;
    if ((!W && (H || I.A.isTrustedDomain(M))) || (W && I.A.isTrustedProtocol(M)))
        return void (null == t || (null != L && L)
            ? B()
            : U &&
              f.A.trackAnnouncementMessageLinkClicked({
                  messageId: G,
                  channelId: x,
                  guildId: k,
                  sourceChannelId: V,
                  sourceGuildId: F,
              }));
    if ((null != t && t.preventDefault(), W))
        h.A.show({ url: M, trustUrl: s.u, onConfirm: B, onCancel: j, isProtocol: !0, contextKey: S });
    else {
        let e = (0, p.W1)(M),
            t = null != e ? e.displayTarget : M;
        h.A.show({ url: t, trustUrl: s.b, onConfirm: B, onCancel: j, isProtocol: !1, contextKey: S });
    }
}
