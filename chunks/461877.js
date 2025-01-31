function i(e) {
    return ''.concat('*'.repeat(e.length - 4)).concat(e.slice(-4));
}
function s(e) {
    let [t, n] = e.split('@');
    return ''.concat('*'.repeat(t.length), '@').concat(n);
}
n.d(t, {
    E: () => s,
    n: () => i
}),
    n(47120);
