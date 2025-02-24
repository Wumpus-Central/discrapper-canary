var n = r(192379),
    o = r(476400),
    a = r.n(o),
    i = r(723184),
    l = r(329022),
    s = r(829307),
    u = r(705513),
    c = r(877837),
    p = r(272991),
    f = function (e) {
        var t = e.width,
            r = e.onChange,
            o = e.onSwatchHover,
            a = e.colors,
            u = e.hex,
            c = e.circleSize,
            f = e.styles,
            d = e.circleSpacing,
            h = e.className,
            b = (0, i.default)(
                (0, s.Z)(
                    {
                        default: {
                            card: {
                                width: t,
                                display: 'flex',
                                flexWrap: 'wrap',
                                marginRight: -d,
                                marginBottom: -d
                            }
                        }
                    },
                    void 0 === f ? {} : f
                )
            ),
            v = function (e, t) {
                return r(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    t
                );
            };
        return n.createElement(
            'div',
            {
                style: b.card,
                className: 'circle-picker ' + (void 0 === h ? '' : h)
            },
            (0, l.Z)(a, function (e) {
                return n.createElement(p.Z, {
                    key: e,
                    color: e,
                    onClick: v,
                    onSwatchHover: o,
                    active: u === e.toLowerCase(),
                    circleSize: c,
                    circleSpacing: d
                });
            })
        );
    };
(f.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    circleSize: a().number,
    circleSpacing: a().number,
    styles: a().object
}),
    (f.defaultProps = {
        width: 252,
        circleSize: 28,
        circleSpacing: 14,
        colors: [u.Q6['500'], u.iQ['500'], u.jk['500'], u.vq['500'], u.QN['500'], u.iN['500'], u.f7['500'], u.sl['500'], u.$C['500'], u.ek['500'], u.ZE['500'], u.LR['500'], u.er['500'], u.Dz['500'], u.$y['500'], u.bK['500'], u.P_['500'], u.BU['500']],
        styles: {}
    }),
    (0, c.t1)(f);
