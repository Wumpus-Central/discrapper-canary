"use strict";
n.d(t, { R: () => _ });
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(361610),
    o = n(36124),
    l = n(135621),
    u = n(963307);
let c = "@here";
function d(e) {
    return e.length > 1 || 1 !== e.length || "GROUP" !== e[0].type || "unknown" !== e[0].id;
}
function _(e, t, n) {
    let r = (0, l.A)(),
        [_, h] = i.useState(!1),
        f = i.useMemo(
            () =>
                s().debounce(
                    (e) => {
                        (d(u.Ay.getProps(t, n).groups) ||
                            (!(e.length < c.length) &&
                                !(e.length > r) &&
                                -1 !== e.indexOf(c) &&
                                ((0, a.Ey)(t, n, o.LD), 1))) &&
                            h(!0);
                    },
                    200,
                    { maxWait: 500 },
                ),
            [r, t, n],
        );
    i.useEffect(() => {
        let i = u.Ay.getProps(t, n).groups;
        if (null != t && !d(i) && !_)
            return (
                e.addListener("text-changed", f),
                () => {
                    e.removeListener("text-changed", f), f.cancel();
                }
            );
    }, [_, f, e, t, n]);
}
