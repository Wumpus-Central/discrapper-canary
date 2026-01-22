n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} nicht ausgew\xe4hlt.`,
    longPressToSelect: "Gedrückt halten, um Auswahlmodus zu öffnen.",
    select: "Auswählen",
    selectedAll: "Alle Elemente ausgewählt.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Keine Elemente ausgewählt",
            one: () => `${t.number(e.count)} Element ausgew\xe4hlt`,
            other: () => `${t.number(e.count)} Elemente ausgew\xe4hlt`,
        })}.`,
    selectedItem: (e) => `${e.item} ausgew\xe4hlt.`,
};
