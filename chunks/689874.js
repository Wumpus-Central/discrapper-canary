n.d(e, { A: () => y });
var r = n(477900),
    i = n(17928),
    s = n(866665),
    l = n(62010),
    a = n(176781),
    c = n(198052),
    d = n(952818),
    u = n(616356),
    p = n(738935),
    o = n(572164),
    A = n(806931),
    h = n(105292),
    x = n(874566);
let y = function (t) {
    let { channelId: e } = t;
    return (0, i.bG)([u.A, c.A, p.Ay, d.Ay], () => {
        if (null == e) return !1;
        let t = u.A.getCurrentUserActiveStream(),
            n = d.Ay.getVisibleGame()?.windowHandle;
        return (
            (!!(0, o.T)() && (null != t || null != n)) ||
            c.A.getParticipants(e).some((t) => t.type === A.lp.USER && p.Ay.isClipsEnabledForUser(t.user.id))
        );
    })
        ? (0, r.jsx)(s.m, {
              text: h.intl.string(h.t.DJXW3G),
              children: (0, r.jsx)("div", {
                  className: x.g,
                  children: (0, r.jsx)(l.E, {
                      type: { text: h.intl.string(h.t.pCMkDb) },
                      variant: "secondary",
                      icon: a.x,
                  }),
              }),
          })
        : null;
};
