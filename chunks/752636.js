var a = i(477900),
    n = i(582128),
    l = i(143413),
    r = i(549587);
let o = n.memo(r.Ay);
i.d(
    t,
    {},
    {
        A: function (e) {
            let {
                message: t,
                channel: i,
                author: n,
                compact: r,
                animateAvatar: s,
                guildId: d,
                isGroupStart: u = !0,
                roleIcon: c,
                hideTimestamp: m,
                hideGuildTag: h,
                preview: p,
                avatarDecorationOverride: g,
                avatarOverride: _,
                usernameClassName: A,
            } = e;
            return !(0, l.A)(t) && (u || r)
                ? (0, a.jsx)(o, {
                      message: t,
                      channel: i,
                      author: n,
                      guildId: d,
                      compact: r,
                      animate: s,
                      roleIcon: c,
                      hideTimestamp: m,
                      hideGuildTag: h,
                      preview: p,
                      avatarDecorationOverride: g,
                      avatarOverride: _,
                      usernameClassName: A,
                  })
                : void 0;
        },
    },
);
