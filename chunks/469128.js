var r = n(751177),
    i = n(135615),
    a = Object.prototype.propertyIsEnumerable,
    o = Object.getOwnPropertySymbols;
e.exports = o
    ? function (e) {
          return null == e
              ? []
              : r(o((e = Object(e))), function (t) {
                    return a.call(e, t);
                });
      }
    : i;
