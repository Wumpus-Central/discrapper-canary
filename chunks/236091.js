n.d(t, { Z: () => g });
var r = n(951288),
    i = n(442837),
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
    return (0, i.e7)([u.Z, s.Z, p.Z, c.ZP], () => {
        var e;
        if (null == t) return !1;
        let r = u.Z.getCurrentUserActiveStream(),
            i = null == (e = c.ZP.getVisibleGame()) ? void 0 : e.windowHandle;
        return (
            (null != r && !!p.Z.getSettings().clipsEnabled && !!n) ||
            (null != i && !!p.Z.getSettings().decoupledClipsEnabled && !!g) ||
            s.Z.getParticipants(t).some((e) => e.type === h.fO.USER && p.Z.isClipsEnabledForUser(e.user.id))
        );
    })
        ? (0, r.jsx)(a.u, {
              text: f.intl.string(f.t.DJXW3N),
              children: (0, r.jsxs)("div", {
                  className: m.clipsEnabledIndicator,
                  children: [
                      (0, r.jsx)(o.G2e, {
                          icon: o.AlX,
                          shape: o.Dv2.ROUND_LEFT,
                          color: l.Z.unsafe_rawColors.PRIMARY_500.css,
                          className: m.clipBadgeIcon,
                      }),
                      (0, r.jsx)(o.IGR, {
                          text: f.intl.string(f.t.pCMkDQ),
                          shape: o.Dv2.ROUND_RIGHT,
                          color: l.Z.unsafe_rawColors.PRIMARY_500.css,
                          className: m.clipBadgeText,
                      }),
                  ],
              }),
          })
        : null;
};
