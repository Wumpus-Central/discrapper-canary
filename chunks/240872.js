n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(952265),
    a = n(468026),
    s = n(388032);
let o = {
    show(e) {
        let { title: t, body: n, confirmColor: s, confirmText: o, cancelText: l, onConfirm: u, onCancel: c, onCloseCallback: d, secondaryConfirmText: f, onConfirmSecondary: _, className: p, titleClassName: h, contextKey: m } = e;
        (0, r.h7)(
            (e) =>
                (0, i.jsx)(a.default, {
                    ...e,
                    title: t,
                    body: n,
                    confirmColor: s,
                    confirmText: o,
                    cancelText: l,
                    onConfirm: u,
                    onCancel: c,
                    secondaryConfirmText: f,
                    onConfirmSecondary: _,
                    className: p,
                    titleClassName: h
                }),
            { onCloseCallback: d },
            m
        );
    },
    close() {},
    confirm(e) {
        return new Promise((t) => {
            this.show({
                onConfirm() {
                    t(!0);
                },
                cancelText: s.intl.string(s.t['ETE/oK']),
                onCancel() {
                    t(!1);
                },
                ...e
            });
        });
    }
};
