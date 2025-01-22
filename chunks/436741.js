let i = r(40231),
    a = r(889658),
    o = (e, n, r) => {
        let o = null,
            s = null,
            l = null;
        try {
            l = new a(n, r);
        } catch (e) {
            return null;
        }
        return (
            e.forEach((e) => {
                l.test(e) && (!o || -1 === s.compare(e)) && (s = new i((o = e), r));
            }),
            o
        );
    };
e.exports = o;
