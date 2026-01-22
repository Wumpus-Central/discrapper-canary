let r = n(864886);
e.exports = (e, t, n, i, a) => {
    "string" == typeof n && ((a = i), (i = n), (n = void 0));
    try {
        return new r(e instanceof r ? e.version : e, n).inc(t, i, a).version;
    } catch (e) {
        return null;
    }
};
