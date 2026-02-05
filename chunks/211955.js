"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} ikke valgt.`,
    longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
    select: "V\xe6lg",
    selectedAll: "Alle elementer valgt.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Ingen elementer valgt", one: () => `${t.number(e.count)} element valgt`, other: () => `${t.number(e.count)} elementer valgt` })}.`,
    selectedItem: (e) => `${e.item} valgt.`,
};
