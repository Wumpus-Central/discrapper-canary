n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(770146),
    o = n(863969),
    s = n(38761),
    c = n(6074),
    u = n(39377),
    d = n(981631),
    p = n(388032),
    h = n(46703);
let f = [
        {
            feature: d.Qa3.SINGLE_PLAYER,
            getText: () => p.intl.string(p.t['V+/FjI']),
            getTooltip: () => p.intl.string(p.t['w+X9sb']),
            IconComponent: l.tBG
        },
        {
            feature: d.Qa3.LOCAL_MULTIPLAYER,
            getText: () => p.intl.string(p.t.srnWrq),
            getTooltip: () => p.intl.string(p.t.sDdLWF),
            IconComponent: l.BFJ
        },
        {
            feature: d.Qa3.ONLINE_MULTIPLAYER,
            getText: () => p.intl.string(p.t.xPHbgI),
            getTooltip: () => p.intl.string(p.t.g6kR4O),
            IconComponent: l.BFJ
        },
        {
            feature: d.Qa3.PVP,
            getText: () => p.intl.string(p.t.qhgwx8),
            getTooltip: () => p.intl.string(p.t['5jGrhI']),
            IconComponent: l.HI3
        },
        {
            feature: d.Qa3.LOCAL_COOP,
            getText: () => p.intl.string(p.t.FqbalJ),
            getTooltip: () => p.intl.string(p.t.vIgDgY),
            IconComponent: l.BFJ
        },
        {
            feature: d.Qa3.ONLINE_COOP,
            getText: () => p.intl.string(p.t.lDHO4e),
            getTooltip: () => p.intl.string(p.t.VXDpho),
            IconComponent: l.BFJ
        },
        {
            feature: d.Qa3.CROSS_PLATFORM,
            getText: () => p.intl.string(p.t.SWo2HR),
            getTooltip: () => p.intl.string(p.t.ll2wzc),
            IconComponent: l.DuK
        },
        {
            feature: d.Qa3.RICH_PRESENCE,
            getText: () => p.intl.string(p.t.PVSVtL),
            getTooltip: () => p.intl.string(p.t.O6Yp4e),
            IconComponent: c.Z
        },
        {
            feature: d.Qa3.DISCORD_GAME_INVITES,
            getText: () => p.intl.string(p.t.agm68P),
            getTooltip: () => p.intl.string(p.t.kS2vFB),
            IconComponent: s.Z
        },
        {
            feature: d.Qa3.SPECTATOR_MODE,
            getText: () => p.intl.string(p.t['ZtiU7+']),
            getTooltip: () => p.intl.string(p.t.kUtiKS),
            IconComponent: l.Odl
        },
        {
            feature: d.Qa3.CONTROLLER_SUPPORT,
            getText: () => p.intl.string(p.t.UlBQ8P),
            getTooltip: () => p.intl.string(p.t.iG00jI),
            IconComponent: l.xoD
        },
        {
            feature: d.Qa3.CLOUD_SAVES,
            getText: () => p.intl.string(p.t.rOcNrK),
            getTooltip: () => p.intl.string(p.t.kvw18P),
            IconComponent: o.Z
        },
        {
            feature: d.Qa3.SECURE_NETWORKING,
            getText: () => p.intl.string(p.t.GKFWLy),
            getTooltip: () => p.intl.string(p.t.VudViI),
            IconComponent: u.Z
        }
    ],
    g = (e) => {
        let { IconComponent: t, text: n, tooltip: i } = e;
        return (0, r.jsxs)('div', {
            className: h.row,
            children: [
                (0, r.jsx)(l.ua7, {
                    text: i,
                    children: (e) =>
                        (0, r.jsx)(
                            t,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({ className: h.featureIcon }, e)
                        )
                }),
                (0, r.jsx)('span', {
                    className: h.featureText,
                    children: n
                }),
                (0, r.jsx)(l.dz2, {
                    size: 'md',
                    color: 'currentColor',
                    className: h.checkmarkIcon
                })
            ]
        });
    };
class m extends i.PureComponent {
    render() {
        let { sku: e } = this.props,
            t = f
                .filter((t) => {
                    let { feature: n } = t;
                    return e.features.has(n);
                })
                .map((e) => {
                    let { feature: t, IconComponent: n, getText: i, getTooltip: l } = e;
                    return (0, r.jsx)(
                        g,
                        {
                            IconComponent: n,
                            text: i(),
                            tooltip: l()
                        },
                        t
                    );
                });
        return 0 === t.length
            ? null
            : (0, r.jsxs)('div', {
                  className: h.features,
                  children: [(0, r.jsx)(a.Z, { children: p.intl.string(p.t.XXENra) }), t]
              });
    }
}
let b = m;
