a.d(t, { A: () => m }), a(321073);
var n = a(627968),
    i = a(64700),
    s = a(230109),
    l = a(397927),
    r = a(735991),
    o = a(486020),
    c = a(841985),
    d = a(569495),
    u = a(985018),
    h = a(240815);
let m = function (e) {
    let { application: t, onButtonsVisibilityChange: a } = e,
        m = i.useRef(null),
        p = i.useMemo(() => o.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }), [t]),
        _ = i.useMemo(() => {
            let e = [];
            return (
                (0, r.b7)(t) && e.push(u.intl.string(u.t.LO4f0P)),
                (0, r.K4)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["8z5B2U"]))),
                (0, r.ME)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.A, { application: t, bannerType: "detail", iconURL: p }),
            (0, n.jsx)("div", {
                className: h.H,
                style: { height: 52 },
                children: (0, n.jsx)("img", {
                    src: p,
                    alt: "",
                    className: h.my,
                    height: 96,
                    width: 96,
                    style: { borderWidth: 4, marginLeft: 28 },
                }),
            }),
            (0, n.jsxs)("div", {
                className: h.op,
                children: [
                    (0, n.jsxs)("div", {
                        className: h.tJ,
                        children: [
                            (0, n.jsx)(l.Heading, {
                                variant: "heading-xxl/bold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, n.jsx)("div", {
                                className: h.A7,
                                children: _.map((e, t) =>
                                    (0, n.jsx)(
                                        l.Text,
                                        {
                                            className: h.MO,
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
                    (0, n.jsx)(s.L, {
                        innerRef: m,
                        onChange: a,
                        active: !0,
                        children: (0, n.jsx)(d.A, { ref: m, application: t, size: "md" }),
                    }),
                ],
            }),
        ],
    });
};
