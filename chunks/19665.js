Object.defineProperty(e, '__esModule', { value: !0 });
var o =
        Object.assign ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
            }
            return t;
        },
    n = u(r(639519)),
    i = r(192379),
    a = u(i);
function u(t) {
    return t && t.__esModule ? t : { default: t };
}
var s = {
        bgColor: n.default.oneOfType([n.default.object, n.default.string]).isRequired,
        bgD: n.default.string.isRequired,
        fgColor: n.default.oneOfType([n.default.object, n.default.string]).isRequired,
        fgD: n.default.string.isRequired,
        size: n.default.number.isRequired,
        title: n.default.string,
        viewBoxSize: n.default.number.isRequired,
        xmlns: n.default.string
    },
    l = (0, i.forwardRef)(function (t, e) {
        var r = t.bgColor,
            n = t.bgD,
            i = t.fgD,
            u = t.fgColor,
            s = t.size,
            l = t.title,
            f = t.viewBoxSize,
            h = (function (t, e) {
                var r = {};
                for (var o in t) !(e.indexOf(o) >= 0) && Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
                return r;
            })(t, ['bgColor', 'bgD', 'fgD', 'fgColor', 'size', 'title', 'viewBoxSize']);
        return a.default.createElement(
            'svg',
            o({}, h, {
                height: s,
                ref: e,
                viewBox: '0 0 ' + f + ' ' + f,
                width: s
            }),
            l ? a.default.createElement('title', null, l) : null,
            a.default.createElement('path', {
                d: n,
                fill: r
            }),
            a.default.createElement('path', {
                d: i,
                fill: u
            })
        );
    });
(l.displayName = 'QRCodeSvg'),
    (l.propTypes = s),
    (l.defaultProps = {
        title: void 0,
        xmlns: 'http://www.w3.org/2000/svg'
    }),
    (e.default = l);
