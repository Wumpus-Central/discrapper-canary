var i = r(200651);
r(192379);
var a = r(952265),
    o = r(468026),
    s = r(388032);
n.Z = {
    show(e) {
        let { title: n, body: r, confirmColor: s, confirmText: l, cancelText: u, onConfirm: c, onCancel: d, onCloseCallback: f, secondaryConfirmText: p, onConfirmSecondary: h, className: _, titleClassName: m, contextKey: g } = e;
        (0, a.h7)(
            (e) =>
                (0, i.jsx)(o.default, {
                    ...e,
                    title: n,
                    body: r,
                    confirmColor: s,
                    confirmText: l,
                    cancelText: u,
                    onConfirm: c,
                    onCancel: d,
                    secondaryConfirmText: p,
                    onConfirmSecondary: h,
                    className: _,
                    titleClassName: m
                }),
            { onCloseCallback: f },
            g
        );
    },
    close() {},
    confirm(e) {
        return new Promise((n) => {
            this.show({
                onConfirm() {
                    n(!0);
                },
                cancelText: s.intl.string(s.t['ETE/oK']),
                onCancel() {
                    n(!1);
                },
                ...e
            });
        });
    }
};
