n.d(t, { A: () => y });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(688810),
    o = n(706752),
    l = n(985925),
    c = n(997509),
    u = n(267102),
    d = n(474397),
    f = n(378570),
    p = n(961350),
    _ = n(309010),
    h = n(993401),
    m = n(652215),
    g = n(746080),
    E = n(486974),
    b = n(985018);
function y(e) {
    let { user: t, guildId: n, channelId: y, onClose: O, appContext: A } = e,
        { newestAnalyticsLocation: v } = (0, s.Ay)(),
        S = (0, u.aL)(),
        I = (0, i.bG)([p.default], () => p.default.getId() === (null == t ? void 0 : t.id)),
        T = (0, l.q)(null != n ? n : null),
        C = (0, i.bG)([_.A], () => (null != y ? y : _.A.getChannelId(n, !0)), [y, n]);
    return null == n || !T || I
        ? null
        : (0, r.jsx)(h.br, {
              action: "PRESS_MOD_VIEW",
              icon: a.quN,
              tooltipText: b.intl.string(b.t.kj3tz2),
              onClick: () => {
                  c.A.close(),
                      null != C && (0, f.iN)(C),
                      (0, d.A)(A),
                      S.dispatch(m.jej.POPOUT_CLOSE),
                      (0, o.z)(n, t.id, null != C ? C : g.VV.MEMBER_SAFETY, {
                          modViewPanel: E.g.INFO,
                          sourceLocation: v,
                      }),
                      null == O || O();
              },
          });
}
