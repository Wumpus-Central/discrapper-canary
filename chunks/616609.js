var r = n(220159),
    o = n(519467),
    a = n(613694).remove;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        deleteAll: function () {
            for (var e, t = o(this), n = !0, r = 0, i = arguments.length; r < i; r++) (e = a(t, arguments[r])), (n = n && e);
            return !!n;
        }
    }
);
