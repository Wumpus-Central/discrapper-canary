n.d(t, { Z: () => g });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    a = n(313889),
    o = n(825829),
    u = n(36459),
    c = n(592125),
    s = n(375954),
    d = n(496675),
    f = n(981631),
    b = n(388032);
function g(e, t) {
    let n = (0, r.e7)([d.Z], () => null != e && d.Z.canWithPartialContext(f.Plq.MANAGE_MESSAGES, { channelId: e }), [e]),
        g = (0, r.e7)([c.Z], () => c.Z.getChannel(e), [e]),
        O = (0, r.e7)([s.Z], () => (null != e && null != t ? s.Z.getMessage(e, t) : null)),
        E = (0, o.NK)(null != O ? O : null);
    if (null == g || null == O) return null;
    let Z = null != E && E.actions.hasOwnProperty(a.d.SET_COMPLETED) ? a.d.UNSET_COMPLETED : a.d.SET_COMPLETED,
        P = Z === a.d.SET_COMPLETED ? b.intl.string(b.t.VWNyUl) : b.intl.string(b.t.l9GqxM);
    return n && null != t
        ? (0, l.jsx)(
              i.sNh,
              {
                  id: 'mark-automod-alert-completed',
                  label: P,
                  action: () => {
                      (0, u.Xx)(t, g, Z);
                  }
              },
              'mark-automod-alert-completed'
          )
        : null;
}
