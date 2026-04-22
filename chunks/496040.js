"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(192308);
function s(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e("66009").then(n.bind(n, 33216));
        return (n) => (0, r.jsx)(i, { ...n, channelId: e, messageId: t });
    });
}
