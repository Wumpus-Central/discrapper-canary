var r = a(962557),
    n = Function.prototype,
    _ = n.apply,
    o = n.call;
t.exports =
    ('object' == typeof Reflect && Reflect.apply) ||
    (r
        ? o.bind(_)
        : function () {
              return o.apply(_, arguments);
          });
