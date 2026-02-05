n.d(t, { A: () => p });
var i = n(627968),
    l = n(311907),
    s = n(827734),
    a = n(990078),
    r = n(397927),
    o = n(313961),
    d = n(15285),
    c = n(616356),
    u = n(274372),
    h = n(572164),
    A = n(806931),
    g = n(985018),
    m = n(639291);
let p = (e) => {
    let { channelId: t } = e;
    return (0, l.bG)([c.A, o.A, u.A, d.Ay], () => {
        if (null == t) return !1;
        let e = c.A.getCurrentUserActiveStream(),
            n = d.Ay.getVisibleGame()?.windowHandle;
        return (
            !!((null != e && (0, h.TD)()) || (null != n && (0, h.Ao)())) ||
            o.A.getParticipants(t).some((e) => e.type === A.lp.USER && u.A.isClipsEnabledForUser(e.user.id))
        );
    })
        ? (0, i.jsx)(a.m, {
              text: g.intl.string(g.t.DJXW3G),
              children: (0, i.jsxs)("div", {
                  className: m.g0,
                  children: [
                      (0, i.jsx)(r.fkz, {
                          icon: r.xgA,
                          shape: r.EGs.ROUND_LEFT,
                          color: s.A.unsafe_rawColors.PRIMARY_500.css,
                          className: m.Z7,
                      }),
                      (0, i.jsx)(r.LpS, {
                          text: g.intl.string(g.t.pCMkDb),
                          shape: r.EGs.ROUND_RIGHT,
                          color: s.A.unsafe_rawColors.PRIMARY_500.css,
                          className: m.lm,
                      }),
                  ],
              }),
          })
        : null;
};
