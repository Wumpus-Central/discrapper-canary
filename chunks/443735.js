var r = a(475227),
    n = a(389109),
    _ = Object.prototype,
    o = _.hasOwnProperty,
    i = _.propertyIsEnumerable;
t.exports = r(
    (function () {
        return arguments;
    })()
)
    ? r
    : function (t) {
          return n(t) && o.call(t, 'callee') && !i.call(t, 'callee');
      };
