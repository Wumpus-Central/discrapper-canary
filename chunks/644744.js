n.d(t, { Z: () => _ }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(600164),
    c = n(490529),
    d = n(981631),
    u = n(388032),
    m = n(962311);
function p(e, t, n) {
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
let g = {
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
            [d.gkr.HOUSE_1]: u.intl.string(u.t.CpG10d),
            [d.gkr.HOUSE_2]: u.intl.string(u.t.VNPE6u),
            [d.gkr.HOUSE_3]: u.intl.string(u.t.KNfiTU)
        })[e];
class _ extends r.Component {
    render() {
        let { houseMembership: e, isClaimed: t, isVerified: n } = this.props;
        if (!t || !n) return null;
        if (null != e) {
            let t = u.intl.formatToPlainString(u.t.yG0XAA, { houseName: (0, c.X8)(e) });
            return (0, i.jsx)('div', {
                className: l()(m.membershipDialog, g[e]),
                children: (0, i.jsxs)('div', {
                    className: m.membershipDialogContent,
                    children: [
                        (0, i.jsxs)(o.Z, {
                            children: [
                                (0, i.jsxs)(o.Z.Child, {
                                    grow: 1,
                                    shrink: 1,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            className: m.membershipDialogHeading,
                                            variant: 'text-xs/bold',
                                            children: u.intl.string(u.t.KZoEIy)
                                        }),
                                        (0, i.jsx)(a.X6q, {
                                            className: m.membershipDialogHouseName,
                                            variant: 'heading-sm/semibold',
                                            children: t
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            className: m.membershipDialogHouseDescription,
                                            variant: 'text-md/normal',
                                            children: b(e)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(o.Z.Child, {
                                    className: m.houseLogoWrapper,
                                    grow: 0,
                                    shrink: 0,
                                    wrap: !0,
                                    children: (0, i.jsx)('img', {
                                        className: l()(m.houseLogo, h[e]),
                                        src: f[e],
                                        alt: t
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(a.Text, {
                            className: m.membershipDialogSwitchHouses,
                            variant: 'text-md/normal',
                            children: [
                                u.intl.string(u.t.zD3mqK),
                                (0, i.jsx)(a.P3F, {
                                    className: m.membershipDialogSwitchHousesAction,
                                    onClick: this.handleJoinHypeSquadClick,
                                    tag: 'span',
                                    children: u.intl.string(u.t.LzBgrq)
                                })
                            ]
                        })
                    ]
                })
            });
        }
        return (0, i.jsxs)('div', {
            className: m.joinCTAWrapper,
            children: [
                (0, i.jsxs)(o.Z, {
                    className: m.joinCTA,
                    align: o.Z.Align.CENTER,
                    justify: o.Z.Justify.CENTER,
                    direction: o.Z.Direction.HORIZONTAL,
                    children: [
                        (0, i.jsx)(o.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                children: u.intl.string(u.t.Uq6KRk)
                            })
                        }),
                        (0, i.jsx)(o.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsx)(a.zxk, {
                                onClick: this.handleJoinHypeSquadClick,
                                children: u.intl.string(u.t['1GWQKi'])
                            })
                        })
                    ]
                }),
                (0, i.jsx)(a.Text, {
                    className: m.newsletterWarning,
                    variant: 'text-sm/normal',
                    children: u.intl.string(u.t['3kUvgo'])
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'handleJoinHypeSquadClick', () => {
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('83264').then(n.bind(n, 711184));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            p(e, t, n[t]);
                                        });
                                }
                                return e;
                            })({}, t)
                        );
                });
            });
    }
}
