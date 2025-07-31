n.d(t, {
    q: () => R,
    r: () => C
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
    _ = n(627714),
    f = n(364640),
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
    N = n(388032);
function C(e, t) {
    var n;
    let r = E.Z.getChannel(T.Z.getChannelId());
    return (null == r || r.type !== A.d4z.DM || !!I.Z.isFriend(null != (n = r.getRecipientId()) ? n : '')) && e === t;
}
function R(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        I = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: T, onClick: C, onConfirm: R, onCancel: P, shouldConfirm: w, messageId: D, channelId: L } = e,
        x = i().sanitizeUrl(e.href);
    if (null == x) {
        (null != t && t.preventDefault(),
            a.Z.show({
                title: N.intl.string(N.t.x87gam),
                body: N.intl.format(N.t['9rqRws'], { url: e.href }),
                isDismissable: !0,
                contextKey: I
            }));
        return;
    }
    let k = x;
    try {
        decodeURI(x);
    } catch (e) {
        k = encodeURI(x);
    }
    let M = null,
        j = !1,
        U = D,
        G = L,
        B = null;
    if (null != D && null != L) {
        var V, F, Z;
        let e = v.Z.getMessage(L, D),
            t = E.Z.getBasicChannel(L);
        M = null != (Z = null == t ? void 0 : t.guild_id) ? Z : null;
        let n = b.Z.getGuild(M),
            r = (null == e || null == (V = e.messageReference) ? void 0 : V.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(A.iLy.IS_CROSSPOST)) && null != M;
        r && (null == e || null == (F = e.messageReference) ? void 0 : F.guild_id) != null ? ((U = e.messageReference.message_id), (G = e.messageReference.channel_id), (B = e.messageReference.guild_id)) : (B = M);
        let i = (null == t ? void 0 : t.type) === A.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.features.has(A.oNc.COMMUNITY)) === !0,
            a = (null == e ? void 0 : e.hasFlag(A.iLy.EPHEMERAL)) === !0;
        j = null != e && !a && (r || i);
    }
    if (null != L) {
        let e = E.Z.getChannel(L),
            t = b.Z.getGuild(null == e ? void 0 : e.getGuildId());
        (null != e &&
            null != t &&
            t.features.has(A.oNc.DISCOVERABLE) &&
            S.default.track(A.rMx.URL_CLICKED, {
                url_domain: (0, O.F)(k),
                guild_id: t.id,
                channel_id: e.id
            }),
            (0, u.Z)(L) &&
                S.default.track(A.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: 'inline_link',
                    target: k
                }));
    }
    if ((f.Z.trackLinkClicked(k), null != C)) {
        if (C(t)) return;
    } else {
        let { default: e } = n(315263),
            i = e(k, {
                skipExtensionCheck: void 0,
                analyticsLocations: r
            });
        if (null != i && i(t)) return;
    }
    let H = () => {
            if (
                (j &&
                    f.Z.trackAnnouncementMessageLinkClicked({
                        messageId: U,
                        channelId: L,
                        guildId: M,
                        sourceChannelId: G,
                        sourceGuildId: B
                    }),
                null != R)
            )
                return void R();
            (0, s.Z)(k);
        },
        Y = null != P ? P : () => {};
    if (null !== c.Z.isBlockedDomain(k)) {
        (null == t || t.preventDefault(), l.Z.show(k));
        return;
    }
    if (null != (0, g.v)(k)) {
        (null == t || t.preventDefault(), m.Z.show(k));
        return;
    }
    if ((0, _.I)(k)) {
        (null == t || t.preventDefault(), d.Z.show(k));
        return;
    }
    let W = 'function' == typeof T ? T() : T,
        K = (0, O.E)(k),
        z = 'http:' !== K && 'https:' !== K;
    if ((!z && (W || y.Z.isTrustedDomain(k))) || (z && y.Z.isTrustedProtocol(k)))
        return void (null == t || (null != w && w)
            ? H()
            : j &&
              f.Z.trackAnnouncementMessageLinkClicked({
                  messageId: U,
                  channelId: L,
                  guildId: M,
                  sourceChannelId: G,
                  sourceGuildId: B
              }));
    if ((null != t && t.preventDefault(), z))
        h.Z.show({
            url: k,
            trustUrl: o.u,
            onConfirm: H,
            onCancel: Y,
            isProtocol: !0,
            contextKey: I
        });
    else {
        let e = (0, p.yw)(k),
            t = null != e ? e.displayTarget : k;
        h.Z.show({
            url: t,
            trustUrl: o.o,
            onConfirm: H,
            onCancel: Y,
            isProtocol: !1,
            contextKey: I
        });
    }
}
