n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} er ikke valgt.`,
    longPressToSelect: "Bruk et langt trykk for å gå inn i valgmodus.",
    select: "Velg",
    selectedAll: "Alle elementer er valgt.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Ingen elementer er valgt",
            one: () => `${t.number(e.count)} element er valgt`,
            other: () => `${t.number(e.count)} elementer er valgt`,
        })}.`,
    selectedItem: (e) => `${e.item} er valgt.`,
};
