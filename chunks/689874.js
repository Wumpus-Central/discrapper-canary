t.d(e, { A: () => _ });
var r = t(477900),
    l = t(17928),
    n = t(661531),
    a = t(866665),
    i = t(812993),
    c = t(176781),
    u = t(198052),
    o = t(952818),
    A = t(286134),
    d = t(616356),
    p = t(274372),
    h = t(572164),
    m = t(806931),
    x = t(660183),
    R = t(874566);
let _ = function (s) {
    let { channelId: e } = s;
    return (0, l.bG)([d.A, u.A, p.Ay, o.Ay], () => {
        if (null == e) return !1;
        let s = d.A.getCurrentUserActiveStream(),
            t = o.Ay.getVisibleGame()?.windowHandle;
        return (
            (!!(0, h.T)() && (null != s || null != t)) ||
            u.A.getParticipants(e).some((s) => s.type === m.lp.USER && p.Ay.isClipsEnabledForUser(s.user.id))
        );
    })
        ? (0, r.jsx)(a.m, {
              text: x.intl.string(x.t.DJXW3G),
              children: (0, r.jsxs)("div", {
                  className: R.g0,
                  children: [
                      (0, r.jsx)(i.fk, {
                          icon: c.x,
                          shape: i.EG.ROUND_LEFT,
                          color: n.A.unsafe_rawColors.PRIMARY_500.css,
                          className: R.Z7,
                      }),
                      (0, r.jsx)(A.Ay, {
                          text: x.intl.string(x.t.pCMkDb),
                          shape: i.EG.ROUND_RIGHT,
                          color: n.A.unsafe_rawColors.PRIMARY_500.css,
                          className: R.lm,
                      }),
                  ],
              }),
          })
        : null;
};
