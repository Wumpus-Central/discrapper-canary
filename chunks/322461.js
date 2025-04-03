var r = n(67867),
    o = n(570596),
    a = n(653457);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: n(732116).CONSTRUCTOR
    },
    {
        reject: function (e) {
            var t = a.f(this);
            return o(t.reject, void 0, e), t.promise;
        }
    }
);
