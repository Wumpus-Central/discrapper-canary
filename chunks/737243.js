n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(911969),
    o = n(581364),
    s = n(869765),
    c = n(699516),
    u = n(697451),
    d = n(348238),
    p = n(614584);
let f = i.memo(function (e) {
    var t, n;
    let {
            message: f,
            channel: h,
            compact: m = !1,
            interactionUsernameProfile: g,
            interactionAvatarProfile: b,
            interactionData: _,
            referencedUsernameProfile: y,
            referencedAvatarProfile: C,
            setPopout: v,
        } = e,
        { isInteractionUserBlocked: O, isInteractionUserIgnored: x } = (0, l.cj)(
            [c.Z],
            () => ({
                isInteractionUserBlocked: c.Z.isBlockedForMessage(f),
                isInteractionUserIgnored: c.Z.isIgnoredForMessage(f),
            }),
            [f],
        ),
        E = (0, l.e7)([s.Z], () => s.Z.getMessageByReference(null == f ? void 0 : f.messageReference)),
        j = (0, d.wq)(null == (t = f.interaction) ? void 0 : t.user.id, h.id),
        S = (0, d.Nk)(f.interaction, h, g, v),
        P = (0, d.NU)(b, v),
        I = (0, o.t0)(f),
        Z =
            (null == I ? void 0 : I.type) === a.B8.APPLICATION_COMMAND
                ? null == (n = I.target_user)
                    ? void 0
                    : n.id
                : void 0,
        T = (0, d.wq)(Z, h.id),
        N = (0, d.JC)(Z, h, y, v),
        A = (0, d.rY)(C, v),
        w = (0, d.Xn)(_, v),
        M = i.useCallback(() => {
            v({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [v]),
        R = i.useCallback(
            () =>
                (0, p.Z)({
                    message: f,
                    channel: h,
                    compact: m,
                    setPopout: v,
                    referencedAvatarProfile: C,
                    referencedUsernameProfile: y,
                    replyReference: f.messageReference,
                    replyMessage: E,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [h, m, f, C, E, y, v],
        );
    return (0, r.jsx)(u.Z, {
        message: f,
        channel: h,
        compact: m,
        isInteractionUserBlocked: O,
        isInteractionUserIgnored: x,
        showAvatarPopout: b,
        showUsernamePopout: g,
        showDataPopout: _,
        showTargetAvatarPopout: C,
        showTargetUsernamePopout: y,
        onClickAvatar: P,
        onClickUsername: S,
        onClickCommand: w,
        onUserContextMenu: j,
        onClickTargetAvatar: A,
        onClickTargetUsername: N,
        onTargetUserContextMenu: T,
        onPopoutRequestClose: M,
        renderTargetMessage: R,
    });
});
function h(e, t, n) {
    let { message: i, channel: l, compact: a } = e;
    return null != i.interaction && "" !== i.interaction.displayName
        ? (0, r.jsx)(
              f,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })(
                  {
                      message: i,
                      channel: l,
                      compact: a,
                      setPopout: t,
                  },
                  n,
              ),
          )
        : null;
}
