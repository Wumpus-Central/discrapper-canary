var r = n(29513);
function i() {
    var e = {},
        t = 0,
        n = 0,
        r = 0;
    return {
        add: function (i, o) {
            o || ((o = i), (i = 0)), i > n ? (n = i) : i < r && (r = i), e[i] || (e[i] = []), e[i].push(o), t++;
        },
        process: function () {
            for (var t = r; t <= n; t++) for (var i = e[t], o = 0; o < i.length; o++) (0, i[o])();
        },
        size: function () {
            return t;
        }
    };
}
e.exports = function (e) {
    var t,
        n = (e = e || {}).reporter,
        o = r.getOption(e, 'async', !0),
        a = r.getOption(e, 'auto', !0);
    a && !o && (n && n.warn('Invalid options combination. auto=true and async=false is invalid. Setting async=true.'), (o = !0));
    var s = i(),
        l = !1;
    function c() {
        for (l = !0; s.size(); ) {
            var e = s;
            (s = i()), e.process();
        }
        l = !1;
    }
    function u() {
        t = f(c);
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
            !l && a && o && 0 === s.size() && u(), s.add(e, t);
        },
        force: function e(e) {
            !l && (void 0 === e && (e = o), t && (d(t), (t = null)), e ? u() : c());
        }
    };
};
