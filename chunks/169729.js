"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} non selezionato.`,
    longPressToSelect: "Premi a lungo per passare alla modalit\xe0 di selezione.",
    select: "Seleziona",
    selectedAll: "Tutti gli elementi selezionati.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Nessun elemento selezionato", one: () => `${t.number(e.count)} elemento selezionato`, other: () => `${t.number(e.count)} elementi selezionati` })}.`,
    selectedItem: (e) => `${e.item} selezionato.`,
};
