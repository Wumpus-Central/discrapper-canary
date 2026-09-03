n.d(t, { A: () => E });
var i = n(477900),
    r = n(582128),
    a = n(189213),
    s = n(150934),
    l = n(192308),
    o = n(231723),
    d = n(817281),
    c = n(742023),
    u = n(375708);
function _(e) {
    let { onConfirm: t, onCancel: n, ...l } = e,
        [o, c] = r.useState(!1);
    return (
        r.useEffect(() => {
            d.Ay.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: o });
        }, [o]),
        (0, i.jsx)(a.Modal, {
            ...l,
            size: "md",
            title: u.intl.string(u.t.ye21jI),
            subtitle: u.intl.string(u.t.hbagWD),
            actions: [
                {
                    text: u.intl.string(u.t.B8pz37),
                    onClick: function () {
                        n?.(), l.onClose();
                    },
                    variant: "secondary",
                },
                {
                    text: u.intl.string(u.t.makWn9),
                    onClick: function () {
                        t(), l.onClose();
                    },
                    variant: "primary",
                },
            ],
            actionBarInput: (0, i.jsx)(s.S, { checked: o, onChange: (e) => c(e), label: u.intl.string(u.t.wGAwOS) }),
        })
    );
}
function E(e) {
    let { onConfirm: t, onCancel: n, usesPopoutContext: r = !1 } = e;
    c.Ay.disableEmbeddedActivityPopOutAlert
        ? t()
        : (0, l.openModal)((e) => (0, i.jsx)(_, { ...e, onConfirm: t, onCancel: n }), {}, r ? o.KX : void 0);
}
