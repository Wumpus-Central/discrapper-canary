n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(911969),
    s = n(581364),
    l = n(869765),
    c = n(699516),
    u = n(697451),
    d = n(348238),
    f = n(614584);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = i.memo(function (e) {
    var t, n;
    let {
            message: _,
            channel: p,
            compact: h = !1,
            interactionUsernameProfile: m,
            interactionAvatarProfile: g,
            interactionData: E,
            referencedUsernameProfile: b,
            referencedAvatarProfile: y,
            setPopout: O,
        } = e,
        { isInteractionUserBlocked: v, isInteractionUserIgnored: I } = (0, o.cj)(
            [c.Z],
            () => ({
                isInteractionUserBlocked: c.Z.isBlockedForMessage(_),
                isInteractionUserIgnored: c.Z.isIgnoredForMessage(_),
            }),
            [_],
        ),
        T = (0, o.e7)([l.Z], () => l.Z.getMessageByReference(null == _ ? void 0 : _.messageReference)),
        S = (0, d.wq)(null == (t = _.interaction) ? void 0 : t.user.id, p.id),
        A = (0, d.Nk)(_.interaction, p, m, O),
        N = (0, d.NU)(g, O),
        C = (0, s.t0)(_),
        R =
            (null == C ? void 0 : C.type) === a.B8.APPLICATION_COMMAND
                ? null == (n = C.target_user)
                    ? void 0
                    : n.id
                : void 0,
        P = (0, d.wq)(R, p.id),
        w = (0, d.JC)(R, p, b, O),
        D = (0, d.rY)(y, O),
        L = (0, d.Xn)(E, O),
        x = i.useCallback(() => {
            O({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [O]),
        M = i.useCallback(
            () =>
                (0, f.Z)({
                    message: _,
                    channel: p,
                    compact: h,
                    setPopout: O,
                    referencedAvatarProfile: y,
                    referencedUsernameProfile: b,
                    replyReference: _.messageReference,
                    replyMessage: T,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [p, h, _, y, T, b, O],
        );
    return (0, r.jsx)(u.Z, {
        message: _,
        channel: p,
        compact: h,
        isInteractionUserBlocked: v,
        isInteractionUserIgnored: I,
        showAvatarPopout: g,
        showUsernamePopout: m,
        showDataPopout: E,
        showTargetAvatarPopout: y,
        showTargetUsernamePopout: b,
        onClickAvatar: N,
        onClickUsername: A,
        onClickCommand: L,
        onUserContextMenu: S,
        onClickTargetAvatar: D,
        onClickTargetUsername: w,
        onTargetUserContextMenu: P,
        onPopoutRequestClose: x,
        renderTargetMessage: M,
    });
});
function m(e, t, n) {
    let { message: i, channel: o, compact: a } = e;
    return null != i.interaction && "" !== i.interaction.displayName
        ? (0, r.jsx)(
              h,
              p(
                  {
                      message: i,
                      channel: o,
                      compact: a,
                      setPopout: t,
                  },
                  n,
              ),
          )
        : null;
}
