n.d(t, { AI: () => r, IL: () => s });
let i = (0, n(353640).v)(() => ({ hasFiredFromMessage: new Set() }));
function s(e) {
    let { hasFiredFromMessage: t } = i.getState();
    t.add(e), i.setState({ hasFiredFromMessage: t });
}
function r(e) {
    let { hasFiredFromMessage: t } = i.getState();
    return t.has(e);
}
