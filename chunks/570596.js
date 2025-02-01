var i = n(809235),
    r = Function.prototype.call;
e.exports = i
    ? r.bind(r)
    : function () {
          return r.apply(r, arguments);
      };
