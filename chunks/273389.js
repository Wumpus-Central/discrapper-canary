n.d(t, { Z: () => c });
var r = n(951288),
    a = n(647438),
    i = n(481060),
    l = n(600164),
    o = n(388032),
    s = n(764295);
let c = (e) => {
    let t,
        {
            button: n,
            submitting: c,
            disableNext: d,
            onClick: u,
            canNavigateBack: m,
            onBackClicked: p,
            isModeratorReport: _,
        } = e,
        g = a.useRef(null),
        b = null != n && "cancel" !== n.type,
        h = m && (null == n ? void 0 : n.type) !== "done",
        x = b || h;
    if (
        (a.useEffect(() => {
            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !x)
    )
        return null;
    let f = o.intl.string(o.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === "submit"
            ? ((t = "critical-primary"), (f = _ ? o.intl.string(s.default.ZUyreX) : o.intl.string(o.t["G+vU8/"])))
            : (null == n ? void 0 : n.type) === "next"
              ? (f = o.intl.string(o.t.PDTjLC))
              : (null == n ? void 0 : n.type) === "cancel" && ((f = o.intl.string(o.t["ETE/oK"])), (t = "secondary")),
        (0, r.jsx)(i.mzw, {
            "data-migration-pending": !0,
            direction: l.Z.Direction.HORIZONTAL,
            children: (0, r.jsxs)(i.hE2, {
                fullWidth: h && b,
                children: [
                    h &&
                        (0, r.jsx)(i.zxk, {
                            onClick: p,
                            variant: "secondary",
                            disabled: c,
                            text: o.intl.string(o.t["13/7kZ"]),
                        }),
                    b &&
                        (0, r.jsx)(i.zxk, {
                            onClick: () => {
                                null != n && u(n);
                            },
                            variant: t,
                            disabled: c || d,
                            buttonRef: g,
                            text: f,
                        }),
                ],
            }),
        })
    );
};
