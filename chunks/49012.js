n.d(t, {
    q: () => R,
    r: () => C
});
var r = n(477660),
    i = n.n(r),
    o = n(668781),
    a = n(45986),
    s = n(782568),
    l = n(704133),
    c = n(139674),
    u = n(702321),
    d = n(900460),
    f = n(627714),
    p = n(364640),
    _ = n(772096),
    h = n(982806),
    m = n(540709),
    g = n(881706),
    E = n(592125),
    v = n(430824),
    b = n(20303),
    y = n(902676),
    O = n(375954),
    S = n(699516),
    I = n(944486),
    T = n(626135),
    N = n(981631),
    A = n(388032);
function C(e, t) {
    var n;
    let r = E.Z.getChannel(I.Z.getChannelId());
    return !!(null == r || r.type !== N.d4z.DM || S.Z.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : '')) && e === t;
}
function R(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        S = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: I, onClick: C, onConfirm: R, onCancel: P, shouldConfirm: w, messageId: D, channelId: x } = e,
        L = i().sanitizeUrl(e.href);
    if (null == L) {
        null != t && t.preventDefault(),
            o.Z.show({
                title: A.NW.string(A.t.x87gam),
                body: A.NW.format(A.t['9rqRws'], { url: e.href }),
                isDismissable: !0,
                contextKey: S
            });
        return;
    }
    let M = L;
    try {
        decodeURI(L);
    } catch (e) {
        M = encodeURI(L);
    }
    let k = null,
        j = !1,
        U = D,
        G = x,
        B = null;
    if (null != D && null != x) {
        var Z, F, V;
        let e = O.Z.getMessage(x, D),
            t = E.Z.getBasicChannel(x);
        k = null !== (V = null == t ? void 0 : t.guild_id) && void 0 !== V ? V : null;
        let n = v.Z.getGuild(k),
            r = (null == e ? void 0 : null === (Z = e.messageReference) || void 0 === Z ? void 0 : Z.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(N.iLy.IS_CROSSPOST)) && null != k;
        r && (null == e ? void 0 : null === (F = e.messageReference) || void 0 === F ? void 0 : F.guild_id) != null ? ((U = e.messageReference.message_id), (G = e.messageReference.channel_id), (B = e.messageReference.guild_id)) : (B = k);
        let i = (null == t ? void 0 : t.type) === N.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(N.oNc.COMMUNITY)) === !0,
            o = (null == e ? void 0 : e.hasFlag(N.iLy.EPHEMERAL)) === !0;
        j = null != e && !o && (r || i);
    }
    if (null != x) {
        let e = E.Z.getChannel(x),
            t = v.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != t &&
            t.hasFeature(N.oNc.DISCOVERABLE) &&
            T.default.track(N.rMx.URL_CLICKED, {
                url_domain: (0, y.F)(M),
                guild_id: t.id,
                channel_id: e.id
            }),
            (0, u.Z)(x) &&
                T.default.track(N.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: 'inline_link',
                    target: M
                });
    }
    if ((p.Z.trackLinkClicked(M), null != C)) {
        if (C(t)) return;
    } else {
        let { default: e } = n(315263),
            i = e(M, {
                skipExtensionCheck: void 0,
                analyticsLocations: r
            });
        if (null != i && i(t)) return;
    }
    let H = () => {
            if (
                (j &&
                    p.Z.trackAnnouncementMessageLinkClicked({
                        messageId: U,
                        channelId: x,
                        guildId: k,
                        sourceChannelId: G,
                        sourceGuildId: B
                    }),
                null != R)
            ) {
                R();
                return;
            }
            (0, s.Z)(M);
        },
        W = null != P ? P : () => {};
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
    let Y = 'function' == typeof I ? I() : I,
        K = (0, y.E)(M),
        z = 'http:' !== K && 'https:' !== K;
    if ((!z && (Y || b.Z.isTrustedDomain(M))) || (z && b.Z.isTrustedProtocol(M))) {
        null == t || (null != w && w)
            ? H()
            : j &&
              p.Z.trackAnnouncementMessageLinkClicked({
                  messageId: U,
                  channelId: x,
                  guildId: k,
                  sourceChannelId: G,
                  sourceGuildId: B
              });
        return;
    }
    if ((null != t && t.preventDefault(), z))
        h.Z.show({
            url: M,
            trustUrl: a.u,
            onConfirm: H,
            onCancel: W,
            isProtocol: !0,
            contextKey: S
        });
    else {
        let e = (0, _.yw)(M),
            t = null != e ? e.displayTarget : M;
        h.Z.show({
            url: t,
            trustUrl: a.o,
            onConfirm: H,
            onCancel: W,
            isProtocol: !1,
            contextKey: S
        });
    }
}
