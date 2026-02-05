"use strict";
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(688810),
    o = n(706752),
    l = n(985925),
    u = n(997509),
    c = n(267102),
    d = n(474397),
    _ = n(378570),
    f = n(961350),
    p = n(309010),
    h = n(993401),
    m = n(652215),
    g = n(746080),
    E = n(486974),
    A = n(985018);
function I(e) {
    let { user: t, guildId: n, channelId: I, onClose: T, appContext: y } = e,
        { newestAnalyticsLocation: S } = (0, s.Ay)(),
        v = (0, c.aL)(),
        C = (0, i.bG)([f.default], () => f.default.getId() === t?.id),
        b = (0, l.q)(n ?? null),
        N = (0, i.bG)([p.A], () => I ?? p.A.getChannelId(n, !0), [I, n]);
    return null == n || !b || C
        ? null
        : (0, r.jsx)(h.br, {
              action: "PRESS_MOD_VIEW",
              icon: a.quN,
              tooltipText: A.intl.string(A.t.kj3tz2),
              onClick: () => {
                  u.A.close(),
                      null != N && (0, _.iN)(N),
                      (0, d.A)(y),
                      v.dispatch(m.jej.POPOUT_CLOSE),
                      (0, o.z)(n, t.id, N ?? g.VV.MEMBER_SAFETY, { modViewPanel: E.g.INFO, sourceLocation: S }),
                      T?.();
              },
          });
}
