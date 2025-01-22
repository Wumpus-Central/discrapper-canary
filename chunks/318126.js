var i = r(67867),
    a = r(653457),
    o = r(139545);
i(
    {
        target: 'Promise',
        stat: !0,
        forced: !0
    },
    {
        try: function (e) {
            var n = a.f(this),
                r = o(e);
            return (r.error ? n.reject : n.resolve)(r.value), n.promise;
        }
    }
);
