n.d(e, {
    a: () => c,
    r: () => _,
}),
    n(388685);
var r = n(951288),
    i = n(481060),
    s = n(785232),
    a = n(594174),
    l = n(5192),
    o = n(388032),
    u = n(405842);
let _ = (t, e) => {
        if (1 === t.length) {
            let n = a.default.getUser(t[0]);
            return null != n
                ? (0, r.jsx)(i.qEK, {
                      src: n.getAvatarURL(e, 32),
                      size: i.EFr.SIZE_32,
                      "aria-hidden": !0,
                  })
                : (0, r.jsx)(i.tBG, {});
        }
        return (0, r.jsx)(s.Z, {
            recipients: t,
            size: i.EFr.SIZE_32,
        });
    },
    c = (t, e, n, s) => {
        let _ = [...t].map((t) => a.default.getUser(t)),
            c = (t) =>
                (0, r.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    className: u.username,
                    children: l.ZP.getName(n, s, t),
                });
        return e >= 4
            ? o.intl.format(o.t.qfo6KS, {
                  usernameHook1: () => c(_[0]),
                  usernameHook2: () => c(_[1]),
                  numberOfOtherUsers: e - t.length,
              })
            : 3 === e
              ? o.intl.format(o.t["67ZE+/"], {
                    usernameHook1: () => c(_[0]),
                    usernameHook2: () => c(_[1]),
                })
              : 2 === e
                ? o.intl.format(o.t.veV4IC, {
                      usernameHook1: () => c(_[0]),
                      usernameHook2: () => c(_[1]),
                  })
                : o.intl.format(o.t["4WHCtr"], { usernameHook: () => c(_[0]) });
    };
