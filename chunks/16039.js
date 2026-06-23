i.d(n, { default: () => d });
var e = i(627968),
    a = i(64700),
    o = i(189213),
    l = i(783878),
    u = i(239705),
    r = i(200700),
    s = i(375708);
function c(t) {
    let { duration: n, onSelectDuration: i } = t,
        a = (0, r.ny)(),
        o = a.find((t) => t.value === n);
    return (0, e.jsx)(l.Z, {
        required: !0,
        value: o?.value ?? r.DisableCommunicationDuration.DURATION_60_SEC,
        options: a,
        onSelectionChange: function (t) {
            let n = a.find((n) => n.value === t);
            null != n && i(n.value);
        },
        placeholder: s.intl.string(s.t.k7yo6p),
        selectionMode: "single",
    });
}
function d(t) {
    let { action: n, triggerType: i, isEdit: l, onUpdateDuration: d, onClose: p, transitionState: C } = t,
        [f, h] = a.useState(() =>
            null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0
                ? n.metadata.durationSeconds
                : r.DisableCommunicationDuration.DURATION_60_SEC,
        ),
        S = (0, u.x)(n.type, n, i);
    if (null == S) return null;
    let { headerText: D } = S;
    return (0, e.jsx)(o.Modal, {
        onClose: p,
        transitionState: C,
        title: D,
        subtitle: s.intl.string(s.t.DWGBAh),
        actions: [
            {
                text: s.intl.string(s.t["ETE/oC"]),
                onClick: function () {
                    p();
                },
                variant: "secondary",
            },
            {
                text: l ? s.intl.string(s.t.bt75uw) : s.intl.string(s.t["R3BPH+"]),
                onClick: function () {
                    d(f);
                },
            },
        ],
        children: (0, e.jsx)(c, {
            duration: f,
            onSelectDuration: function (t) {
                h(t);
            },
        }),
    });
}
