n.d(t, { A: () => r, D: () => o });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(228366),
    s = n(573879);
function r() {
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("16946"), n.e("84739"), n.e("79582"), n.e("28386")]).then(
                n.bind(n, 845542),
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
                n.e("35316"),
                n.e("32048"),
                n.e("56643"),
                n.e("91059"),
                n.e("80963"),
                n.e("25291"),
                n.e("60235"),
                n.e("73122"),
                n.e("8979"),
                n.e("89545"),
                n.e("4736"),
                n.e("72238"),
                n.e("90966"),
                n.e("75080"),
                n.e("1490"),
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
