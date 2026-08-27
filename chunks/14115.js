l.d(t, { v: () => a });
let n = { EARN: 0.25, SPEND: 0.3 };
function a(e, t) {
    let { targetTime: l, isRenderedWithoutLottieAnimation: a } = t;
    if (a) return { duration: l, delay: 0 };
    let s = e > 0,
        r = l * n[s ? "EARN" : "SPEND"];
    return { duration: r, delay: s ? l - r : 0 };
}
