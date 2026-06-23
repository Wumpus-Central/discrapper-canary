t.d(e, { A: () => R });
var r = t(627968),
    l = t(17928),
    n = t(661531),
    a = t(990078),
    i = t(812993),
    c = t(176781),
    o = t(313961),
    u = t(952818),
    A = t(616356),
    p = t(274372),
    d = t(572164),
    h = t(806931),
    m = t(375708),
    x = t(576061);
let R = function (s) {
    let { channelId: e } = s;
    return (0, l.bG)([A.A, o.A, p.Ay, u.Ay], () => {
        if (null == e) return !1;
        let s = A.A.getCurrentUserActiveStream(),
            t = u.Ay.getVisibleGame()?.windowHandle;
        return (
            !!((null != s && (0, d.TD)()) || (null != t && (0, d.Ao)())) ||
            o.A.getParticipants(e).some((s) => s.type === h.lp.USER && p.Ay.isClipsEnabledForUser(s.user.id))
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
