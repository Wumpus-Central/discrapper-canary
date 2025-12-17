n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(600164),
    s = n(388032),
    o = n(792389);
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
        g = l.useRef(null),
        f = null != n && "cancel" !== n.type,
        x = m && (null == n ? void 0 : n.type) !== "done",
        h = f || x;
    if (
        (l.useEffect(() => {
            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !h)
    )
        return null;
    let v = s.intl.string(s.t.i4jeWR);
    return (
        (null == n ? void 0 : n.type) === "submit"
            ? ((t = "critical-primary"), (v = p ? s.intl.string(o.default.ZUyreS) : s.intl.string(s.t["G+vU89"])))
            : (null == n ? void 0 : n.type) === "next"
              ? (v = s.intl.string(s.t.PDTjLN))
              : (null == n ? void 0 : n.type) === "cancel" && ((v = s.intl.string(s.t["ETE/oC"])), (t = "secondary")),
        (0, r.jsx)(i.mzw, {
            "data-migration-pending": !0,
            direction: a.Z.Direction.HORIZONTAL,
            children: (0, r.jsxs)(i.ButtonGroup, {
                fullWidth: !0,
                children: [
                    x &&
                        (0, r.jsx)(i.Button, {
                            onClick: b,
                            variant: "secondary",
                            disabled: c,
                            text: s.intl.string(s.t["13/7kX"]),
                        }),
                    f &&
                        (0, r.jsx)(i.Button, {
                            onClick: () => {
                                null != n && u(n);
                            },
                            variant: t,
                            disabled: c || d,
                            buttonRef: g,
                            text: v,
                        }),
                ],
            }),
        })
    );
};
