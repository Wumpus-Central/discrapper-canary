var i = r(67867),
    a = r(228042),
    o = r(292137);
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        keyOf: function (e) {
            var n = o(
                a(this),
                function (n, r) {
                    if (n === e) return { key: r };
                },
                !0
            );
            return n && n.key;
        }
    }
);
