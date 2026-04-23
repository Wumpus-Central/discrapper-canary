n.d(t, { A: () => h, h: () => b });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(785007),
    o = n(789645),
    d = n(933832),
    c = n(88187),
    u = n(939249),
    m = n(985018),
    g = n(384808),
    h = (((i = {}).DENY = "DENY"), (i.PASSTHROUGH = "PASSTHROUGH"), (i.ALLOW = "ALLOW"), i);
let x = Object.keys(h);
function p(e) {
    let { value: t = "PASSTHROUGH", onChange: n, labelledBy: i, disabled: s = !1, id: o } = e,
        { ref: d, ...c } = (0, r._u)({ orientation: "horizontal", isDisabled: s, labelledBy: i });
    return (0, l.jsx)("div", {
        className: a()(g.Os, { [g.r9]: s }),
        ref: d,
        id: o,
        ...c,
        children: x.map((e) =>
            (0, l.jsx)(
                A,
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
function A(e) {
    let t,
        n,
        i,
        { type: s, onSelect: h, isSelected: x } = e;
    switch (s) {
        case "DENY":
            (i = m.intl.string(m.t["6639O5"])), (t = o.P), (n = g.Xg);
            break;
        case "ALLOW":
            (i = m.intl.string(m.t.RzDfSk)), (t = d.A), (n = g.cw);
            break;
        default:
            (i = m.intl.string(m.t.ujC3ZS)), (t = c.F), (n = g.le);
    }
    let p = (0, r.Gx)({ isSelected: x, label: i });
    return (0, l.jsx)(u.D, {
        className: a()(g.AS, n, { [g.wH]: x }),
        onClick: () => h(s),
        ...p,
        children: (0, l.jsx)(t, { color: "currentColor", size: "xs" }),
    });
}
p.Types = h;
let b = p;
