n.d(t, { A: () => g });
var r = n(627968),
    l = n(311907),
    i = n(827734),
    a = n(990078),
    s = n(397927),
    o = n(313961),
    c = n(15285),
    u = n(616356),
    d = n(274372),
    f = n(572164),
    p = n(806931),
    h = n(985018),
    b = n(639291);
let g = (e) => {
    let { channelId: t } = e;
    return (0, l.bG)([u.A, o.A, d.A, c.Ay], () => {
        var e;
        if (null == t) return !1;
        let n = u.A.getCurrentUserActiveStream(),
            r = null == (e = c.Ay.getVisibleGame()) ? void 0 : e.windowHandle;
        return (
            !!((null != n && (0, f.TD)()) || (null != r && (0, f.Ao)())) ||
            o.A.getParticipants(t).some((e) => e.type === p.lp.USER && d.A.isClipsEnabledForUser(e.user.id))
        );
    })
        ? (0, r.jsx)(a.m, {
              text: h.intl.string(h.t.DJXW3G),
              children: (0, r.jsxs)("div", {
                  className: b.g0,
                  children: [
                      (0, r.jsx)(s.fkz, {
                          icon: s.xgA,
                          shape: s.EGs.ROUND_LEFT,
                          color: i.A.unsafe_rawColors.PRIMARY_500.css,
                          className: b.Z7,
                      }),
                      (0, r.jsx)(s.LpS, {
                          text: h.intl.string(h.t.pCMkDb),
                          shape: s.EGs.ROUND_RIGHT,
                          color: i.A.unsafe_rawColors.PRIMARY_500.css,
                          className: b.lm,
                      }),
                  ],
              }),
          })
        : null;
};
