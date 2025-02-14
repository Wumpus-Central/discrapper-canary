n.d(t, { Z: () => h });
var i = n(200651),
    l = n(192379),
    r = n(77878),
    a = n(770146),
    s = n(600164),
    o = n(981631),
    d = n(388032),
    c = n(631489);
class u extends l.PureComponent {
    renderContentRatingImage() {
        let { contentRating: e, contentRatingAgency: t } = this.props.sku;
        return null == e || null == t
            ? null
            : (0, i.jsx)(r.Z, {
                  className: c.rating,
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
        let l = {
                [o.aIt.ESRB]: {
                    1: d.intl.string(d.t.ErVezc),
                    2: d.intl.string(d.t.xLyerK),
                    3: d.intl.string(d.t.UmB6j4),
                    4: d.intl.string(d.t.NHOQIy),
                    5: d.intl.string(d.t.U6xTOz),
                    6: d.intl.string(d.t['51xJIy']),
                    7: d.intl.string(d.t.uayp6u),
                    8: d.intl.string(d.t.c1GtKi),
                    9: d.intl.string(d.t.Hz8vra),
                    10: d.intl.string(d.t.qSyzdX),
                    11: d.intl.string(d.t.K68q8f),
                    12: d.intl.string(d.t.Yb0n6O),
                    13: d.intl.string(d.t.IIFZqq),
                    14: d.intl.string(d.t['NZ/JGR']),
                    15: d.intl.string(d.t['5qETTU']),
                    16: d.intl.string(d.t.kJGLz8),
                    17: d.intl.string(d.t.cB2QRE),
                    18: d.intl.string(d.t.g9SiEx),
                    19: d.intl.string(d.t['Xe0T5+']),
                    20: d.intl.string(d.t['4k6sY2']),
                    21: d.intl.string(d.t.cxFiDA),
                    22: d.intl.string(d.t.YvpQKy),
                    23: d.intl.string(d.t.i2gbpa),
                    24: d.intl.string(d.t['LooT/f']),
                    25: d.intl.string(d.t['/AIXho']),
                    26: d.intl.string(d.t.oo09Hx),
                    27: d.intl.string(d.t.XCUBe3),
                    28: d.intl.string(d.t.g6dipa),
                    29: d.intl.string(d.t.YYGUqq),
                    30: d.intl.string(d.t.WsqFnJ),
                    31: d.intl.string(d.t.zePEoq),
                    32: d.intl.string(d.t.bGErw8),
                    33: d.intl.string(d.t['imoY9/']),
                    34: d.intl.string(d.t['Z+VBdn']),
                    35: d.intl.string(d.t.eBgo0N),
                    36: d.intl.string(d.t['6SVTt7']),
                    37: d.intl.string(d.t['8Lme6e']),
                    38: d.intl.string(d.t.ettX4O),
                    39: d.intl.string(d.t.nnVZFx),
                    40: d.intl.string(d.t.TWlbXl),
                    41: d.intl.string(d.t.CAGgEx),
                    42: d.intl.string(d.t['jRZf+f']),
                    43: d.intl.string(d.t['4Vg0mp'])
                },
                [o.aIt.PEGI]: {
                    1: d.intl.string(d.t.VcO2U1),
                    2: d.intl.string(d.t['wt264+']),
                    3: d.intl.string(d.t['5yzEJS']),
                    4: d.intl.string(d.t.NBQZX1),
                    5: d.intl.string(d.t['4UG90d']),
                    6: d.intl.string(d.t.Cf5CtL),
                    7: d.intl.string(d.t.ai9C3d)
                }
            },
            r = e.descriptors.map((e) => l[t][e]).join(', ');
        return (0, i.jsxs)('div', {
            className: n,
            children: [
                (0, i.jsx)(a.Z, { children: d.intl.string(d.t.q9Zqgo) }),
                (0, i.jsxs)(s.Z, {
                    className: c.content,
                    children: [
                        this.renderContentRatingImage(),
                        (0, i.jsx)('div', {
                            className: c.__invalid_info,
                            children: r
                        })
                    ]
                })
            ]
        });
    }
}
let h = u;
