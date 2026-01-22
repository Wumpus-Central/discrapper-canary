n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} ej markerat.`,
    longPressToSelect: "Tryck länge när du vill öppna väljarläge.",
    select: "Markera",
    selectedAll: "Alla markerade objekt.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Inga markerade objekt",
            one: () => `${t.number(e.count)} markerat objekt`,
            other: () => `${t.number(e.count)} markerade objekt`,
        })}.`,
    selectedItem: (e) => `${e.item} markerat.`,
};
