r.d(t, {
    a: () => _,
    r: () => u
}),
    r(388685);
var n = r(200651),
    s = r(481060),
    i = r(785232),
    a = r(594174),
    o = r(5192),
    l = r(388032),
    c = r(193728);
let u = (e, t) => {
        if (1 === e.length) {
            let r = a.default.getUser(e[0]);
            return null != r
                ? (0, n.jsx)(s.qEK, {
                      src: r.getAvatarURL(t, 32),
                      size: s.EFr.SIZE_32,
                      'aria-hidden': !0
                  })
                : (0, n.jsx)(s.tBG, {});
        }
        return (0, n.jsx)(i.Z, {
            recipients: e,
            size: s.EFr.SIZE_32
        });
    },
    _ = (e, t, r, i) => {
        let u = [...e].map((e) => a.default.getUser(e)),
            _ = (e) =>
                (0, n.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    className: c.username,
                    children: o.ZP.getName(r, i, e)
                });
        return t >= 4
            ? l.NW.format(l.t.qfo6KS, {
                  usernameHook1: () => _(u[0]),
                  usernameHook2: () => _(u[1]),
                  numberOfOtherUsers: t - e.length
              })
            : 3 === t
              ? l.NW.format(l.t['67ZE+/'], {
                    usernameHook1: () => _(u[0]),
                    usernameHook2: () => _(u[1])
                })
              : 2 === t
                ? l.NW.format(l.t.veV4IC, {
                      usernameHook1: () => _(u[0]),
                      usernameHook2: () => _(u[1])
                  })
                : l.NW.format(l.t['4WHCtr'], { usernameHook: () => _(u[0]) });
    };
