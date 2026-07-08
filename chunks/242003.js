i.d(t, { t: () => s });
var r = i(248702),
    n = i(517e3),
    o = { primary: "IncodeButtonPrimary", secondary: "IncodeButtonSecondary", link: "IncodeButtonLink" },
    a = { L: "IncodeButtonL", M: "IncodeButtonM", S: "IncodeButtonS" },
    s = (0, r.a)((e, t) => {
        let {
                isLoading: i = !1,
                variant: s = "primary",
                size: l = "L",
                icon: c,
                class: d,
                type: u = "button",
                children: h,
                disabled: p,
                ...f
            } = e,
            m = !h && !!c,
            g = i && "L" === l;
        return (0, r.v)("button", {
            ref: t,
            ...f,
            class: (0, n.n)(
                "IncodeButton",
                o[s],
                a[l],
                g ? "IncodeButtonLoading" : "",
                m ? "IncodeButtonIconOnly" : "",
                d,
            ),
            disabled: p || g,
            type: u,
            children: g ? (0, r.v)(n.t, { size: 30 }) : m ? c : c ? (0, r.v)(r.S, { children: [h, c] }) : h,
        });
    });
