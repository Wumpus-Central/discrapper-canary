"use strict";
n.d(t, { A: () => o, D: () => l });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(228366),
    a = n(573879);
function o() {
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("16946"), n.e("84739"), n.e("79582"), n.e("28386")]).then(
                n.bind(n, 845542),
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
function l() {
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("95664"),
                n.e("54266"),
                n.e("19248"),
                n.e("29690"),
                n.e("25291"),
                n.e("95429"),
                n.e("98189"),
                n.e("60235"),
                n.e("73122"),
                n.e("8979"),
                n.e("4736"),
                n.e("89545"),
                n.e("48370"),
                n.e("72238"),
                n.e("90966"),
                n.e("75080"),
                n.e("1490"),
            ]).then(n.bind(n, 365225));
            return (t) => (0, i.jsx)(e, { ...t, onBackPressed: o });
        },
        {
            onCloseCallback: () => {
                s.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: a.Gl,
        },
    );
}
