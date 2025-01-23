t.d(n, {
    Z: function () {
        return m;
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
    g = t(388032);
function m(e) {
    let { user: n, context: m, label: M, joinCallVideo: v, id: x, onCall: h } = e,
        p = (0, u.Aq)(),
        P = (0, i.e7)([d.default], () => d.default.getId() === n.id),
        C = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        I = (0, i.e7)([Z.Z, s.Z], () => Z.Z.getVoiceChannelId() === s.Z.getDMFromUserId(n.id));
    if (P || m === f.IlC.POPOUT || I || n.bot || n.isProvisional) return null;
    let b = () => {
            null == h || h(), a.Z.openPrivateChannel(n.id, !0, v), p.dispatch(f.CkL.POPOUT_CLOSE), (0, r.closeAllModals)();
        },
        E = !o.ZP.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(r.MenuItem, {
        id: null != x ? x : 'call',
        label: null != M ? M : g.intl.string(g.t.JJogjo),
        action: E
            ? () => {
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await t.e('27157').then(t.bind(t, 736454));
                      return (n) =>
                          (0, l.jsx)(e, {
                              onSubmit: b,
                              ...n
                          });
                  });
              }
            : b,
        disabled: C
    });
}
