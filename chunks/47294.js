"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(150934),
    o = n(192308),
    l = n(231723),
    u = n(817281),
    d = n(964404),
    c = n(985018);
function _(e) {
    let { onConfirm: t, onCancel: n, ...o } = e,
        [l, d] = i.useState(!1);
    return (
        i.useEffect(() => {
            u.Ay.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: l });
        }, [l]),
        (0, r.jsx)(s.Modal, {
            ...o,
            size: "md",
            title: c.intl.string(c.t.ye21jI),
            subtitle: c.intl.string(c.t.hbagWD),
            actions: [
                {
                    text: c.intl.string(c.t.B8pz37),
                    onClick: () => {
                        n?.(), o.onClose();
                    },
                    variant: "secondary",
                },
                {
                    text: c.intl.string(c.t.makWn9),
                    onClick: () => {
                        t(), o.onClose();
                    },
                    variant: "primary",
                },
            ],
            actionBarInput: (0, r.jsx)(a.S, { checked: l, onChange: (e) => d(e), label: c.intl.string(c.t.wGAwOS) }),
        })
    );
}
function f(e) {
    let { onConfirm: t, onCancel: n, usesPopoutContext: i = !1 } = e;
    d.Ay.disableEmbeddedActivityPopOutAlert
        ? t()
        : (0, o.openModal)((e) => (0, r.jsx)(_, { ...e, onConfirm: t, onCancel: n }), {}, i ? l.KX : void 0);
}
