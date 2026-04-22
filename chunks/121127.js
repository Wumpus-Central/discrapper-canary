n.d(t, { A: () => N });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(477782),
    o = n(73153),
    d = n(706752),
    u = n(985925),
    s = n(267102),
    c = n(474397),
    A = n(378570),
    E = n(761640),
    _ = n(734057),
    g = n(696451),
    I = n(309010),
    S = n(954571),
    f = n(652215),
    M = n(746080),
    y = n(486974),
    O = n(985018);
function N(e) {
    let { userId: t, guildId: n, channelId: N, location: h, onAction: R, appContext: p } = e,
        m = i.useContext(S.AnalyticsContext),
        T = (0, s.aL)(),
        b = (0, r.bG)([I.A], () => N ?? I.A.getChannelId(n, !0), [N, n]),
        U = (0, r.bG)([g.Ay], () => (null == n ? null : g.Ay.getMember(n, t)), [n, t]),
        L = (0, u.q)(n);
    return null != n && null != U && L
        ? (0, l.jsx)(a.Dr, {
              id: "mod-view",
              label: O.intl.string(O.t.kj3tz2),
              action: () => {
                  R?.(), (0, c.A)(p), T.dispatch(f.jej.POPOUT_CLOSE);
                  let e = _.A.getChannel(b),
                      l = { modViewPanel: y.g.INFO, sourceLocation: h ?? m.location };
                  if (e?.isThread() && null != e.parent_id) {
                      E.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                          (o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }), (0, A.iN)(e.id)),
                          (0, d.z)(n, t, e.parent_id, l);
                      return;
                  }
                  (0, d.z)(n, t, b ?? M.VV.MEMBER_SAFETY, l);
              },
          })
        : null;
}
