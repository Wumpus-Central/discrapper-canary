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
    s = r(668781),
    o = r(45986),
    l = r(782568),
    u = r(704133),
    c = r(139674),
    d = r(702321),
    f = r(900460),
    _ = r(627714),
    h = r(364640),
    p = r(772096),
    m = r(982806),
    g = r(540709),
    E = r(881706),
    v = r(592125),
    I = r(430824),
    T = r(20303),
    b = r(902676),
    y = r(375954),
    S = r(699516),
    A = r(944486),
    N = r(626135),
    C = r(981631),
    R = r(388032);
function O(e, n) {
    var r;
    let i = v.Z.getChannel(A.Z.getChannelId());
    return !!(null == i || i.type !== C.d4z.DM || S.Z.isFriend(null !== (r = i.getRecipientId()) && void 0 !== r ? r : '')) && e === n;
}
function D(e, n) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        S = arguments.length > 3 ? arguments[3] : void 0,
        { trusted: A, onClick: O, onConfirm: D, onCancel: L, shouldConfirm: x, messageId: w, channelId: P } = e,
        M = a().sanitizeUrl(e.href);
    if (null == M) {
        null != n && n.preventDefault(),
            s.Z.show({
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
        let e = y.Z.getMessage(P, w),
            n = v.Z.getBasicChannel(P);
        U = null !== (H = null == n ? void 0 : n.guild_id) && void 0 !== H ? H : null;
        let r = I.Z.getGuild(U),
            i = (null == e ? void 0 : null === (V = e.messageReference) || void 0 === V ? void 0 : V.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(C.iLy.IS_CROSSPOST)) && null != U;
        i && (null == e ? void 0 : null === (j = e.messageReference) || void 0 === j ? void 0 : j.guild_id) != null ? ((G = e.messageReference.message_id), (Z = e.messageReference.channel_id), (F = e.messageReference.guild_id)) : (F = U);
        let a = (null == n ? void 0 : n.type) === C.d4z.GUILD_ANNOUNCEMENT && (null == r ? void 0 : r.hasFeature(C.oNc.COMMUNITY)) === !0,
            s = (null == e ? void 0 : e.hasFlag(C.iLy.EPHEMERAL)) === !0;
        B = null != e && !s && (i || a);
    }
    if (null != P) {
        let e = v.Z.getChannel(P),
            n = I.Z.getGuild(null == e ? void 0 : e.getGuildId());
        null != e &&
            null != n &&
            n.hasFeature(C.oNc.DISCOVERABLE) &&
            N.default.track(C.rMx.URL_CLICKED, {
                url_domain: (0, b.F)(k),
                guild_id: n.id,
                channel_id: e.id
            }),
            (0, d.Z)(P) &&
                N.default.track(C.rMx.CHANGE_LOG_CTA_CLICKED, {
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
        W = null != L ? L : () => {};
    if (null !== c.Z.isBlockedDomain(k)) {
        null == n || n.preventDefault(), u.Z.show(k);
        return;
    }
    if (null != (0, E.v)(k)) {
        null == n || n.preventDefault(), g.Z.show(k);
        return;
    }
    if ((0, _.I)(k)) {
        null == n || n.preventDefault(), f.Z.show(k);
        return;
    }
    let K = 'function' == typeof A ? A() : A,
        z = (0, b.E)(k),
        q = !('http:' === z || 'https:' === z);
    if ((!q && (K || T.Z.isTrustedDomain(k))) || (q && T.Z.isTrustedProtocol(k))) {
        null == n || (null != x && x)
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
            trustUrl: o.u,
            onConfirm: Y,
            onCancel: W,
            isProtocol: !0,
            contextKey: S
        });
    else {
        let e = (0, p.yw)(k),
            n = null != e ? e.displayTarget : k;
        m.Z.show({
            url: n,
            trustUrl: o.o,
            onConfirm: Y,
            onCancel: W,
            isProtocol: !1,
            contextKey: S
        });
    }
}
