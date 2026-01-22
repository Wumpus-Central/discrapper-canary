function r(e) {
    var t, n;
    null == (n = i()) || null == (t = n.reportEvent) || t.call(n, e);
}

function i() {
    return "u" > typeof window ? window.__DISCORD_DEVTOOLS : null;
}
n.d(t, {
    HF: () => r,
});
