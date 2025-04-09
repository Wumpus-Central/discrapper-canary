t.d(n, { Z: () => f });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    a = t(493683),
    o = t(40851),
    u = t(740492),
    s = t(314897),
    c = t(592125),
    d = t(699516),
    g = t(944486),
    Z = t(981631),
    b = t(388032);
function f(e) {
    let { user: n, context: f, label: p, joinCallVideo: O, id: m, onCall: N } = e,
        h = (0, o.Aq)(),
        j = (0, r.e7)([s.default], () => s.default.getId() === n.id),
        P = (0, r.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        x = (0, r.e7)([g.Z, c.Z], () => g.Z.getVoiceChannelId() === c.Z.getDMFromUserId(n.id));
    if (j || f === Z.IlC.POPOUT || x || n.bot || n.isProvisional) return null;
    let v = () => {
            null == N || N(), a.Z.openPrivateChannel(n.id, !0, O), h.dispatch(Z.CkL.POPOUT_CLOSE), (0, i.pTH)();
        },
        y = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(i.sNh, {
        id: null != m ? m : 'call',
        label: null != p ? p : b.NW.string(b.t.JJogjo),
        action: y
            ? () => {
                  (0, i.ZDy)(async () => {
                      let { default: e } = await t.e('27157').then(t.bind(t, 736454));
                      return (n) =>
                          (0, l.jsx)(
                              e,
                              (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          l = Object.keys(t);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              })
                                          )),
                                          l.forEach(function (n) {
                                              var l;
                                              (l = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[n] = l);
                                          });
                                  }
                                  return e;
                              })({ onSubmit: v }, n)
                          );
                  });
              }
            : v,
        disabled: P
    });
}
