let n = r(864886),
    i = r(74509);
e.exports = (e, t, r) => {
    let o = null,
        a = null,
        s = null;
    try {
        s = new i(t, r);
    } catch (e) {
        return null;
    }
    return (
        e.forEach((e) => {
            s.test(e) && (!o || 1 === a.compare(e)) && (a = new n((o = e), r));
        }),
        o
    );
};
