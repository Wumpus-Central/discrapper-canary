var r = a(621049),
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
