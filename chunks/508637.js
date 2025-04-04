var e = n(220159),
    o = n(475424),
    i = n(174344),
    u = n(877918),
    s = n(297523);
e(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced:
            n(779688)(function () {
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
            var r = o(this),
                n = i(r),
                e = arguments.length;
            s(n + e);
            for (var c = 0; c < e; c++) (r[n] = arguments[c]), n++;
            return u(r, n), n;
        }
    }
);
