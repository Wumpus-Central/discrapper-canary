let i = r(40231),
    a = r(889658),
    s = (e, n, r) => {
        let s = null,
            o = null,
            l = null;
        try {
            l = new a(n, r);
        } catch (e) {
            return null;
        }
        return (
            e.forEach((e) => {
                l.test(e) && (!s || -1 === o.compare(e)) && (o = new i((s = e), r));
            }),
            s
        );
    };
e.exports = s;
