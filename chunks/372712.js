"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Element ${e.item} ni izbran.`,
    longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
    select: "Izberite",
    selectedAll: "Vsi elementi so izbrani.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Noben element ni izbran", one: () => `${t.number(e.count)} element je izbran`, other: () => `${t.number(e.count)} elementov je izbranih` })}.`,
    selectedItem: (e) => `Element ${e.item} je izbran.`,
};
