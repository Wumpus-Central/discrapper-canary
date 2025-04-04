var r = a(621049),
    n = Function.prototype.call;
t.exports = r
    ? n.bind(n)
    : function () {
          return n.apply(n, arguments);
      };
