"use strict";
n.d(t, { h: () => u });
var i = n(627968),
    s = n(397927),
    l = n(722523),
    r = n(490557),
    a = n(568065),
    o = n(136708),
    c = n(985018),
    d = n(62296);
function u(e, t) {
    if (null == t) return;
    let u = a.HO.has(t.skuId);
    (0, s.mMO)(async () => {
        let { default: a } = await n.e("957").then(n.bind(n, 523084));
        return (n) =>
            (0, i.jsx)(a, {
                title: c.intl.formatToPlainString(o.default.lFuOFF, { perkName: t.title }),
                description: c.intl.formatToPlainString(o.default.y3wHot, { perkName: t.title }),
                image: (0, i.jsx)(r.l, { className: d.Sl, powerup: t }),
                button: u
                    ? (0, i.jsx)(l.GU, { className: d.x6, guildId: e, powerup: t, onClick: n.onClose })
                    : (0, i.jsx)("div", {
                          "data-button-hoisted-classname-wrapper": !0,
                          className: d.x6,
                          children: (0, i.jsx)(s.Button, {
                              variant: "primary",
                              text: c.intl.string(c.t.cpT0Cq),
                              onClick: n.onClose,
                          }),
                      }),
                ...n,
            });
    });
}
