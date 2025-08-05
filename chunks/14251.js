(t.d(n, {
    a: () => u,
    r: () => c
}),
    t(388685));
var s = t(255367),
    i = t(481060),
    r = t(785232),
    a = t(594174),
    l = t(5192),
    o = t(388032),
    d = t(193728);
let c = (e, n) => {
        if (1 === e.length) {
            let t = a.default.getUser(e[0]);
            return null != t
                ? (0, s.jsx)(i.qEK, {
                      src: t.getAvatarURL(n, 32),
                      size: i.EFr.SIZE_32,
                      'aria-hidden': !0
                  })
                : (0, s.jsx)(i.tBG, {});
        }
        return (0, s.jsx)(r.Z, {
            recipients: e,
            size: i.EFr.SIZE_32
        });
    },
    u = (e, n, t, r) => {
        let c = [...e].map((e) => a.default.getUser(e)),
            u = (e) =>
                (0, s.jsx)(i.Text, {
                    variant: 'text-md/semibold',
                    className: d.username,
                    children: l.ZP.getName(t, r, e)
                });
        return n >= 4
            ? o.intl.format(o.t.qfo6KS, {
                  usernameHook1: () => u(c[0]),
                  usernameHook2: () => u(c[1]),
                  numberOfOtherUsers: n - e.length
              })
            : 3 === n
              ? o.intl.format(o.t['67ZE+/'], {
                    usernameHook1: () => u(c[0]),
                    usernameHook2: () => u(c[1])
                })
              : 2 === n
                ? o.intl.format(o.t.veV4IC, {
                      usernameHook1: () => u(c[0]),
                      usernameHook2: () => u(c[1])
                  })
                : o.intl.format(o.t['4WHCtr'], { usernameHook: () => u(c[0]) });
    };
