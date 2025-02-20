n.d(t, { Z: () => l });
var r = n(192379),
    i = n(723184),
    o = n(602984),
    a =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    s = function (e) {
        var t = e.white,
            n = e.grey,
            s = e.size,
            l = e.renderers,
            c = e.borderRadius,
            u = e.boxShadow,
            d = e.children,
            f = (0, i.default)({
                default: {
                    grid: {
                        borderRadius: c,
                        boxShadow: u,
                        absolute: '0px 0px 0px 0px',
                        background: 'url(' + o.U(t, n, s, l.canvas) + ') center left'
                    }
                }
            });
        return (0, r.isValidElement)(d) ? r.cloneElement(d, a({}, d.props, { style: a({}, d.props.style, f.grid) })) : r.createElement('div', { style: f.grid });
    };
s.defaultProps = {
    size: 8,
    white: 'transparent',
    grey: 'rgba(0,0,0,.08)',
    renderers: {}
};
let l = s;
