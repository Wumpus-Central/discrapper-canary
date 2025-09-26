t.d(n, { Z: () => b });
var l = t(951288);
t(647438);
var i = t(442837),
    r = t(481060),
    a = t(493683),
    u = t(728285),
    o = t(740492),
    s = t(314897),
    d = t(592125),
    c = t(699516),
    g = t(944486),
    Z = t(981631),
    f = t(388032);
function b(e) {
    let { user: n, context: b, label: m, joinCallVideo: O, id: p, onCall: h } = e,
        j = (0, u.Aq)(),
        P = (0, i.e7)([s.default], () => s.default.getId() === n.id),
        v = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        x = (0, i.e7)([g.Z, d.Z], () => g.Z.getVoiceChannelId() === d.Z.getDMFromUserId(n.id));
    if (P || b === Z.IlC.POPOUT || x || n.bot || n.isProvisional) return null;
    let y = () => {
            null == h || h(),
                a.Z.openPrivateChannel({
                    recipientIds: n.id,
                    joinCall: !0,
                    joinCallVideo: O,
                }),
                j.dispatch(Z.CkL.POPOUT_CLOSE),
                (0, r.pTH)();
        },
        N = !o.ZP.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(r.sNh, {
        id: null != p ? p : "call",
        label: null != m ? m : f.intl.string(f.t.JJogjo),
        action: N
            ? () => {
                  (0, r.ZDy)(async () => {
                      let { default: e } = await t.e("27157").then(t.bind(t, 736454));
                      return (n) =>
                          (0, l.jsx)(
                              e,
                              (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          l = Object.keys(t);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (n) {
                                              var l;
                                              (l = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[n] = l);
                                          });
                                  }
                                  return e;
                              })({ onSubmit: y }, n),
                          );
                  });
              }
            : y,
        disabled: v,
    });
}
