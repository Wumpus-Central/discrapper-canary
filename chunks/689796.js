n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    l = n(77878),
    a = n(770146),
    o = n(600164),
    s = n(981631),
    c = n(388032),
    u = n(719656);
class d extends i.PureComponent {
    renderContentRatingImage() {
        let { contentRating: e, contentRatingAgency: t } = this.props.sku;
        return null == e || null == t
            ? null
            : (0, r.jsx)(l.Z, {
                  className: u.rating,
                  agency: t,
                  rating: e.rating
              });
    }
    render() {
        let {
            sku: { contentRating: e, contentRatingAgency: t },
            className: n
        } = this.props;
        if (null == e || null == t) return null;
        let i = {
                [s.aIt.ESRB]: {
                    1: c.NW.string(c.t.ErVezc),
                    2: c.NW.string(c.t.xLyerK),
                    3: c.NW.string(c.t.UmB6j4),
                    4: c.NW.string(c.t.NHOQIy),
                    5: c.NW.string(c.t.U6xTOz),
                    6: c.NW.string(c.t['51xJIy']),
                    7: c.NW.string(c.t.uayp6u),
                    8: c.NW.string(c.t.c1GtKi),
                    9: c.NW.string(c.t.Hz8vra),
                    10: c.NW.string(c.t.qSyzdX),
                    11: c.NW.string(c.t.K68q8f),
                    12: c.NW.string(c.t.Yb0n6O),
                    13: c.NW.string(c.t.IIFZqq),
                    14: c.NW.string(c.t['NZ/JGR']),
                    15: c.NW.string(c.t['5qETTU']),
                    16: c.NW.string(c.t.kJGLz8),
                    17: c.NW.string(c.t.cB2QRE),
                    18: c.NW.string(c.t.g9SiEx),
                    19: c.NW.string(c.t['Xe0T5+']),
                    20: c.NW.string(c.t['4k6sY2']),
                    21: c.NW.string(c.t.cxFiDA),
                    22: c.NW.string(c.t.YvpQKy),
                    23: c.NW.string(c.t.i2gbpa),
                    24: c.NW.string(c.t['LooT/f']),
                    25: c.NW.string(c.t['/AIXho']),
                    26: c.NW.string(c.t.oo09Hx),
                    27: c.NW.string(c.t.XCUBe3),
                    28: c.NW.string(c.t.g6dipa),
                    29: c.NW.string(c.t.YYGUqq),
                    30: c.NW.string(c.t.WsqFnJ),
                    31: c.NW.string(c.t.zePEoq),
                    32: c.NW.string(c.t.bGErw8),
                    33: c.NW.string(c.t['imoY9/']),
                    34: c.NW.string(c.t['Z+VBdn']),
                    35: c.NW.string(c.t.eBgo0N),
                    36: c.NW.string(c.t['6SVTt7']),
                    37: c.NW.string(c.t['8Lme6e']),
                    38: c.NW.string(c.t.ettX4O),
                    39: c.NW.string(c.t.nnVZFx),
                    40: c.NW.string(c.t.TWlbXl),
                    41: c.NW.string(c.t.CAGgEx),
                    42: c.NW.string(c.t['jRZf+f']),
                    43: c.NW.string(c.t['4Vg0mp'])
                },
                [s.aIt.PEGI]: {
                    1: c.NW.string(c.t.VcO2U1),
                    2: c.NW.string(c.t['wt264+']),
                    3: c.NW.string(c.t['5yzEJS']),
                    4: c.NW.string(c.t.NBQZX1),
                    5: c.NW.string(c.t['4UG90d']),
                    6: c.NW.string(c.t.Cf5CtL),
                    7: c.NW.string(c.t.ai9C3d)
                }
            },
            l = e.descriptors.map((e) => i[t][e]).join(', ');
        return (0, r.jsxs)('div', {
            className: n,
            children: [
                (0, r.jsx)(a.Z, { children: c.NW.string(c.t.q9Zqgo) }),
                (0, r.jsxs)(o.Z, {
                    className: u.content,
                    children: [
                        this.renderContentRatingImage(),
                        (0, r.jsx)('div', {
                            className: u.__invalid_info,
                            children: l
                        })
                    ]
                })
            ]
        });
    }
}
let p = d;
