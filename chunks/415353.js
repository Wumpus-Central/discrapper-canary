var r = n(67867),
    o = n(228042),
    a = n(292137);
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        keyOf: function (e) {
            var t = a(
                o(this),
                function (t, n) {
                    if (t === e) return { key: n };
                },
                !0
            );
            return t && t.key;
        }
    }
);
