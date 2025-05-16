var r = n(621049),
    i = Function.prototype.call;
e.exports = r
    ? i.bind(i)
    : function () {
          return i.apply(i, arguments);
      };
