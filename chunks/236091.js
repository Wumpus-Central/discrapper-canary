n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(692547),
    l = n(481060),
    c = n(358221),
    u = n(594190),
    d = n(199902),
    f = n(924557),
    _ = n(435064),
    p = n(354459),
    h = n(388032),
    m = n(811191);
let g = (e) => {
    let { className: t, channelId: n } = e,
        i = (0, f.Go)(),
        g = _.Z.isDecoupledGameClippingEnabled();
    return (0, o.e7)([d.Z, c.Z, _.Z, u.ZP], () => {
        var e;
        if (null == n) return !1;
        let t = d.Z.getCurrentUserActiveStream(),
            r = null == (e = u.ZP.getVisibleGame()) ? void 0 : e.windowHandle;
        return (null != t && !!_.Z.getSettings().clipsEnabled && !!i) || (null != r && !!_.Z.getSettings().decoupledClipsEnabled && !!g) || c.Z.getParticipants(n).some((e) => e.type === p.fO.USER && _.Z.isClipsEnabledForUser(e.user.id));
    })
        ? (0, r.jsxs)(l.DY3, {
              text: h.intl.string(h.t.DJXW3N),
              color: l.FGA.GREY,
              className: a()(t, m.clipsEnabledIndicator),
              children: [
                  (0, r.jsx)(l.G2e, {
                      icon: l.AlX,
                      shape: l.Dv2.ROUND_LEFT,
                      color: s.Z.unsafe_rawColors.PRIMARY_500.css,
                      className: m.clipBadgeIcon
                  }),
                  (0, r.jsx)(l.IGR, {
                      text: h.intl.string(h.t.pCMkDQ),
                      shape: l.Dv2.ROUND_RIGHT,
                      color: s.Z.unsafe_rawColors.PRIMARY_500.css,
                      className: m.clipBadgeText
                  })
              ]
          })
        : null;
};
