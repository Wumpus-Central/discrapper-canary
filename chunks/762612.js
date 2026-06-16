var i = n(176206),
    r = n(330149),
    s = Object.prototype.propertyIsEnumerable,
    a = Object.getOwnPropertySymbols;
e.exports = a
    ? function (e) {
          return null == e
              ? []
              : i(a((e = Object(e))), function (t) {
                    return s.call(e, t);
                });
      }
    : r;
