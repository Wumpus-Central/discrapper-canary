"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(189213),
    a = n(150934),
    o = n(192308),
    l = n(231723),
    u = n(817281),
    c = n(964404),
    d = n(375708);
function _(e) {
    let { onConfirm: t, onCancel: n, ...o } = e,
        [l, c] = r.useState(!1);
    return (
        r.useEffect(() => {
            u.Ay.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: l });
        }, [l]),
        (0, i.jsx)(s.Modal, {
            ...o,
            size: "md",
            title: d.intl.string(d.t.ye21jI),
            subtitle: d.intl.string(d.t.hbagWD),
            actions: [
                {
                    text: d.intl.string(d.t.B8pz37),
                    onClick: () => {
                        n?.(), o.onClose();
                    },
                    variant: "secondary",
                },
                {
                    text: d.intl.string(d.t.makWn9),
                    onClick: () => {
                        t(), o.onClose();
                    },
                    variant: "primary",
                },
            ],
            actionBarInput: (0, i.jsx)(a.S, { checked: l, onChange: (e) => c(e), label: d.intl.string(d.t.wGAwOS) }),
        })
    );
}
function f(e) {
    let { onConfirm: t, onCancel: n, usesPopoutContext: r = !1 } = e;
    c.Ay.disableEmbeddedActivityPopOutAlert
        ? t()
        : (0, o.openModal)((e) => (0, i.jsx)(_, { ...e, onConfirm: t, onCancel: n }), {}, r ? l.KX : void 0);
}
