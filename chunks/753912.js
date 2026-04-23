n.d(t, { x: () => i });
let i = (e, t) =>
    function (n, i, r) {
        return new Promise((a) => {
            e.dispatch({
                type: t,
                event: n,
                properties: i,
                flush: r?.flush ?? !1,
                fingerprint: r?.fingerprint,
                resolve: a,
            });
        });
    };
