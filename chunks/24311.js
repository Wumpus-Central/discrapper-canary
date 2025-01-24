t.d(n, {
    Z: function () {
        return g;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(493683),
    u = t(40851),
    o = t(740492),
    d = t(314897),
    s = t(592125),
    c = t(699516),
    Z = t(944486),
    f = t(981631),
    m = t(388032);
function g(e) {
    let { user: n, context: g, label: M, joinCallVideo: x, id: h, onCall: v } = e,
        p = (0, u.Aq)(),
        b = (0, i.e7)([d.default], () => d.default.getId() === n.id),
        I = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        C = (0, i.e7)([Z.Z, s.Z], () => Z.Z.getVoiceChannelId() === s.Z.getDMFromUserId(n.id));
    if (b || g === f.IlC.POPOUT || C || n.bot || n.isProvisional) return null;
    let P = () => {
            null == v || v(), a.Z.openPrivateChannel(n.id, !0, x), p.dispatch(f.CkL.POPOUT_CLOSE), (0, r.closeAllModals)();
        },
        E = !o.ZP.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(r.MenuItem, {
        id: null != h ? h : 'call',
        label: null != M ? M : m.intl.string(m.t.JJogjo),
        action: E
            ? () => {
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await t.e('27157').then(t.bind(t, 736454));
                      return (n) =>
                          (0, l.jsx)(e, {
                              onSubmit: P,
                              ...n
                          });
                  });
              }
            : P,
        disabled: I
    });
}
