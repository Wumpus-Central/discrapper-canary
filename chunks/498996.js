var e = n(45051),
    o = Function.prototype,
    i = o.apply,
    u = o.call;
t.exports =
    ('object' == typeof Reflect && Reflect.apply) ||
    (e
        ? u.bind(i)
        : function () {
              return u.apply(i, arguments);
          });
