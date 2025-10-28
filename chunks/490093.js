r.d(t, {
    D2: () => n,
    nL: () => o,
});
let n = 3000,
    l = {
        EARN: 0.25,
        SPEND: 0.3,
    },
    o = (e, t) => {
        let r = e > 0,
            n = t * l[r ? "EARN" : "SPEND"];
        return {
            duration: n,
            delay: r ? t - n : 0,
        };
    };
