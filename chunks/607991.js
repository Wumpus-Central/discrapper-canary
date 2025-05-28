var r = n(369529),
    i = n(898042),
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
