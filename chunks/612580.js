t.a(
    n,
    async function (r, a) {
        try {
            var i = t(463281),
                u = r([i]),
                [i] = u.then ? (await u)() : u;
            await t.v(e, n.id, 'd0d0996c20c03af2', {
                './index_bg.js': {
                    __wbindgen_string_new: i.h4,
                    __wbindgen_rethrow: i.nD
                }
            }),
                a();
        } catch (n) {
            a(n);
        }
    },
    1
);
