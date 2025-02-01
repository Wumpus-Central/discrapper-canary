var i = n(67867),
    r = n(570596),
    a = n(653457);
i(
    {
        target: 'Promise',
        stat: !0,
        forced: n(732116).CONSTRUCTOR
    },
    {
        reject: function (e) {
            var t = a.f(this);
            return r(t.reject, void 0, e), t.promise;
        }
    }
);
