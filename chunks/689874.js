n.d(t, { A: () => p });
var i = n(627968),
    l = n(311907),
    s = n(827734),
    a = n(990078),
    r = n(777666),
    o = n(176781),
    d = n(313961),
    c = n(15285),
    u = n(616356),
    h = n(274372),
    A = n(572164),
    _ = n(806931),
    m = n(985018),
    g = n(576061);
let p = (e) => {
    let { channelId: t } = e;
    return (0, l.bG)([u.A, d.A, h.A, c.Ay], () => {
        if (null == t) return !1;
        let e = u.A.getCurrentUserActiveStream(),
            n = c.Ay.getVisibleGame()?.windowHandle;
        return (
            !!((null != e && (0, A.TD)()) || (null != n && (0, A.Ao)())) ||
            d.A.getParticipants(t).some((e) => e.type === _.lp.USER && h.A.isClipsEnabledForUser(e.user.id))
        );
    })
        ? (0, i.jsx)(a.m, {
              text: m.intl.string(m.t.DJXW3G),
              children: (0, i.jsxs)("div", {
                  className: g.g0,
                  children: [
                      (0, i.jsx)(r.fk, {
                          icon: o.x,
                          shape: r.EG.ROUND_LEFT,
                          color: s.A.unsafe_rawColors.PRIMARY_500.css,
                          className: g.Z7,
                      }),
                      (0, i.jsx)(r.Lp, {
                          text: m.intl.string(m.t.pCMkDb),
                          shape: r.EG.ROUND_RIGHT,
                          color: s.A.unsafe_rawColors.PRIMARY_500.css,
                          className: g.lm,
                      }),
                  ],
              }),
          })
        : null;
};
