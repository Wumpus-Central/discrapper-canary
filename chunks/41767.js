e.d(n, { default: () => A }), e(388685);
var l = e(255367),
    r = e(73800),
    i = e(82659),
    u = e(481060),
    a = e(556012),
    s = e(590433),
    c = e(388032);
let j = (t) => {
    var n;
    let { duration: e, onSelectDuration: r } = t,
        i = (0, s.tr)(),
        a = i.find((t) => t.value === e);
    return (0, l.jsx)(u.xJW, {
        required: !0,
        children: (0, l.jsx)(u.VcW, {
            value: null != (n = null == a ? void 0 : a.value) ? n : s.UK.DURATION_60_SEC,
            options: i,
            onChange: (t) => {
                let n = i.find((n) => n.value === t);
                null != n && r(n.value);
            },
            placeholder: c.intl.string(c.t.k7yo6u),
        }),
    });
};
function A(t) {
    let { action: n, triggerType: e, isEdit: u, onUpdateDuration: A, onClose: E, transitionState: d } = t,
        [o, _] = r.useState(() =>
            null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0
                ? n.metadata.durationSeconds
                : s.UK.DURATION_60_SEC,
        ),
        N = (0, a.c)(n.type, n, e);
    if (null == N) return null;
    let { headerText: S } = N;
    return (0, l.jsx)(i.Modal, {
        onClose: E,
        transitionState: d,
        title: S,
        subtitle: c.intl.string(c.t.DWGBAg),
        actions: [
            {
                text: c.intl.string(c.t["ETE/oK"]),
                onClick: () => {
                    E();
                },
                variant: "secondary",
            },
            {
                text: u ? c.intl.string(c.t.bt75u7) : c.intl.string(c.t.R3BPHx),
                onClick: () => {
                    A(o);
                },
            },
        ],
        children: (0, l.jsx)(j, {
            duration: o,
            onSelectDuration: (t) => {
                _(t);
            },
        }),
    });
}
