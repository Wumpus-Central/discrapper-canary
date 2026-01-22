n.d(t, {
    h: () => R,
    m: () => N,
});
var r = n(280230),
    i = n.n(r),
    a = n(157559),
    s = n(318972),
    o = n(975807),
    l = n(73539),
    c = n(754450),
    u = n(343328),
    d = n(868582),
    f = n(784947),
    p = n(235393),
    _ = n(694403),
    h = n(953866),
    m = n(788995),
    g = n(556022),
    E = n(734057),
    b = n(71393),
    y = n(259439),
    O = n(155078),
    A = n(320501),
    v = n(994500),
    S = n(309010),
    I = n(954571),
    T = n(652215),
    C = n(985018);

function N(e, t) {
    var n;
    let r = E.A.getChannel(S.A.getChannelId());
    return (null == r || r.type !== T.rbe.DM || !!v.A.isFriend(null != (n = r.getRecipientId()) ? n : "")) && e === t;
}

function R(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        v = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: S, onClick: N, onConfirm: R, onCancel: w, shouldConfirm: P, messageId: D, channelId: x } = e,
        L = i().sanitizeUrl(e.href);
    if (null == L) {
        null != t && t.preventDefault(),
            a.A.show({
                title: C.intl.string(C.t.x87gan),
                body: C.intl.format(C.t["9rqRwl"], {
                    url: e.href,
                }),
                isDismissable: !0,
                contextKey: v,
            });
        return;
    }
    let j = L;
    try {
        decodeURI(L);
    } catch (e) {
        j = encodeURI(L);
    }
    let M = null,
        k = !1,
        U = D,
        G = x,
        V = null;
    if (null != D && null != x) {
        var F, B, H;
        let e = A.A.getMessage(x, D),
            t = E.A.getBasicChannel(x);
        M = null != (F = null == t ? void 0 : t.guild_id) ? F : null;
        let n = b.A.getGuild(M),
            r =
                (null == e || null == (B = e.messageReference) ? void 0 : B.guild_id) != null &&
                (null == e ? void 0 : e.webhookId) != null &&
                (null == e ? void 0 : e.hasFlag(T.pr7.IS_CROSSPOST)) &&
                null != M;
        r && (null == e || null == (H = e.messageReference) ? void 0 : H.guild_id) != null
            ? ((U = e.messageReference.message_id),
              (G = e.messageReference.channel_id),
              (V = e.messageReference.guild_id))
            : (V = M);
        let i =
                (null == t ? void 0 : t.type) === T.rbe.GUILD_ANNOUNCEMENT &&
                (null == n ? void 0 : n.features.has(T.GuildFeatures.COMMUNITY)) === !0,
            a = (null == e ? void 0 : e.hasFlag(T.pr7.EPHEMERAL)) === !0;
        k = null != e && !a && (r || i);
    }
    if (null != x) {
        let e = E.A.getChannel(x),
            t = b.A.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != t &&
            t.features.has(T.GuildFeatures.DISCOVERABLE) &&
            I.default.track(T.HAw.URL_CLICKED, {
                url_domain: (0, O.E)(j),
                guild_id: t.id,
                channel_id: e.id,
            }),
            (0, u.A)(x) &&
                I.default.track(T.HAw.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: "inline_link",
                    target: j,
                });
    }
    if ((p.A.trackLinkClicked(j), null != N)) {
        if (N(t)) return;
    } else {
        let { default: e } = n(352423),
            i = e(j, {
                skipExtensionCheck: void 0,
                analyticsLocations: r,
            });
        if (null != i && i(t)) return;
    }
    let Y = () => {
            (k &&
                p.A.trackAnnouncementMessageLinkClicked({
                    messageId: U,
                    channelId: x,
                    guildId: M,
                    sourceChannelId: G,
                    sourceGuildId: V,
                }),
            null != R)
                ? R()
                : (0, o.A)(j);
        },
        W = null != w ? w : () => {};
    if (null !== c.A.isBlockedDomain(j)) {
        null == t || t.preventDefault(), l.A.show(j);
        return;
    }
    if (null != (0, g.m)(j)) {
        null == t || t.preventDefault(), m.A.show(j);
        return;
    }
    if ((0, f.Y)(j)) {
        null == t || t.preventDefault(), d.A.show(j);
        return;
    }
    let K = "function" == typeof S ? S() : S,
        z = (0, O.J)(j),
        q = "http:" !== z && "https:" !== z;
    if ((!q && (K || y.A.isTrustedDomain(j))) || (q && y.A.isTrustedProtocol(j)))
        return void (null == t || (null != P && P)
            ? Y()
            : k &&
              p.A.trackAnnouncementMessageLinkClicked({
                  messageId: U,
                  channelId: x,
                  guildId: M,
                  sourceChannelId: G,
                  sourceGuildId: V,
              }));
    if ((null != t && t.preventDefault(), q))
        h.A.show({
            url: j,
            trustUrl: s.u,
            onConfirm: Y,
            onCancel: W,
            isProtocol: !0,
            contextKey: v,
        });
    else {
        let e = (0, _.W1)(j),
            t = null != e ? e.displayTarget : j;
        h.A.show({
            url: t,
            trustUrl: s.b,
            onConfirm: Y,
            onCancel: W,
            isProtocol: !1,
            contextKey: v,
        });
    }
}
