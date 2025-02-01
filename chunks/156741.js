var i = n(809235),
    r = Function.prototype,
    a = r.apply,
    s = r.call;
e.exports =
    ('object' == typeof Reflect && Reflect.apply) ||
    (i
        ? s.bind(a)
        : function () {
              return s.apply(a, arguments);
          });
