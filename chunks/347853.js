n.d(t, { A: () => r, D: () => o });
var a = n(627968);
n(64700);
var s = n(397927),
    i = n(73153),
    l = n(573879);
function r() {
    (0, s.mMO)(
        async () => {
            let { default: e } = await n.e("28386").then(n.bind(n, 623161));
            return (t) => (0, a.jsx)(e, { ...t });
        },
        {
            onCloseCallback: () => {
                i.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: l.ov,
        },
    );
}
function o() {
    (0, s.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("88890"), n.e("34078"), n.e("64171")]).then(n.bind(n, 365225));
            return (t) => (0, a.jsx)(e, { ...t, onBackPressed: r });
        },
        {
            onCloseCallback: () => {
                i.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: l.Gl,
        },
    );
}
