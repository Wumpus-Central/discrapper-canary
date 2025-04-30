r.d(t, { Z: () => a });
var n = r(192379),
    o = r(723184);
let a = function (e) {
    var t = e.hsl,
        r = e.offset,
        a = e.onClick,
        i = void 0 === a ? function () {} : a,
        l = e.active,
        s = e.first,
        u = e.last,
        c = (0, o.default)(
            {
                default: {
                    swatch: {
                        height: '12px',
                        background: 'hsl(' + t.h + ', 50%, ' + 100 * r + '%)',
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
                first: s,
                last: u
            }
        );
    return n.createElement('div', {
        style: c.swatch,
        onClick: function (e) {
            return i(
                {
                    h: t.h,
                    s: 0.5,
                    l: r,
                    source: 'hsl'
                },
                e
            );
        }
    });
};
