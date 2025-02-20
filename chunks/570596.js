var r = n(809235),
    i = Function.prototype.call;
e.exports = r
    ? i.bind(i)
    : function () {
          return i.apply(i, arguments);
      };
