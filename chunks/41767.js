e.d(n, { default: () => A }), e(388685);
var l = e(54381),
    r = e(473749),
    i = e(793030),
    a = e(668339),
    u = e(556012),
    s = e(590433),
    c = e(388032);
let o = (t) => {
    var n;
    let { duration: e, onSelectDuration: r } = t,
        i = (0, s.tr)(),
        u = i.find((t) => t.value === e);
    return (0, l.jsx)(a.d, {
        required: !0,
        value: null != (n = null == u ? void 0 : u.value) ? n : s.DisableCommunicationDuration.DURATION_60_SEC,
        options: i,
        onChange: (t) => {
            let n = i.find((n) => n.value === t);
            null != n && r(n.value);
        },
        placeholder: c.intl.string(c.t.k7yo6p),
    });
};
function A(t) {
    let { action: n, triggerType: e, isEdit: a, onUpdateDuration: A, onClose: j, transitionState: d } = t,
        [E, S] = r.useState(() =>
            null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0
                ? n.metadata.durationSeconds
                : s.DisableCommunicationDuration.DURATION_60_SEC,
        ),
        _ = (0, u.c)(n.type, n, e);
    if (null == _) return null;
    let { headerText: N } = _;
    return (0, l.jsx)(i.Modal, {
        onClose: j,
        transitionState: d,
        title: N,
        subtitle: c.intl.string(c.t.DWGBAh),
        actions: [
            {
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: () => {
                    j();
                },
                variant: "secondary",
            },
            {
                text: a ? c.intl.string(c.t.bt75uw) : c.intl.string(c.t["R3BPH+"]),
                onClick: () => {
                    A(E);
                },
            },
        ],
        children: (0, l.jsx)(o, {
            duration: E,
            onSelectDuration: (t) => {
                S(t);
            },
        }),
    });
}
