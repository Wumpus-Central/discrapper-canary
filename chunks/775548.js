var i = n(29513);
function r() {
    var e = {},
        t = 0,
        n = 0,
        i = 0;
    return {
        add: function (r, a) {
            a || ((a = r), (r = 0)), r > n ? (n = r) : r < i && (i = r), e[r] || (e[r] = []), e[r].push(a), t++;
        },
        process: function () {
            for (var t = i; t <= n; t++) for (var r = e[t], a = 0; a < r.length; a++) (0, r[a])();
        },
        size: function () {
            return t;
        }
    };
}
e.exports = function (e) {
    var t,
        n = (e = e || {}).reporter,
        a = i.getOption(e, 'async', !0),
        s = i.getOption(e, 'auto', !0);
    s && !a && (n && n.warn('Invalid options combination. auto=true and async=false is invalid. Setting async=true.'), (a = !0));
    var o = r(),
        l = !1;
    function u() {
        for (l = !0; o.size(); ) {
            var e = o;
            (o = r()), e.process();
        }
        l = !1;
    }
    function c() {
        t = f(u);
    }
    function d(e) {
        return clearTimeout(e);
    }
    function f(e) {
        return (function (e) {
            return setTimeout(e, 0);
        })(e);
    }
    return {
        add: function e(e, t) {
            !l && s && a && 0 === o.size() && c(), o.add(e, t);
        },
        force: function e(e) {
            !l && (void 0 === e && (e = a), t && (d(t), (t = null)), e ? c() : u());
        }
    };
};
