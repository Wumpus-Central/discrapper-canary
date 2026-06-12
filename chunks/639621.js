"use strict";
n.d(t, { A: () => r }), n(938796);
var i = n(821956);
function r(e) {
    let {
        id: t,
        username: n,
        discriminator: r,
        globalName: s,
        avatar: a,
        avatarDecoration: o,
        bot: l,
        flags: u,
        premiumType: c,
    } = e;
    return {
        id: t,
        username: n,
        discriminator: r,
        global_name: s,
        avatar: a,
        avatar_decoration_data: (0, i.Xq)(o),
        bot: l,
        flags: u,
        premium_type: c ?? 0,
    };
}
