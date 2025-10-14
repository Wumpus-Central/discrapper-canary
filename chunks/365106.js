function a(e) {
    return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
t.d(r, { Z: () => s });
function o(e) {
    var r = (function (e, r) {
        if ("object" != a(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
            var o = t.call(e, r || "default");
            if ("object" != a(o)) return o;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(e);
    })(e, "string");
    return "symbol" == a(r) ? r : r + "";
}
var n,
    l,
    i =
        ((n = function e() {
            var r,
                t,
                a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
            (t = void 0),
                (r = o((r = "items"))) in this
                    ? Object.defineProperty(this, r, {
                          value: t,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (this[r] = t),
                (this.items = a);
        }),
        (l = [
            {
                key: "add",
                value: function (e) {
                    return !1 === this.has(e) && this.items.push(e), this;
                },
            },
            {
                key: "clear",
                value: function () {
                    this.items = [];
                },
            },
            {
                key: "delete",
                value: function (e) {
                    var r = this.items.length;
                    return (
                        (this.items = this.items.filter(function (r) {
                            return r !== e;
                        })),
                        r !== this.items.length
                    );
                },
            },
            {
                key: "forEach",
                value: function (e) {
                    var r = this;
                    this.items.forEach(function (t) {
                        e(t, t, r);
                    });
                },
            },
            {
                key: "has",
                value: function (e) {
                    return -1 !== this.items.indexOf(e);
                },
            },
            {
                key: "size",
                get: function () {
                    return this.items.length;
                },
            },
        ]),
        (function (e, r) {
            for (var t = 0; t < r.length; t++) {
                var a = r[t];
                (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, o(a.key), a);
            }
        })(n.prototype, l),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        n);
let s = "undefined" == typeof Set ? Set : i;
