function r(e) {
    let t = 0,
        i = [];
    return async function () {
        if (2 !== t) {
            if (1 === t)
                return new Promise((e) => {
                    i.push(e);
                });
            for (t = 1, await e(), t = 2; i.length > 0; ) {
                var r;
                null == (r = i.shift()) || r();
            }
        }
    };
}
i.d(t, { G: () => r }), i(653041);
