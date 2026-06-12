var i = n(124639),
    r = n(436815),
    s = Object.prototype,
    a = s.hasOwnProperty,
    o = s.propertyIsEnumerable;
e.exports = i(
    (function () {
        return arguments;
    })(),
)
    ? i
    : function (e) {
          return r(e) && a.call(e, "callee") && !o.call(e, "callee");
      };
