n.d(t, {
    A: () => c,
});
var l = n(627968),
    r = n(64700),
    a = n(397927),
    i = n(235986),
    s = n(985018),
    o = n(641131);
let c = (e) => {
    let t,
        {
            button: n,
            submitting: c,
            disableNext: d,
            onClick: u,
            canNavigateBack: m,
            onBackClicked: b,
            isModeratorReport: p,
        } = e,
        x = r.useRef(null),
        g = null != n && "cancel" !== n.type,
        f = m && (null == n ? void 0 : n.type) !== "done",
        v = g || f;
    if (
        (r.useEffect(() => {
            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                var e;
                null == (e = x.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !v)
    )
        return null;
    let h = s.intl.string(s.t.i4jeWR);
    return (
        (null == n ? void 0 : n.type) === "submit"
            ? ((t = "critical-primary"), (h = p ? s.intl.string(o.default.ZUyreS) : s.intl.string(s.t["G+vU89"])))
            : (null == n ? void 0 : n.type) === "next"
              ? (h = s.intl.string(s.t.PDTjLN))
              : (null == n ? void 0 : n.type) === "cancel" && ((h = s.intl.string(s.t["ETE/oC"])), (t = "secondary")),
        (0, l.jsx)(a.jlY, {
            "data-migration-pending": !0,
            direction: i.A.Direction.HORIZONTAL,
            children: (0, l.jsxs)(a.ButtonGroup, {
                fullWidth: !0,
                children: [
                    f &&
                        (0, l.jsx)(a.Button, {
                            onClick: b,
                            variant: "secondary",
                            disabled: c,
                            text: s.intl.string(s.t["13/7kX"]),
                        }),
                    g &&
                        (0, l.jsx)(a.Button, {
                            onClick: () => {
                                null != n && u(n);
                            },
                            variant: t,
                            disabled: c || d,
                            buttonRef: x,
                            text: h,
                        }),
                ],
            }),
        })
    );
};
