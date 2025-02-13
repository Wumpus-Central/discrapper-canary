n.d(t, {
    a: () => d,
    r: () => c
}),
    n(47120);
var s = n(200651),
    i = n(481060),
    r = n(785232),
    a = n(594174),
    l = n(5192),
    o = n(388032),
    _ = n(882587);
let c = (e, t) => {
        if (1 === e.length) {
            let n = a.default.getUser(e[0]);
            return null != n
                ? (0, s.jsx)(i.qEK, {
                      src: n.getAvatarURL(t, 32),
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
    d = (e, t, n, r) => {
        let c = [...e].map((e) => a.default.getUser(e)),
            d = (e) =>
                (0, s.jsx)(i.Text, {
                    variant: 'text-md/semibold',
                    className: _.username,
                    children: l.ZP.getName(n, r, e)
                });
        return t >= 4
            ? o.intl.format(o.t.qfo6KS, {
                  usernameHook1: () => d(c[0]),
                  usernameHook2: () => d(c[1]),
                  numberOfOtherUsers: t - e.length
              })
            : 3 === t
              ? o.intl.format(o.t['67ZE+/'], {
                    usernameHook1: () => d(c[0]),
                    usernameHook2: () => d(c[1])
                })
              : 2 === t
                ? o.intl.format(o.t.veV4IC, {
                      usernameHook1: () => d(c[0]),
                      usernameHook2: () => d(c[1])
                  })
                : o.intl.format(o.t['4WHCtr'], { usernameHook: () => d(c[0]) });
    };
