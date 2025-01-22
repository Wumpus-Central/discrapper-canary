var i = r(29513);
function a() {
    var e = {},
        n = 0,
        r = 0,
        i = 0;
    return {
        add: function a(a, o) {
            !o && ((o = a), (a = 0)), a > r ? (r = a) : a < i && (i = a), !e[a] && (e[a] = []), e[a].push(o), n++;
        },
        process: function n() {
            for (var n = i; n <= r; n++) {
                for (var a = e[n], o = 0; o < a.length; o++) (0, a[o])();
            }
        },
        size: function e() {
            return n;
        }
    };
}
e.exports = function (e) {
    var n,
        r = (e = e || {}).reporter,
        o = i.getOption(e, 'async', !0),
        s = i.getOption(e, 'auto', !0);
    s && !o && (r && r.warn('Invalid options combination. auto=true and async=false is invalid. Setting async=true.'), (o = !0));
    var l = a(),
        u = !1;
    function c(e, n) {
        !u && s && o && 0 === l.size() && p(), l.add(e, n);
    }
    function d() {
        for (u = !0; l.size(); ) {
            var e = l;
            (l = a()), e.process();
        }
        u = !1;
    }
    function f(e) {
        if (!u) void 0 === e && (e = o), n && (h(n), (n = null)), e ? p() : d();
    }
    function p() {
        n = _(d);
    }
    function h(e) {
        return clearTimeout(e);
    }
    function _(e) {
        return (function (e) {
            return setTimeout(e, 0);
        })(e);
    }
    return {
        add: c,
        force: f
    };
};
