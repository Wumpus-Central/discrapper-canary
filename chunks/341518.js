n.d(t, { Z: () => a });
var i = n(192379),
    r = n(723184);
let a = function (e) {
    var t = e.hsl,
        n = e.offset,
        a = e.onClick,
        s = void 0 === a ? function () {} : a,
        o = e.active,
        l = e.first,
        u = e.last,
        c = (0, r.default)(
            {
                default: {
                    swatch: {
                        height: '12px',
                        background: 'hsl(' + t.h + ', 50%, ' + 100 * n + '%)',
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
                active: o,
                first: l,
                last: u
            }
        ),
        d = function (e) {
            return s(
                {
                    h: t.h,
                    s: 0.5,
                    l: n,
                    source: 'hsl'
                },
                e
            );
        };
    return i.createElement('div', {
        style: c.swatch,
        onClick: d
    });
};
