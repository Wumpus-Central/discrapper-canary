n.d(t, { Z: () => l });
var i = n(192379),
    r = n(723184),
    a = n(602984),
    s =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    o = function (e) {
        var t = e.white,
            n = e.grey,
            o = e.size,
            l = e.renderers,
            u = e.borderRadius,
            c = e.boxShadow,
            d = e.children,
            f = (0, r.default)({
                default: {
                    grid: {
                        borderRadius: u,
                        boxShadow: c,
                        absolute: '0px 0px 0px 0px',
                        background: 'url(' + a.U(t, n, o, l.canvas) + ') center left'
                    }
                }
            });
        return (0, i.isValidElement)(d) ? i.cloneElement(d, s({}, d.props, { style: s({}, d.props.style, f.grid) })) : i.createElement('div', { style: f.grid });
    };
o.defaultProps = {
    size: 8,
    white: 'transparent',
    grey: 'rgba(0,0,0,.08)',
    renderers: {}
};
let l = o;
