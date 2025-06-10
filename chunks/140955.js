a.d(e, { _: () => _ });
let r = (t, e) => (t > e[1] ? 'poor' : t > e[0] ? 'needs-improvement' : 'good'),
    _ = (t, e, a, _) => {
        let n, o;
        return (i) => {
            e.value >= 0 && (i || _) && ((o = e.value - (n || 0)) || void 0 === n) && ((n = e.value), (e.delta = o), (e.rating = r(e.value, a)), t(e));
        };
    };
