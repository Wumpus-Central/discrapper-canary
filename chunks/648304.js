n.d(t, { a: () => o });
var l = n(627968);
n(64700);
var r = n(834730),
    i = n(769015),
    a = n(985018),
    s = n(945691);
function o(e) {
    let { applications: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                className: s.wx,
                children: a.intl.string(a.t["Uv/eTx"]),
            }),
            (0, l.jsx)("div", {
                className: s.p_,
                children: t.map((e) => {
                    if (null != e)
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: s.nM,
                                children: [
                                    (0, l.jsx)(i.A, { game: e, size: i.M.XXSMALL }),
                                    (0, l.jsx)(r.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: e.name,
                                    }),
                                ],
                            },
                            e.id,
                        );
                }),
            }),
        ],
    });
}
