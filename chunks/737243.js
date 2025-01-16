n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(911969),
    s = n(581364),
    o = n(869765),
    c = n(699516),
    d = n(697451),
    u = n(348238),
    h = n(614584);
let p = l.memo(function (e) {
    var t, n;
    let { message: p, channel: m, compact: f = !1, interactionUsernameProfile: g, interactionAvatarProfile: C, interactionData: x, referencedUsernameProfile: v, referencedAvatarProfile: _, setPopout: I } = e,
        { isInteractionUserBlocked: E, isInteractionUserIgnored: b } = (0, r.cj)(
            [c.Z],
            () => ({
                isInteractionUserBlocked: c.Z.isBlockedForMessage(p),
                isInteractionUserIgnored: c.Z.isIgnoredForMessage(p)
            }),
            [p]
        ),
        Z = (0, r.e7)([o.Z], () => o.Z.getMessageByReference(null == p ? void 0 : p.messageReference)),
        N = (0, u.wq)(null === (t = p.interaction) || void 0 === t ? void 0 : t.user.id, m.id),
        S = (0, u.Nk)(p.interaction, m, g, I),
        T = (0, u.NU)(C, I),
        j = (0, s.t0)(p),
        A = (null == j ? void 0 : j.type) === a.B8.APPLICATION_COMMAND ? (null === (n = j.target_user) || void 0 === n ? void 0 : n.id) : void 0,
        y = (0, u.wq)(A, m.id),
        P = (0, u.JC)(A, m, v, I),
        M = (0, u.rY)(_, I),
        R = (0, u.Xn)(x, I),
        L = l.useCallback(
            () =>
                I({
                    interactionUsernameProfile: !1,
                    interactionAvatarProfile: !1,
                    interactionData: !1,
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }),
            [I]
        ),
        k = l.useCallback(
            () =>
                (0, h.Z)({
                    message: p,
                    channel: m,
                    compact: f,
                    setPopout: I,
                    referencedAvatarProfile: _,
                    referencedUsernameProfile: v,
                    replyReference: p.messageReference,
                    replyMessage: Z,
                    isReplySpineClickable: !1,
                    showReplySpine: !1
                }),
            [m, f, p, _, Z, v, I]
        );
    return (0, i.jsx)(d.Z, {
        message: p,
        channel: m,
        compact: f,
        isInteractionUserBlocked: E,
        isInteractionUserIgnored: b,
        showAvatarPopout: C,
        showUsernamePopout: g,
        showDataPopout: x,
        showTargetAvatarPopout: _,
        showTargetUsernamePopout: v,
        onClickAvatar: T,
        onClickUsername: S,
        onClickCommand: R,
        onUserContextMenu: N,
        onClickTargetAvatar: M,
        onClickTargetUsername: P,
        onTargetUserContextMenu: y,
        onPopoutRequestClose: L,
        renderTargetMessage: k
    });
});
function m(e, t, n) {
    let { message: l, channel: r, compact: a } = e;
    return null != l.interaction && '' !== l.interaction.displayName
        ? (0, i.jsx)(p, {
              message: l,
              channel: r,
              compact: a,
              setPopout: t,
              ...n
          })
        : null;
}
