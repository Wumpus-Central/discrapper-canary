n.d(t, { AI: () => s, IL: () => l });
let i = (0, n(196765).v)(() => ({ hasFiredFromMessage: new Set() }));
function l(e) {
    let { hasFiredFromMessage: t } = i.getState();
    t.add(e), i.setState({ hasFiredFromMessage: t });
}
function s(e) {
    let { hasFiredFromMessage: t } = i.getState();
    return t.has(e);
}
