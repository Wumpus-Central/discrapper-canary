t.d(n, {
    a: () => u,
    r: () => d,
}),
    t(388685);
var r = t(255367),
    s = t(481060),
    i = t(785232),
    a = t(594174),
    o = t(5192),
    l = t(388032),
    c = t(193728);
let d = (e, n) => {
        if (1 === e.length) {
            let t = a.default.getUser(e[0]);
            return null != t
                ? (0, r.jsx)(s.qEK, {
                      src: t.getAvatarURL(n, 32),
                      size: s.EFr.SIZE_32,
                      "aria-hidden": !0,
                  })
                : (0, r.jsx)(s.tBG, {});
        }
        return (0, r.jsx)(i.Z, {
            recipients: e,
            size: s.EFr.SIZE_32,
        });
    },
    u = (e, n, t, i) => {
        let d = [...e].map((e) => a.default.getUser(e)),
            u = (e) =>
                (0, r.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    className: c.username,
                    children: o.ZP.getName(t, i, e),
                });
        return n >= 4
            ? l.intl.format(l.t.qfo6KS, {
                  usernameHook1: () => u(d[0]),
                  usernameHook2: () => u(d[1]),
                  numberOfOtherUsers: n - e.length,
              })
            : 3 === n
              ? l.intl.format(l.t["67ZE+/"], {
                    usernameHook1: () => u(d[0]),
                    usernameHook2: () => u(d[1]),
                })
              : 2 === n
                ? l.intl.format(l.t.veV4IC, {
                      usernameHook1: () => u(d[0]),
                      usernameHook2: () => u(d[1]),
                  })
                : l.intl.format(l.t["4WHCtr"], { usernameHook: () => u(d[0]) });
    };
