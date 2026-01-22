n.d(t, { x: () => r });
let r = (e, t) =>
    function (n, r, i) {
        return new Promise((a) => {
            var s;
            e.dispatch({
                type: t,
                event: n,
                properties: r,
                flush: null != (s = null == i ? void 0 : i.flush) && s,
                fingerprint: null == i ? void 0 : i.fingerprint,
                resolve: a,
            });
        });
    };
