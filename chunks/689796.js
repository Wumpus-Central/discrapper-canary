var i = n(200651),
    r = n(192379),
    l = n(77878),
    a = n(770146),
    s = n(600164),
    o = n(981631),
    c = n(388032),
    d = n(454072);
class u extends r.PureComponent {
    renderContentRatingImage() {
        let { contentRating: e, contentRatingAgency: t } = this.props.sku;
        return null == e || null == t
            ? null
            : (0, i.jsx)(l.Z, {
                  className: d.rating,
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
        let r = {
                [o.aIt.ESRB]: {
                    1: c.intl.string(c.t.ErVezc),
                    2: c.intl.string(c.t.xLyerK),
                    3: c.intl.string(c.t.UmB6j4),
                    4: c.intl.string(c.t.NHOQIy),
                    5: c.intl.string(c.t.U6xTOz),
                    6: c.intl.string(c.t['51xJIy']),
                    7: c.intl.string(c.t.uayp6u),
                    8: c.intl.string(c.t.c1GtKi),
                    9: c.intl.string(c.t.Hz8vra),
                    10: c.intl.string(c.t.qSyzdX),
                    11: c.intl.string(c.t.K68q8f),
                    12: c.intl.string(c.t.Yb0n6O),
                    13: c.intl.string(c.t.IIFZqq),
                    14: c.intl.string(c.t['NZ/JGR']),
                    15: c.intl.string(c.t['5qETTU']),
                    16: c.intl.string(c.t.kJGLz8),
                    17: c.intl.string(c.t.cB2QRE),
                    18: c.intl.string(c.t.g9SiEx),
                    19: c.intl.string(c.t['Xe0T5+']),
                    20: c.intl.string(c.t['4k6sY2']),
                    21: c.intl.string(c.t.cxFiDA),
                    22: c.intl.string(c.t.YvpQKy),
                    23: c.intl.string(c.t.i2gbpa),
                    24: c.intl.string(c.t['LooT/f']),
                    25: c.intl.string(c.t['/AIXho']),
                    26: c.intl.string(c.t.oo09Hx),
                    27: c.intl.string(c.t.XCUBe3),
                    28: c.intl.string(c.t.g6dipa),
                    29: c.intl.string(c.t.YYGUqq),
                    30: c.intl.string(c.t.WsqFnJ),
                    31: c.intl.string(c.t.zePEoq),
                    32: c.intl.string(c.t.bGErw8),
                    33: c.intl.string(c.t['imoY9/']),
                    34: c.intl.string(c.t['Z+VBdn']),
                    35: c.intl.string(c.t.eBgo0N),
                    36: c.intl.string(c.t['6SVTt7']),
                    37: c.intl.string(c.t['8Lme6e']),
                    38: c.intl.string(c.t.ettX4O),
                    39: c.intl.string(c.t.nnVZFx),
                    40: c.intl.string(c.t.TWlbXl),
                    41: c.intl.string(c.t.CAGgEx),
                    42: c.intl.string(c.t['jRZf+f']),
                    43: c.intl.string(c.t['4Vg0mp'])
                },
                [o.aIt.PEGI]: {
                    1: c.intl.string(c.t.VcO2U1),
                    2: c.intl.string(c.t['wt264+']),
                    3: c.intl.string(c.t['5yzEJS']),
                    4: c.intl.string(c.t.NBQZX1),
                    5: c.intl.string(c.t['4UG90d']),
                    6: c.intl.string(c.t.Cf5CtL),
                    7: c.intl.string(c.t.ai9C3d)
                }
            },
            l = e.descriptors.map((e) => r[t][e]).join(', ');
        return (0, i.jsxs)('div', {
            className: n,
            children: [
                (0, i.jsx)(a.Z, { children: c.intl.string(c.t.q9Zqgo) }),
                (0, i.jsxs)(s.Z, {
                    className: d.content,
                    children: [
                        this.renderContentRatingImage(),
                        (0, i.jsx)('div', {
                            className: d.__invalid_info,
                            children: l
                        })
                    ]
                })
            ]
        });
    }
}
t.Z = u;
