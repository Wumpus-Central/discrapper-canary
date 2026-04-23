s.d(t, { y: () => l });
var n = s(64700);
function l(e) {
    let { initialProgressSec: t, targetSec: s, completedAt: l } = e,
        [i, a] = (0, n.useState)(t);
    return { progressSec: null != l ? s : i, trackProgress: a };
}
