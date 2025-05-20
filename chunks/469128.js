var r = n(751177),
    i = n(135615),
    o = Object.prototype.propertyIsEnumerable,
    a = Object.getOwnPropertySymbols;
e.exports = a
    ? function (e) {
          return null == e
              ? []
              : r(a((e = Object(e))), function (t) {
                    return o.call(e, t);
                });
      }
    : i;
