n.d(t, { Z: () => Z });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(493683),
    o = n(40851),
    s = n(740492),
    u = n(314897),
    c = n(592125),
    d = n(699516),
    g = n(944486),
    f = n(981631),
    b = n(388032);
function Z(e) {
    let { user: t, context: Z, label: N, joinCallVideo: m, id: v, onCall: p } = e,
        O = (0, o.Aq)(),
        h = (0, l.e7)([u.default], () => u.default.getId() === t.id),
        j = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        x = (0, l.e7)([g.Z, c.Z], () => g.Z.getVoiceChannelId() === c.Z.getDMFromUserId(t.id));
    if (h || Z === f.IlC.POPOUT || x || t.bot || t.isProvisional) return null;
    let _ = () => {
            null == p || p(), a.Z.openPrivateChannel(t.id, !0, m), O.dispatch(f.CkL.POPOUT_CLOSE), (0, r.pTH)();
        },
        y = !s.ZP.disableCallUserConfirmationPrompt;
    return (0, i.jsx)(r.sNh, {
        id: null != v ? v : 'call',
        label: null != N ? N : b.NW.string(b.t.JJogjo),
        action: y
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
                              })({ onSubmit: _ }, t)
                          );
                  });
              }
            : _,
        disabled: j
    });
}
