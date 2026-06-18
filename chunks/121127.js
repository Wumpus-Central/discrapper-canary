n.d(t, { A: () => I });
var i = n(627968),
    a = n(64700),
    d = n(17928),
    r = n(477782),
    l = n(228366),
    s = n(901472),
    p = n(985925),
    c = n(267102),
    h = n(474397),
    o = n(378570),
    u = n(761640),
    C = n(734057),
    A = n(309010),
    _ = n(174459),
    b = n(652215),
    E = n(746080),
    g = n(486974),
    k = n(375708);
function I(e) {
    let { userId: t, guildId: n, channelId: I, location: O, onAction: S, appContext: j } = e,
        w = a.useContext(_.AnalyticsContext),
        L = (0, c.aL)(),
        x = (0, d.bG)([A.A], () => I ?? A.A.getChannelId(n, !0), [I, n]),
        y = (0, p.q)(n);
    return null != n && y
        ? (0, i.jsx)(r.Dr, {
              id: "mod-view",
              label: k.intl.string(k.t.kj3tz2),
              action: () => {
                  S?.(), (0, h.A)(j), L.dispatch(b.jej.POPOUT_CLOSE);
                  let e = C.A.getChannel(x),
                      i = { modViewPanel: g.g.INFO, sourceLocation: O ?? w.location };
                  if (e?.isThread() && null != e.parent_id) {
                      u.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                          (l.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }), (0, o.iN)(e.id)),
                          (0, s.z)(n, t, e.parent_id, i);
                      return;
                  }
                  (0, s.z)(n, t, x ?? E.VV.MEMBER_SAFETY, i);
              },
          })
        : null;
}
