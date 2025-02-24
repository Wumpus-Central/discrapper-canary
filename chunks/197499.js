var n,
    o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    a = (n = r(192379)) && n.__esModule ? n : { default: n };
t.default = function (e) {
    var t = e.fill,
        r = e.width,
        n = e.height,
        i = e.style,
        l = (function (e, t) {
            var r = {};
            for (var n in e) !(t.indexOf(n) >= 0) && Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, ['fill', 'width', 'height', 'style']);
    return a.default.createElement(
        'svg',
        o(
            {
                viewBox: '0 0 24 24',
                style: o(
                    {
                        fill: void 0 === t ? 'currentColor' : t,
                        width: void 0 === r ? 24 : r,
                        height: void 0 === n ? 24 : n
                    },
                    void 0 === i ? {} : i
                )
            },
            l
        ),
        a.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
    );
};
