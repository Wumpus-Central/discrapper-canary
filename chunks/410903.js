i.d(t, { t: () => n });
var r = i(781322);
function n() {
    let { userAgent: e, platform: t, maxTouchPoints: i } = (0, r.n)();
    if (!e) return "desktop";
    let n = e.toLowerCase();
    return /iphone|ipad|ipod/.test(n) || ("MacIntel" === t && i > 1)
        ? "ios"
        : /android/.test(n)
          ? "android"
          : "desktop";
}
