function r(e, t) {
    var r = ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!r) {
        if (
            Array.isArray(e) ||
            (r = (function (e) {
                if (e) {
                    if ("string" == typeof e) return n(e, void 0);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return n(e, void 0);
                }
            })(e)) ||
            (t && e && "number" == typeof e.length)
        ) {
            r && (e = r);
            var i = 0,
                o = function () {};
            return {
                s: o,
                n: function () {
                    return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                },
                e: function (e) {
                    throw e;
                },
                f: o,
            };
        }
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    var a,
        s = !0,
        l = !1;
    return {
        s: function () {
            r = r.call(e);
        },
        n: function () {
            var e = r.next();
            return (s = e.done), e;
        },
        e: function (e) {
            (l = !0), (a = e);
        },
        f: function () {
            try {
                s || null == r.return || r.return();
            } finally {
                if (l) throw a;
            }
        },
    };
}
function n(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
(t.type = (e) => e.split(/ *; */).shift()),
    (t.params = (e) => {
        let t = {};
        var n,
            i = r(e.split(/ *; */));
        try {
            for (i.s(); !(n = i.n()).done; ) {
                let e = n.value.split(/ *= */),
                    r = e.shift(),
                    i = e.shift();
                r && i && (t[r] = i);
            }
        } catch (e) {
            i.e(e);
        } finally {
            i.f();
        }
        return t;
    }),
    (t.parseLinks = (e) => {
        let t = {};
        var n,
            i = r(e.split(/ *, */));
        try {
            for (i.s(); !(n = i.n()).done; ) {
                let e = n.value.split(/ *; */),
                    r = e[0].slice(1, -1);
                t[e[1].split(/ *= */)[1].slice(1, -1)] = r;
            }
        } catch (e) {
            i.e(e);
        } finally {
            i.f();
        }
        return t;
    }),
    (t.cleanHeader = (e, t) => (
        delete e["content-type"],
        delete e["content-length"],
        delete e["transfer-encoding"],
        delete e.host,
        t && (delete e.authorization, delete e.cookie),
        e
    )),
    (t.isObject = (e) => null !== e && "object" == typeof e),
    (t.hasOwn =
        Object.hasOwn ||
        function (e, t) {
            if (null == e) throw TypeError("Cannot convert undefined or null to object");
            return Object.prototype.hasOwnProperty.call(Object(e), t);
        }),
    (t.mixin = (e, r) => {
        for (let n in r) t.hasOwn(r, n) && (e[n] = r[n]);
    });
