var r = a(475227),
    n = a(389109),
    o = Object.prototype,
    _ = o.hasOwnProperty,
    i = o.propertyIsEnumerable,
    c = r(
        (function () {
            return arguments;
        })()
    )
        ? r
        : function (t) {
              return n(t) && _.call(t, 'callee') && !i.call(t, 'callee');
          };
t.exports = c;
