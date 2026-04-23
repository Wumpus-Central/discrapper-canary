"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(189213),
    o = n(150934),
    l = n(192308),
    u = n(386406),
    c = n(48686),
    d = n(737613),
    _ = n(985018);
function f(e) {
    let t,
        n,
        { afk: s, ...l } = e,
        [c, d] = i.useState(!1);
    return (
        s
            ? ((t = _.intl.string(_.t.Y40Jke)), (n = _.intl.string(_.t["5J4yGc"])))
            : ((t = _.intl.string(_.t.FJSZVM)), (n = _.intl.string(_.t.etJjgW))),
        (0, r.jsx)(a.Modal, {
            size: "md",
            title: t,
            subtitle: n,
            actions: [
                {
                    text: _.intl.string(_.t.BddRzS),
                    onClick: () => {
                        l.onClose(), u.A.clearSuppressWarning(c);
                    },
                    variant: "primary",
                },
            ],
            actionBarInput: (0, r.jsx)(o.S, {
                checked: c,
                onChange: (e) => d(e),
                label: _.intl.string(_.t["5E9SB9"]),
                labelType: "secondary",
            }),
            ...l,
        })
    );
}
let p = () => {
    let e = i.useRef(null);
    function t() {
        null !== e.current && ((0, l.closeModal)(e.current), (e.current = null));
    }
    let [a, o] = (0, s.yK)([d.A], () => [d.A.shouldShowWarning(), d.A.isAFKChannel()], []),
        u = i.useCallback(() => {
            e.current = (0, l.openModal)((e) => (0, r.jsx)(f, { afk: o, ...e }));
        }, [o]),
        _ = i.useCallback(() => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e("9586").then(n.bind(n, 742089));
                return (t) => (0, r.jsx)(e, { ...t, showHideSuppressWarning: !0 });
            }).then((t) => {
                null != t && (e.current = t);
            });
        }, []);
    return (
        i.useEffect(
            () => (
                a && (0, c.t)() ? _() : a ? u() : t(),
                () => {
                    t();
                }
            ),
            [a, u, _],
        ),
        null
    );
};
