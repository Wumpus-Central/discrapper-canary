n.d(e, {
    default: () => p,
}),
    n(896048),
    n(733351);
var l = n(627968),
    r = n(64700),
    i = n(158954),
    a = n(311907),
    u = n(397927),
    o = n(545059),
    s = n(870391),
    d = n(985018);

function p(t) {
    var e;
    let { onClose: n, transitionState: p, groupId: c, initialUserIds: m } = t,
        C = (0, a.bG)([s.A], () => (null == c ? null : s.A.getGroup(c))),
        [h, k] = r.useState(null != (e = null == C ? void 0 : C.name) ? e : ""),
        G = null != c,
        g = r.useCallback(() => {
            if ("" !== h.trim()) {
                if (G && null != c) o.A.updateGroup(c, h.trim());
                else {
                    let t = o.A.createGroup(h.trim());
                    null != m && m.length > 0 && o.A.addUsersToGroup(t, m);
                }
                n();
            }
        }, [h, G, c, m, n]),
        b = r.useCallback(
            (t) => {
                "Enter" === t.key && "" !== h.trim() && g();
            },
            [h, g],
        );
    return (0, l.jsx)(i.Modal, {
        transitionState: p,
        onClose: n,
        size: "sm",
        title: G ? "Edit Friend Group" : "Create Friend Group",
        actions: [
            {
                variant: "secondary",
                text: d.intl.string(d.t["ETE/oC"]),
                onClick: n,
            },
            {
                variant: "primary",
                text: G ? d.intl.string(d.t["R3BPH+"]) : d.intl.string(d.t.CumH4u),
                onClick: g,
                disabled: "" === h.trim(),
            },
        ],
        children: (0, l.jsx)(u.ksK, {
            value: h,
            onChange: k,
            placeholder: "Group Name",
            maxLength: 100,
            autoFocus: !0,
            onKeyDown: b,
        }),
    });
}
