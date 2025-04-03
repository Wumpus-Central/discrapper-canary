var n = r(192379),
    o = r(476400),
    a = r.n(o),
    i = r(723184),
    l = r(829307),
    s = r(877837),
    u = r(361016),
    c =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    p = function (e) {
        var t = e.width,
            r = e.height,
            o = e.onChange,
            a = e.hsl,
            u = e.direction,
            p = e.pointer,
            f = e.styles,
            d = e.className,
            h = (0, i.default)(
                (0, l.Z)(
                    {
                        default: {
                            picker: {
                                position: 'relative',
                                width: t,
                                height: r
                            },
                            hue: { radius: '2px' }
                        }
                    },
                    void 0 === f ? {} : f
                )
            );
        return n.createElement(
            'div',
            {
                style: h.picker,
                className: 'hue-picker ' + (void 0 === d ? '' : d)
            },
            n.createElement(
                s.PS,
                c({}, h.hue, {
                    hsl: a,
                    pointer: p,
                    onChange: function (e) {
                        return o({
                            a: 1,
                            h: e.h,
                            l: 0.5,
                            s: 1
                        });
                    },
                    direction: u
                })
            )
        );
    };
(p.propTypes = { styles: a().object }),
    (p.defaultProps = {
        width: '316px',
        height: '16px',
        direction: 'horizontal',
        pointer: u.Z,
        styles: {}
    }),
    (0, s.t1)(p);
