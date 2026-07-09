n.d(t, { A: () => r, D: () => o });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(228366),
    a = n(573879);
function r() {
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("91858"), n.e("66243"), n.e("79582"), n.e("28386")]).then(
                n.bind(n, 623161),
            );
            return (t) => (0, i.jsx)(e, { ...t });
        },
        {
            onCloseCallback: () => {
                s.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: a.ov,
        },
    );
}
function o() {
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("31880"),
                n.e("79624"),
                n.e("11183"),
                n.e("79255"),
                n.e("71299"),
                n.e("12299"),
                n.e("60235"),
                n.e("50741"),
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
                s.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: a.Gl,
        },
    );
}
