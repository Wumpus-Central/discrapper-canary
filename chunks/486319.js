"use strict";
n.d(t, { R: () => h });
var l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(361610),
    r = n(36124),
    o = n(135621),
    c = n(963307);
let u = "@here";
function d(e) {
    return e.length > 1 || 1 !== e.length || "GROUP" !== e[0].type || "unknown" !== e[0].id;
}
function h(e, t, n) {
    let i = (0, o.A)(),
        [h, m] = l.useState(!1),
        p = l.useMemo(
            () =>
                s().debounce(
                    (e) => {
                        (d(c.Ay.getProps(t, n).groups) ||
                            (!(e.length < u.length) &&
                                !(e.length > i) &&
                                -1 !== e.indexOf(u) &&
                                ((0, a.Ey)(t, n, r.LD), 1))) &&
                            m(!0);
                    },
                    200,
                    { maxWait: 500 },
                ),
            [i, t, n],
        );
    l.useEffect(() => {
        let l = c.Ay.getProps(t, n).groups;
        if (null != t && !d(l) && !h)
            return (
                e.addListener("text-changed", p),
                () => {
                    e.removeListener("text-changed", p), p.cancel();
                }
            );
    }, [h, p, e, t, n]);
}
