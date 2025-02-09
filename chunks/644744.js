n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(600164),
    c = n(490529),
    d = n(981631),
    u = n(388032),
    h = n(563876);
let m = {
        [d.gkr.HOUSE_1]: h.membershipDialogHouse1,
        [d.gkr.HOUSE_2]: h.membershipDialogHouse2,
        [d.gkr.HOUSE_3]: h.membershipDialogHouse3
    },
    g = {
        [d.gkr.HOUSE_1]: h.houseLogoHouse1,
        [d.gkr.HOUSE_2]: h.__invalid_houseLogoHouse2,
        [d.gkr.HOUSE_3]: h.__invalid_houseLogoHouse3
    },
    x = {
        [d.gkr.HOUSE_1]: n(246300),
        [d.gkr.HOUSE_2]: n(797148),
        [d.gkr.HOUSE_3]: n(374347)
    },
    _ = (e) =>
        ({
            [d.gkr.HOUSE_1]: u.intl.string(u.t.CpG10d),
            [d.gkr.HOUSE_2]: u.intl.string(u.t.VNPE6u),
            [d.gkr.HOUSE_3]: u.intl.string(u.t.KNfiTU)
        })[e];
class p extends s.Component {
    render() {
        let { houseMembership: e, isClaimed: t, isVerified: n } = this.props;
        if (!t || !n) return null;
        if (null != e) {
            let t = u.intl.formatToPlainString(u.t.yG0XAA, { houseName: (0, c.X8)(e) });
            return (0, i.jsx)('div', {
                className: r()(h.membershipDialog, m[e]),
                children: (0, i.jsxs)('div', {
                    className: h.membershipDialogContent,
                    children: [
                        (0, i.jsxs)(o.Z, {
                            children: [
                                (0, i.jsxs)(o.Z.Child, {
                                    grow: 1,
                                    shrink: 1,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            className: h.membershipDialogHeading,
                                            variant: 'text-xs/bold',
                                            children: u.intl.string(u.t.KZoEIy)
                                        }),
                                        (0, i.jsx)(a.X6q, {
                                            className: h.membershipDialogHouseName,
                                            variant: 'heading-sm/semibold',
                                            children: t
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            className: h.membershipDialogHouseDescription,
                                            variant: 'text-md/normal',
                                            children: _(e)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(o.Z.Child, {
                                    className: h.houseLogoWrapper,
                                    grow: 0,
                                    shrink: 0,
                                    wrap: !0,
                                    children: (0, i.jsx)('img', {
                                        className: r()(h.houseLogo, g[e]),
                                        src: x[e],
                                        alt: t
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(a.Text, {
                            className: h.membershipDialogSwitchHouses,
                            variant: 'text-md/normal',
                            children: [
                                u.intl.string(u.t.zD3mqK),
                                (0, i.jsx)(a.P3F, {
                                    className: h.membershipDialogSwitchHousesAction,
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
            className: h.joinCTAWrapper,
            children: [
                (0, i.jsxs)(o.Z, {
                    className: h.joinCTA,
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
                    className: h.newsletterWarning,
                    variant: 'text-sm/normal',
                    children: u.intl.string(u.t['3kUvgo'])
                })
            ]
        });
    }
    constructor(...e) {
        var t, s;
        super(...e),
            (t = 'handleJoinHypeSquadClick'),
            (s = () => {
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('83264').then(n.bind(n, 711184));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = s);
    }
}
