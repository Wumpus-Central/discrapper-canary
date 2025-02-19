n.d(t, { Z: () => Z });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(493683),
    a = n(40851),
    u = n(740492),
    s = n(314897),
    c = n(592125),
    d = n(699516),
    f = n(944486),
    g = n(981631),
    b = n(388032);
function Z(e) {
    let { user: t, context: Z, label: v, joinCallVideo: p, id: O, onCall: N } = e,
        m = (0, a.Aq)(),
        y = (0, l.e7)([s.default], () => s.default.getId() === t.id),
        h = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        j = (0, l.e7)([f.Z, c.Z], () => f.Z.getVoiceChannelId() === c.Z.getDMFromUserId(t.id));
    if (y || Z === g.IlC.POPOUT || j || t.bot || t.isProvisional) return null;
    let P = () => {
            null == N || N(), o.Z.openPrivateChannel(t.id, !0, p), m.dispatch(g.CkL.POPOUT_CLOSE), (0, r.pTH)();
        },
        x = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, i.jsx)(r.sNh, {
        id: null != O ? O : 'call',
        label: null != v ? v : b.NW.string(b.t.JJogjo),
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
