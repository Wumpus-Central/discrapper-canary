a.d(t, { A: () => p }), a(321073);
var n = a(627968),
    l = a(64700),
    i = a(230109),
    s = a(534514),
    r = a(834730),
    o = a(735991),
    c = a(486020),
    d = a(841985),
    u = a(569495),
    h = a(985018),
    m = a(811308);
let p = function (e) {
    let { application: t, onButtonsVisibilityChange: a } = e,
        p = l.useRef(null),
        _ = l.useMemo(() => c.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }), [t]),
        g = l.useMemo(() => {
            let e = [];
            return (
                (0, o.b7)(t) && e.push(h.intl.string(h.t.LO4f0P)),
                (0, o.K4)(t) && (0 !== e.length && e.push("•"), e.push(h.intl.string(h.t["8z5B2U"]))),
                (0, o.ME)(t) && (0 !== e.length && e.push("•"), e.push(h.intl.string(h.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(d.A, { application: t, bannerType: "detail", iconURL: _ }),
            (0, n.jsx)("div", {
                className: m.H,
                style: { height: 52 },
                children: (0, n.jsx)("img", {
                    src: _,
                    alt: "",
                    className: m.my,
                    height: 96,
                    width: 96,
                    style: { borderWidth: 4, marginLeft: 28 },
                }),
            }),
            (0, n.jsxs)("div", {
                className: m.op,
                children: [
                    (0, n.jsxs)("div", {
                        className: m.tJ,
                        children: [
                            (0, n.jsx)(s.D, {
                                variant: "heading-xxl/bold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, n.jsx)("div", {
                                className: m.A7,
                                children: g.map((e, t) =>
                                    (0, n.jsx)(
                                        r.E,
                                        {
                                            className: m.MO,
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: e,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, n.jsx)(i.L, {
                        innerRef: p,
                        onChange: a,
                        active: !0,
                        children: (0, n.jsx)(u.A, { ref: p, application: t, size: "md" }),
                    }),
                ],
            }),
        ],
    });
};
