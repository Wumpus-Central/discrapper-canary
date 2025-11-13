n.d(t, { Z: () => c });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(600164),
    s = n(388032),
    o = n(797013);
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
        _ = i.useRef(null),
        h = null != n && "cancel" !== n.type,
        b = m && (null == n ? void 0 : n.type) !== "done",
        x = h || b;
    if (
        (i.useEffect(() => {
            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                var e;
                null == (e = _.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !x)
    )
        return null;
    let f = s.intl.string(s.t.i4jeWR);
    return (
        (null == n ? void 0 : n.type) === "submit"
            ? ((t = "critical-primary"), (f = g ? s.intl.string(o.default.ZUyreS) : s.intl.string(s.t["G+vU89"])))
            : (null == n ? void 0 : n.type) === "next"
              ? (f = s.intl.string(s.t.PDTjLN))
              : (null == n ? void 0 : n.type) === "cancel" && ((f = s.intl.string(s.t["ETE/oC"])), (t = "secondary")),
        (0, r.jsx)(l.mzw, {
            "data-migration-pending": !0,
            direction: a.Z.Direction.HORIZONTAL,
            children: (0, r.jsxs)(l.ButtonGroup, {
                fullWidth: b && h,
                children: [
                    b &&
                        (0, r.jsx)(l.Button, {
                            onClick: p,
                            variant: "secondary",
                            disabled: c,
                            text: s.intl.string(s.t["13/7kX"]),
                        }),
                    h &&
                        (0, r.jsx)(l.Button, {
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
