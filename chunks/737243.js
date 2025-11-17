n.d(t, { Z: () => f });
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
let h = r.memo(function (e) {
    var t, n;
    let {
            message: h,
            channel: f,
            compact: m = !1,
            interactionUsernameProfile: g,
            interactionAvatarProfile: b,
            interactionData: y,
            referencedUsernameProfile: C,
            referencedAvatarProfile: v,
            setPopout: _,
        } = e,
        { isInteractionUserBlocked: x, isInteractionUserIgnored: j } = (0, l.cj)(
            [c.Z],
            () => ({
                isInteractionUserBlocked: c.Z.isBlockedForMessage(h),
                isInteractionUserIgnored: c.Z.isIgnoredForMessage(h),
            }),
            [h],
        ),
        O = (0, l.e7)([s.Z], () => s.Z.getMessageByReference(null == h ? void 0 : h.messageReference)),
        E = (0, d.wq)(null == (t = h.interaction) ? void 0 : t.user.id, f.id),
        S = (0, d.Nk)(h.interaction, f, g, _),
        P = (0, d.NU)(b, _),
        I = (0, o.t0)(h),
        Z =
            (null == I ? void 0 : I.type) === a.B8.APPLICATION_COMMAND
                ? null == (n = I.target_user)
                    ? void 0
                    : n.id
                : void 0,
        T = (0, d.wq)(Z, f.id),
        N = (0, d.JC)(Z, f, C, _),
        A = (0, d.rY)(v, _),
        w = (0, d.Xn)(y, _),
        M = r.useCallback(() => {
            _({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [_]),
        R = r.useCallback(
            () =>
                (0, p.Z)({
                    message: h,
                    channel: f,
                    compact: m,
                    setPopout: _,
                    referencedAvatarProfile: v,
                    referencedUsernameProfile: C,
                    replyReference: h.messageReference,
                    replyMessage: O,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [f, m, h, v, O, C, _],
        );
    return (0, i.jsx)(u.Z, {
        message: h,
        channel: f,
        compact: m,
        isInteractionUserBlocked: x,
        isInteractionUserIgnored: j,
        showAvatarPopout: b,
        showUsernamePopout: g,
        showDataPopout: y,
        showTargetAvatarPopout: v,
        showTargetUsernamePopout: C,
        onClickAvatar: P,
        onClickUsername: S,
        onClickCommand: w,
        onUserContextMenu: E,
        onClickTargetAvatar: A,
        onClickTargetUsername: N,
        onTargetUserContextMenu: T,
        onPopoutRequestClose: M,
        renderTargetMessage: R,
    });
});
function f(e, t, n) {
    let { message: r, channel: l, compact: a } = e;
    return null != r.interaction && "" !== r.interaction.displayName
        ? (0, i.jsx)(
              h,
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
