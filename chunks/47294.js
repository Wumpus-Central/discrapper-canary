var i = n(477900),
    r = n(582128),
    a = n(189213),
    s = n(150934),
    l = n(192308),
    o = n(817281),
    d = n(964404),
    c = n(792996);
function u(e) {
    let { onConfirm: t, onCancel: n, ...l } = e,
        [d, u] = r.useState(!1);
    return (
        r.useEffect(() => {
            o.Ay.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: d });
        }, [d]),
        (0, i.jsx)(a.a, {
            ...l,
            size: "md",
            title: c.intl.string(c.t.ye21jI),
            subtitle: c.intl.string(c.t.hbagWD),
            actions: [
                {
                    text: c.intl.string(c.t.B8pz37),
                    onClick: function () {
                        (n?.(), l.onClose());
                    },
                    variant: "secondary",
                },
                {
                    text: c.intl.string(c.t.makWn9),
                    onClick: function () {
                        (t(), l.onClose());
                    },
                    variant: "primary",
                },
            ],
            actionBarInput: (0, i.jsx)(s.S, { checked: d, onChange: (e) => u(e), label: c.intl.string(c.t.wGAwOS) }),
        })
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onConfirm: t, onCancel: n, usesPopoutContext: r = !1 } = e;
            d.Ay.disableEmbeddedActivityPopOutAlert
                ? t()
                : (0, l.qf)((e) => (0, i.jsx)(u, { ...e, onConfirm: t, onCancel: n }), {}, r ? "popout" : void 0);
        },
    },
);
