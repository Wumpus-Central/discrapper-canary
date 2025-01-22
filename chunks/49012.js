r.d(n, {
    q: function () {
        return D;
    },
    r: function () {
        return O;
    }
});
var i = r(477660),
    a = r.n(i),
    o = r(668781),
    s = r(45986),
    l = r(782568),
    u = r(704133),
    c = r(139674),
    d = r(702321),
    f = r(900460),
    p = r(627714),
    h = r(364640),
    _ = r(772096),
    m = r(982806),
    g = r(540709),
    E = r(881706),
    v = r(592125),
    y = r(430824),
    b = r(20303),
    I = r(902676),
    T = r(375954),
    S = r(699516),
    A = r(944486),
    C = r(626135),
    N = r(981631),
    R = r(388032);
function O(e, n) {
    var r;
    let i = v.Z.getChannel(A.Z.getChannelId());
    return !!(null == i || i.type !== N.d4z.DM || S.Z.isFriend(null !== (r = i.getRecipientId()) && void 0 !== r ? r : '')) && e === n;
}
function D(e, n) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        S = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: A, onClick: O, onConfirm: D, onCancel: x, shouldConfirm: L, messageId: w, channelId: P } = e,
        M = a().sanitizeUrl(e.href);
    if (null == M) {
        null != n && n.preventDefault(),
            o.Z.show({
                title: R.intl.string(R.t.x87gam),
                body: R.intl.format(R.t['9rqRws'], { url: e.href }),
                isDismissable: !0,
                contextKey: S
            });
        return;
    }
    let k = M;
    try {
        decodeURI(M);
    } catch (e) {
        k = encodeURI(M);
    }
    let U = null,
        B = !1,
        G = w,
        Z = P,
        F = null;
    if (null != w && null != P) {
        var V, j, H;
        let e = T.Z.getMessage(P, w),
            n = v.Z.getBasicChannel(P);
        U = null !== (H = null == n ? void 0 : n.guild_id) && void 0 !== H ? H : null;
        let r = y.Z.getGuild(U),
            i = (null == e ? void 0 : null === (V = e.messageReference) || void 0 === V ? void 0 : V.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(N.iLy.IS_CROSSPOST)) && null != U;
        i && (null == e ? void 0 : null === (j = e.messageReference) || void 0 === j ? void 0 : j.guild_id) != null ? ((G = e.messageReference.message_id), (Z = e.messageReference.channel_id), (F = e.messageReference.guild_id)) : (F = U);
        let a = (null == n ? void 0 : n.type) === N.d4z.GUILD_ANNOUNCEMENT && (null == r ? void 0 : r.hasFeature(N.oNc.COMMUNITY)) === !0,
            o = (null == e ? void 0 : e.hasFlag(N.iLy.EPHEMERAL)) === !0;
        B = null != e && !o && (i || a);
    }
    if (null != P) {
        let e = v.Z.getChannel(P),
            n = y.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != n &&
            n.hasFeature(N.oNc.DISCOVERABLE) &&
            C.default.track(N.rMx.URL_CLICKED, {
                url_domain: (0, I.F)(k),
                guild_id: n.id,
                channel_id: e.id
            }),
            (0, d.Z)(P) &&
                C.default.track(N.rMx.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: 'inline_link',
                    target: k
                });
    }
    if ((h.Z.trackLinkClicked(k), null != O)) {
        if (O(n)) return;
    } else {
        let { default: e } = r(315263),
            a = e(k, {
                skipExtensionCheck: void 0,
                analyticsLocations: i
            });
        if (null != a && a(n)) return;
    }
    let Y = () => {
            if (
                (B &&
                    h.Z.trackAnnouncementMessageLinkClicked({
                        messageId: G,
                        channelId: P,
                        guildId: U,
                        sourceChannelId: Z,
                        sourceGuildId: F
                    }),
                null != D)
            ) {
                D();
                return;
            }
            (0, l.Z)(k);
        },
        W = null != x ? x : () => {};
    if (null !== c.Z.isBlockedDomain(k)) {
        null == n || n.preventDefault(), u.Z.show(k);
        return;
    }
    if (null != (0, E.v)(k)) {
        null == n || n.preventDefault(), g.Z.show(k);
        return;
    }
    if ((0, p.I)(k)) {
        null == n || n.preventDefault(), f.Z.show(k);
        return;
    }
    let K = 'function' == typeof A ? A() : A,
        z = (0, I.E)(k),
        q = !('http:' === z || 'https:' === z);
    if ((!q && (K || b.Z.isTrustedDomain(k))) || (q && b.Z.isTrustedProtocol(k))) {
        null == n || (null != L && L)
            ? Y()
            : B &&
              h.Z.trackAnnouncementMessageLinkClicked({
                  messageId: G,
                  channelId: P,
                  guildId: U,
                  sourceChannelId: Z,
                  sourceGuildId: F
              });
        return;
    }
    if ((null != n && n.preventDefault(), q))
        m.Z.show({
            url: k,
            trustUrl: s.u,
            onConfirm: Y,
            onCancel: W,
            isProtocol: !0,
            contextKey: S
        });
    else {
        let e = (0, _.yw)(k),
            n = null != e ? e.displayTarget : k;
        m.Z.show({
            url: n,
            trustUrl: s.o,
            onConfirm: Y,
            onCancel: W,
            isProtocol: !1,
            contextKey: S
        });
    }
}
