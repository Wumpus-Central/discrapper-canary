"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} nicht ausgew\xe4hlt.`,
    longPressToSelect: "Gedr\xfcckt halten, um Auswahlmodus zu \xf6ffnen.",
    select: "Ausw\xe4hlen",
    selectedAll: "Alle Elemente ausgew\xe4hlt.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Keine Elemente ausgew\xe4hlt", one: () => `${t.number(e.count)} Element ausgew\xe4hlt`, other: () => `${t.number(e.count)} Elemente ausgew\xe4hlt` })}.`,
    selectedItem: (e) => `${e.item} ausgew\xe4hlt.`,
};
