n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(600164),
    c = n(490529),
    d = n(981631),
    u = n(388032),
    m = n(187033);
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
    p = {
        [d.gkr.HOUSE_1]: n(246300),
        [d.gkr.HOUSE_2]: n(797148),
        [d.gkr.HOUSE_3]: n(374347)
    },
    x = (e) =>
        ({
            [d.gkr.HOUSE_1]: u.intl.string(u.t.CpG10d),
            [d.gkr.HOUSE_2]: u.intl.string(u.t.VNPE6u),
            [d.gkr.HOUSE_3]: u.intl.string(u.t.KNfiTU)
        })[e];
class f extends s.Component {
    render() {
        let { houseMembership: e, isClaimed: t, isVerified: n } = this.props;
        if (!t || !n) return null;
        if (null != e) {
            let t = u.intl.formatToPlainString(u.t.yG0XAA, { houseName: (0, c.X8)(e) });
            return (0, i.jsx)('div', {
                className: a()(m.membershipDialog, g[e]),
                children: (0, i.jsxs)('div', {
                    className: m.membershipDialogContent,
                    children: [
                        (0, i.jsxs)(o.Z, {
                            children: [
                                (0, i.jsxs)(o.Z.Child, {
                                    grow: 1,
                                    shrink: 1,
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: m.membershipDialogHeading,
                                            variant: 'text-xs/bold',
                                            children: u.intl.string(u.t.KZoEIy)
                                        }),
                                        (0, i.jsx)(l.Heading, {
                                            className: m.membershipDialogHouseName,
                                            variant: 'heading-sm/semibold',
                                            children: t
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            className: m.membershipDialogHouseDescription,
                                            variant: 'text-md/normal',
                                            children: x(e)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(o.Z.Child, {
                                    className: m.houseLogoWrapper,
                                    grow: 0,
                                    shrink: 0,
                                    wrap: !0,
                                    children: (0, i.jsx)('img', {
                                        className: a()(m.houseLogo, h[e]),
                                        src: p[e],
                                        alt: t
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(l.Text, {
                            className: m.membershipDialogSwitchHouses,
                            variant: 'text-md/normal',
                            children: [
                                u.intl.string(u.t.zD3mqK),
                                (0, i.jsx)(l.Clickable, {
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
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: u.intl.string(u.t.Uq6KRk)
                            })
                        }),
                        (0, i.jsx)(o.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsx)(l.Button, {
                                onClick: this.handleJoinHypeSquadClick,
                                children: u.intl.string(u.t['1GWQKi'])
                            })
                        })
                    ]
                }),
                (0, i.jsx)(l.Text, {
                    className: m.newsletterWarning,
                    variant: 'text-sm/normal',
                    children: u.intl.string(u.t['3kUvgo'])
                })
            ]
        });
    }
    constructor(...e) {
        var t, s, r;
        super(...e),
            (t = this),
            (s = 'handleJoinHypeSquadClick'),
            (r = () => {
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e('83264').then(n.bind(n, 711184));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
            }),
            s in t
                ? Object.defineProperty(t, s, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[s] = r);
    }
}
