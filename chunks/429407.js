let i = r(40231),
    a = (e, n, r, a, o) => {
        'string' == typeof r && ((o = a), (a = r), (r = void 0));
        try {
            return new i(e instanceof i ? e.version : e, r).inc(n, a, o).version;
        } catch (e) {
            return null;
        }
    };
e.exports = a;
