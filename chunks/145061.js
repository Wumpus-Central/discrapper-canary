var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(829307),
    l = n(877837),
    c = n(361016),
    u =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    d = function (e) {
        var t = e.width,
            n = e.height,
            i = e.onChange,
            o = e.hsl,
            c = e.direction,
            d = e.pointer,
            f = e.styles,
            p = void 0 === f ? {} : f,
            _ = e.className,
            h = void 0 === _ ? '' : _,
            m = (0, a.default)(
                (0, s.Z)(
                    {
                        default: {
                            picker: {
                                position: 'relative',
                                width: t,
                                height: n
                            },
                            hue: { radius: '2px' }
                        }
                    },
                    p
                )
            ),
            g = function (e) {
                return i({
                    a: 1,
                    h: e.h,
                    l: 0.5,
                    s: 1
                });
            };
        return r.createElement(
            'div',
            {
                style: m.picker,
                className: 'hue-picker ' + h
            },
            r.createElement(
                l.PS,
                u({}, m.hue, {
                    hsl: o,
                    pointer: d,
                    onChange: g,
                    direction: c
                })
            )
        );
    };
(d.propTypes = { styles: o().object }),
    (d.defaultProps = {
        width: '316px',
        height: '16px',
        direction: 'horizontal',
        pointer: c.Z,
        styles: {}
    }),
    (0, l.t1)(d);
