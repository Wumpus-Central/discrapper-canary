e.d(n, { default: () => c });
var i = e(627968),
    a = e(64700),
    l = e(189213),
    o = e(783878),
    u = e(239705),
    r = e(200700),
    s = e(375708);
let d = (t) => {
    let { duration: n, onSelectDuration: e } = t,
        a = (0, r.ny)(),
        l = a.find((t) => t.value === n);
    return (0, i.jsx)(o.Z, {
        required: !0,
        value: l?.value ?? r.DisableCommunicationDuration.DURATION_60_SEC,
        options: a,
        onSelectionChange: (t) => {
            let n = a.find((n) => n.value === t);
            null != n && e(n.value);
        },
        placeholder: s.intl.string(s.t.k7yo6p),
        selectionMode: "single",
    });
};
function c(t) {
    let { action: n, triggerType: e, isEdit: o, onUpdateDuration: c, onClose: p, transitionState: C } = t,
        [h, S] = a.useState(() =>
            null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0
                ? n.metadata.durationSeconds
                : r.DisableCommunicationDuration.DURATION_60_SEC,
        ),
        D = (0, u.x)(n.type, n, e);
    if (null == D) return null;
    let { headerText: g } = D;
    return (0, i.jsx)(l.Modal, {
        onClose: p,
        transitionState: C,
        title: g,
        subtitle: s.intl.string(s.t.DWGBAh),
        actions: [
            {
                text: s.intl.string(s.t["ETE/oC"]),
                onClick: () => {
                    p();
                },
                variant: "secondary",
            },
            {
                text: o ? s.intl.string(s.t.bt75uw) : s.intl.string(s.t["R3BPH+"]),
                onClick: () => {
                    c(h);
                },
            },
        ],
        children: (0, i.jsx)(d, {
            duration: h,
            onSelectDuration: (t) => {
                S(t);
            },
        }),
    });
}
