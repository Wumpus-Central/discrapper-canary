var o =
        Object.assign ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
            }
            return t;
        },
    n = f(r(459721)),
    i = f(r(933982)),
    a = f(r(639519)),
    u = r(192379),
    s = f(u),
    l = f(r(29769));
function f(t) {
    return t && t.__esModule ? t : { default: t };
}
var h = {
        bgColor: a.default.oneOfType([a.default.object, a.default.string]),
        fgColor: a.default.oneOfType([a.default.object, a.default.string]),
        level: a.default.string,
        size: a.default.number,
        value: a.default.string.isRequired
    },
    g = (0, u.forwardRef)(function (t, e) {
        var r = t.bgColor,
            a = t.fgColor,
            u = t.level,
            f = t.size,
            h = t.value,
            g = (function (t, e) {
                var r = {};
                for (var o in t) !(e.indexOf(o) >= 0) && Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
                return r;
            })(t, ['bgColor', 'fgColor', 'level', 'size', 'value']),
            c = new n.default(-1, i.default[u]);
        c.addData(h), c.make();
        var d = c.modules;
        return s.default.createElement(
            l.default,
            o({}, g, {
                bgColor: r,
                bgD: d
                    .map(function (t, e) {
                        return t
                            .map(function (t, r) {
                                return t ? '' : 'M ' + r + ' ' + e + ' l 1 0 0 1 -1 0 Z';
                            })
                            .join(' ');
                    })
                    .join(' '),
                fgColor: a,
                fgD: d
                    .map(function (t, e) {
                        return t
                            .map(function (t, r) {
                                return t ? 'M ' + r + ' ' + e + ' l 1 0 0 1 -1 0 Z' : '';
                            })
                            .join(' ');
                    })
                    .join(' '),
                ref: e,
                size: f,
                viewBoxSize: d.length
            })
        );
    });
(g.displayName = 'QRCode'),
    (g.propTypes = h),
    (g.defaultProps = {
        bgColor: '#FFFFFF',
        fgColor: '#000000',
        level: 'L',
        size: 256
    }),
    (e.default = g);
