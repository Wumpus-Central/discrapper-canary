n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var a = n(311907),
    r = n(713608),
    i = n(688810),
    s = n(706752),
    o = n(985925),
    d = n(997509),
    u = n(267102),
    c = n(474397),
    A = n(378570),
    f = n(961350),
    _ = n(309010),
    p = n(993401),
    h = n(652215),
    g = n(746080),
    I = n(486974),
    m = n(985018);
function x(e) {
    let { user: t, guildId: n, channelId: x, onClose: E, appContext: v } = e,
        { newestAnalyticsLocation: b } = (0, i.Ay)(),
        N = (0, u.aL)(),
        P = (0, a.bG)([f.default], () => f.default.getId() === t?.id),
        y = (0, o.q)(n ?? null),
        C = (0, a.bG)([_.A], () => x ?? _.A.getChannelId(n, !0), [x, n]);
    return null == n || !y || P
        ? null
        : (0, l.jsx)(p.br, {
              action: "PRESS_MOD_VIEW",
              icon: r.q,
              tooltipText: m.intl.string(m.t.kj3tz2),
              onClick: () => {
                  d.A.close(),
                      null != C && (0, A.iN)(C),
                      (0, c.A)(v),
                      N.dispatch(h.jej.POPOUT_CLOSE),
                      (0, s.z)(n, t.id, C ?? g.VV.MEMBER_SAFETY, { modViewPanel: I.g.INFO, sourceLocation: b }),
                      E?.();
              },
          });
}
