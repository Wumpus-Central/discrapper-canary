a.d(e, { _: () => r });
let r = (t, e, a, r) => {
    let _, n;
    return (o) => {
        if (e.value >= 0 && (o || r) && ((n = e.value - (_ || 0)) || void 0 === _)) {
            var i;
            (_ = e.value),
                (e.delta = n),
                (i = e.value),
                (e.rating = i > a[1] ? "poor" : i > a[0] ? "needs-improvement" : "good"),
                t(e);
        }
    };
};
