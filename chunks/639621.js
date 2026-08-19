"use strict";
n.d(t, { A: () => r }), n(938796);
var i = n(821956);
function r(e) {
    let {
        id: t,
        username: n,
        discriminator: r,
        globalName: a,
        avatar: s,
        avatarDecoration: l,
        bot: o,
        flags: d,
        premiumType: c,
    } = e;
    return {
        id: t,
        username: n,
        discriminator: r,
        global_name: a,
        avatar: s,
        avatar_decoration_data: (0, i.Xq)(l),
        bot: o,
        flags: d,
        premium_type: c ?? 0,
    };
}
