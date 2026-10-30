n.d(e, { A: () => m });
var r = n(477900),
    i = n(17928),
    s = n(866665),
    l = n(62010),
    a = n(176781),
    c = n(198052),
    u = n(952818),
    d = n(616356),
    p = n(738935),
    A = n(572164),
    o = n(806931),
    x = n(105292),
    h = n(874566);
let m = function (t) {
    let { channelId: e } = t;
    return (0, i.bG)([d.A, c.A, p.Ay, u.Ay], () => {
        if (null == e) return !1;
        let t = d.A.getCurrentUserActiveStream(),
            n = u.Ay.getVisibleGame()?.windowHandle;
        return (
            (!!(0, A.T)() && (null != t || null != n)) ||
            c.A.getParticipants(e).some((t) => t.type === o.lp.USER && p.Ay.isClipsEnabledForUser(t.user.id))
        );
    })
        ? (0, r.jsx)(s.m, {
              text: x.intl.string(x.t.DJXW3G),
              children: (0, r.jsx)("div", {
                  className: h.g,
                  children: (0, r.jsx)(l.E, {
                      type: { text: x.intl.string(x.t.pCMkDb) },
                      variant: "secondary",
                      icon: a.x,
                  }),
              }),
          })
        : null;
};
