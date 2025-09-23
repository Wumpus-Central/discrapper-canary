r.d(t, {
    D2: () => n,
    nL: () => l,
});
let n = 3000,
    o = {
        EARN: 0.25,
        SPEND: 0.3,
    },
    l = (e, t) => {
        let r = e > 0,
            n = t * o[r ? "EARN" : "SPEND"];
        return {
            duration: n,
            delay: r ? t - n : 0,
        };
    };
