n.d(t, { Y: () => a });
let l = { EARN: 0.25, SPEND: 0.3 },
    a = (e, t) => {
        let n = e > 0,
            a = t * l[n ? "EARN" : "SPEND"];
        return { duration: a, delay: n ? t - a : 0 };
    };
