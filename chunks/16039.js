e.d(n, {
    default: () => o,
}),
    e(896048);
var l = e(627968),
    r = e(64700),
    i = e(158954),
    a = e(397927),
    u = e(239705),
    s = e(200700),
    A = e(985018);
let c = (t) => {
    var n;
    let { duration: e, onSelectDuration: r } = t,
        i = (0, s.ny)(),
        u = i.find((t) => t.value === e);
    return (0, l.jsx)(a.ZiE, {
        required: !0,
        value: null != (n = null == u ? void 0 : u.value) ? n : s.DisableCommunicationDuration.DURATION_60_SEC,
        options: i,
        onSelectionChange: (t) => {
            let n = i.find((n) => n.value === t);
            null != n && r(n.value);
        },
        placeholder: A.intl.string(A.t.k7yo6p),
        selectionMode: "single",
    });
};

function o(t) {
    let { action: n, triggerType: e, isEdit: a, onUpdateDuration: o, onClose: E, transitionState: d } = t,
        [S, _] = r.useState(() =>
            null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0
                ? n.metadata.durationSeconds
                : s.DisableCommunicationDuration.DURATION_60_SEC,
        ),
        N = (0, u.x)(n.type, n, e);
    if (null == N) return null;
    let { headerText: C } = N;
    return (0, l.jsx)(i.Modal, {
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
                text: a ? A.intl.string(A.t.bt75uw) : A.intl.string(A.t["R3BPH+"]),
                onClick: () => {
                    o(S);
                },
            },
        ],
        children: (0, l.jsx)(c, {
            duration: S,
            onSelectDuration: (t) => {
                _(t);
            },
        }),
    });
}
