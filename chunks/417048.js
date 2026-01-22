n.d(t, {
    X: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(82170);
let s = (e) => {
    let { title: t, subtitle: n, icon: s } = e;
    return (0, r.jsxs)("div", {
        className: l.iE,
        children: [
            null != s &&
                (0, r.jsx)(s, {
                    size: "xs",
                    color: "currentColor",
                    className: l.Kk,
                }),
            (0, r.jsx)(i.Text, {
                variant: "text-md/normal",
                className: l.DD,
                children: t,
            }),
            null != n && "" !== n
                ? (0, r.jsx)(i.Text, {
                      variant: "text-xs/semibold",
                      className: l.VA,
                      children: n,
                  })
                : null,
        ],
    });
};
