var i = r(809235),
    a = Function.prototype.call;
e.exports = i
    ? a.bind(a)
    : function () {
          return a.apply(a, arguments);
      };
