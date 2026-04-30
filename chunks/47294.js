n.d(t, { A: () => u });
var i = n(627968),
    a = n(64700),
    r = n(189213),
    s = n(150934),
    l = n(192308),
    o = n(231723),
    d = n(817281),
    c = n(964404),
    _ = n(985018);
function E(e) {
    let { onConfirm: t, onCancel: n, ...l } = e,
        [o, c] = a.useState(!1);
    return (
        a.useEffect(() => {
            d.Ay.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: o });
        }, [o]),
        (0, i.jsx)(r.Modal, {
            ...l,
            size: "md",
            title: _.intl.string(_.t.ye21jI),
            subtitle: _.intl.string(_.t.hbagWD),
            actions: [
                {
                    text: _.intl.string(_.t.B8pz37),
                    onClick: () => {
                        n?.(), l.onClose();
                    },
                    variant: "secondary",
                },
                {
                    text: _.intl.string(_.t.makWn9),
                    onClick: () => {
                        t(), l.onClose();
                    },
                    variant: "primary",
                },
            ],
            actionBarInput: (0, i.jsx)(s.S, { checked: o, onChange: (e) => c(e), label: _.intl.string(_.t.wGAwOS) }),
        })
    );
}
function u(e) {
    let { onConfirm: t, onCancel: n, usesPopoutContext: a = !1 } = e;
    c.Ay.disableEmbeddedActivityPopOutAlert
        ? t()
        : (0, l.openModal)((e) => (0, i.jsx)(E, { ...e, onConfirm: t, onCancel: n }), {}, a ? o.KX : void 0);
}
