var i = r(67867),
    a = r(570596),
    o = r(653457);
i(
    {
        target: 'Promise',
        stat: !0,
        forced: r(732116).CONSTRUCTOR
    },
    {
        reject: function (e) {
            var n = o.f(this);
            return a(n.reject, void 0, e), n.promise;
        }
    }
);
