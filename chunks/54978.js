var e = n(220159),
    o = n(764908),
    i = n(270498),
    u = n(829575),
    s = n(185698),
    c = n(85328).f,
    f = n(777985),
    a = n(206804),
    p = n(788811),
    l = n(290619),
    v = n(642280),
    y = !1,
    h = l('meta'),
    x = 0,
    d = function (t) {
        c(t, h, {
            value: {
                objectID: 'O' + x++,
                weakData: {}
            }
        });
    },
    g = (t.exports = {
        enable: function () {
            (g.enable = function () {}), (y = !0);
            var t = f.f,
                r = o([].splice),
                n = {};
            (n[h] = 1),
                t(n).length &&
                    ((f.f = function (n) {
                        for (var e = t(n), o = 0, i = e.length; o < i; o++)
                            if (e[o] === h) {
                                r(e, o, 1);
                                break;
                            }
                        return e;
                    }),
                    e(
                        {
                            target: 'Object',
                            stat: !0,
                            forced: !0
                        },
                        { getOwnPropertyNames: a.f }
                    ));
        },
        fastKey: function (t, r) {
            if (!u(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
            if (!s(t, h)) {
                if (!p(t)) return 'F';
                if (!r) return 'E';
                d(t);
            }
            return t[h].objectID;
        },
        getWeakData: function (t, r) {
            if (!s(t, h)) {
                if (!p(t)) return !0;
                if (!r) return !1;
                d(t);
            }
            return t[h].weakData;
        },
        onFreeze: function (t) {
            return v && y && p(t) && !s(t, h) && d(t), t;
        }
    });
i[h] = !0;
