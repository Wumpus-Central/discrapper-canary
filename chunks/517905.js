"use strict";
n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(283823);
function s(e) {
    let { guildId: t, name: n, position: s = "right", onClose: o, targetElementRef: l, ...u } = e;
    return (0, r.jsx)(i.YNO, {
        targetElementRef: l,
        position: s,
        clickTrap: !0,
        renderPopout: (e) =>
            (0, r.jsx)(a.A, {
                ...e,
                onClose: () => {
                    e.closePopout(), o?.();
                },
                guildId: t,
                name: n,
            }),
        ...u,
    });
}
