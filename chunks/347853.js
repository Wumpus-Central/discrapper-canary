n.d(t, { A: () => r, D: () => o });
var i = n(477900);
n(582128);
var l = n(192308),
    a = n(228366),
    s = n(573879);
function r() {
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("59402"), n.e("761227"), n.e("179582"), n.e("28386")]).then(
                n.bind(n, 623161),
            );
            return (t) => (0, i.jsx)(e, { ...t });
        },
        {
            onCloseCallback: () => {
                a.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: s.ov,
        },
    );
}
function o() {
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("156356"),
                n.e("515064"),
                n.e("749747"),
                n.e("925263"),
                n.e("424307"),
                n.e("960235"),
                n.e("373122"),
                n.e("808979"),
                n.e("989545"),
                n.e("104736"),
                n.e("772238"),
                n.e("290966"),
                n.e("975080"),
                n.e("201490"),
            ]).then(n.bind(n, 365225));
            return (t) => (0, i.jsx)(e, { ...t, onBackPressed: r });
        },
        {
            onCloseCallback: () => {
                a.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: s.Gl,
        },
    );
}
