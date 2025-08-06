let r = n(40231);
e.exports = (e, t, n) => {
    let i = new r(e, n),
        o = new r(t, n);
    return i.compare(o) || i.compareBuild(o);
};
