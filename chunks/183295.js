var i = n(67867),
    r = n(228042),
    a = n(146321).remove;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        deleteAll: function () {
            for (var e, t = r(this), n = !0, i = 0, s = arguments.length; i < s; i++) (e = a(t, arguments[i])), (n = n && e);
            return !!n;
        }
    }
);
