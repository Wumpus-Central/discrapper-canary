"use strict";
n.d(t, { R: () => f });
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(361610),
    o = n(36124),
    l = n(135621),
    u = n(963307);
let c = "@here";
function d(e) {
    return e.length > 1 || 1 !== e.length || "GROUP" !== e[0].type || "unknown" !== e[0].id;
}
function _(e, t, n, r) {
    return (
        !!d(u.Ay.getProps(n, r).groups) ||
        (!(e.length < c.length) && !(e.length > t) && -1 !== e.indexOf(c) && ((0, s.Ey)(n, r, o.LD), !0))
    );
}
function f(e, t, n) {
    let i = (0, l.A)(),
        [s, o] = r.useState(!1),
        c = r.useMemo(
            () =>
                a().debounce(
                    (e) => {
                        _(e, i, t, n) && o(!0);
                    },
                    200,
                    { maxWait: 500 },
                ),
            [i, t, n],
        );
    r.useEffect(() => {
        let r = u.Ay.getProps(t, n).groups;
        if (null != t && !d(r) && !s)
            return (
                e.addListener("text-changed", c),
                () => {
                    e.removeListener("text-changed", c), c.cancel();
                }
            );
    }, [s, c, e, t, n]);
}
