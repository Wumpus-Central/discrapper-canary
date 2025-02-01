t.a(
    n,
    async function (r, i) {
        try {
            var a = t(463281),
                u = r([a]),
                [a] = u.then ? (await u)() : u;
            await t.v(e, n.id, '93d8a86559c58d5d', {
                './index_bg.js': {
                    __wbindgen_string_new: a.h4,
                    __wbindgen_rethrow: a.nD
                }
            }),
                i();
        } catch (n) {
            i(n);
        }
    },
    1
);
