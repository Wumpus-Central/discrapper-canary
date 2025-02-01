var i = n(192379),
    r = n(476400),
    a = n.n(r),
    s = n(723184),
    o = n(829307),
    l = n(877837),
    u = n(361016),
    c =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    d = function (e) {
        var t = e.width,
            n = e.height,
            r = e.onChange,
            a = e.hsl,
            u = e.direction,
            d = e.pointer,
            f = e.styles,
            _ = void 0 === f ? {} : f,
            p = e.className,
            h = void 0 === p ? '' : p,
            m = (0, s.default)(
                (0, o.Z)(
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
                    _
                )
            ),
            g = function (e) {
                return r({
                    a: 1,
                    h: e.h,
                    l: 0.5,
                    s: 1
                });
            };
        return i.createElement(
            'div',
            {
                style: m.picker,
                className: 'hue-picker ' + h
            },
            i.createElement(
                l.PS,
                c({}, m.hue, {
                    hsl: a,
                    pointer: d,
                    onChange: g,
                    direction: u
                })
            )
        );
    };
(d.propTypes = { styles: a().object }),
    (d.defaultProps = {
        width: '316px',
        height: '16px',
        direction: 'horizontal',
        pointer: u.Z,
        styles: {}
    }),
    (0, l.t1)(d);
