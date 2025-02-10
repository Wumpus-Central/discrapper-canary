n.d(t, {
    q: () => O,
    r: () => R
});
var i = n(477660),
    r = n.n(i),
    a = n(668781),
    s = n(45986),
    o = n(782568),
    l = n(704133),
    u = n(139674),
    c = n(702321),
    d = n(900460),
    f = n(627714),
    _ = n(364640),
    p = n(772096),
    h = n(982806),
    m = n(540709),
    g = n(881706),
    E = n(592125),
    v = n(430824),
    y = n(20303),
    I = n(902676),
    T = n(375954),
    b = n(699516),
    S = n(944486),
    A = n(626135),
    N = n(981631),
    C = n(388032);
function R(e, t) {
    var n;
    let i = E.Z.getChannel(S.Z.getChannelId());
    return !!(null == i || i.type !== N.d4z.DM || b.Z.isFriend(null !== (n = i.getRecipientId()) && void 0 !== n ? n : '')) && e === t;
}
function O(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        b = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: S, onClick: R, onConfirm: O, onCancel: D, shouldConfirm: L, messageId: x, channelId: P } = e,
        w = r().sanitizeUrl(e.href);
    if (null == w) {
        null != t && t.preventDefault(),
            a.Z.show({
                title: C.intl.string(C.t.x87gam),
                body: C.intl.format(C.t['9rqRws'], { url: e.href }),
                isDismissable: !0,
                contextKey: b
            });
        return;
    }
    let M = w;
    try {
        decodeURI(w);
    } catch (e) {
        M = encodeURI(w);
    }
    let k = null,
        U = !1,
        G = x,
        B = P,
        Z = null;
    if (null != x && null != P) {
        var F, V, j;
        let e = T.Z.getMessage(P, x),
            t = E.Z.getBasicChannel(P);
        k = null !== (j = null == t ? void 0 : t.guild_id) && void 0 !== j ? j : null;
        let n = v.Z.getGuild(k),
            i = (null == e ? void 0 : null === (F = e.messageReference) || void 0 === F ? void 0 : F.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(N.iLy.IS_CROSSPOST)) && null != k;
        i && (null == e ? void 0 : null === (V = e.messageReference) || void 0 === V ? void 0 : V.guild_id) != null ? ((G = e.messageReference.message_id), (B = e.messageReference.channel_id), (Z = e.messageReference.guild_id)) : (Z = k);
        let r = (null == t ? void 0 : t.type) === N.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(N.oNc.COMMUNITY)) === !0,
            a = (null == e ? void 0 : e.hasFlag(N.iLy.EPHEMERAL)) === !0;
        U = null != e && !a && (i || r);
    }
    if (null != P) {
        let e = E.Z.getChannel(P),
            t = v.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != t &&
            t.hasFeature(N.oNc.DISCOVERABLE) &&
            A.default.track(N.rMx.URL_CLICKED, {
                url_domain: (0, I.F)(M),
                guild_id: t.id,
                channel_id: e.id
            }),
            (0, c.Z)(P) &&
                A.default.track(N.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: 'inline_link',
                    target: M
                });
    }
    if ((_.Z.trackLinkClicked(M), null != R)) {
        if (R(t)) return;
    } else {
        let { default: e } = n(315263),
            r = e(M, {
                skipExtensionCheck: void 0,
                analyticsLocations: i
            });
        if (null != r && r(t)) return;
    }
    let H = () => {
            if (
                (U &&
                    _.Z.trackAnnouncementMessageLinkClicked({
                        messageId: G,
                        channelId: P,
                        guildId: k,
                        sourceChannelId: B,
                        sourceGuildId: Z
                    }),
                null != O)
            ) {
                O();
                return;
            }
            (0, o.Z)(M);
        },
        Y = null != D ? D : () => {};
    if (null !== u.Z.isBlockedDomain(M)) {
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
    let W = 'function' == typeof S ? S() : S,
        K = (0, I.E)(M),
        z = !('http:' === K || 'https:' === K);
    if ((!z && (W || y.Z.isTrustedDomain(M))) || (z && y.Z.isTrustedProtocol(M))) {
        null == t || (null != L && L)
            ? H()
            : U &&
              _.Z.trackAnnouncementMessageLinkClicked({
                  messageId: G,
                  channelId: P,
                  guildId: k,
                  sourceChannelId: B,
                  sourceGuildId: Z
              });
        return;
    }
    if ((null != t && t.preventDefault(), z))
        h.Z.show({
            url: M,
            trustUrl: s.u,
            onConfirm: H,
            onCancel: Y,
            isProtocol: !0,
            contextKey: b
        });
    else {
        let e = (0, p.yw)(M),
            t = null != e ? e.displayTarget : M;
        h.Z.show({
            url: t,
            trustUrl: s.o,
            onConfirm: H,
            onCancel: Y,
            isProtocol: !1,
            contextKey: b
        });
    }
}
