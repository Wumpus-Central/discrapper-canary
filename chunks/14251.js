r.d(n, {
    a: () => m,
    r: () => c,
}),
    r(388685);
var t = r(255367),
    s = r(481060),
    i = r(785232),
    a = r(594174),
    l = r(5192),
    o = r(388032),
    d = r(405842);
let c = (e, n) => {
        if (1 === e.length) {
            let r = a.default.getUser(e[0]);
            return null != r
                ? (0, t.jsx)(s.qEK, {
                      src: r.getAvatarURL(n, 32),
                      size: s.EFr.SIZE_32,
                      "aria-hidden": !0,
                  })
                : (0, t.jsx)(s.tBG, {});
        }
        return (0, t.jsx)(i.Z, {
            recipients: e,
            size: s.EFr.SIZE_32,
        });
    },
    m = (e, n, r, i) => {
        let c = [...e].map((e) => a.default.getUser(e)),
            m = (e) =>
                (0, t.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    className: d.username,
                    children: l.ZP.getName(r, i, e),
                });
        return n >= 4
            ? o.intl.format(o.t.qfo6KS, {
                  usernameHook1: () => m(c[0]),
                  usernameHook2: () => m(c[1]),
                  numberOfOtherUsers: n - e.length,
              })
            : 3 === n
              ? o.intl.format(o.t["67ZE+/"], {
                    usernameHook1: () => m(c[0]),
                    usernameHook2: () => m(c[1]),
                })
              : 2 === n
                ? o.intl.format(o.t.veV4IC, {
                      usernameHook1: () => m(c[0]),
                      usernameHook2: () => m(c[1]),
                  })
                : o.intl.format(o.t["4WHCtr"], { usernameHook: () => m(c[0]) });
    };
