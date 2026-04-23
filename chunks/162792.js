n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(436857),
    r = n(387408),
    o = n(942075),
    c = n(384231),
    d = n(808829),
    u = n(552691),
    h = n(9842),
    m = n(994500),
    A = n(638075),
    g = n(465364),
    _ = n(763754),
    p = n(448368),
    f = n(535421),
    E = n(112758),
    C = n(652215),
    x = n(985018);
let S = l.memo(function (e) {
    let {
            baseMessage: t,
            referencedMessage: n,
            channel: S,
            compact: I = !1,
            referencedUsernameProfile: v,
            referencedAvatarProfile: N,
            setPopout: T,
            isReplySpineClickable: y,
            showReplySpine: b,
        } = e,
        j = n.state === h.a.LOADED ? n.message : void 0,
        R = (0, _.X4)(j),
        M = (0, c.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        L = l.useMemo(() => {
            if (null == j) return null;
            let e = (0, r.A)(j);
            if (e.type === C.lAJ.USER_JOIN)
                return (0, s.$)(
                    x.intl.formatToParts(A.A.getSystemMessageUserJoin(e.id), {
                        username: null != R ? R.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === C.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, s.$)(
                    (0, o.WC)({
                        username: null != R ? R.nick : e.author.username,
                        guildId: S?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === C.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, s.$)((0, d.P)({ application: e?.application, username: R?.nick }));
            if (e.type === C.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, s.$)((0, u.g6)({ application: e?.application, username: R?.nick }));
            if (e.type === C.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, s.$)((0, u.uk)({ application: e?.application, username: R?.nick }));
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0 },
                    n = e.isFirstMessageInForumPost(S)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0 }
                        : { ...t, formatInline: !0, allowHeading: M, allowList: M };
                return (0, g.Ay)(e, n).content;
            }
            return null;
        }, [j, R, S, M]),
        { isReplyAuthorBlocked: D, isReplyAuthorIgnored: P } = (0, a.cf)(
            [m.A],
            () => ({
                isReplyAuthorBlocked: null != j && m.A.isBlockedForMessage(j),
                isReplyAuthorIgnored: null != j && m.A.isIgnoredForMessage(j),
            }),
            [j],
        ),
        O = (0, E.r4)(j?.author.id, S.id),
        w = (0, E.Ck)(t, j),
        U = (0, E.H9)(j, S, v, T),
        k = (0, E.Ge)(N, T),
        G = l.useCallback(() => {
            T({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [T]),
        F = (0, _.X4)(t);
    return (0, i.jsx)(p.A, {
        repliedAuthor: R,
        baseMessage: t,
        channel: S,
        baseAuthor: F,
        referencedMessage: n,
        content: L,
        compact: I,
        isReplyAuthorBlocked: D,
        isReplyAuthorIgnored: P,
        showAvatarPopout: N,
        showUsernamePopout: v,
        renderPopout: f.A,
        onClickAvatar: k,
        onClickUsername: U,
        onClickReply: w,
        onContextMenu: O,
        onPopoutRequestClose: G,
        isReplySpineClickable: y,
        showReplySpine: b,
    });
});
function I(e) {
    let {
        message: t,
        channel: n,
        compact: l,
        setPopout: a,
        referencedUsernameProfile: s,
        referencedAvatarProfile: r,
        replyReference: o,
        replyMessage: c,
        isReplySpineClickable: d,
        showReplySpine: u = !0,
    } = e;
    return (
        null != o &&
        (0, i.jsx)(S, {
            baseMessage: t,
            replyReference: o,
            referencedMessage: c,
            channel: n,
            compact: l,
            setPopout: a,
            referencedUsernameProfile: s,
            referencedAvatarProfile: r,
            isReplySpineClickable: d,
            showReplySpine: u,
        })
    );
}
