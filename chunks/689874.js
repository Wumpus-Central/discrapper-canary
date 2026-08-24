t.d(e, { A: () => R });
var r = t(477900),
    l = t(17928),
    n = t(661531),
    a = t(866665),
    i = t(812993),
    c = t(176781),
    u = t(198052),
    o = t(952818),
    p = t(616356),
    A = t(915725),
    d = t(572164),
    h = t(806931),
    m = t(375708),
    x = t(874566);
let R = function (s) {
    let { channelId: e } = s;
    return (0, l.bG)([p.A, u.A, A.Ay, o.Ay], () => {
        if (null == e) return !1;
        let s = p.A.getCurrentUserActiveStream(),
            t = o.Ay.getVisibleGame()?.windowHandle;
        return (
            (!!(0, d.T)() && (null != s || null != t)) ||
            u.A.getParticipants(e).some((s) => s.type === h.lp.USER && A.Ay.isClipsEnabledForUser(s.user.id))
        );
    })
        ? (0, r.jsx)(a.m, {
              text: m.intl.string(m.t.DJXW3G),
              children: (0, r.jsxs)("div", {
                  className: x.g0,
                  children: [
                      (0, r.jsx)(i.fk, {
                          icon: c.x,
                          shape: i.EG.ROUND_LEFT,
                          color: n.A.unsafe_rawColors.PRIMARY_500.css,
                          className: x.Z7,
                      }),
                      (0, r.jsx)(i.Lp, {
                          text: m.intl.string(m.t.pCMkDb),
                          shape: i.EG.ROUND_RIGHT,
                          color: n.A.unsafe_rawColors.PRIMARY_500.css,
                          className: x.lm,
                      }),
                  ],
              }),
          })
        : null;
};
