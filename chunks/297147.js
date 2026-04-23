n.d(e, { default: () => p });
var r = n(627968),
    i = n(64700),
    a = n(189213),
    l = n(17928),
    u = n(292666),
    o = n(545059),
    s = n(870391),
    d = n(985018);
function p(t) {
    let { onClose: e, transitionState: n, groupId: p, initialUserIds: c } = t,
        m = (0, l.bG)([s.A], () => (null == p ? null : s.A.getGroup(p))),
        [C, h] = i.useState(m?.name ?? ""),
        k = null != p,
        G = i.useCallback(() => {
            if ("" !== C.trim()) {
                if (k && null != p) o.A.updateGroup(p, C.trim());
                else {
                    let t = o.A.createGroup(C.trim());
                    null != c && c.length > 0 && o.A.addUsersToGroup(t, c);
                }
                e();
            }
        }, [C, k, p, c, e]),
        g = i.useCallback(
            (t) => {
                "Enter" === t.key && "" !== C.trim() && G();
            },
            [C, G],
        );
    return (0, r.jsx)(a.Modal, {
        transitionState: n,
        onClose: e,
        size: "sm",
        title: k ? "Edit Friend Group" : "Create Friend Group",
        actions: [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: e },
            {
                variant: "primary",
                text: k ? d.intl.string(d.t["R3BPH+"]) : d.intl.string(d.t.CumH4u),
                onClick: G,
                disabled: "" === C.trim(),
            },
        ],
        children: (0, r.jsx)(u.k, {
            value: C,
            onChange: h,
            placeholder: "Group Name",
            maxLength: 100,
            autoFocus: !0,
            onKeyDown: g,
        }),
    });
}
