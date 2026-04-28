n.d(t, { A: () => r, D: () => o });
var i = n(627968);
n(64700);
var s = n(192308),
    l = n(228366),
    a = n(573879);
function r() {
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("80813"), n.e("79582"), n.e("28386")]).then(n.bind(n, 623161));
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
            let { default: e } = await Promise.all([
                n.e("93816"),
                n.e("19248"),
                n.e("61207"),
                n.e("25291"),
                n.e("73122"),
                n.e("8979"),
                n.e("4736"),
                n.e("89545"),
                n.e("72238"),
                n.e("90966"),
                n.e("19705"),
                n.e("57993"),
                n.e("57335"),
                n.e("1490"),
            ]).then(n.bind(n, 365225));
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
