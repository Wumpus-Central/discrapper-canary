var r = n(220159),
    o = n(602168);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: n(296004).CONSTRUCTOR
    },
    {
        reject: function (e) {
            var t = o.f(this);
            return (0, t.reject)(e), t.promise;
        }
    }
);
