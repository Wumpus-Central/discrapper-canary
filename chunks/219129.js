n.d(t, { g: () => r });
function r(e, t, n) {
    return e ? (t.timestampSec >= t.duration ? 0 : t.timestampSec) : Math.max(t.timestampSec, n.progressSeconds);
}
