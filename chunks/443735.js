var r = n(475227),
    i = n(389109),
    o = Object.prototype,
    a = o.hasOwnProperty,
    s = o.propertyIsEnumerable;
e.exports = r(
    (function () {
        return arguments;
    })()
)
    ? r
    : function (e) {
          return i(e) && a.call(e, 'callee') && !s.call(e, 'callee');
      };
