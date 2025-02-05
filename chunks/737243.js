n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(911969),
    s = n(581364),
    o = n(869765),
    c = n(699516),
    d = n(697451),
    u = n(348238),
    h = n(614584);
let p = l.memo(function (e) {
    var t, n;
    let { message: p, channel: m, compact: f = !1, interactionUsernameProfile: g, interactionAvatarProfile: _, interactionData: C, referencedUsernameProfile: x, referencedAvatarProfile: v, setPopout: E } = e,
        { isInteractionUserBlocked: I, isInteractionUserIgnored: b } = (0, a.cj)(
            [c.Z],
            () => ({
                isInteractionUserBlocked: c.Z.isBlockedForMessage(p),
                isInteractionUserIgnored: c.Z.isIgnoredForMessage(p)
            }),
            [p]
        ),
        Z = (0, a.e7)([o.Z], () => o.Z.getMessageByReference(null == p ? void 0 : p.messageReference)),
        N = (0, u.wq)(null === (t = p.interaction) || void 0 === t ? void 0 : t.user.id, m.id),
        T = (0, u.Nk)(p.interaction, m, g, E),
        S = (0, u.NU)(_, E),
        j = (0, s.t0)(p),
        y = (null == j ? void 0 : j.type) === r.B8.APPLICATION_COMMAND ? (null === (n = j.target_user) || void 0 === n ? void 0 : n.id) : void 0,
        A = (0, u.wq)(y, m.id),
        P = (0, u.JC)(y, m, x, E),
        R = (0, u.rY)(v, E),
        M = (0, u.Xn)(C, E),
        L = l.useCallback(() => {
            E({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1
            });
        }, [E]),
        k = l.useCallback(
            () =>
                (0, h.Z)({
                    message: p,
                    channel: m,
                    compact: f,
                    setPopout: E,
                    referencedAvatarProfile: v,
                    referencedUsernameProfile: x,
                    replyReference: p.messageReference,
                    replyMessage: Z,
                    isReplySpineClickable: !1,
                    showReplySpine: !1
                }),
            [m, f, p, v, Z, x, E]
        );
    return (0, i.jsx)(d.Z, {
        message: p,
        channel: m,
        compact: f,
        isInteractionUserBlocked: I,
        isInteractionUserIgnored: b,
        showAvatarPopout: _,
        showUsernamePopout: g,
        showDataPopout: C,
        showTargetAvatarPopout: v,
        showTargetUsernamePopout: x,
        onClickAvatar: S,
        onClickUsername: T,
        onClickCommand: M,
        onUserContextMenu: N,
        onClickTargetAvatar: R,
        onClickTargetUsername: P,
        onTargetUserContextMenu: A,
        onPopoutRequestClose: L,
        renderTargetMessage: k
    });
});
function m(e, t, n) {
    let { message: l, channel: a, compact: r } = e;
    return null != l.interaction && '' !== l.interaction.displayName
        ? (0, i.jsx)(p, {
              message: l,
              channel: a,
              compact: r,
              setPopout: t,
              ...n
          })
        : null;
}
