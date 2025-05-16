var r = n(475227),
    i = n(389109),
    a = Object.prototype,
    o = a.hasOwnProperty,
    s = a.propertyIsEnumerable;
e.exports = r(
    (function () {
        return arguments;
    })()
)
    ? r
    : function (e) {
          return i(e) && o.call(e, 'callee') && !s.call(e, 'callee');
      };
