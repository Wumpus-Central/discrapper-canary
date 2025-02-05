n.d(t, { Z: () => Z });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(25209),
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
    _ = n(739566),
    C = n(267128),
    x = n(507418),
    v = n(348238),
    E = n(981631),
    I = n(388032);
let b = l.memo(function (e) {
    var t;
    let { baseMessage: n, referencedMessage: b, channel: Z, compact: N = !1, referencedUsernameProfile: T, referencedAvatarProfile: S, setPopout: j, isReplySpineClickable: y, showReplySpine: A } = e,
        P = b.state === p.Y.LOADED ? b.message : void 0,
        R = (0, _.Uj)(P),
        M = (0, c.p)(),
        L = (0, d.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        k = l.useMemo(() => {
            if (null == P) return null;
            let e = (0, s.Z)(P);
            if (e.type === E.uaV.USER_JOIN) {
                let t = f.Z.getWelcomeMessageKind(Z.guild_id);
                return (0, r.Rp)(
                    I.intl.formatToParts(f.Z.getSystemMessageUserJoin(e.id, t), {
                        username: null != R ? R.nick : e.author.username,
                        usernameHook: (e) => e
                    })
                );
            }
            if (e.type === E.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, r.Rp)(
                    (0, o.PA)({
                        username: null != R ? R.nick : e.author.username,
                        guildId: null == Z ? void 0 : Z.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData
                    })
                );
            if (e.type === E.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, r.Rp)(
                    (0, u.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            if (e.type === E.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, r.Rp)(
                    (0, h.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            if (e.type === E.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, r.Rp)(
                    (0, h.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            else if (e.type === E.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return '' !== e.content ? e.content : I.intl.string(I.t.wnn1DQ);
            if (null != e.content && '' !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: M
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
        }, [P, R, Z, L, M]),
        { isReplyAuthorBlocked: O, isReplyAuthorIgnored: D } = (0, a.cj)(
            [m.Z],
            () => ({
                isReplyAuthorBlocked: null != P && m.Z.isBlockedForMessage(P),
                isReplyAuthorIgnored: null != P && m.Z.isIgnoredForMessage(P)
            }),
            [P]
        ),
        w = (0, v.wq)(null == P ? void 0 : P.author.id, Z.id),
        U = (0, v.$3)(n, P, O, D),
        B = (0, v.Wl)(P, Z, T, j),
        F = (0, v.rY)(S, j),
        H = l.useCallback(() => {
            j({
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1
            });
        }, [j]),
        G = (0, _.Uj)(n);
    return (0, i.jsx)(C.Z, {
        repliedAuthor: R,
        baseMessage: n,
        channel: Z,
        baseAuthor: G,
        referencedMessage: b,
        content: k,
        compact: N,
        isReplyAuthorBlocked: O,
        isReplyAuthorIgnored: D,
        showAvatarPopout: S,
        showUsernamePopout: T,
        renderPopout: x.Z,
        onClickAvatar: F,
        onClickUsername: B,
        onClickReply: U,
        onContextMenu: w,
        onPopoutRequestClose: H,
        isReplySpineClickable: y,
        showReplySpine: A
    });
});
function Z(e) {
    let { message: t, channel: n, compact: l, setPopout: a, referencedUsernameProfile: r, referencedAvatarProfile: s, replyReference: o, replyMessage: c, isReplySpineClickable: d, showReplySpine: u = !0 } = e,
        h =
            null != o &&
            (0, i.jsx)(b, {
                baseMessage: t,
                replyReference: o,
                referencedMessage: c,
                channel: n,
                compact: l,
                setPopout: a,
                referencedUsernameProfile: r,
                referencedAvatarProfile: s,
                isReplySpineClickable: d,
                showReplySpine: u
            });
    return (0, i.jsx)(i.Fragment, { children: h });
}
