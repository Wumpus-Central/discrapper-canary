n.d(t, {
    q: () => R,
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
    _ = n(364640),
    p = n(772096),
    h = n(982806),
    m = n(540709),
    g = n(881706),
    E = n(592125),
    b = n(430824),
    y = n(20303),
    O = n(902676),
    v = n(375954),
    I = n(699516),
    T = n(944486),
    S = n(626135),
    A = n(981631),
    C = n(388032);
function N(e, t) {
    var n;
    let r = E.Z.getChannel(T.Z.getChannelId());
    return (null == r || r.type !== A.d4z.DM || !!I.Z.isFriend(null != (n = r.getRecipientId()) ? n : "")) && e === t;
}
function R(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        I = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: T, onClick: N, onConfirm: R, onCancel: P, shouldConfirm: w, messageId: D, channelId: x } = e,
        L = i().sanitizeUrl(e.href);
    if (null == L) {
        null != t && t.preventDefault(),
            a.Z.show({
                title: C.intl.string(C.t.x87gan),
                body: C.intl.format(C.t["9rqRwl"], { url: e.href }),
                isDismissable: !0,
                contextKey: I,
            });
        return;
    }
    let M = L;
    try {
        decodeURI(L);
    } catch (e) {
        M = encodeURI(L);
    }
    let j = null,
        k = !1,
        U = D,
        G = x,
        B = null;
    if (null != D && null != x) {
        var Z, F, V;
        let e = v.Z.getMessage(x, D),
            t = E.Z.getBasicChannel(x);
        j = null != (V = null == t ? void 0 : t.guild_id) ? V : null;
        let n = b.Z.getGuild(j),
            r =
                (null == e || null == (Z = e.messageReference) ? void 0 : Z.guild_id) != null &&
                (null == e ? void 0 : e.webhookId) != null &&
                (null == e ? void 0 : e.hasFlag(A.iLy.IS_CROSSPOST)) &&
                null != j;
        r && (null == e || null == (F = e.messageReference) ? void 0 : F.guild_id) != null
            ? ((U = e.messageReference.message_id),
              (G = e.messageReference.channel_id),
              (B = e.messageReference.guild_id))
            : (B = j);
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
            S.default.track(A.rMx.URL_CLICKED, {
                url_domain: (0, O.F)(M),
                guild_id: t.id,
                channel_id: e.id,
            }),
            (0, u.Z)(x) &&
                S.default.track(A.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: "inline_link",
                    target: M,
                });
    }
    if ((_.Z.trackLinkClicked(M), null != N)) {
        if (N(t)) return;
    } else {
        let { default: e } = n(315263),
            i = e(M, {
                skipExtensionCheck: void 0,
                analyticsLocations: r,
            });
        if (null != i && i(t)) return;
    }
    let H = () => {
            if (
                (k &&
                    _.Z.trackAnnouncementMessageLinkClicked({
                        messageId: U,
                        channelId: x,
                        guildId: j,
                        sourceChannelId: G,
                        sourceGuildId: B,
                    }),
                null != R)
            )
                return void R();
            (0, s.Z)(M);
        },
        Y = null != P ? P : () => {};
    if (null !== c.Z.isBlockedDomain(M)) {
        null == t || t.preventDefault(), l.Z.show(M);
        return;
    }
    if (null != (0, g.v)(M)) {
        null == t || t.preventDefault(), m.Z.show(M);
        return;
    }
    if ((0, f.I)(M)) {
        null == t || t.preventDefault(), d.Z.show(M);
        return;
    }
    let W = "function" == typeof T ? T() : T,
        K = (0, O.E)(M),
        z = "http:" !== K && "https:" !== K;
    if ((!z && (W || y.Z.isTrustedDomain(M))) || (z && y.Z.isTrustedProtocol(M)))
        return void (null == t || (null != w && w)
            ? H()
            : k &&
              _.Z.trackAnnouncementMessageLinkClicked({
                  messageId: U,
                  channelId: x,
                  guildId: j,
                  sourceChannelId: G,
                  sourceGuildId: B,
              }));
    if ((null != t && t.preventDefault(), z))
        h.Z.show({
            url: M,
            trustUrl: o.u,
            onConfirm: H,
            onCancel: Y,
            isProtocol: !0,
            contextKey: I,
        });
    else {
        let e = (0, p.yw)(M),
            t = null != e ? e.displayTarget : M;
        h.Z.show({
            url: t,
            trustUrl: o.o,
            onConfirm: H,
            onCancel: Y,
            isProtocol: !1,
            contextKey: I,
        });
    }
}
