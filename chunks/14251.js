t.d(n, {
    a: () => d,
    r: () => u,
}),
    t(388685);
var i = t(54381),
    r = t(481060),
    s = t(785232),
    o = t(594174),
    a = t(5192),
    l = t(388032),
    c = t(405842);
let u = (e, n) => {
        if (1 === e.length) {
            let t = o.default.getUser(e[0]);
            return null != t
                ? (0, i.jsx)(r.qEK, {
                      src: t.getAvatarURL(n, 32),
                      size: r.EFr.SIZE_32,
                      "aria-hidden": !0,
                  })
                : (0, i.jsx)(r.tBG, {});
        }
        return (0, i.jsx)(s.Z, {
            recipients: e,
            size: r.EFr.SIZE_32,
        });
    },
    d = (e, n, t, s) => {
        let u = [...e].map((e) => o.default.getUser(e)),
            d = (e) =>
                (0, i.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    className: c.username,
                    children: a.ZP.getName(t, s, e),
                });
        return n >= 4
            ? l.intl.format(l.t.qfo6KR, {
                  usernameHook1: () => d(u[0]),
                  usernameHook2: () => d(u[1]),
                  numberOfOtherUsers: n - e.length,
              })
            : 3 === n
              ? l.intl.format(l.t["67ZE+9"], {
                    usernameHook1: () => d(u[0]),
                    usernameHook2: () => d(u[1]),
                })
              : 2 === n
                ? l.intl.format(l.t.veV4IN, {
                      usernameHook1: () => d(u[0]),
                      usernameHook2: () => d(u[1]),
                  })
                : l.intl.format(l.t["4WHCtq"], { usernameHook: () => d(u[0]) });
    };
