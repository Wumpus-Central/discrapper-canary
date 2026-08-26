n.d(t, { v: () => l });
let a = { EARN: 0.25, SPEND: 0.3 };
function l(e, t) {
    let { targetTime: n, isRenderedWithoutLottieAnimation: l } = t;
    if (l) return { duration: n, delay: 0 };
    let r = e > 0,
        s = n * a[r ? "EARN" : "SPEND"];
    return { duration: s, delay: r ? n - s : 0 };
}
