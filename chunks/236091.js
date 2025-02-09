n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(692547),
    o = n(481060),
    c = n(358221),
    d = n(594190),
    u = n(199902),
    h = n(924557),
    p = n(435064),
    m = n(354459),
    f = n(388032),
    g = n(995864);
let _ = (e) => {
    let { className: t, channelId: n } = e,
        l = (0, h.Go)(),
        _ = p.Z.isDecoupledGameClippingEnabled();
    return (0, r.e7)([u.Z, c.Z, p.Z, d.ZP], () => {
        var e;
        if (null == n) return !1;
        let t = u.Z.getCurrentUserActiveStream(),
            i = null === (e = d.ZP.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle;
        return (null != t && !!p.Z.getSettings().clipsEnabled && !!l) || (null != i && !!p.Z.getSettings().decoupledClipsEnabled && !!_) || c.Z.getParticipants(n).some((e) => e.type === m.fO.USER && p.Z.isClipsEnabledForUser(e.user.id));
    })
        ? (0, i.jsxs)(o.DY3, {
              text: f.intl.string(f.t.DJXW3N),
              color: o.FGA.GREY,
              className: a()(t, g.clipsEnabledIndicator),
              children: [
                  (0, i.jsx)(o.G2e, {
                      icon: o.AlX,
                      shape: o.Dv2.ROUND_LEFT,
                      color: s.Z.unsafe_rawColors.PRIMARY_500.css,
                      className: g.clipBadgeIcon
                  }),
                  (0, i.jsx)(o.IGR, {
                      text: f.intl.string(f.t.pCMkDQ),
                      shape: o.Dv2.ROUND_RIGHT,
                      color: s.Z.unsafe_rawColors.PRIMARY_500.css,
                      className: g.clipBadgeText
                  })
              ]
          })
        : null;
};
