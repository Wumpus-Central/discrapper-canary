var r = n(67867),
    i = n(228042),
    o = n(292137);
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        keyOf: function (e) {
            var t = o(
                i(this),
                function (t, n) {
                    if (t === e) return { key: n };
                },
                !0
            );
            return t && t.key;
        }
    }
);
