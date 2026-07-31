function i(l) {
    return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (l) {
                  return typeof l;
              }
            : function (l) {
                  return l && "function" == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype
                      ? "symbol"
                      : typeof l;
              })(l);
}
function e(l, t, d) {
    var e;
    return (
        ((e = (function (l, t) {
            if ("object" != i(l) || !l) return l;
            var d = l[Symbol.toPrimitive];
            if (void 0 !== d) {
                var e = d.call(l, t || "default");
                if ("object" != i(e)) return e;
                throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(l);
        })(t, "string")),
        (t = "symbol" == i(e) ? e : e + "") in l)
            ? Object.defineProperty(l, t, { value: d, enumerable: !0, configurable: !0, writable: !0 })
            : (l[t] = d),
        l
    );
}
d.d(t, { t: () => e });
