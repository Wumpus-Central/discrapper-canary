n.d(e, { default: () => d }), n(388685), n(781311);
var i = n(951288),
    r = n(647438),
    a = n(793030),
    l = n(442837),
    u = n(481060),
    o = n(313426),
    s = n(643327),
    c = n(388032);
function d(t) {
    var e;
    let { onClose: n, transitionState: d, groupId: p } = t,
        m = (0, l.e7)([s.Z], () => (null == p ? null : s.Z.getGroup(p))),
        [C, h] = r.useState(null != (e = null == m ? void 0 : m.name) ? e : ""),
        k = null != p,
        g = r.useCallback(() => {
            "" !== C.trim() && (k && null != p ? o.Z.updateGroup(p, C.trim()) : o.Z.createGroup(C.trim()), n());
        }, [C, k, p, n]),
        v = r.useCallback(
            (t) => {
                "Enter" === t.key && "" !== C.trim() && g();
            },
            [C, g],
        );
    return (0, i.jsx)(a.Modal, {
        transitionState: d,
        onClose: n,
        size: "sm",
        title: k ? "Edit Friend Group" : "Create Friend Group",
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: n,
            },
            {
                variant: "primary",
                text: k ? c.intl.string(c.t["R3BPH+"]) : c.intl.string(c.t.CumH4u),
                onClick: g,
                disabled: "" === C.trim(),
            },
        ],
        children: (0, i.jsx)(u.oil, {
            value: C,
            onChange: h,
            placeholder: "Group Name",
            maxLength: 100,
            autoFocus: !0,
            onKeyDown: v,
        }),
    });
}
