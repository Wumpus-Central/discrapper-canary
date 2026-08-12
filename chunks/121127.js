n.d(t, { A: () => I });
var i = n(477900),
    a = n(582128),
    d = n(17928),
    l = n(477782),
    r = n(192308),
    s = n(228366),
    o = n(901472),
    c = n(985925),
    p = n(267102),
    h = n(474397),
    u = n(378570),
    C = n(761640),
    A = n(734057),
    _ = n(309010),
    b = n(174459),
    E = n(652215),
    g = n(746080),
    k = n(486974),
    y = n(375708);
function I(e) {
    let { userId: t, guildId: n, channelId: I, location: O, onAction: S, appContext: j } = e,
        w = a.useContext(b.AnalyticsContext),
        L = (0, p.aL)(),
        x = (0, d.bG)([_.Ay], () => I ?? _.Ay.getChannelId(n, !0), [I, n]),
        z = (0, c.q)(n);
    return null != n && z
        ? (0, i.jsx)(l.Dr, {
              id: "mod-view",
              label: y.intl.string(y.t.kj3tz2),
              action: () => {
                  S?.(), (0, h.A)(j), L.dispatch(E.jej.POPOUT_CLOSE), (0, r.closeAllModals)();
                  let e = A.A.getChannel(x),
                      i = { modViewPanel: k.g.INFO, sourceLocation: O ?? w.location };
                  if (e?.isThread() && null != e.parent_id) {
                      C.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                          (s.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }), (0, u.iN)(e.id)),
                          (0, o.z)(n, t, e.parent_id, i);
                      return;
                  }
                  (0, o.z)(n, t, x ?? g.VV.MEMBER_SAFETY, i);
              },
          })
        : null;
}
