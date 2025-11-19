_.d(e, { _: () => a });
let a = (t, e, _, a) => {
    let r, n;
    return (o) => {
        if (e.value >= 0 && (o || a) && ((n = e.value - (r || 0)) || void 0 === r)) {
            var E;
            (r = e.value),
                (e.delta = n),
                (E = e.value),
                (e.rating = E > _[1] ? "poor" : E > _[0] ? "needs-improvement" : "good"),
                t(e);
        }
    };
};
