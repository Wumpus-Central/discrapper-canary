n.d(t, {
    a: () => d,
    r: () => u
}),
    n(388685);
var r = n(200651),
    s = n(481060),
    i = n(785232),
    a = n(594174),
    l = n(5192),
    o = n(388032),
    c = n(193728);
let u = (e, t) => {
        if (1 === e.length) {
            let n = a.default.getUser(e[0]);
            return null != n
                ? (0, r.jsx)(s.qEK, {
                      src: n.getAvatarURL(t, 32),
                      size: s.EFr.SIZE_32,
                      'aria-hidden': !0
                  })
                : (0, r.jsx)(s.tBG, {});
        }
        return (0, r.jsx)(i.Z, {
            recipients: e,
            size: s.EFr.SIZE_32
        });
    },
    d = (e, t, n, i) => {
        let u = [...e].map((e) => a.default.getUser(e)),
            d = (e) =>
                (0, r.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    className: c.username,
                    children: l.ZP.getName(n, i, e)
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
