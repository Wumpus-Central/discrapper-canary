var n = e(557939),
    o = e(250594),
    a = e(503199),
    i = e(496538),
    p = e(732376);
n(
    {
        target: "Array",
        proto: !0,
        arity: 1,
        forced:
            e(503628)(function () {
                return 0x100000001 !== [].push.call({ length: 0x100000000 }, 1);
            }) ||
            !(function () {
                try {
                    Object.defineProperty([], "length", { writable: !1 }).push();
                } catch (r) {
                    return r instanceof TypeError;
                }
            })(),
    },
    {
        push: function (r) {
            var t = o(this),
                e = a(t),
                n = arguments.length;
            p(e + n);
            for (var f = 0; f < n; f++) (t[e] = arguments[f]), e++;
            return i(t, e), e;
        },
    },
);
