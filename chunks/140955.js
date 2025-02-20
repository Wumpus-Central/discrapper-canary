a.d(e, { _: () => n });
let r = (t, e) => (t > e[1] ? 'poor' : t > e[0] ? 'needs-improvement' : 'good'),
    n = (t, e, a, n) => {
        let o, _;
        return (i) => {
            e.value >= 0 && (i || n) && ((_ = e.value - (o || 0)) || void 0 === o) && ((o = e.value), (e.delta = _), (e.rating = r(e.value, a)), t(e));
        };
    };
