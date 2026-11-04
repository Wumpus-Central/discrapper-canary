let l = { EARN: 0.25, SPEND: 0.3 };
n.d(
    t,
    {},
    {
        v: function (e, t) {
            let { targetTime: n, isRenderedWithoutLottieAnimation: r } = t;
            if (r) return { duration: n, delay: 0 };
            let a = e > 0,
                u = n * l[a ? "EARN" : "SPEND"];
            return { duration: u, delay: a ? n - u : 0 };
        },
    },
);
