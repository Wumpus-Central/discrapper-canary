"use strict";
l.d(t, { O: () => s });
var n = l(627968);
l(64700);
var i = l(192308);
function s(e, t) {
    return (0, i.openModalLazy)(async () => {
        let { default: i } = await l.e("86743").then(l.bind(l, 572874));
        return (l) =>
            (0, n.jsx)(i, {
                ...l,
                onConfirm: () => {
                    l.onClose(), t();
                },
                channel: e,
            });
    });
}
