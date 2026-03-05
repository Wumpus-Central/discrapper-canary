n.d(t, { default: () => l });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(442433),
    c = n(847767),
    o = n(422258),
    s = n(652215),
    d = n(985018);
let l = (0, c.A)(
    function (e) {
        let { onSelect: t, navId: n } = e;
        return (0, i.jsx)(r.W1t, {
            "data-menu-migrated": !0,
            navId: n,
            onClose: a.Z_,
            "aria-label": d.intl.string(d.t.liqwPJ),
            onSelect: t,
            children: (0, i.jsx)(r.rXV, {
                children: (0, i.jsx)(r.Drp, {
                    id: "hide-favorites",
                    label: "Hide Server",
                    subtext: "Turn this back on anytime in Settings",
                    color: "danger",
                    action: () => (0, o.tV)(!1),
                }),
            }),
        });
    },
    { object: s.ZSU.CONTEXT_MENU },
);
