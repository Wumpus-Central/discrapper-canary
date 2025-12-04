r.d(t, { _: () => n });
let n = (e, t, r, n) => {
    let a, i;
    return (o) => {
        if (t.value >= 0 && (o || n) && ((i = t.value - (a || 0)) || void 0 === a)) {
            var _;
            (a = t.value),
                (t.delta = i),
                (_ = t.value),
                (t.rating = _ > r[1] ? "poor" : _ > r[0] ? "needs-improvement" : "good"),
                e(t);
        }
    };
};
