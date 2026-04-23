i.d(t, { X: () => s, a: () => a });
var r = i(927813);
function s(e) {
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
function a() {
    let e = window.Meticulous;
    return null != e && e.isRunningAsTest && e.replay?.isBenchmarkableReplay ? e.replay : null;
}
