n.d(e, { default: () => _ });
var r = n(627968);
n(64700);
var a = n(397927),
    i = n(43594),
    l = n(523084),
    s = n(722523),
    o = n(490557),
    d = n(54952),
    u = n(568065),
    c = n(333354),
    p = n(985018),
    f = n(944053);
function _(t) {
    let { guildId: e, powerup: n, ..._ } = t;
    if ("control" === (0, i.D)("GuildPowerupActivateModalExperimentWrapper")) {
        let t = u.HO.has(n.skuId);
        return (0, r.jsx)(l.A, {
            title: p.intl.formatToPlainString(c.default.lFuOFF, { perkName: n.title }),
            description: p.intl.formatToPlainString(c.default.y3wHot, { perkName: n.title }),
            image: (0, r.jsx)(o.l, { className: f.Sl, powerup: n }),
            button: t
                ? (0, r.jsx)(s.GU, { className: f.x6, guildId: e, powerup: n, onClick: _.onClose })
                : (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: f.x6,
                      children: (0, r.jsx)(a.Button, {
                          variant: "primary",
                          text: p.intl.string(p.t.cpT0Cq),
                          onClick: _.onClose,
                      }),
                  }),
            ..._,
        });
    }
    return (0, r.jsx)(d.A, { guildId: e, powerup: n, ..._ });
}
