n.d(t, {
    a: () => u,
    r: () => c,
}),
    n(388685);
var i = n(54381),
    s = n(481060),
    r = n(785232),
    a = n(594174),
    l = n(5192),
    o = n(388032),
    d = n(405842);
let c = (e, t) => {
        if (1 === e.length) {
            let n = a.default.getUser(e[0]);
            return null != n
                ? (0, i.jsx)(s.qEK, {
                      src: n.getAvatarURL(t, 32),
                      size: s.EFr.SIZE_32,
                      "aria-hidden": !0,
                  })
                : (0, i.jsx)(s.tBG, {});
        }
        return (0, i.jsx)(r.Z, {
            recipients: e,
            size: s.EFr.SIZE_32,
        });
    },
    u = (e, t, n, r) => {
        let c = [...e].map((e) => a.default.getUser(e)),
            u = (e) =>
                (0, i.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    className: d.username,
                    children: l.ZP.getName(n, r, e),
                });
        return t >= 4
            ? o.intl.format(o.t.qfo6KR, {
                  usernameHook1: () => u(c[0]),
                  usernameHook2: () => u(c[1]),
                  numberOfOtherUsers: t - e.length,
              })
            : 3 === t
              ? o.intl.format(o.t["67ZE+9"], {
                    usernameHook1: () => u(c[0]),
                    usernameHook2: () => u(c[1]),
                })
              : 2 === t
                ? o.intl.format(o.t.veV4IN, {
                      usernameHook1: () => u(c[0]),
                      usernameHook2: () => u(c[1]),
                  })
                : o.intl.format(o.t["4WHCtq"], { usernameHook: () => u(c[0]) });
    };
