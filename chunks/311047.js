n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(915578);
let a = (e) => {
    let { title: t, subtitle: n, icon: a } = e;
    return (0, r.jsxs)("div", {
        className: l.wrapper,
        children: [
            null != a &&
                (0, r.jsx)(a, {
                    size: "xs",
                    color: "currentColor",
                    className: l.icon,
                }),
            (0, r.jsx)(i.Text, {
                variant: "text-md/normal",
                className: l.title,
                children: t,
            }),
            null != n && "" !== n
                ? (0, r.jsx)(i.Text, {
                      variant: "text-xs/semibold",
                      className: l.subtitle,
                      children: n,
                  })
                : null,
        ],
    });
};
