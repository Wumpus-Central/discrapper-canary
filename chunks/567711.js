n.d(t, { Z: () => g });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(313889),
    o = n(825829),
    u = n(36459),
    d = n(592125),
    s = n(375954),
    c = n(496675),
    E = n(981631),
    _ = n(388032);
function g(e, t) {
    let n = (0, i.e7)([c.Z], () => null != e && c.Z.canWithPartialContext(E.Plq.MANAGE_MESSAGES, { channelId: e }), [e]),
        g = (0, i.e7)([d.Z], () => d.Z.getChannel(e), [e]),
        f = (0, i.e7)([s.Z], () => (null != e && null != t ? s.Z.getMessage(e, t) : null)),
        M = (0, o.NK)(null != f ? f : null);
    if (null == g || null == f) return null;
    let A = null != M && M.actions.hasOwnProperty(a.d.SET_COMPLETED) ? a.d.UNSET_COMPLETED : a.d.SET_COMPLETED,
        Z = A === a.d.SET_COMPLETED ? _.intl.string(_.t.VWNyUl) : _.intl.string(_.t.l9GqxM);
    return n && null != t
        ? (0, l.jsx)(
              r.sNh,
              {
                  id: 'mark-automod-alert-completed',
                  label: Z,
                  action: () => {
                      (0, u.Xx)(t, g, A);
                  }
              },
              'mark-automod-alert-completed'
          )
        : null;
}
