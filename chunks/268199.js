n.d(t, { A: () => u, h: () => h });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(421380),
    o = n(397927),
    d = n(985018),
    c = n(734591),
    u = (((i = {}).DENY = "DENY"), (i.PASSTHROUGH = "PASSTHROUGH"), (i.ALLOW = "ALLOW"), i);
let m = Object.keys(u);
function g(e) {
    let { value: t = "PASSTHROUGH", onChange: n, labelledBy: i, disabled: s = !1, id: o } = e,
        { ref: d, ...u } = (0, r._u)({ orientation: "horizontal", isDisabled: s, labelledBy: i });
    return (0, l.jsx)("div", {
        className: a()(c.Os, { [c.r9]: s }),
        ref: d,
        id: o,
        ...u,
        children: m.map((e) =>
            (0, l.jsx)(
                x,
                {
                    type: e,
                    isSelected: t === e,
                    onSelect: (e) => {
                        t === e || s || n(e);
                    },
                },
                e,
            ),
        ),
    });
}
function x(e) {
    let t,
        n,
        i,
        { type: s, onSelect: u, isSelected: m } = e;
    switch (s) {
        case "DENY":
            (i = d.intl.string(d.t["6639O5"])), (t = o.PGe), (n = c.Xg);
            break;
        case "ALLOW":
            (i = d.intl.string(d.t.RzDfSk)), (t = o.A9s), (n = c.cw);
            break;
        default:
            (i = d.intl.string(d.t.ujC3ZS)), (t = o.Fb4), (n = c.le);
    }
    let g = (0, r.Gx)({ isSelected: m, label: i });
    return (0, l.jsx)(o.DUT, {
        className: a()(c.AS, n, { [c.wH]: m }),
        onClick: () => u(s),
        ...g,
        children: (0, l.jsx)(t, { color: "currentColor", size: "xs" }),
    });
}
g.Types = u;
let h = g;
