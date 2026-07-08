h.d(o, { t: () => r });
function r(t) {
    let [o = "1970", h = "01", r = "01"] = t.split("-"),
        a = +h,
        p = Math.floor((14 - a) / 12),
        s = +o + 4800 - p;
    return (
        (+r +
            Math.floor((153 * (a + 12 * p - 3) + 2) / 5) +
            365 * s +
            Math.floor(s / 4) -
            Math.floor(s / 100) +
            Math.floor(s / 400) -
            32045 -
            2440588) *
        864e5
    );
}
