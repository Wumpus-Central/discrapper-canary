"use strict";
n.d(t, { AI: () => s, IL: () => r });
let i = (0, n(353640).v)(() => ({ hasFiredFromMessage: new Set() }));
function r(e) {
    let { hasFiredFromMessage: t } = i.getState();
    t.add(e), i.setState({ hasFiredFromMessage: t });
}
function s(e) {
    let { hasFiredFromMessage: t } = i.getState();
    return t.has(e);
}
