n.d(t, {
    A: () => v,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    o = n(73153),
    u = n(706752),
    c = n(985925),
    s = n(267102),
    d = n(474397),
    A = n(378570),
    b = n(761640),
    f = n(734057),
    O = n(696451),
    g = n(309010),
    y = n(954571),
    p = n(652215),
    E = n(746080),
    j = n(486974),
    m = n(985018);

function v(e) {
    let { userId: t, guildId: n, channelId: v, location: _, onAction: h, appContext: S } = e,
        M = l.useContext(y.AnalyticsContext),
        P = (0, s.aL)(),
        C = (0, i.bG)([g.A], () => (null != v ? v : g.A.getChannelId(n, !0)), [v, n]),
        I = (0, i.bG)([O.Ay], () => (null == n ? null : O.Ay.getMember(n, t)), [n, t]),
        D = (0, c.q)(n);
    return null != n && null != I && D
        ? (0, r.jsx)(a.Drp, {
              id: "mod-view",
              label: m.intl.string(m.t.kj3tz2),
              action: () => {
                  null == h || h(), (0, d.A)(S), P.dispatch(p.jej.POPOUT_CLOSE);
                  let e = f.A.getChannel(C),
                      r = {
                          modViewPanel: j.g.INFO,
                          sourceLocation: null != _ ? _ : M.location,
                      };
                  if ((null == e ? void 0 : e.isThread()) && null != e.parent_id) {
                      b.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                          (o.h.dispatch({
                              type: "SIDEBAR_CLOSE",
                              baseChannelId: e.parent_id,
                          }),
                          (0, A.iN)(e.id)),
                          (0, u.z)(n, t, e.parent_id, r);
                      return;
                  }
                  (0, u.z)(n, t, null != C ? C : E.VV.MEMBER_SAFETY, r);
              },
          })
        : null;
}
