let r = n(40231);
e.exports = (e, t, n, i, o) => {
    'string' == typeof n && ((o = i), (i = n), (n = void 0));
    try {
        return new r(e instanceof r ? e.version : e, n).inc(t, i, o).version;
    } catch (e) {
        return null;
    }
};
