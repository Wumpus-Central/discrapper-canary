n.d(t, {
    A: () => O,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(990078),
    u = n(397927),
    d = n(653523),
    f = n(350972),
    p = n(677056),
    _ = n(635917),
    h = n(652215),
    m = n(985018),
    g = n(649542);
let E = () => [
        m.intl.string(m.t["EgWTY+"]),
        m.intl.string(m.t.umBn5f),
        m.intl.string(m.t.dG1wD1),
        m.intl.string(m.t.SesI4S),
        m.intl.string(m.t.RnMLvl),
    ],
    b = () => {
        var e;
        return null != (e = l().sample(E())) ? e : m.intl.string(m.t["EgWTY+"]);
    };

function y(e) {
    let { id: t, className: n, onSelect: a, isSelected: o = !1, tabIndex: l, children: p, locked: m = !1 } = e,
        [E, y] = i.useState((0, _.gG)(t).name),
        O = t === f.Ic.PIRATE;
    return (0, r.jsx)(c.m, {
        text: E,
        onTooltipShow: () => O && y(b()),
        children: (0, r.jsxs)("div", {
            className: g.Co,
            children: [
                (0, r.jsx)(u.DUT, {
                    role: "radio",
                    "aria-label": E,
                    "aria-checked": o,
                    tabIndex: null != l ? l : o ? 0 : -1,
                    className: s()(
                        g.Ni,
                        {
                            [g.wH]: o,
                        },
                        n,
                    ),
                    onClick: o ? h.tEg : () => (null == a ? void 0 : a(t)),
                    children: p,
                }),
                o && (0, r.jsx)(d.H$, {}),
                m &&
                    (0, r.jsx)("div", {
                        className: g.RK,
                        children: (0, r.jsx)(u.XAi, {
                            className: g.AA,
                            color: "currentColor",
                        }),
                    }),
            ],
        }),
    });
}

function O(e) {
    let { icon: t, isSelected: n, disabled: i, tabIndex: a, onSelect: s, locked: o } = e;
    return (0, r.jsx)(y, {
        onSelect: i ? void 0 : s,
        isSelected: n,
        id: t.id,
        className: i ? g.r9 : void 0,
        tabIndex: a,
        locked: o,
        children: (0, r.jsx)(p.A, {
            id: t.id,
            width: _.Kl,
        }),
    });
}
