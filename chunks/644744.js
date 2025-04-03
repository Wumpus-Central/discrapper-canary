n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(600164),
    c = n(490529),
    d = n(981631),
    u = n(388032),
    m = n(962311);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = {
        [d.gkr.HOUSE_1]: m.membershipDialogHouse1,
        [d.gkr.HOUSE_2]: m.membershipDialogHouse2,
        [d.gkr.HOUSE_3]: m.membershipDialogHouse3
    },
    h = {
        [d.gkr.HOUSE_1]: m.houseLogoHouse1,
        [d.gkr.HOUSE_2]: m.__invalid_houseLogoHouse2,
        [d.gkr.HOUSE_3]: m.__invalid_houseLogoHouse3
    },
    f = {
        [d.gkr.HOUSE_1]: n(246300),
        [d.gkr.HOUSE_2]: n(797148),
        [d.gkr.HOUSE_3]: n(374347)
    },
    b = (e) =>
        ({
            [d.gkr.HOUSE_1]: u.NW.string(u.t.CpG10d),
            [d.gkr.HOUSE_2]: u.NW.string(u.t.VNPE6u),
            [d.gkr.HOUSE_3]: u.NW.string(u.t.KNfiTU)
        })[e];
class N extends i.Component {
    render() {
        let { houseMembership: e, isClaimed: t, isVerified: n } = this.props;
        if (!t || !n) return null;
        if (null != e) {
            let t = u.NW.formatToPlainString(u.t.yG0XAA, { houseName: (0, c.X8)(e) });
            return (0, r.jsx)('div', {
                className: a()(m.membershipDialog, p[e]),
                children: (0, r.jsxs)('div', {
                    className: m.membershipDialogContent,
                    children: [
                        (0, r.jsxs)(o.Z, {
                            children: [
                                (0, r.jsxs)(o.Z.Child, {
                                    grow: 1,
                                    shrink: 1,
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: m.membershipDialogHeading,
                                            variant: 'text-xs/bold',
                                            children: u.NW.string(u.t.KZoEIy)
                                        }),
                                        (0, r.jsx)(l.X6q, {
                                            className: m.membershipDialogHouseName,
                                            variant: 'heading-sm/semibold',
                                            children: t
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            className: m.membershipDialogHouseDescription,
                                            variant: 'text-md/normal',
                                            children: b(e)
                                        })
                                    ]
                                }),
                                (0, r.jsx)(o.Z.Child, {
                                    className: m.houseLogoWrapper,
                                    grow: 0,
                                    shrink: 0,
                                    wrap: !0,
                                    children: (0, r.jsx)('img', {
                                        className: a()(m.houseLogo, h[e]),
                                        src: f[e],
                                        alt: t
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)(l.Text, {
                            className: m.membershipDialogSwitchHouses,
                            variant: 'text-md/normal',
                            children: [
                                u.NW.string(u.t.zD3mqK),
                                (0, r.jsx)(l.P3F, {
                                    className: m.membershipDialogSwitchHousesAction,
                                    onClick: this.handleJoinHypeSquadClick,
                                    tag: 'span',
                                    children: u.NW.string(u.t.LzBgrq)
                                })
                            ]
                        })
                    ]
                })
            });
        }
        return (0, r.jsxs)('div', {
            className: m.joinCTAWrapper,
            children: [
                (0, r.jsxs)(o.Z, {
                    className: m.joinCTA,
                    align: o.Z.Align.CENTER,
                    justify: o.Z.Justify.CENTER,
                    direction: o.Z.Direction.HORIZONTAL,
                    children: [
                        (0, r.jsx)(o.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: u.NW.string(u.t.Uq6KRk)
                            })
                        }),
                        (0, r.jsx)(o.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(l.zxk, {
                                onClick: this.handleJoinHypeSquadClick,
                                children: u.NW.string(u.t['1GWQKi'])
                            })
                        })
                    ]
                }),
                (0, r.jsx)(l.Text, {
                    className: m.newsletterWarning,
                    variant: 'text-sm/normal',
                    children: u.NW.string(u.t['3kUvgo'])
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'handleJoinHypeSquadClick', () => {
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('83264').then(n.bind(n, 711184));
                    return (t) =>
                        (0, r.jsx)(
                            e,
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
                                            g(e, t, n[t]);
                                        });
                                }
                                return e;
                            })({}, t)
                        );
                });
            });
    }
}
