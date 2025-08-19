n.d(e, {
    a: () => _,
    r: () => c,
}),
    n(388685);
var i = n(951288),
    r = n(481060),
    s = n(785232),
    a = n(594174),
    l = n(5192),
    o = n(388032),
    u = n(405842);
let c = (t, e) => {
        if (1 === t.length) {
            let n = a.default.getUser(t[0]);
            return null != n
                ? (0, i.jsx)(r.qEK, {
                      src: n.getAvatarURL(e, 32),
                      size: r.EFr.SIZE_32,
                      "aria-hidden": !0,
                  })
                : (0, i.jsx)(r.tBG, {});
        }
        return (0, i.jsx)(s.Z, {
            recipients: t,
            size: r.EFr.SIZE_32,
        });
    },
    _ = (t, e, n, s) => {
        let c = [...t].map((t) => a.default.getUser(t)),
            _ = (t) =>
                (0, i.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    className: u.username,
                    children: l.ZP.getName(n, s, t),
                });
        return e >= 4
            ? o.intl.format(o.t.qfo6KS, {
                  usernameHook1: () => _(c[0]),
                  usernameHook2: () => _(c[1]),
                  numberOfOtherUsers: e - t.length,
              })
            : 3 === e
              ? o.intl.format(o.t["67ZE+/"], {
                    usernameHook1: () => _(c[0]),
                    usernameHook2: () => _(c[1]),
                })
              : 2 === e
                ? o.intl.format(o.t.veV4IC, {
                      usernameHook1: () => _(c[0]),
                      usernameHook2: () => _(c[1]),
                  })
                : o.intl.format(o.t["4WHCtr"], { usernameHook: () => _(c[0]) });
    };
