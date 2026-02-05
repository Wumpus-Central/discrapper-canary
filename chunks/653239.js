"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(732955),
    o = n(397927),
    l = n(386406),
    u = n(48686),
    c = n(737613),
    d = n(985018);
function _(e) {
    let t,
        n,
        { afk: a, ...o } = e,
        [u, c] = i.useState(!1);
    return (
        a
            ? ((t = d.intl.string(d.t.Y40Jke)), (n = d.intl.string(d.t["5J4yGc"])))
            : ((t = d.intl.string(d.t.FJSZVM)), (n = d.intl.string(d.t.etJjgW))),
        (0, r.jsx)(s.aFV, {
            size: "md",
            title: t,
            subtitle: n,
            actions: [
                {
                    text: d.intl.string(d.t.BddRzS),
                    onClick: () => {
                        o.onClose(), l.A.clearSuppressWarning(u);
                    },
                    variant: "primary",
                },
            ],
            actionBarInput: (0, r.jsx)(s.Sc0, {
                checked: u,
                onChange: (e) => c(e),
                label: d.intl.string(d.t["5E9SB9"]),
                labelType: "secondary",
            }),
            ...o,
        })
    );
}
let f = () => {
    let e = i.useRef(null);
    function t() {
        null !== e.current && ((0, o.OoC)(e.current), (e.current = null));
    }
    let [s, l] = (0, a.yK)([c.A], () => [c.A.shouldShowWarning(), c.A.isAFKChannel()], []),
        d = i.useCallback(() => {
            e.current = (0, o.qfG)((e) => (0, r.jsx)(_, { afk: l, ...e }));
        }, [l]),
        f = i.useCallback(() => {
            (0, o.mMO)(async () => {
                let { default: e } = await n.e("9586").then(n.bind(n, 742089));
                return (t) => (0, r.jsx)(e, { ...t, showHideSuppressWarning: !0 });
            }).then((t) => {
                null != t && (e.current = t);
            });
        }, []);
    return (
        i.useEffect(
            () => (
                s && (0, u.t)() ? f() : s ? d() : t(),
                () => {
                    t();
                }
            ),
            [s, d, f],
        ),
        null
    );
};
