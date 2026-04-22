"use strict";
n.d(t, { R: () => h });
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    r = n(361610),
    a = n(36124),
    o = n(135621),
    c = n(963307);
let u = "@here";
function d(e) {
    return e.length > 1 || 1 !== e.length || "GROUP" !== e[0].type || "unknown" !== e[0].id;
}
function h(e, t, n) {
    let l = (0, o.A)(),
        [h, m] = i.useState(!1),
        p = i.useMemo(
            () =>
                s().debounce(
                    (e) => {
                        (d(c.Ay.getProps(t, n).groups) ||
                            (!(e.length < u.length) &&
                                !(e.length > l) &&
                                -1 !== e.indexOf(u) &&
                                ((0, r.Ey)(t, n, a.LD), 1))) &&
                            m(!0);
                    },
                    200,
                    { maxWait: 500 },
                ),
            [l, t, n],
        );
    i.useEffect(() => {
        let i = c.Ay.getProps(t, n).groups;
        if (null != t && !d(i) && !h)
            return (
                e.addListener("text-changed", p),
                () => {
                    e.removeListener("text-changed", p), p.cancel();
                }
            );
    }, [h, p, e, t, n]);
}
