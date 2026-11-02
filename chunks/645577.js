n.d(t, { g: () => s });
function s(e, t, n) {
    return e ? (t.timestampSec >= t.duration ? 0 : t.timestampSec) : Math.max(t.timestampSec, n);
}
