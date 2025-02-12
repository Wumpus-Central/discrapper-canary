a.d(e, { _: () => n });
let r = (t, e) => (t > e[1] ? 'poor' : t > e[0] ? 'needs-improvement' : 'good'),
    n = (t, e, a, n) => {
        let _, o;
        return (i) => {
            e.value >= 0 && (i || n) && ((o = e.value - (_ || 0)) || void 0 === _) && ((_ = e.value), (e.delta = o), (e.rating = r(e.value, a)), t(e));
        };
    };
