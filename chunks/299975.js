n.d(t, { h: () => u });
var i = n(627968),
    l = n(397927),
    s = n(722523),
    a = n(490557),
    r = n(568065),
    o = n(333354),
    d = n(985018),
    c = n(413526);
function u(e, t) {
    if (null == t) return;
    let u = r.HO.has(t.skuId);
    (0, l.mMO)(async () => {
        let { default: r } = await n.e("957").then(n.bind(n, 523084));
        return (n) =>
            (0, i.jsx)(r, {
                title: d.intl.formatToPlainString(o.default.lFuOFF, { perkName: t.title }),
                description: d.intl.formatToPlainString(o.default.y3wHot, { perkName: t.title }),
                image: (0, i.jsx)(a.l, { className: c.Sl, powerup: t }),
                button: u
                    ? (0, i.jsx)(s.GU, { className: c.x6, guildId: e, powerup: t, onClick: n.onClose })
                    : (0, i.jsx)("div", {
                          "data-button-hoisted-classname-wrapper": !0,
                          className: c.x6,
                          children: (0, i.jsx)(l.Button, {
                              variant: "primary",
                              text: d.intl.string(d.t.cpT0Cq),
                              onClick: n.onClose,
                          }),
                      }),
                ...n,
            });
    });
}
