r.d(
    t,
    {},
    {
        V: function (e, t, r) {
            var n = r.getRegistry(),
                i = n.addSource(e, t);
            return [
                i,
                function () {
                    return n.removeSource(i);
                },
            ];
        },
        l: function (e, t, r) {
            var n = r.getRegistry(),
                i = n.addTarget(e, t);
            return [
                i,
                function () {
                    return n.removeTarget(i);
                },
            ];
        },
    },
);
