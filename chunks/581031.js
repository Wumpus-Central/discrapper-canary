var r = a(962557),
    n = Function.prototype,
    o = n.call,
    _ = r && n.bind.bind(o, o);
t.exports = r
    ? _
    : function (t) {
          return function () {
              return o.apply(t, arguments);
          };
      };
