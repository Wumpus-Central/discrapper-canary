n.d(t, { A: () => I });
var a = n(627968);
n(64700);
var i = n(311907),
    l = n(713608),
    r = n(688810),
    o = n(706752),
    s = n(985925),
    d = n(997509),
    c = n(267102),
    u = n(474397),
    _ = n(378570),
    p = n(961350),
    f = n(309010),
    A = n(993401),
    g = n(652215),
    h = n(746080),
    x = n(486974),
    m = n(985018);
function I(e) {
    let { user: t, guildId: n, channelId: I, onClose: b, appContext: v } = e,
        { newestAnalyticsLocation: C } = (0, r.Ay)(),
        y = (0, c.aL)(),
        P = (0, i.bG)([p.default], () => p.default.getId() === t?.id),
        S = (0, s.q)(n ?? null),
        E = (0, i.bG)([f.A], () => I ?? f.A.getChannelId(n, !0), [I, n]);
    return null == n || !S || P
        ? null
        : (0, a.jsx)(A.br, {
              action: "PRESS_MOD_VIEW",
              icon: l.q,
              tooltipText: m.intl.string(m.t.kj3tz2),
              onClick: () => {
                  d.A.close(),
                      null != E && (0, _.iN)(E),
                      (0, u.A)(v),
                      y.dispatch(g.jej.POPOUT_CLOSE),
                      (0, o.z)(n, t.id, E ?? h.VV.MEMBER_SAFETY, { modViewPanel: x.g.INFO, sourceLocation: C }),
                      b?.();
              },
          });
}
