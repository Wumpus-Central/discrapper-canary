n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(692547),
    s = n(481060),
    c = n(358221),
    u = n(594190),
    d = n(199902),
    p = n(924557),
    h = n(435064),
    f = n(354459),
    m = n(388032),
    g = n(580168);
let b = (e) => {
    let { className: t, channelId: n } = e,
        i = (0, p.Go)(),
        b = h.Z.isDecoupledGameClippingEnabled();
    return (0, o.e7)([d.Z, c.Z, h.Z, u.ZP], () => {
        var e;
        if (null == n) return !1;
        let t = d.Z.getCurrentUserActiveStream(),
            r = null == (e = u.ZP.getVisibleGame()) ? void 0 : e.windowHandle;
        return (null != t && !!h.Z.getSettings().clipsEnabled && !!i) || (null != r && !!h.Z.getSettings().decoupledClipsEnabled && !!b) || c.Z.getParticipants(n).some((e) => e.type === f.fO.USER && h.Z.isClipsEnabledForUser(e.user.id));
    })
        ? (0, r.jsxs)(s.DY3, {
              text: m.NW.string(m.t.DJXW3N),
              color: s.FGA.GREY,
              className: l()(t, g.clipsEnabledIndicator),
              children: [
                  (0, r.jsx)(s.G2e, {
                      icon: s.AlX,
                      shape: s.Dv2.ROUND_LEFT,
                      color: a.Z.unsafe_rawColors.PRIMARY_500.css,
                      className: g.clipBadgeIcon
                  }),
                  (0, r.jsx)(s.IGR, {
                      text: m.NW.string(m.t.pCMkDQ),
                      shape: s.Dv2.ROUND_RIGHT,
                      color: a.Z.unsafe_rawColors.PRIMARY_500.css,
                      className: g.clipBadgeText
                  })
              ]
          })
        : null;
};
