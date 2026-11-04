i.d(
    t,
    {},
    {
        G: function () {
            for (var r = arguments.length, t = Array(r), i = 0; i < r; i++) t[i] = arguments[i];
            for (let r of t) if (null != r && r) return r;
        },
    },
);
