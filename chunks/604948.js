function r() {
    var e, t;
    return "u" < typeof platform
        ? 0
        : parseInt(null != (e = null == (t = platform) ? void 0 : t.version) ? e : "0", 10);
}
n.d(t, { U: () => r });
