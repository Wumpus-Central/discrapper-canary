(r.d(t, {
    a: () => d,
    r: () => u
}),
    r(388685));
var n = r(255367),
    s = r(481060),
    i = r(785232),
    a = r(594174),
    l = r(5192),
    o = r(388032),
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
    d = (e, t, r, i) => {
        let u = [...e].map((e) => a.default.getUser(e)),
            d = (e) =>
                (0, n.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    className: c.username,
                    children: l.ZP.getName(r, i, e)
                });
        return t >= 4
            ? o.intl.format(o.t.qfo6KS, {
                  usernameHook1: () => d(u[0]),
                  usernameHook2: () => d(u[1]),
                  numberOfOtherUsers: t - e.length
              })
            : 3 === t
              ? o.intl.format(o.t['67ZE+/'], {
                    usernameHook1: () => d(u[0]),
                    usernameHook2: () => d(u[1])
                })
              : 2 === t
                ? o.intl.format(o.t.veV4IC, {
                      usernameHook1: () => d(u[0]),
                      usernameHook2: () => d(u[1])
                  })
                : o.intl.format(o.t['4WHCtr'], { usernameHook: () => d(u[0]) });
    };
