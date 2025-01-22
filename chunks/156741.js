var i = r(809235),
    a = Function.prototype,
    o = a.apply,
    s = a.call;
e.exports =
    ('object' == typeof Reflect && Reflect.apply) ||
    (i
        ? s.bind(o)
        : function () {
              return s.apply(o, arguments);
          });
