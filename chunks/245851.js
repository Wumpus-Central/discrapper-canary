n.d(c, { t: () => r });
var s = n(515322),
    e = n(902237),
    r = ({ variant: a = "neutral", children: c, className: n, ariaLive: r = "polite" }) =>
        (0, s.v)("div", {
            role: "status",
            "aria-live": r,
            class: (0, e.n)("IncodeSnackbar", `IncodeSnackbar--${a}`, n),
            children: (0, s.v)("span", { class: "IncodeSnackbarContent", children: c }),
        });
