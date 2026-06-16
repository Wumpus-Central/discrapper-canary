let i = n(864886);
e.exports = (e, t, n, r, s) => {
    "string" == typeof n && ((s = r), (r = n), (n = void 0));
    try {
        return new i(e instanceof i ? e.version : e, n).inc(t, r, s).version;
    } catch (e) {
        return null;
    }
};
