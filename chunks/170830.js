function n(t) {
    let e = 0,
        i = [];
    return async function () {
        if (2 !== e) {
            if (1 === e)
                return new Promise((t) => {
                    i.push(t);
                });
            for (e = 1, await t(), e = 2; i.length > 0; ) {
                var n;
                null === (n = i.shift()) || void 0 === n || n();
            }
        }
    };
}
i.d(e, { G: () => n }), i(653041);
