let n = r(864886),
    o = r(74509);
e.exports = (e, t, r) => {
    let i = null,
        a = null,
        s = null;
    try {
        s = new o(t, r);
    } catch (e) {
        return null;
    }
    return (
        e.forEach((e) => {
            s.test(e) && (!i || -1 === a.compare(e)) && (a = new n((i = e), r));
        }),
        i
    );
};
