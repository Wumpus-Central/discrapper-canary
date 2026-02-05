"use strict";
n.d(t, { A: () => i }), n(938796);
var r = n(507698);
function i(e) {
    let {
        id: t,
        username: n,
        discriminator: i,
        globalName: a,
        avatar: s,
        avatarDecoration: o,
        bot: l,
        flags: u,
        premiumType: c,
    } = e;
    return {
        id: t,
        username: n,
        discriminator: i,
        global_name: a,
        avatar: s,
        avatar_decoration_data: (0, r.Xq)(o),
        bot: l,
        flags: u,
        premium_type: c ?? 0,
    };
}
