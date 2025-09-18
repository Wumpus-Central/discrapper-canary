n.d(t, { W: () => a });
var r = n(951288),
    i = n(481060);
let a = (e) => {
    var t, n;
    let { error: a } = e,
        o = a.getAnyErrorMessage(),
        s = null != (n = null != (t = a.code) ? t : a.status) ? n : "Unknown";
    return (0, r.jsx)(i.qXd, {
        color: i.DM8.DANGER,
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)("strong", {
                    children: ["Error ", s, ":"],
                }),
                " ",
                null != o ? o : "An unexpected error occurred",
            ],
        }),
    });
};
