n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(25209),
    s = n(39154),
    o = n(35125),
    c = n(905405),
    d = n(628238),
    u = n(499401),
    h = n(693912),
    p = n(869765),
    m = n(699516),
    f = n(352736),
    g = n(937889),
    C = n(739566),
    x = n(267128),
    v = n(507418),
    _ = n(348238),
    I = n(981631),
    E = n(388032);
let b = l.memo(function (e) {
    var t;
    let { baseMessage: n, referencedMessage: b, channel: Z, compact: N = !1, referencedUsernameProfile: S, referencedAvatarProfile: T, setPopout: j, isReplySpineClickable: A, showReplySpine: y } = e,
        P = b.state === p.Y.LOADED ? b.message : void 0,
        M = (0, C.Uj)(P),
        R = (0, c.p)(),
        L = (0, d.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        k = l.useMemo(() => {
            if (null == P) return null;
            let e = (0, s.Z)(P);
            if (e.type === I.uaV.USER_JOIN) {
                let t = f.Z.getWelcomeMessageKind(Z.guild_id);
                return (0, a.Rp)(
                    E.intl.formatToParts(f.Z.getSystemMessageUserJoin(e.id, t), {
                        username: null != M ? M.nick : e.author.username,
                        usernameHook: (e) => e
                    })
                );
            }
            if (e.type === I.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, a.Rp)(
                    (0, o.PA)({
                        username: null != M ? M.nick : e.author.username,
                        guildId: null == Z ? void 0 : Z.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData
                    })
                );
            if (e.type === I.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, a.Rp)(
                    (0, u.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick
                    })
                );
            else if (e.type === I.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, a.Rp)(
                    (0, h.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick
                    })
                );
            else if (e.type === I.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, a.Rp)(
                    (0, h.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick
                    })
                );
            else if (e.type === I.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return '' !== e.content ? e.content : E.intl.string(E.t.wnn1DQ);
            if (null != e.content && '' !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: R
                    },
                    n = e.isFirstMessageInForumPost(Z)
                        ? {
                              ...t,
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0
                          }
                        : {
                              ...t,
                              formatInline: !0,
                              allowHeading: L,
                              allowList: L
                          };
                return (0, g.ZP)(e, n).content;
            }
            return null;
        }, [P, M, Z, L, R]),
        { isReplyAuthorBlocked: O, isReplyAuthorIgnored: D } = (0, r.cj)(
            [m.Z],
            () => ({
                isReplyAuthorBlocked: null != P && m.Z.isBlockedForMessage(P),
                isReplyAuthorIgnored: null != P && m.Z.isIgnoredForMessage(P)
            }),
            [P]
        ),
        w = (0, _.wq)(null == P ? void 0 : P.author.id, Z.id),
        B = (0, _.$3)(n, P, O, D),
        U = (0, _.Wl)(P, Z, S, j),
        H = (0, _.rY)(T, j),
        G = l.useCallback(
            () =>
                j({
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }),
            [j]
        ),
        F = (0, C.Uj)(n);
    return (0, i.jsx)(x.Z, {
        repliedAuthor: M,
        baseMessage: n,
        channel: Z,
        baseAuthor: F,
        referencedMessage: b,
        content: k,
        compact: N,
        isReplyAuthorBlocked: O,
        isReplyAuthorIgnored: D,
        showAvatarPopout: T,
        showUsernamePopout: S,
        renderPopout: v.Z,
        onClickAvatar: H,
        onClickUsername: U,
        onClickReply: B,
        onContextMenu: w,
        onPopoutRequestClose: G,
        isReplySpineClickable: A,
        showReplySpine: y
    });
});
function Z(e) {
    let { message: t, channel: n, compact: l, setPopout: r, referencedUsernameProfile: a, referencedAvatarProfile: s, replyReference: o, replyMessage: c, isReplySpineClickable: d, showReplySpine: u = !0 } = e,
        h =
            null != o &&
            (0, i.jsx)(b, {
                baseMessage: t,
                replyReference: o,
                referencedMessage: c,
                channel: n,
                compact: l,
                setPopout: r,
                referencedUsernameProfile: a,
                referencedAvatarProfile: s,
                isReplySpineClickable: d,
                showReplySpine: u
            });
    return (0, i.jsx)(i.Fragment, { children: h });
}
