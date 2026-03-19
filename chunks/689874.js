"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(311907),
    l = n(827734),
    a = n(990078),
    r = n(397927),
    o = n(313961),
    c = n(15285),
    d = n(616356),
    u = n(274372),
    h = n(572164),
    A = n(806931),
    m = n(985018),
    g = n(27962);
let p = (e) => {
    let { channelId: t } = e;
    return (0, s.bG)([d.A, o.A, u.A, c.Ay], () => {
        if (null == t) return !1;
        let e = d.A.getCurrentUserActiveStream(),
            n = c.Ay.getVisibleGame()?.windowHandle;
        return (
            !!((null != e && (0, h.TD)()) || (null != n && (0, h.Ao)())) ||
            o.A.getParticipants(t).some((e) => e.type === A.lp.USER && u.A.isClipsEnabledForUser(e.user.id))
        );
    })
        ? (0, i.jsx)(a.m, {
              text: m.intl.string(m.t.DJXW3G),
              children: (0, i.jsxs)("div", {
                  className: g.g0,
                  children: [
                      (0, i.jsx)(r.fkz, {
                          icon: r.xgA,
                          shape: r.EGs.ROUND_LEFT,
                          color: l.A.unsafe_rawColors.PRIMARY_500.css,
                          className: g.Z7,
                      }),
                      (0, i.jsx)(r.LpS, {
                          text: m.intl.string(m.t.pCMkDb),
                          shape: r.EGs.ROUND_RIGHT,
                          color: l.A.unsafe_rawColors.PRIMARY_500.css,
                          className: g.lm,
                      }),
                  ],
              }),
          })
        : null;
};
