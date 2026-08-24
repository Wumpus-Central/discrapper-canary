let n = r(864886);
e.exports = (e, t, r, i, o) => {
    "string" == typeof r && ((o = i), (i = r), (r = void 0));
    try {
        return new n(e instanceof n ? e.version : e, r).inc(t, i, o).version;
    } catch (e) {
        return null;
    }
};
