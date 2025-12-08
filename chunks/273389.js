n.d(t, { Z: () => d });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(600164),
    s = n(388032),
    o = n(864309);
let d = (e) => {
    let t,
        {
            button: n,
            submitting: d,
            disableNext: c,
            onClick: u,
            canNavigateBack: m,
            onBackClicked: p,
            isModeratorReport: g,
        } = e,
        _ = l.useRef(null),
        x = null != n && "cancel" !== n.type,
        h = m && (null == n ? void 0 : n.type) !== "done",
        b = x || h;
    if (
        (l.useEffect(() => {
            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                var e;
                null == (e = _.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !b)
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
                fullWidth: h && x,
                children: [
                    h &&
                        (0, r.jsx)(i.Button, {
                            onClick: p,
                            variant: "secondary",
                            disabled: d,
                            text: s.intl.string(s.t["13/7kX"]),
                        }),
                    x &&
                        (0, r.jsx)(i.Button, {
                            onClick: () => {
                                null != n && u(n);
                            },
                            variant: t,
                            disabled: d || c,
                            buttonRef: _,
                            text: f,
                        }),
                ],
            }),
        })
    );
};
