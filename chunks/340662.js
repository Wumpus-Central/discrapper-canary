var i = r(67867),
    a = r(653457);
i(
    {
        target: 'Promise',
        stat: !0
    },
    {
        withResolvers: function () {
            var e = a.f(this);
            return {
                promise: e.promise,
                resolve: e.resolve,
                reject: e.reject
            };
        }
    }
);
