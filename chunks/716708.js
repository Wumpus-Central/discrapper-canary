var i = r(192379),
    a = r(723184),
    o = r(602984),
    s =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    l = function (e) {
        var n = e.white,
            r = e.grey,
            l = e.size,
            u = e.renderers,
            c = e.borderRadius,
            d = e.boxShadow,
            f = e.children,
            p = (0, a.default)({
                default: {
                    grid: {
                        borderRadius: c,
                        boxShadow: d,
                        absolute: '0px 0px 0px 0px',
                        background: 'url(' + o.U(n, r, l, u.canvas) + ') center left'
                    }
                }
            });
        return (0, i.isValidElement)(f) ? i.cloneElement(f, s({}, f.props, { style: s({}, f.props.style, p.grid) })) : i.createElement('div', { style: p.grid });
    };
(l.defaultProps = {
    size: 8,
    white: 'transparent',
    grey: 'rgba(0,0,0,.08)',
    renderers: {}
}),
    (n.Z = l);
