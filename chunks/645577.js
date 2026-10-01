t.d(n, { g: () => s });
function s(e, n, t) {
    return e ? (n.timestampSec >= n.duration ? 0 : n.timestampSec) : Math.max(n.timestampSec, t);
}
