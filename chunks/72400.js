"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} not selected.`,
    select: "Select",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "No items selected", one: () => `${t.number(e.count)} item selected`, other: () => `${t.number(e.count)} items selected` })}.`,
    selectedAll: "All items selected.",
    selectedItem: (e) => `${e.item} selected.`,
    longPressToSelect: "Long press to enter selection mode.",
};
