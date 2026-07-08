e.d(c, { t: () => i });
var n = e(248702),
    s = e(517e3),
    i = ({ variant: a = "neutral", children: c, className: e, ariaLive: i = "polite" }) =>
        (0, n.v)("div", {
            role: "status",
            "aria-live": i,
            class: (0, s.n)("IncodeSnackbar", `IncodeSnackbar--${a}`, e),
            children: (0, n.v)("span", { class: "IncodeSnackbarContent", children: c }),
        });
