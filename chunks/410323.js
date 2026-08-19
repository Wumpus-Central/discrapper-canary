var n = e(630017),
    o = Function.prototype,
    i = o.call,
    u = n && o.bind.bind(i, i);
r.exports = n
    ? u
    : function (r) {
          return function () {
              return i.apply(r, arguments);
          };
      };
