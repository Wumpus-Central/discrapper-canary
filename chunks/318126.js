var i = n(67867),
    r = n(653457),
    a = n(139545);
i(
    {
        target: 'Promise',
        stat: !0,
        forced: !0
    },
    {
        try: function (e) {
            var t = r.f(this),
                n = a(e);
            return (n.error ? t.reject : t.resolve)(n.value), t.promise;
        }
    }
);
