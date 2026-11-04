r.d(
    n,
    {},
    {
        A: function (i, n) {
            if (null == i) return {};
            var r = {};
            for (var t in i)
                if ({}.hasOwnProperty.call(i, t)) {
                    if (-1 !== n.indexOf(t)) continue;
                    r[t] = i[t];
                }
            return r;
        },
    },
);
