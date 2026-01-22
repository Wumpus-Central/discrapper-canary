n.d(t, { A: () => u }), n(228524), n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(263063),
    a = n(253932),
    s = n(218394),
    o = n(258335),
    c = n(249850);
function u(e) {
    let { coverImageAsset: t, title: n, guild: u, description: d, children: p } = e,
        f = a.kt.useSetting(),
        h = (0, s.j)(),
        [A, g] = (0, o.A)(t, h && f);
    return (0, r.jsxs)("div", {
        className: c.kL,
        children: [
            (0, r.jsx)("div", {
                ref: A,
                className: c.El,
                children:
                    null != g &&
                    (0, r.jsx)("img", {
                        src: g,
                        alt: "",
                        className: c.N4,
                    }),
            }),
            (0, r.jsx)("div", {
                className: c._C,
                children: (0, r.jsx)(l.A, {
                    guild: u,
                    size: l.A.Sizes.XLARGE,
                }),
            }),
            (0, r.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                className: c.H1,
                children: n,
            }),
            (0, r.jsx)(i.Text, {
                className: c.jr,
                variant: "text-md/normal",
                color: "text-default",
                children: d,
            }),
            p,
        ],
    });
}
