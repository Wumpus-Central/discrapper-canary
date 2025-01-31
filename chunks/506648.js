n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(770146),
    s = n(863969),
    o = n(38761),
    c = n(6074),
    d = n(39377),
    u = n(981631),
    h = n(388032),
    m = n(270690);
let p = [
        {
            feature: u.Qa3.SINGLE_PLAYER,
            getText: () => h.intl.string(h.t['V+/FjI']),
            getTooltip: () => h.intl.string(h.t['w+X9sb']),
            IconComponent: r.tBG
        },
        {
            feature: u.Qa3.LOCAL_MULTIPLAYER,
            getText: () => h.intl.string(h.t.srnWrq),
            getTooltip: () => h.intl.string(h.t.sDdLWF),
            IconComponent: r.BFJ
        },
        {
            feature: u.Qa3.ONLINE_MULTIPLAYER,
            getText: () => h.intl.string(h.t.xPHbgI),
            getTooltip: () => h.intl.string(h.t.g6kR4O),
            IconComponent: r.BFJ
        },
        {
            feature: u.Qa3.PVP,
            getText: () => h.intl.string(h.t.qhgwx8),
            getTooltip: () => h.intl.string(h.t['5jGrhI']),
            IconComponent: r.HI3
        },
        {
            feature: u.Qa3.LOCAL_COOP,
            getText: () => h.intl.string(h.t.FqbalJ),
            getTooltip: () => h.intl.string(h.t.vIgDgY),
            IconComponent: r.BFJ
        },
        {
            feature: u.Qa3.ONLINE_COOP,
            getText: () => h.intl.string(h.t.lDHO4e),
            getTooltip: () => h.intl.string(h.t.VXDpho),
            IconComponent: r.BFJ
        },
        {
            feature: u.Qa3.CROSS_PLATFORM,
            getText: () => h.intl.string(h.t.SWo2HR),
            getTooltip: () => h.intl.string(h.t.ll2wzc),
            IconComponent: r.DuK
        },
        {
            feature: u.Qa3.RICH_PRESENCE,
            getText: () => h.intl.string(h.t.PVSVtL),
            getTooltip: () => h.intl.string(h.t.O6Yp4e),
            IconComponent: c.Z
        },
        {
            feature: u.Qa3.DISCORD_GAME_INVITES,
            getText: () => h.intl.string(h.t.agm68P),
            getTooltip: () => h.intl.string(h.t.kS2vFB),
            IconComponent: o.Z
        },
        {
            feature: u.Qa3.SPECTATOR_MODE,
            getText: () => h.intl.string(h.t['ZtiU7+']),
            getTooltip: () => h.intl.string(h.t.kUtiKS),
            IconComponent: r.Odl
        },
        {
            feature: u.Qa3.CONTROLLER_SUPPORT,
            getText: () => h.intl.string(h.t.UlBQ8P),
            getTooltip: () => h.intl.string(h.t.iG00jI),
            IconComponent: r.xoD
        },
        {
            feature: u.Qa3.CLOUD_SAVES,
            getText: () => h.intl.string(h.t.rOcNrK),
            getTooltip: () => h.intl.string(h.t.kvw18P),
            IconComponent: s.Z
        },
        {
            feature: u.Qa3.SECURE_NETWORKING,
            getText: () => h.intl.string(h.t.GKFWLy),
            getTooltip: () => h.intl.string(h.t.VudViI),
            IconComponent: d.Z
        }
    ],
    g = (e) => {
        let { IconComponent: t, text: n, tooltip: l } = e;
        return (0, i.jsxs)('div', {
            className: m.row,
            children: [
                (0, i.jsx)(r.ua7, {
                    text: l,
                    children: (e) =>
                        (0, i.jsx)(t, {
                            className: m.featureIcon,
                            ...e
                        })
                }),
                (0, i.jsx)('span', {
                    className: m.featureText,
                    children: n
                }),
                (0, i.jsx)(r.dz2, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.checkmarkIcon
                })
            ]
        });
    };
class _ extends l.PureComponent {
    render() {
        let { sku: e } = this.props,
            t = p
                .filter((t) => {
                    let { feature: n } = t;
                    return e.features.has(n);
                })
                .map((e) => {
                    let { feature: t, IconComponent: n, getText: l, getTooltip: r } = e;
                    return (0, i.jsx)(
                        g,
                        {
                            IconComponent: n,
                            text: l(),
                            tooltip: r()
                        },
                        t
                    );
                });
        return 0 === t.length
            ? null
            : (0, i.jsxs)('div', {
                  className: m.features,
                  children: [(0, i.jsx)(a.Z, { children: h.intl.string(h.t.XXENra) }), t]
              });
    }
}
let f = _;
