n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(189213),
    s = n(150934),
    _ = n(192308),
    l = n(231723),
    o = n(817281),
    E = n(964404),
    d = n(985018);
function c(e) {
    let { onConfirm: t, onCancel: n, ..._ } = e,
        [l, E] = r.useState(!1);
    return (
        r.useEffect(() => {
            o.Ay.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: l });
        }, [l]),
        (0, i.jsx)(a.Modal, {
            ..._,
            size: "md",
            title: d.intl.string(d.t.ye21jI),
            subtitle: d.intl.string(d.t.hbagWD),
            actions: [
                {
                    text: d.intl.string(d.t.B8pz37),
                    onClick: () => {
                        n?.(), _.onClose();
                    },
                    variant: "secondary",
                },
                {
                    text: d.intl.string(d.t.makWn9),
                    onClick: () => {
                        t(), _.onClose();
                    },
                    variant: "primary",
                },
            ],
            actionBarInput: (0, i.jsx)(s.S, { checked: l, onChange: (e) => E(e), label: d.intl.string(d.t.wGAwOS) }),
        })
    );
}
function u(e) {
    let { onConfirm: t, onCancel: n, usesPopoutContext: r = !1 } = e;
    E.Ay.disableEmbeddedActivityPopOutAlert
        ? t()
        : (0, _.openModal)((e) => (0, i.jsx)(c, { ...e, onConfirm: t, onCancel: n }), {}, r ? l.KX : void 0);
}
