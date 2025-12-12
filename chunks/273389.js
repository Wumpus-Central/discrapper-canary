n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(600164),
    s = n(388032),
    o = n(964721);
let c = (e) => {
    let t,
        {
            button: n,
            submitting: c,
            disableNext: d,
            onClick: u,
            canNavigateBack: m,
            onBackClicked: p,
            isModeratorReport: g,
        } = e,
        _ = l.useRef(null),
        x = null != n && "cancel" !== n.type,
        b = m && (null == n ? void 0 : n.type) !== "done",
        h = x || b;
    if (
        (l.useEffect(() => {
            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                var e;
                null == (e = _.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !h)
    )
        return null;
    let f = s.intl.string(s.t.i4jeWR);
    return (
        (null == n ? void 0 : n.type) === "submit"
            ? ((t = "critical-primary"), (f = g ? s.intl.string(o.default.ZUyreS) : s.intl.string(s.t["G+vU89"])))
            : (null == n ? void 0 : n.type) === "next"
              ? (f = s.intl.string(s.t.PDTjLN))
              : (null == n ? void 0 : n.type) === "cancel" && ((f = s.intl.string(s.t["ETE/oC"])), (t = "secondary")),
        (0, r.jsx)(i.mzw, {
            "data-migration-pending": !0,
            direction: a.Z.Direction.HORIZONTAL,
            children: (0, r.jsxs)(i.ButtonGroup, {
                fullWidth: !0,
                children: [
                    b &&
                        (0, r.jsx)(i.Button, {
                            onClick: p,
                            variant: "secondary",
                            disabled: c,
                            text: s.intl.string(s.t["13/7kX"]),
                        }),
                    x &&
                        (0, r.jsx)(i.Button, {
                            onClick: () => {
                                null != n && u(n);
                            },
                            variant: t,
                            disabled: c || d,
                            buttonRef: _,
                            text: f,
                        }),
                ],
            }),
        })
    );
};
