n.d(t, { Z: () => g });
var i = n(54381),
    r = n(442837),
    l = n(692547),
    a = n(28664),
    o = n(481060),
    s = n(358221),
    c = n(594190),
    u = n(199902),
    d = n(435064),
    p = n(341569),
    h = n(354459),
    f = n(388032),
    m = n(842286);
let g = (e) => {
    let { channelId: t } = e;
    return (0, r.e7)([u.Z, s.Z, d.Z, c.ZP], () => {
        var e;
        if (null == t) return !1;
        let n = u.Z.getCurrentUserActiveStream(),
            i = null == (e = c.ZP.getVisibleGame()) ? void 0 : e.windowHandle;
        return (
            !!((null != n && (0, p.LI)()) || (null != i && (0, p.CY)())) ||
            s.Z.getParticipants(t).some((e) => e.type === h.fO.USER && d.Z.isClipsEnabledForUser(e.user.id))
        );
    })
        ? (0, i.jsx)(a.u, {
              text: f.intl.string(f.t.DJXW3G),
              children: (0, i.jsxs)("div", {
                  className: m.clipsEnabledIndicator,
                  children: [
                      (0, i.jsx)(o.G2e, {
                          icon: o.AlX,
                          shape: o.Dv2.ROUND_LEFT,
                          color: l.Z.unsafe_rawColors.PRIMARY_500.css,
                          className: m.clipBadgeIcon,
                      }),
                      (0, i.jsx)(o.IGR, {
                          text: f.intl.string(f.t.pCMkDb),
                          shape: o.Dv2.ROUND_RIGHT,
                          color: l.Z.unsafe_rawColors.PRIMARY_500.css,
                          className: m.clipBadgeText,
                      }),
                  ],
              }),
          })
        : null;
};
