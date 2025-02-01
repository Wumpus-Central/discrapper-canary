var i = n(192379),
    r = n(723184),
    a = n(877837),
    s = n(68688),
    o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    l = function (e) {
        var t = e.rgb,
            n = e.hsl,
            s = e.width,
            l = e.height,
            u = e.onChange,
            c = e.direction,
            d = e.style,
            f = e.renderers,
            _ = e.pointer,
            p = e.className,
            h = void 0 === p ? '' : p,
            m = (0, r.default)({
                default: {
                    picker: {
                        position: 'relative',
                        width: s,
                        height: l
                    },
                    alpha: {
                        radius: '2px',
                        style: d
                    }
                }
            });
        return i.createElement(
            'div',
            {
                style: m.picker,
                className: 'alpha-picker ' + h
            },
            i.createElement(
                a.xV,
                o({}, m.alpha, {
                    rgb: t,
                    hsl: n,
                    pointer: _,
                    renderers: f,
                    onChange: u,
                    direction: c
                })
            )
        );
    };
(l.defaultProps = {
    width: '316px',
    height: '16px',
    direction: 'horizontal',
    pointer: s.Z
}),
    (0, a.t1)(l);
