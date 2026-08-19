"use strict";
n.d(t, { R: () => h });
var l = n(582128),
    i = n(435558),
    s = n.n(i),
    r = n(361610),
    a = n(36124),
    o = n(135621),
    u = n(963307);
let c = "@here";
function d(e) {
    return e.length > 1 || 1 !== e.length || "unknown" !== e[0].id;
}
function h(e, t, n) {
    let i = (0, o.A)(),
        [h, m] = l.useState(!1),
        f = l.useMemo(
            () =>
                s().debounce(
                    (e) => {
                        (d(u.Ay.getProps(t, n).groups) ||
                            (!(e.length < c.length) &&
                                !(e.length > i) &&
                                -1 !== e.indexOf(c) &&
                                ((0, r.Ey)(t, n, a.LD), 1))) &&
                            m(!0);
                    },
                    200,
                    { maxWait: 500 },
                ),
            [i, t, n],
        );
    l.useEffect(() => {
        let l = u.Ay.getProps(t, n).groups;
        if (null != t && !d(l) && !h)
            return (
                e.addListener("text-changed", f),
                () => {
                    e.removeListener("text-changed", f), f.cancel();
                }
            );
    }, [h, f, e, t, n]);
}
