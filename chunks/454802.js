var n = r(192379),
    o = r(723184),
    a = r(877837),
    i = r(68688),
    l =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    s = function (e) {
        var t = e.rgb,
            r = e.hsl,
            i = e.width,
            s = e.height,
            u = e.onChange,
            c = e.direction,
            p = e.style,
            f = e.renderers,
            d = e.pointer,
            h = e.className,
            b = (0, o.default)({
                default: {
                    picker: {
                        position: 'relative',
                        width: i,
                        height: s
                    },
                    alpha: {
                        radius: '2px',
                        style: p
                    }
                }
            });
        return n.createElement(
            'div',
            {
                style: b.picker,
                className: 'alpha-picker ' + (void 0 === h ? '' : h)
            },
            n.createElement(
                a.xV,
                l({}, b.alpha, {
                    rgb: t,
                    hsl: r,
                    pointer: d,
                    renderers: f,
                    onChange: u,
                    direction: c
                })
            )
        );
    };
(s.defaultProps = {
    width: '316px',
    height: '16px',
    direction: 'horizontal',
    pointer: i.Z
}),
    (0, a.t1)(s);
