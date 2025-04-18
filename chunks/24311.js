n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(493683),
    a = n(40851),
    s = n(740492),
    u = n(314897),
    d = n(592125),
    c = n(699516),
    f = n(944486),
    Z = n(981631),
    b = n(388032);
function g(e) {
    let { user: t, context: g, label: O, joinCallVideo: v, id: p, onCall: j } = e,
        N = (0, a.Aq)(),
        m = (0, l.e7)([u.default], () => u.default.getId() === t.id),
        h = (0, l.e7)([c.Z], () => c.Z.isBlocked(t.id)),
        y = (0, l.e7)([f.Z, d.Z], () => f.Z.getVoiceChannelId() === d.Z.getDMFromUserId(t.id));
    if (m || g === Z.IlC.POPOUT || y || t.bot || t.isProvisional) return null;
    let P = () => {
            null == j || j(),
                o.Z.openPrivateChannel({
                    recipientIds: t.id,
                    joinCall: !0,
                    joinCallVideo: v
                }),
                N.dispatch(Z.CkL.POPOUT_CLOSE),
                (0, r.pTH)();
        },
        x = !s.ZP.disableCallUserConfirmationPrompt;
    return (0, i.jsx)(r.sNh, {
        id: null != p ? p : 'call',
        label: null != O ? O : b.NW.string(b.t.JJogjo),
        action: x
            ? () => {
                  (0, r.ZDy)(async () => {
                      let { default: e } = await n.e('27157').then(n.bind(n, 736454));
                      return (t) =>
                          (0, i.jsx)(
                              e,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({ onSubmit: P }, t)
                          );
                  });
              }
            : P,
        disabled: h
    });
}
