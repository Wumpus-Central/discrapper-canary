n.d(t, { A: () => y });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(397927),
    d = n(73153),
    o = n(706752),
    u = n(985925),
    s = n(267102),
    c = n(474397),
    A = n(378570),
    E = n(761640),
    _ = n(734057),
    g = n(696451),
    M = n(309010),
    O = n(954571),
    I = n(652215),
    S = n(746080),
    m = n(486974),
    T = n(985018);
function y(e) {
    let { userId: t, guildId: n, channelId: y, location: N, onAction: C, appContext: f } = e,
        p = i.useContext(O.AnalyticsContext),
        b = (0, s.aL)(),
        D = (0, a.bG)([M.A], () => y ?? M.A.getChannelId(n, !0), [y, n]),
        R = (0, a.bG)([g.Ay], () => (null == n ? null : g.Ay.getMember(n, t)), [n, t]),
        h = (0, u.q)(n);
    return null != n && null != R && h
        ? (0, l.jsx)(r.Drp, {
              id: "mod-view",
              label: T.intl.string(T.t.kj3tz2),
              action: () => {
                  C?.(), (0, c.A)(f), b.dispatch(I.jej.POPOUT_CLOSE);
                  let e = _.A.getChannel(D),
                      l = { modViewPanel: m.g.INFO, sourceLocation: N ?? p.location };
                  if (e?.isThread() && null != e.parent_id) {
                      E.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                          (d.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }), (0, A.iN)(e.id)),
                          (0, o.z)(n, t, e.parent_id, l);
                      return;
                  }
                  (0, o.z)(n, t, D ?? S.VV.MEMBER_SAFETY, l);
              },
          })
        : null;
}
