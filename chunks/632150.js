"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(934551),
    s = n(827734),
    a = n(192308),
    o = n(397927),
    l = n(798963);
function u(e) {
    let { subtitle: t } = e;
    function u() {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await n.e("69595").then(n.bind(n, 526710));
            return (t) => (0, r.jsx)(e, { ...t });
        });
    }
    return (0, r.jsxs)("button", {
        className: l.k,
        onClick: u,
        children: [
            (0, r.jsx)(o.Text, { variant: "text-md/medium", color: "text-default", className: l.V, children: t }),
            (0, r.jsx)(i.ChevronSmallRightIcon, { size: "sm", color: s.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
