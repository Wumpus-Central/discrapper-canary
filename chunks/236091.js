n.d(t, { Z: () => g });
var i = n(951288),
    r = n(442837),
    l = n(692547),
    a = n(28664),
    o = n(481060),
    s = n(358221),
    c = n(594190),
    u = n(199902),
    d = n(924557),
    p = n(435064),
    h = n(354459),
    f = n(388032),
    m = n(363862);
let g = (e) => {
    let { channelId: t } = e,
        n = (0, d.Go)(),
        g = p.Z.isDecoupledGameClippingEnabled();
    return (0, r.e7)([u.Z, s.Z, p.Z, c.ZP], () => {
        var e;
        if (null == t) return !1;
        let i = u.Z.getCurrentUserActiveStream(),
            r = null == (e = c.ZP.getVisibleGame()) ? void 0 : e.windowHandle;
        return (
            (null != i && !!p.Z.getSettings().clipsEnabled && !!n) ||
            (null != r && !!p.Z.getSettings().decoupledClipsEnabled && !!g) ||
            s.Z.getParticipants(t).some((e) => e.type === h.fO.USER && p.Z.isClipsEnabledForUser(e.user.id))
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
