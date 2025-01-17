let n = /^[0-9]+$/,
    r = (e, r) => {
        let i = n.test(e),
            a = n.test(r);
        return i && a && ((e = +e), (r = +r)), e === r ? 0 : i && !a ? -1 : a && !i ? 1 : e < r ? -1 : 1;
    },
    i = (e, n) => r(n, e);
e.exports = {
    compareIdentifiers: r,
    rcompareIdentifiers: i
};
