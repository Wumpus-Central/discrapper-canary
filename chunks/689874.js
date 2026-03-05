"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(311907),
    l = n(827734),
    r = n(990078),
    a = n(397927),
    o = n(313961),
    c = n(15285),
    d = n(616356),
    u = n(274372),
    h = n(572164),
    A = n(806931),
    m = n(985018),
    p = n(27962);
let g = (e) => {
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
        ? (0, i.jsx)(r.m, {
              text: m.intl.string(m.t.DJXW3G),
              children: (0, i.jsxs)("div", {
                  className: p.g0,
                  children: [
                      (0, i.jsx)(a.fkz, {
                          icon: a.xgA,
                          shape: a.EGs.ROUND_LEFT,
                          color: l.A.unsafe_rawColors.PRIMARY_500.css,
                          className: p.Z7,
                      }),
                      (0, i.jsx)(a.LpS, {
                          text: m.intl.string(m.t.pCMkDb),
                          shape: a.EGs.ROUND_RIGHT,
                          color: l.A.unsafe_rawColors.PRIMARY_500.css,
                          className: p.lm,
                      }),
                  ],
              }),
          })
        : null;
};
