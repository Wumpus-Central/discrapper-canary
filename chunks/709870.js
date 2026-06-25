"use strict";
n.d(t, { $: () => s });
var i = n(627968);
n(64700);
var r = n(192308);
function s(e) {
    let { orbsAmount: t } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await n.e("21633").then(n.bind(n, 903256));
        return (n) => (0, i.jsx)(e, { orbsAmount: t, ...n });
    });
}
