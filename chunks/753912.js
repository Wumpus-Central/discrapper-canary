"use strict";
n.d(t, { x: () => r });
let r = (e, t) =>
    function (n, r, i) {
        return new Promise((a) => {
            e.dispatch({
                type: t,
                event: n,
                properties: r,
                flush: i?.flush ?? !1,
                fingerprint: i?.fingerprint,
                resolve: a,
            });
        });
    };
