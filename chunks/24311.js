n.d(t, { Z: () => O });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    o = n(493683),
    a = n(40851),
    u = n(740492),
    c = n(314897),
    s = n(592125),
    d = n(699516),
    f = n(944486),
    b = n(981631),
    g = n(388032);
function O(e) {
    let { user: t, context: O, label: Z, joinCallVideo: y, id: j, onCall: v } = e,
        E = (0, a.Aq)(),
        m = (0, r.e7)([c.default], () => c.default.getId() === t.id),
        p = (0, r.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        S = (0, r.e7)([f.Z, s.Z], () => f.Z.getVoiceChannelId() === s.Z.getDMFromUserId(t.id));
    if (m || O === b.IlC.POPOUT || S || t.bot || t.isProvisional) return null;
    let _ = () => {
            null == v || v(),
                o.Z.openPrivateChannel({
                    recipientIds: t.id,
                    joinCall: !0,
                    joinCallVideo: y,
                }),
                E.dispatch(b.CkL.POPOUT_CLOSE),
                (0, i.pTH)();
        },
        h = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(i.sNh, {
        id: null != j ? j : "call",
        label: null != Z ? Z : g.intl.string(g.t.JJogjo),
        action: h
            ? () => {
                  (0, i.ZDy)(async () => {
                      let { default: e } = await n.e("27157").then(n.bind(n, 736454));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })({ onSubmit: _ }, t),
                          );
                  });
              }
            : _,
        disabled: p,
    });
}
