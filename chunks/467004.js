var r = n(220159),
    o = n(661155),
    a = n(674554).indexOf,
    i = n(271537),
    s = o([].indexOf),
    c = !!s && 1 / s([1], 1, -0) < 0;
r(
    {
        target: 'Array',
        proto: !0,
        forced: c || !i('indexOf')
    },
    {
        indexOf: function (e) {
            var t = arguments.length > 1 ? arguments[1] : void 0;
            return c ? s(this, e, t) || 0 : a(this, e, t);
        }
    }
);
