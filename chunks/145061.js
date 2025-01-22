var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(829307),
    u = r(877837),
    c = r(361016),
    d =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    f = function (e) {
        var n = e.width,
            r = e.height,
            a = e.onChange,
            o = e.hsl,
            c = e.direction,
            f = e.pointer,
            p = e.styles,
            h = void 0 === p ? {} : p,
            _ = e.className,
            m = void 0 === _ ? '' : _,
            g = (0, s.default)(
                (0, l.Z)(
                    {
                        default: {
                            picker: {
                                position: 'relative',
                                width: n,
                                height: r
                            },
                            hue: { radius: '2px' }
                        }
                    },
                    h
                )
            ),
            E = function (e) {
                return a({
                    a: 1,
                    h: e.h,
                    l: 0.5,
                    s: 1
                });
            };
        return i.createElement(
            'div',
            {
                style: g.picker,
                className: 'hue-picker ' + m
            },
            i.createElement(
                u.PS,
                d({}, g.hue, {
                    hsl: o,
                    pointer: f,
                    onChange: E,
                    direction: c
                })
            )
        );
    };
(f.propTypes = { styles: o().object }),
    (f.defaultProps = {
        width: '316px',
        height: '16px',
        direction: 'horizontal',
        pointer: c.Z,
        styles: {}
    }),
    (0, u.t1)(f);
