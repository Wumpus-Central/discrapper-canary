var r = n(67867),
    i = n(653457);
r(
    {
        target: 'Promise',
        stat: !0
    },
    {
        withResolvers: function () {
            var e = i.f(this);
            return {
                promise: e.promise,
                resolve: e.resolve,
                reject: e.reject
            };
        }
    }
);
