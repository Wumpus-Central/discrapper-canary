"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} neselectat.`,
    longPressToSelect: "Apăsați lung pentru a intra \xeen modul de selectare.",
    select: "Selectare",
    selectedAll: "Toate elementele selectate.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Niciun element selectat", one: () => `${t.number(e.count)} element selectat`, other: () => `${t.number(e.count)} elemente selectate` })}.`,
    selectedItem: (e) => `${e.item} selectat.`,
};
