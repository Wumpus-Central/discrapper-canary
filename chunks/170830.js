function s(i) {
    let t = 0,
        e = [];
    return async function () {
        if (2 !== t) {
            if (1 === t)
                return new Promise((i) => {
                    e.push(i);
                });
            for (t = 1, await i(), t = 2; e.length > 0; ) {
                var s;
                null == (s = e.shift()) || s();
            }
        }
    };
}
e.d(t, { G: () => s }), e(539854);
