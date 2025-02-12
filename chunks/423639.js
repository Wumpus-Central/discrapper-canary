n.d(e, { default: () => c }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(913527),
    l = n.n(s),
    o = n(481060),
    u = n(388032),
    a = n(374288);
function c(t) {
    let { createReminder: e, ...n } = t,
        [s, c] = r.useState(() => l()()),
        [d, p] = r.useState(() => l()()),
        x = r.useCallback(() => {
            e(s.toDate());
        }, [e, s]),
        h = (t) => {
            t.isValid() && c(t);
        };
    return (0, i.jsx)(o.ConfirmModal, {
        header: u.intl.string(u.t.VKsXpa),
        confirmText: u.intl.string(u.t.R3BPHx),
        cancelText: u.intl.string(u.t['ETE/oK']),
        confirmButtonColor: o.zxk.Colors.BRAND,
        onConfirm: x,
        ...n,
        children: (0, i.jsxs)('div', {
            className: a.doubleInput,
            children: [
                (0, i.jsx)(o.xJW, {
                    title: u.intl.string(u.t.pSZKvL),
                    required: !0,
                    children: (0, i.jsx)(o.Wrb, {
                        value: s,
                        onSelect: h,
                        minDate: d
                    })
                }),
                (0, i.jsx)(o.xJW, {
                    title: u.intl.string(u.t.GOmEb2),
                    required: !0,
                    children: (0, i.jsx)(o.MGJ, {
                        value: s,
                        onChange: h
                    })
                })
            ]
        })
    });
}
