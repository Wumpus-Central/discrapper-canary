t.d(n, { Z: () => h });
var i = t(54381);
t(473749);
var l = t(442837),
    r = t(481060),
    a = t(493683),
    o = t(728285),
    u = t(740492),
    c = t(314897),
    s = t(592125),
    d = t(699516),
    f = t(944486),
    g = t(981631),
    v = t(388032);
function h(e) {
    let { user: n, context: h, label: b, joinCallVideo: _, id: p, onCall: m } = e,
        O = (0, o.Aq)(),
        Z = (0, l.e7)([c.default], () => c.default.getId() === n.id),
        E = (0, l.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        N = (0, l.e7)([f.Z, s.Z], () => f.Z.getVoiceChannelId() === s.Z.getDMFromUserId(n.id));
    if (Z || h === g.IlC.POPOUT || N || n.bot || n.isProvisional) return null;
    let C = () => {
            null == m || m(),
                a.Z.openPrivateChannel({
                    recipientIds: n.id,
                    joinCall: !0,
                    joinCallVideo: _,
                }),
                O.dispatch(g.CkL.POPOUT_CLOSE),
                (0, r.pTH)();
        },
        j = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, i.jsx)(r.sNh, {
        id: null != p ? p : "call",
        label: null != b ? b : v.intl.string(v.t.JJogjm),
        action: j
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
