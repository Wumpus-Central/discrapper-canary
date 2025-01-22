var i = r(192379),
    a = r(723184),
    o = r(877837),
    s = r(68688),
    l =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    u = function (e) {
        var n = e.rgb,
            r = e.hsl,
            s = e.width,
            u = e.height,
            c = e.onChange,
            d = e.direction,
            f = e.style,
            p = e.renderers,
            h = e.pointer,
            _ = e.className,
            m = void 0 === _ ? '' : _,
            g = (0, a.default)({
                default: {
                    picker: {
                        position: 'relative',
                        width: s,
                        height: u
                    },
                    alpha: {
                        radius: '2px',
                        style: f
                    }
                }
            });
        return i.createElement(
            'div',
            {
                style: g.picker,
                className: 'alpha-picker ' + m
            },
            i.createElement(
                o.xV,
                l({}, g.alpha, {
                    rgb: n,
                    hsl: r,
                    pointer: h,
                    renderers: p,
                    onChange: c,
                    direction: d
                })
            )
        );
    };
(u.defaultProps = {
    width: '316px',
    height: '16px',
    direction: 'horizontal',
    pointer: s.Z
}),
    (0, o.t1)(u);
