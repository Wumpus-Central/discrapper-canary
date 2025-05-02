n.d(t, { Z: () => Z });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(493683),
    o = n(40851),
    s = n(740492),
    u = n(314897),
    d = n(592125),
    c = n(699516),
    g = n(944486),
    f = n(981631),
    b = n(388032);
function Z(e) {
    let { user: t, context: Z, label: m, joinCallVideo: v, id: p, onCall: O } = e,
        h = (0, o.Aq)(),
        j = (0, l.e7)([u.default], () => u.default.getId() === t.id),
        x = (0, l.e7)([c.Z], () => c.Z.isBlocked(t.id)),
        _ = (0, l.e7)([g.Z, d.Z], () => g.Z.getVoiceChannelId() === d.Z.getDMFromUserId(t.id));
    if (j || Z === f.IlC.POPOUT || _ || t.bot || t.isProvisional) return null;
    let y = () => {
            null == O || O(),
                a.Z.openPrivateChannel({
                    recipientIds: t.id,
                    joinCall: !0,
                    joinCallVideo: v
                }),
                h.dispatch(f.CkL.POPOUT_CLOSE),
                (0, r.pTH)();
        },
        N = !s.ZP.disableCallUserConfirmationPrompt;
    return (0, i.jsx)(r.sNh, {
        id: null != p ? p : 'call',
        label: null != m ? m : b.intl.string(b.t.JJogjo),
        action: N
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
                              })({ onSubmit: y }, t)
                          );
                  });
              }
            : y,
        disabled: x
    });
}
