function o(t) {
    return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                  return typeof t;
              }
            : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
              })(t);
}
function i(t, r, e) {
    var i;
    return (
        ((i = (function (t, r) {
            if ("object" != o(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != o(i)) return i;
                throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        })(r, "string")),
        (r = "symbol" == o(i) ? i : i + "") in t)
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
        t
    );
}
e.d(r, { t: () => i });
