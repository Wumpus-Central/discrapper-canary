n.d(t, {
    a: () => l,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(769015),
    s = n(985018),
    o = n(365282);

function l(e) {
    let { applications: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-xs/semibold",
                color: "text-default",
                className: o.wx,
                children: s.intl.string(s.t["Uv/eTx"]),
            }),
            (0, r.jsx)("div", {
                className: o.p_,
                children: t.map((e) => {
                    if (null != e)
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: o.nM,
                                children: [
                                    (0, r.jsx)(a.A, {
                                        game: e,
                                        size: a.M.XXSMALL,
                                    }),
                                    (0, r.jsx)(i.Text, {
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
