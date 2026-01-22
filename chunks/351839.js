n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} non s\xe9lectionn\xe9.`,
    longPressToSelect: "Appuyez de manière prolongée pour passer en mode de sélection.",
    select: "Sélectionner",
    selectedAll: "Tous les éléments sélectionnés.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Aucun élément sélectionné",
            one: () => `${t.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: () => `${t.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`,
        })}.`,
    selectedItem: (e) => `${e.item} s\xe9lectionn\xe9.`,
};
