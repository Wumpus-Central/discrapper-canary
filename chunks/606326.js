l.d(t, { A: () => h });
var n = l(627968),
    s = l(64700),
    i = l(311907),
    a = l(793574),
    r = l(688810),
    d = l(547015),
    c = l(138298),
    o = l(761640),
    u = l(71393),
    x = l(652215),
    m = l(947256);
function h(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([u.A], () => u.A.getGuild(t)),
        { analyticsLocations: h } = (0, r.Ay)(a.A.MEMBER_SAFETY_PAGE),
        j = (0, i.bG)([o.Ay], () => o.Ay.getGuildSidebarState(t), [t]),
        _ = s.useCallback(() => {
            c.A.closeGuildSidebar(t);
        }, [t]),
        A = null != j;
    return null != l && A && null != j
        ? (0, n.jsx)(r.f5, {
              value: h,
              children: (0, n.jsx)("div", {
                  className: m.__invalid_sidebarContainer,
                  style: { width: x.da6 },
                  children: (0, n.jsx)(d.A, { userId: j.details.userId, guildId: j.details.guildId, onClose: _ }),
              }),
          })
        : null;
}
