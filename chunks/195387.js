r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(906732),
    l = r(189432),
    u = r(189357),
    c = r(434404),
    d = r(314897),
    f = r(944486),
    p = r(475413),
    h = r(176505),
    _ = r(50493),
    m = r(388032);
function g(e) {
    let { user: n, guildId: r, channelId: g, onClose: E, shouldShowTooltip: v } = e,
        { newestAnalyticsLocation: y } = (0, s.ZP)(),
        b = (0, a.e7)([d.default], () => d.default.getId() === (null == n ? void 0 : n.id)),
        I = (0, u.m)(null != r ? r : null),
        T = (0, a.e7)([f.Z], () => (null != g ? g : f.Z.getChannelId(r, !0)), [g, r]);
    return null == r || !I || b
        ? null
        : (0, i.jsx)(p.oY, {
              action: 'PRESS_MOD_VIEW',
              icon: o.ModerationIcon,
              shouldShowTooltip: v,
              tooltipText: m.intl.string(m.t.kj3tz8),
              onClick: () => {
                  c.Z.close(),
                      (0, l.r)(r, n.id, null != T ? T : h.oC.MEMBER_SAFETY, {
                          modViewPanel: _.k.INFO,
                          sourceLocation: y
                      }),
                      null == E || E();
              }
          });
}
