n.d(e, { Z: () => v });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    d = n(493683),
    r = n(40851),
    o = n(740492),
    s = n(314897),
    u = n(592125),
    c = n(699516),
    g = n(944486),
    Z = n(981631),
    f = n(388032);
function v(t) {
    let { user: e, context: v, label: b, joinCallVideo: h, id: m, onCall: x } = t,
        I = (0, r.Aq)(),
        U = (0, l.e7)([s.default], () => s.default.getId() === e.id),
        _ = (0, l.e7)([c.Z], () => c.Z.isBlocked(e.id)),
        p = (0, l.e7)([g.Z, u.Z], () => g.Z.getVoiceChannelId() === u.Z.getDMFromUserId(e.id));
    if (U || v === Z.IlC.POPOUT || p || e.bot || e.isProvisional) return null;
    let A = () => {
            null == x || x(), d.Z.openPrivateChannel(e.id, !0, h), I.dispatch(Z.CkL.POPOUT_CLOSE), (0, a.pTH)();
        },
        C = !o.ZP.disableCallUserConfirmationPrompt;
    return (0, i.jsx)(a.sNh, {
        id: null != m ? m : 'call',
        label: null != b ? b : f.intl.string(f.t.JJogjo),
        action: C
            ? () => {
                  (0, a.ZDy)(async () => {
                      let { default: t } = await n.e('27157').then(n.bind(n, 736454));
                      return (e) =>
                          (0, i.jsx)(t, {
                              onSubmit: A,
                              ...e
                          });
                  });
              }
            : A,
        disabled: _
    });
}
