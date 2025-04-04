var r = a(621049),
    n = Function.prototype,
    _ = n.call,
    o = r && n.bind.bind(_, _);
t.exports = r
    ? o
    : function (t) {
          return function () {
              return _.apply(t, arguments);
          };
      };
