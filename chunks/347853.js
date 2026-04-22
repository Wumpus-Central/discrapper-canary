n.d(t, { A: () => r, D: () => o });
var i = n(627968);
n(64700);
var s = n(192308),
    l = n(73153),
    a = n(573879);
function r() {
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await n.e("28386").then(n.bind(n, 623161));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        {
            onCloseCallback: () => {
                l.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: a.ov,
        },
    );
}
function o() {
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("88890"), n.e("34078"), n.e("83690")]).then(n.bind(n, 365225));
            return (t) => (0, i.jsx)(e, { ...t, onBackPressed: r });
        },
        {
            onCloseCallback: () => {
                l.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: a.Gl,
        },
    );
}
