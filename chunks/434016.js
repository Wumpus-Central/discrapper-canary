let t = /^[0-9]+$/,
    n = (e, n) => {
        let i = t.test(e),
            r = t.test(n);
        return i && r && ((e = +e), (n = +n)), e === n ? 0 : i && !r ? -1 : r && !i ? 1 : e < n ? -1 : 1;
    },
    i = (e, t) => n(t, e);
e.exports = {
    compareIdentifiers: n,
    rcompareIdentifiers: i
};
