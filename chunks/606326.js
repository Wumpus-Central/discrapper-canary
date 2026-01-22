l.d(t, {
    A: () => j,
});
var n = l(627968),
    r = l(64700),
    i = l(311907),
    s = l(793574),
    a = l(688810),
    c = l(547015),
    d = l(138298),
    o = l(761640),
    u = l(71393),
    x = l(652215),
    m = l(947256);

function j(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([u.A], () => u.A.getGuild(t)),
        { analyticsLocations: j } = (0, a.Ay)(s.A.MEMBER_SAFETY_PAGE),
        b = (0, i.bG)([o.Ay], () => o.Ay.getGuildSidebarState(t), [t]),
        f = r.useCallback(() => {
            d.A.closeGuildSidebar(t);
        }, [t]),
        h = null != b;
    return null != l && h && null != b
        ? (0, n.jsx)(a.f5, {
              value: j,
              children: (0, n.jsx)("div", {
                  className: m.__invalid_sidebarContainer,
                  style: {
                      width: x.da6,
                  },
                  children: (0, n.jsx)(c.A, {
                      userId: b.details.userId,
                      guildId: b.details.guildId,
                      onClose: f,
                  }),
              }),
          })
        : null;
}
