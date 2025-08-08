n.d(t, { Z: () => Z });
var i = n(255367);
n(73800);
var l = n(442837),
    r = n(481060),
    o = n(493683),
    a = n(40851),
    s = n(740492),
    d = n(314897),
    u = n(592125),
    c = n(699516),
    f = n(944486),
    b = n(981631),
    g = n(388032);
function Z(e) {
    let { user: t, context: Z, label: O, joinCallVideo: v, id: p, onCall: j } = e,
        m = (0, a.Aq)(),
        h = (0, l.e7)([d.default], () => d.default.getId() === t.id),
        y = (0, l.e7)([c.Z], () => c.Z.isBlocked(t.id)),
        P = (0, l.e7)([f.Z, u.Z], () => f.Z.getVoiceChannelId() === u.Z.getDMFromUserId(t.id));
    if (h || Z === b.IlC.POPOUT || P || t.bot || t.isProvisional) return null;
    let x = () => {
            null == j || j(),
                o.Z.openPrivateChannel({
                    recipientIds: t.id,
                    joinCall: !0,
                    joinCallVideo: v,
                }),
                m.dispatch(b.CkL.POPOUT_CLOSE),
                (0, r.pTH)();
        },
        S = !s.ZP.disableCallUserConfirmationPrompt;
    return (0, i.jsx)(r.sNh, {
        id: null != p ? p : "call",
        label: null != O ? O : g.intl.string(g.t.JJogjo),
        action: S
            ? () => {
                  (0, r.ZDy)(async () => {
                      let { default: e } = await n.e("27157").then(n.bind(n, 736454));
                      return (t) =>
                          (0, i.jsx)(
                              e,
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
                              })({ onSubmit: x }, t),
                          );
                  });
              }
            : x,
        disabled: y,
    });
}
