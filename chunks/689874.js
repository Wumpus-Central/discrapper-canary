r.d(e, { A: () => R });
var t = r(627968),
    l = r(17928),
    a = r(661531),
    n = r(990078),
    i = r(812993),
    c = r(176781),
    o = r(313961),
    u = r(952818),
    A = r(616356),
    p = r(274372),
    d = r(572164),
    h = r(806931),
    m = r(375708),
    x = r(576061);
let R = (s) => {
    let { channelId: e } = s;
    return (0, l.bG)([A.A, o.A, p.Ay, u.Ay], () => {
        if (null == e) return !1;
        let s = A.A.getCurrentUserActiveStream(),
            r = u.Ay.getVisibleGame()?.windowHandle;
        return (
            !!((null != s && (0, d.TD)()) || (null != r && (0, d.Ao)())) ||
            o.A.getParticipants(e).some((s) => s.type === h.lp.USER && p.Ay.isClipsEnabledForUser(s.user.id))
        );
    })
        ? (0, t.jsx)(n.m, {
              text: m.intl.string(m.t.DJXW3G),
              children: (0, t.jsxs)("div", {
                  className: x.g0,
                  children: [
                      (0, t.jsx)(i.fk, {
                          icon: c.x,
                          shape: i.EG.ROUND_LEFT,
                          color: a.A.unsafe_rawColors.PRIMARY_500.css,
                          className: x.Z7,
                      }),
                      (0, t.jsx)(i.Lp, {
                          text: m.intl.string(m.t.pCMkDb),
                          shape: i.EG.ROUND_RIGHT,
                          color: a.A.unsafe_rawColors.PRIMARY_500.css,
                          className: x.lm,
                      }),
                  ],
              }),
          })
        : null;
};
