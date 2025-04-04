var r = n(220159),
    o = n(519467),
    a = n(717853);
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
