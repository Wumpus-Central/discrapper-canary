n.d(t, { Z: () => c });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(600164),
    o = n(388032),
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
        g = i.useRef(null),
        f = null != n && "cancel" !== n.type,
        h = _ && (null == n ? void 0 : n.type) !== "done",
        b = f || h;
    if (
        (i.useEffect(() => {
            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !b)
    )
        return null;
    let x = o.intl.string(o.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === "submit"
            ? ((t = "critical-primary"), (x = p ? o.intl.string(s.default.ZUyreX) : o.intl.string(o.t["G+vU8/"])))
            : (null == n ? void 0 : n.type) === "next"
              ? (x = o.intl.string(o.t.PDTjLC))
              : (null == n ? void 0 : n.type) === "cancel" && ((x = o.intl.string(o.t["ETE/oK"])), (t = "secondary")),
        (0, r.jsx)(l.mzw, {
            "data-migration-pending": !0,
            direction: a.Z.Direction.HORIZONTAL,
            children: (0, r.jsxs)(l.hE2, {
                fullWidth: h && f,
                children: [
                    h &&
                        (0, r.jsx)(l.zxk, {
                            onClick: m,
                            variant: "secondary",
                            disabled: c,
                            text: o.intl.string(o.t["13/7kZ"]),
                        }),
                    f &&
                        (0, r.jsx)(l.zxk, {
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
