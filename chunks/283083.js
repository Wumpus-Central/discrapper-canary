var n = e(834647),
    o = e(512008),
    s = e(389150),
    i = e(663172),
    u = e(175380),
    c = e(767623),
    a = u("symbol-to-string-registry");
n(
    {
        target: "Symbol",
        stat: !0,
        forced: !c,
    },
    {
        keyFor: function (t) {
            if (!s(t)) throw TypeError(i(t) + " is not a symbol");
            if (o(a, t)) return a[t];
        },
    },
);
