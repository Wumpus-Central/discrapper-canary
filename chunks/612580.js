e.a(
    n,
    async function (r, u) {
        try {
            var i = e('463281'),
                a = r([i]),
                [i] = a.then ? (await a)() : a;
            await e.v(t, n.id, '2f24a5722bb2acc8', {
                './index_bg.js': {
                    __wbindgen_string_new: i.h4,
                    __wbindgen_rethrow: i.nD
                }
            }),
                u();
        } catch (n) {
            u(n);
        }
    },
    1
);
