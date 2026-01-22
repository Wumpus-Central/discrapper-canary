n.d(t, {
    A: () => l,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(641324),
    s = n(985018),
    o = n(462250);

function l(e) {
    let { node: t } = e;
    return (0, r.jsxs)(i.BJc, {
        gap: 8,
        padding: {
            top: 8,
        },
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-md/semibold",
                color: "text-default",
                className: o.D,
                children: s.intl.string(s.t.rPREPG),
            }),
            t.layout.map((e) =>
                (0, r.jsx)(
                    a.A,
                    {
                        node: e,
                    },
                    e.key,
                ),
            ),
        ],
    });
}
