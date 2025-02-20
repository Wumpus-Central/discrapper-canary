r = { value: !0 };
var r,
    i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    o = a(n(192379));
function a(e) {
    return e && e.__esModule ? e : { default: e };
}
function s(e, t) {
    var n = {};
    for (var r in e) !(t.indexOf(r) >= 0) && Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n;
}
var l = 24;
t.default = function (e) {
    var t = e.fill,
        n = void 0 === t ? 'currentColor' : t,
        r = e.width,
        a = void 0 === r ? l : r,
        c = e.height,
        u = void 0 === c ? l : c,
        d = e.style,
        f = void 0 === d ? {} : d,
        p = s(e, ['fill', 'width', 'height', 'style']);
    return o.default.createElement(
        'svg',
        i(
            {
                viewBox: '0 0 ' + l + ' ' + l,
                style: i(
                    {
                        fill: n,
                        width: a,
                        height: u
                    },
                    f
                )
            },
            p
        ),
        o.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
    );
};
