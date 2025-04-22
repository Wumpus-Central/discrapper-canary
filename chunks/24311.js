t.d(n, { Z: () => f });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
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
    let { user: n, context: f, label: p, joinCallVideo: m, id: O, onCall: h } = e,
        j = (0, o.Aq)(),
        P = (0, i.e7)([s.default], () => s.default.getId() === n.id),
        v = (0, i.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        x = (0, i.e7)([g.Z, c.Z], () => g.Z.getVoiceChannelId() === c.Z.getDMFromUserId(n.id));
    if (P || f === Z.IlC.POPOUT || x || n.bot || n.isProvisional) return null;
    let y = () => {
            null == h || h(),
                a.Z.openPrivateChannel({
                    recipientIds: n.id,
                    joinCall: !0,
                    joinCallVideo: m
                }),
                j.dispatch(Z.CkL.POPOUT_CLOSE),
                (0, r.pTH)();
        },
        N = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(r.sNh, {
        id: null != O ? O : 'call',
        label: null != p ? p : b.intl.string(b.t.JJogjo),
        action: N
            ? () => {
                  (0, r.ZDy)(async () => {
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
                              })({ onSubmit: y }, n)
                          );
                  });
              }
            : y,
        disabled: v
    });
}
