n.d(t, { A: () => f });
var r = n(627968),
    s = n(17928),
    i = n(661531),
    a = n(990078),
    l = n(777666),
    o = n(176781),
    d = n(313961),
    c = n(328153),
    g = n(616356),
    u = n(274372),
    h = n(572164),
    p = n(806931),
    v = n(985018),
    m = n(576061);
let f = (e) => {
    let { channelId: t } = e;
    return (0, s.bG)([g.A, d.A, u.A, c.Ay], () => {
        if (null == t) return !1;
        let e = g.A.getCurrentUserActiveStream(),
            n = c.Ay.getVisibleGame()?.windowHandle;
        return (
            !!((null != e && (0, h.TD)()) || (null != n && (0, h.Ao)())) ||
            d.A.getParticipants(t).some((e) => e.type === p.lp.USER && u.A.isClipsEnabledForUser(e.user.id))
        );
    })
        ? (0, r.jsx)(a.m, {
              text: v.intl.string(v.t.DJXW3G),
              children: (0, r.jsxs)("div", {
                  className: m.g0,
                  children: [
                      (0, r.jsx)(l.fk, {
                          icon: o.x,
                          shape: l.EG.ROUND_LEFT,
                          color: i.A.unsafe_rawColors.PRIMARY_500.css,
                          className: m.Z7,
                      }),
                      (0, r.jsx)(l.Lp, {
                          text: v.intl.string(v.t.pCMkDb),
                          shape: l.EG.ROUND_RIGHT,
                          color: i.A.unsafe_rawColors.PRIMARY_500.css,
                          className: m.lm,
                      }),
                  ],
              }),
          })
        : null;
};
