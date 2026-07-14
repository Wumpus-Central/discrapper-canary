"use strict";
n.d(t, { R: () => _ });
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    s = n(361610),
    l = n(36124),
    o = n(135621),
    d = n(963307);
let c = "@here";
function u(e) {
    return e.length > 1 || 1 !== e.length || "unknown" !== e[0].id;
}
function _(e, t, n) {
    let r = (0, o.A)(),
        [_, E] = i.useState(!1),
        A = i.useMemo(
            () =>
                a().debounce(
                    (e) => {
                        (u(d.Ay.getProps(t, n).groups) ||
                            (!(e.length < c.length) &&
                                !(e.length > r) &&
                                -1 !== e.indexOf(c) &&
                                ((0, s.Ey)(t, n, l.LD), 1))) &&
                            E(!0);
                    },
                    200,
                    { maxWait: 500 },
                ),
            [r, t, n],
        );
    i.useEffect(() => {
        let i = d.Ay.getProps(t, n).groups;
        if (null != t && !u(i) && !_)
            return (
                e.addListener("text-changed", A),
                () => {
                    e.removeListener("text-changed", A), A.cancel();
                }
            );
    }, [_, A, e, t, n]);
}
