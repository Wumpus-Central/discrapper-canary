var n = e(962557),
    o = Function.prototype,
    i = o.apply,
    u = o.call;
t.exports =
    ('object' == typeof Reflect && Reflect.apply) ||
    (n
        ? u.bind(i)
        : function () {
              return u.apply(i, arguments);
          });
