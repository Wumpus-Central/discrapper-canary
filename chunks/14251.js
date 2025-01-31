n.d(t, {
    a: () => c,
    r: () => _
}),
    n(47120);
var i = n(200651),
    s = n(481060),
    r = n(785232),
    a = n(594174),
    l = n(5192),
    o = n(388032),
    d = n(762471);
let _ = (e, t) => {
        if (1 === e.length) {
            let n = a.default.getUser(e[0]);
            return null != n
                ? (0, i.jsx)(s.qEK, {
                      src: n.getAvatarURL(t, 32),
                      size: s.EFr.SIZE_32,
                      'aria-hidden': !0
                  })
                : (0, i.jsx)(s.tBG, {});
        }
        return (0, i.jsx)(r.Z, {
            recipients: e,
            size: s.EFr.SIZE_32
        });
    },
    c = (e, t, n, r) => {
        let _ = [...e].map((e) => a.default.getUser(e)),
            c = (e) =>
                (0, i.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    className: d.username,
                    children: l.ZP.getName(n, r, e)
                });
        return t >= 4
            ? o.intl.format(o.t.qfo6KS, {
                  usernameHook1: () => c(_[0]),
                  usernameHook2: () => c(_[1]),
                  numberOfOtherUsers: t - e.length
              })
            : 3 === t
              ? o.intl.format(o.t['67ZE+/'], {
                    usernameHook1: () => c(_[0]),
                    usernameHook2: () => c(_[1])
                })
              : 2 === t
                ? o.intl.format(o.t.veV4IC, {
                      usernameHook1: () => c(_[0]),
                      usernameHook2: () => c(_[1])
                  })
                : o.intl.format(o.t['4WHCtr'], { usernameHook: () => c(_[0]) });
    };
