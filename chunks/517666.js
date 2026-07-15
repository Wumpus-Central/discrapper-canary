d.d(t, { t: () => e });
var i = d(827029);
function e() {
    let { userAgent: l, platform: t, maxTouchPoints: d } = (0, i.t)();
    if (!l) return "desktop";
    let e = l.toLowerCase();
    return /iphone|ipad|ipod/.test(e) || ("MacIntel" === t && d > 1)
        ? "ios"
        : /android/.test(e)
          ? "android"
          : "desktop";
}
