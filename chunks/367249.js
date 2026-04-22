let r = n(864886);
e.exports = (e, t, n, i, s) => {
    "string" == typeof n && ((s = i), (i = n), (n = void 0));
    try {
        return new r(e instanceof r ? e.version : e, n).inc(t, i, s).version;
    } catch (e) {
        return null;
    }
};
