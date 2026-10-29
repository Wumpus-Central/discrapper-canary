n.d(t, { v: () => a });
let r = { EARN: 0.25, SPEND: 0.3 };
function a(e, t) {
    let { targetTime: n, isRenderedWithoutLottieAnimation: a } = t;
    if (a) return { duration: n, delay: 0 };
    let l = e > 0,
        u = n * r[l ? "EARN" : "SPEND"];
    return { duration: u, delay: l ? n - u : 0 };
}
