"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} niet geselecteerd.`,
    longPressToSelect: "Druk lang om de selectiemodus te openen.",
    select: "Selecteren",
    selectedAll: "Alle items geselecteerd.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Geen items geselecteerd", one: () => `${t.number(e.count)} item geselecteerd`, other: () => `${t.number(e.count)} items geselecteerd` })}.`,
    selectedItem: (e) => `${e.item} geselecteerd.`,
};
