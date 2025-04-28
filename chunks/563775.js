var e = r(98405),
    o = r(127849),
    i = r(91520),
    u = r(896471),
    c = r(338045),
    a = r(621523),
    f = r(507604);
e(
    {
        global: !0,
        enumerable: !0,
        dontCallGetSet: !0,
        forced: a(function () {
            return f && 1 !== Object.getOwnPropertyDescriptor(o, 'queueMicrotask').value.length;
        })
    },
    {
        queueMicrotask: function (t) {
            c(arguments.length, 1), i(u(t));
        }
    }
);
