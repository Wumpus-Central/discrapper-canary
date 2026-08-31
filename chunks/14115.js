n.d(t, { v: () => l });
let a = { EARN: 0.25, SPEND: 0.3 };
function l(e, t) {
    let { targetTime: n, isRenderedWithoutLottieAnimation: l } = t;
    if (l) return { duration: n, delay: 0 };
    let s = e > 0,
        r = n * a[s ? "EARN" : "SPEND"];
    return { duration: r, delay: s ? n - r : 0 };
}
