e.d(n, { default: () => c }), e(388685);
var l = e(255367),
    i = e(73800),
    a = e(82659),
    u = e(481060),
    r = e(556012),
    o = e(590433),
    s = e(388032);
let d = (t) => {
    var n;
    let { duration: e, onSelectDuration: i } = t,
        a = (0, o.tr)(),
        r = a.find((t) => t.value === e);
    return (0, l.jsx)(u.xJW, {
        required: !0,
        children: (0, l.jsx)(u.VcW, {
            value: null != (n = null == r ? void 0 : r.value) ? n : o.UK.DURATION_60_SEC,
            options: a,
            onChange: (t) => {
                let n = a.find((n) => n.value === t);
                null != n && i(n.value);
            },
            placeholder: s.intl.string(s.t.k7yo6u),
        }),
    });
};
function c(t) {
    let { action: n, triggerType: e, isEdit: u, onUpdateDuration: c, onClose: p, transitionState: h } = t,
        [v, x] = i.useState(() =>
            null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0
                ? n.metadata.durationSeconds
                : o.UK.DURATION_60_SEC,
        ),
        C = (0, r.c)(n.type, n, e);
    if (null == C) return null;
    let { headerText: S } = C;
    return (0, l.jsx)(a.Modal, {
        onClose: p,
        transitionState: h,
        title: S,
        subtitle: s.intl.string(s.t.DWGBAg),
        actions: [
            {
                text: s.intl.string(s.t["ETE/oK"]),
                onClick: () => {
                    p();
                },
                variant: "secondary",
            },
            {
                text: u ? s.intl.string(s.t.bt75u7) : s.intl.string(s.t.R3BPHx),
                onClick: () => {
                    c(v);
                },
            },
        ],
        children: (0, l.jsx)(d, {
            duration: v,
            onSelectDuration: (t) => {
                x(t);
            },
        }),
    });
}
