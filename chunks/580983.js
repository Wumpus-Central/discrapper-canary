var e = r(621049),
    o = Function.prototype.call;
t.exports = e
    ? o.bind(o)
    : function () {
          return o.apply(o, arguments);
      };
