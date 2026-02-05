"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} nepasirinkta.`,
    longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
    select: "Pasirinkti",
    selectedAll: "Pasirinkti visi elementai.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Nepasirinktas nė vienas elementas", one: () => `Pasirinktas ${t.number(e.count)} elementas`, other: () => `Pasirinkta element\u{173}: ${t.number(e.count)}` })}.`,
    selectedItem: (e) => `Pasirinkta: ${e.item}.`,
};
