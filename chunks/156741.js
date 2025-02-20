var r = n(809235),
    i = Function.prototype,
    o = i.apply,
    a = i.call;
e.exports =
    ('object' == typeof Reflect && Reflect.apply) ||
    (r
        ? a.bind(o)
        : function () {
              return a.apply(o, arguments);
          });
