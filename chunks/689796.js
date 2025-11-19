n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(77878),
    a = n(770146),
    s = n(600164),
    o = n(981631),
    c = n(388032),
    u = n(709793);
class d extends i.PureComponent {
    renderContentRatingImage() {
        let { contentRating: e, contentRatingAgency: t } = this.props.sku;
        return null == e || null == t
            ? null
            : (0, r.jsx)(l.Z, {
                  className: u.rating,
                  agency: t,
                  rating: e.rating,
              });
    }
    render() {
        let {
            sku: { contentRating: e, contentRatingAgency: t },
            className: n,
        } = this.props;
        if (null == e || null == t) return null;
        let i = {
                [o.aIt.ESRB]: {
                    1: c.intl.string(c.t.ErVezT),
                    2: c.intl.string(c.t.xLyerM),
                    3: c.intl.string(c.t.UmB6j4),
                    4: c.intl.string(c.t.NHOQIx),
                    5: c.intl.string(c.t.U6xTOx),
                    6: c.intl.string(c.t["51xJIw"]),
                    7: c.intl.string(c.t.uayp6o),
                    8: c.intl.string(c.t.c1GtKm),
                    9: c.intl.string(c.t.Hz8vrY),
                    10: c.intl.string(c.t.qSyzdd),
                    11: c.intl.string(c.t.K68q8V),
                    12: c.intl.string(c.t.Yb0n6M),
                    13: c.intl.string(c.t.IIFZqn),
                    14: c.intl.string(c.t["NZ/JGV"]),
                    15: c.intl.string(c.t["5qETTQ"]),
                    16: c.intl.string(c.t.kJGLz1),
                    17: c.intl.string(c.t.cB2QRG),
                    18: c.intl.string(c.t["g9SiE+"]),
                    19: c.intl.string(c.t.Xe0T58),
                    20: c.intl.string(c.t["4k6sY/"]),
                    21: c.intl.string(c.t.cxFiDC),
                    22: c.intl.string(c.t.YvpQK9),
                    23: c.intl.string(c.t.i2gbpb),
                    24: c.intl.string(c.t["LooT/V"]),
                    25: c.intl.string(c.t["/AIXhm"]),
                    26: c.intl.string(c.t.oo09H9),
                    27: c.intl.string(c.t.XCUBez),
                    28: c.intl.string(c.t.g6dipd),
                    29: c.intl.string(c.t.YYGUqs),
                    30: c.intl.string(c.t.WsqFnB),
                    31: c.intl.string(c.t.zePEol),
                    32: c.intl.string(c.t.bGErw4),
                    33: c.intl.string(c.t.imoY95),
                    34: c.intl.string(c.t["Z+VBdp"]),
                    35: c.intl.string(c.t.eBgo0A),
                    36: c.intl.string(c.t["6SVTt7"]),
                    37: c.intl.string(c.t["8Lme6b"]),
                    38: c.intl.string(c.t.ettX4D),
                    39: c.intl.string(c.t.nnVZF7),
                    40: c.intl.string(c.t.TWlbXv),
                    41: c.intl.string(c.t["CAGgE/"]),
                    42: c.intl.string(c.t["jRZf+d"]),
                    43: c.intl.string(c.t["4Vg0mm"]),
                },
                [o.aIt.PEGI]: {
                    1: c.intl.string(c.t.VcO2U3),
                    2: c.intl.string(c.t.wt264z),
                    3: c.intl.string(c.t["5yzEJa"]),
                    4: c.intl.string(c.t["NBQZX/"]),
                    5: c.intl.string(c.t["4UG90a"]),
                    6: c.intl.string(c.t.Cf5CtK),
                    7: c.intl.string(c.t.ai9C3Q),
                },
            },
            l = e.descriptors.map((e) => i[t][e]).join(", ");
        return (0, r.jsxs)("div", {
            className: n,
            children: [
                (0, r.jsx)(a.Z, { children: c.intl.string(c.t.q9Zqgl) }),
                (0, r.jsxs)(s.Z, {
                    className: u.content,
                    children: [
                        this.renderContentRatingImage(),
                        (0, r.jsx)("div", {
                            className: u.__invalid_info,
                            children: l,
                        }),
                    ],
                }),
            ],
        });
    }
}
let p = d;
