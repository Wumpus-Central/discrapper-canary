t.a(
    n,
    async function (r, i) {
        try {
            var a = t(463281),
                f = r([a]),
                [a] = f.then ? (await f)() : f;
            await t.v(e, n.id, 'e8dcd95269d20ee0', {
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
