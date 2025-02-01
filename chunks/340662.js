var i = n(67867),
    r = n(653457);
i(
    {
        target: 'Promise',
        stat: !0
    },
    {
        withResolvers: function () {
            var e = r.f(this);
            return {
                promise: e.promise,
                resolve: e.resolve,
                reject: e.reject
            };
        }
    }
);
