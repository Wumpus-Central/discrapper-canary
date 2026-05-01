n.d(t, { x: () => i });
let i = (e, t) =>
    function (n, i, a) {
        return new Promise((r) => {
            e.dispatch({
                type: t,
                event: n,
                properties: i,
                flush: a?.flush ?? !1,
                fingerprint: a?.fingerprint,
                resolve: r,
            });
        });
    };
