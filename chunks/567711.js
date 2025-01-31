n.d(t, { Z: () => A });
var l = n(200651);
n(192379);
var a = n(442837),
    i = n(481060),
    r = n(313889),
    o = n(825829),
    u = n(36459),
    d = n(592125),
    s = n(375954),
    c = n(496675),
    _ = n(981631),
    E = n(388032);
function A(e, t) {
    let n = (0, a.e7)([c.Z], () => null != e && c.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, { channelId: e }), [e]),
        A = (0, a.e7)([d.Z], () => d.Z.getChannel(e), [e]),
        M = (0, a.e7)([s.Z], () => (null != e && null != t ? s.Z.getMessage(e, t) : null)),
        I = (0, o.NK)(null != M ? M : null);
    if (null == A || null == M) return null;
    let O = null != I && I.actions.hasOwnProperty(r.d.SET_COMPLETED) ? r.d.UNSET_COMPLETED : r.d.SET_COMPLETED,
        N = O === r.d.SET_COMPLETED ? E.intl.string(E.t.VWNyUl) : E.intl.string(E.t.l9GqxM);
    return n && null != t
        ? (0, l.jsx)(
              i.sNh,
              {
                  id: 'mark-automod-alert-completed',
                  label: N,
                  action: () => {
                      (0, u.Xx)(t, A, O);
                  }
              },
              'mark-automod-alert-completed'
          )
        : null;
}
