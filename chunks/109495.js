n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(1109),
    l = n(481859),
    s = n(235986),
    o = n(652215),
    d = n(985018),
    c = n(326715);
class u extends r.PureComponent {
    renderContentRatingImage() {
        let { contentRating: e, contentRatingAgency: t } = this.props.sku;
        return null == e || null == t ? null : (0, i.jsx)(a.A, { className: c.O, agency: t, rating: e.rating });
    }
    render() {
        let {
            sku: { contentRating: e, contentRatingAgency: t },
            className: n,
        } = this.props;
        if (null == e || null == t) return null;
        let r = {
                [o.eMA.ESRB]: {
                    1: d.intl.string(d.t.ErVezT),
                    2: d.intl.string(d.t.xLyerM),
                    3: d.intl.string(d.t.UmB6j4),
                    4: d.intl.string(d.t.NHOQIx),
                    5: d.intl.string(d.t.U6xTOx),
                    6: d.intl.string(d.t["51xJIw"]),
                    7: d.intl.string(d.t.uayp6o),
                    8: d.intl.string(d.t.c1GtKm),
                    9: d.intl.string(d.t.Hz8vrY),
                    10: d.intl.string(d.t.qSyzdd),
                    11: d.intl.string(d.t.K68q8V),
                    12: d.intl.string(d.t.Yb0n6M),
                    13: d.intl.string(d.t.IIFZqn),
                    14: d.intl.string(d.t["NZ/JGV"]),
                    15: d.intl.string(d.t["5qETTQ"]),
                    16: d.intl.string(d.t.kJGLz1),
                    17: d.intl.string(d.t.cB2QRG),
                    18: d.intl.string(d.t["g9SiE+"]),
                    19: d.intl.string(d.t.Xe0T58),
                    20: d.intl.string(d.t["4k6sY/"]),
                    21: d.intl.string(d.t.cxFiDC),
                    22: d.intl.string(d.t.YvpQK9),
                    23: d.intl.string(d.t.i2gbpb),
                    24: d.intl.string(d.t["LooT/V"]),
                    25: d.intl.string(d.t["/AIXhm"]),
                    26: d.intl.string(d.t.oo09H9),
                    27: d.intl.string(d.t.XCUBez),
                    28: d.intl.string(d.t.g6dipd),
                    29: d.intl.string(d.t.YYGUqs),
                    30: d.intl.string(d.t.WsqFnB),
                    31: d.intl.string(d.t.zePEol),
                    32: d.intl.string(d.t.bGErw4),
                    33: d.intl.string(d.t.imoY95),
                    34: d.intl.string(d.t["Z+VBdp"]),
                    35: d.intl.string(d.t.eBgo0A),
                    36: d.intl.string(d.t["6SVTt7"]),
                    37: d.intl.string(d.t["8Lme6b"]),
                    38: d.intl.string(d.t.ettX4D),
                    39: d.intl.string(d.t.nnVZF7),
                    40: d.intl.string(d.t.TWlbXv),
                    41: d.intl.string(d.t["CAGgE/"]),
                    42: d.intl.string(d.t["jRZf+d"]),
                    43: d.intl.string(d.t["4Vg0mm"]),
                },
                [o.eMA.PEGI]: {
                    1: d.intl.string(d.t.VcO2U3),
                    2: d.intl.string(d.t.wt264z),
                    3: d.intl.string(d.t["5yzEJa"]),
                    4: d.intl.string(d.t["NBQZX/"]),
                    5: d.intl.string(d.t["4UG90a"]),
                    6: d.intl.string(d.t.Cf5CtK),
                    7: d.intl.string(d.t.ai9C3Q),
                },
            },
            a = e.descriptors.map((e) => r[t][e]).join(", ");
        return (0, i.jsxs)("div", {
            className: n,
            children: [
                (0, i.jsx)(l.A, { children: d.intl.string(d.t.q9Zqgl) }),
                (0, i.jsxs)(s.A, {
                    className: c.Q,
                    children: [
                        this.renderContentRatingImage(),
                        (0, i.jsx)("div", { className: c.__invalid_info, children: a }),
                    ],
                }),
            ],
        });
    }
}
let A = u;
