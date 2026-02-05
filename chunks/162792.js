n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(436857),
    r = n(387408),
    o = n(352505),
    c = n(942075),
    d = n(384231),
    u = n(808829),
    h = n(552691),
    m = n(9842),
    A = n(994500),
    p = n(638075),
    g = n(465364),
    f = n(763754),
    _ = n(448368),
    E = n(535421),
    C = n(112758),
    x = n(652215),
    S = n(985018);
let T = l.memo(function (e) {
    let {
            baseMessage: t,
            referencedMessage: n,
            channel: T,
            compact: I = !1,
            referencedUsernameProfile: N,
            referencedAvatarProfile: v,
            setPopout: y,
            isReplySpineClickable: b,
            showReplySpine: R,
        } = e,
        j = n.state === m.a.LOADED ? n.message : void 0,
        M = (0, f.X4)(j),
        D = o.m.useExperiment({ location: "repliedMessage" }).enabled,
        O = (0, d.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        L = l.useMemo(() => {
            if (null == j) return null;
            let e = (0, r.A)(j);
            if (e.type === x.lAJ.USER_JOIN)
                return (0, s.$)(
                    S.intl.formatToParts(p.A.getSystemMessageUserJoin(e.id), {
                        username: null != M ? M.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === x.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, s.$)(
                    (0, c.WC)({
                        username: null != M ? M.nick : e.author.username,
                        guildId: T?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === x.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, s.$)((0, u.P)({ application: e?.application, username: M?.nick }));
            if (e.type === x.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, s.$)((0, h.g6)({ application: e?.application, username: M?.nick }));
            if (e.type === x.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, s.$)((0, h.uk)({ application: e?.application, username: M?.nick }));
            else if (e.type === x.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT)
                return "" !== e.content ? e.content : S.intl.string(S.t.wnn1Dc);
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0 },
                    n = e.isFirstMessageInForumPost(T)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0, allowGameMentions: D }
                        : { ...t, formatInline: !0, allowHeading: O, allowList: O, allowGameMentions: D };
                return (0, g.Ay)(e, n).content;
            }
            return null;
        }, [j, M, T, O, D]),
        { isReplyAuthorBlocked: P, isReplyAuthorIgnored: w } = (0, a.cf)(
            [A.A],
            () => ({
                isReplyAuthorBlocked: null != j && A.A.isBlockedForMessage(j),
                isReplyAuthorIgnored: null != j && A.A.isIgnoredForMessage(j),
            }),
            [j],
        ),
        k = (0, C.r4)(j?.author.id, T.id),
        U = (0, C.Ck)(t, j),
        G = (0, C.H9)(j, T, N, y),
        F = (0, C.Ge)(v, y),
        H = l.useCallback(() => {
            y({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [y]),
        B = (0, f.X4)(t);
    return (0, i.jsx)(_.A, {
        repliedAuthor: M,
        baseMessage: t,
        channel: T,
        baseAuthor: B,
        referencedMessage: n,
        content: L,
        compact: I,
        isReplyAuthorBlocked: P,
        isReplyAuthorIgnored: w,
        showAvatarPopout: v,
        showUsernamePopout: N,
        renderPopout: E.A,
        onClickAvatar: F,
        onClickUsername: G,
        onClickReply: U,
        onContextMenu: k,
        onPopoutRequestClose: H,
        isReplySpineClickable: b,
        showReplySpine: R,
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
        (0, i.jsx)(T, {
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
