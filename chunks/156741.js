var e = n(809235),
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
