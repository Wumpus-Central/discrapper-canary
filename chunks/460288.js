n.d(t, { Z: () => a });
var r = n(996696);
function o(e, t, n, o, a, i, s) {
    try {
        var c = e[i](s),
            l = c.value;
    } catch (e) {
        return void n(e);
    }
    c.done ? t(l) : r.resolve(l).then(o, a);
}
function a(e) {
    return function () {
        var t = this,
            n = arguments;
        return new r(function (r, a) {
            var i = e.apply(t, n);
            function s(e) {
                o(i, r, a, s, c, 'next', e);
            }
            function c(e) {
                o(i, r, a, s, c, 'throw', e);
            }
            s(void 0);
        });
    };
}
