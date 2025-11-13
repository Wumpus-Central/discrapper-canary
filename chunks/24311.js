t.d(n, { Z: () => v });
var i = t(951288);
t(647438);
var l = t(442837),
    r = t(481060),
    a = t(493683),
    o = t(728285),
    u = t(740492),
    s = t(314897),
    d = t(592125),
    c = t(699516),
    f = t(944486),
    g = t(981631),
    h = t(388032);
function v(e) {
    let { user: n, context: v, label: _, joinCallVideo: b, id: p, onCall: O } = e,
        Z = (0, o.Aq)(),
        m = (0, l.e7)([s.default], () => s.default.getId() === n.id),
        E = (0, l.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        N = (0, l.e7)([f.Z, d.Z], () => f.Z.getVoiceChannelId() === d.Z.getDMFromUserId(n.id));
    if (m || v === g.IlC.POPOUT || N || n.bot || n.isProvisional) return null;
    let C = () => {
            null == O || O(),
                a.Z.openPrivateChannel({
                    recipientIds: n.id,
                    joinCall: !0,
                    joinCallVideo: b,
                }),
                Z.dispatch(g.CkL.POPOUT_CLOSE),
                (0, r.pTH)();
        },
        y = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, i.jsx)(r.sNh, {
        id: null != p ? p : "call",
        label: null != _ ? _ : h.intl.string(h.t.JJogjm),
        action: y
            ? () => {
                  (0, r.ZDy)(async () => {
                      let { default: e } = await t.e("27157").then(t.bind(t, 736454));
                      return (n) =>
                          (0, i.jsx)(
                              e,
                              (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          i = Object.keys(t);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              }),
                                          )),
                                          i.forEach(function (n) {
                                              var i;
                                              (i = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[n] = i);
                                          });
                                  }
                                  return e;
                              })({ onSubmit: C }, n),
                          );
                  });
              }
            : C,
        disabled: E,
    });
}
