n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(600164),
    c = n(490529),
    u = n(981631),
    d = n(388032),
    f = n(134840);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = {
        [u.gkr.HOUSE_1]: f.membershipDialogHouse1,
        [u.gkr.HOUSE_2]: f.membershipDialogHouse2,
        [u.gkr.HOUSE_3]: f.membershipDialogHouse3,
    },
    m = {
        [u.gkr.HOUSE_1]: f.houseLogoHouse1,
        [u.gkr.HOUSE_2]: f.__invalid_houseLogoHouse2,
        [u.gkr.HOUSE_3]: f.__invalid_houseLogoHouse3,
    },
    g = {
        [u.gkr.HOUSE_1]: n(246300),
        [u.gkr.HOUSE_2]: n(797148),
        [u.gkr.HOUSE_3]: n(374347),
    },
    E = (e) =>
        ({
            [u.gkr.HOUSE_1]: d.intl.string(d.t.CpG10d),
            [u.gkr.HOUSE_2]: d.intl.string(d.t.VNPE6u),
            [u.gkr.HOUSE_3]: d.intl.string(d.t.KNfiTU),
        })[e];
class b extends i.Component {
    render() {
        let { houseMembership: e, isClaimed: t, isVerified: n } = this.props;
        if (!t || !n) return null;
        if (null != e) {
            let t = d.intl.formatToPlainString(d.t.yG0XAA, { houseName: (0, c.X8)(e) });
            return (0, r.jsx)("div", {
                className: o()(f.membershipDialog, h[e]),
                children: (0, r.jsxs)("div", {
                    className: f.membershipDialogContent,
                    children: [
                        (0, r.jsxs)(l.Z, {
                            children: [
                                (0, r.jsxs)(l.Z.Child, {
                                    grow: 1,
                                    shrink: 1,
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            className: f.membershipDialogHeading,
                                            variant: "text-xs/bold",
                                            children: d.intl.string(d.t.KZoEIy),
                                        }),
                                        (0, r.jsx)(s.X6q, {
                                            className: f.membershipDialogHouseName,
                                            variant: "heading-sm/semibold",
                                            children: t,
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            className: f.membershipDialogHouseDescription,
                                            variant: "text-md/normal",
                                            children: E(e),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(l.Z.Child, {
                                    className: f.houseLogoWrapper,
                                    grow: 0,
                                    shrink: 0,
                                    wrap: !0,
                                    children: (0, r.jsx)("img", {
                                        className: o()(f.houseLogo, m[e]),
                                        src: g[e],
                                        alt: t,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(s.Text, {
                            className: f.membershipDialogSwitchHouses,
                            variant: "text-md/normal",
                            children: [
                                d.intl.string(d.t.zD3mqK),
                                (0, r.jsx)(s.P3F, {
                                    className: f.membershipDialogSwitchHousesAction,
                                    onClick: this.handleJoinHypeSquadClick,
                                    tag: "span",
                                    children: d.intl.string(d.t.LzBgrq),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        return (0, r.jsxs)("div", {
            className: f.joinCTAWrapper,
            children: [
                (0, r.jsxs)(l.Z, {
                    className: f.joinCTA,
                    align: l.Z.Align.CENTER,
                    justify: l.Z.Justify.CENTER,
                    direction: l.Z.Direction.HORIZONTAL,
                    children: [
                        (0, r.jsx)(l.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: d.intl.string(d.t.Uq6KRk),
                            }),
                        }),
                        (0, r.jsx)(l.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(s.zxk, {
                                variant: "primary",
                                text: d.intl.string(d.t["1GWQKi"]),
                                onClick: this.handleJoinHypeSquadClick,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.Text, {
                    className: f.newsletterWarning,
                    variant: "text-sm/normal",
                    children: d.intl.string(d.t["3kUvgo"]),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "handleJoinHypeSquadClick", () => {
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e("83264").then(n.bind(n, 711184));
                    return (t) => (0, r.jsx)(e, p({}, t));
                });
            });
    }
}
