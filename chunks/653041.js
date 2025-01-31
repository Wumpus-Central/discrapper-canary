var n = e(147018),
    o = e(339718),
    i = e(49693),
    f = e(610148),
    u = e(886960);
n(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced:
            e(936940)(function () {
                return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
            }) ||
            !(function () {
                try {
                    Object.defineProperty([], 'length', { writable: !1 }).push();
                } catch (r) {
                    return r instanceof TypeError;
                }
            })()
    },
    {
        push: function (r) {
            var t = o(this),
                e = i(t),
                n = arguments.length;
            u(e + n);
            for (var a = 0; a < n; a++) (t[e] = arguments[a]), e++;
            return f(t, e), e;
        }
    }
);
