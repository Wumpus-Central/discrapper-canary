function r(t) {
    let e = 0,
        i = [];
    return async function () {
        if (2 !== e) {
            if (1 === e)
                return new Promise((t) => {
                    i.push(t);
                });
            for (e = 1, await t(), e = 2; i.length > 0; ) {
                var r;
                null === (r = i.shift()) || void 0 === r || r();
            }
        }
    };
}
i.d(e, { G: () => r }), i(653041);
