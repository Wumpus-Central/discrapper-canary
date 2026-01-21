n.d(t, { Z: () => m });
var l = n(54381);
n(473749);
var i = n(442837),
    r = n(481060),
    o = n(493683),
    a = n(957914),
    s = n(728285),
    u = n(740492),
    d = n(314897),
    c = n(592125),
    g = n(699516),
    f = n(944486),
    Z = n(981631),
    b = n(388032);
function m(e) {
    let { user: t, context: m, label: O, joinCallVideo: h, id: E, onCall: v } = e,
        p = (0, s.Aq)(),
        P = (0, i.e7)([d.default], () => d.default.getId() === t.id),
        j = (0, i.e7)([g.Z], () => g.Z.isBlocked(t.id)),
        y = (0, i.e7)([f.Z, c.Z], () => f.Z.getVoiceChannelId() === c.Z.getDMFromUserId(t.id)),
        { copyVariant: S } = a.N.useConfig({ location: "useCallUserItem" });
    if (P || m === Z.IlC.POPOUT || y || t.bot || t.isProvisional) return null;
    let C = () => {
            null == v || v(),
                o.Z.openPrivateChannel({
                    recipientIds: t.id,
                    joinCall: !0,
                    joinCallVideo: h,
                }),
                p.dispatch(Z.CkL.POPOUT_CLOSE),
                (0, r.pTH)();
        },
        I = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(r.sNh, {
        id: null != E ? E : "call",
        label: null != O ? O : "control" !== S ? b.intl.string(b.t["ZeP+kK"]) : b.intl.string(b.t.JJogjm),
        action: I
            ? () => {
                  (0, r.ZDy)(async () => {
                      let { default: e } = await n.e("27157").then(n.bind(n, 736454));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })({ onSubmit: C }, t),
                          );
                  });
              }
            : C,
        disabled: j,
    });
}
