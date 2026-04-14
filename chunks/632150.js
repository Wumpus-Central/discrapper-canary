"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(934551),
    a = n(311907),
    o = n(827734),
    l = n(192308),
    u = n(397927),
    c = n(323082),
    d = n(560138),
    _ = n(224850),
    f = n(778712),
    h = n(798963);
function p(e) {
    let { subtitle: t } = e,
        p = (0, a.bG)([d.A], () => d.A.affinities),
        m = (0, a.bG)([d.A], () => d.A.hasFetched);
    function E() {
        (0, l.openModalLazy)(async () => {
            let { default: e } = await n.e("69595").then(n.bind(n, 526710));
            return (t) => (0, r.jsx)(e, { ...t });
        });
    }
    return (
        i.useEffect(() => {
            m || c.xG();
        }, [m]),
        (0, r.jsxs)("button", {
            className: h.kL,
            onClick: E,
            children: [
                p.length > 1 &&
                    (0, r.jsx)("div", {
                        className: h.zc,
                        children: p
                            .slice(0, 3)
                            .map((e, t, n) =>
                                (0, r.jsx)(
                                    _.n,
                                    { affinity: e, applyMask: t !== n.length - 1, size: f._3.SIZE_20 },
                                    e.id,
                                ),
                            ),
                    }),
                (0, r.jsx)(u.Text, { variant: "text-md/medium", color: "text-default", className: h.VA, children: t }),
                (0, r.jsx)(s.ChevronSmallRightIcon, { size: "sm", color: o.A.colors.INTERACTIVE_ICON_DEFAULT }),
            ],
        })
    );
}
