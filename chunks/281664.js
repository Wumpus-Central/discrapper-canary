var i = n(192379),
    r = n(476400),
    a = n.n(r),
    s = n(723184),
    o = n(329022),
    l = n(829307),
    u = n(705513),
    c = n(877837),
    d = n(272991),
    f = function (e) {
        var t = e.width,
            n = e.onChange,
            r = e.onSwatchHover,
            a = e.colors,
            u = e.hex,
            c = e.circleSize,
            f = e.styles,
            _ = void 0 === f ? {} : f,
            p = e.circleSpacing,
            h = e.className,
            m = void 0 === h ? '' : h,
            g = (0, s.default)(
                (0, l.Z)(
                    {
                        default: {
                            card: {
                                width: t,
                                display: 'flex',
                                flexWrap: 'wrap',
                                marginRight: -p,
                                marginBottom: -p
                            }
                        }
                    },
                    _
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
        return i.createElement(
            'div',
            {
                style: g.card,
                className: 'circle-picker ' + m
            },
            (0, o.Z)(a, function (e) {
                return i.createElement(d.Z, {
                    key: e,
                    color: e,
                    onClick: E,
                    onSwatchHover: r,
                    active: u === e.toLowerCase(),
                    circleSize: c,
                    circleSpacing: p
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
