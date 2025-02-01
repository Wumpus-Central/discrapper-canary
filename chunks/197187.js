var r = i(962557),
    n = Function.prototype,
    a = n.apply,
    s = n.call;
t.exports =
    ('object' == typeof Reflect && Reflect.apply) ||
    (r
        ? s.bind(a)
        : function () {
              return s.apply(a, arguments);
          });
