e.d(n, { Z: () => v });
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    o = e(493683),
    d = e(40851),
    r = e(740492),
    s = e(314897),
    u = e(592125),
    c = e(699516),
    g = e(944486),
    Z = e(981631),
    f = e(388032);
function v(t) {
    let { user: n, context: v, label: b, joinCallVideo: h, id: m, onCall: x } = t,
        p = (0, d.Aq)(),
        I = (0, l.e7)([s.default], () => s.default.getId() === n.id),
        _ = (0, l.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        A = (0, l.e7)([g.Z, u.Z], () => g.Z.getVoiceChannelId() === u.Z.getDMFromUserId(n.id));
    if (I || v === Z.IlC.POPOUT || A || n.bot || n.isProvisional) return null;
    let C = () => {
            null == x || x(), o.Z.openPrivateChannel(n.id, !0, h), p.dispatch(Z.CkL.POPOUT_CLOSE), (0, a.pTH)();
        },
        L = !r.ZP.disableCallUserConfirmationPrompt;
    return (0, i.jsx)(a.sNh, {
        id: null != m ? m : 'call',
        label: null != b ? b : f.intl.string(f.t.JJogjo),
        action: L
            ? () => {
                  (0, a.ZDy)(async () => {
                      let { default: t } = await e.e('27157').then(e.bind(e, 736454));
                      return (n) =>
                          (0, i.jsx)(t, {
                              onSubmit: C,
                              ...n
                          });
                  });
              }
            : C,
        disabled: _
    });
}
