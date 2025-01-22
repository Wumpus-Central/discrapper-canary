var i = r(67867),
    a = r(228042),
    o = r(146321).remove;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        deleteAll: function () {
            for (var e, n = a(this), r = !0, i = 0, s = arguments.length; i < s; i++) (e = o(n, arguments[i])), (r = r && e);
            return !!r;
        }
    }
);
