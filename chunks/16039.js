n.d(e, { default: () => o });
var l = n(627968),
    a = n(64700),
    i = n(189213),
    r = n(783878),
    s = n(239705),
    c = n(200700),
    A = n(985018);
let u = (t) => {
    let { duration: e, onSelectDuration: n } = t,
        a = (0, c.ny)(),
        i = a.find((t) => t.value === e);
    return (0, l.jsx)(r.Z, {
        required: !0,
        value: i?.value ?? c.DisableCommunicationDuration.DURATION_60_SEC,
        options: a,
        onSelectionChange: (t) => {
            let e = a.find((e) => e.value === t);
            null != e && n(e.value);
        },
        placeholder: A.intl.string(A.t.k7yo6p),
        selectionMode: "single",
    });
};
function o(t) {
    let { action: e, triggerType: n, isEdit: r, onUpdateDuration: o, onClose: d, transitionState: E } = t,
        [N, h] = a.useState(() =>
            null != e.metadata.durationSeconds && e.metadata.durationSeconds > 0
                ? e.metadata.durationSeconds
                : c.DisableCommunicationDuration.DURATION_60_SEC,
        ),
        _ = (0, s.x)(e.type, e, n);
    if (null == _) return null;
    let { headerText: S } = _;
    return (0, l.jsx)(i.Modal, {
        onClose: d,
        transitionState: E,
        title: S,
        subtitle: A.intl.string(A.t.DWGBAh),
        actions: [
            {
                text: A.intl.string(A.t["ETE/oC"]),
                onClick: () => {
                    d();
                },
                variant: "secondary",
            },
            {
                text: r ? A.intl.string(A.t.bt75uw) : A.intl.string(A.t["R3BPH+"]),
                onClick: () => {
                    o(N);
                },
            },
        ],
        children: (0, l.jsx)(u, {
            duration: N,
            onSelectDuration: (t) => {
                h(t);
            },
        }),
    });
}
