n.d(t, { default: () => p });
var a = n(627968),
    i = n(64700),
    l = n(989349),
    r = n.n(l),
    s = n(732159),
    o = n(582306),
    u = n(335310),
    c = n(985018),
    d = n(218108);
function p(e) {
    let { createReminder: t, ...n } = e,
        [l, p] = i.useState(() => r()()),
        [h, m] = i.useState(() => r()()),
        f = i.useCallback(() => {
            t(l.toDate());
        }, [t, l]),
        x = (e) => {
            e.isValid() && p(e);
        };
    return (0, a.jsx)(s.ConfirmModal, {
        title: c.intl.string(c.t.VKsXpY),
        confirmText: c.intl.string(c.t["R3BPH+"]),
        cancelText: c.intl.string(c.t["ETE/oC"]),
        onConfirm: f,
        ...n,
        variant: "primary",
        children: (0, a.jsxs)("div", {
            className: d.U,
            children: [
                (0, a.jsx)(o.J, { label: c.intl.string(c.t.pSZKvM), required: !0, value: l, onSelect: x, minDate: h }),
                (0, a.jsx)(u.c, { label: c.intl.string(c.t.GOmEb8), required: !0, value: l, onChange: x }),
            ],
        }),
    });
}
