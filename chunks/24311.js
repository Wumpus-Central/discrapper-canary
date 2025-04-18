n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(493683),
    a = n(40851),
    u = n(740492),
    c = n(314897),
    s = n(592125),
    d = n(699516),
    f = n(944486),
    g = n(981631),
    b = n(388032);
function O(e) {
    let { user: t, context: O, label: E, joinCallVideo: _, id: y, onCall: v } = e,
        h = (0, a.Aq)(),
        Z = (0, l.e7)([c.default], () => c.default.getId() === t.id),
        p = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        m = (0, l.e7)([f.Z, s.Z], () => f.Z.getVoiceChannelId() === s.Z.getDMFromUserId(t.id));
    if (Z || O === g.IlC.POPOUT || m || t.bot || t.isProvisional) return null;
    let S = () => {
            null == v || v(),
                o.Z.openPrivateChannel({
                    recipientIds: t.id,
                    joinCall: !0,
                    joinCallVideo: _
                }),
                h.dispatch(g.CkL.POPOUT_CLOSE),
                (0, i.pTH)();
        },
        j = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, r.jsx)(i.sNh, {
        id: null != y ? y : 'call',
        label: null != E ? E : b.NW.string(b.t.JJogjo),
        action: j
            ? () => {
                  (0, i.ZDy)(async () => {
                      let { default: e } = await n.e('27157').then(n.bind(n, 736454));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({ onSubmit: S }, t)
                          );
                  });
              }
            : S,
        disabled: p
    });
}
