"use strict";
n.d(t, { AI: () => a, IL: () => i });
let r = (0, n(353640).v)(() => ({ hasFiredFromMessage: new Set() }));
function i(e) {
    let { hasFiredFromMessage: t } = r.getState();
    t.add(e), r.setState({ hasFiredFromMessage: t });
}
function a(e) {
    let { hasFiredFromMessage: t } = r.getState();
    return t.has(e);
}
