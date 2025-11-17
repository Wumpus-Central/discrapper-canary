n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    l = n(28664),
    a = n(481060),
    s = n(770146),
    o = n(863969),
    c = n(38761),
    u = n(6074),
    d = n(39377),
    p = n(981631),
    f = n(388032),
    h = n(126373);
let g = [
        {
            feature: p.Qa3.SINGLE_PLAYER,
            getText: () => f.intl.string(f.t["V+/FjO"]),
            getTooltip: () => f.intl.string(f.t["w+X9sT"]),
            IconComponent: a.tBG,
        },
        {
            feature: p.Qa3.LOCAL_MULTIPLAYER,
            getText: () => f.intl.string(f.t.srnWru),
            getTooltip: () => f.intl.string(f.t.sDdLWA),
            IconComponent: a.BFJ,
        },
        {
            feature: p.Qa3.ONLINE_MULTIPLAYER,
            getText: () => f.intl.string(f.t.xPHbgA),
            getTooltip: () => f.intl.string(f.t.g6kR4D),
            IconComponent: a.BFJ,
        },
        {
            feature: p.Qa3.PVP,
            getText: () => f.intl.string(f.t.qhgwxx),
            getTooltip: () => f.intl.string(f.t["5jGrhN"]),
            IconComponent: a.HI3,
        },
        {
            feature: p.Qa3.LOCAL_COOP,
            getText: () => f.intl.string(f.t.FqbalJ),
            getTooltip: () => f.intl.string(f.t.vIgDgd),
            IconComponent: a.BFJ,
        },
        {
            feature: p.Qa3.ONLINE_COOP,
            getText: () => f.intl.string(f.t.lDHO4Y),
            getTooltip: () => f.intl.string(f.t.VXDphs),
            IconComponent: a.BFJ,
        },
        {
            feature: p.Qa3.CROSS_PLATFORM,
            getText: () => f.intl.string(f.t.SWo2Hf),
            getTooltip: () => f.intl.string(f.t.ll2wzY),
            IconComponent: a.DuK,
        },
        {
            feature: p.Qa3.RICH_PRESENCE,
            getText: () => f.intl.string(f.t.PVSVtI),
            getTooltip: () => f.intl.string(f.t.O6Yp4d),
            IconComponent: u.Z,
        },
        {
            feature: p.Qa3.DISCORD_GAME_INVITES,
            getText: () => f.intl.string(f.t.agm68P),
            getTooltip: () => f.intl.string(f.t.kS2vFN),
            IconComponent: c.Z,
        },
        {
            feature: p.Qa3.SPECTATOR_MODE,
            getText: () => f.intl.string(f.t.ZtiU7w),
            getTooltip: () => f.intl.string(f.t.kUtiKa),
            IconComponent: a.Odl,
        },
        {
            feature: p.Qa3.CONTROLLER_SUPPORT,
            getText: () => f.intl.string(f.t.UlBQ8P),
            getTooltip: () => f.intl.string(f.t.iG00jA),
            IconComponent: a.xoD,
        },
        {
            feature: p.Qa3.CLOUD_SAVES,
            getText: () => f.intl.string(f.t.rOcNrD),
            getTooltip: () => f.intl.string(f.t.kvw18E),
            IconComponent: o.Z,
        },
        {
            feature: p.Qa3.SECURE_NETWORKING,
            getText: () => f.intl.string(f.t.GKFWL3),
            getTooltip: () => f.intl.string(f.t.VudViJ),
            IconComponent: d.Z,
        },
    ],
    m = (e) => {
        let { IconComponent: t, text: n, tooltip: i } = e;
        return (0, r.jsxs)("div", {
            className: h.row,
            children: [
                (0, r.jsx)(l.u, {
                    text: i,
                    children: (0, r.jsx)(t, { className: h.featureIcon }),
                }),
                (0, r.jsx)("span", {
                    className: h.featureText,
                    children: n,
                }),
                (0, r.jsx)(a.dz2, {
                    size: "md",
                    color: "currentColor",
                    className: h.checkmarkIcon,
                }),
            ],
        });
    };
class _ extends i.PureComponent {
    render() {
        let { sku: e } = this.props,
            t = g
                .filter((t) => {
                    let { feature: n } = t;
                    return e.features.has(n);
                })
                .map((e) => {
                    let { feature: t, IconComponent: n, getText: i, getTooltip: l } = e;
                    return (0, r.jsx)(
                        m,
                        {
                            IconComponent: n,
                            text: i(),
                            tooltip: l(),
                        },
                        t,
                    );
                });
        return 0 === t.length
            ? null
            : (0, r.jsxs)("div", {
                  className: h.features,
                  children: [(0, r.jsx)(s.Z, { children: f.intl.string(f.t.XXENra) }), t],
              });
    }
}
let b = _;
