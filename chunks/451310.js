i.d(e, { default: () => l });
var n = i(477900);
i(582128);
var a = i(189213),
    s = i(349735),
    r = i(50617),
    d = i(375708);
function l(t) {
    let { projectId: e, scopeKeys: i, note: l, notifyAgent: o, isPreview: c, transitionState: u, onClose: p } = t;
    return (0, n.jsx)(s.A, {
        projectId: e,
        scopeKeys: i,
        note: l,
        notifyAgent: o,
        isPreview: c,
        onSaved: p,
        children: (t) => {
            let { fields: e, canSave: i, saving: s, isScoped: l } = t;
            return (0, n.jsx)(a.Modal, {
                transitionState: u,
                onClose: p,
                title: d.intl.string(l ? r.default.wgDhiQ : r.default.gTMvzD),
                size: "md",
                actions: [
                    { text: d.intl.string(d.t["ETE/oC"]), variant: "secondary", onClick: p, disabled: s },
                    {
                        text: d.intl.string(r.default.Tuz9vw),
                        variant: "primary",
                        type: "submit",
                        loading: s,
                        disabled: !i,
                    },
                ],
                children: e,
            });
        },
    });
}
