n.d(t, { A: () => y });
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
function y(e) {
    let { userId: t, guildId: n, channelId: y, location: I, onAction: O, appContext: S } = e,
        j = a.useContext(_.AnalyticsContext),
        w = (0, c.aL)(),
        L = (0, d.bG)([A.Ay], () => y ?? A.Ay.getChannelId(n, !0), [y, n]),
        x = (0, p.q)(n);
    return null != n && x
        ? (0, i.jsx)(r.Dr, {
              id: "mod-view",
              label: k.intl.string(k.t.kj3tz2),
              action: () => {
                  O?.(), (0, h.A)(S), w.dispatch(b.jej.POPOUT_CLOSE);
                  let e = C.A.getChannel(L),
                      i = { modViewPanel: g.g.INFO, sourceLocation: I ?? j.location };
                  if (e?.isThread() && null != e.parent_id) {
                      u.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                          (l.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }), (0, o.iN)(e.id)),
                          (0, s.z)(n, t, e.parent_id, i);
                      return;
                  }
                  (0, s.z)(n, t, L ?? E.VV.MEMBER_SAFETY, i);
              },
          })
        : null;
}
