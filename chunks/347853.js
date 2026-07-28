"use strict";
n.d(t, { A: () => l, D: () => o });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(228366),
    s = n(573879);
function l() {
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("59402"), n.e("61227"), n.e("79582"), n.e("28386")]).then(
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
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("56356"),
                n.e("15064"),
                n.e("49747"),
                n.e("78227"),
                n.e("5315"),
                n.e("24307"),
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
            return (t) => (0, i.jsx)(e, { ...t, onBackPressed: l });
        },
        {
            onCloseCallback: () => {
                a.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: s.Gl,
        },
    );
}
