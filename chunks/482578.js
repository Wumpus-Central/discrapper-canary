n.d(t, { A: () => o });
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(235986),
    s = n(985018),
    d = n(641131);
let o = (e) => {
    let t,
        {
            button: n,
            submitting: o,
            disableNext: u,
            onClick: c,
            canNavigateBack: m,
            onBackClicked: _,
            isModeratorReport: x,
        } = e,
        g = a.useRef(null),
        h = null != n && "cancel" !== n.type,
        p = m && n?.type !== "done",
        A = h || p;
    if (
        (a.useEffect(() => {
            (n?.type === "submit" || n?.type === "done") && g.current?.focus();
        }, [n?.type]),
        !A)
    )
        return null;
    let b = s.intl.string(s.t.i4jeWR);
    return (
        n?.type === "submit"
            ? ((t = "critical-primary"), (b = x ? s.intl.string(d.default.ZUyreS) : s.intl.string(s.t["G+vU89"])))
            : n?.type === "next"
              ? (b = s.intl.string(s.t.PDTjLN))
              : n?.type === "cancel" && ((b = s.intl.string(s.t["ETE/oC"])), (t = "secondary")),
        (0, l.jsx)(i.jlY, {
            "data-migration-pending": !0,
            direction: r.A.Direction.HORIZONTAL,
            children: (0, l.jsxs)(i.ButtonGroup, {
                fullWidth: !0,
                children: [
                    p &&
                        (0, l.jsx)(i.Button, {
                            onClick: _,
                            variant: "secondary",
                            disabled: o,
                            text: s.intl.string(s.t["13/7kX"]),
                        }),
                    h &&
                        (0, l.jsx)(i.Button, {
                            onClick: () => {
                                null != n && c(n);
                            },
                            variant: t,
                            disabled: o || u,
                            buttonRef: g,
                            text: b,
                        }),
                ],
            }),
        })
    );
};
