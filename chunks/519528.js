n.d(e, { default: () => c }), n(896048), n(733351);
var r = n(627968),
    a = n(64700),
    i = n(158954),
    l = n(311907),
    u = n(397927),
    o = n(545059),
    s = n(870391),
    d = n(985018);
function c(t) {
    var e;
    let { onClose: n, transitionState: c, groupId: p } = t,
        m = (0, l.bG)([s.A], () => (null == p ? null : s.A.getGroup(p))),
        [C, k] = a.useState(null != (e = null == m ? void 0 : m.name) ? e : ""),
        h = null != p,
        G = a.useCallback(() => {
            "" !== C.trim() && (h && null != p ? o.A.updateGroup(p, C.trim()) : o.A.createGroup(C.trim()), n());
        }, [C, h, p, n]),
        b = a.useCallback(
            (t) => {
                "Enter" === t.key && "" !== C.trim() && G();
            },
            [C, G],
        );
    return (0, r.jsx)(i.Modal, {
        transitionState: c,
        onClose: n,
        size: "sm",
        title: h ? "Edit Friend Group" : "Create Friend Group",
        actions: [
            {
                variant: "secondary",
                text: d.intl.string(d.t["ETE/oC"]),
                onClick: n,
            },
            {
                variant: "primary",
                text: h ? d.intl.string(d.t["R3BPH+"]) : d.intl.string(d.t.CumH4u),
                onClick: G,
                disabled: "" === C.trim(),
            },
        ],
        children: (0, r.jsx)(u.ksK, {
            value: C,
            onChange: k,
            placeholder: "Group Name",
            maxLength: 100,
            autoFocus: !0,
            onKeyDown: b,
        }),
    });
}
