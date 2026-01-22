var r = n(176206),
    i = n(330149),
    a = Object.prototype.propertyIsEnumerable,
    s = Object.getOwnPropertySymbols;
e.exports = s
    ? function (e) {
          return null == e
              ? []
              : r(s((e = Object(e))), function (t) {
                    return a.call(e, t);
                });
      }
    : i;
