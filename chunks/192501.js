function i(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function s(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
n.d(t, { B: () => s, D: () => i });
