n.d(t, {
    q: () => P,
    r: () => N,
});
var r = n(159635),
    i = n.n(r),
    a = n(668781),
    o = n(45986),
    s = n(782568),
    l = n(704133),
    c = n(139674),
    u = n(702321),
    d = n(900460),
    f = n(627714),
    p = n(364640),
    _ = n(772096),
    m = n(982806),
    h = n(540709),
    g = n(881706),
    E = n(592125),
    b = n(430824),
    y = n(20303),
    O = n(902676),
    v = n(375954),
    S = n(699516),
    I = n(944486),
    T = n(626135),
    A = n(981631),
    C = n(388032);
function N(e, t) {
    var n;
    let r = E.Z.getChannel(I.Z.getChannelId());
    return (null == r || r.type !== A.d4z.DM || !!S.Z.isFriend(null != (n = r.getRecipientId()) ? n : "")) && e === t;
}
function P(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        S = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: I, onClick: N, onConfirm: P, onCancel: R, shouldConfirm: D, messageId: w, channelId: x } = e,
        L = i().sanitizeUrl(e.href);
    if (null == L) {
        null != t && t.preventDefault(),
            a.Z.show({
                title: C.intl.string(C.t.x87gan),
                body: C.intl.format(C.t["9rqRwl"], { url: e.href }),
                isDismissable: !0,
                contextKey: S,
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
        U = w,
        G = x,
        Z = null;
    if (null != w && null != x) {
        var B, F, V;
        let e = v.Z.getMessage(x, w),
            t = E.Z.getBasicChannel(x);
        M = null != (V = null == t ? void 0 : t.guild_id) ? V : null;
        let n = b.Z.getGuild(M),
            r =
                (null == e || null == (B = e.messageReference) ? void 0 : B.guild_id) != null &&
                (null == e ? void 0 : e.webhookId) != null &&
                (null == e ? void 0 : e.hasFlag(A.iLy.IS_CROSSPOST)) &&
                null != M;
        r && (null == e || null == (F = e.messageReference) ? void 0 : F.guild_id) != null
            ? ((U = e.messageReference.message_id),
              (G = e.messageReference.channel_id),
              (Z = e.messageReference.guild_id))
            : (Z = M);
        let i =
                (null == t ? void 0 : t.type) === A.d4z.GUILD_ANNOUNCEMENT &&
                (null == n ? void 0 : n.features.has(A.GuildFeatures.COMMUNITY)) === !0,
            a = (null == e ? void 0 : e.hasFlag(A.iLy.EPHEMERAL)) === !0;
        k = null != e && !a && (r || i);
    }
    if (null != x) {
        let e = E.Z.getChannel(x),
            t = b.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != t &&
            t.features.has(A.GuildFeatures.DISCOVERABLE) &&
            T.default.track(A.rMx.URL_CLICKED, {
                url_domain: (0, O.F)(j),
                guild_id: t.id,
                channel_id: e.id,
            }),
            (0, u.Z)(x) &&
                T.default.track(A.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: "inline_link",
                    target: j,
                });
    }
    if ((p.Z.trackLinkClicked(j), null != N)) {
        if (N(t)) return;
    } else {
        let { default: e } = n(315263),
            i = e(j, {
                skipExtensionCheck: void 0,
                analyticsLocations: r,
            });
        if (null != i && i(t)) return;
    }
    let H = () => {
            if (
                (k &&
                    p.Z.trackAnnouncementMessageLinkClicked({
                        messageId: U,
                        channelId: x,
                        guildId: M,
                        sourceChannelId: G,
                        sourceGuildId: Z,
                    }),
                null != P)
            )
                return void P();
            (0, s.Z)(j);
        },
        Y = null != R ? R : () => {};
    if (null !== c.Z.isBlockedDomain(j)) {
        null == t || t.preventDefault(), l.Z.show(j);
        return;
    }
    if (null != (0, g.v)(j)) {
        null == t || t.preventDefault(), h.Z.show(j);
        return;
    }
    if ((0, f.I)(j)) {
        null == t || t.preventDefault(), d.Z.show(j);
        return;
    }
    let W = "function" == typeof I ? I() : I,
        K = (0, O.E)(j),
        z = "http:" !== K && "https:" !== K;
    if ((!z && (W || y.Z.isTrustedDomain(j))) || (z && y.Z.isTrustedProtocol(j)))
        return void (null == t || (null != D && D)
            ? H()
            : k &&
              p.Z.trackAnnouncementMessageLinkClicked({
                  messageId: U,
                  channelId: x,
                  guildId: M,
                  sourceChannelId: G,
                  sourceGuildId: Z,
              }));
    if ((null != t && t.preventDefault(), z))
        m.Z.show({
            url: j,
            trustUrl: o.u,
            onConfirm: H,
            onCancel: Y,
            isProtocol: !0,
            contextKey: S,
        });
    else {
        let e = (0, _.yw)(j),
            t = null != e ? e.displayTarget : j;
        m.Z.show({
            url: t,
            trustUrl: o.o,
            onConfirm: H,
            onCancel: Y,
            isProtocol: !1,
            contextKey: S,
        });
    }
}
