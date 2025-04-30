var r = n(98405),
    i = n(527160),
    o = n(914331),
    a = n(640883),
    s = n(861567),
    l = n(621523)(function () {
        return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
    }),
    c = function () {
        try {
            Object.defineProperty([], 'length', { writable: !1 }).push();
        } catch (e) {
            return e instanceof TypeError;
        }
    };
r(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced: l || !c()
    },
    {
        push: function (e) {
            var t = i(this),
                n = o(t),
                r = arguments.length;
            s(n + r);
            for (var l = 0; l < r; l++) (t[n] = arguments[l]), n++;
            return a(t, n), n;
        }
    }
);
