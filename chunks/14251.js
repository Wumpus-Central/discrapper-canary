n.d(e, {
    a: function () {
        return u;
    },
    r: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    s = n(481060),
    a = n(785232),
    r = n(594174),
    l = n(5192),
    o = n(388032),
    d = n(762471);
let c = (t, e) => {
        if (1 === t.length) {
            let n = r.default.getUser(t[0]);
            return null != n
                ? (0, i.jsx)(s.Avatar, {
                      src: n.getAvatarURL(e, 32),
                      size: s.AvatarSizes.SIZE_32,
                      'aria-hidden': !0
                  })
                : (0, i.jsx)(s.UserIcon, {});
        }
        return (0, i.jsx)(a.Z, {
            recipients: t,
            size: s.AvatarSizes.SIZE_32
        });
    },
    u = (t, e, n, a) => {
        let c = [...t].map((t) => r.default.getUser(t)),
            u = (t) =>
                (0, i.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    className: d.username,
                    children: l.ZP.getName(n, a, t)
                });
        return e >= 4
            ? o.intl.format(o.t.qfo6KS, {
                  usernameHook1: () => u(c[0]),
                  usernameHook2: () => u(c[1]),
                  numberOfOtherUsers: e - t.length
              })
            : 3 === e
              ? o.intl.format(o.t['67ZE+/'], {
                    usernameHook1: () => u(c[0]),
                    usernameHook2: () => u(c[1])
                })
              : 2 === e
                ? o.intl.format(o.t.veV4IC, {
                      usernameHook1: () => u(c[0]),
                      usernameHook2: () => u(c[1])
                  })
                : o.intl.format(o.t['4WHCtr'], { usernameHook: () => u(c[0]) });
    };
