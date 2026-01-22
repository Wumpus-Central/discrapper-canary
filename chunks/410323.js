var r = n(630017),
    i = Function.prototype,
    a = i.call,
    s = r && i.bind.bind(a, a);
e.exports = r
    ? s
    : function (e) {
          return function () {
              return a.apply(e, arguments);
          };
      };
