"use strict";
var n = e(691805),
    o = Function.prototype,
    s = o.apply,
    i = o.call;
t.exports =
    ("object" == typeof Reflect && Reflect.apply) ||
    (n
        ? i.bind(s)
        : function () {
              return i.apply(s, arguments);
          });
