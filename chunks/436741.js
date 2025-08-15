let r = n(40231),
    i = n(889658);
e.exports = (e, t, n) => {
    let a = null,
        o = null,
        s = null;
    try {
        s = new i(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach((e) => {
            s.test(e) && (!a || -1 === o.compare(e)) && (o = new r((a = e), n));
        }),
        a
    );
};
