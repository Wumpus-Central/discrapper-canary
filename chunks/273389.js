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
            canNavigateBack: m,
            onBackClicked: _,
            isModeratorReport: p,
        } = e,
        x = i.useRef(null),
        g = null != n && "cancel" !== n.type,
        f = m && (null == n ? void 0 : n.type) !== "done",
        b = g || f;
    if (
        (i.useEffect(() => {
            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                var e;
                null == (e = x.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !b)
    )
        return null;
    let h = o.intl.string(o.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === "submit"
            ? ((t = "critical-primary"), (h = p ? o.intl.string(s.default.ZUyreX) : o.intl.string(o.t["G+vU8/"])))
            : (null == n ? void 0 : n.type) === "next"
              ? (h = o.intl.string(o.t.PDTjLC))
              : (null == n ? void 0 : n.type) === "cancel" && ((h = o.intl.string(o.t["ETE/oK"])), (t = "secondary")),
        (0, r.jsx)(l.mzw, {
            "data-migration-pending": !0,
            direction: a.Z.Direction.HORIZONTAL,
            children: (0, r.jsxs)(l.hE2, {
                fullWidth: f && g,
                children: [
                    f &&
                        (0, r.jsx)(l.zxk, {
                            onClick: _,
                            variant: "secondary",
                            disabled: c,
                            text: o.intl.string(o.t["13/7kZ"]),
                        }),
                    g &&
                        (0, r.jsx)(l.zxk, {
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
