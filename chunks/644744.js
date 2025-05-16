n.d(t, { Z: () => _ }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(600164),
    c = n(490529),
    d = n(981631),
    u = n(388032),
    g = n(962311);
function m(e, t, n) {
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
        [d.gkr.HOUSE_1]: g.membershipDialogHouse1,
        [d.gkr.HOUSE_2]: g.membershipDialogHouse2,
        [d.gkr.HOUSE_3]: g.membershipDialogHouse3
    },
    h = {
        [d.gkr.HOUSE_1]: g.houseLogoHouse1,
        [d.gkr.HOUSE_2]: g.__invalid_houseLogoHouse2,
        [d.gkr.HOUSE_3]: g.__invalid_houseLogoHouse3
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
                className: l()(g.membershipDialog, p[e]),
                children: (0, i.jsxs)('div', {
                    className: g.membershipDialogContent,
                    children: [
                        (0, i.jsxs)(o.Z, {
                            children: [
                                (0, i.jsxs)(o.Z.Child, {
                                    grow: 1,
                                    shrink: 1,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            className: g.membershipDialogHeading,
                                            variant: 'text-xs/bold',
                                            children: u.intl.string(u.t.KZoEIy)
                                        }),
                                        (0, i.jsx)(a.X6q, {
                                            className: g.membershipDialogHouseName,
                                            variant: 'heading-sm/semibold',
                                            children: t
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            className: g.membershipDialogHouseDescription,
                                            variant: 'text-md/normal',
                                            children: b(e)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(o.Z.Child, {
                                    className: g.houseLogoWrapper,
                                    grow: 0,
                                    shrink: 0,
                                    wrap: !0,
                                    children: (0, i.jsx)('img', {
                                        className: l()(g.houseLogo, h[e]),
                                        src: f[e],
                                        alt: t
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(a.Text, {
                            className: g.membershipDialogSwitchHouses,
                            variant: 'text-md/normal',
                            children: [
                                u.intl.string(u.t.zD3mqK),
                                (0, i.jsx)(a.P3F, {
                                    className: g.membershipDialogSwitchHousesAction,
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
            className: g.joinCTAWrapper,
            children: [
                (0, i.jsxs)(o.Z, {
                    className: g.joinCTA,
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
                    className: g.newsletterWarning,
                    variant: 'text-sm/normal',
                    children: u.intl.string(u.t['3kUvgo'])
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'handleJoinHypeSquadClick', () => {
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
                                            m(e, t, n[t]);
                                        });
                                }
                                return e;
                            })({}, t)
                        );
                });
            });
    }
}
