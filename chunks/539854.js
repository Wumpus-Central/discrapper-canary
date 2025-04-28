var e = r(98405),
    o = r(527160),
    i = r(914331),
    u = r(640883),
    c = r(861567);
e(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced:
            r(621523)(function () {
                return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
            }) ||
            !(function () {
                try {
                    Object.defineProperty([], 'length', { writable: !1 }).push();
                } catch (t) {
                    return t instanceof TypeError;
                }
            })()
    },
    {
        push: function (t) {
            var n = o(this),
                r = i(n),
                e = arguments.length;
            c(r + e);
            for (var a = 0; a < e; a++) (n[r] = arguments[a]), r++;
            return u(n, r), r;
        }
    }
);
