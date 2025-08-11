n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(600164),
    s = n(388032),
    o = n(130883);
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
        b = null != n && "cancel" !== n.type,
        h = m && (null == n ? void 0 : n.type) !== "done",
        x = b || h;
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
    let f = s.intl.string(s.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === "submit"
            ? ((t = "critical-primary"), (f = g ? s.intl.string(o.default.ZUyreX) : s.intl.string(s.t["G+vU8/"])))
            : (null == n ? void 0 : n.type) === "next"
              ? (f = s.intl.string(s.t.PDTjLC))
              : (null == n ? void 0 : n.type) === "cancel" && ((f = s.intl.string(s.t["ETE/oK"])), (t = "secondary")),
        (0, r.jsx)(l.mzw, {
            "data-migration-pending": !0,
            direction: a.Z.Direction.HORIZONTAL,
            children: (0, r.jsxs)(l.hE2, {
                fullWidth: h && b,
                children: [
                    h &&
                        (0, r.jsx)(l.zxk, {
                            onClick: p,
                            variant: "secondary",
                            disabled: c,
                            text: s.intl.string(s.t["13/7kZ"]),
                        }),
                    b &&
                        (0, r.jsx)(l.zxk, {
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
