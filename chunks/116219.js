n.d(t, { A: () => h }), n(321073);
var l = n(627968),
    a = n(64700),
    r = n(230109),
    i = n(397927),
    s = n(735991),
    c = n(486020),
    o = n(841985),
    d = n(569495),
    u = n(985018),
    p = n(240815);
let h = function (e) {
    let { application: t, onButtonsVisibilityChange: n } = e,
        h = a.useRef(null),
        m = a.useMemo(
            () =>
                c.Ay.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 96,
                }),
            [t],
        ),
        b = a.useMemo(() => {
            let e = [];
            return (
                (0, s.b7)(t) && e.push(u.intl.string(u.t.LO4f0P)),
                (0, s.K4)(t) && (0 !== e.length && e.push("\u2022"), e.push(u.intl.string(u.t["8z5B2U"]))),
                (0, s.ME)(t) && (0 !== e.length && e.push("\u2022"), e.push(u.intl.string(u.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.A, {
                application: t,
                bannerType: "detail",
                iconURL: m,
            }),
            (0, l.jsx)("div", {
                className: p.H,
                style: { height: 52 },
                children: (0, l.jsx)("img", {
                    src: m,
                    alt: "",
                    className: p.my,
                    height: 96,
                    width: 96,
                    style: {
                        borderWidth: 4,
                        marginLeft: 28,
                    },
                }),
            }),
            (0, l.jsxs)("div", {
                className: p.op,
                children: [
                    (0, l.jsxs)("div", {
                        className: p.tJ,
                        children: [
                            (0, l.jsx)(i.Heading, {
                                variant: "heading-xxl/bold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, l.jsx)("div", {
                                className: p.A7,
                                children: b.map((e, t) =>
                                    (0, l.jsx)(
                                        i.Text,
                                        {
                                            className: p.MO,
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
                    (0, l.jsx)(r.L, {
                        innerRef: h,
                        onChange: n,
                        active: !0,
                        children: (0, l.jsx)(d.A, {
                            ref: h,
                            application: t,
                            size: "md",
                        }),
                    }),
                ],
            }),
        ],
    });
};
