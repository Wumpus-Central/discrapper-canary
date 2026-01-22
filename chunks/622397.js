i.d(t, {
    X: () => n,
    a: () => s,
});
var r = i(927813);
function n(e) {
    let t = e / r.A.Millis.MINUTE;
    return t < 5
        ? "0-5min"
        : t < 15
          ? "5-15min"
          : t < 30
            ? "15-30min"
            : t < 45
              ? "30-45min"
              : t < 60
                ? "45-60min"
                : t < 120
                  ? "1-2hr"
                  : t < 180
                    ? "2-3hr"
                    : "3hr+";
}
function s() {
    var e;
    let t = window.Meticulous;
    return null != t && t.isRunningAsTest && (null == (e = t.replay) ? void 0 : e.isBenchmarkableReplay)
        ? t.replay
        : null;
}
