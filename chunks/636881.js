var r = n(621049),
    i = Function.prototype,
    a = i.apply,
    o = i.call;
e.exports =
    ('object' == typeof Reflect && Reflect.apply) ||
    (r
        ? o.bind(a)
        : function () {
              return o.apply(a, arguments);
          });
