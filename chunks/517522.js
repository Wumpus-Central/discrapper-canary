var e = n(45051),
    o = Function.prototype.call;
t.exports = e
    ? o.bind(o)
    : function () {
          return o.apply(o, arguments);
      };
