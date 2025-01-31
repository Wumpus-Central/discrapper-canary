function s(t, i) {
    return Math.floor(Math.random() * (i - t + 1) + t);
}
function n(t, i, e, s) {
    return s.tension * (t - i) - s.friction * e;
}
e.d(i, {
    B: () => n,
    M: () => s
});
