var r = n(124639),
    i = n(436815),
    a = Object.prototype,
    s = a.hasOwnProperty,
    o = a.propertyIsEnumerable;
e.exports = r(
    (function () {
        return arguments;
    })(),
)
    ? r
    : function (e) {
          return i(e) && s.call(e, "callee") && !o.call(e, "callee");
      };
