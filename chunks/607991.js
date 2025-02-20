var r = n(369529),
    i = n(898042),
    o = Object.prototype.propertyIsEnumerable,
    a = Object.getOwnPropertySymbols,
    s = a
        ? function (e) {
              return null == e
                  ? []
                  : r(a((e = Object(e))), function (t) {
                        return o.call(e, t);
                    });
          }
        : i;
e.exports = s;
