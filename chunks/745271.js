let r = n(864886);
e.exports = (e, t, n) => {
    let i = new r(e, n),
        a = new r(t, n);
    return i.compare(a) || i.compareBuild(a);
};
