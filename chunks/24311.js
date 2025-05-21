n.d(t, { Z: () => b });
var l = n(255367);
n(73800);
var i = n(442837),
    r = n(481060),
    o = n(493683),
    a = n(40851),
    s = n(740492),
    u = n(314897),
    d = n(592125),
    c = n(699516),
    g = n(944486),
    f = n(981631),
    Z = n(388032);
function b(e) {
    let { user: t, context: b, label: O, joinCallVideo: m, id: h, onCall: j } = e,
        v = (0, a.Aq)(),
        E = (0, i.e7)([u.default], () => u.default.getId() === t.id),
        p = (0, i.e7)([c.Z], () => c.Z.isBlocked(t.id)),
        P = (0, i.e7)([g.Z, d.Z], () => g.Z.getVoiceChannelId() === d.Z.getDMFromUserId(t.id));
    if (E || b === f.IlC.POPOUT || P || t.bot || t.isProvisional) return null;
    let y = () => {
            null == j || j(),
                o.Z.openPrivateChannel({
                    recipientIds: t.id,
                    joinCall: !0,
                    joinCallVideo: m
                }),
                v.dispatch(f.CkL.POPOUT_CLOSE),
                (0, r.pTH)();
        },
        S = !s.ZP.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(r.sNh, {
        id: null != h ? h : 'call',
        label: null != O ? O : Z.intl.string(Z.t.JJogjo),
        action: S
            ? () => {
                  (0, r.ZDy)(async () => {
                      let { default: e } = await n.e('27157').then(n.bind(n, 736454));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })({ onSubmit: y }, t)
                          );
                  });
              }
            : y,
        disabled: p
    });
}
