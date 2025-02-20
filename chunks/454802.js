var r = n(192379),
    i = n(723184),
    o = n(877837),
    a = n(68688),
    s =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    l = function (e) {
        var t = e.rgb,
            n = e.hsl,
            a = e.width,
            l = e.height,
            c = e.onChange,
            u = e.direction,
            d = e.style,
            f = e.renderers,
            p = e.pointer,
            _ = e.className,
            h = void 0 === _ ? '' : _,
            m = (0, i.default)({
                default: {
                    picker: {
                        position: 'relative',
                        width: a,
                        height: l
                    },
                    alpha: {
                        radius: '2px',
                        style: d
                    }
                }
            });
        return r.createElement(
            'div',
            {
                style: m.picker,
                className: 'alpha-picker ' + h
            },
            r.createElement(
                o.xV,
                s({}, m.alpha, {
                    rgb: t,
                    hsl: n,
                    pointer: p,
                    renderers: f,
                    onChange: c,
                    direction: u
                })
            )
        );
    };
(l.defaultProps = {
    width: '316px',
    height: '16px',
    direction: 'horizontal',
    pointer: a.Z
}),
    (0, o.t1)(l);
