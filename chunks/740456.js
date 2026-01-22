var n = e(834647),
    o = e(675879),
    s = e(760326),
    i = e(407057),
    u = e(512008),
    c = e(164336).f,
    a = e(989447),
    f = e(753123),
    p = e(357377),
    l = e(226775),
    v = e(909797),
    y = !1,
    h = l("meta"),
    x = 0,
    d = function (t) {
        c(t, h, {
            value: {
                objectID: "O" + x++,
                weakData: {},
            },
        });
    },
    g = (t.exports = {
        enable: function () {
            (g.enable = function () {}), (y = !0);
            var t = a.f,
                r = o([].splice),
                e = {};
            (e[h] = 1),
                t(e).length &&
                    ((a.f = function (e) {
                        for (var n = t(e), o = 0, s = n.length; o < s; o++)
                            if (n[o] === h) {
                                r(n, o, 1);
                                break;
                            }
                        return n;
                    }),
                    n(
                        {
                            target: "Object",
                            stat: !0,
                            forced: !0,
                        },
                        {
                            getOwnPropertyNames: f.f,
                        },
                    ));
        },
        fastKey: function (t, r) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!u(t, h)) {
                if (!p(t)) return "F";
                if (!r) return "E";
                d(t);
            }
            return t[h].objectID;
        },
        getWeakData: function (t, r) {
            if (!u(t, h)) {
                if (!p(t)) return !0;
                if (!r) return !1;
                d(t);
            }
            return t[h].weakData;
        },
        onFreeze: function (t) {
            return v && y && p(t) && !u(t, h) && d(t), t;
        },
    });
s[h] = !0;
