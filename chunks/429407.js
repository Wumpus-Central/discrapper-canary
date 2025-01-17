let i = r(40231),
    a = (e, n, r, a, s) => {
        'string' == typeof r && ((s = a), (a = r), (r = void 0));
        try {
            return new i(e instanceof i ? e.version : e, r).inc(n, a, s).version;
        } catch (e) {
            return null;
        }
    };
e.exports = a;
