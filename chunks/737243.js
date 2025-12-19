n.d(t, { Z: () => h });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(911969),
    o = n(581364),
    s = n(869765),
    c = n(699516),
    u = n(697451),
    d = n(348238),
    p = n(614584);
let f = r.memo(function (e) {
    var t, n;
    let {
            message: f,
            channel: h,
            compact: m = !1,
            interactionUsernameProfile: g,
            interactionAvatarProfile: b,
            interactionData: y,
            referencedUsernameProfile: C,
            referencedAvatarProfile: v,
            setPopout: x,
        } = e,
        { isInteractionUserBlocked: O, isInteractionUserIgnored: E } = (0, l.cj)(
            [c.Z],
            () => ({
                isInteractionUserBlocked: c.Z.isBlockedForMessage(f),
                isInteractionUserIgnored: c.Z.isIgnoredForMessage(f),
            }),
            [f],
        ),
        j = (0, l.e7)([s.Z], () => s.Z.getMessageByReference(null == f ? void 0 : f.messageReference)),
        S = (0, d.wq)(null == (t = f.interaction) ? void 0 : t.user.id, h.id),
        _ = (0, d.Nk)(f.interaction, h, g, x),
        P = (0, d.NU)(b, x),
        I = (0, o.t0)(f),
        Z =
            (null == I ? void 0 : I.type) === a.B8.APPLICATION_COMMAND
                ? null == (n = I.target_user)
                    ? void 0
                    : n.id
                : void 0,
        T = (0, d.wq)(Z, h.id),
        N = (0, d.JC)(Z, h, C, x),
        A = (0, d.rY)(v, x),
        w = (0, d.Xn)(y, x),
        M = r.useCallback(() => {
            x({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [x]),
        R = r.useCallback(
            () =>
                (0, p.Z)({
                    message: f,
                    channel: h,
                    compact: m,
                    setPopout: x,
                    referencedAvatarProfile: v,
                    referencedUsernameProfile: C,
                    replyReference: f.messageReference,
                    replyMessage: j,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [h, m, f, v, j, C, x],
        );
    return (0, i.jsx)(u.Z, {
        message: f,
        channel: h,
        compact: m,
        isInteractionUserBlocked: O,
        isInteractionUserIgnored: E,
        showAvatarPopout: b,
        showUsernamePopout: g,
        showDataPopout: y,
        showTargetAvatarPopout: v,
        showTargetUsernamePopout: C,
        onClickAvatar: P,
        onClickUsername: _,
        onClickCommand: w,
        onUserContextMenu: S,
        onClickTargetAvatar: A,
        onClickTargetUsername: N,
        onTargetUserContextMenu: T,
        onPopoutRequestClose: M,
        renderTargetMessage: R,
    });
});
function h(e, t, n) {
    let { message: r, channel: l, compact: a } = e;
    return null != r.interaction && "" !== r.interaction.displayName
        ? (0, i.jsx)(
              f,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          i = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (i = i.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          i.forEach(function (t) {
                              var i;
                              (i = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = i);
                          });
                  }
                  return e;
              })(
                  {
                      message: r,
                      channel: l,
                      compact: a,
                      setPopout: t,
                  },
                  n,
              ),
          )
        : null;
}
