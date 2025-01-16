var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(692547),
    o = n(481060),
    c = n(358221),
    d = n(594190),
    u = n(199902),
    h = n(924557),
    p = n(435064),
    m = n(354459),
    f = n(388032),
    g = n(669189);
t.Z = (e) => {
    let { className: t, channelId: n } = e,
        l = (0, h.Go)(),
        C = p.Z.isDecoupledGameClippingEnabled();
    return (0, a.e7)([u.Z, c.Z, p.Z, d.ZP], () => {
        var e;
        if (null == n) return !1;
        let t = u.Z.getCurrentUserActiveStream(),
            i = null === (e = d.ZP.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle;
        return (null != t && !!p.Z.getSettings().clipsEnabled && !!l) || (null != i && !!p.Z.getSettings().decoupledClipsEnabled && !!C) || c.Z.getParticipants(n).some((e) => e.type === m.fO.USER && p.Z.isClipsEnabledForUser(e.user.id));
    })
        ? (0, i.jsxs)(o.TooltipContainer, {
              text: f.intl.string(f.t.DJXW3N),
              color: o.TooltipColors.GREY,
              className: r()(t, g.clipsEnabledIndicator),
              children: [
                  (0, i.jsx)(o.IconBadge, {
                      icon: o.ClipsIcon,
                      shape: o.BadgeShapes.ROUND_LEFT,
                      color: s.Z.unsafe_rawColors.PRIMARY_500.css,
                      className: g.clipBadgeIcon
                  }),
                  (0, i.jsx)(o.TextBadge, {
                      text: f.intl.string(f.t.pCMkDQ),
                      shape: o.BadgeShapes.ROUND_RIGHT,
                      color: s.Z.unsafe_rawColors.PRIMARY_500.css,
                      className: g.clipBadgeText
                  })
              ]
          })
        : null;
};
