n.d(t, {
    A: () => h,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(155718),
    s = n(168186),
    o = n(9842),
    c = n(994500),
    u = n(301960),
    d = n(112758),
    f = n(162792);
let p = l.memo(function (e) {
    var t, n;
    let {
            message: p,
            channel: h,
            compact: b = !1,
            interactionUsernameProfile: g,
            interactionAvatarProfile: m,
            interactionData: A,
            referencedUsernameProfile: y,
            referencedAvatarProfile: O,
            setPopout: j,
        } = e,
        { isInteractionUserBlocked: v, isInteractionUserIgnored: x } = (0, i.cf)(
            [c.A],
            () => ({
                isInteractionUserBlocked: c.A.isBlockedForMessage(p),
                isInteractionUserIgnored: c.A.isIgnoredForMessage(p),
            }),
            [p],
        ),
        E = (0, i.bG)([o.A], () => o.A.getMessageByReference(null == p ? void 0 : p.messageReference)),
        _ = (0, d.r4)(null == (t = p.interaction) ? void 0 : t.user.id, h.id),
        C = (0, d.T0)(p.interaction, h, g, j),
        S = (0, d.Yq)(m, j),
        I = (0, s.Am)(p),
        N =
            (null == I ? void 0 : I.type) === a.G4.APPLICATION_COMMAND
                ? null == (n = I.target_user)
                    ? void 0
                    : n.id
                : void 0,
        T = (0, d.r4)(N, h.id),
        P = (0, d.I)(N, h, y, j),
        w = (0, d.Ge)(O, j),
        R = (0, d.U_)(A, j),
        D = l.useCallback(() => {
            j({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [j]),
        M = l.useCallback(
            () =>
                (0, f.A)({
                    message: p,
                    channel: h,
                    compact: b,
                    setPopout: j,
                    referencedAvatarProfile: O,
                    referencedUsernameProfile: y,
                    replyReference: p.messageReference,
                    replyMessage: E,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [h, b, p, O, E, y, j],
        );
    return (0, r.jsx)(u.A, {
        message: p,
        channel: h,
        compact: b,
        isInteractionUserBlocked: v,
        isInteractionUserIgnored: x,
        showAvatarPopout: m,
        showUsernamePopout: g,
        showDataPopout: A,
        showTargetAvatarPopout: O,
        showTargetUsernamePopout: y,
        onClickAvatar: S,
        onClickUsername: C,
        onClickCommand: R,
        onUserContextMenu: _,
        onClickTargetAvatar: w,
        onClickTargetUsername: P,
        onTargetUserContextMenu: T,
        onPopoutRequestClose: D,
        renderTargetMessage: M,
    });
});

function h(e, t, n) {
    let { message: l, channel: i, compact: a } = e;
    return null != l.interaction && "" !== l.interaction.displayName
        ? (0, r.jsx)(
              p,
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
                      message: l,
                      channel: i,
                      compact: a,
                      setPopout: t,
                  },
                  n,
              ),
          )
        : null;
}
