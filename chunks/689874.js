n.d(t, { A: () => g });
var i = n(627968),
    l = n(311907),
    s = n(827734),
    a = n(990078),
    r = n(397927),
    o = n(313961),
    c = n(15285),
    d = n(616356),
    u = n(274372),
    h = n(572164),
    A = n(806931),
    _ = n(985018),
    m = n(613069);
let g = (e) => {
    let { channelId: t } = e;
    return (0, l.bG)([d.A, o.A, u.A, c.Ay], () => {
        if (null == t) return !1;
        let e = d.A.getCurrentUserActiveStream(),
            n = c.Ay.getVisibleGame()?.windowHandle;
        return (
            !!((null != e && (0, h.TD)()) || (null != n && (0, h.Ao)())) ||
            o.A.getParticipants(t).some((e) => e.type === A.lp.USER && u.A.isClipsEnabledForUser(e.user.id))
        );
    })
        ? (0, i.jsx)(a.m, {
              text: _.intl.string(_.t.DJXW3G),
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
                          text: _.intl.string(_.t.pCMkDb),
                          shape: r.EGs.ROUND_RIGHT,
                          color: s.A.unsafe_rawColors.PRIMARY_500.css,
                          className: m.lm,
                      }),
                  ],
              }),
          })
        : null;
};
