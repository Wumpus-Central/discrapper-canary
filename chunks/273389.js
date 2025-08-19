n.d(t, { Z: () => c });
var r = n(951288),
    a = n(647438),
    i = n(481060),
    o = n(600164),
    l = n(388032),
    s = n(764295);
let c = (e) => {
    let t,
        {
            button: n,
            submitting: c,
            disableNext: d,
            onClick: u,
            canNavigateBack: _,
            onBackClicked: m,
            isModeratorReport: p,
        } = e,
        g = a.useRef(null),
        f = null != n && "cancel" !== n.type,
        b = _ && (null == n ? void 0 : n.type) !== "done",
        h = f || b;
    if (
        (a.useEffect(() => {
            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !h)
    )
        return null;
    let x = l.intl.string(l.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === "submit"
            ? ((t = "critical-primary"), (x = p ? l.intl.string(s.default.ZUyreX) : l.intl.string(l.t["G+vU8/"])))
            : (null == n ? void 0 : n.type) === "next"
              ? (x = l.intl.string(l.t.PDTjLC))
              : (null == n ? void 0 : n.type) === "cancel" && ((x = l.intl.string(l.t["ETE/oK"])), (t = "secondary")),
        (0, r.jsx)(i.mzw, {
            "data-migration-pending": !0,
            direction: o.Z.Direction.HORIZONTAL,
            children: (0, r.jsxs)(i.hE2, {
                fullWidth: b && f,
                children: [
                    b &&
                        (0, r.jsx)(i.zxk, {
                            onClick: m,
                            variant: "secondary",
                            disabled: c,
                            text: l.intl.string(l.t["13/7kZ"]),
                        }),
                    f &&
                        (0, r.jsx)(i.zxk, {
                            onClick: () => {
                                null != n && u(n);
                            },
                            variant: t,
                            disabled: c || d,
                            buttonRef: g,
                            text: x,
                        }),
                ],
            }),
        })
    );
};
