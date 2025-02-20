var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(329022),
    l = n(829307),
    c = n(705513),
    u = n(877837),
    d = n(272991),
    f = function (e) {
        var t = e.width,
            n = e.onChange,
            i = e.onSwatchHover,
            o = e.colors,
            c = e.hex,
            u = e.circleSize,
            f = e.styles,
            p = void 0 === f ? {} : f,
            _ = e.circleSpacing,
            h = e.className,
            m = void 0 === h ? '' : h,
            g = (0, a.default)(
                (0, l.Z)(
                    {
                        default: {
                            card: {
                                width: t,
                                display: 'flex',
                                flexWrap: 'wrap',
                                marginRight: -_,
                                marginBottom: -_
                            }
                        }
                    },
                    p
                )
            ),
            E = function (e, t) {
                return n(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    t
                );
            };
        return r.createElement(
            'div',
            {
                style: g.card,
                className: 'circle-picker ' + m
            },
            (0, s.Z)(o, function (e) {
                return r.createElement(d.Z, {
                    key: e,
                    color: e,
                    onClick: E,
                    onSwatchHover: i,
                    active: c === e.toLowerCase(),
                    circleSize: u,
                    circleSpacing: _
                });
            })
        );
    };
(f.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    circleSize: o().number,
    circleSpacing: o().number,
    styles: o().object
}),
    (f.defaultProps = {
        width: 252,
        circleSize: 28,
        circleSpacing: 14,
        colors: [c.Q6['500'], c.iQ['500'], c.jk['500'], c.vq['500'], c.QN['500'], c.iN['500'], c.f7['500'], c.sl['500'], c.$C['500'], c.ek['500'], c.ZE['500'], c.LR['500'], c.er['500'], c.Dz['500'], c.$y['500'], c.bK['500'], c.P_['500'], c.BU['500']],
        styles: {}
    }),
    (0, u.t1)(f);
