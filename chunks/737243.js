n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(911969),
    a = n(581364),
    s = n(869765),
    c = n(699516),
    u = n(697451),
    d = n(348238),
    p = n(614584);
let h = i.memo(function (e) {
    var t, n;
    let { message: h, channel: f, compact: m = !1, interactionUsernameProfile: g, interactionAvatarProfile: b, interactionData: _, referencedUsernameProfile: C, referencedAvatarProfile: v, setPopout: y } = e,
        { isInteractionUserBlocked: x, isInteractionUserIgnored: j } = (0, l.cj)(
            [c.Z],
            () => ({
                isInteractionUserBlocked: c.Z.isBlockedForMessage(h),
                isInteractionUserIgnored: c.Z.isIgnoredForMessage(h)
            }),
            [h]
        ),
        O = (0, l.e7)([s.Z], () => s.Z.getMessageByReference(null == h ? void 0 : h.messageReference)),
        N = (0, d.wq)(null === (t = h.interaction) || void 0 === t ? void 0 : t.user.id, f.id),
        E = (0, d.Nk)(h.interaction, f, g, y),
        P = (0, d.NU)(b, y),
        I = (0, a.t0)(h),
        S = (null == I ? void 0 : I.type) === o.B8.APPLICATION_COMMAND ? (null === (n = I.target_user) || void 0 === n ? void 0 : n.id) : void 0,
        Z = (0, d.wq)(S, f.id),
        T = (0, d.JC)(S, f, C, y),
        A = (0, d.rY)(v, y),
        w = (0, d.Xn)(_, y),
        R = i.useCallback(() => {
            y({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1
            });
        }, [y]),
        k = i.useCallback(
            () =>
                (0, p.Z)({
                    message: h,
                    channel: f,
                    compact: m,
                    setPopout: y,
                    referencedAvatarProfile: v,
                    referencedUsernameProfile: C,
                    replyReference: h.messageReference,
                    replyMessage: O,
                    isReplySpineClickable: !1,
                    showReplySpine: !1
                }),
            [f, m, h, v, O, C, y]
        );
    return (0, r.jsx)(u.Z, {
        message: h,
        channel: f,
        compact: m,
        isInteractionUserBlocked: x,
        isInteractionUserIgnored: j,
        showAvatarPopout: b,
        showUsernamePopout: g,
        showDataPopout: _,
        showTargetAvatarPopout: v,
        showTargetUsernamePopout: C,
        onClickAvatar: P,
        onClickUsername: E,
        onClickCommand: w,
        onUserContextMenu: N,
        onClickTargetAvatar: A,
        onClickTargetUsername: T,
        onTargetUserContextMenu: Z,
        onPopoutRequestClose: R,
        renderTargetMessage: k
    });
});
function f(e, t, n) {
    let { message: i, channel: l, compact: o } = e;
    return null != i.interaction && '' !== i.interaction.displayName
        ? (0, r.jsx)(
              h,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              })
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })(
                  {
                      message: i,
                      channel: l,
                      compact: o,
                      setPopout: t
                  },
                  n
              )
          )
        : null;
}
