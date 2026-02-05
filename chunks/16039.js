e.d(n, { default: () => o });
var r = e(627968),
    i = e(64700),
    a = e(158954),
    l = e(397927),
    u = e(239705),
    s = e(200700),
    A = e(985018);
let c = (t) => {
    let { duration: n, onSelectDuration: e } = t,
        i = (0, s.ny)(),
        a = i.find((t) => t.value === n);
    return (0, r.jsx)(l.ZiE, {
        required: !0,
        value: a?.value ?? s.DisableCommunicationDuration.DURATION_60_SEC,
        options: i,
        onSelectionChange: (t) => {
            let n = i.find((n) => n.value === t);
            null != n && e(n.value);
        },
        placeholder: A.intl.string(A.t.k7yo6p),
        selectionMode: "single",
    });
};
function o(t) {
    let { action: n, triggerType: e, isEdit: l, onUpdateDuration: o, onClose: E, transitionState: d } = t,
        [S, _] = i.useState(() =>
            null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0
                ? n.metadata.durationSeconds
                : s.DisableCommunicationDuration.DURATION_60_SEC,
        ),
        N = (0, u.x)(n.type, n, e);
    if (null == N) return null;
    let { headerText: C } = N;
    return (0, r.jsx)(a.Modal, {
        onClose: E,
        transitionState: d,
        title: C,
        subtitle: A.intl.string(A.t.DWGBAh),
        actions: [
            {
                text: A.intl.string(A.t["ETE/oC"]),
                onClick: () => {
                    E();
                },
                variant: "secondary",
            },
            {
                text: l ? A.intl.string(A.t.bt75uw) : A.intl.string(A.t["R3BPH+"]),
                onClick: () => {
                    o(S);
                },
            },
        ],
        children: (0, r.jsx)(c, {
            duration: S,
            onSelectDuration: (t) => {
                _(t);
            },
        }),
    });
}
