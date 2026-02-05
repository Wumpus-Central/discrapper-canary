i.d(e, { default: () => o });
var n = i(627968),
    s = i(64700),
    a = i(989349),
    l = i.n(a),
    r = i(158954),
    c = i(397927),
    u = i(985018),
    d = i(826063);
function o(t) {
    let { createReminder: e, ...i } = t,
        [a, o] = s.useState(() => l()()),
        [p, h] = s.useState(() => l()()),
        b = s.useCallback(() => {
            e(a.toDate());
        }, [e, a]),
        m = (t) => {
            t.isValid() && o(t);
        };
    return (0, n.jsx)(r.ConfirmModal, {
        title: u.intl.string(u.t.VKsXpY),
        confirmText: u.intl.string(u.t["R3BPH+"]),
        cancelText: u.intl.string(u.t["ETE/oC"]),
        onConfirm: b,
        ...i,
        variant: "primary",
        children: (0, n.jsxs)("div", {
            className: d.U,
            children: [
                (0, n.jsx)(c.J3s, {
                    label: u.intl.string(u.t.pSZKvM),
                    required: !0,
                    value: a,
                    onSelect: m,
                    minDate: p,
                }),
                (0, n.jsx)(c.czz, { label: u.intl.string(u.t.GOmEb8), required: !0, value: a, onChange: m }),
            ],
        }),
    });
}
