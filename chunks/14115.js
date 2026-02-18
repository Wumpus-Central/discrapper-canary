l.d(t, { Y: () => n });
let a = { EARN: 0.25, SPEND: 0.3 },
    n = (e, t) => {
        let l = e > 0,
            n = t * a[l ? "EARN" : "SPEND"];
        return { duration: n, delay: l ? t - n : 0 };
    };
