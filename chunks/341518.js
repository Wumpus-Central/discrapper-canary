var i = r(192379),
    a = r(723184),
    o = function (e) {
        var n = e.hsl,
            r = e.offset,
            o = e.onClick,
            s = void 0 === o ? function () {} : o,
            l = e.active,
            u = e.first,
            c = e.last,
            d = (0, a.default)(
                {
                    default: {
                        swatch: {
                            height: '12px',
                            background: 'hsl(' + n.h + ', 50%, ' + 100 * r + '%)',
                            cursor: 'pointer'
                        }
                    },
                    first: { swatch: { borderRadius: '2px 0 0 2px' } },
                    last: { swatch: { borderRadius: '0 2px 2px 0' } },
                    active: {
                        swatch: {
                            transform: 'scaleY(1.8)',
                            borderRadius: '3.6px/2px'
                        }
                    }
                },
                {
                    active: l,
                    first: u,
                    last: c
                }
            ),
            f = function (e) {
                return s(
                    {
                        h: n.h,
                        s: 0.5,
                        l: r,
                        source: 'hsl'
                    },
                    e
                );
            };
        return i.createElement('div', {
            style: d.swatch,
            onClick: f
        });
    };
n.Z = o;
