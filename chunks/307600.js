"use strict";
n.d(t, { h: () => b, m: () => O });
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
    m = n(788995),
    E = n(556022),
    g = n(734057),
    A = n(71393),
    I = n(259439),
    T = n(155078),
    S = n(320501),
    y = n(994500),
    v = n(309010),
    N = n(954571),
    C = n(652215),
    R = n(985018);
function O(e, t) {
    let n = g.A.getChannel(v.A.getChannelId());
    return (null == n || n.type !== C.rbe.DM || !!y.A.isFriend(n.getRecipientId() ?? "")) && e === t;
}
function b(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        y = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: v, onClick: O, onConfirm: b, onCancel: D, shouldConfirm: L, messageId: w, channelId: M } = e,
        P = i().sanitizeUrl(e.href);
    if (null == P) {
        null != t && t.preventDefault(),
            s.A.show({
                title: R.intl.string(R.t.x87gan),
                body: R.intl.format(R.t["9rqRwl"], { url: e.href }),
                isDismissable: !0,
                contextKey: y,
            });
        return;
    }
    let x = P;
    try {
        decodeURI(P);
    } catch (e) {
        x = encodeURI(P);
    }
    let k = null,
        U = !1,
        G = w,
        F = M,
        V = null;
    if (null != w && null != M) {
        let e = S.A.getMessage(M, w),
            t = g.A.getBasicChannel(M);
        k = t?.guild_id ?? null;
        let n = A.A.getGuild(k),
            r =
                e?.messageReference?.guild_id != null &&
                e?.webhookId != null &&
                e?.hasFlag(C.pr7.IS_CROSSPOST) &&
                null != k;
        r && e?.messageReference?.guild_id != null
            ? ((G = e.messageReference.message_id),
              (F = e.messageReference.channel_id),
              (V = e.messageReference.guild_id))
            : (V = k);
        let i = t?.type === C.rbe.GUILD_ANNOUNCEMENT && n?.features.has(C.GuildFeatures.COMMUNITY) === !0,
            s = e?.hasFlag(C.pr7.EPHEMERAL) === !0;
        U = null != e && !s && (r || i);
    }
    if (null != M) {
        let e = g.A.getChannel(M),
            t = A.A.getGuild(e?.getGuildId());
        null != e &&
            null != t &&
            t.features.has(C.GuildFeatures.DISCOVERABLE) &&
            N.default.track(C.HAw.URL_CLICKED, { url_domain: (0, T.E)(x), guild_id: t.id, channel_id: e.id }),
            (0, c.A)(M) && N.default.track(C.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: x });
    }
    if ((f.A.trackLinkClicked(x), null != O)) {
        if (O(t)) return;
    } else {
        let { default: e } = n(352423),
            i = e(x, { skipExtensionCheck: void 0, analyticsLocations: r, messageId: w });
        if (null != i && i(t)) return;
    }
    let B = () => {
            (U &&
                f.A.trackAnnouncementMessageLinkClicked({
                    messageId: G,
                    channelId: M,
                    guildId: k,
                    sourceChannelId: F,
                    sourceGuildId: V,
                }),
            null != b)
                ? b()
                : (0, o.A)(x);
        },
        H = D ?? (() => {});
    if (null !== u.A.isBlockedDomain(x)) {
        t?.preventDefault(), l.A.show(x);
        return;
    }
    if (null != (0, E.m)(x)) {
        t?.preventDefault(), m.A.show(x);
        return;
    }
    if ((0, _.Y)(x)) {
        t?.preventDefault(), d.A.show(x);
        return;
    }
    let j = "function" == typeof v ? v() : v,
        Y = (0, T.J)(x),
        W = "http:" !== Y && "https:" !== Y;
    if ((!W && (j || I.A.isTrustedDomain(x))) || (W && I.A.isTrustedProtocol(x)))
        return void (null == t || (null != L && L)
            ? B()
            : U &&
              f.A.trackAnnouncementMessageLinkClicked({
                  messageId: G,
                  channelId: M,
                  guildId: k,
                  sourceChannelId: F,
                  sourceGuildId: V,
              }));
    if ((null != t && t.preventDefault(), W))
        h.A.show({ url: x, trustUrl: a.u, onConfirm: B, onCancel: H, isProtocol: !0, contextKey: y });
    else {
        let e = (0, p.W1)(x),
            t = null != e ? e.displayTarget : x;
        h.A.show({ url: t, trustUrl: a.b, onConfirm: B, onCancel: H, isProtocol: !1, contextKey: y });
    }
}
