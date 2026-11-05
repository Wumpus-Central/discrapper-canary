var r = n(477900),
    i = n(855986),
    s = n(866665),
    l = n(805251),
    a = n(176781),
    c = n(628983),
    d = n(397369),
    u = n(616356),
    p = n(419490),
    o = n(572164),
    A = n(806931),
    h = n(792996),
    y = n(874566);
n.d(
    e,
    {},
    {
        A: function (t) {
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
                          className: y.g,
                          children: (0, r.jsx)(l.E, {
                              type: { text: h.intl.string(h.t.pCMkDb) },
                              variant: "secondary",
                              icon: a.ClipsIcon,
                          }),
                      }),
                  })
                : null;
        },
    },
);
