n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(911969),
    o = n(581364),
    s = n(869765),
    c = n(699516),
    u = n(697451),
    d = n(348238),
    p = n(614584);
let h = i.memo(function (e) {
    var t, n;
    let { message: h, channel: f, compact: m = !1, interactionUsernameProfile: g, interactionAvatarProfile: b, interactionData: _, referencedUsernameProfile: y, referencedAvatarProfile: C, setPopout: x } = e,
        { isInteractionUserBlocked: v, isInteractionUserIgnored: O } = (0, l.cj)(
            [c.Z],
            () => ({
                isInteractionUserBlocked: c.Z.isBlockedForMessage(h),
                isInteractionUserIgnored: c.Z.isIgnoredForMessage(h)
            }),
            [h]
        ),
        j = (0, l.e7)([s.Z], () => s.Z.getMessageByReference(null == h ? void 0 : h.messageReference)),
        E = (0, d.wq)(null == (t = h.interaction) ? void 0 : t.user.id, f.id),
        S = (0, d.Nk)(h.interaction, f, g, x),
        P = (0, d.NU)(b, x),
        I = (0, o.t0)(h),
        Z = (null == I ? void 0 : I.type) === a.B8.APPLICATION_COMMAND ? (null == (n = I.target_user) ? void 0 : n.id) : void 0,
        N = (0, d.wq)(Z, f.id),
        T = (0, d.JC)(Z, f, y, x),
        A = (0, d.rY)(C, x),
        w = (0, d.Xn)(_, x),
        R = i.useCallback(() => {
            x({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1
            });
        }, [x]),
        M = i.useCallback(
            () =>
                (0, p.Z)({
                    message: h,
                    channel: f,
                    compact: m,
                    setPopout: x,
                    referencedAvatarProfile: C,
                    referencedUsernameProfile: y,
                    replyReference: h.messageReference,
                    replyMessage: j,
                    isReplySpineClickable: !1,
                    showReplySpine: !1
                }),
            [f, m, h, C, j, y, x]
        );
    return (0, r.jsx)(u.Z, {
        message: h,
        channel: f,
        compact: m,
        isInteractionUserBlocked: v,
        isInteractionUserIgnored: O,
        showAvatarPopout: b,
        showUsernamePopout: g,
        showDataPopout: _,
        showTargetAvatarPopout: C,
        showTargetUsernamePopout: y,
        onClickAvatar: P,
        onClickUsername: S,
        onClickCommand: w,
        onUserContextMenu: E,
        onClickTargetAvatar: A,
        onClickTargetUsername: T,
        onTargetUserContextMenu: N,
        onPopoutRequestClose: R,
        renderTargetMessage: M
    });
});
function f(e, t, n) {
    let { message: i, channel: l, compact: a } = e;
    return null != i.interaction && '' !== i.interaction.displayName
        ? (0, r.jsx)(
              h,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      ('function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              })
                          )),
                          r.forEach(function (t) {
                              var r;
                              ((r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = r));
                          }));
                  }
                  return e;
              })(
                  {
                      message: i,
                      channel: l,
                      compact: a,
                      setPopout: t
                  },
                  n
              )
          )
        : null;
}
