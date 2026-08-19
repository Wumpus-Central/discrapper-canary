let n = r(864886);
e.exports = (e, t, r, o, i) => {
    "string" == typeof r && ((i = o), (o = r), (r = void 0));
    try {
        return new n(e instanceof n ? e.version : e, r).inc(t, o, i).version;
    } catch (e) {
        return null;
    }
};
