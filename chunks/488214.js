n.d(t, { _: () => r });
let r = (e, t, n, r) => {
    let i, a;
    return (o) => {
        if (t.value >= 0 && (o || r) && ((a = t.value - (i || 0)) || void 0 === i)) {
            var _;
            (i = t.value),
                (t.delta = a),
                (_ = t.value),
                (t.rating = _ > n[1] ? "poor" : _ > n[0] ? "needs-improvement" : "good"),
                e(t);
        }
    };
};
