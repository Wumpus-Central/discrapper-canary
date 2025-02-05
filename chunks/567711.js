n.d(t, { Z: () => g });
var l = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    r = n(313889),
    o = n(825829),
    d = n(36459),
    u = n(592125),
    s = n(375954),
    c = n(496675),
    E = n(981631),
    _ = n(388032);
function g(e, t) {
    let n = (0, i.e7)([c.Z], () => null != e && c.Z.canWithPartialContext(E.Plq.MANAGE_MESSAGES, { channelId: e }), [e]),
        g = (0, i.e7)([u.Z], () => u.Z.getChannel(e), [e]),
        M = (0, i.e7)([s.Z], () => (null != e && null != t ? s.Z.getMessage(e, t) : null)),
        f = (0, o.NK)(null != M ? M : null);
    if (null == g || null == M) return null;
    let A = null != f && f.actions.hasOwnProperty(r.d.SET_COMPLETED) ? r.d.UNSET_COMPLETED : r.d.SET_COMPLETED,
        O = A === r.d.SET_COMPLETED ? _.intl.string(_.t.VWNyUl) : _.intl.string(_.t.l9GqxM);
    return n && null != t
        ? (0, l.jsx)(
              a.sNh,
              {
                  id: 'mark-automod-alert-completed',
                  label: O,
                  action: () => {
                      (0, d.Xx)(t, g, A);
                  }
              },
              'mark-automod-alert-completed'
          )
        : null;
}
