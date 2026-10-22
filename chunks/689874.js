t.d(s, { A: () => y });
var n = t(477900),
    r = t(17928),
    l = t(661531),
    a = t(866665),
    i = t(812993),
    c = t(176781),
    u = t(62010),
    d = t(198052),
    p = t(952818),
    o = t(616356),
    A = t(274372),
    x = t(572164),
    h = t(806931),
    m = t(105292),
    v = t(874566);
let y = function (e) {
    let { channelId: s } = e;
    return (0, r.bG)([o.A, d.A, A.Ay, p.Ay], () => {
        if (null == s) return !1;
        let e = o.A.getCurrentUserActiveStream(),
            t = p.Ay.getVisibleGame()?.windowHandle;
        return (
            (!!(0, x.T)() && (null != e || null != t)) ||
            d.A.getParticipants(s).some((e) => e.type === h.lp.USER && A.Ay.isClipsEnabledForUser(e.user.id))
        );
    })
        ? (0, n.jsx)(a.m, {
              text: m.intl.string(m.t.DJXW3G),
              children: (0, n.jsxs)("div", {
                  className: v.g0,
                  children: [
                      (0, n.jsx)(i.fk, {
                          icon: c.x,
                          shape: i.EG.ROUND,
                          color: l.A.unsafe_rawColors.PRIMARY_500.css,
                          className: v.Z7,
                      }),
                      (0, n.jsx)("span", {
                          className: v.lm,
                          children: (0, n.jsx)(u.E, {
                              type: { text: m.intl.string(m.t.pCMkDb) },
                              variant: "secondary",
                          }),
                      }),
                  ],
              }),
          })
        : null;
};
