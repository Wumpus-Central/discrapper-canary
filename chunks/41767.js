e.d(n, { default: () => j }), e(388685);
var l = e(951288),
    r = e(647438),
    i = e(793030),
    a = e(481060),
    u = e(556012),
    s = e(590433),
    c = e(388032);
let o = (t) => {
    var n;
    let { duration: e, onSelectDuration: r } = t,
        i = (0, s.tr)(),
        u = i.find((t) => t.value === e);
    return (0, l.jsx)(a.VcW, {
        required: !0,
        value: null != (n = null == u ? void 0 : u.value) ? n : s.DisableCommunicationDuration.DURATION_60_SEC,
        options: i,
        onChange: (t) => {
            let n = i.find((n) => n.value === t);
            null != n && r(n.value);
        },
        placeholder: c.intl.string(c.t.k7yo6u),
    });
};
function j(t) {
    let { action: n, triggerType: e, isEdit: a, onUpdateDuration: j, onClose: A, transitionState: E } = t,
        [d, _] = r.useState(() =>
            null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0
                ? n.metadata.durationSeconds
                : s.DisableCommunicationDuration.DURATION_60_SEC,
        ),
        N = (0, u.c)(n.type, n, e);
    if (null == N) return null;
    let { headerText: S } = N;
    return (0, l.jsx)(i.Modal, {
        onClose: A,
        transitionState: E,
        title: S,
        subtitle: c.intl.string(c.t.DWGBAg),
        actions: [
            {
                text: c.intl.string(c.t["ETE/oK"]),
                onClick: () => {
                    A();
                },
                variant: "secondary",
            },
            {
                text: a ? c.intl.string(c.t.bt75u7) : c.intl.string(c.t.R3BPHx),
                onClick: () => {
                    j(d);
                },
            },
        ],
        children: (0, l.jsx)(o, {
            duration: d,
            onSelectDuration: (t) => {
                _(t);
            },
        }),
    });
}
