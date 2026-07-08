var n = e(557939),
    o = e(250594),
    i = e(503199),
    a = e(496538),
    u = e(732376);
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
                e = i(t),
                n = arguments.length;
            u(e + n);
            for (var c = 0; c < n; c++) (t[e] = arguments[c]), e++;
            return a(t, e), e;
        },
    },
);
