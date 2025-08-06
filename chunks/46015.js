var r = n(621049),
    i = Function.prototype,
    o = i.call,
    a = r && i.bind.bind(o, o);
e.exports = r
    ? a
    : function (e) {
          return function () {
              return o.apply(e, arguments);
          };
      };
