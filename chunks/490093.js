n.d(t, {
    D2: () => r,
    nL: () => a,
});
let r = 3000,
    i = {
        EARN: 0.25,
        SPEND: 0.3,
    },
    a = (e, t) => {
        let n = e > 0,
            r = t * i[n ? "EARN" : "SPEND"],
            a = n ? t - r : 0;
        return {
            duration: r,
            delay: a,
        };
    };
