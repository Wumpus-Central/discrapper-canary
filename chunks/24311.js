n.d(t, { Z: () => O });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    o = n(493683),
    a = n(40851),
    u = n(740492),
    c = n(314897),
    d = n(592125),
    s = n(699516),
    f = n(944486),
    g = n(981631),
    b = n(388032);
function O(e) {
    let { user: t, context: O, label: E, joinCallVideo: _, id: y, onCall: v } = e,
        Z = (0, a.Aq)(),
        h = (0, r.e7)([c.default], () => c.default.getId() === t.id),
        m = (0, r.e7)([s.Z], () => s.Z.isBlocked(t.id)),
        p = (0, r.e7)([f.Z, d.Z], () => f.Z.getVoiceChannelId() === d.Z.getDMFromUserId(t.id));
    if (h || O === g.IlC.POPOUT || p || t.bot || t.isProvisional) return null;
    let S = () => {
            null == v || v(),
                o.Z.openPrivateChannel({
                    recipientIds: t.id,
                    joinCall: !0,
                    joinCallVideo: _
                }),
                Z.dispatch(g.CkL.POPOUT_CLOSE),
                (0, i.pTH)();
        },
        j = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(i.sNh, {
        id: null != y ? y : 'call',
        label: null != E ? E : b.intl.string(b.t.JJogjo),
        action: j
            ? () => {
                  (0, i.ZDy)(async () => {
                      let { default: e } = await n.e('27157').then(n.bind(n, 736454));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })({ onSubmit: S }, t)
                          );
                  });
              }
            : S,
        disabled: m
    });
}
