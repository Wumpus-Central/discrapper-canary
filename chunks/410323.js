var n = e(630017),
    o = Function.prototype,
    i = o.call,
    a = n && o.bind.bind(i, i);
r.exports = n
    ? a
    : function (r) {
          return function () {
              return i.apply(r, arguments);
          };
      };
