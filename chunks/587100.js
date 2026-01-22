n.d(t, { qQ: () => u });
let r = 50,
    i = "?",
    a = /\(error: (.*)\)/,
    s = /captureMessage|captureException/;
function o(e) {
    if (!e.length) return [];
    let t = Array.from(e);
    return (
        /sentryWrapped/.test(l(t).function || "") && t.pop(),
        t.reverse(),
        s.test(l(t).function || "") && (t.pop(), s.test(l(t).function || "") && t.pop()),
        t.slice(0, r).map((e) => ({
            ...e,
            filename: e.filename || l(t).filename,
            function: e.function || i,
        }))
    );
}
function l(e) {
    return e[e.length - 1] || {};
}
let c = "<anonymous>";
function u(e) {
    try {
        if (!e || "function" != typeof e) return c;
        return e.name || c;
    } catch (e) {
        return c;
    }
}
