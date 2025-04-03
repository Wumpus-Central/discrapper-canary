n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    a = n(313889),
    o = n(825829),
    u = n(36459),
    c = n(592125),
    s = n(375954),
    d = n(496675),
    f = n(981631),
    O = n(388032);
function E(e, t) {
    let n = (0, l.e7)([d.Z], () => null != e && d.Z.canWithPartialContext(f.Plq.MANAGE_MESSAGES, { channelId: e }), [e]),
        E = (0, l.e7)([c.Z], () => c.Z.getChannel(e), [e]),
        g = (0, l.e7)([s.Z], () => (null != e && null != t ? s.Z.getMessage(e, t) : null)),
        b = (0, o.NK)(null != g ? g : null);
    if (null == E || null == g) return null;
    let y = null != b && b.actions.hasOwnProperty(a.d.SET_COMPLETED) ? a.d.UNSET_COMPLETED : a.d.SET_COMPLETED,
        _ = y === a.d.SET_COMPLETED ? O.NW.string(O.t.VWNyUl) : O.NW.string(O.t.l9GqxM);
    return n && null != t
        ? (0, r.jsx)(
              i.sNh,
              {
                  id: 'mark-automod-alert-completed',
                  label: _,
                  action: () => {
                      (0, u.Xx)(t, E, y);
                  }
              },
              'mark-automod-alert-completed'
          )
        : null;
}
