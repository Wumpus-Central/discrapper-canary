var i = n(369529),
    r = n(898042),
    a = Object.prototype.propertyIsEnumerable,
    s = Object.getOwnPropertySymbols,
    o = s
        ? function (e) {
              return null == e
                  ? []
                  : i(s((e = Object(e))), function (t) {
                        return a.call(e, t);
                    });
          }
        : r;
e.exports = o;
