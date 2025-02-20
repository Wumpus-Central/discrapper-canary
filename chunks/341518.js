n.d(t, { Z: () => o });
var r = n(192379),
    i = n(723184);
let o = function (e) {
    var t = e.hsl,
        n = e.offset,
        o = e.onClick,
        a = void 0 === o ? function () {} : o,
        s = e.active,
        l = e.first,
        c = e.last,
        u = (0, i.default)(
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
                active: s,
                first: l,
                last: c
            }
        ),
        d = function (e) {
            return a(
                {
                    h: t.h,
                    s: 0.5,
                    l: n,
                    source: 'hsl'
                },
                e
            );
        };
    return r.createElement('div', {
        style: u.swatch,
        onClick: d
    });
};
