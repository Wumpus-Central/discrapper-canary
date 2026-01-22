n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} pole valitud.`,
    longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
    select: "Vali",
    selectedAll: "Kõik üksused valitud.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Üksusi pole valitud",
            one: () => `${t.number(e.count)} \xfcksus valitud`,
            other: () => `${t.number(e.count)} \xfcksust valitud`,
        })}.`,
    selectedItem: (e) => `${e.item} valitud.`,
};
