a.d(t, { default: () => _ });
var n = a(627968);
a(64700);
var r = a(821609),
    i = a(43594),
    s = a(523084),
    o = a(722523),
    l = a(490557),
    d = a(54952),
    c = a(568065),
    u = a(853513),
    p = a(985018),
    m = a(372165);
function _(e) {
    let { guildId: t, powerup: a, ..._ } = e;
    if ("control" === (0, i.D)("GuildPowerupActivateModalExperimentWrapper")) {
        let e = c.HO.has(a.skuId),
            i = e ? p.intl.formatToPlainString(u.default.y3wHot, { perkName: a.title }) : void 0;
        return (0, n.jsx)(s.A, {
            title: p.intl.formatToPlainString(u.default.lFuOFF, { perkName: a.title }),
            description: i,
            image: (0, n.jsx)(l.l, { className: m.Sl, powerup: a }),
            button: e
                ? (0, n.jsx)(o.GU, { className: m.x6, guildId: t, powerup: a, onClick: _.onClose })
                : (0, n.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: m.x6,
                      children: (0, n.jsx)(r.$, {
                          variant: "primary",
                          text: p.intl.string(p.t.cpT0Cq),
                          onClick: _.onClose,
                      }),
                  }),
            ..._,
        });
    }
    return (0, n.jsx)(d.A, { guildId: t, powerup: a, ..._ });
}
