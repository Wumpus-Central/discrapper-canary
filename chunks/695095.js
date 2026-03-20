"use strict";
n.d(t, { A: () => s });
var i = n(64700);
function s(e, t) {
    let [n, s] = i.useState(() => ({ items: e, orderedItems: e }));
    return (
        n.items !== e &&
            s((n) => {
                let i = [
                    ...n.orderedItems.map((n) => e.find((e) => t(n, e))).filter((e) => null != e),
                    ...e.filter((e) => !n.orderedItems.some((n) => t(n, e))),
                ];
                return { items: e, orderedItems: i };
            }),
        n.orderedItems
    );
}
