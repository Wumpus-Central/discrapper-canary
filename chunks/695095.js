n.d(t, { A: () => l });
var i = n(64700);
function l(e, t) {
    let [n, l] = i.useState(() => ({ items: e, orderedItems: e }));
    return (
        n.items !== e &&
            l((n) => {
                let i = [
                    ...n.orderedItems.map((n) => e.find((e) => t(n, e))).filter((e) => null != e),
                    ...e.filter((e) => !n.orderedItems.some((n) => t(n, e))),
                ];
                return { items: e, orderedItems: i };
            }),
        n.orderedItems
    );
}
